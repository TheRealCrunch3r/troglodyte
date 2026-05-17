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
    const protectUrls = pluginConfig.get("protectUrls") ?? true;
    const protectNumbers = pluginConfig.get("protectNumbers") ?? true;
    const protectHeaders = pluginConfig.get("protectHeaders") ?? true;
    const languageMode = pluginConfig.get("languageMode") ?? "auto";
    const showStats = pluginConfig.get("showStats") ?? true;
    // Create status report for UI feedback
    const status = ctl.createStatus({
        status: "loading",
        text: `Troglodyfying prompt (${compressionLevel})...`,
    });
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
            language: languageMode !== "auto" ? languageMode : undefined,
        });
        // Reconstruct the full message with compressed user input + original system metadata
        const systemMetadata = hasSystemMetadata ? fullText.substring(userInput.length) : '';
        const compressed = compressedUserInput + systemMetadata;
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
            statusText += ` (protected: ${protectionInfo.join(", ")})`;
        }
        status.setState({
            status: "done",
            text: statusText,
        });
        return compressed;
    }
    catch (error) {
        console.error("[Troglodyte] Error compressing prompt:", error);
        // Update status to show error
        status.setState({
            status: "done",
            text: "Compression failed - using original",
        });
        // Return original message if compression fails
        return userMessage.getText();
    }
}
