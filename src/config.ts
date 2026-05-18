import { createConfigSchematics } from "@lmstudio/sdk";

/**
 * Configuration schema for the Troglodyte plugin.
 * Defines UI settings that users can customize in LM Studio.
 */
export const configSchematics = createConfigSchematics()
  // Core compression settings
  .field(
    "compressionLevel",
    "select",
    {
      displayName: "Compression Level",
      hint: "How aggressively to compress prompts. Gentle preserves more words, Aggressive maximizes token savings.",
      options: [
        { value: "gentle", displayName: "Gentle (~20-30% reduction)" },
        { value: "balanced", displayName: "Balanced (~45% reduction)" },
        { value: "aggressive", displayName: "Aggressive (~60-70% reduction)" },
      ],
    },
    "balanced",
  )
  // Protection options
  .field(
    "protectUrls",
    "boolean",
    {
      displayName: "Protect URLs & Links",
      hint: "Preserve URLs and web links intact during compression.",
    },
    true,
  )
  .field(
    "protectNumbers",
    "boolean",
    {
      displayName: "Protect Version Numbers & IDs",
      hint: "Keep version numbers (v1.0.0), issue references (#1234), and UUIDs intact.",
    },
    true,
  )
  .field(
    "protectHeaders",
    "boolean",
    {
      displayName: "Protect Markdown Headers",
      hint: "Preserve # Header structure in markdown documents.",
    },
    true,
  )
  .field(
    "protectFilePaths",
    "boolean",
    {
      displayName: "Protect File Paths",
      hint: "Keep file paths intact (prevents 'Source' → 'src' corruption).",
    },
    true,
  )
  // Language settings
  .field(
    "languageMode",
    "select",
    {
      displayName: "Language Mode",
      hint: "Select the language for compression or enable auto-detection. Currently supports English and German only.",
      options: [
        { value: "auto", displayName: "🔍 Auto-Detect (EN/DE)" },
        { value: "en", displayName: "🇬🇧 English" },
        { value: "de", displayName: "🇩🇪 German" },
      ],
    },
    "auto",
  )
  // Display options
  .field(
    "showStats",
    "boolean",
    {
      displayName: "Show Statistics in Console",
      hint: "Display compression statistics after each message.",
    },
    true,
  )
  .build();

/**
 * Type representing the plugin configuration values.
 */
export type PluginConfig = typeof configSchematics;
