// ==================== MULTI-LANGUAGE SUPPORT (EN/DE ONLY) ====================

import {
  LANGUAGE_DICTIONARIES,
  type LanguageCode,
  SUPPORTED_LANGUAGES,
} from './dictionaries';

export type { LanguageCode };

export type CompressionLevel = "gentle" | "balanced" | "aggressive";

// ==================== STATISTICS TRACKING ====================

interface CompressionStats {
  totalCompressions: number;
  totalCharsOriginal: number;
  totalCharsCompressed: number;
  lastUpdated: string;
}

/**
 * Per-instance stats to avoid stale data during hot-reload.
 * Each Troglodyte instance gets its own stats object.
 */
function createStats(): CompressionStats {
  return {
    totalCompressions: 0,
    totalCharsOriginal: 0,
    totalCharsCompressed: 0,
    lastUpdated: new Date().toISOString(),
  };
}

// ==================== LANGUAGE DETECTION (EN/DE ONLY) - IMPROVED ====================

/**
 * Detects whether text is English or German using weighted word frequency analysis.
 * 
 * Strategy:
 * - High-weight words: articles, pronouns, common function words (strong signal)
 * - Low-weight words: technical terms that appear in both languages' code contexts
 * - Confidence threshold: if ratio < 1.5:1, default to English (safer fallback)
 */

// High-confidence English indicators — rare or absent in German
const EN_HIGH = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 
  'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must',
  'this', 'that', 'these', 'those', 'it', 'its', 'they', 'them', 'their', 'there',
  'here', 'what', 'when', 'where', 'who', 'how', 'why', 'which', 'not', 'no', 'nor',
  'but', 'and', 'or', 'for', 'so', 'if', 'then', 'than', 'too', 'very', 'just',
  'about', 'above', 'after', 'again', 'all', 'also', 'any', 'because', 'before',
  'between', 'both', 'can', 'each', 'from', 'further', 'get', 'got', 'him', 'his',
  'into', 'more', 'most', 'other', 'our', 'out', 'over', 'own', 'same', 'some',
  'such', 'through', 'under', 'until', 'up', 'while',
]);

// High-confidence German indicators — rare or absent in English
const DE_HIGH = new Set([
  'der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einer', 'einem', 'eines',
  'ich', 'mich', 'mir', 'du', 'dich', 'dir', 'er', 'sie', 'es', 'wir', 'uns', 'ihr', 
  'euch', 'ist', 'sind', 'war', 'waren', 'sein', 'haben', 'hat', 'habe',
  'und', 'oder', 'aber', 'nicht', 'auch', 'sehr', 'viel', 'mehr', 
  'alle', 'alles', 'dieser', 'diese', 'dieses', 'jeder', 'jede', 'jedes', 'kein', 
  'keine', 'mit', 'nach', 'von', 'zu', 'bei', 'auf', 'aus', 'in', 'an',
  'für', 'um', 'gegen', 'ohne', 'durch', 'wie', 'was', 'wenn', 'weil',
  'sollte', 'könnte', 'müsste', 'darf', 'dürfe', 'mag', 'möge', 'will', 'wollen',
]);

// Low-weight words that appear in both languages (code context noise) — excluded from detection
const NEUTRAL_WORDS = new Set([
  // Common English/German overlap or code keywords
  'code', 'function', 'return', 'class', 'import', 'export', 
  'const', 'let', 'var', 'if', 'else', 'for', 'while',
  'wird', 'würde', 'daß', // German words that look English-ish or are archaic
]);

/**
 * Detect language with confidence threshold.
 * Returns 'en' as default if text is too short or signal is weak.
 */
function detectLanguage(text: string): LanguageCode {
  const words = text.toLowerCase().match(/\b[a-zäöüß]{3,}\b/g) || [];
  
  // Need minimum signal to make a decision
  if (words.length < 5) return 'en';
  
  let enScore = 0;
  let deScore = 0;
  
  for (const word of words) {
    if (NEUTRAL_WORDS.has(word)) continue; // Skip code/technical noise
    
    if (EN_HIGH.has(word)) enScore++;
    else if (DE_HIGH.has(word)) deScore++;
  }
  
  // Confidence threshold: need at least 1.5x ratio to commit
  const total = enScore + deScore;
  if (total === 0) return 'en';
  
  const ratio = Math.max(enScore, deScore) / Math.min(enScore, deScore);
  if (ratio < 1.5) return 'en'; // Weak signal → default to English
  
  return deScore > enScore ? 'de' : 'en';
}

// ==================== SMART MODE DETECTION ====================

/**
 * Detects if the prompt is technical (code-heavy) or conversational.
 * Returns true if technical, false if conversational.
 */
function detectTechnicalContext(text: string): boolean {
  // Count code-like tokens vs natural language tokens
  const codePatterns = [/\{[^}]+\}/g, /<[^>]+>/g, /\b(?:const|let|var|function|class|import|export)\b/g];
  let codeScore = 0;
  
  for (const pattern of codePatterns) {
    const matches = text.match(pattern);
    if (matches) codeScore += matches.length;
  }
  
  // If more than 10% of tokens are code-like, consider it technical
  const totalTokens = text.split(/\s+/).length;
  return totalTokens > 0 && (codeScore / totalTokens) > 0.1;
}

// ==================== TROGLODYTE CLASS ====================

// Pre-compiled phrase structure for performance optimization
interface CompiledPhrase {
  phrase: string;
  replacement: string | undefined;
  regex: RegExp;
}

export class Troglodyte {
  private phrasesAndLogic: Record<string, string>;
  private synonyms: Record<string, string>;
  private cachedBlacklists: Map<LanguageCode, Map<CompressionLevel, Set<string>>>;
  private stats: CompressionStats;
  private readonly MAX_COMPRESSIONS_BEFORE_RESET = 10000;
  private readonly MAX_CHARS_BEFORE_RESET = 10_000_000;
  
  // Pre-sorted phrases with pre-compiled regexes (PERFORMANCE FIX)
  private compiledPhrases: CompiledPhrase[];

  constructor(dictionaries: {
    phrases: Record<string, string>;
    blacklist: string[];
    synonyms?: Record<string, string>;
  }) {
    this.phrasesAndLogic = { ...dictionaries.phrases };
    this.synonyms = dictionaries.synonyms || {};
    
    // Pre-sort phrases by length (longest first) and pre-compile regexes
    const wordChar = "a-zA-Z0-9_'ßäöüÄÖÜ";
    this.compiledPhrases = Object.entries(this.phrasesAndLogic)
      .filter(([phrase]) => phrase && phrase.length >= 2)
      .sort((a, b) => b[0].length - a[0].length)
      .map(([phrase, replacement]) => ({
        phrase,
        replacement,
        regex: new RegExp(`(?<![${wordChar}])${this.escapeRegex(phrase)}(?![${wordChar}])`, 'gi')
      }));
    
    this.cachedBlacklists = new Map();
    for (const langCode of SUPPORTED_LANGUAGES) {
      const langDict = LANGUAGE_DICTIONARIES[langCode];
      const levelMap = new Map<CompressionLevel, Set<string>>();
      
      ['gentle', 'balanced', 'aggressive'].forEach((level) => {
        const lvl = level as CompressionLevel;
        levelMap.set(lvl, new Set(langDict[lvl].map(w => w.toLowerCase())));
      });
      
      this.cachedBlacklists.set(langCode, levelMap);
    }
    
    // Initialize per-instance stats
    this.stats = createStats();
  }

  private escapeRegex(str: string): string {
    const specialChars = ['\\', '^', '$', '*', '+', '?', '(', ')', '.', '{', '}', '|', '[', ']', '/'];
    let result = str;
    for (const ch of specialChars) {
      result = result.split(ch).join('\\' + ch);
    }
    return result;
  }

  compress(prompt: string, options?: { 
    level?: CompressionLevel;
    protectUrls?: boolean;
    protectNumbers?: boolean;
    protectHeaders?: boolean;
    protectFilePaths?: boolean;
    protectJsonXml?: boolean; // NEW
    language?: LanguageCode;
    smartMode?: boolean;      // NEW
    verbose?: boolean;
  }): string {
    // INPUT VALIDATION (SECURITY/STABILITY)
    if (!prompt || typeof prompt !== 'string') {
      console.warn('[Troglodyte] Invalid input: prompt must be a non-empty string');
      return prompt || '';
    }

    const MAX_INPUT_LENGTH = 1_000_000; // 1MB limit to prevent DoS
    if (prompt.length > MAX_INPUT_LENGTH) {
      console.warn(`[Troglodyte] Input exceeds ${MAX_INPUT_LENGTH} char limit, truncating...`);
    }

    const level = options?.level ?? "balanced";
    const protectUrls = options?.protectUrls ?? true;
    const protectNumbers = options?.protectNumbers ?? true;
    const protectHeaders = options?.protectHeaders ?? true;
    const protectFilePaths = options?.protectFilePaths ?? true;
    const protectJsonXml = options?.protectJsonXml ?? true; // NEW default
    const smartMode = options?.smartMode ?? true;          // NEW default
    
    let langCode: LanguageCode;
    if (options?.language) {
      langCode = options.language;
    } else {
      langCode = detectLanguage(prompt);
    }
    
    const debug = options?.verbose ?? false;
    
    if (debug) {
      console.log(`[Troglodyte] Detected language: ${langCode} for prompt: "${prompt.substring(0, 80)}..."`);
    }

    let text = prompt;
    const protectedItems: string[] = [];

    const levelBlacklistMap = this.cachedBlacklists.get(langCode);
    if (!levelBlacklistMap) {
      console.warn(`[Troglodyte] Unknown language code: ${langCode}, falling back to English`);
      langCode = 'en';
    }
    let levelBlacklist = this.cachedBlacklists.get(langCode || 'en')!.get(level)!;

    // Smart Mode Adjustment (NEW) — cached to avoid double computation
    const isTechnical = smartMode && detectTechnicalContext(prompt);
    let synonymReplacementEnabled = !isTechnical;
    if (isTechnical) {
      if (debug) console.log('[Troglodyte] Smart Mode: Detected technical context. Reducing synonym replacement.');
      // In technical mode, disable synonym replacement to preserve code readability
    }

    // ==================== PROTECTION PHASE ====================
    let placeholderCounter = 0;
    const MAX_PLACEHOLDERS = 0xFFFFF; // ~1 million placeholders before overflow
    const BREAK_EVEN_LENGTH = 8; // Minimum length for protection to be worthwhile
    
    // Check if input already contains private use area characters (edge case)
    const hasExistingPuaChars = /[\uE000-\uF8FF]/.test(text);
    if (hasExistingPuaChars && debug) {
      console.log('[Troglodyte] Warning: Input contains PUA characters, may cause conflicts');
    }
    
    const protectIfWorthwhile = (match: string, minLen: number = BREAK_EVEN_LENGTH): string => {
      if (match.length <= minLen) return match;
      // Check for overflow before protecting
      if (placeholderCounter >= MAX_PLACEHOLDERS) {
        console.warn('[Troglodyte] ⚠️ Placeholder limit reached, skipping protection.');
        return match; // Return original without protection
      }
      protectedItems.push(match);
      const placeholder = String.fromCodePoint(0xE000 + placeholderCounter++);
      return placeholder;
    };

    // 1. Protect code blocks
    text = text.replace(/(```[\s\S]*?```|`[^`]+`)/g, (match) => {
      return protectIfWorthwhile(match, 15);
    });

    // 2. Protect URLs
    if (protectUrls) {
      text = text.replace(/(https?:\/\/[^\s<>()"'\\[\]]+|www\.[^\s<>()"'\\[\]]+)/gi, (match) => {
        return protectIfWorthwhile(match, 20);
      });
    }

    // 3. Protect version numbers and software names with dots
    if (protectNumbers) {
      text = text.replace(/\b(v\d+\.\d+(?:\.\d+)?)\b/g, protectIfWorthwhile);
      text = text.replace(/\b([A-Z][a-zA-Z0-9]*\.[a-zA-Z0-9]+)\b/g, (match) => {
        return protectIfWorthwhile(match, 6);
      });
      text = text.replace(/(#\d{3,})/g, protectIfWorthwhile);
      text = text.replace(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/gi, protectIfWorthwhile);
    }

    // 4. Protect markdown headers
    if (protectHeaders) {
      text = text.replace(/(^|\n)(#{1,6}\s+.+)/g, (match, newline, header) => {
        const protectedHeader = protectIfWorthwhile(header, 12);
        return `${newline}${protectedHeader}`;
      });
    }

    // 5. Protect file paths - MUST come before synonym replacement!
    if (protectFilePaths) {
      // Windows absolute paths FIRST (C:\...) with optional extension
      text = text.replace(/([A-Za-z]:[\/\\][^<>"|?*\r\n]{10,})(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
      
      // Relative paths with ./ or ../ - match complete path including extension
      text = text.replace(/(\.\.?[\/\\][^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
      
      // Linux/macOS absolute paths (/path/to/file) - match complete path including extension
      text = text.replace(/(\/[^\s<>"|?*]{10,})(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
      
      // Home directories (~/file.ext)
      text = text.replace(/(~[\/\\][^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
    }

    // 6. NEW: Protect JSON/XML structures
    if (protectJsonXml) {
      text = text.replace(/(\{[^{}]*\})/g, (match) => protectIfWorthwhile(match, 10)); // Simple JSON
      
      // XML Protection - find ONLY outermost complete <tag>...</tag> structures
      const findOutermostXml = (input: string): { start: number; end: number }[] => {
        const results: { start: number; end: number }[] = [];
        const tagRegex = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*?)>/g;
        let match: RegExpExecArray | null;
        
        while ((match = tagRegex.exec(input)) !== null) {
          const isClosing = match[1] === '/';
          const startPos = match.index;
          const fullTag = match[0];
          
          // Skip closing tags and self-closing tags
          if (isClosing || fullTag.endsWith('/>')) continue;
          
          // SKIP: If this opening tag is inside an already-found structure, skip it
          // This ensures we only protect outermost structures
          const isInsideExisting = results.some(r => startPos > r.start && startPos < r.end);
          if (isInsideExisting) continue;
          
          // Track nesting depth - ANY opening tag increases, ANY closing tag decreases
          let depth = 1;
          let searchPos = startPos + fullTag.length;
          let endPos = -1;
          
          const innerRegex = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*?)>/g;
          let innerMatch: RegExpExecArray | null;
          
          while (depth > 0 && (innerMatch = innerRegex.exec(input)) !== null) {
            if (innerMatch.index < searchPos) { innerRegex.lastIndex = searchPos; continue; }
            
            const innerIsClosing = innerMatch[1] === '/';
            const innerFullTag = innerMatch[0];
            
            if (innerFullTag.endsWith('/>')) {
              // Self-closing tag - doesn't affect depth
            } else if (innerIsClosing) {
              depth--;  // ANY closing tag decreases depth
              if (depth === 0) {
                endPos = innerMatch.index + innerFullTag.length;
              }
            } else {
              depth++;  // ANY opening tag increases depth
            }
            
            searchPos = innerMatch.index + innerFullTag.length;
          }
          
          if (endPos > 0) {
            results.push({ start: startPos, end: endPos });
          }
        }
        return results;
      };
      
      const xmlStructures = findOutermostXml(text);
      // Protect from end to start to preserve indices
      for (let i = xmlStructures.length - 1; i >= 0; i--) {
        const structure = xmlStructures[i];
        const xmlText = text.substring(structure.start, structure.end);
        text = text.substring(0, structure.start) + 
               protectIfWorthwhile(xmlText, 5) + 
               text.substring(structure.end);
      }
    }

    // ==================== COMPRESSION PHASE ====================

    let phraseMatches = 0;
    let phraseCharsSaved = 0;

    // Use pre-compiled phrases from constructor (PERFORMANCE FIX - no regex compilation per call)
    for (const { phrase, replacement, regex } of this.compiledPhrases) {
      // Single-pass replacement with counting to improve performance
      text = text.replace(regex, (match) => {
        const saved = match.length - (replacement?.length || 0);
        phraseMatches++;
        phraseCharsSaved += saved;
        
        return replacement && replacement.trim() !== '' ? replacement : ' ';
      });
    }

    // ==================== WORD FILTERING PHASE ====================
    
    // Split into words while preserving punctuation and spacing
    // FIX: Include '.' in word pattern to keep "Node.js", "v1.0.0" intact
	const wordPattern = /[-a-zA-Z0-9_.'ßäöüÄÖÜ]+/g;
    const tokens = text.split(wordPattern);
    const words = text.match(wordPattern) || [];
    
    if (debug) {
      console.log(`[Troglodyte] Found ${words.length} words in ${tokens.length} token slots`);
    }

    let filteredCount = 0;
    let synonymCount = 0;
    const filteredWords: string[] = [];
    
    for (const word of words) {
      const lower = word.toLowerCase();
      
      // Check blacklist first
      if (levelBlacklist.has(lower)) {
        filteredCount++;
        continue; // Skip this word entirely
      }
      
      // Apply synonym replacement (respects Smart Mode)
      if (synonymReplacementEnabled && this.synonyms[lower]) {
        synonymCount++;
        filteredWords.push(this.synonyms[lower]);
        continue;
      }
      
      // Keep original word
      filteredWords.push(word);
    }

    if (debug) {
      console.log(`[Troglodyte] Blacklist: ${levelBlacklist.size} words, Filtered: ${filteredCount}, Synonyms: ${synonymCount}`);
    }

    // Reconstruct text by interleaving tokens (delimiters) and filtered words
    // PERFORMANCE FIX: Use array join instead of string concatenation (O(n²) → O(n))
    const parts: string[] = [];
    let wordIndex = 0;
    
    for (const token of tokens) {
      parts.push(token); // Add delimiter/punctuation
      if (wordIndex < filteredWords.length) {
        parts.push(filteredWords[wordIndex++]); // Add next kept word
      }
    }

    // Clean up whitespace and punctuation artifacts
    text = parts.join('')
      .replace(/\s+/g, ' ')                           // 1. Collapse multiple spaces to one
      .replace(/\s+([.,?!;:])/g, '$1')                // 2. Remove space BEFORE punctuation
      .replace(/^([.,?!;:]\s*)+/g, '')                // 3. Remove leading orphaned punctuation + spaces
      .replace(/([.,?!;:]\s*)+$/g, '')                // 4. Remove trailing orphaned punctuation + spaces
      .replace(/\s+([.,?!;:])\s+/g, ' ')              // 5. Remove standalone punctuation surrounded by spaces
      .replace(/([.,?!;:]){2,}/g, '$1')               // 6. Collapse consecutive punctuation to one
      .replace(/([.?!;:])(?=[A-ZßÄÖÜ])/g, '$1 ')      // 7. Add space AFTER sentence-ending punct (before CAPITAL)
      .trim();

    // ==================== RESTORATION PHASE ====================
    if (debug) {
      console.log(`[Troglodyte] Restoring ${protectedItems.length} protected items...`);
    }

    // PERFORMANCE FIX: Single-pass replacement using Map (O(n) instead of O(n²))
    if (protectedItems.length > 0) {
      const replacements = new Map<string, string>();
      for (let i = 0; i < protectedItems.length; i++) {
        replacements.set(String.fromCodePoint(0xE000 + i), protectedItems[i]);
      }

      text = text.replace(/[\uE000-\uF8FF]/g, (match) => {
        const restored = replacements.get(match);
        if (!restored) {
          console.warn(`[Troglodyte] ⚠️ Placeholder ${match.codePointAt(0)! - 0xE000} not found!`);
          return match;
        }
        return restored;
      });
    }

    // ==================== METRICS REPORT ====================

    const originalLength = prompt.length;
    const compressedLength = text.length;
    const savings = originalLength - compressedLength;
    const percentSavings = originalLength > 0 ? (savings / originalLength) * 100 : 0;

    if (options?.verbose ?? false) {
      console.log('==================================================\n');
      console.log(`[Troglodyte] Compression Report (${level.toUpperCase()})`);
    console.log('==================================================');
    console.log(`Result: ${originalLength} → ${compressedLength} chars (${percentSavings.toFixed(1)}% ${savings >= 0 ? 'savings' : 'overhead'})`);
    
    const truncate = (s: string, max = 150) => s.length > max ? `${s.substring(0, max)}...` : s;
    console.log(`▶ INPUT:      "${truncate(prompt)}"`);
    console.log(`▶ COMPRESSED: "${truncate(text)}"`);
    
    if (phraseMatches > 0) {
      console.log(`Phrase collapsing: ${phraseMatches} matches, -${phraseCharsSaved} chars`);
    }
    if (filteredCount > 0) {
      console.log(`Word filtering: ${filteredCount} words removed, ${synonymCount} synonyms applied`);
    }
    if (protectedItems.length > 0) {
      console.log(`Protection: ${protectedItems.length} items preserved`);
    }
    
    const cumulativeStats = this.getStats();
    const totalSavings = cumulativeStats.totalCharsOriginal - cumulativeStats.totalCharsCompressed;
    const avgSavingsPercent = cumulativeStats.totalCharsOriginal > 0 
      ? (totalSavings / cumulativeStats.totalCharsOriginal) * 100 : 0;
    console.log(`Cumulative: ${cumulativeStats.totalCompressions} compressions, ${avgSavingsPercent.toFixed(1)}% avg savings`);
      console.log('==================================================\n');
    } // End verbose block

    // Memory management (per-instance)
    if (this.stats.totalCompressions >= this.MAX_COMPRESSIONS_BEFORE_RESET || 
        this.stats.totalCharsOriginal >= this.MAX_CHARS_BEFORE_RESET) {
      console.log('[Troglodyte] Stats threshold reached, resetting');
      this.stats = createStats();
    }

    this.stats.totalCompressions++;
    this.stats.totalCharsOriginal += prompt.length;
    this.stats.totalCharsCompressed += text.length;
    this.stats.lastUpdated = new Date().toISOString();

    return text;
  }

  getStats(): CompressionStats & { totalSavings: number; savingsPercent: number } {
    const totalSavings = this.stats.totalCharsOriginal - this.stats.totalCharsCompressed;
    const savingsPercent = this.stats.totalCharsOriginal > 0 
      ? Math.round((totalSavings / this.stats.totalCharsOriginal) * 100) : 0;
    
    return { ...this.stats, totalSavings, savingsPercent };
  }

  resetStats(): void {
    this.stats = createStats();
  }
}
