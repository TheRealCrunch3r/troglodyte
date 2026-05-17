# Deployment Guide

## 🚀 Deploying Troglodyte to LM Studio

---

## Method 1: Permanent Installation (Recommended)

### Step-by-Step

```bash
# 1. Navigate to project directory
cd "C:\Source Code\LM Studio Plugins\troglodyte"

# 2. Install dependencies (first time only)
npm install

# 3. Build the project
npm run build

# 4. Install plugin permanently
lms dev --install
```

### Verify Installation

1. **Restart LM Studio** (if already running)
2. Click the **Plugins icon** (🧩 puzzle piece) in sidebar
3. Find **"Troglodyte"** in the list
4. Toggle it **ON**
5. Send a test prompt to verify compression

---

## Method 2: Development Mode (Hot-Reload)

For active development with automatic reload:

```bash
cd "C:\Source Code\LM Studio Plugins\troglodyte"
npm run dev
```

**Leave this terminal open.** The plugin will appear in LM Studio's plugins list.

### When to Use
- Active development
- Testing dictionary changes
- Debugging compression pipeline

---

## Method 3: Package and Distribute

Create a distributable package:

```bash
npm run package
```

This creates a packaged version that can be shared with other users.

---

## Updating After Changes

### Quick Update
```bash
# Rebuild and reinstall
npm run build && lms dev --install
```

LM Studio will automatically reload the updated plugin.

---

## Troubleshooting Deployment

### Plugin Doesn't Appear in LM Studio

**Checklist:**
1. ✅ `lms dev --install` completed successfully
2. ✅ `dist/index.js` exists after build
3. ✅ LM Studio restarted completely
4. ✅ Plugins sidebar opened (🧩 icon)

**Debug Steps:**
```bash
# Verify build output
ls dist/

# Check for errors in build log
npm run build 2>&1 | tee build.log
```

---

### Plugin Causes Errors

**Check LM Studio Console:**
1. Press `F12` to open Developer Tools
2. Go to **Console** tab
3. Look for `[Troglodyte]` error messages

**Common Issues:**
- TypeScript compilation errors → Check build log
- Missing dependencies → Run `npm install`
- Configuration mismatch → Reset plugin settings

---

### Clean Rebuild (When Caching Issues Occur)

```powershell
# Windows PowerShell
Remove-Item -Recurse -Force dist, node_modules\.cache
npm install
npm run build
lms dev --install
```

```bash
# Linux/Mac
rm -rf dist node_modules/.cache
npm install
npm run build
lms dev --install
```

---

## Verification Tests

### Test 1: Basic Compression

**Input:**
```
Hello! Could you please help me? Thank you!
```

**Expected Output (Balanced):**
```
help me
```

---

### Test 2: Path Protection ⚠️

**Input:**
```
check C:\Source Code\ServiceMonitor for issues.
```

**Expected Output:**
```
check C:\Source Code\ServiceMonitor issues.
```

Path must NOT be corrupted to `C:\src Code\...`

---

### Test 3: URL Protection

**Input:**
```
Visit https://example.com/path?id=123 for documentation.
```

**Expected Output:**
```
Visit https://example.com/path?id=123 documentation.
```

URL must remain intact.

---

### Test 4: Version Number Protection

**Input:**
```
Install Node.js v18.17.0 on Windows.
```

**Expected Output:**
```
Install Node.js v18.17.0 Windows.
```

Version number must remain intact.

---

## Environment Variables (Optional)

No environment variables are required for deployment.

---

## System Requirements

| Component | Minimum |
|-----------|--------|
| Node.js | 18+ |
| LM Studio | Latest stable release |
| OS | Windows 10+, macOS, Linux |

---

## Rollback Procedure

If a new version causes issues:

```bash
# 1. Disable plugin in LM Studio
# (Toggle OFF in Plugins sidebar)

# 2. Reinstall previous version (if available)
git checkout <previous-commit>
npm run build
lms dev --install

# 3. Restart LM Studio
```

---

## Production Checklist

Before deploying to production:

- [ ] All tests pass
- [ ] Path protection verified (`C:\Source Code\...` intact)
- [ ] URL protection verified
- [ ] Version number protection verified
- [ ] Compression ratio within expected range (30-70%)
- [ ] No console errors in LM Studio
- [ ] Documentation updated
- [ ] CHANGELOG.md updated

---

## Quick Reference Commands

```bash
# Fresh install
npm install && npm run build && lms dev --install

# Update after changes
npm run build && lms dev --install

# Clean rebuild
rm -rf dist node_modules/.cache && npm install && npm run build

# Development mode (hot-reload)
npm run dev
```

---

*Last Updated: May 17, 2026*
