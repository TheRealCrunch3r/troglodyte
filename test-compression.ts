// Quick test of Troglodyte compression
import { Troglodyte } from './src/troglodyte';
import { phrases } from './src/dictionaries/phrases';
import { synonyms } from './src/dictionaries/synonyms';

const troglodyte = new Troglodyte({
  phrases,
  blacklist: [],
  synonyms,
});

// Test cases
const tests = [
  {
    name: "English verbose prompt",
    input: "Hello there! I was wondering if you could possibly help me out? I would really appreciate it if you could explain how to install Node.js on Windows step by step. Thank you so much for your time and assistance!",
    expectedMaxRatio: 0.6, // Should compress to at most 60% of original
  },
  {
    name: "English with URL",
    input: "Please check out https://example.com/very-long-path-that-should-be-protected and tell me what you think about it.",
    expectedMaxRatio: 0.7,
  },
  {
    name: "German verbose prompt",
    input: "Hallo! Ich würde mich sehr freuen, wenn du mir bei dieser Aufgabe helfen könntest, bitte und danke!",
    expectedMaxRatio: 0.65,
  },
  {
    name: "Code block preservation",
    input: "Please help me fix this code: function add(a, b) { return a + b; }. It's not working correctly.",
    expectedMaxRatio: 0.7,
  },
];

console.log("\n=== TROGLODYTE COMPRESSION TESTS ===\n");

let passed = 0;
let failed = 0;

for (const test of tests) {
  console.log(`Test: ${test.name}`);
  console.log(`Input (${test.input.length} chars): "${test.input.substring(0, 80)}..."`);
  
  const compressed = troglodyte.compress(test.input, { level: "balanced" });
  const ratio = compressed.length / test.input.length;
  
  console.log(`Output (${compressed.length} chars): "${compressed.substring(0, 80)}..."`);
  console.log(`Ratio: ${(ratio * 100).toFixed(1)}% (target: <${(test.expectedMaxRatio * 100).toFixed(0)}%)`);
  
  if (ratio <= test.expectedMaxRatio) {
    console.log("✅ PASSED\n");
    passed++;
  } else {
    console.log("❌ FAILED - Compression too weak!\n");
    failed++;
  }
}

console.log(`\n=== RESULTS: ${passed} passed, ${failed} failed ===`);
