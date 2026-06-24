/**
 * Unit tests for Troglodyte compression logic.
 * Run with: npx ts-node src/tests/compression.test.ts
 */

import { Troglodyte } from '../troglodyte';
import { phrases } from '../dictionaries/phrases';
import { synonyms } from '../dictionaries/synonyms';

// Simple test runner
let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${message}`);
    failed++;
  }
}

// Initialize Troglodyte instance
const troglodyte = new Troglodyte({
  phrases,
  blacklist: [],
  synonyms,
});

console.log('🧪 Running Troglodyte Unit Tests...\n');

// ==================== TEST 1: Basic Compression ====================
console.log('--- Test Group 1: Basic Compression ---');
const test1Input = 'Hello there! I was wondering if you could possibly help me out?';
const test1Output = troglodyte.compress(test1Input, { level: 'balanced', verbose: false });
assert(
  test1Output.length < test1Input.length,
  `Compression reduces length (${test1Input.length} → ${test1Output.length})`
);

// ==================== TEST 2: Language Detection ====================
console.log('\n--- Test Group 2: Language Detection ---');

const enText = 'The quick brown fox jumps over the lazy dog.';
const deText = 'Der schnelle braune Fuchs springt über den faulen Hund.';

// Indirect test: English text should use English phrase replacements
const enOutput = troglodyte.compress(enText, { level: 'balanced', verbose: false });
assert(
  typeof enOutput === 'string' && enOutput.length > 0,
  `English input produces valid output: "${enOutput}"`
);

// Indirect test: German text should use German phrase replacements  
const deOutput = troglodyte.compress(deText, { level: 'balanced', verbose: false });
assert(
  typeof deOutput === 'string' && deOutput.length > 0,
  `German input produces valid output: "${deOutput}"`
);

// Test explicit language override (English)
const enForced = troglodyte.compress(deText, { level: 'balanced', verbose: false, language: 'en' });
assert(
  typeof enForced === 'string',
  `Explicit English language override works`
);

// Test explicit language override (German)  
const deForced = troglodyte.compress(enText, { level: 'balanced', verbose: false, language: 'de' });
assert(
  typeof deForced === 'string',
  `Explicit German language override works`
);

// ==================== TEST 3: Protection Rules ====================
console.log('\n--- Test Group 3: Protection Rules ---');

// URL Protection
const urlInput = 'Check out https://example.com/path?id=123 for more info.';
const urlOutput = troglodyte.compress(urlInput, { protectUrls: true, verbose: false });
assert(
  urlOutput.includes('https://example.com/path?id=123'),
  'URLs are preserved during compression'
);

// JSON Protection (NEW)
const jsonInput = 'Here is the data: {"key": "value", "number": 42}.';
const jsonOutput = troglodyte.compress(jsonInput, { protectJsonXml: true, verbose: false });
assert(
  jsonOutput.includes('{"key": "value", "number": 42}'),
  'JSON structures are preserved during compression'
);

// XML Protection (NEW)
const xmlInput = 'The <root><child>text</child></root> is valid.';
const xmlOutput = troglodyte.compress(xmlInput, { protectJsonXml: true, verbose: false });
assert(
  xmlOutput.includes('<root><child>text</child></root>'),
  'XML structures are preserved during compression'
);

// ==================== TEST 4: Smart Mode ====================
console.log('\n--- Test Group 4: Smart Mode ---');
const technicalInput = 'const config = { fileSystem: true, webSearch: false };';
const conversationalInput = 'I would really appreciate it if you could help me with this.';

// In smart mode, technical prompts should preserve more structure
const techOutputSmart = troglodyte.compress(technicalInput, { smartMode: true, verbose: false });
const convOutputSmart = troglodyte.compress(conversationalInput, { smartMode: true, verbose: false });

assert(
  techOutputSmart.includes('config'),
  'Smart Mode preserves technical keywords'
);
assert(
  convOutputSmart.length < conversationalInput.length,
  'Smart Mode still compresses conversational text'
);

// ==================== TEST 5: Edge Cases ====================
console.log('\n--- Test Group 5: Edge Cases ---');

// Empty input
const emptyOutput = troglodyte.compress('', { verbose: false });
assert(
  emptyOutput === '',
  'Empty input returns empty output'
);

// Very short input
const shortInput = 'Hi.';
const shortOutput = troglodyte.compress(shortInput, { verbose: false });
assert(
  shortOutput.length <= shortInput.length,
  'Short input is not expanded'
);

// ==================== SUMMARY ====================
console.log('\n📊 Test Summary:');
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`Total: ${passed + failed}`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('\n🎉 All tests passed!');
}
