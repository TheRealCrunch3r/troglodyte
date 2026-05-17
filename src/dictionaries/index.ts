/**
 * Multi-language dictionary index.
 * Exports all language-specific filler word dictionaries.
 */

export { EN_BLACKLIST } from './en-filler';
export { DE_BLACKLIST } from './de-filler';

// Type definitions for language codes
export type LanguageCode = 'en' | 'de';

// Map of language code to blacklist object
import { EN_BLACKLIST } from './en-filler';
import { DE_BLACKLIST } from './de-filler';

export const LANGUAGE_DICTIONARIES: Record<LanguageCode, { gentle: string[]; balanced: string[]; aggressive: string[] }> = {
  en: EN_BLACKLIST,
  de: DE_BLACKLIST,
};

export const SUPPORTED_LANGUAGES: LanguageCode[] = ['en', 'de'];
