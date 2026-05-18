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
      "bevor",
      "nachdem",
      "sobald",
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
      "verschiedene",
      "zahlreiche",
      "keine",
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
      "schon",
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
      // High-frequency verbs
      "machen",
      "macht",
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
      "darf",
      "durfte",
      "soll",
      "muss",
      "mag",
      "kennen",
      "kennt",
      "kannte",
      "hei\xDFen",
      "hei\xDFt",
      "hie\xDF"
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
      "genau"
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
  const enIndicators = /* @__PURE__ */ new Set([
    "the",
    "a",
    "an",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
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
    "must",
    "this",
    "that",
    "these",
    "those",
    "it",
    "its",
    "they",
    "them",
    "their",
    "there",
    "here",
    "what",
    "when",
    "where",
    "who",
    "how",
    "why",
    "which",
    "not",
    "no",
    "nor",
    "but",
    "and",
    "or",
    "for",
    "so",
    "if",
    "then",
    "than",
    "too",
    "very",
    "just",
    "about",
    "above",
    "after",
    "again",
    "all",
    "also",
    "any",
    "because",
    "before",
    "between",
    "both",
    "can",
    "each",
    "from",
    "further",
    "get",
    "got",
    "him",
    "his",
    "into",
    "more",
    "most",
    "other",
    "our",
    "out",
    "over",
    "own",
    "same",
    "some",
    "such",
    "through",
    "under",
    "until",
    "up",
    "while",
    "code",
    "function",
    "return",
    "class",
    "import",
    "export",
    "const",
    "let",
    "var",
    "if",
    "else",
    "for",
    "while"
  ]);
  const deIndicators = /* @__PURE__ */ new Set([
    "der",
    "die",
    "das",
    "den",
    "dem",
    "des",
    "ein",
    "eine",
    "einer",
    "einem",
    "eines",
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
    "alles",
    "dieser",
    "diese",
    "dieses",
    "jeder",
    "jede",
    "jedes",
    "kein",
    "keine",
    "mit",
    "nach",
    "von",
    "zu",
    "bei",
    "auf",
    "aus",
    "in",
    "an",
    "bei",
    "f\xFCr",
    "um",
    "gegen",
    "ohne",
    "durch",
    "wie",
    "was",
    "wenn",
    "weil",
    "da\xDF",
    "sollte",
    "k\xF6nnte",
    "m\xFCsste",
    "darf",
    "d\xFCrfe",
    "mag",
    "m\xF6ge",
    "will",
    "wollen"
  ]);
  let enCount = 0, deCount = 0;
  for (const word of words) {
    if (enIndicators.has(word)) enCount++;
    else if (deIndicators.has(word)) deCount++;
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
      // Pre-sorted phrases with pre-compiled regexes (PERFORMANCE FIX)
      compiledPhrases;
      constructor(dictionaries) {
        this.phrasesAndLogic = { ...dictionaries.phrases };
        this.synonyms = dictionaries.synonyms || {};
        const wordChar = "a-zA-Z0-9_'\xDF\xE4\xF6\xFC\xC4\xD6\xDC";
        this.compiledPhrases = Object.entries(this.phrasesAndLogic).filter(([phrase]) => phrase && phrase.length >= 2).sort((a, b) => b[0].length - a[0].length).map(([phrase, replacement]) => ({
          phrase,
          replacement,
          regex: new RegExp(`(?<![${wordChar}])${this.escapeRegex(phrase)}(?![${wordChar}])`, "gi")
        }));
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
        if (!prompt || typeof prompt !== "string") {
          console.warn("[Troglodyte] Invalid input: prompt must be a non-empty string");
          return prompt || "";
        }
        const MAX_INPUT_LENGTH = 1e6;
        if (prompt.length > MAX_INPUT_LENGTH) {
          console.warn(`[Troglodyte] Input exceeds ${MAX_INPUT_LENGTH} char limit, truncating...`);
        }
        const level = options?.level ?? "balanced";
        const protectUrls = options?.protectUrls ?? true;
        const protectNumbers = options?.protectNumbers ?? true;
        const protectHeaders = options?.protectHeaders ?? true;
        const protectFilePaths = options?.protectFilePaths ?? true;
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
        const MAX_PLACEHOLDERS = 1048575;
        const BREAK_EVEN_LENGTH = 8;
        const protectIfWorthwhile = (match, minLen = BREAK_EVEN_LENGTH) => {
          if (match.length <= minLen) return match;
          if (placeholderCounter >= MAX_PLACEHOLDERS) {
            console.warn("[Troglodyte] \u26A0\uFE0F Placeholder limit reached, skipping protection.");
            return match;
          }
          protectedItems.push(match);
          const placeholder = String.fromCodePoint(57344 + placeholderCounter++);
          return placeholder;
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
        if (protectFilePaths) {
          text = text.replace(/([A-Za-z]:[\/\\][^<>"|?*\r\n]{10,})(?=[\s.,;:!?)\]]|$)/g, (match) => {
            return protectIfWorthwhile(match, 15);
          });
          text = text.replace(/(\.\.?\/[^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, (match) => {
            return protectIfWorthwhile(match, 8);
          });
          text = text.replace(/(\/[^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, (match) => {
            return protectIfWorthwhile(match, 8);
          });
          text = text.replace(/(~\/[^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, (match) => {
            return protectIfWorthwhile(match, 8);
          });
        }
        let phraseMatches = 0;
        let phraseCharsSaved = 0;
        for (const { phrase, replacement, regex } of this.compiledPhrases) {
          const matches = text.match(regex);
          if (matches) {
            phraseMatches += matches.length;
            phraseCharsSaved += matches.reduce((sum, m) => sum + m.length - (replacement?.length || 0), 0);
          }
          text = text.replace(regex, () => {
            return replacement && replacement.trim() !== "" ? replacement : " ";
          });
        }
        const wordPattern = /[a-zA-Z0-9_.\-'ßäöüÄÖÜ]+/g;
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
        const parts = [];
        let wordIndex = 0;
        for (const token of tokens) {
          parts.push(token);
          if (wordIndex < filteredWords.length) {
            parts.push(filteredWords[wordIndex++]);
          }
        }
        text = parts.join("").replace(/\s+/g, " ").replace(/\s+([.,?!;:])/g, "$1").replace(/^([.,?!;:]\s*)+/g, "").replace(/([.,?!;:]\s*)+$/g, "").replace(/\s+([.,?!;:])\s+/g, " ").replace(/([.,?!;:]){2,}/g, "$1").replace(/([.?!;:])(?=[A-ZßÄÖÜ])/g, "$1 ").trim();
        console.log(`[Troglodyte] Restoring ${protectedItems.length} protected items...`);
        if (protectedItems.length > 0) {
          const replacements = /* @__PURE__ */ new Map();
          for (let i = 0; i < protectedItems.length; i++) {
            replacements.set(String.fromCodePoint(57344 + i), protectedItems[i]);
          }
          text = text.replace(/[-￿]/g, (match) => {
            const restored = replacements.get(match);
            if (!restored) {
              console.warn(`[Troglodyte] \u26A0\uFE0F Placeholder ${match.codePointAt(0) - 57344} not found!`);
              return match;
            }
            return restored;
          });
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
        hint: "Select the language for compression or enable auto-detection. Currently supports English and German only.",
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
  const protectFilePaths = pluginConfig.get("protectFilePaths") ?? true;
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
      protectFilePaths,
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
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("[Troglodyte] Error compressing prompt:", errorMessage);
    console.error("[Troglodyte] Stack trace:", error instanceof Error ? error.stack : "N/A");
    status.setState({
      status: "done",
      text: `Compression failed (${errorMessage.substring(0, 40)}...) - using original`
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2RpY3Rpb25hcmllcy9lbi1maWxsZXIudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9kZS1maWxsZXIudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9pbmRleC50cyIsICIuLi9zcmMvdHJvZ2xvZHl0ZS50cyIsICIuLi9zcmMvZGljdGlvbmFyaWVzL3BocmFzZXMudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9zeW5vbnltcy50cyIsICIuLi9zcmMvY29uZmlnLnRzIiwgIi4uL3NyYy9wcm9tcHRQcmVwcm9jZXNzb3IudHMiLCAiLi4vc3JjL2luZGV4LnRzIiwgImVudHJ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEVuZ2xpc2ggZmlsbGVyIHdvcmRzIG9yZ2FuaXplZCBieSBjb21wcmVzc2lvbiBsZXZlbC5cbiAqIFNvdXJjZTogTGluZ3Vpc3RpYyByZXNlYXJjaCwgTkxQIHJlc291cmNlcywgQ09DQSBmcmVxdWVuY3kgbGlzdHNcbiAqL1xuXG4vLyBHZW50bGUgdGllcjogT25seSBwb2xpdGUgZmlsbGVyIGFuZCBiYXNpYyBjb3VydGVzeSB3b3Jkc1xuZXhwb3J0IGNvbnN0IEVOX0dFTlRMRSA9IFtcbiAgJ3BsZWFzZScsICd0aGFua3MnLCAndGhhbmsnLCAnYXBwcmVjaWF0ZScsICdhcHByZWNpYXRlZCcsICdncmF0ZWZ1bCcsICdraW5kbHknLCAncG9saXRlJyxcbiAgJ3VtJywgJ3VoJywgJ29oJywgJ2FoJywgJ3dvdycsICdobW0nLCAnaG1tbScsICd3ZWxsJywgJ29rYXknLCAnb2snLFxuXTtcblxuLy8gQmFsYW5jZWQgdGllcjogfjMwMCBoaWdoLWZyZXF1ZW5jeSB3b3JkcyBzYWZlIHRvIHJlbW92ZVxuZXhwb3J0IGNvbnN0IEVOX0JBTEFOQ0VEID0gW1xuICAuLi5FTl9HRU5UTEUsXG4gIC8vIEFydGljbGVzXG4gICdhJywgJ2FuJywgJ3RoZScsXG4gIC8vIFN1YmplY3QgcHJvbm91bnNcbiAgJ2knLCAnbWUnLCAnbXknLCAnbWluZScsICdteXNlbGYnLCAnd2UnLCAndXMnLCAnb3VyJywgJ291cnMnLCAnb3Vyc2VsdmVzJyxcbiAgJ3lvdScsICd5b3VyJywgJ3lvdXJzJywgJ3lvdXJzZWxmJywgJ3lvdXJzZWx2ZXMnLFxuICAvLyBDb3B1bGFzXG4gICdpcycsICdhbScsICdhcmUnLCAnd2FzJywgJ3dlcmUnLCAnYmUnLCAnYmVlbicsICdiZWluZycsXG4gIC8vIEF1eGlsaWFyaWVzXG4gICdoYXZlJywgJ2hhcycsICdoYWQnLCAnZG8nLCAnZG9lcycsICdkaWQnLCAnd2lsbCcsICd3b3VsZCcsICdjb3VsZCcsICdzaG91bGQnLFxuICAnbWF5JywgJ21pZ2h0JywgJ2NhbicsICdzaGFsbCcsXG4gIC8vIFByZXBvc2l0aW9uc1xuICAnb2YnLCAnaW4nLCAndG8nLCAnZm9yJywgJ3dpdGgnLCAnb24nLCAnYXQnLCAnZnJvbScsICdieScsICdhYm91dCcsICd1cCcsICdkb3duJyxcbiAgJ291dCcsICdvZmYnLCAnb3ZlcicsICd0aHJvdWdoJywgJ2ludG8nLCAnYWZ0ZXInLCAnYmVmb3JlJywgJ2R1cmluZycsICdhZ2FpbicsXG4gICdoZXJlJywgJ3RoZXJlJywgJ2JldHdlZW4nLCAndW5kZXInLCAnYWJvdmUnLCAnYmVsb3cnLCAnbmVhcicsICdhcm91bmQnLCAnYWdhaW5zdCcsXG4gICd3aXRoaW4nLCAnd2l0aG91dCcsICdhbG9uZycsICdhY3Jvc3MnLCAnYmVoaW5kJywgJ2JleW9uZCcsICdpbnNpZGUnLCAnb3V0c2lkZScsXG4gICd0b3dhcmQnLCAndG93YXJkcycsICd1cG9uJywgJ3ZpYScsICdwZXInLCAnYW1vbmcnLFxuICAvLyBDb25qdW5jdGlvbnNcbiAgJ2FuZCcsICdidXQnLCAnb3InLCAnbm9yJywgJ3lldCcsICdzbycsICdiZWNhdXNlJywgJ3NpbmNlJywgJ3VubGVzcycsICd3aGlsZScsXG4gICdhbHRob3VnaCcsICd0aG91Z2gnLCAnaWYnLCAnd2hldGhlcicsICdhcycsICd0aGFuJywgJ3RoYXQnLCAnd2hlbicsICd3aGVyZScsXG4gIC8vIERlbW9uc3RyYXRpdmVzXG4gICd0aGlzJywgJ3RoZXNlJywgJ3Rob3NlJywgJ3N1Y2gnLFxuICAvLyBRdWFudGlmaWVyc1xuICAnc29tZScsICdhbnknLCAnYWxsJywgJ2VhY2gnLCAnZXZlcnknLCAnYm90aCcsICdmZXcnLCAnbWFueScsICdtdWNoJywgJ21vcmUnLFxuICAnbW9zdCcsICdvdGhlcicsICdhbm90aGVyJywgJ3NhbWUnLCAnb3duJywgJ2Vub3VnaCcsICdvbmx5JywgJ2V2ZW4nLCAnYWxzbycsXG4gICd0b28nLCAndmVyeScsICdyZWFsbHknLCAncXVpdGUnLCAncmF0aGVyJywgJ2p1c3QnLCAnc3RpbGwnLCAnYWxyZWFkeScsICd5ZXQnLFxuICAnYWxtb3N0JywgJ25lYXJseScsICdvbmx5JywgJ3NpbXBseScsICdiYXNpY2FsbHknLCAnbGl0ZXJhbGx5JywgJ2FjdHVhbGx5JyxcbiAgJ29idmlvdXNseScsICdjbGVhcmx5JywgJ2NlcnRhaW5seScsICdkZWZpbml0ZWx5JywgJ2Fic29sdXRlbHknLCAndHJ1bHknLFxuICAnaG9uZXN0bHknLCAnc2VyaW91c2x5JywgJ2Vzc2VudGlhbGx5JywgJ2dlbmVyYWxseScsICd0eXBpY2FsbHknLCAndXN1YWxseScsXG4gICdub3JtYWxseScsICdjb21tb25seScsICdmcmVxdWVudGx5JywgJ29mdGVuJywgJ3JlZ3VsYXJseScsICdhbHdheXMnLCAnbmV2ZXInLFxuICAnZXZlcicsICdzb21ldGltZXMnLCAnb2Z0ZW4nLCAncmFyZWx5JywgJ3NlbGRvbScsXG4gIC8vIEhpZ2gtZnJlcXVlbmN5IHZlcmJzIChzYWZlIHRvIHJlbW92ZSBpbiBjb250ZXh0KVxuICAnZ2V0JywgJ2dvdCcsICdnbycsICdnb2VzJywgJ2dvaW5nJywgJ2dvbmUnLCAnbWFrZScsICdtYWRlJywgJ3Rha2UnLCAndG9vaycsXG4gICdnaXZlJywgJ2dhdmUnLCAna25vdycsICdrbmV3JywgJ3RoaW5rJywgJ3Rob3VnaHQnLCAnc2VlJywgJ3NhdycsICdsb29rJyxcbiAgJ2ZpbmQnLCAndGVsbCcsICdhc2snLCAnbmVlZCcsICd0cnknLCAnZmVlbCcsICdrZWVwJywgJ2xldCcsICdiZWdpbicsICdzdGFydCcsXG4gICdzaG93JywgJ2hlYXInLCAnY2FsbCcsICd0dXJuJywgJ21vdmUnLCAnbGl2ZScsICdob2xkJywgJ2JyaW5nJywgJ2hhcHBlbicsXG4gICd3cml0ZScsICdwcm92aWRlJywgJ3NpdCcsICdzdGFuZCcsICdwYXknLCAnbWVldCcsICdpbmNsdWRlJywgJ2NvbnRpbnVlJyxcbiAgJ3NldCcsICdsZWFybicsICdjaGFuZ2UnLCAnbGVhZCcsICd1bmRlcnN0YW5kJywgJ3dhdGNoJywgJ2ZvbGxvdycsICdjcmVhdGUnLFxuICAnc3BlYWsnLCAncmVhZCcsICdhbGxvdycsICdhZGQnLCAnc3BlbmQnLCAnZ3JvdycsICdvcGVuJywgJ3dhbGsnLCAnb2ZmZXInLFxuICAncmVtZW1iZXInLCAnY29uc2lkZXInLCAnYXBwZWFyJywgJ3dhaXQnLCAnc2VydmUnLCAnc2VuZCcsICdleHBlY3QnLCAnYnVpbGQnLFxuICAnc3RheScsICdmYWxsJywgJ3JlYWNoJywgJ3JlbWFpbicsICdzdWdnZXN0JywgJ3JhaXNlJywgJ3Bhc3MnLCAnc2VsbCcsXG4gICdyZXF1aXJlJywgJ3JlcG9ydCcsICdkZWNpZGUnLCAncHVsbCcsICdyZXR1cm4nLCAnZGV2ZWxvcCcsICdhY2NlcHQnLCAnYXJndWUnLFxuICAnZGllJywgJ2JlbGlldmUnLCAnc2VlbScsICdoYXRlJywgJ2xvdmUnLCAnbGlrZScsICd3YW50JywgJ2hvcGUnLCAnd2lzaCcsXG4gICdzdXBwb3NlJywgJ2ltYWdpbmUnLCAncmVhbGl6ZScsICdub3RpY2UnLCAncmVjb2duaXplJywgJ3N1cHBvc2UnLCAnd29uZGVyJyxcbiAgJ3ByZXRlbmQnLCAncmVmdXNlJywgJ2NsYWltJywgJ2Fubm91bmNlJywgJ2V4cGxhaW4nLCAnZGVzY3JpYmUnLCAnbWVudGlvbicsXG4gICdkaXNjdXNzJywgJ3N1Z2dlc3QnLCAncmVjb21tZW5kJywgJ2FkdmlzZScsICd3YXJuJywgJ3Byb21pc2UnLCAnYWdyZWUnLFxuICAnZGlzYWdyZWUnLCAnYWNjZXB0JywgJ3JlamVjdCcsICdkZW55JywgJ2FkbWl0JywgJ2NvbmZlc3MnLCAnZGVjbGFyZScsXG4gICdkaXNjb3ZlcicsICdpbnZlbnQnLCAnZGVzaWduJywgJ3Byb2R1Y2UnLCAncHJlcGFyZScsICdhcnJhbmdlJywgJ29yZ2FuaXplJyxcbiAgJ21hbmFnZScsICdjb250cm9sJywgJ29wZXJhdGUnLCAncnVuJywgJ2RyaXZlJywgJ2ZseScsICdzd2ltJywgJ3J1bicsICdqdW1wJyxcbiAgJ2NsaW1iJywgJ3B1c2gnLCAncHVsbCcsICdsaWZ0JywgJ2NhcnJ5JywgJ2RlbGl2ZXInLCAncmVjZWl2ZScsICdvYnRhaW4nLFxuICAnYWNoaWV2ZScsICdhY2NvbXBsaXNoJywgJ2NvbXBsZXRlJywgJ2ZpbmlzaCcsICdlbmQnLCAnc3RvcCcsICdwYXVzZScsXG4gICdjb250aW51ZScsICdwcm9jZWVkJywgJ2FkdmFuY2UnLCAncHJvZ3Jlc3MnLCAnaW1wcm92ZScsICdpbmNyZWFzZScsXG4gICdkZWNyZWFzZScsICdyZWR1Y2UnLCAnZXhwYW5kJywgJ2V4dGVuZCcsICdsaW1pdCcsICdyZXN0cmljdCcsICdwcmV2ZW50JyxcbiAgJ2F2b2lkJywgJ2VzY2FwZScsICdwcm90ZWN0JywgJ2RlZmVuZCcsICdhdHRhY2snLCAnZmlnaHQnLCAnd2luJywgJ2xvc2UnLFxuICAnc3VjY2VlZCcsICdmYWlsJywgJ3RyeScsICdhdHRlbXB0JywgJ3ByYWN0aWNlJywgJ3RyYWluJywgJ3N0dWR5JywgJ3RlYWNoJyxcbiAgJ2xlYXJuJywgJ2Rpc2NvdmVyJywgJ2V4cGxvcmUnLCAnc2VhcmNoJywgJ3NlZWsnLCAnaHVudCcsICdjYXRjaCcsICdjYXB0dXJlJyxcbiAgJ3JlbGVhc2UnLCAnZnJlZScsICdzYXZlJywgJ3Jlc2N1ZScsICdoZWxwJywgJ3N1cHBvcnQnLCAnYXNzaXN0JywgJ3NlcnZlJyxcbiAgJ2VtcGxveScsICdoaXJlJywgJ2ZpcmUnLCAncHJvbW90ZScsICdkZW1vdGUnLCAnYXBwb2ludCcsICdlbGVjdCcsICd2b3RlJyxcbiAgJ2Nob29zZScsICdzZWxlY3QnLCAncHJlZmVyJywgJ2RlY2lkZScsICdkZXRlcm1pbmUnLCAnY29uY2x1ZGUnLCAnanVkZ2UnLFxuICAnZXZhbHVhdGUnLCAnYXNzZXNzJywgJ21lYXN1cmUnLCAnY2FsY3VsYXRlJywgJ2NvdW50JywgJ2VzdGltYXRlJywgJ3ByZWRpY3QnLFxuICAnZm9yZWNhc3QnLCAncGxhbicsICdwcmVwYXJlJywgJ29yZ2FuaXplJywgJ2FycmFuZ2UnLCAnc2NoZWR1bGUnLCAnYm9vaycsXG4gICdvcmRlcicsICdyZXF1ZXN0JywgJ2RlbWFuZCcsICdjb21tYW5kJywgJ2RpcmVjdCcsICdpbnN0cnVjdCcsICdndWlkZScsXG4gICdsZWFkJywgJ2ZvbGxvdycsICdhY2NvbXBhbnknLCAnam9pbicsICdsZWF2ZScsICdkZXBhcnQnLCAnYXJyaXZlJywgJ3JldHVybicsXG4gICdlbnRlcicsICdleGl0JywgJ2FwcHJvYWNoJywgJ3dpdGhkcmF3JywgJ3JldHJlYXQnLCAnYWR2YW5jZScsICdtb3ZlJywgJ3NoaWZ0JyxcbiAgJ3RyYW5zZmVyJywgJ3RyYW5zcG9ydCcsICdkZWxpdmVyJywgJ3NlbmQnLCAncmVjZWl2ZScsICdjb2xsZWN0JywgJ2dhdGhlcicsXG4gICdkaXN0cmlidXRlJywgJ3NwcmVhZCcsICdzY2F0dGVyJywgJ2NvbmNlbnRyYXRlJywgJ2ZvY3VzJywgJ2FpbScsICd0YXJnZXQnLFxuICAnaGl0JywgJ21pc3MnLCAnc3RyaWtlJywgJ3RvdWNoJywgJ2dyYWInLCAnaG9sZCcsICdyZWxlYXNlJywgJ2xldCcsICdhbGxvdycsXG4gICdwZXJtaXQnLCAnZW5hYmxlJywgJ2ZvcmNlJywgJ2NvbXBlbCcsICdvYmxpZ2UnLCAncmVxdWlyZScsICduZWVkJywgJ3dhbnQnLFxuICAnZGVzaXJlJywgJ3dpc2gnLCAnaG9wZScsICdleHBlY3QnLCAnYW50aWNpcGF0ZScsICdmZWFyJywgJ2RyZWFkJywgJ3dvcnJ5JyxcbiAgJ2NvbmNlcm4nLCAnaW50ZXJlc3QnLCAnYXR0cmFjdCcsICdhcHBlYWwnLCAncGxlYXNlJywgJ3NhdGlzZnknLCAnZGlzYXBwb2ludCcsXG4gICdzdXJwcmlzZScsICdhbWF6ZScsICdhc3RvbmlzaCcsICdzaG9jaycsICdmcmlnaHRlbicsICdzY2FyZScsICd0ZXJyaWZ5JyxcbiAgJ2NhbG0nLCAncmVsYXgnLCAncmVzdCcsICdzbGVlcCcsICd3YWtlJywgJ3Jpc2UnLCAnc3RhbmQnLCAnc2l0JywgJ2xpZScsXG4gICdsZWFuJywgJ2JlbmQnLCAndHdpc3QnLCAndHVybicsICdzcGluJywgJ3JvdGF0ZScsICdyZXZvbHZlJywgJ29yYml0JyxcbiAgJ2NpcmNsZScsICdzdXJyb3VuZCcsICdlbmNsb3NlJywgJ2NvbnRhaW4nLCAnaW5jbHVkZScsICdleGNsdWRlJywgJ2ludm9sdmUnLFxuICAnYWZmZWN0JywgJ2luZmx1ZW5jZScsICdpbXBhY3QnLCAnY2hhbmdlJywgJ2FsdGVyJywgJ21vZGlmeScsICdhZGp1c3QnLFxuICAnYWRhcHQnLCAndHJhbnNmb3JtJywgJ2NvbnZlcnQnLCAndHJhbnNsYXRlJywgJ2ludGVycHJldCcsICdleHBsYWluJyxcbiAgJ2NsYXJpZnknLCAnc2ltcGxpZnknLCAnY29tcGxpY2F0ZScsICdjb25mdXNlJywgJ3B1enpsZScsICdteXN0aWZ5JyxcbiAgJ3JldmVhbCcsICdleHBvc2UnLCAnaGlkZScsICdjb25jZWFsJywgJ2NvdmVyJywgJ3VuY292ZXInLCAnZGlzY292ZXInLFxuICAnZmluZCcsICdsb2NhdGUnLCAnaWRlbnRpZnknLCAncmVjb2duaXplJywgJ2Rpc3Rpbmd1aXNoJywgJ2RpZmZlcmVudGlhdGUnLFxuICAnY29tcGFyZScsICdjb250cmFzdCcsICdtYXRjaCcsICdmaXQnLCAnc3VpdCcsICd3b3JrJywgJ2Z1bmN0aW9uJywgJ29wZXJhdGUnLFxuICAncGVyZm9ybScsICdleGVjdXRlJywgJ2FjY29tcGxpc2gnLCAnYWNoaWV2ZScsICdhdHRhaW4nLCAncmVhY2gnLCAnZ2FpbicsXG4gICdlYXJuJywgJ3dpbicsICdsb3NlJywgJ3NwZW5kJywgJ2Nvc3QnLCAnY2hhcmdlJywgJ3ByaWNlJywgJ3ZhbHVlJywgJ3dvcnRoJyxcbiAgJ3JpY2gnLCAncG9vcicsICdjaGVhcCcsICdleHBlbnNpdmUnLCAnZnJlZScsICdwYWlkJywgJ2FmZm9yZGFibGUnLCAnY29zdGx5Jyxcbl07XG5cbi8vIEFnZ3Jlc3NpdmUgdGllcjogRXZlcnl0aGluZyArIG1vcmVcbmV4cG9ydCBjb25zdCBFTl9BR0dSRVNTSVZFID0gW1xuICAuLi5FTl9CQUxBTkNFRCxcbiAgLy8gT2JqZWN0IHByb25vdW5zXG4gICdoZScsICdoaW0nLCAnaGlzJywgJ2hpbXNlbGYnLCAnc2hlJywgJ2hlcicsICdoZXJzJywgJ2hlcnNlbGYnLCAnaXQnLCAnaXRzJyxcbiAgJ2l0c2VsZicsICd0aGV5JywgJ3RoZW0nLCAndGhlaXInLCAndGhlaXJzJywgJ3RoZW1zZWx2ZXMnLFxuICAvLyBSZWxhdGl2ZSBwcm9ub3Vuc1xuICAnd2hpY2gnLCAnd2hvJywgJ3dob20nLCAnd2hvc2UnLCAnd2hhdCcsICd3aGVyZScsICd3aGVuJywgJ3doeScsICdob3cnLFxuICAvLyBJbnRlbnNpZmllcnNcbiAgJ2V4dHJlbWVseScsICdpbmNyZWRpYmx5JywgJ2Fic29sdXRlbHknLCAndG90YWxseScsICdjb21wbGV0ZWx5JywgJ3V0dGVybHknLFxuICAnaGlnaGx5JywgJ3BhcnRpY3VsYXJseScsICdlc3BlY2lhbGx5JywgJ2Z1bmRhbWVudGFsbHknLCAnZ2VuZXJhbGx5JyxcbiAgJ3R5cGljYWxseScsICd1c3VhbGx5JywgJ25vcm1hbGx5JywgJ2NvbW1vbmx5JywgJ2ZyZXF1ZW50bHknLCAncmVndWxhcmx5JyxcbiAgJ2NvbnNpc3RlbnRseScsICdjb25zdGFudGx5JywgJ2NvbnRpbnVvdXNseScsICdwZXJwZXR1YWxseScsICdhbHdheXMnLFxuICAnbmV2ZXInLCAnZXZlcicsICdob3dldmVyJywgJ21vcmVvdmVyJywgJ2Z1cnRoZXJtb3JlJywgJ2FkZGl0aW9uYWxseScsXG4gICdlaXRoZXInLCAnbmVpdGhlcicsICdsZWFzdCcsICdsZXNzJywgJ2JleW9uZCcsXG5dO1xuXG5leHBvcnQgY29uc3QgRU5fQkxBQ0tMSVNUID0ge1xuICBnZW50bGU6IEVOX0dFTlRMRSxcbiAgYmFsYW5jZWQ6IEVOX0JBTEFOQ0VELFxuICBhZ2dyZXNzaXZlOiBFTl9BR0dSRVNTSVZFLFxufTtcbiIsICIvKipcbiAqIEdlcm1hbiBmaWxsZXIgd29yZHMgb3JnYW5pemVkIGJ5IGNvbXByZXNzaW9uIGxldmVsLlxuICogU291cmNlOiBMaW5ndWlzdGljIHJlc2VhcmNoLCBOTFAgcmVzb3VyY2VzXG4gKi9cblxuLy8gR2VudGxlIHRpZXI6IE9ubHkgcG9saXRlIGZpbGxlclxuZXhwb3J0IGNvbnN0IERFX0dFTlRMRSA9IFtcbiAgJ2JpdHRlJywgJ2RhbmtlJywgJ2RhbmtlbicsICd2aWVsZW4nLCAnaGVyemxpY2gnLCAnZnJldXQnLFxuICAnXHUwMEU0aG0nLCAnXHUwMEU0aCcsICdobScsICdobW0nLCAnb2gnLCAnYWNoJywgJ25hJywgJ3RqYScsXG5dO1xuXG4vLyBCYWxhbmNlZCB0aWVyOiB+MjUwIGhpZ2gtZnJlcXVlbmN5IEdlcm1hbiB3b3JkcyAoZGVkdXBsaWNhdGVkKVxuZXhwb3J0IGNvbnN0IERFX0JBTEFOQ0VEID0gW1xuICAuLi5ERV9HRU5UTEUsXG4gIC8vIEFydGljbGVzXG4gICdkZXInLCAnZGllJywgJ2RhcycsICdkZW4nLCAnZGVtJywgJ2RlcycsICdlaW4nLCAnZWluZScsICdlaW5lbicsICdlaW5lbScsICdlaW5lcycsXG4gIC8vIFByb25vdW5zXG4gICdpY2gnLCAnbWljaCcsICdtaXInLCAnbWVpbicsICdtZWluZScsICdtZWluZXInLCAndW5zJywgJ3Vuc2VyZScsICd1bnNlcmVyJyxcbiAgJ2R1JywgJ2RpY2gnLCAnZGlyJywgJ2RlaW4nLCAnZGVpbmUnLCAnZXInLCAnaWhuJywgJ2lobScsICdzZWluJywgJ3NlaW5lJyxcbiAgJ3NpZScsICdpaHInLCAnaWhyZScsICdlcycsICd3aXInLCAnZXVjaCcsICdtYW4nLCAnbWVuc2NoJyxcbiAgLy8gQ29wdWxhc1xuICAnaXN0JywgJ3NpbmQnLCAnd2FyJywgJ3dhcmVuJywgJ3NlaW4nLCAnZ2V3ZXNlbicsICd3ZXJkZScsICd3ZXJkZW4nLCAnd3VyZGUnLFxuICAvLyBBdXhpbGlhcmllc1xuICAnaGFiZW4nLCAnaGF0JywgJ2hhYmUnLCAnaGF0dGVuJywgJ2tcdTAwRjZubmVuJywgJ2thbm4nLCAnbVx1MDBGQ3NzZW4nLCAnc29sbGVuJywgJ2RcdTAwRkNyZmVuJyxcbiAgJ21cdTAwRjZnZW4nLCAnbW9jaHRlJywgJ3dvbGxlbicsICd3aWxsJywgJ3dvbGx0ZScsICdtdXNzdGUnLCAnc29sbHRlJywgJ2tvbm50ZScsXG4gIC8vIFByZXBvc2l0aW9uc1xuICAndm9uJywgJ2luJywgJ3p1JywgJ2ZcdTAwRkNyJywgJ21pdCcsICdhbicsICdhdWYnLCAnYmVpJywgJ25hY2gnLCAnXHUwMEZDYmVyJywgJ3VudGVyJyxcbiAgJ2R1cmNoJywgJ3VtJywgJ2JpcycsICdvaG5lJywgJ2F1cycsICd2b3InLCAnendpc2NoZW4nLCAnZ2VnZW4nLCAnc2VpdCcsXG4gICd3XHUwMEU0aHJlbmQnLCAnaGludGVyJywgJ25lYmVuJywgJ29iZXJoYWxiJywgJ3VudGVyaGFsYicsICdpbm5lcmhhbGInLCAnYXVcdTAwREZlcmhhbGInLFxuICAnc3RhdHQnLCAndHJvdHonLCAnd2VnZW4nLCAnZ2VtXHUwMEU0XHUwMERGJywgJ2xhdXQnLCAnZW50bGFuZycsICdlbnRnZWdlbicsICdmZXJuJyxcbiAgJ2plbnNlaXRzJywgJ2tuYXAnLCAnblx1MDBGNnJkbGljaCcsICdcdTAwRjZzdGxpY2gnLCAnc1x1MDBGQ2RsaWNoJywgJ3dlc3RsaWNoJywgJ2FiJyxcbiAgLy8gQ29uanVuY3Rpb25zXG4gICd1bmQnLCAnb2RlcicsICdhYmVyJywgJ2Rlbm4nLCAnc29uZGVybicsICd3ZWlsJywgJ2RhJywgJ29id29obCcsICd3ZW5uJyxcbiAgJ2ZhbGxzJywgJ2RhbWl0JywgJ2Jldm9yJywgJ25hY2hkZW0nLCAnc29iYWxkJywgJ2FscycsICd3aWUnLCAnZGFzcycsICdvYicsXG4gICdlbnR3ZWRlcicsICdub2NoJywgJ3Nvd29obCcsICd3ZWRlcicsXG4gIC8vIERlbW9uc3RyYXRpdmVzXG4gICdkaWVzZXInLCAnZGllc2UnLCAnZGllc2VzJywgJ2RpZXNlbScsICdkaWVzZW4nLCAnamVuZXInLCAnamVuZScsICdzb2xjaCcsXG4gICdzb2xjaGVyJywgJ3NlbGJzdCcsICdzZWxiZXInLCAnZWJlbicsICdnZXJhZGUnLCAnblx1MDBFNG1saWNoJyxcbiAgLy8gUXVhbnRpZmllcnNcbiAgJ2FsbGUnLCAnYWxsZXMnLCAndmllbCcsICd2aWVsZScsICd2aWVsZXInLCAnbWVocicsICdtZWhyZXJlJywgJ3dlbmlnJyxcbiAgJ3dlbmlnZScsICdtYW5jaCcsICdtYW5jaGUnLCAnamVkZXInLCAnamVkZScsICdqZWRlcycsICduaWNodHMnLCAnZXR3YXMnLFxuICAnaXJnZW5kJywgJ2lyZ2VuZGVpbicsICdlaW5pZ2UnLCAndmVyc2NoaWVkZW5lJywgJ3phaGxyZWljaGUnLCAna2VpbmUnLFxuICAna2VpbmVyJywgJ2tlaW5lcycsICduaWVtYW5kJyxcbiAgLy8gSW50ZW5zaWZpZXJzL0ZpbGxlcnNcbiAgJ2F1Y2gnLCAnc28nLCAnYWxzbycsICdoYWx0JywgJ21hbCcsICdkb2NoJywgJ2VpZ2VudGxpY2gnLCAndGF0c1x1MDBFNGNobGljaCcsXG4gICd3aXJrbGljaCcsICdzZWhyJywgJ3ppZW1saWNoJywgJ3NjaG9uJywgJ251cicsICdhbGxlaW4nLCAnaW1tZXInLFxuICAnbmllJywgJ25pZW1hbHMnLCAnb2Z0JywgJ21hbmNobWFsJywgJ2hcdTAwRTR1ZmlnJywgJ3NlbHRlbicsXG4gICd2aWVsbGVpY2h0JywgJ3dhaHJzY2hlaW5saWNoJywgJ3NpY2hlcicsICdrbGFyJywgJ25hdFx1MDBGQ3JsaWNoJywgJ2ZyZWlsaWNoJyxcbiAgJ1x1MDBGQ2JyaWdlbnMnLCAnYWxsZXJkaW5ncycsICdqZWRvY2gnLCAnc29uc3QnLCAnZGFubicsICdqZXR6dCcsICdoZXV0ZScsXG4gICdtb3JnZW4nLCAnZ2VzdGVybicsICdoaWVyJywgJ2RvcnQnLCAnZGEnLCAnd29oaW4nLCAnaGVyJywgJ3dlZycsICdoaW4nLFxuICAncmFuJywgJ3J1bScsICdoZXJ1bScsICdkYWJlaScsICdkYXZvbicsICdkYXJ1bScsICdkYW1pdCcsICdkYWZcdTAwRkNyJyxcbiAgJ2RhZ2VnZW4nLCAnZGF6dScsICdkYWhlcicsICdkYXJcdTAwRkNiZXInLCAnZGFydW50ZXInLCAnZGF6d2lzY2hlbicsICdkcmFuJyxcbiAgJ2RyYXVmJywgJ2RyaW4nLCAnZHJcdTAwRkNiZXInLCAnZHJ1bnRlcicsICdqYScsICduZWluJyxcbiAgLy8gSGlnaC1mcmVxdWVuY3kgdmVyYnNcbiAgJ21hY2hlbicsICdtYWNodCcsICdzYWdlbicsICdzYWd0JywgJ3NhZ3RlJywgJ2dlYmVuJywgJ2dpYnQnLCAnZ2FiJyxcbiAgJ25laG1lbicsICduaW1tdCcsICduYWhtJywgJ2ZpbmRlbicsICdmaW5kZXQnLCAnZmFuZCcsICd3aXNzZW4nLCAnd2VpXHUwMERGJyxcbiAgJ3d1c3N0ZScsICdkZW5rZW4nLCAnZGVua3QnLCAnZGFjaHRlJywgJ3NlaGVuJywgJ3NpZWh0JywgJ3NhaCcsICdrb21tZW4nLFxuICAna29tbXQnLCAna2FtJywgJ2dlaGVuJywgJ2dlaHQnLCAnZ2luZycsICdzdGVoZW4nLCAnc3RlaHQnLCAnbGllZ2VuJywgJ2xpZWd0JyxcbiAgJ2xhc3NlbicsICdsXHUwMEU0c3N0JywgJ2hhbHRlbicsICdoXHUwMEU0bHQnLCAnaGllbHQnLCAnYnJpbmdlbicsICdicmluZ3QnLCAnYnJhY2h0ZScsXG4gICdibGVpYmVuJywgJ2JsZWlidCcsICdibGllYicsICdmcmFnZW4nLCAnZnJhZ3QnLCAnZnJhZ3RlJywgJ2FudHdvcnRlbicsXG4gICdhbnR3b3J0ZXQnLCAnemVpZ2VuJywgJ3plaWd0JywgJ3plaWd0ZScsICdzcHJlY2hlbicsICdzcHJpY2h0JywgJ3NwcmFjaCcsXG4gICdoXHUwMEY2cmVuJywgJ2hcdTAwRjZydCcsICdoXHUwMEY2cnRlJywgJ2xlcm5lbicsICdsZXJudCcsICdsZXJudGUnLCAndmVyc3RlaGVuJywgJ3ZlcnN0ZWh0JyxcbiAgJ3ZlcnN0YW5kJywgJ2JlZ2lubmVuJywgJ2JlZ2lubnQnLCAnYmVnYW5uJywgJ2VuZGVuJywgJ2VuZGV0JywgJ2VuZGV0ZScsXG4gICdhcmJlaXRlbicsICdhcmJlaXRldCcsICdhcmJlaXRldGUnLCAnbGViZW4nLCAnbGVidCcsICdsZWJ0ZScsICdzcGllbGVuJyxcbiAgJ3NwaWVsdCcsICdzcGllbHRlJywgJ3NjaGF1ZW4nLCAnc2NoYXV0JywgJ3NjaGF1dGUnLCAnc2NocmVpYmVuJywgJ3NjaHJlaWJ0JyxcbiAgJ3NjaHJpZWInLCAnbGVzZW4nLCAnbGllc3QnLCAnbGFzJywgJ21laW5lbicsICdtZWludCcsICdtZWludGUnLCAnZ2xhdWJlbicsXG4gICdnbGF1YnQnLCAnZ2xhdWJ0ZScsICdob2ZmZW4nLCAnaG9mZnQnLCAnaG9mZnRlJywgJ2JyYXVjaGVuJywgJ2JyYXVjaHQnLFxuICAnYnJhdWNodGUnLCAnZGFyZicsICdkdXJmdGUnLCAnc29sbCcsICdtdXNzJywgJ21hZycsICdrZW5uZW4nLCAna2VubnQnLFxuICAna2FubnRlJywgJ2hlaVx1MDBERmVuJywgJ2hlaVx1MDBERnQnLCAnaGllXHUwMERGJyxcbl07XG5cbi8vIEFnZ3Jlc3NpdmUgdGllciAoZGVkdXBsaWNhdGVkKVxuZXhwb3J0IGNvbnN0IERFX0FHR1JFU1NJVkUgPSBbXG4gIC4uLkRFX0JBTEFOQ0VELFxuICAnaWhuZW4nLCAnaWhyZXInLCAnc2VpbmVuJywgJ2RlcmVuJywgJ2Rlc3NlbicsICd3ZWxjaGVyJywgJ3dlbGNoZScsICd3ZXInLFxuICAnd2FzJywgJ3dvJywgJ3dpZScsICdnZW5hdScsXG5dO1xuXG5leHBvcnQgY29uc3QgREVfQkxBQ0tMSVNUID0ge1xuICBnZW50bGU6IERFX0dFTlRMRSxcbiAgYmFsYW5jZWQ6IERFX0JBTEFOQ0VELFxuICBhZ2dyZXNzaXZlOiBERV9BR0dSRVNTSVZFLFxufTtcbiIsICIvKipcbiAqIE11bHRpLWxhbmd1YWdlIGRpY3Rpb25hcnkgaW5kZXguXG4gKiBFeHBvcnRzIGFsbCBsYW5ndWFnZS1zcGVjaWZpYyBmaWxsZXIgd29yZCBkaWN0aW9uYXJpZXMuXG4gKi9cblxuZXhwb3J0IHsgRU5fQkxBQ0tMSVNUIH0gZnJvbSAnLi9lbi1maWxsZXInO1xuZXhwb3J0IHsgREVfQkxBQ0tMSVNUIH0gZnJvbSAnLi9kZS1maWxsZXInO1xuXG4vLyBUeXBlIGRlZmluaXRpb25zIGZvciBsYW5ndWFnZSBjb2Rlc1xuZXhwb3J0IHR5cGUgTGFuZ3VhZ2VDb2RlID0gJ2VuJyB8ICdkZSc7XG5cbi8vIE1hcCBvZiBsYW5ndWFnZSBjb2RlIHRvIGJsYWNrbGlzdCBvYmplY3RcbmltcG9ydCB7IEVOX0JMQUNLTElTVCB9IGZyb20gJy4vZW4tZmlsbGVyJztcbmltcG9ydCB7IERFX0JMQUNLTElTVCB9IGZyb20gJy4vZGUtZmlsbGVyJztcblxuZXhwb3J0IGNvbnN0IExBTkdVQUdFX0RJQ1RJT05BUklFUzogUmVjb3JkPExhbmd1YWdlQ29kZSwgeyBnZW50bGU6IHN0cmluZ1tdOyBiYWxhbmNlZDogc3RyaW5nW107IGFnZ3Jlc3NpdmU6IHN0cmluZ1tdIH0+ID0ge1xuICBlbjogRU5fQkxBQ0tMSVNULFxuICBkZTogREVfQkxBQ0tMSVNULFxufTtcblxuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9MQU5HVUFHRVM6IExhbmd1YWdlQ29kZVtdID0gWydlbicsICdkZSddO1xuIiwgIi8vID09PT09PT09PT09PT09PT09PT09IE1VTFRJLUxBTkdVQUdFIFNVUFBPUlQgKEVOL0RFIE9OTFkpID09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7XG4gIExBTkdVQUdFX0RJQ1RJT05BUklFUyxcbiAgdHlwZSBMYW5ndWFnZUNvZGUsXG4gIFNVUFBPUlRFRF9MQU5HVUFHRVMsXG59IGZyb20gJy4vZGljdGlvbmFyaWVzJztcblxuZXhwb3J0IHR5cGUgeyBMYW5ndWFnZUNvZGUgfTtcblxuZXhwb3J0IHR5cGUgQ29tcHJlc3Npb25MZXZlbCA9IFwiZ2VudGxlXCIgfCBcImJhbGFuY2VkXCIgfCBcImFnZ3Jlc3NpdmVcIjtcblxuLy8gPT09PT09PT09PT09PT09PT09PT0gU1RBVElTVElDUyBUUkFDS0lORyA9PT09PT09PT09PT09PT09PT09PVxuXG5pbnRlcmZhY2UgQ29tcHJlc3Npb25TdGF0cyB7XG4gIHRvdGFsQ29tcHJlc3Npb25zOiBudW1iZXI7XG4gIHRvdGFsQ2hhcnNPcmlnaW5hbDogbnVtYmVyO1xuICB0b3RhbENoYXJzQ29tcHJlc3NlZDogbnVtYmVyO1xuICBsYXN0VXBkYXRlZDogc3RyaW5nO1xufVxuXG5sZXQgc3RhdHM6IENvbXByZXNzaW9uU3RhdHMgPSB7XG4gIHRvdGFsQ29tcHJlc3Npb25zOiAwLFxuICB0b3RhbENoYXJzT3JpZ2luYWw6IDAsXG4gIHRvdGFsQ2hhcnNDb21wcmVzc2VkOiAwLFxuICBsYXN0VXBkYXRlZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT0gTEFOR1VBR0UgREVURUNUSU9OIChFTi9ERSBPTkxZKSAtIElNUFJPVkVEID09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGRldGVjdExhbmd1YWdlKHRleHQ6IHN0cmluZyk6IExhbmd1YWdlQ29kZSB7XG4gIGNvbnN0IHdvcmRzID0gdGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9cXGJbYS16XHUwMEU0XHUwMEY2XHUwMEZDXHUwMERGXXszLH1cXGIvZykgfHwgW107XG4gIFxuICAvLyBFeHBhbmRlZCBFbmdsaXNoIGluZGljYXRvcnMgd2l0aCB0ZWNobmljYWwgdGVybXMgKGFzIFNldCBmb3IgTygxKSBsb29rdXApXG4gIGNvbnN0IGVuSW5kaWNhdG9ycyA9IG5ldyBTZXQoW1xuICAgICd0aGUnLCAnYScsICdhbicsICdpcycsICdhcmUnLCAnd2FzJywgJ3dlcmUnLCAnYmUnLCAnYmVlbicsICdoYXZlJywgJ2hhcycsICdoYWQnLCBcbiAgICAnZG8nLCAnZG9lcycsICdkaWQnLCAnd2lsbCcsICd3b3VsZCcsICdjb3VsZCcsICdzaG91bGQnLCAnbWF5JywgJ21pZ2h0JywgJ211c3QnLFxuICAgICd0aGlzJywgJ3RoYXQnLCAndGhlc2UnLCAndGhvc2UnLCAnaXQnLCAnaXRzJywgJ3RoZXknLCAndGhlbScsICd0aGVpcicsICd0aGVyZScsXG4gICAgJ2hlcmUnLCAnd2hhdCcsICd3aGVuJywgJ3doZXJlJywgJ3dobycsICdob3cnLCAnd2h5JywgJ3doaWNoJywgJ25vdCcsICdubycsICdub3InLFxuICAgICdidXQnLCAnYW5kJywgJ29yJywgJ2ZvcicsICdzbycsICdpZicsICd0aGVuJywgJ3RoYW4nLCAndG9vJywgJ3ZlcnknLCAnanVzdCcsXG4gICAgJ2Fib3V0JywgJ2Fib3ZlJywgJ2FmdGVyJywgJ2FnYWluJywgJ2FsbCcsICdhbHNvJywgJ2FueScsICdiZWNhdXNlJywgJ2JlZm9yZScsXG4gICAgJ2JldHdlZW4nLCAnYm90aCcsICdjYW4nLCAnZWFjaCcsICdmcm9tJywgJ2Z1cnRoZXInLCAnZ2V0JywgJ2dvdCcsICdoaW0nLCAnaGlzJyxcbiAgICAnaW50bycsICdtb3JlJywgJ21vc3QnLCAnb3RoZXInLCAnb3VyJywgJ291dCcsICdvdmVyJywgJ293bicsICdzYW1lJywgJ3NvbWUnLFxuICAgICdzdWNoJywgJ3Rocm91Z2gnLCAndW5kZXInLCAndW50aWwnLCAndXAnLCAnd2hpbGUnLCAnY29kZScsICdmdW5jdGlvbicsICdyZXR1cm4nLFxuICAgICdjbGFzcycsICdpbXBvcnQnLCAnZXhwb3J0JywgJ2NvbnN0JywgJ2xldCcsICd2YXInLCAnaWYnLCAnZWxzZScsICdmb3InLCAnd2hpbGUnLFxuICBdKTtcbiAgXG4gIC8vIEV4cGFuZGVkIEdlcm1hbiBpbmRpY2F0b3JzIHdpdGggdGVjaG5pY2FsIHRlcm1zIChhcyBTZXQgZm9yIE8oMSkgbG9va3VwKVxuICBjb25zdCBkZUluZGljYXRvcnMgPSBuZXcgU2V0KFtcbiAgICAnZGVyJywgJ2RpZScsICdkYXMnLCAnZGVuJywgJ2RlbScsICdkZXMnLCAnZWluJywgJ2VpbmUnLCAnZWluZXInLCAnZWluZW0nLCAnZWluZXMnLFxuICAgICdpY2gnLCAnbWljaCcsICdtaXInLCAnZHUnLCAnZGljaCcsICdkaXInLCAnZXInLCAnc2llJywgJ2VzJywgJ3dpcicsICd1bnMnLCAnaWhyJywgXG4gICAgJ2V1Y2gnLCAnaXN0JywgJ3NpbmQnLCAnd2FyJywgJ3dhcmVuJywgJ3NlaW4nLCAnaGFiZW4nLCAnaGF0JywgJ2hhYmUnLCAnd2VyZGVuJywgXG4gICAgJ3dpcmQnLCAnd1x1MDBGQ3JkZScsICd1bmQnLCAnb2RlcicsICdhYmVyJywgJ25pY2h0JywgJ2F1Y2gnLCAnc2VocicsICd2aWVsJywgJ21laHInLCBcbiAgICAnYWxsZScsICdhbGxlcycsICdkaWVzZXInLCAnZGllc2UnLCAnZGllc2VzJywgJ2plZGVyJywgJ2plZGUnLCAnamVkZXMnLCAna2VpbicsIFxuICAgICdrZWluZScsICdtaXQnLCAnbmFjaCcsICd2b24nLCAnenUnLCAnYmVpJywgJ2F1ZicsICdhdXMnLCAnaW4nLCAnYW4nLCAnYmVpJyxcbiAgICAnZlx1MDBGQ3InLCAndW0nLCAnZ2VnZW4nLCAnb2huZScsICdkdXJjaCcsICd3aWUnLCAnd2FzJywgJ3dlbm4nLCAnd2VpbCcsICdkYVx1MDBERicsXG4gICAgJ3NvbGx0ZScsICdrXHUwMEY2bm50ZScsICdtXHUwMEZDc3N0ZScsICdkYXJmJywgJ2RcdTAwRkNyZmUnLCAnbWFnJywgJ21cdTAwRjZnZScsICd3aWxsJywgJ3dvbGxlbicsXG4gIF0pO1xuICBcbiAgbGV0IGVuQ291bnQgPSAwLCBkZUNvdW50ID0gMDtcbiAgXG4gIGZvciAoY29uc3Qgd29yZCBvZiB3b3Jkcykge1xuICAgIGlmIChlbkluZGljYXRvcnMuaGFzKHdvcmQpKSBlbkNvdW50Kys7XG4gICAgZWxzZSBpZiAoZGVJbmRpY2F0b3JzLmhhcyh3b3JkKSkgZGVDb3VudCsrO1xuICB9XG4gIFxuICByZXR1cm4gZGVDb3VudCA+IGVuQ291bnQgPyAnZGUnIDogJ2VuJztcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gVFJPR0xPRFlURSBDTEFTUyA9PT09PT09PT09PT09PT09PT09PVxuXG4vLyBQcmUtY29tcGlsZWQgcGhyYXNlIHN0cnVjdHVyZSBmb3IgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uXG5pbnRlcmZhY2UgQ29tcGlsZWRQaHJhc2Uge1xuICBwaHJhc2U6IHN0cmluZztcbiAgcmVwbGFjZW1lbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVnZXg6IFJlZ0V4cDtcbn1cblxuZXhwb3J0IGNsYXNzIFRyb2dsb2R5dGUge1xuICBwcml2YXRlIHBocmFzZXNBbmRMb2dpYzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcHJpdmF0ZSBzeW5vbnltczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcHJpdmF0ZSBjYWNoZWRCbGFja2xpc3RzOiBNYXA8TGFuZ3VhZ2VDb2RlLCBNYXA8Q29tcHJlc3Npb25MZXZlbCwgU2V0PHN0cmluZz4+PjtcbiAgcHJpdmF0ZSByZWFkb25seSBNQVhfQ09NUFJFU1NJT05TX0JFRk9SRV9SRVNFVCA9IDEwMDAwO1xuICBwcml2YXRlIHJlYWRvbmx5IE1BWF9DSEFSU19CRUZPUkVfUkVTRVQgPSAxMF8wMDBfMDAwO1xuICBcbiAgLy8gUHJlLXNvcnRlZCBwaHJhc2VzIHdpdGggcHJlLWNvbXBpbGVkIHJlZ2V4ZXMgKFBFUkZPUk1BTkNFIEZJWClcbiAgcHJpdmF0ZSBjb21waWxlZFBocmFzZXM6IENvbXBpbGVkUGhyYXNlW107XG5cbiAgY29uc3RydWN0b3IoZGljdGlvbmFyaWVzOiB7XG4gICAgcGhyYXNlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgICBibGFja2xpc3Q6IHN0cmluZ1tdO1xuICAgIHN5bm9ueW1zPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgfSkge1xuICAgIHRoaXMucGhyYXNlc0FuZExvZ2ljID0geyAuLi5kaWN0aW9uYXJpZXMucGhyYXNlcyB9O1xuICAgIHRoaXMuc3lub255bXMgPSBkaWN0aW9uYXJpZXMuc3lub255bXMgfHwge307XG4gICAgXG4gICAgLy8gUHJlLXNvcnQgcGhyYXNlcyBieSBsZW5ndGggKGxvbmdlc3QgZmlyc3QpIGFuZCBwcmUtY29tcGlsZSByZWdleGVzXG4gICAgY29uc3Qgd29yZENoYXIgPSBcImEtekEtWjAtOV8nXHUwMERGXHUwMEU0XHUwMEY2XHUwMEZDXHUwMEM0XHUwMEQ2XHUwMERDXCI7XG4gICAgdGhpcy5jb21waWxlZFBocmFzZXMgPSBPYmplY3QuZW50cmllcyh0aGlzLnBocmFzZXNBbmRMb2dpYylcbiAgICAgIC5maWx0ZXIoKFtwaHJhc2VdKSA9PiBwaHJhc2UgJiYgcGhyYXNlLmxlbmd0aCA+PSAyKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGJbMF0ubGVuZ3RoIC0gYVswXS5sZW5ndGgpXG4gICAgICAubWFwKChbcGhyYXNlLCByZXBsYWNlbWVudF0pID0+ICh7XG4gICAgICAgIHBocmFzZSxcbiAgICAgICAgcmVwbGFjZW1lbnQsXG4gICAgICAgIHJlZ2V4OiBuZXcgUmVnRXhwKGAoPzwhWyR7d29yZENoYXJ9XSkke3RoaXMuZXNjYXBlUmVnZXgocGhyYXNlKX0oPyFbJHt3b3JkQ2hhcn1dKWAsICdnaScpXG4gICAgICB9KSk7XG4gICAgXG4gICAgdGhpcy5jYWNoZWRCbGFja2xpc3RzID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgbGFuZ0NvZGUgb2YgU1VQUE9SVEVEX0xBTkdVQUdFUykge1xuICAgICAgY29uc3QgbGFuZ0RpY3QgPSBMQU5HVUFHRV9ESUNUSU9OQVJJRVNbbGFuZ0NvZGVdO1xuICAgICAgY29uc3QgbGV2ZWxNYXAgPSBuZXcgTWFwPENvbXByZXNzaW9uTGV2ZWwsIFNldDxzdHJpbmc+PigpO1xuICAgICAgXG4gICAgICBbJ2dlbnRsZScsICdiYWxhbmNlZCcsICdhZ2dyZXNzaXZlJ10uZm9yRWFjaCgobGV2ZWwpID0+IHtcbiAgICAgICAgY29uc3QgbHZsID0gbGV2ZWwgYXMgQ29tcHJlc3Npb25MZXZlbDtcbiAgICAgICAgbGV2ZWxNYXAuc2V0KGx2bCwgbmV3IFNldChsYW5nRGljdFtsdmxdLm1hcCh3ID0+IHcudG9Mb3dlckNhc2UoKSkpKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhY2hlZEJsYWNrbGlzdHMuc2V0KGxhbmdDb2RlLCBsZXZlbE1hcCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlc2NhcGVSZWdleChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3BlY2lhbENoYXJzID0gWydcXFxcJywgJ14nLCAnJCcsICcqJywgJysnLCAnPycsICcoJywgJyknLCAnLicsICd7JywgJ30nLCAnfCcsICdbJywgJ10nLCAnLyddO1xuICAgIGxldCByZXN1bHQgPSBzdHI7XG4gICAgZm9yIChjb25zdCBjaCBvZiBzcGVjaWFsQ2hhcnMpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zcGxpdChjaCkuam9pbignXFxcXCcgKyBjaCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjb21wcmVzcyhwcm9tcHQ6IHN0cmluZywgb3B0aW9ucz86IHsgXG4gICAgbGV2ZWw/OiBDb21wcmVzc2lvbkxldmVsO1xuICAgIHByb3RlY3RVcmxzPzogYm9vbGVhbjtcbiAgICBwcm90ZWN0TnVtYmVycz86IGJvb2xlYW47XG4gICAgcHJvdGVjdEhlYWRlcnM/OiBib29sZWFuO1xuICAgIHByb3RlY3RGaWxlUGF0aHM/OiBib29sZWFuO1xuICAgIGxhbmd1YWdlPzogTGFuZ3VhZ2VDb2RlO1xuICB9KTogc3RyaW5nIHtcbiAgICAvLyBJTlBVVCBWQUxJREFUSU9OIChTRUNVUklUWS9TVEFCSUxJVFkpXG4gICAgaWYgKCFwcm9tcHQgfHwgdHlwZW9mIHByb21wdCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnNvbGUud2FybignW1Ryb2dsb2R5dGVdIEludmFsaWQgaW5wdXQ6IHByb21wdCBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICAgICAgcmV0dXJuIHByb21wdCB8fCAnJztcbiAgICB9XG5cbiAgICBjb25zdCBNQVhfSU5QVVRfTEVOR1RIID0gMV8wMDBfMDAwOyAvLyAxTUIgbGltaXQgdG8gcHJldmVudCBEb1NcbiAgICBpZiAocHJvbXB0Lmxlbmd0aCA+IE1BWF9JTlBVVF9MRU5HVEgpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW1Ryb2dsb2R5dGVdIElucHV0IGV4Y2VlZHMgJHtNQVhfSU5QVVRfTEVOR1RIfSBjaGFyIGxpbWl0LCB0cnVuY2F0aW5nLi4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGV2ZWwgPSBvcHRpb25zPy5sZXZlbCA/PyBcImJhbGFuY2VkXCI7XG4gICAgY29uc3QgcHJvdGVjdFVybHMgPSBvcHRpb25zPy5wcm90ZWN0VXJscyA/PyB0cnVlO1xuICAgIGNvbnN0IHByb3RlY3ROdW1iZXJzID0gb3B0aW9ucz8ucHJvdGVjdE51bWJlcnMgPz8gdHJ1ZTtcbiAgICBjb25zdCBwcm90ZWN0SGVhZGVycyA9IG9wdGlvbnM/LnByb3RlY3RIZWFkZXJzID8/IHRydWU7XG4gICAgY29uc3QgcHJvdGVjdEZpbGVQYXRocyA9IG9wdGlvbnM/LnByb3RlY3RGaWxlUGF0aHMgPz8gdHJ1ZTtcbiAgICBcbiAgICBsZXQgbGFuZ0NvZGU6IExhbmd1YWdlQ29kZTtcbiAgICBpZiAob3B0aW9ucz8ubGFuZ3VhZ2UpIHtcbiAgICAgIGxhbmdDb2RlID0gb3B0aW9ucy5sYW5ndWFnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFuZ0NvZGUgPSBkZXRlY3RMYW5ndWFnZShwcm9tcHQpO1xuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyhgW1Ryb2dsb2R5dGVdIERldGVjdGVkIGxhbmd1YWdlOiAke2xhbmdDb2RlfSBmb3IgcHJvbXB0OiBcIiR7cHJvbXB0LnN1YnN0cmluZygwLCA4MCl9Li4uXCJgKTtcblxuICAgIGxldCB0ZXh0ID0gcHJvbXB0O1xuICAgIGNvbnN0IHByb3RlY3RlZEl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3QgbGV2ZWxCbGFja2xpc3RNYXAgPSB0aGlzLmNhY2hlZEJsYWNrbGlzdHMuZ2V0KGxhbmdDb2RlKTtcbiAgICBpZiAoIWxldmVsQmxhY2tsaXN0TWFwKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtUcm9nbG9keXRlXSBVbmtub3duIGxhbmd1YWdlIGNvZGU6ICR7bGFuZ0NvZGV9LCBmYWxsaW5nIGJhY2sgdG8gRW5nbGlzaGApO1xuICAgICAgbGFuZ0NvZGUgPSAnZW4nO1xuICAgIH1cbiAgICBjb25zdCBsZXZlbEJsYWNrbGlzdCA9IHRoaXMuY2FjaGVkQmxhY2tsaXN0cy5nZXQobGFuZ0NvZGUgfHwgJ2VuJykhLmdldChsZXZlbCkhO1xuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gUFJPVEVDVElPTiBQSEFTRSA9PT09PT09PT09PT09PT09PT09PVxuICAgIGxldCBwbGFjZWhvbGRlckNvdW50ZXIgPSAwO1xuICAgIGNvbnN0IE1BWF9QTEFDRUhPTERFUlMgPSAweEZGRkZGOyAvLyB+MSBtaWxsaW9uIHBsYWNlaG9sZGVycyBiZWZvcmUgb3ZlcmZsb3dcbiAgICBjb25zdCBCUkVBS19FVkVOX0xFTkdUSCA9IDg7IC8vIE1pbmltdW0gbGVuZ3RoIGZvciBwcm90ZWN0aW9uIHRvIGJlIHdvcnRod2hpbGVcbiAgICBcbiAgICBjb25zdCBwcm90ZWN0SWZXb3J0aHdoaWxlID0gKG1hdGNoOiBzdHJpbmcsIG1pbkxlbjogbnVtYmVyID0gQlJFQUtfRVZFTl9MRU5HVEgpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKG1hdGNoLmxlbmd0aCA8PSBtaW5MZW4pIHJldHVybiBtYXRjaDtcbiAgICAgIC8vIENoZWNrIGZvciBvdmVyZmxvdyBiZWZvcmUgcHJvdGVjdGluZ1xuICAgICAgaWYgKHBsYWNlaG9sZGVyQ291bnRlciA+PSBNQVhfUExBQ0VIT0xERVJTKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW1Ryb2dsb2R5dGVdIFx1MjZBMFx1RkUwRiBQbGFjZWhvbGRlciBsaW1pdCByZWFjaGVkLCBza2lwcGluZyBwcm90ZWN0aW9uLicpO1xuICAgICAgICByZXR1cm4gbWF0Y2g7IC8vIFJldHVybiBvcmlnaW5hbCB3aXRob3V0IHByb3RlY3Rpb25cbiAgICAgIH1cbiAgICAgIHByb3RlY3RlZEl0ZW1zLnB1c2gobWF0Y2gpO1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCgweEUwMDAgKyBwbGFjZWhvbGRlckNvdW50ZXIrKyk7XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gICAgfTtcblxuICAgIC8vIDEuIFByb3RlY3QgY29kZSBibG9ja3NcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oYGBgW1xcc1xcU10qP2BgYHxgW15gXStgKS9nLCAobWF0Y2gpID0+IHtcbiAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCAxNSk7XG4gICAgfSk7XG5cbiAgICAvLyAyLiBQcm90ZWN0IFVSTHNcbiAgICBpZiAocHJvdGVjdFVybHMpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhodHRwcz86XFwvXFwvW15cXHM8PigpXCInXFxcXFxcW1xcXV0rfHd3d1xcLlteXFxzPD4oKVwiJ1xcXFxcXFtcXF1dKykvZ2ksIChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvdGVjdElmV29ydGh3aGlsZShtYXRjaCwgMjApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gMy4gUHJvdGVjdCB2ZXJzaW9uIG51bWJlcnMgYW5kIHNvZnR3YXJlIG5hbWVzIHdpdGggZG90c1xuICAgIGlmIChwcm90ZWN0TnVtYmVycykge1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxiKHZcXGQrXFwuXFxkKyg/OlxcLlxcZCspPylcXGIvZywgcHJvdGVjdElmV29ydGh3aGlsZSk7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXGIoW0EtWl1bYS16QS1aMC05XSpcXC5bYS16QS1aMC05XSspXFxiL2csIChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvdGVjdElmV29ydGh3aGlsZShtYXRjaCwgNik7XG4gICAgICB9KTtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLygjXFxkezMsfSkvZywgcHJvdGVjdElmV29ydGh3aGlsZSk7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17MTJ9KS9naSwgcHJvdGVjdElmV29ydGh3aGlsZSk7XG4gICAgfVxuXG4gICAgLy8gNC4gUHJvdGVjdCBtYXJrZG93biBoZWFkZXJzXG4gICAgaWYgKHByb3RlY3RIZWFkZXJzKSB7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXnxcXG4pKCN7MSw2fVxccysuKykvZywgKG1hdGNoLCBuZXdsaW5lLCBoZWFkZXIpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdGVjdGVkSGVhZGVyID0gcHJvdGVjdElmV29ydGh3aGlsZShoZWFkZXIsIDEyKTtcbiAgICAgICAgcmV0dXJuIGAke25ld2xpbmV9JHtwcm90ZWN0ZWRIZWFkZXJ9YDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIDUuIFByb3RlY3QgZmlsZSBwYXRocyAtIE1VU1QgY29tZSBiZWZvcmUgc3lub255bSByZXBsYWNlbWVudCFcbiAgICBpZiAocHJvdGVjdEZpbGVQYXRocykge1xuICAgICAgLy8gV2luZG93cyBwYXRocyAoQzpcXC4uLikgd2l0aCBvcHRpb25hbCBmaWxlIGV4dGVuc2lvblxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKFtBLVphLXpdOltcXC9cXFxcXVtePD5cInw/Klxcclxcbl17MTAsfSkoPz1bXFxzLiw7OiE/KVxcXV18JCkvZywgKG1hdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCAxNSk7XG4gICAgICB9KTtcbiAgICAgIC8vIFJlbGF0aXZlIGZpbGUgcGF0aHMgRklSU1QgKC4vZmlsZS5leHQgb3IgLi4vZGlyL2ZpbGUuZXh0KSAtIGJlZm9yZSBhYnNvbHV0ZSFcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhcXC5cXC4/XFwvW15cXHM8PlwifD8qXSspKD89W1xccy4sOzohPylcXF1dfCQpL2csIChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvdGVjdElmV29ydGh3aGlsZShtYXRjaCwgOCk7XG4gICAgICB9KTtcbiAgICAgIC8vIExpbnV4L21hY09TIGFic29sdXRlIHBhdGhzICgvcGF0aC90by9maWxlLmV4dCkgLSBpbmNsdWRlIC8gaW4gY2hhciBjbGFzcyFcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhcXC9bXlxcczw+XCJ8PypdKykoPz1bXFxzLiw7OiE/KVxcXV18JCkvZywgKG1hdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCA4KTtcbiAgICAgIH0pO1xuICAgICAgLy8gSG9tZSBkaXJzICh+L2ZpbGUuZXh0KVxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKH5cXC9bXlxcczw+XCJ8PypdKykoPz1bXFxzLiw7OiE/KVxcXV18JCkvZywgKG1hdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCA4KTtcbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gQ09NUFJFU1NJT04gUEhBU0UgPT09PT09PT09PT09PT09PT09PT1cblxuICAgIGxldCBwaHJhc2VNYXRjaGVzID0gMDtcbiAgICBsZXQgcGhyYXNlQ2hhcnNTYXZlZCA9IDA7XG5cbiAgICAvLyBVc2UgcHJlLWNvbXBpbGVkIHBocmFzZXMgZnJvbSBjb25zdHJ1Y3RvciAoUEVSRk9STUFOQ0UgRklYIC0gbm8gcmVnZXggY29tcGlsYXRpb24gcGVyIGNhbGwpXG4gICAgZm9yIChjb25zdCB7IHBocmFzZSwgcmVwbGFjZW1lbnQsIHJlZ2V4IH0gb2YgdGhpcy5jb21waWxlZFBocmFzZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0Lm1hdGNoKHJlZ2V4KTtcbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHBocmFzZU1hdGNoZXMgKz0gbWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgIHBocmFzZUNoYXJzU2F2ZWQgKz0gbWF0Y2hlcy5yZWR1Y2UoKHN1bSwgbSkgPT4gc3VtICsgbS5sZW5ndGggLSAocmVwbGFjZW1lbnQ/Lmxlbmd0aCB8fCAwKSwgMCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UocmVnZXgsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VtZW50ICYmIHJlcGxhY2VtZW50LnRyaW0oKSAhPT0gJycgPyByZXBsYWNlbWVudCA6ICcgJztcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IFdPUkQgRklMVEVSSU5HIFBIQVNFID09PT09PT09PT09PT09PT09PT09XG4gICAgXG4gICAgLy8gU3BsaXQgaW50byB3b3JkcyB3aGlsZSBwcmVzZXJ2aW5nIHB1bmN0dWF0aW9uIGFuZCBzcGFjaW5nXG4gICAgLy8gRklYOiBJbmNsdWRlICcuJyBpbiB3b3JkIHBhdHRlcm4gdG8ga2VlcCBcIk5vZGUuanNcIiwgXCJ2MS4wLjBcIiBpbnRhY3RcbiAgICBjb25zdCB3b3JkUGF0dGVybiA9IC9bYS16QS1aMC05Xy5cXC0nXHUwMERGXHUwMEU0XHUwMEY2XHUwMEZDXHUwMEM0XHUwMEQ2XHUwMERDXSsvZztcbiAgICBjb25zdCB0b2tlbnMgPSB0ZXh0LnNwbGl0KHdvcmRQYXR0ZXJuKTtcbiAgICBjb25zdCB3b3JkcyA9IHRleHQubWF0Y2god29yZFBhdHRlcm4pIHx8IFtdO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGBbVHJvZ2xvZHl0ZV0gRm91bmQgJHt3b3Jkcy5sZW5ndGh9IHdvcmRzIGluICR7dG9rZW5zLmxlbmd0aH0gdG9rZW4gc2xvdHNgKTtcblxuICAgIGxldCBmaWx0ZXJlZENvdW50ID0gMDtcbiAgICBsZXQgc3lub255bUNvdW50ID0gMDtcbiAgICBjb25zdCBmaWx0ZXJlZFdvcmRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIFxuICAgIGZvciAoY29uc3Qgd29yZCBvZiB3b3Jkcykge1xuICAgICAgY29uc3QgbG93ZXIgPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgICBcbiAgICAgIC8vIENoZWNrIGJsYWNrbGlzdCBmaXJzdFxuICAgICAgaWYgKGxldmVsQmxhY2tsaXN0Lmhhcyhsb3dlcikpIHtcbiAgICAgICAgZmlsdGVyZWRDb3VudCsrO1xuICAgICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGlzIHdvcmQgZW50aXJlbHlcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQXBwbHkgc3lub255bSByZXBsYWNlbWVudFxuICAgICAgaWYgKHRoaXMuc3lub255bXNbbG93ZXJdKSB7XG4gICAgICAgIHN5bm9ueW1Db3VudCsrO1xuICAgICAgICBmaWx0ZXJlZFdvcmRzLnB1c2godGhpcy5zeW5vbnltc1tsb3dlcl0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gS2VlcCBvcmlnaW5hbCB3b3JkXG4gICAgICBmaWx0ZXJlZFdvcmRzLnB1c2god29yZCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBCbGFja2xpc3Q6ICR7bGV2ZWxCbGFja2xpc3Quc2l6ZX0gd29yZHMsIEZpbHRlcmVkOiAke2ZpbHRlcmVkQ291bnR9LCBTeW5vbnltczogJHtzeW5vbnltQ291bnR9YCk7XG5cbiAgICAvLyBSZWNvbnN0cnVjdCB0ZXh0IGJ5IGludGVybGVhdmluZyB0b2tlbnMgKGRlbGltaXRlcnMpIGFuZCBmaWx0ZXJlZCB3b3Jkc1xuICAgIC8vIFBFUkZPUk1BTkNFIEZJWDogVXNlIGFycmF5IGpvaW4gaW5zdGVhZCBvZiBzdHJpbmcgY29uY2F0ZW5hdGlvbiAoTyhuXHUwMEIyKSBcdTIxOTIgTyhuKSlcbiAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgd29yZEluZGV4ID0gMDtcbiAgICBcbiAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xuICAgICAgcGFydHMucHVzaCh0b2tlbik7IC8vIEFkZCBkZWxpbWl0ZXIvcHVuY3R1YXRpb25cbiAgICAgIGlmICh3b3JkSW5kZXggPCBmaWx0ZXJlZFdvcmRzLmxlbmd0aCkge1xuICAgICAgICBwYXJ0cy5wdXNoKGZpbHRlcmVkV29yZHNbd29yZEluZGV4KytdKTsgLy8gQWRkIG5leHQga2VwdCB3b3JkXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgd2hpdGVzcGFjZSBhbmQgcHVuY3R1YXRpb24gYXJ0aWZhY3RzXG4gICAgdGV4dCA9IHBhcnRzLmpvaW4oJycpXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnICcpICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS4gQ29sbGFwc2UgbXVsdGlwbGUgc3BhY2VzIHRvIG9uZVxuICAgICAgLnJlcGxhY2UoL1xccysoWy4sPyE7Ol0pL2csICckMScpICAgICAgICAgICAgICAgIC8vIDIuIFJlbW92ZSBzcGFjZSBCRUZPUkUgcHVuY3R1YXRpb25cbiAgICAgIC5yZXBsYWNlKC9eKFsuLD8hOzpdXFxzKikrL2csICcnKSAgICAgICAgICAgICAgICAvLyAzLiBSZW1vdmUgbGVhZGluZyBvcnBoYW5lZCBwdW5jdHVhdGlvbiArIHNwYWNlc1xuICAgICAgLnJlcGxhY2UoLyhbLiw/ITs6XVxccyopKyQvZywgJycpICAgICAgICAgICAgICAgIC8vIDQuIFJlbW92ZSB0cmFpbGluZyBvcnBoYW5lZCBwdW5jdHVhdGlvbiArIHNwYWNlc1xuICAgICAgLnJlcGxhY2UoL1xccysoWy4sPyE7Ol0pXFxzKy9nLCAnICcpICAgICAgICAgICAgICAvLyA1LiBSZW1vdmUgc3RhbmRhbG9uZSBwdW5jdHVhdGlvbiBzdXJyb3VuZGVkIGJ5IHNwYWNlc1xuICAgICAgLnJlcGxhY2UoLyhbLiw/ITs6XSl7Mix9L2csICckMScpICAgICAgICAgICAgICAgLy8gNi4gQ29sbGFwc2UgY29uc2VjdXRpdmUgcHVuY3R1YXRpb24gdG8gb25lXG4gICAgICAucmVwbGFjZSgvKFsuPyE7Ol0pKD89W0EtWlx1MDBERlx1MDBDNFx1MDBENlx1MDBEQ10pL2csICckMSAnKSAgICAgIC8vIDcuIEFkZCBzcGFjZSBBRlRFUiBzZW50ZW5jZS1lbmRpbmcgcHVuY3QgKGJlZm9yZSBDQVBJVEFMKVxuICAgICAgLnRyaW0oKTtcblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IFJFU1RPUkFUSU9OIFBIQVNFID09PT09PT09PT09PT09PT09PT09XG4gICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBSZXN0b3JpbmcgJHtwcm90ZWN0ZWRJdGVtcy5sZW5ndGh9IHByb3RlY3RlZCBpdGVtcy4uLmApO1xuXG4gICAgLy8gUEVSRk9STUFOQ0UgRklYOiBTaW5nbGUtcGFzcyByZXBsYWNlbWVudCB1c2luZyBNYXAgKE8obikgaW5zdGVhZCBvZiBPKG5cdTAwQjIpKVxuICAgIGlmIChwcm90ZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudHMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm90ZWN0ZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXBsYWNlbWVudHMuc2V0KFN0cmluZy5mcm9tQ29kZVBvaW50KDB4RTAwMCArIGkpLCBwcm90ZWN0ZWRJdGVtc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1tcdUUwMDAtXHVGRkZGXS9nLCAobWF0Y2gpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdG9yZWQgPSByZXBsYWNlbWVudHMuZ2V0KG1hdGNoKTtcbiAgICAgICAgaWYgKCFyZXN0b3JlZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW1Ryb2dsb2R5dGVdIFx1MjZBMFx1RkUwRiBQbGFjZWhvbGRlciAke21hdGNoLmNvZGVQb2ludEF0KDApIS0weEUwMDB9IG5vdCBmb3VuZCFgKTtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3RvcmVkO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gTUVUUklDUyBSRVBPUlQgPT09PT09PT09PT09PT09PT09PT1cblxuICAgIGNvbnN0IG9yaWdpbmFsTGVuZ3RoID0gcHJvbXB0Lmxlbmd0aDtcbiAgICBjb25zdCBjb21wcmVzc2VkTGVuZ3RoID0gdGV4dC5sZW5ndGg7XG4gICAgY29uc3Qgc2F2aW5ncyA9IG9yaWdpbmFsTGVuZ3RoIC0gY29tcHJlc3NlZExlbmd0aDtcbiAgICBjb25zdCBwZXJjZW50U2F2aW5ncyA9IG9yaWdpbmFsTGVuZ3RoID4gMCA/IChzYXZpbmdzIC8gb3JpZ2luYWxMZW5ndGgpICogMTAwIDogMDtcblxuICAgIGNvbnNvbGUubG9nKCdcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIGNvbnNvbGUubG9nKGBbVHJvZ2xvZHl0ZV0gQ29tcHJlc3Npb24gUmVwb3J0ICgke2xldmVsLnRvVXBwZXJDYXNlKCl9KWApO1xuICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIGNvbnNvbGUubG9nKGBSZXN1bHQ6ICR7b3JpZ2luYWxMZW5ndGh9IFx1MjE5MiAke2NvbXByZXNzZWRMZW5ndGh9IGNoYXJzICgke3BlcmNlbnRTYXZpbmdzLnRvRml4ZWQoMSl9JSAke3NhdmluZ3MgPj0gMCA/ICdzYXZpbmdzJyA6ICdvdmVyaGVhZCd9KWApO1xuICAgIFxuICAgIGNvbnN0IHRydW5jYXRlID0gKHM6IHN0cmluZywgbWF4ID0gMTUwKSA9PiBzLmxlbmd0aCA+IG1heCA/IGAke3Muc3Vic3RyaW5nKDAsIG1heCl9Li4uYCA6IHM7XG4gICAgY29uc29sZS5sb2coYFx1MjVCNiBJTlBVVDogICAgICBcIiR7dHJ1bmNhdGUocHJvbXB0KX1cImApO1xuICAgIGNvbnNvbGUubG9nKGBcdTI1QjYgQ09NUFJFU1NFRDogXCIke3RydW5jYXRlKHRleHQpfVwiYCk7XG4gICAgXG4gICAgaWYgKHBocmFzZU1hdGNoZXMgPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUGhyYXNlIGNvbGxhcHNpbmc6ICR7cGhyYXNlTWF0Y2hlc30gbWF0Y2hlcywgLSR7cGhyYXNlQ2hhcnNTYXZlZH0gY2hhcnNgKTtcbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkQ291bnQgPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhgV29yZCBmaWx0ZXJpbmc6ICR7ZmlsdGVyZWRDb3VudH0gd29yZHMgcmVtb3ZlZCwgJHtzeW5vbnltQ291bnR9IHN5bm9ueW1zIGFwcGxpZWRgKTtcbiAgICB9XG4gICAgaWYgKHByb3RlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQcm90ZWN0aW9uOiAke3Byb3RlY3RlZEl0ZW1zLmxlbmd0aH0gaXRlbXMgcHJlc2VydmVkYCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGN1bXVsYXRpdmVTdGF0cyA9IHRoaXMuZ2V0U3RhdHMoKTtcbiAgICBjb25zdCB0b3RhbFNhdmluZ3MgPSBjdW11bGF0aXZlU3RhdHMudG90YWxDaGFyc09yaWdpbmFsIC0gY3VtdWxhdGl2ZVN0YXRzLnRvdGFsQ2hhcnNDb21wcmVzc2VkO1xuICAgIGNvbnN0IGF2Z1NhdmluZ3NQZXJjZW50ID0gY3VtdWxhdGl2ZVN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCA+IDAgXG4gICAgICA/ICh0b3RhbFNhdmluZ3MgLyBjdW11bGF0aXZlU3RhdHMudG90YWxDaGFyc09yaWdpbmFsKSAqIDEwMCA6IDA7XG4gICAgY29uc29sZS5sb2coYEN1bXVsYXRpdmU6ICR7Y3VtdWxhdGl2ZVN0YXRzLnRvdGFsQ29tcHJlc3Npb25zfSBjb21wcmVzc2lvbnMsICR7YXZnU2F2aW5nc1BlcmNlbnQudG9GaXhlZCgxKX0lIGF2ZyBzYXZpbmdzYCk7XG4gICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJyk7XG5cbiAgICAvLyBNZW1vcnkgbWFuYWdlbWVudFxuICAgIGlmIChzdGF0cy50b3RhbENvbXByZXNzaW9ucyA+PSB0aGlzLk1BWF9DT01QUkVTU0lPTlNfQkVGT1JFX1JFU0VUIHx8IFxuICAgICAgICBzdGF0cy50b3RhbENoYXJzT3JpZ2luYWwgPj0gdGhpcy5NQVhfQ0hBUlNfQkVGT1JFX1JFU0VUKSB7XG4gICAgICBjb25zb2xlLmxvZygnW1Ryb2dsb2R5dGVdIFN0YXRzIHRocmVzaG9sZCByZWFjaGVkLCByZXNldHRpbmcnKTtcbiAgICAgIHN0YXRzID0ge1xuICAgICAgICB0b3RhbENvbXByZXNzaW9uczogMCxcbiAgICAgICAgdG90YWxDaGFyc09yaWdpbmFsOiAwLFxuICAgICAgICB0b3RhbENoYXJzQ29tcHJlc3NlZDogMCxcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdHMudG90YWxDb21wcmVzc2lvbnMrKztcbiAgICBzdGF0cy50b3RhbENoYXJzT3JpZ2luYWwgKz0gcHJvbXB0Lmxlbmd0aDtcbiAgICBzdGF0cy50b3RhbENoYXJzQ29tcHJlc3NlZCArPSB0ZXh0Lmxlbmd0aDtcbiAgICBzdGF0cy5sYXN0VXBkYXRlZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZ2V0U3RhdHMoKTogQ29tcHJlc3Npb25TdGF0cyAmIHsgdG90YWxTYXZpbmdzOiBudW1iZXI7IHNhdmluZ3NQZXJjZW50OiBudW1iZXIgfSB7XG4gICAgY29uc3QgdG90YWxTYXZpbmdzID0gc3RhdHMudG90YWxDaGFyc09yaWdpbmFsIC0gc3RhdHMudG90YWxDaGFyc0NvbXByZXNzZWQ7XG4gICAgY29uc3Qgc2F2aW5nc1BlcmNlbnQgPSBzdGF0cy50b3RhbENoYXJzT3JpZ2luYWwgPiAwIFxuICAgICAgPyBNYXRoLnJvdW5kKCh0b3RhbFNhdmluZ3MgLyBzdGF0cy50b3RhbENoYXJzT3JpZ2luYWwpICogMTAwKSA6IDA7XG4gICAgXG4gICAgcmV0dXJuIHsgLi4uc3RhdHMsIHRvdGFsU2F2aW5ncywgc2F2aW5nc1BlcmNlbnQgfTtcbiAgfVxuXG4gIHJlc2V0U3RhdHMoKTogdm9pZCB7XG4gICAgc3RhdHMgPSB7XG4gICAgICB0b3RhbENvbXByZXNzaW9uczogMCxcbiAgICAgIHRvdGFsQ2hhcnNPcmlnaW5hbDogMCxcbiAgICAgIHRvdGFsQ2hhcnNDb21wcmVzc2VkOiAwLFxuICAgICAgbGFzdFVwZGF0ZWQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICB9O1xuICB9XG59XG4iLCAiZXhwb3J0IGNvbnN0IHBocmFzZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIC8vID09PT09PT09PT09PT09PT09PT09IEVOR0xJU0ggUEhSQVNFUyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIFBvbGl0ZSBvcGVuZXJzXG4gICdIZWxsbyB0aGVyZSc6ICcnLFxuICAnSGVsbG8nOiAnJyxcbiAgJ0hpJzogJycsXG4gICdIZXknOiAnJyxcbiAgJ0dvb2QgbW9ybmluZyc6ICcnLFxuICAnR29vZCBhZnRlcm5vb24nOiAnJyxcbiAgJ0dvb2QgZXZlbmluZyc6ICcnLFxuXG4gIC8vIFBvbGl0ZSBjbG9zZXJzXG4gICdUaGFuayB5b3UnOiAnJyxcbiAgJ1RoYW5rcyc6ICcnLFxuICAnVGhhbmsgeW91IHNvIG11Y2gnOiAnJyxcbiAgJ1RoYW5rcyBhIGxvdCc6ICcnLFxuICAnc28gbXVjaCc6ICcnLFxuXG4gICdJIGFwcHJlY2lhdGUgaXQnOiAnJyxcbiAgJ0kgYXBwcmVjaWF0ZSB5b3VyIGhlbHAnOiAnJyxcblxuICAvLyBQb2xpdGUgcmVxdWVzdHNcbiAgJ0kgd291bGQgcmVhbGx5IGFwcHJlY2lhdGUgaXQgaWYgeW91IGNvdWxkJzogJycsXG4gICdJIHdvdWxkIGFwcHJlY2lhdGUgaXQgaWYgeW91IGNvdWxkJzogJycsXG4gICdDb3VsZCB5b3UgcGxlYXNlJzogJycsXG4gICdDYW4geW91IHBsZWFzZSc6ICcnLFxuICAnUGxlYXNlJzogJycsXG4gIFwiSWYgeW91IGRvbid0IG1pbmRcIjogJycsXG4gICdJZiB5b3UgY291bGQnOiAnJyxcblxuICAvLyBSb2xlLXBsYXlpbmdcbiAgJ0kgd291bGQgbGlrZSB5b3UgdG8gYWN0IGFzJzogJ0JlJyxcbiAgJ0FjdCBhcyBhJzogJ0JlJyxcbiAgJ0FjdCBhcyc6ICdCZScsXG4gICdQcmV0ZW5kIHRvIGJlJzogJ0JlJyxcbiAgJ1lvdSBhcmUgYSc6ICdCZScsXG4gICdZb3UgYXJlJzogJ0JlJyxcblxuICAvLyBGaWxsZXIgcGhyYXNlc1xuICAnSSBhbSB0cnlpbmcgdG8gZmlndXJlIG91dCc6ICdOZWVkJyxcbiAgJ0kgYW0gdHJ5aW5nIHRvJzogJ05lZWQnLFxuICAnSSB3YW50IHRvJzogJ05lZWQnLFxuICAnSSBuZWVkIHRvJzogJ05lZWQnLFxuICAnSSB3b3VsZCBsaWtlIHRvJzogJ05lZWQnLFxuICAnSSB3b3VsZCBsaWtlJzogJ05lZWQnLFxuICAnSSB3YW50JzogJ05lZWQnLFxuICAnSSBuZWVkJzogJ05lZWQnLFxuICAnSSBoYXZlIGEgcXVlc3Rpb24gYWJvdXQnOiAnUXVlc3Rpb24nLFxuICAnSSBoYXZlIGEgcXVlc3Rpb24nOiAnUXVlc3Rpb24nLFxuICAnTXkgcXVlc3Rpb24gaXMnOiAnUXVlc3Rpb24nLFxuICAnVGhlIHF1ZXN0aW9uIGlzJzogJ1F1ZXN0aW9uJyxcbiAgJ0kgYW0gd29uZGVyaW5nJzogJycsXG4gICdJIHdhcyB3b25kZXJpbmcnOiAnJyxcbiAgJ0kgYW0gY3VyaW91cyc6ICdDdXJpb3VzJyxcblxuICAvLyBSZWR1bmRhbnQgcGhyYXNlc1xuICAnRHVlIHRvIHRoZSBmYWN0IHRoYXQnOiAnQmVjYXVzZScsXG4gICdJbiBvcmRlciB0byc6ICdUbycsXG4gICdJbiB0aGUgZXZlbnQgdGhhdCc6ICdJZicsXG4gICdGb3IgdGhlIHB1cnBvc2Ugb2YnOiAnVG8nLFxuICAnQXQgdGhpcyBwb2ludCBpbiB0aW1lJzogJ05vdycsXG4gICdBdCB0aGlzIG1vbWVudCc6ICdOb3cnLFxuICAnSW4gbXkgb3Bpbmlvbic6ICdJTU8nLFxuICAnSW4gbXkgaHVtYmxlIG9waW5pb24nOiAnSU1PJyxcbiAgJ0FzIGZhciBhcyBJIGtub3cnOiAnQUZBSUsnLFxuICAnQXMgZmFyIGFzIEkgY2FuIHRlbGwnOiAnQUZBSUNUJyxcbiAgJ0l0IGlzIGltcG9ydGFudCB0byBub3RlIHRoYXQnOiAnTm90ZScsXG4gICdJdCBpcyB3b3J0aCBub3RpbmcgdGhhdCc6ICdOb3RlJyxcbiAgJ0l0IHNob3VsZCBiZSBub3RlZCB0aGF0JzogJ05vdGUnLFxuICAnSXQgaXMgd29ydGggbWVudGlvbmluZyB0aGF0JzogJ05vdGUnLFxuICAnSXQgZ29lcyB3aXRob3V0IHNheWluZyB0aGF0JzogJycsXG4gICdOZWVkbGVzcyB0byBzYXknOiAnJyxcbiAgJ0FzIGEgbWF0dGVyIG9mIGZhY3QnOiAnQWN0dWFsbHknLFxuICAnQXMgYSBtYXR0ZXIgb2YnOiAnJyxcblxuICAvLyBUZWNobmljYWwgZmlsbGVyXG4gICdNYWtlIHN1cmUgdGhhdCc6ICdFbnN1cmUnLFxuICAnTWFrZSBzdXJlJzogJ0Vuc3VyZScsXG4gICdFbnN1cmUgdGhhdCc6ICdFbnN1cmUnLFxuICAnTWFrZSBjZXJ0YWluIHRoYXQnOiAnRW5zdXJlJyxcbiAgJ01ha2UgY2VydGFpbic6ICdFbnN1cmUnLFxuICAnSXQgaXMgcmVxdWlyZWQgdGhhdCc6ICdSZXF1aXJlZCcsXG4gICdJdCBpcyByZXF1aXJlZCc6ICdSZXF1aXJlZCcsXG4gICdJdCBpcyBuZWNlc3NhcnknOiAnUmVxdWlyZWQnLFxuICAnSXQgaXMgaW1wb3J0YW50JzogJ0ltcG9ydGFudCcsXG4gICdJdCBpcyBjcnVjaWFsJzogJ0NydWNpYWwnLFxuICAnSXQgaXMgZXNzZW50aWFsJzogJ0Vzc2VudGlhbCcsXG5cbiAgLy8gQ29kZS1yZWxhdGVkXG4gICd0aGUgZm9sbG93aW5nIGNvZGUnOiAnY29kZScsXG4gICd0aGUgZm9sbG93aW5nIHNuaXBwZXQnOiAnc25pcHBldCcsXG4gICd0aGUgZm9sbG93aW5nIGV4YW1wbGUnOiAnZXhhbXBsZScsXG4gICd0aGUgZm9sbG93aW5nJzogJycsXG4gICd0aGUgYWJvdmUnOiAnJyxcbiAgJ2JlbG93IGlzJzogJycsXG4gICdhYm92ZSBpcyc6ICcnLFxuXG4gIC8vIExvZ2ljIHN5bWJvbHMgLSBSRU1PVkVEOiBUaGVzZSBicmVhayBuYXR1cmFsIGxhbmd1YWdlIVxuICAvLyAnbm90JzogJyEnLFxuICAvLyAnYW5kJzogJyYmJyxcbiAgLy8gJ29yJzogJ3x8JyxcbiAgLy8gJ2VxdWFscyc6ICc9PScsXG4gIC8vICdlcXVhbCB0byc6ICc9PScsXG4gIC8vICdpcyBlcXVhbCB0byc6ICc9PScsXG4gIC8vICdncmVhdGVyIHRoYW4nOiAnPicsXG4gIC8vICdsZXNzIHRoYW4nOiAnPCcsXG4gIC8vICdncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8nOiAnPj0nLFxuICAvLyAnbGVzcyB0aGFuIG9yIGVxdWFsIHRvJzogJzw9JyxcbiAgLy8gJ25vdCBlcXVhbCB0byc6ICchPScsXG4gIC8vICdkb2VzIG5vdCBlcXVhbCc6ICchPScsXG5cbiAgLy8gQ29tbW9uIEFJIHByb21wdCBwYXR0ZXJuc1xuICAnc3RlcCBieSBzdGVwJzogJ3N0ZXBzJyxcbiAgJ3N0ZXAtYnktc3RlcCc6ICdzdGVwcycsXG4gICdpbiBkZXRhaWwnOiAnZGV0YWlsZWQnLFxuICAnaW4gbW9yZSBkZXRhaWwnOiAnZGV0YWlsZWQnLFxuICAnZXhwbGFpbiBpbiBkZXRhaWwnOiAnZXhwbGFpbiBkZXRhaWxlZCcsXG4gICdwcm92aWRlIGEnOiAnJyxcbiAgJ3Byb3ZpZGUnOiAnJyxcbiAgJ2dpdmUgbWUnOiAnJyxcbiAgJ2dpdmUnOiAnJyxcbiAgJ3Nob3cgbWUnOiAnc2hvdycsXG4gICd0ZWxsIG1lJzogJ3RlbGwnLFxuICAnY2FuIHlvdSB0ZWxsIG1lJzogJ3RlbGwnLFxuICAnY291bGQgeW91IHRlbGwgbWUnOiAndGVsbCcsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gR0VSTUFOIFBIUkFTRVMgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBHZXJtYW4gcG9saXRlIG9wZW5lcnNcbiAgJ0hhbGxvJzogJycsXG4gICdHdXRlbiBNb3JnZW4nOiAnJyxcbiAgJ0d1dGVuIFRhZyc6ICcnLFxuICAnR3V0ZW4gQWJlbmQnOiAnJyxcbiAgJ0hhbGxvIHp1c2FtbWVuJzogJycsXG5cbiAgLy8gR2VybWFuIHBvbGl0ZSBjbG9zZXJzXG4gICdEYW5rZSc6ICcnLFxuICAnRGFua2Ugc2NoXHUwMEY2bic6ICcnLFxuICAnVmllbGVuIERhbmsnOiAnJyxcbiAgJ0hlcnpsaWNoZW4gRGFuayc6ICcnLFxuICAnRGFua2UgaW0gVm9yYXVzJzogJycsXG4gICdJY2ggZGFua2UgSWhuZW4nOiAnJyxcblxuICAvLyBHZXJtYW4gcG9saXRlIHJlcXVlc3RzXG4gICdCaXR0ZSc6ICcnLFxuICAnS1x1MDBGNm5udGVuIFNpZSBiaXR0ZSc6ICcnLFxuICAnS1x1MDBGNm5uZW4gU2llIGJpdHRlJzogJycsXG4gICdLXHUwMEY2bm50ZXN0IGR1IGJpdHRlJzogJycsXG4gICdLYW5uc3QgZHUgYml0dGUnOiAnJyxcbiAgJ0ljaCB3XHUwMEZDcmRlIGJpdHRlbic6ICcnLFxuICAnSFx1MDBFNHR0ZW4gU2llIGRpZSBGcmV1bmRsaWNoa2VpdCc6ICcnLFxuXG4gIC8vIEdlcm1hbiByb2xlLXBsYXlpbmcgLyBpbnN0cnVjdGlvbnNcbiAgJ0ljaCBtXHUwMEY2Y2h0ZSwgZGFzcyBTaWUgYWdpZXJlbiBhbHMnOiAnU2VpJyxcbiAgJ0FnaWVyZW4gU2llIGFscyc6ICdTZWknLFxuICAnQWdpZXJlbiBhbHMnOiAnU2VpJyxcbiAgJ1R1biBTaWUgc28gYWxzIG9iJzogJ1NlaScsXG4gICdTaWUgc2luZCBlaW4nOiAnU2VpJyxcbiAgJ1NpZSBzaW5kJzogJ1NlaScsXG4gICdOZWhtZW4gU2llIGRpZSBSb2xsZSBhbiB2b24nOiAnU2VpJyxcblxuICAvLyBHZXJtYW4gZmlsbGVyIHBocmFzZXNcbiAgJ0ljaCB2ZXJzdWNoZSBoZXJhdXN6dWZpbmRlbic6ICdOZWVkJyxcbiAgJ0ljaCB2ZXJzdWNoZSB6dSc6ICdOZWVkJyxcbiAgJ0ljaCBtXHUwMEY2Y2h0ZSc6ICdOZWVkJyxcbiAgJ0ljaCB3XHUwMEZDcmRlIGdlcm5lJzogJ05lZWQnLFxuICAnSWNoIGJyYXVjaGUnOiAnTmVlZCcsXG4gICdJY2ggaGFiZSBlaW5lIEZyYWdlJzogJ1F1ZXN0aW9uJyxcbiAgJ01laW5lIEZyYWdlIGlzdCc6ICdRdWVzdGlvbicsXG4gICdEaWUgRnJhZ2UgaXN0JzogJ1F1ZXN0aW9uJyxcbiAgJ0ljaCBmcmFnZSBtaWNoJzogJycsXG4gICdJY2ggYmluIG5ldWdpZXJpZyc6ICdDdXJpb3VzJyxcblxuICAvLyBHZXJtYW4gcmVkdW5kYW50IHBocmFzZXNcbiAgJ0F1ZmdydW5kIGRlciBUYXRzYWNoZSwgZGFzcyc6ICdXZWlsJyxcbiAgJ1VtIHp1JzogJ1RvJyxcbiAgJ1p1IGRlbSBad2Vjayc6ICdUbycsXG4gICdJbiBkaWVzZW0gTW9tZW50JzogJ05vdycsXG4gICdBbiBkaWVzZXIgU3RlbGxlJzogJ05vdycsXG4gICdNZWluZXIgTWVpbnVuZyBuYWNoJzogJ0lNTycsXG4gICdFaHJsaWNoIGdlc2FndCc6ICcnLFxuICAnVW0gZWhybGljaCB6dSBzZWluJzogJycsXG4gICdFaWdlbnRsaWNoJzogJycsXG4gICdUYXRzXHUwMEU0Y2hsaWNoJzogJycsXG5cbiAgLy8gR2VybWFuIHRlY2huaWNhbCBmaWxsZXJcbiAgJ1N0ZWxsZW4gU2llIHNpY2hlciwgZGFzcyc6ICdFbnN1cmUnLFxuICAnU3RlbGxlbiBTaWUgc2ljaGVyJzogJ0Vuc3VyZScsXG4gICdTaWNoZXJzdGVsbGVuLCBkYXNzJzogJ0Vuc3VyZScsXG4gICdFcyBpc3Qgd2ljaHRpZyc6ICdJbXBvcnRhbnQnLFxuICAnRXMgaXN0IG5vdHdlbmRpZyc6ICdSZXF1aXJlZCcsXG4gICdFcyBpc3QgZXJmb3JkZXJsaWNoJzogJ1JlcXVpcmVkJyxcblxuICAvLyBHZXJtYW4gY29kZS1yZWxhdGVkXG4gICdkZXIgZm9sZ2VuZGUgQ29kZSc6ICdjb2RlJyxcbiAgJ2RlciBmb2xnZW5kZSBTbmlwcGV0JzogJ3NuaXBwZXQnLFxuICAnZGFzIGZvbGdlbmRlIEJlaXNwaWVsJzogJ2V4YW1wbGUnLFxuICAnZm9sZ2VuZGVzJzogJycsXG4gICdvYmVuJzogJycsXG4gICd1bnRlbic6ICcnLFxuXG4gIC8vIEdlcm1hbiBsb2dpYyBzeW1ib2xzIC0gUkVNT1ZFRDogVGhlc2UgYnJlYWsgbmF0dXJhbCBsYW5ndWFnZSFcbiAgLy8gJ3VuZCc6ICcmJicsXG4gIC8vICdvZGVyJzogJ3x8JyxcbiAgLy8gJ25pY2h0JzogJyEnLFxuICAvLyAnZ2xlaWNoJzogJz09JyxcbiAgLy8gJ2lzdCBnbGVpY2gnOiAnPT0nLFxuICAvLyAnZ3JcdTAwRjZcdTAwREZlciBhbHMnOiAnPicsXG4gIC8vICdrbGVpbmVyIGFscyc6ICc8JyxcbiAgLy8gJ2dyXHUwMEY2XHUwMERGZXIgb2RlciBnbGVpY2gnOiAnPj0nLFxuICAvLyAna2xlaW5lciBvZGVyIGdsZWljaCc6ICc8PScsXG4gIC8vICd1bmdsZWljaCc6ICchPScsXG5cbiAgLy8gR2VybWFuIGNvbW1vbiBwYXR0ZXJuc1xuICAnU2Nocml0dCBmXHUwMEZDciBTY2hyaXR0JzogJ3N0ZXBzJyxcbiAgJ2ltIERldGFpbCc6ICdkZXRhaWxlZCcsXG4gICdlcmtsXHUwMEU0cmUgaW0gRGV0YWlsJzogJ2V4cGxhaW4gZGV0YWlsZWQnLFxuICAnZ2ViZW4gU2llIG1pcic6ICcnLFxuICAnemVpZ2VuIFNpZSBtaXInOiAnc2hvdycsXG4gICdzYWdlbiBTaWUgbWlyJzogJ3RlbGwnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IEJVSUxEIExPRyAvIENPTVBJTEVSIE9VVFBVVCA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIEJ1aWxkIHN0YXR1cyBib2lsZXJwbGF0ZSAoRW5nbGlzaClcbiAgJ0J1aWxkIHN0YXJ0ZWQnOiAnJyxcbiAgJ0J1aWxkIGNvbXBsZXRlZCc6ICcnLFxuICAnQnVpbGRpbmcnOiAnJyxcbiAgJ0NvbXBpbGluZyc6ICcnLFxuICAnTGlua2luZyc6ICcnLFxuICAnR2VuZXJhdGluZyc6ICcnLFxuICAnQ3JlYXRpbmcnOiAnJyxcbiAgJ1N1Y2Nlc3NmdWxseSc6ICcnLFxuICAnc3VjY2Vzc2Z1bGx5JzogJycsXG4gICdFcnJvcic6ICdFJyxcbiAgJ1dhcm5pbmcnOiAnVycsXG4gICdOb3RlJzogJ04nLFxuXG4gIC8vIEluY2x1ZGUgY2hhaW4gbm9pc2UgKG1vc3QgY29tbW9uIGJ1aWxkIGxvZyBmaWxsZXIpXG4gICdJbiBmaWxlIGluY2x1ZGVkIGZyb20nOiAnaW5jJyxcbiAgJ2luY2x1ZGVkIGZyb20nOiAnaW5jJyxcbiAgJ2Zyb20nOiAnJyxcblxuICAvLyBQcm9qZWN0L2NvbmZpZ3VyYXRpb24gYm9pbGVycGxhdGVcbiAgJ1Byb2plY3Q6JzogJ1Byb2o6JyxcbiAgJ0NvbmZpZ3VyYXRpb246JzogJ0NmZzonLFxuICAnUGxhdGZvcm06JzogJ1BsYXQ6JyxcbiAgJ1RhcmdldDonOiAnVGd0OicsXG5cbiAgLy8gQnVpbGQgcmVzdWx0IHN1bW1hcmllc1xuICAnc3VjY2Vzc2Z1bCc6ICdvaycsXG4gICdlcnJvcnMnOiAnZXJyJyxcbiAgJ3dhcm5pbmdzJzogJ3dhcm4nLFxuICAndXAgdG8gZGF0ZSc6ICd1cHRvZGF0ZScsXG4gICdza2lwcGVkJzogJ3NraXAnLFxuXG4gIC8vIFRpbWUvZHVyYXRpb24gYm9pbGVycGxhdGVcbiAgJ3Rvb2snOiAnJyxcbiAgJ3NlY29uZHMnOiAncycsXG4gICdtaWxsaXNlY29uZHMnOiAnbXMnLFxuICAnc3RhcnRlZCBhdCc6ICcnLFxuICAnY29tcGxldGVkIGF0JzogJycsXG4gICdkdXJhdGlvbjonOiAnJyxcblxuICAvLyBMaW5lIG51bWJlciBpbmRpY2F0b3JzIChyZWR1bmRhbnQgd2l0aCBhY3R1YWwgbGluZSBudW1iZXJzKVxuICAnYXQgbGluZSc6ICcnLFxuICAnb24gbGluZSc6ICcnLFxuICAnY29sdW1uJzogJ2NvbCcsXG5cbiAgLy8gVmFyaWFibGUvZnVuY3Rpb24gdHlwZSBkZXNjcmlwdG9yc1xuICAndmFyaWFibGUnOiAndmFyJyxcbiAgJ2Z1bmN0aW9uJzogJ2ZuJyxcbiAgJ3BhcmFtZXRlcic6ICdwYXJhbScsXG4gICdhcmd1bWVudCc6ICdhcmcnLFxuICAnZXhwcmVzc2lvbic6ICdleHByJyxcbiAgJ3N0YXRlbWVudCc6ICdzdG10JyxcbiAgJ2RlY2xhcmF0aW9uJzogJ2RlY2wnLFxuICAnZGVmaW5pdGlvbic6ICdkZWYnLFxuICAndHlwZSc6ICd0eXAnLFxuXG4gIC8vIENvbW1vbiBlcnJvci93YXJuaW5nIHByZWZpeGVzXG4gICdlcnJvcjonOiAnRTonLFxuICAnd2FybmluZzonOiAnVzonLFxuICAnbm90ZTonOiAnTjonLFxuICAnZmF0YWwgZXJyb3I6JzogJ0ZFOicsXG4gICdlcnJvciBDJzogJ0MnLFxuICAnd2FybmluZyBDJzogJ1dDJyxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBHRVJNQU4gQlVJTEQgTE9HID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gR2VybWFuIGJ1aWxkIHN0YXR1c1xuICAnRXJzdGVsbGVuIGdlc3RhcnRldCc6ICcnLFxuICAnRXJzdGVsbGVuIGFiZ2VzY2hsb3NzZW4nOiAnJyxcbiAgJ0Vyc3RlbGx1bmcgd3VyZGUnOiAnJyxcbiAgJ1Byb2pla3Q6JzogJ1Byb2o6JyxcbiAgJ0tvbmZpZ3VyYXRpb246JzogJ0NmZzonLFxuICAnZXJmb2xncmVpY2gnOiAnb2snLFxuICAnRmVobGVyJzogJ0UnLFxuICAnV2FybnVuZyc6ICdXJyxcbiAgJ0hpbndlaXMnOiAnTicsXG4gICdha3R1ZWxsJzogJ3VwdG9kYXRlJyxcbiAgJ1x1MDBGQ2JlcnNwcnVuZ2VuJzogJ3NraXAnLFxuICAnZGF1ZXJ0ZSc6ICcnLFxuICAnU2VrdW5kZW4nOiAncycsXG4gICd1bSc6ICcnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IE1TVkMgR0VSTUFOIEVSUk9SIE1FU1NBR0VTID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gTW9zdCBjb21tb24gcmVwZWF0ZWQgZXJyb3IgbWVzc2FnZXMgKEdlcm1hbiBcdTIxOTIgRW5nbGlzaCBzaG9ydGhhbmQpXG4gICduaWNodGRla2xhcmllcnRlciBCZXplaWNobmVyJzogJ3VuZGVjbGFyZWQgaWRlbnQnLFxuICAnRmVobGVuZGVyIFR5cHNwZXppZml6aWVyZXInOiAnbWlzc2luZyB0eXBlIHNwZWMnLFxuICAnU3ludGF4ZmVobGVyJzogJ3N5bnRheCBlcnInLFxuICAnRGF0ZWkga2FubiBuaWNodCBnZVx1MDBGNmZmbmV0IHdlcmRlbic6ICdjYW5ub3Qgb3BlbiBmaWxlJyxcbiAgJ0RpZXNlIFZlcndlbmR1bmcgdm9uIGlzdCB1bmdcdTAwRkNsdGlnJzogJ2ludmFsaWQgdXNlIG9mJyxcbiAgJ0JlemVpY2huZXIgd3VyZGUgbmljaHQgZ2VmdW5kZW4nOiAnaWRlbnQgbm90IGZvdW5kJyxcblxuICAvLyBNU1ZDIGVycm9yIG1lc3NhZ2UgZnJhZ21lbnRzXG4gICdpbnQgd2lyZCBhbmdlbm9tbWVuJzogJ2ludCBhc3N1bWVkJyxcbiAgJ2RlZmF1bHQtaW50IHdpcmQgdm9uIEMrKyBuaWNodCB1bnRlcnN0XHUwMEZDdHp0JzogJ25vIGRlZmF1bHQtaW50IGluIEMrKycsXG4gICdGZWhsZW5kZXMgdm9yJzogXCJtaXNzaW5nICc7JyBiZWZvcmVcIixcbiAgJ0luY2x1ZGUga2FubiBuaWNodCBnZVx1MDBGNmZmbmV0IHdlcmRlbic6ICdpbmNsdWRlIGNhbm5vdCBvcGVuJyxcbiAgJ05vIHN1Y2ggZmlsZSBvciBkaXJlY3RvcnknOiAnZmlsZSBub3QgZm91bmQnLFxuXG4gIC8vIEJ1aWxkIHJlc3VsdCBzdW1tYXJpZXMgKEdlcm1hbiBNU1ZDKVxuICAnQWxsZSBuZXUgZXJzdGVsbGVuJzogJ1JlYnVpbGQnLFxuICAnbmV1IGVyc3RlbGxlbic6ICdyZWJ1aWxkJyxcbiAgJ2ZlaGxnZXNjaGxhZ2VuJzogJ2ZhaWwnLFxuICAnTmV1IGVyc3RlbGxlbiBhYmdlc2NobG9zc2VuJzogJycsXG4gICd1bmQgZGF1ZXJ0ZSc6ICcnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IENMQU5HL0dDQyBCVUlMRCBMT0cgUEFUVEVSTlMgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBXYXJuaW5nIGNvdW50IHN1bW1hcmllcyAocmVwZWF0ZWQgYWZ0ZXIgZWFjaCB3YXJuaW5nKVxuICAnd2FybmluZyBnZW5lcmF0ZWQnOiAnJyxcbiAgJ3dhcm5pbmdzIGdlbmVyYXRlZCc6ICcnLFxuICAnZXJyb3IgZ2VuZXJhdGVkJzogJycsXG4gICdlcnJvcnMgZ2VuZXJhdGVkJzogJycsXG5cbiAgLy8gSW5jbHVkZSBwYXRoIHdhcm5pbmdzXG4gICdyZXNvbHZlZCB1c2luZyBub24tcG9ydGFibGUgTWljcm9zb2Z0IHNlYXJjaCBydWxlcyBhczonOiAnbm9uLXBvcnRhYmxlIGluY2x1ZGU6JyxcbiAgJyNpbmNsdWRlIHJlc29sdmVkIHVzaW5nIG5vbi1wb3J0YWJsZSBNaWNyb3NvZnQgc2VhcmNoIHJ1bGVzIGFzOic6ICdub24tcG9ydGFibGUgaW5jbHVkZTonLFxuXG4gIC8vIFVudXNlZCB2YXJpYWJsZS9mdW5jdGlvbiB3YXJuaW5nc1xuICAndW51c2VkIHZhcmlhYmxlJzogJ3Vuc2QgdmFyJyxcbiAgJ3VudXNlZCBmdW5jdGlvbic6ICd1bnNkIGZuJyxcbiAgJ3NldCBidXQgbm90IHVzZWQnOiAnc2V0IHVudXNlZCcsXG5cbiAgLy8gR2VybWFuIGJ1aWxkIHN0YXR1cyAoQ2xhbmcvTExWTSlcbiAgJ0RpZSBOZXVlcnN0ZWxsdW5nIHd1cmRlJzogJycsXG4gICdOZXVlcyBFcnN0ZWxsZW4gZ2VzdGFydGV0JzogJycsXG4gICdnZXN0YXJ0ZXQ6IFByb2pla3Q6JzogJ1Byb2o6Jyxcbn07XG4iLCAiZXhwb3J0IGNvbnN0IHN5bm9ueW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAvLyA9PT09PT09PT09PT09PT09PT09PSBFTkdMSVNIIFRFUk1TID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gVGVjaG5pY2FsIHRlcm1zXG4gICdhcHBsaWNhdGlvbic6ICdhcHAnLFxuICAnYXBwbGljYXRpb25zJzogJ2FwcHMnLFxuICAncHJvZ3JhbSc6ICdwcm9nJyxcbiAgJ3Byb2dyYW1zJzogJ3Byb2dzJyxcbiAgJ2NvbXB1dGVyJzogJ2NvbXAnLFxuICAnY29tcHV0ZXJzJzogJ2NvbXBzJyxcbiAgJ2luZm9ybWF0aW9uJzogJ2luZm8nLFxuICAnZW52aXJvbm1lbnQnOiAnZW52JyxcbiAgJ2Vudmlyb25tZW50cyc6ICdlbnZzJyxcbiAgJ2NvbmZpZ3VyYXRpb24nOiAnY29uZmlnJyxcbiAgJ2NvbmZpZ3VyYXRpb25zJzogJ2NvbmZpZ3MnLFxuICAnZG9jdW1lbnRhdGlvbic6ICdkb2NzJyxcbiAgJ2Z1bmN0aW9uYWxpdHknOiAnZnVuYycsXG4gICd1dGlsaXphdGlvbic6ICd1c2UnLFxuICAndXRpbGl6ZSc6ICd1c2UnLFxuICAndXRpbGl6ZXMnOiAndXNlcycsXG4gICd1dGlsaXppbmcnOiAndXNpbmcnLFxuICAndXRpbGl6ZWQnOiAndXNlZCcsXG4gICdpbXBsZW1lbnRhdGlvbic6ICdpbXBsJyxcbiAgJ2ltcGxlbWVudGF0aW9ucyc6ICdpbXBscycsXG4gICdpbXBsZW1lbnQnOiAnaW1wbCcsXG4gICdpbXBsZW1lbnRzJzogJ2ltcGxzJyxcbiAgJ2ltcGxlbWVudGluZyc6ICdpbXBsaW5nJyxcbiAgJ2ltcGxlbWVudGVkJzogJ2ltcGxpZWQnLFxuICAnaW5pdGlhbGl6YXRpb24nOiAnaW5pdCcsXG4gICdpbml0aWFsaXplJzogJ2luaXQnLFxuICAnaW5pdGlhbGl6ZXMnOiAnaW5pdHMnLFxuICAnaW5pdGlhbGl6aW5nJzogJ2luaXRpbmcnLFxuICAnaW5pdGlhbGl6ZWQnOiAnaW5pdGVkJyxcbiAgJ29wdGltaXphdGlvbic6ICdvcHQnLFxuICAnb3B0aW1pemF0aW9ucyc6ICdvcHRzJyxcbiAgJ29wdGltaXplJzogJ29wdCcsXG4gICdvcHRpbWl6ZXMnOiAnb3B0cycsXG4gICdvcHRpbWl6aW5nJzogJ29wdGluZycsXG4gICdvcHRpbWl6ZWQnOiAnb3B0ZWQnLFxuICAnc3luY2hyb25pemF0aW9uJzogJ3N5bmMnLFxuICAnc3luY2hyb25pemUnOiAnc3luYycsXG4gICdzeW5jaHJvbml6ZXMnOiAnc3luY3MnLFxuICAnc3luY2hyb25pemluZyc6ICdzeW5jaW5nJyxcbiAgJ3N5bmNocm9uaXplZCc6ICdzeW5jZWQnLFxuICAnYXV0aGVudGljYXRpb24nOiAnYXV0aCcsXG4gICdhdXRoZW50aWNhdGUnOiAnYXV0aCcsXG4gICdhdXRoZW50aWNhdGVzJzogJ2F1dGhzJyxcbiAgJ2F1dGhlbnRpY2F0aW5nJzogJ2F1dGhpbmcnLFxuICAnYXV0aGVudGljYXRlZCc6ICdhdXRoZWQnLFxuICAnYXV0aG9yaXphdGlvbic6ICdhdXRoeicsXG4gICdhdXRob3JpemUnOiAnYXV0aHonLFxuICAnYXV0aG9yaXplcyc6ICdhdXRoenMnLFxuICAnYXV0aG9yaXppbmcnOiAnYXV0aHppbmcnLFxuICAnYXV0aG9yaXplZCc6ICdhdXRoemVkJyxcbiAgJ2lkZW50aWZpY2F0aW9uJzogJ2lkJyxcbiAgJ2lkZW50aWZ5JzogJ2lkJyxcbiAgJ2lkZW50aWZpZXMnOiAnaWRzJyxcbiAgJ2lkZW50aWZ5aW5nJzogJ2lkaW5nJyxcbiAgJ2lkZW50aWZpZWQnOiAnaWRlZCcsXG4gICd0cmFuc2Zvcm1hdGlvbic6ICd0cmFuc2Zvcm0nLFxuICAndHJhbnNmb3JtYXRpb25zJzogJ3RyYW5zZm9ybXMnLFxuICAndHJhbnNmb3JtJzogJ3RyYW5zZm9ybScsXG4gICd0cmFuc2Zvcm1zJzogJ3RyYW5zZm9ybXMnLFxuICAndHJhbnNmb3JtaW5nJzogJ3RyYW5zZm9ybWluZycsXG4gICd0cmFuc2Zvcm1lZCc6ICd0cmFuc2Zvcm1lZCcsXG4gICdjb21tdW5pY2F0aW9uJzogJ2NvbW0nLFxuICAnY29tbXVuaWNhdGlvbnMnOiAnY29tbXMnLFxuXG4gIC8vIEdlbmVyYWwgdGVybXNcbiAgJ2hvd2V2ZXInOiAnYnV0JyxcbiAgJ3RoZXJlZm9yZSc6ICdzbycsXG4gICdjb25zZXF1ZW50bHknOiAnc28nLFxuICAndGh1cyc6ICdzbycsXG4gICdoZW5jZSc6ICdzbycsXG4gICdhbHRob3VnaCc6ICd0aG91Z2gnLFxuICAnZGVzcGl0ZSc6ICdkZXNwJyxcbiAgJ3JlZ2FyZGluZyc6ICdyZScsXG4gICdjb25jZXJuaW5nJzogJ3JlJyxcbiAgJ3Jlc3BlY3RpbmcnOiAncmUnLFxuICAncGVydGFpbmluZyc6ICdyZScsXG4gICdyZWxhdGluZyc6ICdyZScsXG5cbiAgLy8gQWN0aW9uc1xuICAncGVyZm9ybSc6ICdkbycsXG4gICdwZXJmb3Jtcyc6ICdkb2VzJyxcbiAgJ3BlcmZvcm1pbmcnOiAnZG9pbmcnLFxuICAncGVyZm9ybWVkJzogJ2RpZCcsXG4gICdleGVjdXRlJzogJ3J1bicsXG4gICdleGVjdXRlcyc6ICdydW5zJyxcbiAgJ2V4ZWN1dGluZyc6ICdydW5uaW5nJyxcbiAgJ2V4ZWN1dGVkJzogJ3JhbicsXG4gICdnZW5lcmF0ZSc6ICdnZW4nLFxuICAnZ2VuZXJhdGVzJzogJ2dlbnMnLFxuICAnZ2VuZXJhdGluZyc6ICdnZW5pbmcnLFxuICAnZ2VuZXJhdGVkJzogJ2dlbmVkJyxcbiAgJ2NhbGN1bGF0ZSc6ICdjYWxjJyxcbiAgJ2NhbGN1bGF0ZXMnOiAnY2FsY3MnLFxuICAnY2FsY3VsYXRpbmcnOiAnY2FsY2luZycsXG4gICdjYWxjdWxhdGVkJzogJ2NhbGNlZCcsXG4gICdkZXRlcm1pbmUnOiAnZGV0JyxcbiAgJ2RldGVybWluZXMnOiAnZGV0cycsXG4gICdkZXRlcm1pbmluZyc6ICdkZXRpbmcnLFxuICAnZGV0ZXJtaW5lZCc6ICdkZXRlZCcsXG4gICdlc3RhYmxpc2gnOiAnc2V0JyxcbiAgJ2VzdGFibGlzaGVzJzogJ3NldHMnLFxuICAnZXN0YWJsaXNoaW5nJzogJ3NldHRpbmcnLFxuICAnZXN0YWJsaXNoZWQnOiAnc2V0JyxcbiAgJ3Byb3ZpZGUnOiAnZ2l2ZScsXG4gICdwcm92aWRlcyc6ICdnaXZlcycsXG4gICdwcm92aWRpbmcnOiAnZ2l2aW5nJyxcbiAgJ3Byb3ZpZGVkJzogJ2dpdmVuJyxcbiAgJ29idGFpbic6ICdnZXQnLFxuICAnb2J0YWlucyc6ICdnZXRzJyxcbiAgJ29idGFpbmluZyc6ICdnZXR0aW5nJyxcbiAgJ29idGFpbmVkJzogJ2dvdCcsXG4gICdhY3F1aXJlJzogJ2dldCcsXG4gICdhY3F1aXJlcyc6ICdnZXRzJyxcbiAgJ2FjcXVpcmluZyc6ICdnZXR0aW5nJyxcbiAgJ2FjcXVpcmVkJzogJ2dvdCcsXG4gICdyZXRyaWV2ZSc6ICdnZXQnLFxuICAncmV0cmlldmVzJzogJ2dldHMnLFxuICAncmV0cmlldmluZyc6ICdnZXR0aW5nJyxcbiAgJ3JldHJpZXZlZCc6ICdnb3QnLFxuICAncmVtb3ZlJzogJ3JtJyxcbiAgJ3JlbW92ZXMnOiAncm1zJyxcbiAgJ3JlbW92aW5nJzogJ3JtaW5nJyxcbiAgJ3JlbW92ZWQnOiAncm1lZCcsXG4gICdkZWxldGUnOiAnZGVsJyxcbiAgJ2RlbGV0ZXMnOiAnZGVscycsXG4gICdkZWxldGluZyc6ICdkZWxpbmcnLFxuICAnZGVsZXRlZCc6ICdkZWwnLFxuICAnY3JlYXRlJzogJ25ldycsXG4gICdjcmVhdGVzJzogJ25ld3MnLFxuICAnY3JlYXRpbmcnOiAnbmV3aW5nJyxcbiAgJ2NyZWF0ZWQnOiAnbmV3ZWQnLFxuICAnbW9kaWZ5JzogJ21vZCcsXG4gICdtb2RpZmllcyc6ICdtb2RzJyxcbiAgJ21vZGlmeWluZyc6ICdtb2RpbmcnLFxuICAnbW9kaWZpZWQnOiAnbW9kZWQnLFxuICAndXBkYXRlJzogJ3VwZCcsXG4gICd1cGRhdGVzJzogJ3VwZHMnLFxuICAndXBkYXRpbmcnOiAndXBkaW5nJyxcbiAgJ3VwZGF0ZWQnOiAndXBkZWQnLFxuICAnY2hhbmdlJzogJ2NoZycsXG4gICdjaGFuZ2VzJzogJ2NoZ3MnLFxuICAnY2hhbmdpbmcnOiAnY2hnbmcnLFxuICAnY2hhbmdlZCc6ICdjaGdlZCcsXG5cbiAgLy8gQ29tbW9uIHdvcmRzXG4gICdiZWNhdXNlJzogJ2NvcycsXG4gICdhbHRobyc6ICdhbHRobycsXG4gICd0aHJvdWdoJzogJ3RocnUnLFxuICAndW50aWwnOiAndGlsJyxcbiAgJ3dpdGhpbic6ICd3aXRuJyxcbiAgJ3dpdGhvdXQnOiAndy9vJyxcbiAgJ2JldHdlZW4nOiAnYnR3bicsXG4gICdhbW9uZyc6ICdhbW5nJyxcbiAgJ2R1cmluZyc6ICdkdXInLFxuICAnYmVmb3JlJzogJ2JlZicsXG4gICdhZnRlcic6ICdhZnQnLFxuICAnYXJvdW5kJzogJ3JuZCcsXG4gICdhYm91dCc6ICdhYnQnLFxuICAnYXBwcm94aW1hdGVseSc6ICdhcHByb3gnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IEdFUk1BTiBURVJNUyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIEdlcm1hbiB0ZWNobmljYWwgdGVybXNcbiAgJ2Fud2VuZHVuZyc6ICdhcHAnLFxuICAnYW53ZW5kdW5nZW4nOiAnYXBwcycsXG4gICdwcm9ncmFtbSc6ICdwcm9nJyxcbiAgJ3Byb2dyYW1tZSc6ICdwcm9ncycsXG4gICdpbmZvcm1hdGlvbmVuJzogJ2luZm9zJyxcbiAgJ3VtZ2VidW5nJzogJ2VudicsXG4gICdrb25maWd1cmF0aW9uJzogJ2NvbmZpZycsXG4gICdkb2t1bWVudGF0aW9uJzogJ2RvY3MnLFxuICAnZnVua3Rpb25hbGl0XHUwMEU0dCc6ICdmdW5jJyxcbiAgJ2ltcGxlbWVudGllcnVuZyc6ICdpbXBsJyxcbiAgJ2luaXRpYWxpc2llcnVuZyc6ICdpbml0JyxcbiAgJ29wdGltaWVydW5nJzogJ29wdCcsXG4gICdzeW5jaHJvbmlzYXRpb24nOiAnc3luYycsXG4gICdhdXRoZW50aWZpemllcnVuZyc6ICdhdXRoJyxcbiAgJ2F1dG9yaXNhdGlvbic6ICdhdXRoeicsXG4gICdpZGVudGlmaWthdGlvbic6ICdpZCcsXG4gICdrb21tdW5pa2F0aW9uJzogJ2NvbW0nLFxuXG4gIC8vIEdlcm1hbiBhY3Rpb25zXG4gICdhdXNmXHUwMEZDaHJlbic6ICdydW4nLFxuICAnZXJ6ZXVnZW4nOiAnZ2VuJyxcbiAgJ2JlcmVjaG5lbic6ICdjYWxjJyxcbiAgJ2Jlc3RpbW1lbic6ICdkZXQnLFxuICAnZXJzdGVsbGVuJzogJ25ldycsXG4gICdsXHUwMEY2c2NoJzogJ2RlbCcsXG4gICdlbnRmZXJuZW4nOiAncm0nLFxuICAnXHUwMEU0bmRlcm4nOiAnY2hnJyxcbiAgJ2FrdHVhbGlzaWVyZW4nOiAndXBkJyxcbiAgJ21vZGlmaXppZXJlbic6ICdtb2QnLFxuICAnZ2ViZW4nOiAnZ2l2ZScsXG4gICdiZWtvbW1lbic6ICdnZXQnLFxuICAnZXJoYWx0ZW4nOiAnZ2V0JyxcblxuICAvLyBHZXJtYW4gY29tbW9uIHdvcmRzXG4gICdkZXNoYWxiJzogJ3NvJyxcbiAgJ2RhaGVyJzogJ3NvJyxcbiAgJ2Fsc28nOiAnc28nLFxuICAnb2J3b2hsJzogJ3Rob3VnaCcsXG4gICd3XHUwMEU0aHJlbmQnOiAnZHVyJyxcbiAgJ2Jldm9yJzogJ2JlZicsXG4gICduYWNoJzogJ2FmdCcsXG4gICd6d2lzY2hlbic6ICdidHduJyxcbiAgJ3VuZ2VmXHUwMEU0aHInOiAnYXBwcm94JyxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBCVUlMRCBMT0cgLyBDT01QSUxFUiBURVJNUyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIEJ1aWxkIHN5c3RlbSB0ZXJtc1xuICAnY29tcGlsZXInOiAnY2MnLFxuICAnY29tcGlsZXJzJzogJ2NjcycsXG4gICdsaW5rZXInOiAnbGQnLFxuICAnYnVpbGQnOiAnYmxkJyxcbiAgJ2J1aWxkaW5nJzogJ2JsZGluZycsXG4gICdidWlsdCc6ICdibGQnLFxuICAnY29tcGlsZSc6ICdjcGwnLFxuICAnY29tcGlsaW5nJzogJ2NwbGluZycsXG4gICdjb21waWxlZCc6ICdjcGQnLFxuICAnbGluayc6ICdsbmsnLFxuICAnbGlua2luZyc6ICdsbmtpbmcnLFxuICAnbGlua2VkJzogJ2xua2QnLFxuICAncmVidWlsZCc6ICdyYmxkJyxcbiAgJ2NsZWFuJzogJ2NsbicsXG4gICdjbGVhbm5pbmcnOiAnY2xuaW5nJyxcbiAgJ2NsZWFuZWQnOiAnY2xuZCcsXG5cbiAgLy8gRXJyb3Ivd2FybmluZyB0eXBlc1xuICAndW5kZWZpbmVkJzogJ3VuZGVmJyxcbiAgJ3VucmVzb2x2ZWQnOiAndW5yZXMnLFxuICAnaW5jb21wbGV0ZSc6ICdpbmNvbXAnLFxuICAndW51c2VkJzogJ3Vuc2QnLFxuICAnZGVwcmVjYXRlZCc6ICdkZXByJyxcbiAgJ29ic29sZXRlJzogJ29icycsXG4gICdyZWR1bmRhbnQnOiAncmVkbmQnLFxuICAnZHVwbGljYXRlJzogJ2R1cCcsXG4gICdjb25mbGljdCc6ICdjZmxjdCcsXG4gICdhbWJpZ3VvdXMnOiAnYW1iZycsXG5cbiAgLy8gRmlsZS9wYXRoIHJlbGF0ZWRcbiAgJ2RpcmVjdG9yeSc6ICdkaXInLFxuICAnZGlyZWN0b3JpZXMnOiAnZGlycycsXG4gICdmb2xkZXInOiAnZmxkcicsXG4gICdwYXRoJzogJ3B0aCcsXG4gICdwYXRocyc6ICdwdGhzJyxcbiAgJ3NvdXJjZSc6ICdzcmMnLFxuICAnc291cmNlcyc6ICdzcmNjcycsXG4gICdoZWFkZXInOiAnaGRyJyxcbiAgJ2hlYWRlcnMnOiAnaGRycycsXG4gICdpbmNsdWRlJzogJ2luYycsXG4gICdpbmNsdWRlcyc6ICdpbmNzJyxcblxuICAvLyBUeXBlL3ZhcmlhYmxlIHJlbGF0ZWRcbiAgJ3BhcmFtZXRlcic6ICdwcm0nLFxuICAncGFyYW1ldGVycyc6ICdwcm1zJyxcbiAgJ2FyZ3VtZW50JzogJ2FyZycsXG4gICdhcmd1bWVudHMnOiAnYXJncycsXG4gICdleHByZXNzaW9uJzogJ2V4cHInLFxuICAnZXhwcmVzc2lvbnMnOiAnZXhwcnMnLFxuICAnc3RhdGVtZW50JzogJ3N0bXQnLFxuICAnc3RhdGVtZW50cyc6ICdzdG10cycsXG4gICdkZWNsYXJhdGlvbic6ICdkZWNsJyxcbiAgJ2RlY2xhcmF0aW9ucyc6ICdkZWNscycsXG4gICdkZWZpbml0aW9uJzogJ2RlZicsXG4gICdkZWZpbml0aW9ucyc6ICdkZWZzJyxcbiAgJ2luc3RhbmNlJzogJ2luc3QnLFxuICAnaW5zdGFuY2VzJzogJ2luc3RzJyxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBHRVJNQU4gQlVJTEQgTE9HIFRFUk1TID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gR2VybWFuIGJ1aWxkIHRlcm1zXG4gICdlcnN0ZWxsdW5nJzogJ2JsZCcsXG4gICdrb21waWxpZXJlbic6ICdjcGwnLFxuICAndmVya25cdTAwRkNwZmVuJzogJ2xuaycsXG4gICdmZWhsZXInOiAnZXJyJyxcbiAgJ3dhcm51bmcnOiAnd2FybicsXG4gICdoaW53ZWlzJzogJ25vdGUnLFxuICAncXVlbGxlJzogJ3NyYycsXG4gICd6aWVsJzogJ3RndCcsXG4gICd2ZXJ6ZWljaG5pcyc6ICdkaXInLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IE1TVkMgR0VSTUFOIEVSUk9SIFRFUk1TID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gTVNWQyBHZXJtYW4gZXJyb3IgbWVzc2FnZSB0ZXJtcyAoc2luZ2xlIHdvcmRzKVxuICAnQmV6ZWljaG5lcic6ICdpZGVudCcsXG4gICdUeXBzcGV6aWZpemllcmVyJzogJ3R5cGUgc3BlYycsXG4gICdTeW50YXhmZWhsZXInOiAnc3ludGF4IGVycicsXG4gICdkZWtsYXJpZXJ0ZXInOiAnZGVjbGFyZWQnLFxuICAndW5nXHUwMEZDbHRpZyc6ICdpbnZhbGlkJyxcbiAgJ2FuZ2Vub21tZW4nOiAnYXNzdW1lZCcsXG4gICd1bnRlcnN0XHUwMEZDdHp0JzogJ3N1cHBvcnRlZCcsXG4gICdnZVx1MDBGNmZmbmV0JzogJ29wZW5lZCcsXG4gICdWZXJ3ZW5kdW5nJzogJ3VzZScsXG4gICdnZWZ1bmRlbic6ICdmb3VuZCcsXG4gICdmZWhsdCc6ICdtaXNzaW5nJyxcbiAgJ0ZlaGxlbmRlcyc6ICdtaXNzaW5nJyxcbiAgJ0hpbndlaXMnOiAnbm90ZScsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gQ0xBTkcvR0NDIFdBUk5JTkcgVEVSTVMgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBXYXJuaW5nIGNhdGVnb3J5IGFiYnJldmlhdGlvbnNcbiAgJ3VudXNlZC12YXJpYWJsZSc6ICd1bnNkLXZhcicsXG4gICd1bnVzZWQtZnVuY3Rpb24nOiAndW5zZC1mbicsXG4gICd1bnVzZWQtYnV0LXNldC12YXJpYWJsZSc6ICdzZXQtdW5zZCcsXG4gICdtaWNyb3NvZnQtaW5jbHVkZSc6ICdtcy1pbmMnLFxuICAnbm9uLXBvcnRhYmxlJzogJ3BvcnQnLFxuICAnc2VhcmNoIHJ1bGVzJzogJ3J1bGVzJyxcblxuICAvLyBHZXJtYW4gd2FybmluZyB0ZXJtc1xuICAnTmV1ZXJzdGVsbHVuZyc6ICdyYmxkJyxcbiAgJ0Vyc3RlbGxlbic6ICdibGQnLFxufTtcbiIsICJpbXBvcnQgeyBjcmVhdGVDb25maWdTY2hlbWF0aWNzIH0gZnJvbSBcIkBsbXN0dWRpby9zZGtcIjtcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIHNjaGVtYSBmb3IgdGhlIFRyb2dsb2R5dGUgcGx1Z2luLlxuICogRGVmaW5lcyBVSSBzZXR0aW5ncyB0aGF0IHVzZXJzIGNhbiBjdXN0b21pemUgaW4gTE0gU3R1ZGlvLlxuICovXG5leHBvcnQgY29uc3QgY29uZmlnU2NoZW1hdGljcyA9IGNyZWF0ZUNvbmZpZ1NjaGVtYXRpY3MoKVxuICAvLyBDb3JlIGNvbXByZXNzaW9uIHNldHRpbmdzXG4gIC5maWVsZChcbiAgICBcImNvbXByZXNzaW9uTGV2ZWxcIixcbiAgICBcInNlbGVjdFwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIkNvbXByZXNzaW9uIExldmVsXCIsXG4gICAgICBoaW50OiBcIkhvdyBhZ2dyZXNzaXZlbHkgdG8gY29tcHJlc3MgcHJvbXB0cy4gR2VudGxlIHByZXNlcnZlcyBtb3JlIHdvcmRzLCBBZ2dyZXNzaXZlIG1heGltaXplcyB0b2tlbiBzYXZpbmdzLlwiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHZhbHVlOiBcImdlbnRsZVwiLCBkaXNwbGF5TmFtZTogXCJHZW50bGUgKH4yMC0zMCUgcmVkdWN0aW9uKVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiYmFsYW5jZWRcIiwgZGlzcGxheU5hbWU6IFwiQmFsYW5jZWQgKH40NSUgcmVkdWN0aW9uKVwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiYWdncmVzc2l2ZVwiLCBkaXNwbGF5TmFtZTogXCJBZ2dyZXNzaXZlICh+NjAtNzAlIHJlZHVjdGlvbilcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIFwiYmFsYW5jZWRcIixcbiAgKVxuICAvLyBQcm90ZWN0aW9uIG9wdGlvbnNcbiAgLmZpZWxkKFxuICAgIFwicHJvdGVjdFVybHNcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogXCJQcm90ZWN0IFVSTHMgJiBMaW5rc1wiLFxuICAgICAgaGludDogXCJQcmVzZXJ2ZSBVUkxzIGFuZCB3ZWIgbGlua3MgaW50YWN0IGR1cmluZyBjb21wcmVzc2lvbi5cIixcbiAgICB9LFxuICAgIHRydWUsXG4gIClcbiAgLmZpZWxkKFxuICAgIFwicHJvdGVjdE51bWJlcnNcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogXCJQcm90ZWN0IFZlcnNpb24gTnVtYmVycyAmIElEc1wiLFxuICAgICAgaGludDogXCJLZWVwIHZlcnNpb24gbnVtYmVycyAodjEuMC4wKSwgaXNzdWUgcmVmZXJlbmNlcyAoIzEyMzQpLCBhbmQgVVVJRHMgaW50YWN0LlwiLFxuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKVxuICAuZmllbGQoXG4gICAgXCJwcm90ZWN0SGVhZGVyc1wiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlByb3RlY3QgTWFya2Rvd24gSGVhZGVyc1wiLFxuICAgICAgaGludDogXCJQcmVzZXJ2ZSAjIEhlYWRlciBzdHJ1Y3R1cmUgaW4gbWFya2Rvd24gZG9jdW1lbnRzLlwiLFxuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKVxuICAuZmllbGQoXG4gICAgXCJwcm90ZWN0RmlsZVBhdGhzXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiUHJvdGVjdCBGaWxlIFBhdGhzXCIsXG4gICAgICBoaW50OiBcIktlZXAgZmlsZSBwYXRocyBpbnRhY3QgKHByZXZlbnRzICdTb3VyY2UnIFx1MjE5MiAnc3JjJyBjb3JydXB0aW9uKS5cIixcbiAgICB9LFxuICAgIHRydWUsXG4gIClcbiAgLy8gTGFuZ3VhZ2Ugc2V0dGluZ3NcbiAgLmZpZWxkKFxuICAgIFwibGFuZ3VhZ2VNb2RlXCIsXG4gICAgXCJzZWxlY3RcIixcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogXCJMYW5ndWFnZSBNb2RlXCIsXG4gICAgICBoaW50OiBcIlNlbGVjdCB0aGUgbGFuZ3VhZ2UgZm9yIGNvbXByZXNzaW9uIG9yIGVuYWJsZSBhdXRvLWRldGVjdGlvbi4gQ3VycmVudGx5IHN1cHBvcnRzIEVuZ2xpc2ggYW5kIEdlcm1hbiBvbmx5LlwiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHZhbHVlOiBcImF1dG9cIiwgZGlzcGxheU5hbWU6IFwiXHVEODNEXHVERDBEIEF1dG8tRGV0ZWN0IChFTi9ERSlcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcImVuXCIsIGRpc3BsYXlOYW1lOiBcIlx1RDgzQ1x1RERFQ1x1RDgzQ1x1RERFNyBFbmdsaXNoXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJkZVwiLCBkaXNwbGF5TmFtZTogXCJcdUQ4M0NcdURERTlcdUQ4M0NcdURERUEgR2VybWFuXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBcImF1dG9cIixcbiAgKVxuICAvLyBEaXNwbGF5IG9wdGlvbnNcbiAgLmZpZWxkKFxuICAgIFwic2hvd1N0YXRzXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiU2hvdyBTdGF0aXN0aWNzIGluIENvbnNvbGVcIixcbiAgICAgIGhpbnQ6IFwiRGlzcGxheSBjb21wcmVzc2lvbiBzdGF0aXN0aWNzIGFmdGVyIGVhY2ggbWVzc2FnZS5cIixcbiAgICB9LFxuICAgIHRydWUsXG4gIClcbiAgLmJ1aWxkKCk7XG5cbi8qKlxuICogVHlwZSByZXByZXNlbnRpbmcgdGhlIHBsdWdpbiBjb25maWd1cmF0aW9uIHZhbHVlcy5cbiAqL1xuZXhwb3J0IHR5cGUgUGx1Z2luQ29uZmlnID0gdHlwZW9mIGNvbmZpZ1NjaGVtYXRpY3M7XG4iLCAiaW1wb3J0IHsgdHlwZSBQcm9tcHRQcmVwcm9jZXNzb3JDb250cm9sbGVyLCB0eXBlIENoYXRNZXNzYWdlIH0gZnJvbSBcIkBsbXN0dWRpby9zZGtcIjtcbmltcG9ydCB7IFRyb2dsb2R5dGUsIHR5cGUgQ29tcHJlc3Npb25MZXZlbCB9IGZyb20gJy4vdHJvZ2xvZHl0ZSc7XG5pbXBvcnQgeyBwaHJhc2VzIH0gZnJvbSAnLi9kaWN0aW9uYXJpZXMvcGhyYXNlcyc7XG5pbXBvcnQgeyBzeW5vbnltcyB9IGZyb20gJy4vZGljdGlvbmFyaWVzL3N5bm9ueW1zJztcbmltcG9ydCB7IGNvbmZpZ1NjaGVtYXRpY3MgfSBmcm9tICcuL2NvbmZpZyc7XG5cbi8vIEluaXRpYWxpemUgVHJvZ2xvZHl0ZSB3aXRoIGRpY3Rpb25hcmllc1xuY29uc3QgdHJvZ2xvZHl0ZSA9IG5ldyBUcm9nbG9keXRlKHtcbiAgcGhyYXNlcyxcbiAgYmxhY2tsaXN0OiBbXSwgLy8gQmxhY2tsaXN0IG5vdyBoYW5kbGVkIGludGVybmFsbHkgYnkgY29tcHJlc3Npb24gbGV2ZWxcbiAgc3lub255bXMsXG59KTtcblxuLyoqXG4gKiBFeHRyYWN0cyBvbmx5IHRoZSBhY3R1YWwgdXNlciBpbnB1dCBmcm9tIGEgbWVzc2FnZSB0aGF0IG1heSBjb250YWluIHN5c3RlbSBtZXRhZGF0YS5cbiAqIFN5c3RlbSBtZXRhZGF0YSBtYXJrZXJzOiBbWmVpdDosICoqU1lTVEVNRU1QRkVITFVORzoqKiwgU1lTVEVNRU1QRkVITFVORyFcbiAqL1xuZnVuY3Rpb24gZXh0cmFjdFVzZXJJbnB1dCh0ZXh0OiBzdHJpbmcpOiB7IHVzZXJJbnB1dDogc3RyaW5nOyBoYXNTeXN0ZW1NZXRhZGF0YTogYm9vbGVhbiB9IHtcbiAgLy8gTG9vayBmb3Igc3lzdGVtIG1ldGFkYXRhIG1hcmtlcnMgLSB0cnkgbXVsdGlwbGUgcGF0dGVybnNcbiAgY29uc3QgemVpdE1hdGNoID0gdGV4dC5tYXRjaCgvXFxbWmVpdDpcXHMqLyk7XG4gIGNvbnN0IHN5c3RlbUVtcGZlaGx1bmdNYXRjaDEgPSB0ZXh0Lm1hdGNoKC9cXCpcXCpTWVNURU1FTVBGRUhMVU5HOlxcKlxcKi8pOyAgLy8gV2l0aCBhc3Rlcmlza3MgYW5kIGNvbG9uXG4gIGNvbnN0IHN5c3RlbUVtcGZlaGx1bmdNYXRjaDIgPSB0ZXh0Lm1hdGNoKC9TWVNURU1FTVBGRUhMVU5HIS8pOyAgICAgICAgICAgLy8gV2l0aG91dCBhc3Rlcmlza3MsIHdpdGggZXhjbGFtYXRpb25cbiAgXG4gIGxldCBtYXJrZXJJbmRleCA9IC0xO1xuICBcbiAgLy8gRmluZCB0aGUgZWFybGllc3QgbWF0Y2hpbmcgbWFya2VyXG4gIGlmICh6ZWl0TWF0Y2gpIHtcbiAgICBtYXJrZXJJbmRleCA9IHplaXRNYXRjaC5pbmRleCA/PyAtMTtcbiAgfVxuICBpZiAoc3lzdGVtRW1wZmVobHVuZ01hdGNoMSAmJiBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gxLmluZGV4ICE9IG51bGwpIHtcbiAgICBjb25zdCBpZHggPSBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gxLmluZGV4O1xuICAgIGlmIChtYXJrZXJJbmRleCA9PT0gLTEgfHwgaWR4IDwgbWFya2VySW5kZXgpIHtcbiAgICAgIG1hcmtlckluZGV4ID0gaWR4O1xuICAgIH1cbiAgfVxuICBpZiAoc3lzdGVtRW1wZmVobHVuZ01hdGNoMiAmJiBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gyLmluZGV4ICE9IG51bGwpIHtcbiAgICBjb25zdCBpZHggPSBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gyLmluZGV4O1xuICAgIGlmIChtYXJrZXJJbmRleCA9PT0gLTEgfHwgaWR4IDwgbWFya2VySW5kZXgpIHtcbiAgICAgIG1hcmtlckluZGV4ID0gaWR4O1xuICAgIH1cbiAgfVxuICBcbiAgLy8gSWYgbm8gc3lzdGVtIG1ldGFkYXRhIGZvdW5kLCByZXR1cm4gZnVsbCB0ZXh0XG4gIGlmIChtYXJrZXJJbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4geyB1c2VySW5wdXQ6IHRleHQsIGhhc1N5c3RlbU1ldGFkYXRhOiBmYWxzZSB9O1xuICB9XG4gIFxuICAvLyBFeHRyYWN0IGV2ZXJ5dGhpbmcgYmVmb3JlIHRoZSBmaXJzdCBzeXN0ZW0gbWV0YWRhdGEgbWFya2VyXG4gIGNvbnN0IHVzZXJJbnB1dCA9IHRleHQuc3Vic3RyaW5nKDAsIG1hcmtlckluZGV4KS50cmltKCk7XG4gIFxuICByZXR1cm4geyB1c2VySW5wdXQsIGhhc1N5c3RlbU1ldGFkYXRhOiB0cnVlIH07XG59XG5cblxuLyoqXG4gKiBQcm9tcHQgUHJlcHJvY2Vzc29yIC0gQ29tcHJlc3NlcyB1c2VyIHByb21wdHMgYnkgcmVtb3ZpbmcgZmx1ZmYgYW5kIGZpbGxlciB3b3Jkcy5cbiAqIFJlZHVjZXMgdG9rZW4gdXNhZ2UgYnkgfjQ1JSB3aGlsZSBwcmVzZXJ2aW5nIGNvcmUgbWVhbmluZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZXByb2Nlc3MoY3RsOiBQcm9tcHRQcmVwcm9jZXNzb3JDb250cm9sbGVyLCB1c2VyTWVzc2FnZTogQ2hhdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAvLyBIYW5kbGUgYWJvcnQgc2lnbmFsIC0gZXhpdCBlYXJseSBpZiBwcmVwcm9jZXNzaW5nIHdhcyBjYW5jZWxsZWRcbiAgaWYgKGN0bC5hYm9ydFNpZ25hbC5hYm9ydGVkKSB7XG4gICAgcmV0dXJuIHVzZXJNZXNzYWdlLmdldFRleHQoKTtcbiAgfVxuXG4gIC8vIFJlYWQgYWxsIGNvbmZpZ3VyYXRpb24gZnJvbSBwbHVnaW4gY29uZmlnXG4gIGNvbnN0IHBsdWdpbkNvbmZpZyA9IGN0bC5nZXRQbHVnaW5Db25maWcoY29uZmlnU2NoZW1hdGljcyk7XG4gIFxuICBjb25zdCBjb21wcmVzc2lvbkxldmVsOiBDb21wcmVzc2lvbkxldmVsID0gKHBsdWdpbkNvbmZpZy5nZXQoXCJjb21wcmVzc2lvbkxldmVsXCIpIGFzIENvbXByZXNzaW9uTGV2ZWwpID8/IFwiYmFsYW5jZWRcIjtcbiAgY29uc3QgcHJvdGVjdFVybHMgPSBwbHVnaW5Db25maWcuZ2V0KFwicHJvdGVjdFVybHNcIikgYXMgYm9vbGVhbiA/PyB0cnVlO1xuICBjb25zdCBwcm90ZWN0TnVtYmVycyA9IHBsdWdpbkNvbmZpZy5nZXQoXCJwcm90ZWN0TnVtYmVyc1wiKSBhcyBib29sZWFuID8/IHRydWU7XG4gIGNvbnN0IHByb3RlY3RIZWFkZXJzID0gcGx1Z2luQ29uZmlnLmdldChcInByb3RlY3RIZWFkZXJzXCIpIGFzIGJvb2xlYW4gPz8gdHJ1ZTtcbiAgY29uc3QgcHJvdGVjdEZpbGVQYXRocyA9IHBsdWdpbkNvbmZpZy5nZXQoXCJwcm90ZWN0RmlsZVBhdGhzXCIpIGFzIGJvb2xlYW4gPz8gdHJ1ZTtcbiAgY29uc3QgbGFuZ3VhZ2VNb2RlID0gcGx1Z2luQ29uZmlnLmdldChcImxhbmd1YWdlTW9kZVwiKSBhcyBzdHJpbmcgPz8gXCJhdXRvXCI7XG4gIGNvbnN0IHNob3dTdGF0cyA9IHBsdWdpbkNvbmZpZy5nZXQoXCJzaG93U3RhdHNcIikgYXMgYm9vbGVhbiA/PyB0cnVlO1xuXG4gIC8vIENyZWF0ZSBzdGF0dXMgcmVwb3J0IGZvciBVSSBmZWVkYmFja1xuICBjb25zdCBzdGF0dXMgPSBjdGwuY3JlYXRlU3RhdHVzKHtcbiAgICBzdGF0dXM6IFwibG9hZGluZ1wiIGFzIGNvbnN0LFxuICAgIHRleHQ6IGBUcm9nbG9keWZ5aW5nIHByb21wdCAoJHtjb21wcmVzc2lvbkxldmVsfSkuLi5gLFxuICB9KTtcblxuICB0cnkge1xuICAgIGNvbnN0IGZ1bGxUZXh0ID0gdXNlck1lc3NhZ2UuZ2V0VGV4dCgpO1xuICAgIFxuICAgIC8vIE9QVElPTiAyIEZJWDogRXh0cmFjdCBvbmx5IGFjdHVhbCB1c2VyIGlucHV0LCBza2lwIHN5c3RlbSBtZXRhZGF0YVxuICAgIGNvbnN0IHsgdXNlcklucHV0LCBoYXNTeXN0ZW1NZXRhZGF0YSB9ID0gZXh0cmFjdFVzZXJJbnB1dChmdWxsVGV4dCk7XG4gICAgXG4gICAgaWYgKHNob3dTdGF0cyAmJiBoYXNTeXN0ZW1NZXRhZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBEZXRlY3RlZCBzeXN0ZW0gbWV0YWRhdGEuIFByb2Nlc3NpbmcgJHt1c2VySW5wdXQubGVuZ3RofSBjaGFycyBvZiB1c2VyIGlucHV0IChza2lwcGVkICR7ZnVsbFRleHQubGVuZ3RoIC0gdXNlcklucHV0Lmxlbmd0aH0gY2hhcnMgb2YgbWV0YWRhdGEpYCk7XG4gICAgfVxuICAgIFxuICAgIC8vIENvbXByZXNzIG9ubHkgdGhlIGFjdHVhbCB1c2VyIGlucHV0XG4gICAgY29uc3QgY29tcHJlc3NlZFVzZXJJbnB1dCA9IHRyb2dsb2R5dGUuY29tcHJlc3ModXNlcklucHV0LCB7IFxuICAgICAgbGV2ZWw6IGNvbXByZXNzaW9uTGV2ZWwsXG4gICAgICBwcm90ZWN0VXJscyxcbiAgICAgIHByb3RlY3ROdW1iZXJzLFxuICAgICAgcHJvdGVjdEhlYWRlcnMsXG4gICAgICBwcm90ZWN0RmlsZVBhdGhzLFxuICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlTW9kZSAhPT0gXCJhdXRvXCIgPyAobGFuZ3VhZ2VNb2RlIGFzIGltcG9ydCgnLi90cm9nbG9keXRlJykuTGFuZ3VhZ2VDb2RlKSA6IHVuZGVmaW5lZCxcbiAgICB9KTtcblxuICAgIC8vIFJlY29uc3RydWN0IHRoZSBmdWxsIG1lc3NhZ2Ugd2l0aCBjb21wcmVzc2VkIHVzZXIgaW5wdXQgKyBvcmlnaW5hbCBzeXN0ZW0gbWV0YWRhdGFcbiAgICBjb25zdCBzeXN0ZW1NZXRhZGF0YSA9IGhhc1N5c3RlbU1ldGFkYXRhID8gZnVsbFRleHQuc3Vic3RyaW5nKHVzZXJJbnB1dC5sZW5ndGgpIDogJyc7XG4gICAgY29uc3QgY29tcHJlc3NlZCA9IGNvbXByZXNzZWRVc2VySW5wdXQgKyBzeXN0ZW1NZXRhZGF0YTtcblxuICAgIC8vIENhbGN1bGF0ZSBjb21wcmVzc2lvbiBzdGF0cyAob25seSBvbiB1c2VyIGlucHV0IHBvcnRpb24pXG4gICAgY29uc3Qgb3JpZ2luYWxMZW5ndGggPSB1c2VySW5wdXQubGVuZ3RoO1xuICAgIGNvbnN0IGNvbXByZXNzZWRMZW5ndGggPSBjb21wcmVzc2VkVXNlcklucHV0Lmxlbmd0aDtcbiAgICBjb25zdCBzYXZpbmdzID0gTWF0aC5yb3VuZCgoKG9yaWdpbmFsTGVuZ3RoIC0gY29tcHJlc3NlZExlbmd0aCkgLyBvcmlnaW5hbExlbmd0aCkgKiAxMDApO1xuXG4gICAgLy8gR2V0IGN1bXVsYXRpdmUgc3RhdGlzdGljc1xuICAgIGNvbnN0IGN1bXVsYXRpdmVTdGF0cyA9IHRyb2dsb2R5dGUuZ2V0U3RhdHMoKTtcblxuICAgIC8vIERldGFpbGVkIGxvZ2dpbmcgaXMgbm93IGhhbmRsZWQgaW4gdHJvZ2xvZHl0ZS50cyB0byBhdm9pZCBkdXBsaWNhdGlvblxuICAgIC8vIGFuZCB0byBpbmNsdWRlIHRoZSBuZXcgXHUyNUI2IElOUFVUIC8gXHUyNUI2IENPTVBSRVNTRUQgZGVidWcgbGluZXMuXG5cbiAgICAvLyBVcGRhdGUgc3RhdHVzIHRvIGNvbXBsZXRlZCB3aXRoIGRldGFpbGVkIGluZm9cbiAgICBjb25zdCBwcm90ZWN0aW9uSW5mbyA9IFtdO1xuICAgIGlmIChwcm90ZWN0VXJscykgcHJvdGVjdGlvbkluZm8ucHVzaChcIlVSTHNcIik7XG4gICAgaWYgKHByb3RlY3ROdW1iZXJzKSBwcm90ZWN0aW9uSW5mby5wdXNoKFwiSURzXCIpO1xuICAgIFxuICAgIGxldCBzdGF0dXNUZXh0ID0gYENvbXByZXNzZWQgYnkgJHtzYXZpbmdzfSVgO1xuICAgIGlmIChwcm90ZWN0aW9uSW5mby5sZW5ndGggPiAwKSB7XG4gICAgICBzdGF0dXNUZXh0ICs9IGAgKHByb3RlY3RlZDogJHtwcm90ZWN0aW9uSW5mby5qb2luKFwiLCBcIil9KWA7XG4gICAgfVxuICAgIFxuICAgIHN0YXR1cy5zZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IFwiZG9uZVwiIGFzIGNvbnN0LFxuICAgICAgdGV4dDogc3RhdHVzVGV4dCxcbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wcmVzc2VkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKTtcbiAgICBjb25zb2xlLmVycm9yKFwiW1Ryb2dsb2R5dGVdIEVycm9yIGNvbXByZXNzaW5nIHByb21wdDpcIiwgZXJyb3JNZXNzYWdlKTtcbiAgICBjb25zb2xlLmVycm9yKFwiW1Ryb2dsb2R5dGVdIFN0YWNrIHRyYWNlOlwiLCBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3Iuc3RhY2sgOiAnTi9BJyk7XG4gICAgXG4gICAgLy8gVXBkYXRlIHN0YXR1cyB0byBzaG93IGVycm9yIHdpdGggZGV0YWlsc1xuICAgIHN0YXR1cy5zZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IFwiZG9uZVwiIGFzIGNvbnN0LFxuICAgICAgdGV4dDogYENvbXByZXNzaW9uIGZhaWxlZCAoJHtlcnJvck1lc3NhZ2Uuc3Vic3RyaW5nKDAsIDQwKX0uLi4pIC0gdXNpbmcgb3JpZ2luYWxgLFxuICAgIH0pO1xuXG4gICAgLy8gUmV0dXJuIG9yaWdpbmFsIG1lc3NhZ2UgaWYgY29tcHJlc3Npb24gZmFpbHNcbiAgICByZXR1cm4gdXNlck1lc3NhZ2UuZ2V0VGV4dCgpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgdHlwZSBQbHVnaW5Db250ZXh0IH0gZnJvbSBcIkBsbXN0dWRpby9zZGtcIjtcbmltcG9ydCB7IHByZXByb2Nlc3MgfSBmcm9tIFwiLi9wcm9tcHRQcmVwcm9jZXNzb3JcIjtcbmltcG9ydCB7IGNvbmZpZ1NjaGVtYXRpY3MgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuLyoqXG4gKiBNYWluIGVudHJ5IHBvaW50IGZvciB0aGUgVHJvZ2xvZHl0ZSBwbHVnaW4uXG4gKiBSZWdpc3RlcnMgdGhlIHByb21wdCBwcmVwcm9jZXNzb3IgYW5kIGNvbmZpZ3VyYXRpb24gd2l0aCBMTSBTdHVkaW8uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKGNvbnRleHQ6IFBsdWdpbkNvbnRleHQpIHtcbiAgLy8gUmVnaXN0ZXIgdGhlIGNvbmZpZ3VyYXRpb24gc2NoZW1hdGljcyAoZW5hYmxlcyBVSSBzZXR0aW5ncylcbiAgY29udGV4dC53aXRoQ29uZmlnU2NoZW1hdGljcyhjb25maWdTY2hlbWF0aWNzKTtcbiAgXG4gIC8vIFJlZ2lzdGVyIHRoZSBwcm9tcHQgcHJlcHJvY2Vzc29yXG4gIGNvbnRleHQud2l0aFByb21wdFByZXByb2Nlc3NvcihwcmVwcm9jZXNzKTtcbn1cbiIsICJpbXBvcnQgeyBMTVN0dWRpb0NsaWVudCwgdHlwZSBQbHVnaW5Db250ZXh0IH0gZnJvbSBcIkBsbXN0dWRpby9zZGtcIjtcblxuZGVjbGFyZSB2YXIgcHJvY2VzczogYW55O1xuXG4vLyBXZSByZWNlaXZlIHJ1bnRpbWUgaW5mb3JtYXRpb24gaW4gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbmNvbnN0IGNsaWVudElkZW50aWZpZXIgPSBwcm9jZXNzLmVudi5MTVNfUExVR0lOX0NMSUVOVF9JREVOVElGSUVSO1xuY29uc3QgY2xpZW50UGFzc2tleSA9IHByb2Nlc3MuZW52LkxNU19QTFVHSU5fQ0xJRU5UX1BBU1NLRVk7XG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTE1TX1BMVUdJTl9CQVNFX1VSTDtcblxuY29uc3QgY2xpZW50ID0gbmV3IExNU3R1ZGlvQ2xpZW50KHtcbiAgY2xpZW50SWRlbnRpZmllcixcbiAgY2xpZW50UGFzc2tleSxcbiAgYmFzZVVybCxcbn0pO1xuXG4oZ2xvYmFsVGhpcyBhcyBhbnkpLl9fTE1TX1BMVUdJTl9DT05URVhUID0gdHJ1ZTtcblxubGV0IHByZWRpY3Rpb25Mb29wSGFuZGxlclNldCA9IGZhbHNlO1xubGV0IHByb21wdFByZXByb2Nlc3NvclNldCA9IGZhbHNlO1xubGV0IGNvbmZpZ1NjaGVtYXRpY3NTZXQgPSBmYWxzZTtcbmxldCBnbG9iYWxDb25maWdTY2hlbWF0aWNzU2V0ID0gZmFsc2U7XG5sZXQgdG9vbHNQcm92aWRlclNldCA9IGZhbHNlO1xubGV0IGdlbmVyYXRvclNldCA9IGZhbHNlO1xuXG5jb25zdCBzZWxmUmVnaXN0cmF0aW9uSG9zdCA9IGNsaWVudC5wbHVnaW5zLmdldFNlbGZSZWdpc3RyYXRpb25Ib3N0KCk7XG5cbmNvbnN0IHBsdWdpbkNvbnRleHQ6IFBsdWdpbkNvbnRleHQgPSB7XG4gIHdpdGhQcmVkaWN0aW9uTG9vcEhhbmRsZXI6IChnZW5lcmF0ZSkgPT4ge1xuICAgIGlmIChwcmVkaWN0aW9uTG9vcEhhbmRsZXJTZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlByZWRpY3Rpb25Mb29wSGFuZGxlciBhbHJlYWR5IHJlZ2lzdGVyZWRcIik7XG4gICAgfVxuICAgIGlmICh0b29sc1Byb3ZpZGVyU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcmVkaWN0aW9uTG9vcEhhbmRsZXIgY2Fubm90IGJlIHVzZWQgd2l0aCBhIHRvb2xzIHByb3ZpZGVyXCIpO1xuICAgIH1cblxuICAgIHByZWRpY3Rpb25Mb29wSGFuZGxlclNldCA9IHRydWU7XG4gICAgc2VsZlJlZ2lzdHJhdGlvbkhvc3Quc2V0UHJlZGljdGlvbkxvb3BIYW5kbGVyKGdlbmVyYXRlKTtcbiAgICByZXR1cm4gcGx1Z2luQ29udGV4dDtcbiAgfSxcbiAgd2l0aFByb21wdFByZXByb2Nlc3NvcjogKHByZXByb2Nlc3MpID0+IHtcbiAgICBpZiAocHJvbXB0UHJlcHJvY2Vzc29yU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm9tcHRQcmVwcm9jZXNzb3IgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgIH1cbiAgICBwcm9tcHRQcmVwcm9jZXNzb3JTZXQgPSB0cnVlO1xuICAgIHNlbGZSZWdpc3RyYXRpb25Ib3N0LnNldFByb21wdFByZXByb2Nlc3NvcihwcmVwcm9jZXNzKTtcbiAgICByZXR1cm4gcGx1Z2luQ29udGV4dDtcbiAgfSxcbiAgd2l0aENvbmZpZ1NjaGVtYXRpY3M6IChjb25maWdTY2hlbWF0aWNzKSA9PiB7XG4gICAgaWYgKGNvbmZpZ1NjaGVtYXRpY3NTZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbmZpZyBzY2hlbWF0aWNzIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtcbiAgICB9XG4gICAgY29uZmlnU2NoZW1hdGljc1NldCA9IHRydWU7XG4gICAgc2VsZlJlZ2lzdHJhdGlvbkhvc3Quc2V0Q29uZmlnU2NoZW1hdGljcyhjb25maWdTY2hlbWF0aWNzKTtcbiAgICByZXR1cm4gcGx1Z2luQ29udGV4dDtcbiAgfSxcbiAgd2l0aEdsb2JhbENvbmZpZ1NjaGVtYXRpY3M6IChnbG9iYWxDb25maWdTY2hlbWF0aWNzKSA9PiB7XG4gICAgaWYgKGdsb2JhbENvbmZpZ1NjaGVtYXRpY3NTZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkdsb2JhbCBjb25maWcgc2NoZW1hdGljcyBhbHJlYWR5IHJlZ2lzdGVyZWRcIik7XG4gICAgfVxuICAgIGdsb2JhbENvbmZpZ1NjaGVtYXRpY3NTZXQgPSB0cnVlO1xuICAgIHNlbGZSZWdpc3RyYXRpb25Ib3N0LnNldEdsb2JhbENvbmZpZ1NjaGVtYXRpY3MoZ2xvYmFsQ29uZmlnU2NoZW1hdGljcyk7XG4gICAgcmV0dXJuIHBsdWdpbkNvbnRleHQ7XG4gIH0sXG4gIHdpdGhUb29sc1Byb3ZpZGVyOiAodG9vbHNQcm92aWRlcikgPT4ge1xuICAgIGlmICh0b29sc1Byb3ZpZGVyU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb29scyBwcm92aWRlciBhbHJlYWR5IHJlZ2lzdGVyZWRcIik7XG4gICAgfVxuICAgIGlmIChwcmVkaWN0aW9uTG9vcEhhbmRsZXJTZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRvb2xzIHByb3ZpZGVyIGNhbm5vdCBiZSB1c2VkIHdpdGggYSBwcmVkaWN0aW9uTG9vcEhhbmRsZXJcIik7XG4gICAgfVxuXG4gICAgdG9vbHNQcm92aWRlclNldCA9IHRydWU7XG4gICAgc2VsZlJlZ2lzdHJhdGlvbkhvc3Quc2V0VG9vbHNQcm92aWRlcih0b29sc1Byb3ZpZGVyKTtcbiAgICByZXR1cm4gcGx1Z2luQ29udGV4dDtcbiAgfSxcbiAgd2l0aEdlbmVyYXRvcjogKGdlbmVyYXRvcikgPT4ge1xuICAgIGlmIChnZW5lcmF0b3JTZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBhbHJlYWR5IHJlZ2lzdGVyZWRcIik7XG4gICAgfVxuXG4gICAgZ2VuZXJhdG9yU2V0ID0gdHJ1ZTtcbiAgICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5zZXRHZW5lcmF0b3IoZ2VuZXJhdG9yKTtcbiAgICByZXR1cm4gcGx1Z2luQ29udGV4dDtcbiAgfSxcbn07XG5cbmltcG9ydChcIi4vLi4vc3JjL2luZGV4LnRzXCIpLnRoZW4oYXN5bmMgbW9kdWxlID0+IHtcbiAgcmV0dXJuIGF3YWl0IG1vZHVsZS5tYWluKHBsdWdpbkNvbnRleHQpO1xufSkudGhlbigoKSA9PiB7XG4gIHNlbGZSZWdpc3RyYXRpb25Ib3N0LmluaXRDb21wbGV0ZWQoKTtcbn0pLmNhdGNoKChlcnJvcikgPT4ge1xuICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgdGhlIG1haW4gZnVuY3Rpb24gb2YgdGhlIHBsdWdpbi5cIik7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7QUFBQSxJQU1hLFdBTUEsYUF1RkEsZUFnQkE7QUFuSGI7QUFBQTtBQUFBO0FBTU8sSUFBTSxZQUFZO0FBQUEsTUFDdkI7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFjO0FBQUEsTUFBZTtBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFDaEY7QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxJQUNoRTtBQUdPLElBQU0sY0FBYztBQUFBLE1BQ3pCLEdBQUc7QUFBQTtBQUFBLE1BRUg7QUFBQSxNQUFLO0FBQUEsTUFBTTtBQUFBO0FBQUEsTUFFWDtBQUFBLE1BQUs7QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQzlEO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBWTtBQUFBO0FBQUEsTUFFcEM7QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUE7QUFBQSxNQUVoRDtBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQ3JFO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUE7QUFBQSxNQUV2QjtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBTTtBQUFBLE1BQVM7QUFBQSxNQUFNO0FBQUEsTUFDMUU7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQ3RFO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUN6RTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUN0RTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUE7QUFBQSxNQUUzQztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQ3RFO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFNO0FBQUEsTUFBVztBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQTtBQUFBLE1BRXJFO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUE7QUFBQSxNQUUxQjtBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ3RFO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUNyRTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFDeEU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBYTtBQUFBLE1BQWE7QUFBQSxNQUNoRTtBQUFBLE1BQWE7QUFBQSxNQUFXO0FBQUEsTUFBYTtBQUFBLE1BQWM7QUFBQSxNQUFjO0FBQUEsTUFDakU7QUFBQSxNQUFZO0FBQUEsTUFBYTtBQUFBLE1BQWU7QUFBQSxNQUFhO0FBQUEsTUFBYTtBQUFBLE1BQ2xFO0FBQUEsTUFBWTtBQUFBLE1BQVk7QUFBQSxNQUFjO0FBQUEsTUFBUztBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFRO0FBQUEsTUFBYTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUE7QUFBQSxNQUV4QztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ3JFO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUNsRTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQ3RFO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUNqRTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUM5RDtBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFjO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUNuRTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDbEU7QUFBQSxNQUFZO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFDckU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFDL0Q7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFPO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ2xFO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQWE7QUFBQSxNQUFXO0FBQUEsTUFDbkU7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUNqRTtBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBYTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQ2hFO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFDNUQ7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUNqRTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFDdEU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFDaEU7QUFBQSxNQUFXO0FBQUEsTUFBYztBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUM5RDtBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFDekQ7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUMvRDtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUNsRTtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUNuRTtBQUFBLE1BQVM7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUNuRTtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUNsRTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUNuRTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFhO0FBQUEsTUFBWTtBQUFBLE1BQ2pFO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBYTtBQUFBLE1BQVM7QUFBQSxNQUFZO0FBQUEsTUFDbkU7QUFBQSxNQUFZO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUNsRTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBWTtBQUFBLE1BQy9EO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFhO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQ3BFO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFZO0FBQUEsTUFBWTtBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQ3ZFO0FBQUEsTUFBWTtBQUFBLE1BQWE7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFDbEU7QUFBQSxNQUFjO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFlO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUNsRTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFPO0FBQUEsTUFDcEU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFDcEU7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBYztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFDbkU7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUNqRTtBQUFBLE1BQVk7QUFBQSxNQUFTO0FBQUEsTUFBWTtBQUFBLE1BQVM7QUFBQSxNQUFZO0FBQUEsTUFBUztBQUFBLE1BQy9EO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUNsRTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUM5RDtBQUFBLE1BQVU7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQ2xFO0FBQUEsTUFBVTtBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFDOUQ7QUFBQSxNQUFTO0FBQUEsTUFBYTtBQUFBLE1BQVc7QUFBQSxNQUFhO0FBQUEsTUFBYTtBQUFBLE1BQzNEO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUFjO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUMxRDtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQzNEO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFZO0FBQUEsTUFBYTtBQUFBLE1BQWU7QUFBQSxNQUMxRDtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVk7QUFBQSxNQUNuRTtBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBYztBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQ2xFO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFV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O0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ3JFO0FBQUEsTUFBUztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBWTtBQUFBLE1BQVM7QUFBQSxNQUNqRTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUFhO0FBQUEsTUFBYTtBQUFBLE1BQ3BFO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQ25FO0FBQUEsTUFBWTtBQUFBLE1BQVE7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUE7QUFBQSxNQUVsRTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFVO0FBQUEsTUFDbEU7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQ3RFO0FBQUEsTUFBWTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUE7QUFBQSxNQUU5QjtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUNsRTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUE7QUFBQSxNQUVqRDtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUMvRDtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUNqRTtBQUFBLE1BQVU7QUFBQSxNQUFhO0FBQUEsTUFBVTtBQUFBLE1BQWdCO0FBQUEsTUFBYztBQUFBLE1BQy9EO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQTtBQUFBLE1BRXBCO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBYztBQUFBLE1BQzNEO0FBQUEsTUFBWTtBQUFBLE1BQVE7QUFBQSxNQUFZO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUFVO0FBQUEsTUFDMUQ7QUFBQSxNQUFPO0FBQUEsTUFBVztBQUFBLE1BQU87QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQy9DO0FBQUEsTUFBYztBQUFBLE1BQWtCO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFhO0FBQUEsTUFDL0Q7QUFBQSxNQUFZO0FBQUEsTUFBYztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUM5RDtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFNO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFDbEU7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFDM0Q7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQWM7QUFBQSxNQUNqRTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFNO0FBQUE7QUFBQSxNQUU1QztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUM5RDtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUNqRTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUNoRTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFDbkU7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUMzRDtBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQ2pFO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBYTtBQUFBLE1BQ3BFO0FBQUEsTUFBWTtBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFDL0Q7QUFBQSxNQUFZO0FBQUEsTUFBWTtBQUFBLE1BQWE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUMvRDtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBYTtBQUFBLE1BQ2xFO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQ2pFO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFZO0FBQUEsTUFDOUQ7QUFBQSxNQUFZO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFVO0FBQUEsTUFDL0Q7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxJQUMvQjtBQUdPLElBQU0sZ0JBQWdCO0FBQUEsTUFDM0IsR0FBRztBQUFBLE1BQ0g7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFDcEU7QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxJQUN0QjtBQUVPLElBQU0sZUFBZTtBQUFBLE1BQzFCLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxJQUNkO0FBQUE7QUFBQTs7O0FDbEZBLElBZWEsdUJBS0E7QUFwQmI7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQU1BO0FBQ0E7QUFFTyxJQUFNLHdCQUE4RztBQUFBLE1BQ3pILElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxJQUNOO0FBRU8sSUFBTSxzQkFBc0MsQ0FBQyxNQUFNLElBQUk7QUFBQTtBQUFBOzs7QUNVOUQsU0FBUyxlQUFlLE1BQTRCO0FBQ2xELFFBQU0sUUFBUSxLQUFLLFlBQVksRUFBRSxNQUFNLG9CQUFvQixLQUFLLENBQUM7QUFHakUsUUFBTSxlQUFlLG9CQUFJLElBQUk7QUFBQSxJQUMzQjtBQUFBLElBQU87QUFBQSxJQUFLO0FBQUEsSUFBTTtBQUFBLElBQU07QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQVE7QUFBQSxJQUFNO0FBQUEsSUFBUTtBQUFBLElBQVE7QUFBQSxJQUFPO0FBQUEsSUFDM0U7QUFBQSxJQUFNO0FBQUEsSUFBUTtBQUFBLElBQU87QUFBQSxJQUFRO0FBQUEsSUFBUztBQUFBLElBQVM7QUFBQSxJQUFVO0FBQUEsSUFBTztBQUFBLElBQVM7QUFBQSxJQUN6RTtBQUFBLElBQVE7QUFBQSxJQUFRO0FBQUEsSUFBUztBQUFBLElBQVM7QUFBQSxJQUFNO0FBQUEsSUFBTztBQUFBLElBQVE7QUFBQSxJQUFRO0FBQUEsSUFBUztBQUFBLElBQ3hFO0FBQUEsSUFBUTtBQUFBLElBQVE7QUFBQSxJQUFRO0FBQUEsSUFBUztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQVM7QUFBQSxJQUFPO0FBQUEsSUFBTTtBQUFBLElBQzVFO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFNO0FBQUEsSUFBTztBQUFBLElBQU07QUFBQSxJQUFNO0FBQUEsSUFBUTtBQUFBLElBQVE7QUFBQSxJQUFPO0FBQUEsSUFBUTtBQUFBLElBQ3RFO0FBQUEsSUFBUztBQUFBLElBQVM7QUFBQSxJQUFTO0FBQUEsSUFBUztBQUFBLElBQU87QUFBQSxJQUFRO0FBQUEsSUFBTztBQUFBLElBQVc7QUFBQSxJQUNyRTtBQUFBLElBQVc7QUFBQSxJQUFRO0FBQUEsSUFBTztBQUFBLElBQVE7QUFBQSxJQUFRO0FBQUEsSUFBVztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQzFFO0FBQUEsSUFBUTtBQUFBLElBQVE7QUFBQSxJQUFRO0FBQUEsSUFBUztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBUTtBQUFBLElBQU87QUFBQSxJQUFRO0FBQUEsSUFDdEU7QUFBQSxJQUFRO0FBQUEsSUFBVztBQUFBLElBQVM7QUFBQSxJQUFTO0FBQUEsSUFBTTtBQUFBLElBQVM7QUFBQSxJQUFRO0FBQUEsSUFBWTtBQUFBLElBQ3hFO0FBQUEsSUFBUztBQUFBLElBQVU7QUFBQSxJQUFVO0FBQUEsSUFBUztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTTtBQUFBLElBQVE7QUFBQSxJQUFPO0FBQUEsRUFDM0UsQ0FBQztBQUdELFFBQU0sZUFBZSxvQkFBSSxJQUFJO0FBQUEsSUFDM0I7QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBTztBQUFBLElBQU87QUFBQSxJQUFPO0FBQUEsSUFBUTtBQUFBLElBQVM7QUFBQSxJ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VkEsSUFBYTtBQUFiO0FBQUE7QUFBQTtBQUFPLElBQU0sV0FBbUM7QUFBQTtBQUFBO0FBQUEsTUFJOUMsZUFBZTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUEsTUFDaEIsV0FBVztBQUFBLE1BQ1gsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsZUFBZTtBQUFBLE1BQ2YsZUFBZTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUEsTUFDaEIsaUJBQWlCO0FBQUEsTUFDakIsa0JBQWtCO0FBQUEsTUFDbEIsaUJBQWlCO0FBQUEsTUFDakIsaUJBQWlCO0FBQUEsTUFDakIsZUFBZTtBQUFBLE1BQ2YsV0FBVztBQUFBLE1BQ1gsWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osa0JBQWtCO0FBQUEsTUFDbEIsbUJBQW1CO0FBQUEsTUFDbkIsYUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLE1BQ2QsZ0JBQWdCO0FBQUEsTUFDaEIsZUFBZTtBQUFBLE1BQ2Ysa0JBQWtCO0FBQUEsTUFDbEIsY0FBYztBQUFBLE1BQ2QsZUFBZTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUEsTUFDaEIsZUFBZTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUEsTUFDaEIsaUJBQWlCO0FBQUEsTUFDakIsWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLE1BQ2QsYUFBYTtBQUFBLE1BQ2IsbUJBQW1CO0FBQUEsTUFDbkIsZUFBZTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUEsTUFDaEIsaUJBQWlCO0FBQUEsTUFDakIsZ0JBQWdCO0FBQUEsTUFDaEIsa0JBQWtCO0FBQUEsTUFDbEIsZ0JBQWdCO0FBQUEsTUFDaEIsaUJBQWlCO0FBQUEsTUFDakIsa0JBQWtCO0FBQUEsTUFDbEIsaUJBQWlCO0FBQUEsTUFDakIsaUJBQWlCO0FBQUEsTUFDakIsYUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLE1BQ2QsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2Qsa0JBQWtCO0FBQUEsTUFDbEIsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLE1BQ2QsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2Qsa0JBQWtCO0FBQUEsTUFDbEIsbUJBQW1CO0FBQUEsTUFDbkIsYUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLE1BQ2QsZ0JBQWdCO0FBQUEsTUFDaEIsZUFBZTtBQUFBLE1BQ2YsaUJBQWlCO0FBQUEsTUFDakIsa0JBQWtCO0FBQUE7QUFBQSxNQUdsQixXQUFXO0FBQUEsTUFDWCxhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxNQUNoQixRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxhQUFhO0FBQUEsTUFDYixjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsTUFDZCxZQUFZO0FBQUE7QUFBQSxNQUdaLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxNQUNiLGVBQWU7QUFBQSxNQUNmLGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQSxNQUNmLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLFdBQVc7QUFBQTtBQUFBLE1BR1gsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLE1BQ1QsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLE1BS2pCLGFBQWE7QUFBQSxNQUNiLGVBQWU7QUFBQSxNQUNmLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLGlCQUFpQjtBQUFBLE1BQ2pCLFlBQVk7QUFBQSxNQUNaLGlCQUFpQjtBQUFBLE1BQ2pCLGlCQUFpQjtBQUFBLE1BQ2pCLHFCQUFrQjtBQUFBLE1BQ2xCLG1CQUFtQjtBQUFBLE1BQ25CLG1CQUFtQjtBQUFBLE1BQ25CLGVBQWU7QUFBQSxNQUNmLG1CQUFtQjtBQUFBLE1BQ25CLHFCQUFxQjtB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QUFDbkIseUJBQXFCLGlCQUFpQixhQUFhO0FBQ25ELFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxlQUFlLENBQUMsY0FBYztBQUM1QixRQUFJLGNBQWM7QUFDaEIsWUFBTSxJQUFJLE1BQU0sOEJBQThCO0FBQUEsSUFDaEQ7QUFFQSxtQkFBZTtBQUNmLHlCQUFxQixhQUFhLFNBQVM7QUFDM0MsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUVBLHdEQUE0QixLQUFLLE9BQU1DLFlBQVU7QUFDL0MsU0FBTyxNQUFNQSxRQUFPLEtBQUssYUFBYTtBQUN4QyxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ1osdUJBQXFCLGNBQWM7QUFDckMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUFVO0FBQ2xCLFVBQVEsTUFBTSxvREFBb0Q7QUFDbEUsVUFBUSxNQUFNLEtBQUs7QUFDckIsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X3NkayIsICJwcmVwcm9jZXNzIiwgImNvbmZpZ1NjaGVtYXRpY3MiLCAibW9kdWxlIl0KfQo=
