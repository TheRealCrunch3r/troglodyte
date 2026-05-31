// ==================== TROGLODYTE TEST CASES ====================
// Copy each test and paste into LM Studio to verify compression

// ============================================================
// TEST 1: Basic English Verbose Prompt
// Expected: ~60-70% compression, polite fillers removed
// ============================================================
"Hello there! I was wondering if you could possibly help me out? I would really appreciate it if you could explain how to install Node.js on Windows step by step. Thank you so much for your time and assistance!"

// Expected output (Balanced mode):
// "possibly help me out? explain how install Node.js Windows steps. and assistance."

---

// ============================================================
// TEST 2: German Verbose Prompt
// Expected: ~50-65% compression, German polite fillers removed
// ============================================================
"Hallo! Ich würde mich sehr freuen, wenn du mir bei dieser Aufgabe helfen könntest, bitte und danke! Erkläre mir bitte Schritt für Schritt, wie man Node.js unter Windows installiert. Vielen Dank!"

// Expected output (Balanced mode):
// "würde freuen, wenn bei dieser Aufgabe helfen könntest explain detailed install Node.js Windows."

---

// ============================================================
// TEST 3: Path Protection - CRITICAL BUG FIX TEST
// This was the main bug: paths getting fragmented!
// Expected: Both paths preserved INTACT with extensions
// ============================================================
"Bitte analysiere den Code in /home/user/project/src/main.ts und ./lib/utils.py."

// ✅ CORRECT output:
// "analysiere Code /home/user/project/src/main.ts ./lib/utils.py."

// ❌ WRONG (old buggy behavior):
// "analysiere Code lib utils /home/user/project/src/main.ts py.//.."

---

// ============================================================
// TEST 4: Multiple Path Types
// Expected: All paths preserved intact
// ============================================================
"Check /absolute/path/to/file.md and ~/home/config.json plus ./relative/file.txt and ../parent/dir.js also C:\\Windows\\System32\\config.sys"

// ✅ CORRECT output:
// "Check /absolute/path/to/file.md ~/home/config.json ./relative/file.txt ../parent/dir.js C:\\Windows\\System32\\config.sys"

---

// ============================================================
// TEST 5: Mixed Protected Elements
// Expected: URLs, versions, IDs, paths all preserved
// ============================================================
"Check out https://github.com/example/repo/issues/1234 for bug #567. The code in /path/to/file.ts uses v1.0.0 of the library."

// ✅ CORRECT output:
// "Check https://github.com/example/repo/issues/1234 bug #567. code /path/to/file.ts uses v1.0.0 library."

---

// ============================================================
// TEST 6: Code Blocks Protection
// Expected: All code blocks preserved exactly as-is
// ============================================================
"Please help me debug this code:\n\nfunction hello() {\n  console.log(\"Hello, World!\");\n}\n\nAnd this inline `code snippet` as well."

// ✅ CORRECT output:
// "help debug code:\n\nfunction hello() {\n  console.log(\"Hello, World!\");\n}\n\ninline `code snippet`."

---

// ============================================================
// TEST 7: Version Numbers and IDs
// Expected: All versions/IDs preserved
// ============================================================
"Upgrade from v1.0.0 to v2.1.3-beta. Check issue #456 and PR #789. The UUID is 550e8400-e29b-41d4-a716-446655440000."

// ✅ CORRECT output:
// "Upgrade v1.0.0 v2.1.3-beta. Check issue #456 PR #789. UUID 550e8400-e29b-41d4-a716-446655440000."

---

// ============================================================
// TEST 8: Markdown Headers Protection
// Expected: All headers preserved intact
// ============================================================
"# Main Title\n## Section One\n### Subsection A\nSome content here.\n## Section Two\nMore content."

// ✅ CORRECT output:
// "# Main Title\n## Section One\n### Subsection A\ncontent.\n## Section Two\ncontent."

---

// ============================================================
// TEST 9: Edge Cases - Minimal Input
// Expected: Handle gracefully without errors
// ============================================================
""
"   "
"a"
"the"
"code"

---

// ============================================================
// TEST 10: Path Edge Cases (Regression Tests)
// These specifically test the bug fix for path fragmentation
// ============================================================

// Test 10a: Original failing case
"./file.txt and ../dir/file.js"
// ✅ Expected: "./file.txt ../dir/file.js"

// Test 10b: Absolute Unix path only
"/absolute/path/to/file.md"
// ✅ Expected: "/absolute/path/to/file.md"

// Test 10c: Home directory
"~/home/dir/config.json"
// ✅ Expected: "~/home/dir/config.json"

// Test 10d: Windows path with extension
"C:\\Source Code\\troglodyte\\src\\troglodyte.ts"
// ✅ Expected: "C:\\Source Code\\troglodyte\\src\\troglodyte.ts"

// ============================================================
// TEST 11: Large JSON/XML Structure (Performance Test)
// Verifies the O(n) XML parser handles deep nesting without freezing
// ============================================================
"Here is a complex JSON structure: { \"data\": { \"nested\": { \"deeply\": { \"value\": \"important\" } } } }. Please analyze it carefully."
// ✅ Expected: JSON structure preserved intact, no UI freeze during compression.

// ============================================================
// TEST 12: Long Prompt Language Detection
// Verifies language detection works within the first 1000 chars
// ============================================================
"Hallo! Ich würde mich sehr freuen, wenn du mir bei dieser Aufgabe helfen könntest, bitte und danke! " + " ".repeat(1200) + " Erkläre mir bitte Schritt für Schritt, wie man Node.js unter Windows installiert. Vielen Dank!"
// ✅ Expected: Detected as German, compression applied correctly.th spaces
"D:\\Projects\\My App\\source\\main.ts"
// ✅ Expected: "D:\\Projects\\My App\\source\\main.ts"

---

// ============================================================
// TEST 11: Stress Test - Long Prompt
// Expected: Handle efficiently without memory issues
// ============================================================
"Hello, please help me with item number 0. please help me with item number 1. ... [repeated 1000 times] ... Thank you so much!"

---

// ============================================================
// TEST 12: Compression Level Comparison
// Test same input at different levels to verify progressive compression
// ============================================================
"I was wondering if you could please explain the concept of photosynthesis in detail, thank you very much."

// Gentle (~20-30%):
// "wondering explain concept photosynthesis detail"

// Balanced (~45%):
// "explain concept photosynthesis detail"

// Aggressive (~60-70%):
// "explain photosynthesis"

---

// ============================================================
// SUMMARY: Key Things to Verify
// ============================================================
// ✅ Polite fillers removed (please, thank you, etc.)
// ✅ Redundant phrases collapsed ("in order to" → "to")
// ✅ File paths preserved INTACT with extensions (/path/file.ts not /path/file)
// ✅ URLs preserved intact
// ✅ Version numbers preserved (v1.0.0, v2.1.3-beta)
// ✅ Issue/PR refs preserved (#456, #789)
// ✅ UUIDs preserved
// ✅ Code blocks preserved exactly
// ✅ Markdown headers preserved
// ✅ No crashes on edge cases (empty input, single chars)
// ✅ German language support working
// ✅ Compression ratios match expected ranges

// ============================================================
// TEST 11: Word Filtering Reconstruction (May 31, 2026 Fix)
// This tests the fix for empty strings shifting delimiters during reconstruction
// Expected: No leading spaces or misaligned punctuation
// ============================================================
"Please help me with this task. Thank you!"

// ✅ CORRECT output (after May 31 fix):
// "help task."

// ❌ WRONG (old buggy behavior before fix):
// " help task."  ← leading space from empty string interleaving


---

// ============================================================
// TEST 12: XML Structure Protection (May 31, 2026 Fix)
// This tests the fix for XML depth tracking matching unrelated tags
// Expected: Only outermost complete <tag>...</tag> structures are protected
// ============================================================
"The <root><child>text</child></root> is valid and <other>nested</other> too."

// ✅ CORRECT output (after May 31 fix):
// "The [PUA] is valid and [PUA] too."
// Where [PUA] represents the protected XML structures


---

// ============================================================
// TEST 13: Technical Context Detection (May 31, 2026 Fix)
// This tests the fix for over-counting overlapping code patterns
// Expected: Code-heavy prompts are correctly identified as technical
// ============================================================
"const config = { fileSystem: true }; function add(a, b) { return a + b; }"

// ✅ CORRECT output (after May 31 fix):
// Technical context detected → synonym replacement disabled


---

// ============================================================
// TEST 14: escapeRegex Edge Cases (May 31, 2026 Fix)
// This tests that phrase replacements with special characters work correctly
// Expected: No double-escaping of regex metacharacters in phrases
// ============================================================
"Hello there! I was wondering if you could possibly help me out?"

// ✅ CORRECT output (after May 31 fix):
// "possibly help me out?"


---

// ============================================================
// TEST 15: Mixed Protected Elements with Reconstruction Fix
// Combined test: URLs, paths, versions, AND proper word filtering
// Expected: All protections work together without reconstruction bugs
// ============================================================
"Please check https://example.com/path?id=123 and C:\\Source Code\\Project for issues. Thank you!"

// ✅ CORRECT output (after May 31 fix):
// "check https://example.com/path?id=123 C:\\Source Code\\Project issues."


---

// ============================================================
// TEST 16: German Word Filtering Reconstruction
// Tests that German word filtering doesn't cause reconstruction issues
// Expected: Clean output without orphaned punctuation or spaces
// ============================================================
"Hallo! Ich würde mich sehr freuen, wenn du mir bei dieser Aufgabe helfen könntest, bitte und danke!"

// ✅ CORRECT output (after May 31 fix):
// "würde freuen Aufgabe helfen könntest"


---

// ============================================================
// TEST 17: Edge Case - All Words Filtered Out
// Tests that reconstruction handles edge case where all words are filtered
// Expected: Returns empty or minimal output without errors
// ============================================================
"Please thank you hello goodbye"

// ✅ CORRECT output (after May 31 fix):
// "" (empty)


---

// ============================================================
// TEST 18: Edge Case - No Words Filtered Out
// Tests that reconstruction handles case where no words are filtered
// Expected: Original text preserved with minimal cleanup
// ============================================================
"Hello world this is a test"

// ✅ CORRECT output (after May 31 fix):
// "world test"


---

// ============================================================
// TEST 19: XML Nested Structures
// Tests that nested XML structures are correctly identified as outermost
// Expected: Only the outermost complete structure is protected
// ============================================================
"The <outer><inner>text</inner></outer> and <standalone/> elements."

// ✅ CORRECT output (after May 31 fix):
// "The [PUA] and [PUA] elements."


---

// ============================================================
// TEST 20: Technical Context with Code Braces
// Tests that code braces are correctly counted without overlap
// Expected: Correct technical context detection
// ============================================================
"const obj = { key: 'value', nested: { deep: true } }; console.log(obj);"

// ✅ CORRECT output (after May 31 fix):
// Technical context detected → synonym replacement disabled


---

*Last Updated: May 31, 2026 — Word Filtering & XML Depth Tracking Fixes*
