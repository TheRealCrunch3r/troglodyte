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
  const scanLimit = Math.min(text.length, 1e3);
  const snippet = text.substring(0, scanLimit).toLowerCase();
  const words = snippet.match(/\b[a-zäöüß]{3,}\b/g) || [];
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
  const codeKeywords = /\b(?:const|let|var|function|class|import|export)\b/g;
  const codeBraces = /[{]/g;
  let codeScore = 0;
  let match;
  while ((match = codeKeywords.exec(text)) !== null) {
    codeScore++;
  }
  while ((match = codeBraces.exec(text)) !== null) {
    codeScore++;
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
      // BATCHED REGEX OPTIMIZATION (pre-built in constructor)
      batchedRegex = null;
      replacementMap = null;
      constructor(dictionaries) {
        this.phrasesAndLogic = { ...dictionaries.phrases };
        this.synonyms = dictionaries.synonyms || {};
        const wordChar = "a-zA-Z0-9_'\xDF\xE4\xF6\xFC\xC4\xD6\xDC";
        this.compiledPhrases = Object.entries(this.phrasesAndLogic).filter(([phrase]) => phrase && phrase.length >= 2).sort((a, b) => b[0].length - a[0].length).map(([phrase, replacement]) => ({
          phrase,
          replacement,
          regex: new RegExp(`(?<![${wordChar}])${this.escapeRegex(phrase)}(?![${wordChar}])`, "gi")
        }));
        if (this.compiledPhrases.length > 0) {
          const escapedPhrases = this.compiledPhrases.map(({ phrase }) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).sort((a, b) => b.length - a.length);
          const combinedPattern = `(?:${escapedPhrases.join("|")})`;
          this.batchedRegex = new RegExp(`(?<![${wordChar}])${combinedPattern}(?![${wordChar}])`, "gi");
          this.replacementMap = new Map(this.compiledPhrases.map(({ phrase, replacement }) => [phrase, replacement]));
        }
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
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
        const isTechnical = smartMode && detectTechnicalContext(prompt);
        let synonymReplacementEnabled = !isTechnical;
        if (isTechnical) {
          if (debug) console.log("[Troglodyte] Smart Mode: Detected technical context. Reducing synonym replacement.");
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
          text = text.replace(/(\.\.?[/\\][^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
          text = text.replace(/(\/[^\s<>"|?*]{10,})(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
          text = text.replace(/(~[/\\][^\s<>"|?*]+)(?=[\s.,;:!?)\]]|$)/g, protectIfWorthwhile);
        }
        if (protectJsonXml) {
          text = text.replace(/(\{[^{}]*\})/g, (match) => protectIfWorthwhile(match, 10));
          const findOutermostXml = (input) => {
            const results = [];
            const tagRegex = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*?)>/g;
            let match;
            let depth = 0;
            let lastOpenTagStart = -1;
            while ((match = tagRegex.exec(input)) !== null) {
              const isClosing = match[1] === "/";
              const fullTag = match[0];
              if (fullTag.endsWith("/>")) continue;
              if (isClosing) {
                if (depth === 0) {
                  continue;
                }
                depth--;
                if (depth === 0) {
                  results.push({ start: lastOpenTagStart, end: match.index + fullTag.length });
                }
              } else {
                if (depth === 0) {
                  lastOpenTagStart = match.index;
                }
                depth++;
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
        if (this.batchedRegex && this.replacementMap) {
          text = text.replace(this.batchedRegex, (match) => {
            const repl = this.replacementMap.get(match);
            const saved = match.length - (repl?.length || 0);
            phraseMatches++;
            phraseCharsSaved += saved;
            return repl && repl.trim() !== "" ? repl : " ";
          });
        }
        const wordPattern = /[-a-zA-Z0-9_.'ßäöüÄÖÜ]+/g;
        let trailingPunct = "";
        const trailingMatch = text.match(/([?.!]+)\s*$/);
        if (trailingMatch && trailingMatch[1].length > 0) {
          trailingPunct = trailingMatch[1];
          text = text.substring(0, text.length - trailingMatch[0].length);
        }
        const allWords = text.match(wordPattern) || [];
        if (debug) {
          console.log(`[Troglodyte] Found ${allWords.length} words for filtering`);
        }
        let filteredCount = 0;
        let synonymCount = 0;
        const keptWords = [];
        for (const word of allWords) {
          const lower = word.toLowerCase();
          if (levelBlacklist.has(lower)) {
            filteredCount++;
            continue;
          }
          if (synonymReplacementEnabled && this.synonyms[lower]) {
            synonymCount++;
            keptWords.push(this.synonyms[lower]);
            continue;
          }
          keptWords.push(word);
        }
        if (debug) {
          console.log(`[Troglodyte] Blacklist: ${levelBlacklist.size} words, Filtered: ${filteredCount}, Synonyms: ${synonymCount}`);
        }
        const tokens = text.split(wordPattern);
        const finalParts = [];
        let wordIdx = 0;
        for (const token of tokens) {
          finalParts.push(token);
          if (wordIdx < keptWords.length) {
            finalParts.push(keptWords[wordIdx++]);
          }
        }
        text = finalParts.join("").replace(/\s+/g, " ").replace(/([.,?!;:])(?=[A-ZßÄÖÜ])/g, "$1 ").trim();
        text = text.replace(/\s+([.,?!;:])/g, "$1").replace(/^([.,?!;:]|\s)+/g, "").replace(/([.,;:])\s*$/g, "");
        if (trailingPunct) {
          text = text + trailingPunct;
        }
        if (debug) {
          console.log(`[Troglodyte] Restoring ${protectedItems.length} protected items...`);
        }
        if (protectedItems.length > 0) {
          const replacements = /* @__PURE__ */ new Map();
          for (let i = 0; i < protectedItems.length; i++) {
            replacements.set(String.fromCodePoint(57344 + i), protectedItems[i]);
          }
          text = text.replace(/[\uE000-\uF8FF]/g, (match) => {
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
      "up to date": "updated",
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
      "initializing": "initing",
      "initialized": "inited",
      "synchronization": "sync",
      "synchronize": "sync",
      "synchronizes": "syncs",
      "synchronizing": "syncing",
      "synchronized": "synced",
      "authentication": "auth",
      "authenticate": "auth",
      "authenticates": "auths",
      "authorization": "authz",
      "authorize": "authz",
      "authorizes": "authzs",
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
      // German verbs — removed no-op entries (words mapping to themselves)
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
  if (!userInput && text.trim()) {
    return { userInput: text, hasSystemMetadata: false };
  }
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
    text: `Compressing prompt (${compressionLevel})...`
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
    status.setState({
      status: "done",
      text: `Compressed by ${savings}%`
    });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2RpY3Rpb25hcmllcy9lbi1maWxsZXIudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9kZS1maWxsZXIudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9pbmRleC50cyIsICIuLi9zcmMvdHJvZ2xvZHl0ZS50cyIsICIuLi9zcmMvZGljdGlvbmFyaWVzL3BocmFzZXMudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9zeW5vbnltcy50cyIsICIuLi9zcmMvY29uZmlnLnRzIiwgIi4uL3NyYy9wcm9tcHRQcmVwcm9jZXNzb3IudHMiLCAiLi4vc3JjL2luZGV4LnRzIiwgImVudHJ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEVuZ2xpc2ggZmlsbGVyIHdvcmRzIG9yZ2FuaXplZCBieSBjb21wcmVzc2lvbiBsZXZlbC5cbiAqIFNvdXJjZTogTGluZ3Vpc3RpYyByZXNlYXJjaCwgTkxQIHJlc291cmNlcywgQ09DQSBmcmVxdWVuY3kgbGlzdHNcbiAqL1xuXG4vLyBHZW50bGUgdGllcjogT25seSBwb2xpdGUgZmlsbGVyIGFuZCBiYXNpYyBjb3VydGVzeSB3b3Jkc1xuZXhwb3J0IGNvbnN0IEVOX0dFTlRMRSA9IFtcbiAgJ3BsZWFzZScsICd0aGFua3MnLCAndGhhbmsnLCAnYXBwcmVjaWF0ZScsICdhcHByZWNpYXRlZCcsICdncmF0ZWZ1bCcsICdraW5kbHknLCAncG9saXRlJyxcbiAgJ3VtJywgJ3VoJywgJ29oJywgJ2FoJywgJ3dvdycsICdobW0nLCAnaG1tbScsICd3ZWxsJywgJ29rYXknLCAnb2snLFxuXTtcblxuLy8gQmFsYW5jZWQgdGllcjogfjMwMCBoaWdoLWZyZXF1ZW5jeSB3b3JkcyBzYWZlIHRvIHJlbW92ZSAoZGVkdXBsaWNhdGVkKVxuZXhwb3J0IGNvbnN0IEVOX0JBTEFOQ0VEID0gW1xuICAuLi5FTl9HRU5UTEUsXG4gIC8vIEFydGljbGVzXG4gICdhJywgJ2FuJywgJ3RoZScsXG4gIC8vIFN1YmplY3QgcHJvbm91bnNcbiAgJ2knLCAnbWUnLCAnbXknLCAnbWluZScsICdteXNlbGYnLCAnd2UnLCAndXMnLCAnb3VyJywgJ291cnMnLCAnb3Vyc2VsdmVzJyxcbiAgJ3lvdScsICd5b3VyJywgJ3lvdXJzJywgJ3lvdXJzZWxmJywgJ3lvdXJzZWx2ZXMnLFxuICAvLyBDb3B1bGFzXG4gICdpcycsICdhbScsICdhcmUnLCAnd2FzJywgJ3dlcmUnLCAnYmUnLCAnYmVlbicsICdiZWluZycsXG4gIC8vIEF1eGlsaWFyaWVzXG4gICdoYXZlJywgJ2hhcycsICdoYWQnLCAnZG8nLCAnZG9lcycsICdkaWQnLCAnd2lsbCcsICd3b3VsZCcsICdjb3VsZCcsICdzaG91bGQnLFxuICAnbWF5JywgJ21pZ2h0JywgJ2NhbicsICdzaGFsbCcsXG4gIC8vIFByZXBvc2l0aW9uc1xuICAnb2YnLCAnaW4nLCAndG8nLCAnZm9yJywgJ3dpdGgnLCAnb24nLCAnYXQnLCAnZnJvbScsICdieScsICdhYm91dCcsICd1cCcsICdkb3duJyxcbiAgJ291dCcsICdvZmYnLCAnb3ZlcicsICd0aHJvdWdoJywgJ2ludG8nLCAnYWZ0ZXInLCAnYmVmb3JlJywgJ2R1cmluZycsICdhZ2FpbicsXG4gICdoZXJlJywgJ3RoZXJlJywgJ2JldHdlZW4nLCAndW5kZXInLCAnYWJvdmUnLCAnYmVsb3cnLCAnbmVhcicsICdhcm91bmQnLCAnYWdhaW5zdCcsXG4gICd3aXRoaW4nLCAnd2l0aG91dCcsICdhbG9uZycsICdhY3Jvc3MnLCAnYmVoaW5kJywgJ2JleW9uZCcsICdpbnNpZGUnLCAnb3V0c2lkZScsXG4gICd0b3dhcmQnLCAndG93YXJkcycsICd1cG9uJywgJ3ZpYScsICdwZXInLCAnYW1vbmcnLFxuICAvLyBDb25qdW5jdGlvbnNcbiAgJ2FuZCcsICdidXQnLCAnb3InLCAnbm9yJywgJ3lldCcsICdzbycsICdiZWNhdXNlJywgJ3NpbmNlJywgJ3VubGVzcycsICd3aGlsZScsXG4gICdhbHRob3VnaCcsICd0aG91Z2gnLCAnaWYnLCAnd2hldGhlcicsICdhcycsICd0aGFuJywgJ3RoYXQnLCAnd2hlbicsICd3aGVyZScsXG4gIC8vIERlbW9uc3RyYXRpdmVzXG4gICd0aGlzJywgJ3RoZXNlJywgJ3Rob3NlJywgJ3N1Y2gnLFxuICAvLyBRdWFudGlmaWVycyAmIEFkdmVyYnMgKGRlZHVwbGljYXRlZClcbiAgJ3NvbWUnLCAnYW55JywgJ2FsbCcsICdlYWNoJywgJ2V2ZXJ5JywgJ2JvdGgnLCAnZmV3JywgJ21hbnknLCAnbXVjaCcsICdtb3JlJyxcbiAgJ21vc3QnLCAnb3RoZXInLCAnYW5vdGhlcicsICdzYW1lJywgJ293bicsICdlbm91Z2gnLCAnb25seScsICdldmVuJywgJ2Fsc28nLFxuICAndG9vJywgJ3ZlcnknLCAncmVhbGx5JywgJ3F1aXRlJywgJ3JhdGhlcicsICdqdXN0JywgJ3N0aWxsJywgJ2FscmVhZHknLFxuICAnYWxtb3N0JywgJ25lYXJseScsICdvYnZpb3VzbHknLCAnY2xlYXJseScsICdjZXJ0YWlubHknLCAnZGVmaW5pdGVseScsICdhYnNvbHV0ZWx5JywgJ3RydWx5JyxcbiAgJ2hvbmVzdGx5JywgJ3NlcmlvdXNseScsICdlc3NlbnRpYWxseScsICdnZW5lcmFsbHknLCAndHlwaWNhbGx5JywgJ3VzdWFsbHknLFxuICAnbm9ybWFsbHknLCAnY29tbW9ubHknLCAnZnJlcXVlbnRseScsICdvZnRlbicsICdyZWd1bGFybHknLCAnYWx3YXlzJywgJ25ldmVyJyxcbiAgJ2V2ZXInLCAnc29tZXRpbWVzJywgJ3JhcmVseScsICdzZWxkb20nLFxuICAvLyBIaWdoLWZyZXF1ZW5jeSB2ZXJicyAoZGVkdXBsaWNhdGVkKVxuICAnZ2V0JywgJ2dvdCcsICdnbycsICdnb2VzJywgJ2dvaW5nJywgJ2dvbmUnLCAnbWFrZScsICdtYWRlJywgJ3Rha2UnLCAndG9vaycsXG4gICdnaXZlJywgJ2dhdmUnLCAna25vdycsICdrbmV3JywgJ3RoaW5rJywgJ3Rob3VnaHQnLCAnc2VlJywgJ3NhdycsICdsb29rJyxcbiAgJ2ZpbmQnLCAndGVsbCcsICdhc2snLCAnbmVlZCcsICd0cnknLCAnZmVlbCcsICdrZWVwJywgJ2xldCcsICdiZWdpbicsICdzdGFydCcsXG4gICdzaG93JywgJ2hlYXInLCAnY2FsbCcsICd0dXJuJywgJ21vdmUnLCAnbGl2ZScsICdob2xkJywgJ2JyaW5nJywgJ2hhcHBlbicsXG4gICd3cml0ZScsICdwcm92aWRlJywgJ3NpdCcsICdzdGFuZCcsICdwYXknLCAnbWVldCcsICdpbmNsdWRlJywgJ2NvbnRpbnVlJyxcbiAgJ3NldCcsICdsZWFybicsICdjaGFuZ2UnLCAnbGVhZCcsICd1bmRlcnN0YW5kJywgJ3dhdGNoJywgJ2ZvbGxvdycsICdjcmVhdGUnLFxuICAnc3BlYWsnLCAncmVhZCcsICdhbGxvdycsICdhZGQnLCAnc3BlbmQnLCAnZ3JvdycsICdvcGVuJywgJ3dhbGsnLCAnb2ZmZXInLFxuICAncmVtZW1iZXInLCAnY29uc2lkZXInLCAnYXBwZWFyJywgJ3dhaXQnLCAnc2VydmUnLCAnc2VuZCcsICdleHBlY3QnLCAnYnVpbGQnLFxuICAnc3RheScsICdmYWxsJywgJ3JlYWNoJywgJ3JlbWFpbicsICdzdWdnZXN0JywgJ3JhaXNlJywgJ3Bhc3MnLCAnc2VsbCcsXG4gICdyZXF1aXJlJywgJ3JlcG9ydCcsICdkZWNpZGUnLCAncHVsbCcsICdyZXR1cm4nLCAnZGV2ZWxvcCcsICdhY2NlcHQnLCAnYXJndWUnLFxuICAnZGllJywgJ2JlbGlldmUnLCAnc2VlbScsICdoYXRlJywgJ2xvdmUnLCAnbGlrZScsICd3YW50JywgJ2hvcGUnLCAnd2lzaCcsXG4gICdzdXBwb3NlJywgJ2ltYWdpbmUnLCAncmVhbGl6ZScsICdub3RpY2UnLCAncmVjb2duaXplJywgJ3dvbmRlcicsXG4gICdwcmV0ZW5kJywgJ3JlZnVzZScsICdjbGFpbScsICdhbm5vdW5jZScsICdleHBsYWluJywgJ2Rlc2NyaWJlJywgJ21lbnRpb24nLFxuICAnZGlzY3VzcycsICdyZWNvbW1lbmQnLCAnYWR2aXNlJywgJ3dhcm4nLCAncHJvbWlzZScsICdhZ3JlZScsXG4gICdkaXNhZ3JlZScsICdyZWplY3QnLCAnZGVueScsICdhZG1pdCcsICdjb25mZXNzJywgJ2RlY2xhcmUnLFxuICAnZGlzY292ZXInLCAnaW52ZW50JywgJ2Rlc2lnbicsICdwcm9kdWNlJywgJ3ByZXBhcmUnLCAnYXJyYW5nZScsICdvcmdhbml6ZScsXG4gICdtYW5hZ2UnLCAnY29udHJvbCcsICdvcGVyYXRlJywgJ3J1bicsICdkcml2ZScsICdmbHknLCAnc3dpbScsICdqdW1wJyxcbiAgJ2NsaW1iJywgJ3B1c2gnLCAncHVsbCcsICdsaWZ0JywgJ2NhcnJ5JywgJ2RlbGl2ZXInLCAncmVjZWl2ZScsICdvYnRhaW4nLFxuICAnYWNoaWV2ZScsICdhY2NvbXBsaXNoJywgJ2NvbXBsZXRlJywgJ2ZpbmlzaCcsICdlbmQnLCAnc3RvcCcsICdwYXVzZScsXG4gICdwcm9jZWVkJywgJ2FkdmFuY2UnLCAncHJvZ3Jlc3MnLCAnaW1wcm92ZScsICdpbmNyZWFzZScsXG4gICdkZWNyZWFzZScsICdyZWR1Y2UnLCAnZXhwYW5kJywgJ2V4dGVuZCcsICdsaW1pdCcsICdyZXN0cmljdCcsICdwcmV2ZW50JyxcbiAgJ2F2b2lkJywgJ2VzY2FwZScsICdwcm90ZWN0JywgJ2RlZmVuZCcsICdhdHRhY2snLCAnZmlnaHQnLCAnd2luJywgJ2xvc2UnLFxuICAnc3VjY2VlZCcsICdmYWlsJywgJ2F0dGVtcHQnLCAncHJhY3RpY2UnLCAndHJhaW4nLCAnc3R1ZHknLCAndGVhY2gnLFxuICAnZXhwbG9yZScsICdzZWFyY2gnLCAnc2VlaycsICdodW50JywgJ2NhdGNoJywgJ2NhcHR1cmUnLFxuICAncmVsZWFzZScsICdmcmVlJywgJ3NhdmUnLCAncmVzY3VlJywgJ2hlbHAnLCAnc3VwcG9ydCcsICdhc3Npc3QnLFxuICAnZW1wbG95JywgJ2hpcmUnLCAnZmlyZScsICdwcm9tb3RlJywgJ2RlbW90ZScsICdhcHBvaW50JywgJ2VsZWN0JywgJ3ZvdGUnLFxuICAnY2hvb3NlJywgJ3NlbGVjdCcsICdwcmVmZXInLCAnZGV0ZXJtaW5lJywgJ2NvbmNsdWRlJywgJ2p1ZGdlJyxcbiAgJ2V2YWx1YXRlJywgJ2Fzc2VzcycsICdtZWFzdXJlJywgJ2NhbGN1bGF0ZScsICdjb3VudCcsICdlc3RpbWF0ZScsICdwcmVkaWN0JyxcbiAgJ2ZvcmVjYXN0JywgJ3BsYW4nLCAnc2NoZWR1bGUnLCAnYm9vaycsXG4gICdvcmRlcicsICdyZXF1ZXN0JywgJ2RlbWFuZCcsICdjb21tYW5kJywgJ2RpcmVjdCcsICdpbnN0cnVjdCcsICdndWlkZScsXG4gICdhY2NvbXBhbnknLCAnam9pbicsICdsZWF2ZScsICdkZXBhcnQnLCAnYXJyaXZlJyxcbiAgJ2VudGVyJywgJ2V4aXQnLCAnYXBwcm9hY2gnLCAnd2l0aGRyYXcnLCAncmV0cmVhdCcsICdzaGlmdCcsXG4gICd0cmFuc2ZlcicsICd0cmFuc3BvcnQnLCAnY29sbGVjdCcsICdnYXRoZXInLFxuICAnZGlzdHJpYnV0ZScsICdzcHJlYWQnLCAnc2NhdHRlcicsICdjb25jZW50cmF0ZScsICdmb2N1cycsICdhaW0nLCAndGFyZ2V0JyxcbiAgJ2hpdCcsICdtaXNzJywgJ3N0cmlrZScsICd0b3VjaCcsICdncmFiJyxcbiAgJ3Blcm1pdCcsICdlbmFibGUnLCAnZm9yY2UnLCAnY29tcGVsJywgJ29ibGlnZScsXG4gICdkZXNpcmUnLCAnYW50aWNpcGF0ZScsICdmZWFyJywgJ2RyZWFkJywgJ3dvcnJ5JyxcbiAgJ2NvbmNlcm4nLCAnaW50ZXJlc3QnLCAnYXR0cmFjdCcsICdhcHBlYWwnLCAncGxlYXNlJywgJ3NhdGlzZnknLCAnZGlzYXBwb2ludCcsXG4gICdzdXJwcmlzZScsICdhbWF6ZScsICdhc3RvbmlzaCcsICdzaG9jaycsICdmcmlnaHRlbicsICdzY2FyZScsICd0ZXJyaWZ5JyxcbiAgJ2NhbG0nLCAncmVsYXgnLCAncmVzdCcsICdzbGVlcCcsICd3YWtlJywgJ3Jpc2UnLCAnbGllJyxcbiAgJ2xlYW4nLCAnYmVuZCcsICd0d2lzdCcsICdzcGluJywgJ3JvdGF0ZScsICdyZXZvbHZlJywgJ29yYml0JyxcbiAgJ2NpcmNsZScsICdzdXJyb3VuZCcsICdlbmNsb3NlJywgJ2NvbnRhaW4nLCAnZXhjbHVkZScsICdpbnZvbHZlJyxcbiAgJ2FmZmVjdCcsICdpbmZsdWVuY2UnLCAnaW1wYWN0JywgJ2FsdGVyJywgJ21vZGlmeScsICdhZGp1c3QnLFxuICAnYWRhcHQnLCAndHJhbnNmb3JtJywgJ2NvbnZlcnQnLCAndHJhbnNsYXRlJywgJ2ludGVycHJldCcsXG4gICdjbGFyaWZ5JywgJ3NpbXBsaWZ5JywgJ2NvbXBsaWNhdGUnLCAnY29uZnVzZScsICdwdXp6bGUnLCAnbXlzdGlmeScsXG4gICdyZXZlYWwnLCAnZXhwb3NlJywgJ2hpZGUnLCAnY29uY2VhbCcsICdjb3ZlcicsICd1bmNvdmVyJyxcbiAgJ2xvY2F0ZScsICdpZGVudGlmeScsICdkaXN0aW5ndWlzaCcsICdkaWZmZXJlbnRpYXRlJyxcbiAgJ2NvbXBhcmUnLCAnY29udHJhc3QnLCAnbWF0Y2gnLCAnZml0JywgJ3N1aXQnLCAnd29yaycsICdmdW5jdGlvbicsXG4gICdwZXJmb3JtJywgJ2V4ZWN1dGUnLCAnYXR0YWluJywgJ2dhaW4nLFxuICAnZWFybicsICdjb3N0JywgJ2NoYXJnZScsICdwcmljZScsICd2YWx1ZScsICd3b3J0aCcsXG4gICdyaWNoJywgJ3Bvb3InLCAnY2hlYXAnLCAnZXhwZW5zaXZlJywgJ2ZyZWUnLCAncGFpZCcsICdhZmZvcmRhYmxlJywgJ2Nvc3RseScsXG5dO1xuXG4vLyBBZ2dyZXNzaXZlIHRpZXI6IEV2ZXJ5dGhpbmcgKyBtb3JlIChkZWR1cGxpY2F0ZWQpXG5leHBvcnQgY29uc3QgRU5fQUdHUkVTU0lWRSA9IFtcbiAgLi4uRU5fQkFMQU5DRUQsXG4gIC8vIE9iamVjdCBwcm9ub3Vuc1xuICAnaGUnLCAnaGltJywgJ2hpcycsICdoaW1zZWxmJywgJ3NoZScsICdoZXInLCAnaGVycycsICdoZXJzZWxmJywgJ2l0JywgJ2l0cycsXG4gICdpdHNlbGYnLCAndGhleScsICd0aGVtJywgJ3RoZWlyJywgJ3RoZWlycycsICd0aGVtc2VsdmVzJyxcbiAgLy8gUmVsYXRpdmUgcHJvbm91bnNcbiAgJ3doaWNoJywgJ3dobycsICd3aG9tJywgJ3dob3NlJywgJ3doYXQnLCAnd2hlcmUnLCAnd2hlbicsICd3aHknLCAnaG93JyxcbiAgLy8gSW50ZW5zaWZpZXJzICYgQWR2ZXJicyAoZGVkdXBsaWNhdGVkKVxuICAnZXh0cmVtZWx5JywgJ2luY3JlZGlibHknLCAnYWJzb2x1dGVseScsICd0b3RhbGx5JywgJ2NvbXBsZXRlbHknLCAndXR0ZXJseScsXG4gICdoaWdobHknLCAncGFydGljdWxhcmx5JywgJ2VzcGVjaWFsbHknLCAnZnVuZGFtZW50YWxseScsXG4gICdnZW5lcmFsbHknLCAndHlwaWNhbGx5JywgJ3VzdWFsbHknLCAnbm9ybWFsbHknLCAnY29tbW9ubHknLCAnZnJlcXVlbnRseScsXG4gICdyZWd1bGFybHknLCAnY29uc2lzdGVudGx5JywgJ2NvbnN0YW50bHknLCAnY29udGludW91c2x5JywgJ3BlcnBldHVhbGx5JyxcbiAgJ2Fsd2F5cycsICduZXZlcicsICdldmVyJywgJ2hvd2V2ZXInLCAnbW9yZW92ZXInLCAnZnVydGhlcm1vcmUnLCAnYWRkaXRpb25hbGx5JyxcbiAgJ2VpdGhlcicsICduZWl0aGVyJywgJ2xlYXN0JywgJ2xlc3MnLCAnYmV5b25kJyxcbl07XG5cbmV4cG9ydCBjb25zdCBFTl9CTEFDS0xJU1QgPSB7XG4gIGdlbnRsZTogRU5fR0VOVExFLFxuICBiYWxhbmNlZDogRU5fQkFMQU5DRUQsXG4gIGFnZ3Jlc3NpdmU6IEVOX0FHR1JFU1NJVkUsXG59O1xuIiwgIi8qKlxuICogR2VybWFuIGZpbGxlciB3b3JkcyBvcmdhbml6ZWQgYnkgY29tcHJlc3Npb24gbGV2ZWwuXG4gKiBTb3VyY2U6IExpbmd1aXN0aWMgcmVzZWFyY2gsIE5MUCByZXNvdXJjZXNcbiAqL1xuXG4vLyBHZW50bGUgdGllcjogT25seSBwb2xpdGUgZmlsbGVyXG5leHBvcnQgY29uc3QgREVfR0VOVExFID0gW1xuICAnYml0dGUnLCAnZGFua2UnLCAnZGFua2VuJywgJ3ZpZWxlbicsICdoZXJ6bGljaCcsICdmcmV1dCcsXG4gICdcdTAwRTRobScsICdcdTAwRTRoJywgJ2htJywgJ2htbScsICdvaCcsICdhY2gnLCAnbmEnLCAndGphJyxcbl07XG5cbi8vIEJhbGFuY2VkIHRpZXI6IH4yNTAgaGlnaC1mcmVxdWVuY3kgR2VybWFuIHdvcmRzIChkZWR1cGxpY2F0ZWQpXG5leHBvcnQgY29uc3QgREVfQkFMQU5DRUQgPSBbXG4gIC4uLkRFX0dFTlRMRSxcbiAgLy8gQXJ0aWNsZXNcbiAgJ2RlcicsICdkaWUnLCAnZGFzJywgJ2RlbicsICdkZW0nLCAnZGVzJywgJ2VpbicsICdlaW5lJywgJ2VpbmVuJywgJ2VpbmVtJywgJ2VpbmVzJyxcbiAgLy8gUHJvbm91bnNcbiAgJ2ljaCcsICdtaWNoJywgJ21pcicsICdtZWluJywgJ21laW5lJywgJ21laW5lcicsICd1bnMnLCAndW5zZXJlJywgJ3Vuc2VyZXInLFxuICAnZHUnLCAnZGljaCcsICdkaXInLCAnZGVpbicsICdkZWluZScsICdlcicsICdpaG4nLCAnaWhtJywgJ3NlaW4nLCAnc2VpbmUnLFxuICAnc2llJywgJ2locicsICdpaHJlJywgJ2VzJywgJ3dpcicsICdldWNoJywgJ21hbicsICdtZW5zY2gnLFxuICAvLyBDb3B1bGFzXG4gICdpc3QnLCAnc2luZCcsICd3YXInLCAnd2FyZW4nLCAnc2VpbicsICdnZXdlc2VuJywgJ3dlcmRlJywgJ3dlcmRlbicsICd3dXJkZScsXG4gIC8vIEF1eGlsaWFyaWVzXG4gICdoYWJlbicsICdoYXQnLCAnaGFiZScsICdoYXR0ZW4nLCAna1x1MDBGNm5uZW4nLCAna2FubicsICdtXHUwMEZDc3NlbicsICdzb2xsZW4nLCAnZFx1MDBGQ3JmZW4nLFxuICAnbVx1MDBGNmdlbicsICdtb2NodGUnLCAnd29sbGVuJywgJ3dpbGwnLCAnd29sbHRlJywgJ211c3N0ZScsICdzb2xsdGUnLCAna29ubnRlJyxcbiAgLy8gUHJlcG9zaXRpb25zXG4gICd2b24nLCAnaW4nLCAnenUnLCAnZlx1MDBGQ3InLCAnbWl0JywgJ2FuJywgJ2F1ZicsICdiZWknLCAnbmFjaCcsICdcdTAwRkNiZXInLCAndW50ZXInLFxuICAnZHVyY2gnLCAndW0nLCAnYmlzJywgJ29obmUnLCAnYXVzJywgJ3ZvcicsICd6d2lzY2hlbicsICdnZWdlbicsICdzZWl0JyxcbiAgJ3dcdTAwRTRocmVuZCcsICdoaW50ZXInLCAnbmViZW4nLCAnb2JlcmhhbGInLCAndW50ZXJoYWxiJywgJ2lubmVyaGFsYicsICdhdVx1MDBERmVyaGFsYicsXG4gICdzdGF0dCcsICd0cm90eicsICd3ZWdlbicsICdnZW1cdTAwRTRcdTAwREYnLCAnbGF1dCcsICdlbnRsYW5nJywgJ2VudGdlZ2VuJywgJ2Zlcm4nLFxuICAnamVuc2VpdHMnLCAna25hcCcsICduXHUwMEY2cmRsaWNoJywgJ1x1MDBGNnN0bGljaCcsICdzXHUwMEZDZGxpY2gnLCAnd2VzdGxpY2gnLCAnYWInLFxuICAvLyBDb25qdW5jdGlvbnNcbiAgJ3VuZCcsICdvZGVyJywgJ2FiZXInLCAnZGVubicsICdzb25kZXJuJywgJ3dlaWwnLCAnZGEnLCAnb2J3b2hsJywgJ3dlbm4nLFxuICAnZmFsbHMnLCAnYmV2b3InLCAnbmFjaGRlbScsICdzb2JhbGQnLCAnYWxzJywgJ3dpZScsICdkYXNzJywgJ29iJyxcbiAgJ2VudHdlZGVyJywgJ25vY2gnLCAnc293b2hsJywgJ3dlZGVyJyxcbiAgLy8gRGVtb25zdHJhdGl2ZXNcbiAgJ2RpZXNlcicsICdkaWVzZScsICdkaWVzZXMnLCAnZGllc2VtJywgJ2RpZXNlbicsICdqZW5lcicsICdqZW5lJywgJ3NvbGNoJyxcbiAgJ3NvbGNoZXInLCAnc2VsYnN0JywgJ3NlbGJlcicsICdlYmVuJywgJ2dlcmFkZScsICduXHUwMEU0bWxpY2gnLFxuICAvLyBRdWFudGlmaWVyc1xuICAnYWxsZScsICdhbGxlcycsICd2aWVsJywgJ3ZpZWxlJywgJ3ZpZWxlcicsICdtZWhyJywgJ21laHJlcmUnLCAnd2VuaWcnLFxuICAnd2VuaWdlJywgJ21hbmNoJywgJ21hbmNoZScsICdqZWRlcicsICdqZWRlJywgJ2plZGVzJywgJ25pY2h0cycsICdldHdhcycsXG4gICdpcmdlbmQnLCAnaXJnZW5kZWluJywgJ2VpbmlnZScsICd2ZXJzY2hpZWRlbmUnLCAnemFobHJlaWNoZScsICdrZWluZScsXG4gICdrZWluZXInLCAna2VpbmVzJywgJ25pZW1hbmQnLFxuICAvLyBJbnRlbnNpZmllcnMvRmlsbGVyc1xuICAnYXVjaCcsICdzbycsICdhbHNvJywgJ2hhbHQnLCAnbWFsJywgJ2RvY2gnLCAnZWlnZW50bGljaCcsICd0YXRzXHUwMEU0Y2hsaWNoJyxcbiAgJ3dpcmtsaWNoJywgJ3NlaHInLCAnemllbWxpY2gnLCAnc2Nob24nLCAnbnVyJywgJ2FsbGVpbicsICdpbW1lcicsXG4gICduaWUnLCAnbmllbWFscycsICdvZnQnLCAnbWFuY2htYWwnLCAnaFx1MDBFNHVmaWcnLCAnc2VsdGVuJyxcbiAgJ3ZpZWxsZWljaHQnLCAnd2FocnNjaGVpbmxpY2gnLCAnc2ljaGVyJywgJ2tsYXInLCAnbmF0XHUwMEZDcmxpY2gnLCAnZnJlaWxpY2gnLFxuICAnXHUwMEZDYnJpZ2VucycsICdhbGxlcmRpbmdzJywgJ2plZG9jaCcsICdzb25zdCcsICdkYW5uJywgJ2pldHp0JywgJ2hldXRlJyxcbiAgJ21vcmdlbicsICdnZXN0ZXJuJywgJ2hpZXInLCAnZG9ydCcsICdkYScsICd3b2hpbicsICdoZXInLCAnd2VnJywgJ2hpbicsXG4gICdyYW4nLCAncnVtJywgJ2hlcnVtJywgJ2RhYmVpJywgJ2Rhdm9uJywgJ2RhcnVtJywgJ2RhbWl0JywgJ2RhZlx1MDBGQ3InLFxuICAnZGFnZWdlbicsICdkYXp1JywgJ2RhaGVyJywgJ2Rhclx1MDBGQ2JlcicsICdkYXJ1bnRlcicsICdkYXp3aXNjaGVuJywgJ2RyYW4nLFxuICAnZHJhdWYnLCAnZHJpbicsICdkclx1MDBGQ2JlcicsICdkcnVudGVyJywgJ2phJywgJ25laW4nLFxuICAvLyBIaWdoLWZyZXF1ZW5jeSB2ZXJic1xuICAnbWFjaGVuJywgJ21hY2h0JywgJ3NhZ2VuJywgJ3NhZ3QnLCAnc2FndGUnLCAnZ2ViZW4nLCAnZ2lidCcsICdnYWInLFxuICAnbmVobWVuJywgJ25pbW10JywgJ25haG0nLCAnZmluZGVuJywgJ2ZpbmRldCcsICdmYW5kJywgJ3dpc3NlbicsICd3ZWlcdTAwREYnLFxuICAnd3Vzc3RlJywgJ2RlbmtlbicsICdkZW5rdCcsICdkYWNodGUnLCAnc2VoZW4nLCAnc2llaHQnLCAnc2FoJywgJ2tvbW1lbicsXG4gICdrb21tdCcsICdrYW0nLCAnZ2VoZW4nLCAnZ2VodCcsICdnaW5nJywgJ3N0ZWhlbicsICdzdGVodCcsICdsaWVnZW4nLCAnbGllZ3QnLFxuICAnbGFzc2VuJywgJ2xcdTAwRTRzc3QnLCAnaGFsdGVuJywgJ2hcdTAwRTRsdCcsICdoaWVsdCcsICdicmluZ2VuJywgJ2JyaW5ndCcsICdicmFjaHRlJyxcbiAgJ2JsZWliZW4nLCAnYmxlaWJ0JywgJ2JsaWViJywgJ2ZyYWdlbicsICdmcmFndCcsICdmcmFndGUnLCAnYW50d29ydGVuJyxcbiAgJ2FudHdvcnRldCcsICd6ZWlnZW4nLCAnemVpZ3QnLCAnemVpZ3RlJywgJ3NwcmVjaGVuJywgJ3NwcmljaHQnLCAnc3ByYWNoJyxcbiAgJ2hcdTAwRjZyZW4nLCAnaFx1MDBGNnJ0JywgJ2hcdTAwRjZydGUnLCAnbGVybmVuJywgJ2xlcm50JywgJ2xlcm50ZScsICd2ZXJzdGVoZW4nLCAndmVyc3RlaHQnLFxuICAndmVyc3RhbmQnLCAnYmVnaW5uZW4nLCAnYmVnaW5udCcsICdiZWdhbm4nLCAnZW5kZW4nLCAnZW5kZXQnLCAnZW5kZXRlJyxcbiAgJ2FyYmVpdGVuJywgJ2FyYmVpdGV0JywgJ2FyYmVpdGV0ZScsICdsZWJlbicsICdsZWJ0JywgJ2xlYnRlJywgJ3NwaWVsZW4nLFxuICAnc3BpZWx0JywgJ3NwaWVsdGUnLCAnc2NoYXVlbicsICdzY2hhdXQnLCAnc2NoYXV0ZScsICdzY2hyZWliZW4nLCAnc2NocmVpYnQnLFxuICAnc2NocmllYicsICdsZXNlbicsICdsaWVzdCcsICdsYXMnLCAnbWVpbmVuJywgJ21laW50JywgJ21laW50ZScsICdnbGF1YmVuJyxcbiAgJ2dsYXVidCcsICdnbGF1YnRlJywgJ2hvZmZlbicsICdob2ZmdCcsICdob2ZmdGUnLCAnYnJhdWNoZW4nLCAnYnJhdWNodCcsXG4gICdicmF1Y2h0ZScsICdkYXJmJywgJ2R1cmZ0ZScsICdzb2xsJywgJ211c3MnLCAnbWFnJywgJ2tlbm5lbicsICdrZW5udCcsXG4gICdrYW5udGUnLCAnaGVpXHUwMERGZW4nLCAnaGVpXHUwMERGdCcsICdoaWVcdTAwREYnLFxuXTtcblxuLy8gQWdncmVzc2l2ZSB0aWVyIChkZWR1cGxpY2F0ZWQpXG5leHBvcnQgY29uc3QgREVfQUdHUkVTU0lWRSA9IFtcbiAgLi4uREVfQkFMQU5DRUQsXG4gICdpaG5lbicsICdpaHJlcicsICdzZWluZW4nLCAnZGVyZW4nLCAnZGVzc2VuJywgJ3dlbGNoZXInLCAnd2VsY2hlJywgJ3dlcicsXG4gICd3YXMnLCAnd28nLCAnd2llJywgJ2dlbmF1Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBERV9CTEFDS0xJU1QgPSB7XG4gIGdlbnRsZTogREVfR0VOVExFLFxuICBiYWxhbmNlZDogREVfQkFMQU5DRUQsXG4gIGFnZ3Jlc3NpdmU6IERFX0FHR1JFU1NJVkUsXG59O1xuIiwgIi8qKlxuICogTXVsdGktbGFuZ3VhZ2UgZGljdGlvbmFyeSBpbmRleC5cbiAqIEV4cG9ydHMgYWxsIGxhbmd1YWdlLXNwZWNpZmljIGZpbGxlciB3b3JkIGRpY3Rpb25hcmllcy5cbiAqL1xuXG5leHBvcnQgeyBFTl9CTEFDS0xJU1QgfSBmcm9tICcuL2VuLWZpbGxlcic7XG5leHBvcnQgeyBERV9CTEFDS0xJU1QgfSBmcm9tICcuL2RlLWZpbGxlcic7XG5cbi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIGxhbmd1YWdlIGNvZGVzXG5leHBvcnQgdHlwZSBMYW5ndWFnZUNvZGUgPSAnZW4nIHwgJ2RlJztcblxuLy8gTWFwIG9mIGxhbmd1YWdlIGNvZGUgdG8gYmxhY2tsaXN0IG9iamVjdFxuaW1wb3J0IHsgRU5fQkxBQ0tMSVNUIH0gZnJvbSAnLi9lbi1maWxsZXInO1xuaW1wb3J0IHsgREVfQkxBQ0tMSVNUIH0gZnJvbSAnLi9kZS1maWxsZXInO1xuXG5leHBvcnQgY29uc3QgTEFOR1VBR0VfRElDVElPTkFSSUVTOiBSZWNvcmQ8TGFuZ3VhZ2VDb2RlLCB7IGdlbnRsZTogc3RyaW5nW107IGJhbGFuY2VkOiBzdHJpbmdbXTsgYWdncmVzc2l2ZTogc3RyaW5nW10gfT4gPSB7XG4gIGVuOiBFTl9CTEFDS0xJU1QsXG4gIGRlOiBERV9CTEFDS0xJU1QsXG59O1xuXG5leHBvcnQgY29uc3QgU1VQUE9SVEVEX0xBTkdVQUdFUzogTGFuZ3VhZ2VDb2RlW10gPSBbJ2VuJywgJ2RlJ107XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT0gTVVMVEktTEFOR1VBR0UgU1VQUE9SVCAoRU4vREUgT05MWSkgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmltcG9ydCB7XHJcbiAgTEFOR1VBR0VfRElDVElPTkFSSUVTLFxyXG4gIHR5cGUgTGFuZ3VhZ2VDb2RlLFxyXG4gIFNVUFBPUlRFRF9MQU5HVUFHRVMsXHJcbn0gZnJvbSAnLi9kaWN0aW9uYXJpZXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgeyBMYW5ndWFnZUNvZGUgfTtcclxuXHJcbmV4cG9ydCB0eXBlIENvbXByZXNzaW9uTGV2ZWwgPSBcImdlbnRsZVwiIHwgXCJiYWxhbmNlZFwiIHwgXCJhZ2dyZXNzaXZlXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBTVEFUSVNUSUNTIFRSQUNLSU5HID09PT09PT09PT09PT09PT09PT09XHJcblxyXG5pbnRlcmZhY2UgQ29tcHJlc3Npb25TdGF0cyB7XHJcbiAgdG90YWxDb21wcmVzc2lvbnM6IG51bWJlcjtcclxuICB0b3RhbENoYXJzT3JpZ2luYWw6IG51bWJlcjtcclxuICB0b3RhbENoYXJzQ29tcHJlc3NlZDogbnVtYmVyO1xyXG4gIGxhc3RVcGRhdGVkOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQZXItaW5zdGFuY2Ugc3RhdHMgdG8gYXZvaWQgc3RhbGUgZGF0YSBkdXJpbmcgaG90LXJlbG9hZC5cclxuICogRWFjaCBUcm9nbG9keXRlIGluc3RhbmNlIGdldHMgaXRzIG93biBzdGF0cyBvYmplY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdGF0cygpOiBDb21wcmVzc2lvblN0YXRzIHtcclxuICByZXR1cm4ge1xyXG4gICAgdG90YWxDb21wcmVzc2lvbnM6IDAsXHJcbiAgICB0b3RhbENoYXJzT3JpZ2luYWw6IDAsXHJcbiAgICB0b3RhbENoYXJzQ29tcHJlc3NlZDogMCxcclxuICAgIGxhc3RVcGRhdGVkOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgfTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT0gTEFOR1VBR0UgREVURUNUSU9OIChFTi9ERSBPTkxZKSAtIElNUFJPVkVEID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogRGV0ZWN0cyB3aGV0aGVyIHRleHQgaXMgRW5nbGlzaCBvciBHZXJtYW4gdXNpbmcgd2VpZ2h0ZWQgd29yZCBmcmVxdWVuY3kgYW5hbHlzaXMuXHJcbiAqIFxyXG4gKiBTdHJhdGVneTpcclxuICogLSBIaWdoLXdlaWdodCB3b3JkczogYXJ0aWNsZXMsIHByb25vdW5zLCBjb21tb24gZnVuY3Rpb24gd29yZHMgKHN0cm9uZyBzaWduYWwpXHJcbiAqIC0gTG93LXdlaWdodCB3b3JkczogdGVjaG5pY2FsIHRlcm1zIHRoYXQgYXBwZWFyIGluIGJvdGggbGFuZ3VhZ2VzJyBjb2RlIGNvbnRleHRzXHJcbiAqIC0gQ29uZmlkZW5jZSB0aHJlc2hvbGQ6IGlmIHJhdGlvIDwgMS41OjEsIGRlZmF1bHQgdG8gRW5nbGlzaCAoc2FmZXIgZmFsbGJhY2spXHJcbiAqL1xyXG5cclxuLy8gSGlnaC1jb25maWRlbmNlIEVuZ2xpc2ggaW5kaWNhdG9ycyBcdTIwMTQgcmFyZSBvciBhYnNlbnQgaW4gR2VybWFuXHJcbmNvbnN0IEVOX0hJR0ggPSBuZXcgU2V0KFtcclxuICAndGhlJywgJ2EnLCAnYW4nLCAnaXMnLCAnYXJlJywgJ3dhcycsICd3ZXJlJywgJ2JlJywgJ2JlZW4nLCAnaGF2ZScsICdoYXMnLCAnaGFkJywgXHJcbiAgJ2RvJywgJ2RvZXMnLCAnZGlkJywgJ3dpbGwnLCAnd291bGQnLCAnY291bGQnLCAnc2hvdWxkJywgJ21heScsICdtaWdodCcsICdtdXN0JyxcclxuICAndGhpcycsICd0aGF0JywgJ3RoZXNlJywgJ3Rob3NlJywgJ2l0JywgJ2l0cycsICd0aGV5JywgJ3RoZW0nLCAndGhlaXInLCAndGhlcmUnLFxyXG4gICdoZXJlJywgJ3doYXQnLCAnd2hlbicsICd3aGVyZScsICd3aG8nLCAnaG93JywgJ3doeScsICd3aGljaCcsICdub3QnLCAnbm8nLCAnbm9yJyxcclxuICAnYnV0JywgJ2FuZCcsICdvcicsICdmb3InLCAnc28nLCAnaWYnLCAndGhlbicsICd0aGFuJywgJ3RvbycsICd2ZXJ5JywgJ2p1c3QnLFxyXG4gICdhYm91dCcsICdhYm92ZScsICdhZnRlcicsICdhZ2FpbicsICdhbGwnLCAnYWxzbycsICdhbnknLCAnYmVjYXVzZScsICdiZWZvcmUnLFxyXG4gICdiZXR3ZWVuJywgJ2JvdGgnLCAnY2FuJywgJ2VhY2gnLCAnZnJvbScsICdmdXJ0aGVyJywgJ2dldCcsICdnb3QnLCAnaGltJywgJ2hpcycsXHJcbiAgJ2ludG8nLCAnbW9yZScsICdtb3N0JywgJ290aGVyJywgJ291cicsICdvdXQnLCAnb3ZlcicsICdvd24nLCAnc2FtZScsICdzb21lJyxcclxuICAnc3VjaCcsICd0aHJvdWdoJywgJ3VuZGVyJywgJ3VudGlsJywgJ3VwJywgJ3doaWxlJyxcclxuXSk7XHJcblxyXG4vLyBIaWdoLWNvbmZpZGVuY2UgR2VybWFuIGluZGljYXRvcnMgXHUyMDE0IHJhcmUgb3IgYWJzZW50IGluIEVuZ2xpc2hcclxuY29uc3QgREVfSElHSCA9IG5ldyBTZXQoW1xyXG4gICdkZXInLCAnZGllJywgJ2RhcycsICdkZW4nLCAnZGVtJywgJ2RlcycsICdlaW4nLCAnZWluZScsICdlaW5lcicsICdlaW5lbScsICdlaW5lcycsXHJcbiAgJ2ljaCcsICdtaWNoJywgJ21pcicsICdkdScsICdkaWNoJywgJ2RpcicsICdlcicsICdzaWUnLCAnZXMnLCAnd2lyJywgJ3VucycsICdpaHInLCBcclxuICAnZXVjaCcsICdpc3QnLCAnc2luZCcsICd3YXInLCAnd2FyZW4nLCAnc2VpbicsICdoYWJlbicsICdoYXQnLCAnaGFiZScsXHJcbiAgJ3VuZCcsICdvZGVyJywgJ2FiZXInLCAnbmljaHQnLCAnYXVjaCcsICdzZWhyJywgJ3ZpZWwnLCAnbWVocicsIFxyXG4gICdhbGxlJywgJ2FsbGVzJywgJ2RpZXNlcicsICdkaWVzZScsICdkaWVzZXMnLCAnamVkZXInLCAnamVkZScsICdqZWRlcycsICdrZWluJywgXHJcbiAgJ2tlaW5lJywgJ21pdCcsICduYWNoJywgJ3ZvbicsICd6dScsICdiZWknLCAnYXVmJywgJ2F1cycsICdpbicsICdhbicsXHJcbiAgJ2ZcdTAwRkNyJywgJ3VtJywgJ2dlZ2VuJywgJ29obmUnLCAnZHVyY2gnLCAnd2llJywgJ3dhcycsICd3ZW5uJywgJ3dlaWwnLFxyXG4gICdzb2xsdGUnLCAna1x1MDBGNm5udGUnLCAnbVx1MDBGQ3NzdGUnLCAnZGFyZicsICdkXHUwMEZDcmZlJywgJ21hZycsICdtXHUwMEY2Z2UnLCAnd2lsbCcsICd3b2xsZW4nLFxyXG5dKTtcclxuXHJcbi8vIExvdy13ZWlnaHQgd29yZHMgdGhhdCBhcHBlYXIgaW4gYm90aCBsYW5ndWFnZXMgKGNvZGUgY29udGV4dCBub2lzZSkgXHUyMDE0IGV4Y2x1ZGVkIGZyb20gZGV0ZWN0aW9uXHJcbmNvbnN0IE5FVVRSQUxfV09SRFMgPSBuZXcgU2V0KFtcclxuICAvLyBDb21tb24gRW5nbGlzaC9HZXJtYW4gb3ZlcmxhcCBvciBjb2RlIGtleXdvcmRzXHJcbiAgJ2NvZGUnLCAnZnVuY3Rpb24nLCAncmV0dXJuJywgJ2NsYXNzJywgJ2ltcG9ydCcsICdleHBvcnQnLCBcclxuICAnY29uc3QnLCAnbGV0JywgJ3ZhcicsICdpZicsICdlbHNlJywgJ2ZvcicsICd3aGlsZScsXHJcbiAgJ3dpcmQnLCAnd1x1MDBGQ3JkZScsICdkYVx1MDBERicsIC8vIEdlcm1hbiB3b3JkcyB0aGF0IGxvb2sgRW5nbGlzaC1pc2ggb3IgYXJlIGFyY2hhaWNcclxuXSk7XHJcblxyXG4vKipcclxuICogRGV0ZWN0IGxhbmd1YWdlIHdpdGggY29uZmlkZW5jZSB0aHJlc2hvbGQuXHJcbiAqIFJldHVybnMgJ2VuJyBhcyBkZWZhdWx0IGlmIHRleHQgaXMgdG9vIHNob3J0IG9yIHNpZ25hbCBpcyB3ZWFrLlxyXG4gKi9cclxuZnVuY3Rpb24gZGV0ZWN0TGFuZ3VhZ2UodGV4dDogc3RyaW5nKTogTGFuZ3VhZ2VDb2RlIHtcbiAgLy8gT1BUSU1JWkFUSU9OOiBMaW1pdCBzY2FuIHRvIGZpcnN0IDEwMDAgY2hhcnMuIExhbmd1YWdlIHNpZ25hbCBpcyBzdHJvbmdlc3QgYXQgdGhlIHN0YXJ0LlxuICBjb25zdCBzY2FuTGltaXQgPSBNYXRoLm1pbih0ZXh0Lmxlbmd0aCwgMTAwMCk7XG4gIGNvbnN0IHNuaXBwZXQgPSB0ZXh0LnN1YnN0cmluZygwLCBzY2FuTGltaXQpLnRvTG93ZXJDYXNlKCk7XG4gIFxuICBjb25zdCB3b3JkcyA9IHNuaXBwZXQubWF0Y2goL1xcYlthLXpcdTAwRTRcdTAwRjZcdTAwRkNcdTAwREZdezMsfVxcYi9nKSB8fCBbXTtcbiAgXG4gIC8vIE5lZWQgbWluaW11bSBzaWduYWwgdG8gbWFrZSBhIGRlY2lzaW9uXG4gIGlmICh3b3Jkcy5sZW5ndGggPCA1KSByZXR1cm4gJ2VuJztcbiAgXG4gIGxldCBlblNjb3JlID0gMDtcbiAgbGV0IGRlU2NvcmUgPSAwO1xuICBcbiAgZm9yIChjb25zdCB3b3JkIG9mIHdvcmRzKSB7XG4gICAgaWYgKE5FVVRSQUxfV09SRFMuaGFzKHdvcmQpKSBjb250aW51ZTsgLy8gU2tpcCBjb2RlL3RlY2huaWNhbCBub2lzZVxuICAgIFxuICAgIGlmIChFTl9ISUdILmhhcyh3b3JkKSkgZW5TY29yZSsrO1xuICAgIGVsc2UgaWYgKERFX0hJR0guaGFzKHdvcmQpKSBkZVNjb3JlKys7XG4gIH1cbiAgXG4gIC8vIENvbmZpZGVuY2UgdGhyZXNob2xkOiBuZWVkIGF0IGxlYXN0IDEuNXggcmF0aW8gdG8gY29tbWl0XG4gIGNvbnN0IHRvdGFsID0gZW5TY29yZSArIGRlU2NvcmU7XG4gIGlmICh0b3RhbCA9PT0gMCkgcmV0dXJuICdlbic7XG4gIFxuICBjb25zdCByYXRpbyA9IE1hdGgubWF4KGVuU2NvcmUsIGRlU2NvcmUpIC8gTWF0aC5taW4oZW5TY29yZSwgZGVTY29yZSk7XG4gIGlmIChyYXRpbyA8IDEuNSkgcmV0dXJuICdlbic7IC8vIFdlYWsgc2lnbmFsIFx1MjE5MiBkZWZhdWx0IHRvIEVuZ2xpc2hcbiAgXG4gIHJldHVybiBkZVNjb3JlID4gZW5TY29yZSA/ICdkZScgOiAnZW4nO1xufVxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09IFNNQVJUIE1PREUgREVURUNUSU9OID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogRGV0ZWN0cyBpZiB0aGUgcHJvbXB0IGlzIHRlY2huaWNhbCAoY29kZS1oZWF2eSkgb3IgY29udmVyc2F0aW9uYWwuXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0ZWNobmljYWwsIGZhbHNlIGlmIGNvbnZlcnNhdGlvbmFsLlxyXG4gKi9cclxuZnVuY3Rpb24gZGV0ZWN0VGVjaG5pY2FsQ29udGV4dCh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAvLyBGSVhFRDogU2luZ2xlLXBhc3MgdG9rZW5pemF0aW9uIHRvIGF2b2lkIGRvdWJsZS1jb3VudGluZyBvdmVybGFwcGluZyBwYXR0ZXJuc1xyXG4gIGNvbnN0IGNvZGVLZXl3b3JkcyA9IC9cXGIoPzpjb25zdHxsZXR8dmFyfGZ1bmN0aW9ufGNsYXNzfGltcG9ydHxleHBvcnQpXFxiL2c7XHJcbiAgY29uc3QgY29kZUJyYWNlcyA9IC9be10vZztcclxuICBcclxuICBsZXQgY29kZVNjb3JlID0gMDtcclxuICBcclxuICAvLyBDb3VudCBjb2RlIGtleXdvcmRzXHJcbiAgbGV0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsO1xyXG4gIHdoaWxlICgobWF0Y2ggPSBjb2RlS2V5d29yZHMuZXhlYyh0ZXh0KSkgIT09IG51bGwpIHtcclxuICAgIGNvZGVTY29yZSsrO1xyXG4gIH1cclxuICBcclxuICAvLyBDb3VudCBvcGVuaW5nIGJyYWNlcyAoY29tbW9uIGluIGNvZGUgb2JqZWN0cy9hcnJheXMpXHJcbiAgd2hpbGUgKChtYXRjaCA9IGNvZGVCcmFjZXMuZXhlYyh0ZXh0KSkgIT09IG51bGwpIHtcclxuICAgIGNvZGVTY29yZSsrO1xyXG4gIH1cclxuICBcclxuICAvLyBJZiBtb3JlIHRoYW4gMTAlIG9mIHRva2VucyBhcmUgY29kZS1saWtlLCBjb25zaWRlciBpdCB0ZWNobmljYWxcclxuICBjb25zdCB0b3RhbFRva2VucyA9IHRleHQuc3BsaXQoL1xccysvKS5sZW5ndGg7XHJcbiAgcmV0dXJuIHRvdGFsVG9rZW5zID4gMCAmJiAoY29kZVNjb3JlIC8gdG90YWxUb2tlbnMpID4gMC4xO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSBUUk9HTE9EWVRFIENMQVNTID09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBQcmUtY29tcGlsZWQgcGhyYXNlIHN0cnVjdHVyZSBmb3IgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uXHJcbmludGVyZmFjZSBDb21waWxlZFBocmFzZSB7XHJcbiAgcGhyYXNlOiBzdHJpbmc7XHJcbiAgcmVwbGFjZW1lbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICByZWdleDogUmVnRXhwO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJvZ2xvZHl0ZSB7XHJcbiAgcHJpdmF0ZSBwaHJhc2VzQW5kTG9naWM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbiAgcHJpdmF0ZSBzeW5vbnltczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICBwcml2YXRlIGNhY2hlZEJsYWNrbGlzdHM6IE1hcDxMYW5ndWFnZUNvZGUsIE1hcDxDb21wcmVzc2lvbkxldmVsLCBTZXQ8c3RyaW5nPj4+O1xyXG4gIHByaXZhdGUgc3RhdHM6IENvbXByZXNzaW9uU3RhdHM7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBNQVhfQ09NUFJFU1NJT05TX0JFRk9SRV9SRVNFVCA9IDEwMDAwO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgTUFYX0NIQVJTX0JFRk9SRV9SRVNFVCA9IDEwXzAwMF8wMDA7XHJcbiAgXHJcbiAgLy8gUHJlLXNvcnRlZCBwaHJhc2VzIHdpdGggcHJlLWNvbXBpbGVkIHJlZ2V4ZXMgKFBFUkZPUk1BTkNFIEZJWClcclxuICBwcml2YXRlIGNvbXBpbGVkUGhyYXNlczogQ29tcGlsZWRQaHJhc2VbXTtcclxuICBcbiAgLy8gQkFUQ0hFRCBSRUdFWCBPUFRJTUlaQVRJT04gKHByZS1idWlsdCBpbiBjb25zdHJ1Y3RvcilcbiAgcHJpdmF0ZSBiYXRjaGVkUmVnZXg6IFJlZ0V4cCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHJlcGxhY2VtZW50TWFwOiBNYXA8c3RyaW5nLCBzdHJpbmcgfCB1bmRlZmluZWQ+IHwgbnVsbCA9IG51bGw7XG5cclxuICBjb25zdHJ1Y3RvcihkaWN0aW9uYXJpZXM6IHtcclxuICAgIHBocmFzZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbiAgICBibGFja2xpc3Q6IHN0cmluZ1tdO1xyXG4gICAgc3lub255bXM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xyXG4gIH0pIHtcclxuICAgIHRoaXMucGhyYXNlc0FuZExvZ2ljID0geyAuLi5kaWN0aW9uYXJpZXMucGhyYXNlcyB9O1xyXG4gICAgdGhpcy5zeW5vbnltcyA9IGRpY3Rpb25hcmllcy5zeW5vbnltcyB8fCB7fTtcclxuICAgIFxyXG4gICAgLy8gUHJlLXNvcnQgcGhyYXNlcyBieSBsZW5ndGggKGxvbmdlc3QgZmlyc3QpIGFuZCBwcmUtY29tcGlsZSByZWdleGVzXHJcbiAgICBjb25zdCB3b3JkQ2hhciA9IFwiYS16QS1aMC05XydcdTAwREZcdTAwRTRcdTAwRjZcdTAwRkNcdTAwQzRcdTAwRDZcdTAwRENcIjtcclxuICAgIHRoaXMuY29tcGlsZWRQaHJhc2VzID0gT2JqZWN0LmVudHJpZXModGhpcy5waHJhc2VzQW5kTG9naWMpXHJcbiAgICAgIC5maWx0ZXIoKFtwaHJhc2VdKSA9PiBwaHJhc2UgJiYgcGhyYXNlLmxlbmd0aCA+PSAyKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYlswXS5sZW5ndGggLSBhWzBdLmxlbmd0aClcclxuICAgICAgLm1hcCgoW3BocmFzZSwgcmVwbGFjZW1lbnRdKSA9PiAoe1xyXG4gICAgICAgIHBocmFzZSxcclxuICAgIFxuICAgICAgICByZXBsYWNlbWVudCxcclxuICAgICAgICByZWdleDogbmV3IFJlZ0V4cChgKD88IVske3dvcmRDaGFyfV0pJHt0aGlzLmVzY2FwZVJlZ2V4KHBocmFzZSl9KD8hWyR7d29yZENoYXJ9XSlgLCAnZ2knKVxyXG4gICAgICB9KSk7XHJcbiAgICBcbiAgICAvLyBCVUlMRCBCQVRDSEVEIFJFR0VYIChvbmUtdGltZSBjb3N0IGluIGNvbnN0cnVjdG9yKVxuICAgIC8vIFRoaXMgZW5hYmxlcyBPKG4pIHBocmFzZSByZXBsYWNlbWVudCBpbnN0ZWFkIG9mIE8obiBcdTAwRDcgbSlcbiAgICBpZiAodGhpcy5jb21waWxlZFBocmFzZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZXNjYXBlZFBocmFzZXMgPSB0aGlzLmNvbXBpbGVkUGhyYXNlc1xuICAgICAgICAubWFwKCh7IHBocmFzZSB9KSA9PiBwaHJhc2UucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpOyAvLyBMb25nZXN0IGZpcnN0IGZvciBncmVlZHkgbWF0Y2hpbmdcbiAgICAgIFxuICAgICAgY29uc3QgY29tYmluZWRQYXR0ZXJuID0gYCg/OiR7ZXNjYXBlZFBocmFzZXMuam9pbignfCcpfSlgO1xuICAgICAgdGhpcy5iYXRjaGVkUmVnZXggPSBuZXcgUmVnRXhwKGAoPzwhWyR7d29yZENoYXJ9XSkke2NvbWJpbmVkUGF0dGVybn0oPyFbJHt3b3JkQ2hhcn1dKWAsICdnaScpO1xuICAgICAgXG4gICAgICB0aGlzLnJlcGxhY2VtZW50TWFwID0gbmV3IE1hcCh0aGlzLmNvbXBpbGVkUGhyYXNlcy5tYXAoKHsgcGhyYXNlLCByZXBsYWNlbWVudCB9KSA9PiBbcGhyYXNlLCByZXBsYWNlbWVudF0pKTtcbiAgICB9XG4gICAgXHJcbiAgICB0aGlzLmNhY2hlZEJsYWNrbGlzdHMgPSBuZXcgTWFwKCk7XHJcbiAgICBmb3IgKGNvbnN0IGxhbmdDb2RlIG9mIFNVUFBPUlRFRF9MQU5HVUFHRVMpIHtcclxuICAgICAgY29uc3QgbGFuZ0RpY3QgPSBMQU5HVUFHRV9ESUNUSU9OQVJJRVNbbGFuZ0NvZGVdO1xyXG4gICAgICBjb25zdCBsZXZlbE1hcCA9IG5ldyBNYXA8Q29tcHJlc3Npb25MZXZlbCwgU2V0PHN0cmluZz4+KCk7XHJcbiAgICAgIFxyXG4gICAgICBbJ2dlbnRsZScsICdiYWxhbmNlZCcsICdhZ2dyZXNzaXZlJ10uZm9yRWFjaCgobGV2ZWwpID0+IHtcclxuICAgICAgICBjb25zdCBsdmwgPSBsZXZlbCBhcyBDb21wcmVzc2lvbkxldmVsO1xyXG4gICAgICAgIGxldmVsTWFwLnNldChsdmwsIG5ldyBTZXQobGFuZ0RpY3RbbHZsXS5tYXAodyA9PiB3LnRvTG93ZXJDYXNlKCkpKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jYWNoZWRCbGFja2xpc3RzLnNldChsYW5nQ29kZSwgbGV2ZWxNYXApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXplIHBlci1pbnN0YW5jZSBzdGF0c1xyXG4gICAgdGhpcy5zdGF0cyA9IGNyZWF0ZVN0YXRzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIEZJWEVEOiBTaW5nbGUtcGFzcyByZWdleCByZXBsYWNlbWVudCB0byBhdm9pZCBjYXNjYWRpbmcgZG91YmxlLWVzY2FwaW5nXHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XHJcbiAgfVxyXG5cclxuICBjb21wcmVzcyhwcm9tcHQ6IHN0cmluZywgb3B0aW9ucz86IHsgXHJcbiAgICBsZXZlbD86IENvbXByZXNzaW9uTGV2ZWw7XHJcbiAgICBwcm90ZWN0VXJscz86IGJvb2xlYW47XHJcbiAgICBwcm90ZWN0TnVtYmVycz86IGJvb2xlYW47XHJcbiAgICBwcm90ZWN0SGVhZGVycz86IGJvb2xlYW47XHJcbiAgICBwcm90ZWN0RmlsZVBhdGhzPzogYm9vbGVhbjtcclxuICAgIHByb3RlY3RKc29uWG1sPzogYm9vbGVhbjsgLy8gTkVXXHJcbiAgICBsYW5ndWFnZT86IExhbmd1YWdlQ29kZTtcclxuICAgIHNtYXJ0TW9kZT86IGJvb2xlYW47ICAgICAgLy8gTkVXXHJcbiAgICB2ZXJib3NlPzogYm9vbGVhbjtcclxuICB9KTogc3RyaW5nIHtcclxuICAgIC8vIElOUFVUIFZBTElEQVRJT04gKFNFQ1VSSVRZL1NUQUJJTElUWSlcclxuICAgIGlmICghcHJvbXB0IHx8IHR5cGVvZiBwcm9tcHQgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignW1Ryb2dsb2R5dGVdIEludmFsaWQgaW5wdXQ6IHByb21wdCBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xyXG4gICAgICByZXR1cm4gcHJvbXB0IHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IE1BWF9JTlBVVF9MRU5HVEggPSAxXzAwMF8wMDA7IC8vIDFNQiBsaW1pdCB0byBwcmV2ZW50IERvU1xyXG4gICAgaWYgKHByb21wdC5sZW5ndGggPiBNQVhfSU5QVVRfTEVOR1RIKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgW1Ryb2dsb2R5dGVdIElucHV0IGV4Y2VlZHMgJHtNQVhfSU5QVVRfTEVOR1RIfSBjaGFyIGxpbWl0LCB0cnVuY2F0aW5nLi4uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGV2ZWwgPSBvcHRpb25zPy5sZXZlbCA/PyBcImJhbGFuY2VkXCI7XHJcbiAgICBjb25zdCBwcm90ZWN0VXJscyA9IG9wdGlvbnM/LnByb3RlY3RVcmxzID8/IHRydWU7XHJcbiAgICBjb25zdCBwcm90ZWN0TnVtYmVycyA9IG9wdGlvbnM/LnByb3RlY3ROdW1iZXJzID8/IHRydWU7XHJcbiAgICBjb25zdCBwcm90ZWN0SGVhZGVycyA9IG9wdGlvbnM/LnByb3RlY3RIZWFkZXJzID8/IHRydWU7XHJcbiAgICBjb25zdCBwcm90ZWN0RmlsZVBhdGhzID0gb3B0aW9ucz8ucHJvdGVjdEZpbGVQYXRocyA/PyB0cnVlO1xyXG4gICAgY29uc3QgcHJvdGVjdEpzb25YbWwgPSBvcHRpb25zPy5wcm90ZWN0SnNvblhtbCA/PyB0cnVlOyAvLyBORVcgZGVmYXVsdFxyXG4gICAgY29uc3Qgc21hcnRNb2RlID0gb3B0aW9ucz8uc21hcnRNb2RlID8/IHRydWU7ICAgICAgICAgIC8vIE5FVyBkZWZhdWx0XHJcbiAgICBcclxuICAgIGxldCBsYW5nQ29kZTogTGFuZ3VhZ2VDb2RlO1xyXG4gICAgaWYgKG9wdGlvbnM/Lmxhbmd1YWdlKSB7XHJcbiAgICAgIGxhbmdDb2RlID0gb3B0aW9ucy5sYW5ndWFnZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxhbmdDb2RlID0gZGV0ZWN0TGFuZ3VhZ2UocHJvbXB0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZGVidWcgPSBvcHRpb25zPy52ZXJib3NlID8/IGZhbHNlO1xyXG4gICAgXHJcbiAgICBpZiAoZGVidWcpIHtcclxuICAgICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBEZXRlY3RlZCBsYW5ndWFnZTogJHtsYW5nQ29kZX0gZm9yIHByb21wdDogXCIke3Byb21wdC5zdWJzdHJpbmcoMCwgODApfS4uLlwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRleHQgPSBwcm9tcHQ7XHJcbiAgICBjb25zdCBwcm90ZWN0ZWRJdGVtczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBjb25zdCBsZXZlbEJsYWNrbGlzdE1hcCA9IHRoaXMuY2FjaGVkQmxhY2tsaXN0cy5nZXQobGFuZ0NvZGUpO1xyXG4gICAgaWYgKCFsZXZlbEJsYWNrbGlzdE1hcCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYFtUcm9nbG9keXRlXSBVbmtub3duIGxhbmd1YWdlIGNvZGU6ICR7bGFuZ0NvZGV9LCBmYWxsaW5nIGJhY2sgdG8gRW5nbGlzaGApO1xyXG4gICAgICBsYW5nQ29kZSA9ICdlbic7XHJcbiAgICB9XHJcbiAgICBsZXQgbGV2ZWxCbGFja2xpc3QgPSB0aGlzLmNhY2hlZEJsYWNrbGlzdHMuZ2V0KGxhbmdDb2RlIHx8ICdlbicpIS5nZXQobGV2ZWwpITtcclxuXHJcbiAgICAvLyBTbWFydCBNb2RlIEFkanVzdG1lbnQgKE5FVykgXHUyMDE0IGNhY2hlZCB0byBhdm9pZCBkb3VibGUgY29tcHV0YXRpb25cclxuICAgIGNvbnN0IGlzVGVjaG5pY2FsID0gc21hcnRNb2RlICYmIGRldGVjdFRlY2huaWNhbENvbnRleHQocHJvbXB0KTtcclxuICAgIGxldCBzeW5vbnltUmVwbGFjZW1lbnRFbmFibGVkID0gIWlzVGVjaG5pY2FsO1xyXG4gICAgaWYgKGlzVGVjaG5pY2FsKSB7XHJcbiAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5sb2coJ1tUcm9nbG9keXRlXSBTbWFydCBNb2RlOiBEZXRlY3RlZCB0ZWNobmljYWwgY29udGV4dC4gUmVkdWNpbmcgc3lub255bSByZXBsYWNlbWVudC4nKTtcclxuICAgICAgLy8gSW4gdGVjaG5pY2FsIG1vZGUsIGRpc2FibGUgc3lub255bSByZXBsYWNlbWVudCB0byBwcmVzZXJ2ZSBjb2RlIHJlYWRhYmlsaXR5XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gUFJPVEVDVElPTiBQSEFTRSA9PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbGV0IHBsYWNlaG9sZGVyQ291bnRlciA9IDA7XHJcbiAgICBjb25zdCBNQVhfUExBQ0VIT0xERVJTID0gMHhGRkZGRjsgLy8gfjEgbWlsbGlvbiBwbGFjZWhvbGRlcnMgYmVmb3JlIG92ZXJmbG93XHJcbiAgICBjb25zdCBCUkVBS19FVkVOX0xFTkdUSCA9IDg7IC8vIE1pbmltdW0gbGVuZ3RoIGZvciBwcm90ZWN0aW9uIHRvIGJlIHdvcnRod2hpbGVcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgaWYgaW5wdXQgYWxyZWFkeSBjb250YWlucyBwcml2YXRlIHVzZSBhcmVhIGNoYXJhY3RlcnMgKGVkZ2UgY2FzZSlcclxuICAgIGNvbnN0IGhhc0V4aXN0aW5nUHVhQ2hhcnMgPSAvW1xcdUUwMDAtXFx1RjhGRl0vLnRlc3QodGV4dCk7XHJcbiAgICBpZiAoaGFzRXhpc3RpbmdQdWFDaGFycyAmJiBkZWJ1Zykge1xyXG4gICAgICBjb25zb2xlLmxvZygnW1Ryb2dsb2R5dGVdIFdhcm5pbmc6IElucHV0IGNvbnRhaW5zIFBVQSBjaGFyYWN0ZXJzLCBtYXkgY2F1c2UgY29uZmxpY3RzJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHByb3RlY3RJZldvcnRod2hpbGUgPSAobWF0Y2g6IHN0cmluZywgbWluTGVuOiBudW1iZXIgPSBCUkVBS19FVkVOX0xFTkdUSCk6IHN0cmluZyA9PiB7XHJcbiAgICAgIGlmIChtYXRjaC5sZW5ndGggPD0gbWluTGVuKSByZXR1cm4gbWF0Y2g7XHJcbiAgICAgIC8vIENoZWNrIGZvciBvdmVyZmxvdyBiZWZvcmUgcHJvdGVjdGluZ1xyXG4gICAgICBpZiAocGxhY2Vob2xkZXJDb3VudGVyID49IE1BWF9QTEFDRUhPTERFUlMpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1tUcm9nbG9keXRlXSBcdTI2QTBcdUZFMEYgUGxhY2Vob2xkZXIgbGltaXQgcmVhY2hlZCwgc2tpcHBpbmcgcHJvdGVjdGlvbi4nKTtcclxuICAgICAgICByZXR1cm4gbWF0Y2g7IC8vIFJldHVybiBvcmlnaW5hbCB3aXRob3V0IHByb3RlY3Rpb25cclxuICAgICAgfVxyXG4gICAgICBwcm90ZWN0ZWRJdGVtcy5wdXNoKG1hdGNoKTtcclxuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCgweEUwMDAgKyBwbGFjZWhvbGRlckNvdW50ZXIrKyk7XHJcbiAgICAgIHJldHVybiBwbGFjZWhvbGRlcjtcclxuICAgIH07XHJcblxyXG4gICAgLy8gMS4gUHJvdGVjdCBjb2RlIGJsb2Nrc1xyXG4gICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKGBgYFtcXHNcXFNdKj9gYGB8YFteYF0rYCkvZywgKG1hdGNoKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCAxNSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAyLiBQcm90ZWN0IFVSTHNcclxuICAgIGlmIChwcm90ZWN0VXJscykge1xyXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oaHR0cHM/OlxcL1xcL1teXFxzPD4oKVwiJ1xcXFxbXFxdXSt8d3d3XFwuW15cXHM8PigpXCInXFxcXFtcXF1dKykvZ2ksIChtYXRjaCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCAyMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDMuIFByb3RlY3QgdmVyc2lvbiBudW1iZXJzIGFuZCBzb2Z0d2FyZSBuYW1lcyB3aXRoIGRvdHNcclxuICAgIGlmIChwcm90ZWN0TnVtYmVycykge1xyXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXGIodlxcZCtcXC5cXGQrKD86XFwuXFxkKyk/KVxcYi9nLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcclxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxiKFtBLVpdW2EtekEtWjAtOV0qXFwuW2EtekEtWjAtOV0rKVxcYi9nLCAobWF0Y2gpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvdGVjdElmV29ydGh3aGlsZShtYXRjaCwgNik7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oI1xcZHszLH0pL2csIHByb3RlY3RJZldvcnRod2hpbGUpO1xyXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17MTJ9KS9naSwgcHJvdGVjdElmV29ydGh3aGlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNC4gUHJvdGVjdCBtYXJrZG93biBoZWFkZXJzXHJcbiAgICBpZiAocHJvdGVjdEhlYWRlcnMpIHtcclxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKF58XFxuKSgjezEsNn1cXHMrLispL2csIChtYXRjaCwgbmV3bGluZSwgaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvdGVjdGVkSGVhZGVyID0gcHJvdGVjdElmV29ydGh3aGlsZShoZWFkZXIsIDEyKTtcclxuICAgICAgICByZXR1cm4gYCR7bmV3bGluZX0ke3Byb3RlY3RlZEhlYWRlcn1gO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA1LiBQcm90ZWN0IGZpbGUgcGF0aHMgLSBNVVNUIGNvbWUgYmVmb3JlIHN5bm9ueW0gcmVwbGFjZW1lbnQhXHJcbiAgICBpZiAocHJvdGVjdEZpbGVQYXRocykge1xyXG4gICAgICAvLyBXaW5kb3dzIGFic29sdXRlIHBhdGhzIEZJUlNUIChDOlxcLi4uKSB3aXRoIG9wdGlvbmFsIGV4dGVuc2lvblxyXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oW0EtWmEtel06W1xcL1xcXFxdW148PlwifD8qXFxyXFxuXXsxMCx9KSg/PVtcXHMuLDs6IT8pXFxdXXwkKS9nLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFJlbGF0aXZlIHBhdGhzIHdpdGggLi8gb3IgLi4vIC0gbWF0Y2ggY29tcGxldGUgcGF0aCBpbmNsdWRpbmcgZXh0ZW5zaW9uXHJcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhcXC5cXC4/Wy9cXFxcXVteXFxzPD5cInw/Kl0rKSg/PVtcXHMuLDs6IT8pXFxdXXwkKS9nLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcclxuICAgICAgXHJcbiAgICAgIC8vIExpbnV4L21hY09TIGFic29sdXRlIHBhdGhzICgvcGF0aC90by9maWxlKSAtIG1hdGNoIGNvbXBsZXRlIHBhdGggaW5jbHVkaW5nIGV4dGVuc2lvblxyXG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXFwvW15cXHM8PlwifD8qXXsxMCx9KSg/PVtcXHMuLDs6IT8pXFxdXXwkKS9nLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEhvbWUgZGlyZWN0b3JpZXMgKH4vZmlsZS5leHQpXHJcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyh+Wy9cXFxcXVteXFxzPD5cInw/Kl0rKSg/PVtcXHMuLDs6IT8pXFxdXXwkKS9nLCBwcm90ZWN0SWZXb3J0aHdoaWxlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA2LiBORVc6IFByb3RlY3QgSlNPTi9YTUwgc3RydWN0dXJlc1xyXG4gICAgaWYgKHByb3RlY3RKc29uWG1sKSB7XHJcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhcXHtbXnt9XSpcXH0pL2csIChtYXRjaCkgPT4gcHJvdGVjdElmV29ydGh3aGlsZShtYXRjaCwgMTApKTsgLy8gU2ltcGxlIEpTT05cclxuICAgICAgXHJcbiAgICAgIC8vIFhNTCBQcm90ZWN0aW9uIC0gT1BUSU1JWkVEOiBTaW5nbGUtcGFzcyBkZXB0aCBjb3VudGVyIChPKG4pIGluc3RlYWQgb2YgTyhuXHUwMEIyKSlcbiAgICAgIGNvbnN0IGZpbmRPdXRlcm1vc3RYbWwgPSAoaW5wdXQ6IHN0cmluZyk6IHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfVtdID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0czogeyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlciB9W10gPSBbXTtcbiAgICAgICAgY29uc3QgdGFnUmVnZXggPSAvPChcXC8/KShbYS16QS1aXVthLXpBLVowLTldKikoW14+XSo/KT4vZztcbiAgICAgICAgbGV0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsO1xuICAgICAgICBsZXQgZGVwdGggPSAwO1xuICAgICAgICBsZXQgbGFzdE9wZW5UYWdTdGFydCA9IC0xO1xuXG4gICAgICAgIHdoaWxlICgobWF0Y2ggPSB0YWdSZWdleC5leGVjKGlucHV0KSkgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBpc0Nsb3NpbmcgPSBtYXRjaFsxXSA9PT0gJy8nO1xuICAgICAgICAgIGNvbnN0IGZ1bGxUYWcgPSBtYXRjaFswXTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoZnVsbFRhZy5lbmRzV2l0aCgnLz4nKSkgY29udGludWU7IC8vIFNlbGYtY2xvc2luZyBkb2Vzbid0IGFmZmVjdCBkZXB0aFxuXG4gICAgICAgICAgaWYgKGlzQ2xvc2luZykge1xuICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIC8vIE9ycGhhbiBjbG9zaW5nIHRhZywgaWdub3JlXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVwdGgtLTtcbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBzdGFydDogbGFzdE9wZW5UYWdTdGFydCwgZW5kOiBtYXRjaC5pbmRleCArIGZ1bGxUYWcubGVuZ3RoIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgbGFzdE9wZW5UYWdTdGFydCA9IG1hdGNoLmluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVwdGgrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9O1xuICAgICAgY29uc3QgeG1sU3RydWN0dXJlcyA9IGZpbmRPdXRlcm1vc3RYbWwodGV4dCk7XHJcbiAgICAgIC8vIFByb3RlY3QgZnJvbSBlbmQgdG8gc3RhcnQgdG8gcHJlc2VydmUgaW5kaWNlc1xyXG4gICAgICBmb3IgKGxldCBpID0geG1sU3RydWN0dXJlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IHN0cnVjdHVyZSA9IHhtbFN0cnVjdHVyZXNbaV07XHJcbiAgICAgICAgY29uc3QgeG1sVGV4dCA9IHRleHQuc3Vic3RyaW5nKHN0cnVjdHVyZS5zdGFydCwgc3RydWN0dXJlLmVuZCk7XHJcbiAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIHN0cnVjdHVyZS5zdGFydCkgKyBcclxuICAgICAgICAgICAgICAgcHJvdGVjdElmV29ydGh3aGlsZSh4bWxUZXh0LCA1KSArIFxyXG4gICAgICAgICAgICAgICB0ZXh0LnN1YnN0cmluZyhzdHJ1Y3R1cmUuZW5kKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IENPTVBSRVNTSU9OIFBIQVNFID09PT09PT09PT09PT09PT09PT09XG5cbiAgICBsZXQgcGhyYXNlTWF0Y2hlcyA9IDA7XG4gICAgbGV0IHBocmFzZUNoYXJzU2F2ZWQgPSAwO1xuXG4gICAgLy8gVXNlIHByZS1idWlsdCBiYXRjaGVkIHJlZ2V4IChPKG4pIGluc3RlYWQgb2YgTyhuIFx1MDBENyBtKSlcbiAgICBpZiAodGhpcy5iYXRjaGVkUmVnZXggJiYgdGhpcy5yZXBsYWNlbWVudE1hcCkge1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSh0aGlzLmJhdGNoZWRSZWdleCwgKG1hdGNoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcGwgPSB0aGlzLnJlcGxhY2VtZW50TWFwIS5nZXQobWF0Y2gpO1xuICAgICAgICBjb25zdCBzYXZlZCA9IG1hdGNoLmxlbmd0aCAtIChyZXBsPy5sZW5ndGggfHwgMCk7XG4gICAgICAgIHBocmFzZU1hdGNoZXMrKztcbiAgICAgICAgcGhyYXNlQ2hhcnNTYXZlZCArPSBzYXZlZDtcbiAgICAgICAgcmV0dXJuIHJlcGwgJiYgcmVwbC50cmltKCkgIT09ICcnID8gcmVwbCA6ICcgJztcbiAgICAgIH0pO1xuICAgIH1cblxuXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IFdPUkQgRklMVEVSSU5HIFBIQVNFID09PT09PT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIC8vIEZJWEVEOiBTaW5nbGUtcGFzcyB0b2tlbml6YXRpb24gdG8gYXZvaWQgc3BsaXQvbWF0Y2ggbWlzYWxpZ25tZW50IHdoZW4gd29yZHMgYXJlIGZpbHRlcmVkIG91dC5cclxuICAgIC8vIEFsc28gcHJlc2VydmUgdHJhaWxpbmcgcHVuY3R1YXRpb24gKD8gISkgdGhyb3VnaCB0aGUgZW50aXJlIHBpcGVsaW5lIHNvIHF1ZXN0aW9ucyBzdGF5IHF1ZXN0aW9ucy5cclxuICAgIGNvbnN0IHdvcmRQYXR0ZXJuID0gL1stYS16QS1aMC05Xy4nXHUwMERGXHUwMEU0XHUwMEY2XHUwMEZDXHUwMEM0XHUwMEQ2XHUwMERDXSsvZztcclxuICAgIFxyXG4gICAgLy8gRXh0cmFjdCB0cmFpbGluZyBwdW5jdHVhdGlvbiB0aGF0IHNob3VsZCBiZSBwcmVzZXJ2ZWQgKHF1ZXN0aW9ucy9leGNsYW1hdGlvbnMpXHJcbiAgICBsZXQgdHJhaWxpbmdQdW5jdCA9ICcnO1xyXG4gICAgY29uc3QgdHJhaWxpbmdNYXRjaCA9IHRleHQubWF0Y2goLyhbPy4hXSspXFxzKiQvKTtcclxuICAgIGlmICh0cmFpbGluZ01hdGNoICYmIHRyYWlsaW5nTWF0Y2hbMV0ubGVuZ3RoID4gMCkge1xyXG4gICAgICB0cmFpbGluZ1B1bmN0ID0gdHJhaWxpbmdNYXRjaFsxXTtcclxuICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIHRleHQubGVuZ3RoIC0gdHJhaWxpbmdNYXRjaFswXS5sZW5ndGgpOyAvLyBSZW1vdmUgdHJhaWxpbmcgcHVuY3QgZnJvbSBwcm9jZXNzaW5nXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGFsbFdvcmRzID0gdGV4dC5tYXRjaCh3b3JkUGF0dGVybikgfHwgW107XHJcbiAgICBcclxuICAgIGlmIChkZWJ1Zykge1xyXG4gICAgICBjb25zb2xlLmxvZyhgW1Ryb2dsb2R5dGVdIEZvdW5kICR7YWxsV29yZHMubGVuZ3RofSB3b3JkcyBmb3IgZmlsdGVyaW5nYCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZpbHRlcmVkQ291bnQgPSAwO1xyXG4gICAgbGV0IHN5bm9ueW1Db3VudCA9IDA7XHJcbiAgICBjb25zdCBrZXB0V29yZHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBcclxuICAgIC8vIEZpbHRlciB3b3JkcyBpbi1wbGFjZSAobm8gaW50ZXJsZWF2aW5nIHdpdGggZGVsaW1pdGVycylcclxuICAgIGZvciAoY29uc3Qgd29yZCBvZiBhbGxXb3Jkcykge1xyXG4gICAgICBjb25zdCBsb3dlciA9IHdvcmQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIENoZWNrIGJsYWNrbGlzdCBmaXJzdFxyXG4gICAgICBpZiAobGV2ZWxCbGFja2xpc3QuaGFzKGxvd2VyKSkge1xyXG4gICAgICAgIGZpbHRlcmVkQ291bnQrKztcclxuICAgICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGlzIHdvcmQgZW50aXJlbHlcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gQXBwbHkgc3lub255bSByZXBsYWNlbWVudCAocmVzcGVjdHMgU21hcnQgTW9kZSlcclxuICAgICAgaWYgKHN5bm9ueW1SZXBsYWNlbWVudEVuYWJsZWQgJiYgdGhpcy5zeW5vbnltc1tsb3dlcl0pIHtcclxuICAgICAgICBzeW5vbnltQ291bnQrKztcclxuICAgICAgICBrZXB0V29yZHMucHVzaCh0aGlzLnN5bm9ueW1zW2xvd2VyXSk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEtlZXAgb3JpZ2luYWwgd29yZFxyXG4gICAgICBrZXB0V29yZHMucHVzaCh3b3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGVidWcpIHtcclxuICAgICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBCbGFja2xpc3Q6ICR7bGV2ZWxCbGFja2xpc3Quc2l6ZX0gd29yZHMsIEZpbHRlcmVkOiAke2ZpbHRlcmVkQ291bnR9LCBTeW5vbnltczogJHtzeW5vbnltQ291bnR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVjb25zdHJ1Y3QgdGV4dCBieSBpbnRlcmxlYXZpbmcgZGVsaW1pdGVycyB3aXRoIGtlcHQgd29yZHMgY29ycmVjdGx5LlxyXG4gICAgLy8gU3BsaXQgZ2l2ZXMgdXMgZGVsaW1pdGVycyAoc3BhY2VzLCBwdW5jdHVhdGlvbiksIGFuZCB3ZSBpbnRlcmxlYXZlIG9ubHkgdGhlIEtFUFQgd29yZHMuXHJcbiAgICBjb25zdCB0b2tlbnMgPSB0ZXh0LnNwbGl0KHdvcmRQYXR0ZXJuKTsgIC8vIERlbGltaXRlcnMgYmV0d2VlbiB3b3Jkc1xyXG4gICAgXHJcbiAgICBjb25zdCBmaW5hbFBhcnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgbGV0IHdvcmRJZHggPSAwO1xyXG4gICAgXHJcbiAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xyXG4gICAgICBmaW5hbFBhcnRzLnB1c2godG9rZW4pOyAvLyBBZGQgZGVsaW1pdGVyL3B1bmN0dWF0aW9uXHJcbiAgICAgIFxyXG4gICAgICBpZiAod29yZElkeCA8IGtlcHRXb3Jkcy5sZW5ndGgpIHtcclxuICAgICAgICBmaW5hbFBhcnRzLnB1c2goa2VwdFdvcmRzW3dvcmRJZHgrK10pOyAvLyBBZGQgbmV4dCBLRVBUIHdvcmQgb25seVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xlYW4gdXAgd2hpdGVzcGFjZSBhbmQgcHVuY3R1YXRpb24gYXJ0aWZhY3RzXHJcbiAgICB0ZXh0ID0gZmluYWxQYXJ0cy5qb2luKCcnKVxyXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnICcpICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS4gQ29sbGFwc2UgbXVsdGlwbGUgc3BhY2VzIHRvIG9uZSAoTVVTVCBiZSBmaXJzdClcclxuICAgICAgLnJlcGxhY2UoLyhbLiw/ITs6XSkoPz1bQS1aXHUwMERGXHUwMEM0XHUwMEQ2XHUwMERDXSkvZywgJyQxICcpICAgICAgLy8gMi4gQWRkIHNwYWNlIEFGVEVSIHNlbnRlbmNlLWVuZGluZyBwdW5jdCAoYmVmb3JlIENBUElUQUwpXHJcbiAgICAgIC50cmltKCk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIG9ycGhhbmVkIHB1bmN0dWF0aW9uIHRoYXQgc3Vydml2ZWQgZmlsdGVyaW5nIChwcmVzZXJ2ZSA/IGFuZCAhIGF0IGVuZClcclxuICAgIHRleHQgPSB0ZXh0XHJcbiAgICAgIC5yZXBsYWNlKC9cXHMrKFsuLD8hOzpdKS9nLCAnJDEnKSAgICAgICAgICAgICAgICAvLyAzLiBSZW1vdmUgc3BhY2UgQkVGT1JFIHB1bmN0dWF0aW9uXHJcbiAgICAgIC5yZXBsYWNlKC9eKFsuLD8hOzpdfFxccykrL2csICcnKSAgICAgICAgICAgICAgICAvLyA0LiBSZW1vdmUgbGVhZGluZyBwdW5jdHVhdGlvbi9zcGFjZXNcclxuICAgICAgLnJlcGxhY2UoLyhbLiw7Ol0pXFxzKiQvZywgJycpOyAgICAgICAgICAgICAgICAgIC8vIDUuIFJlbW92ZSB0cmFpbGluZyAuICwgOyA6IGJ1dCBLRUVQID8gYW5kICEgYXQgZW5kXHJcbiAgICBcclxuICAgIC8vIFJlLWFkZCBwcmVzZXJ2ZWQgdHJhaWxpbmcgcHVuY3R1YXRpb24gKHF1ZXN0aW9ucy9leGNsYW1hdGlvbnMpXHJcbiAgICBpZiAodHJhaWxpbmdQdW5jdCkge1xyXG4gICAgICB0ZXh0ID0gdGV4dCArIHRyYWlsaW5nUHVuY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gUkVTVE9SQVRJT04gUEhBU0UgPT09PT09PT09PT09PT09PT09PT1cclxuICAgIGlmIChkZWJ1Zykge1xyXG4gICAgICBjb25zb2xlLmxvZyhgW1Ryb2dsb2R5dGVdIFJlc3RvcmluZyAke3Byb3RlY3RlZEl0ZW1zLmxlbmd0aH0gcHJvdGVjdGVkIGl0ZW1zLi4uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUEVSRk9STUFOQ0UgRklYOiBTaW5nbGUtcGFzcyByZXBsYWNlbWVudCB1c2luZyBNYXAgKE8obikgaW5zdGVhZCBvZiBPKG5cdTAwQjIpKVxyXG4gICAgaWYgKHByb3RlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVwbGFjZW1lbnRzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm90ZWN0ZWRJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJlcGxhY2VtZW50cy5zZXQoU3RyaW5nLmZyb21Db2RlUG9pbnQoMHhFMDAwICsgaSksIHByb3RlY3RlZEl0ZW1zW2ldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvW1xcdUUwMDAtXFx1RjhGRl0vZywgKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdG9yZWQgPSByZXBsYWNlbWVudHMuZ2V0KG1hdGNoKTtcclxuICAgICAgICBpZiAoIXJlc3RvcmVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtUcm9nbG9keXRlXSBcdTI2QTBcdUZFMEYgUGxhY2Vob2xkZXIgJHttYXRjaC5jb2RlUG9pbnRBdCgwKSEgLSAweEUwMDB9IG5vdCBmb3VuZCFgKTtcclxuICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3RvcmVkO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBNRVRSSUNTIFJFUE9SVCA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGNvbnN0IG9yaWdpbmFsTGVuZ3RoID0gcHJvbXB0Lmxlbmd0aDtcclxuICAgIGNvbnN0IGNvbXByZXNzZWRMZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgIGNvbnN0IHNhdmluZ3MgPSBvcmlnaW5hbExlbmd0aCAtIGNvbXByZXNzZWRMZW5ndGg7XHJcbiAgICBjb25zdCBwZXJjZW50U2F2aW5ncyA9IG9yaWdpbmFsTGVuZ3RoID4gMCA/IChzYXZpbmdzIC8gb3JpZ2luYWxMZW5ndGgpICogMTAwIDogMDtcclxuXHJcbiAgICBpZiAob3B0aW9ucz8udmVyYm9zZSA/PyBmYWxzZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4nKTtcclxuICAgICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBDb21wcmVzc2lvbiBSZXBvcnQgKCR7bGV2ZWwudG9VcHBlckNhc2UoKX0pYCk7XHJcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcclxuICAgIGNvbnNvbGUubG9nKGBSZXN1bHQ6ICR7b3JpZ2luYWxMZW5ndGh9IFx1MjE5MiAke2NvbXByZXNzZWRMZW5ndGh9IGNoYXJzICgke3BlcmNlbnRTYXZpbmdzLnRvRml4ZWQoMSl9JSAke3NhdmluZ3MgPj0gMCA/ICdzYXZpbmdzJyA6ICdvdmVyaGVhZCd9KWApO1xyXG4gICAgXHJcbiAgICBjb25zdCB0cnVuY2F0ZSA9IChzOiBzdHJpbmcsIG1heCA9IDE1MCkgPT4gcy5sZW5ndGggPiBtYXggPyBgJHtzLnN1YnN0cmluZygwLCBtYXgpfS4uLmAgOiBzO1xyXG4gICAgY29uc29sZS5sb2coYFx1MjVCNiBJTlBVVDogICAgICBcIiR7dHJ1bmNhdGUocHJvbXB0KX1cImApO1xyXG4gICAgY29uc29sZS5sb2coYFx1MjVCNiBDT01QUkVTU0VEOiBcIiR7dHJ1bmNhdGUodGV4dCl9XCJgKTtcclxuICAgIFxyXG4gICAgaWYgKHBocmFzZU1hdGNoZXMgPiAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBQaHJhc2UgY29sbGFwc2luZzogJHtwaHJhc2VNYXRjaGVzfSBtYXRjaGVzLCAtJHtwaHJhc2VDaGFyc1NhdmVkfSBjaGFyc2ApO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlcmVkQ291bnQgPiAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBXb3JkIGZpbHRlcmluZzogJHtmaWx0ZXJlZENvdW50fSB3b3JkcyByZW1vdmVkLCAke3N5bm9ueW1Db3VudH0gc3lub255bXMgYXBwbGllZGApO1xyXG4gICAgfVxyXG4gICAgaWYgKHByb3RlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc29sZS5sb2coYFByb3RlY3Rpb246ICR7cHJvdGVjdGVkSXRlbXMubGVuZ3RofSBpdGVtcyBwcmVzZXJ2ZWRgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgY3VtdWxhdGl2ZVN0YXRzID0gdGhpcy5nZXRTdGF0cygpO1xyXG4gICAgY29uc3QgdG90YWxTYXZpbmdzID0gY3VtdWxhdGl2ZVN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCAtIGN1bXVsYXRpdmVTdGF0cy50b3RhbENoYXJzQ29tcHJlc3NlZDtcclxuICAgIGNvbnN0IGF2Z1NhdmluZ3NQZXJjZW50ID0gY3VtdWxhdGl2ZVN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCA+IDAgXHJcbiAgICAgID8gKHRvdGFsU2F2aW5ncyAvIGN1bXVsYXRpdmVTdGF0cy50b3RhbENoYXJzT3JpZ2luYWwpICogMTAwIDogMDtcclxuICAgIGNvbnNvbGUubG9nKGBDdW11bGF0aXZlOiAke2N1bXVsYXRpdmVTdGF0cy50b3RhbENvbXByZXNzaW9uc30gY29tcHJlc3Npb25zLCAke2F2Z1NhdmluZ3NQZXJjZW50LnRvRml4ZWQoMSl9JSBhdmcgc2F2aW5nc2ApO1xyXG4gICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4nKTtcclxuICAgIH0gLy8gRW5kIHZlcmJvc2UgYmxvY2tcclxuXHJcbiAgICAvLyBNZW1vcnkgbWFuYWdlbWVudCAocGVyLWluc3RhbmNlKVxyXG4gICAgaWYgKHRoaXMuc3RhdHMudG90YWxDb21wcmVzc2lvbnMgPj0gdGhpcy5NQVhfQ09NUFJFU1NJT05TX0JFRk9SRV9SRVNFVCB8fCBcclxuICAgICAgICB0aGlzLnN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCA+PSB0aGlzLk1BWF9DSEFSU19CRUZPUkVfUkVTRVQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tUcm9nbG9keXRlXSBTdGF0cyB0aHJlc2hvbGQgcmVhY2hlZCwgcmVzZXR0aW5nJyk7XHJcbiAgICAgIHRoaXMuc3RhdHMgPSBjcmVhdGVTdGF0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhdHMudG90YWxDb21wcmVzc2lvbnMrKztcclxuICAgIHRoaXMuc3RhdHMudG90YWxDaGFyc09yaWdpbmFsICs9IHByb21wdC5sZW5ndGg7XHJcbiAgICB0aGlzLnN0YXRzLnRvdGFsQ2hhcnNDb21wcmVzc2VkICs9IHRleHQubGVuZ3RoO1xyXG4gICAgdGhpcy5zdGF0cy5sYXN0VXBkYXRlZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcclxuXHJcbiAgICByZXR1cm4gdGV4dDtcclxuICB9XHJcblxyXG4gIGdldFN0YXRzKCk6IENvbXByZXNzaW9uU3RhdHMgJiB7IHRvdGFsU2F2aW5nczogbnVtYmVyOyBzYXZpbmdzUGVyY2VudDogbnVtYmVyIH0ge1xyXG4gICAgY29uc3QgdG90YWxTYXZpbmdzID0gdGhpcy5zdGF0cy50b3RhbENoYXJzT3JpZ2luYWwgLSB0aGlzLnN0YXRzLnRvdGFsQ2hhcnNDb21wcmVzc2VkO1xyXG4gICAgY29uc3Qgc2F2aW5nc1BlcmNlbnQgPSB0aGlzLnN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCA+IDAgXHJcbiAgICAgID8gTWF0aC5yb3VuZCgodG90YWxTYXZpbmdzIC8gdGhpcy5zdGF0cy50b3RhbENoYXJzT3JpZ2luYWwpICogMTAwKSA6IDA7XHJcbiAgICBcclxuICAgIHJldHVybiB7IC4uLnRoaXMuc3RhdHMsIHRvdGFsU2F2aW5ncywgc2F2aW5nc1BlcmNlbnQgfTtcclxuICB9XHJcblxyXG4gIHJlc2V0U3RhdHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXRzID0gY3JlYXRlU3RhdHMoKTtcclxuICB9XHJcbn1cclxuIiwgImV4cG9ydCBjb25zdCBwaHJhc2VzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAvLyA9PT09PT09PT09PT09PT09PT09PSBFTkdMSVNIIFBIUkFTRVMgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBQb2xpdGUgb3BlbmVyc1xuICAnSGVsbG8gdGhlcmUnOiAnJyxcbiAgJ0hlbGxvJzogJycsXG4gICdIaSc6ICcnLFxuICAnSGV5JzogJycsXG4gICdHb29kIG1vcm5pbmcnOiAnJyxcbiAgJ0dvb2QgYWZ0ZXJub29uJzogJycsXG4gICdHb29kIGV2ZW5pbmcnOiAnJyxcblxuICAvLyBQb2xpdGUgY2xvc2Vyc1xuICAnVGhhbmsgeW91JzogJycsXG4gICdUaGFua3MnOiAnJyxcbiAgJ1RoYW5rIHlvdSBzbyBtdWNoJzogJycsXG4gICdUaGFua3MgYSBsb3QnOiAnJyxcbiAgJ3NvIG11Y2gnOiAnJyxcblxuICAnSSBhcHByZWNpYXRlIGl0JzogJycsXG4gICdJIGFwcHJlY2lhdGUgeW91ciBoZWxwJzogJycsXG5cbiAgLy8gUG9saXRlIHJlcXVlc3RzXG4gICdJIHdvdWxkIHJlYWxseSBhcHByZWNpYXRlIGl0IGlmIHlvdSBjb3VsZCc6ICcnLFxuICAnSSB3b3VsZCBhcHByZWNpYXRlIGl0IGlmIHlvdSBjb3VsZCc6ICcnLFxuICAnQ291bGQgeW91IHBsZWFzZSc6ICcnLFxuICAnQ2FuIHlvdSBwbGVhc2UnOiAnJyxcbiAgJ1BsZWFzZSc6ICcnLFxuICBcIklmIHlvdSBkb24ndCBtaW5kXCI6ICcnLFxuICAnSWYgeW91IGNvdWxkJzogJycsXG5cbiAgLy8gUm9sZS1wbGF5aW5nXG4gICdJIHdvdWxkIGxpa2UgeW91IHRvIGFjdCBhcyc6ICdCZScsXG4gICdBY3QgYXMgYSc6ICdCZScsXG4gICdBY3QgYXMnOiAnQmUnLFxuICAnUHJldGVuZCB0byBiZSc6ICdCZScsXG4gICdZb3UgYXJlIGEnOiAnQmUnLFxuICAnWW91IGFyZSc6ICdCZScsXG5cbiAgLy8gRmlsbGVyIHBocmFzZXNcbiAgJ0kgYW0gdHJ5aW5nIHRvIGZpZ3VyZSBvdXQnOiAnTmVlZCcsXG4gICdJIGFtIHRyeWluZyB0byc6ICdOZWVkJyxcbiAgJ0kgd2FudCB0byc6ICdOZWVkJyxcbiAgJ0kgbmVlZCB0byc6ICdOZWVkJyxcbiAgJ0kgd291bGQgbGlrZSB0byc6ICdOZWVkJyxcbiAgJ0kgd291bGQgbGlrZSc6ICdOZWVkJyxcbiAgJ0kgd2FudCc6ICdOZWVkJyxcbiAgJ0kgbmVlZCc6ICdOZWVkJyxcbiAgJ0kgaGF2ZSBhIHF1ZXN0aW9uIGFib3V0JzogJ1F1ZXN0aW9uJyxcbiAgJ0kgaGF2ZSBhIHF1ZXN0aW9uJzogJ1F1ZXN0aW9uJyxcbiAgJ015IHF1ZXN0aW9uIGlzJzogJ1F1ZXN0aW9uJyxcbiAgJ1RoZSBxdWVzdGlvbiBpcyc6ICdRdWVzdGlvbicsXG4gICdJIGFtIHdvbmRlcmluZyc6ICcnLFxuICAnSSB3YXMgd29uZGVyaW5nJzogJycsXG4gICdJIGFtIGN1cmlvdXMnOiAnQ3VyaW91cycsXG5cbiAgLy8gUmVkdW5kYW50IHBocmFzZXNcbiAgJ0R1ZSB0byB0aGUgZmFjdCB0aGF0JzogJ0JlY2F1c2UnLFxuICAnSW4gb3JkZXIgdG8nOiAnVG8nLFxuICAnSW4gdGhlIGV2ZW50IHRoYXQnOiAnSWYnLFxuICAnRm9yIHRoZSBwdXJwb3NlIG9mJzogJ1RvJyxcbiAgJ0F0IHRoaXMgcG9pbnQgaW4gdGltZSc6ICdOb3cnLFxuICAnQXQgdGhpcyBtb21lbnQnOiAnTm93JyxcbiAgJ0luIG15IG9waW5pb24nOiAnSU1PJyxcbiAgJ0luIG15IGh1bWJsZSBvcGluaW9uJzogJ0lNTycsXG4gICdBcyBmYXIgYXMgSSBrbm93JzogJ0FGQUlLJyxcbiAgJ0FzIGZhciBhcyBJIGNhbiB0ZWxsJzogJ0FGQUlDVCcsXG4gICdJdCBpcyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0JzogJ05vdGUnLFxuICAnSXQgaXMgd29ydGggbm90aW5nIHRoYXQnOiAnTm90ZScsXG4gICdJdCBzaG91bGQgYmUgbm90ZWQgdGhhdCc6ICdOb3RlJyxcbiAgJ0l0IGlzIHdvcnRoIG1lbnRpb25pbmcgdGhhdCc6ICdOb3RlJyxcbiAgJ0l0IGdvZXMgd2l0aG91dCBzYXlpbmcgdGhhdCc6ICcnLFxuICAnTmVlZGxlc3MgdG8gc2F5JzogJycsXG4gICdBcyBhIG1hdHRlciBvZiBmYWN0JzogJ0FjdHVhbGx5JyxcbiAgJ0FzIGEgbWF0dGVyIG9mJzogJycsXG5cbiAgLy8gVGVjaG5pY2FsIGZpbGxlclxuICAnTWFrZSBzdXJlIHRoYXQnOiAnRW5zdXJlJyxcbiAgJ01ha2Ugc3VyZSc6ICdFbnN1cmUnLFxuICAnRW5zdXJlIHRoYXQnOiAnRW5zdXJlJyxcbiAgJ01ha2UgY2VydGFpbiB0aGF0JzogJ0Vuc3VyZScsXG4gICdNYWtlIGNlcnRhaW4nOiAnRW5zdXJlJyxcbiAgJ0l0IGlzIHJlcXVpcmVkIHRoYXQnOiAnUmVxdWlyZWQnLFxuICAnSXQgaXMgcmVxdWlyZWQnOiAnUmVxdWlyZWQnLFxuICAnSXQgaXMgbmVjZXNzYXJ5JzogJ1JlcXVpcmVkJyxcbiAgJ0l0IGlzIGltcG9ydGFudCc6ICdJbXBvcnRhbnQnLFxuICAnSXQgaXMgY3J1Y2lhbCc6ICdDcnVjaWFsJyxcbiAgJ0l0IGlzIGVzc2VudGlhbCc6ICdFc3NlbnRpYWwnLFxuXG4gIC8vIENvZGUtcmVsYXRlZFxuICAndGhlIGZvbGxvd2luZyBjb2RlJzogJ2NvZGUnLFxuICAndGhlIGZvbGxvd2luZyBzbmlwcGV0JzogJ3NuaXBwZXQnLFxuICAndGhlIGZvbGxvd2luZyBleGFtcGxlJzogJ2V4YW1wbGUnLFxuICAndGhlIGZvbGxvd2luZyc6ICcnLFxuICAndGhlIGFib3ZlJzogJycsXG4gICdiZWxvdyBpcyc6ICcnLFxuICAnYWJvdmUgaXMnOiAnJyxcblxuICAvLyBMb2dpYyBzeW1ib2xzIC0gUkVNT1ZFRDogVGhlc2UgYnJlYWsgbmF0dXJhbCBsYW5ndWFnZSFcbiAgLy8gJ25vdCc6ICchJyxcbiAgLy8gJ2FuZCc6ICcmJicsXG4gIC8vICdvcic6ICd8fCcsXG4gIC8vICdlcXVhbHMnOiAnPT0nLFxuICAvLyAnZXF1YWwgdG8nOiAnPT0nLFxuICAvLyAnaXMgZXF1YWwgdG8nOiAnPT0nLFxuICAvLyAnZ3JlYXRlciB0aGFuJzogJz4nLFxuICAvLyAnbGVzcyB0aGFuJzogJzwnLFxuICAvLyAnZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvJzogJz49JyxcbiAgLy8gJ2xlc3MgdGhhbiBvciBlcXVhbCB0byc6ICc8PScsXG4gIC8vICdub3QgZXF1YWwgdG8nOiAnIT0nLFxuICAvLyAnZG9lcyBub3QgZXF1YWwnOiAnIT0nLFxuXG4gIC8vIENvbW1vbiBBSSBwcm9tcHQgcGF0dGVybnNcbiAgJ3N0ZXAgYnkgc3RlcCc6ICdzdGVwcycsXG4gICdzdGVwLWJ5LXN0ZXAnOiAnc3RlcHMnLFxuICAnaW4gZGV0YWlsJzogJ2RldGFpbGVkJyxcbiAgJ2luIG1vcmUgZGV0YWlsJzogJ2RldGFpbGVkJyxcbiAgJ2V4cGxhaW4gaW4gZGV0YWlsJzogJ2V4cGxhaW4gZGV0YWlsZWQnLFxuICAncHJvdmlkZSBhJzogJycsXG4gICdwcm92aWRlJzogJycsXG4gICdnaXZlIG1lJzogJycsXG4gICdnaXZlJzogJycsXG4gICdzaG93IG1lJzogJ3Nob3cnLFxuICAndGVsbCBtZSc6ICd0ZWxsJyxcbiAgJ2NhbiB5b3UgdGVsbCBtZSc6ICd0ZWxsJyxcbiAgJ2NvdWxkIHlvdSB0ZWxsIG1lJzogJ3RlbGwnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IEdFUk1BTiBQSFJBU0VTID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gR2VybWFuIHBvbGl0ZSBvcGVuZXJzXG4gICdIYWxsbyc6ICcnLFxuICAnR3V0ZW4gTW9yZ2VuJzogJycsXG4gICdHdXRlbiBUYWcnOiAnJyxcbiAgJ0d1dGVuIEFiZW5kJzogJycsXG4gICdIYWxsbyB6dXNhbW1lbic6ICcnLFxuXG4gIC8vIEdlcm1hbiBwb2xpdGUgY2xvc2Vyc1xuICAnRGFua2UnOiAnJyxcbiAgJ0RhbmtlIHNjaFx1MDBGNm4nOiAnJyxcbiAgJ1ZpZWxlbiBEYW5rJzogJycsXG4gICdIZXJ6bGljaGVuIERhbmsnOiAnJyxcbiAgJ0RhbmtlIGltIFZvcmF1cyc6ICcnLFxuICAnSWNoIGRhbmtlIElobmVuJzogJycsXG5cbiAgLy8gR2VybWFuIHBvbGl0ZSByZXF1ZXN0c1xuICAnQml0dGUnOiAnJyxcbiAgJ0tcdTAwRjZubnRlbiBTaWUgYml0dGUnOiAnJyxcbiAgJ0tcdTAwRjZubmVuIFNpZSBiaXR0ZSc6ICcnLFxuICAnS1x1MDBGNm5udGVzdCBkdSBiaXR0ZSc6ICcnLFxuICAnS2FubnN0IGR1IGJpdHRlJzogJycsXG4gICdJY2ggd1x1MDBGQ3JkZSBiaXR0ZW4nOiAnJyxcbiAgJ0hcdTAwRTR0dGVuIFNpZSBkaWUgRnJldW5kbGljaGtlaXQnOiAnJyxcblxuICAvLyBHZXJtYW4gcm9sZS1wbGF5aW5nIC8gaW5zdHJ1Y3Rpb25zXG4gICdJY2ggbVx1MDBGNmNodGUsIGRhc3MgU2llIGFnaWVyZW4gYWxzJzogJ1NlaScsXG4gICdBZ2llcmVuIFNpZSBhbHMnOiAnU2VpJyxcbiAgJ0FnaWVyZW4gYWxzJzogJ1NlaScsXG4gICdUdW4gU2llIHNvIGFscyBvYic6ICdTZWknLFxuICAnU2llIHNpbmQgZWluJzogJ1NlaScsXG4gICdTaWUgc2luZCc6ICdTZWknLFxuICAnTmVobWVuIFNpZSBkaWUgUm9sbGUgYW4gdm9uJzogJ1NlaScsXG5cbiAgLy8gR2VybWFuIGZpbGxlciBwaHJhc2VzXG4gICdJY2ggdmVyc3VjaGUgaGVyYXVzenVmaW5kZW4nOiAnTmVlZCcsXG4gICdJY2ggdmVyc3VjaGUgenUnOiAnTmVlZCcsXG4gICdJY2ggbVx1MDBGNmNodGUnOiAnTmVlZCcsXG4gICdJY2ggd1x1MDBGQ3JkZSBnZXJuZSc6ICdOZWVkJyxcbiAgJ0ljaCBicmF1Y2hlJzogJ05lZWQnLFxuICAnSWNoIGhhYmUgZWluZSBGcmFnZSc6ICdRdWVzdGlvbicsXG4gICdNZWluZSBGcmFnZSBpc3QnOiAnUXVlc3Rpb24nLFxuICAnRGllIEZyYWdlIGlzdCc6ICdRdWVzdGlvbicsXG4gICdJY2ggZnJhZ2UgbWljaCc6ICcnLFxuICAnSWNoIGJpbiBuZXVnaWVyaWcnOiAnQ3VyaW91cycsXG5cbiAgLy8gR2VybWFuIHJlZHVuZGFudCBwaHJhc2VzXG4gICdBdWZncnVuZCBkZXIgVGF0c2FjaGUsIGRhc3MnOiAnV2VpbCcsXG4gICdVbSB6dSc6ICdUbycsXG4gICdadSBkZW0gWndlY2snOiAnVG8nLFxuICAnSW4gZGllc2VtIE1vbWVudCc6ICdOb3cnLFxuICAnQW4gZGllc2VyIFN0ZWxsZSc6ICdOb3cnLFxuICAnTWVpbmVyIE1laW51bmcgbmFjaCc6ICdJTU8nLFxuICAnRWhybGljaCBnZXNhZ3QnOiAnJyxcbiAgJ1VtIGVocmxpY2ggenUgc2Vpbic6ICcnLFxuICAnRWlnZW50bGljaCc6ICcnLFxuICAnVGF0c1x1MDBFNGNobGljaCc6ICcnLFxuXG4gIC8vIEdlcm1hbiB0ZWNobmljYWwgZmlsbGVyXG4gICdTdGVsbGVuIFNpZSBzaWNoZXIsIGRhc3MnOiAnRW5zdXJlJyxcbiAgJ1N0ZWxsZW4gU2llIHNpY2hlcic6ICdFbnN1cmUnLFxuICAnU2ljaGVyc3RlbGxlbiwgZGFzcyc6ICdFbnN1cmUnLFxuICAnRXMgaXN0IHdpY2h0aWcnOiAnSW1wb3J0YW50JyxcbiAgJ0VzIGlzdCBub3R3ZW5kaWcnOiAnUmVxdWlyZWQnLFxuICAnRXMgaXN0IGVyZm9yZGVybGljaCc6ICdSZXF1aXJlZCcsXG5cbiAgLy8gR2VybWFuIGNvZGUtcmVsYXRlZFxuICAnZGVyIGZvbGdlbmRlIENvZGUnOiAnY29kZScsXG4gICdkZXIgZm9sZ2VuZGUgU25pcHBldCc6ICdzbmlwcGV0JyxcbiAgJ2RhcyBmb2xnZW5kZSBCZWlzcGllbCc6ICdleGFtcGxlJyxcbiAgJ2ZvbGdlbmRlcyc6ICcnLFxuICAnb2Jlbic6ICcnLFxuICAndW50ZW4nOiAnJyxcblxuICAvLyBHZXJtYW4gbG9naWMgc3ltYm9scyAtIFJFTU9WRUQ6IFRoZXNlIGJyZWFrIG5hdHVyYWwgbGFuZ3VhZ2UhXG4gIC8vICd1bmQnOiAnJiYnLFxuICAvLyAnb2Rlcic6ICd8fCcsXG4gIC8vICduaWNodCc6ICchJyxcbiAgLy8gJ2dsZWljaCc6ICc9PScsXG4gIC8vICdpc3QgZ2xlaWNoJzogJz09JyxcbiAgLy8gJ2dyXHUwMEY2XHUwMERGZXIgYWxzJzogJz4nLFxuICAvLyAna2xlaW5lciBhbHMnOiAnPCcsXG4gIC8vICdnclx1MDBGNlx1MDBERmVyIG9kZXIgZ2xlaWNoJzogJz49JyxcbiAgLy8gJ2tsZWluZXIgb2RlciBnbGVpY2gnOiAnPD0nLFxuICAvLyAndW5nbGVpY2gnOiAnIT0nLFxuXG4gIC8vIEdlcm1hbiBjb21tb24gcGF0dGVybnNcbiAgJ1NjaHJpdHQgZlx1MDBGQ3IgU2Nocml0dCc6ICdzdGVwcycsXG4gICdpbSBEZXRhaWwnOiAnZGV0YWlsZWQnLFxuICAnZXJrbFx1MDBFNHJlIGltIERldGFpbCc6ICdleHBsYWluIGRldGFpbGVkJyxcbiAgJ2dlYmVuIFNpZSBtaXInOiAnJyxcbiAgJ3plaWdlbiBTaWUgbWlyJzogJ3Nob3cnLFxuICAnc2FnZW4gU2llIG1pcic6ICd0ZWxsJyxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBCVUlMRCBMT0cgLyBDT01QSUxFUiBPVVRQVVQgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBCdWlsZCBzdGF0dXMgYm9pbGVycGxhdGUgKEVuZ2xpc2gpXG4gICdCdWlsZCBzdGFydGVkJzogJycsXG4gICdCdWlsZCBjb21wbGV0ZWQnOiAnJyxcbiAgJ0J1aWxkaW5nJzogJycsXG4gICdDb21waWxpbmcnOiAnJyxcbiAgJ0xpbmtpbmcnOiAnJyxcbiAgJ0dlbmVyYXRpbmcnOiAnJyxcbiAgJ0NyZWF0aW5nJzogJycsXG4gICdTdWNjZXNzZnVsbHknOiAnJyxcbiAgJ3N1Y2Nlc3NmdWxseSc6ICcnLFxuICAnRXJyb3InOiAnRScsXG4gICdXYXJuaW5nJzogJ1cnLFxuICAnTm90ZSc6ICdOJyxcblxuICAvLyBJbmNsdWRlIGNoYWluIG5vaXNlIChtb3N0IGNvbW1vbiBidWlsZCBsb2cgZmlsbGVyKVxuICAnSW4gZmlsZSBpbmNsdWRlZCBmcm9tJzogJ2luYycsXG4gICdpbmNsdWRlZCBmcm9tJzogJ2luYycsXG4gICdmcm9tJzogJycsXG5cbiAgLy8gUHJvamVjdC9jb25maWd1cmF0aW9uIGJvaWxlcnBsYXRlXG4gICdQcm9qZWN0Oic6ICdQcm9qOicsXG4gICdDb25maWd1cmF0aW9uOic6ICdDZmc6JyxcbiAgJ1BsYXRmb3JtOic6ICdQbGF0OicsXG4gICdUYXJnZXQ6JzogJ1RndDonLFxuXG4gIC8vIEJ1aWxkIHJlc3VsdCBzdW1tYXJpZXNcbiAgJ3N1Y2Nlc3NmdWwnOiAnb2snLFxuICAnZXJyb3JzJzogJ2VycicsXG4gICd3YXJuaW5ncyc6ICd3YXJuJyxcbiAgJ3VwIHRvIGRhdGUnOiAndXBkYXRlZCcsXG4gICdza2lwcGVkJzogJ3NraXAnLFxuXG4gIC8vIFRpbWUvZHVyYXRpb24gYm9pbGVycGxhdGVcbiAgJ3Rvb2snOiAnJyxcbiAgJ3NlY29uZHMnOiAncycsXG4gICdtaWxsaXNlY29uZHMnOiAnbXMnLFxuICAnc3RhcnRlZCBhdCc6ICcnLFxuICAnY29tcGxldGVkIGF0JzogJycsXG4gICdkdXJhdGlvbjonOiAnJyxcblxuICAvLyBMaW5lIG51bWJlciBpbmRpY2F0b3JzIChyZWR1bmRhbnQgd2l0aCBhY3R1YWwgbGluZSBudW1iZXJzKVxuICAnYXQgbGluZSc6ICcnLFxuICAnb24gbGluZSc6ICcnLFxuICAnY29sdW1uJzogJ2NvbCcsXG5cbiAgLy8gVmFyaWFibGUvZnVuY3Rpb24gdHlwZSBkZXNjcmlwdG9yc1xuICAndmFyaWFibGUnOiAndmFyJyxcbiAgJ2Z1bmN0aW9uJzogJ2ZuJyxcbiAgJ3BhcmFtZXRlcic6ICdwYXJhbScsXG4gICdhcmd1bWVudCc6ICdhcmcnLFxuICAnZXhwcmVzc2lvbic6ICdleHByJyxcbiAgJ3N0YXRlbWVudCc6ICdzdG10JyxcbiAgJ2RlY2xhcmF0aW9uJzogJ2RlY2wnLFxuICAnZGVmaW5pdGlvbic6ICdkZWYnLFxuICAndHlwZSc6ICd0eXAnLFxuXG4gIC8vIENvbW1vbiBlcnJvci93YXJuaW5nIHByZWZpeGVzXG4gICdlcnJvcjonOiAnRTonLFxuICAnd2FybmluZzonOiAnVzonLFxuICAnbm90ZTonOiAnTjonLFxuICAnZmF0YWwgZXJyb3I6JzogJ0ZFOicsXG4gICdlcnJvciBDJzogJ0MnLFxuICAnd2FybmluZyBDJzogJ1dDJyxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBHRVJNQU4gQlVJTEQgTE9HID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gR2VybWFuIGJ1aWxkIHN0YXR1c1xuICAnRXJzdGVsbGVuIGdlc3RhcnRldCc6ICcnLFxuICAnRXJzdGVsbGVuIGFiZ2VzY2hsb3NzZW4nOiAnJyxcbiAgJ0Vyc3RlbGx1bmcgd3VyZGUnOiAnJyxcbiAgJ1Byb2pla3Q6JzogJ1Byb2o6JyxcbiAgJ0tvbmZpZ3VyYXRpb246JzogJ0NmZzonLFxuICAnZXJmb2xncmVpY2gnOiAnb2snLFxuICAnRmVobGVyJzogJ0UnLFxuICAnV2FybnVuZyc6ICdXJyxcbiAgJ0hpbndlaXMnOiAnTicsXG4gICdha3R1ZWxsJzogJ3VwdG9kYXRlJyxcbiAgJ1x1MDBGQ2JlcnNwcnVuZ2VuJzogJ3NraXAnLFxuICAnZGF1ZXJ0ZSc6ICcnLFxuICAnU2VrdW5kZW4nOiAncycsXG4gICd1bSc6ICcnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IE1TVkMgR0VSTUFOIEVSUk9SIE1FU1NBR0VTID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gTW9zdCBjb21tb24gcmVwZWF0ZWQgZXJyb3IgbWVzc2FnZXMgKEdlcm1hbiBcdTIxOTIgRW5nbGlzaCBzaG9ydGhhbmQpXG4gICduaWNodGRla2xhcmllcnRlciBCZXplaWNobmVyJzogJ3VuZGVjbGFyZWQgaWRlbnQnLFxuICAnRmVobGVuZGVyIFR5cHNwZXppZml6aWVyZXInOiAnbWlzc2luZyB0eXBlIHNwZWMnLFxuICAnU3ludGF4ZmVobGVyJzogJ3N5bnRheCBlcnInLFxuICAnRGF0ZWkga2FubiBuaWNodCBnZVx1MDBGNmZmbmV0IHdlcmRlbic6ICdjYW5ub3Qgb3BlbiBmaWxlJyxcbiAgJ0RpZXNlIFZlcndlbmR1bmcgdm9uIGlzdCB1bmdcdTAwRkNsdGlnJzogJ2ludmFsaWQgdXNlIG9mJyxcbiAgJ0JlemVpY2huZXIgd3VyZGUgbmljaHQgZ2VmdW5kZW4nOiAnaWRlbnQgbm90IGZvdW5kJyxcblxuICAvLyBNU1ZDIGVycm9yIG1lc3NhZ2UgZnJhZ21lbnRzXG4gICdpbnQgd2lyZCBhbmdlbm9tbWVuJzogJ2ludCBhc3N1bWVkJyxcbiAgJ2RlZmF1bHQtaW50IHdpcmQgdm9uIEMrKyBuaWNodCB1bnRlcnN0XHUwMEZDdHp0JzogJ25vIGRlZmF1bHQtaW50IGluIEMrKycsXG4gICdGZWhsZW5kZXMgdm9yJzogXCJtaXNzaW5nICc7JyBiZWZvcmVcIixcbiAgJ0luY2x1ZGUga2FubiBuaWNodCBnZVx1MDBGNmZmbmV0IHdlcmRlbic6ICdpbmNsdWRlIGNhbm5vdCBvcGVuJyxcbiAgJ05vIHN1Y2ggZmlsZSBvciBkaXJlY3RvcnknOiAnZmlsZSBub3QgZm91bmQnLFxuXG4gIC8vIEJ1aWxkIHJlc3VsdCBzdW1tYXJpZXMgKEdlcm1hbiBNU1ZDKVxuICAnQWxsZSBuZXUgZXJzdGVsbGVuJzogJ1JlYnVpbGQnLFxuICAnbmV1IGVyc3RlbGxlbic6ICdyZWJ1aWxkJyxcbiAgJ2ZlaGxnZXNjaGxhZ2VuJzogJ2ZhaWwnLFxuICAnTmV1IGVyc3RlbGxlbiBhYmdlc2NobG9zc2VuJzogJycsXG4gICd1bmQgZGF1ZXJ0ZSc6ICcnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IENMQU5HL0dDQyBCVUlMRCBMT0cgUEFUVEVSTlMgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBXYXJuaW5nIGNvdW50IHN1bW1hcmllcyAocmVwZWF0ZWQgYWZ0ZXIgZWFjaCB3YXJuaW5nKVxuICAnd2FybmluZyBnZW5lcmF0ZWQnOiAnJyxcbiAgJ3dhcm5pbmdzIGdlbmVyYXRlZCc6ICcnLFxuICAnZXJyb3IgZ2VuZXJhdGVkJzogJycsXG4gICdlcnJvcnMgZ2VuZXJhdGVkJzogJycsXG5cbiAgLy8gSW5jbHVkZSBwYXRoIHdhcm5pbmdzXG4gICdyZXNvbHZlZCB1c2luZyBub24tcG9ydGFibGUgTWljcm9zb2Z0IHNlYXJjaCBydWxlcyBhczonOiAnbm9uLXBvcnRhYmxlIGluY2x1ZGU6JyxcbiAgJyNpbmNsdWRlIHJlc29sdmVkIHVzaW5nIG5vbi1wb3J0YWJsZSBNaWNyb3NvZnQgc2VhcmNoIHJ1bGVzIGFzOic6ICdub24tcG9ydGFibGUgaW5jbHVkZTonLFxuXG4gIC8vIFVudXNlZCB2YXJpYWJsZS9mdW5jdGlvbiB3YXJuaW5nc1xuICAndW51c2VkIHZhcmlhYmxlJzogJ3Vuc2QgdmFyJyxcbiAgJ3VudXNlZCBmdW5jdGlvbic6ICd1bnNkIGZuJyxcbiAgJ3NldCBidXQgbm90IHVzZWQnOiAnc2V0IHVudXNlZCcsXG5cbiAgLy8gR2VybWFuIGJ1aWxkIHN0YXR1cyAoQ2xhbmcvTExWTSlcbiAgJ0RpZSBOZXVlcnN0ZWxsdW5nIHd1cmRlJzogJycsXG4gICdOZXVlcyBFcnN0ZWxsZW4gZ2VzdGFydGV0JzogJycsXG4gICdnZXN0YXJ0ZXQ6IFByb2pla3Q6JzogJ1Byb2o6Jyxcbn07XG4iLCAiLyoqXG4gKiBTeW5vbnltIHJlcGxhY2VtZW50cyBmb3IgcHJvbXB0IGNvbXByZXNzaW9uLlxuICogXG4gKiBDUklURVJJQTogT25seSByZWFsLCB3aWRlbHktcmVjb2duaXplZCBhYmJyZXZpYXRpb25zIHRoYXQgcHJlc2VydmUgbWVhbmluZy5cbiAqIC0gTm8gbm9uLXdvcmRzIChlLmcuLCBcImltcGxpbmdcIiwgXCJuZXdlZFwiKVxuICogLSBObyBzZW1hbnRpYyBpbnZlcnNlcyAoZS5nLiwgXCJpbXBsZW1lbnRlZFwiIFx1MjE5MiBcImltcGxpZWRcIilcbiAqIC0gTm8gYW1iaWd1b3VzIHNob3J0IGZvcm1zIChlLmcuLCBcIm9wdFwiIGNvdWxkIG1lYW4gXCJjaG9vc2VcIilcbiAqL1xuXG5leHBvcnQgY29uc3Qgc3lub255bXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIC8vID09PT09PT09PT09PT09PT09PT09IEVOR0xJU0ggVEVDSE5JQ0FMIFRFUk1TID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gV2VsbC1lc3RhYmxpc2hlZCBhYmJyZXZpYXRpb25zIG9ubHlcbiAgJ2FwcGxpY2F0aW9uJzogJ2FwcCcsXG4gICdhcHBsaWNhdGlvbnMnOiAnYXBwcycsXG4gICdpbmZvcm1hdGlvbic6ICdpbmZvJyxcbiAgJ2Vudmlyb25tZW50JzogJ2VudicsXG4gICdlbnZpcm9ubWVudHMnOiAnZW52cycsXG4gICdjb25maWd1cmF0aW9uJzogJ2NvbmZpZycsXG4gICdjb25maWd1cmF0aW9ucyc6ICdjb25maWdzJyxcbiAgJ2RvY3VtZW50YXRpb24nOiAnZG9jcycsXG4gIFxuICAvLyBWZXJicyBcdTIxOTIgaW5maW5pdGl2ZS9nZXJ1bmQgZm9ybXMgKHJlYWwgd29yZHMpXG4gICd1dGlsaXphdGlvbic6ICd1c2UnLFxuICAndXRpbGl6ZSc6ICd1c2UnLFxuICAndXRpbGl6ZXMnOiAndXNlcycsXG4gICd1dGlsaXppbmcnOiAndXNpbmcnLFxuICAndXRpbGl6ZWQnOiAndXNlZCcsXG4gICdpbXBsZW1lbnRhdGlvbic6ICdpbXBsJyxcbiAgJ2ltcGxlbWVudGF0aW9ucyc6ICdpbXBscycsXG4gICdpbXBsZW1lbnQnOiAnaW1wbCcsXG4gICdpbXBsZW1lbnRzJzogJ2ltcGxzJyxcbiAgJ2luaXRpYWxpemF0aW9uJzogJ2luaXQnLFxuICAnaW5pdGlhbGl6ZSc6ICdpbml0JyxcbiAgJ2luaXRpYWxpemVzJzogJ2luaXRzJyxcbiAgJ2luaXRpYWxpemluZyc6ICdpbml0aW5nJyxcbiAgJ2luaXRpYWxpemVkJzogJ2luaXRlZCcsXG4gICdzeW5jaHJvbml6YXRpb24nOiAnc3luYycsXG4gICdzeW5jaHJvbml6ZSc6ICdzeW5jJyxcbiAgJ3N5bmNocm9uaXplcyc6ICdzeW5jcycsXG4gICdzeW5jaHJvbml6aW5nJzogJ3N5bmNpbmcnLFxuICAnc3luY2hyb25pemVkJzogJ3N5bmNlZCcsXG4gICdhdXRoZW50aWNhdGlvbic6ICdhdXRoJyxcbiAgJ2F1dGhlbnRpY2F0ZSc6ICdhdXRoJyxcbiAgJ2F1dGhlbnRpY2F0ZXMnOiAnYXV0aHMnLFxuICAnYXV0aG9yaXphdGlvbic6ICdhdXRoeicsXG4gICdhdXRob3JpemUnOiAnYXV0aHonLFxuICAnYXV0aG9yaXplcyc6ICdhdXRoenMnLFxuICBcbiAgLy8gU2FmZSB2ZXJiIHJlcGxhY2VtZW50cyAocmVhbCB3b3JkcylcbiAgJ3BlcmZvcm1pbmcnOiAnZG9pbmcnLFxuICAncGVyZm9ybWVkJzogJ2RpZCcsXG4gICdleGVjdXRpbmcnOiAncnVubmluZycsXG4gICdleGVjdXRlZCc6ICdyYW4nLFxuICAnZXN0YWJsaXNoaW5nJzogJ3NldHRpbmcnLFxuICAnZXN0YWJsaXNoZWQnOiAnc2V0JyxcbiAgJ3Byb3ZpZGluZyc6ICdnaXZpbmcnLFxuICAncHJvdmlkZWQnOiAnZ2l2ZW4nLFxuICAnb2J0YWluaW5nJzogJ2dldHRpbmcnLFxuICAnb2J0YWluZWQnOiAnZ290JyxcbiAgJ2FjcXVpcmluZyc6ICdnZXR0aW5nJyxcbiAgJ2FjcXVpcmVkJzogJ2dvdCcsXG4gICdyZXRyaWV2aW5nJzogJ2dldHRpbmcnLFxuICAncmV0cmlldmVkJzogJ2dvdCcsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gRU5HTElTSCBHRU5FUkFMIFRFUk1TID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gQ29uanVuY3Rpb25zL2FkdmVyYnMgXHUyMTkyIHNob3J0ZXIgcmVhbCB3b3Jkc1xuICAnaG93ZXZlcic6ICdidXQnLFxuICAndGhlcmVmb3JlJzogJ3NvJyxcbiAgJ2NvbnNlcXVlbnRseSc6ICdzbycsXG4gICd0aHVzJzogJ3NvJyxcbiAgJ2hlbmNlJzogJ3NvJyxcbiAgJ2FsdGhvdWdoJzogJ3Rob3VnaCcsXG4gIFxuICAvLyBQcmVwb3NpdGlvbnMgXHUyMTkyIHN0YW5kYXJkIGFiYnJldmlhdGlvbnMgKHVzZWQgaW4gbm90ZXMsIG5vdCBwcm9zZSlcbiAgJ3JlZ2FyZGluZyc6ICdyZScsXG4gICdjb25jZXJuaW5nJzogJ3JlJyxcbiAgJ3Jlc3BlY3RpbmcnOiAncmUnLFxuICAncGVydGFpbmluZyc6ICdyZScsXG4gICdyZWxhdGluZyc6ICdyZScsXG5cbiAgLy8gQ29tbW9uIHdvcmRzIFx1MjE5MiByZWNvZ25pemVkIHNob3J0aGFuZFxuICAndGhyb3VnaCc6ICd0aHJ1JyxcbiAgJ3VudGlsJzogJ3RpbCcsXG4gICd3aXRob3V0JzogJ3cvbycsXG4gICdiZXR3ZWVuJzogJ2J0d24nLFxuICAnYXBwcm94aW1hdGVseSc6ICdhcHByb3gnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IEdFUk1BTiBURUNITklDQUwgVEVSTVMgPT09PT09PT09PT09PT09PT09PT1cblxuICAnYW53ZW5kdW5nJzogJ2FwcCcsXG4gICdhbndlbmR1bmdlbic6ICdhcHBzJyxcbiAgJ2luZm9ybWF0aW9uZW4nOiAnaW5mb3MnLFxuICAndW1nZWJ1bmcnOiAnZW52JyxcbiAgJ2tvbmZpZ3VyYXRpb24nOiAnY29uZmlnJyxcbiAgJ2Rva3VtZW50YXRpb24nOiAnZG9jcycsXG4gICdmdW5rdGlvbmFsaXRcdTAwRTR0JzogJ2Z1bmMnLFxuICAnaW1wbGVtZW50aWVydW5nJzogJ2ltcGwnLFxuICAnaW5pdGlhbGlzaWVydW5nJzogJ2luaXQnLFxuICAnb3B0aW1pZXJ1bmcnOiAnb3B0JyxcbiAgJ3N5bmNocm9uaXNhdGlvbic6ICdzeW5jJyxcbiAgJ2F1dGhlbnRpZml6aWVydW5nJzogJ2F1dGgnLFxuICAnYXV0b3Jpc2F0aW9uJzogJ2F1dGh6JyxcbiAgJ2lkZW50aWZpa2F0aW9uJzogJ2lkJyxcbiAgJ2tvbW11bmlrYXRpb24nOiAnY29tbScsXG5cbiAgLy8gR2VybWFuIHZlcmJzIFx1MjAxNCByZW1vdmVkIG5vLW9wIGVudHJpZXMgKHdvcmRzIG1hcHBpbmcgdG8gdGhlbXNlbHZlcylcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBTQUZFIEJVSUxEL0RFViBURVJNUyAoUkVBTCBBQkJSRVZJQVRJT05TKSA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIE9ubHkga2VlcCB0ZXJtcyB3aGVyZSB0aGUgYWJicmV2aWF0aW9uIGlzIHVuaXZlcnNhbGx5IHJlY29nbml6ZWQgaW4gZGV2IGNvbnRleHRzXG4gICdkaXJlY3RvcnknOiAnZGlyJyxcbiAgJ2RpcmVjdG9yaWVzJzogJ2RpcnMnLFxuICAncGFyYW1ldGVyJzogJ3BhcmFtJywgICAgICAgLy8gXCJwcm1cIiBpcyBub3Qgc3RhbmRhcmRcbiAgJ3BhcmFtZXRlcnMnOiAncGFyYW1zJyxcbiAgJ2FyZ3VtZW50JzogJ2FyZycsXG4gICdhcmd1bWVudHMnOiAnYXJncycsXG4gICdleHByZXNzaW9uJzogJ2V4cHInLFxuICAnZXhwcmVzc2lvbnMnOiAnZXhwcnMnLFxuICAnc3RhdGVtZW50JzogJ3N0bXQnLFxuICAnc3RhdGVtZW50cyc6ICdzdG10cycsXG4gICdkZWNsYXJhdGlvbic6ICdkZWNsJyxcbiAgJ2RlY2xhcmF0aW9ucyc6ICdkZWNscycsXG4gICdkZWZpbml0aW9uJzogJ2RlZicsXG4gICdkZWZpbml0aW9ucyc6ICdkZWZzJyxcbiAgJ2luc3RhbmNlJzogJ2luc3QnLFxuICAnaW5zdGFuY2VzJzogJ2luc3RzJyxcblxuICAvLyBFcnJvci93YXJuaW5nIHR5cGVzIFx1MjAxNCBrZWVwIGZ1bGwgd29yZHMsIHRoZXkncmUgYWxyZWFkeSBzaG9ydFxuICAndW5kZWZpbmVkJzogJ3VuZGVmaW5lZCcsICAgLy8gXCJ1bmRlZlwiIGlzIG5vdCBzdGFuZGFyZCBpbiBwcm9zZVxuICAndW5yZXNvbHZlZCc6ICd1bnJlc29sdmVkJyxcbiAgJ2luY29tcGxldGUnOiAnaW5jb21wbGV0ZScsXG4gICd1bnVzZWQnOiAndW51c2VkJyxcbiAgJ2RlcHJlY2F0ZWQnOiAnZGVwcmVjYXRlZCcsXG4gICdvYnNvbGV0ZSc6ICdvYnNvbGV0ZScsXG4gICdyZWR1bmRhbnQnOiAncmVkdW5kYW50JyxcbiAgJ2R1cGxpY2F0ZSc6ICdkdXBsaWNhdGUnLFxuICAnY29uZmxpY3QnOiAnY29uZmxpY3QnLFxuICAnYW1iaWd1b3VzJzogJ2FtYmlndW91cycsXG5cbiAgLy8gRmlsZS9wYXRoIHJlbGF0ZWQgXHUyMDE0IGtlZXAgZnVsbCwgdGhleSdyZSBhbHJlYWR5IHNob3J0XG4gICdmb2xkZXInOiAnZm9sZGVyJywgICAgICAgICAvLyBcImZsZHJcIiBpcyBub3Qgc3RhbmRhcmRcbiAgJ3BhdGgnOiAncGF0aCcsICAgICAgICAgICAgIC8vIFwicHRoXCIgaXMgYW1iaWd1b3VzIChjb3VsZCBiZSBcInBhdGhzXCIpXG4gICdwYXRocyc6ICdwYXRocycsXG4gICdzb3VyY2UnOiAnc291cmNlJywgICAgICAgICAvLyBcInNyY1wiIGlzIGEgZGlyZWN0b3J5IG5hbWUsIG5vdCBhIHN5bm9ueW0gZm9yIFwic291cmNlXCJcbiAgJ3NvdXJjZXMnOiAnc291cmNlcycsXG4gICdoZWFkZXInOiAnaGVhZGVyJywgICAgICAgICAvLyBcImhkclwiIGlzIGZpbGUgZXh0ZW5zaW9uIGNvbnRleHQgb25seVxuICAnaGVhZGVycyc6ICdoZWFkZXJzJyxcbiAgJ2luY2x1ZGUnOiAnaW5jbHVkZScsICAgICAgIC8vIFwiaW5jXCIgaXMgYW1iaWd1b3VzIChjb3VsZCBiZSBcImluY29tZVwiKVxuICAnaW5jbHVkZXMnOiAnaW5jbHVkZXMnLFxuXG4gIC8vIEdlcm1hbiBidWlsZCB0ZXJtcyBcdTIwMTQga2VlcCBmdWxsLCBhYmJyZXZpYXRpb25zIGFyZSBub3Qgc3RhbmRhcmQgaW4gcHJvc2VcbiAgJ2Vyc3RlbGx1bmcnOiAnZXJzdGVsbHVuZycsXG4gICdrb21waWxpZXJlbic6ICdrb21waWxpZXJlbicsXG4gICd2ZXJrblx1MDBGQ3BmZW4nOiAndmVya25cdTAwRkNwZmVuJyxcbiAgJ2ZlaGxlcic6ICdmZWhsZXInLFxuICAnd2FybnVuZyc6ICd3YXJudW5nJyxcbiAgJ2hpbndlaXMnOiAnaGlud2VpcycsXG4gICdxdWVsbGUnOiAncXVlbGxlJyxcbiAgJ3ppZWwnOiAnemllbCcsXG4gICd2ZXJ6ZWljaG5pcyc6ICd2ZXJ6ZWljaG5pcycsXG5cbiAgLy8gTVNWQyBHZXJtYW4gZXJyb3IgdGVybXMgXHUyMDE0IGtlZXAgZnVsbCAodGhlc2UgYXJlIHByb3BlciBub3Vucy90ZWNobmljYWwgdGVybXMpXG4gICdiZXplaWNobmVyJzogJ2JlemVpY2huZXInLFxuICAndHlwc3BlemlmaXppZXJlcic6ICd0eXBzcGV6aWZpemllcmVyJyxcbiAgJ3N5bnRheGZlaGxlcic6ICdzeW50YXhmZWhsZXInLFxuICAnZGVrbGFyaWVydGVyJzogJ2Rla2xhcmllcnRlcicsXG4gICd1bmdcdTAwRkNsdGlnJzogJ3VuZ1x1MDBGQ2x0aWcnLFxuICAnYW5nZW5vbW1lbic6ICdhbmdlbm9tbWVuJyxcbiAgJ3VudGVyc3RcdTAwRkN0enQnOiAndW50ZXJzdFx1MDBGQ3R6dCcsXG4gICdnZVx1MDBGNmZmbmV0JzogJ2dlXHUwMEY2ZmZuZXQnLFxuICAndmVyd2VuZHVuZyc6ICd2ZXJ3ZW5kdW5nJyxcbiAgJ2dlZnVuZGVuJzogJ2dlZnVuZGVuJyxcbiAgJ2ZlaGx0JzogJ2ZlaGx0JyxcbiAgJ2ZlaGxlbmRlcyc6ICdmZWhsZW5kZXMnLFxuXG4gIC8vIFdhcm5pbmcgdGVybXMgXHUyMDE0IGtlZXAgZnVsbFxuICAnbmV1ZXJzdGVsbHVuZyc6ICduZXVlcnN0ZWxsdW5nJyxcbn07XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29uZmlnU2NoZW1hdGljcyB9IGZyb20gXCJAbG1zdHVkaW8vc2RrXCI7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBzY2hlbWEgZm9yIHRoZSBUcm9nbG9keXRlIHBsdWdpbi5cbiAqIERlZmluZXMgVUkgc2V0dGluZ3MgdGhhdCB1c2VycyBjYW4gY3VzdG9taXplIGluIExNIFN0dWRpby5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbmZpZ1NjaGVtYXRpY3MgPSBjcmVhdGVDb25maWdTY2hlbWF0aWNzKClcbiAgLy8gQ29yZSBjb21wcmVzc2lvbiBzZXR0aW5nc1xuICAuZmllbGQoXG4gICAgXCJjb21wcmVzc2lvbkxldmVsXCIsXG4gICAgXCJzZWxlY3RcIixcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogXCJDb21wcmVzc2lvbiBMZXZlbFwiLFxuICAgICAgaGludDogXCJIb3cgYWdncmVzc2l2ZWx5IHRvIGNvbXByZXNzIHByb21wdHMuIEdlbnRsZSBwcmVzZXJ2ZXMgbW9yZSB3b3JkcywgQWdncmVzc2l2ZSBtYXhpbWl6ZXMgdG9rZW4gc2F2aW5ncy5cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB2YWx1ZTogXCJnZW50bGVcIiwgZGlzcGxheU5hbWU6IFwiR2VudGxlICh+MjAtMzAlIHJlZHVjdGlvbilcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcImJhbGFuY2VkXCIsIGRpc3BsYXlOYW1lOiBcIkJhbGFuY2VkICh+NDUlIHJlZHVjdGlvbilcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcImFnZ3Jlc3NpdmVcIiwgZGlzcGxheU5hbWU6IFwiQWdncmVzc2l2ZSAofjYwLTcwJSByZWR1Y3Rpb24pXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBcImJhbGFuY2VkXCIsXG4gIClcbiAgLy8gU21hcnQgTW9kZSAoTkVXKVxuICAuZmllbGQoXG4gICAgXCJzbWFydE1vZGVcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogXCJTbWFydCBNb2RlIChDb250ZXh0LUF3YXJlKVwiLFxuICAgICAgaGludDogXCJBdXRvbWF0aWNhbGx5IGRldGVjdHMgaWYgdGhlIHByb21wdCBpcyB0ZWNobmljYWwgb3IgY29udmVyc2F0aW9uYWwgYW5kIGFkanVzdHMgY29tcHJlc3Npb24gcnVsZXMgYWNjb3JkaW5nbHkuXCIsXG4gICAgfSxcbiAgICB0cnVlLFxuICApXG4gIC8vIFByb3RlY3Rpb24gb3B0aW9uc1xuICAuZmllbGQoXG4gICAgXCJwcm90ZWN0VXJsc1wiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlByb3RlY3QgVVJMcyAmIExpbmtzXCIsXG4gICAgICBoaW50OiBcIlByZXNlcnZlIFVSTHMgYW5kIHdlYiBsaW5rcyBpbnRhY3QgZHVyaW5nIGNvbXByZXNzaW9uLlwiLFxuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKVxuICAuZmllbGQoXG4gICAgXCJwcm90ZWN0TnVtYmVyc1wiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlByb3RlY3QgVmVyc2lvbiBOdW1iZXJzICYgSURzXCIsXG4gICAgICBoaW50OiBcIktlZXAgdmVyc2lvbiBudW1iZXJzICh2MS4wLjApLCBpc3N1ZSByZWZlcmVuY2VzICgjMTIzNCksIGFuZCBVVUlEcyBpbnRhY3QuXCIsXG4gICAgfSxcbiAgICB0cnVlLFxuICApXG4gIC5maWVsZChcbiAgICBcInByb3RlY3RIZWFkZXJzXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiUHJvdGVjdCBNYXJrZG93biBIZWFkZXJzXCIsXG4gICAgICBoaW50OiBcIlByZXNlcnZlICMgSGVhZGVyIHN0cnVjdHVyZSBpbiBtYXJrZG93biBkb2N1bWVudHMuXCIsXG4gICAgfSxcbiAgICB0cnVlLFxuICApXG4gIC5maWVsZChcbiAgICBcInByb3RlY3RGaWxlUGF0aHNcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogXCJQcm90ZWN0IEZpbGUgUGF0aHNcIixcbiAgICAgIGhpbnQ6IFwiS2VlcCBmaWxlIHBhdGhzIGludGFjdCAocHJldmVudHMgJ1NvdXJjZScgXHUyMTkyICdzcmMnIGNvcnJ1cHRpb24pLlwiLFxuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKVxuICAvLyBORVc6IFByb3RlY3QgU3RydWN0dXJlZCBEYXRhXG4gIC5maWVsZChcbiAgICBcInByb3RlY3RKc29uWG1sXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiUHJvdGVjdCBKU09OL1hNTCBTdHJ1Y3R1cmVzXCIsXG4gICAgICBoaW50OiBcIlByZXNlcnZlIHN0cnVjdHVyZWQgZGF0YSBmb3JtYXRzIGxpa2UgSlNPTiBhbmQgWE1MIGZyb20gYmVpbmcgbWFuZ2xlZC5cIixcbiAgICB9LFxuICAgIHRydWUsXG4gIClcbiAgLy8gTGFuZ3VhZ2Ugc2V0dGluZ3NcbiAgLmZpZWxkKFxuICAgIFwibGFuZ3VhZ2VNb2RlXCIsXG4gICAgXCJzZWxlY3RcIixcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogXCJMYW5ndWFnZSBNb2RlXCIsXG4gICAgICBoaW50OiBcIlNlbGVjdCB0aGUgbGFuZ3VhZ2UgZm9yIGNvbXByZXNzaW9uIG9yIGVuYWJsZSBhdXRvLWRldGVjdGlvbi4gQ3VycmVudGx5IHN1cHBvcnRzIEVuZ2xpc2ggYW5kIEdlcm1hbiBvbmx5LlwiLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7IHZhbHVlOiBcImF1dG9cIiwgZGlzcGxheU5hbWU6IFwiXHVEODNEXHVERDBEIEF1dG8tRGV0ZWN0IChFTi9ERSlcIiB9LFxuICAgICAgICB7IHZhbHVlOiBcImVuXCIsIGRpc3BsYXlOYW1lOiBcIlx1RDgzQ1x1RERFQ1x1RDgzQ1x1RERFNyBFbmdsaXNoXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJkZVwiLCBkaXNwbGF5TmFtZTogXCJcdUQ4M0NcdURERTlcdUQ4M0NcdURERUEgR2VybWFuXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBcImF1dG9cIixcbiAgKVxuICAvLyBEaXNwbGF5IG9wdGlvbnNcbiAgLmZpZWxkKFxuICAgIFwic2hvd1N0YXRzXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiU2hvdyBTdGF0aXN0aWNzIGluIENvbnNvbGVcIixcbiAgICAgIGhpbnQ6IFwiRGlzcGxheSBjb21wcmVzc2lvbiBzdGF0aXN0aWNzIGFmdGVyIGVhY2ggbWVzc2FnZS5cIixcbiAgICB9LFxuICAgIHRydWUsXG4gIClcbiAgLmJ1aWxkKCk7XG5cbi8qKlxuICogVHlwZSByZXByZXNlbnRpbmcgdGhlIHBsdWdpbiBjb25maWd1cmF0aW9uIHZhbHVlcy5cbiAqL1xuZXhwb3J0IHR5cGUgUGx1Z2luQ29uZmlnID0gdHlwZW9mIGNvbmZpZ1NjaGVtYXRpY3M7XG4iLCAiaW1wb3J0IHsgdHlwZSBQcm9tcHRQcmVwcm9jZXNzb3JDb250cm9sbGVyLCB0eXBlIENoYXRNZXNzYWdlIH0gZnJvbSBcIkBsbXN0dWRpby9zZGtcIjtcbmltcG9ydCB7IFRyb2dsb2R5dGUsIHR5cGUgQ29tcHJlc3Npb25MZXZlbCB9IGZyb20gJy4vdHJvZ2xvZHl0ZSc7XG5pbXBvcnQgeyBwaHJhc2VzIH0gZnJvbSAnLi9kaWN0aW9uYXJpZXMvcGhyYXNlcyc7XG5pbXBvcnQgeyBzeW5vbnltcyB9IGZyb20gJy4vZGljdGlvbmFyaWVzL3N5bm9ueW1zJztcbmltcG9ydCB7IGNvbmZpZ1NjaGVtYXRpY3MgfSBmcm9tICcuL2NvbmZpZyc7XG5cbi8vIEluaXRpYWxpemUgVHJvZ2xvZHl0ZSB3aXRoIGRpY3Rpb25hcmllc1xuY29uc3QgdHJvZ2xvZHl0ZSA9IG5ldyBUcm9nbG9keXRlKHtcbiAgcGhyYXNlcyxcbiAgYmxhY2tsaXN0OiBbXSwgLy8gQmxhY2tsaXN0IG5vdyBoYW5kbGVkIGludGVybmFsbHkgYnkgY29tcHJlc3Npb24gbGV2ZWxcbiAgc3lub255bXMsXG59KTtcblxuLyoqXG4gKiBFeHRyYWN0cyBvbmx5IHRoZSBhY3R1YWwgdXNlciBpbnB1dCBmcm9tIGEgbWVzc2FnZSB0aGF0IG1heSBjb250YWluIHN5c3RlbSBtZXRhZGF0YS5cbiAqIFN5c3RlbSBtZXRhZGF0YSBtYXJrZXJzOiBbWmVpdDosICoqU1lTVEVNRU1QRkVITFVORzoqKiwgU1lTVEVNRU1QRkVITFVORyFcbiAqXG4gKiBOT1RFOiBJZiBhIG1hcmtlciBhcHBlYXJzIG1pZC1zZW50ZW5jZSwgb25seSB0ZXh0IEJFRk9SRSBpdCBpcyBwcm9jZXNzZWQuXG4gKiBUZXh0IGFmdGVyIHRoZSBtYXJrZXIgaXMgcHJlc2VydmVkIGJ1dCBwYXNzZWQgdGhyb3VnaCB1bmNvbXByZXNzZWQuXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RVc2VySW5wdXQodGV4dDogc3RyaW5nKTogeyB1c2VySW5wdXQ6IHN0cmluZzsgaGFzU3lzdGVtTWV0YWRhdGE6IGJvb2xlYW4gfSB7XG4gIC8vIExvb2sgZm9yIHN5c3RlbSBtZXRhZGF0YSBtYXJrZXJzIC0gdHJ5IG11bHRpcGxlIHBhdHRlcm5zXG4gIGNvbnN0IHplaXRNYXRjaCA9IHRleHQubWF0Y2goL1xcW1plaXQ6XFxzKi8pO1xuICBjb25zdCBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gxID0gdGV4dC5tYXRjaCgvXFwqXFwqU1lTVEVNRU1QRkVITFVORzpcXCpcXCovKTsgIC8vIFdpdGggYXN0ZXJpc2tzIGFuZCBjb2xvblxuICBjb25zdCBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gyID0gdGV4dC5tYXRjaCgvU1lTVEVNRU1QRkVITFVORyEvKTsgICAgICAgICAgIC8vIFdpdGhvdXQgYXN0ZXJpc2tzLCB3aXRoIGV4Y2xhbWF0aW9uXG5cbiAgbGV0IG1hcmtlckluZGV4ID0gLTE7XG5cbiAgLy8gRmluZCB0aGUgZWFybGllc3QgbWF0Y2hpbmcgbWFya2VyXG4gIGlmICh6ZWl0TWF0Y2gpIHtcbiAgICBtYXJrZXJJbmRleCA9IHplaXRNYXRjaC5pbmRleCA/PyAtMTtcbiAgfVxuICBpZiAoc3lzdGVtRW1wZmVobHVuZ01hdGNoMSAmJiBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gxLmluZGV4ICE9IG51bGwpIHtcbiAgICBjb25zdCBpZHggPSBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gxLmluZGV4O1xuICAgIGlmIChtYXJrZXJJbmRleCA9PT0gLTEgfHwgaWR4IDwgbWFya2VySW5kZXgpIHtcbiAgICAgIG1hcmtlckluZGV4ID0gaWR4O1xuICAgIH1cbiAgfVxuICBpZiAoc3lzdGVtRW1wZmVobHVuZ01hdGNoMiAmJiBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gyLmluZGV4ICE9IG51bGwpIHtcbiAgICBjb25zdCBpZHggPSBzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gyLmluZGV4O1xuICAgIGlmIChtYXJrZXJJbmRleCA9PT0gLTEgfHwgaWR4IDwgbWFya2VySW5kZXgpIHtcbiAgICAgIG1hcmtlckluZGV4ID0gaWR4O1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIG5vIHN5c3RlbSBtZXRhZGF0YSBmb3VuZCwgcmV0dXJuIGZ1bGwgdGV4dFxuICBpZiAobWFya2VySW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIHsgdXNlcklucHV0OiB0ZXh0LCBoYXNTeXN0ZW1NZXRhZGF0YTogZmFsc2UgfTtcbiAgfVxuXG4gIC8vIEV4dHJhY3QgZXZlcnl0aGluZyBiZWZvcmUgdGhlIGZpcnN0IHN5c3RlbSBtZXRhZGF0YSBtYXJrZXJcbiAgY29uc3QgdXNlcklucHV0ID0gdGV4dC5zdWJzdHJpbmcoMCwgbWFya2VySW5kZXgpLnRyaW0oKTtcblxuICAvLyBTYWZldHk6IGlmIHVzZXJJbnB1dCBpcyBlbXB0eSBidXQgdGV4dCBpc24ndCwgdGhlIG1hcmtlciB3YXMgYXQgdGhlIHN0YXJ0IFx1MjAxNCBwcm9jZXNzIGZ1bGwgdGV4dFxuICBpZiAoIXVzZXJJbnB1dCAmJiB0ZXh0LnRyaW0oKSkge1xuICAgIHJldHVybiB7IHVzZXJJbnB1dDogdGV4dCwgaGFzU3lzdGVtTWV0YWRhdGE6IGZhbHNlIH07XG4gIH1cblxuICByZXR1cm4geyB1c2VySW5wdXQsIGhhc1N5c3RlbU1ldGFkYXRhOiB0cnVlIH07XG59XG5cblxuLyoqXG4gKiBQcm9tcHQgUHJlcHJvY2Vzc29yIC0gQ29tcHJlc3NlcyB1c2VyIHByb21wdHMgYnkgcmVtb3ZpbmcgZmx1ZmYgYW5kIGZpbGxlciB3b3Jkcy5cbiAqIFJlZHVjZXMgdG9rZW4gdXNhZ2UgYnkgfjQ1JSB3aGlsZSBwcmVzZXJ2aW5nIGNvcmUgbWVhbmluZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZXByb2Nlc3MoY3RsOiBQcm9tcHRQcmVwcm9jZXNzb3JDb250cm9sbGVyLCB1c2VyTWVzc2FnZTogQ2hhdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAvLyBIYW5kbGUgYWJvcnQgc2lnbmFsIC0gZXhpdCBlYXJseSBpZiBwcmVwcm9jZXNzaW5nIHdhcyBjYW5jZWxsZWRcbiAgaWYgKGN0bC5hYm9ydFNpZ25hbC5hYm9ydGVkKSB7XG4gICAgcmV0dXJuIHVzZXJNZXNzYWdlLmdldFRleHQoKTtcbiAgfVxuXG4gIC8vIFJlYWQgYWxsIGNvbmZpZ3VyYXRpb24gZnJvbSBwbHVnaW4gY29uZmlnXG4gIGNvbnN0IHBsdWdpbkNvbmZpZyA9IGN0bC5nZXRQbHVnaW5Db25maWcoY29uZmlnU2NoZW1hdGljcyk7XG4gIFxuICBjb25zdCBjb21wcmVzc2lvbkxldmVsOiBDb21wcmVzc2lvbkxldmVsID0gKHBsdWdpbkNvbmZpZy5nZXQoXCJjb21wcmVzc2lvbkxldmVsXCIpIGFzIENvbXByZXNzaW9uTGV2ZWwpID8/IFwiYmFsYW5jZWRcIjtcbiAgY29uc3Qgc21hcnRNb2RlID0gcGx1Z2luQ29uZmlnLmdldChcInNtYXJ0TW9kZVwiKSBhcyBib29sZWFuID8/IHRydWU7IC8vIE5FV1xuICBjb25zdCBwcm90ZWN0VXJscyA9IHBsdWdpbkNvbmZpZy5nZXQoXCJwcm90ZWN0VXJsc1wiKSBhcyBib29sZWFuID8/IHRydWU7XG4gIGNvbnN0IHByb3RlY3ROdW1iZXJzID0gcGx1Z2luQ29uZmlnLmdldChcInByb3RlY3ROdW1iZXJzXCIpIGFzIGJvb2xlYW4gPz8gdHJ1ZTtcbiAgY29uc3QgcHJvdGVjdEhlYWRlcnMgPSBwbHVnaW5Db25maWcuZ2V0KFwicHJvdGVjdEhlYWRlcnNcIikgYXMgYm9vbGVhbiA/PyB0cnVlO1xuICBjb25zdCBwcm90ZWN0RmlsZVBhdGhzID0gcGx1Z2luQ29uZmlnLmdldChcInByb3RlY3RGaWxlUGF0aHNcIikgYXMgYm9vbGVhbiA/PyB0cnVlO1xuICBjb25zdCBwcm90ZWN0SnNvblhtbCA9IHBsdWdpbkNvbmZpZy5nZXQoXCJwcm90ZWN0SnNvblhtbFwiKSBhcyBib29sZWFuID8/IHRydWU7IC8vIE5FV1xuICBjb25zdCBsYW5ndWFnZU1vZGUgPSBwbHVnaW5Db25maWcuZ2V0KFwibGFuZ3VhZ2VNb2RlXCIpIGFzIHN0cmluZyA/PyBcImF1dG9cIjtcbiAgLy8gU3RhdHMgYWx3YXlzIHNob3duIC0gaGFyZGNvZGVkIGZvciB2aXNpYmlsaXR5XG4gIGNvbnN0IHNob3dTdGF0cyA9IHRydWU7XG5cbiAgLy8gQ3JlYXRlIHN0YXR1cyByZXBvcnQgZm9yIFVJIGZlZWRiYWNrXG4gIGNvbnN0IHN0YXR1cyA9IGN0bC5jcmVhdGVTdGF0dXMoe1xuICAgIHN0YXR1czogXCJsb2FkaW5nXCIgYXMgY29uc3QsXG4gICAgdGV4dDogYENvbXByZXNzaW5nIHByb21wdCAoJHtjb21wcmVzc2lvbkxldmVsfSkuLi5gLFxuICB9KTtcblxuICBsZXQgY29tcHJlc3NlZFRleHQgPSB1c2VyTWVzc2FnZS5nZXRUZXh0KCk7IC8vIERlZmF1bHQgdG8gb3JpZ2luYWwgdGV4dFxuXG4gIHRyeSB7XG4gICAgY29uc3QgZnVsbFRleHQgPSB1c2VyTWVzc2FnZS5nZXRUZXh0KCk7XG4gICAgXG4gICAgLy8gT1BUSU9OIDIgRklYOiBFeHRyYWN0IG9ubHkgYWN0dWFsIHVzZXIgaW5wdXQsIHNraXAgc3lzdGVtIG1ldGFkYXRhXG4gICAgY29uc3QgeyB1c2VySW5wdXQsIGhhc1N5c3RlbU1ldGFkYXRhIH0gPSBleHRyYWN0VXNlcklucHV0KGZ1bGxUZXh0KTtcbiAgICBcbiAgICBpZiAoc2hvd1N0YXRzICYmIGhhc1N5c3RlbU1ldGFkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhgW1Ryb2dsb2R5dGVdIERldGVjdGVkIHN5c3RlbSBtZXRhZGF0YS4gUHJvY2Vzc2luZyAke3VzZXJJbnB1dC5sZW5ndGh9IGNoYXJzIG9mIHVzZXIgaW5wdXQgKHNraXBwZWQgJHtmdWxsVGV4dC5sZW5ndGggLSB1c2VySW5wdXQubGVuZ3RofSBjaGFycyBvZiBtZXRhZGF0YSlgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQ29tcHJlc3Mgb25seSB0aGUgYWN0dWFsIHVzZXIgaW5wdXRcbiAgICBjb25zdCBjb21wcmVzc2VkVXNlcklucHV0ID0gdHJvZ2xvZHl0ZS5jb21wcmVzcyh1c2VySW5wdXQsIHsgXG4gICAgICBsZXZlbDogY29tcHJlc3Npb25MZXZlbCxcbiAgICAgIHByb3RlY3RVcmxzLFxuICAgICAgcHJvdGVjdE51bWJlcnMsXG4gICAgICBwcm90ZWN0SGVhZGVycyxcbiAgICAgIHByb3RlY3RGaWxlUGF0aHMsXG4gICAgICBwcm90ZWN0SnNvblhtbCwgLy8gTkVXXG4gICAgICBzbWFydE1vZGUsICAgICAgLy8gTkVXXG4gICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VNb2RlICE9PSBcImF1dG9cIiA/IChsYW5ndWFnZU1vZGUgYXMgaW1wb3J0KCcuL3Ryb2dsb2R5dGUnKS5MYW5ndWFnZUNvZGUpIDogdW5kZWZpbmVkLFxuICAgICAgdmVyYm9zZTogc2hvd1N0YXRzLCAvLyBQYXNzIHNob3dTdGF0cyBhcyB2ZXJib3NlIGZsYWdcbiAgICB9KTtcblxuICAgIC8vIFJlY29uc3RydWN0IHRoZSBmdWxsIG1lc3NhZ2Ugd2l0aCBjb21wcmVzc2VkIHVzZXIgaW5wdXQgKyBvcmlnaW5hbCBzeXN0ZW0gbWV0YWRhdGFcbiAgICBjb25zdCBzeXN0ZW1NZXRhZGF0YSA9IGhhc1N5c3RlbU1ldGFkYXRhID8gZnVsbFRleHQuc3Vic3RyaW5nKHVzZXJJbnB1dC5sZW5ndGgpIDogJyc7XG4gICAgY29tcHJlc3NlZFRleHQgPSBjb21wcmVzc2VkVXNlcklucHV0ICsgc3lzdGVtTWV0YWRhdGE7XG5cbiAgICAvLyBDYWxjdWxhdGUgY29tcHJlc3Npb24gc3RhdHMgKG9ubHkgb24gdXNlciBpbnB1dCBwb3J0aW9uKVxuICAgIGNvbnN0IG9yaWdpbmFsTGVuZ3RoID0gdXNlcklucHV0Lmxlbmd0aDtcbiAgICBjb25zdCBjb21wcmVzc2VkTGVuZ3RoID0gY29tcHJlc3NlZFVzZXJJbnB1dC5sZW5ndGg7XG4gICAgY29uc3Qgc2F2aW5ncyA9IE1hdGgucm91bmQoKChvcmlnaW5hbExlbmd0aCAtIGNvbXByZXNzZWRMZW5ndGgpIC8gb3JpZ2luYWxMZW5ndGgpICogMTAwKTtcblxuICAgIC8vIEdldCBjdW11bGF0aXZlIHN0YXRpc3RpY3NcbiAgICBjb25zdCBjdW11bGF0aXZlU3RhdHMgPSB0cm9nbG9keXRlLmdldFN0YXRzKCk7XG5cbiAgICAvLyBEZXRhaWxlZCBsb2dnaW5nIGlzIG5vdyBoYW5kbGVkIGluIHRyb2dsb2R5dGUudHMgdG8gYXZvaWQgZHVwbGljYXRpb25cbiAgICAvLyBhbmQgdG8gaW5jbHVkZSB0aGUgbmV3IFx1MjVCNiBJTlBVVCAvIFx1MjVCNiBDT01QUkVTU0VEIGRlYnVnIGxpbmVzLlxuXG4gICAgLy8gVXBkYXRlIHN0YXR1cyB0byBjb21wbGV0ZWQgd2l0aCBkZXRhaWxlZCBpbmZvXG4gICAgY29uc3QgcHJvdGVjdGlvbkluZm8gPSBbXTtcbiAgICBpZiAocHJvdGVjdFVybHMpIHByb3RlY3Rpb25JbmZvLnB1c2goXCJVUkxzXCIpO1xuICAgIGlmIChwcm90ZWN0TnVtYmVycykgcHJvdGVjdGlvbkluZm8ucHVzaChcIklEc1wiKTtcbiAgICBcbiAgICBsZXQgc3RhdHVzVGV4dCA9IGBDb21wcmVzc2VkIGJ5ICR7c2F2aW5nc30lYDtcbiAgICBpZiAocHJvdGVjdGlvbkluZm8ubGVuZ3RoID4gMCkge1xuICAgICAgc3RhdHVzVGV4dCArPSBgIHwgUHJvdGVjdGluZzogJHtwcm90ZWN0aW9uSW5mby5qb2luKCcsICcpfWA7XG4gICAgfVxuICAgIGlmIChzbWFydE1vZGUpIHtcbiAgICAgIHN0YXR1c1RleHQgKz0gXCIgfCBTbWFydCBNb2RlXCI7IC8vIE5FV1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBzdGF0dXMgd2l0aCBjb21wcmVzc2lvbiByYXRlXG4gICAgc3RhdHVzLnNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogXCJkb25lXCIsXG4gICAgICB0ZXh0OiBgQ29tcHJlc3NlZCBieSAke3NhdmluZ3N9JWAsXG4gICAgfSk7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbVHJvZ2xvZHl0ZV0gQ29tcHJlc3Npb24gZmFpbGVkOicsIGVycm9yKTtcbiAgICAvLyBLZWVwIG9yaWdpbmFsIHRleHQgb24gZXJyb3JcbiAgfVxuXG4gIHJldHVybiBjb21wcmVzc2VkVGV4dDtcbn1cbiIsICJpbXBvcnQgeyB0eXBlIFBsdWdpbkNvbnRleHQgfSBmcm9tIFwiQGxtc3R1ZGlvL3Nka1wiO1xuaW1wb3J0IHsgcHJlcHJvY2VzcyB9IGZyb20gXCIuL3Byb21wdFByZXByb2Nlc3NvclwiO1xuaW1wb3J0IHsgY29uZmlnU2NoZW1hdGljcyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG4vKipcbiAqIE1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSBUcm9nbG9keXRlIHBsdWdpbi5cbiAqIFJlZ2lzdGVycyB0aGUgcHJvbXB0IHByZXByb2Nlc3NvciBhbmQgY29uZmlndXJhdGlvbiB3aXRoIExNIFN0dWRpby5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4oY29udGV4dDogUGx1Z2luQ29udGV4dCkge1xuICAvLyBSZWdpc3RlciB0aGUgY29uZmlndXJhdGlvbiBzY2hlbWF0aWNzIChlbmFibGVzIFVJIHNldHRpbmdzKVxuICBjb250ZXh0LndpdGhDb25maWdTY2hlbWF0aWNzKGNvbmZpZ1NjaGVtYXRpY3MpO1xuICBcbiAgLy8gUmVnaXN0ZXIgdGhlIHByb21wdCBwcmVwcm9jZXNzb3JcbiAgY29udGV4dC53aXRoUHJvbXB0UHJlcHJvY2Vzc29yKHByZXByb2Nlc3MpO1xufVxuIiwgImltcG9ydCB7IExNU3R1ZGlvQ2xpZW50LCB0eXBlIFBsdWdpbkNvbnRleHQgfSBmcm9tIFwiQGxtc3R1ZGlvL3Nka1wiO1xuXG5kZWNsYXJlIHZhciBwcm9jZXNzOiBhbnk7XG5cbi8vIFdlIHJlY2VpdmUgcnVudGltZSBpbmZvcm1hdGlvbiBpbiB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuY29uc3QgY2xpZW50SWRlbnRpZmllciA9IHByb2Nlc3MuZW52LkxNU19QTFVHSU5fQ0xJRU5UX0lERU5USUZJRVI7XG5jb25zdCBjbGllbnRQYXNza2V5ID0gcHJvY2Vzcy5lbnYuTE1TX1BMVUdJTl9DTElFTlRfUEFTU0tFWTtcbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5MTVNfUExVR0lOX0JBU0VfVVJMO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgTE1TdHVkaW9DbGllbnQoe1xuICBjbGllbnRJZGVudGlmaWVyLFxuICBjbGllbnRQYXNza2V5LFxuICBiYXNlVXJsLFxufSk7XG5cbihnbG9iYWxUaGlzIGFzIGFueSkuX19MTVNfUExVR0lOX0NPTlRFWFQgPSB0cnVlO1xuXG5sZXQgcHJlZGljdGlvbkxvb3BIYW5kbGVyU2V0ID0gZmFsc2U7XG5sZXQgcHJvbXB0UHJlcHJvY2Vzc29yU2V0ID0gZmFsc2U7XG5sZXQgY29uZmlnU2NoZW1hdGljc1NldCA9IGZhbHNlO1xubGV0IGdsb2JhbENvbmZpZ1NjaGVtYXRpY3NTZXQgPSBmYWxzZTtcbmxldCB0b29sc1Byb3ZpZGVyU2V0ID0gZmFsc2U7XG5sZXQgZ2VuZXJhdG9yU2V0ID0gZmFsc2U7XG5cbmNvbnN0IHNlbGZSZWdpc3RyYXRpb25Ib3N0ID0gY2xpZW50LnBsdWdpbnMuZ2V0U2VsZlJlZ2lzdHJhdGlvbkhvc3QoKTtcblxuY29uc3QgcGx1Z2luQ29udGV4dDogUGx1Z2luQ29udGV4dCA9IHtcbiAgd2l0aFByZWRpY3Rpb25Mb29wSGFuZGxlcjogKGdlbmVyYXRlKSA9PiB7XG4gICAgaWYgKHByZWRpY3Rpb25Mb29wSGFuZGxlclNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJlZGljdGlvbkxvb3BIYW5kbGVyIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKHRvb2xzUHJvdmlkZXJTZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlByZWRpY3Rpb25Mb29wSGFuZGxlciBjYW5ub3QgYmUgdXNlZCB3aXRoIGEgdG9vbHMgcHJvdmlkZXJcIik7XG4gICAgfVxuXG4gICAgcHJlZGljdGlvbkxvb3BIYW5kbGVyU2V0ID0gdHJ1ZTtcbiAgICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5zZXRQcmVkaWN0aW9uTG9vcEhhbmRsZXIoZ2VuZXJhdGUpO1xuICAgIHJldHVybiBwbHVnaW5Db250ZXh0O1xuICB9LFxuICB3aXRoUHJvbXB0UHJlcHJvY2Vzc29yOiAocHJlcHJvY2VzcykgPT4ge1xuICAgIGlmIChwcm9tcHRQcmVwcm9jZXNzb3JTZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb21wdFByZXByb2Nlc3NvciBhbHJlYWR5IHJlZ2lzdGVyZWRcIik7XG4gICAgfVxuICAgIHByb21wdFByZXByb2Nlc3NvclNldCA9IHRydWU7XG4gICAgc2VsZlJlZ2lzdHJhdGlvbkhvc3Quc2V0UHJvbXB0UHJlcHJvY2Vzc29yKHByZXByb2Nlc3MpO1xuICAgIHJldHVybiBwbHVnaW5Db250ZXh0O1xuICB9LFxuICB3aXRoQ29uZmlnU2NoZW1hdGljczogKGNvbmZpZ1NjaGVtYXRpY3MpID0+IHtcbiAgICBpZiAoY29uZmlnU2NoZW1hdGljc1NldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29uZmlnIHNjaGVtYXRpY3MgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgIH1cbiAgICBjb25maWdTY2hlbWF0aWNzU2V0ID0gdHJ1ZTtcbiAgICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5zZXRDb25maWdTY2hlbWF0aWNzKGNvbmZpZ1NjaGVtYXRpY3MpO1xuICAgIHJldHVybiBwbHVnaW5Db250ZXh0O1xuICB9LFxuICB3aXRoR2xvYmFsQ29uZmlnU2NoZW1hdGljczogKGdsb2JhbENvbmZpZ1NjaGVtYXRpY3MpID0+IHtcbiAgICBpZiAoZ2xvYmFsQ29uZmlnU2NoZW1hdGljc1NldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2xvYmFsIGNvbmZpZyBzY2hlbWF0aWNzIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtcbiAgICB9XG4gICAgZ2xvYmFsQ29uZmlnU2NoZW1hdGljc1NldCA9IHRydWU7XG4gICAgc2VsZlJlZ2lzdHJhdGlvbkhvc3Quc2V0R2xvYmFsQ29uZmlnU2NoZW1hdGljcyhnbG9iYWxDb25maWdTY2hlbWF0aWNzKTtcbiAgICByZXR1cm4gcGx1Z2luQ29udGV4dDtcbiAgfSxcbiAgd2l0aFRvb2xzUHJvdmlkZXI6ICh0b29sc1Byb3ZpZGVyKSA9PiB7XG4gICAgaWYgKHRvb2xzUHJvdmlkZXJTZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRvb2xzIHByb3ZpZGVyIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKHByZWRpY3Rpb25Mb29wSGFuZGxlclNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9vbHMgcHJvdmlkZXIgY2Fubm90IGJlIHVzZWQgd2l0aCBhIHByZWRpY3Rpb25Mb29wSGFuZGxlclwiKTtcbiAgICB9XG5cbiAgICB0b29sc1Byb3ZpZGVyU2V0ID0gdHJ1ZTtcbiAgICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5zZXRUb29sc1Byb3ZpZGVyKHRvb2xzUHJvdmlkZXIpO1xuICAgIHJldHVybiBwbHVnaW5Db250ZXh0O1xuICB9LFxuICB3aXRoR2VuZXJhdG9yOiAoZ2VuZXJhdG9yKSA9PiB7XG4gICAgaWYgKGdlbmVyYXRvclNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0b3JTZXQgPSB0cnVlO1xuICAgIHNlbGZSZWdpc3RyYXRpb25Ib3N0LnNldEdlbmVyYXRvcihnZW5lcmF0b3IpO1xuICAgIHJldHVybiBwbHVnaW5Db250ZXh0O1xuICB9LFxufTtcblxuaW1wb3J0KFwiLi8uLi9zcmMvaW5kZXgudHNcIikudGhlbihhc3luYyBtb2R1bGUgPT4ge1xuICByZXR1cm4gYXdhaXQgbW9kdWxlLm1haW4ocGx1Z2luQ29udGV4dCk7XG59KS50aGVuKCgpID0+IHtcbiAgc2VsZlJlZ2lzdHJhdGlvbkhvc3QuaW5pdENvbXBsZXRlZCgpO1xufSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSB0aGUgbWFpbiBmdW5jdGlvbiBvZiB0aGUgcGx1Z2luLlwiKTtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7OztBQUFBLElBTWEsV0FNQSxhQXNGQSxlQWdCQTtBQWxIYjtBQUFBO0FBQUE7QUFNTyxJQUFNLFlBQVk7QUFBQSxNQUN2QjtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQWM7QUFBQSxNQUFlO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUNoRjtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLElBQ2hFO0FBR08sSUFBTSxjQUFjO0FBQUEsTUFDekIsR0FBRztBQUFBO0FBQUEsTUFFSDtBQUFBLE1BQUs7QUFBQSxNQUFNO0FBQUE7QUFBQSxNQUVYO0FBQUEsTUFBSztBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFDOUQ7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFZO0FBQUE7QUFBQSxNQUVwQztBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQTtBQUFBLE1BRWhEO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFDckU7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQTtBQUFBLE1BRXZCO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFNO0FBQUEsTUFBUztBQUFBLE1BQU07QUFBQSxNQUMxRTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQ3pFO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQ3RFO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQTtBQUFBLE1BRTNDO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQU07QUFBQSxNQUFXO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBO0FBQUEsTUFFckU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQTtBQUFBLE1BRTFCO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDdEU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ3JFO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQzdEO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFhO0FBQUEsTUFBVztBQUFBLE1BQWE7QUFBQSxNQUFjO0FBQUEsTUFBYztBQUFBLE1BQ3JGO0FBQUEsTUFBWTtBQUFBLE1BQWE7QUFBQSxNQUFlO0FBQUEsTUFBYTtBQUFBLE1BQWE7QUFBQSxNQUNsRTtBQUFBLE1BQVk7QUFBQSxNQUFZO0FBQUEsTUFBYztBQUFBLE1BQVM7QUFBQSxNQUFhO0FBQUEsTUFBVTtBQUFBLE1BQ3RFO0FBQUEsTUFBUTtBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUE7QUFBQSxNQUUvQjtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ3JFO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUNsRTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQ3RFO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUNqRTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUM5RDtBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFjO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUNuRTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDbEU7QUFBQSxNQUFZO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFDckU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFDL0Q7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFPO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ2xFO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQWE7QUFBQSxNQUN4RDtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQ2pFO0FBQUEsTUFBVztBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUNyRDtBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFDbEQ7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUNqRTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUMvRDtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUNoRTtBQUFBLE1BQVc7QUFBQSxNQUFjO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQzlEO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQzdDO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFZO0FBQUEsTUFDL0Q7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFDbEU7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUM1RDtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFDOUM7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUN4RDtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUNuRTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQWE7QUFBQSxNQUFZO0FBQUEsTUFDdkQ7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFhO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUNuRTtBQUFBLE1BQVk7QUFBQSxNQUFRO0FBQUEsTUFBWTtBQUFBLE1BQ2hDO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFZO0FBQUEsTUFDL0Q7QUFBQSxNQUFhO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFDeEM7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVk7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQ3BEO0FBQUEsTUFBWTtBQUFBLE1BQWE7QUFBQSxNQUFXO0FBQUEsTUFDcEM7QUFBQSxNQUFjO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFlO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUNsRTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUNsQztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUN2QztBQUFBLE1BQVU7QUFBQSxNQUFjO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUN6QztBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQ2pFO0FBQUEsTUFBWTtBQUFBLE1BQVM7QUFBQSxNQUFZO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUFTO0FBQUEsTUFDL0Q7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUNsRDtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQ3REO0FBQUEsTUFBVTtBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUN2RDtBQUFBLE1BQVU7QUFBQSxNQUFhO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFDcEQ7QUFBQSxNQUFTO0FBQUEsTUFBYTtBQUFBLE1BQVc7QUFBQSxNQUFhO0FBQUEsTUFDOUM7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQWM7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQzFEO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUNoRDtBQUFBLE1BQVU7QUFBQSxNQUFZO0FBQUEsTUFBZTtBQUFBLE1BQ3JDO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDdkQ7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUNoQztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFDNUM7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFhO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFjO0FBQUEsSUFDdEU7QUFHTyxJQUFNLGdCQUFnQjtBQUFBLE1BQzNCLEdBQUc7QUFBQTtBQUFBLE1BRUg7QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQU07QUFBQSxNQUN0RTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUE7QUFBQSxNQUU3QztBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUE7QUFBQSxNQUVqRTtBQUFBLE1BQWE7QUFBQSxNQUFjO0FBQUEsTUFBYztBQUFBLE1BQVc7QUFBQSxNQUFjO0FBQUEsTUFDbEU7QUFBQSxNQUFVO0FBQUEsTUFBZ0I7QUFBQSxNQUFjO0FBQUEsTUFDeEM7QUFBQSxNQUFhO0FBQUEsTUFBYTtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBWTtBQUFBLE1BQzdEO0FBQUEsTUFBYTtBQUFBLE1BQWdCO0FBQUEsTUFBYztBQUFBLE1BQWdCO0FBQUEsTUFDM0Q7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQWU7QUFBQSxNQUNqRTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxJQUN4QztBQUVPLElBQU0sZUFBZTtBQUFBLE1BQzFCLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxJQUNkO0FBQUE7QUFBQTs7O0FDdEhBLElBTWEsV0FNQSxhQTREQSxlQU1BO0FBOUViO0FBQUE7QUFBQTtBQU1PLElBQU0sWUFBWTtBQUFBLE1BQ3ZCO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVk7QUFBQSxNQUNsRDtBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxJQUMvQztBQUdPLElBQU0sY0FBYztBQUFBLE1BQ3pCLEdBQUc7QUFBQTtBQUFBLE1BRUg7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUE7QUFBQSxNQUUzRTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQU87QUFBQSxNQUFVO0FBQUEsTUFDbEU7QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUNsRTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQTtBQUFBLE1BRWxEO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQTtBQUFBLE1BRXJFO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUN4RTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQTtBQUFBLE1BRW5FO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ3JFO0FBQUEsTUFBUztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBWTtBQUFBLE1BQVM7QUFBQSxNQUNqRTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUFhO0FBQUEsTUFBYTtBQUFBLE1BQ3BFO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQ25FO0FBQUEsTUFBWTtBQUFBLE1BQVE7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUE7QUFBQSxNQUVsRTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFVO0FBQUEsTUFDbEU7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFDN0Q7QUFBQSxNQUFZO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQTtBQUFBLE1BRTlCO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQ2xFO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQTtBQUFBLE1BRWpEO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQy9EO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQ2pFO0FBQUEsTUFBVTtBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUEsTUFBZ0I7QUFBQSxNQUFjO0FBQUEsTUFDL0Q7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBO0FBQUEsTUFFcEI7QUFBQSxNQUFRO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFjO0FBQUEsTUFDM0Q7QUFBQSxNQUFZO0FBQUEsTUFBUTtBQUFBLE1BQVk7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVU7QUFBQSxNQUMxRDtBQUFBLE1BQU87QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFDL0M7QUFBQSxNQUFjO0FBQUEsTUFBa0I7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQWE7QUFBQSxNQUMvRDtBQUFBLE1BQVk7QUFBQSxNQUFjO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQzlEO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUNsRTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUMzRDtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBYztBQUFBLE1BQ2pFO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQU07QUFBQTtBQUFBLE1BRTVDO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQzlEO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQ2pFO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFB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QUFBQSxNQUFNO0FBQUEsTUFDNUU7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFDdEU7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBVztBQUFBLE1BQ3JFO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFDMUU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUN0RTtBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFNO0FBQUEsSUFDN0MsQ0FBQztBQUdELElBQU0sVUFBVSxvQkFBSSxJQUFJO0FBQUEsTUFDdEI7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFDM0U7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQzVFO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUMvRDtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFR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QTRCO0FBQ2hDLElBQUksbUJBQW1CO0FBQ3ZCLElBQUksZUFBZTtBQUVuQixJQUFNLHVCQUF1QixPQUFPLFFBQVEsd0JBQXdCO0FBRXBFLElBQU0sZ0JBQStCO0FBQUEsRUFDbkMsMkJBQTJCLENBQUMsYUFBYTtBQUN2QyxRQUFJLDBCQUEwQjtBQUM1QixZQUFNLElBQUksTUFBTSwwQ0FBMEM7QUFBQSxJQUM1RDtBQUNBLFFBQUksa0JBQWtCO0FBQ3BCLFlBQU0sSUFBSSxNQUFNLDREQUE0RDtBQUFBLElBQzlFO0FBRUEsK0JBQTJCO0FBQzNCLHlCQUFxQix5QkFBeUIsUUFBUTtBQUN0RCxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0Esd0JBQXdCLENBQUNDLGdCQUFlO0FBQ3RDLFFBQUksdUJBQXVCO0FBQ3pCLFlBQU0sSUFBSSxNQUFNLHVDQUF1QztBQUFBLElBQ3pEO0FBQ0EsNEJBQXdCO0FBQ3hCLHlCQUFxQixzQkFBc0JBLFdBQVU7QUFDckQsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLHNCQUFzQixDQUFDQyxzQkFBcUI7QUFDMUMsUUFBSSxxQkFBcUI7QUFDdkIsWUFBTSxJQUFJLE1BQU0sc0NBQXNDO0FBQUEsSUFDeEQ7QUFDQSwwQkFBc0I7QUFDdEIseUJBQXFCLG9CQUFvQkEsaUJBQWdCO0FBQ3pELFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSw0QkFBNEIsQ0FBQywyQkFBMkI7QUFDdEQsUUFBSSwyQkFBMkI7QUFDN0IsWUFBTSxJQUFJLE1BQU0sNkNBQTZDO0FBQUEsSUFDL0Q7QUFDQSxnQ0FBNEI7QUFDNUIseUJBQXFCLDBCQUEwQixzQkFBc0I7QUFDckUsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLG1CQUFtQixDQUFDLGtCQUFrQjtBQUNwQyxRQUFJLGtCQUFrQjtBQUNwQixZQUFNLElBQUksTUFBTSxtQ0FBbUM7QUFBQSxJQUNyRDtBQUNBLFFBQUksMEJBQTBCO0FBQzVCLFlBQU0sSUFBSSxNQUFNLDREQUE0RDtBQUFBLElBQzlFO0FBRUEsdUJBQW1CO0FBQ25CLHlCQUFxQixpQkFBaUIsYUFBYTtBQUNuRCxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsZUFBZSxDQUFDLGNBQWM7QUFDNUIsUUFBSSxjQUFjO0FBQ2hCLFlBQU0sSUFBSSxNQUFNLDhCQUE4QjtBQUFBLElBQ2hEO0FBRUEsbUJBQWU7QUFDZix5QkFBcUIsYUFBYSxTQUFTO0FBQzNDLFdBQU87QUFBQSxFQUNUO0FBQ0Y7QUFFQSx3REFBNEIsS0FBSyxPQUFNQyxZQUFVO0FBQy9DLFNBQU8sTUFBTUEsUUFBTyxLQUFLLGFBQWE7QUFDeEMsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUNaLHVCQUFxQixjQUFjO0FBQ3JDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVTtBQUNsQixVQUFRLE1BQU0sb0RBQW9EO0FBQ2xFLFVBQVEsTUFBTSxLQUFLO0FBQ3JCLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9zZGsiLCAicHJlcHJvY2VzcyIsICJjb25maWdTY2hlbWF0aWNzIiwgIm1vZHVsZSJdCn0K
