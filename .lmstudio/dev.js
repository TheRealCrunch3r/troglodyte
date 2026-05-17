"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/dictionaries/en-filler.ts
var EN_GENTLE, EN_BALANCED, EN_AGGRESSIVE, EN_BLACKLIST;
var init_en_filler = __esm({
  "src/dictionaries/en-filler.ts"() {
    "use strict";
    EN_GENTLE = [
      "please",
      "thanks",
      "thank",
      "appreciate",
      "appreciated",
      "grateful",
      "kindly",
      "polite",
      "um",
      "uh",
      "oh",
      "ah",
      "wow",
      "hmm",
      "hmmm",
      "well",
      "okay",
      "ok"
    ];
    EN_BALANCED = [
      ...EN_GENTLE,
      // Articles
      "a",
      "an",
      "the",
      // Subject pronouns
      "i",
      "me",
      "my",
      "mine",
      "myself",
      "we",
      "us",
      "our",
      "ours",
      "ourselves",
      "you",
      "your",
      "yours",
      "yourself",
      "yourselves",
      // Copulas
      "is",
      "am",
      "are",
      "was",
      "were",
      "be",
      "been",
      "being",
      // Auxiliaries
      "have",
      "has",
      "had",
      "do",
      "does",
      "did",
      "will",
      "would",
      "could",
      "should",
      "may",
      "might",
      "can",
      "shall",
      // Prepositions
      "of",
      "in",
      "to",
      "for",
      "with",
      "on",
      "at",
      "from",
      "by",
      "about",
      "up",
      "down",
      "out",
      "off",
      "over",
      "through",
      "into",
      "after",
      "before",
      "during",
      "again",
      "here",
      "there",
      "between",
      "under",
      "above",
      "below",
      "near",
      "around",
      "against",
      "within",
      "without",
      "along",
      "across",
      "behind",
      "beyond",
      "inside",
      "outside",
      "toward",
      "towards",
      "upon",
      "via",
      "per",
      "among",
      // Conjunctions
      "and",
      "but",
      "or",
      "nor",
      "yet",
      "so",
      "because",
      "since",
      "unless",
      "while",
      "although",
      "though",
      "if",
      "whether",
      "as",
      "than",
      "that",
      "when",
      "where",
      // Demonstratives
      "this",
      "these",
      "those",
      "such",
      // Quantifiers
      "some",
      "any",
      "all",
      "each",
      "every",
      "both",
      "few",
      "many",
      "much",
      "more",
      "most",
      "other",
      "another",
      "same",
      "own",
      "enough",
      "only",
      "even",
      "also",
      "too",
      "very",
      "really",
      "quite",
      "rather",
      "just",
      "still",
      "already",
      "yet",
      "almost",
      "nearly",
      "only",
      "simply",
      "basically",
      "literally",
      "actually",
      "obviously",
      "clearly",
      "certainly",
      "definitely",
      "absolutely",
      "truly",
      "honestly",
      "seriously",
      "essentially",
      "generally",
      "typically",
      "usually",
      "normally",
      "commonly",
      "frequently",
      "often",
      "regularly",
      "always",
      "never",
      "ever",
      "sometimes",
      "often",
      "rarely",
      "seldom",
      // High-frequency verbs (safe to remove in context)
      "get",
      "got",
      "go",
      "goes",
      "going",
      "gone",
      "make",
      "made",
      "take",
      "took",
      "give",
      "gave",
      "know",
      "knew",
      "think",
      "thought",
      "see",
      "saw",
      "look",
      "find",
      "tell",
      "ask",
      "need",
      "try",
      "feel",
      "keep",
      "let",
      "begin",
      "start",
      "show",
      "hear",
      "call",
      "turn",
      "move",
      "live",
      "hold",
      "bring",
      "happen",
      "write",
      "provide",
      "sit",
      "stand",
      "pay",
      "meet",
      "include",
      "continue",
      "set",
      "learn",
      "change",
      "lead",
      "understand",
      "watch",
      "follow",
      "create",
      "speak",
      "read",
      "allow",
      "add",
      "spend",
      "grow",
      "open",
      "walk",
      "offer",
      "remember",
      "consider",
      "appear",
      "wait",
      "serve",
      "send",
      "expect",
      "build",
      "stay",
      "fall",
      "reach",
      "remain",
      "suggest",
      "raise",
      "pass",
      "sell",
      "require",
      "report",
      "decide",
      "pull",
      "return",
      "develop",
      "accept",
      "argue",
      "die",
      "believe",
      "seem",
      "hate",
      "love",
      "like",
      "want",
      "hope",
      "wish",
      "suppose",
      "imagine",
      "realize",
      "notice",
      "recognize",
      "suppose",
      "wonder",
      "pretend",
      "refuse",
      "claim",
      "announce",
      "explain",
      "describe",
      "mention",
      "discuss",
      "suggest",
      "recommend",
      "advise",
      "warn",
      "promise",
      "agree",
      "disagree",
      "accept",
      "reject",
      "deny",
      "admit",
      "confess",
      "declare",
      "discover",
      "invent",
      "design",
      "produce",
      "prepare",
      "arrange",
      "organize",
      "manage",
      "control",
      "operate",
      "run",
      "drive",
      "fly",
      "swim",
      "run",
      "jump",
      "climb",
      "push",
      "pull",
      "lift",
      "carry",
      "deliver",
      "receive",
      "obtain",
      "achieve",
      "accomplish",
      "complete",
      "finish",
      "end",
      "stop",
      "pause",
      "continue",
      "proceed",
      "advance",
      "progress",
      "improve",
      "increase",
      "decrease",
      "reduce",
      "expand",
      "extend",
      "limit",
      "restrict",
      "prevent",
      "avoid",
      "escape",
      "protect",
      "defend",
      "attack",
      "fight",
      "win",
      "lose",
      "succeed",
      "fail",
      "try",
      "attempt",
      "practice",
      "train",
      "study",
      "teach",
      "learn",
      "discover",
      "explore",
      "search",
      "seek",
      "hunt",
      "catch",
      "capture",
      "release",
      "free",
      "save",
      "rescue",
      "help",
      "support",
      "assist",
      "serve",
      "employ",
      "hire",
      "fire",
      "promote",
      "demote",
      "appoint",
      "elect",
      "vote",
      "choose",
      "select",
      "prefer",
      "decide",
      "determine",
      "conclude",
      "judge",
      "evaluate",
      "assess",
      "measure",
      "calculate",
      "count",
      "estimate",
      "predict",
      "forecast",
      "plan",
      "prepare",
      "organize",
      "arrange",
      "schedule",
      "book",
      "order",
      "request",
      "demand",
      "command",
      "direct",
      "instruct",
      "guide",
      "lead",
      "follow",
      "accompany",
      "join",
      "leave",
      "depart",
      "arrive",
      "return",
      "enter",
      "exit",
      "approach",
      "withdraw",
      "retreat",
      "advance",
      "move",
      "shift",
      "transfer",
      "transport",
      "deliver",
      "send",
      "receive",
      "collect",
      "gather",
      "distribute",
      "spread",
      "scatter",
      "concentrate",
      "focus",
      "aim",
      "target",
      "hit",
      "miss",
      "strike",
      "touch",
      "grab",
      "hold",
      "release",
      "let",
      "allow",
      "permit",
      "enable",
      "force",
      "compel",
      "oblige",
      "require",
      "need",
      "want",
      "desire",
      "wish",
      "hope",
      "expect",
      "anticipate",
      "fear",
      "dread",
      "worry",
      "concern",
      "interest",
      "attract",
      "appeal",
      "please",
      "satisfy",
      "disappoint",
      "surprise",
      "amaze",
      "astonish",
      "shock",
      "frighten",
      "scare",
      "terrify",
      "calm",
      "relax",
      "rest",
      "sleep",
      "wake",
      "rise",
      "stand",
      "sit",
      "lie",
      "lean",
      "bend",
      "twist",
      "turn",
      "spin",
      "rotate",
      "revolve",
      "orbit",
      "circle",
      "surround",
      "enclose",
      "contain",
      "include",
      "exclude",
      "involve",
      "affect",
      "influence",
      "impact",
      "change",
      "alter",
      "modify",
      "adjust",
      "adapt",
      "transform",
      "convert",
      "translate",
      "interpret",
      "explain",
      "clarify",
      "simplify",
      "complicate",
      "confuse",
      "puzzle",
      "mystify",
      "reveal",
      "expose",
      "hide",
      "conceal",
      "cover",
      "uncover",
      "discover",
      "find",
      "locate",
      "identify",
      "recognize",
      "distinguish",
      "differentiate",
      "compare",
      "contrast",
      "match",
      "fit",
      "suit",
      "work",
      "function",
      "operate",
      "perform",
      "execute",
      "accomplish",
      "achieve",
      "attain",
      "reach",
      "gain",
      "earn",
      "win",
      "lose",
      "spend",
      "cost",
      "charge",
      "price",
      "value",
      "worth",
      "rich",
      "poor",
      "cheap",
      "expensive",
      "free",
      "paid",
      "affordable",
      "costly"
    ];
    EN_AGGRESSIVE = [
      ...EN_BALANCED,
      // Object pronouns
      "he",
      "him",
      "his",
      "himself",
      "she",
      "her",
      "hers",
      "herself",
      "it",
      "its",
      "itself",
      "they",
      "them",
      "their",
      "theirs",
      "themselves",
      // Relative pronouns
      "which",
      "who",
      "whom",
      "whose",
      "what",
      "where",
      "when",
      "why",
      "how",
      // Intensifiers
      "extremely",
      "incredibly",
      "absolutely",
      "totally",
      "completely",
      "utterly",
      "highly",
      "particularly",
      "especially",
      "fundamentally",
      "generally",
      "typically",
      "usually",
      "normally",
      "commonly",
      "frequently",
      "regularly",
      "consistently",
      "constantly",
      "continuously",
      "perpetually",
      "always",
      "never",
      "ever",
      "however",
      "moreover",
      "furthermore",
      "additionally",
      "either",
      "neither",
      "least",
      "less",
      "beyond"
    ];
    EN_BLACKLIST = {
      gentle: EN_GENTLE,
      balanced: EN_BALANCED,
      aggressive: EN_AGGRESSIVE
    };
  }
});

// src/dictionaries/de-filler.ts
var DE_GENTLE, DE_BALANCED, DE_AGGRESSIVE, DE_BLACKLIST;
var init_de_filler = __esm({
  "src/dictionaries/de-filler.ts"() {
    "use strict";
    DE_GENTLE = [
      "bitte",
      "danke",
      "danken",
      "vielen",
      "herzlich",
      "freut",
      "\xE4hm",
      "\xE4h",
      "hm",
      "hmm",
      "oh",
      "ach",
      "na",
      "tja"
    ];
    DE_BALANCED = [
      ...DE_GENTLE,
      // Articles
      "der",
      "die",
      "das",
      "den",
      "dem",
      "des",
      "ein",
      "eine",
      "einen",
      "einem",
      "eines",
      // Pronouns
      "ich",
      "mich",
      "mir",
      "mein",
      "meine",
      "meiner",
      "uns",
      "unsere",
      "unserer",
      "du",
      "dich",
      "dir",
      "dein",
      "deine",
      "er",
      "ihn",
      "ihm",
      "sein",
      "seine",
      "sie",
      "ihr",
      "ihre",
      "es",
      "wir",
      "ihr",
      "euch",
      "man",
      "mensch",
      // Copulas
      "ist",
      "sind",
      "war",
      "waren",
      "sein",
      "gewesen",
      "werde",
      "werden",
      "wurde",
      // Auxiliaries
      "haben",
      "hat",
      "habe",
      "hatten",
      "k\xF6nnen",
      "kann",
      "m\xFCssen",
      "sollen",
      "d\xFCrfen",
      "m\xF6gen",
      "mochte",
      "wollen",
      "will",
      "wollte",
      "musste",
      "sollte",
      "konnte",
      // Prepositions
      "von",
      "in",
      "zu",
      "f\xFCr",
      "mit",
      "an",
      "auf",
      "bei",
      "nach",
      "\xFCber",
      "unter",
      "durch",
      "um",
      "bis",
      "ohne",
      "aus",
      "vor",
      "zwischen",
      "gegen",
      "seit",
      "w\xE4hrend",
      "hinter",
      "neben",
      "oberhalb",
      "unterhalb",
      "innerhalb",
      "au\xDFerhalb",
      "statt",
      "trotz",
      "wegen",
      "gem\xE4\xDF",
      "laut",
      "entlang",
      "entgegen",
      "fern",
      "jenseits",
      "knap",
      "n\xF6rdlich",
      "\xF6stlich",
      "s\xFCdlich",
      "westlich",
      "ab",
      "an",
      "aus",
      "bei",
      "bis",
      "durch",
      "entlang",
      "f\xFCr",
      "gegen",
      "ohne",
      "seit",
      "um",
      "von",
      "vor",
      "zu",
      "zwischen",
      // Conjunctions
      "und",
      "oder",
      "aber",
      "denn",
      "sondern",
      "weil",
      "da",
      "obwohl",
      "wenn",
      "falls",
      "damit",
      "w\xE4hrend",
      "bevor",
      "nachdem",
      "sobald",
      "bis",
      "seit",
      "als",
      "wie",
      "dass",
      "ob",
      "entweder",
      "noch",
      "sowohl",
      "weder",
      // Demonstratives
      "dieser",
      "diese",
      "dieses",
      "diesem",
      "diesen",
      "jener",
      "jene",
      "solch",
      "solcher",
      "selbst",
      "selber",
      "eben",
      "gerade",
      "n\xE4mlich",
      "n\xE4mlich",
      // Quantifiers
      "alle",
      "alles",
      "viel",
      "viele",
      "vieler",
      "mehr",
      "mehrere",
      "wenig",
      "wenige",
      "manch",
      "manche",
      "jeder",
      "jede",
      "jedes",
      "nichts",
      "etwas",
      "irgend",
      "irgendein",
      "einige",
      "mehrere",
      "verschiedene",
      "zahlreiche",
      "viele",
      "wenige",
      "keine",
      "alle",
      "keiner",
      "keines",
      "niemand",
      // Intensifiers/Fillers
      "auch",
      "so",
      "also",
      "halt",
      "mal",
      "doch",
      "eigentlich",
      "tats\xE4chlich",
      "wirklich",
      "sehr",
      "ziemlich",
      "gerade",
      "eben",
      "schon",
      "noch",
      "nur",
      "allein",
      "immer",
      "nie",
      "niemals",
      "oft",
      "manchmal",
      "h\xE4ufig",
      "selten",
      "vielleicht",
      "wahrscheinlich",
      "sicher",
      "klar",
      "nat\xFCrlich",
      "freilich",
      "\xFCbrigens",
      "allerdings",
      "jedoch",
      "sonst",
      "dann",
      "jetzt",
      "heute",
      "morgen",
      "gestern",
      "hier",
      "dort",
      "da",
      "wohin",
      "her",
      "weg",
      "hin",
      "ran",
      "rum",
      "herum",
      "dabei",
      "davon",
      "darum",
      "damit",
      "daf\xFCr",
      "dagegen",
      "dazu",
      "daher",
      "dar\xFCber",
      "darunter",
      "dazwischen",
      "dran",
      "drauf",
      "drin",
      "dr\xFCber",
      "drunter",
      "ja",
      "nein",
      "doch",
      "eben",
      // High-frequency verbs
      "machen",
      "macht",
      "machen",
      "sagen",
      "sagt",
      "sagte",
      "geben",
      "gibt",
      "gab",
      "nehmen",
      "nimmt",
      "nahm",
      "finden",
      "findet",
      "fand",
      "wissen",
      "wei\xDF",
      "wusste",
      "denken",
      "denkt",
      "dachte",
      "sehen",
      "sieht",
      "sah",
      "kommen",
      "kommt",
      "kam",
      "gehen",
      "geht",
      "ging",
      "stehen",
      "steht",
      "liegen",
      "liegt",
      "lassen",
      "l\xE4sst",
      "halten",
      "h\xE4lt",
      "hielt",
      "bringen",
      "bringt",
      "brachte",
      "bleiben",
      "bleibt",
      "blieb",
      "fragen",
      "fragt",
      "fragte",
      "antworten",
      "antwortet",
      "zeigen",
      "zeigt",
      "zeigte",
      "sprechen",
      "spricht",
      "sprach",
      "h\xF6ren",
      "h\xF6rt",
      "h\xF6rte",
      "lernen",
      "lernt",
      "lernte",
      "verstehen",
      "versteht",
      "verstand",
      "beginnen",
      "beginnt",
      "begann",
      "enden",
      "endet",
      "endete",
      "arbeiten",
      "arbeitet",
      "arbeitete",
      "leben",
      "lebt",
      "lebte",
      "spielen",
      "spielt",
      "spielte",
      "schauen",
      "schaut",
      "schaute",
      "schreiben",
      "schreibt",
      "schrieb",
      "lesen",
      "liest",
      "las",
      "meinen",
      "meint",
      "meinte",
      "glauben",
      "glaubt",
      "glaubte",
      "hoffen",
      "hofft",
      "hoffte",
      "brauchen",
      "braucht",
      "brauchte",
      "d\xFCrfen",
      "darf",
      "durfte",
      "sollen",
      "soll",
      "sollte",
      "m\xFCssen",
      "muss",
      "musste",
      "k\xF6nnen",
      "kann",
      "konnte",
      "wollen",
      "will",
      "wollte",
      "m\xF6gen",
      "mag",
      "mochte",
      "kennen",
      "kennt",
      "kannte",
      "hei\xDFen",
      "hei\xDFt",
      "hie\xDF",
      "hei\xDFen",
      "hei\xDFen",
      "hei\xDFen",
      "sein",
      "ist",
      "war",
      "sind",
      "waren",
      "haben",
      "hat",
      "habe",
      "hatten",
      "haben",
      "haben",
      "haben",
      "haben",
      "haben"
    ];
    DE_AGGRESSIVE = [
      ...DE_BALANCED,
      "ihnen",
      "ihrer",
      "seinen",
      "deren",
      "dessen",
      "welcher",
      "welche",
      "wer",
      "was",
      "wo",
      "wie",
      "genau",
      "schon",
      "noch",
      "nur",
      "allein",
      "immer",
      "nie",
      "niemals",
      "oft",
      "manchmal",
      "h\xE4ufig",
      "selten",
      "vielleicht",
      "wahrscheinlich",
      "sicher",
      "klar",
      "nat\xFCrlich",
      "freilich",
      "\xFCbrigens",
      "allerdings",
      "jedoch",
      "sonst",
      "dann",
      "jetzt",
      "heute",
      "morgen",
      "gestern",
      "hier",
      "dort",
      "da",
      "wohin",
      "her",
      "gegen",
      "w\xE4hrend",
      "seit"
    ];
    DE_BLACKLIST = {
      gentle: DE_GENTLE,
      balanced: DE_BALANCED,
      aggressive: DE_AGGRESSIVE
    };
  }
});

// src/dictionaries/index.ts
var LANGUAGE_DICTIONARIES, SUPPORTED_LANGUAGES;
var init_dictionaries = __esm({
  "src/dictionaries/index.ts"() {
    "use strict";
    init_en_filler();
    init_de_filler();
    init_en_filler();
    init_de_filler();
    LANGUAGE_DICTIONARIES = {
      en: EN_BLACKLIST,
      de: DE_BLACKLIST
    };
    SUPPORTED_LANGUAGES = ["en", "de"];
  }
});

// src/troglodyte.ts
function detectLanguage(text) {
  const words = text.toLowerCase().match(/\b[a-zäöüß]{3,}\b/g) || [];
  const enIndicators = ["the", "a", "an", "is", "are", "was", "were", "be", "been", "have", "has", "had", "do", "does"];
  const deIndicators = [
    "der",
    "die",
    "das",
    "den",
    "dem",
    "des",
    "ein",
    "eine",
    "ich",
    "mich",
    "mir",
    "du",
    "dich",
    "dir",
    "er",
    "sie",
    "es",
    "wir",
    "uns",
    "ihr",
    "euch",
    "ist",
    "sind",
    "war",
    "waren",
    "sein",
    "haben",
    "hat",
    "habe",
    "werden",
    "wird",
    "w\xFCrde",
    "und",
    "oder",
    "aber",
    "nicht",
    "auch",
    "sehr",
    "viel",
    "mehr",
    "alle",
    "alles"
  ];
  let enCount = 0, deCount = 0;
  for (const word of words) {
    if (enIndicators.includes(word)) enCount++;
    else if (deIndicators.includes(word)) deCount++;
  }
  return deCount > enCount ? "de" : "en";
}
var stats, Troglodyte;
var init_troglodyte = __esm({
  "src/troglodyte.ts"() {
    "use strict";
    init_dictionaries();
    stats = {
      totalCompressions: 0,
      totalCharsOriginal: 0,
      totalCharsCompressed: 0,
      lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
    };
    Troglodyte = class {
      phrasesAndLogic;
      synonyms;
      cachedBlacklists;
      MAX_COMPRESSIONS_BEFORE_RESET = 1e4;
      MAX_CHARS_BEFORE_RESET = 1e7;
      constructor(dictionaries) {
        this.phrasesAndLogic = { ...dictionaries.phrases };
        this.synonyms = dictionaries.synonyms || {};
        this.cachedBlacklists = /* @__PURE__ */ new Map();
        for (const langCode of SUPPORTED_LANGUAGES) {
          const langDict = LANGUAGE_DICTIONARIES[langCode];
          const levelMap = /* @__PURE__ */ new Map();
          ["gentle", "balanced", "aggressive"].forEach((level) => {
            const lvl = level;
            levelMap.set(lvl, new Set(langDict[lvl].map((w) => w.toLowerCase())));
          });
          this.cachedBlacklists.set(langCode, levelMap);
        }
      }
      escapeRegex(str) {
        const specialChars = ["\\", "^", "$", "*", "+", "?", "(", ")", ".", "{", "}", "|", "[", "]", "/"];
        let result = str;
        for (const ch of specialChars) {
          result = result.split(ch).join("\\" + ch);
        }
        return result;
      }
      compress(prompt, options) {
        const level = options?.level ?? "balanced";
        const protectUrls = options?.protectUrls ?? true;
        const protectNumbers = options?.protectNumbers ?? true;
        const protectHeaders = options?.protectHeaders ?? true;
        let langCode;
        if (options?.language) {
          langCode = options.language;
        } else {
          langCode = detectLanguage(prompt);
        }
        console.log(`[Troglodyte] Detected language: ${langCode} for prompt: "${prompt.substring(0, 80)}..."`);
        let text = prompt;
        const protectedItems = [];
        const levelBlacklistMap = this.cachedBlacklists.get(langCode);
        if (!levelBlacklistMap) {
          console.warn(`[Troglodyte] Unknown language code: ${langCode}, falling back to English`);
          langCode = "en";
        }
        const levelBlacklist = this.cachedBlacklists.get(langCode || "en").get(level);
        let placeholderCounter = 0;
        const generatePlaceholder = () => {
          return String.fromCodePoint(57344 + placeholderCounter++ % 4095);
        };
        const BREAK_EVEN_LENGTH = 8;
        const protectIfWorthwhile = (match, minLen = BREAK_EVEN_LENGTH) => {
          if (match.length <= minLen) return match;
          protectedItems.push(match);
          return generatePlaceholder();
        };
        text = text.replace(/(```[\s\S]*?```|`[^`]+`)/g, (match) => {
          return protectIfWorthwhile(match, 15);
        });
        if (protectUrls) {
          text = text.replace(/(https?:\/\/[^\s<>()"'\\\[\]]+|www\.[^\s<>()"'\\\[\]]+)/gi, (match) => {
            return protectIfWorthwhile(match, 20);
          });
        }
        if (protectNumbers) {
          text = text.replace(/\b(v\d+\.\d+(?:\.\d+)?)\b/g, protectIfWorthwhile);
          text = text.replace(/\b([A-Z][a-zA-Z0-9]*\.[a-zA-Z0-9]+)\b/g, (match) => {
            return protectIfWorthwhile(match, 6);
          });
          text = text.replace(/(#\d{3,})/g, protectIfWorthwhile);
          text = text.replace(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/gi, protectIfWorthwhile);
        }
        if (protectHeaders) {
          text = text.replace(/(^|\n)(#{1,6}\s+.+)/g, (match, newline, header) => {
            const protectedHeader = protectIfWorthwhile(header, 12);
            return `${newline}${protectedHeader}`;
          });
        }
        text = text.replace(/([A-Za-z]:[\/\\][^<>"|?*\r\n]{10,})/g, (match) => {
          return protectIfWorthwhile(match, 15);
        });
        let phraseMatches = 0;
        let phraseCharsSaved = 0;
        const sortedPhrases = Object.entries(this.phrasesAndLogic).filter(([phrase]) => phrase && phrase.length >= 2).sort((a, b) => b[0].length - a[0].length);
        for (const [phrase, replacement] of sortedPhrases) {
          const escaped = this.escapeRegex(phrase);
          const wordChar = "a-zA-Z0-9_'\xDF\xE4\xF6\xFC\xC4\xD6\xDC";
          const regex = new RegExp(`(?<![${wordChar}])${escaped}(?![${wordChar}])`, "gi");
          const matches = text.match(regex);
          if (matches) {
            phraseMatches += matches.length;
            phraseCharsSaved += matches.reduce((sum, m) => sum + m.length - (replacement?.length || 0), 0);
          }
          text = text.replace(regex, () => {
            return replacement && replacement.trim() !== "" ? replacement : " ";
          });
        }
        const wordPattern = /[a-zA-Z0-9_'ßäöüÄÖÜ]+/g;
        const tokens = text.split(wordPattern);
        const words = text.match(wordPattern) || [];
        console.log(`[Troglodyte] Found ${words.length} words in ${tokens.length} token slots`);
        let filteredCount = 0;
        let synonymCount = 0;
        const filteredWords = [];
        for (const word of words) {
          const lower = word.toLowerCase();
          if (levelBlacklist.has(lower)) {
            filteredCount++;
            continue;
          }
          if (this.synonyms[lower]) {
            synonymCount++;
            filteredWords.push(this.synonyms[lower]);
            continue;
          }
          filteredWords.push(word);
        }
        console.log(`[Troglodyte] Blacklist: ${levelBlacklist.size} words, Filtered: ${filteredCount}, Synonyms: ${synonymCount}`);
        let result = "";
        let wordIndex = 0;
        for (const token of tokens) {
          result += token;
          if (wordIndex < filteredWords.length) {
            result += filteredWords[wordIndex++];
          }
        }
        text = result.replace(/\s+/g, " ").replace(/\s+([.,?!;:])/g, "$1").replace(/([.?!;:])(?=[A-ZßÄÖÜ])/g, "$1 ").trim();
        console.log(`[Troglodyte] Restoring ${protectedItems.length} protected items...`);
        for (let i = 0; i < protectedItems.length; i++) {
          const placeholder = String.fromCodePoint(57344 + i % 4095);
          const item = protectedItems[i];
          if (text.includes(placeholder)) {
            text = text.split(placeholder).join(item);
          } else {
            console.warn(`[Troglodyte] \u26A0\uFE0F Placeholder ${i} not found!`);
          }
        }
        const originalLength = prompt.length;
        const compressedLength = text.length;
        const savings = originalLength - compressedLength;
        const percentSavings = originalLength > 0 ? savings / originalLength * 100 : 0;
        console.log("\n==================================================");
        console.log(`[Troglodyte] Compression Report (${level.toUpperCase()})`);
        console.log("==================================================");
        console.log(`Result: ${originalLength} \u2192 ${compressedLength} chars (${percentSavings.toFixed(1)}% ${savings >= 0 ? "savings" : "overhead"})`);
        const truncate = (s, max = 150) => s.length > max ? `${s.substring(0, max)}...` : s;
        console.log(`\u25B6 INPUT:      "${truncate(prompt)}"`);
        console.log(`\u25B6 COMPRESSED: "${truncate(text)}"`);
        if (phraseMatches > 0) {
          console.log(`Phrase collapsing: ${phraseMatches} matches, -${phraseCharsSaved} chars`);
        }
        if (filteredCount > 0) {
          console.log(`Word filtering: ${filteredCount} words removed, ${synonymCount} synonyms applied`);
        }
        if (protectedItems.length > 0) {
          console.log(`Protection: ${protectedItems.length} items preserved`);
        }
        const cumulativeStats = this.getStats();
        const totalSavings = cumulativeStats.totalCharsOriginal - cumulativeStats.totalCharsCompressed;
        const avgSavingsPercent = cumulativeStats.totalCharsOriginal > 0 ? totalSavings / cumulativeStats.totalCharsOriginal * 100 : 0;
        console.log(`Cumulative: ${cumulativeStats.totalCompressions} compressions, ${avgSavingsPercent.toFixed(1)}% avg savings`);
        console.log("==================================================\n");
        if (stats.totalCompressions >= this.MAX_COMPRESSIONS_BEFORE_RESET || stats.totalCharsOriginal >= this.MAX_CHARS_BEFORE_RESET) {
          console.log("[Troglodyte] Stats threshold reached, resetting");
          stats = {
            totalCompressions: 0,
            totalCharsOriginal: 0,
            totalCharsCompressed: 0,
            lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
          };
        }
        stats.totalCompressions++;
        stats.totalCharsOriginal += prompt.length;
        stats.totalCharsCompressed += text.length;
        stats.lastUpdated = (/* @__PURE__ */ new Date()).toISOString();
        return text;
      }
      getStats() {
        const totalSavings = stats.totalCharsOriginal - stats.totalCharsCompressed;
        const savingsPercent = stats.totalCharsOriginal > 0 ? Math.round(totalSavings / stats.totalCharsOriginal * 100) : 0;
        return { ...stats, totalSavings, savingsPercent };
      }
      resetStats() {
        stats = {
          totalCompressions: 0,
          totalCharsOriginal: 0,
          totalCharsCompressed: 0,
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
  }
});

// src/dictionaries/phrases.ts
var phrases;
var init_phrases = __esm({
  "src/dictionaries/phrases.ts"() {
    "use strict";
    phrases = {
      // ==================== ENGLISH PHRASES ====================
      // Polite openers
      "Hello there": "",
      "Hello": "",
      "Hi": "",
      "Hey": "",
      "Good morning": "",
      "Good afternoon": "",
      "Good evening": "",
      // Polite closers
      "Thank you": "",
      "Thanks": "",
      "Thank you so much": "",
      "Thanks a lot": "",
      "so much": "",
      "I appreciate it": "",
      "I appreciate your help": "",
      // Polite requests
      "I would really appreciate it if you could": "",
      "I would appreciate it if you could": "",
      "Could you please": "",
      "Can you please": "",
      "Please": "",
      "If you don't mind": "",
      "If you could": "",
      // Role-playing
      "I would like you to act as": "Be",
      "Act as a": "Be",
      "Act as": "Be",
      "Pretend to be": "Be",
      "You are a": "Be",
      "You are": "Be",
      // Filler phrases
      "I am trying to figure out": "Need",
      "I am trying to": "Need",
      "I want to": "Need",
      "I need to": "Need",
      "I would like to": "Need",
      "I would like": "Need",
      "I want": "Need",
      "I need": "Need",
      "I have a question about": "Question",
      "I have a question": "Question",
      "My question is": "Question",
      "The question is": "Question",
      "I am wondering": "",
      "I was wondering": "",
      "I am curious": "Curious",
      // Redundant phrases
      "Due to the fact that": "Because",
      "In order to": "To",
      "In the event that": "If",
      "For the purpose of": "To",
      "At this point in time": "Now",
      "At this moment": "Now",
      "In my opinion": "IMO",
      "In my humble opinion": "IMO",
      "As far as I know": "AFAIK",
      "As far as I can tell": "AFAICT",
      "It is important to note that": "Note",
      "It is worth noting that": "Note",
      "It should be noted that": "Note",
      "It is worth mentioning that": "Note",
      "It goes without saying that": "",
      "Needless to say": "",
      "As a matter of fact": "Actually",
      "As a matter of": "",
      // Technical filler
      "Make sure that": "Ensure",
      "Make sure": "Ensure",
      "Ensure that": "Ensure",
      "Make certain that": "Ensure",
      "Make certain": "Ensure",
      "It is required that": "Required",
      "It is required": "Required",
      "It is necessary": "Required",
      "It is important": "Important",
      "It is crucial": "Crucial",
      "It is essential": "Essential",
      // Code-related
      "the following code": "code",
      "the following snippet": "snippet",
      "the following example": "example",
      "the following": "",
      "the above": "",
      "below is": "",
      "above is": "",
      // Logic symbols - REMOVED: These break natural language!
      // 'not': '!',
      // 'and': '&&',
      // 'or': '||',
      // 'equals': '==',
      // 'equal to': '==',
      // 'is equal to': '==',
      // 'greater than': '>',
      // 'less than': '<',
      // 'greater than or equal to': '>=',
      // 'less than or equal to': '<=',
      // 'not equal to': '!=',
      // 'does not equal': '!=',
      // Common AI prompt patterns
      "step by step": "steps",
      "step-by-step": "steps",
      "in detail": "detailed",
      "in more detail": "detailed",
      "explain in detail": "explain detailed",
      "provide a": "",
      "provide": "",
      "give me": "",
      "give": "",
      "show me": "show",
      "tell me": "tell",
      "can you tell me": "tell",
      "could you tell me": "tell",
      // ==================== GERMAN PHRASES ====================
      // German polite openers
      "Hallo": "",
      "Guten Morgen": "",
      "Guten Tag": "",
      "Guten Abend": "",
      "Hallo zusammen": "",
      // German polite closers
      "Danke": "",
      "Danke sch\xF6n": "",
      "Vielen Dank": "",
      "Herzlichen Dank": "",
      "Danke im Voraus": "",
      "Ich danke Ihnen": "",
      // German polite requests
      "Bitte": "",
      "K\xF6nnten Sie bitte": "",
      "K\xF6nnen Sie bitte": "",
      "K\xF6nntest du bitte": "",
      "Kannst du bitte": "",
      "Ich w\xFCrde bitten": "",
      "H\xE4tten Sie die Freundlichkeit": "",
      // German role-playing / instructions
      "Ich m\xF6chte, dass Sie agieren als": "Sei",
      "Agieren Sie als": "Sei",
      "Agieren als": "Sei",
      "Tun Sie so als ob": "Sei",
      "Sie sind ein": "Sei",
      "Sie sind": "Sei",
      "Nehmen Sie die Rolle an von": "Sei",
      // German filler phrases
      "Ich versuche herauszufinden": "Need",
      "Ich versuche zu": "Need",
      "Ich m\xF6chte": "Need",
      "Ich w\xFCrde gerne": "Need",
      "Ich brauche": "Need",
      "Ich habe eine Frage": "Question",
      "Meine Frage ist": "Question",
      "Die Frage ist": "Question",
      "Ich frage mich": "",
      "Ich bin neugierig": "Curious",
      // German redundant phrases
      "Aufgrund der Tatsache, dass": "Weil",
      "Um zu": "To",
      "Zu dem Zweck": "To",
      "In diesem Moment": "Now",
      "An dieser Stelle": "Now",
      "Meiner Meinung nach": "IMO",
      "Ehrlich gesagt": "",
      "Um ehrlich zu sein": "",
      "Eigentlich": "",
      "Tats\xE4chlich": "",
      // German technical filler
      "Stellen Sie sicher, dass": "Ensure",
      "Stellen Sie sicher": "Ensure",
      "Sicherstellen, dass": "Ensure",
      "Es ist wichtig": "Important",
      "Es ist notwendig": "Required",
      "Es ist erforderlich": "Required",
      // German code-related
      "der folgende Code": "code",
      "der folgende Snippet": "snippet",
      "das folgende Beispiel": "example",
      "folgendes": "",
      "oben": "",
      "unten": "",
      // German logic symbols - REMOVED: These break natural language!
      // 'und': '&&',
      // 'oder': '||',
      // 'nicht': '!',
      // 'gleich': '==',
      // 'ist gleich': '==',
      // 'größer als': '>',
      // 'kleiner als': '<',
      // 'größer oder gleich': '>=',
      // 'kleiner oder gleich': '<=',
      // 'ungleich': '!=',
      // German common patterns
      "Schritt f\xFCr Schritt": "steps",
      "im Detail": "detailed",
      "erkl\xE4re im Detail": "explain detailed",
      "geben Sie mir": "",
      "zeigen Sie mir": "show",
      "sagen Sie mir": "tell",
      // ==================== BUILD LOG / COMPILER OUTPUT ====================
      // Build status boilerplate (English)
      "Build started": "",
      "Build completed": "",
      "Building": "",
      "Compiling": "",
      "Linking": "",
      "Generating": "",
      "Creating": "",
      "Successfully": "",
      "successfully": "",
      "Error": "E",
      "Warning": "W",
      "Note": "N",
      // Include chain noise (most common build log filler)
      "In file included from": "inc",
      "included from": "inc",
      "from": "",
      // Project/configuration boilerplate
      "Project:": "Proj:",
      "Configuration:": "Cfg:",
      "Platform:": "Plat:",
      "Target:": "Tgt:",
      // Build result summaries
      "successful": "ok",
      "errors": "err",
      "warnings": "warn",
      "up to date": "uptodate",
      "skipped": "skip",
      // Time/duration boilerplate
      "took": "",
      "seconds": "s",
      "milliseconds": "ms",
      "started at": "",
      "completed at": "",
      "duration:": "",
      // Line number indicators (redundant with actual line numbers)
      "at line": "",
      "on line": "",
      "column": "col",
      // Variable/function type descriptors
      "variable": "var",
      "function": "fn",
      "parameter": "param",
      "argument": "arg",
      "expression": "expr",
      "statement": "stmt",
      "declaration": "decl",
      "definition": "def",
      "type": "typ",
      // Common error/warning prefixes
      "error:": "E:",
      "warning:": "W:",
      "note:": "N:",
      "fatal error:": "FE:",
      "error C": "C",
      "warning C": "WC",
      // ==================== GERMAN BUILD LOG ====================
      // German build status
      "Erstellen gestartet": "",
      "Erstellen abgeschlossen": "",
      "Erstellung wurde": "",
      "Projekt:": "Proj:",
      "Konfiguration:": "Cfg:",
      "erfolgreich": "ok",
      "Fehler": "E",
      "Warnung": "W",
      "Hinweis": "N",
      "aktuell": "uptodate",
      "\xFCbersprungen": "skip",
      "dauerte": "",
      "Sekunden": "s",
      "um": "",
      // ==================== MSVC GERMAN ERROR MESSAGES ====================
      // Most common repeated error messages (German → English shorthand)
      "nichtdeklarierter Bezeichner": "undeclared ident",
      "Fehlender Typspezifizierer": "missing type spec",
      "Syntaxfehler": "syntax err",
      "Datei kann nicht ge\xF6ffnet werden": "cannot open file",
      "Diese Verwendung von ist ung\xFCltig": "invalid use of",
      "Bezeichner wurde nicht gefunden": "ident not found",
      // MSVC error message fragments
      "int wird angenommen": "int assumed",
      "default-int wird von C++ nicht unterst\xFCtzt": "no default-int in C++",
      "Fehlendes vor": "missing ';' before",
      "Include kann nicht ge\xF6ffnet werden": "include cannot open",
      "No such file or directory": "file not found",
      // Build result summaries (German MSVC)
      "Alle neu erstellen": "Rebuild",
      "neu erstellen": "rebuild",
      "fehlgeschlagen": "fail",
      "Neu erstellen abgeschlossen": "",
      "und dauerte": "",
      // ==================== CLANG/GCC BUILD LOG PATTERNS ====================
      // Warning count summaries (repeated after each warning)
      "warning generated": "",
      "warnings generated": "",
      "error generated": "",
      "errors generated": "",
      // Include path warnings
      "resolved using non-portable Microsoft search rules as:": "non-portable include:",
      "#include resolved using non-portable Microsoft search rules as:": "non-portable include:",
      // Unused variable/function warnings
      "unused variable": "unsd var",
      "unused function": "unsd fn",
      "set but not used": "set unused",
      // German build status (Clang/LLVM)
      "Die Neuerstellung wurde": "",
      "Neues Erstellen gestartet": "",
      "gestartet: Projekt:": "Proj:"
    };
  }
});

// src/dictionaries/synonyms.ts
var synonyms;
var init_synonyms = __esm({
  "src/dictionaries/synonyms.ts"() {
    "use strict";
    synonyms = {
      // ==================== ENGLISH TERMS ====================
      // Technical terms
      "application": "app",
      "applications": "apps",
      "program": "prog",
      "programs": "progs",
      "computer": "comp",
      "computers": "comps",
      "information": "info",
      "environment": "env",
      "environments": "envs",
      "configuration": "config",
      "configurations": "configs",
      "documentation": "docs",
      "functionality": "func",
      "utilization": "use",
      "utilize": "use",
      "utilizes": "uses",
      "utilizing": "using",
      "utilized": "used",
      "implementation": "impl",
      "implementations": "impls",
      "implement": "impl",
      "implements": "impls",
      "implementing": "impling",
      "implemented": "implied",
      "initialization": "init",
      "initialize": "init",
      "initializes": "inits",
      "initializing": "initing",
      "initialized": "inited",
      "optimization": "opt",
      "optimizations": "opts",
      "optimize": "opt",
      "optimizes": "opts",
      "optimizing": "opting",
      "optimized": "opted",
      "synchronization": "sync",
      "synchronize": "sync",
      "synchronizes": "syncs",
      "synchronizing": "syncing",
      "synchronized": "synced",
      "authentication": "auth",
      "authenticate": "auth",
      "authenticates": "auths",
      "authenticating": "authing",
      "authenticated": "authed",
      "authorization": "authz",
      "authorize": "authz",
      "authorizes": "authzs",
      "authorizing": "authzing",
      "authorized": "authzed",
      "identification": "id",
      "identify": "id",
      "identifies": "ids",
      "identifying": "iding",
      "identified": "ided",
      "transformation": "transform",
      "transformations": "transforms",
      "transform": "transform",
      "transforms": "transforms",
      "transforming": "transforming",
      "transformed": "transformed",
      "communication": "comm",
      "communications": "comms",
      // General terms
      "however": "but",
      "therefore": "so",
      "consequently": "so",
      "thus": "so",
      "hence": "so",
      "although": "though",
      "despite": "desp",
      "regarding": "re",
      "concerning": "re",
      "respecting": "re",
      "pertaining": "re",
      "relating": "re",
      // Actions
      "perform": "do",
      "performs": "does",
      "performing": "doing",
      "performed": "did",
      "execute": "run",
      "executes": "runs",
      "executing": "running",
      "executed": "ran",
      "generate": "gen",
      "generates": "gens",
      "generating": "gening",
      "generated": "gened",
      "calculate": "calc",
      "calculates": "calcs",
      "calculating": "calcing",
      "calculated": "calced",
      "determine": "det",
      "determines": "dets",
      "determining": "deting",
      "determined": "deted",
      "establish": "set",
      "establishes": "sets",
      "establishing": "setting",
      "established": "set",
      "provide": "give",
      "provides": "gives",
      "providing": "giving",
      "provided": "given",
      "obtain": "get",
      "obtains": "gets",
      "obtaining": "getting",
      "obtained": "got",
      "acquire": "get",
      "acquires": "gets",
      "acquiring": "getting",
      "acquired": "got",
      "retrieve": "get",
      "retrieves": "gets",
      "retrieving": "getting",
      "retrieved": "got",
      "remove": "rm",
      "removes": "rms",
      "removing": "rming",
      "removed": "rmed",
      "delete": "del",
      "deletes": "dels",
      "deleting": "deling",
      "deleted": "del",
      "create": "new",
      "creates": "news",
      "creating": "newing",
      "created": "newed",
      "modify": "mod",
      "modifies": "mods",
      "modifying": "moding",
      "modified": "moded",
      "update": "upd",
      "updates": "upds",
      "updating": "upding",
      "updated": "upded",
      "change": "chg",
      "changes": "chgs",
      "changing": "chgng",
      "changed": "chged",
      // Common words
      "because": "cos",
      "altho": "altho",
      "through": "thru",
      "until": "til",
      "within": "witn",
      "without": "w/o",
      "between": "btwn",
      "among": "amng",
      "during": "dur",
      "before": "bef",
      "after": "aft",
      "around": "rnd",
      "about": "abt",
      "approximately": "approx",
      // ==================== GERMAN TERMS ====================
      // German technical terms
      "anwendung": "app",
      "anwendungen": "apps",
      "programm": "prog",
      "programme": "progs",
      "informationen": "infos",
      "umgebung": "env",
      "konfiguration": "config",
      "dokumentation": "docs",
      "funktionalit\xE4t": "func",
      "implementierung": "impl",
      "initialisierung": "init",
      "optimierung": "opt",
      "synchronisation": "sync",
      "authentifizierung": "auth",
      "autorisation": "authz",
      "identifikation": "id",
      "kommunikation": "comm",
      // German actions
      "ausf\xFChren": "run",
      "erzeugen": "gen",
      "berechnen": "calc",
      "bestimmen": "det",
      "erstellen": "new",
      "l\xF6sch": "del",
      "entfernen": "rm",
      "\xE4ndern": "chg",
      "aktualisieren": "upd",
      "modifizieren": "mod",
      "geben": "give",
      "bekommen": "get",
      "erhalten": "get",
      // German common words
      "deshalb": "so",
      "daher": "so",
      "also": "so",
      "obwohl": "though",
      "w\xE4hrend": "dur",
      "bevor": "bef",
      "nach": "aft",
      "zwischen": "btwn",
      "ungef\xE4hr": "approx",
      // ==================== BUILD LOG / COMPILER TERMS ====================
      // Build system terms
      "compiler": "cc",
      "compilers": "ccs",
      "linker": "ld",
      "build": "bld",
      "building": "blding",
      "built": "bld",
      "compile": "cpl",
      "compiling": "cpling",
      "compiled": "cpd",
      "link": "lnk",
      "linking": "lnking",
      "linked": "lnkd",
      "rebuild": "rbld",
      "clean": "cln",
      "cleanning": "clning",
      "cleaned": "clnd",
      // Error/warning types
      "undefined": "undef",
      "unresolved": "unres",
      "incomplete": "incomp",
      "unused": "unsd",
      "deprecated": "depr",
      "obsolete": "obs",
      "redundant": "rednd",
      "duplicate": "dup",
      "conflict": "cflct",
      "ambiguous": "ambg",
      // File/path related
      "directory": "dir",
      "directories": "dirs",
      "folder": "fldr",
      "path": "pth",
      "paths": "pths",
      "source": "src",
      "sources": "srccs",
      "header": "hdr",
      "headers": "hdrs",
      "include": "inc",
      "includes": "incs",
      // Type/variable related
      "parameter": "prm",
      "parameters": "prms",
      "argument": "arg",
      "arguments": "args",
      "expression": "expr",
      "expressions": "exprs",
      "statement": "stmt",
      "statements": "stmts",
      "declaration": "decl",
      "declarations": "decls",
      "definition": "def",
      "definitions": "defs",
      "instance": "inst",
      "instances": "insts",
      // ==================== GERMAN BUILD LOG TERMS ====================
      // German build terms
      "erstellung": "bld",
      "kompilieren": "cpl",
      "verkn\xFCpfen": "lnk",
      "fehler": "err",
      "warnung": "warn",
      "hinweis": "note",
      "quelle": "src",
      "ziel": "tgt",
      "verzeichnis": "dir",
      // ==================== MSVC GERMAN ERROR TERMS ====================
      // MSVC German error message terms (single words)
      "Bezeichner": "ident",
      "Typspezifizierer": "type spec",
      "Syntaxfehler": "syntax err",
      "deklarierter": "declared",
      "ung\xFCltig": "invalid",
      "angenommen": "assumed",
      "unterst\xFCtzt": "supported",
      "ge\xF6ffnet": "opened",
      "Verwendung": "use",
      "gefunden": "found",
      "fehlt": "missing",
      "Fehlendes": "missing",
      "Hinweis": "note",
      // ==================== CLANG/GCC WARNING TERMS ====================
      // Warning category abbreviations
      "unused-variable": "unsd-var",
      "unused-function": "unsd-fn",
      "unused-but-set-variable": "set-unsd",
      "microsoft-include": "ms-inc",
      "non-portable": "port",
      "search rules": "rules",
      // German warning terms
      "Neuerstellung": "rbld",
      "Erstellen": "bld"
    };
  }
});

// src/config.ts
var import_sdk, configSchematics;
var init_config = __esm({
  "src/config.ts"() {
    "use strict";
    import_sdk = require("@lmstudio/sdk");
    configSchematics = (0, import_sdk.createConfigSchematics)().field(
      "compressionLevel",
      "select",
      {
        displayName: "Compression Level",
        hint: "How aggressively to compress prompts. Gentle preserves more words, Aggressive maximizes token savings.",
        options: [
          { value: "gentle", displayName: "Gentle (~20-30% reduction)" },
          { value: "balanced", displayName: "Balanced (~45% reduction)" },
          { value: "aggressive", displayName: "Aggressive (~60-70% reduction)" }
        ]
      },
      "balanced"
    ).field(
      "protectUrls",
      "boolean",
      {
        displayName: "Protect URLs & Links",
        hint: "Preserve URLs and web links intact during compression."
      },
      true
    ).field(
      "protectNumbers",
      "boolean",
      {
        displayName: "Protect Version Numbers & IDs",
        hint: "Keep version numbers (v1.0.0), issue references (#1234), and UUIDs intact."
      },
      true
    ).field(
      "protectHeaders",
      "boolean",
      {
        displayName: "Protect Markdown Headers",
        hint: "Preserve # Header structure in markdown documents."
      },
      true
    ).field(
      "protectFilePaths",
      "boolean",
      {
        displayName: "Protect File Paths",
        hint: "Keep file paths intact (prevents 'Source' \u2192 'src' corruption)."
      },
      true
    ).field(
      "languageMode",
      "select",
      {
        displayName: "Language Mode",
        hint: "Select the language for compression or enable auto-detection.",
        options: [
          { value: "auto", displayName: "\u{1F50D} Auto-Detect (EN/DE)" },
          { value: "en", displayName: "\u{1F1EC}\u{1F1E7} English" },
          { value: "de", displayName: "\u{1F1E9}\u{1F1EA} German" }
        ]
      },
      "auto"
    ).field(
      "showStats",
      "boolean",
      {
        displayName: "Show Statistics in Console",
        hint: "Display compression statistics after each message."
      },
      true
    ).build();
  }
});

// src/promptPreprocessor.ts
function extractUserInput(text) {
  const zeitMatch = text.match(/\[Zeit:\s*/);
  const systemEmpfehlungMatch1 = text.match(/\*\*SYSTEMEMPFEHLUNG:\*\*/);
  const systemEmpfehlungMatch2 = text.match(/SYSTEMEMPFEHLUNG!/);
  let markerIndex = -1;
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
  if (markerIndex === -1) {
    return { userInput: text, hasSystemMetadata: false };
  }
  const userInput = text.substring(0, markerIndex).trim();
  return { userInput, hasSystemMetadata: true };
}
async function preprocess(ctl, userMessage) {
  if (ctl.abortSignal.aborted) {
    return userMessage.getText();
  }
  const pluginConfig = ctl.getPluginConfig(configSchematics);
  const compressionLevel = pluginConfig.get("compressionLevel") ?? "balanced";
  const protectUrls = pluginConfig.get("protectUrls") ?? true;
  const protectNumbers = pluginConfig.get("protectNumbers") ?? true;
  const protectHeaders = pluginConfig.get("protectHeaders") ?? true;
  const languageMode = pluginConfig.get("languageMode") ?? "auto";
  const showStats = pluginConfig.get("showStats") ?? true;
  const status = ctl.createStatus({
    status: "loading",
    text: `Troglodyfying prompt (${compressionLevel})...`
  });
  try {
    const fullText = userMessage.getText();
    const { userInput, hasSystemMetadata } = extractUserInput(fullText);
    if (showStats && hasSystemMetadata) {
      console.log(`[Troglodyte] Detected system metadata. Processing ${userInput.length} chars of user input (skipped ${fullText.length - userInput.length} chars of metadata)`);
    }
    const compressedUserInput = troglodyte.compress(userInput, {
      level: compressionLevel,
      protectUrls,
      protectNumbers,
      protectHeaders,
      language: languageMode !== "auto" ? languageMode : void 0
    });
    const systemMetadata = hasSystemMetadata ? fullText.substring(userInput.length) : "";
    const compressed = compressedUserInput + systemMetadata;
    const originalLength = userInput.length;
    const compressedLength = compressedUserInput.length;
    const savings = Math.round((originalLength - compressedLength) / originalLength * 100);
    const cumulativeStats = troglodyte.getStats();
    const protectionInfo = [];
    if (protectUrls) protectionInfo.push("URLs");
    if (protectNumbers) protectionInfo.push("IDs");
    let statusText = `Compressed by ${savings}%`;
    if (protectionInfo.length > 0) {
      statusText += ` (protected: ${protectionInfo.join(", ")})`;
    }
    status.setState({
      status: "done",
      text: statusText
    });
    return compressed;
  } catch (error) {
    console.error("[Troglodyte] Error compressing prompt:", error);
    status.setState({
      status: "done",
      text: "Compression failed - using original"
    });
    return userMessage.getText();
  }
}
var troglodyte;
var init_promptPreprocessor = __esm({
  "src/promptPreprocessor.ts"() {
    "use strict";
    init_troglodyte();
    init_phrases();
    init_synonyms();
    init_config();
    troglodyte = new Troglodyte({
      phrases,
      blacklist: [],
      // Blacklist now handled internally by compression level
      synonyms
    });
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  main: () => main
});
async function main(context) {
  context.withConfigSchematics(configSchematics);
  context.withPromptPreprocessor(preprocess);
}
var init_src = __esm({
  "src/index.ts"() {
    "use strict";
    init_promptPreprocessor();
    init_config();
  }
});

// .lmstudio/entry.ts
var import_sdk2 = require("@lmstudio/sdk");
var clientIdentifier = process.env.LMS_PLUGIN_CLIENT_IDENTIFIER;
var clientPasskey = process.env.LMS_PLUGIN_CLIENT_PASSKEY;
var baseUrl = process.env.LMS_PLUGIN_BASE_URL;
var client = new import_sdk2.LMStudioClient({
  clientIdentifier,
  clientPasskey,
  baseUrl
});
globalThis.__LMS_PLUGIN_CONTEXT = true;
var predictionLoopHandlerSet = false;
var promptPreprocessorSet = false;
var configSchematicsSet = false;
var globalConfigSchematicsSet = false;
var toolsProviderSet = false;
var generatorSet = false;
var selfRegistrationHost = client.plugins.getSelfRegistrationHost();
var pluginContext = {
  withPredictionLoopHandler: (generate) => {
    if (predictionLoopHandlerSet) {
      throw new Error("PredictionLoopHandler already registered");
    }
    if (toolsProviderSet) {
      throw new Error("PredictionLoopHandler cannot be used with a tools provider");
    }
    predictionLoopHandlerSet = true;
    selfRegistrationHost.setPredictionLoopHandler(generate);
    return pluginContext;
  },
  withPromptPreprocessor: (preprocess2) => {
    if (promptPreprocessorSet) {
      throw new Error("PromptPreprocessor already registered");
    }
    promptPreprocessorSet = true;
    selfRegistrationHost.setPromptPreprocessor(preprocess2);
    return pluginContext;
  },
  withConfigSchematics: (configSchematics2) => {
    if (configSchematicsSet) {
      throw new Error("Config schematics already registered");
    }
    configSchematicsSet = true;
    selfRegistrationHost.setConfigSchematics(configSchematics2);
    return pluginContext;
  },
  withGlobalConfigSchematics: (globalConfigSchematics) => {
    if (globalConfigSchematicsSet) {
      throw new Error("Global config schematics already registered");
    }
    globalConfigSchematicsSet = true;
    selfRegistrationHost.setGlobalConfigSchematics(globalConfigSchematics);
    return pluginContext;
  },
  withToolsProvider: (toolsProvider) => {
    if (toolsProviderSet) {
      throw new Error("Tools provider already registered");
    }
    if (predictionLoopHandlerSet) {
      throw new Error("Tools provider cannot be used with a predictionLoopHandler");
    }
    toolsProviderSet = true;
    selfRegistrationHost.setToolsProvider(toolsProvider);
    return pluginContext;
  },
  withGenerator: (generator) => {
    if (generatorSet) {
      throw new Error("Generator already registered");
    }
    generatorSet = true;
    selfRegistrationHost.setGenerator(generator);
    return pluginContext;
  }
};
Promise.resolve().then(() => (init_src(), src_exports)).then(async (module2) => {
  return await module2.main(pluginContext);
}).then(() => {
  selfRegistrationHost.initCompleted();
}).catch((error) => {
  console.error("Failed to execute the main function of the plugin.");
  console.error(error);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2RpY3Rpb25hcmllcy9lbi1maWxsZXIudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9kZS1maWxsZXIudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9pbmRleC50cyIsICIuLi9zcmMvdHJvZ2xvZHl0ZS50cyIsICIuLi9zcmMvZGljdGlvbmFyaWVzL3BocmFzZXMudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9zeW5vbnltcy50cyIsICIuLi9zcmMvY29uZmlnLnRzIiwgIi4uL3NyYy9wcm9tcHRQcmVwcm9jZXNzb3IudHMiLCAiLi4vc3JjL2luZGV4LnRzIiwgImVudHJ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEVuZ2xpc2ggZmlsbGVyIHdvcmRzIG9yZ2FuaXplZCBieSBjb21wcmVzc2lvbiBsZXZlbC5cbiAqIFNvdXJjZTogTGluZ3Vpc3RpYyByZXNlYXJjaCwgTkxQIHJlc291cmNlcywgQ09DQSBmcmVxdWVuY3kgbGlzdHNcbiAqL1xuXG4vLyBHZW50bGUgdGllcjogT25seSBwb2xpdGUgZmlsbGVyIGFuZCBiYXNpYyBjb3VydGVzeSB3b3Jkc1xuZXhwb3J0IGNvbnN0IEVOX0dFTlRMRSA9IFtcbiAgJ3BsZWFzZScsICd0aGFua3MnLCAndGhhbmsnLCAnYXBwcmVjaWF0ZScsICdhcHByZWNpYXRlZCcsICdncmF0ZWZ1bCcsICdraW5kbHknLCAncG9saXRlJyxcbiAgJ3VtJywgJ3VoJywgJ29oJywgJ2FoJywgJ3dvdycsICdobW0nLCAnaG1tbScsICd3ZWxsJywgJ29rYXknLCAnb2snLFxuXTtcblxuLy8gQmFsYW5jZWQgdGllcjogfjMwMCBoaWdoLWZyZXF1ZW5jeSB3b3JkcyBzYWZlIHRvIHJlbW92ZVxuZXhwb3J0IGNvbnN0IEVOX0JBTEFOQ0VEID0gW1xuICAuLi5FTl9HRU5UTEUsXG4gIC8vIEFydGljbGVzXG4gICdhJywgJ2FuJywgJ3RoZScsXG4gIC8vIFN1YmplY3QgcHJvbm91bnNcbiAgJ2knLCAnbWUnLCAnbXknLCAnbWluZScsICdteXNlbGYnLCAnd2UnLCAndXMnLCAnb3VyJywgJ291cnMnLCAnb3Vyc2VsdmVzJyxcbiAgJ3lvdScsICd5b3VyJywgJ3lvdXJzJywgJ3lvdXJzZWxmJywgJ3lvdXJzZWx2ZXMnLFxuICAvLyBDb3B1bGFzXG4gICdpcycsICdhbScsICdhcmUnLCAnd2FzJywgJ3dlcmUnLCAnYmUnLCAnYmVlbicsICdiZWluZycsXG4gIC8vIEF1eGlsaWFyaWVzXG4gICdoYXZlJywgJ2hhcycsICdoYWQnLCAnZG8nLCAnZG9lcycsICdkaWQnLCAnd2lsbCcsICd3b3VsZCcsICdjb3VsZCcsICdzaG91bGQnLFxuICAnbWF5JywgJ21pZ2h0JywgJ2NhbicsICdzaGFsbCcsXG4gIC8vIFByZXBvc2l0aW9uc1xuICAnb2YnLCAnaW4nLCAndG8nLCAnZm9yJywgJ3dpdGgnLCAnb24nLCAnYXQnLCAnZnJvbScsICdieScsICdhYm91dCcsICd1cCcsICdkb3duJyxcbiAgJ291dCcsICdvZmYnLCAnb3ZlcicsICd0aHJvdWdoJywgJ2ludG8nLCAnYWZ0ZXInLCAnYmVmb3JlJywgJ2R1cmluZycsICdhZ2FpbicsXG4gICdoZXJlJywgJ3RoZXJlJywgJ2JldHdlZW4nLCAndW5kZXInLCAnYWJvdmUnLCAnYmVsb3cnLCAnbmVhcicsICdhcm91bmQnLCAnYWdhaW5zdCcsXG4gICd3aXRoaW4nLCAnd2l0aG91dCcsICdhbG9uZycsICdhY3Jvc3MnLCAnYmVoaW5kJywgJ2JleW9uZCcsICdpbnNpZGUnLCAnb3V0c2lkZScsXG4gICd0b3dhcmQnLCAndG93YXJkcycsICd1cG9uJywgJ3ZpYScsICdwZXInLCAnYW1vbmcnLFxuICAvLyBDb25qdW5jdGlvbnNcbiAgJ2FuZCcsICdidXQnLCAnb3InLCAnbm9yJywgJ3lldCcsICdzbycsICdiZWNhdXNlJywgJ3NpbmNlJywgJ3VubGVzcycsICd3aGlsZScsXG4gICdhbHRob3VnaCcsICd0aG91Z2gnLCAnaWYnLCAnd2hldGhlcicsICdhcycsICd0aGFuJywgJ3RoYXQnLCAnd2hlbicsICd3aGVyZScsXG4gIC8vIERlbW9uc3RyYXRpdmVzXG4gICd0aGlzJywgJ3RoZXNlJywgJ3Rob3NlJywgJ3N1Y2gnLFxuICAvLyBRdWFudGlmaWVyc1xuICAnc29tZScsICdhbnknLCAnYWxsJywgJ2VhY2gnLCAnZXZlcnknLCAnYm90aCcsICdmZXcnLCAnbWFueScsICdtdWNoJywgJ21vcmUnLFxuICAnbW9zdCcsICdvdGhlcicsICdhbm90aGVyJywgJ3NhbWUnLCAnb3duJywgJ2Vub3VnaCcsICdvbmx5JywgJ2V2ZW4nLCAnYWxzbycsXG4gICd0b28nLCAndmVyeScsICdyZWFsbHknLCAncXVpdGUnLCAncmF0aGVyJywgJ2p1c3QnLCAnc3RpbGwnLCAnYWxyZWFkeScsICd5ZXQnLFxuICAnYWxtb3N0JywgJ25lYXJseScsICdvbmx5JywgJ3NpbXBseScsICdiYXNpY2FsbHknLCAnbGl0ZXJhbGx5JywgJ2FjdHVhbGx5JyxcbiAgJ29idmlvdXNseScsICdjbGVhcmx5JywgJ2NlcnRhaW5seScsICdkZWZpbml0ZWx5JywgJ2Fic29sdXRlbHknLCAndHJ1bHknLFxuICAnaG9uZXN0bHknLCAnc2VyaW91c2x5JywgJ2Vzc2VudGlhbGx5JywgJ2dlbmVyYWxseScsICd0eXBpY2FsbHknLCAndXN1YWxseScsXG4gICdub3JtYWxseScsICdjb21tb25seScsICdmcmVxdWVudGx5JywgJ29mdGVuJywgJ3JlZ3VsYXJseScsICdhbHdheXMnLCAnbmV2ZXInLFxuICAnZXZlcicsICdzb21ldGltZXMnLCAnb2Z0ZW4nLCAncmFyZWx5JywgJ3NlbGRvbScsXG4gIC8vIEhpZ2gtZnJlcXVlbmN5IHZlcmJzIChzYWZlIHRvIHJlbW92ZSBpbiBjb250ZXh0KVxuICAnZ2V0JywgJ2dvdCcsICdnbycsICdnb2VzJywgJ2dvaW5nJywgJ2dvbmUnLCAnbWFrZScsICdtYWRlJywgJ3Rha2UnLCAndG9vaycsXG4gICdnaXZlJywgJ2dhdmUnLCAna25vdycsICdrbmV3JywgJ3RoaW5rJywgJ3Rob3VnaHQnLCAnc2VlJywgJ3NhdycsICdsb29rJyxcbiAgJ2ZpbmQnLCAndGVsbCcsICdhc2snLCAnbmVlZCcsICd0cnknLCAnZmVlbCcsICdrZWVwJywgJ2xldCcsICdiZWdpbicsICdzdGFydCcsXG4gICdzaG93JywgJ2hlYXInLCAnY2FsbCcsICd0dXJuJywgJ21vdmUnLCAnbGl2ZScsICdob2xkJywgJ2JyaW5nJywgJ2hhcHBlbicsXG4gICd3cml0ZScsICdwcm92aWRlJywgJ3NpdCcsICdzdGFuZCcsICdwYXknLCAnbWVldCcsICdpbmNsdWRlJywgJ2NvbnRpbnVlJyxcbiAgJ3NldCcsICdsZWFybicsICdjaGFuZ2UnLCAnbGVhZCcsICd1bmRlcnN0YW5kJywgJ3dhdGNoJywgJ2ZvbGxvdycsICdjcmVhdGUnLFxuICAnc3BlYWsnLCAncmVhZCcsICdhbGxvdycsICdhZGQnLCAnc3BlbmQnLCAnZ3JvdycsICdvcGVuJywgJ3dhbGsnLCAnb2ZmZXInLFxuICAncmVtZW1iZXInLCAnY29uc2lkZXInLCAnYXBwZWFyJywgJ3dhaXQnLCAnc2VydmUnLCAnc2VuZCcsICdleHBlY3QnLCAnYnVpbGQnLFxuICAnc3RheScsICdmYWxsJywgJ3JlYWNoJywgJ3JlbWFpbicsICdzdWdnZXN0JywgJ3JhaXNlJywgJ3Bhc3MnLCAnc2VsbCcsXG4gICdyZXF1aXJlJywgJ3JlcG9ydCcsICdkZWNpZGUnLCAncHVsbCcsICdyZXR1cm4nLCAnZGV2ZWxvcCcsICdhY2NlcHQnLCAnYXJndWUnLFxuICAnZGllJywgJ2JlbGlldmUnLCAnc2VlbScsICdoYXRlJywgJ2xvdmUnLCAnbGlrZScsICd3YW50JywgJ2hvcGUnLCAnd2lzaCcsXG4gICdzdXBwb3NlJywgJ2ltYWdpbmUnLCAncmVhbGl6ZScsICdub3RpY2UnLCAncmVjb2duaXplJywgJ3N1cHBvc2UnLCAnd29uZGVyJyxcbiAgJ3ByZXRlbmQnLCAncmVmdXNlJywgJ2NsYWltJywgJ2Fubm91bmNlJywgJ2V4cGxhaW4nLCAnZGVzY3JpYmUnLCAnbWVudGlvbicsXG4gICdkaXNjdXNzJywgJ3N1Z2dlc3QnLCAncmVjb21tZW5kJywgJ2FkdmlzZScsICd3YXJuJywgJ3Byb21pc2UnLCAnYWdyZWUnLFxuICAnZGlzYWdyZWUnLCAnYWNjZXB0JywgJ3JlamVjdCcsICdkZW55JywgJ2FkbWl0JywgJ2NvbmZlc3MnLCAnZGVjbGFyZScsXG4gICdkaXNjb3ZlcicsICdpbnZlbnQnLCAnZGVzaWduJywgJ3Byb2R1Y2UnLCAncHJlcGFyZScsICdhcnJhbmdlJywgJ29yZ2FuaXplJyxcbiAgJ21hbmFnZScsICdjb250cm9sJywgJ29wZXJhdGUnLCAncnVuJywgJ2RyaXZlJywgJ2ZseScsICdzd2ltJywgJ3J1bicsICdqdW1wJyxcbiAgJ2NsaW1iJywgJ3B1c2gnLCAncHVsbCcsICdsaWZ0JywgJ2NhcnJ5JywgJ2RlbGl2ZXInLCAncmVjZWl2ZScsICdvYnRhaW4nLFxuICAnYWNoaWV2ZScsICdhY2NvbXBsaXNoJywgJ2NvbXBsZXRlJywgJ2ZpbmlzaCcsICdlbmQnLCAnc3RvcCcsICdwYXVzZScsXG4gICdjb250aW51ZScsICdwcm9jZWVkJywgJ2FkdmFuY2UnLCAncHJvZ3Jlc3MnLCAnaW1wcm92ZScsICdpbmNyZWFzZScsXG4gICdkZWNyZWFzZScsICdyZWR1Y2UnLCAnZXhwYW5kJywgJ2V4dGVuZCcsICdsaW1pdCcsICdyZXN0cmljdCcsICdwcmV2ZW50JyxcbiAgJ2F2b2lkJywgJ2VzY2FwZScsICdwcm90ZWN0JywgJ2RlZmVuZCcsICdhdHRhY2snLCAnZmlnaHQnLCAnd2luJywgJ2xvc2UnLFxuICAnc3VjY2VlZCcsICdmYWlsJywgJ3RyeScsICdhdHRlbXB0JywgJ3ByYWN0aWNlJywgJ3RyYWluJywgJ3N0dWR5JywgJ3RlYWNoJyxcbiAgJ2xlYXJuJywgJ2Rpc2NvdmVyJywgJ2V4cGxvcmUnLCAnc2VhcmNoJywgJ3NlZWsnLCAnaHVudCcsICdjYXRjaCcsICdjYXB0dXJlJyxcbiAgJ3JlbGVhc2UnLCAnZnJlZScsICdzYXZlJywgJ3Jlc2N1ZScsICdoZWxwJywgJ3N1cHBvcnQnLCAnYXNzaXN0JywgJ3NlcnZlJyxcbiAgJ2VtcGxveScsICdoaXJlJywgJ2ZpcmUnLCAncHJvbW90ZScsICdkZW1vdGUnLCAnYXBwb2ludCcsICdlbGVjdCcsICd2b3RlJyxcbiAgJ2Nob29zZScsICdzZWxlY3QnLCAncHJlZmVyJywgJ2RlY2lkZScsICdkZXRlcm1pbmUnLCAnY29uY2x1ZGUnLCAnanVkZ2UnLFxuICAnZXZhbHVhdGUnLCAnYXNzZXNzJywgJ21lYXN1cmUnLCAnY2FsY3VsYXRlJywgJ2NvdW50JywgJ2VzdGltYXRlJywgJ3ByZWRpY3QnLFxuICAnZm9yZWNhc3QnLCAncGxhbicsICdwcmVwYXJlJywgJ29yZ2FuaXplJywgJ2FycmFuZ2UnLCAnc2NoZWR1bGUnLCAnYm9vaycsXG4gICdvcmRlcicsICdyZXF1ZXN0JywgJ2RlbWFuZCcsICdjb21tYW5kJywgJ2RpcmVjdCcsICdpbnN0cnVjdCcsICdndWlkZScsXG4gICdsZWFkJywgJ2ZvbGxvdycsICdhY2NvbXBhbnknLCAnam9pbicsICdsZWF2ZScsICdkZXBhcnQnLCAnYXJyaXZlJywgJ3JldHVybicsXG4gICdlbnRlcicsICdleGl0JywgJ2FwcHJvYWNoJywgJ3dpdGhkcmF3JywgJ3JldHJlYXQnLCAnYWR2YW5jZScsICdtb3ZlJywgJ3NoaWZ0JyxcbiAgJ3RyYW5zZmVyJywgJ3RyYW5zcG9ydCcsICdkZWxpdmVyJywgJ3NlbmQnLCAncmVjZWl2ZScsICdjb2xsZWN0JywgJ2dhdGhlcicsXG4gICdkaXN0cmlidXRlJywgJ3NwcmVhZCcsICdzY2F0dGVyJywgJ2NvbmNlbnRyYXRlJywgJ2ZvY3VzJywgJ2FpbScsICd0YXJnZXQnLFxuICAnaGl0JywgJ21pc3MnLCAnc3RyaWtlJywgJ3RvdWNoJywgJ2dyYWInLCAnaG9sZCcsICdyZWxlYXNlJywgJ2xldCcsICdhbGxvdycsXG4gICdwZXJtaXQnLCAnZW5hYmxlJywgJ2ZvcmNlJywgJ2NvbXBlbCcsICdvYmxpZ2UnLCAncmVxdWlyZScsICduZWVkJywgJ3dhbnQnLFxuICAnZGVzaXJlJywgJ3dpc2gnLCAnaG9wZScsICdleHBlY3QnLCAnYW50aWNpcGF0ZScsICdmZWFyJywgJ2RyZWFkJywgJ3dvcnJ5JyxcbiAgJ2NvbmNlcm4nLCAnaW50ZXJlc3QnLCAnYXR0cmFjdCcsICdhcHBlYWwnLCAncGxlYXNlJywgJ3NhdGlzZnknLCAnZGlzYXBwb2ludCcsXG4gICdzdXJwcmlzZScsICdhbWF6ZScsICdhc3RvbmlzaCcsICdzaG9jaycsICdmcmlnaHRlbicsICdzY2FyZScsICd0ZXJyaWZ5JyxcbiAgJ2NhbG0nLCAncmVsYXgnLCAncmVzdCcsICdzbGVlcCcsICd3YWtlJywgJ3Jpc2UnLCAnc3RhbmQnLCAnc2l0JywgJ2xpZScsXG4gICdsZWFuJywgJ2JlbmQnLCAndHdpc3QnLCAndHVybicsICdzcGluJywgJ3JvdGF0ZScsICdyZXZvbHZlJywgJ29yYml0JyxcbiAgJ2NpcmNsZScsICdzdXJyb3VuZCcsICdlbmNsb3NlJywgJ2NvbnRhaW4nLCAnaW5jbHVkZScsICdleGNsdWRlJywgJ2ludm9sdmUnLFxuICAnYWZmZWN0JywgJ2luZmx1ZW5jZScsICdpbXBhY3QnLCAnY2hhbmdlJywgJ2FsdGVyJywgJ21vZGlmeScsICdhZGp1c3QnLFxuICAnYWRhcHQnLCAndHJhbnNmb3JtJywgJ2NvbnZlcnQnLCAndHJhbnNsYXRlJywgJ2ludGVycHJldCcsICdleHBsYWluJyxcbiAgJ2NsYXJpZnknLCAnc2ltcGxpZnknLCAnY29tcGxpY2F0ZScsICdjb25mdXNlJywgJ3B1enpsZScsICdteXN0aWZ5JyxcbiAgJ3JldmVhbCcsICdleHBvc2UnLCAnaGlkZScsICdjb25jZWFsJywgJ2NvdmVyJywgJ3VuY292ZXInLCAnZGlzY292ZXInLFxuICAnZmluZCcsICdsb2NhdGUnLCAnaWRlbnRpZnknLCAncmVjb2duaXplJywgJ2Rpc3Rpbmd1aXNoJywgJ2RpZmZlcmVudGlhdGUnLFxuICAnY29tcGFyZScsICdjb250cmFzdCcsICdtYXRjaCcsICdmaXQnLCAnc3VpdCcsICd3b3JrJywgJ2Z1bmN0aW9uJywgJ29wZXJhdGUnLFxuICAncGVyZm9ybScsICdleGVjdXRlJywgJ2FjY29tcGxpc2gnLCAnYWNoaWV2ZScsICdhdHRhaW4nLCAncmVhY2gnLCAnZ2FpbicsXG4gICdlYXJuJywgJ3dpbicsICdsb3NlJywgJ3NwZW5kJywgJ2Nvc3QnLCAnY2hhcmdlJywgJ3ByaWNlJywgJ3ZhbHVlJywgJ3dvcnRoJyxcbiAgJ3JpY2gnLCAncG9vcicsICdjaGVhcCcsICdleHBlbnNpdmUnLCAnZnJlZScsICdwYWlkJywgJ2FmZm9yZGFibGUnLCAnY29zdGx5Jyxcbl07XG5cbi8vIEFnZ3Jlc3NpdmUgdGllcjogRXZlcnl0aGluZyArIG1vcmVcbmV4cG9ydCBjb25zdCBFTl9BR0dSRVNTSVZFID0gW1xuICAuLi5FTl9CQUxBTkNFRCxcbiAgLy8gT2JqZWN0IHByb25vdW5zXG4gICdoZScsICdoaW0nLCAnaGlzJywgJ2hpbXNlbGYnLCAnc2hlJywgJ2hlcicsICdoZXJzJywgJ2hlcnNlbGYnLCAnaXQnLCAnaXRzJyxcbiAgJ2l0c2VsZicsICd0aGV5JywgJ3RoZW0nLCAndGhlaXInLCAndGhlaXJzJywgJ3RoZW1zZWx2ZXMnLFxuICAvLyBSZWxhdGl2ZSBwcm9ub3Vuc1xuICAnd2hpY2gnLCAnd2hvJywgJ3dob20nLCAnd2hvc2UnLCAnd2hhdCcsICd3aGVyZScsICd3aGVuJywgJ3doeScsICdob3cnLFxuICAvLyBJbnRlbnNpZmllcnNcbiAgJ2V4dHJlbWVseScsICdpbmNyZWRpYmx5JywgJ2Fic29sdXRlbHknLCAndG90YWxseScsICdjb21wbGV0ZWx5JywgJ3V0dGVybHknLFxuICAnaGlnaGx5JywgJ3BhcnRpY3VsYXJseScsICdlc3BlY2lhbGx5JywgJ2Z1bmRhbWVudGFsbHknLCAnZ2VuZXJhbGx5JyxcbiAgJ3R5cGljYWxseScsICd1c3VhbGx5JywgJ25vcm1hbGx5JywgJ2NvbW1vbmx5JywgJ2ZyZXF1ZW50bHknLCAncmVndWxhcmx5JyxcbiAgJ2NvbnNpc3RlbnRseScsICdjb25zdGFudGx5JywgJ2NvbnRpbnVvdXNseScsICdwZXJwZXR1YWxseScsICdhbHdheXMnLFxuICAnbmV2ZXInLCAnZXZlcicsICdob3dldmVyJywgJ21vcmVvdmVyJywgJ2Z1cnRoZXJtb3JlJywgJ2FkZGl0aW9uYWxseScsXG4gICdlaXRoZXInLCAnbmVpdGhlcicsICdsZWFzdCcsICdsZXNzJywgJ2JleW9uZCcsXG5dO1xuXG5leHBvcnQgY29uc3QgRU5fQkxBQ0tMSVNUID0ge1xuICBnZW50bGU6IEVOX0dFTlRMRSxcbiAgYmFsYW5jZWQ6IEVOX0JBTEFOQ0VELFxuICBhZ2dyZXNzaXZlOiBFTl9BR0dSRVNTSVZFLFxufTtcbiIsICIvKipcbiAqIEdlcm1hbiBmaWxsZXIgd29yZHMgb3JnYW5pemVkIGJ5IGNvbXByZXNzaW9uIGxldmVsLlxuICogU291cmNlOiBMaW5ndWlzdGljIHJlc2VhcmNoLCBOTFAgcmVzb3VyY2VzXG4gKi9cblxuLy8gR2VudGxlIHRpZXI6IE9ubHkgcG9saXRlIGZpbGxlclxuZXhwb3J0IGNvbnN0IERFX0dFTlRMRSA9IFtcbiAgJ2JpdHRlJywgJ2RhbmtlJywgJ2RhbmtlbicsICd2aWVsZW4nLCAnaGVyemxpY2gnLCAnZnJldXQnLFxuICAnXHUwMEU0aG0nLCAnXHUwMEU0aCcsICdobScsICdobW0nLCAnb2gnLCAnYWNoJywgJ25hJywgJ3RqYScsXG5dO1xuXG4vLyBCYWxhbmNlZCB0aWVyOiB+MjUwIGhpZ2gtZnJlcXVlbmN5IEdlcm1hbiB3b3Jkc1xuZXhwb3J0IGNvbnN0IERFX0JBTEFOQ0VEID0gW1xuICAuLi5ERV9HRU5UTEUsXG4gIC8vIEFydGljbGVzXG4gICdkZXInLCAnZGllJywgJ2RhcycsICdkZW4nLCAnZGVtJywgJ2RlcycsICdlaW4nLCAnZWluZScsICdlaW5lbicsICdlaW5lbScsICdlaW5lcycsXG4gIC8vIFByb25vdW5zXG4gICdpY2gnLCAnbWljaCcsICdtaXInLCAnbWVpbicsICdtZWluZScsICdtZWluZXInLCAndW5zJywgJ3Vuc2VyZScsICd1bnNlcmVyJyxcbiAgJ2R1JywgJ2RpY2gnLCAnZGlyJywgJ2RlaW4nLCAnZGVpbmUnLCAnZXInLCAnaWhuJywgJ2lobScsICdzZWluJywgJ3NlaW5lJyxcbiAgJ3NpZScsICdpaHInLCAnaWhyZScsICdlcycsICd3aXInLCAnaWhyJywgJ2V1Y2gnLCAnbWFuJywgJ21lbnNjaCcsXG4gIC8vIENvcHVsYXNcbiAgJ2lzdCcsICdzaW5kJywgJ3dhcicsICd3YXJlbicsICdzZWluJywgJ2dld2VzZW4nLCAnd2VyZGUnLCAnd2VyZGVuJywgJ3d1cmRlJyxcbiAgLy8gQXV4aWxpYXJpZXNcbiAgJ2hhYmVuJywgJ2hhdCcsICdoYWJlJywgJ2hhdHRlbicsICdrXHUwMEY2bm5lbicsICdrYW5uJywgJ21cdTAwRkNzc2VuJywgJ3NvbGxlbicsICdkXHUwMEZDcmZlbicsXG4gICdtXHUwMEY2Z2VuJywgJ21vY2h0ZScsICd3b2xsZW4nLCAnd2lsbCcsICd3b2xsdGUnLCAnbXVzc3RlJywgJ3NvbGx0ZScsICdrb25udGUnLFxuICAvLyBQcmVwb3NpdGlvbnNcbiAgJ3ZvbicsICdpbicsICd6dScsICdmXHUwMEZDcicsICdtaXQnLCAnYW4nLCAnYXVmJywgJ2JlaScsICduYWNoJywgJ1x1MDBGQ2JlcicsICd1bnRlcicsXG4gICdkdXJjaCcsICd1bScsICdiaXMnLCAnb2huZScsICdhdXMnLCAndm9yJywgJ3p3aXNjaGVuJywgJ2dlZ2VuJywgJ3NlaXQnLFxuICAnd1x1MDBFNGhyZW5kJywgJ2hpbnRlcicsICduZWJlbicsICdvYmVyaGFsYicsICd1bnRlcmhhbGInLCAnaW5uZXJoYWxiJywgJ2F1XHUwMERGZXJoYWxiJyxcbiAgJ3N0YXR0JywgJ3Ryb3R6JywgJ3dlZ2VuJywgJ2dlbVx1MDBFNFx1MDBERicsICdsYXV0JywgJ2VudGxhbmcnLCAnZW50Z2VnZW4nLCAnZmVybicsXG4gICdqZW5zZWl0cycsICdrbmFwJywgJ25cdTAwRjZyZGxpY2gnLCAnXHUwMEY2c3RsaWNoJywgJ3NcdTAwRkNkbGljaCcsICd3ZXN0bGljaCcsICdhYicsICdhbicsXG4gICdhdXMnLCAnYmVpJywgJ2JpcycsICdkdXJjaCcsICdlbnRsYW5nJywgJ2ZcdTAwRkNyJywgJ2dlZ2VuJywgJ29obmUnLCAnc2VpdCcsXG4gICd1bScsICd2b24nLCAndm9yJywgJ3p1JywgJ3p3aXNjaGVuJyxcbiAgLy8gQ29uanVuY3Rpb25zXG4gICd1bmQnLCAnb2RlcicsICdhYmVyJywgJ2Rlbm4nLCAnc29uZGVybicsICd3ZWlsJywgJ2RhJywgJ29id29obCcsICd3ZW5uJyxcbiAgJ2ZhbGxzJywgJ2RhbWl0JywgJ3dcdTAwRTRocmVuZCcsICdiZXZvcicsICduYWNoZGVtJywgJ3NvYmFsZCcsICdiaXMnLCAnc2VpdCcsXG4gICdhbHMnLCAnd2llJywgJ2Rhc3MnLCAnb2InLCAnZW50d2VkZXInLCAnbm9jaCcsICdzb3dvaGwnLCAnd2VkZXInLFxuICAvLyBEZW1vbnN0cmF0aXZlc1xuICAnZGllc2VyJywgJ2RpZXNlJywgJ2RpZXNlcycsICdkaWVzZW0nLCAnZGllc2VuJywgJ2plbmVyJywgJ2plbmUnLCAnc29sY2gnLFxuICAnc29sY2hlcicsICdzZWxic3QnLCAnc2VsYmVyJywgJ2ViZW4nLCAnZ2VyYWRlJywgJ25cdTAwRTRtbGljaCcsICduXHUwMEU0bWxpY2gnLFxuICAvLyBRdWFudGlmaWVyc1xuICAnYWxsZScsICdhbGxlcycsICd2aWVsJywgJ3ZpZWxlJywgJ3ZpZWxlcicsICdtZWhyJywgJ21laHJlcmUnLCAnd2VuaWcnLFxuICAnd2VuaWdlJywgJ21hbmNoJywgJ21hbmNoZScsICdqZWRlcicsICdqZWRlJywgJ2plZGVzJywgJ25pY2h0cycsICdldHdhcycsXG4gICdpcmdlbmQnLCAnaXJnZW5kZWluJywgJ2VpbmlnZScsICdtZWhyZXJlJywgJ3ZlcnNjaGllZGVuZScsICd6YWhscmVpY2hlJyxcbiAgJ3ZpZWxlJywgJ3dlbmlnZScsICdrZWluZScsICdhbGxlJywgJ2tlaW5lcicsICdrZWluZXMnLCAnbmllbWFuZCcsXG4gIC8vIEludGVuc2lmaWVycy9GaWxsZXJzXG4gICdhdWNoJywgJ3NvJywgJ2Fsc28nLCAnaGFsdCcsICdtYWwnLCAnZG9jaCcsICdlaWdlbnRsaWNoJywgJ3RhdHNcdTAwRTRjaGxpY2gnLFxuICAnd2lya2xpY2gnLCAnc2VocicsICd6aWVtbGljaCcsICdnZXJhZGUnLCAnZWJlbicsICdzY2hvbicsICdub2NoJywgJ251cicsXG4gICdhbGxlaW4nLCAnaW1tZXInLCAnbmllJywgJ25pZW1hbHMnLCAnb2Z0JywgJ21hbmNobWFsJywgJ2hcdTAwRTR1ZmlnJywgJ3NlbHRlbicsXG4gICd2aWVsbGVpY2h0JywgJ3dhaHJzY2hlaW5saWNoJywgJ3NpY2hlcicsICdrbGFyJywgJ25hdFx1MDBGQ3JsaWNoJywgJ2ZyZWlsaWNoJyxcbiAgJ1x1MDBGQ2JyaWdlbnMnLCAnYWxsZXJkaW5ncycsICdqZWRvY2gnLCAnc29uc3QnLCAnZGFubicsICdqZXR6dCcsICdoZXV0ZScsXG4gICdtb3JnZW4nLCAnZ2VzdGVybicsICdoaWVyJywgJ2RvcnQnLCAnZGEnLCAnd29oaW4nLCAnaGVyJywgJ3dlZycsICdoaW4nLFxuICAncmFuJywgJ3J1bScsICdoZXJ1bScsICdkYWJlaScsICdkYXZvbicsICdkYXJ1bScsICdkYW1pdCcsICdkYWZcdTAwRkNyJyxcbiAgJ2RhZ2VnZW4nLCAnZGF6dScsICdkYWhlcicsICdkYXJcdTAwRkNiZXInLCAnZGFydW50ZXInLCAnZGF6d2lzY2hlbicsICdkcmFuJyxcbiAgJ2RyYXVmJywgJ2RyaW4nLCAnZHJcdTAwRkNiZXInLCAnZHJ1bnRlcicsICdqYScsICduZWluJywgJ2RvY2gnLCAnZWJlbicsXG4gIC8vIEhpZ2gtZnJlcXVlbmN5IHZlcmJzXG4gICdtYWNoZW4nLCAnbWFjaHQnLCAnbWFjaGVuJywgJ3NhZ2VuJywgJ3NhZ3QnLCAnc2FndGUnLCAnZ2ViZW4nLCAnZ2lidCcsICdnYWInLFxuICAnbmVobWVuJywgJ25pbW10JywgJ25haG0nLCAnZmluZGVuJywgJ2ZpbmRldCcsICdmYW5kJywgJ3dpc3NlbicsICd3ZWlcdTAwREYnLFxuICAnd3Vzc3RlJywgJ2RlbmtlbicsICdkZW5rdCcsICdkYWNodGUnLCAnc2VoZW4nLCAnc2llaHQnLCAnc2FoJywgJ2tvbW1lbicsXG4gICdrb21tdCcsICdrYW0nLCAnZ2VoZW4nLCAnZ2VodCcsICdnaW5nJywgJ3N0ZWhlbicsICdzdGVodCcsICdsaWVnZW4nLCAnbGllZ3QnLFxuICAnbGFzc2VuJywgJ2xcdTAwRTRzc3QnLCAnaGFsdGVuJywgJ2hcdTAwRTRsdCcsICdoaWVsdCcsICdicmluZ2VuJywgJ2JyaW5ndCcsICdicmFjaHRlJyxcbiAgJ2JsZWliZW4nLCAnYmxlaWJ0JywgJ2JsaWViJywgJ2ZyYWdlbicsICdmcmFndCcsICdmcmFndGUnLCAnYW50d29ydGVuJyxcbiAgJ2FudHdvcnRldCcsICd6ZWlnZW4nLCAnemVpZ3QnLCAnemVpZ3RlJywgJ3NwcmVjaGVuJywgJ3NwcmljaHQnLCAnc3ByYWNoJyxcbiAgJ2hcdTAwRjZyZW4nLCAnaFx1MDBGNnJ0JywgJ2hcdTAwRjZydGUnLCAnbGVybmVuJywgJ2xlcm50JywgJ2xlcm50ZScsICd2ZXJzdGVoZW4nLCAndmVyc3RlaHQnLFxuICAndmVyc3RhbmQnLCAnYmVnaW5uZW4nLCAnYmVnaW5udCcsICdiZWdhbm4nLCAnZW5kZW4nLCAnZW5kZXQnLCAnZW5kZXRlJyxcbiAgJ2FyYmVpdGVuJywgJ2FyYmVpdGV0JywgJ2FyYmVpdGV0ZScsICdsZWJlbicsICdsZWJ0JywgJ2xlYnRlJywgJ3NwaWVsZW4nLFxuICAnc3BpZWx0JywgJ3NwaWVsdGUnLCAnc2NoYXVlbicsICdzY2hhdXQnLCAnc2NoYXV0ZScsICdzY2hyZWliZW4nLCAnc2NocmVpYnQnLFxuICAnc2NocmllYicsICdsZXNlbicsICdsaWVzdCcsICdsYXMnLCAnbWVpbmVuJywgJ21laW50JywgJ21laW50ZScsICdnbGF1YmVuJyxcbiAgJ2dsYXVidCcsICdnbGF1YnRlJywgJ2hvZmZlbicsICdob2ZmdCcsICdob2ZmdGUnLCAnYnJhdWNoZW4nLCAnYnJhdWNodCcsXG4gICdicmF1Y2h0ZScsICdkXHUwMEZDcmZlbicsICdkYXJmJywgJ2R1cmZ0ZScsICdzb2xsZW4nLCAnc29sbCcsICdzb2xsdGUnLCAnbVx1MDBGQ3NzZW4nLFxuICAnbXVzcycsICdtdXNzdGUnLCAna1x1MDBGNm5uZW4nLCAna2FubicsICdrb25udGUnLCAnd29sbGVuJywgJ3dpbGwnLCAnd29sbHRlJyxcbiAgJ21cdTAwRjZnZW4nLCAnbWFnJywgJ21vY2h0ZScsICdrZW5uZW4nLCAna2VubnQnLCAna2FubnRlJywgJ2hlaVx1MDBERmVuJywgJ2hlaVx1MDBERnQnLFxuICAnaGllXHUwMERGJywgJ2hlaVx1MDBERmVuJywgJ2hlaVx1MDBERmVuJywgJ2hlaVx1MDBERmVuJywgJ3NlaW4nLCAnaXN0JywgJ3dhcicsICdzaW5kJywgJ3dhcmVuJyxcbiAgJ2hhYmVuJywgJ2hhdCcsICdoYWJlJywgJ2hhdHRlbicsICdoYWJlbicsICdoYWJlbicsICdoYWJlbicsICdoYWJlbicsICdoYWJlbicsXG5dO1xuXG4vLyBBZ2dyZXNzaXZlIHRpZXJcbmV4cG9ydCBjb25zdCBERV9BR0dSRVNTSVZFID0gW1xuICAuLi5ERV9CQUxBTkNFRCxcbiAgJ2lobmVuJywgJ2locmVyJywgJ3NlaW5lbicsICdkZXJlbicsICdkZXNzZW4nLCAnd2VsY2hlcicsICd3ZWxjaGUnLCAnd2VyJyxcbiAgJ3dhcycsICd3bycsICd3aWUnLCAnZ2VuYXUnLCAnc2Nob24nLCAnbm9jaCcsICdudXInLCAnYWxsZWluJywgJ2ltbWVyJyxcbiAgJ25pZScsICduaWVtYWxzJywgJ29mdCcsICdtYW5jaG1hbCcsICdoXHUwMEU0dWZpZycsICdzZWx0ZW4nLCAndmllbGxlaWNodCcsXG4gICd3YWhyc2NoZWlubGljaCcsICdzaWNoZXInLCAna2xhcicsICduYXRcdTAwRkNybGljaCcsICdmcmVpbGljaCcsICdcdTAwRkNicmlnZW5zJyxcbiAgJ2FsbGVyZGluZ3MnLCAnamVkb2NoJywgJ3NvbnN0JywgJ2Rhbm4nLCAnamV0enQnLCAnaGV1dGUnLCAnbW9yZ2VuJyxcbiAgJ2dlc3Rlcm4nLCAnaGllcicsICdkb3J0JywgJ2RhJywgJ3dvaGluJywgJ2hlcicsICdnZWdlbicsICd3XHUwMEU0aHJlbmQnLCAnc2VpdCcsXG5dO1xuXG5leHBvcnQgY29uc3QgREVfQkxBQ0tMSVNUID0ge1xuICBnZW50bGU6IERFX0dFTlRMRSxcbiAgYmFsYW5jZWQ6IERFX0JBTEFOQ0VELFxuICBhZ2dyZXNzaXZlOiBERV9BR0dSRVNTSVZFLFxufTtcbiIsICIvKipcbiAqIE11bHRpLWxhbmd1YWdlIGRpY3Rpb25hcnkgaW5kZXguXG4gKiBFeHBvcnRzIGFsbCBsYW5ndWFnZS1zcGVjaWZpYyBmaWxsZXIgd29yZCBkaWN0aW9uYXJpZXMuXG4gKi9cblxuZXhwb3J0IHsgRU5fQkxBQ0tMSVNUIH0gZnJvbSAnLi9lbi1maWxsZXInO1xuZXhwb3J0IHsgREVfQkxBQ0tMSVNUIH0gZnJvbSAnLi9kZS1maWxsZXInO1xuXG4vLyBUeXBlIGRlZmluaXRpb25zIGZvciBsYW5ndWFnZSBjb2Rlc1xuZXhwb3J0IHR5cGUgTGFuZ3VhZ2VDb2RlID0gJ2VuJyB8ICdkZSc7XG5cbi8vIE1hcCBvZiBsYW5ndWFnZSBjb2RlIHRvIGJsYWNrbGlzdCBvYmplY3RcbmltcG9ydCB7IEVOX0JMQUNLTElTVCB9IGZyb20gJy4vZW4tZmlsbGVyJztcbmltcG9ydCB7IERFX0JMQUNLTElTVCB9IGZyb20gJy4vZGUtZmlsbGVyJztcblxuZXhwb3J0IGNvbnN0IExBTkdVQUdFX0RJQ1RJT05BUklFUzogUmVjb3JkPExhbmd1YWdlQ29kZSwgeyBnZW50bGU6IHN0cmluZ1tdOyBiYWxhbmNlZDogc3RyaW5nW107IGFnZ3Jlc3NpdmU6IHN0cmluZ1tdIH0+ID0ge1xuICBlbjogRU5fQkxBQ0tMSVNULFxuICBkZTogREVfQkxBQ0tMSVNULFxufTtcblxuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9MQU5HVUFHRVM6IExhbmd1YWdlQ29kZVtdID0gWydlbicsICdkZSddO1xuIiwgIi8vID09PT09PT09PT09PT09PT09PT09IE1VTFRJLUxBTkdVQUdFIFNVUFBPUlQgKEVOL0RFIE9OTFkpID09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7XG4gIExBTkdVQUdFX0RJQ1RJT05BUklFUyxcbiAgdHlwZSBMYW5ndWFnZUNvZGUsXG4gIFNVUFBPUlRFRF9MQU5HVUFHRVMsXG59IGZyb20gJy4vZGljdGlvbmFyaWVzJztcblxuZXhwb3J0IHR5cGUgeyBMYW5ndWFnZUNvZGUgfTtcblxuZXhwb3J0IHR5cGUgQ29tcHJlc3Npb25MZXZlbCA9IFwiZ2VudGxlXCIgfCBcImJhbGFuY2VkXCIgfCBcImFnZ3Jlc3NpdmVcIjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT0gU1RBVElTVElDUyBUUkFDS0lORyA9PT09PT09PT09PT09PT09PT09PVxuXG5pbnRlcmZhY2UgQ29tcHJlc3Npb25TdGF0cyB7XG4gIHRvdGFsQ29tcHJlc3Npb25zOiBudW1iZXI7XG4gIHRvdGFsQ2hhcnNPcmlnaW5hbDogbnVtYmVyO1xuICB0b3RhbENoYXJzQ29tcHJlc3NlZDogbnVtYmVyO1xuICBsYXN0VXBkYXRlZDogc3RyaW5nO1xufVxuXG5sZXQgc3RhdHM6IENvbXByZXNzaW9uU3RhdHMgPSB7XG4gIHRvdGFsQ29tcHJlc3Npb25zOiAwLFxuICB0b3RhbENoYXJzT3JpZ2luYWw6IDAsXG4gIHRvdGFsQ2hhcnNDb21wcmVzc2VkOiAwLFxuICBsYXN0VXBkYXRlZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT0gTEFOR1VBR0UgREVURUNUSU9OIChFTi9ERSBPTkxZKSA9PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBkZXRlY3RMYW5ndWFnZSh0ZXh0OiBzdHJpbmcpOiBMYW5ndWFnZUNvZGUge1xuICBjb25zdCB3b3JkcyA9IHRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgvXFxiW2Etelx1MDBFNFx1MDBGNlx1MDBGQ1x1MDBERl17Myx9XFxiL2cpIHx8IFtdO1xuICBcbiAgY29uc3QgZW5JbmRpY2F0b3JzID0gWyd0aGUnLCAnYScsICdhbicsICdpcycsICdhcmUnLCAnd2FzJywgJ3dlcmUnLCAnYmUnLCAnYmVlbicsICdoYXZlJywgJ2hhcycsICdoYWQnLCAnZG8nLCAnZG9lcyddO1xuICBjb25zdCBkZUluZGljYXRvcnMgPSBbXG4gICAgJ2RlcicsICdkaWUnLCAnZGFzJywgJ2RlbicsICdkZW0nLCAnZGVzJywgJ2VpbicsICdlaW5lJyxcbiAgICAnaWNoJywgJ21pY2gnLCAnbWlyJywgJ2R1JywgJ2RpY2gnLCAnZGlyJywgJ2VyJywgJ3NpZScsICdlcycsICd3aXInLCAndW5zJywgJ2locicsICdldWNoJyxcbiAgICAnaXN0JywgJ3NpbmQnLCAnd2FyJywgJ3dhcmVuJywgJ3NlaW4nLCAnaGFiZW4nLCAnaGF0JywgJ2hhYmUnLCAnd2VyZGVuJywgJ3dpcmQnLCAnd1x1MDBGQ3JkZScsXG4gICAgJ3VuZCcsICdvZGVyJywgJ2FiZXInLCAnbmljaHQnLCAnYXVjaCcsICdzZWhyJywgJ3ZpZWwnLCAnbWVocicsICdhbGxlJywgJ2FsbGVzJyxcbiAgXTtcbiAgXG4gIGxldCBlbkNvdW50ID0gMCwgZGVDb3VudCA9IDA7XG4gIFxuICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZHMpIHtcbiAgICBpZiAoZW5JbmRpY2F0b3JzLmluY2x1ZGVzKHdvcmQpKSBlbkNvdW50Kys7XG4gICAgZWxzZSBpZiAoZGVJbmRpY2F0b3JzLmluY2x1ZGVzKHdvcmQpKSBkZUNvdW50Kys7XG4gIH1cbiAgXG4gIHJldHVybiBkZUNvdW50ID4gZW5Db3VudCA/ICdkZScgOiAnZW4nO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUk9HTE9EWVRFIENMQVNTID09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjbGFzcyBUcm9nbG9keXRlIHtcbiAgcHJpdmF0ZSBwaHJhc2VzQW5kTG9naWM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIHByaXZhdGUgc3lub255bXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIHByaXZhdGUgY2FjaGVkQmxhY2tsaXN0czogTWFwPExhbmd1YWdlQ29kZSwgTWFwPENvbXByZXNzaW9uTGV2ZWwsIFNldDxzdHJpbmc+Pj47XG4gIHByaXZhdGUgcmVhZG9ubHkgTUFYX0NPTVBSRVNTSU9OU19CRUZPUkVfUkVTRVQgPSAxMDAwMDtcbiAgcHJpdmF0ZSByZWFkb25seSBNQVhfQ0hBUlNfQkVGT1JFX1JFU0VUID0gMTBfMDAwXzAwMDtcblxuICBjb25zdHJ1Y3RvcihkaWN0aW9uYXJpZXM6IHtcbiAgICBwaHJhc2VzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICAgIGJsYWNrbGlzdDogc3RyaW5nW107XG4gICAgc3lub255bXM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICB9KSB7XG4gICAgdGhpcy5waHJhc2VzQW5kTG9naWMgPSB7IC4uLmRpY3Rpb25hcmllcy5waHJhc2VzIH07XG4gICAgdGhpcy5zeW5vbnltcyA9IGRpY3Rpb25hcmllcy5zeW5vbnltcyB8fCB7fTtcbiAgICBcbiAgICB0aGlzLmNhY2hlZEJsYWNrbGlzdHMgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCBsYW5nQ29kZSBvZiBTVVBQT1JURURfTEFOR1VBR0VTKSB7XG4gICAgICBjb25zdCBsYW5nRGljdCA9IExBTkdVQUdFX0RJQ1RJT05BUklFU1tsYW5nQ29kZV07XG4gICAgICBjb25zdCBsZXZlbE1hcCA9IG5ldyBNYXA8Q29tcHJlc3Npb25MZXZlbCwgU2V0PHN0cmluZz4+KCk7XG4gICAgICBcbiAgICAgIFsnZ2VudGxlJywgJ2JhbGFuY2VkJywgJ2FnZ3Jlc3NpdmUnXS5mb3JFYWNoKChsZXZlbCkgPT4ge1xuICAgICAgICBjb25zdCBsdmwgPSBsZXZlbCBhcyBDb21wcmVzc2lvbkxldmVsO1xuICAgICAgICBsZXZlbE1hcC5zZXQobHZsLCBuZXcgU2V0KGxhbmdEaWN0W2x2bF0ubWFwKHcgPT4gdy50b0xvd2VyQ2FzZSgpKSkpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRoaXMuY2FjaGVkQmxhY2tsaXN0cy5zZXQobGFuZ0NvZGUsIGxldmVsTWFwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBzcGVjaWFsQ2hhcnMgPSBbJ1xcXFwnLCAnXicsICckJywgJyonLCAnKycsICc/JywgJygnLCAnKScsICcuJywgJ3snLCAnfScsICd8JywgJ1snLCAnXScsICcvJ107XG4gICAgbGV0IHJlc3VsdCA9IHN0cjtcbiAgICBmb3IgKGNvbnN0IGNoIG9mIHNwZWNpYWxDaGFycykge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNwbGl0KGNoKS5qb2luKCdcXFxcJyArIGNoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbXByZXNzKHByb21wdDogc3RyaW5nLCBvcHRpb25zPzogeyBcbiAgICBsZXZlbD86IENvbXByZXNzaW9uTGV2ZWw7XG4gICAgcHJvdGVjdFVybHM/OiBib29sZWFuO1xuICAgIHByb3RlY3ROdW1iZXJzPzogYm9vbGVhbjtcbiAgICBwcm90ZWN0SGVhZGVycz86IGJvb2xlYW47XG4gICAgcHJvdGVjdEZpbGVQYXRocz86IGJvb2xlYW47XG4gICAgbGFuZ3VhZ2U/OiBMYW5ndWFnZUNvZGU7XG4gIH0pOiBzdHJpbmcge1xuICAgIGNvbnN0IGxldmVsID0gb3B0aW9ucz8ubGV2ZWwgPz8gXCJiYWxhbmNlZFwiO1xuICAgIGNvbnN0IHByb3RlY3RVcmxzID0gb3B0aW9ucz8ucHJvdGVjdFVybHMgPz8gdHJ1ZTtcbiAgICBjb25zdCBwcm90ZWN0TnVtYmVycyA9IG9wdGlvbnM/LnByb3RlY3ROdW1iZXJzID8/IHRydWU7XG4gICAgY29uc3QgcHJvdGVjdEhlYWRlcnMgPSBvcHRpb25zPy5wcm90ZWN0SGVhZGVycyA/PyB0cnVlO1xuICAgIFxuICAgIGxldCBsYW5nQ29kZTogTGFuZ3VhZ2VDb2RlO1xuICAgIGlmIChvcHRpb25zPy5sYW5ndWFnZSkge1xuICAgICAgbGFuZ0NvZGUgPSBvcHRpb25zLmxhbmd1YWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYW5nQ29kZSA9IGRldGVjdExhbmd1YWdlKHByb21wdCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKGBbVHJvZ2xvZHl0ZV0gRGV0ZWN0ZWQgbGFuZ3VhZ2U6ICR7bGFuZ0NvZGV9IGZvciBwcm9tcHQ6IFwiJHtwcm9tcHQuc3Vic3RyaW5nKDAsIDgwKX0uLi5cImApO1xuXG4gICAgbGV0IHRleHQgPSBwcm9tcHQ7XG4gICAgY29uc3QgcHJvdGVjdGVkSXRlbXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBsZXZlbEJsYWNrbGlzdE1hcCA9IHRoaXMuY2FjaGVkQmxhY2tsaXN0cy5nZXQobGFuZ0NvZGUpO1xuICAgIGlmICghbGV2ZWxCbGFja2xpc3RNYXApIHtcbiAgICAgIGNvbnNvbGUud2FybihgW1Ryb2dsb2R5dGVdIFVua25vd24gbGFuZ3VhZ2UgY29kZTogJHtsYW5nQ29kZX0sIGZhbGxpbmcgYmFjayB0byBFbmdsaXNoYCk7XG4gICAgICBsYW5nQ29kZSA9ICdlbic7XG4gICAgfVxuICAgIGNvbnN0IGxldmVsQmxhY2tsaXN0ID0gdGhpcy5jYWNoZWRCbGFja2xpc3RzLmdldChsYW5nQ29kZSB8fCAnZW4nKSEuZ2V0KGxldmVsKSE7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBQUk9URUNUSU9OIFBIQVNFID09PT09PT09PT09PT09PT09PT09XG4gICAgbGV0IHBsYWNlaG9sZGVyQ291bnRlciA9IDA7XG4gICAgXG4gICAgY29uc3QgZ2VuZXJhdGVQbGFjZWhvbGRlciA9ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KDB4RTAwMCArIChwbGFjZWhvbGRlckNvdW50ZXIrKyAlIDB4RkZGKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IEJSRUFLX0VWRU5fTEVOR1RIID0gODtcbiAgICBcbiAgICBjb25zdCBwcm90ZWN0SWZXb3J0aHdoaWxlID0gKG1hdGNoOiBzdHJpbmcsIG1pbkxlbjogbnVtYmVyID0gQlJFQUtfRVZFTl9MRU5HVEgpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKG1hdGNoLmxlbmd0aCA8PSBtaW5MZW4pIHJldHVybiBtYXRjaDtcbiAgICAgIHByb3RlY3RlZEl0ZW1zLnB1c2gobWF0Y2gpO1xuICAgICAgcmV0dXJuIGdlbmVyYXRlUGxhY2Vob2xkZXIoKTtcbiAgICB9O1xuXG4gICAgLy8gMS4gUHJvdGVjdCBjb2RlIGJsb2Nrc1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhgYGBbXFxzXFxTXSo/YGBgfGBbXmBdK2ApL2csIChtYXRjaCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3RlY3RJZldvcnRod2hpbGUobWF0Y2gsIDE1KTtcbiAgICB9KTtcblxuICAgIC8vIDIuIFByb3RlY3QgVVJMc1xuICAgIGlmIChwcm90ZWN0VXJscykge1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKGh0dHBzPzpcXC9cXC9bXlxcczw+KClcIidcXFxcXFxbXFxdXSt8d3d3XFwuW15cXHM8PigpXCInXFxcXFxcW1xcXV0rKS9naSwgKG1hdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCAyMCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAzLiBQcm90ZWN0IHZlcnNpb24gbnVtYmVycyBhbmQgc29mdHdhcmUgbmFtZXMgd2l0aCBkb3RzXG4gICAgaWYgKHByb3RlY3ROdW1iZXJzKSB7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXGIodlxcZCtcXC5cXGQrKD86XFwuXFxkKyk/KVxcYi9nLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcYihbQS1aXVthLXpBLVowLTldKlxcLlthLXpBLVowLTldKylcXGIvZywgKG1hdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCA2KTtcbiAgICAgIH0pO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKCNcXGR7Myx9KS9nLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXsxMn0pL2dpLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcbiAgICB9XG5cbiAgICAvLyA0LiBQcm90ZWN0IG1hcmtkb3duIGhlYWRlcnNcbiAgICBpZiAocHJvdGVjdEhlYWRlcnMpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhefFxcbikoI3sxLDZ9XFxzKy4rKS9nLCAobWF0Y2gsIG5ld2xpbmUsIGhlYWRlcikgPT4ge1xuICAgICAgICBjb25zdCBwcm90ZWN0ZWRIZWFkZXIgPSBwcm90ZWN0SWZXb3J0aHdoaWxlKGhlYWRlciwgMTIpO1xuICAgICAgICByZXR1cm4gYCR7bmV3bGluZX0ke3Byb3RlY3RlZEhlYWRlcn1gO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gNS4gUHJvdGVjdCBXaW5kb3dzIHBhdGhzIChDOlxcLi4uKSAtIE1VU1QgY29tZSBiZWZvcmUgc3lub255bSByZXBsYWNlbWVudCFcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oW0EtWmEtel06W1xcL1xcXFxdW148PlwifD8qXFxyXFxuXXsxMCx9KS9nLCAobWF0Y2gpID0+IHtcbiAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCAxNSk7XG4gICAgfSk7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBDT01QUkVTU0lPTiBQSEFTRSA9PT09PT09PT09PT09PT09PT09PVxuXG4gICAgbGV0IHBocmFzZU1hdGNoZXMgPSAwO1xuICAgIGxldCBwaHJhc2VDaGFyc1NhdmVkID0gMDtcblxuICAgIC8vIFNvcnQgcGhyYXNlcyBieSBsZW5ndGggKGxvbmdlc3QgZmlyc3QpIHRvIGF2b2lkIHBhcnRpYWwgbWF0Y2hlc1xuICAgIGNvbnN0IHNvcnRlZFBocmFzZXMgPSBPYmplY3QuZW50cmllcyh0aGlzLnBocmFzZXNBbmRMb2dpYylcbiAgICAgIC5maWx0ZXIoKFtwaHJhc2VdKSA9PiBwaHJhc2UgJiYgcGhyYXNlLmxlbmd0aCA+PSAyKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGJbMF0ubGVuZ3RoIC0gYVswXS5sZW5ndGgpO1xuXG4gICAgLy8gNS4gUGhyYXNlIGFuZCBsb2dpYyBjb2xsYXBzaW5nIChsb25nZXN0IHBocmFzZXMgZmlyc3QhKVxuICAgIGZvciAoY29uc3QgW3BocmFzZSwgcmVwbGFjZW1lbnRdIG9mIHNvcnRlZFBocmFzZXMpIHtcbiAgICAgIGNvbnN0IGVzY2FwZWQgPSB0aGlzLmVzY2FwZVJlZ2V4KHBocmFzZSk7XG4gICAgICBjb25zdCB3b3JkQ2hhciA9IFwiYS16QS1aMC05XydcdTAwREZcdTAwRTRcdTAwRjZcdTAwRkNcdTAwQzRcdTAwRDZcdTAwRENcIjtcbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgKD88IVske3dvcmRDaGFyfV0pJHtlc2NhcGVkfSg/IVske3dvcmRDaGFyfV0pYCwgJ2dpJyk7XG4gICAgICBcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0Lm1hdGNoKHJlZ2V4KTtcbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHBocmFzZU1hdGNoZXMgKz0gbWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgIHBocmFzZUNoYXJzU2F2ZWQgKz0gbWF0Y2hlcy5yZWR1Y2UoKHN1bSwgbSkgPT4gc3VtICsgbS5sZW5ndGggLSAocmVwbGFjZW1lbnQ/Lmxlbmd0aCB8fCAwKSwgMCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UocmVnZXgsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VtZW50ICYmIHJlcGxhY2VtZW50LnRyaW0oKSAhPT0gJycgPyByZXBsYWNlbWVudCA6ICcgJztcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IFdPUkQgRklMVEVSSU5HIFBIQVNFID09PT09PT09PT09PT09PT09PT09XG4gICAgXG4gICAgLy8gU3BsaXQgaW50byB3b3JkcyB3aGlsZSBwcmVzZXJ2aW5nIHB1bmN0dWF0aW9uIGFuZCBzcGFjaW5nXG4gICAgY29uc3Qgd29yZFBhdHRlcm4gPSAvW2EtekEtWjAtOV8nXHUwMERGXHUwMEU0XHUwMEY2XHUwMEZDXHUwMEM0XHUwMEQ2XHUwMERDXSsvZztcbiAgICBjb25zdCB0b2tlbnMgPSB0ZXh0LnNwbGl0KHdvcmRQYXR0ZXJuKTtcbiAgICBjb25zdCB3b3JkcyA9IHRleHQubWF0Y2god29yZFBhdHRlcm4pIHx8IFtdO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGBbVHJvZ2xvZHl0ZV0gRm91bmQgJHt3b3Jkcy5sZW5ndGh9IHdvcmRzIGluICR7dG9rZW5zLmxlbmd0aH0gdG9rZW4gc2xvdHNgKTtcblxuICAgIGxldCBmaWx0ZXJlZENvdW50ID0gMDtcbiAgICBsZXQgc3lub255bUNvdW50ID0gMDtcbiAgICBjb25zdCBmaWx0ZXJlZFdvcmRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIFxuICAgIGZvciAoY29uc3Qgd29yZCBvZiB3b3Jkcykge1xuICAgICAgY29uc3QgbG93ZXIgPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgICBcbiAgICAgIC8vIENoZWNrIGJsYWNrbGlzdCBmaXJzdFxuICAgICAgaWYgKGxldmVsQmxhY2tsaXN0Lmhhcyhsb3dlcikpIHtcbiAgICAgICAgZmlsdGVyZWRDb3VudCsrO1xuICAgICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGlzIHdvcmQgZW50aXJlbHlcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQXBwbHkgc3lub255bSByZXBsYWNlbWVudFxuICAgICAgaWYgKHRoaXMuc3lub255bXNbbG93ZXJdKSB7XG4gICAgICAgIHN5bm9ueW1Db3VudCsrO1xuICAgICAgICBmaWx0ZXJlZFdvcmRzLnB1c2godGhpcy5zeW5vbnltc1tsb3dlcl0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gS2VlcCBvcmlnaW5hbCB3b3JkXG4gICAgICBmaWx0ZXJlZFdvcmRzLnB1c2god29yZCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBCbGFja2xpc3Q6ICR7bGV2ZWxCbGFja2xpc3Quc2l6ZX0gd29yZHMsIEZpbHRlcmVkOiAke2ZpbHRlcmVkQ291bnR9LCBTeW5vbnltczogJHtzeW5vbnltQ291bnR9YCk7XG5cbiAgICAvLyBSZWNvbnN0cnVjdCB0ZXh0IGJ5IGludGVybGVhdmluZyB0b2tlbnMgKGRlbGltaXRlcnMpIGFuZCBmaWx0ZXJlZCB3b3Jkc1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBsZXQgd29yZEluZGV4ID0gMDtcbiAgICBcbiAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xuICAgICAgcmVzdWx0ICs9IHRva2VuOyAvLyBBZGQgZGVsaW1pdGVyL3B1bmN0dWF0aW9uXG4gICAgICBpZiAod29yZEluZGV4IDwgZmlsdGVyZWRXb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ICs9IGZpbHRlcmVkV29yZHNbd29yZEluZGV4KytdOyAvLyBBZGQgbmV4dCBrZXB0IHdvcmRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGVhbiB1cCB3aGl0ZXNwYWNlIGFuZCBwdW5jdHVhdGlvbiBhcnRpZmFjdHNcbiAgICB0ZXh0ID0gcmVzdWx0XG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnICcpICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGFwc2UgbXVsdGlwbGUgc3BhY2VzIHRvIG9uZVxuICAgICAgLnJlcGxhY2UoL1xccysoWy4sPyE7Ol0pL2csICckMScpICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBzcGFjZSBCRUZPUkUgcHVuY3R1YXRpb25cbiAgICAgIC5yZXBsYWNlKC8oWy4/ITs6XSkoPz1bQS1aXHUwMERGXHUwMEM0XHUwMEQ2XHUwMERDXSkvZywgJyQxICcpICAgICAgLy8gQWRkIHNwYWNlIEFGVEVSIHNlbnRlbmNlLWVuZGluZyBwdW5jdCAoYmVmb3JlIENBUElUQUwpXG4gICAgICAudHJpbSgpO1xuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gUkVTVE9SQVRJT04gUEhBU0UgPT09PT09PT09PT09PT09PT09PT1cbiAgICBjb25zb2xlLmxvZyhgW1Ryb2dsb2R5dGVdIFJlc3RvcmluZyAke3Byb3RlY3RlZEl0ZW1zLmxlbmd0aH0gcHJvdGVjdGVkIGl0ZW1zLi4uYCk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm90ZWN0ZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCgweEUwMDAgKyAoaSAlIDB4RkZGKSk7XG4gICAgICBjb25zdCBpdGVtID0gcHJvdGVjdGVkSXRlbXNbaV07XG4gICAgICBcbiAgICAgIGlmICh0ZXh0LmluY2x1ZGVzKHBsYWNlaG9sZGVyKSkge1xuICAgICAgICB0ZXh0ID0gdGV4dC5zcGxpdChwbGFjZWhvbGRlcikuam9pbihpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgW1Ryb2dsb2R5dGVdIFx1MjZBMFx1RkUwRiBQbGFjZWhvbGRlciAke2l9IG5vdCBmb3VuZCFgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBNRVRSSUNTIFJFUE9SVCA9PT09PT09PT09PT09PT09PT09PVxuXG4gICAgY29uc3Qgb3JpZ2luYWxMZW5ndGggPSBwcm9tcHQubGVuZ3RoO1xuICAgIGNvbnN0IGNvbXByZXNzZWRMZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgICBjb25zdCBzYXZpbmdzID0gb3JpZ2luYWxMZW5ndGggLSBjb21wcmVzc2VkTGVuZ3RoO1xuICAgIGNvbnN0IHBlcmNlbnRTYXZpbmdzID0gb3JpZ2luYWxMZW5ndGggPiAwID8gKHNhdmluZ3MgLyBvcmlnaW5hbExlbmd0aCkgKiAxMDAgOiAwO1xuXG4gICAgY29uc29sZS5sb2coJ1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG4gICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBDb21wcmVzc2lvbiBSZXBvcnQgKCR7bGV2ZWwudG9VcHBlckNhc2UoKX0pYCk7XG4gICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG4gICAgY29uc29sZS5sb2coYFJlc3VsdDogJHtvcmlnaW5hbExlbmd0aH0gXHUyMTkyICR7Y29tcHJlc3NlZExlbmd0aH0gY2hhcnMgKCR7cGVyY2VudFNhdmluZ3MudG9GaXhlZCgxKX0lICR7c2F2aW5ncyA+PSAwID8gJ3NhdmluZ3MnIDogJ292ZXJoZWFkJ30pYCk7XG4gICAgXG4gICAgY29uc3QgdHJ1bmNhdGUgPSAoczogc3RyaW5nLCBtYXggPSAxNTApID0+IHMubGVuZ3RoID4gbWF4ID8gYCR7cy5zdWJzdHJpbmcoMCwgbWF4KX0uLi5gIDogcztcbiAgICBjb25zb2xlLmxvZyhgXHUyNUI2IElOUFVUOiAgICAgIFwiJHt0cnVuY2F0ZShwcm9tcHQpfVwiYCk7XG4gICAgY29uc29sZS5sb2coYFx1MjVCNiBDT01QUkVTU0VEOiBcIiR7dHJ1bmNhdGUodGV4dCl9XCJgKTtcbiAgICBcbiAgICBpZiAocGhyYXNlTWF0Y2hlcyA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQaHJhc2UgY29sbGFwc2luZzogJHtwaHJhc2VNYXRjaGVzfSBtYXRjaGVzLCAtJHtwaHJhc2VDaGFyc1NhdmVkfSBjaGFyc2ApO1xuICAgIH1cbiAgICBpZiAoZmlsdGVyZWRDb3VudCA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGBXb3JkIGZpbHRlcmluZzogJHtmaWx0ZXJlZENvdW50fSB3b3JkcyByZW1vdmVkLCAke3N5bm9ueW1Db3VudH0gc3lub255bXMgYXBwbGllZGApO1xuICAgIH1cbiAgICBpZiAocHJvdGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc29sZS5sb2coYFByb3RlY3Rpb246ICR7cHJvdGVjdGVkSXRlbXMubGVuZ3RofSBpdGVtcyBwcmVzZXJ2ZWRgKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY3VtdWxhdGl2ZVN0YXRzID0gdGhpcy5nZXRTdGF0cygpO1xuICAgIGNvbnN0IHRvdGFsU2F2aW5ncyA9IGN1bXVsYXRpdmVTdGF0cy50b3RhbENoYXJzT3JpZ2luYWwgLSBjdW11bGF0aXZlU3RhdHMudG90YWxDaGFyc0NvbXByZXNzZWQ7XG4gICAgY29uc3QgYXZnU2F2aW5nc1BlcmNlbnQgPSBjdW11bGF0aXZlU3RhdHMudG90YWxDaGFyc09yaWdpbmFsID4gMCBcbiAgICAgID8gKHRvdGFsU2F2aW5ncyAvIGN1bXVsYXRpdmVTdGF0cy50b3RhbENoYXJzT3JpZ2luYWwpICogMTAwIDogMDtcbiAgICBjb25zb2xlLmxvZyhgQ3VtdWxhdGl2ZTogJHtjdW11bGF0aXZlU3RhdHMudG90YWxDb21wcmVzc2lvbnN9IGNvbXByZXNzaW9ucywgJHthdmdTYXZpbmdzUGVyY2VudC50b0ZpeGVkKDEpfSUgYXZnIHNhdmluZ3NgKTtcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4nKTtcblxuICAgIC8vIE1lbW9yeSBtYW5hZ2VtZW50XG4gICAgaWYgKHN0YXRzLnRvdGFsQ29tcHJlc3Npb25zID49IHRoaXMuTUFYX0NPTVBSRVNTSU9OU19CRUZPUkVfUkVTRVQgfHwgXG4gICAgICAgIHN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCA+PSB0aGlzLk1BWF9DSEFSU19CRUZPUkVfUkVTRVQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbVHJvZ2xvZHl0ZV0gU3RhdHMgdGhyZXNob2xkIHJlYWNoZWQsIHJlc2V0dGluZycpO1xuICAgICAgc3RhdHMgPSB7XG4gICAgICAgIHRvdGFsQ29tcHJlc3Npb25zOiAwLFxuICAgICAgICB0b3RhbENoYXJzT3JpZ2luYWw6IDAsXG4gICAgICAgIHRvdGFsQ2hhcnNDb21wcmVzc2VkOiAwLFxuICAgICAgICBsYXN0VXBkYXRlZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0cy50b3RhbENvbXByZXNzaW9ucysrO1xuICAgIHN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCArPSBwcm9tcHQubGVuZ3RoO1xuICAgIHN0YXRzLnRvdGFsQ2hhcnNDb21wcmVzc2VkICs9IHRleHQubGVuZ3RoO1xuICAgIHN0YXRzLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBnZXRTdGF0cygpOiBDb21wcmVzc2lvblN0YXRzICYgeyB0b3RhbFNhdmluZ3M6IG51bWJlcjsgc2F2aW5nc1BlcmNlbnQ6IG51bWJlciB9IHtcbiAgICBjb25zdCB0b3RhbFNhdmluZ3MgPSBzdGF0cy50b3RhbENoYXJzT3JpZ2luYWwgLSBzdGF0cy50b3RhbENoYXJzQ29tcHJlc3NlZDtcbiAgICBjb25zdCBzYXZpbmdzUGVyY2VudCA9IHN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCA+IDAgXG4gICAgICA/IE1hdGgucm91bmQoKHRvdGFsU2F2aW5ncyAvIHN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCkgKiAxMDApIDogMDtcbiAgICBcbiAgICByZXR1cm4geyAuLi5zdGF0cywgdG90YWxTYXZpbmdzLCBzYXZpbmdzUGVyY2VudCB9O1xuICB9XG5cbiAgcmVzZXRTdGF0cygpOiB2b2lkIHtcbiAgICBzdGF0cyA9IHtcbiAgICAgIHRvdGFsQ29tcHJlc3Npb25zOiAwLFxuICAgICAgdG90YWxDaGFyc09yaWdpbmFsOiAwLFxuICAgICAgdG90YWxDaGFyc0NvbXByZXNzZWQ6IDAsXG4gICAgICBsYXN0VXBkYXRlZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIH07XG4gIH1cbn1cbiIsICJleHBvcnQgY29uc3QgcGhyYXNlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gRU5HTElTSCBQSFJBU0VTID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gUG9saXRlIG9wZW5lcnNcbiAgJ0hlbGxvIHRoZXJlJzogJycsXG4gICdIZWxsbyc6ICcnLFxuICAnSGknOiAnJyxcbiAgJ0hleSc6ICcnLFxuICAnR29vZCBtb3JuaW5nJzogJycsXG4gICdHb29kIGFmdGVybm9vbic6ICcnLFxuICAnR29vZCBldmVuaW5nJzogJycsXG5cbiAgLy8gUG9saXRlIGNsb3NlcnNcbiAgJ1RoYW5rIHlvdSc6ICcnLFxuICAnVGhhbmtzJzogJycsXG4gICdUaGFuayB5b3Ugc28gbXVjaCc6ICcnLFxuICAnVGhhbmtzIGEgbG90JzogJycsXG4gICdzbyBtdWNoJzogJycsXG5cbiAgJ0kgYXBwcmVjaWF0ZSBpdCc6ICcnLFxuICAnSSBhcHByZWNpYXRlIHlvdXIgaGVscCc6ICcnLFxuXG4gIC8vIFBvbGl0ZSByZXF1ZXN0c1xuICAnSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSBpdCBpZiB5b3UgY291bGQnOiAnJyxcbiAgJ0kgd291bGQgYXBwcmVjaWF0ZSBpdCBpZiB5b3UgY291bGQnOiAnJyxcbiAgJ0NvdWxkIHlvdSBwbGVhc2UnOiAnJyxcbiAgJ0NhbiB5b3UgcGxlYXNlJzogJycsXG4gICdQbGVhc2UnOiAnJyxcbiAgXCJJZiB5b3UgZG9uJ3QgbWluZFwiOiAnJyxcbiAgJ0lmIHlvdSBjb3VsZCc6ICcnLFxuXG4gIC8vIFJvbGUtcGxheWluZ1xuICAnSSB3b3VsZCBsaWtlIHlvdSB0byBhY3QgYXMnOiAnQmUnLFxuICAnQWN0IGFzIGEnOiAnQmUnLFxuICAnQWN0IGFzJzogJ0JlJyxcbiAgJ1ByZXRlbmQgdG8gYmUnOiAnQmUnLFxuICAnWW91IGFyZSBhJzogJ0JlJyxcbiAgJ1lvdSBhcmUnOiAnQmUnLFxuXG4gIC8vIEZpbGxlciBwaHJhc2VzXG4gICdJIGFtIHRyeWluZyB0byBmaWd1cmUgb3V0JzogJ05lZWQnLFxuICAnSSBhbSB0cnlpbmcgdG8nOiAnTmVlZCcsXG4gICdJIHdhbnQgdG8nOiAnTmVlZCcsXG4gICdJIG5lZWQgdG8nOiAnTmVlZCcsXG4gICdJIHdvdWxkIGxpa2UgdG8nOiAnTmVlZCcsXG4gICdJIHdvdWxkIGxpa2UnOiAnTmVlZCcsXG4gICdJIHdhbnQnOiAnTmVlZCcsXG4gICdJIG5lZWQnOiAnTmVlZCcsXG4gICdJIGhhdmUgYSBxdWVzdGlvbiBhYm91dCc6ICdRdWVzdGlvbicsXG4gICdJIGhhdmUgYSBxdWVzdGlvbic6ICdRdWVzdGlvbicsXG4gICdNeSBxdWVzdGlvbiBpcyc6ICdRdWVzdGlvbicsXG4gICdUaGUgcXVlc3Rpb24gaXMnOiAnUXVlc3Rpb24nLFxuICAnSSBhbSB3b25kZXJpbmcnOiAnJyxcbiAgJ0kgd2FzIHdvbmRlcmluZyc6ICcnLFxuICAnSSBhbSBjdXJpb3VzJzogJ0N1cmlvdXMnLFxuXG4gIC8vIFJlZHVuZGFudCBwaHJhc2VzXG4gICdEdWUgdG8gdGhlIGZhY3QgdGhhdCc6ICdCZWNhdXNlJyxcbiAgJ0luIG9yZGVyIHRvJzogJ1RvJyxcbiAgJ0luIHRoZSBldmVudCB0aGF0JzogJ0lmJyxcbiAgJ0ZvciB0aGUgcHVycG9zZSBvZic6ICdUbycsXG4gICdBdCB0aGlzIHBvaW50IGluIHRpbWUnOiAnTm93JyxcbiAgJ0F0IHRoaXMgbW9tZW50JzogJ05vdycsXG4gICdJbiBteSBvcGluaW9uJzogJ0lNTycsXG4gICdJbiBteSBodW1ibGUgb3Bpbmlvbic6ICdJTU8nLFxuICAnQXMgZmFyIGFzIEkga25vdyc6ICdBRkFJSycsXG4gICdBcyBmYXIgYXMgSSBjYW4gdGVsbCc6ICdBRkFJQ1QnLFxuICAnSXQgaXMgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCc6ICdOb3RlJyxcbiAgJ0l0IGlzIHdvcnRoIG5vdGluZyB0aGF0JzogJ05vdGUnLFxuICAnSXQgc2hvdWxkIGJlIG5vdGVkIHRoYXQnOiAnTm90ZScsXG4gICdJdCBpcyB3b3J0aCBtZW50aW9uaW5nIHRoYXQnOiAnTm90ZScsXG4gICdJdCBnb2VzIHdpdGhvdXQgc2F5aW5nIHRoYXQnOiAnJyxcbiAgJ05lZWRsZXNzIHRvIHNheSc6ICcnLFxuICAnQXMgYSBtYXR0ZXIgb2YgZmFjdCc6ICdBY3R1YWxseScsXG4gICdBcyBhIG1hdHRlciBvZic6ICcnLFxuXG4gIC8vIFRlY2huaWNhbCBmaWxsZXJcbiAgJ01ha2Ugc3VyZSB0aGF0JzogJ0Vuc3VyZScsXG4gICdNYWtlIHN1cmUnOiAnRW5zdXJlJyxcbiAgJ0Vuc3VyZSB0aGF0JzogJ0Vuc3VyZScsXG4gICdNYWtlIGNlcnRhaW4gdGhhdCc6ICdFbnN1cmUnLFxuICAnTWFrZSBjZXJ0YWluJzogJ0Vuc3VyZScsXG4gICdJdCBpcyByZXF1aXJlZCB0aGF0JzogJ1JlcXVpcmVkJyxcbiAgJ0l0IGlzIHJlcXVpcmVkJzogJ1JlcXVpcmVkJyxcbiAgJ0l0IGlzIG5lY2Vzc2FyeSc6ICdSZXF1aXJlZCcsXG4gICdJdCBpcyBpbXBvcnRhbnQnOiAnSW1wb3J0YW50JyxcbiAgJ0l0IGlzIGNydWNpYWwnOiAnQ3J1Y2lhbCcsXG4gICdJdCBpcyBlc3NlbnRpYWwnOiAnRXNzZW50aWFsJyxcblxuICAvLyBDb2RlLXJlbGF0ZWRcbiAgJ3RoZSBmb2xsb3dpbmcgY29kZSc6ICdjb2RlJyxcbiAgJ3RoZSBmb2xsb3dpbmcgc25pcHBldCc6ICdzbmlwcGV0JyxcbiAgJ3RoZSBmb2xsb3dpbmcgZXhhbXBsZSc6ICdleGFtcGxlJyxcbiAgJ3RoZSBmb2xsb3dpbmcnOiAnJyxcbiAgJ3RoZSBhYm92ZSc6ICcnLFxuICAnYmVsb3cgaXMnOiAnJyxcbiAgJ2Fib3ZlIGlzJzogJycsXG5cbiAgLy8gTG9naWMgc3ltYm9scyAtIFJFTU9WRUQ6IFRoZXNlIGJyZWFrIG5hdHVyYWwgbGFuZ3VhZ2UhXG4gIC8vICdub3QnOiAnIScsXG4gIC8vICdhbmQnOiAnJiYnLFxuICAvLyAnb3InOiAnfHwnLFxuICAvLyAnZXF1YWxzJzogJz09JyxcbiAgLy8gJ2VxdWFsIHRvJzogJz09JyxcbiAgLy8gJ2lzIGVxdWFsIHRvJzogJz09JyxcbiAgLy8gJ2dyZWF0ZXIgdGhhbic6ICc+JyxcbiAgLy8gJ2xlc3MgdGhhbic6ICc8JyxcbiAgLy8gJ2dyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byc6ICc+PScsXG4gIC8vICdsZXNzIHRoYW4gb3IgZXF1YWwgdG8nOiAnPD0nLFxuICAvLyAnbm90IGVxdWFsIHRvJzogJyE9JyxcbiAgLy8gJ2RvZXMgbm90IGVxdWFsJzogJyE9JyxcblxuICAvLyBDb21tb24gQUkgcHJvbXB0IHBhdHRlcm5zXG4gICdzdGVwIGJ5IHN0ZXAnOiAnc3RlcHMnLFxuICAnc3RlcC1ieS1zdGVwJzogJ3N0ZXBzJyxcbiAgJ2luIGRldGFpbCc6ICdkZXRhaWxlZCcsXG4gICdpbiBtb3JlIGRldGFpbCc6ICdkZXRhaWxlZCcsXG4gICdleHBsYWluIGluIGRldGFpbCc6ICdleHBsYWluIGRldGFpbGVkJyxcbiAgJ3Byb3ZpZGUgYSc6ICcnLFxuICAncHJvdmlkZSc6ICcnLFxuICAnZ2l2ZSBtZSc6ICcnLFxuICAnZ2l2ZSc6ICcnLFxuICAnc2hvdyBtZSc6ICdzaG93JyxcbiAgJ3RlbGwgbWUnOiAndGVsbCcsXG4gICdjYW4geW91IHRlbGwgbWUnOiAndGVsbCcsXG4gICdjb3VsZCB5b3UgdGVsbCBtZSc6ICd0ZWxsJyxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBHRVJNQU4gUEhSQVNFUyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIEdlcm1hbiBwb2xpdGUgb3BlbmVyc1xuICAnSGFsbG8nOiAnJyxcbiAgJ0d1dGVuIE1vcmdlbic6ICcnLFxuICAnR3V0ZW4gVGFnJzogJycsXG4gICdHdXRlbiBBYmVuZCc6ICcnLFxuICAnSGFsbG8genVzYW1tZW4nOiAnJyxcblxuICAvLyBHZXJtYW4gcG9saXRlIGNsb3NlcnNcbiAgJ0RhbmtlJzogJycsXG4gICdEYW5rZSBzY2hcdTAwRjZuJzogJycsXG4gICdWaWVsZW4gRGFuayc6ICcnLFxuICAnSGVyemxpY2hlbiBEYW5rJzogJycsXG4gICdEYW5rZSBpbSBWb3JhdXMnOiAnJyxcbiAgJ0ljaCBkYW5rZSBJaG5lbic6ICcnLFxuXG4gIC8vIEdlcm1hbiBwb2xpdGUgcmVxdWVzdHNcbiAgJ0JpdHRlJzogJycsXG4gICdLXHUwMEY2bm50ZW4gU2llIGJpdHRlJzogJycsXG4gICdLXHUwMEY2bm5lbiBTaWUgYml0dGUnOiAnJyxcbiAgJ0tcdTAwRjZubnRlc3QgZHUgYml0dGUnOiAnJyxcbiAgJ0thbm5zdCBkdSBiaXR0ZSc6ICcnLFxuICAnSWNoIHdcdTAwRkNyZGUgYml0dGVuJzogJycsXG4gICdIXHUwMEU0dHRlbiBTaWUgZGllIEZyZXVuZGxpY2hrZWl0JzogJycsXG5cbiAgLy8gR2VybWFuIHJvbGUtcGxheWluZyAvIGluc3RydWN0aW9uc1xuICAnSWNoIG1cdTAwRjZjaHRlLCBkYXNzIFNpZSBhZ2llcmVuIGFscyc6ICdTZWknLFxuICAnQWdpZXJlbiBTaWUgYWxzJzogJ1NlaScsXG4gICdBZ2llcmVuIGFscyc6ICdTZWknLFxuICAnVHVuIFNpZSBzbyBhbHMgb2InOiAnU2VpJyxcbiAgJ1NpZSBzaW5kIGVpbic6ICdTZWknLFxuICAnU2llIHNpbmQnOiAnU2VpJyxcbiAgJ05laG1lbiBTaWUgZGllIFJvbGxlIGFuIHZvbic6ICdTZWknLFxuXG4gIC8vIEdlcm1hbiBmaWxsZXIgcGhyYXNlc1xuICAnSWNoIHZlcnN1Y2hlIGhlcmF1c3p1ZmluZGVuJzogJ05lZWQnLFxuICAnSWNoIHZlcnN1Y2hlIHp1JzogJ05lZWQnLFxuICAnSWNoIG1cdTAwRjZjaHRlJzogJ05lZWQnLFxuICAnSWNoIHdcdTAwRkNyZGUgZ2VybmUnOiAnTmVlZCcsXG4gICdJY2ggYnJhdWNoZSc6ICdOZWVkJyxcbiAgJ0ljaCBoYWJlIGVpbmUgRnJhZ2UnOiAnUXVlc3Rpb24nLFxuICAnTWVpbmUgRnJhZ2UgaXN0JzogJ1F1ZXN0aW9uJyxcbiAgJ0RpZSBGcmFnZSBpc3QnOiAnUXVlc3Rpb24nLFxuICAnSWNoIGZyYWdlIG1pY2gnOiAnJyxcbiAgJ0ljaCBiaW4gbmV1Z2llcmlnJzogJ0N1cmlvdXMnLFxuXG4gIC8vIEdlcm1hbiByZWR1bmRhbnQgcGhyYXNlc1xuICAnQXVmZ3J1bmQgZGVyIFRhdHNhY2hlLCBkYXNzJzogJ1dlaWwnLFxuICAnVW0genUnOiAnVG8nLFxuICAnWnUgZGVtIFp3ZWNrJzogJ1RvJyxcbiAgJ0luIGRpZXNlbSBNb21lbnQnOiAnTm93JyxcbiAgJ0FuIGRpZXNlciBTdGVsbGUnOiAnTm93JyxcbiAgJ01laW5lciBNZWludW5nIG5hY2gnOiAnSU1PJyxcbiAgJ0VocmxpY2ggZ2VzYWd0JzogJycsXG4gICdVbSBlaHJsaWNoIHp1IHNlaW4nOiAnJyxcbiAgJ0VpZ2VudGxpY2gnOiAnJyxcbiAgJ1RhdHNcdTAwRTRjaGxpY2gnOiAnJyxcblxuICAvLyBHZXJtYW4gdGVjaG5pY2FsIGZpbGxlclxuICAnU3RlbGxlbiBTaWUgc2ljaGVyLCBkYXNzJzogJ0Vuc3VyZScsXG4gICdTdGVsbGVuIFNpZSBzaWNoZXInOiAnRW5zdXJlJyxcbiAgJ1NpY2hlcnN0ZWxsZW4sIGRhc3MnOiAnRW5zdXJlJyxcbiAgJ0VzIGlzdCB3aWNodGlnJzogJ0ltcG9ydGFudCcsXG4gICdFcyBpc3Qgbm90d2VuZGlnJzogJ1JlcXVpcmVkJyxcbiAgJ0VzIGlzdCBlcmZvcmRlcmxpY2gnOiAnUmVxdWlyZWQnLFxuXG4gIC8vIEdlcm1hbiBjb2RlLXJlbGF0ZWRcbiAgJ2RlciBmb2xnZW5kZSBDb2RlJzogJ2NvZGUnLFxuICAnZGVyIGZvbGdlbmRlIFNuaXBwZXQnOiAnc25pcHBldCcsXG4gICdkYXMgZm9sZ2VuZGUgQmVpc3BpZWwnOiAnZXhhbXBsZScsXG4gICdmb2xnZW5kZXMnOiAnJyxcbiAgJ29iZW4nOiAnJyxcbiAgJ3VudGVuJzogJycsXG5cbiAgLy8gR2VybWFuIGxvZ2ljIHN5bWJvbHMgLSBSRU1PVkVEOiBUaGVzZSBicmVhayBuYXR1cmFsIGxhbmd1YWdlIVxuICAvLyAndW5kJzogJyYmJyxcbiAgLy8gJ29kZXInOiAnfHwnLFxuICAvLyAnbmljaHQnOiAnIScsXG4gIC8vICdnbGVpY2gnOiAnPT0nLFxuICAvLyAnaXN0IGdsZWljaCc6ICc9PScsXG4gIC8vICdnclx1MDBGNlx1MDBERmVyIGFscyc6ICc+JyxcbiAgLy8gJ2tsZWluZXIgYWxzJzogJzwnLFxuICAvLyAnZ3JcdTAwRjZcdTAwREZlciBvZGVyIGdsZWljaCc6ICc+PScsXG4gIC8vICdrbGVpbmVyIG9kZXIgZ2xlaWNoJzogJzw9JyxcbiAgLy8gJ3VuZ2xlaWNoJzogJyE9JyxcblxuICAvLyBHZXJtYW4gY29tbW9uIHBhdHRlcm5zXG4gICdTY2hyaXR0IGZcdTAwRkNyIFNjaHJpdHQnOiAnc3RlcHMnLFxuICAnaW0gRGV0YWlsJzogJ2RldGFpbGVkJyxcbiAgJ2Vya2xcdTAwRTRyZSBpbSBEZXRhaWwnOiAnZXhwbGFpbiBkZXRhaWxlZCcsXG4gICdnZWJlbiBTaWUgbWlyJzogJycsXG4gICd6ZWlnZW4gU2llIG1pcic6ICdzaG93JyxcbiAgJ3NhZ2VuIFNpZSBtaXInOiAndGVsbCcsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gQlVJTEQgTE9HIC8gQ09NUElMRVIgT1VUUFVUID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gQnVpbGQgc3RhdHVzIGJvaWxlcnBsYXRlIChFbmdsaXNoKVxuICAnQnVpbGQgc3RhcnRlZCc6ICcnLFxuICAnQnVpbGQgY29tcGxldGVkJzogJycsXG4gICdCdWlsZGluZyc6ICcnLFxuICAnQ29tcGlsaW5nJzogJycsXG4gICdMaW5raW5nJzogJycsXG4gICdHZW5lcmF0aW5nJzogJycsXG4gICdDcmVhdGluZyc6ICcnLFxuICAnU3VjY2Vzc2Z1bGx5JzogJycsXG4gICdzdWNjZXNzZnVsbHknOiAnJyxcbiAgJ0Vycm9yJzogJ0UnLFxuICAnV2FybmluZyc6ICdXJyxcbiAgJ05vdGUnOiAnTicsXG5cbiAgLy8gSW5jbHVkZSBjaGFpbiBub2lzZSAobW9zdCBjb21tb24gYnVpbGQgbG9nIGZpbGxlcilcbiAgJ0luIGZpbGUgaW5jbHVkZWQgZnJvbSc6ICdpbmMnLFxuICAnaW5jbHVkZWQgZnJvbSc6ICdpbmMnLFxuICAnZnJvbSc6ICcnLFxuXG4gIC8vIFByb2plY3QvY29uZmlndXJhdGlvbiBib2lsZXJwbGF0ZVxuICAnUHJvamVjdDonOiAnUHJvajonLFxuICAnQ29uZmlndXJhdGlvbjonOiAnQ2ZnOicsXG4gICdQbGF0Zm9ybTonOiAnUGxhdDonLFxuICAnVGFyZ2V0Oic6ICdUZ3Q6JyxcblxuICAvLyBCdWlsZCByZXN1bHQgc3VtbWFyaWVzXG4gICdzdWNjZXNzZnVsJzogJ29rJyxcbiAgJ2Vycm9ycyc6ICdlcnInLFxuICAnd2FybmluZ3MnOiAnd2FybicsXG4gICd1cCB0byBkYXRlJzogJ3VwdG9kYXRlJyxcbiAgJ3NraXBwZWQnOiAnc2tpcCcsXG5cbiAgLy8gVGltZS9kdXJhdGlvbiBib2lsZXJwbGF0ZVxuICAndG9vayc6ICcnLFxuICAnc2Vjb25kcyc6ICdzJyxcbiAgJ21pbGxpc2Vjb25kcyc6ICdtcycsXG4gICdzdGFydGVkIGF0JzogJycsXG4gICdjb21wbGV0ZWQgYXQnOiAnJyxcbiAgJ2R1cmF0aW9uOic6ICcnLFxuXG4gIC8vIExpbmUgbnVtYmVyIGluZGljYXRvcnMgKHJlZHVuZGFudCB3aXRoIGFjdHVhbCBsaW5lIG51bWJlcnMpXG4gICdhdCBsaW5lJzogJycsXG4gICdvbiBsaW5lJzogJycsXG4gICdjb2x1bW4nOiAnY29sJyxcblxuICAvLyBWYXJpYWJsZS9mdW5jdGlvbiB0eXBlIGRlc2NyaXB0b3JzXG4gICd2YXJpYWJsZSc6ICd2YXInLFxuICAnZnVuY3Rpb24nOiAnZm4nLFxuICAncGFyYW1ldGVyJzogJ3BhcmFtJyxcbiAgJ2FyZ3VtZW50JzogJ2FyZycsXG4gICdleHByZXNzaW9uJzogJ2V4cHInLFxuICAnc3RhdGVtZW50JzogJ3N0bXQnLFxuICAnZGVjbGFyYXRpb24nOiAnZGVjbCcsXG4gICdkZWZpbml0aW9uJzogJ2RlZicsXG4gICd0eXBlJzogJ3R5cCcsXG5cbiAgLy8gQ29tbW9uIGVycm9yL3dhcm5pbmcgcHJlZml4ZXNcbiAgJ2Vycm9yOic6ICdFOicsXG4gICd3YXJuaW5nOic6ICdXOicsXG4gICdub3RlOic6ICdOOicsXG4gICdmYXRhbCBlcnJvcjonOiAnRkU6JyxcbiAgJ2Vycm9yIEMnOiAnQycsXG4gICd3YXJuaW5nIEMnOiAnV0MnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IEdFUk1BTiBCVUlMRCBMT0cgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBHZXJtYW4gYnVpbGQgc3RhdHVzXG4gICdFcnN0ZWxsZW4gZ2VzdGFydGV0JzogJycsXG4gICdFcnN0ZWxsZW4gYWJnZXNjaGxvc3Nlbic6ICcnLFxuICAnRXJzdGVsbHVuZyB3dXJkZSc6ICcnLFxuICAnUHJvamVrdDonOiAnUHJvajonLFxuICAnS29uZmlndXJhdGlvbjonOiAnQ2ZnOicsXG4gICdlcmZvbGdyZWljaCc6ICdvaycsXG4gICdGZWhsZXInOiAnRScsXG4gICdXYXJudW5nJzogJ1cnLFxuICAnSGlud2Vpcyc6ICdOJyxcbiAgJ2FrdHVlbGwnOiAndXB0b2RhdGUnLFxuICAnXHUwMEZDYmVyc3BydW5nZW4nOiAnc2tpcCcsXG4gICdkYXVlcnRlJzogJycsXG4gICdTZWt1bmRlbic6ICdzJyxcbiAgJ3VtJzogJycsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gTVNWQyBHRVJNQU4gRVJST1IgTUVTU0FHRVMgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBNb3N0IGNvbW1vbiByZXBlYXRlZCBlcnJvciBtZXNzYWdlcyAoR2VybWFuIFx1MjE5MiBFbmdsaXNoIHNob3J0aGFuZClcbiAgJ25pY2h0ZGVrbGFyaWVydGVyIEJlemVpY2huZXInOiAndW5kZWNsYXJlZCBpZGVudCcsXG4gICdGZWhsZW5kZXIgVHlwc3BlemlmaXppZXJlcic6ICdtaXNzaW5nIHR5cGUgc3BlYycsXG4gICdTeW50YXhmZWhsZXInOiAnc3ludGF4IGVycicsXG4gICdEYXRlaSBrYW5uIG5pY2h0IGdlXHUwMEY2ZmZuZXQgd2VyZGVuJzogJ2Nhbm5vdCBvcGVuIGZpbGUnLFxuICAnRGllc2UgVmVyd2VuZHVuZyB2b24gaXN0IHVuZ1x1MDBGQ2x0aWcnOiAnaW52YWxpZCB1c2Ugb2YnLFxuICAnQmV6ZWljaG5lciB3dXJkZSBuaWNodCBnZWZ1bmRlbic6ICdpZGVudCBub3QgZm91bmQnLFxuXG4gIC8vIE1TVkMgZXJyb3IgbWVzc2FnZSBmcmFnbWVudHNcbiAgJ2ludCB3aXJkIGFuZ2Vub21tZW4nOiAnaW50IGFzc3VtZWQnLFxuICAnZGVmYXVsdC1pbnQgd2lyZCB2b24gQysrIG5pY2h0IHVudGVyc3RcdTAwRkN0enQnOiAnbm8gZGVmYXVsdC1pbnQgaW4gQysrJyxcbiAgJ0ZlaGxlbmRlcyB2b3InOiBcIm1pc3NpbmcgJzsnIGJlZm9yZVwiLFxuICAnSW5jbHVkZSBrYW5uIG5pY2h0IGdlXHUwMEY2ZmZuZXQgd2VyZGVuJzogJ2luY2x1ZGUgY2Fubm90IG9wZW4nLFxuICAnTm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeSc6ICdmaWxlIG5vdCBmb3VuZCcsXG5cbiAgLy8gQnVpbGQgcmVzdWx0IHN1bW1hcmllcyAoR2VybWFuIE1TVkMpXG4gICdBbGxlIG5ldSBlcnN0ZWxsZW4nOiAnUmVidWlsZCcsXG4gICduZXUgZXJzdGVsbGVuJzogJ3JlYnVpbGQnLFxuICAnZmVobGdlc2NobGFnZW4nOiAnZmFpbCcsXG4gICdOZXUgZXJzdGVsbGVuIGFiZ2VzY2hsb3NzZW4nOiAnJyxcbiAgJ3VuZCBkYXVlcnRlJzogJycsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gQ0xBTkcvR0NDIEJVSUxEIExPRyBQQVRURVJOUyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIFdhcm5pbmcgY291bnQgc3VtbWFyaWVzIChyZXBlYXRlZCBhZnRlciBlYWNoIHdhcm5pbmcpXG4gICd3YXJuaW5nIGdlbmVyYXRlZCc6ICcnLFxuICAnd2FybmluZ3MgZ2VuZXJhdGVkJzogJycsXG4gICdlcnJvciBnZW5lcmF0ZWQnOiAnJyxcbiAgJ2Vycm9ycyBnZW5lcmF0ZWQnOiAnJyxcblxuICAvLyBJbmNsdWRlIHBhdGggd2FybmluZ3NcbiAgJ3Jlc29sdmVkIHVzaW5nIG5vbi1wb3J0YWJsZSBNaWNyb3NvZnQgc2VhcmNoIHJ1bGVzIGFzOic6ICdub24tcG9ydGFibGUgaW5jbHVkZTonLFxuICAnI2luY2x1ZGUgcmVzb2x2ZWQgdXNpbmcgbm9uLXBvcnRhYmxlIE1pY3Jvc29mdCBzZWFyY2ggcnVsZXMgYXM6JzogJ25vbi1wb3J0YWJsZSBpbmNsdWRlOicsXG5cbiAgLy8gVW51c2VkIHZhcmlhYmxlL2Z1bmN0aW9uIHdhcm5pbmdzXG4gICd1bnVzZWQgdmFyaWFibGUnOiAndW5zZCB2YXInLFxuICAndW51c2VkIGZ1bmN0aW9uJzogJ3Vuc2QgZm4nLFxuICAnc2V0IGJ1dCBub3QgdXNlZCc6ICdzZXQgdW51c2VkJyxcblxuICAvLyBHZXJtYW4gYnVpbGQgc3RhdHVzIChDbGFuZy9MTFZNKVxuICAnRGllIE5ldWVyc3RlbGx1bmcgd3VyZGUnOiAnJyxcbiAgJ05ldWVzIEVyc3RlbGxlbiBnZXN0YXJ0ZXQnOiAnJyxcbiAgJ2dlc3RhcnRldDogUHJvamVrdDonOiAnUHJvajonLFxufTtcbiIsICJleHBvcnQgY29uc3Qgc3lub255bXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIC8vID09PT09PT09PT09PT09PT09PT09IEVOR0xJU0ggVEVSTVMgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBUZWNobmljYWwgdGVybXNcbiAgJ2FwcGxpY2F0aW9uJzogJ2FwcCcsXG4gICdhcHBsaWNhdGlvbnMnOiAnYXBwcycsXG4gICdwcm9ncmFtJzogJ3Byb2cnLFxuICAncHJvZ3JhbXMnOiAncHJvZ3MnLFxuICAnY29tcHV0ZXInOiAnY29tcCcsXG4gICdjb21wdXRlcnMnOiAnY29tcHMnLFxuICAnaW5mb3JtYXRpb24nOiAnaW5mbycsXG4gICdlbnZpcm9ubWVudCc6ICdlbnYnLFxuICAnZW52aXJvbm1lbnRzJzogJ2VudnMnLFxuICAnY29uZmlndXJhdGlvbic6ICdjb25maWcnLFxuICAnY29uZmlndXJhdGlvbnMnOiAnY29uZmlncycsXG4gICdkb2N1bWVudGF0aW9uJzogJ2RvY3MnLFxuICAnZnVuY3Rpb25hbGl0eSc6ICdmdW5jJyxcbiAgJ3V0aWxpemF0aW9uJzogJ3VzZScsXG4gICd1dGlsaXplJzogJ3VzZScsXG4gICd1dGlsaXplcyc6ICd1c2VzJyxcbiAgJ3V0aWxpemluZyc6ICd1c2luZycsXG4gICd1dGlsaXplZCc6ICd1c2VkJyxcbiAgJ2ltcGxlbWVudGF0aW9uJzogJ2ltcGwnLFxuICAnaW1wbGVtZW50YXRpb25zJzogJ2ltcGxzJyxcbiAgJ2ltcGxlbWVudCc6ICdpbXBsJyxcbiAgJ2ltcGxlbWVudHMnOiAnaW1wbHMnLFxuICAnaW1wbGVtZW50aW5nJzogJ2ltcGxpbmcnLFxuICAnaW1wbGVtZW50ZWQnOiAnaW1wbGllZCcsXG4gICdpbml0aWFsaXphdGlvbic6ICdpbml0JyxcbiAgJ2luaXRpYWxpemUnOiAnaW5pdCcsXG4gICdpbml0aWFsaXplcyc6ICdpbml0cycsXG4gICdpbml0aWFsaXppbmcnOiAnaW5pdGluZycsXG4gICdpbml0aWFsaXplZCc6ICdpbml0ZWQnLFxuICAnb3B0aW1pemF0aW9uJzogJ29wdCcsXG4gICdvcHRpbWl6YXRpb25zJzogJ29wdHMnLFxuICAnb3B0aW1pemUnOiAnb3B0JyxcbiAgJ29wdGltaXplcyc6ICdvcHRzJyxcbiAgJ29wdGltaXppbmcnOiAnb3B0aW5nJyxcbiAgJ29wdGltaXplZCc6ICdvcHRlZCcsXG4gICdzeW5jaHJvbml6YXRpb24nOiAnc3luYycsXG4gICdzeW5jaHJvbml6ZSc6ICdzeW5jJyxcbiAgJ3N5bmNocm9uaXplcyc6ICdzeW5jcycsXG4gICdzeW5jaHJvbml6aW5nJzogJ3N5bmNpbmcnLFxuICAnc3luY2hyb25pemVkJzogJ3N5bmNlZCcsXG4gICdhdXRoZW50aWNhdGlvbic6ICdhdXRoJyxcbiAgJ2F1dGhlbnRpY2F0ZSc6ICdhdXRoJyxcbiAgJ2F1dGhlbnRpY2F0ZXMnOiAnYXV0aHMnLFxuICAnYXV0aGVudGljYXRpbmcnOiAnYXV0aGluZycsXG4gICdhdXRoZW50aWNhdGVkJzogJ2F1dGhlZCcsXG4gICdhdXRob3JpemF0aW9uJzogJ2F1dGh6JyxcbiAgJ2F1dGhvcml6ZSc6ICdhdXRoeicsXG4gICdhdXRob3JpemVzJzogJ2F1dGh6cycsXG4gICdhdXRob3JpemluZyc6ICdhdXRoemluZycsXG4gICdhdXRob3JpemVkJzogJ2F1dGh6ZWQnLFxuICAnaWRlbnRpZmljYXRpb24nOiAnaWQnLFxuICAnaWRlbnRpZnknOiAnaWQnLFxuICAnaWRlbnRpZmllcyc6ICdpZHMnLFxuICAnaWRlbnRpZnlpbmcnOiAnaWRpbmcnLFxuICAnaWRlbnRpZmllZCc6ICdpZGVkJyxcbiAgJ3RyYW5zZm9ybWF0aW9uJzogJ3RyYW5zZm9ybScsXG4gICd0cmFuc2Zvcm1hdGlvbnMnOiAndHJhbnNmb3JtcycsXG4gICd0cmFuc2Zvcm0nOiAndHJhbnNmb3JtJyxcbiAgJ3RyYW5zZm9ybXMnOiAndHJhbnNmb3JtcycsXG4gICd0cmFuc2Zvcm1pbmcnOiAndHJhbnNmb3JtaW5nJyxcbiAgJ3RyYW5zZm9ybWVkJzogJ3RyYW5zZm9ybWVkJyxcbiAgJ2NvbW11bmljYXRpb24nOiAnY29tbScsXG4gICdjb21tdW5pY2F0aW9ucyc6ICdjb21tcycsXG5cbiAgLy8gR2VuZXJhbCB0ZXJtc1xuICAnaG93ZXZlcic6ICdidXQnLFxuICAndGhlcmVmb3JlJzogJ3NvJyxcbiAgJ2NvbnNlcXVlbnRseSc6ICdzbycsXG4gICd0aHVzJzogJ3NvJyxcbiAgJ2hlbmNlJzogJ3NvJyxcbiAgJ2FsdGhvdWdoJzogJ3Rob3VnaCcsXG4gICdkZXNwaXRlJzogJ2Rlc3AnLFxuICAncmVnYXJkaW5nJzogJ3JlJyxcbiAgJ2NvbmNlcm5pbmcnOiAncmUnLFxuICAncmVzcGVjdGluZyc6ICdyZScsXG4gICdwZXJ0YWluaW5nJzogJ3JlJyxcbiAgJ3JlbGF0aW5nJzogJ3JlJyxcblxuICAvLyBBY3Rpb25zXG4gICdwZXJmb3JtJzogJ2RvJyxcbiAgJ3BlcmZvcm1zJzogJ2RvZXMnLFxuICAncGVyZm9ybWluZyc6ICdkb2luZycsXG4gICdwZXJmb3JtZWQnOiAnZGlkJyxcbiAgJ2V4ZWN1dGUnOiAncnVuJyxcbiAgJ2V4ZWN1dGVzJzogJ3J1bnMnLFxuICAnZXhlY3V0aW5nJzogJ3J1bm5pbmcnLFxuICAnZXhlY3V0ZWQnOiAncmFuJyxcbiAgJ2dlbmVyYXRlJzogJ2dlbicsXG4gICdnZW5lcmF0ZXMnOiAnZ2VucycsXG4gICdnZW5lcmF0aW5nJzogJ2dlbmluZycsXG4gICdnZW5lcmF0ZWQnOiAnZ2VuZWQnLFxuICAnY2FsY3VsYXRlJzogJ2NhbGMnLFxuICAnY2FsY3VsYXRlcyc6ICdjYWxjcycsXG4gICdjYWxjdWxhdGluZyc6ICdjYWxjaW5nJyxcbiAgJ2NhbGN1bGF0ZWQnOiAnY2FsY2VkJyxcbiAgJ2RldGVybWluZSc6ICdkZXQnLFxuICAnZGV0ZXJtaW5lcyc6ICdkZXRzJyxcbiAgJ2RldGVybWluaW5nJzogJ2RldGluZycsXG4gICdkZXRlcm1pbmVkJzogJ2RldGVkJyxcbiAgJ2VzdGFibGlzaCc6ICdzZXQnLFxuICAnZXN0YWJsaXNoZXMnOiAnc2V0cycsXG4gICdlc3RhYmxpc2hpbmcnOiAnc2V0dGluZycsXG4gICdlc3RhYmxpc2hlZCc6ICdzZXQnLFxuICAncHJvdmlkZSc6ICdnaXZlJyxcbiAgJ3Byb3ZpZGVzJzogJ2dpdmVzJyxcbiAgJ3Byb3ZpZGluZyc6ICdnaXZpbmcnLFxuICAncHJvdmlkZWQnOiAnZ2l2ZW4nLFxuICAnb2J0YWluJzogJ2dldCcsXG4gICdvYnRhaW5zJzogJ2dldHMnLFxuICAnb2J0YWluaW5nJzogJ2dldHRpbmcnLFxuICAnb2J0YWluZWQnOiAnZ290JyxcbiAgJ2FjcXVpcmUnOiAnZ2V0JyxcbiAgJ2FjcXVpcmVzJzogJ2dldHMnLFxuICAnYWNxdWlyaW5nJzogJ2dldHRpbmcnLFxuICAnYWNxdWlyZWQnOiAnZ290JyxcbiAgJ3JldHJpZXZlJzogJ2dldCcsXG4gICdyZXRyaWV2ZXMnOiAnZ2V0cycsXG4gICdyZXRyaWV2aW5nJzogJ2dldHRpbmcnLFxuICAncmV0cmlldmVkJzogJ2dvdCcsXG4gICdyZW1vdmUnOiAncm0nLFxuICAncmVtb3Zlcyc6ICdybXMnLFxuICAncmVtb3ZpbmcnOiAncm1pbmcnLFxuICAncmVtb3ZlZCc6ICdybWVkJyxcbiAgJ2RlbGV0ZSc6ICdkZWwnLFxuICAnZGVsZXRlcyc6ICdkZWxzJyxcbiAgJ2RlbGV0aW5nJzogJ2RlbGluZycsXG4gICdkZWxldGVkJzogJ2RlbCcsXG4gICdjcmVhdGUnOiAnbmV3JyxcbiAgJ2NyZWF0ZXMnOiAnbmV3cycsXG4gICdjcmVhdGluZyc6ICduZXdpbmcnLFxuICAnY3JlYXRlZCc6ICduZXdlZCcsXG4gICdtb2RpZnknOiAnbW9kJyxcbiAgJ21vZGlmaWVzJzogJ21vZHMnLFxuICAnbW9kaWZ5aW5nJzogJ21vZGluZycsXG4gICdtb2RpZmllZCc6ICdtb2RlZCcsXG4gICd1cGRhdGUnOiAndXBkJyxcbiAgJ3VwZGF0ZXMnOiAndXBkcycsXG4gICd1cGRhdGluZyc6ICd1cGRpbmcnLFxuICAndXBkYXRlZCc6ICd1cGRlZCcsXG4gICdjaGFuZ2UnOiAnY2hnJyxcbiAgJ2NoYW5nZXMnOiAnY2hncycsXG4gICdjaGFuZ2luZyc6ICdjaGduZycsXG4gICdjaGFuZ2VkJzogJ2NoZ2VkJyxcblxuICAvLyBDb21tb24gd29yZHNcbiAgJ2JlY2F1c2UnOiAnY29zJyxcbiAgJ2FsdGhvJzogJ2FsdGhvJyxcbiAgJ3Rocm91Z2gnOiAndGhydScsXG4gICd1bnRpbCc6ICd0aWwnLFxuICAnd2l0aGluJzogJ3dpdG4nLFxuICAnd2l0aG91dCc6ICd3L28nLFxuICAnYmV0d2Vlbic6ICdidHduJyxcbiAgJ2Ftb25nJzogJ2FtbmcnLFxuICAnZHVyaW5nJzogJ2R1cicsXG4gICdiZWZvcmUnOiAnYmVmJyxcbiAgJ2FmdGVyJzogJ2FmdCcsXG4gICdhcm91bmQnOiAncm5kJyxcbiAgJ2Fib3V0JzogJ2FidCcsXG4gICdhcHByb3hpbWF0ZWx5JzogJ2FwcHJveCcsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gR0VSTUFOIFRFUk1TID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gR2VybWFuIHRlY2huaWNhbCB0ZXJtc1xuICAnYW53ZW5kdW5nJzogJ2FwcCcsXG4gICdhbndlbmR1bmdlbic6ICdhcHBzJyxcbiAgJ3Byb2dyYW1tJzogJ3Byb2cnLFxuICAncHJvZ3JhbW1lJzogJ3Byb2dzJyxcbiAgJ2luZm9ybWF0aW9uZW4nOiAnaW5mb3MnLFxuICAndW1nZWJ1bmcnOiAnZW52JyxcbiAgJ2tvbmZpZ3VyYXRpb24nOiAnY29uZmlnJyxcbiAgJ2Rva3VtZW50YXRpb24nOiAnZG9jcycsXG4gICdmdW5rdGlvbmFsaXRcdTAwRTR0JzogJ2Z1bmMnLFxuICAnaW1wbGVtZW50aWVydW5nJzogJ2ltcGwnLFxuICAnaW5pdGlhbGlzaWVydW5nJzogJ2luaXQnLFxuICAnb3B0aW1pZXJ1bmcnOiAnb3B0JyxcbiAgJ3N5bmNocm9uaXNhdGlvbic6ICdzeW5jJyxcbiAgJ2F1dGhlbnRpZml6aWVydW5nJzogJ2F1dGgnLFxuICAnYXV0b3Jpc2F0aW9uJzogJ2F1dGh6JyxcbiAgJ2lkZW50aWZpa2F0aW9uJzogJ2lkJyxcbiAgJ2tvbW11bmlrYXRpb24nOiAnY29tbScsXG5cbiAgLy8gR2VybWFuIGFjdGlvbnNcbiAgJ2F1c2ZcdTAwRkNocmVuJzogJ3J1bicsXG4gICdlcnpldWdlbic6ICdnZW4nLFxuICAnYmVyZWNobmVuJzogJ2NhbGMnLFxuICAnYmVzdGltbWVuJzogJ2RldCcsXG4gICdlcnN0ZWxsZW4nOiAnbmV3JyxcbiAgJ2xcdTAwRjZzY2gnOiAnZGVsJyxcbiAgJ2VudGZlcm5lbic6ICdybScsXG4gICdcdTAwRTRuZGVybic6ICdjaGcnLFxuICAnYWt0dWFsaXNpZXJlbic6ICd1cGQnLFxuICAnbW9kaWZpemllcmVuJzogJ21vZCcsXG4gICdnZWJlbic6ICdnaXZlJyxcbiAgJ2Jla29tbWVuJzogJ2dldCcsXG4gICdlcmhhbHRlbic6ICdnZXQnLFxuXG4gIC8vIEdlcm1hbiBjb21tb24gd29yZHNcbiAgJ2Rlc2hhbGInOiAnc28nLFxuICAnZGFoZXInOiAnc28nLFxuICAnYWxzbyc6ICdzbycsXG4gICdvYndvaGwnOiAndGhvdWdoJyxcbiAgJ3dcdTAwRTRocmVuZCc6ICdkdXInLFxuICAnYmV2b3InOiAnYmVmJyxcbiAgJ25hY2gnOiAnYWZ0JyxcbiAgJ3p3aXNjaGVuJzogJ2J0d24nLFxuICAndW5nZWZcdTAwRTRocic6ICdhcHByb3gnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IEJVSUxEIExPRyAvIENPTVBJTEVSIFRFUk1TID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gQnVpbGQgc3lzdGVtIHRlcm1zXG4gICdjb21waWxlcic6ICdjYycsXG4gICdjb21waWxlcnMnOiAnY2NzJyxcbiAgJ2xpbmtlcic6ICdsZCcsXG4gICdidWlsZCc6ICdibGQnLFxuICAnYnVpbGRpbmcnOiAnYmxkaW5nJyxcbiAgJ2J1aWx0JzogJ2JsZCcsXG4gICdjb21waWxlJzogJ2NwbCcsXG4gICdjb21waWxpbmcnOiAnY3BsaW5nJyxcbiAgJ2NvbXBpbGVkJzogJ2NwZCcsXG4gICdsaW5rJzogJ2xuaycsXG4gICdsaW5raW5nJzogJ2xua2luZycsXG4gICdsaW5rZWQnOiAnbG5rZCcsXG4gICdyZWJ1aWxkJzogJ3JibGQnLFxuICAnY2xlYW4nOiAnY2xuJyxcbiAgJ2NsZWFubmluZyc6ICdjbG5pbmcnLFxuICAnY2xlYW5lZCc6ICdjbG5kJyxcblxuICAvLyBFcnJvci93YXJuaW5nIHR5cGVzXG4gICd1bmRlZmluZWQnOiAndW5kZWYnLFxuICAndW5yZXNvbHZlZCc6ICd1bnJlcycsXG4gICdpbmNvbXBsZXRlJzogJ2luY29tcCcsXG4gICd1bnVzZWQnOiAndW5zZCcsXG4gICdkZXByZWNhdGVkJzogJ2RlcHInLFxuICAnb2Jzb2xldGUnOiAnb2JzJyxcbiAgJ3JlZHVuZGFudCc6ICdyZWRuZCcsXG4gICdkdXBsaWNhdGUnOiAnZHVwJyxcbiAgJ2NvbmZsaWN0JzogJ2NmbGN0JyxcbiAgJ2FtYmlndW91cyc6ICdhbWJnJyxcblxuICAvLyBGaWxlL3BhdGggcmVsYXRlZFxuICAnZGlyZWN0b3J5JzogJ2RpcicsXG4gICdkaXJlY3Rvcmllcyc6ICdkaXJzJyxcbiAgJ2ZvbGRlcic6ICdmbGRyJyxcbiAgJ3BhdGgnOiAncHRoJyxcbiAgJ3BhdGhzJzogJ3B0aHMnLFxuICAnc291cmNlJzogJ3NyYycsXG4gICdzb3VyY2VzJzogJ3NyY2NzJyxcbiAgJ2hlYWRlcic6ICdoZHInLFxuICAnaGVhZGVycyc6ICdoZHJzJyxcbiAgJ2luY2x1ZGUnOiAnaW5jJyxcbiAgJ2luY2x1ZGVzJzogJ2luY3MnLFxuXG4gIC8vIFR5cGUvdmFyaWFibGUgcmVsYXRlZFxuICAncGFyYW1ldGVyJzogJ3BybScsXG4gICdwYXJhbWV0ZXJzJzogJ3BybXMnLFxuICAnYXJndW1lbnQnOiAnYXJnJyxcbiAgJ2FyZ3VtZW50cyc6ICdhcmdzJyxcbiAgJ2V4cHJlc3Npb24nOiAnZXhwcicsXG4gICdleHByZXNzaW9ucyc6ICdleHBycycsXG4gICdzdGF0ZW1lbnQnOiAnc3RtdCcsXG4gICdzdGF0ZW1lbnRzJzogJ3N0bXRzJyxcbiAgJ2RlY2xhcmF0aW9uJzogJ2RlY2wnLFxuICAnZGVjbGFyYXRpb25zJzogJ2RlY2xzJyxcbiAgJ2RlZmluaXRpb24nOiAnZGVmJyxcbiAgJ2RlZmluaXRpb25zJzogJ2RlZnMnLFxuICAnaW5zdGFuY2UnOiAnaW5zdCcsXG4gICdpbnN0YW5jZXMnOiAnaW5zdHMnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IEdFUk1BTiBCVUlMRCBMT0cgVEVSTVMgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBHZXJtYW4gYnVpbGQgdGVybXNcbiAgJ2Vyc3RlbGx1bmcnOiAnYmxkJyxcbiAgJ2tvbXBpbGllcmVuJzogJ2NwbCcsXG4gICd2ZXJrblx1MDBGQ3BmZW4nOiAnbG5rJyxcbiAgJ2ZlaGxlcic6ICdlcnInLFxuICAnd2FybnVuZyc6ICd3YXJuJyxcbiAgJ2hpbndlaXMnOiAnbm90ZScsXG4gICdxdWVsbGUnOiAnc3JjJyxcbiAgJ3ppZWwnOiAndGd0JyxcbiAgJ3ZlcnplaWNobmlzJzogJ2RpcicsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gTVNWQyBHRVJNQU4gRVJST1IgVEVSTVMgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBNU1ZDIEdlcm1hbiBlcnJvciBtZXNzYWdlIHRlcm1zIChzaW5nbGUgd29yZHMpXG4gICdCZXplaWNobmVyJzogJ2lkZW50JyxcbiAgJ1R5cHNwZXppZml6aWVyZXInOiAndHlwZSBzcGVjJyxcbiAgJ1N5bnRheGZlaGxlcic6ICdzeW50YXggZXJyJyxcbiAgJ2Rla2xhcmllcnRlcic6ICdkZWNsYXJlZCcsXG4gICd1bmdcdTAwRkNsdGlnJzogJ2ludmFsaWQnLFxuICAnYW5nZW5vbW1lbic6ICdhc3N1bWVkJyxcbiAgJ3VudGVyc3RcdTAwRkN0enQnOiAnc3VwcG9ydGVkJyxcbiAgJ2dlXHUwMEY2ZmZuZXQnOiAnb3BlbmVkJyxcbiAgJ1ZlcndlbmR1bmcnOiAndXNlJyxcbiAgJ2dlZnVuZGVuJzogJ2ZvdW5kJyxcbiAgJ2ZlaGx0JzogJ21pc3NpbmcnLFxuICAnRmVobGVuZGVzJzogJ21pc3NpbmcnLFxuICAnSGlud2Vpcyc6ICdub3RlJyxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBDTEFORy9HQ0MgV0FSTklORyBURVJNUyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIFdhcm5pbmcgY2F0ZWdvcnkgYWJicmV2aWF0aW9uc1xuICAndW51c2VkLXZhcmlhYmxlJzogJ3Vuc2QtdmFyJyxcbiAgJ3VudXNlZC1mdW5jdGlvbic6ICd1bnNkLWZuJyxcbiAgJ3VudXNlZC1idXQtc2V0LXZhcmlhYmxlJzogJ3NldC11bnNkJyxcbiAgJ21pY3Jvc29mdC1pbmNsdWRlJzogJ21zLWluYycsXG4gICdub24tcG9ydGFibGUnOiAncG9ydCcsXG4gICdzZWFyY2ggcnVsZXMnOiAncnVsZXMnLFxuXG4gIC8vIEdlcm1hbiB3YXJuaW5nIHRlcm1zXG4gICdOZXVlcnN0ZWxsdW5nJzogJ3JibGQnLFxuICAnRXJzdGVsbGVuJzogJ2JsZCcsXG59O1xuIiwgImltcG9ydCB7IGNyZWF0ZUNvbmZpZ1NjaGVtYXRpY3MgfSBmcm9tIFwiQGxtc3R1ZGlvL3Nka1wiO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gc2NoZW1hIGZvciB0aGUgVHJvZ2xvZHl0ZSBwbHVnaW4uXG4gKiBEZWZpbmVzIFVJIHNldHRpbmdzIHRoYXQgdXNlcnMgY2FuIGN1c3RvbWl6ZSBpbiBMTSBTdHVkaW8uXG4gKi9cbmV4cG9ydCBjb25zdCBjb25maWdTY2hlbWF0aWNzID0gY3JlYXRlQ29uZmlnU2NoZW1hdGljcygpXG4gIC8vIENvcmUgY29tcHJlc3Npb24gc2V0dGluZ3NcbiAgLmZpZWxkKFxuICAgIFwiY29tcHJlc3Npb25MZXZlbFwiLFxuICAgIFwic2VsZWN0XCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiQ29tcHJlc3Npb24gTGV2ZWxcIixcbiAgICAgIGhpbnQ6IFwiSG93IGFnZ3Jlc3NpdmVseSB0byBjb21wcmVzcyBwcm9tcHRzLiBHZW50bGUgcHJlc2VydmVzIG1vcmUgd29yZHMsIEFnZ3Jlc3NpdmUgbWF4aW1pemVzIHRva2VuIHNhdmluZ3MuXCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdmFsdWU6IFwiZ2VudGxlXCIsIGRpc3BsYXlOYW1lOiBcIkdlbnRsZSAofjIwLTMwJSByZWR1Y3Rpb24pXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJiYWxhbmNlZFwiLCBkaXNwbGF5TmFtZTogXCJCYWxhbmNlZCAofjQ1JSByZWR1Y3Rpb24pXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJhZ2dyZXNzaXZlXCIsIGRpc3BsYXlOYW1lOiBcIkFnZ3Jlc3NpdmUgKH42MC03MCUgcmVkdWN0aW9uKVwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgXCJiYWxhbmNlZFwiLFxuICApXG4gIC8vIFByb3RlY3Rpb24gb3B0aW9uc1xuICAuZmllbGQoXG4gICAgXCJwcm90ZWN0VXJsc1wiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlByb3RlY3QgVVJMcyAmIExpbmtzXCIsXG4gICAgICBoaW50OiBcIlByZXNlcnZlIFVSTHMgYW5kIHdlYiBsaW5rcyBpbnRhY3QgZHVyaW5nIGNvbXByZXNzaW9uLlwiLFxuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKVxuICAuZmllbGQoXG4gICAgXCJwcm90ZWN0TnVtYmVyc1wiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlByb3RlY3QgVmVyc2lvbiBOdW1iZXJzICYgSURzXCIsXG4gICAgICBoaW50OiBcIktlZXAgdmVyc2lvbiBudW1iZXJzICh2MS4wLjApLCBpc3N1ZSByZWZlcmVuY2VzICgjMTIzNCksIGFuZCBVVUlEcyBpbnRhY3QuXCIsXG4gICAgfSxcbiAgICB0cnVlLFxuICApXG4gIC5maWVsZChcbiAgICBcInByb3RlY3RIZWFkZXJzXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiUHJvdGVjdCBNYXJrZG93biBIZWFkZXJzXCIsXG4gICAgICBoaW50OiBcIlByZXNlcnZlICMgSGVhZGVyIHN0cnVjdHVyZSBpbiBtYXJrZG93biBkb2N1bWVudHMuXCIsXG4gICAgfSxcbiAgICB0cnVlLFxuICApXG4gIC5maWVsZChcbiAgICBcInByb3RlY3RGaWxlUGF0aHNcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogXCJQcm90ZWN0IEZpbGUgUGF0aHNcIixcbiAgICAgIGhpbnQ6IFwiS2VlcCBmaWxlIHBhdGhzIGludGFjdCAocHJldmVudHMgJ1NvdXJjZScgXHUyMTkyICdzcmMnIGNvcnJ1cHRpb24pLlwiLFxuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKVxuICAvLyBMYW5ndWFnZSBzZXR0aW5nc1xuICAuZmllbGQoXG4gICAgXCJsYW5ndWFnZU1vZGVcIixcbiAgICBcInNlbGVjdFwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIkxhbmd1YWdlIE1vZGVcIixcbiAgICAgIGhpbnQ6IFwiU2VsZWN0IHRoZSBsYW5ndWFnZSBmb3IgY29tcHJlc3Npb24gb3IgZW5hYmxlIGF1dG8tZGV0ZWN0aW9uLlwiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHZhbHVlOiBcImF1dG9cIiwgZGlzcGxheU5hbWU6IFwiXHVEODNEXHVERDBEIEF1dG8tRGV0ZWN0IChFTi9ERSlcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcImVuXCIsIGRpc3BsYXlOYW1lOiBcIlx1RDgzQ1x1RERFQ1x1RDgzQ1x1RERFNyBFbmdsaXNoXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJkZVwiLCBkaXNwbGF5TmFtZTogXCJcdUQ4M0NcdURERTlcdUQ4M0NcdURERUEgR2VybWFuXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBcImF1dG9cIixcbiAgKVxuICAvLyBEaXNwbGF5IG9wdGlvbnNcbiAgLmZpZWxkKFxuICAgIFwic2hvd1N0YXRzXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiU2hvdyBTdGF0aXN0aWNzIGluIENvbnNvbGVcIixcbiAgICAgIGhpbnQ6IFwiRGlzcGxheSBjb21wcmVzc2lvbiBzdGF0aXN0aWNzIGFmdGVyIGVhY2ggbWVzc2FnZS5cIixcbiAgICB9LFxuICAgIHRydWUsXG4gIClcbiAgLmJ1aWxkKCk7XG5cbi8qKlxuICogVHlwZSByZXByZXNlbnRpbmcgdGhlIHBsdWdpbiBjb25maWd1cmF0aW9uIHZhbHVlcy5cbiAqL1xuZXhwb3J0IHR5cGUgUGx1Z2luQ29uZmlnID0gdHlwZW9mIGNvbmZpZ1NjaGVtYXRpY3M7XG4iLCAiaW1wb3J0IHsgdHlwZSBQcm9tcHRQcmVwcm9jZXNzb3JDb250cm9sbGVyLCB0eXBlIENoYXRNZXNzYWdlIH0gZnJvbSBcIkBsbXN0dWRpby9zZGtcIjtcbmltcG9ydCB7IFRyb2dsb2R5dGUsIHR5cGUgQ29tcHJlc3Npb25MZXZlbCB9IGZyb20gJy4vdHJvZ2xvZHl0ZSc7XG5pbXBvcnQgeyBwaHJhc2VzIH0gZnJvbSAnLi9kaWN0aW9uYXJpZXMvcGhyYXNlcyc7XG5pbXBvcnQgeyBzeW5vbnltcyB9IGZyb20gJy4vZGljdGlvbmFyaWVzL3N5bm9ueW1zJztcbmltcG9ydCB7IGNvbmZpZ1NjaGVtYXRpY3MgfSBmcm9tICcuL2NvbmZpZyc7XG5cbi8vIEluaXRpYWxpemUgVHJvZ2xvZHl0ZSB3aXRoIGRpY3Rpb25hcmllc1xuY29uc3QgdHJvZ2xvZHl0ZSA9IG5ldyBUcm9nbG9keXRlKHtcbiAgcGhyYXNlcyxcbiAgYmxhY2tsaXN0OiBbXSwgLy8gQmxhY2tsaXN0IG5vdyBoYW5kbGVkIGludGVybmFsbHkgYnkgY29tcHJlc3Npb24gbGV2ZWxcbiAgc3lub255bXMsXG59KTtcblxuLyoqXG4gKiBFeHRyYWN0cyBvbmx5IHRoZSBhY3R1YWwgdXNlciBpbnB1dCBmcm9tIGEgbWVzc2FnZSB0aGF0IG1heSBjb250YWluIHN5c3RlbSBtZXRhZGF0YS5cbiAqIFN5c3RlbSBtZXRhZGF0YSBtYXJrZXJzOiBbWmVpdDosICoqU1lTVEVNRU1QRkVITFVORzoqKiwgU1lTVEVNRU1QRkVITFVORyFcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdFVzZXJJbnB1dCh0ZXh0OiBzdHJpbmcpOiB7IHVzZXJJbnB1dDogc3RyaW5nOyBoYXNTeXN0ZW1NZXRhZGF0YTogYm9vbGVhbiB9IHtcbiAgLy8gTG9vayBmb3Igc3lzdGVtIG1ldGFkYXRhIG1hcmtlcnMgLSB0cnkgbXVsdGlwbGUgcGF0dGVybnNcbiAgY29uc3QgemVpdE1hdGNoID0gdGV4dC5tYXRjaCgvXFxbWmVpdDpcXHMqLyk7XG4gIGNvbnN0IHN5c3RlbUVtcGZlaGx1bmdNYXRjaDEgPSB0ZXh0Lm1hdGNoKC9cXCpcXCpTWVNURU1FTVBGRUhMVU5HOlxcKlxcKi8pOyAgLy8gV2l0aCBhc3Rlcmlza3MgYW5kIGNvbG9uXG4gIGNvbnN0IHN5c3RlbUVtcGZlaGx1bmdNYXRjaDIgPSB0ZXh0Lm1hdGNoKC9TWVNURU1FTVBGRUhMVU5HIS8pOyAgICAgICAgICAgLy8gV2l0aG91dCBhc3Rlcmlza3MsIHdpdGggZXhjbGFtYXRpb25cbiAgXG4gIGxldCBtYXJrZXJJbmRleCA9IC0xO1xuICBcbiAgLy8gRmluZCB0aGUgZWFybGllc3QgbWF0Y2hpbmcgbWFya2VyXG4gIGlmICh6ZWl0TWF0Y2gpIHtcbiAgICBtYXJrZXJJbmRleCA9IHplaXRNYXRjaC5pbmRleCA/PyAtMTtcbiAgfVxuICBpZiAoc3lzdGVtRW1wZmVobHVuZ01hdGNoMSAmJiBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gxLmluZGV4ICE9IG51bGwpIHtcbiAgICBjb25zdCBpZHggPSBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gxLmluZGV4O1xuICAgIGlmIChtYXJrZXJJbmRleCA9PT0gLTEgfHwgaWR4IDwgbWFya2VySW5kZXgpIHtcbiAgICAgIG1hcmtlckluZGV4ID0gaWR4O1xuICAgIH1cbiAgfVxuICBpZiAoc3lzdGVtRW1wZmVobHVuZ01hdGNoMiAmJiBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gyLmluZGV4ICE9IG51bGwpIHtcbiAgICBjb25zdCBpZHggPSBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gyLmluZGV4O1xuICAgIGlmIChtYXJrZXJJbmRleCA9PT0gLTEgfHwgaWR4IDwgbWFya2VySW5kZXgpIHtcbiAgICAgIG1hcmtlckluZGV4ID0gaWR4O1xuICAgIH1cbiAgfVxuICBcbiAgLy8gSWYgbm8gc3lzdGVtIG1ldGFkYXRhIGZvdW5kLCByZXR1cm4gZnVsbCB0ZXh0XG4gIGlmIChtYXJrZXJJbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4geyB1c2VySW5wdXQ6IHRleHQsIGhhc1N5c3RlbU1ldGFkYXRhOiBmYWxzZSB9O1xuICB9XG4gIFxuICAvLyBFeHRyYWN0IGV2ZXJ5dGhpbmcgYmVmb3JlIHRoZSBmaXJzdCBzeXN0ZW0gbWV0YWRhdGEgbWFya2VyXG4gIGNvbnN0IHVzZXJJbnB1dCA9IHRleHQuc3Vic3RyaW5nKDAsIG1hcmtlckluZGV4KS50cmltKCk7XG4gIFxuICByZXR1cm4geyB1c2VySW5wdXQsIGhhc1N5c3RlbU1ldGFkYXRhOiB0cnVlIH07XG59XG5cblxuLyoqXG4gKiBQcm9tcHQgUHJlcHJvY2Vzc29yIC0gQ29tcHJlc3NlcyB1c2VyIHByb21wdHMgYnkgcmVtb3ZpbmcgZmx1ZmYgYW5kIGZpbGxlciB3b3Jkcy5cbiAqIFJlZHVjZXMgdG9rZW4gdXNhZ2UgYnkgfjQ1JSB3aGlsZSBwcmVzZXJ2aW5nIGNvcmUgbWVhbmluZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZXByb2Nlc3MoY3RsOiBQcm9tcHRQcmVwcm9jZXNzb3JDb250cm9sbGVyLCB1c2VyTWVzc2FnZTogQ2hhdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAvLyBIYW5kbGUgYWJvcnQgc2lnbmFsIC0gZXhpdCBlYXJseSBpZiBwcmVwcm9jZXNzaW5nIHdhcyBjYW5jZWxsZWRcbiAgaWYgKGN0bC5hYm9ydFNpZ25hbC5hYm9ydGVkKSB7XG4gICAgcmV0dXJuIHVzZXJNZXNzYWdlLmdldFRleHQoKTtcbiAgfVxuXG4gIC8vIFJlYWQgYWxsIGNvbmZpZ3VyYXRpb24gZnJvbSBwbHVnaW4gY29uZmlnXG4gIGNvbnN0IHBsdWdpbkNvbmZpZyA9IGN0bC5nZXRQbHVnaW5Db25maWcoY29uZmlnU2NoZW1hdGljcyk7XG4gIFxuICBjb25zdCBjb21wcmVzc2lvbkxldmVsOiBDb21wcmVzc2lvbkxldmVsID0gKHBsdWdpbkNvbmZpZy5nZXQoXCJjb21wcmVzc2lvbkxldmVsXCIpIGFzIENvbXByZXNzaW9uTGV2ZWwpID8/IFwiYmFsYW5jZWRcIjtcbiAgY29uc3QgcHJvdGVjdFVybHMgPSBwbHVnaW5Db25maWcuZ2V0KFwicHJvdGVjdFVybHNcIikgYXMgYm9vbGVhbiA/PyB0cnVlO1xuICBjb25zdCBwcm90ZWN0TnVtYmVycyA9IHBsdWdpbkNvbmZpZy5nZXQoXCJwcm90ZWN0TnVtYmVyc1wiKSBhcyBib29sZWFuID8/IHRydWU7XG4gIGNvbnN0IHByb3RlY3RIZWFkZXJzID0gcGx1Z2luQ29uZmlnLmdldChcInByb3RlY3RIZWFkZXJzXCIpIGFzIGJvb2xlYW4gPz8gdHJ1ZTtcbiAgY29uc3QgbGFuZ3VhZ2VNb2RlID0gcGx1Z2luQ29uZmlnLmdldChcImxhbmd1YWdlTW9kZVwiKSBhcyBzdHJpbmcgPz8gXCJhdXRvXCI7XG4gIGNvbnN0IHNob3dTdGF0cyA9IHBsdWdpbkNvbmZpZy5nZXQoXCJzaG93U3RhdHNcIikgYXMgYm9vbGVhbiA/PyB0cnVlO1xuXG4gIC8vIENyZWF0ZSBzdGF0dXMgcmVwb3J0IGZvciBVSSBmZWVkYmFja1xuICBjb25zdCBzdGF0dXMgPSBjdGwuY3JlYXRlU3RhdHVzKHtcbiAgICBzdGF0dXM6IFwibG9hZGluZ1wiIGFzIGNvbnN0LFxuICAgIHRleHQ6IGBUcm9nbG9keWZ5aW5nIHByb21wdCAoJHtjb21wcmVzc2lvbkxldmVsfSkuLi5gLFxuICB9KTtcblxuICB0cnkge1xuICAgIGNvbnN0IGZ1bGxUZXh0ID0gdXNlck1lc3NhZ2UuZ2V0VGV4dCgpO1xuICAgIFxuICAgIC8vIE9QVElPTiAyIEZJWDogRXh0cmFjdCBvbmx5IGFjdHVhbCB1c2VyIGlucHV0LCBza2lwIHN5c3RlbSBtZXRhZGF0YVxuICAgIGNvbnN0IHsgdXNlcklucHV0LCBoYXNTeXN0ZW1NZXRhZGF0YSB9ID0gZXh0cmFjdFVzZXJJbnB1dChmdWxsVGV4dCk7XG4gICAgXG4gICAgaWYgKHNob3dTdGF0cyAmJiBoYXNTeXN0ZW1NZXRhZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBEZXRlY3RlZCBzeXN0ZW0gbWV0YWRhdGEuIFByb2Nlc3NpbmcgJHt1c2VySW5wdXQubGVuZ3RofSBjaGFycyBvZiB1c2VyIGlucHV0IChza2lwcGVkICR7ZnVsbFRleHQubGVuZ3RoIC0gdXNlcklucHV0Lmxlbmd0aH0gY2hhcnMgb2YgbWV0YWRhdGEpYCk7XG4gICAgfVxuICAgIFxuICAgIC8vIENvbXByZXNzIG9ubHkgdGhlIGFjdHVhbCB1c2VyIGlucHV0XG4gICAgY29uc3QgY29tcHJlc3NlZFVzZXJJbnB1dCA9IHRyb2dsb2R5dGUuY29tcHJlc3ModXNlcklucHV0LCB7IFxuICAgICAgbGV2ZWw6IGNvbXByZXNzaW9uTGV2ZWwsXG4gICAgICBwcm90ZWN0VXJscyxcbiAgICAgIHByb3RlY3ROdW1iZXJzLFxuICAgICAgcHJvdGVjdEhlYWRlcnMsXG4gICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VNb2RlICE9PSBcImF1dG9cIiA/IChsYW5ndWFnZU1vZGUgYXMgaW1wb3J0KCcuL3Ryb2dsb2R5dGUnKS5MYW5ndWFnZUNvZGUpIDogdW5kZWZpbmVkLFxuICAgIH0pO1xuXG4gICAgLy8gUmVjb25zdHJ1Y3QgdGhlIGZ1bGwgbWVzc2FnZSB3aXRoIGNvbXByZXNzZWQgdXNlciBpbnB1dCArIG9yaWdpbmFsIHN5c3RlbSBtZXRhZGF0YVxuICAgIGNvbnN0IHN5c3RlbU1ldGFkYXRhID0gaGFzU3lzdGVtTWV0YWRhdGEgPyBmdWxsVGV4dC5zdWJzdHJpbmcodXNlcklucHV0Lmxlbmd0aCkgOiAnJztcbiAgICBjb25zdCBjb21wcmVzc2VkID0gY29tcHJlc3NlZFVzZXJJbnB1dCArIHN5c3RlbU1ldGFkYXRhO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGNvbXByZXNzaW9uIHN0YXRzIChvbmx5IG9uIHVzZXIgaW5wdXQgcG9ydGlvbilcbiAgICBjb25zdCBvcmlnaW5hbExlbmd0aCA9IHVzZXJJbnB1dC5sZW5ndGg7XG4gICAgY29uc3QgY29tcHJlc3NlZExlbmd0aCA9IGNvbXByZXNzZWRVc2VySW5wdXQubGVuZ3RoO1xuICAgIGNvbnN0IHNhdmluZ3MgPSBNYXRoLnJvdW5kKCgob3JpZ2luYWxMZW5ndGggLSBjb21wcmVzc2VkTGVuZ3RoKSAvIG9yaWdpbmFsTGVuZ3RoKSAqIDEwMCk7XG5cbiAgICAvLyBHZXQgY3VtdWxhdGl2ZSBzdGF0aXN0aWNzXG4gICAgY29uc3QgY3VtdWxhdGl2ZVN0YXRzID0gdHJvZ2xvZHl0ZS5nZXRTdGF0cygpO1xuXG4gICAgLy8gRGV0YWlsZWQgbG9nZ2luZyBpcyBub3cgaGFuZGxlZCBpbiB0cm9nbG9keXRlLnRzIHRvIGF2b2lkIGR1cGxpY2F0aW9uXG4gICAgLy8gYW5kIHRvIGluY2x1ZGUgdGhlIG5ldyBcdTI1QjYgSU5QVVQgLyBcdTI1QjYgQ09NUFJFU1NFRCBkZWJ1ZyBsaW5lcy5cblxuICAgIC8vIFVwZGF0ZSBzdGF0dXMgdG8gY29tcGxldGVkIHdpdGggZGV0YWlsZWQgaW5mb1xuICAgIGNvbnN0IHByb3RlY3Rpb25JbmZvID0gW107XG4gICAgaWYgKHByb3RlY3RVcmxzKSBwcm90ZWN0aW9uSW5mby5wdXNoKFwiVVJMc1wiKTtcbiAgICBpZiAocHJvdGVjdE51bWJlcnMpIHByb3RlY3Rpb25JbmZvLnB1c2goXCJJRHNcIik7XG4gICAgXG4gICAgbGV0IHN0YXR1c1RleHQgPSBgQ29tcHJlc3NlZCBieSAke3NhdmluZ3N9JWA7XG4gICAgaWYgKHByb3RlY3Rpb25JbmZvLmxlbmd0aCA+IDApIHtcbiAgICAgIHN0YXR1c1RleHQgKz0gYCAocHJvdGVjdGVkOiAke3Byb3RlY3Rpb25JbmZvLmpvaW4oXCIsIFwiKX0pYDtcbiAgICB9XG4gICAgXG4gICAgc3RhdHVzLnNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogXCJkb25lXCIgYXMgY29uc3QsXG4gICAgICB0ZXh0OiBzdGF0dXNUZXh0LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXByZXNzZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltUcm9nbG9keXRlXSBFcnJvciBjb21wcmVzc2luZyBwcm9tcHQ6XCIsIGVycm9yKTtcbiAgICBcbiAgICAvLyBVcGRhdGUgc3RhdHVzIHRvIHNob3cgZXJyb3JcbiAgICBzdGF0dXMuc2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiBcImRvbmVcIiBhcyBjb25zdCxcbiAgICAgIHRleHQ6IFwiQ29tcHJlc3Npb24gZmFpbGVkIC0gdXNpbmcgb3JpZ2luYWxcIixcbiAgICB9KTtcblxuICAgIC8vIFJldHVybiBvcmlnaW5hbCBtZXNzYWdlIGlmIGNvbXByZXNzaW9uIGZhaWxzXG4gICAgcmV0dXJuIHVzZXJNZXNzYWdlLmdldFRleHQoKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IHR5cGUgUGx1Z2luQ29udGV4dCB9IGZyb20gXCJAbG1zdHVkaW8vc2RrXCI7XG5pbXBvcnQgeyBwcmVwcm9jZXNzIH0gZnJvbSBcIi4vcHJvbXB0UHJlcHJvY2Vzc29yXCI7XG5pbXBvcnQgeyBjb25maWdTY2hlbWF0aWNzIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbi8qKlxuICogTWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIFRyb2dsb2R5dGUgcGx1Z2luLlxuICogUmVnaXN0ZXJzIHRoZSBwcm9tcHQgcHJlcHJvY2Vzc29yIGFuZCBjb25maWd1cmF0aW9uIHdpdGggTE0gU3R1ZGlvLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbihjb250ZXh0OiBQbHVnaW5Db250ZXh0KSB7XG4gIC8vIFJlZ2lzdGVyIHRoZSBjb25maWd1cmF0aW9uIHNjaGVtYXRpY3MgKGVuYWJsZXMgVUkgc2V0dGluZ3MpXG4gIGNvbnRleHQud2l0aENvbmZpZ1NjaGVtYXRpY3MoY29uZmlnU2NoZW1hdGljcyk7XG4gIFxuICAvLyBSZWdpc3RlciB0aGUgcHJvbXB0IHByZXByb2Nlc3NvclxuICBjb250ZXh0LndpdGhQcm9tcHRQcmVwcm9jZXNzb3IocHJlcHJvY2Vzcyk7XG59XG4iLCAiaW1wb3J0IHsgTE1TdHVkaW9DbGllbnQsIHR5cGUgUGx1Z2luQ29udGV4dCB9IGZyb20gXCJAbG1zdHVkaW8vc2RrXCI7XG5cbmRlY2xhcmUgdmFyIHByb2Nlc3M6IGFueTtcblxuLy8gV2UgcmVjZWl2ZSBydW50aW1lIGluZm9ybWF0aW9uIGluIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG5jb25zdCBjbGllbnRJZGVudGlmaWVyID0gcHJvY2Vzcy5lbnYuTE1TX1BMVUdJTl9DTElFTlRfSURFTlRJRklFUjtcbmNvbnN0IGNsaWVudFBhc3NrZXkgPSBwcm9jZXNzLmVudi5MTVNfUExVR0lOX0NMSUVOVF9QQVNTS0VZO1xuY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LkxNU19QTFVHSU5fQkFTRV9VUkw7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBMTVN0dWRpb0NsaWVudCh7XG4gIGNsaWVudElkZW50aWZpZXIsXG4gIGNsaWVudFBhc3NrZXksXG4gIGJhc2VVcmwsXG59KTtcblxuKGdsb2JhbFRoaXMgYXMgYW55KS5fX0xNU19QTFVHSU5fQ09OVEVYVCA9IHRydWU7XG5cbmxldCBwcmVkaWN0aW9uTG9vcEhhbmRsZXJTZXQgPSBmYWxzZTtcbmxldCBwcm9tcHRQcmVwcm9jZXNzb3JTZXQgPSBmYWxzZTtcbmxldCBjb25maWdTY2hlbWF0aWNzU2V0ID0gZmFsc2U7XG5sZXQgZ2xvYmFsQ29uZmlnU2NoZW1hdGljc1NldCA9IGZhbHNlO1xubGV0IHRvb2xzUHJvdmlkZXJTZXQgPSBmYWxzZTtcbmxldCBnZW5lcmF0b3JTZXQgPSBmYWxzZTtcblxuY29uc3Qgc2VsZlJlZ2lzdHJhdGlvbkhvc3QgPSBjbGllbnQucGx1Z2lucy5nZXRTZWxmUmVnaXN0cmF0aW9uSG9zdCgpO1xuXG5jb25zdCBwbHVnaW5Db250ZXh0OiBQbHVnaW5Db250ZXh0ID0ge1xuICB3aXRoUHJlZGljdGlvbkxvb3BIYW5kbGVyOiAoZ2VuZXJhdGUpID0+IHtcbiAgICBpZiAocHJlZGljdGlvbkxvb3BIYW5kbGVyU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcmVkaWN0aW9uTG9vcEhhbmRsZXIgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgIH1cbiAgICBpZiAodG9vbHNQcm92aWRlclNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJlZGljdGlvbkxvb3BIYW5kbGVyIGNhbm5vdCBiZSB1c2VkIHdpdGggYSB0b29scyBwcm92aWRlclwiKTtcbiAgICB9XG5cbiAgICBwcmVkaWN0aW9uTG9vcEhhbmRsZXJTZXQgPSB0cnVlO1xuICAgIHNlbGZSZWdpc3RyYXRpb25Ib3N0LnNldFByZWRpY3Rpb25Mb29wSGFuZGxlcihnZW5lcmF0ZSk7XG4gICAgcmV0dXJuIHBsdWdpbkNvbnRleHQ7XG4gIH0sXG4gIHdpdGhQcm9tcHRQcmVwcm9jZXNzb3I6IChwcmVwcm9jZXNzKSA9PiB7XG4gICAgaWYgKHByb21wdFByZXByb2Nlc3NvclNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvbXB0UHJlcHJvY2Vzc29yIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtcbiAgICB9XG4gICAgcHJvbXB0UHJlcHJvY2Vzc29yU2V0ID0gdHJ1ZTtcbiAgICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5zZXRQcm9tcHRQcmVwcm9jZXNzb3IocHJlcHJvY2Vzcyk7XG4gICAgcmV0dXJuIHBsdWdpbkNvbnRleHQ7XG4gIH0sXG4gIHdpdGhDb25maWdTY2hlbWF0aWNzOiAoY29uZmlnU2NoZW1hdGljcykgPT4ge1xuICAgIGlmIChjb25maWdTY2hlbWF0aWNzU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25maWcgc2NoZW1hdGljcyBhbHJlYWR5IHJlZ2lzdGVyZWRcIik7XG4gICAgfVxuICAgIGNvbmZpZ1NjaGVtYXRpY3NTZXQgPSB0cnVlO1xuICAgIHNlbGZSZWdpc3RyYXRpb25Ib3N0LnNldENvbmZpZ1NjaGVtYXRpY3MoY29uZmlnU2NoZW1hdGljcyk7XG4gICAgcmV0dXJuIHBsdWdpbkNvbnRleHQ7XG4gIH0sXG4gIHdpdGhHbG9iYWxDb25maWdTY2hlbWF0aWNzOiAoZ2xvYmFsQ29uZmlnU2NoZW1hdGljcykgPT4ge1xuICAgIGlmIChnbG9iYWxDb25maWdTY2hlbWF0aWNzU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHbG9iYWwgY29uZmlnIHNjaGVtYXRpY3MgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgIH1cbiAgICBnbG9iYWxDb25maWdTY2hlbWF0aWNzU2V0ID0gdHJ1ZTtcbiAgICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5zZXRHbG9iYWxDb25maWdTY2hlbWF0aWNzKGdsb2JhbENvbmZpZ1NjaGVtYXRpY3MpO1xuICAgIHJldHVybiBwbHVnaW5Db250ZXh0O1xuICB9LFxuICB3aXRoVG9vbHNQcm92aWRlcjogKHRvb2xzUHJvdmlkZXIpID0+IHtcbiAgICBpZiAodG9vbHNQcm92aWRlclNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9vbHMgcHJvdmlkZXIgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgIH1cbiAgICBpZiAocHJlZGljdGlvbkxvb3BIYW5kbGVyU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb29scyBwcm92aWRlciBjYW5ub3QgYmUgdXNlZCB3aXRoIGEgcHJlZGljdGlvbkxvb3BIYW5kbGVyXCIpO1xuICAgIH1cblxuICAgIHRvb2xzUHJvdmlkZXJTZXQgPSB0cnVlO1xuICAgIHNlbGZSZWdpc3RyYXRpb25Ib3N0LnNldFRvb2xzUHJvdmlkZXIodG9vbHNQcm92aWRlcik7XG4gICAgcmV0dXJuIHBsdWdpbkNvbnRleHQ7XG4gIH0sXG4gIHdpdGhHZW5lcmF0b3I6IChnZW5lcmF0b3IpID0+IHtcbiAgICBpZiAoZ2VuZXJhdG9yU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgIH1cblxuICAgIGdlbmVyYXRvclNldCA9IHRydWU7XG4gICAgc2VsZlJlZ2lzdHJhdGlvbkhvc3Quc2V0R2VuZXJhdG9yKGdlbmVyYXRvcik7XG4gICAgcmV0dXJuIHBsdWdpbkNvbnRleHQ7XG4gIH0sXG59O1xuXG5pbXBvcnQoXCIuLy4uL3NyYy9pbmRleC50c1wiKS50aGVuKGFzeW5jIG1vZHVsZSA9PiB7XG4gIHJldHVybiBhd2FpdCBtb2R1bGUubWFpbihwbHVnaW5Db250ZXh0KTtcbn0pLnRoZW4oKCkgPT4ge1xuICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5pbml0Q29tcGxldGVkKCk7XG59KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBleGVjdXRlIHRoZSBtYWluIGZ1bmN0aW9uIG9mIHRoZSBwbHVnaW4uXCIpO1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O0FBQUEsSUFNYSxXQU1BLGFBdUZBLGVBZ0JBO0FBbkhiO0FBQUE7QUFBQTtBQU1PLElBQU0sWUFBWTtBQUFBLE1BQ3ZCO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBYztBQUFBLE1BQWU7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQ2hGO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsSUFDaEU7QUFHTyxJQUFNLGNBQWM7QUFBQSxNQUN6QixHQUFHO0FBQUE7QUFBQSxNQUVIO0FBQUEsTUFBSztBQUFBLE1BQU07QUFBQTtBQUFBLE1BRVg7QUFBQSxNQUFLO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUM5RDtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQTtBQUFBLE1BRXBDO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBO0FBQUEsTUFFaEQ7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUNyRTtBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBO0FBQUEsTUFFdkI7QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFTO0FBQUEsTUFBTTtBQUFBLE1BQzFFO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUN0RTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFDekU7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBO0FBQUEsTUFFM0M7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUN0RTtBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFBTTtBQUFBLE1BQVc7QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUE7QUFBQSxNQUVyRTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBO0FBQUEsTUFFMUI7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUN0RTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDckU7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQ3hFO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQWE7QUFBQSxNQUFhO0FBQUEsTUFDaEU7QUFBQSxNQUFhO0FBQUEsTUFBVztBQUFBLE1BQWE7QUFBQSxNQUFjO0FBQUEsTUFBYztBQUFBLE1BQ2pFO0FBQUEsTUFBWTtBQUFBLE1BQWE7QUFBQSxNQUFlO0FBQUEsTUFBYTtBQUFBLE1BQWE7QUFBQSxNQUNsRTtBQUFBLE1BQVk7QUFBQSxNQUFZO0FBQUEsTUFBYztBQUFBLE1BQVM7QUFBQSxNQUFhO0FBQUEsTUFBVTtBQUFBLE1BQ3RFO0FBQUEsTUFBUTtBQUFBLE1BQWE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBO0FBQUEsTUFFeEM7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUNyRTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFDbEU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUN0RTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFDakU7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFDOUQ7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBYztBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFDbkU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ2xFO0FBQUEsTUFBWTtBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQ3JFO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQy9EO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQ3RFO0FBQUEsTUFBTztBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUNsRTtBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFhO0FBQUEsTUFBVztBQUFBLE1BQ25FO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBWTtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFDakU7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUNoRTtBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQzVEO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFDakU7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQ3RFO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQ2hFO0FBQUEsTUFBVztBQUFBLE1BQWM7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFDOUQ7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQ3pEO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFZO0FBQUEsTUFDL0Q7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFDbEU7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFDbkU7QUFBQSxNQUFTO0FBQUEsTUFBWTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFDbkU7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFDbEU7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFDbkU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBYTtBQUFBLE1BQVk7QUFBQSxNQUNqRTtBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQWE7QUFBQSxNQUFTO0FBQUEsTUFBWTtBQUFBLE1BQ25FO0FBQUEsTUFBWTtBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFDbEU7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVk7QUFBQSxNQUMvRDtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBYTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUNwRTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBWTtBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUN2RTtBQUFBLE1BQVk7QUFBQSxNQUFhO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQ2xFO0FBQUEsTUFBYztBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBZTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFDbEU7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQ3BFO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQ3BFO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQWM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQ25FO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFDakU7QUFBQSxNQUFZO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUFTO0FBQUEsTUFBWTtBQUFBLE1BQVM7QUFBQSxNQUMvRDtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFDbEU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFDOUQ7QUFBQSxNQUFVO0FBQUEsTUFBWTtBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUNsRTtBQUFBLE1BQVU7QUFBQSxNQUFhO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQzlEO0FBQUEsTUFBUztBQUFBLE1BQWE7QUFBQSxNQUFXO0FBQUEsTUFBYTtBQUFBLE1BQWE7QUFBQSxNQUMzRDtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBYztBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFDMUQ7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUMzRDtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBWTtBQUFBLE1BQWE7QUFBQSxNQUFlO0FBQUEsTUFDMUQ7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFZO0FBQUEsTUFDbkU7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQWM7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUNsRTtBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFDcEU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFhO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFjO0FBQUEsSUFDdEU7QUFHTyxJQUFNLGdCQUFnQjtBQUFBLE1BQzNCLEdBQUc7QUFBQTtBQUFBLE1BRUg7QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQU07QUFBQSxNQUN0RTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUE7QUFBQSxNQUU3QztBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUE7QUFBQSxNQUVqRTtBQUFBLE1BQWE7QUFBQSxNQUFjO0FBQUEsTUFBYztBQUFBLE1BQVc7QUFBQSxNQUFjO0FBQUEsTUFDbEU7QUFBQSxNQUFVO0FBQUEsTUFBZ0I7QUFBQSxNQUFjO0FBQUEsTUFBaUI7QUFBQSxNQUN6RDtBQUFBLE1BQWE7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQVk7QUFBQSxNQUFjO0FBQUEsTUFDOUQ7QUFBQSxNQUFnQjtBQUFBLE1BQWM7QUFBQSxNQUFnQjtBQUFBLE1BQWU7QUFBQSxNQUM3RDtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUFlO0FBQUEsTUFDdkQ7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsSUFDeEM7QUFFTyxJQUFNLGVBQWU7QUFBQSxNQUMxQixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsSUFDZDtBQUFBO0FBQUE7OztBQ3ZIQSxJQU1hLFdBTUEsYUFpRUEsZUFVQTtBQXZGYjtBQUFBO0FBQUE7QUFNTyxJQUFNLFlBQVk7QUFBQSxNQUN2QjtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFZO0FBQUEsTUFDbEQ7QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsSUFDL0M7QUFHTyxJQUFNLGNBQWM7QUFBQSxNQUN6QixHQUFHO0FBQUE7QUFBQSxNQUVIO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBO0FBQUEsTUFFM0U7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFPO0FBQUEsTUFBVTtBQUFBLE1BQ2xFO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFDbEU7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBO0FBQUEsTUFFekQ7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBO0FBQUEsTUFFckU7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQ3hFO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBO0FBQUEsTUFFbkU7QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDckU7QUFBQSxNQUFTO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFZO0FBQUEsTUFBUztBQUFBLE1BQ2pFO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBWTtBQUFBLE1BQWE7QUFBQSxNQUFhO0FBQUEsTUFDcEU7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFDbkU7QUFBQSxNQUFZO0FBQUEsTUFBUTtBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUFNO0FBQUEsTUFDeEU7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQ2pFO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBO0FBQUEsTUFFMUI7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFNO0FBQUEsTUFBVTtBQUFBLE1BQ2xFO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBTztBQUFBLE1BQ2xFO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTTtBQUFBLE1BQVk7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBO0FBQUEsTUFFMUQ7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFDbEU7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQTtBQUFBLE1BRTVEO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQy9EO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQ2pFO0FBQUEsTUFBVTtBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQWdCO0FBQUEsTUFDNUQ7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQTtBQUFBLE1BRXhEO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBYztBQUFBLE1BQzNEO0FBQUEsTUFBWTtBQUFBLE1BQVE7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQ25FO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBVztBQUFBLE1BQU87QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQ2xFO0FBQUEsTUFBYztBQUFBLE1BQWtCO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFhO0FBQUEsTUFDL0Q7QUFBQSxNQUFZO0FBQUEsTUFBYztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUM5RDtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFNO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFDbEU7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFDM0Q7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQWM7QUFBQSxNQUNqRTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQTtBQUFBLE1BRTVEO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUN4RTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUNqRTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUNoRTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFDbkU7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUMzRDtBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQ2pFO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBYTtBQUFBLE1BQ3BFO0FBQUEsTUFBWTtBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFDL0Q7QUFBQSxNQUFZO0FBQUEsTUFBWTtBQUFBLE1BQWE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUMvRDtBQUFBLE1BQVU7QUFBQSxNQUFX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QUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixjQUFjO0FBQUEsTUFDZCxlQUFlO0FBQUEsTUFDZixjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsTUFDYixjQUFjO0FBQUEsTUFDZCxlQUFlO0FBQUEsTUFDZixjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUEsTUFDZixnQkFBZ0I7QUFBQSxNQUNoQixlQUFlO0FBQUEsTUFDZixXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUE7QUFBQSxNQUdYLFdBQVc7QUFBQSxNQUNYLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLFNBQVM7QUFB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Q0EsZ0NBQTRCO0FBQzVCLHlCQUFxQiwwQkFBMEIsc0JBQXNCO0FBQ3JFLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxtQkFBbUIsQ0FBQyxrQkFBa0I7QUFDcEMsUUFBSSxrQkFBa0I7QUFDcEIsWUFBTSxJQUFJLE1BQU0sbUNBQW1DO0FBQUEsSUFDckQ7QUFDQSxRQUFJLDBCQUEwQjtBQUM1QixZQUFNLElBQUksTUFBTSw0REFBNEQ7QUFBQSxJQUM5RTtBQUVBLHVCQUFtQjtBQUNuQix5QkFBcUIsaUJBQWlCLGFBQWE7QUFDbkQsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLGVBQWUsQ0FBQyxjQUFjO0FBQzVCLFFBQUksY0FBYztBQUNoQixZQUFNLElBQUksTUFBTSw4QkFBOEI7QUFBQSxJQUNoRDtBQUVBLG1CQUFlO0FBQ2YseUJBQXFCLGFBQWEsU0FBUztBQUMzQyxXQUFPO0FBQUEsRUFDVDtBQUNGO0FBRUEsd0RBQTRCLEtBQUssT0FBTUMsWUFBVTtBQUMvQyxTQUFPLE1BQU1BLFFBQU8sS0FBSyxhQUFhO0FBQ3hDLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDWix1QkFBcUIsY0FBYztBQUNyQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVU7QUFDbEIsVUFBUSxNQUFNLG9EQUFvRDtBQUNsRSxVQUFRLE1BQU0sS0FBSztBQUNyQixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfc2RrIiwgInByZXByb2Nlc3MiLCAiY29uZmlnU2NoZW1hdGljcyIsICJtb2R1bGUiXQp9Cg==
