// ==================== TROGLODYTE TEST TEXT GENERATOR ====================
// Run with: node test-text-generator.js
// Outputs various test prompts to verify compression functionality

const fs = require('fs');

// Test cases covering different scenarios
const tests = {
  // Basic English verbose prompt
  englishVerbose: `
Hello there! I was wondering if you could possibly help me out? 
I would really appreciate it if you could explain how to install 
Node.js on Windows step by step. Thank you so much for your time 
and assistance!
`,

  // German verbose prompt
  germanVerbose: `
Hallo! Ich würde mich sehr freuen, wenn du mir bei dieser Aufgabe 
helfen könntest, bitte und danke! Erkläre mir bitte Schritt für 
Schritt, wie man Node.js unter Windows installiert. Vielen Dank!
`,

  // Path protection test (the critical bug fix)
  pathProtection: `
Bitte analysiere den Code in /home/user/project/src/main.ts und ./lib/utils.py.
Also check C:\\Source Code\\ServiceMonitor for issues and ~/Documents/report.pdf.
`,

  // Multiple protected elements
  mixedProtected: `
Check out https://github.com/example/repo/issues/1234 for bug #567.
The code in /path/to/file.ts uses v1.0.0 of the library.
See also C:\\Users\\Name\\project\\main.js and ./relative/path.py
`,

  // Code blocks protection
  codeBlocks: `
Please help me debug this code:

function hello() {
  console.log("Hello, World!");
}

And this inline `code snippet` as well.
Also check ```multi-line
code block```
`,

  // Version numbers and IDs
  versions: `
Upgrade from v1.0.0 to v2.1.3-beta. Check issue #456 and PR #789.
The UUID is 550e8400-e29b-41d4-a716-446655440000.
`,

  // Markdown headers
  markdownHeaders: `
# Main Title
## Section One
### Subsection A
Some content here.
## Section Two
More content.
`,

  // Very long prompt (stress test)
  stressTest: (() => {
    let text = 'Hello, ';
    for (let i = 0; i < 1000; i++) {
      text += `please help me with item number ${i}. `;
    }
    text += 'Thank you so much!';
    return text;
  })(),

  // Edge case: empty and minimal
  edgeCases: [
    '',                    // Empty
    '   ',                 // Whitespace only
    'a',                   // Single character
    'the',                 // Single word (filler)
    'code',                // Single word (not filler)
  ],

  // Path edge cases (regression tests for the bug fix)
  pathEdgeCases: [
    '/home/user/project/src/main.ts und ./lib/utils.py.',           // Original failing case
    './file.txt and ../dir/file.js',                                // Relative paths only
    '/absolute/path/to/file.md',                                    // Absolute Unix path
    '~/home/dir/config.json',                                       // Home directory
    'C:\\Windows\\System32\\config.sys',                             // Windows path
    'D:\\Projects\\My App\\source\\main.ts',                         // Windows with spaces
  ],
};

// Output tests to console and file
console.log('='.repeat(80));
console.log('TROGLODYTE TEST TEXT');
console.log('='.repeat(80));

let allTests = [];

for (const [name, content] of Object.entries(tests)) {
  if (Array.isArray(content)) {
    console.log(`\n[${name.toUpperCase()}] (${content.length} cases)`);
    content.forEach((test, i) => {
      console.log(`  ${i + 1}. "${test.substring(0, 60)}${test.length > 60 ? '...' : ''}"`);
      allTests.push({ name: `${name}[${i}]`, text: test });
    });
  } else {
    console.log(`\n[${name.toUpperCase()}] (${content.length} chars)`);
    const preview = content.trim().substring(0, 100).replace(/\n/g, ' ');
    console.log(`  "${preview}${content.length > 100 ? '...' : ''}"`);
    allTests.push({ name, text: content });
  }
}

// Save to file for easy copying
const output = allTests.map(t => 
  `// Test: ${t.name}\n"${t.text.replace(/\\/g, '\\\\').replace(/"/g, '\\')}"\n`
).join('\n---\n');

fs.writeFileSync('test-texts.txt', output);
console.log(`\n${'='.repeat(80)}`);
console.log(`Generated ${allTests.length} test cases`);
console.log(`Saved to: test-texts.txt`);
console.log(`${'='.repeat(80)}\n`);

// Also print individual tests for easy copying
console.log('\n--- INDIVIDUAL TESTS (copy-paste ready) ---\n');
allTests.forEach((test, i) => {
  console.log(`\n[Test ${i + 1}/${allTests.length}: ${test.name}]`);
  console.log('INPUT:');
  console.log(test.text);
  console.log('\n---\n');
});
