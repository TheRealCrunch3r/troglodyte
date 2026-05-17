import { type PromptPreprocessorController, type ChatMessage } from "@lmstudio/sdk";
/**
 * Prompt Preprocessor - Compresses user prompts by removing fluff and filler words.
 * Reduces token usage by ~45% while preserving core meaning.
 */
export declare function preprocess(ctl: PromptPreprocessorController, userMessage: ChatMessage): Promise<string>;
