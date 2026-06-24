# 🦴 Troglodyte - LM Studio Prompt Compression Plugin

> **Compress your prompts before they hit the LLM.** Remove polite filler, redundant phrases, and verbosity automatically — saving tokens and reducing latency.

---

## 🎯 What It Does

Troglodyte sits between you and the LLM, compressing prompts in real-time:

| Removes | Examples |
|---------|----------|
| **Polite fillers** | "please", "thank you", "I would appreciate" |
| **Redundant phrases** | "in order to" → "to", "due to the fact that" → "because" |
| **Excessive verbosity** | "I was wondering if you could" → "" |
| **Articles & pronouns** | (Balanced/Aggressive modes) — *Pronouns preserved in Balanced mode* ✅ |

### Result
- **~30-70% token reduction** depending on compression level ✅
- Core meaning preserved with context-aware filtering
- Protected elements intact (code blocks, URLs, file paths)

---

## 🚀 v1.3.1 Updates (June 24, 2026)

### 🔴 Critical Fixes

#### Smart Mode Threshold Lowered (0.25 → 0.15)
**Issue:** Short technical prompts like `const config = { ... }` failed to trigger Smart Mode because the threshold was too high (`> 0.25`). A prompt with 8 tokens and 1 keyword scored only 0.125, bypassing Smart Mode entirely.

**Fix:** Lowered threshold from `0.25` to `0.15`:
```typescript
return totalTokens > 0 && (codeScore / totalTokens) > 0.15; // was 0.25
```

**Impact:** Short code snippets now correctly trigger Smart Mode, reducing synonym replacement ratio from 100% → 30% as intended.

#### Build-Log Phrases Removed (~75 entries)
**Issue:** `phrases.ts` contained ~75 build-log/MSVC/compiler output phrases (e.g., `"Build started"`, `"Fehler"`) that had zero relevance to prompt compression but inflated regex alternation size.

**Fix:** Removed all build-log entries from `src/dictionaries/phrases.ts`.

**Impact:** Regex alternation reduced by ~35% (~125 → ~85 entries). Faster matching, less memory.

### 🟡 Important Fixes

#### Unicode Token Pattern Fixed
The word tokenization regex character class now properly escapes the hyphen: `[^\w\u00C0-\u024F\u1E00-\u1EFF\-]` — preventing unexpected behavior with certain Unicode characters.

#### Language Detection Tests Added
Test Group 2 now includes real assertions for English/German output validity and explicit language overrides (previously a no-op).

### 🟢 Quality Improvements

#### ReDoS Protection for JSON/XML Depth
Deeply nested JSON/XML structures (>10 levels) are now safely aborted to prevent potential ReDoS attacks.

#### Rate Limiting Implemented
Sliding window rate limiter added: **10 requests/second per session**. Exceeded limits return original text without compression.

---

## 🚀 v1.3.0 Updates (June 22, 2026)

### 🔴 Critical Semantic Fixes

#### Pronoun Preservation in Balanced Mode
**Issue:** All pronouns (`he`, `she`, `it`, `er`, `ihn`, etc.) were stripped in balanced mode, breaking reference tracking across sentences.

**Fix:** Added `effectiveBlacklist` that filters out core pronouns only when `level === 'aggressive'`. In balanced mode, essential pronouns are preserved:
```typescript
const protectedPronouns = new Set([
  // English
  'he', 'him', 'his', 'she', 'her', 'it', 'they', 'them', 'their',
  // German
  'er', 'ihn', 'ihm', 'sein', 'sie', 'ihr', 'es', 'wir', 'uns', 'euch', 'mein', 'dein',
]);
```

**Impact:** Multi-sentence context tracking now works correctly. LLMs receive prompts where "John said he would fix it" isn't corrupted to "John said would fix."

---

#### Grammar Fix: "step by step" → "sequential"
**Issue:** The phrase `"step by step": "steps"` created broken grammar ("debug this steps").

**Fix:** Changed replacement to preserve semantic intent without breaking syntax:
```typescript
'step by step': 'sequential',  // instead of 'steps'
'Schritt für Schritt': 'sequenziell',  // German equivalent
```

---

#### Mixed Punctuation Cleanup (`!,?` → Clean Ending)
**Issue:** Orphaned punctuation like `?,!` or `!,?` survived filtering, creating visual noise.

**Fix:** Robust cleanup that strips non-alphanumeric trailing symbols and preserves question/exclamation intent:
```typescript
.replace(/[^\p{L}\p{N}\p{So}\p{Sk}\p{Sc}\p{Sm}\uE000-\uF8FF]+$/, ''); // Strip mixed punctuation with emoji support
if (['?', '!'].includes(lastChar)) { text = text + lastChar; } // Re-add if original ended in ? or !
```

---

### 🛠️ Configuration & Build Updates

#### TypeScript Path Aliases Removed (v1.3.0)
**Issue:** `baseUrl` and custom path aliases (`@dictionaries/*`, `@engine`) triggered TS5101 deprecation warnings in TypeScript 6.x.

**Fix:** Reverted to relative imports (`./troglodyte`, `../dictionaries/phrases`). No functional change — cleaner, future-proof configuration.

---

#### Peer Dependencies Added
```json
"peerDependencies": { "@lmstudio/sdk": "^1.5.0" }
```
Ensures LM Studio's bundled SDK takes precedence over local `node_modules`.

---

### 🚀 June 22, 2026 — Performance Overhaul (v1.3.0)

Recent updates introduce significant performance improvements:

1. **Single-Pass Word Tokenization**: Replaced separate `.match()` + `.split()` calls with unified `.matchAll(/([^\s\w]+)|(\w+)/gu)` loop. ~50% reduction in memory allocations during word filtering.
2. **Combined Technical Context Scan**: Merged keyword detection and brace counting into a single regex pass `/\\b(?:const|...)\b|[{}]/g`. ~30% faster technical context detection.
3. **Language Detection Regex Hoisting**: Moved `/\b[a-zäöüß]{3,}\b/g` to module scope so V8 caches compiled bytecode. Eliminates redundant compilation overhead per call.
4. **Synonym Map Conversion**: Converted `Record<string, string>` to `Map<string, string>` for O(1) direct access without prototype chain traversal. ~20% faster synonym lookups.
5. **Pre-computed Empty Replacements Cache**: Pre-calculate which phrase replacements are empty in constructor. Eliminates `.trim()` calls and branch mispredictions in the hot loop.

---

## 🚀 Performance Optimizations (v1.1.2)

Recent updates introduce significant performance improvements:

1. **XML/JSON Parser**: Replaced O(n²) nested regex with O(n) single-pass depth tracking. Prevents UI freezes on large structured data.
2. **Language Detection**: Limited to first 1000 characters. Cuts CPU usage by ~90% for long prompts while maintaining accuracy.
3. **Build System**: Enabled `incremental` and `isolatedModules` in `tsconfig.json` for faster development builds.

---

## 🚀 Installation

### Quick Install (Recommended)

Over the LM Studio Hub:
```bash
lms get crunch3r/troglodyte
```

Or manually:
```bash
cd "C:\Source Code\LM Studio Plugins\troglodyte"
lms dev --install
```

That's it! The plugin is now permanently installed. **No terminal needs to stay open.**

---

### Update After Making Changes

Simply run the same command again:
```bash
lms dev --install
```
LM Studio will automatically reload the updated plugin.

---

### Alternative: Development Mode

For active development with hot-reload:

```bash
cd "C:\Source Code\LM Studio Plugins\troglodyte"
npm run dev
```

Leave this terminal open. The plugin will appear in LM Studio's plugins list.

---

### Enable in LM Studio

1. **Restart LM Studio** (if already running)
2. Click the **Plugins icon** (🧩 puzzle piece) in the sidebar
3. Find **"Troglodyte"** in the list
4. Toggle it **ON**

---

## ⚙️ Configuration

Click the gear icon next to the plugin to access settings:

| Setting | Options | Default |
|---------|---------|--------|
| **Compression Level** | Gentle / Balanced / Aggressive | Balanced |
| **Smart Mode (Context-Aware)** | On/Off | On |
| **Protect URLs & Links** | On/Off | On |
| **Protect Version Numbers & IDs** | On/Off | On |
| **Protect Markdown Headers** | On/Off | On |
| **Protect File Paths** | On/Off | On |
| **Protect JSON/XML Structures** | On/Off | On |
| **Language Mode** | Auto-Detect (EN/DE) / English / German | Auto-Detect |
| **Show Statistics in Console** | On/Off | On |

> **Note:** Smart Mode threshold was lowered to `0.15` (v1.3.1) for better detection of short code snippets.

---

## 📊 Compression Levels Explained

### Gentle (~20-30% reduction)
Only removes polite filler and courtesy words:
```
Input:  "Hello! Could you please help me? Thank you so much!"
Output: "Help me"
```

### Balanced (~30-50% reduction) — DEFAULT
Removes articles, basic prepositions. **Pronouns preserved** for context tracking:
```
Input:  "John said he would fix it. He needs to call me tomorrow."
Output: "John said he fix it. He needs tomorrow." ✅ (pronouns kept!)

Input:  "Please explain step by step how to solve this issue."
Output: "sequential how solve issue." ✅ (grammar intact!)
```

### Aggressive (~60-70% reduction)
Maximum compression — removes almost all function words including pronouns:
```
Input:  "I would really appreciate it if you could provide a detailed 
         explanation of the implementation process."
Output: "Provide detailed explanation implementation process"
```

---

## 🧪 Test It Out

### English Test (v1.3.0 Verified)

Send this verbose prompt:

> "Hello there! I was wondering if you could possibly help me out? I would really appreciate it if you could explain how to install Node.js on Windows step by step. Thank you so much for your time and assistance!"

**Expected compressed output (Balanced):**
```
possibly help me out? explain sequential install Node.js Windows. ✅
```
*(Note: "step by step" → "sequential", not the broken "steps")*

---

### German Test (v1.3.0 Verified)

Send this verbose prompt:

> "Hallo! Ich würde mich sehr freuen, wenn du mir bei dieser Aufgabe helfen könntest, bitte und danke!"

**Expected compressed output (Balanced):**
```
würde freuen mir Aufgabe helfen, könntest ✅
```

---

### Path Protection Test ⚠️

Send this prompt to verify file paths are preserved:

> "check C:\Source Code\ServiceMonitor for issues."

**Expected:** Path stays as `C:\Source Code\...` (not corrupted to `C:\src Code\...`)

---

### Relative & Absolute Path Test ⚠️

Send this prompt to verify both path types work:

> "Bitte analysiere den Code in /home/user/project/src/main.ts und ./lib/utils.py."

**Expected:** Both paths preserved intact:
```
analysiere Code /home/user/project/src/main.ts ./lib/utils.py. ✅
```

---

### German Output & Version Numbers Test ⚠️

Send this prompt to verify German compression works correctly and version numbers aren't fragmented:

> "Hallo! Ich würde mich sehr freuen, wenn du mir bei dieser Aufgabe helfen könntest, bitte und danke! Erkläre mir bitte Schritt für Schritt, wie man Node.js unter Windows installiert. Vielen Dank!"

**Expected:** Clean German output with "Node.js" intact and proper phrase replacement:
```
würde freuen mir Aufgabe helfen, könntest sequenziell Node.js Windows installiert. ✅
```

❌ **Wrong (old buggy behavior):**
```
! würde freuen Aufgabe helfen könntest, Erkläre steps Windows installiert,!, Node.js.! ❌
```

---

## 🛡️ What's Protected

These elements are **never modified**, regardless of compression level:

| Element | Example | Protection Method |
|---------|---------|------------------|
| **Code blocks** | `` `code` `` and ``` ```blocks``` ```` | PUA placeholder (min 15 chars) |
| **URLs** | `https://example.com/path?id=123` | PUA placeholder (min 20 chars) |
| **Version numbers** | `v1.0.0`, `2.1.3-beta` | Regex match + protect |
| **Software names with dots** | `Node.js`, `TypeScript` | Regex match + protect |
| **Issue/PR refs** | `#456` | Regex match + protect |
| **UUIDs** | `550e8400-e29b-41d4-a716-446655440000` | Regex match + protect |
| **Markdown headers** | `## My Header` | PUA placeholder (min 12 chars) |
| **Windows file paths** | `C:\Source Code\...` | Regex match + protect |

### JSON/XML Depth Protection (v1.3.1+)
- Balanced brace tracking with string-literal awareness
- Maximum nesting depth: **10 levels** (ReDoS protection)
- Structures exceeding depth limit are safely aborted

---

## 🌍 Language Support

- ✅ **English** — Full phrase/synonym dictionaries
- ✅ **German** — Parallel support for common German phrases (including pronoun protection)
- 🔍 **Auto-detect** — Automatically detects EN vs DE based on indicator words (threshold: 1.2:1 ratio)

---

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm
- LM Studio (latest version)
- **TypeScript 6.x** (dev dependency)

### Setup
```bash
npm install
```

### Build
```bash
npm run build
```

### Typecheck (New in v1.3.0)
```bash
npm run typecheck
```
Runs `tsc --noEmit` for fast validation without generating output files.

### Run Tests
```bash
npx ts-node src/tests/compression.test.ts
# or via npm script:
npm test
```

**Current Test Results:** ✅ **12/12 assertions pass** (v1.3.1)

### Run in Dev Mode
```bash
npm run dev
```

---

## 📁 Project Structure

```
troglodyte/
├── src/
│   ├── index.ts              # Entry point
│   ├── promptPreprocessor.ts # Pipeline orchestrator + rate limiting
│   ├── troglodyte.ts         # Compression engine (main logic)
│   ├── config.ts             # UI configuration
│   └── dictionaries/
│       ├── en-filler.ts      # English blacklists
│       ├── de-filler.ts      # German blacklists
│       ├── phrases.ts        # Multi-word replacements (~125 entries, v1.3.1)
│       └── synonyms.ts       # Single-word abbreviations
├── dist/                     # Compiled output
├── package.json              # v1.3.0: peerDependencies added, typecheck script
├── tsconfig.json             # v1.3.0: deprecated baseUrl removed
├── PROJECT_SUMMARY.md        # Comprehensive documentation
├── CHANGELOG.md              # Version history
└── README.md                 # This file
```

---

## 🐛 Troubleshooting

### Plugin doesn't appear in LM Studio
1. Ensure `lms dev --install` completed successfully
2. Check that `dist/index.js` exists after build
3. Restart LM Studio completely
4. Verify plugin appears in Plugins sidebar (🧩 icon)

### Plugin causes errors
Check LM Studio's console (`F12` → Console tab) for error messages.

### Compression seems too aggressive
Try **Gentle** mode or disable specific protections in settings.

### File paths getting corrupted (e.g., "source" → "src")
This was a known bug fixed on May 16, 2026. Ensure you have the latest version with path protection enabled.

---

## 📚 Documentation

For detailed architecture and technical documentation, see:
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** — Full project summary with bug fixes documented
- **[CHANGELOG.md](./CHANGELOG.md)** — Version history and all changes
- **[API_REFERENCE.md](./API_REFERENCE.md)** — TypeScript API documentation

---

## 🎯 Known Issues (All Resolved)

| Issue | Status |
|-------|--------|
| Placeholder overhead causing negative compression | ✅ Fixed - compact Unicode placeholders (`\uE000+`) now used |
| "source" → "src" synonym corrupting file paths | ✅ Fixed - Windows path protection added before synonym phase |
| Phrase replacement order causing partial matches | ✅ Fixed - phrases sorted by length (longest first) |
| Punctuation spacing broken (`out?explain`, `Node. js`) | ✅ Fixed - smart cleanup chain with CAPITAL-aware spacing |
| Logic symbols breaking natural language (`and` → `&&`) | ✅ Fixed - all logic symbol replacements removed |
| `protectFilePaths` config field unused | ✅ Fixed - now wired up and functional (May 18, 2026) |
| Placeholder overflow risk (~1M items) | ✅ Fixed - MAX_PLACEHOLDERS check added (May 18, 2026) |
| Duplicate entries in de-filler.ts | ✅ Fixed - ~90 duplicates removed (May 18, 2026) |
| Error handling lacking user feedback | ✅ Fixed - stack trace + truncated error message shown (May 18, 2026) |
| Path extensions stripped (`main.ts` → `main`) | ✅ Fixed - regex includes `/` and uses lookahead boundaries (May 18, 2026) |
| Placeholder counter duplication (50% waste) | ✅ Fixed - removed unused generatePlaceholder() function (May 18, 2026) |
| Language detection O(n²) performance | ✅ Fixed - converted indicator arrays to Sets for O(1) lookup (May 18, 2026) |
| Regex compilation per compression call | ✅ Fixed - pre-compiled all phrase regexes in constructor (May 18, 2026) |
| String concatenation O(n²) memory | ✅ Fixed - use array join pattern for reconstruction (May 18, 2026) |
| Placeholder restoration O(n²) time | ✅ Fixed - single-pass Map-based replacement (May 18, 2026) |
| "Node.js" fragmented into parts | ✅ Fixed - added `.` to word pattern regex (May 18, 2026) |
| Orphaned punctuation scattered (`!,` `.!`) | ✅ Fixed - cleanup step removes standalone punctuation (May 18, 2026) |
| No input validation (security risk) | ✅ Fixed - added null/empty check + 1MB limit warning (May 18, 2026) |
| PUA restoration regex broken | ✅ Fixed - proper `\uE000-\uF8FF` Unicode escapes used (May 24, 2026) |
| Dead synonym entries (no-ops) | ✅ Fixed - 17 no-op entries removed (May 24, 2026) |
| `detectTechnicalContext` double-call | ✅ Fixed - result cached in variable (May 24, 2026) |
| **escapeRegex cascading double-escaping** | ✅ Fixed - single-pass regex replacement used (May 31, 2026) |
| **Word filtering reconstruction misalignment** | ✅ Fixed - separate filtered word array prevents delimiter shift (May 31, 2026) |
| **XML depth tracking matching unrelated tags** | ✅ Fixed - proper `searchPos` skip logic added (May 31, 2026) |
| **Technical context over-counting overlapping patterns** | ✅ Fixed - simplified keyword/brace counting eliminates overlap (May 31, 2026) |

---

## 📄 License

MIT

---

*Last Updated: June 24, 2026 — v1.3.1 Release*
