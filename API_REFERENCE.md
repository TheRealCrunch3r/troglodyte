# Troglodyte - API Reference

## 📚 Public API Documentation

This document describes the TypeScript interfaces and classes exposed by the Troglodyte compression engine.

---

## 🔌 Main Entry Point

### `main(context: PluginContext)`

The primary entry point registered with LM Studio.

**File:** `src/index.ts`

```typescript
export async function main(context: PluginContext) {
  context.withConfigSchematics(configSchematics);
  context.withPromptPreprocessor(preprocess);
}
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| `context` | `PluginContext` | LM Studio plugin context providing configuration and preprocessing hooks |

---

## 🔄 Prompt Preprocessor

### `preprocess(ctl: PromptPreprocessorController, userMessage: ChatMessage): Promise<string>`

Processes incoming prompts before they reach the LLM.

**File:** `src/promptPreprocessor.ts`

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| `ctl` | `PromptPreprocessorController` | Controller for managing preprocessing lifecycle |
| `userMessage` | `ChatMessage` | The incoming user message to compress |

**Returns:** `Promise<string>` — Compressed prompt text

**Features:**
- System metadata extraction (strips `[Zeit:`, `**SYSTEMEMPFEHLUNG:**` markers)
- Abort signal handling
- Status reporting via UI
- Cumulative statistics tracking

---

## 🦴 Compression Engine

### `class Troglodyte`

The core compression engine implementing the multi-phase pipeline.

**File:** `src/troglodyte.ts`

#### Constructor

```typescript
constructor(dictionaries: {
  phrases: Record<string, string>;
  blacklist: string[];
  synonyms?: Record<string, string>;
})
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| `phrases` | `Record<string, string>` | Multi-word phrase replacements |
| `blacklist` | `string[]` | Words to filter (now handled internally by compression level) |
| `synonyms` | `Record<string, string>` | Optional single-word abbreviations |

---

#### Method: `compress()`

```typescript
compress(prompt: string, options?: {
  level?: CompressionLevel;
  protectUrls?: boolean;
  protectNumbers?: boolean;
  protectHeaders?: boolean;
  protectFilePaths?: boolean;
  protectJsonXml?: boolean;
  smartMode?: boolean;
  language?: LanguageCode;
  verbose?: boolean;
}): string
```

**Parameters:**
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `prompt` | `string` | — | Input text to compress |
| `level` | `CompressionLevel` | `'balanced'` | Compression aggressiveness |
| `protectUrls` | `boolean` | `true` | Preserve URLs intact |
| `protectNumbers` | `boolean` | `true` | Preserve version numbers, IDs, UUIDs |
| `protectHeaders` | `boolean` | `true` | Preserve markdown headers |
| `protectFilePaths` | `boolean` | `true` | Preserve file paths (Windows, Unix, relative) |
| `protectJsonXml` | `boolean` | `true` | Preserve JSON objects and XML structures |
| `smartMode` | `boolean` | `true` | Auto-detect technical context, reduce synonym replacement for code |
| `language` | `LanguageCode` | auto-detected | Force language (EN/DE) or auto-detect |
| `verbose` | `boolean` | `false` | Enable detailed console logging |

**Returns:** `string` — Compressed text

**Performance Notes:**
- XML/JSON protection now uses O(n) single-pass depth tracking instead of O(n²) nested regex, preventing UI freezes on large structured data.
- Language detection is optimized to scan only the first 1000 characters, reducing CPU overhead for long prompts without sacrificing accuracy.

---

#### Method: `getStats()`

```typescript
getStats(): CompressionStats & { totalSavings: number; savingsPercent: number }
```

**Returns cumulative statistics:**
| Property | Type | Description |
|----------|------|-------------|
| `totalCompressions` | `number` | Total compressions performed |
| `totalCharsOriginal` | `number` | Sum of original character counts |
| `totalCharsCompressed` | `number` | Sum of compressed character counts |
| `totalSavings` | `number` | Total characters saved |
| `savingsPercent` | `number` | Average savings percentage |
| `lastUpdated` | `string` | ISO timestamp of last update |

---

#### Method: `resetStats()`

```typescript
resetStats(): void
```

Resets all cumulative statistics to zero.

---

## 📊 Type Definitions

### `CompressionLevel`

```typescript
type CompressionLevel = "gentle" | "balanced" | "aggressive";
```

| Value | Description |
|-------|-------------|
| `'gentle'` | ~20-30% reduction — polite fillers only |
| `'balanced'` | ~30-50% reduction — articles, pronouns included |
| `'aggressive'` | ~60-70% reduction — maximum compression |

---

### `LanguageCode`

```typescript
type LanguageCode = 'en' | 'de';
```

Supported languages:
- `'en'` — English
- `'de'` — German

---

## ⚙️ Configuration Schematics

### `configSchematics`

**File:** `src/config.ts`

Defines the UI configuration exposed in LM Studio's plugin settings.

```typescript
export const configSchematics = createConfigSchematics()
  .field("compressionLevel", "select", {...}, "balanced")
  .field("smartMode", "boolean", {...}, true)
  .field("protectUrls", "boolean", {...}, true)
  .field("protectNumbers", "boolean", {...}, true)
  .field("protectHeaders", "boolean", {...}, true)
  .field("protectFilePaths", "boolean", {...}, true)
  .field("protectJsonXml", "boolean", {...}, true)
  .field("languageMode", "select", {...}, "auto")
  .field("showStats", "boolean", {...}, true)
  .build();
```

---

## 📖 Dictionary Modules

### English Blacklist

**File:** `src/dictionaries/en-filler.ts`

```typescript
export const EN_BLACKLIST = {
  gentle: string[],    // ~20 words — polite fillers only
  balanced: string[],  // ~300 words — articles, pronouns, prepositions
  aggressive: string[] // ~400+ words — everything + object pronouns
};
```

---

### German Blacklist

**File:** `src/dictionaries/de-filler.ts`

```typescript
export const DE_BLACKLIST = {
  gentle: string[],    // ~15 words — polite fillers only
  balanced: string[],  // ~250 words — articles, pronouns, prepositions
  aggressive: string[] // ~300+ words — everything + object pronouns
};
```

---

### Phrase Replacements

**File:** `src/dictionaries/phrases.ts`

```typescript
export const phrases: Record<string, string> = {
  'Hello there': '',                    // Remove entirely
  'In order to': 'To',                 // Replace with shorter form
  'step by step': 'steps',             // Condense phrase
  // ... 200+ entries (EN + DE)
};
```

---

### Synonym Abbreviations

**File:** `src/dictionaries/synonyms.ts`

```typescript
export const synonyms: Record<string, string> = {
  'application': 'app',                // Technical abbreviations
  'implementation': 'impl',            // Common in code contexts
  'configuration': 'config',           // Build log friendly
  // ... 300+ entries (EN + DE)
};
```

---

## 🔗 Dictionary Index

**File:** `src/dictionaries/index.ts`

```typescript
export { EN_BLACKLIST } from './en-filler';
export { DE_BLACKLIST } from './de-filler';

export type LanguageCode = 'en' | 'de';

export const LANGUAGE_DICTIONARIES: Record<LanguageCode, {
  gentle: string[];
  balanced: string[];
  aggressive: string[];
}>;

export const SUPPORTED_LANGUAGES: LanguageCode[]; // ['en', 'de']
```

---

## 🧪 Usage Examples

### Basic Compression

```typescript
import { Troglodyte } from './troglodyte';
import { phrases } from './dictionaries/phrases';
import { synonyms } from './dictionaries/synonyms';

const troglodyte = new Troglodyte({
  phrases,
  blacklist: [],
  synonyms,
});

const compressed = troglodyte.compress(
  "Hello! Could you please explain how photosynthesis works? Thank you!",
  { level: 'balanced' }
);
// Output: "explain photosynthesis works"
```

---

### With Protection Options

```typescript
const compressed = troglodyte.compress(
  "Check C:\Source Code\Project for issues. Visit https://example.com/docs",
  {
    level: 'aggressive',
    protectUrls: true,
    protectNumbers: true,
  }
);
// Output: "Check C:\Source Code\Project issues. Visit https://example.com/docs"
```

---

### German Compression

```typescript
const compressed = troglodyte.compress(
  "Hallo! Könnten Sie bitte erklären, wie Photosynthese funktioniert? Danke!",
  { level: 'balanced', language: 'de' }
);
// Output: "erklären, Photosynthese funktioniert"
```

---

### Cumulative Statistics

```typescript
const stats = troglodyte.getStats();
console.log(stats);
// {
//   totalCompressions: 42,
//   totalCharsOriginal: 15000,
//   totalCharsCompressed: 8500,
//   totalSavings: 6500,
//   savingsPercent: 43,
//   lastUpdated: "2026-05-16T23:42:00.000Z"
// }
```

---

## 📄 License

MIT

---

*Last Updated: May 31, 2026*
