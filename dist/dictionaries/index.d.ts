/**
 * Multi-language dictionary index.
 * Exports all language-specific filler word dictionaries.
 */
export { EN_BLACKLIST } from './en-filler';
export { DE_BLACKLIST } from './de-filler';
export type LanguageCode = 'en' | 'de';
export declare const LANGUAGE_DICTIONARIES: Record<LanguageCode, {
    gentle: string[];
    balanced: string[];
    aggressive: string[];
}>;
export declare const SUPPORTED_LANGUAGES: LanguageCode[];
