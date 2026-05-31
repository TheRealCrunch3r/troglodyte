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
  // OPTIMIZATION: Limit scan to first 1000 chars. Language signal is strongest at the start.
  const scanLimit = Math.min(text.length, 1000);
  const snippet = text.substring(0, scanLimit).toLowerCase();
  
  const words = snippet.match(/\b[a-zäöüß]{3,}\b/g) || [];
  
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
  // FIXED: Single-pass tokenization to avoid double-counting overlapping patterns
  const codeKeywords = /\b(?:const|let|var|function|class|import|export)\b/g;
  const codeBraces = /[{]/g;
  
  let codeScore = 0;
  
  // Count code keywords
  let match: RegExpExecArray | null;
  while ((match = codeKeywords.exec(text)) !== null) {
    codeScore++;
  }
  
  // Count opening braces (common in code objects/arrays)
  while ((match = codeBraces.exec(text)) !== null) {
    codeScore++;
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
  
  // BATCHED REGEX OPTIMIZATION (pre-built in constructor)
  private batchedRegex: RegExp | null = null;
  private replacementMap: Map<string, string | undefined> | null = null;

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
    
    // BUILD BATCHED REGEX (one-time cost in constructor)
    // This enables O(n) phrase replacement instead of O(n × m)
    if (this.compiledPhrases.length > 0) {
      const escapedPhrases = this.compiledPhrases
        .map(({ phrase }) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .sort((a, b) => b.length - a.length); // Longest first for greedy matching
      
      const combinedPattern = `(?:${escapedPhrases.join('|')})`;
      this.batchedRegex = new RegExp(`(?<![${wordChar}])${combinedPattern}(?![${wordChar}])`, 'gi');
      
      this.replacementMap = new Map(this.compiledPhrases.map(({ phrase, replacement }) => [phrase, replacement]));
    }
    
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
    // FIXED: Single-pass regex replacement to avoid cascading double-escaping
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
      text = text.replace(/(\.\.?[/\\][^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
      
      // Linux/macOS absolute paths (/path/to/file) - match complete path including extension
      text = text.replace(/(\/[^\s<>"|?*]{10,})(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
      
      // Home directories (~/file.ext)
      text = text.replace(/(~[/\\][^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
    }

    // 6. NEW: Protect JSON/XML structures
    if (protectJsonXml) {
      text = text.replace(/(\{[^{}]*\})/g, (match) => protectIfWorthwhile(match, 10)); // Simple JSON
      
      // XML Protection - OPTIMIZED: Single-pass depth counter (O(n) instead of O(n²))
      const findOutermostXml = (input: string): { start: number; end: number }[] => {
        const results: { start: number; end: number }[] = [];
        const tagRegex = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*?)>/g;
        let match: RegExpExecArray | null;
        let depth = 0;
        let lastOpenTagStart = -1;

        while ((match = tagRegex.exec(input)) !== null) {
          const isClosing = match[1] === '/';
          const fullTag = match[0];
          
          if (fullTag.endsWith('/>')) continue; // Self-closing doesn't affect depth

          if (isClosing) {
            if (depth === 0) {
              // Orphan closing tag, ignore
              continue;
            }
            depth--;
            if (depth === 0) {
              results.push({ start: lastOpenTagStart, end: match.index + fullTag.length });
            }
          } else {
            if (depth === 0) {
              lastOpenTagStart = match.index;
            }
            depth++;
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

    // Use pre-built batched regex (O(n) instead of O(n × m))
    if (this.batchedRegex && this.replacementMap) {
      text = text.replace(this.batchedRegex, (match) => {
        const repl = this.replacementMap!.get(match);
        const saved = match.length - (repl?.length || 0);
        phraseMatches++;
        phraseCharsSaved += saved;
        return repl && repl.trim() !== '' ? repl : ' ';
      });
    }



    // ==================== WORD FILTERING PHASE ====================
    
    // FIXED: Single-pass tokenization to avoid split/match misalignment when words are filtered out.
    // Also preserve trailing punctuation (? !) through the entire pipeline so questions stay questions.
    const wordPattern = /[-a-zA-Z0-9_.'ßäöüÄÖÜ]+/g;
    
    // Extract trailing punctuation that should be preserved (questions/exclamations)
    let trailingPunct = '';
    const trailingMatch = text.match(/([?.!]+)\s*$/);
    if (trailingMatch && trailingMatch[1].length > 0) {
      trailingPunct = trailingMatch[1];
      text = text.substring(0, text.length - trailingMatch[0].length); // Remove trailing punct from processing
    }
    
    const allWords = text.match(wordPattern) || [];
    
    if (debug) {
      console.log(`[Troglodyte] Found ${allWords.length} words for filtering`);
    }

    let filteredCount = 0;
    let synonymCount = 0;
    const keptWords: string[] = [];
    
    // Filter words in-place (no interleaving with delimiters)
    for (const word of allWords) {
      const lower = word.toLowerCase();
      
      // Check blacklist first
      if (levelBlacklist.has(lower)) {
        filteredCount++;
        continue; // Skip this word entirely
      }
      
      // Apply synonym replacement (respects Smart Mode)
      if (synonymReplacementEnabled && this.synonyms[lower]) {
        synonymCount++;
        keptWords.push(this.synonyms[lower]);
        continue;
      }
      
      // Keep original word
      keptWords.push(word);
    }

    if (debug) {
      console.log(`[Troglodyte] Blacklist: ${levelBlacklist.size} words, Filtered: ${filteredCount}, Synonyms: ${synonymCount}`);
    }

    // Reconstruct text by interleaving delimiters with kept words correctly.
    // Split gives us delimiters (spaces, punctuation), and we interleave only the KEPT words.
    const tokens = text.split(wordPattern);  // Delimiters between words
    
    const finalParts: string[] = [];
    let wordIdx = 0;
    
    for (const token of tokens) {
      finalParts.push(token); // Add delimiter/punctuation
      
      if (wordIdx < keptWords.length) {
        finalParts.push(keptWords[wordIdx++]); // Add next KEPT word only
      }
    }

    // Clean up whitespace and punctuation artifacts
    text = finalParts.join('')
      .replace(/\s+/g, ' ')                           // 1. Collapse multiple spaces to one (MUST be first)
      .replace(/([.,?!;:])(?=[A-ZßÄÖÜ])/g, '$1 ')      // 2. Add space AFTER sentence-ending punct (before CAPITAL)
      .trim();

    // Remove orphaned punctuation that survived filtering (preserve ? and ! at end)
    text = text
      .replace(/\s+([.,?!;:])/g, '$1')                // 3. Remove space BEFORE punctuation
      .replace(/^([.,?!;:]|\s)+/g, '')                // 4. Remove leading punctuation/spaces
      .replace(/([.,;:])\s*$/g, '');                  // 5. Remove trailing . , ; : but KEEP ? and ! at end
    
    // Re-add preserved trailing punctuation (questions/exclamations)
    if (trailingPunct) {
      text = text + trailingPunct;
    }

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
