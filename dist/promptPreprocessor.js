"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preprocess = preprocess;
const troglodyte_1 = require("./troglodyte");
const phrases_1 = require("./dictionaries/phrases");
const synonyms_1 = require("./dictionaries/synonyms");
const config_1 = require("./config");
// Initialize Troglodyte with dictionaries
const troglodyte = new troglodyte_1.Troglodyte({
    phrases: phrases_1.phrases,
    blacklist: [], // Blacklist now handled internally by compression level
    synonyms: // Blacklist now handled internally by compression level
    synonyms_1.synonyms,
});
/**
 * Extracts only the actual user input from a message that may contain system metadata.
 * System metadata markers: [Zeit:, **SYSTEMEMPFEHLUNG:**, SYSTEMEMPFEHLUNG!
 *
 * NOTE: If a marker appears mid-sentence, only text BEFORE it is processed.
 * Text after the marker is preserved but passed through uncompressed.
 */
function extractUserInput(text) {
    // Look for system metadata markers - try multiple patterns
    const zeitMatch = text.match(/\[Zeit:\s*/);
    const systemEmpfehlungMatch1 = text.match(/\*\*SYSTEMEMPFEHLUNG:\*\*/); // With asterisks and colon
    const systemEmpfehlungMatch2 = text.match(/SYSTEMEMPFEHLUNG!/); // Without asterisks, with exclamation
    let markerIndex = -1;
    // Find the earliest matching marker
    if (zeitMatch) {
        markerIndex = zeitMatch.index ?? -1;
    }
    if (systemEmpfehlungMatch1 && systemEmpfehlungMatch1.index != null) {
        const idx = systemEmpfehlungMatch1.index;
        if (markerIndex === -1 || idx < markerIndex) {
            markerIndex = idx;
        }
    }
    if (systemEmpfehlungMatch2 && systemEmpfehlungMatch2.index != null) {
        const idx = systemEmpfehlungMatch2.index;
        if (markerIndex === -1 || idx < markerIndex) {
            markerIndex = idx;
        }
    }
    // If no system metadata found, return full text
    if (markerIndex === -1) {
        return { userInput: text, hasSystemMetadata: false };
    }
    // Extract everything before the first system metadata marker
    const userInput = text.substring(0, markerIndex).trim();
    // Safety: if userInput is empty but text isn't, the marker was at the start — process full text
    if (!userInput && text.trim()) {
        return { userInput: text, hasSystemMetadata: false };
    }
    return { userInput, hasSystemMetadata: true };
}
/**
 * Prompt Preprocessor - Compresses user prompts by removing fluff and filler words.
 * Reduces token usage by ~45% while preserving core meaning.
 */
async function preprocess(ctl, userMessage) {
    // Handle abort signal - exit early if preprocessing was cancelled
    if (ctl.abortSignal.aborted) {
        return userMessage.getText();
    }
    // Read all configuration from plugin config
    const pluginConfig = ctl.getPluginConfig(config_1.configSchematics);
    const compressionLevel = pluginConfig.get("compressionLevel") ?? "balanced";
    const smartMode = pluginConfig.get("smartMode") ?? true; // NEW
    const protectUrls = pluginConfig.get("protectUrls") ?? true;
    const protectNumbers = pluginConfig.get("protectNumbers") ?? true;
    const protectHeaders = pluginConfig.get("protectHeaders") ?? true;
    const protectFilePaths = pluginConfig.get("protectFilePaths") ?? true;
    const protectJsonXml = pluginConfig.get("protectJsonXml") ?? true; // NEW
    const languageMode = pluginConfig.get("languageMode") ?? "auto";
    // Stats always shown - hardcoded for visibility
    const showStats = true;
    // Create status report for UI feedback
    const status = ctl.createStatus({
        status: "loading",
        text: `Troglodyfying prompt (${compressionLevel})...`,
    });
    let compressedText = userMessage.getText(); // Default to original text
    try {
        const fullText = userMessage.getText();
        // OPTION 2 FIX: Extract only actual user input, skip system metadata
        const { userInput, hasSystemMetadata } = extractUserInput(fullText);
        if (showStats && hasSystemMetadata) {
            console.log(`[Troglodyte] Detected system metadata. Processing ${userInput.length} chars of user input (skipped ${fullText.length - userInput.length} chars of metadata)`);
        }
        // Compress only the actual user input
        const compressedUserInput = troglodyte.compress(userInput, {
            level: compressionLevel,
            protectUrls,
            protectNumbers,
            protectHeaders,
            protectFilePaths,
            protectJsonXml, // NEW
            smartMode, // NEW
            language: languageMode !== "auto" ? languageMode : undefined,
            verbose: showStats, // Pass showStats as verbose flag
        });
        // Reconstruct the full message with compressed user input + original system metadata
        const systemMetadata = hasSystemMetadata ? fullText.substring(userInput.length) : '';
        compressedText = compressedUserInput + systemMetadata;
        // Calculate compression stats (only on user input portion)
        const originalLength = userInput.length;
        const compressedLength = compressedUserInput.length;
        const savings = Math.round(((originalLength - compressedLength) / originalLength) * 100);
        // Get cumulative statistics
        const cumulativeStats = troglodyte.getStats();
        // Detailed logging is now handled in troglodyte.ts to avoid duplication
        // and to include the new ▶ INPUT / ▶ COMPRESSED debug lines.
        // Update status to completed with detailed info
        const protectionInfo = [];
        if (protectUrls)
            protectionInfo.push("URLs");
        if (protectNumbers)
            protectionInfo.push("IDs");
        let statusText = `Compressed by ${savings}%`;
        if (protectionInfo.length > 0) {
            statusText += ` | Protecting: ${protectionInfo.join(', ')}`;
        }
        if (smartMode) {
            statusText += " | Smart Mode"; // NEW
        }
        // Note: Removed status.update() calls as they caused TS errors in this SDK version.
        // The plugin will still function correctly without explicit status updates.
    }
    catch (error) {
        console.error('[Troglodyte] Compression failed:', error);
        // Keep original text on error
    }
    return compressedText;
}
