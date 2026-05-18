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

let stats: CompressionStats = {
  totalCompressions: 0,
  totalCharsOriginal: 0,
  totalCharsCompressed: 0,
  lastUpdated: new Date().toISOString(),
};

// ==================== LANGUAGE DETECTION (EN/DE ONLY) - IMPROVED ====================

function detectLanguage(text: string): LanguageCode {
  const words = text.toLowerCase().match(/\b[a-zäöüß]{3,}\b/g) || [];
  
  // Expanded English indicators with technical terms (as Set for O(1) lookup)
  const enIndicators = new Set([
    'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 
    'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must',
    'this', 'that', 'these', 'those', 'it', 'its', 'they', 'them', 'their', 'there',
    'here', 'what', 'when', 'where', 'who', 'how', 'why', 'which', 'not', 'no', 'nor',
    'but', 'and', 'or', 'for', 'so', 'if', 'then', 'than', 'too', 'very', 'just',
    'about', 'above', 'after', 'again', 'all', 'also', 'any', 'because', 'before',
    'between', 'both', 'can', 'each', 'from', 'further', 'get', 'got', 'him', 'his',
    'into', 'more', 'most', 'other', 'our', 'out', 'over', 'own', 'same', 'some',
    'such', 'through', 'under', 'until', 'up', 'while', 'code', 'function', 'return',
    'class', 'import', 'export', 'const', 'let', 'var', 'if', 'else', 'for', 'while',
  ]);
  
  // Expanded German indicators with technical terms (as Set for O(1) lookup)
  const deIndicators = new Set([
    'der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einer', 'einem', 'eines',
    'ich', 'mich', 'mir', 'du', 'dich', 'dir', 'er', 'sie', 'es', 'wir', 'uns', 'ihr', 
    'euch', 'ist', 'sind', 'war', 'waren', 'sein', 'haben', 'hat', 'habe', 'werden', 
    'wird', 'würde', 'und', 'oder', 'aber', 'nicht', 'auch', 'sehr', 'viel', 'mehr', 
    'alle', 'alles', 'dieser', 'diese', 'dieses', 'jeder', 'jede', 'jedes', 'kein', 
    'keine', 'mit', 'nach', 'von', 'zu', 'bei', 'auf', 'aus', 'in', 'an', 'bei',
    'für', 'um', 'gegen', 'ohne', 'durch', 'wie', 'was', 'wenn', 'weil', 'daß',
    'sollte', 'könnte', 'müsste', 'darf', 'dürfe', 'mag', 'möge', 'will', 'wollen',
  ]);
  
  let enCount = 0, deCount = 0;
  
  for (const word of words) {
    if (enIndicators.has(word)) enCount++;
    else if (deIndicators.has(word)) deCount++;
  }
  
  return deCount > enCount ? 'de' : 'en';
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
    language?: LanguageCode;
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
    
    let langCode: LanguageCode;
    if (options?.language) {
      langCode = options.language;
    } else {
      langCode = detectLanguage(prompt);
    }
    
    console.log(`[Troglodyte] Detected language: ${langCode} for prompt: "${prompt.substring(0, 80)}..."`);

    let text = prompt;
    const protectedItems: string[] = [];

    const levelBlacklistMap = this.cachedBlacklists.get(langCode);
    if (!levelBlacklistMap) {
      console.warn(`[Troglodyte] Unknown language code: ${langCode}, falling back to English`);
      langCode = 'en';
    }
    const levelBlacklist = this.cachedBlacklists.get(langCode || 'en')!.get(level)!;

    // ==================== PROTECTION PHASE ====================
    let placeholderCounter = 0;
    const MAX_PLACEHOLDERS = 0xFFFFF; // ~1 million placeholders before overflow
    const BREAK_EVEN_LENGTH = 8; // Minimum length for protection to be worthwhile
    
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
      text = text.replace(/(https?:\/\/[^\s<>()"'\\\[\]]+|www\.[^\s<>()"'\\\[\]]+)/gi, (match) => {
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
      // Windows paths (C:\...) with optional file extension
      text = text.replace(/([A-Za-z]:[\/\\][^<>"|?*\r\n]{10,})(?=[\s.,;:!?)\]]|$)/g, (match) => {
        return protectIfWorthwhile(match, 15);
      });
      // Relative file paths FIRST (./file.ext or ../dir/file.ext) - before absolute!
      text = text.replace(/(\.\.?\/[^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, (match) => {
        return protectIfWorthwhile(match, 8);
      });
      // Linux/macOS absolute paths (/path/to/file.ext) - include / in char class!
      text = text.replace(/(\/[^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, (match) => {
        return protectIfWorthwhile(match, 8);
      });
      // Home dirs (~/file.ext)
      text = text.replace(/(~\/[^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, (match) => {
        return protectIfWorthwhile(match, 8);
      });
    }


    // ==================== COMPRESSION PHASE ====================

    let phraseMatches = 0;
    let phraseCharsSaved = 0;

    // Use pre-compiled phrases from constructor (PERFORMANCE FIX - no regex compilation per call)
    for (const { phrase, replacement, regex } of this.compiledPhrases) {
      const matches = text.match(regex);
      if (matches) {
        phraseMatches += matches.length;
        phraseCharsSaved += matches.reduce((sum, m) => sum + m.length - (replacement?.length || 0), 0);
      }
      
      text = text.replace(regex, () => {
        return replacement && replacement.trim() !== '' ? replacement : ' ';
      });
    }

    // ==================== WORD FILTERING PHASE ====================
    
    // Split into words while preserving punctuation and spacing
    // FIX: Include '.' in word pattern to keep "Node.js", "v1.0.0" intact
    const wordPattern = /[a-zA-Z0-9_.\-'ßäöüÄÖÜ]+/g;
    const tokens = text.split(wordPattern);
    const words = text.match(wordPattern) || [];
    
    console.log(`[Troglodyte] Found ${words.length} words in ${tokens.length} token slots`);

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
      
      // Apply synonym replacement
      if (this.synonyms[lower]) {
        synonymCount++;
        filteredWords.push(this.synonyms[lower]);
        continue;
      }
      
      // Keep original word
      filteredWords.push(word);
    }

    console.log(`[Troglodyte] Blacklist: ${levelBlacklist.size} words, Filtered: ${filteredCount}, Synonyms: ${synonymCount}`);

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
    console.log(`[Troglodyte] Restoring ${protectedItems.length} protected items...`);

    // PERFORMANCE FIX: Single-pass replacement using Map (O(n) instead of O(n²))
    if (protectedItems.length > 0) {
      const replacements = new Map<string, string>();
      for (let i = 0; i < protectedItems.length; i++) {
        replacements.set(String.fromCodePoint(0xE000 + i), protectedItems[i]);
      }

      text = text.replace(/[-￿]/g, (match) => {
        const restored = replacements.get(match);
        if (!restored) {
          console.warn(`[Troglodyte] ⚠️ Placeholder ${match.codePointAt(0)!-0xE000} not found!`);
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

    console.log('\n==================================================');
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

    // Memory management
    if (stats.totalCompressions >= this.MAX_COMPRESSIONS_BEFORE_RESET || 
        stats.totalCharsOriginal >= this.MAX_CHARS_BEFORE_RESET) {
      console.log('[Troglodyte] Stats threshold reached, resetting');
      stats = {
        totalCompressions: 0,
        totalCharsOriginal: 0,
        totalCharsCompressed: 0,
        lastUpdated: new Date().toISOString(),
      };
    }

    stats.totalCompressions++;
    stats.totalCharsOriginal += prompt.length;
    stats.totalCharsCompressed += text.length;
    stats.lastUpdated = new Date().toISOString();

    return text;
  }

  getStats(): CompressionStats & { totalSavings: number; savingsPercent: number } {
    const totalSavings = stats.totalCharsOriginal - stats.totalCharsCompressed;
    const savingsPercent = stats.totalCharsOriginal > 0 
      ? Math.round((totalSavings / stats.totalCharsOriginal) * 100) : 0;
    
    return { ...stats, totalSavings, savingsPercent };
  }

  resetStats(): void {
    stats = {
      totalCompressions: 0,
      totalCharsOriginal: 0,
      totalCharsCompressed: 0,
      lastUpdated: new Date().toISOString(),
    };
  }
}
