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

// Test 10d: Windows path with spaces
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
