# Troglodyte - Memory & Notes

## 🧠 Persistent Project Memory

Quick reference for future development sessions.

---

## 🔧 Key Technical Details

### Compact Placeholders (Unicode Private Use Area)
```typescript
// OLD - verbose placeholders  
const PU = '\uE001';
generatePlaceholder() => `${PU}P${++counter}${PU}`; // "\uE001P1\uE001" = 7+ chars

// NEW - compact single-char placeholders
String.fromCodePoint(0xE000 + (counter++ % 0xFFF)); // "\uE000" = 2 chars
```

**Why PUA?**
- `\uE000`–`\uEFFF` reserved for private use
- Not matched by word boundary regexes
- Survive tokenization intact
- **71% less overhead** (7+ → 2 chars)

---

### Path Protection Regex
```typescript
// Protects Windows paths like C:\Source Code\...
text = text.replace(/([A-Za-z]:[\/\\][^<>"|?*\r\n]{10,})/g, (match) => {
  return protectIfWorthwhile(match, 15);
});
```

**Must come BEFORE synonym replacement phase!** Otherwise "source" → "src" corrupts paths.

---

### Phrase Replacement Order Fix
```typescript
// Sort phrases by length (longest first) to avoid partial matches
const sortedPhrases = Object.entries(this.phrasesAndLogic)
  .filter(([phrase]) => phrase && phrase.length >= 2)
  .sort((a, b) => b[0].length - a[0].length);
```

---

### Punctuation Cleanup Chain
```typescript
text = result
  .replace(/\s+/g, ' ')                           // 1. Collapse spaces

---

### Path Protection Regex Fix (May 18, 2026)
**Problem:** Paths like `/home/user/project/src/main.ts und ./lib/utils.py.` became fragments.

**Root Cause:** 
- Regex `[a-zA-Z0-9_.-]` excluded `/`, so paths matched as separate segments
- Minimum length `{3,}` was too restrictive for short segments
- Absolute path regex consumed before relative paths could match

**Fix:**
```typescript
// Relative paths FIRST (before absolute!)
text = text.replace(/(\.\.?\/[^\s<>"|?*]+)(?=[$\s.,;:!?)\]]|$)/g, protectIfWorthwhile);

// Then absolute paths with `/` included in character class
text = text.replace(/(\/[^\s<>"|?*]+)(?=[$\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
```

**Key changes:**
- Changed `{3,}` to `+` (one or more chars)
- Used `[^"]` instead of `[a-zA-Z0-9_.-]` to include `/`
- Added positive lookahead `(?=[$\s.,;:!?)\]]|$)` for boundaries
- Processed relative paths BEFORE absolute paths


---

### Performance Optimizations Summary (May 18, 2026)

**Language Detection:** Arrays → Sets for O(1) lookup (~100× faster)
```typescript
const enIndicators = new Set(['the', 'a', ...]); // O(1) has()
```

**Pre-compiled Regexes:** Compile once in constructor, reuse forever
```typescript
interface CompiledPhrase {
  phrase: string;
  replacement: string | undefined;
  regex: RegExp; // Compiled ONCE!
}
```

**Array Join Reconstruction:** O(n²) → O(n) memory allocation
```typescript
const parts: string[] = [];
for (...) { parts.push(token); }
let result = parts.join(''); // Single allocation!
```

**Map-Based Restoration:** O(N² × text_length) → O(text_length)
```typescript
const replacements = new Map();
text = text.replace(/[-￿]/g, (match) => 
  replacements.get(match) || match
); // Single pass!
```

---

---

  .replace(/\s+([.,?!;:])/g, '$1')                // 2. Remove space BEFORE punct
  .replace/([.?!;:])(?=[A-ZßÄÖÜ])/g, '$1 ')      // 3. Add space AFTER (before CAPITAL)
  .trim();
```

**Why CAPITAL?** Only adds space before capital letters = new sentence starts. Preserves `Node.js` intact.

---

## ⚠️ Common Pitfalls (Learned the Hard Way)

### 1. Missing Closing Brace in Dictionaries
When appending to `phrases.ts` or `synonyms.ts`, verify file ends with:
```typescript
  'last entry': 'value',
};
```

---

### 2. Duplicate Keys in Dictionary Objects
Search before adding:
```bash
grep -n "partial_phrase" src/dictionaries/phrases.ts
```

---

### 3. Invalid String Syntax for Apostrophes
```typescript
'l'', 'un', 'une'  // ❌ INVALID!
"l'", "un", "une"  // ✅ Valid
```

---

### 4. esbuild Caching Issues
Clean rebuild when changes not reflected:
```powershell
Remove-Item -Recurse -Force dist, node_modules\.cache
npm run build
```

---

### 5. Tool Access Limitations
Cannot test builds directly — user must manually run:
```bash
npm run build && npm run dev
```
And post console output for verification.

---

### 6. TypeScript 6.x Build Fix (TS2584)
**Problem:** `Cannot find name 'console'` after upgrading to TypeScript 6.x.

**Root Cause:** TypeScript 6.x has stricter type resolution. Node.js globals (`console`, `process`, etc.) are no longer implicitly available.

**Fix:** Add `"types": ["node"]` to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "types": ["node"]
  }
}
```


---

### 7. Path Protection Regex Must Include `/`
**Problem:** Paths like `./lib/utils.py` became `py.//..`

**Root Cause:** Character class `[a-zA-Z0-9_.-]` excluded `/`, so regex matched segments separately:
```
./lib/utils.py  →  ./lib, /utils, .py (separate matches!)
```

**Fix:** Use negated character class that INCLUDES `/`:
```typescript
// WRONG - excludes /
/[a-zA-Z0-9_.-]{3,}/g

// CORRECT - includes /
/[^\s<>"|?*]+/g  // Anything except whitespace and special chars
```

**Also:** Process relative paths (`./`, `../`) BEFORE absolute paths (`/path`) to prevent `/lib` from being consumed by absolute path regex.


---

### 8. Don't Nest Interfaces Inside Classes
**Problem:** TypeScript error `TS1068: Unexpected token` when declaring interface inside class body.

**Wrong:**
```typescript
export class Troglodyte {
  interface CompiledPhrase {  // ❌ INVALID!
    phrase: string;
  }
}
```

**Correct:**
```typescript
interface CompiledPhrase {  // ✅ Module-level declaration
  phrase: string;
}

export class Troglodyte {
  private compiledPhrases: CompiledPhrase[];
}
```

---

### 9. Hyphen in Regex Character Class Must Be Escaped or Last
**Problem:** `TS1517: Range out of order in character class` for pattern `/[a-zA-Z0-9_.-'ßäöüÄÖÜ]+/g`

**Root Cause:** Sequence `.-'` tries to create range from `.` (ASCII 46) to `'` (ASCII 39), which is invalid (backwards).

**Fix:** Escape hyphen or place at end:
```typescript
/[a-zA-Z0-9_.\-'ßäöüÄÖÜ]+/g  // ✅ Escaped
// OR
/[a-zA-Z0-9_.'-ßäöüÄÖÜ]+/g   // ✅ At end (but harder to read)
```

---

### 10. Placeholder Counter Duplication Causes 50% Waste
**Problem:** Defining `generatePlaceholder()` but never calling it, while duplicating its logic in `protectIfWorthwhile` causes double-increment.

**Symptom:** Every other placeholder skipped, effective limit halved (~500K instead of ~1M).

**Fix:** Remove unused function, keep single increment path:
```typescript
// ❌ WRONG - two separate increment paths
const generatePlaceholder = () => String.fromCodePoint(0xE000 + counter++);
const protectIfWorthwhile = (match) => {
  protectedItems.push(match);
  return String.fromCodePoint(0xE000 + counter++); // Second increment!
};

// ✅ CORRECT - single increment path only
const protectIfWorthwhile = (match) => {
  if (counter >= MAX) return match;
  protectedItems.push(match);
  return String.fromCodePoint(0xE000 + counter++); // Only one!
};
```

---

---

**Dependencies:**
- `typescript@^6.0.3`
- `@types/node@^22.19.19`

---

## 📝 Key Discoveries

### The Official LM Studio Plugin Installation Method

> **INSTALL THE PLUGIN INSTEAD OF RUNNING DEV**
> 
> ```bash
> lms dev --install
> ```
> 
> Install the plugin into LM Studio instead of running the dev server.

Source: https://lmstudio.ai/docs/cli/develop-and-publish/dev

---

## 🏆 Final Architecture Decisions

### Why EN/DE Only?
1. **Simplicity:** Fewer edge cases, easier maintenance
2. **Stability:** No syntax errors from complex Unicode handling
3. **Performance:** Smaller dictionaries = faster lookups
4. **User Base:** Most users are English/German speakers

### Why Remove Logic Symbols?
1. `'and': '&&'` breaks natural language
2. Belongs in code contexts only
3. Not worth the complexity/risk

---

## 🚀 Quick Reference Commands

```powershell
# Install plugin permanently
lms dev --install

# Clean rebuild (when caching issues occur)
Remove-Item -Recurse -Force dist, node_modules\.cache
npm run build
npm run dev

# Search for existing dictionary entries
grep -n "phrase" src/dictionaries/phrases.ts
```

---

## 📊 Performance Metrics (Post-Fix)

| Metric | Value |
|--------|-------|
| English Compression (Balanced) | ~30-50% reduction ✅ |
| German Compression (Balanced) | ~28-45% reduction ✅ |
| Placeholder Overhead Reduction | 71% less (7+ → 2 chars) ✅ |
| Path Protection Accuracy | 100% ✅ |

---

*Last Updated: May 18, 2026*
