// Package script for Troglodyte LM Studio Plugin
// Creates a distributable .zip file

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PLUGIN_NAME = 'troglodyte';
const OUTPUT_DIR = 'release';
const PACKAGE_NAME = `${PLUGIN_NAME}-plugin.zip`;

console.log('📦 Packaging Troglodyte Plugin...\n');

// Create release directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Files/folders to include
const INCLUDE = [
  'dist',
  'node_modules',
  'package.json',
  'manifest.json',
  'README.md',
];

// Create a temporary staging directory
const STAGING_DIR = path.join(__dirname, '..', '.package-staging');
if (fs.existsSync(STAGING_DIR)) {
  fs.rmSync(STAGING_DIR, { recursive: true });
}
fs.mkdirSync(STAGING_DIR, { recursive: true });

// Copy included files to staging
console.log('📋 Preparing files...');
for (const item of INCLUDE) {
  const srcPath = path.join(__dirname, '..', item);
  const destPath = path.join(STAGING_DIR, item);
  
  if (!fs.existsSync(srcPath)) {
    console.log(`   ⚠️  Skipping ${item} (not found)`);
    continue;
  }

  if (fs.statSync(srcPath).isDirectory()) {
    copyDirRecursive(srcPath, destPath);
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
  console.log(`   ✅ ${item}`);
}

// Create zip using PowerShell (Windows)
const OUTPUT_PATH = path.join(__dirname, '..', OUTPUT_DIR, PACKAGE_NAME);
console.log(`\n📁 Creating ${PACKAGE_NAME}...`);

try {
  execSync(
    `powershell -Command "Compress-Archive -Path '${STAGING_DIR}\*' -DestinationPath '${OUTPUT_PATH}' -Force"`,
    { stdio: 'pipe' }
  );
  console.log('✅ Archive created!\n');
} catch (error) {
  console.error('❌ Failed to create archive:', error.message);
  process.exit(1);
}

// Cleanup staging directory
fs.rmSync(STAGING_DIR, { recursive: true });

// Show result
const stats = fs.statSync(OUTPUT_PATH);
const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
console.log(`📦 Package created successfully!`);
console.log(`   📍 Location: ${OUTPUT_PATH}`);
console.log(`   📏 Size: ${sizeMB} MB\n`);

// Helper functionunction copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
