import { type PluginContext } from "@lmstudio/sdk";
import { preprocess } from "./promptPreprocessor";
import { configSchematics } from "./config";

/**
 * Main entry point for the Troglodyte plugin.
 * Registers the prompt preprocessor and configuration with LM Studio.
 */
export async function main(context: PluginContext) {
  // Register the configuration schematics (enables UI settings)
  context.withConfigSchematics(configSchematics);
  
  // Register the prompt preprocessor
  context.withPromptPreprocessor(preprocess);
}
