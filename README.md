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
| **Articles & pronouns** | (Balanced/Aggressive modes) |

### Result
- **~30-70% token reduction** depending on compression level ✅
- Core meaning preserved
- Protected elements intact (code blocks, URLs, file paths)

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
| **Protect URLs & Links** | On/Off | On |
| **Protect Version Numbers & IDs** | On/Off | On |
| **Protect Markdown Headers** | On/Off | On |
| **Protect File Paths** | On/Off | On |
| **Language Mode** | Auto-Detect (EN/DE) / English / German | Auto-Detect |
| **Show Statistics in Console** | On/Off | On |

---

## 📊 Compression Levels Explained

### Gentle (~20-30% reduction)
Only removes polite filler and courtesy words:
```
Input:  "Hello! Could you please help me? Thank you so much!"
Output: "Help me"
```

### Balanced (~30-50% reduction) — DEFAULT
Removes articles, pronouns, basic prepositions too:
```
Input:  "I was wondering if you could explain how photosynthesis works, please?"
Output: "Explain photosynthesis works"
```

### Aggressive (~60-70% reduction)
Maximum compression — removes almost all function words:
```
Input:  "I would really appreciate it if you could provide a detailed 
         explanation of the implementation process."
Output: "Provide detailed explanation implementation process"
```

---

## 🧪 Test It Out

### English Test

Send this verbose prompt:

> "Hello there! I was wondering if you could possibly help me out? I would really appreciate it if you could explain how to install Node.js on Windows step by step. Thank you so much for your time and assistance!"

**Expected compressed output (Balanced):**
```
possibly help me out? explain how install Node.js Windows steps.
```

---

### German Test

Send this verbose prompt:

> "Hallo! Ich würde mich sehr freuen, wenn du mir bei dieser Aufgabe helfen könntest, bitte und danke!"

**Expected compressed output (Balanced):**
```
würde freuen, wenn bei dieser Aufgabe helfen könntest
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
analysiere Code /home/user/project/src/main.ts ./lib/utils.py.
```

---

### German Output & Version Numbers Test ⚠️

Send this prompt to verify German compression works correctly and version numbers aren't fragmented:

> "Hallo! Ich würde mich sehr freuen, wenn du mir bei dieser Aufgabe helfen könntest, bitte und danke! Erkläre mir bitte Schritt für Schritt, wie man Node.js unter Windows installiert. Vielen Dank!"

**Expected:** Clean German output with "Node.js" intact (not fragmented):
```
würde freuen Aufgabe helfen könntest
```

❌ **Wrong (old buggy behavior):**
```
! würde freuen Aufgabe helfen könntest, Erkläre steps Windows installiert,!, Node.js.!
```



---

## 🛡️ What's Protected

These elements are **never modified**, regardless of compression level:

| Element | Example |
|---------|--------|
| **Code blocks** | `` `code` `` and ``` ```blocks``` ```` |
| **URLs** | `https://example.com/path?id=123` |
| **Version numbers** | `v1.0.0`, `2.1.3-beta` |
| **Software names with dots** | `Node.js`, `TypeScript` |
| **Issue/PR refs** | `#456` |
| **UUIDs** | `550e8400-e29b-41d4-a716-446655440000` |
| **Markdown headers** | `## My Header` |
| **Windows file paths** | `C:\Source Code\...` |

---

## 🌍 Language Support

- ✅ **English** — Full phrase/synonym dictionaries
- ✅ **German** — Parallel support for common German phrases
- 🔍 **Auto-detect** — Automatically detects EN vs DE based on indicator words

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
│   ├── promptPreprocessor.ts # Pipeline orchestrator
│   ├── troglodyte.ts         # Compression engine
│   ├── config.ts             # UI configuration
│   └── dictionaries/
│       ├── en-filler.ts      # English blacklists
│       ├── de-filler.ts      # German blacklists
│       ├── phrases.ts        # Multi-word replacements
│       └── synonyms.ts       # Single-word abbreviations
├── dist/                     # Compiled output
├── package.json
├── PROJECT_SUMMARY.md        # Comprehensive documentation
├── memory.md                 # Persistent notes & lessons learned
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
- **[memory.md](./memory.md)** — Persistent notes, lessons learned, quick reference

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

---

## 📄 License

MIT

---

*Last Updated: May 18, 2026*
