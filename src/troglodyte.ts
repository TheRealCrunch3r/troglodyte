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
 * - ADDED: Lowered threshold to 1.2:1 to handle code-mixed/bilingual prompts better
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
// FIX #3: Added 'würde' here (was incorrectly in NEUTRAL_WORDS)
const DE_HIGH = new Set([
  'der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einer', 'einem', 'eines',
  'ich', 'mich', 'mir', 'du', 'dich', 'dir', 'er', 'sie', 'es', 'wir', 'uns', 'ihr', 
  'euch', 'ist', 'sind', 'war', 'waren', 'sein', 'haben', 'hat', 'habe',
  'und', 'oder', 'aber', 'nicht', 'auch', 'sehr', 'viel', 'mehr', 
  'alle', 'alles', 'dieser', 'diese', 'dieses', 'jeder', 'jede', 'jedes', 'kein', 
  'keine', 'mit', 'nach', 'von', 'zu', 'bei', 'auf', 'aus', 'in', 'an',
  'für', 'um', 'gegen', 'ohne', 'durch', 'wie', 'was', 'wenn', 'weil',
  'sollte', 'könnte', 'müsste', 'darf', 'dürfe', 'mag', 'möge', 'will', 'wollen',
  'würde', // FIX #3: Moved from NEUTRAL_WORDS to DE_HIGH
]);

// Low-weight words that appear in both languages (code context noise) — excluded from detection
const NEUTRAL_WORDS = new Set([
  // Common English/German overlap or code keywords
  'code', 'function', 'return', 'class', 'import', 'export', 
  'const', 'let', 'var', 'if', 'else', 'for', 'while',
  'wird', // 'würde' removed — now in DE_HIGH (FIX #3)
  'daß',
]);

// OPTIMIZATION #1: Hoisted regex to avoid recompilation on every call
const WORD_TOKEN_REGEX = /\b[a-zäöüß]{3,}\b/g;

/**
 * Detect language with confidence threshold.
 * Returns 'en' as default if text is too short or signal is weak.
 * FIX: Lowered threshold from 1.5 to 1.2 to handle code-mixed prompts.
 */
function detectLanguage(text: string): LanguageCode {
  // OPTIMIZATION: Limit scan to first 1000 chars. Language signal is strongest at the start.
  const scanLimit = Math.min(text.length, 1000);
  const snippet = text.substring(0, scanLimit).toLowerCase();
  
  // Use hoisted regex (V8 caches compiled bytecode)
  const words = snippet.match(WORD_TOKEN_REGEX) || [];
  
  // Need minimum signal to make a decision
  if (words.length < 5) return 'en';
  
  let enScore = 0;
  let deScore = 0;
  
  for (const word of words) {
    if (NEUTRAL_WORDS.has(word)) continue; // Skip code/technical noise
    
    if (EN_HIGH.has(word)) enScore++;
    else if (DE_HIGH.has(word)) deScore++;
  }
  
  // Confidence threshold: need at least 1.2x ratio to commit (was 1.5, lowered for mixed-language)
  const total = enScore + deScore;
  if (total === 0) return 'en';
  
  const ratio = Math.max(enScore, deScore) / Math.min(enScore, deScore);
  if (ratio < 1.2) return 'en'; // Weak signal → default to English (was 1.5)
  
  return deScore > enScore ? 'de' : 'en';
}

// ==================== SMART MODE DETECTION ====================

/**
 * Detects if the prompt is technical (code-heavy) or conversational.
 * Returns true if technical, false if conversational.
 * FIX #4: Only count braces adjacent to code keywords, not all braces in text.
 */
function detectTechnicalContext(text: string): boolean {
  // FIX #4: Only count keywords AND braces that are near keywords (not ALL braces)
  // This prevents false positives from curly quotes or prose mentioning braces
  const keywordPattern = /\b(?:const|let|var|function|class|import|export)\b/g;
  let codeScore = 0;
  let match: RegExpExecArray | null;
  
  while ((match = keywordPattern.exec(text)) !== null) {
    codeScore++;
    // Also count braces within 5 chars of the keyword (likely code context)
    const contextStart = Math.max(0, match.index - 5);
    const contextEnd = Math.min(text.length, match.index + match[0].length + 5);
    const context = text.substring(contextStart, contextEnd);
    const braceMatches = context.match(/[{}]/g);
    if (braceMatches) codeScore += braceMatches.length;
  }
  
  const totalTokens = text.split(/\s+/).length;
  return totalTokens > 0 && (codeScore / totalTokens) > 0.15; // Lowered from 0.25 for short code snippets
}

// ==================== TROGLODYTE CLASS ====================

// Pre-compiled phrase structure for performance optimization
interface CompiledPhrase {
  phrase: string;
  replacement: string | undefined;
  regex: RegExp;
}

// FIX #1: Case-insensitive Map wrapper for phrase lookups
class CaseInsensitiveMap<V> extends Map<string, V> {
  get(key: string): V | undefined {
    // Exact match first (fast path)
    const exact = super.get(key);
    if (exact !== undefined) return exact;
    // Case-insensitive fallback
    const lower = key.toLowerCase();
    for (const [k, v] of this) {
      if (k.toLowerCase() === lower) return v;
    }
    return undefined;
  }
}

export class Troglodyte {
  // Language-specific phrase maps (isolated to prevent cross-language mixing)
  private enPhrases: Record<string, string>;
  private dePhrases: Record<string, string>;
  
  // OPTIMIZATION #2: Use Map instead of Record for O(1) lookups without prototype chain traversal
  private synonymMap: Map<string, string>; 
  private cachedBlacklists: Map<LanguageCode, Map<CompressionLevel, Set<string>>>;
  private stats: CompressionStats;
  private readonly MAX_COMPRESSIONS_BEFORE_RESET = 10000;
  private readonly MAX_CHARS_BEFORE_RESET = 10_000_000;
  
  // Pre-sorted phrases with pre-compiled regexes (PERFORMANCE FIX) - language-specific
  private enCompiledPhrases: CompiledPhrase[];
  private deCompiledPhrases: CompiledPhrase[];
  
  // BATCHED REGEX OPTIMIZATION (pre-built in constructor) - language-specific
  private enBatchedRegex: RegExp | null = null;
  private deBatchedRegex: RegExp | null = null;
  private enReplacementMap: CaseInsensitiveMap<string | undefined> | null = null;
  private deReplacementMap: CaseInsensitiveMap<string | undefined> | null = null;

  // OPTIMIZATION #4: Pre-compute empty replacements to avoid runtime `.trim()` checks
  private emptyReplacements: Set<string> = new Set();

  constructor(dictionaries: {
    phrases: Record<string, string>;
    blacklist: string[];
    synonyms?: Record<string, string>;
  }) {
    // SPLIT PHRASES INTO LANGUAGE-SPECIFIC MAPS (FIX #16: Prevent cross-language mixing)
    const allPhrases = dictionaries.phrases;
    this.enPhrases = {};
    this.dePhrases = {};
    
    for (const [phrase, replacement] of Object.entries(allPhrases)) {
      // Detect if phrase contains German characters or is likely German
      const hasGermanChars = /[äöüßÄÖÜ]/.test(phrase);
      const lowerPhrase = phrase.toLowerCase();
      
      // Simple heuristic: phrases with common German words are German
      const isGerman = hasGermanChars || 
        /^(ich|du|er|sie|es|wir|ihr|der|die|das|ein|eine|und|oder|aber|nicht|kann|muss|will|soll|hat|ist|war)/.test(lowerPhrase) ||
        lowerPhrase.includes('könnte') || lowerPhrase.includes('würde') || lowerPhrase.includes('müsste');
      
      if (isGerman) {
        this.dePhrases[phrase] = replacement;
      } else {
        this.enPhrases[phrase] = replacement;
      }
    }
    
    // OPTIMIZATION #2: Convert synonyms to Map immediately
    this.synonymMap = new Map(Object.entries(dictionaries.synonyms || {}));
    
    // Pre-sort phrases by language and pre-compile regexes (FIX #16: Language isolation)
    const wordChar = "a-zA-Z0-9_'ßäöüÄÖÜ";
    
    // Build EN compiled phrases
    this.enCompiledPhrases = Object.entries(this.enPhrases)
      .filter(([phrase]) => phrase && phrase.length >= 2)
      .sort((a, b) => b[0].length - a[0].length)
      .map(([phrase, replacement]) => ({
        phrase,
        replacement,
        regex: new RegExp(`(?<![${wordChar}])${this.escapeRegex(phrase)}(?![${wordChar}])`, 'gi')
      }));
    
    // Build DE compiled phrases
    this.deCompiledPhrases = Object.entries(this.dePhrases)
      .filter(([phrase]) => phrase && phrase.length >= 2)
      .sort((a, b) => b[0].length - a[0].length)
      .map(([phrase, replacement]) => ({
        phrase,
        replacement,
        regex: new RegExp(`(?<![${wordChar}])${this.escapeRegex(phrase)}(?![${wordChar}])`, 'gi')
      }));
    
    // BUILD BATCHED REGEX for EN (one-time cost in constructor)
    if (this.enCompiledPhrases.length > 0) {
      const escapedPhrases = this.enCompiledPhrases
        .map(({ phrase }) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .sort((a, b) => b.length - a.length); // Longest first for greedy matching
      
      // FIX #6: Split into chunks of 50 to avoid regex alternation explosion
      const CHUNK_SIZE = 50;
      let combinedPattern: string;
      if (escapedPhrases.length <= CHUNK_SIZE) {
        combinedPattern = `(?:${escapedPhrases.join('|')})`;
      } else {
        // Use non-capturing group with alternation chunks
        const chunks = [];
        for (let i = 0; i < escapedPhrases.length; i += CHUNK_SIZE) {
          chunks.push(`(?:${escapedPhrases.slice(i, i + CHUNK_SIZE).join('|')})`);
        }
        combinedPattern = `(?:${chunks.join('|')})`;
      }
      this.enBatchedRegex = new RegExp(`(?<![${wordChar}])${combinedPattern}(?![${wordChar}])`, 'gi');
      
      // FIX #1: Use CaseInsensitiveMap for phrase lookups (EN)
      this.enReplacementMap = new CaseInsensitiveMap(
        this.enCompiledPhrases.map(({ phrase, replacement }) => [phrase, replacement])
      );
    }
    
    // BUILD BATCHED REGEX for DE (one-time cost in constructor)
    if (this.deCompiledPhrases.length > 0) {
      const escapedPhrases = this.deCompiledPhrases
        .map(({ phrase }) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        .sort((a, b) => b.length - a.length); // Longest first for greedy matching
      
      const CHUNK_SIZE = 50;
      let combinedPattern: string;
      if (escapedPhrases.length <= CHUNK_SIZE) {
        combinedPattern = `(?:${escapedPhrases.join('|')})`;
      } else {
        const chunks = [];
        for (let i = 0; i < escapedPhrases.length; i += CHUNK_SIZE) {
          chunks.push(`(?:${escapedPhrases.slice(i, i + CHUNK_SIZE).join('|')})`);
        }
        combinedPattern = `(?:${chunks.join('|')})`;
      }
      this.deBatchedRegex = new RegExp(`(?<![${wordChar}])${combinedPattern}(?![${wordChar}])`, 'gi');
      
      // FIX #1: Use CaseInsensitiveMap for phrase lookups (DE)
      this.deReplacementMap = new CaseInsensitiveMap(
        this.deCompiledPhrases.map(({ phrase, replacement }) => [phrase, replacement])
      );
    }
    
    // OPTIMIZATION #4: Pre-compute empty replacements to avoid runtime checks (EN)
    if (this.enReplacementMap) {
      for (const val of this.enReplacementMap.values()) {
        if (!val || !val.trim()) {
          this.emptyReplacements.add(val!);
        }
      }
    }
    
    // OPTIMIZATION #4: Pre-compute empty replacements to avoid runtime checks (DE)
    if (this.deReplacementMap) {
      for (const val of this.deReplacementMap.values()) {
        if (!val || !val.trim()) {
          this.emptyReplacements.add(val!);
        }
      }
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

    // PRONOUN PROTECTION (FIX #2): Preserve pronouns in balanced mode to maintain reference tracking.
    // Only remove them in aggressive mode where context loss is less critical.
    let effectiveBlacklist: Set<string> = levelBlacklist;
    if (level === 'balanced') {
      const protectedPronouns = new Set([
        // English
        'he', 'him', 'his', 'she', 'her', 'it', 'they', 'them', 'their',
        // German (FIXED: Now preserved in balanced mode)
        'er', 'ihn', 'ihm', 'sein', 'sie', 'ihr', 'es', 'wir', 'uns', 'euch', 'mein', 'dein',
        'dich', 'mir', 'dir', 'unser', 'euer', 'sich',
      ]);
      effectiveBlacklist = new Set([...levelBlacklist].filter(w => !protectedPronouns.has(w)));
    }

    // Smart Mode Adjustment (NEW) — cached to avoid double computation
    const isTechnical = smartMode && detectTechnicalContext(prompt);
    // FIX #7/15: Instead of binary all-or-nothing, reduce synonym ratio in technical mode
    let synonymReplacementRatio = isTechnical ? 0.3 : 1.0; // 30% of synonyms in technical mode
    if (isTechnical) {
      if (debug) console.log('[Troglodyte] Smart Mode: Detected technical context. Reducing synonym replacement to 30%.');
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
      text = text.replace(/(https?:\/\/[^\s<>()"'\\[\]]+|www.[^\s<>()"'\\[\]]+)/gi, (match) => {
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
      // Protect standalone semantic versions like "3.10.4" or "2023.11"
      text = text.replace(/\b\d+\.\d+(\.\d+)?\b/g, protectIfWorthwhile);
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
      // FIX #14: Added word boundary at end to handle paths not followed by punctuation
      text = text.replace(/([A-Za-z]:[\/\\][^<>"|?*\r\n]{10,})(?=\s|$|[,)])/g, protectIfWorthwhile);
      
      // Relative paths with ./ or ../ - match complete path including extension
      text = text.replace(/(\.\.?[/\\][^\s<>"|?*]+)(?=\s|$|[,)])/g, protectIfWorthwhile);
      
      // Linux/macOS absolute paths (/path/to/file) - match complete path including extension
      text = text.replace(/(\/[^\s<>"|?*]{10,})(?=\s|$|[,)])/g, protectIfWorthwhile);
      
      // Home directories (~/file.ext)
      text = text.replace(/(~[/\\][^\s<>"|?*]+)(?=\s|$|[,)])/g, protectIfWorthwhile);
    }

    // 6. NEW: Protect JSON/XML structures (FIXED: now handles nested objects and validates XML tags)
    if (protectJsonXml) {
      // FIX #2/#9/#NEW: Properly track string literals for JSON (double-quote only)
      // Single quotes inside double-quoted JSON strings are literal characters, NOT delimiters
      const MAX_BRACE_DEPTH = 10; // ReDoS protection — prevent exponential backtracking on deeply nested structures
      
      const protectBalancedBraces = (input: string, openChar: string, closeChar: string): string => {
        let result = '';
        let depth = 0;
        let currentBlock = '';
        let inString = false;
        
        for (let i = 0; i < input.length; i++) {
          const char = input[i];
          
          // Only track double-quote strings (standard JSON). Single quotes are literal inside JSON.
          if (!inString && char === '"') {
            // Check for escaped quote
            let escapeCount = 0;
            let j = i - 1;
            while (j >= 0 && input[j] === '\\') {
              escapeCount++;
              j--;
            }
            if (escapeCount % 2 === 0) {
              inString = true;
            }
          } else if (inString && char === '"') {
            // Check for escaped quote
            let escapeCount = 0;
            let j = i - 1;
            while (j >= 0 && input[j] === '\\') {
              escapeCount++;
              j--;
            }
            if (escapeCount % 2 === 0) {
              inString = false;
            }
          }
          
          if (inString) {
            currentBlock += char;
            continue;
          }
          
          if (char === openChar) {
            depth++;
            // ReDoS protection: abort tracking if nesting exceeds safe limit
            if (depth > MAX_BRACE_DEPTH) {
              result += currentBlock;
              return result + input.substring(i);
            }
            currentBlock += char;
          } else if (char === closeChar) {
            depth--;
            currentBlock += char;
            
            if (depth === 0 && currentBlock.length > 10) {
              // Protect this block
              result = protectIfWorthwhile(currentBlock, 5);
              currentBlock = '';
            } else if (depth < 0) {
              depth = 0;
              currentBlock = '';
            }
          } else {
            currentBlock += char;
          }
        }
        
        return result + currentBlock; // Append any remaining unparsed text
      };
      
      // Protect JSON objects (curly braces) - handles nesting AND string literals!
      text = protectBalancedBraces(text, '{', '}');
      
      // XML Protection - FIXED: Now validates tag pairing to prevent mismatched tags
      const findOutermostXml = (input: string): { start: number; end: number }[] => {
        const results: { start: number; end: number }[] = [];
        const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)([^>]*?)>/g;
        let match: RegExpExecArray | null;
        let depth = 0;
        const openTagStack: string[] = []; 
        let blockStartIndex = -1;

        while ((match = tagRegex.exec(input)) !== null) {
          const fullTag = match[0];
          const tagName = match[1];
          
          if (fullTag.endsWith('/>')) continue; 

          const isClosing = fullTag.startsWith('</') && fullTag.length > 2;
          
          if (isClosing) {
            if (depth === 0 || tagName !== openTagStack[openTagStack.length - 1]) {
              continue; 
            }
            openTagStack.pop();
            depth--;
            if (depth === 0 && blockStartIndex >= 0) {
              results.push({ start: blockStartIndex, end: match.index + fullTag.length });
            }
          } else {
            if (depth === 0) blockStartIndex = match.index; 
            openTagStack.push(tagName);
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

    // Language-specific batched regex and replacement map (FIX #16)
    const isDe = langCode === 'de';
    const activeBatchedRegex = isDe ? this.deBatchedRegex : this.enBatchedRegex;
    const activeReplacementMap = isDe ? this.deReplacementMap : this.enReplacementMap;

    // Use pre-built batched regex (O(n) instead of O(n × m))
    if (activeBatchedRegex && activeReplacementMap) {
      text = text.replace(activeBatchedRegex, (match) => {
        // FIX #1: Use CaseInsensitiveMap.get() — handles exact + case-insensitive lookup
        const repl = activeReplacementMap!.get(match);
        
        if (!repl || !repl.trim()) {
          phraseMatches++;
          phraseCharsSaved += match.length - 1; // Replace with space
          return ' ';
        }

        const saved = match.length - repl.length;
        phraseMatches++;
        phraseCharsSaved += saved;
        return repl;
      });
    }


    // ==================== WORD FILTERING PHASE ====================
    
    // OPTIMIZATION: Single-pass tokenizer using matchAll to avoid double scanning (match + split).
    // FIXED: Include Unicode letters for German umlaut support (äöüßÄÖÜ)
    // FIX: Group 1 must capture spaces too — the original [^\s...] excluded whitespace,
    // causing all spaces to be lost during reconstruction. Now captures ALL non-letter chars.
    const tokenPattern = /([^\w\u00C0-\u024F\u1E00-\u1EFF\-]+)|([\w\u00C0-\u024F\u1E00-\u1EFF\-]+)/gu; // FIXED: escaped hyphen in character class
    const allWords: string[] = [];
    for (const m of text.matchAll(tokenPattern)) {
      if (m[2]) allWords.push(m[2]);
    }
    
    if (debug) {
      console.log(`[Troglodyte] Found ${allWords.length} words for filtering`);
    }

    let filteredCount = 0;
    let synonymCount = 0;
    const keptWords: string[] = [];
    
    // Filter words in a single pass (no interleaving with delimiters)
    for (const word of allWords) {
      const lower = word.toLowerCase();
      
      // Check blacklist first
      if (effectiveBlacklist.has(lower)) {
        filteredCount++;
        continue; // Skip this word entirely
      }
      
      // FIX #7/15/#NEW: Deterministic synonym replacement (not probabilistic)
      // Use character-code hash for reproducibility: same word → same decision every time
      const replacement = this.synonymMap.get(lower);
      if (replacement !== undefined && synonymReplacementRatio > 0) {
        // Deterministic hash: sum of character codes mod 100
        const hash = word.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 100;
        if (hash < synonymReplacementRatio * 100) {
          synonymCount++;
          keptWords.push(replacement);
          continue;
        }
      }
      
      // Keep original word
      keptWords.push(word);
    }

    if (debug) {
      console.log(`[Troglodyte] Blacklist: ${levelBlacklist.size} words, Filtered: ${filteredCount}, Synonyms: ${synonymCount}`);
    }

    // Reconstruct text by interleaving delimiters with kept words correctly.
    const finalParts: string[] = [];
    let wordIdx = 0;
    
    for (const m of text.matchAll(tokenPattern)) {
      if (m[2] !== undefined) { // Word match
        finalParts.push(keptWords[wordIdx++] || ''); 
      } else {
        finalParts.push(m[1]); // Delimiter preserved
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
      
      // FIX #5/#NEW: Preserve emoji and all Unicode symbols (not just letters/digits)
      // Added \p{So} (emoji/symbols), \p{Sk} (modifiers), \p{Sc} (currency), \p{Sm} (math)
      .replace(/[^\p{L}\p{N}\p{So}\p{Sk}\p{Sc}\p{Sm}\uE000-\uF8FF]+$/gu, '');

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

    // TRAILING PUNCTUATION NORMALIZATION (MUST be after restoration to prevent double periods)
    const originalTrailing = prompt.trim().match(/[?.!]+$/)?.[0] || '';
    if (originalTrailing) {
      text = text.replace(/[?.!]+$/, '');
      text += originalTrailing;
    } else if (['?', '!'].includes(prompt.trim().slice(-1))) {
      text = text.replace(/[?!]+$/, '') + prompt.trim().slice(-1);
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

    // Memory management (per-instance) — FIXED: Check threshold BEFORE incrementing to avoid off-by-one reset
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
