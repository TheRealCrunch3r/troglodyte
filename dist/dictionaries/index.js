"use strict";
/**
 * Multi-language dictionary index.
 * Exports all language-specific filler word dictionaries.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_LANGUAGES = exports.LANGUAGE_DICTIONARIES = exports.DE_BLACKLIST = exports.EN_BLACKLIST = void 0;
var en_filler_1 = require("./en-filler");
Object.defineProperty(exports, "EN_BLACKLIST", { enumerable: true, get: function () { return en_filler_1.EN_BLACKLIST; } });
var de_filler_1 = require("./de-filler");
Object.defineProperty(exports, "DE_BLACKLIST", { enumerable: true, get: function () { return de_filler_1.DE_BLACKLIST; } });
// Map of language code to blacklist object
const en_filler_2 = require("./en-filler");
const de_filler_2 = require("./de-filler");
exports.LANGUAGE_DICTIONARIES = {
    en: en_filler_2.EN_BLACKLIST,
    de: de_filler_2.DE_BLACKLIST,
};
exports.SUPPORTED_LANGUAGES = ['en', 'de'];
