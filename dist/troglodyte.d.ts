import { type LanguageCode } from './dictionaries';
export type { LanguageCode };
export type CompressionLevel = "gentle" | "balanced" | "aggressive";
interface CompressionStats {
    totalCompressions: number;
    totalCharsOriginal: number;
    totalCharsCompressed: number;
    lastUpdated: string;
}
export declare class Troglodyte {
    private phrasesAndLogic;
    private synonyms;
    private cachedBlacklists;
    private stats;
    private readonly MAX_COMPRESSIONS_BEFORE_RESET;
    private readonly MAX_CHARS_BEFORE_RESET;
    private compiledPhrases;
    constructor(dictionaries: {
        phrases: Record<string, string>;
        blacklist: string[];
        synonyms?: Record<string, string>;
    });
    private escapeRegex;
    compress(prompt: string, options?: {
        level?: CompressionLevel;
        protectUrls?: boolean;
        protectNumbers?: boolean;
        protectHeaders?: boolean;
        protectFilePaths?: boolean;
        protectJsonXml?: boolean;
        language?: LanguageCode;
        smartMode?: boolean;
        verbose?: boolean;
    }): string;
    getStats(): CompressionStats & {
        totalSavings: number;
        savingsPercent: number;
    };
    resetStats(): void;
}
