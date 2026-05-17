"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const promptPreprocessor_1 = require("./promptPreprocessor");
const config_1 = require("./config");
/**
 * Main entry point for the Troglodyte plugin.
 * Registers the prompt preprocessor and configuration with LM Studio.
 */
async function main(context) {
    // Register the configuration schematics (enables UI settings)
    context.withConfigSchematics(config_1.configSchematics);
    // Register the prompt preprocessor
    context.withPromptPreprocessor(promptPreprocessor_1.preprocess);
}
