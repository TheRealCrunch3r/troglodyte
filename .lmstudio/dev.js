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
      // Quantifiers & Adverbs (deduplicated)
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
      "almost",
      "nearly",
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
      "rarely",
      "seldom",
      // High-frequency verbs (deduplicated)
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
      "wonder",
      "pretend",
      "refuse",
      "claim",
      "announce",
      "explain",
      "describe",
      "mention",
      "discuss",
      "recommend",
      "advise",
      "warn",
      "promise",
      "agree",
      "disagree",
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
      "attempt",
      "practice",
      "train",
      "study",
      "teach",
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
      "schedule",
      "book",
      "order",
      "request",
      "demand",
      "command",
      "direct",
      "instruct",
      "guide",
      "accompany",
      "join",
      "leave",
      "depart",
      "arrive",
      "enter",
      "exit",
      "approach",
      "withdraw",
      "retreat",
      "shift",
      "transfer",
      "transport",
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
      "permit",
      "enable",
      "force",
      "compel",
      "oblige",
      "desire",
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
      "lie",
      "lean",
      "bend",
      "twist",
      "spin",
      "rotate",
      "revolve",
      "orbit",
      "circle",
      "surround",
      "enclose",
      "contain",
      "exclude",
      "involve",
      "affect",
      "influence",
      "impact",
      "alter",
      "modify",
      "adjust",
      "adapt",
      "transform",
      "convert",
      "translate",
      "interpret",
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
      "locate",
      "identify",
      "distinguish",
      "differentiate",
      "compare",
      "contrast",
      "match",
      "fit",
      "suit",
      "work",
      "function",
      "perform",
      "execute",
      "attain",
      "gain",
      "earn",
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
      // Intensifiers & Adverbs (deduplicated)
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
function createStats() {
  return {
    totalCompressions: 0,
    totalCharsOriginal: 0,
    totalCharsCompressed: 0,
    lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
  };
}
function detectLanguage(text) {
  const words = text.toLowerCase().match(/\b[a-zäöüß]{3,}\b/g) || [];
  if (words.length < 5) return "en";
  let enScore = 0;
  let deScore = 0;
  for (const word of words) {
    if (NEUTRAL_WORDS.has(word)) continue;
    if (EN_HIGH.has(word)) enScore++;
    else if (DE_HIGH.has(word)) deScore++;
  }
  const total = enScore + deScore;
  if (total === 0) return "en";
  const ratio = Math.max(enScore, deScore) / Math.min(enScore, deScore);
  if (ratio < 1.5) return "en";
  return deScore > enScore ? "de" : "en";
}
function detectTechnicalContext(text) {
  const codePatterns = [/\{[^}]+\}/g, /<[^>]+>/g, /\b(?:const|let|var|function|class|import|export)\b/g];
  let codeScore = 0;
  for (const pattern of codePatterns) {
    const matches = text.match(pattern);
    if (matches) codeScore += matches.length;
  }
  const totalTokens = text.split(/\s+/).length;
  return totalTokens > 0 && codeScore / totalTokens > 0.1;
}
var EN_HIGH, DE_HIGH, NEUTRAL_WORDS, Troglodyte;
var init_troglodyte = __esm({
  "src/troglodyte.ts"() {
    "use strict";
    init_dictionaries();
    EN_HIGH = /* @__PURE__ */ new Set([
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
      "while"
    ]);
    DE_HIGH = /* @__PURE__ */ new Set([
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
      "f\xFCr",
      "um",
      "gegen",
      "ohne",
      "durch",
      "wie",
      "was",
      "wenn",
      "weil",
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
    NEUTRAL_WORDS = /* @__PURE__ */ new Set([
      // Common English/German overlap or code keywords
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
      "while",
      "wird",
      "w\xFCrde",
      "da\xDF"
      // German words that look English-ish or are archaic
    ]);
    Troglodyte = class {
      phrasesAndLogic;
      synonyms;
      cachedBlacklists;
      stats;
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
        this.stats = createStats();
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
        const protectJsonXml = options?.protectJsonXml ?? true;
        const smartMode = options?.smartMode ?? true;
        let langCode;
        if (options?.language) {
          langCode = options.language;
        } else {
          langCode = detectLanguage(prompt);
        }
        const debug = options?.verbose ?? false;
        if (debug) {
          console.log(`[Troglodyte] Detected language: ${langCode} for prompt: "${prompt.substring(0, 80)}..."`);
        }
        let text = prompt;
        const protectedItems = [];
        const levelBlacklistMap = this.cachedBlacklists.get(langCode);
        if (!levelBlacklistMap) {
          console.warn(`[Troglodyte] Unknown language code: ${langCode}, falling back to English`);
          langCode = "en";
        }
        let levelBlacklist = this.cachedBlacklists.get(langCode || "en").get(level);
        let synonymReplacementEnabled = true;
        if (smartMode && detectTechnicalContext(prompt)) {
          if (debug) console.log("[Troglodyte] Smart Mode: Detected technical context. Reducing synonym replacement.");
          synonymReplacementEnabled = false;
        }
        let placeholderCounter = 0;
        const MAX_PLACEHOLDERS = 1048575;
        const BREAK_EVEN_LENGTH = 8;
        const hasExistingPuaChars = /[\uE000-\uF8FF]/.test(text);
        if (hasExistingPuaChars && debug) {
          console.log("[Troglodyte] Warning: Input contains PUA characters, may cause conflicts");
        }
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
          text = text.replace(/(https?:\/\/[^\s<>()"'\\[\]]+|www\.[^\s<>()"'\\[\]]+)/gi, (match) => {
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
          text = text.replace(/([A-Za-z]:[\/\\][^<>"|?*\r\n]{10,})(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
          text = text.replace(/(\.\.?[\/\\][^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
          text = text.replace(/(\/[^\s<>"|?*]{10,})(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
          text = text.replace(/(~[\/\\][^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
        }
        if (protectJsonXml) {
          text = text.replace(/(\{[^{}]*\})/g, (match) => protectIfWorthwhile(match, 10));
          const findOutermostXml = (input) => {
            const results = [];
            const tagRegex = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*?)>/g;
            let match;
            while ((match = tagRegex.exec(input)) !== null) {
              const isClosing = match[1] === "/";
              const startPos = match.index;
              const fullTag = match[0];
              if (isClosing || fullTag.endsWith("/>")) continue;
              const isInsideExisting = results.some((r) => startPos > r.start && startPos < r.end);
              if (isInsideExisting) continue;
              let depth = 1;
              let searchPos = startPos + fullTag.length;
              let endPos = -1;
              const innerRegex = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*?)>/g;
              let innerMatch;
              while (depth > 0 && (innerMatch = innerRegex.exec(input)) !== null) {
                if (innerMatch.index < searchPos) {
                  innerRegex.lastIndex = searchPos;
                  continue;
                }
                const innerIsClosing = innerMatch[1] === "/";
                const innerFullTag = innerMatch[0];
                if (innerFullTag.endsWith("/>")) {
                } else if (innerIsClosing) {
                  depth--;
                  if (depth === 0) {
                    endPos = innerMatch.index + innerFullTag.length;
                  }
                } else {
                  depth++;
                }
                searchPos = innerMatch.index + innerFullTag.length;
              }
              if (endPos > 0) {
                results.push({ start: startPos, end: endPos });
              }
            }
            return results;
          };
          const xmlStructures = findOutermostXml(text);
          for (let i = xmlStructures.length - 1; i >= 0; i--) {
            const structure = xmlStructures[i];
            const xmlText = text.substring(structure.start, structure.end);
            text = text.substring(0, structure.start) + protectIfWorthwhile(xmlText, 5) + text.substring(structure.end);
          }
        }
        let phraseMatches = 0;
        let phraseCharsSaved = 0;
        for (const { phrase, replacement, regex } of this.compiledPhrases) {
          text = text.replace(regex, (match) => {
            const saved = match.length - (replacement?.length || 0);
            phraseMatches++;
            phraseCharsSaved += saved;
            return replacement && replacement.trim() !== "" ? replacement : " ";
          });
        }
        const wordPattern = /[-a-zA-Z0-9_.'ßäöüÄÖÜ]+/g;
        const tokens = text.split(wordPattern);
        const words = text.match(wordPattern) || [];
        if (debug) {
          console.log(`[Troglodyte] Found ${words.length} words in ${tokens.length} token slots`);
        }
        let filteredCount = 0;
        let synonymCount = 0;
        const filteredWords = [];
        for (const word of words) {
          const lower = word.toLowerCase();
          if (levelBlacklist.has(lower)) {
            filteredCount++;
            continue;
          }
          if (synonymReplacementEnabled && this.synonyms[lower]) {
            synonymCount++;
            filteredWords.push(this.synonyms[lower]);
            continue;
          }
          filteredWords.push(word);
        }
        if (debug) {
          console.log(`[Troglodyte] Blacklist: ${levelBlacklist.size} words, Filtered: ${filteredCount}, Synonyms: ${synonymCount}`);
        }
        const parts = [];
        let wordIndex = 0;
        for (const token of tokens) {
          parts.push(token);
          if (wordIndex < filteredWords.length) {
            parts.push(filteredWords[wordIndex++]);
          }
        }
        text = parts.join("").replace(/\s+/g, " ").replace(/\s+([.,?!;:])/g, "$1").replace(/^([.,?!;:]\s*)+/g, "").replace(/([.,?!;:]\s*)+$/g, "").replace(/\s+([.,?!;:])\s+/g, " ").replace(/([.,?!;:]){2,}/g, "$1").replace(/([.?!;:])(?=[A-ZßÄÖÜ])/g, "$1 ").trim();
        if (debug) {
          console.log(`[Troglodyte] Restoring ${protectedItems.length} protected items...`);
        }
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
        if (options?.verbose ?? false) {
          console.log("==================================================\n");
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
        }
        if (this.stats.totalCompressions >= this.MAX_COMPRESSIONS_BEFORE_RESET || this.stats.totalCharsOriginal >= this.MAX_CHARS_BEFORE_RESET) {
          console.log("[Troglodyte] Stats threshold reached, resetting");
          this.stats = createStats();
        }
        this.stats.totalCompressions++;
        this.stats.totalCharsOriginal += prompt.length;
        this.stats.totalCharsCompressed += text.length;
        this.stats.lastUpdated = (/* @__PURE__ */ new Date()).toISOString();
        return text;
      }
      getStats() {
        const totalSavings = this.stats.totalCharsOriginal - this.stats.totalCharsCompressed;
        const savingsPercent = this.stats.totalCharsOriginal > 0 ? Math.round(totalSavings / this.stats.totalCharsOriginal * 100) : 0;
        return { ...this.stats, totalSavings, savingsPercent };
      }
      resetStats() {
        this.stats = createStats();
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
      // ==================== ENGLISH TECHNICAL TERMS ====================
      // Well-established abbreviations only
      "application": "app",
      "applications": "apps",
      "information": "info",
      "environment": "env",
      "environments": "envs",
      "configuration": "config",
      "configurations": "configs",
      "documentation": "docs",
      // Verbs → infinitive/gerund forms (real words)
      "utilization": "use",
      "utilize": "use",
      "utilizes": "uses",
      "utilizing": "using",
      "utilized": "used",
      "implementation": "impl",
      "implementations": "impls",
      "implement": "impl",
      "implements": "impls",
      "initialization": "init",
      "initialize": "init",
      "initializes": "inits",
      "initializing": "initialising",
      // real word, not "initing"
      "initialized": "initialised",
      // real word, not "inited"
      "synchronization": "sync",
      "synchronize": "sync",
      "synchronizes": "syncs",
      "synchronizing": "syncing",
      "synchronized": "synced",
      "authentication": "auth",
      "authenticate": "auth",
      "authenticates": "auths",
      "authenticating": "authenticating",
      // keep full — "authing" is not standard
      "authenticated": "authenticated",
      // keep full — "authed" is slang
      "authorization": "authz",
      "authorize": "authz",
      "authorizes": "authzs",
      "authorizing": "authorizing",
      // keep full
      "authorized": "authorized",
      // keep full
      "identification": "id",
      "identify": "id",
      "identifies": "ids",
      "identifying": "identifying",
      // keep full — "iding" is not a word
      "identified": "identified",
      // keep full — "ided" is not a word
      // Safe verb replacements (real words)
      "performing": "doing",
      "performed": "did",
      "executing": "running",
      "executed": "ran",
      "establishing": "setting",
      "established": "set",
      "providing": "giving",
      "provided": "given",
      "obtaining": "getting",
      "obtained": "got",
      "acquiring": "getting",
      "acquired": "got",
      "retrieving": "getting",
      "retrieved": "got",
      // ==================== ENGLISH GENERAL TERMS ====================
      // Conjunctions/adverbs → shorter real words
      "however": "but",
      "therefore": "so",
      "consequently": "so",
      "thus": "so",
      "hence": "so",
      "although": "though",
      // Prepositions → standard abbreviations (used in notes, not prose)
      "regarding": "re",
      "concerning": "re",
      "respecting": "re",
      "pertaining": "re",
      "relating": "re",
      // Common words → recognized shorthand
      "through": "thru",
      "until": "til",
      "without": "w/o",
      "between": "btwn",
      "approximately": "approx",
      // ==================== GERMAN TECHNICAL TERMS ====================
      "anwendung": "app",
      "anwendungen": "apps",
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
      // German verbs → infinitive (real words)
      "ausf\xFChren": "f\xFChren",
      "erzeugen": "erzeugen",
      // keep full — "gen" is not a German word
      "berechnen": "berechnen",
      // keep full — "calc" is English
      "bestimmen": "bestimmen",
      // keep full — "det" is English
      "erstellen": "erstellen",
      // keep full — "new" is English
      "entfernen": "entfernen",
      // keep full — "rm" is shell command, not German
      "\xE4ndern": "\xE4ndern",
      // keep full — "chg" is English
      "aktualisieren": "aktualisieren",
      // keep full — "upd" is English
      "modifizieren": "modifizieren",
      // keep full — "mod" is ambiguous in German
      "geben": "geben",
      // keep full — "give" is English
      "bekommen": "bekommen",
      // keep full — "get" is English
      "erhalten": "erhalten",
      // keep full
      // German conjunctions/adverbs → shorter real words
      "deshalb": "daher",
      // both mean "therefore", "daher" is slightly shorter
      "daher": "daher",
      // keep — already short
      "obwohl": "obwohl",
      // keep — no good short form in German
      // ==================== SAFE BUILD/DEV TERMS (REAL ABBREVIATIONS) ====================
      // Only keep terms where the abbreviation is universally recognized in dev contexts
      "directory": "dir",
      "directories": "dirs",
      "parameter": "param",
      // "prm" is not standard
      "parameters": "params",
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
      // Error/warning types — keep full words, they're already short
      "undefined": "undefined",
      // "undef" is not standard in prose
      "unresolved": "unresolved",
      "incomplete": "incomplete",
      "unused": "unused",
      "deprecated": "deprecated",
      "obsolete": "obsolete",
      "redundant": "redundant",
      "duplicate": "duplicate",
      "conflict": "conflict",
      "ambiguous": "ambiguous",
      // File/path related — keep full, they're already short
      "folder": "folder",
      // "fldr" is not standard
      "path": "path",
      // "pth" is ambiguous (could be "paths")
      "paths": "paths",
      "source": "source",
      // "src" is a directory name, not a synonym for "source"
      "sources": "sources",
      "header": "header",
      // "hdr" is file extension context only
      "headers": "headers",
      "include": "include",
      // "inc" is ambiguous (could be "income")
      "includes": "includes",
      // German build terms — keep full, abbreviations are not standard in prose
      "erstellung": "erstellung",
      "kompilieren": "kompilieren",
      "verkn\xFCpfen": "verkn\xFCpfen",
      "fehler": "fehler",
      "warnung": "warnung",
      "hinweis": "hinweis",
      "quelle": "quelle",
      "ziel": "ziel",
      "verzeichnis": "verzeichnis",
      // MSVC German error terms — keep full (these are proper nouns/technical terms)
      "bezeichner": "bezeichner",
      "typspezifizierer": "typspezifizierer",
      "syntaxfehler": "syntaxfehler",
      "deklarierter": "deklarierter",
      "ung\xFCltig": "ung\xFCltig",
      "angenommen": "angenommen",
      "unterst\xFCtzt": "unterst\xFCtzt",
      "ge\xF6ffnet": "ge\xF6ffnet",
      "verwendung": "verwendung",
      "gefunden": "gefunden",
      "fehlt": "fehlt",
      "fehlendes": "fehlendes",
      // Warning terms — keep full
      "neuerstellung": "neuerstellung"
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
      "smartMode",
      "boolean",
      {
        displayName: "Smart Mode (Context-Aware)",
        hint: "Automatically detects if the prompt is technical or conversational and adjusts compression rules accordingly."
      },
      true
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
      "protectJsonXml",
      "boolean",
      {
        displayName: "Protect JSON/XML Structures",
        hint: "Preserve structured data formats like JSON and XML from being mangled."
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
  const smartMode = pluginConfig.get("smartMode") ?? true;
  const protectUrls = pluginConfig.get("protectUrls") ?? true;
  const protectNumbers = pluginConfig.get("protectNumbers") ?? true;
  const protectHeaders = pluginConfig.get("protectHeaders") ?? true;
  const protectFilePaths = pluginConfig.get("protectFilePaths") ?? true;
  const protectJsonXml = pluginConfig.get("protectJsonXml") ?? true;
  const languageMode = pluginConfig.get("languageMode") ?? "auto";
  const showStats = true;
  const status = ctl.createStatus({
    status: "loading",
    text: `Troglodyfying prompt (${compressionLevel})...`
  });
  let compressedText = userMessage.getText();
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
      protectJsonXml,
      // NEW
      smartMode,
      // NEW
      language: languageMode !== "auto" ? languageMode : void 0,
      verbose: showStats
      // Pass showStats as verbose flag
    });
    const systemMetadata = hasSystemMetadata ? fullText.substring(userInput.length) : "";
    compressedText = compressedUserInput + systemMetadata;
    const originalLength = userInput.length;
    const compressedLength = compressedUserInput.length;
    const savings = Math.round((originalLength - compressedLength) / originalLength * 100);
    const cumulativeStats = troglodyte.getStats();
    const protectionInfo = [];
    if (protectUrls) protectionInfo.push("URLs");
    if (protectNumbers) protectionInfo.push("IDs");
    let statusText = `Compressed by ${savings}%`;
    if (protectionInfo.length > 0) {
      statusText += ` | Protecting: ${protectionInfo.join(", ")}`;
    }
    if (smartMode) {
      statusText += " | Smart Mode";
    }
  } catch (error) {
    console.error("[Troglodyte] Compression failed:", error);
  }
  return compressedText;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2RpY3Rpb25hcmllcy9lbi1maWxsZXIudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9kZS1maWxsZXIudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9pbmRleC50cyIsICIuLi9zcmMvdHJvZ2xvZHl0ZS50cyIsICIuLi9zcmMvZGljdGlvbmFyaWVzL3BocmFzZXMudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9zeW5vbnltcy50cyIsICIuLi9zcmMvY29uZmlnLnRzIiwgIi4uL3NyYy9wcm9tcHRQcmVwcm9jZXNzb3IudHMiLCAiLi4vc3JjL2luZGV4LnRzIiwgImVudHJ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEVuZ2xpc2ggZmlsbGVyIHdvcmRzIG9yZ2FuaXplZCBieSBjb21wcmVzc2lvbiBsZXZlbC5cbiAqIFNvdXJjZTogTGluZ3Vpc3RpYyByZXNlYXJjaCwgTkxQIHJlc291cmNlcywgQ09DQSBmcmVxdWVuY3kgbGlzdHNcbiAqL1xuXG4vLyBHZW50bGUgdGllcjogT25seSBwb2xpdGUgZmlsbGVyIGFuZCBiYXNpYyBjb3VydGVzeSB3b3Jkc1xuZXhwb3J0IGNvbnN0IEVOX0dFTlRMRSA9IFtcbiAgJ3BsZWFzZScsICd0aGFua3MnLCAndGhhbmsnLCAnYXBwcmVjaWF0ZScsICdhcHByZWNpYXRlZCcsICdncmF0ZWZ1bCcsICdraW5kbHknLCAncG9saXRlJyxcbiAgJ3VtJywgJ3VoJywgJ29oJywgJ2FoJywgJ3dvdycsICdobW0nLCAnaG1tbScsICd3ZWxsJywgJ29rYXknLCAnb2snLFxuXTtcblxuLy8gQmFsYW5jZWQgdGllcjogfjMwMCBoaWdoLWZyZXF1ZW5jeSB3b3JkcyBzYWZlIHRvIHJlbW92ZSAoZGVkdXBsaWNhdGVkKVxuZXhwb3J0IGNvbnN0IEVOX0JBTEFOQ0VEID0gW1xuICAuLi5FTl9HRU5UTEUsXG4gIC8vIEFydGljbGVzXG4gICdhJywgJ2FuJywgJ3RoZScsXG4gIC8vIFN1YmplY3QgcHJvbm91bnNcbiAgJ2knLCAnbWUnLCAnbXknLCAnbWluZScsICdteXNlbGYnLCAnd2UnLCAndXMnLCAnb3VyJywgJ291cnMnLCAnb3Vyc2VsdmVzJyxcbiAgJ3lvdScsICd5b3VyJywgJ3lvdXJzJywgJ3lvdXJzZWxmJywgJ3lvdXJzZWx2ZXMnLFxuICAvLyBDb3B1bGFzXG4gICdpcycsICdhbScsICdhcmUnLCAnd2FzJywgJ3dlcmUnLCAnYmUnLCAnYmVlbicsICdiZWluZycsXG4gIC8vIEF1eGlsaWFyaWVzXG4gICdoYXZlJywgJ2hhcycsICdoYWQnLCAnZG8nLCAnZG9lcycsICdkaWQnLCAnd2lsbCcsICd3b3VsZCcsICdjb3VsZCcsICdzaG91bGQnLFxuICAnbWF5JywgJ21pZ2h0JywgJ2NhbicsICdzaGFsbCcsXG4gIC8vIFByZXBvc2l0aW9uc1xuICAnb2YnLCAnaW4nLCAndG8nLCAnZm9yJywgJ3dpdGgnLCAnb24nLCAnYXQnLCAnZnJvbScsICdieScsICdhYm91dCcsICd1cCcsICdkb3duJyxcbiAgJ291dCcsICdvZmYnLCAnb3ZlcicsICd0aHJvdWdoJywgJ2ludG8nLCAnYWZ0ZXInLCAnYmVmb3JlJywgJ2R1cmluZycsICdhZ2FpbicsXG4gICdoZXJlJywgJ3RoZXJlJywgJ2JldHdlZW4nLCAndW5kZXInLCAnYWJvdmUnLCAnYmVsb3cnLCAnbmVhcicsICdhcm91bmQnLCAnYWdhaW5zdCcsXG4gICd3aXRoaW4nLCAnd2l0aG91dCcsICdhbG9uZycsICdhY3Jvc3MnLCAnYmVoaW5kJywgJ2JleW9uZCcsICdpbnNpZGUnLCAnb3V0c2lkZScsXG4gICd0b3dhcmQnLCAndG93YXJkcycsICd1cG9uJywgJ3ZpYScsICdwZXInLCAnYW1vbmcnLFxuICAvLyBDb25qdW5jdGlvbnNcbiAgJ2FuZCcsICdidXQnLCAnb3InLCAnbm9yJywgJ3lldCcsICdzbycsICdiZWNhdXNlJywgJ3NpbmNlJywgJ3VubGVzcycsICd3aGlsZScsXG4gICdhbHRob3VnaCcsICd0aG91Z2gnLCAnaWYnLCAnd2hldGhlcicsICdhcycsICd0aGFuJywgJ3RoYXQnLCAnd2hlbicsICd3aGVyZScsXG4gIC8vIERlbW9uc3RyYXRpdmVzXG4gICd0aGlzJywgJ3RoZXNlJywgJ3Rob3NlJywgJ3N1Y2gnLFxuICAvLyBRdWFudGlmaWVycyAmIEFkdmVyYnMgKGRlZHVwbGljYXRlZClcbiAgJ3NvbWUnLCAnYW55JywgJ2FsbCcsICdlYWNoJywgJ2V2ZXJ5JywgJ2JvdGgnLCAnZmV3JywgJ21hbnknLCAnbXVjaCcsICdtb3JlJyxcbiAgJ21vc3QnLCAnb3RoZXInLCAnYW5vdGhlcicsICdzYW1lJywgJ293bicsICdlbm91Z2gnLCAnb25seScsICdldmVuJywgJ2Fsc28nLFxuICAndG9vJywgJ3ZlcnknLCAncmVhbGx5JywgJ3F1aXRlJywgJ3JhdGhlcicsICdqdXN0JywgJ3N0aWxsJywgJ2FscmVhZHknLFxuICAnYWxtb3N0JywgJ25lYXJseScsICdvYnZpb3VzbHknLCAnY2xlYXJseScsICdjZXJ0YWlubHknLCAnZGVmaW5pdGVseScsICdhYnNvbHV0ZWx5JywgJ3RydWx5JyxcbiAgJ2hvbmVzdGx5JywgJ3NlcmlvdXNseScsICdlc3NlbnRpYWxseScsICdnZW5lcmFsbHknLCAndHlwaWNhbGx5JywgJ3VzdWFsbHknLFxuICAnbm9ybWFsbHknLCAnY29tbW9ubHknLCAnZnJlcXVlbnRseScsICdvZnRlbicsICdyZWd1bGFybHknLCAnYWx3YXlzJywgJ25ldmVyJyxcbiAgJ2V2ZXInLCAnc29tZXRpbWVzJywgJ3JhcmVseScsICdzZWxkb20nLFxuICAvLyBIaWdoLWZyZXF1ZW5jeSB2ZXJicyAoZGVkdXBsaWNhdGVkKVxuICAnZ2V0JywgJ2dvdCcsICdnbycsICdnb2VzJywgJ2dvaW5nJywgJ2dvbmUnLCAnbWFrZScsICdtYWRlJywgJ3Rha2UnLCAndG9vaycsXG4gICdnaXZlJywgJ2dhdmUnLCAna25vdycsICdrbmV3JywgJ3RoaW5rJywgJ3Rob3VnaHQnLCAnc2VlJywgJ3NhdycsICdsb29rJyxcbiAgJ2ZpbmQnLCAndGVsbCcsICdhc2snLCAnbmVlZCcsICd0cnknLCAnZmVlbCcsICdrZWVwJywgJ2xldCcsICdiZWdpbicsICdzdGFydCcsXG4gICdzaG93JywgJ2hlYXInLCAnY2FsbCcsICd0dXJuJywgJ21vdmUnLCAnbGl2ZScsICdob2xkJywgJ2JyaW5nJywgJ2hhcHBlbicsXG4gICd3cml0ZScsICdwcm92aWRlJywgJ3NpdCcsICdzdGFuZCcsICdwYXknLCAnbWVldCcsICdpbmNsdWRlJywgJ2NvbnRpbnVlJyxcbiAgJ3NldCcsICdsZWFybicsICdjaGFuZ2UnLCAnbGVhZCcsICd1bmRlcnN0YW5kJywgJ3dhdGNoJywgJ2ZvbGxvdycsICdjcmVhdGUnLFxuICAnc3BlYWsnLCAncmVhZCcsICdhbGxvdycsICdhZGQnLCAnc3BlbmQnLCAnZ3JvdycsICdvcGVuJywgJ3dhbGsnLCAnb2ZmZXInLFxuICAncmVtZW1iZXInLCAnY29uc2lkZXInLCAnYXBwZWFyJywgJ3dhaXQnLCAnc2VydmUnLCAnc2VuZCcsICdleHBlY3QnLCAnYnVpbGQnLFxuICAnc3RheScsICdmYWxsJywgJ3JlYWNoJywgJ3JlbWFpbicsICdzdWdnZXN0JywgJ3JhaXNlJywgJ3Bhc3MnLCAnc2VsbCcsXG4gICdyZXF1aXJlJywgJ3JlcG9ydCcsICdkZWNpZGUnLCAncHVsbCcsICdyZXR1cm4nLCAnZGV2ZWxvcCcsICdhY2NlcHQnLCAnYXJndWUnLFxuICAnZGllJywgJ2JlbGlldmUnLCAnc2VlbScsICdoYXRlJywgJ2xvdmUnLCAnbGlrZScsICd3YW50JywgJ2hvcGUnLCAnd2lzaCcsXG4gICdzdXBwb3NlJywgJ2ltYWdpbmUnLCAncmVhbGl6ZScsICdub3RpY2UnLCAncmVjb2duaXplJywgJ3dvbmRlcicsXG4gICdwcmV0ZW5kJywgJ3JlZnVzZScsICdjbGFpbScsICdhbm5vdW5jZScsICdleHBsYWluJywgJ2Rlc2NyaWJlJywgJ21lbnRpb24nLFxuICAnZGlzY3VzcycsICdyZWNvbW1lbmQnLCAnYWR2aXNlJywgJ3dhcm4nLCAncHJvbWlzZScsICdhZ3JlZScsXG4gICdkaXNhZ3JlZScsICdyZWplY3QnLCAnZGVueScsICdhZG1pdCcsICdjb25mZXNzJywgJ2RlY2xhcmUnLFxuICAnZGlzY292ZXInLCAnaW52ZW50JywgJ2Rlc2lnbicsICdwcm9kdWNlJywgJ3ByZXBhcmUnLCAnYXJyYW5nZScsICdvcmdhbml6ZScsXG4gICdtYW5hZ2UnLCAnY29udHJvbCcsICdvcGVyYXRlJywgJ3J1bicsICdkcml2ZScsICdmbHknLCAnc3dpbScsICdqdW1wJyxcbiAgJ2NsaW1iJywgJ3B1c2gnLCAncHVsbCcsICdsaWZ0JywgJ2NhcnJ5JywgJ2RlbGl2ZXInLCAncmVjZWl2ZScsICdvYnRhaW4nLFxuICAnYWNoaWV2ZScsICdhY2NvbXBsaXNoJywgJ2NvbXBsZXRlJywgJ2ZpbmlzaCcsICdlbmQnLCAnc3RvcCcsICdwYXVzZScsXG4gICdwcm9jZWVkJywgJ2FkdmFuY2UnLCAncHJvZ3Jlc3MnLCAnaW1wcm92ZScsICdpbmNyZWFzZScsXG4gICdkZWNyZWFzZScsICdyZWR1Y2UnLCAnZXhwYW5kJywgJ2V4dGVuZCcsICdsaW1pdCcsICdyZXN0cmljdCcsICdwcmV2ZW50JyxcbiAgJ2F2b2lkJywgJ2VzY2FwZScsICdwcm90ZWN0JywgJ2RlZmVuZCcsICdhdHRhY2snLCAnZmlnaHQnLCAnd2luJywgJ2xvc2UnLFxuICAnc3VjY2VlZCcsICdmYWlsJywgJ2F0dGVtcHQnLCAncHJhY3RpY2UnLCAndHJhaW4nLCAnc3R1ZHknLCAndGVhY2gnLFxuICAnZXhwbG9yZScsICdzZWFyY2gnLCAnc2VlaycsICdodW50JywgJ2NhdGNoJywgJ2NhcHR1cmUnLFxuICAncmVsZWFzZScsICdmcmVlJywgJ3NhdmUnLCAncmVzY3VlJywgJ2hlbHAnLCAnc3VwcG9ydCcsICdhc3Npc3QnLFxuICAnZW1wbG95JywgJ2hpcmUnLCAnZmlyZScsICdwcm9tb3RlJywgJ2RlbW90ZScsICdhcHBvaW50JywgJ2VsZWN0JywgJ3ZvdGUnLFxuICAnY2hvb3NlJywgJ3NlbGVjdCcsICdwcmVmZXInLCAnZGV0ZXJtaW5lJywgJ2NvbmNsdWRlJywgJ2p1ZGdlJyxcbiAgJ2V2YWx1YXRlJywgJ2Fzc2VzcycsICdtZWFzdXJlJywgJ2NhbGN1bGF0ZScsICdjb3VudCcsICdlc3RpbWF0ZScsICdwcmVkaWN0JyxcbiAgJ2ZvcmVjYXN0JywgJ3BsYW4nLCAnc2NoZWR1bGUnLCAnYm9vaycsXG4gICdvcmRlcicsICdyZXF1ZXN0JywgJ2RlbWFuZCcsICdjb21tYW5kJywgJ2RpcmVjdCcsICdpbnN0cnVjdCcsICdndWlkZScsXG4gICdhY2NvbXBhbnknLCAnam9pbicsICdsZWF2ZScsICdkZXBhcnQnLCAnYXJyaXZlJyxcbiAgJ2VudGVyJywgJ2V4aXQnLCAnYXBwcm9hY2gnLCAnd2l0aGRyYXcnLCAncmV0cmVhdCcsICdzaGlmdCcsXG4gICd0cmFuc2ZlcicsICd0cmFuc3BvcnQnLCAnY29sbGVjdCcsICdnYXRoZXInLFxuICAnZGlzdHJpYnV0ZScsICdzcHJlYWQnLCAnc2NhdHRlcicsICdjb25jZW50cmF0ZScsICdmb2N1cycsICdhaW0nLCAndGFyZ2V0JyxcbiAgJ2hpdCcsICdtaXNzJywgJ3N0cmlrZScsICd0b3VjaCcsICdncmFiJyxcbiAgJ3Blcm1pdCcsICdlbmFibGUnLCAnZm9yY2UnLCAnY29tcGVsJywgJ29ibGlnZScsXG4gICdkZXNpcmUnLCAnYW50aWNpcGF0ZScsICdmZWFyJywgJ2RyZWFkJywgJ3dvcnJ5JyxcbiAgJ2NvbmNlcm4nLCAnaW50ZXJlc3QnLCAnYXR0cmFjdCcsICdhcHBlYWwnLCAncGxlYXNlJywgJ3NhdGlzZnknLCAnZGlzYXBwb2ludCcsXG4gICdzdXJwcmlzZScsICdhbWF6ZScsICdhc3RvbmlzaCcsICdzaG9jaycsICdmcmlnaHRlbicsICdzY2FyZScsICd0ZXJyaWZ5JyxcbiAgJ2NhbG0nLCAncmVsYXgnLCAncmVzdCcsICdzbGVlcCcsICd3YWtlJywgJ3Jpc2UnLCAnbGllJyxcbiAgJ2xlYW4nLCAnYmVuZCcsICd0d2lzdCcsICdzcGluJywgJ3JvdGF0ZScsICdyZXZvbHZlJywgJ29yYml0JyxcbiAgJ2NpcmNsZScsICdzdXJyb3VuZCcsICdlbmNsb3NlJywgJ2NvbnRhaW4nLCAnZXhjbHVkZScsICdpbnZvbHZlJyxcbiAgJ2FmZmVjdCcsICdpbmZsdWVuY2UnLCAnaW1wYWN0JywgJ2FsdGVyJywgJ21vZGlmeScsICdhZGp1c3QnLFxuICAnYWRhcHQnLCAndHJhbnNmb3JtJywgJ2NvbnZlcnQnLCAndHJhbnNsYXRlJywgJ2ludGVycHJldCcsXG4gICdjbGFyaWZ5JywgJ3NpbXBsaWZ5JywgJ2NvbXBsaWNhdGUnLCAnY29uZnVzZScsICdwdXp6bGUnLCAnbXlzdGlmeScsXG4gICdyZXZlYWwnLCAnZXhwb3NlJywgJ2hpZGUnLCAnY29uY2VhbCcsICdjb3ZlcicsICd1bmNvdmVyJyxcbiAgJ2xvY2F0ZScsICdpZGVudGlmeScsICdkaXN0aW5ndWlzaCcsICdkaWZmZXJlbnRpYXRlJyxcbiAgJ2NvbXBhcmUnLCAnY29udHJhc3QnLCAnbWF0Y2gnLCAnZml0JywgJ3N1aXQnLCAnd29yaycsICdmdW5jdGlvbicsXG4gICdwZXJmb3JtJywgJ2V4ZWN1dGUnLCAnYXR0YWluJywgJ2dhaW4nLFxuICAnZWFybicsICdjb3N0JywgJ2NoYXJnZScsICdwcmljZScsICd2YWx1ZScsICd3b3J0aCcsXG4gICdyaWNoJywgJ3Bvb3InLCAnY2hlYXAnLCAnZXhwZW5zaXZlJywgJ2ZyZWUnLCAncGFpZCcsICdhZmZvcmRhYmxlJywgJ2Nvc3RseScsXG5dO1xuXG4vLyBBZ2dyZXNzaXZlIHRpZXI6IEV2ZXJ5dGhpbmcgKyBtb3JlIChkZWR1cGxpY2F0ZWQpXG5leHBvcnQgY29uc3QgRU5fQUdHUkVTU0lWRSA9IFtcbiAgLi4uRU5fQkFMQU5DRUQsXG4gIC8vIE9iamVjdCBwcm9ub3Vuc1xuICAnaGUnLCAnaGltJywgJ2hpcycsICdoaW1zZWxmJywgJ3NoZScsICdoZXInLCAnaGVycycsICdoZXJzZWxmJywgJ2l0JywgJ2l0cycsXG4gICdpdHNlbGYnLCAndGhleScsICd0aGVtJywgJ3RoZWlyJywgJ3RoZWlycycsICd0aGVtc2VsdmVzJyxcbiAgLy8gUmVsYXRpdmUgcHJvbm91bnNcbiAgJ3doaWNoJywgJ3dobycsICd3aG9tJywgJ3dob3NlJywgJ3doYXQnLCAnd2hlcmUnLCAnd2hlbicsICd3aHknLCAnaG93JyxcbiAgLy8gSW50ZW5zaWZpZXJzICYgQWR2ZXJicyAoZGVkdXBsaWNhdGVkKVxuICAnZXh0cmVtZWx5JywgJ2luY3JlZGlibHknLCAnYWJzb2x1dGVseScsICd0b3RhbGx5JywgJ2NvbXBsZXRlbHknLCAndXR0ZXJseScsXG4gICdoaWdobHknLCAncGFydGljdWxhcmx5JywgJ2VzcGVjaWFsbHknLCAnZnVuZGFtZW50YWxseScsXG4gICdnZW5lcmFsbHknLCAndHlwaWNhbGx5JywgJ3VzdWFsbHknLCAnbm9ybWFsbHknLCAnY29tbW9ubHknLCAnZnJlcXVlbnRseScsXG4gICdyZWd1bGFybHknLCAnY29uc2lzdGVudGx5JywgJ2NvbnN0YW50bHknLCAnY29udGludW91c2x5JywgJ3BlcnBldHVhbGx5JyxcbiAgJ2Fsd2F5cycsICduZXZlcicsICdldmVyJywgJ2hvd2V2ZXInLCAnbW9yZW92ZXInLCAnZnVydGhlcm1vcmUnLCAnYWRkaXRpb25hbGx5JyxcbiAgJ2VpdGhlcicsICduZWl0aGVyJywgJ2xlYXN0JywgJ2xlc3MnLCAnYmV5b25kJyxcbl07XG5cbmV4cG9ydCBjb25zdCBFTl9CTEFDS0xJU1QgPSB7XG4gIGdlbnRsZTogRU5fR0VOVExFLFxuICBiYWxhbmNlZDogRU5fQkFMQU5DRUQsXG4gIGFnZ3Jlc3NpdmU6IEVOX0FHR1JFU1NJVkUsXG59O1xuIiwgIi8qKlxuICogR2VybWFuIGZpbGxlciB3b3JkcyBvcmdhbml6ZWQgYnkgY29tcHJlc3Npb24gbGV2ZWwuXG4gKiBTb3VyY2U6IExpbmd1aXN0aWMgcmVzZWFyY2gsIE5MUCByZXNvdXJjZXNcbiAqL1xuXG4vLyBHZW50bGUgdGllcjogT25seSBwb2xpdGUgZmlsbGVyXG5leHBvcnQgY29uc3QgREVfR0VOVExFID0gW1xuICAnYml0dGUnLCAnZGFua2UnLCAnZGFua2VuJywgJ3ZpZWxlbicsICdoZXJ6bGljaCcsICdmcmV1dCcsXG4gICdcdTAwRTRobScsICdcdTAwRTRoJywgJ2htJywgJ2htbScsICdvaCcsICdhY2gnLCAnbmEnLCAndGphJyxcbl07XG5cbi8vIEJhbGFuY2VkIHRpZXI6IH4yNTAgaGlnaC1mcmVxdWVuY3kgR2VybWFuIHdvcmRzIChkZWR1cGxpY2F0ZWQpXG5leHBvcnQgY29uc3QgREVfQkFMQU5DRUQgPSBbXG4gIC4uLkRFX0dFTlRMRSxcbiAgLy8gQXJ0aWNsZXNcbiAgJ2RlcicsICdkaWUnLCAnZGFzJywgJ2RlbicsICdkZW0nLCAnZGVzJywgJ2VpbicsICdlaW5lJywgJ2VpbmVuJywgJ2VpbmVtJywgJ2VpbmVzJyxcbiAgLy8gUHJvbm91bnNcbiAgJ2ljaCcsICdtaWNoJywgJ21pcicsICdtZWluJywgJ21laW5lJywgJ21laW5lcicsICd1bnMnLCAndW5zZXJlJywgJ3Vuc2VyZXInLFxuICAnZHUnLCAnZGljaCcsICdkaXInLCAnZGVpbicsICdkZWluZScsICdlcicsICdpaG4nLCAnaWhtJywgJ3NlaW4nLCAnc2VpbmUnLFxuICAnc2llJywgJ2locicsICdpaHJlJywgJ2VzJywgJ3dpcicsICdldWNoJywgJ21hbicsICdtZW5zY2gnLFxuICAvLyBDb3B1bGFzXG4gICdpc3QnLCAnc2luZCcsICd3YXInLCAnd2FyZW4nLCAnc2VpbicsICdnZXdlc2VuJywgJ3dlcmRlJywgJ3dlcmRlbicsICd3dXJkZScsXG4gIC8vIEF1eGlsaWFyaWVzXG4gICdoYWJlbicsICdoYXQnLCAnaGFiZScsICdoYXR0ZW4nLCAna1x1MDBGNm5uZW4nLCAna2FubicsICdtXHUwMEZDc3NlbicsICdzb2xsZW4nLCAnZFx1MDBGQ3JmZW4nLFxuICAnbVx1MDBGNmdlbicsICdtb2NodGUnLCAnd29sbGVuJywgJ3dpbGwnLCAnd29sbHRlJywgJ211c3N0ZScsICdzb2xsdGUnLCAna29ubnRlJyxcbiAgLy8gUHJlcG9zaXRpb25zXG4gICd2b24nLCAnaW4nLCAnenUnLCAnZlx1MDBGQ3InLCAnbWl0JywgJ2FuJywgJ2F1ZicsICdiZWknLCAnbmFjaCcsICdcdTAwRkNiZXInLCAndW50ZXInLFxuICAnZHVyY2gnLCAndW0nLCAnYmlzJywgJ29obmUnLCAnYXVzJywgJ3ZvcicsICd6d2lzY2hlbicsICdnZWdlbicsICdzZWl0JyxcbiAgJ3dcdTAwRTRocmVuZCcsICdoaW50ZXInLCAnbmViZW4nLCAnb2JlcmhhbGInLCAndW50ZXJoYWxiJywgJ2lubmVyaGFsYicsICdhdVx1MDBERmVyaGFsYicsXG4gICdzdGF0dCcsICd0cm90eicsICd3ZWdlbicsICdnZW1cdTAwRTRcdTAwREYnLCAnbGF1dCcsICdlbnRsYW5nJywgJ2VudGdlZ2VuJywgJ2Zlcm4nLFxuICAnamVuc2VpdHMnLCAna25hcCcsICduXHUwMEY2cmRsaWNoJywgJ1x1MDBGNnN0bGljaCcsICdzXHUwMEZDZGxpY2gnLCAnd2VzdGxpY2gnLCAnYWInLFxuICAvLyBDb25qdW5jdGlvbnNcbiAgJ3VuZCcsICdvZGVyJywgJ2FiZXInLCAnZGVubicsICdzb25kZXJuJywgJ3dlaWwnLCAnZGEnLCAnb2J3b2hsJywgJ3dlbm4nLFxuICAnZmFsbHMnLCAnYmV2b3InLCAnbmFjaGRlbScsICdzb2JhbGQnLCAnYWxzJywgJ3dpZScsICdkYXNzJywgJ29iJyxcbiAgJ2VudHdlZGVyJywgJ25vY2gnLCAnc293b2hsJywgJ3dlZGVyJyxcbiAgLy8gRGVtb25zdHJhdGl2ZXNcbiAgJ2RpZXNlcicsICdkaWVzZScsICdkaWVzZXMnLCAnZGllc2VtJywgJ2RpZXNlbicsICdqZW5lcicsICdqZW5lJywgJ3NvbGNoJyxcbiAgJ3NvbGNoZXInLCAnc2VsYnN0JywgJ3NlbGJlcicsICdlYmVuJywgJ2dlcmFkZScsICduXHUwMEU0bWxpY2gnLFxuICAvLyBRdWFudGlmaWVyc1xuICAnYWxsZScsICdhbGxlcycsICd2aWVsJywgJ3ZpZWxlJywgJ3ZpZWxlcicsICdtZWhyJywgJ21laHJlcmUnLCAnd2VuaWcnLFxuICAnd2VuaWdlJywgJ21hbmNoJywgJ21hbmNoZScsICdqZWRlcicsICdqZWRlJywgJ2plZGVzJywgJ25pY2h0cycsICdldHdhcycsXG4gICdpcmdlbmQnLCAnaXJnZW5kZWluJywgJ2VpbmlnZScsICd2ZXJzY2hpZWRlbmUnLCAnemFobHJlaWNoZScsICdrZWluZScsXG4gICdrZWluZXInLCAna2VpbmVzJywgJ25pZW1hbmQnLFxuICAvLyBJbnRlbnNpZmllcnMvRmlsbGVyc1xuICAnYXVjaCcsICdzbycsICdhbHNvJywgJ2hhbHQnLCAnbWFsJywgJ2RvY2gnLCAnZWlnZW50bGljaCcsICd0YXRzXHUwMEU0Y2hsaWNoJyxcbiAgJ3dpcmtsaWNoJywgJ3NlaHInLCAnemllbWxpY2gnLCAnc2Nob24nLCAnbnVyJywgJ2FsbGVpbicsICdpbW1lcicsXG4gICduaWUnLCAnbmllbWFscycsICdvZnQnLCAnbWFuY2htYWwnLCAnaFx1MDBFNHVmaWcnLCAnc2VsdGVuJyxcbiAgJ3ZpZWxsZWljaHQnLCAnd2FocnNjaGVpbmxpY2gnLCAnc2ljaGVyJywgJ2tsYXInLCAnbmF0XHUwMEZDcmxpY2gnLCAnZnJlaWxpY2gnLFxuICAnXHUwMEZDYnJpZ2VucycsICdhbGxlcmRpbmdzJywgJ2plZG9jaCcsICdzb25zdCcsICdkYW5uJywgJ2pldHp0JywgJ2hldXRlJyxcbiAgJ21vcmdlbicsICdnZXN0ZXJuJywgJ2hpZXInLCAnZG9ydCcsICdkYScsICd3b2hpbicsICdoZXInLCAnd2VnJywgJ2hpbicsXG4gICdyYW4nLCAncnVtJywgJ2hlcnVtJywgJ2RhYmVpJywgJ2Rhdm9uJywgJ2RhcnVtJywgJ2RhbWl0JywgJ2RhZlx1MDBGQ3InLFxuICAnZGFnZWdlbicsICdkYXp1JywgJ2RhaGVyJywgJ2Rhclx1MDBGQ2JlcicsICdkYXJ1bnRlcicsICdkYXp3aXNjaGVuJywgJ2RyYW4nLFxuICAnZHJhdWYnLCAnZHJpbicsICdkclx1MDBGQ2JlcicsICdkcnVudGVyJywgJ2phJywgJ25laW4nLFxuICAvLyBIaWdoLWZyZXF1ZW5jeSB2ZXJic1xuICAnbWFjaGVuJywgJ21hY2h0JywgJ3NhZ2VuJywgJ3NhZ3QnLCAnc2FndGUnLCAnZ2ViZW4nLCAnZ2lidCcsICdnYWInLFxuICAnbmVobWVuJywgJ25pbW10JywgJ25haG0nLCAnZmluZGVuJywgJ2ZpbmRldCcsICdmYW5kJywgJ3dpc3NlbicsICd3ZWlcdTAwREYnLFxuICAnd3Vzc3RlJywgJ2RlbmtlbicsICdkZW5rdCcsICdkYWNodGUnLCAnc2VoZW4nLCAnc2llaHQnLCAnc2FoJywgJ2tvbW1lbicsXG4gICdrb21tdCcsICdrYW0nLCAnZ2VoZW4nLCAnZ2VodCcsICdnaW5nJywgJ3N0ZWhlbicsICdzdGVodCcsICdsaWVnZW4nLCAnbGllZ3QnLFxuICAnbGFzc2VuJywgJ2xcdTAwRTRzc3QnLCAnaGFsdGVuJywgJ2hcdTAwRTRsdCcsICdoaWVsdCcsICdicmluZ2VuJywgJ2JyaW5ndCcsICdicmFjaHRlJyxcbiAgJ2JsZWliZW4nLCAnYmxlaWJ0JywgJ2JsaWViJywgJ2ZyYWdlbicsICdmcmFndCcsICdmcmFndGUnLCAnYW50d29ydGVuJyxcbiAgJ2FudHdvcnRldCcsICd6ZWlnZW4nLCAnemVpZ3QnLCAnemVpZ3RlJywgJ3NwcmVjaGVuJywgJ3NwcmljaHQnLCAnc3ByYWNoJyxcbiAgJ2hcdTAwRjZyZW4nLCAnaFx1MDBGNnJ0JywgJ2hcdTAwRjZydGUnLCAnbGVybmVuJywgJ2xlcm50JywgJ2xlcm50ZScsICd2ZXJzdGVoZW4nLCAndmVyc3RlaHQnLFxuICAndmVyc3RhbmQnLCAnYmVnaW5uZW4nLCAnYmVnaW5udCcsICdiZWdhbm4nLCAnZW5kZW4nLCAnZW5kZXQnLCAnZW5kZXRlJyxcbiAgJ2FyYmVpdGVuJywgJ2FyYmVpdGV0JywgJ2FyYmVpdGV0ZScsICdsZWJlbicsICdsZWJ0JywgJ2xlYnRlJywgJ3NwaWVsZW4nLFxuICAnc3BpZWx0JywgJ3NwaWVsdGUnLCAnc2NoYXVlbicsICdzY2hhdXQnLCAnc2NoYXV0ZScsICdzY2hyZWliZW4nLCAnc2NocmVpYnQnLFxuICAnc2NocmllYicsICdsZXNlbicsICdsaWVzdCcsICdsYXMnLCAnbWVpbmVuJywgJ21laW50JywgJ21laW50ZScsICdnbGF1YmVuJyxcbiAgJ2dsYXVidCcsICdnbGF1YnRlJywgJ2hvZmZlbicsICdob2ZmdCcsICdob2ZmdGUnLCAnYnJhdWNoZW4nLCAnYnJhdWNodCcsXG4gICdicmF1Y2h0ZScsICdkYXJmJywgJ2R1cmZ0ZScsICdzb2xsJywgJ211c3MnLCAnbWFnJywgJ2tlbm5lbicsICdrZW5udCcsXG4gICdrYW5udGUnLCAnaGVpXHUwMERGZW4nLCAnaGVpXHUwMERGdCcsICdoaWVcdTAwREYnLFxuXTtcblxuLy8gQWdncmVzc2l2ZSB0aWVyIChkZWR1cGxpY2F0ZWQpXG5leHBvcnQgY29uc3QgREVfQUdHUkVTU0lWRSA9IFtcbiAgLi4uREVfQkFMQU5DRUQsXG4gICdpaG5lbicsICdpaHJlcicsICdzZWluZW4nLCAnZGVyZW4nLCAnZGVzc2VuJywgJ3dlbGNoZXInLCAnd2VsY2hlJywgJ3dlcicsXG4gICd3YXMnLCAnd28nLCAnd2llJywgJ2dlbmF1Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBERV9CTEFDS0xJU1QgPSB7XG4gIGdlbnRsZTogREVfR0VOVExFLFxuICBiYWxhbmNlZDogREVfQkFMQU5DRUQsXG4gIGFnZ3Jlc3NpdmU6IERFX0FHR1JFU1NJVkUsXG59O1xuIiwgIi8qKlxuICogTXVsdGktbGFuZ3VhZ2UgZGljdGlvbmFyeSBpbmRleC5cbiAqIEV4cG9ydHMgYWxsIGxhbmd1YWdlLXNwZWNpZmljIGZpbGxlciB3b3JkIGRpY3Rpb25hcmllcy5cbiAqL1xuXG5leHBvcnQgeyBFTl9CTEFDS0xJU1QgfSBmcm9tICcuL2VuLWZpbGxlcic7XG5leHBvcnQgeyBERV9CTEFDS0xJU1QgfSBmcm9tICcuL2RlLWZpbGxlcic7XG5cbi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIGxhbmd1YWdlIGNvZGVzXG5leHBvcnQgdHlwZSBMYW5ndWFnZUNvZGUgPSAnZW4nIHwgJ2RlJztcblxuLy8gTWFwIG9mIGxhbmd1YWdlIGNvZGUgdG8gYmxhY2tsaXN0IG9iamVjdFxuaW1wb3J0IHsgRU5fQkxBQ0tMSVNUIH0gZnJvbSAnLi9lbi1maWxsZXInO1xuaW1wb3J0IHsgREVfQkxBQ0tMSVNUIH0gZnJvbSAnLi9kZS1maWxsZXInO1xuXG5leHBvcnQgY29uc3QgTEFOR1VBR0VfRElDVElPTkFSSUVTOiBSZWNvcmQ8TGFuZ3VhZ2VDb2RlLCB7IGdlbnRsZTogc3RyaW5nW107IGJhbGFuY2VkOiBzdHJpbmdbXTsgYWdncmVzc2l2ZTogc3RyaW5nW10gfT4gPSB7XG4gIGVuOiBFTl9CTEFDS0xJU1QsXG4gIGRlOiBERV9CTEFDS0xJU1QsXG59O1xuXG5leHBvcnQgY29uc3QgU1VQUE9SVEVEX0xBTkdVQUdFUzogTGFuZ3VhZ2VDb2RlW10gPSBbJ2VuJywgJ2RlJ107XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT0gTVVMVEktTEFOR1VBR0UgU1VQUE9SVCAoRU4vREUgT05MWSkgPT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHtcbiAgTEFOR1VBR0VfRElDVElPTkFSSUVTLFxuICB0eXBlIExhbmd1YWdlQ29kZSxcbiAgU1VQUE9SVEVEX0xBTkdVQUdFUyxcbn0gZnJvbSAnLi9kaWN0aW9uYXJpZXMnO1xuXG5leHBvcnQgdHlwZSB7IExhbmd1YWdlQ29kZSB9O1xuXG5leHBvcnQgdHlwZSBDb21wcmVzc2lvbkxldmVsID0gXCJnZW50bGVcIiB8IFwiYmFsYW5jZWRcIiB8IFwiYWdncmVzc2l2ZVwiO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBTVEFUSVNUSUNTIFRSQUNLSU5HID09PT09PT09PT09PT09PT09PT09XG5cbmludGVyZmFjZSBDb21wcmVzc2lvblN0YXRzIHtcbiAgdG90YWxDb21wcmVzc2lvbnM6IG51bWJlcjtcbiAgdG90YWxDaGFyc09yaWdpbmFsOiBudW1iZXI7XG4gIHRvdGFsQ2hhcnNDb21wcmVzc2VkOiBudW1iZXI7XG4gIGxhc3RVcGRhdGVkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUGVyLWluc3RhbmNlIHN0YXRzIHRvIGF2b2lkIHN0YWxlIGRhdGEgZHVyaW5nIGhvdC1yZWxvYWQuXG4gKiBFYWNoIFRyb2dsb2R5dGUgaW5zdGFuY2UgZ2V0cyBpdHMgb3duIHN0YXRzIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlU3RhdHMoKTogQ29tcHJlc3Npb25TdGF0cyB7XG4gIHJldHVybiB7XG4gICAgdG90YWxDb21wcmVzc2lvbnM6IDAsXG4gICAgdG90YWxDaGFyc09yaWdpbmFsOiAwLFxuICAgIHRvdGFsQ2hhcnNDb21wcmVzc2VkOiAwLFxuICAgIGxhc3RVcGRhdGVkOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IExBTkdVQUdFIERFVEVDVElPTiAoRU4vREUgT05MWSkgLSBJTVBST1ZFRCA9PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciB0ZXh0IGlzIEVuZ2xpc2ggb3IgR2VybWFuIHVzaW5nIHdlaWdodGVkIHdvcmQgZnJlcXVlbmN5IGFuYWx5c2lzLlxuICogXG4gKiBTdHJhdGVneTpcbiAqIC0gSGlnaC13ZWlnaHQgd29yZHM6IGFydGljbGVzLCBwcm9ub3VucywgY29tbW9uIGZ1bmN0aW9uIHdvcmRzIChzdHJvbmcgc2lnbmFsKVxuICogLSBMb3ctd2VpZ2h0IHdvcmRzOiB0ZWNobmljYWwgdGVybXMgdGhhdCBhcHBlYXIgaW4gYm90aCBsYW5ndWFnZXMnIGNvZGUgY29udGV4dHNcbiAqIC0gQ29uZmlkZW5jZSB0aHJlc2hvbGQ6IGlmIHJhdGlvIDwgMS41OjEsIGRlZmF1bHQgdG8gRW5nbGlzaCAoc2FmZXIgZmFsbGJhY2spXG4gKi9cblxuLy8gSGlnaC1jb25maWRlbmNlIEVuZ2xpc2ggaW5kaWNhdG9ycyBcdTIwMTQgcmFyZSBvciBhYnNlbnQgaW4gR2VybWFuXG5jb25zdCBFTl9ISUdIID0gbmV3IFNldChbXG4gICd0aGUnLCAnYScsICdhbicsICdpcycsICdhcmUnLCAnd2FzJywgJ3dlcmUnLCAnYmUnLCAnYmVlbicsICdoYXZlJywgJ2hhcycsICdoYWQnLCBcbiAgJ2RvJywgJ2RvZXMnLCAnZGlkJywgJ3dpbGwnLCAnd291bGQnLCAnY291bGQnLCAnc2hvdWxkJywgJ21heScsICdtaWdodCcsICdtdXN0JyxcbiAgJ3RoaXMnLCAndGhhdCcsICd0aGVzZScsICd0aG9zZScsICdpdCcsICdpdHMnLCAndGhleScsICd0aGVtJywgJ3RoZWlyJywgJ3RoZXJlJyxcbiAgJ2hlcmUnLCAnd2hhdCcsICd3aGVuJywgJ3doZXJlJywgJ3dobycsICdob3cnLCAnd2h5JywgJ3doaWNoJywgJ25vdCcsICdubycsICdub3InLFxuICAnYnV0JywgJ2FuZCcsICdvcicsICdmb3InLCAnc28nLCAnaWYnLCAndGhlbicsICd0aGFuJywgJ3RvbycsICd2ZXJ5JywgJ2p1c3QnLFxuICAnYWJvdXQnLCAnYWJvdmUnLCAnYWZ0ZXInLCAnYWdhaW4nLCAnYWxsJywgJ2Fsc28nLCAnYW55JywgJ2JlY2F1c2UnLCAnYmVmb3JlJyxcbiAgJ2JldHdlZW4nLCAnYm90aCcsICdjYW4nLCAnZWFjaCcsICdmcm9tJywgJ2Z1cnRoZXInLCAnZ2V0JywgJ2dvdCcsICdoaW0nLCAnaGlzJyxcbiAgJ2ludG8nLCAnbW9yZScsICdtb3N0JywgJ290aGVyJywgJ291cicsICdvdXQnLCAnb3ZlcicsICdvd24nLCAnc2FtZScsICdzb21lJyxcbiAgJ3N1Y2gnLCAndGhyb3VnaCcsICd1bmRlcicsICd1bnRpbCcsICd1cCcsICd3aGlsZScsXG5dKTtcblxuLy8gSGlnaC1jb25maWRlbmNlIEdlcm1hbiBpbmRpY2F0b3JzIFx1MjAxNCByYXJlIG9yIGFic2VudCBpbiBFbmdsaXNoXG5jb25zdCBERV9ISUdIID0gbmV3IFNldChbXG4gICdkZXInLCAnZGllJywgJ2RhcycsICdkZW4nLCAnZGVtJywgJ2RlcycsICdlaW4nLCAnZWluZScsICdlaW5lcicsICdlaW5lbScsICdlaW5lcycsXG4gICdpY2gnLCAnbWljaCcsICdtaXInLCAnZHUnLCAnZGljaCcsICdkaXInLCAnZXInLCAnc2llJywgJ2VzJywgJ3dpcicsICd1bnMnLCAnaWhyJywgXG4gICdldWNoJywgJ2lzdCcsICdzaW5kJywgJ3dhcicsICd3YXJlbicsICdzZWluJywgJ2hhYmVuJywgJ2hhdCcsICdoYWJlJyxcbiAgJ3VuZCcsICdvZGVyJywgJ2FiZXInLCAnbmljaHQnLCAnYXVjaCcsICdzZWhyJywgJ3ZpZWwnLCAnbWVocicsIFxuICAnYWxsZScsICdhbGxlcycsICdkaWVzZXInLCAnZGllc2UnLCAnZGllc2VzJywgJ2plZGVyJywgJ2plZGUnLCAnamVkZXMnLCAna2VpbicsIFxuICAna2VpbmUnLCAnbWl0JywgJ25hY2gnLCAndm9uJywgJ3p1JywgJ2JlaScsICdhdWYnLCAnYXVzJywgJ2luJywgJ2FuJyxcbiAgJ2ZcdTAwRkNyJywgJ3VtJywgJ2dlZ2VuJywgJ29obmUnLCAnZHVyY2gnLCAnd2llJywgJ3dhcycsICd3ZW5uJywgJ3dlaWwnLFxuICAnc29sbHRlJywgJ2tcdTAwRjZubnRlJywgJ21cdTAwRkNzc3RlJywgJ2RhcmYnLCAnZFx1MDBGQ3JmZScsICdtYWcnLCAnbVx1MDBGNmdlJywgJ3dpbGwnLCAnd29sbGVuJyxcbl0pO1xuXG4vLyBMb3ctd2VpZ2h0IHdvcmRzIHRoYXQgYXBwZWFyIGluIGJvdGggbGFuZ3VhZ2VzIChjb2RlIGNvbnRleHQgbm9pc2UpIFx1MjAxNCBleGNsdWRlZCBmcm9tIGRldGVjdGlvblxuY29uc3QgTkVVVFJBTF9XT1JEUyA9IG5ldyBTZXQoW1xuICAvLyBDb21tb24gRW5nbGlzaC9HZXJtYW4gb3ZlcmxhcCBvciBjb2RlIGtleXdvcmRzXG4gICdjb2RlJywgJ2Z1bmN0aW9uJywgJ3JldHVybicsICdjbGFzcycsICdpbXBvcnQnLCAnZXhwb3J0JywgXG4gICdjb25zdCcsICdsZXQnLCAndmFyJywgJ2lmJywgJ2Vsc2UnLCAnZm9yJywgJ3doaWxlJyxcbiAgJ3dpcmQnLCAnd1x1MDBGQ3JkZScsICdkYVx1MDBERicsIC8vIEdlcm1hbiB3b3JkcyB0aGF0IGxvb2sgRW5nbGlzaC1pc2ggb3IgYXJlIGFyY2hhaWNcbl0pO1xuXG4vKipcbiAqIERldGVjdCBsYW5ndWFnZSB3aXRoIGNvbmZpZGVuY2UgdGhyZXNob2xkLlxuICogUmV0dXJucyAnZW4nIGFzIGRlZmF1bHQgaWYgdGV4dCBpcyB0b28gc2hvcnQgb3Igc2lnbmFsIGlzIHdlYWsuXG4gKi9cbmZ1bmN0aW9uIGRldGVjdExhbmd1YWdlKHRleHQ6IHN0cmluZyk6IExhbmd1YWdlQ29kZSB7XG4gIGNvbnN0IHdvcmRzID0gdGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9cXGJbYS16XHUwMEU0XHUwMEY2XHUwMEZDXHUwMERGXXszLH1cXGIvZykgfHwgW107XG4gIFxuICAvLyBOZWVkIG1pbmltdW0gc2lnbmFsIHRvIG1ha2UgYSBkZWNpc2lvblxuICBpZiAod29yZHMubGVuZ3RoIDwgNSkgcmV0dXJuICdlbic7XG4gIFxuICBsZXQgZW5TY29yZSA9IDA7XG4gIGxldCBkZVNjb3JlID0gMDtcbiAgXG4gIGZvciAoY29uc3Qgd29yZCBvZiB3b3Jkcykge1xuICAgIGlmIChORVVUUkFMX1dPUkRTLmhhcyh3b3JkKSkgY29udGludWU7IC8vIFNraXAgY29kZS90ZWNobmljYWwgbm9pc2VcbiAgICBcbiAgICBpZiAoRU5fSElHSC5oYXMod29yZCkpIGVuU2NvcmUrKztcbiAgICBlbHNlIGlmIChERV9ISUdILmhhcyh3b3JkKSkgZGVTY29yZSsrO1xuICB9XG4gIFxuICAvLyBDb25maWRlbmNlIHRocmVzaG9sZDogbmVlZCBhdCBsZWFzdCAxLjV4IHJhdGlvIHRvIGNvbW1pdFxuICBjb25zdCB0b3RhbCA9IGVuU2NvcmUgKyBkZVNjb3JlO1xuICBpZiAodG90YWwgPT09IDApIHJldHVybiAnZW4nO1xuICBcbiAgY29uc3QgcmF0aW8gPSBNYXRoLm1heChlblNjb3JlLCBkZVNjb3JlKSAvIE1hdGgubWluKGVuU2NvcmUsIGRlU2NvcmUpO1xuICBpZiAocmF0aW8gPCAxLjUpIHJldHVybiAnZW4nOyAvLyBXZWFrIHNpZ25hbCBcdTIxOTIgZGVmYXVsdCB0byBFbmdsaXNoXG4gIFxuICByZXR1cm4gZGVTY29yZSA+IGVuU2NvcmUgPyAnZGUnIDogJ2VuJztcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gU01BUlQgTU9ERSBERVRFQ1RJT04gPT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBEZXRlY3RzIGlmIHRoZSBwcm9tcHQgaXMgdGVjaG5pY2FsIChjb2RlLWhlYXZ5KSBvciBjb252ZXJzYXRpb25hbC5cbiAqIFJldHVybnMgdHJ1ZSBpZiB0ZWNobmljYWwsIGZhbHNlIGlmIGNvbnZlcnNhdGlvbmFsLlxuICovXG5mdW5jdGlvbiBkZXRlY3RUZWNobmljYWxDb250ZXh0KHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBDb3VudCBjb2RlLWxpa2UgdG9rZW5zIHZzIG5hdHVyYWwgbGFuZ3VhZ2UgdG9rZW5zXG4gIGNvbnN0IGNvZGVQYXR0ZXJucyA9IFsvXFx7W159XStcXH0vZywgLzxbXj5dKz4vZywgL1xcYig/OmNvbnN0fGxldHx2YXJ8ZnVuY3Rpb258Y2xhc3N8aW1wb3J0fGV4cG9ydClcXGIvZ107XG4gIGxldCBjb2RlU2NvcmUgPSAwO1xuICBcbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIGNvZGVQYXR0ZXJucykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB0ZXh0Lm1hdGNoKHBhdHRlcm4pO1xuICAgIGlmIChtYXRjaGVzKSBjb2RlU2NvcmUgKz0gbWF0Y2hlcy5sZW5ndGg7XG4gIH1cbiAgXG4gIC8vIElmIG1vcmUgdGhhbiAxMCUgb2YgdG9rZW5zIGFyZSBjb2RlLWxpa2UsIGNvbnNpZGVyIGl0IHRlY2huaWNhbFxuICBjb25zdCB0b3RhbFRva2VucyA9IHRleHQuc3BsaXQoL1xccysvKS5sZW5ndGg7XG4gIHJldHVybiB0b3RhbFRva2VucyA+IDAgJiYgKGNvZGVTY29yZSAvIHRvdGFsVG9rZW5zKSA+IDAuMTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gVFJPR0xPRFlURSBDTEFTUyA9PT09PT09PT09PT09PT09PT09PVxuXG4vLyBQcmUtY29tcGlsZWQgcGhyYXNlIHN0cnVjdHVyZSBmb3IgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uXG5pbnRlcmZhY2UgQ29tcGlsZWRQaHJhc2Uge1xuICBwaHJhc2U6IHN0cmluZztcbiAgcmVwbGFjZW1lbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVnZXg6IFJlZ0V4cDtcbn1cblxuZXhwb3J0IGNsYXNzIFRyb2dsb2R5dGUge1xuICBwcml2YXRlIHBocmFzZXNBbmRMb2dpYzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcHJpdmF0ZSBzeW5vbnltczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcHJpdmF0ZSBjYWNoZWRCbGFja2xpc3RzOiBNYXA8TGFuZ3VhZ2VDb2RlLCBNYXA8Q29tcHJlc3Npb25MZXZlbCwgU2V0PHN0cmluZz4+PjtcbiAgcHJpdmF0ZSBzdGF0czogQ29tcHJlc3Npb25TdGF0cztcbiAgcHJpdmF0ZSByZWFkb25seSBNQVhfQ09NUFJFU1NJT05TX0JFRk9SRV9SRVNFVCA9IDEwMDAwO1xuICBwcml2YXRlIHJlYWRvbmx5IE1BWF9DSEFSU19CRUZPUkVfUkVTRVQgPSAxMF8wMDBfMDAwO1xuICBcbiAgLy8gUHJlLXNvcnRlZCBwaHJhc2VzIHdpdGggcHJlLWNvbXBpbGVkIHJlZ2V4ZXMgKFBFUkZPUk1BTkNFIEZJWClcbiAgcHJpdmF0ZSBjb21waWxlZFBocmFzZXM6IENvbXBpbGVkUGhyYXNlW107XG5cbiAgY29uc3RydWN0b3IoZGljdGlvbmFyaWVzOiB7XG4gICAgcGhyYXNlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgICBibGFja2xpc3Q6IHN0cmluZ1tdO1xuICAgIHN5bm9ueW1zPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgfSkge1xuICAgIHRoaXMucGhyYXNlc0FuZExvZ2ljID0geyAuLi5kaWN0aW9uYXJpZXMucGhyYXNlcyB9O1xuICAgIHRoaXMuc3lub255bXMgPSBkaWN0aW9uYXJpZXMuc3lub255bXMgfHwge307XG4gICAgXG4gICAgLy8gUHJlLXNvcnQgcGhyYXNlcyBieSBsZW5ndGggKGxvbmdlc3QgZmlyc3QpIGFuZCBwcmUtY29tcGlsZSByZWdleGVzXG4gICAgY29uc3Qgd29yZENoYXIgPSBcImEtekEtWjAtOV8nXHUwMERGXHUwMEU0XHUwMEY2XHUwMEZDXHUwMEM0XHUwMEQ2XHUwMERDXCI7XG4gICAgdGhpcy5jb21waWxlZFBocmFzZXMgPSBPYmplY3QuZW50cmllcyh0aGlzLnBocmFzZXNBbmRMb2dpYylcbiAgICAgIC5maWx0ZXIoKFtwaHJhc2VdKSA9PiBwaHJhc2UgJiYgcGhyYXNlLmxlbmd0aCA+PSAyKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGJbMF0ubGVuZ3RoIC0gYVswXS5sZW5ndGgpXG4gICAgICAubWFwKChbcGhyYXNlLCByZXBsYWNlbWVudF0pID0+ICh7XG4gICAgICAgIHBocmFzZSxcbiAgICAgICAgcmVwbGFjZW1lbnQsXG4gICAgICAgIHJlZ2V4OiBuZXcgUmVnRXhwKGAoPzwhWyR7d29yZENoYXJ9XSkke3RoaXMuZXNjYXBlUmVnZXgocGhyYXNlKX0oPyFbJHt3b3JkQ2hhcn1dKWAsICdnaScpXG4gICAgICB9KSk7XG4gICAgXG4gICAgdGhpcy5jYWNoZWRCbGFja2xpc3RzID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgbGFuZ0NvZGUgb2YgU1VQUE9SVEVEX0xBTkdVQUdFUykge1xuICAgICAgY29uc3QgbGFuZ0RpY3QgPSBMQU5HVUFHRV9ESUNUSU9OQVJJRVNbbGFuZ0NvZGVdO1xuICAgICAgY29uc3QgbGV2ZWxNYXAgPSBuZXcgTWFwPENvbXByZXNzaW9uTGV2ZWwsIFNldDxzdHJpbmc+PigpO1xuICAgICAgXG4gICAgICBbJ2dlbnRsZScsICdiYWxhbmNlZCcsICdhZ2dyZXNzaXZlJ10uZm9yRWFjaCgobGV2ZWwpID0+IHtcbiAgICAgICAgY29uc3QgbHZsID0gbGV2ZWwgYXMgQ29tcHJlc3Npb25MZXZlbDtcbiAgICAgICAgbGV2ZWxNYXAuc2V0KGx2bCwgbmV3IFNldChsYW5nRGljdFtsdmxdLm1hcCh3ID0+IHcudG9Mb3dlckNhc2UoKSkpKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhY2hlZEJsYWNrbGlzdHMuc2V0KGxhbmdDb2RlLCBsZXZlbE1hcCk7XG4gICAgfVxuICAgIFxuICAgIC8vIEluaXRpYWxpemUgcGVyLWluc3RhbmNlIHN0YXRzXG4gICAgdGhpcy5zdGF0cyA9IGNyZWF0ZVN0YXRzKCk7XG4gIH1cblxuICBwcml2YXRlIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBzcGVjaWFsQ2hhcnMgPSBbJ1xcXFwnLCAnXicsICckJywgJyonLCAnKycsICc/JywgJygnLCAnKScsICcuJywgJ3snLCAnfScsICd8JywgJ1snLCAnXScsICcvJ107XG4gICAgbGV0IHJlc3VsdCA9IHN0cjtcbiAgICBmb3IgKGNvbnN0IGNoIG9mIHNwZWNpYWxDaGFycykge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNwbGl0KGNoKS5qb2luKCdcXFxcJyArIGNoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbXByZXNzKHByb21wdDogc3RyaW5nLCBvcHRpb25zPzogeyBcbiAgICBsZXZlbD86IENvbXByZXNzaW9uTGV2ZWw7XG4gICAgcHJvdGVjdFVybHM/OiBib29sZWFuO1xuICAgIHByb3RlY3ROdW1iZXJzPzogYm9vbGVhbjtcbiAgICBwcm90ZWN0SGVhZGVycz86IGJvb2xlYW47XG4gICAgcHJvdGVjdEZpbGVQYXRocz86IGJvb2xlYW47XG4gICAgcHJvdGVjdEpzb25YbWw/OiBib29sZWFuOyAvLyBORVdcbiAgICBsYW5ndWFnZT86IExhbmd1YWdlQ29kZTtcbiAgICBzbWFydE1vZGU/OiBib29sZWFuOyAgICAgIC8vIE5FV1xuICAgIHZlcmJvc2U/OiBib29sZWFuO1xuICB9KTogc3RyaW5nIHtcbiAgICAvLyBJTlBVVCBWQUxJREFUSU9OIChTRUNVUklUWS9TVEFCSUxJVFkpXG4gICAgaWYgKCFwcm9tcHQgfHwgdHlwZW9mIHByb21wdCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnNvbGUud2FybignW1Ryb2dsb2R5dGVdIEludmFsaWQgaW5wdXQ6IHByb21wdCBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICAgICAgcmV0dXJuIHByb21wdCB8fCAnJztcbiAgICB9XG5cbiAgICBjb25zdCBNQVhfSU5QVVRfTEVOR1RIID0gMV8wMDBfMDAwOyAvLyAxTUIgbGltaXQgdG8gcHJldmVudCBEb1NcbiAgICBpZiAocHJvbXB0Lmxlbmd0aCA+IE1BWF9JTlBVVF9MRU5HVEgpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW1Ryb2dsb2R5dGVdIElucHV0IGV4Y2VlZHMgJHtNQVhfSU5QVVRfTEVOR1RIfSBjaGFyIGxpbWl0LCB0cnVuY2F0aW5nLi4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGV2ZWwgPSBvcHRpb25zPy5sZXZlbCA/PyBcImJhbGFuY2VkXCI7XG4gICAgY29uc3QgcHJvdGVjdFVybHMgPSBvcHRpb25zPy5wcm90ZWN0VXJscyA/PyB0cnVlO1xuICAgIGNvbnN0IHByb3RlY3ROdW1iZXJzID0gb3B0aW9ucz8ucHJvdGVjdE51bWJlcnMgPz8gdHJ1ZTtcbiAgICBjb25zdCBwcm90ZWN0SGVhZGVycyA9IG9wdGlvbnM/LnByb3RlY3RIZWFkZXJzID8/IHRydWU7XG4gICAgY29uc3QgcHJvdGVjdEZpbGVQYXRocyA9IG9wdGlvbnM/LnByb3RlY3RGaWxlUGF0aHMgPz8gdHJ1ZTtcbiAgICBjb25zdCBwcm90ZWN0SnNvblhtbCA9IG9wdGlvbnM/LnByb3RlY3RKc29uWG1sID8/IHRydWU7IC8vIE5FVyBkZWZhdWx0XG4gICAgY29uc3Qgc21hcnRNb2RlID0gb3B0aW9ucz8uc21hcnRNb2RlID8/IHRydWU7ICAgICAgICAgIC8vIE5FVyBkZWZhdWx0XG4gICAgXG4gICAgbGV0IGxhbmdDb2RlOiBMYW5ndWFnZUNvZGU7XG4gICAgaWYgKG9wdGlvbnM/Lmxhbmd1YWdlKSB7XG4gICAgICBsYW5nQ29kZSA9IG9wdGlvbnMubGFuZ3VhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhbmdDb2RlID0gZGV0ZWN0TGFuZ3VhZ2UocHJvbXB0KTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGVidWcgPSBvcHRpb25zPy52ZXJib3NlID8/IGZhbHNlO1xuICAgIFxuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBEZXRlY3RlZCBsYW5ndWFnZTogJHtsYW5nQ29kZX0gZm9yIHByb21wdDogXCIke3Byb21wdC5zdWJzdHJpbmcoMCwgODApfS4uLlwiYCk7XG4gICAgfVxuXG4gICAgbGV0IHRleHQgPSBwcm9tcHQ7XG4gICAgY29uc3QgcHJvdGVjdGVkSXRlbXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBsZXZlbEJsYWNrbGlzdE1hcCA9IHRoaXMuY2FjaGVkQmxhY2tsaXN0cy5nZXQobGFuZ0NvZGUpO1xuICAgIGlmICghbGV2ZWxCbGFja2xpc3RNYXApIHtcbiAgICAgIGNvbnNvbGUud2FybihgW1Ryb2dsb2R5dGVdIFVua25vd24gbGFuZ3VhZ2UgY29kZTogJHtsYW5nQ29kZX0sIGZhbGxpbmcgYmFjayB0byBFbmdsaXNoYCk7XG4gICAgICBsYW5nQ29kZSA9ICdlbic7XG4gICAgfVxuICAgIGxldCBsZXZlbEJsYWNrbGlzdCA9IHRoaXMuY2FjaGVkQmxhY2tsaXN0cy5nZXQobGFuZ0NvZGUgfHwgJ2VuJykhLmdldChsZXZlbCkhO1xuXG4gICAgLy8gU21hcnQgTW9kZSBBZGp1c3RtZW50IChORVcpXG4gICAgbGV0IHN5bm9ueW1SZXBsYWNlbWVudEVuYWJsZWQgPSB0cnVlO1xuICAgIGlmIChzbWFydE1vZGUgJiYgZGV0ZWN0VGVjaG5pY2FsQ29udGV4dChwcm9tcHQpKSB7XG4gICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKCdbVHJvZ2xvZHl0ZV0gU21hcnQgTW9kZTogRGV0ZWN0ZWQgdGVjaG5pY2FsIGNvbnRleHQuIFJlZHVjaW5nIHN5bm9ueW0gcmVwbGFjZW1lbnQuJyk7XG4gICAgICAvLyBJbiB0ZWNobmljYWwgbW9kZSwgZGlzYWJsZSBzeW5vbnltIHJlcGxhY2VtZW50IHRvIHByZXNlcnZlIGNvZGUgcmVhZGFiaWxpdHlcbiAgICAgIHN5bm9ueW1SZXBsYWNlbWVudEVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBQUk9URUNUSU9OIFBIQVNFID09PT09PT09PT09PT09PT09PT09XG4gICAgbGV0IHBsYWNlaG9sZGVyQ291bnRlciA9IDA7XG4gICAgY29uc3QgTUFYX1BMQUNFSE9MREVSUyA9IDB4RkZGRkY7IC8vIH4xIG1pbGxpb24gcGxhY2Vob2xkZXJzIGJlZm9yZSBvdmVyZmxvd1xuICAgIGNvbnN0IEJSRUFLX0VWRU5fTEVOR1RIID0gODsgLy8gTWluaW11bSBsZW5ndGggZm9yIHByb3RlY3Rpb24gdG8gYmUgd29ydGh3aGlsZVxuICAgIFxuICAgIC8vIENoZWNrIGlmIGlucHV0IGFscmVhZHkgY29udGFpbnMgcHJpdmF0ZSB1c2UgYXJlYSBjaGFyYWN0ZXJzIChlZGdlIGNhc2UpXG4gICAgY29uc3QgaGFzRXhpc3RpbmdQdWFDaGFycyA9IC9bXFx1RTAwMC1cXHVGOEZGXS8udGVzdCh0ZXh0KTtcbiAgICBpZiAoaGFzRXhpc3RpbmdQdWFDaGFycyAmJiBkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ1tUcm9nbG9keXRlXSBXYXJuaW5nOiBJbnB1dCBjb250YWlucyBQVUEgY2hhcmFjdGVycywgbWF5IGNhdXNlIGNvbmZsaWN0cycpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm90ZWN0SWZXb3J0aHdoaWxlID0gKG1hdGNoOiBzdHJpbmcsIG1pbkxlbjogbnVtYmVyID0gQlJFQUtfRVZFTl9MRU5HVEgpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKG1hdGNoLmxlbmd0aCA8PSBtaW5MZW4pIHJldHVybiBtYXRjaDtcbiAgICAgIC8vIENoZWNrIGZvciBvdmVyZmxvdyBiZWZvcmUgcHJvdGVjdGluZ1xuICAgICAgaWYgKHBsYWNlaG9sZGVyQ291bnRlciA+PSBNQVhfUExBQ0VIT0xERVJTKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW1Ryb2dsb2R5dGVdIFx1MjZBMFx1RkUwRiBQbGFjZWhvbGRlciBsaW1pdCByZWFjaGVkLCBza2lwcGluZyBwcm90ZWN0aW9uLicpO1xuICAgICAgICByZXR1cm4gbWF0Y2g7IC8vIFJldHVybiBvcmlnaW5hbCB3aXRob3V0IHByb3RlY3Rpb25cbiAgICAgIH1cbiAgICAgIHByb3RlY3RlZEl0ZW1zLnB1c2gobWF0Y2gpO1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCgweEUwMDAgKyBwbGFjZWhvbGRlckNvdW50ZXIrKyk7XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gICAgfTtcblxuICAgIC8vIDEuIFByb3RlY3QgY29kZSBibG9ja3NcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oYGBgW1xcc1xcU10qP2BgYHxgW15gXStgKS9nLCAobWF0Y2gpID0+IHtcbiAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCAxNSk7XG4gICAgfSk7XG5cbiAgICAvLyAyLiBQcm90ZWN0IFVSTHNcbiAgICBpZiAocHJvdGVjdFVybHMpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhodHRwcz86XFwvXFwvW15cXHM8PigpXCInXFxcXFtcXF1dK3x3d3dcXC5bXlxcczw+KClcIidcXFxcW1xcXV0rKS9naSwgKG1hdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCAyMCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAzLiBQcm90ZWN0IHZlcnNpb24gbnVtYmVycyBhbmQgc29mdHdhcmUgbmFtZXMgd2l0aCBkb3RzXG4gICAgaWYgKHByb3RlY3ROdW1iZXJzKSB7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXGIodlxcZCtcXC5cXGQrKD86XFwuXFxkKyk/KVxcYi9nLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcYihbQS1aXVthLXpBLVowLTldKlxcLlthLXpBLVowLTldKylcXGIvZywgKG1hdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCA2KTtcbiAgICAgIH0pO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKCNcXGR7Myx9KS9nLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXs0fS1bMC05YS1mXXsxMn0pL2dpLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcbiAgICB9XG5cbiAgICAvLyA0LiBQcm90ZWN0IG1hcmtkb3duIGhlYWRlcnNcbiAgICBpZiAocHJvdGVjdEhlYWRlcnMpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhefFxcbikoI3sxLDZ9XFxzKy4rKS9nLCAobWF0Y2gsIG5ld2xpbmUsIGhlYWRlcikgPT4ge1xuICAgICAgICBjb25zdCBwcm90ZWN0ZWRIZWFkZXIgPSBwcm90ZWN0SWZXb3J0aHdoaWxlKGhlYWRlciwgMTIpO1xuICAgICAgICByZXR1cm4gYCR7bmV3bGluZX0ke3Byb3RlY3RlZEhlYWRlcn1gO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gNS4gUHJvdGVjdCBmaWxlIHBhdGhzIC0gTVVTVCBjb21lIGJlZm9yZSBzeW5vbnltIHJlcGxhY2VtZW50IVxuICAgIGlmIChwcm90ZWN0RmlsZVBhdGhzKSB7XG4gICAgICAvLyBXaW5kb3dzIGFic29sdXRlIHBhdGhzIEZJUlNUIChDOlxcLi4uKSB3aXRoIG9wdGlvbmFsIGV4dGVuc2lvblxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKFtBLVphLXpdOltcXC9cXFxcXVtePD5cInw/Klxcclxcbl17MTAsfSkoPz1bXFxzLiw7OiE/KVxcXV18JCkvZywgcHJvdGVjdElmV29ydGh3aGlsZSk7XG4gICAgICBcbiAgICAgIC8vIFJlbGF0aXZlIHBhdGhzIHdpdGggLi8gb3IgLi4vIC0gbWF0Y2ggY29tcGxldGUgcGF0aCBpbmNsdWRpbmcgZXh0ZW5zaW9uXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFwuXFwuP1tcXC9cXFxcXVteXFxzPD5cInw/Kl0rKSg/PVtcXHMuLDs6IT8pXFxdXXwkKS9nLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcbiAgICAgIFxuICAgICAgLy8gTGludXgvbWFjT1MgYWJzb2x1dGUgcGF0aHMgKC9wYXRoL3RvL2ZpbGUpIC0gbWF0Y2ggY29tcGxldGUgcGF0aCBpbmNsdWRpbmcgZXh0ZW5zaW9uXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFwvW15cXHM8PlwifD8qXXsxMCx9KSg/PVtcXHMuLDs6IT8pXFxdXXwkKS9nLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcbiAgICAgIFxuICAgICAgLy8gSG9tZSBkaXJlY3RvcmllcyAofi9maWxlLmV4dClcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyh+W1xcL1xcXFxdW15cXHM8PlwifD8qXSspKD89W1xccy4sOzohPylcXF1dfCQpL2csIHByb3RlY3RJZldvcnRod2hpbGUpO1xuICAgIH1cblxuICAgIC8vIDYuIE5FVzogUHJvdGVjdCBKU09OL1hNTCBzdHJ1Y3R1cmVzXG4gICAgaWYgKHByb3RlY3RKc29uWG1sKSB7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFx7W157fV0qXFx9KS9nLCAobWF0Y2gpID0+IHByb3RlY3RJZldvcnRod2hpbGUobWF0Y2gsIDEwKSk7IC8vIFNpbXBsZSBKU09OXG4gICAgICBcbiAgICAgIC8vIFhNTCBQcm90ZWN0aW9uIC0gZmluZCBPTkxZIG91dGVybW9zdCBjb21wbGV0ZSA8dGFnPi4uLjwvdGFnPiBzdHJ1Y3R1cmVzXG4gICAgICBjb25zdCBmaW5kT3V0ZXJtb3N0WG1sID0gKGlucHV0OiBzdHJpbmcpOiB7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyIH1bXSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfVtdID0gW107XG4gICAgICAgIGNvbnN0IHRhZ1JlZ2V4ID0gLzwoXFwvPykoW2EtekEtWl1bYS16QS1aMC05XSopKFtePl0qPyk+L2c7XG4gICAgICAgIGxldCBtYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbDtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlICgobWF0Y2ggPSB0YWdSZWdleC5leGVjKGlucHV0KSkgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBpc0Nsb3NpbmcgPSBtYXRjaFsxXSA9PT0gJy8nO1xuICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gbWF0Y2guaW5kZXg7XG4gICAgICAgICAgY29uc3QgZnVsbFRhZyA9IG1hdGNoWzBdO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFNraXAgY2xvc2luZyB0YWdzIGFuZCBzZWxmLWNsb3NpbmcgdGFnc1xuICAgICAgICAgIGlmIChpc0Nsb3NpbmcgfHwgZnVsbFRhZy5lbmRzV2l0aCgnLz4nKSkgY29udGludWU7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gU0tJUDogSWYgdGhpcyBvcGVuaW5nIHRhZyBpcyBpbnNpZGUgYW4gYWxyZWFkeS1mb3VuZCBzdHJ1Y3R1cmUsIHNraXAgaXRcbiAgICAgICAgICAvLyBUaGlzIGVuc3VyZXMgd2Ugb25seSBwcm90ZWN0IG91dGVybW9zdCBzdHJ1Y3R1cmVzXG4gICAgICAgICAgY29uc3QgaXNJbnNpZGVFeGlzdGluZyA9IHJlc3VsdHMuc29tZShyID0+IHN0YXJ0UG9zID4gci5zdGFydCAmJiBzdGFydFBvcyA8IHIuZW5kKTtcbiAgICAgICAgICBpZiAoaXNJbnNpZGVFeGlzdGluZykgY29udGludWU7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gVHJhY2sgbmVzdGluZyBkZXB0aCAtIEFOWSBvcGVuaW5nIHRhZyBpbmNyZWFzZXMsIEFOWSBjbG9zaW5nIHRhZyBkZWNyZWFzZXNcbiAgICAgICAgICBsZXQgZGVwdGggPSAxO1xuICAgICAgICAgIGxldCBzZWFyY2hQb3MgPSBzdGFydFBvcyArIGZ1bGxUYWcubGVuZ3RoO1xuICAgICAgICAgIGxldCBlbmRQb3MgPSAtMTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBpbm5lclJlZ2V4ID0gLzwoXFwvPykoW2EtekEtWl1bYS16QS1aMC05XSopKFtePl0qPyk+L2c7XG4gICAgICAgICAgbGV0IGlubmVyTWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGw7XG4gICAgICAgICAgXG4gICAgICAgICAgd2hpbGUgKGRlcHRoID4gMCAmJiAoaW5uZXJNYXRjaCA9IGlubmVyUmVnZXguZXhlYyhpbnB1dCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaW5uZXJNYXRjaC5pbmRleCA8IHNlYXJjaFBvcykgeyBpbm5lclJlZ2V4Lmxhc3RJbmRleCA9IHNlYXJjaFBvczsgY29udGludWU7IH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaW5uZXJJc0Nsb3NpbmcgPSBpbm5lck1hdGNoWzFdID09PSAnLyc7XG4gICAgICAgICAgICBjb25zdCBpbm5lckZ1bGxUYWcgPSBpbm5lck1hdGNoWzBdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaW5uZXJGdWxsVGFnLmVuZHNXaXRoKCcvPicpKSB7XG4gICAgICAgICAgICAgIC8vIFNlbGYtY2xvc2luZyB0YWcgLSBkb2Vzbid0IGFmZmVjdCBkZXB0aFxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbm5lcklzQ2xvc2luZykge1xuICAgICAgICAgICAgICBkZXB0aC0tOyAgLy8gQU5ZIGNsb3NpbmcgdGFnIGRlY3JlYXNlcyBkZXB0aFxuICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBlbmRQb3MgPSBpbm5lck1hdGNoLmluZGV4ICsgaW5uZXJGdWxsVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVwdGgrKzsgIC8vIEFOWSBvcGVuaW5nIHRhZyBpbmNyZWFzZXMgZGVwdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2VhcmNoUG9zID0gaW5uZXJNYXRjaC5pbmRleCArIGlubmVyRnVsbFRhZy5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChlbmRQb3MgPiAwKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goeyBzdGFydDogc3RhcnRQb3MsIGVuZDogZW5kUG9zIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbnN0IHhtbFN0cnVjdHVyZXMgPSBmaW5kT3V0ZXJtb3N0WG1sKHRleHQpO1xuICAgICAgLy8gUHJvdGVjdCBmcm9tIGVuZCB0byBzdGFydCB0byBwcmVzZXJ2ZSBpbmRpY2VzXG4gICAgICBmb3IgKGxldCBpID0geG1sU3RydWN0dXJlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBzdHJ1Y3R1cmUgPSB4bWxTdHJ1Y3R1cmVzW2ldO1xuICAgICAgICBjb25zdCB4bWxUZXh0ID0gdGV4dC5zdWJzdHJpbmcoc3RydWN0dXJlLnN0YXJ0LCBzdHJ1Y3R1cmUuZW5kKTtcbiAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIHN0cnVjdHVyZS5zdGFydCkgKyBcbiAgICAgICAgICAgICAgIHByb3RlY3RJZldvcnRod2hpbGUoeG1sVGV4dCwgNSkgKyBcbiAgICAgICAgICAgICAgIHRleHQuc3Vic3RyaW5nKHN0cnVjdHVyZS5lbmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IENPTVBSRVNTSU9OIFBIQVNFID09PT09PT09PT09PT09PT09PT09XG5cbiAgICBsZXQgcGhyYXNlTWF0Y2hlcyA9IDA7XG4gICAgbGV0IHBocmFzZUNoYXJzU2F2ZWQgPSAwO1xuXG4gICAgLy8gVXNlIHByZS1jb21waWxlZCBwaHJhc2VzIGZyb20gY29uc3RydWN0b3IgKFBFUkZPUk1BTkNFIEZJWCAtIG5vIHJlZ2V4IGNvbXBpbGF0aW9uIHBlciBjYWxsKVxuICAgIGZvciAoY29uc3QgeyBwaHJhc2UsIHJlcGxhY2VtZW50LCByZWdleCB9IG9mIHRoaXMuY29tcGlsZWRQaHJhc2VzKSB7XG4gICAgICAvLyBTaW5nbGUtcGFzcyByZXBsYWNlbWVudCB3aXRoIGNvdW50aW5nIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UocmVnZXgsIChtYXRjaCkgPT4ge1xuICAgICAgICBjb25zdCBzYXZlZCA9IG1hdGNoLmxlbmd0aCAtIChyZXBsYWNlbWVudD8ubGVuZ3RoIHx8IDApO1xuICAgICAgICBwaHJhc2VNYXRjaGVzKys7XG4gICAgICAgIHBocmFzZUNoYXJzU2F2ZWQgKz0gc2F2ZWQ7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVwbGFjZW1lbnQgJiYgcmVwbGFjZW1lbnQudHJpbSgpICE9PSAnJyA/IHJlcGxhY2VtZW50IDogJyAnO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gV09SRCBGSUxURVJJTkcgUEhBU0UgPT09PT09PT09PT09PT09PT09PT1cbiAgICBcbiAgICAvLyBTcGxpdCBpbnRvIHdvcmRzIHdoaWxlIHByZXNlcnZpbmcgcHVuY3R1YXRpb24gYW5kIHNwYWNpbmdcbiAgICAvLyBGSVg6IEluY2x1ZGUgJy4nIGluIHdvcmQgcGF0dGVybiB0byBrZWVwIFwiTm9kZS5qc1wiLCBcInYxLjAuMFwiIGludGFjdFxuXHRjb25zdCB3b3JkUGF0dGVybiA9IC9bLWEtekEtWjAtOV8uJ1x1MDBERlx1MDBFNFx1MDBGNlx1MDBGQ1x1MDBDNFx1MDBENlx1MDBEQ10rL2c7XG4gICAgY29uc3QgdG9rZW5zID0gdGV4dC5zcGxpdCh3b3JkUGF0dGVybik7XG4gICAgY29uc3Qgd29yZHMgPSB0ZXh0Lm1hdGNoKHdvcmRQYXR0ZXJuKSB8fCBbXTtcbiAgICBcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbVHJvZ2xvZHl0ZV0gRm91bmQgJHt3b3Jkcy5sZW5ndGh9IHdvcmRzIGluICR7dG9rZW5zLmxlbmd0aH0gdG9rZW4gc2xvdHNgKTtcbiAgICB9XG5cbiAgICBsZXQgZmlsdGVyZWRDb3VudCA9IDA7XG4gICAgbGV0IHN5bm9ueW1Db3VudCA9IDA7XG4gICAgY29uc3QgZmlsdGVyZWRXb3Jkczogc3RyaW5nW10gPSBbXTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZHMpIHtcbiAgICAgIGNvbnN0IGxvd2VyID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgXG4gICAgICAvLyBDaGVjayBibGFja2xpc3QgZmlyc3RcbiAgICAgIGlmIChsZXZlbEJsYWNrbGlzdC5oYXMobG93ZXIpKSB7XG4gICAgICAgIGZpbHRlcmVkQ291bnQrKztcbiAgICAgICAgY29udGludWU7IC8vIFNraXAgdGhpcyB3b3JkIGVudGlyZWx5XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIEFwcGx5IHN5bm9ueW0gcmVwbGFjZW1lbnQgKHJlc3BlY3RzIFNtYXJ0IE1vZGUpXG4gICAgICBpZiAoc3lub255bVJlcGxhY2VtZW50RW5hYmxlZCAmJiB0aGlzLnN5bm9ueW1zW2xvd2VyXSkge1xuICAgICAgICBzeW5vbnltQ291bnQrKztcbiAgICAgICAgZmlsdGVyZWRXb3Jkcy5wdXNoKHRoaXMuc3lub255bXNbbG93ZXJdKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIEtlZXAgb3JpZ2luYWwgd29yZFxuICAgICAgZmlsdGVyZWRXb3Jkcy5wdXNoKHdvcmQpO1xuICAgIH1cblxuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBCbGFja2xpc3Q6ICR7bGV2ZWxCbGFja2xpc3Quc2l6ZX0gd29yZHMsIEZpbHRlcmVkOiAke2ZpbHRlcmVkQ291bnR9LCBTeW5vbnltczogJHtzeW5vbnltQ291bnR9YCk7XG4gICAgfVxuXG4gICAgLy8gUmVjb25zdHJ1Y3QgdGV4dCBieSBpbnRlcmxlYXZpbmcgdG9rZW5zIChkZWxpbWl0ZXJzKSBhbmQgZmlsdGVyZWQgd29yZHNcbiAgICAvLyBQRVJGT1JNQU5DRSBGSVg6IFVzZSBhcnJheSBqb2luIGluc3RlYWQgb2Ygc3RyaW5nIGNvbmNhdGVuYXRpb24gKE8oblx1MDBCMikgXHUyMTkyIE8obikpXG4gICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IHdvcmRJbmRleCA9IDA7XG4gICAgXG4gICAgZm9yIChjb25zdCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICAgIHBhcnRzLnB1c2godG9rZW4pOyAvLyBBZGQgZGVsaW1pdGVyL3B1bmN0dWF0aW9uXG4gICAgICBpZiAod29yZEluZGV4IDwgZmlsdGVyZWRXb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgcGFydHMucHVzaChmaWx0ZXJlZFdvcmRzW3dvcmRJbmRleCsrXSk7IC8vIEFkZCBuZXh0IGtlcHQgd29yZFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIHdoaXRlc3BhY2UgYW5kIHB1bmN0dWF0aW9uIGFydGlmYWN0c1xuICAgIHRleHQgPSBwYXJ0cy5qb2luKCcnKVxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJyAnKSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIENvbGxhcHNlIG11bHRpcGxlIHNwYWNlcyB0byBvbmVcbiAgICAgIC5yZXBsYWNlKC9cXHMrKFsuLD8hOzpdKS9nLCAnJDEnKSAgICAgICAgICAgICAgICAvLyAyLiBSZW1vdmUgc3BhY2UgQkVGT1JFIHB1bmN0dWF0aW9uXG4gICAgICAucmVwbGFjZSgvXihbLiw/ITs6XVxccyopKy9nLCAnJykgICAgICAgICAgICAgICAgLy8gMy4gUmVtb3ZlIGxlYWRpbmcgb3JwaGFuZWQgcHVuY3R1YXRpb24gKyBzcGFjZXNcbiAgICAgIC5yZXBsYWNlKC8oWy4sPyE7Ol1cXHMqKSskL2csICcnKSAgICAgICAgICAgICAgICAvLyA0LiBSZW1vdmUgdHJhaWxpbmcgb3JwaGFuZWQgcHVuY3R1YXRpb24gKyBzcGFjZXNcbiAgICAgIC5yZXBsYWNlKC9cXHMrKFsuLD8hOzpdKVxccysvZywgJyAnKSAgICAgICAgICAgICAgLy8gNS4gUmVtb3ZlIHN0YW5kYWxvbmUgcHVuY3R1YXRpb24gc3Vycm91bmRlZCBieSBzcGFjZXNcbiAgICAgIC5yZXBsYWNlKC8oWy4sPyE7Ol0pezIsfS9nLCAnJDEnKSAgICAgICAgICAgICAgIC8vIDYuIENvbGxhcHNlIGNvbnNlY3V0aXZlIHB1bmN0dWF0aW9uIHRvIG9uZVxuICAgICAgLnJlcGxhY2UoLyhbLj8hOzpdKSg/PVtBLVpcdTAwREZcdTAwQzRcdTAwRDZcdTAwRENdKS9nLCAnJDEgJykgICAgICAvLyA3LiBBZGQgc3BhY2UgQUZURVIgc2VudGVuY2UtZW5kaW5nIHB1bmN0IChiZWZvcmUgQ0FQSVRBTClcbiAgICAgIC50cmltKCk7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBSRVNUT1JBVElPTiBQSEFTRSA9PT09PT09PT09PT09PT09PT09PVxuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBSZXN0b3JpbmcgJHtwcm90ZWN0ZWRJdGVtcy5sZW5ndGh9IHByb3RlY3RlZCBpdGVtcy4uLmApO1xuICAgIH1cblxuICAgIC8vIFBFUkZPUk1BTkNFIEZJWDogU2luZ2xlLXBhc3MgcmVwbGFjZW1lbnQgdXNpbmcgTWFwIChPKG4pIGluc3RlYWQgb2YgTyhuXHUwMEIyKSlcbiAgICBpZiAocHJvdGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvdGVjdGVkSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVwbGFjZW1lbnRzLnNldChTdHJpbmcuZnJvbUNvZGVQb2ludCgweEUwMDAgKyBpKSwgcHJvdGVjdGVkSXRlbXNbaV0pO1xuICAgICAgfVxuXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9bXHVFMDAwLVx1RkZGRl0vZywgKG1hdGNoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3RvcmVkID0gcmVwbGFjZW1lbnRzLmdldChtYXRjaCk7XG4gICAgICAgIGlmICghcmVzdG9yZWQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtUcm9nbG9keXRlXSBcdTI2QTBcdUZFMEYgUGxhY2Vob2xkZXIgJHttYXRjaC5jb2RlUG9pbnRBdCgwKSEtMHhFMDAwfSBub3QgZm91bmQhYCk7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN0b3JlZDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IE1FVFJJQ1MgUkVQT1JUID09PT09PT09PT09PT09PT09PT09XG5cbiAgICBjb25zdCBvcmlnaW5hbExlbmd0aCA9IHByb21wdC5sZW5ndGg7XG4gICAgY29uc3QgY29tcHJlc3NlZExlbmd0aCA9IHRleHQubGVuZ3RoO1xuICAgIGNvbnN0IHNhdmluZ3MgPSBvcmlnaW5hbExlbmd0aCAtIGNvbXByZXNzZWRMZW5ndGg7XG4gICAgY29uc3QgcGVyY2VudFNhdmluZ3MgPSBvcmlnaW5hbExlbmd0aCA+IDAgPyAoc2F2aW5ncyAvIG9yaWdpbmFsTGVuZ3RoKSAqIDEwMCA6IDA7XG5cbiAgICBpZiAob3B0aW9ucz8udmVyYm9zZSA/PyBmYWxzZSkge1xuICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJyk7XG4gICAgICBjb25zb2xlLmxvZyhgW1Ryb2dsb2R5dGVdIENvbXByZXNzaW9uIFJlcG9ydCAoJHtsZXZlbC50b1VwcGVyQ2FzZSgpfSlgKTtcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgICBjb25zb2xlLmxvZyhgUmVzdWx0OiAke29yaWdpbmFsTGVuZ3RofSBcdTIxOTIgJHtjb21wcmVzc2VkTGVuZ3RofSBjaGFycyAoJHtwZXJjZW50U2F2aW5ncy50b0ZpeGVkKDEpfSUgJHtzYXZpbmdzID49IDAgPyAnc2F2aW5ncycgOiAnb3ZlcmhlYWQnfSlgKTtcbiAgICBcbiAgICBjb25zdCB0cnVuY2F0ZSA9IChzOiBzdHJpbmcsIG1heCA9IDE1MCkgPT4gcy5sZW5ndGggPiBtYXggPyBgJHtzLnN1YnN0cmluZygwLCBtYXgpfS4uLmAgOiBzO1xuICAgIGNvbnNvbGUubG9nKGBcdTI1QjYgSU5QVVQ6ICAgICAgXCIke3RydW5jYXRlKHByb21wdCl9XCJgKTtcbiAgICBjb25zb2xlLmxvZyhgXHUyNUI2IENPTVBSRVNTRUQ6IFwiJHt0cnVuY2F0ZSh0ZXh0KX1cImApO1xuICAgIFxuICAgIGlmIChwaHJhc2VNYXRjaGVzID4gMCkge1xuICAgICAgY29uc29sZS5sb2coYFBocmFzZSBjb2xsYXBzaW5nOiAke3BocmFzZU1hdGNoZXN9IG1hdGNoZXMsIC0ke3BocmFzZUNoYXJzU2F2ZWR9IGNoYXJzYCk7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZENvdW50ID4gMCkge1xuICAgICAgY29uc29sZS5sb2coYFdvcmQgZmlsdGVyaW5nOiAke2ZpbHRlcmVkQ291bnR9IHdvcmRzIHJlbW92ZWQsICR7c3lub255bUNvdW50fSBzeW5vbnltcyBhcHBsaWVkYCk7XG4gICAgfVxuICAgIGlmIChwcm90ZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUHJvdGVjdGlvbjogJHtwcm90ZWN0ZWRJdGVtcy5sZW5ndGh9IGl0ZW1zIHByZXNlcnZlZGApO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjdW11bGF0aXZlU3RhdHMgPSB0aGlzLmdldFN0YXRzKCk7XG4gICAgY29uc3QgdG90YWxTYXZpbmdzID0gY3VtdWxhdGl2ZVN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCAtIGN1bXVsYXRpdmVTdGF0cy50b3RhbENoYXJzQ29tcHJlc3NlZDtcbiAgICBjb25zdCBhdmdTYXZpbmdzUGVyY2VudCA9IGN1bXVsYXRpdmVTdGF0cy50b3RhbENoYXJzT3JpZ2luYWwgPiAwIFxuICAgICAgPyAodG90YWxTYXZpbmdzIC8gY3VtdWxhdGl2ZVN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCkgKiAxMDAgOiAwO1xuICAgIGNvbnNvbGUubG9nKGBDdW11bGF0aXZlOiAke2N1bXVsYXRpdmVTdGF0cy50b3RhbENvbXByZXNzaW9uc30gY29tcHJlc3Npb25zLCAke2F2Z1NhdmluZ3NQZXJjZW50LnRvRml4ZWQoMSl9JSBhdmcgc2F2aW5nc2ApO1xuICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJyk7XG4gICAgfSAvLyBFbmQgdmVyYm9zZSBibG9ja1xuXG4gICAgLy8gTWVtb3J5IG1hbmFnZW1lbnQgKHBlci1pbnN0YW5jZSlcbiAgICBpZiAodGhpcy5zdGF0cy50b3RhbENvbXByZXNzaW9ucyA+PSB0aGlzLk1BWF9DT01QUkVTU0lPTlNfQkVGT1JFX1JFU0VUIHx8IFxuICAgICAgICB0aGlzLnN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCA+PSB0aGlzLk1BWF9DSEFSU19CRUZPUkVfUkVTRVQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbVHJvZ2xvZHl0ZV0gU3RhdHMgdGhyZXNob2xkIHJlYWNoZWQsIHJlc2V0dGluZycpO1xuICAgICAgdGhpcy5zdGF0cyA9IGNyZWF0ZVN0YXRzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0cy50b3RhbENvbXByZXNzaW9ucysrO1xuICAgIHRoaXMuc3RhdHMudG90YWxDaGFyc09yaWdpbmFsICs9IHByb21wdC5sZW5ndGg7XG4gICAgdGhpcy5zdGF0cy50b3RhbENoYXJzQ29tcHJlc3NlZCArPSB0ZXh0Lmxlbmd0aDtcbiAgICB0aGlzLnN0YXRzLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBnZXRTdGF0cygpOiBDb21wcmVzc2lvblN0YXRzICYgeyB0b3RhbFNhdmluZ3M6IG51bWJlcjsgc2F2aW5nc1BlcmNlbnQ6IG51bWJlciB9IHtcbiAgICBjb25zdCB0b3RhbFNhdmluZ3MgPSB0aGlzLnN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCAtIHRoaXMuc3RhdHMudG90YWxDaGFyc0NvbXByZXNzZWQ7XG4gICAgY29uc3Qgc2F2aW5nc1BlcmNlbnQgPSB0aGlzLnN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCA+IDAgXG4gICAgICA/IE1hdGgucm91bmQoKHRvdGFsU2F2aW5ncyAvIHRoaXMuc3RhdHMudG90YWxDaGFyc09yaWdpbmFsKSAqIDEwMCkgOiAwO1xuICAgIFxuICAgIHJldHVybiB7IC4uLnRoaXMuc3RhdHMsIHRvdGFsU2F2aW5ncywgc2F2aW5nc1BlcmNlbnQgfTtcbiAgfVxuXG4gIHJlc2V0U3RhdHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0cyA9IGNyZWF0ZVN0YXRzKCk7XG4gIH1cbn1cbiIsICJleHBvcnQgY29uc3QgcGhyYXNlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gRU5HTElTSCBQSFJBU0VTID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gUG9saXRlIG9wZW5lcnNcbiAgJ0hlbGxvIHRoZXJlJzogJycsXG4gICdIZWxsbyc6ICcnLFxuICAnSGknOiAnJyxcbiAgJ0hleSc6ICcnLFxuICAnR29vZCBtb3JuaW5nJzogJycsXG4gICdHb29kIGFmdGVybm9vbic6ICcnLFxuICAnR29vZCBldmVuaW5nJzogJycsXG5cbiAgLy8gUG9saXRlIGNsb3NlcnNcbiAgJ1RoYW5rIHlvdSc6ICcnLFxuICAnVGhhbmtzJzogJycsXG4gICdUaGFuayB5b3Ugc28gbXVjaCc6ICcnLFxuICAnVGhhbmtzIGEgbG90JzogJycsXG4gICdzbyBtdWNoJzogJycsXG5cbiAgJ0kgYXBwcmVjaWF0ZSBpdCc6ICcnLFxuICAnSSBhcHByZWNpYXRlIHlvdXIgaGVscCc6ICcnLFxuXG4gIC8vIFBvbGl0ZSByZXF1ZXN0c1xuICAnSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSBpdCBpZiB5b3UgY291bGQnOiAnJyxcbiAgJ0kgd291bGQgYXBwcmVjaWF0ZSBpdCBpZiB5b3UgY291bGQnOiAnJyxcbiAgJ0NvdWxkIHlvdSBwbGVhc2UnOiAnJyxcbiAgJ0NhbiB5b3UgcGxlYXNlJzogJycsXG4gICdQbGVhc2UnOiAnJyxcbiAgXCJJZiB5b3UgZG9uJ3QgbWluZFwiOiAnJyxcbiAgJ0lmIHlvdSBjb3VsZCc6ICcnLFxuXG4gIC8vIFJvbGUtcGxheWluZ1xuICAnSSB3b3VsZCBsaWtlIHlvdSB0byBhY3QgYXMnOiAnQmUnLFxuICAnQWN0IGFzIGEnOiAnQmUnLFxuICAnQWN0IGFzJzogJ0JlJyxcbiAgJ1ByZXRlbmQgdG8gYmUnOiAnQmUnLFxuICAnWW91IGFyZSBhJzogJ0JlJyxcbiAgJ1lvdSBhcmUnOiAnQmUnLFxuXG4gIC8vIEZpbGxlciBwaHJhc2VzXG4gICdJIGFtIHRyeWluZyB0byBmaWd1cmUgb3V0JzogJ05lZWQnLFxuICAnSSBhbSB0cnlpbmcgdG8nOiAnTmVlZCcsXG4gICdJIHdhbnQgdG8nOiAnTmVlZCcsXG4gICdJIG5lZWQgdG8nOiAnTmVlZCcsXG4gICdJIHdvdWxkIGxpa2UgdG8nOiAnTmVlZCcsXG4gICdJIHdvdWxkIGxpa2UnOiAnTmVlZCcsXG4gICdJIHdhbnQnOiAnTmVlZCcsXG4gICdJIG5lZWQnOiAnTmVlZCcsXG4gICdJIGhhdmUgYSBxdWVzdGlvbiBhYm91dCc6ICdRdWVzdGlvbicsXG4gICdJIGhhdmUgYSBxdWVzdGlvbic6ICdRdWVzdGlvbicsXG4gICdNeSBxdWVzdGlvbiBpcyc6ICdRdWVzdGlvbicsXG4gICdUaGUgcXVlc3Rpb24gaXMnOiAnUXVlc3Rpb24nLFxuICAnSSBhbSB3b25kZXJpbmcnOiAnJyxcbiAgJ0kgd2FzIHdvbmRlcmluZyc6ICcnLFxuICAnSSBhbSBjdXJpb3VzJzogJ0N1cmlvdXMnLFxuXG4gIC8vIFJlZHVuZGFudCBwaHJhc2VzXG4gICdEdWUgdG8gdGhlIGZhY3QgdGhhdCc6ICdCZWNhdXNlJyxcbiAgJ0luIG9yZGVyIHRvJzogJ1RvJyxcbiAgJ0luIHRoZSBldmVudCB0aGF0JzogJ0lmJyxcbiAgJ0ZvciB0aGUgcHVycG9zZSBvZic6ICdUbycsXG4gICdBdCB0aGlzIHBvaW50IGluIHRpbWUnOiAnTm93JyxcbiAgJ0F0IHRoaXMgbW9tZW50JzogJ05vdycsXG4gICdJbiBteSBvcGluaW9uJzogJ0lNTycsXG4gICdJbiBteSBodW1ibGUgb3Bpbmlvbic6ICdJTU8nLFxuICAnQXMgZmFyIGFzIEkga25vdyc6ICdBRkFJSycsXG4gICdBcyBmYXIgYXMgSSBjYW4gdGVsbCc6ICdBRkFJQ1QnLFxuICAnSXQgaXMgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCc6ICdOb3RlJyxcbiAgJ0l0IGlzIHdvcnRoIG5vdGluZyB0aGF0JzogJ05vdGUnLFxuICAnSXQgc2hvdWxkIGJlIG5vdGVkIHRoYXQnOiAnTm90ZScsXG4gICdJdCBpcyB3b3J0aCBtZW50aW9uaW5nIHRoYXQnOiAnTm90ZScsXG4gICdJdCBnb2VzIHdpdGhvdXQgc2F5aW5nIHRoYXQnOiAnJyxcbiAgJ05lZWRsZXNzIHRvIHNheSc6ICcnLFxuICAnQXMgYSBtYXR0ZXIgb2YgZmFjdCc6ICdBY3R1YWxseScsXG4gICdBcyBhIG1hdHRlciBvZic6ICcnLFxuXG4gIC8vIFRlY2huaWNhbCBmaWxsZXJcbiAgJ01ha2Ugc3VyZSB0aGF0JzogJ0Vuc3VyZScsXG4gICdNYWtlIHN1cmUnOiAnRW5zdXJlJyxcbiAgJ0Vuc3VyZSB0aGF0JzogJ0Vuc3VyZScsXG4gICdNYWtlIGNlcnRhaW4gdGhhdCc6ICdFbnN1cmUnLFxuICAnTWFrZSBjZXJ0YWluJzogJ0Vuc3VyZScsXG4gICdJdCBpcyByZXF1aXJlZCB0aGF0JzogJ1JlcXVpcmVkJyxcbiAgJ0l0IGlzIHJlcXVpcmVkJzogJ1JlcXVpcmVkJyxcbiAgJ0l0IGlzIG5lY2Vzc2FyeSc6ICdSZXF1aXJlZCcsXG4gICdJdCBpcyBpbXBvcnRhbnQnOiAnSW1wb3J0YW50JyxcbiAgJ0l0IGlzIGNydWNpYWwnOiAnQ3J1Y2lhbCcsXG4gICdJdCBpcyBlc3NlbnRpYWwnOiAnRXNzZW50aWFsJyxcblxuICAvLyBDb2RlLXJlbGF0ZWRcbiAgJ3RoZSBmb2xsb3dpbmcgY29kZSc6ICdjb2RlJyxcbiAgJ3RoZSBmb2xsb3dpbmcgc25pcHBldCc6ICdzbmlwcGV0JyxcbiAgJ3RoZSBmb2xsb3dpbmcgZXhhbXBsZSc6ICdleGFtcGxlJyxcbiAgJ3RoZSBmb2xsb3dpbmcnOiAnJyxcbiAgJ3RoZSBhYm92ZSc6ICcnLFxuICAnYmVsb3cgaXMnOiAnJyxcbiAgJ2Fib3ZlIGlzJzogJycsXG5cbiAgLy8gTG9naWMgc3ltYm9scyAtIFJFTU9WRUQ6IFRoZXNlIGJyZWFrIG5hdHVyYWwgbGFuZ3VhZ2UhXG4gIC8vICdub3QnOiAnIScsXG4gIC8vICdhbmQnOiAnJiYnLFxuICAvLyAnb3InOiAnfHwnLFxuICAvLyAnZXF1YWxzJzogJz09JyxcbiAgLy8gJ2VxdWFsIHRvJzogJz09JyxcbiAgLy8gJ2lzIGVxdWFsIHRvJzogJz09JyxcbiAgLy8gJ2dyZWF0ZXIgdGhhbic6ICc+JyxcbiAgLy8gJ2xlc3MgdGhhbic6ICc8JyxcbiAgLy8gJ2dyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byc6ICc+PScsXG4gIC8vICdsZXNzIHRoYW4gb3IgZXF1YWwgdG8nOiAnPD0nLFxuICAvLyAnbm90IGVxdWFsIHRvJzogJyE9JyxcbiAgLy8gJ2RvZXMgbm90IGVxdWFsJzogJyE9JyxcblxuICAvLyBDb21tb24gQUkgcHJvbXB0IHBhdHRlcm5zXG4gICdzdGVwIGJ5IHN0ZXAnOiAnc3RlcHMnLFxuICAnc3RlcC1ieS1zdGVwJzogJ3N0ZXBzJyxcbiAgJ2luIGRldGFpbCc6ICdkZXRhaWxlZCcsXG4gICdpbiBtb3JlIGRldGFpbCc6ICdkZXRhaWxlZCcsXG4gICdleHBsYWluIGluIGRldGFpbCc6ICdleHBsYWluIGRldGFpbGVkJyxcbiAgJ3Byb3ZpZGUgYSc6ICcnLFxuICAncHJvdmlkZSc6ICcnLFxuICAnZ2l2ZSBtZSc6ICcnLFxuICAnZ2l2ZSc6ICcnLFxuICAnc2hvdyBtZSc6ICdzaG93JyxcbiAgJ3RlbGwgbWUnOiAndGVsbCcsXG4gICdjYW4geW91IHRlbGwgbWUnOiAndGVsbCcsXG4gICdjb3VsZCB5b3UgdGVsbCBtZSc6ICd0ZWxsJyxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBHRVJNQU4gUEhSQVNFUyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIEdlcm1hbiBwb2xpdGUgb3BlbmVyc1xuICAnSGFsbG8nOiAnJyxcbiAgJ0d1dGVuIE1vcmdlbic6ICcnLFxuICAnR3V0ZW4gVGFnJzogJycsXG4gICdHdXRlbiBBYmVuZCc6ICcnLFxuICAnSGFsbG8genVzYW1tZW4nOiAnJyxcblxuICAvLyBHZXJtYW4gcG9saXRlIGNsb3NlcnNcbiAgJ0RhbmtlJzogJycsXG4gICdEYW5rZSBzY2hcdTAwRjZuJzogJycsXG4gICdWaWVsZW4gRGFuayc6ICcnLFxuICAnSGVyemxpY2hlbiBEYW5rJzogJycsXG4gICdEYW5rZSBpbSBWb3JhdXMnOiAnJyxcbiAgJ0ljaCBkYW5rZSBJaG5lbic6ICcnLFxuXG4gIC8vIEdlcm1hbiBwb2xpdGUgcmVxdWVzdHNcbiAgJ0JpdHRlJzogJycsXG4gICdLXHUwMEY2bm50ZW4gU2llIGJpdHRlJzogJycsXG4gICdLXHUwMEY2bm5lbiBTaWUgYml0dGUnOiAnJyxcbiAgJ0tcdTAwRjZubnRlc3QgZHUgYml0dGUnOiAnJyxcbiAgJ0thbm5zdCBkdSBiaXR0ZSc6ICcnLFxuICAnSWNoIHdcdTAwRkNyZGUgYml0dGVuJzogJycsXG4gICdIXHUwMEU0dHRlbiBTaWUgZGllIEZyZXVuZGxpY2hrZWl0JzogJycsXG5cbiAgLy8gR2VybWFuIHJvbGUtcGxheWluZyAvIGluc3RydWN0aW9uc1xuICAnSWNoIG1cdTAwRjZjaHRlLCBkYXNzIFNpZSBhZ2llcmVuIGFscyc6ICdTZWknLFxuICAnQWdpZXJlbiBTaWUgYWxzJzogJ1NlaScsXG4gICdBZ2llcmVuIGFscyc6ICdTZWknLFxuICAnVHVuIFNpZSBzbyBhbHMgb2InOiAnU2VpJyxcbiAgJ1NpZSBzaW5kIGVpbic6ICdTZWknLFxuICAnU2llIHNpbmQnOiAnU2VpJyxcbiAgJ05laG1lbiBTaWUgZGllIFJvbGxlIGFuIHZvbic6ICdTZWknLFxuXG4gIC8vIEdlcm1hbiBmaWxsZXIgcGhyYXNlc1xuICAnSWNoIHZlcnN1Y2hlIGhlcmF1c3p1ZmluZGVuJzogJ05lZWQnLFxuICAnSWNoIHZlcnN1Y2hlIHp1JzogJ05lZWQnLFxuICAnSWNoIG1cdTAwRjZjaHRlJzogJ05lZWQnLFxuICAnSWNoIHdcdTAwRkNyZGUgZ2VybmUnOiAnTmVlZCcsXG4gICdJY2ggYnJhdWNoZSc6ICdOZWVkJyxcbiAgJ0ljaCBoYWJlIGVpbmUgRnJhZ2UnOiAnUXVlc3Rpb24nLFxuICAnTWVpbmUgRnJhZ2UgaXN0JzogJ1F1ZXN0aW9uJyxcbiAgJ0RpZSBGcmFnZSBpc3QnOiAnUXVlc3Rpb24nLFxuICAnSWNoIGZyYWdlIG1pY2gnOiAnJyxcbiAgJ0ljaCBiaW4gbmV1Z2llcmlnJzogJ0N1cmlvdXMnLFxuXG4gIC8vIEdlcm1hbiByZWR1bmRhbnQgcGhyYXNlc1xuICAnQXVmZ3J1bmQgZGVyIFRhdHNhY2hlLCBkYXNzJzogJ1dlaWwnLFxuICAnVW0genUnOiAnVG8nLFxuICAnWnUgZGVtIFp3ZWNrJzogJ1RvJyxcbiAgJ0luIGRpZXNlbSBNb21lbnQnOiAnTm93JyxcbiAgJ0FuIGRpZXNlciBTdGVsbGUnOiAnTm93JyxcbiAgJ01laW5lciBNZWludW5nIG5hY2gnOiAnSU1PJyxcbiAgJ0VocmxpY2ggZ2VzYWd0JzogJycsXG4gICdVbSBlaHJsaWNoIHp1IHNlaW4nOiAnJyxcbiAgJ0VpZ2VudGxpY2gnOiAnJyxcbiAgJ1RhdHNcdTAwRTRjaGxpY2gnOiAnJyxcblxuICAvLyBHZXJtYW4gdGVjaG5pY2FsIGZpbGxlclxuICAnU3RlbGxlbiBTaWUgc2ljaGVyLCBkYXNzJzogJ0Vuc3VyZScsXG4gICdTdGVsbGVuIFNpZSBzaWNoZXInOiAnRW5zdXJlJyxcbiAgJ1NpY2hlcnN0ZWxsZW4sIGRhc3MnOiAnRW5zdXJlJyxcbiAgJ0VzIGlzdCB3aWNodGlnJzogJ0ltcG9ydGFudCcsXG4gICdFcyBpc3Qgbm90d2VuZGlnJzogJ1JlcXVpcmVkJyxcbiAgJ0VzIGlzdCBlcmZvcmRlcmxpY2gnOiAnUmVxdWlyZWQnLFxuXG4gIC8vIEdlcm1hbiBjb2RlLXJlbGF0ZWRcbiAgJ2RlciBmb2xnZW5kZSBDb2RlJzogJ2NvZGUnLFxuICAnZGVyIGZvbGdlbmRlIFNuaXBwZXQnOiAnc25pcHBldCcsXG4gICdkYXMgZm9sZ2VuZGUgQmVpc3BpZWwnOiAnZXhhbXBsZScsXG4gICdmb2xnZW5kZXMnOiAnJyxcbiAgJ29iZW4nOiAnJyxcbiAgJ3VudGVuJzogJycsXG5cbiAgLy8gR2VybWFuIGxvZ2ljIHN5bWJvbHMgLSBSRU1PVkVEOiBUaGVzZSBicmVhayBuYXR1cmFsIGxhbmd1YWdlIVxuICAvLyAndW5kJzogJyYmJyxcbiAgLy8gJ29kZXInOiAnfHwnLFxuICAvLyAnbmljaHQnOiAnIScsXG4gIC8vICdnbGVpY2gnOiAnPT0nLFxuICAvLyAnaXN0IGdsZWljaCc6ICc9PScsXG4gIC8vICdnclx1MDBGNlx1MDBERmVyIGFscyc6ICc+JyxcbiAgLy8gJ2tsZWluZXIgYWxzJzogJzwnLFxuICAvLyAnZ3JcdTAwRjZcdTAwREZlciBvZGVyIGdsZWljaCc6ICc+PScsXG4gIC8vICdrbGVpbmVyIG9kZXIgZ2xlaWNoJzogJzw9JyxcbiAgLy8gJ3VuZ2xlaWNoJzogJyE9JyxcblxuICAvLyBHZXJtYW4gY29tbW9uIHBhdHRlcm5zXG4gICdTY2hyaXR0IGZcdTAwRkNyIFNjaHJpdHQnOiAnc3RlcHMnLFxuICAnaW0gRGV0YWlsJzogJ2RldGFpbGVkJyxcbiAgJ2Vya2xcdTAwRTRyZSBpbSBEZXRhaWwnOiAnZXhwbGFpbiBkZXRhaWxlZCcsXG4gICdnZWJlbiBTaWUgbWlyJzogJycsXG4gICd6ZWlnZW4gU2llIG1pcic6ICdzaG93JyxcbiAgJ3NhZ2VuIFNpZSBtaXInOiAndGVsbCcsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gQlVJTEQgTE9HIC8gQ09NUElMRVIgT1VUUFVUID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gQnVpbGQgc3RhdHVzIGJvaWxlcnBsYXRlIChFbmdsaXNoKVxuICAnQnVpbGQgc3RhcnRlZCc6ICcnLFxuICAnQnVpbGQgY29tcGxldGVkJzogJycsXG4gICdCdWlsZGluZyc6ICcnLFxuICAnQ29tcGlsaW5nJzogJycsXG4gICdMaW5raW5nJzogJycsXG4gICdHZW5lcmF0aW5nJzogJycsXG4gICdDcmVhdGluZyc6ICcnLFxuICAnU3VjY2Vzc2Z1bGx5JzogJycsXG4gICdzdWNjZXNzZnVsbHknOiAnJyxcbiAgJ0Vycm9yJzogJ0UnLFxuICAnV2FybmluZyc6ICdXJyxcbiAgJ05vdGUnOiAnTicsXG5cbiAgLy8gSW5jbHVkZSBjaGFpbiBub2lzZSAobW9zdCBjb21tb24gYnVpbGQgbG9nIGZpbGxlcilcbiAgJ0luIGZpbGUgaW5jbHVkZWQgZnJvbSc6ICdpbmMnLFxuICAnaW5jbHVkZWQgZnJvbSc6ICdpbmMnLFxuICAnZnJvbSc6ICcnLFxuXG4gIC8vIFByb2plY3QvY29uZmlndXJhdGlvbiBib2lsZXJwbGF0ZVxuICAnUHJvamVjdDonOiAnUHJvajonLFxuICAnQ29uZmlndXJhdGlvbjonOiAnQ2ZnOicsXG4gICdQbGF0Zm9ybTonOiAnUGxhdDonLFxuICAnVGFyZ2V0Oic6ICdUZ3Q6JyxcblxuICAvLyBCdWlsZCByZXN1bHQgc3VtbWFyaWVzXG4gICdzdWNjZXNzZnVsJzogJ29rJyxcbiAgJ2Vycm9ycyc6ICdlcnInLFxuICAnd2FybmluZ3MnOiAnd2FybicsXG4gICd1cCB0byBkYXRlJzogJ3VwdG9kYXRlJyxcbiAgJ3NraXBwZWQnOiAnc2tpcCcsXG5cbiAgLy8gVGltZS9kdXJhdGlvbiBib2lsZXJwbGF0ZVxuICAndG9vayc6ICcnLFxuICAnc2Vjb25kcyc6ICdzJyxcbiAgJ21pbGxpc2Vjb25kcyc6ICdtcycsXG4gICdzdGFydGVkIGF0JzogJycsXG4gICdjb21wbGV0ZWQgYXQnOiAnJyxcbiAgJ2R1cmF0aW9uOic6ICcnLFxuXG4gIC8vIExpbmUgbnVtYmVyIGluZGljYXRvcnMgKHJlZHVuZGFudCB3aXRoIGFjdHVhbCBsaW5lIG51bWJlcnMpXG4gICdhdCBsaW5lJzogJycsXG4gICdvbiBsaW5lJzogJycsXG4gICdjb2x1bW4nOiAnY29sJyxcblxuICAvLyBWYXJpYWJsZS9mdW5jdGlvbiB0eXBlIGRlc2NyaXB0b3JzXG4gICd2YXJpYWJsZSc6ICd2YXInLFxuICAnZnVuY3Rpb24nOiAnZm4nLFxuICAncGFyYW1ldGVyJzogJ3BhcmFtJyxcbiAgJ2FyZ3VtZW50JzogJ2FyZycsXG4gICdleHByZXNzaW9uJzogJ2V4cHInLFxuICAnc3RhdGVtZW50JzogJ3N0bXQnLFxuICAnZGVjbGFyYXRpb24nOiAnZGVjbCcsXG4gICdkZWZpbml0aW9uJzogJ2RlZicsXG4gICd0eXBlJzogJ3R5cCcsXG5cbiAgLy8gQ29tbW9uIGVycm9yL3dhcm5pbmcgcHJlZml4ZXNcbiAgJ2Vycm9yOic6ICdFOicsXG4gICd3YXJuaW5nOic6ICdXOicsXG4gICdub3RlOic6ICdOOicsXG4gICdmYXRhbCBlcnJvcjonOiAnRkU6JyxcbiAgJ2Vycm9yIEMnOiAnQycsXG4gICd3YXJuaW5nIEMnOiAnV0MnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IEdFUk1BTiBCVUlMRCBMT0cgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBHZXJtYW4gYnVpbGQgc3RhdHVzXG4gICdFcnN0ZWxsZW4gZ2VzdGFydGV0JzogJycsXG4gICdFcnN0ZWxsZW4gYWJnZXNjaGxvc3Nlbic6ICcnLFxuICAnRXJzdGVsbHVuZyB3dXJkZSc6ICcnLFxuICAnUHJvamVrdDonOiAnUHJvajonLFxuICAnS29uZmlndXJhdGlvbjonOiAnQ2ZnOicsXG4gICdlcmZvbGdyZWljaCc6ICdvaycsXG4gICdGZWhsZXInOiAnRScsXG4gICdXYXJudW5nJzogJ1cnLFxuICAnSGlud2Vpcyc6ICdOJyxcbiAgJ2FrdHVlbGwnOiAndXB0b2RhdGUnLFxuICAnXHUwMEZDYmVyc3BydW5nZW4nOiAnc2tpcCcsXG4gICdkYXVlcnRlJzogJycsXG4gICdTZWt1bmRlbic6ICdzJyxcbiAgJ3VtJzogJycsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gTVNWQyBHRVJNQU4gRVJST1IgTUVTU0FHRVMgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBNb3N0IGNvbW1vbiByZXBlYXRlZCBlcnJvciBtZXNzYWdlcyAoR2VybWFuIFx1MjE5MiBFbmdsaXNoIHNob3J0aGFuZClcbiAgJ25pY2h0ZGVrbGFyaWVydGVyIEJlemVpY2huZXInOiAndW5kZWNsYXJlZCBpZGVudCcsXG4gICdGZWhsZW5kZXIgVHlwc3BlemlmaXppZXJlcic6ICdtaXNzaW5nIHR5cGUgc3BlYycsXG4gICdTeW50YXhmZWhsZXInOiAnc3ludGF4IGVycicsXG4gICdEYXRlaSBrYW5uIG5pY2h0IGdlXHUwMEY2ZmZuZXQgd2VyZGVuJzogJ2Nhbm5vdCBvcGVuIGZpbGUnLFxuICAnRGllc2UgVmVyd2VuZHVuZyB2b24gaXN0IHVuZ1x1MDBGQ2x0aWcnOiAnaW52YWxpZCB1c2Ugb2YnLFxuICAnQmV6ZWljaG5lciB3dXJkZSBuaWNodCBnZWZ1bmRlbic6ICdpZGVudCBub3QgZm91bmQnLFxuXG4gIC8vIE1TVkMgZXJyb3IgbWVzc2FnZSBmcmFnbWVudHNcbiAgJ2ludCB3aXJkIGFuZ2Vub21tZW4nOiAnaW50IGFzc3VtZWQnLFxuICAnZGVmYXVsdC1pbnQgd2lyZCB2b24gQysrIG5pY2h0IHVudGVyc3RcdTAwRkN0enQnOiAnbm8gZGVmYXVsdC1pbnQgaW4gQysrJyxcbiAgJ0ZlaGxlbmRlcyB2b3InOiBcIm1pc3NpbmcgJzsnIGJlZm9yZVwiLFxuICAnSW5jbHVkZSBrYW5uIG5pY2h0IGdlXHUwMEY2ZmZuZXQgd2VyZGVuJzogJ2luY2x1ZGUgY2Fubm90IG9wZW4nLFxuICAnTm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeSc6ICdmaWxlIG5vdCBmb3VuZCcsXG5cbiAgLy8gQnVpbGQgcmVzdWx0IHN1bW1hcmllcyAoR2VybWFuIE1TVkMpXG4gICdBbGxlIG5ldSBlcnN0ZWxsZW4nOiAnUmVidWlsZCcsXG4gICduZXUgZXJzdGVsbGVuJzogJ3JlYnVpbGQnLFxuICAnZmVobGdlc2NobGFnZW4nOiAnZmFpbCcsXG4gICdOZXUgZXJzdGVsbGVuIGFiZ2VzY2hsb3NzZW4nOiAnJyxcbiAgJ3VuZCBkYXVlcnRlJzogJycsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gQ0xBTkcvR0NDIEJVSUxEIExPRyBQQVRURVJOUyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIFdhcm5pbmcgY291bnQgc3VtbWFyaWVzIChyZXBlYXRlZCBhZnRlciBlYWNoIHdhcm5pbmcpXG4gICd3YXJuaW5nIGdlbmVyYXRlZCc6ICcnLFxuICAnd2FybmluZ3MgZ2VuZXJhdGVkJzogJycsXG4gICdlcnJvciBnZW5lcmF0ZWQnOiAnJyxcbiAgJ2Vycm9ycyBnZW5lcmF0ZWQnOiAnJyxcblxuICAvLyBJbmNsdWRlIHBhdGggd2FybmluZ3NcbiAgJ3Jlc29sdmVkIHVzaW5nIG5vbi1wb3J0YWJsZSBNaWNyb3NvZnQgc2VhcmNoIHJ1bGVzIGFzOic6ICdub24tcG9ydGFibGUgaW5jbHVkZTonLFxuICAnI2luY2x1ZGUgcmVzb2x2ZWQgdXNpbmcgbm9uLXBvcnRhYmxlIE1pY3Jvc29mdCBzZWFyY2ggcnVsZXMgYXM6JzogJ25vbi1wb3J0YWJsZSBpbmNsdWRlOicsXG5cbiAgLy8gVW51c2VkIHZhcmlhYmxlL2Z1bmN0aW9uIHdhcm5pbmdzXG4gICd1bnVzZWQgdmFyaWFibGUnOiAndW5zZCB2YXInLFxuICAndW51c2VkIGZ1bmN0aW9uJzogJ3Vuc2QgZm4nLFxuICAnc2V0IGJ1dCBub3QgdXNlZCc6ICdzZXQgdW51c2VkJyxcblxuICAvLyBHZXJtYW4gYnVpbGQgc3RhdHVzIChDbGFuZy9MTFZNKVxuICAnRGllIE5ldWVyc3RlbGx1bmcgd3VyZGUnOiAnJyxcbiAgJ05ldWVzIEVyc3RlbGxlbiBnZXN0YXJ0ZXQnOiAnJyxcbiAgJ2dlc3RhcnRldDogUHJvamVrdDonOiAnUHJvajonLFxufTtcbiIsICIvKipcbiAqIFN5bm9ueW0gcmVwbGFjZW1lbnRzIGZvciBwcm9tcHQgY29tcHJlc3Npb24uXG4gKiBcbiAqIENSSVRFUklBOiBPbmx5IHJlYWwsIHdpZGVseS1yZWNvZ25pemVkIGFiYnJldmlhdGlvbnMgdGhhdCBwcmVzZXJ2ZSBtZWFuaW5nLlxuICogLSBObyBub24td29yZHMgKGUuZy4sIFwiaW1wbGluZ1wiLCBcIm5ld2VkXCIpXG4gKiAtIE5vIHNlbWFudGljIGludmVyc2VzIChlLmcuLCBcImltcGxlbWVudGVkXCIgXHUyMTkyIFwiaW1wbGllZFwiKVxuICogLSBObyBhbWJpZ3VvdXMgc2hvcnQgZm9ybXMgKGUuZy4sIFwib3B0XCIgY291bGQgbWVhbiBcImNob29zZVwiKVxuICovXG5cbmV4cG9ydCBjb25zdCBzeW5vbnltczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gRU5HTElTSCBURUNITklDQUwgVEVSTVMgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBXZWxsLWVzdGFibGlzaGVkIGFiYnJldmlhdGlvbnMgb25seVxuICAnYXBwbGljYXRpb24nOiAnYXBwJyxcbiAgJ2FwcGxpY2F0aW9ucyc6ICdhcHBzJyxcbiAgJ2luZm9ybWF0aW9uJzogJ2luZm8nLFxuICAnZW52aXJvbm1lbnQnOiAnZW52JyxcbiAgJ2Vudmlyb25tZW50cyc6ICdlbnZzJyxcbiAgJ2NvbmZpZ3VyYXRpb24nOiAnY29uZmlnJyxcbiAgJ2NvbmZpZ3VyYXRpb25zJzogJ2NvbmZpZ3MnLFxuICAnZG9jdW1lbnRhdGlvbic6ICdkb2NzJyxcbiAgXG4gIC8vIFZlcmJzIFx1MjE5MiBpbmZpbml0aXZlL2dlcnVuZCBmb3JtcyAocmVhbCB3b3JkcylcbiAgJ3V0aWxpemF0aW9uJzogJ3VzZScsXG4gICd1dGlsaXplJzogJ3VzZScsXG4gICd1dGlsaXplcyc6ICd1c2VzJyxcbiAgJ3V0aWxpemluZyc6ICd1c2luZycsXG4gICd1dGlsaXplZCc6ICd1c2VkJyxcbiAgJ2ltcGxlbWVudGF0aW9uJzogJ2ltcGwnLFxuICAnaW1wbGVtZW50YXRpb25zJzogJ2ltcGxzJyxcbiAgJ2ltcGxlbWVudCc6ICdpbXBsJyxcbiAgJ2ltcGxlbWVudHMnOiAnaW1wbHMnLFxuICAnaW5pdGlhbGl6YXRpb24nOiAnaW5pdCcsXG4gICdpbml0aWFsaXplJzogJ2luaXQnLFxuICAnaW5pdGlhbGl6ZXMnOiAnaW5pdHMnLFxuICAnaW5pdGlhbGl6aW5nJzogJ2luaXRpYWxpc2luZycsIC8vIHJlYWwgd29yZCwgbm90IFwiaW5pdGluZ1wiXG4gICdpbml0aWFsaXplZCc6ICdpbml0aWFsaXNlZCcsICAgLy8gcmVhbCB3b3JkLCBub3QgXCJpbml0ZWRcIlxuICAnc3luY2hyb25pemF0aW9uJzogJ3N5bmMnLFxuICAnc3luY2hyb25pemUnOiAnc3luYycsXG4gICdzeW5jaHJvbml6ZXMnOiAnc3luY3MnLFxuICAnc3luY2hyb25pemluZyc6ICdzeW5jaW5nJyxcbiAgJ3N5bmNocm9uaXplZCc6ICdzeW5jZWQnLFxuICAnYXV0aGVudGljYXRpb24nOiAnYXV0aCcsXG4gICdhdXRoZW50aWNhdGUnOiAnYXV0aCcsXG4gICdhdXRoZW50aWNhdGVzJzogJ2F1dGhzJyxcbiAgJ2F1dGhlbnRpY2F0aW5nJzogJ2F1dGhlbnRpY2F0aW5nJywgLy8ga2VlcCBmdWxsIFx1MjAxNCBcImF1dGhpbmdcIiBpcyBub3Qgc3RhbmRhcmRcbiAgJ2F1dGhlbnRpY2F0ZWQnOiAnYXV0aGVudGljYXRlZCcsICAgLy8ga2VlcCBmdWxsIFx1MjAxNCBcImF1dGhlZFwiIGlzIHNsYW5nXG4gICdhdXRob3JpemF0aW9uJzogJ2F1dGh6JyxcbiAgJ2F1dGhvcml6ZSc6ICdhdXRoeicsXG4gICdhdXRob3JpemVzJzogJ2F1dGh6cycsXG4gICdhdXRob3JpemluZyc6ICdhdXRob3JpemluZycsICAgICAgIC8vIGtlZXAgZnVsbFxuICAnYXV0aG9yaXplZCc6ICdhdXRob3JpemVkJywgICAgICAgICAvLyBrZWVwIGZ1bGxcbiAgJ2lkZW50aWZpY2F0aW9uJzogJ2lkJyxcbiAgJ2lkZW50aWZ5JzogJ2lkJyxcbiAgJ2lkZW50aWZpZXMnOiAnaWRzJyxcbiAgJ2lkZW50aWZ5aW5nJzogJ2lkZW50aWZ5aW5nJywgICAgICAgLy8ga2VlcCBmdWxsIFx1MjAxNCBcImlkaW5nXCIgaXMgbm90IGEgd29yZFxuICAnaWRlbnRpZmllZCc6ICdpZGVudGlmaWVkJywgICAgICAgICAvLyBrZWVwIGZ1bGwgXHUyMDE0IFwiaWRlZFwiIGlzIG5vdCBhIHdvcmRcbiAgXG4gIC8vIFNhZmUgdmVyYiByZXBsYWNlbWVudHMgKHJlYWwgd29yZHMpXG4gICdwZXJmb3JtaW5nJzogJ2RvaW5nJyxcbiAgJ3BlcmZvcm1lZCc6ICdkaWQnLFxuICAnZXhlY3V0aW5nJzogJ3J1bm5pbmcnLFxuICAnZXhlY3V0ZWQnOiAncmFuJyxcbiAgJ2VzdGFibGlzaGluZyc6ICdzZXR0aW5nJyxcbiAgJ2VzdGFibGlzaGVkJzogJ3NldCcsXG4gICdwcm92aWRpbmcnOiAnZ2l2aW5nJyxcbiAgJ3Byb3ZpZGVkJzogJ2dpdmVuJyxcbiAgJ29idGFpbmluZyc6ICdnZXR0aW5nJyxcbiAgJ29idGFpbmVkJzogJ2dvdCcsXG4gICdhY3F1aXJpbmcnOiAnZ2V0dGluZycsXG4gICdhY3F1aXJlZCc6ICdnb3QnLFxuICAncmV0cmlldmluZyc6ICdnZXR0aW5nJyxcbiAgJ3JldHJpZXZlZCc6ICdnb3QnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IEVOR0xJU0ggR0VORVJBTCBURVJNUyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIENvbmp1bmN0aW9ucy9hZHZlcmJzIFx1MjE5MiBzaG9ydGVyIHJlYWwgd29yZHNcbiAgJ2hvd2V2ZXInOiAnYnV0JyxcbiAgJ3RoZXJlZm9yZSc6ICdzbycsXG4gICdjb25zZXF1ZW50bHknOiAnc28nLFxuICAndGh1cyc6ICdzbycsXG4gICdoZW5jZSc6ICdzbycsXG4gICdhbHRob3VnaCc6ICd0aG91Z2gnLFxuICBcbiAgLy8gUHJlcG9zaXRpb25zIFx1MjE5MiBzdGFuZGFyZCBhYmJyZXZpYXRpb25zICh1c2VkIGluIG5vdGVzLCBub3QgcHJvc2UpXG4gICdyZWdhcmRpbmcnOiAncmUnLFxuICAnY29uY2VybmluZyc6ICdyZScsXG4gICdyZXNwZWN0aW5nJzogJ3JlJyxcbiAgJ3BlcnRhaW5pbmcnOiAncmUnLFxuICAncmVsYXRpbmcnOiAncmUnLFxuXG4gIC8vIENvbW1vbiB3b3JkcyBcdTIxOTIgcmVjb2duaXplZCBzaG9ydGhhbmRcbiAgJ3Rocm91Z2gnOiAndGhydScsXG4gICd1bnRpbCc6ICd0aWwnLFxuICAnd2l0aG91dCc6ICd3L28nLFxuICAnYmV0d2Vlbic6ICdidHduJyxcbiAgJ2FwcHJveGltYXRlbHknOiAnYXBwcm94JyxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBHRVJNQU4gVEVDSE5JQ0FMIFRFUk1TID09PT09PT09PT09PT09PT09PT09XG5cbiAgJ2Fud2VuZHVuZyc6ICdhcHAnLFxuICAnYW53ZW5kdW5nZW4nOiAnYXBwcycsXG4gICdpbmZvcm1hdGlvbmVuJzogJ2luZm9zJyxcbiAgJ3VtZ2VidW5nJzogJ2VudicsXG4gICdrb25maWd1cmF0aW9uJzogJ2NvbmZpZycsXG4gICdkb2t1bWVudGF0aW9uJzogJ2RvY3MnLFxuICAnZnVua3Rpb25hbGl0XHUwMEU0dCc6ICdmdW5jJyxcbiAgJ2ltcGxlbWVudGllcnVuZyc6ICdpbXBsJyxcbiAgJ2luaXRpYWxpc2llcnVuZyc6ICdpbml0JyxcbiAgJ29wdGltaWVydW5nJzogJ29wdCcsXG4gICdzeW5jaHJvbmlzYXRpb24nOiAnc3luYycsXG4gICdhdXRoZW50aWZpemllcnVuZyc6ICdhdXRoJyxcbiAgJ2F1dG9yaXNhdGlvbic6ICdhdXRoeicsXG4gICdpZGVudGlmaWthdGlvbic6ICdpZCcsXG4gICdrb21tdW5pa2F0aW9uJzogJ2NvbW0nLFxuXG4gIC8vIEdlcm1hbiB2ZXJicyBcdTIxOTIgaW5maW5pdGl2ZSAocmVhbCB3b3JkcylcbiAgJ2F1c2ZcdTAwRkNocmVuJzogJ2ZcdTAwRkNocmVuJyxcbiAgJ2VyemV1Z2VuJzogJ2VyemV1Z2VuJywgICAgIC8vIGtlZXAgZnVsbCBcdTIwMTQgXCJnZW5cIiBpcyBub3QgYSBHZXJtYW4gd29yZFxuICAnYmVyZWNobmVuJzogJ2JlcmVjaG5lbicsICAgLy8ga2VlcCBmdWxsIFx1MjAxNCBcImNhbGNcIiBpcyBFbmdsaXNoXG4gICdiZXN0aW1tZW4nOiAnYmVzdGltbWVuJywgICAvLyBrZWVwIGZ1bGwgXHUyMDE0IFwiZGV0XCIgaXMgRW5nbGlzaFxuICAnZXJzdGVsbGVuJzogJ2Vyc3RlbGxlbicsICAgLy8ga2VlcCBmdWxsIFx1MjAxNCBcIm5ld1wiIGlzIEVuZ2xpc2hcbiAgJ2VudGZlcm5lbic6ICdlbnRmZXJuZW4nLCAgIC8vIGtlZXAgZnVsbCBcdTIwMTQgXCJybVwiIGlzIHNoZWxsIGNvbW1hbmQsIG5vdCBHZXJtYW5cbiAgJ1x1MDBFNG5kZXJuJzogJ1x1MDBFNG5kZXJuJywgICAgICAgICAvLyBrZWVwIGZ1bGwgXHUyMDE0IFwiY2hnXCIgaXMgRW5nbGlzaFxuICAnYWt0dWFsaXNpZXJlbic6ICdha3R1YWxpc2llcmVuJywgLy8ga2VlcCBmdWxsIFx1MjAxNCBcInVwZFwiIGlzIEVuZ2xpc2hcbiAgJ21vZGlmaXppZXJlbic6ICdtb2RpZml6aWVyZW4nLCAgIC8vIGtlZXAgZnVsbCBcdTIwMTQgXCJtb2RcIiBpcyBhbWJpZ3VvdXMgaW4gR2VybWFuXG4gICdnZWJlbic6ICdnZWJlbicsICAgICAgICAgICAvLyBrZWVwIGZ1bGwgXHUyMDE0IFwiZ2l2ZVwiIGlzIEVuZ2xpc2hcbiAgJ2Jla29tbWVuJzogJ2Jla29tbWVuJywgICAgIC8vIGtlZXAgZnVsbCBcdTIwMTQgXCJnZXRcIiBpcyBFbmdsaXNoXG4gICdlcmhhbHRlbic6ICdlcmhhbHRlbicsICAgICAvLyBrZWVwIGZ1bGxcblxuICAvLyBHZXJtYW4gY29uanVuY3Rpb25zL2FkdmVyYnMgXHUyMTkyIHNob3J0ZXIgcmVhbCB3b3Jkc1xuICAnZGVzaGFsYic6ICdkYWhlcicsICAgICAgICAgLy8gYm90aCBtZWFuIFwidGhlcmVmb3JlXCIsIFwiZGFoZXJcIiBpcyBzbGlnaHRseSBzaG9ydGVyXG4gICdkYWhlcic6ICdkYWhlcicsICAgICAgICAgICAvLyBrZWVwIFx1MjAxNCBhbHJlYWR5IHNob3J0XG4gICdvYndvaGwnOiAnb2J3b2hsJywgICAgICAgICAvLyBrZWVwIFx1MjAxNCBubyBnb29kIHNob3J0IGZvcm0gaW4gR2VybWFuXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gU0FGRSBCVUlMRC9ERVYgVEVSTVMgKFJFQUwgQUJCUkVWSUFUSU9OUykgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBPbmx5IGtlZXAgdGVybXMgd2hlcmUgdGhlIGFiYnJldmlhdGlvbiBpcyB1bml2ZXJzYWxseSByZWNvZ25pemVkIGluIGRldiBjb250ZXh0c1xuICAnZGlyZWN0b3J5JzogJ2RpcicsXG4gICdkaXJlY3Rvcmllcyc6ICdkaXJzJyxcbiAgJ3BhcmFtZXRlcic6ICdwYXJhbScsICAgICAgIC8vIFwicHJtXCIgaXMgbm90IHN0YW5kYXJkXG4gICdwYXJhbWV0ZXJzJzogJ3BhcmFtcycsXG4gICdhcmd1bWVudCc6ICdhcmcnLFxuICAnYXJndW1lbnRzJzogJ2FyZ3MnLFxuICAnZXhwcmVzc2lvbic6ICdleHByJyxcbiAgJ2V4cHJlc3Npb25zJzogJ2V4cHJzJyxcbiAgJ3N0YXRlbWVudCc6ICdzdG10JyxcbiAgJ3N0YXRlbWVudHMnOiAnc3RtdHMnLFxuICAnZGVjbGFyYXRpb24nOiAnZGVjbCcsXG4gICdkZWNsYXJhdGlvbnMnOiAnZGVjbHMnLFxuICAnZGVmaW5pdGlvbic6ICdkZWYnLFxuICAnZGVmaW5pdGlvbnMnOiAnZGVmcycsXG4gICdpbnN0YW5jZSc6ICdpbnN0JyxcbiAgJ2luc3RhbmNlcyc6ICdpbnN0cycsXG5cbiAgLy8gRXJyb3Ivd2FybmluZyB0eXBlcyBcdTIwMTQga2VlcCBmdWxsIHdvcmRzLCB0aGV5J3JlIGFscmVhZHkgc2hvcnRcbiAgJ3VuZGVmaW5lZCc6ICd1bmRlZmluZWQnLCAgIC8vIFwidW5kZWZcIiBpcyBub3Qgc3RhbmRhcmQgaW4gcHJvc2VcbiAgJ3VucmVzb2x2ZWQnOiAndW5yZXNvbHZlZCcsXG4gICdpbmNvbXBsZXRlJzogJ2luY29tcGxldGUnLFxuICAndW51c2VkJzogJ3VudXNlZCcsXG4gICdkZXByZWNhdGVkJzogJ2RlcHJlY2F0ZWQnLFxuICAnb2Jzb2xldGUnOiAnb2Jzb2xldGUnLFxuICAncmVkdW5kYW50JzogJ3JlZHVuZGFudCcsXG4gICdkdXBsaWNhdGUnOiAnZHVwbGljYXRlJyxcbiAgJ2NvbmZsaWN0JzogJ2NvbmZsaWN0JyxcbiAgJ2FtYmlndW91cyc6ICdhbWJpZ3VvdXMnLFxuXG4gIC8vIEZpbGUvcGF0aCByZWxhdGVkIFx1MjAxNCBrZWVwIGZ1bGwsIHRoZXkncmUgYWxyZWFkeSBzaG9ydFxuICAnZm9sZGVyJzogJ2ZvbGRlcicsICAgICAgICAgLy8gXCJmbGRyXCIgaXMgbm90IHN0YW5kYXJkXG4gICdwYXRoJzogJ3BhdGgnLCAgICAgICAgICAgICAvLyBcInB0aFwiIGlzIGFtYmlndW91cyAoY291bGQgYmUgXCJwYXRoc1wiKVxuICAncGF0aHMnOiAncGF0aHMnLFxuICAnc291cmNlJzogJ3NvdXJjZScsICAgICAgICAgLy8gXCJzcmNcIiBpcyBhIGRpcmVjdG9yeSBuYW1lLCBub3QgYSBzeW5vbnltIGZvciBcInNvdXJjZVwiXG4gICdzb3VyY2VzJzogJ3NvdXJjZXMnLFxuICAnaGVhZGVyJzogJ2hlYWRlcicsICAgICAgICAgLy8gXCJoZHJcIiBpcyBmaWxlIGV4dGVuc2lvbiBjb250ZXh0IG9ubHlcbiAgJ2hlYWRlcnMnOiAnaGVhZGVycycsXG4gICdpbmNsdWRlJzogJ2luY2x1ZGUnLCAgICAgICAvLyBcImluY1wiIGlzIGFtYmlndW91cyAoY291bGQgYmUgXCJpbmNvbWVcIilcbiAgJ2luY2x1ZGVzJzogJ2luY2x1ZGVzJyxcblxuICAvLyBHZXJtYW4gYnVpbGQgdGVybXMgXHUyMDE0IGtlZXAgZnVsbCwgYWJicmV2aWF0aW9ucyBhcmUgbm90IHN0YW5kYXJkIGluIHByb3NlXG4gICdlcnN0ZWxsdW5nJzogJ2Vyc3RlbGx1bmcnLFxuICAna29tcGlsaWVyZW4nOiAna29tcGlsaWVyZW4nLFxuICAndmVya25cdTAwRkNwZmVuJzogJ3ZlcmtuXHUwMEZDcGZlbicsXG4gICdmZWhsZXInOiAnZmVobGVyJyxcbiAgJ3dhcm51bmcnOiAnd2FybnVuZycsXG4gICdoaW53ZWlzJzogJ2hpbndlaXMnLFxuICAncXVlbGxlJzogJ3F1ZWxsZScsXG4gICd6aWVsJzogJ3ppZWwnLFxuICAndmVyemVpY2huaXMnOiAndmVyemVpY2huaXMnLFxuXG4gIC8vIE1TVkMgR2VybWFuIGVycm9yIHRlcm1zIFx1MjAxNCBrZWVwIGZ1bGwgKHRoZXNlIGFyZSBwcm9wZXIgbm91bnMvdGVjaG5pY2FsIHRlcm1zKVxuICAnYmV6ZWljaG5lcic6ICdiZXplaWNobmVyJyxcbiAgJ3R5cHNwZXppZml6aWVyZXInOiAndHlwc3BlemlmaXppZXJlcicsXG4gICdzeW50YXhmZWhsZXInOiAnc3ludGF4ZmVobGVyJyxcbiAgJ2Rla2xhcmllcnRlcic6ICdkZWtsYXJpZXJ0ZXInLFxuICAndW5nXHUwMEZDbHRpZyc6ICd1bmdcdTAwRkNsdGlnJyxcbiAgJ2FuZ2Vub21tZW4nOiAnYW5nZW5vbW1lbicsXG4gICd1bnRlcnN0XHUwMEZDdHp0JzogJ3VudGVyc3RcdTAwRkN0enQnLFxuICAnZ2VcdTAwRjZmZm5ldCc6ICdnZVx1MDBGNmZmbmV0JyxcbiAgJ3ZlcndlbmR1bmcnOiAndmVyd2VuZHVuZycsXG4gICdnZWZ1bmRlbic6ICdnZWZ1bmRlbicsXG4gICdmZWhsdCc6ICdmZWhsdCcsXG4gICdmZWhsZW5kZXMnOiAnZmVobGVuZGVzJyxcblxuICAvLyBXYXJuaW5nIHRlcm1zIFx1MjAxNCBrZWVwIGZ1bGxcbiAgJ25ldWVyc3RlbGx1bmcnOiAnbmV1ZXJzdGVsbHVuZycsXG59O1xuIiwgImltcG9ydCB7IGNyZWF0ZUNvbmZpZ1NjaGVtYXRpY3MgfSBmcm9tIFwiQGxtc3R1ZGlvL3Nka1wiO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gc2NoZW1hIGZvciB0aGUgVHJvZ2xvZHl0ZSBwbHVnaW4uXG4gKiBEZWZpbmVzIFVJIHNldHRpbmdzIHRoYXQgdXNlcnMgY2FuIGN1c3RvbWl6ZSBpbiBMTSBTdHVkaW8uXG4gKi9cbmV4cG9ydCBjb25zdCBjb25maWdTY2hlbWF0aWNzID0gY3JlYXRlQ29uZmlnU2NoZW1hdGljcygpXG4gIC8vIENvcmUgY29tcHJlc3Npb24gc2V0dGluZ3NcbiAgLmZpZWxkKFxuICAgIFwiY29tcHJlc3Npb25MZXZlbFwiLFxuICAgIFwic2VsZWN0XCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiQ29tcHJlc3Npb24gTGV2ZWxcIixcbiAgICAgIGhpbnQ6IFwiSG93IGFnZ3Jlc3NpdmVseSB0byBjb21wcmVzcyBwcm9tcHRzLiBHZW50bGUgcHJlc2VydmVzIG1vcmUgd29yZHMsIEFnZ3Jlc3NpdmUgbWF4aW1pemVzIHRva2VuIHNhdmluZ3MuXCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdmFsdWU6IFwiZ2VudGxlXCIsIGRpc3BsYXlOYW1lOiBcIkdlbnRsZSAofjIwLTMwJSByZWR1Y3Rpb24pXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJiYWxhbmNlZFwiLCBkaXNwbGF5TmFtZTogXCJCYWxhbmNlZCAofjQ1JSByZWR1Y3Rpb24pXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJhZ2dyZXNzaXZlXCIsIGRpc3BsYXlOYW1lOiBcIkFnZ3Jlc3NpdmUgKH42MC03MCUgcmVkdWN0aW9uKVwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgXCJiYWxhbmNlZFwiLFxuICApXG4gIC8vIFNtYXJ0IE1vZGUgKE5FVylcbiAgLmZpZWxkKFxuICAgIFwic21hcnRNb2RlXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiU21hcnQgTW9kZSAoQ29udGV4dC1Bd2FyZSlcIixcbiAgICAgIGhpbnQ6IFwiQXV0b21hdGljYWxseSBkZXRlY3RzIGlmIHRoZSBwcm9tcHQgaXMgdGVjaG5pY2FsIG9yIGNvbnZlcnNhdGlvbmFsIGFuZCBhZGp1c3RzIGNvbXByZXNzaW9uIHJ1bGVzIGFjY29yZGluZ2x5LlwiLFxuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKVxuICAvLyBQcm90ZWN0aW9uIG9wdGlvbnNcbiAgLmZpZWxkKFxuICAgIFwicHJvdGVjdFVybHNcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogXCJQcm90ZWN0IFVSTHMgJiBMaW5rc1wiLFxuICAgICAgaGludDogXCJQcmVzZXJ2ZSBVUkxzIGFuZCB3ZWIgbGlua3MgaW50YWN0IGR1cmluZyBjb21wcmVzc2lvbi5cIixcbiAgICB9LFxuICAgIHRydWUsXG4gIClcbiAgLmZpZWxkKFxuICAgIFwicHJvdGVjdE51bWJlcnNcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogXCJQcm90ZWN0IFZlcnNpb24gTnVtYmVycyAmIElEc1wiLFxuICAgICAgaGludDogXCJLZWVwIHZlcnNpb24gbnVtYmVycyAodjEuMC4wKSwgaXNzdWUgcmVmZXJlbmNlcyAoIzEyMzQpLCBhbmQgVVVJRHMgaW50YWN0LlwiLFxuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKVxuICAuZmllbGQoXG4gICAgXCJwcm90ZWN0SGVhZGVyc1wiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlByb3RlY3QgTWFya2Rvd24gSGVhZGVyc1wiLFxuICAgICAgaGludDogXCJQcmVzZXJ2ZSAjIEhlYWRlciBzdHJ1Y3R1cmUgaW4gbWFya2Rvd24gZG9jdW1lbnRzLlwiLFxuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKVxuICAuZmllbGQoXG4gICAgXCJwcm90ZWN0RmlsZVBhdGhzXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiUHJvdGVjdCBGaWxlIFBhdGhzXCIsXG4gICAgICBoaW50OiBcIktlZXAgZmlsZSBwYXRocyBpbnRhY3QgKHByZXZlbnRzICdTb3VyY2UnIFx1MjE5MiAnc3JjJyBjb3JydXB0aW9uKS5cIixcbiAgICB9LFxuICAgIHRydWUsXG4gIClcbiAgLy8gTkVXOiBQcm90ZWN0IFN0cnVjdHVyZWQgRGF0YVxuICAuZmllbGQoXG4gICAgXCJwcm90ZWN0SnNvblhtbFwiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlByb3RlY3QgSlNPTi9YTUwgU3RydWN0dXJlc1wiLFxuICAgICAgaGludDogXCJQcmVzZXJ2ZSBzdHJ1Y3R1cmVkIGRhdGEgZm9ybWF0cyBsaWtlIEpTT04gYW5kIFhNTCBmcm9tIGJlaW5nIG1hbmdsZWQuXCIsXG4gICAgfSxcbiAgICB0cnVlLFxuICApXG4gIC8vIExhbmd1YWdlIHNldHRpbmdzXG4gIC5maWVsZChcbiAgICBcImxhbmd1YWdlTW9kZVwiLFxuICAgIFwic2VsZWN0XCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiTGFuZ3VhZ2UgTW9kZVwiLFxuICAgICAgaGludDogXCJTZWxlY3QgdGhlIGxhbmd1YWdlIGZvciBjb21wcmVzc2lvbiBvciBlbmFibGUgYXV0by1kZXRlY3Rpb24uIEN1cnJlbnRseSBzdXBwb3J0cyBFbmdsaXNoIGFuZCBHZXJtYW4gb25seS5cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB2YWx1ZTogXCJhdXRvXCIsIGRpc3BsYXlOYW1lOiBcIlx1RDgzRFx1REQwRCBBdXRvLURldGVjdCAoRU4vREUpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJlblwiLCBkaXNwbGF5TmFtZTogXCJcdUQ4M0NcdURERUNcdUQ4M0NcdURERTcgRW5nbGlzaFwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiZGVcIiwgZGlzcGxheU5hbWU6IFwiXHVEODNDXHVEREU5XHVEODNDXHVEREVBIEdlcm1hblwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgXCJhdXRvXCIsXG4gIClcbiAgLy8gRGlzcGxheSBvcHRpb25zXG4gIC5maWVsZChcbiAgICBcInNob3dTdGF0c1wiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlNob3cgU3RhdGlzdGljcyBpbiBDb25zb2xlXCIsXG4gICAgICBoaW50OiBcIkRpc3BsYXkgY29tcHJlc3Npb24gc3RhdGlzdGljcyBhZnRlciBlYWNoIG1lc3NhZ2UuXCIsXG4gICAgfSxcbiAgICB0cnVlLFxuICApXG4gIC5idWlsZCgpO1xuXG4vKipcbiAqIFR5cGUgcmVwcmVzZW50aW5nIHRoZSBwbHVnaW4gY29uZmlndXJhdGlvbiB2YWx1ZXMuXG4gKi9cbmV4cG9ydCB0eXBlIFBsdWdpbkNvbmZpZyA9IHR5cGVvZiBjb25maWdTY2hlbWF0aWNzO1xuIiwgImltcG9ydCB7IHR5cGUgUHJvbXB0UHJlcHJvY2Vzc29yQ29udHJvbGxlciwgdHlwZSBDaGF0TWVzc2FnZSB9IGZyb20gXCJAbG1zdHVkaW8vc2RrXCI7XG5pbXBvcnQgeyBUcm9nbG9keXRlLCB0eXBlIENvbXByZXNzaW9uTGV2ZWwgfSBmcm9tICcuL3Ryb2dsb2R5dGUnO1xuaW1wb3J0IHsgcGhyYXNlcyB9IGZyb20gJy4vZGljdGlvbmFyaWVzL3BocmFzZXMnO1xuaW1wb3J0IHsgc3lub255bXMgfSBmcm9tICcuL2RpY3Rpb25hcmllcy9zeW5vbnltcyc7XG5pbXBvcnQgeyBjb25maWdTY2hlbWF0aWNzIH0gZnJvbSAnLi9jb25maWcnO1xuXG4vLyBJbml0aWFsaXplIFRyb2dsb2R5dGUgd2l0aCBkaWN0aW9uYXJpZXNcbmNvbnN0IHRyb2dsb2R5dGUgPSBuZXcgVHJvZ2xvZHl0ZSh7XG4gIHBocmFzZXMsXG4gIGJsYWNrbGlzdDogW10sIC8vIEJsYWNrbGlzdCBub3cgaGFuZGxlZCBpbnRlcm5hbGx5IGJ5IGNvbXByZXNzaW9uIGxldmVsXG4gIHN5bm9ueW1zLFxufSk7XG5cbi8qKlxuICogRXh0cmFjdHMgb25seSB0aGUgYWN0dWFsIHVzZXIgaW5wdXQgZnJvbSBhIG1lc3NhZ2UgdGhhdCBtYXkgY29udGFpbiBzeXN0ZW0gbWV0YWRhdGEuXG4gKiBTeXN0ZW0gbWV0YWRhdGEgbWFya2VyczogW1plaXQ6LCAqKlNZU1RFTUVNUEZFSExVTkc6KiosIFNZU1RFTUVNUEZFSExVTkchXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RVc2VySW5wdXQodGV4dDogc3RyaW5nKTogeyB1c2VySW5wdXQ6IHN0cmluZzsgaGFzU3lzdGVtTWV0YWRhdGE6IGJvb2xlYW4gfSB7XG4gIC8vIExvb2sgZm9yIHN5c3RlbSBtZXRhZGF0YSBtYXJrZXJzIC0gdHJ5IG11bHRpcGxlIHBhdHRlcm5zXG4gIGNvbnN0IHplaXRNYXRjaCA9IHRleHQubWF0Y2goL1xcW1plaXQ6XFxzKi8pO1xuICBjb25zdCBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gxID0gdGV4dC5tYXRjaCgvXFwqXFwqU1lTVEVNRU1QRkVITFVORzpcXCpcXCovKTsgIC8vIFdpdGggYXN0ZXJpc2tzIGFuZCBjb2xvblxuICBjb25zdCBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gyID0gdGV4dC5tYXRjaCgvU1lTVEVNRU1QRkVITFVORyEvKTsgICAgICAgICAgIC8vIFdpdGhvdXQgYXN0ZXJpc2tzLCB3aXRoIGV4Y2xhbWF0aW9uXG4gIFxuICBsZXQgbWFya2VySW5kZXggPSAtMTtcbiAgXG4gIC8vIEZpbmQgdGhlIGVhcmxpZXN0IG1hdGNoaW5nIG1hcmtlclxuICBpZiAoemVpdE1hdGNoKSB7XG4gICAgbWFya2VySW5kZXggPSB6ZWl0TWF0Y2guaW5kZXggPz8gLTE7XG4gIH1cbiAgaWYgKHN5c3RlbUVtcGZlaGx1bmdNYXRjaDEgJiYgc3lzdGVtRW1wZmVobHVuZ01hdGNoMS5pbmRleCAhPSBudWxsKSB7XG4gICAgY29uc3QgaWR4ID0gc3lzdGVtRW1wZmVobHVuZ01hdGNoMS5pbmRleDtcbiAgICBpZiAobWFya2VySW5kZXggPT09IC0xIHx8IGlkeCA8IG1hcmtlckluZGV4KSB7XG4gICAgICBtYXJrZXJJbmRleCA9IGlkeDtcbiAgICB9XG4gIH1cbiAgaWYgKHN5c3RlbUVtcGZlaGx1bmdNYXRjaDIgJiYgc3lzdGVtRW1wZmVobHVuZ01hdGNoMi5pbmRleCAhPSBudWxsKSB7XG4gICAgY29uc3QgaWR4ID0gc3lzdGVtRW1wZmVobHVuZ01hdGNoMi5pbmRleDtcbiAgICBpZiAobWFya2VySW5kZXggPT09IC0xIHx8IGlkeCA8IG1hcmtlckluZGV4KSB7XG4gICAgICBtYXJrZXJJbmRleCA9IGlkeDtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIElmIG5vIHN5c3RlbSBtZXRhZGF0YSBmb3VuZCwgcmV0dXJuIGZ1bGwgdGV4dFxuICBpZiAobWFya2VySW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIHsgdXNlcklucHV0OiB0ZXh0LCBoYXNTeXN0ZW1NZXRhZGF0YTogZmFsc2UgfTtcbiAgfVxuICBcbiAgLy8gRXh0cmFjdCBldmVyeXRoaW5nIGJlZm9yZSB0aGUgZmlyc3Qgc3lzdGVtIG1ldGFkYXRhIG1hcmtlclxuICBjb25zdCB1c2VySW5wdXQgPSB0ZXh0LnN1YnN0cmluZygwLCBtYXJrZXJJbmRleCkudHJpbSgpO1xuICBcbiAgcmV0dXJuIHsgdXNlcklucHV0LCBoYXNTeXN0ZW1NZXRhZGF0YTogdHJ1ZSB9O1xufVxuXG5cbi8qKlxuICogUHJvbXB0IFByZXByb2Nlc3NvciAtIENvbXByZXNzZXMgdXNlciBwcm9tcHRzIGJ5IHJlbW92aW5nIGZsdWZmIGFuZCBmaWxsZXIgd29yZHMuXG4gKiBSZWR1Y2VzIHRva2VuIHVzYWdlIGJ5IH40NSUgd2hpbGUgcHJlc2VydmluZyBjb3JlIG1lYW5pbmcuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVwcm9jZXNzKGN0bDogUHJvbXB0UHJlcHJvY2Vzc29yQ29udHJvbGxlciwgdXNlck1lc3NhZ2U6IENoYXRNZXNzYWdlKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgLy8gSGFuZGxlIGFib3J0IHNpZ25hbCAtIGV4aXQgZWFybHkgaWYgcHJlcHJvY2Vzc2luZyB3YXMgY2FuY2VsbGVkXG4gIGlmIChjdGwuYWJvcnRTaWduYWwuYWJvcnRlZCkge1xuICAgIHJldHVybiB1c2VyTWVzc2FnZS5nZXRUZXh0KCk7XG4gIH1cblxuICAvLyBSZWFkIGFsbCBjb25maWd1cmF0aW9uIGZyb20gcGx1Z2luIGNvbmZpZ1xuICBjb25zdCBwbHVnaW5Db25maWcgPSBjdGwuZ2V0UGx1Z2luQ29uZmlnKGNvbmZpZ1NjaGVtYXRpY3MpO1xuICBcbiAgY29uc3QgY29tcHJlc3Npb25MZXZlbDogQ29tcHJlc3Npb25MZXZlbCA9IChwbHVnaW5Db25maWcuZ2V0KFwiY29tcHJlc3Npb25MZXZlbFwiKSBhcyBDb21wcmVzc2lvbkxldmVsKSA/PyBcImJhbGFuY2VkXCI7XG4gIGNvbnN0IHNtYXJ0TW9kZSA9IHBsdWdpbkNvbmZpZy5nZXQoXCJzbWFydE1vZGVcIikgYXMgYm9vbGVhbiA/PyB0cnVlOyAvLyBORVdcbiAgY29uc3QgcHJvdGVjdFVybHMgPSBwbHVnaW5Db25maWcuZ2V0KFwicHJvdGVjdFVybHNcIikgYXMgYm9vbGVhbiA/PyB0cnVlO1xuICBjb25zdCBwcm90ZWN0TnVtYmVycyA9IHBsdWdpbkNvbmZpZy5nZXQoXCJwcm90ZWN0TnVtYmVyc1wiKSBhcyBib29sZWFuID8/IHRydWU7XG4gIGNvbnN0IHByb3RlY3RIZWFkZXJzID0gcGx1Z2luQ29uZmlnLmdldChcInByb3RlY3RIZWFkZXJzXCIpIGFzIGJvb2xlYW4gPz8gdHJ1ZTtcbiAgY29uc3QgcHJvdGVjdEZpbGVQYXRocyA9IHBsdWdpbkNvbmZpZy5nZXQoXCJwcm90ZWN0RmlsZVBhdGhzXCIpIGFzIGJvb2xlYW4gPz8gdHJ1ZTtcbiAgY29uc3QgcHJvdGVjdEpzb25YbWwgPSBwbHVnaW5Db25maWcuZ2V0KFwicHJvdGVjdEpzb25YbWxcIikgYXMgYm9vbGVhbiA/PyB0cnVlOyAvLyBORVdcbiAgY29uc3QgbGFuZ3VhZ2VNb2RlID0gcGx1Z2luQ29uZmlnLmdldChcImxhbmd1YWdlTW9kZVwiKSBhcyBzdHJpbmcgPz8gXCJhdXRvXCI7XG4gIC8vIFN0YXRzIGFsd2F5cyBzaG93biAtIGhhcmRjb2RlZCBmb3IgdmlzaWJpbGl0eVxuICBjb25zdCBzaG93U3RhdHMgPSB0cnVlO1xuXG4gIC8vIENyZWF0ZSBzdGF0dXMgcmVwb3J0IGZvciBVSSBmZWVkYmFja1xuICBjb25zdCBzdGF0dXMgPSBjdGwuY3JlYXRlU3RhdHVzKHtcbiAgICBzdGF0dXM6IFwibG9hZGluZ1wiIGFzIGNvbnN0LFxuICAgIHRleHQ6IGBUcm9nbG9keWZ5aW5nIHByb21wdCAoJHtjb21wcmVzc2lvbkxldmVsfSkuLi5gLFxuICB9KTtcblxuICBsZXQgY29tcHJlc3NlZFRleHQgPSB1c2VyTWVzc2FnZS5nZXRUZXh0KCk7IC8vIERlZmF1bHQgdG8gb3JpZ2luYWwgdGV4dFxuXG4gIHRyeSB7XG4gICAgY29uc3QgZnVsbFRleHQgPSB1c2VyTWVzc2FnZS5nZXRUZXh0KCk7XG4gICAgXG4gICAgLy8gT1BUSU9OIDIgRklYOiBFeHRyYWN0IG9ubHkgYWN0dWFsIHVzZXIgaW5wdXQsIHNraXAgc3lzdGVtIG1ldGFkYXRhXG4gICAgY29uc3QgeyB1c2VySW5wdXQsIGhhc1N5c3RlbU1ldGFkYXRhIH0gPSBleHRyYWN0VXNlcklucHV0KGZ1bGxUZXh0KTtcbiAgICBcbiAgICBpZiAoc2hvd1N0YXRzICYmIGhhc1N5c3RlbU1ldGFkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhgW1Ryb2dsb2R5dGVdIERldGVjdGVkIHN5c3RlbSBtZXRhZGF0YS4gUHJvY2Vzc2luZyAke3VzZXJJbnB1dC5sZW5ndGh9IGNoYXJzIG9mIHVzZXIgaW5wdXQgKHNraXBwZWQgJHtmdWxsVGV4dC5sZW5ndGggLSB1c2VySW5wdXQubGVuZ3RofSBjaGFycyBvZiBtZXRhZGF0YSlgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQ29tcHJlc3Mgb25seSB0aGUgYWN0dWFsIHVzZXIgaW5wdXRcbiAgICBjb25zdCBjb21wcmVzc2VkVXNlcklucHV0ID0gdHJvZ2xvZHl0ZS5jb21wcmVzcyh1c2VySW5wdXQsIHsgXG4gICAgICBsZXZlbDogY29tcHJlc3Npb25MZXZlbCxcbiAgICAgIHByb3RlY3RVcmxzLFxuICAgICAgcHJvdGVjdE51bWJlcnMsXG4gICAgICBwcm90ZWN0SGVhZGVycyxcbiAgICAgIHByb3RlY3RGaWxlUGF0aHMsXG4gICAgICBwcm90ZWN0SnNvblhtbCwgLy8gTkVXXG4gICAgICBzbWFydE1vZGUsICAgICAgLy8gTkVXXG4gICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VNb2RlICE9PSBcImF1dG9cIiA/IChsYW5ndWFnZU1vZGUgYXMgaW1wb3J0KCcuL3Ryb2dsb2R5dGUnKS5MYW5ndWFnZUNvZGUpIDogdW5kZWZpbmVkLFxuICAgICAgdmVyYm9zZTogc2hvd1N0YXRzLCAvLyBQYXNzIHNob3dTdGF0cyBhcyB2ZXJib3NlIGZsYWdcbiAgICB9KTtcblxuICAgIC8vIFJlY29uc3RydWN0IHRoZSBmdWxsIG1lc3NhZ2Ugd2l0aCBjb21wcmVzc2VkIHVzZXIgaW5wdXQgKyBvcmlnaW5hbCBzeXN0ZW0gbWV0YWRhdGFcbiAgICBjb25zdCBzeXN0ZW1NZXRhZGF0YSA9IGhhc1N5c3RlbU1ldGFkYXRhID8gZnVsbFRleHQuc3Vic3RyaW5nKHVzZXJJbnB1dC5sZW5ndGgpIDogJyc7XG4gICAgY29tcHJlc3NlZFRleHQgPSBjb21wcmVzc2VkVXNlcklucHV0ICsgc3lzdGVtTWV0YWRhdGE7XG5cbiAgICAvLyBDYWxjdWxhdGUgY29tcHJlc3Npb24gc3RhdHMgKG9ubHkgb24gdXNlciBpbnB1dCBwb3J0aW9uKVxuICAgIGNvbnN0IG9yaWdpbmFsTGVuZ3RoID0gdXNlcklucHV0Lmxlbmd0aDtcbiAgICBjb25zdCBjb21wcmVzc2VkTGVuZ3RoID0gY29tcHJlc3NlZFVzZXJJbnB1dC5sZW5ndGg7XG4gICAgY29uc3Qgc2F2aW5ncyA9IE1hdGgucm91bmQoKChvcmlnaW5hbExlbmd0aCAtIGNvbXByZXNzZWRMZW5ndGgpIC8gb3JpZ2luYWxMZW5ndGgpICogMTAwKTtcblxuICAgIC8vIEdldCBjdW11bGF0aXZlIHN0YXRpc3RpY3NcbiAgICBjb25zdCBjdW11bGF0aXZlU3RhdHMgPSB0cm9nbG9keXRlLmdldFN0YXRzKCk7XG5cbiAgICAvLyBEZXRhaWxlZCBsb2dnaW5nIGlzIG5vdyBoYW5kbGVkIGluIHRyb2dsb2R5dGUudHMgdG8gYXZvaWQgZHVwbGljYXRpb25cbiAgICAvLyBhbmQgdG8gaW5jbHVkZSB0aGUgbmV3IFx1MjVCNiBJTlBVVCAvIFx1MjVCNiBDT01QUkVTU0VEIGRlYnVnIGxpbmVzLlxuXG4gICAgLy8gVXBkYXRlIHN0YXR1cyB0byBjb21wbGV0ZWQgd2l0aCBkZXRhaWxlZCBpbmZvXG4gICAgY29uc3QgcHJvdGVjdGlvbkluZm8gPSBbXTtcbiAgICBpZiAocHJvdGVjdFVybHMpIHByb3RlY3Rpb25JbmZvLnB1c2goXCJVUkxzXCIpO1xuICAgIGlmIChwcm90ZWN0TnVtYmVycykgcHJvdGVjdGlvbkluZm8ucHVzaChcIklEc1wiKTtcbiAgICBcbiAgICBsZXQgc3RhdHVzVGV4dCA9IGBDb21wcmVzc2VkIGJ5ICR7c2F2aW5nc30lYDtcbiAgICBpZiAocHJvdGVjdGlvbkluZm8ubGVuZ3RoID4gMCkge1xuICAgICAgc3RhdHVzVGV4dCArPSBgIHwgUHJvdGVjdGluZzogJHtwcm90ZWN0aW9uSW5mby5qb2luKCcsICcpfWA7XG4gICAgfVxuICAgIGlmIChzbWFydE1vZGUpIHtcbiAgICAgIHN0YXR1c1RleHQgKz0gXCIgfCBTbWFydCBNb2RlXCI7IC8vIE5FV1xuICAgIH1cblxuICAgIC8vIE5vdGU6IFJlbW92ZWQgc3RhdHVzLnVwZGF0ZSgpIGNhbGxzIGFzIHRoZXkgY2F1c2VkIFRTIGVycm9ycyBpbiB0aGlzIFNESyB2ZXJzaW9uLlxuICAgIC8vIFRoZSBwbHVnaW4gd2lsbCBzdGlsbCBmdW5jdGlvbiBjb3JyZWN0bHkgd2l0aG91dCBleHBsaWNpdCBzdGF0dXMgdXBkYXRlcy5cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tUcm9nbG9keXRlXSBDb21wcmVzc2lvbiBmYWlsZWQ6JywgZXJyb3IpO1xuICAgIC8vIEtlZXAgb3JpZ2luYWwgdGV4dCBvbiBlcnJvclxuICB9XG5cbiAgcmV0dXJuIGNvbXByZXNzZWRUZXh0O1xufVxuIiwgImltcG9ydCB7IHR5cGUgUGx1Z2luQ29udGV4dCB9IGZyb20gXCJAbG1zdHVkaW8vc2RrXCI7XG5pbXBvcnQgeyBwcmVwcm9jZXNzIH0gZnJvbSBcIi4vcHJvbXB0UHJlcHJvY2Vzc29yXCI7XG5pbXBvcnQgeyBjb25maWdTY2hlbWF0aWNzIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbi8qKlxuICogTWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIFRyb2dsb2R5dGUgcGx1Z2luLlxuICogUmVnaXN0ZXJzIHRoZSBwcm9tcHQgcHJlcHJvY2Vzc29yIGFuZCBjb25maWd1cmF0aW9uIHdpdGggTE0gU3R1ZGlvLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbihjb250ZXh0OiBQbHVnaW5Db250ZXh0KSB7XG4gIC8vIFJlZ2lzdGVyIHRoZSBjb25maWd1cmF0aW9uIHNjaGVtYXRpY3MgKGVuYWJsZXMgVUkgc2V0dGluZ3MpXG4gIGNvbnRleHQud2l0aENvbmZpZ1NjaGVtYXRpY3MoY29uZmlnU2NoZW1hdGljcyk7XG4gIFxuICAvLyBSZWdpc3RlciB0aGUgcHJvbXB0IHByZXByb2Nlc3NvclxuICBjb250ZXh0LndpdGhQcm9tcHRQcmVwcm9jZXNzb3IocHJlcHJvY2Vzcyk7XG59XG4iLCAiaW1wb3J0IHsgTE1TdHVkaW9DbGllbnQsIHR5cGUgUGx1Z2luQ29udGV4dCB9IGZyb20gXCJAbG1zdHVkaW8vc2RrXCI7XG5cbmRlY2xhcmUgdmFyIHByb2Nlc3M6IGFueTtcblxuLy8gV2UgcmVjZWl2ZSBydW50aW1lIGluZm9ybWF0aW9uIGluIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG5jb25zdCBjbGllbnRJZGVudGlmaWVyID0gcHJvY2Vzcy5lbnYuTE1TX1BMVUdJTl9DTElFTlRfSURFTlRJRklFUjtcbmNvbnN0IGNsaWVudFBhc3NrZXkgPSBwcm9jZXNzLmVudi5MTVNfUExVR0lOX0NMSUVOVF9QQVNTS0VZO1xuY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LkxNU19QTFVHSU5fQkFTRV9VUkw7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBMTVN0dWRpb0NsaWVudCh7XG4gIGNsaWVudElkZW50aWZpZXIsXG4gIGNsaWVudFBhc3NrZXksXG4gIGJhc2VVcmwsXG59KTtcblxuKGdsb2JhbFRoaXMgYXMgYW55KS5fX0xNU19QTFVHSU5fQ09OVEVYVCA9IHRydWU7XG5cbmxldCBwcmVkaWN0aW9uTG9vcEhhbmRsZXJTZXQgPSBmYWxzZTtcbmxldCBwcm9tcHRQcmVwcm9jZXNzb3JTZXQgPSBmYWxzZTtcbmxldCBjb25maWdTY2hlbWF0aWNzU2V0ID0gZmFsc2U7XG5sZXQgZ2xvYmFsQ29uZmlnU2NoZW1hdGljc1NldCA9IGZhbHNlO1xubGV0IHRvb2xzUHJvdmlkZXJTZXQgPSBmYWxzZTtcbmxldCBnZW5lcmF0b3JTZXQgPSBmYWxzZTtcblxuY29uc3Qgc2VsZlJlZ2lzdHJhdGlvbkhvc3QgPSBjbGllbnQucGx1Z2lucy5nZXRTZWxmUmVnaXN0cmF0aW9uSG9zdCgpO1xuXG5jb25zdCBwbHVnaW5Db250ZXh0OiBQbHVnaW5Db250ZXh0ID0ge1xuICB3aXRoUHJlZGljdGlvbkxvb3BIYW5kbGVyOiAoZ2VuZXJhdGUpID0+IHtcbiAgICBpZiAocHJlZGljdGlvbkxvb3BIYW5kbGVyU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcmVkaWN0aW9uTG9vcEhhbmRsZXIgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgIH1cbiAgICBpZiAodG9vbHNQcm92aWRlclNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJlZGljdGlvbkxvb3BIYW5kbGVyIGNhbm5vdCBiZSB1c2VkIHdpdGggYSB0b29scyBwcm92aWRlclwiKTtcbiAgICB9XG5cbiAgICBwcmVkaWN0aW9uTG9vcEhhbmRsZXJTZXQgPSB0cnVlO1xuICAgIHNlbGZSZWdpc3RyYXRpb25Ib3N0LnNldFByZWRpY3Rpb25Mb29wSGFuZGxlcihnZW5lcmF0ZSk7XG4gICAgcmV0dXJuIHBsdWdpbkNvbnRleHQ7XG4gIH0sXG4gIHdpdGhQcm9tcHRQcmVwcm9jZXNzb3I6IChwcmVwcm9jZXNzKSA9PiB7XG4gICAgaWYgKHByb21wdFByZXByb2Nlc3NvclNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvbXB0UHJlcHJvY2Vzc29yIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtcbiAgICB9XG4gICAgcHJvbXB0UHJlcHJvY2Vzc29yU2V0ID0gdHJ1ZTtcbiAgICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5zZXRQcm9tcHRQcmVwcm9jZXNzb3IocHJlcHJvY2Vzcyk7XG4gICAgcmV0dXJuIHBsdWdpbkNvbnRleHQ7XG4gIH0sXG4gIHdpdGhDb25maWdTY2hlbWF0aWNzOiAoY29uZmlnU2NoZW1hdGljcykgPT4ge1xuICAgIGlmIChjb25maWdTY2hlbWF0aWNzU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25maWcgc2NoZW1hdGljcyBhbHJlYWR5IHJlZ2lzdGVyZWRcIik7XG4gICAgfVxuICAgIGNvbmZpZ1NjaGVtYXRpY3NTZXQgPSB0cnVlO1xuICAgIHNlbGZSZWdpc3RyYXRpb25Ib3N0LnNldENvbmZpZ1NjaGVtYXRpY3MoY29uZmlnU2NoZW1hdGljcyk7XG4gICAgcmV0dXJuIHBsdWdpbkNvbnRleHQ7XG4gIH0sXG4gIHdpdGhHbG9iYWxDb25maWdTY2hlbWF0aWNzOiAoZ2xvYmFsQ29uZmlnU2NoZW1hdGljcykgPT4ge1xuICAgIGlmIChnbG9iYWxDb25maWdTY2hlbWF0aWNzU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHbG9iYWwgY29uZmlnIHNjaGVtYXRpY3MgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgIH1cbiAgICBnbG9iYWxDb25maWdTY2hlbWF0aWNzU2V0ID0gdHJ1ZTtcbiAgICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5zZXRHbG9iYWxDb25maWdTY2hlbWF0aWNzKGdsb2JhbENvbmZpZ1NjaGVtYXRpY3MpO1xuICAgIHJldHVybiBwbHVnaW5Db250ZXh0O1xuICB9LFxuICB3aXRoVG9vbHNQcm92aWRlcjogKHRvb2xzUHJvdmlkZXIpID0+IHtcbiAgICBpZiAodG9vbHNQcm92aWRlclNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9vbHMgcHJvdmlkZXIgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgIH1cbiAgICBpZiAocHJlZGljdGlvbkxvb3BIYW5kbGVyU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb29scyBwcm92aWRlciBjYW5ub3QgYmUgdXNlZCB3aXRoIGEgcHJlZGljdGlvbkxvb3BIYW5kbGVyXCIpO1xuICAgIH1cblxuICAgIHRvb2xzUHJvdmlkZXJTZXQgPSB0cnVlO1xuICAgIHNlbGZSZWdpc3RyYXRpb25Ib3N0LnNldFRvb2xzUHJvdmlkZXIodG9vbHNQcm92aWRlcik7XG4gICAgcmV0dXJuIHBsdWdpbkNvbnRleHQ7XG4gIH0sXG4gIHdpdGhHZW5lcmF0b3I6IChnZW5lcmF0b3IpID0+IHtcbiAgICBpZiAoZ2VuZXJhdG9yU2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgIH1cblxuICAgIGdlbmVyYXRvclNldCA9IHRydWU7XG4gICAgc2VsZlJlZ2lzdHJhdGlvbkhvc3Quc2V0R2VuZXJhdG9yKGdlbmVyYXRvcik7XG4gICAgcmV0dXJuIHBsdWdpbkNvbnRleHQ7XG4gIH0sXG59O1xuXG5pbXBvcnQoXCIuLy4uL3NyYy9pbmRleC50c1wiKS50aGVuKGFzeW5jIG1vZHVsZSA9PiB7XG4gIHJldHVybiBhd2FpdCBtb2R1bGUubWFpbihwbHVnaW5Db250ZXh0KTtcbn0pLnRoZW4oKCkgPT4ge1xuICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5pbml0Q29tcGxldGVkKCk7XG59KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBleGVjdXRlIHRoZSBtYWluIGZ1bmN0aW9uIG9mIHRoZSBwbHVnaW4uXCIpO1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O0FBQUEsSUFNYSxXQU1BLGFBc0ZBLGVBZ0JBO0FBbEhiO0FBQUE7QUFBQTtBQU1PLElBQU0sWUFBWTtBQUFBLE1BQ3ZCO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBYztBQUFBLE1BQWU7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQ2hGO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsSUFDaEU7QUFHTyxJQUFNLGNBQWM7QUFBQSxNQUN6QixHQUFHO0FBQUE7QUFBQSxNQUVIO0FBQUEsTUFBSztBQUFBLE1BQU07QUFBQTtBQUFBLE1BRVg7QUFBQSxNQUFLO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUM5RDtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQTtBQUFBLE1BRXBDO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBO0FBQUEsTUFFaEQ7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUNyRTtBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBO0FBQUEsTUFFdkI7QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFTO0FBQUEsTUFBTTtBQUFBLE1BQzFFO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUN0RTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFDekU7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBO0FBQUEsTUFFM0M7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUN0RTtBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFBTTtBQUFBLE1BQVc7QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUE7QUFBQSxNQUVyRTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBO0FBQUEsTUFFMUI7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUN0RTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDckU7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFDN0Q7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQWE7QUFBQSxNQUFXO0FBQUEsTUFBYTtBQUFBLE1BQWM7QUFBQSxNQUFjO0FBQUEsTUFDckY7QUFBQSxNQUFZO0FBQUEsTUFBYTtBQUFBLE1BQWU7QUFBQSxNQUFhO0FBQUEsTUFBYTtBQUFBLE1BQ2xFO0FBQUEsTUFBWTtBQUFBLE1BQVk7QUFBQSxNQUFjO0FBQUEsTUFBUztBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFRO0FBQUEsTUFBYTtBQUFBLE1BQVU7QUFBQTtBQUFBLE1BRS9CO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDckU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQ2xFO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFDdEU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQ2pFO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQzlEO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQWM7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQ25FO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUNsRTtBQUFBLE1BQVk7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUNyRTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUMvRDtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUN0RTtBQUFBLE1BQU87QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDbEU7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBYTtBQUFBLE1BQ3hEO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBWTtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFDakU7QUFBQSxNQUFXO0FBQUEsTUFBYTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQ3JEO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUNsRDtBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQ2pFO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQy9EO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQ2hFO0FBQUEsTUFBVztBQUFBLE1BQWM7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFDOUQ7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFDN0M7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUMvRDtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUNsRTtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQzVEO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUM5QztBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQ3hEO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQ25FO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBYTtBQUFBLE1BQVk7QUFBQSxNQUN2RDtBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQWE7QUFBQSxNQUFTO0FBQUEsTUFBWTtBQUFBLE1BQ25FO0FBQUEsTUFBWTtBQUFBLE1BQVE7QUFBQSxNQUFZO0FBQUEsTUFDaEM7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVk7QUFBQSxNQUMvRDtBQUFBLE1BQWE7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUN4QztBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBWTtBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFDcEQ7QUFBQSxNQUFZO0FBQUEsTUFBYTtBQUFBLE1BQVc7QUFBQSxNQUNwQztBQUFBLE1BQWM7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQWU7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQ2xFO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQ2xDO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQ3ZDO0FBQUEsTUFBVTtBQUFBLE1BQWM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQ3pDO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFDakU7QUFBQSxNQUFZO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUFTO0FBQUEsTUFBWTtBQUFBLE1BQVM7QUFBQSxNQUMvRDtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ2xEO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFDdEQ7QUFBQSxNQUFVO0FBQUEsTUFBWTtBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQ3ZEO0FBQUEsTUFBVTtBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUNwRDtBQUFBLE1BQVM7QUFBQSxNQUFhO0FBQUEsTUFBVztBQUFBLE1BQWE7QUFBQSxNQUM5QztBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBYztBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFDMUQ7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQ2hEO0FBQUEsTUFBVTtBQUFBLE1BQVk7QUFBQSxNQUFlO0FBQUEsTUFDckM7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUN2RDtBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQ2hDO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUM1QztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQWE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQWM7QUFBQSxJQUN0RTtBQUdPLElBQU0sZ0JBQWdCO0FBQUEsTUFDM0IsR0FBRztBQUFBO0FBQUEsTUFFSDtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVc7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBTTtBQUFBLE1BQ3RFO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQTtBQUFBLE1BRTdDO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQTtBQUFBLE1BRWpFO0FBQUEsTUFBYTtBQUFBLE1BQWM7QUFBQSxNQUFjO0FBQUEsTUFBVztBQUFBLE1BQWM7QUFBQSxNQUNsRTtBQUFBLE1BQVU7QUFBQSxNQUFnQjtBQUFBLE1BQWM7QUFBQSxNQUN4QztBQUFBLE1BQWE7QUFBQSxNQUFhO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUFZO0FBQUEsTUFDN0Q7QUFBQSxNQUFhO0FBQUEsTUFBZ0I7QUFBQSxNQUFjO0FBQUEsTUFBZ0I7QUFBQSxNQUMzRDtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBZTtBQUFBLE1BQ2pFO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLElBQ3hDO0FBRU8sSUFBTSxlQUFlO0FBQUEsTUFDMUIsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLElBQ2Q7QUFBQTtBQUFBOzs7QUN0SEEsSUFNYSxXQU1BLGFBNERBLGVBTUE7QUE5RWI7QUFBQTtBQUFBO0FBTU8sSUFBTSxZQUFZO0FBQUEsTUFDdkI7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBWTtBQUFBLE1BQ2xEO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLElBQy9DO0FBR08sSUFBTSxjQUFjO0FBQUEsTUFDekIsR0FBRztBQUFBO0FBQUEsTUFFSDtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQTtBQUFBLE1BRTNFO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBTztBQUFBLE1BQVU7QUFBQSxNQUNsRTtBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQ2xFO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBO0FBQUEsTUFFbEQ7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBO0FBQUEsTUFFckU7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQ3hFO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBO0FBQUEsTUFFbkU7QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDckU7QUFBQSxNQUFTO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFZO0FBQUEsTUFBUztBQUFBLE1BQ2pFO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBWTtBQUFBLE1BQWE7QUFBQSxNQUFhO0FBQUEsTUFDcEU7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFDbkU7QUFBQSxNQUFZO0FBQUEsTUFBUTtBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQTtBQUFBLE1BRWxFO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBTTtBQUFBLE1BQVU7QUFBQSxNQUNsRTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUM3RDtBQUFBLE1BQVk7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBO0FBQUEsTUFFOUI7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFDbEU7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBO0FBQUEsTUFFakQ7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFDL0Q7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFDakU7QUFBQSxNQUFVO0FBQUEsTUFBYTtBQUFBLE1BQVU7QUFBQSxNQUFnQjtBQUFBLE1BQWM7QUFBQSxNQUMvRDtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUE7QUFBQSxNQUVwQjtBQUFBLE1BQVE7QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQWM7QUFBQSxNQUMzRDtBQUFBLE1BQVk7QUFBQSxNQUFRO0FBQUEsTUFBWTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBVTtBQUFBLE1BQzFEO0FBQUEsTUFBTztBQUFBLE1BQVc7QUFBQSxNQUFPO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUMvQztBQUFBLE1BQWM7QUFBQSxNQUFrQjtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBYTtBQUFBLE1BQy9EO0FBQUEsTUFBWTtBQUFBLE1BQWM7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFDOUQ7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBTTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQ2xFO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQzNEO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUFjO0FBQUEsTUFDakU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBTTtBQUFBO0FBQUEsTUFFNUM7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFDOUQ7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFDakU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFDaEU7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQ3RFO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1B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QSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUMxRTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQ3RFO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQU07QUFBQSxJQUM3QyxDQUFDO0FBR0QsSUFBTSxVQUFVLG9CQUFJLElBQUk7QUFBQSxNQUN0QjtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUMzRTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFDNUU7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQy9EO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ3hEO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUN4RTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQ2hFO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FB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dUJBQXVCLE9BQU8sUUFBUSx3QkFBd0I7QUFFcEUsSUFBTSxnQkFBK0I7QUFBQSxFQUNuQywyQkFBMkIsQ0FBQyxhQUFhO0FBQ3ZDLFFBQUksMEJBQTBCO0FBQzVCLFlBQU0sSUFBSSxNQUFNLDBDQUEwQztBQUFBLElBQzVEO0FBQ0EsUUFBSSxrQkFBa0I7QUFDcEIsWUFBTSxJQUFJLE1BQU0sNERBQTREO0FBQUEsSUFDOUU7QUFFQSwrQkFBMkI7QUFDM0IseUJBQXFCLHlCQUF5QixRQUFRO0FBQ3RELFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSx3QkFBd0IsQ0FBQ0MsZ0JBQWU7QUFDdEMsUUFBSSx1QkFBdUI7QUFDekIsWUFBTSxJQUFJLE1BQU0sdUNBQXVDO0FBQUEsSUFDekQ7QUFDQSw0QkFBd0I7QUFDeEIseUJBQXFCLHNCQUFzQkEsV0FBVTtBQUNyRCxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0Esc0JBQXNCLENBQUNDLHNCQUFxQjtBQUMxQyxRQUFJLHFCQUFxQjtBQUN2QixZQUFNLElBQUksTUFBTSxzQ0FBc0M7QUFBQSxJQUN4RDtBQUNBLDBCQUFzQjtBQUN0Qix5QkFBcUIsb0JBQW9CQSxpQkFBZ0I7QUFDekQsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLDRCQUE0QixDQUFDLDJCQUEyQjtBQUN0RCxRQUFJLDJCQUEyQjtBQUM3QixZQUFNLElBQUksTUFBTSw2Q0FBNkM7QUFBQSxJQUMvRDtBQUNBLGdDQUE0QjtBQUM1Qix5QkFBcUIsMEJBQTBCLHNCQUFzQjtBQUNyRSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsbUJBQW1CLENBQUMsa0JBQWtCO0FBQ3BDLFFBQUksa0JBQWtCO0FBQ3BCLFlBQU0sSUFBSSxNQUFNLG1DQUFtQztBQUFBLElBQ3JEO0FBQ0EsUUFBSSwwQkFBMEI7QUFDNUIsWUFBTSxJQUFJLE1BQU0sNERBQTREO0FBQUEsSUFDOUU7QUFFQSx1QkFBbUI7QUFDbkIseUJBQXFCLGlCQUFpQixhQUFhO0FBQ25ELFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxlQUFlLENBQUMsY0FBYztBQUM1QixRQUFJLGNBQWM7QUFDaEIsWUFBTSxJQUFJLE1BQU0sOEJBQThCO0FBQUEsSUFDaEQ7QUFFQSxtQkFBZTtBQUNmLHlCQUFxQixhQUFhLFNBQVM7QUFDM0MsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUVBLHdEQUE0QixLQUFLLE9BQU1DLFlBQVU7QUFDL0MsU0FBTyxNQUFNQSxRQUFPLEtBQUssYUFBYTtBQUN4QyxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ1osdUJBQXFCLGNBQWM7QUFDckMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUFVO0FBQ2xCLFVBQVEsTUFBTSxvREFBb0Q7QUFDbEUsVUFBUSxNQUFNLEtBQUs7QUFDckIsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X3NkayIsICJwcmVwcm9jZXNzIiwgImNvbmZpZ1NjaGVtYXRpY3MiLCAibW9kdWxlIl0KfQo=
