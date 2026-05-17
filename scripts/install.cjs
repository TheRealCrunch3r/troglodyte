// Install script for Troglodyte LM Studio Plugin
// This copies the built plugin to LM Studio's extensions/plugins directory

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const PLUGIN_NAME = 'troglodyte';
const SOURCE_DIR = process.cwd();

// Detect LM Studio plugins directory
function getLmStudioPluginsDir() {
  // Check environment variable first
  if (process.env.LM_STUDIO_PLUGINS_DIR) {
    return process.env.LM_STUDIO_PLUGINS_DIR;
  }

  // Default locations by platform
  const homeDir = process.env.HOME || process.env.USERPROFILE || '';
  
  const possiblePaths = [
    path.join(homeDir, '.lmstudio', 'extensions', 'plugins'),
    path.join(homeDir, 'AppData', 'Roaming', 'LM Studio', 'plugins'),
    path.join(process.cwd(), '..', '..'), // Fallback
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }

  // Default to .lmstudio in home
  return path.join(homeDir, '.lmstudio', 'extensions', 'plugins');
}

// Files/folders to EXCLUDE from installation (dev-only)
const EXCLUDE = [
  '.git',
  '.gitignore',
  '.lmstudio',      // Dev server entry points - NOT needed for production
  'src',            // Source files - only dist/ is needed
  'scripts',        // Build scripts not needed in installed plugin
  'tsconfig.json',  // TypeScript config not needed
  'node_modules',   // Will be reinstalled fresh
  '*.md',           // Documentation files (optional, but saves space)
];

// Check if file/folder should be excluded
function shouldExclude(name) {
  // Exact match
  if (EXCLUDE.includes(name)) return true;
  
  // Pattern match for *.md files
  if (name.endsWith('.md')) return true;
  
  // Backup directories
  if (name.includes('.backup.')) return true;
  
  return false;
}

// Copy directory recursively with exclusions
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    // Skip excluded files/folders
    if (shouldExclude(entry.name)) {
      console.log(`   ⏭️  Skipping ${entry.name}`);
      continue;
    }

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`   ✅ ${entry.name}`);
    }
  }
}

// Main installation function
function install() {
  console.log('📦 Installing Troglodyte Plugin...\n');

  // Step 1: Verify build exists
  const distIndex = path.join(SOURCE_DIR, 'dist', 'index.js');
  if (!fs.existsSync(distIndex)) {
    console.error('❌ Error: Build not found! Run "npm run build" first.');
    process.exit(1);
  }
  console.log('✅ Build verified');

  // Step 2: Get target directory
  const pluginsDir = getLmStudioPluginsDir();
  const targetDir = path.join(pluginsDir, PLUGIN_NAME);
  console.log(`📁 Target: ${targetDir}`);

  // Step 3: Backup existing installation if any
  if (fs.existsSync(targetDir)) {
    const backupDir = `${targetDir}.backup.${Date.now()}`;
    console.log(`⚠️  Existing plugin found, creating backup at: ${backupDir}`);
    fs.renameSync(targetDir, backupDir);
  }

  // Step 4: Copy plugin files
  console.log('📋 Copying files...');
  copyDir(SOURCE_DIR, targetDir);

  // Step 5: Install dependencies in target directory
  console.log('🔧 Installing dependencies...');
  try {
    execSync('npm install --production', { cwd: targetDir, stdio: 'inherit' });
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
  }

  // Step 6: Verify installation
  console.log('\n🔍 Verifying installation...');
  const requiredFiles = [
    'manifest.json',
    'package.json',
    'dist/index.js',
    'node_modules/@lmstudio/sdk'
  ];
  
  let allPresent = true;
  for (const file of requiredFiles) {
    const fullPath = path.join(targetDir, file);
    if (fs.existsSync(fullPath)) {
      console.log(`   ✅ ${file}`);
    } else {
      console.error(`   ❌ MISSING: ${file}`);
      allPresent = false;
    }
  }
  
  if (!allPresent) {
    console.error('\n❌ Installation verification failed! Some required files are missing.');
    process.exit(1);
  }

  console.log('\n✅ Plugin installed successfully!\n');
  console.log('📝 Instructions:');
  console.log(`   1. Restart LM Studio`);
  console.log(`   2. Go to Plugins (puzzle piece icon)`);
  console.log(`   3. Enable "Troglodyte" plugin`);
  console.log(`\n📍 Plugin location: ${targetDir}\n`);
}

// Run installation
install();
