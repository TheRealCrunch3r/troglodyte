# Contributing to Troglodyte

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the Troglodyte project.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm
- LM Studio (latest version)
- Code editor (VS Code recommended)
- **TypeScript 6.x** (auto-installed via npm)
- **ts-node** (devDependency for testing)

### Setup
```bash
# Clone or navigate to the repository
cd "C:\Source Code\LM Studio Plugins\troglodyte"

# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev
```

### Install Plugin Permanently
```bash
lms dev --install
```

---

## 📁 Project Structure

```
troglodyte/
├── src/
│   ├── index.ts              # Entry point (register with LM Studio)
│   ├── promptPreprocessor.ts # Pipeline orchestrator
│   ├── troglodyte.ts         # Compression engine (main logic)
│   ├── config.ts             # UI configuration schematics
│   └── dictionaries/
│       ├── index.ts          # Multi-language dictionary exports
│       ├── en-filler.ts      # English word blacklists
│       ├── de-filler.ts      # German word blacklists
│       ├── phrases.ts        # Multi-word phrase replacements
│       └── synonyms.ts       # Single-word abbreviations
├── dist/                     # Compiled output (generated)
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration (incremental & isolatedModules enabled)
└── README.md                 # User documentation
```

---

## 🔧 Development Workflow

### 1. Make Changes
Edit source files in `src/`. Common areas:

| File | Purpose |
|------|--------|
| `src/dictionaries/phrases.ts` | Add/edit phrase replacements |
| `src/dictionaries/synonyms.ts` | Add/edit word abbreviations |
| `src/dictionaries/en-filler.ts` | English word blacklists |
| `src/dictionaries/de-filler.ts` | German word blacklists |
| `src/troglodyte.ts` | Compression pipeline logic |

### 2. Build and Test
```bash
npm run build
lms dev --install
```

### 3. Verify in LM Studio
1. Open LM Studio
2. Enable the Troglodyte plugin (🧩 icon)
3. Send a test prompt
4. Check console output (`F12`) for compression stats

---

## 📝 Adding Dictionary Entries

### Phrase Replacements (`phrases.ts`)

```typescript
export const phrases: Record<string, string> = {
  // Format: 'original phrase': 'replacement'
  
  // Remove entirely
  'Hello there': '',
  
  // Replace with shorter form
  'In order to': 'To',
  'Due to the fact that': 'Because',
  
  // Condense multi-word phrase (v1.3.0: use 'sequential' instead of 'steps')
  'step by step': 'sequential',
};
```

**Rules:**
- Phrases are sorted by length (longest first) automatically
- Use empty string `''` to remove entirely
- Case-sensitive matching with word boundaries

---

### Synonym Abbreviations (`synonyms.ts`)

```typescript
export const synonyms: Record<string, string> = {
  // Format: 'original word': 'abbreviation'
  
  'application': 'app',
  'implementation': 'impl',
  'configuration': 'config',
};
```

**Rules:**
- Lowercase keys only (matching is case-insensitive)
- Avoid abbreviations that could corrupt file paths (`source` → `src` ❌)
- **Never map a word to itself** — no-op entries waste memory and CPU (17 were removed in v1.1.0)

---

### Word Blacklists (`en-filler.ts`, `de-filler.ts`)

```typescript
// Three tiers of compression aggressiveness
export const EN_GENTLE = [
  'please', 'thanks', 'thank', 'appreciate',
];

export const EN_BALANCED = [
  ...EN_GENTLE,
  // Articles, pronouns, prepositions
  'a', 'an', 'the', 'i', 'me', 'my', 'of', 'in', 'to',
];

export const EN_AGGRESSIVE = [
  ...EN_BALANCED,
  // Object pronouns, relative pronouns
  'he', 'him', 'his', 'she', 'her', 'it', 'they', 'them',
];
```

**Rules:**
- Lowercase only (matching is case-insensitive)
- Gentle ⊂ Balanced ⊂ Aggressive (each tier extends previous)
- Be conservative — removing too many words destroys meaning

---

## ⚠️ Common Pitfalls

### 1. Missing Closing Brace in Dictionaries
```typescript
export const phrases: Record<string, string> = {
  'entry': 'value',
}; // ← Don't forget this!
```

### 2. Duplicate Keys
Search before adding:
```bash
grep -n "partial_phrase" src/dictionaries/phrases.ts
```

### 3. Invalid String Syntax for Apostrophes
```typescript
'l'', 'un', 'une'  // ❌ INVALID!
"l'", "un", "une"  // ✅ Valid (use double quotes)
```

### 4. esbuild Caching Issues
If changes don't reflect:
```powershell
Remove-Item -Recurse -Force dist, node_modules\.cache
npm run build
```

---

## 🧪 Testing Guidelines

### English Test Prompt
```
Hello there! I was wondering if you could possibly help me out? 
I would really appreciate it if you could explain how to install 
Node.js on Windows step by step. Thank you so much for your time 
and assistance!
```

**Expected (Balanced):**
```
possibly help me out? explain how install Node.js Windows sequential.
```

---

### German Test Prompt
```
Hallo! Ich würde mich sehr freuen, wenn du mir bei dieser Aufgabe 
helfen könntest, bitte und danke!
```

**Expected (Balanced):**
```
würde freuen, wenn bei dieser Aufgabe helfen könntest
```

---

### Path Protection Test ⚠️
```
check C:\Source Code\ServiceMonitor for issues.
```

**Expected:** Path stays as `C:\Source Code\...` (not corrupted)

---

## 🐛 Reporting Bugs

When reporting bugs, include:
1. Input prompt text
2. Expected output
3. Actual output
4. Compression level used
5. Console logs (`F12` in LM Studio)

---

### 5. TypeScript 6.x Build Fix (TS2584)
If you see `Cannot find name 'console'` after upgrading TypeScript:

```json
// tsconfig.json - ensure this is present:
{
  "compilerOptions": {
    "types": ["node"]
  }
}
```

---

## 📚 Documentation Files

| File | Purpose |
|------|--------|
| `README.md` | User-facing documentation |
| `PROJECT_SUMMARY.md` | Technical overview and architecture |
| `API_REFERENCE.md` | TypeScript API documentation |
| `CHANGELOG.md` | Version history |
| `memory.md` | Developer notes, quick reference |
- **[API_REFERENCE.md](./API_REFERENCE.md)** — TypeScript API documentation |

---

## 🔑 Key Design Decisions

### Why EN/DE Only?
1. **Simplicity:** Fewer edge cases, easier maintenance
2. **Stability:** No syntax errors from complex Unicode handling
3. **Performance:** Smaller dictionaries = faster lookups
4. **User Base:** Most users are English/German speakers

### Why Remove Logic Symbols?
- `'and': '&&'` breaks natural language
- Belongs in code contexts only
- Not worth the complexity/risk

### Why PUA Placeholders?
- Compact (2 chars vs 7+)
- Survive tokenization intact
- No collision with normal text

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT license.

---

*Last Updated: June 24, 2026 — v1.3.1 Release*
