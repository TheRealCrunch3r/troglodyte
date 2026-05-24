/**
 * Configuration schema for the Troglodyte plugin.
 * Defines UI settings that users can customize in LM Studio.
 */
export declare const configSchematics: import("@lmstudio/sdk").ConfigSchematics<{
    compressionLevel: {
        key: "compressionLevel";
        type: string;
        valueTypeKey: "select";
    };
} & {
    smartMode: {
        key: "smartMode";
        type: boolean;
        valueTypeKey: "boolean";
    };
} & {
    protectUrls: {
        key: "protectUrls";
        type: boolean;
        valueTypeKey: "boolean";
    };
} & {
    protectNumbers: {
        key: "protectNumbers";
        type: boolean;
        valueTypeKey: "boolean";
    };
} & {
    protectHeaders: {
        key: "protectHeaders";
        type: boolean;
        valueTypeKey: "boolean";
    };
} & {
    protectFilePaths: {
        key: "protectFilePaths";
        type: boolean;
        valueTypeKey: "boolean";
    };
} & {
    protectJsonXml: {
        key: "protectJsonXml";
        type: boolean;
        valueTypeKey: "boolean";
    };
} & {
    languageMode: {
        key: "languageMode";
        type: string;
        valueTypeKey: "select";
    };
} & {
    showStats: {
        key: "showStats";
        type: boolean;
        valueTypeKey: "boolean";
    };
}>;
/**
 * Type representing the plugin configuration values.
 */
export type PluginConfig = typeof configSchematics;
