"use strict";
// ==================== MULTI-LANGUAGE SUPPORT (EN/DE ONLY) ====================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Troglodyte = void 0;
const dictionaries_1 = require("./dictionaries");
let stats = {
    totalCompressions: 0,
    totalCharsOriginal: 0,
    totalCharsCompressed: 0,
    lastUpdated: new Date().toISOString(),
};
// ==================== LANGUAGE DETECTION (EN/DE ONLY) ====================
function detectLanguage(text) {
    const words = text.toLowerCase().match(/\b[a-zäöüß]{3,}\b/g) || [];
    const enIndicators = ['the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does'];
    const deIndicators = [
        'der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine',
        'ich', 'mich', 'mir', 'du', 'dich', 'dir', 'er', 'sie', 'es', 'wir', 'uns', 'ihr', 'euch',
        'ist', 'sind', 'war', 'waren', 'sein', 'haben', 'hat', 'habe', 'werden', 'wird', 'würde',
        'und', 'oder', 'aber', 'nicht', 'auch', 'sehr', 'viel', 'mehr', 'alle', 'alles',
    ];
    let enCount = 0, deCount = 0;
    for (const word of words) {
        if (enIndicators.includes(word))
            enCount++;
        else if (deIndicators.includes(word))
            deCount++;
    }
    return deCount > enCount ? 'de' : 'en';
}
// ==================== TROGLODYTE CLASS ====================
class Troglodyte {
    phrasesAndLogic;
    synonyms;
    cachedBlacklists;
    MAX_COMPRESSIONS_BEFORE_RESET = 10000;
    MAX_CHARS_BEFORE_RESET = 10_000_000;
    constructor(dictionaries) {
        this.phrasesAndLogic = { ...dictionaries.phrases };
        this.synonyms = dictionaries.synonyms || {};
        this.cachedBlacklists = new Map();
        for (const langCode of dictionaries_1.SUPPORTED_LANGUAGES) {
            const langDict = dictionaries_1.LANGUAGE_DICTIONARIES[langCode];
            const levelMap = new Map();
            ['gentle', 'balanced', 'aggressive'].forEach((level) => {
                const lvl = level;
                levelMap.set(lvl, new Set(langDict[lvl].map(w => w.toLowerCase())));
            });
            this.cachedBlacklists.set(langCode, levelMap);
        }
    }
    escapeRegex(str) {
        const specialChars = ['\\', '^', '$', '*', '+', '?', '(', ')', '.', '{', '}', '|', '[', ']', '/'];
        let result = str;
        for (const ch of specialChars) {
            result = result.split(ch).join('\\' + ch);
        }
        return result;
    }
    compress(prompt, options) {
        const level = options?.level ?? "balanced";
        const protectUrls = options?.protectUrls ?? true;
        const protectNumbers = options?.protectNumbers ?? true;
        const protectHeaders = options?.protectHeaders ?? true;
        let langCode;
        if (options?.language) {
            langCode = options.language;
        }
        else {
            langCode = detectLanguage(prompt);
        }
        console.log(`[Troglodyte] Detected language: ${langCode} for prompt: "${prompt.substring(0, 80)}..."`);
        let text = prompt;
        const protectedItems = [];
        const levelBlacklistMap = this.cachedBlacklists.get(langCode);
        if (!levelBlacklistMap) {
            console.warn(`[Troglodyte] Unknown language code: ${langCode}, falling back to English`);
            langCode = 'en';
        }
        const levelBlacklist = this.cachedBlacklists.get(langCode || 'en').get(level);
        // ==================== PROTECTION PHASE ====================
        let placeholderCounter = 0;
        const generatePlaceholder = () => {
            return String.fromCodePoint(0xE000 + (placeholderCounter++ % 0xFFF));
        };
        const BREAK_EVEN_LENGTH = 8;
        const protectIfWorthwhile = (match, minLen = BREAK_EVEN_LENGTH) => {
            if (match.length <= minLen)
                return match;
            protectedItems.push(match);
            return generatePlaceholder();
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
        // 5. Protect Windows paths (C:\...) - MUST come before synonym replacement!
        text = text.replace(/([A-Za-z]:[\/\\][^<>"|?*\r\n]{10,})/g, (match) => {
            return protectIfWorthwhile(match, 15);
        });
        // ==================== COMPRESSION PHASE ====================
        let phraseMatches = 0;
        let phraseCharsSaved = 0;
        // Sort phrases by length (longest first) to avoid partial matches
        const sortedPhrases = Object.entries(this.phrasesAndLogic)
            .filter(([phrase]) => phrase && phrase.length >= 2)
            .sort((a, b) => b[0].length - a[0].length);
        // 5. Phrase and logic collapsing (longest phrases first!)
        for (const [phrase, replacement] of sortedPhrases) {
            const escaped = this.escapeRegex(phrase);
            const wordChar = "a-zA-Z0-9_'ßäöüÄÖÜ";
            const regex = new RegExp(`(?<![${wordChar}])${escaped}(?![${wordChar}])`, 'gi');
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
        const wordPattern = /[a-zA-Z0-9_'ßäöüÄÖÜ]+/g;
        const tokens = text.split(wordPattern);
        const words = text.match(wordPattern) || [];
        console.log(`[Troglodyte] Found ${words.length} words in ${tokens.length} token slots`);
        let filteredCount = 0;
        let synonymCount = 0;
        const filteredWords = [];
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
        let result = '';
        let wordIndex = 0;
        for (const token of tokens) {
            result += token; // Add delimiter/punctuation
            if (wordIndex < filteredWords.length) {
                result += filteredWords[wordIndex++]; // Add next kept word
            }
        }
        // Clean up whitespace and punctuation artifacts
        text = result
            .replace(/\s+/g, ' ') // Collapse multiple spaces to one
            .replace(/\s+([.,?!;:])/g, '$1') // Remove space BEFORE punctuation
            .replace(/([.?!;:])(?=[A-ZßÄÖÜ])/g, '$1 ') // Add space AFTER sentence-ending punct (before CAPITAL)
            .trim();
        // ==================== RESTORATION PHASE ====================
        console.log(`[Troglodyte] Restoring ${protectedItems.length} protected items...`);
        for (let i = 0; i < protectedItems.length; i++) {
            const placeholder = String.fromCodePoint(0xE000 + (i % 0xFFF));
            const item = protectedItems[i];
            if (text.includes(placeholder)) {
                text = text.split(placeholder).join(item);
            }
            else {
                console.warn(`[Troglodyte] ⚠️ Placeholder ${i} not found!`);
            }
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
        const truncate = (s, max = 150) => s.length > max ? `${s.substring(0, max)}...` : s;
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
    getStats() {
        const totalSavings = stats.totalCharsOriginal - stats.totalCharsCompressed;
        const savingsPercent = stats.totalCharsOriginal > 0
            ? Math.round((totalSavings / stats.totalCharsOriginal) * 100) : 0;
        return { ...stats, totalSavings, savingsPercent };
    }
    resetStats() {
        stats = {
            totalCompressions: 0,
            totalCharsOriginal: 0,
            totalCharsCompressed: 0,
            lastUpdated: new Date().toISOString(),
        };
    }
}
exports.Troglodyte = Troglodyte;
