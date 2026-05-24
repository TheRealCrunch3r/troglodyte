/**
 * Synonym replacements for prompt compression.
 *
 * CRITERIA: Only real, widely-recognized abbreviations that preserve meaning.
 * - No non-words (e.g., "impling", "newed")
 * - No semantic inverses (e.g., "implemented" → "implied")
 * - No ambiguous short forms (e.g., "opt" could mean "choose")
 */
export declare const synonyms: Record<string, string>;
