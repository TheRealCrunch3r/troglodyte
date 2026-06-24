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
  const words = snippet.match(WORD_TOKEN_REGEX) || [];
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
  if (ratio < 1.2) return "en";
  return deScore > enScore ? "de" : "en";
}
function detectTechnicalContext(text) {
  const keywordPattern = /\b(?:const|let|var|function|class|import|export)\b/g;
  let codeScore = 0;
  let match;
  while ((match = keywordPattern.exec(text)) !== null) {
    codeScore++;
    const contextStart = Math.max(0, match.index - 5);
    const contextEnd = Math.min(text.length, match.index + match[0].length + 5);
    const context = text.substring(contextStart, contextEnd);
    const braceMatches = context.match(/[{}]/g);
    if (braceMatches) codeScore += braceMatches.length;
  }
  const totalTokens = text.split(/\s+/).length;
  return totalTokens > 0 && codeScore / totalTokens > 0.25;
}
var EN_HIGH, DE_HIGH, NEUTRAL_WORDS, WORD_TOKEN_REGEX, CaseInsensitiveMap, Troglodyte;
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
      "wollen",
      "w\xFCrde"
      // FIX #3: Moved from NEUTRAL_WORDS to DE_HIGH
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
      // 'würde' removed — now in DE_HIGH (FIX #3)
      "da\xDF"
    ]);
    WORD_TOKEN_REGEX = /\b[a-zäöüß]{3,}\b/g;
    CaseInsensitiveMap = class extends Map {
      get(key) {
        const exact = super.get(key);
        if (exact !== void 0) return exact;
        const lower = key.toLowerCase();
        for (const [k, v] of this) {
          if (k.toLowerCase() === lower) return v;
        }
        return void 0;
      }
    };
    Troglodyte = class {
      // Language-specific phrase maps (isolated to prevent cross-language mixing)
      enPhrases;
      dePhrases;
      // OPTIMIZATION #2: Use Map instead of Record for O(1) lookups without prototype chain traversal
      synonymMap;
      cachedBlacklists;
      stats;
      MAX_COMPRESSIONS_BEFORE_RESET = 1e4;
      MAX_CHARS_BEFORE_RESET = 1e7;
      // Pre-sorted phrases with pre-compiled regexes (PERFORMANCE FIX) - language-specific
      enCompiledPhrases;
      deCompiledPhrases;
      // BATCHED REGEX OPTIMIZATION (pre-built in constructor) - language-specific
      enBatchedRegex = null;
      deBatchedRegex = null;
      enReplacementMap = null;
      deReplacementMap = null;
      // OPTIMIZATION #4: Pre-compute empty replacements to avoid runtime `.trim()` checks
      emptyReplacements = /* @__PURE__ */ new Set();
      constructor(dictionaries) {
        const allPhrases = dictionaries.phrases;
        this.enPhrases = {};
        this.dePhrases = {};
        for (const [phrase, replacement] of Object.entries(allPhrases)) {
          const hasGermanChars = /[äöüßÄÖÜ]/.test(phrase);
          const lowerPhrase = phrase.toLowerCase();
          const isGerman = hasGermanChars || /^(ich|du|er|sie|es|wir|ihr|der|die|das|ein|eine|und|oder|aber|nicht|kann|muss|will|soll|hat|ist|war)/.test(lowerPhrase) || lowerPhrase.includes("k\xF6nnte") || lowerPhrase.includes("w\xFCrde") || lowerPhrase.includes("m\xFCsste");
          if (isGerman) {
            this.dePhrases[phrase] = replacement;
          } else {
            this.enPhrases[phrase] = replacement;
          }
        }
        this.synonymMap = new Map(Object.entries(dictionaries.synonyms || {}));
        const wordChar = "a-zA-Z0-9_'\xDF\xE4\xF6\xFC\xC4\xD6\xDC";
        this.enCompiledPhrases = Object.entries(this.enPhrases).filter(([phrase]) => phrase && phrase.length >= 2).sort((a, b) => b[0].length - a[0].length).map(([phrase, replacement]) => ({
          phrase,
          replacement,
          regex: new RegExp(`(?<![${wordChar}])${this.escapeRegex(phrase)}(?![${wordChar}])`, "gi")
        }));
        this.deCompiledPhrases = Object.entries(this.dePhrases).filter(([phrase]) => phrase && phrase.length >= 2).sort((a, b) => b[0].length - a[0].length).map(([phrase, replacement]) => ({
          phrase,
          replacement,
          regex: new RegExp(`(?<![${wordChar}])${this.escapeRegex(phrase)}(?![${wordChar}])`, "gi")
        }));
        if (this.enCompiledPhrases.length > 0) {
          const escapedPhrases = this.enCompiledPhrases.map(({ phrase }) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).sort((a, b) => b.length - a.length);
          const CHUNK_SIZE = 50;
          let combinedPattern;
          if (escapedPhrases.length <= CHUNK_SIZE) {
            combinedPattern = `(?:${escapedPhrases.join("|")})`;
          } else {
            const chunks = [];
            for (let i = 0; i < escapedPhrases.length; i += CHUNK_SIZE) {
              chunks.push(`(?:${escapedPhrases.slice(i, i + CHUNK_SIZE).join("|")})`);
            }
            combinedPattern = `(?:${chunks.join("|")})`;
          }
          this.enBatchedRegex = new RegExp(`(?<![${wordChar}])${combinedPattern}(?![${wordChar}])`, "gi");
          this.enReplacementMap = new CaseInsensitiveMap(
            this.enCompiledPhrases.map(({ phrase, replacement }) => [phrase, replacement])
          );
        }
        if (this.deCompiledPhrases.length > 0) {
          const escapedPhrases = this.deCompiledPhrases.map(({ phrase }) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).sort((a, b) => b.length - a.length);
          const CHUNK_SIZE = 50;
          let combinedPattern;
          if (escapedPhrases.length <= CHUNK_SIZE) {
            combinedPattern = `(?:${escapedPhrases.join("|")})`;
          } else {
            const chunks = [];
            for (let i = 0; i < escapedPhrases.length; i += CHUNK_SIZE) {
              chunks.push(`(?:${escapedPhrases.slice(i, i + CHUNK_SIZE).join("|")})`);
            }
            combinedPattern = `(?:${chunks.join("|")})`;
          }
          this.deBatchedRegex = new RegExp(`(?<![${wordChar}])${combinedPattern}(?![${wordChar}])`, "gi");
          this.deReplacementMap = new CaseInsensitiveMap(
            this.deCompiledPhrases.map(({ phrase, replacement }) => [phrase, replacement])
          );
        }
        if (this.enReplacementMap) {
          for (const val of this.enReplacementMap.values()) {
            if (!val || !val.trim()) {
              this.emptyReplacements.add(val);
            }
          }
        }
        if (this.deReplacementMap) {
          for (const val of this.deReplacementMap.values()) {
            if (!val || !val.trim()) {
              this.emptyReplacements.add(val);
            }
          }
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
        let effectiveBlacklist = levelBlacklist;
        if (level === "balanced") {
          const protectedPronouns = /* @__PURE__ */ new Set([
            // English
            "he",
            "him",
            "his",
            "she",
            "her",
            "it",
            "they",
            "them",
            "their",
            // German (FIXED: Now preserved in balanced mode)
            "er",
            "ihn",
            "ihm",
            "sein",
            "sie",
            "ihr",
            "es",
            "wir",
            "uns",
            "euch",
            "mein",
            "dein",
            "dich",
            "mir",
            "dir",
            "unser",
            "euer",
            "sich"
          ]);
          effectiveBlacklist = new Set([...levelBlacklist].filter((w) => !protectedPronouns.has(w)));
        }
        const isTechnical = smartMode && detectTechnicalContext(prompt);
        let synonymReplacementRatio = isTechnical ? 0.3 : 1;
        if (isTechnical) {
          if (debug) console.log("[Troglodyte] Smart Mode: Detected technical context. Reducing synonym replacement to 30%.");
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
          text = text.replace(/(https?:\/\/[^\s<>()"'\\[\]]+|www.[^\s<>()"'\\[\]]+)/gi, (match) => {
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
          const protectBalancedBraces = (input, openChar, closeChar) => {
            let result = "";
            let depth = 0;
            let currentBlock = "";
            let inString = false;
            for (let i = 0; i < input.length; i++) {
              const char = input[i];
              if (!inString && char === '"') {
                let escapeCount = 0;
                let j = i - 1;
                while (j >= 0 && input[j] === "\\") {
                  escapeCount++;
                  j--;
                }
                if (escapeCount % 2 === 0) {
                  inString = true;
                }
              } else if (inString && char === '"') {
                let escapeCount = 0;
                let j = i - 1;
                while (j >= 0 && input[j] === "\\") {
                  escapeCount++;
                  j--;
                }
                if (escapeCount % 2 === 0) {
                  inString = false;
                }
              }
              if (inString) {
                currentBlock += char;
                continue;
              }
              if (char === openChar) {
                depth++;
                currentBlock += char;
              } else if (char === closeChar) {
                depth--;
                currentBlock += char;
                if (depth === 0 && currentBlock.length > 10) {
                  result = protectIfWorthwhile(currentBlock, 5);
                  currentBlock = "";
                } else if (depth < 0) {
                  depth = 0;
                  currentBlock = "";
                }
              } else {
                currentBlock += char;
              }
            }
            return result + currentBlock;
          };
          text = protectBalancedBraces(text, "{", "}");
          const findOutermostXml = (input) => {
            const results = [];
            const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)([^>]*?)>/g;
            let match;
            let depth = 0;
            const openTagStack = [];
            while ((match = tagRegex.exec(input)) !== null) {
              const fullTag = match[0];
              const tagName = match[1];
              if (fullTag.endsWith("/>")) continue;
              const isClosing = fullTag.startsWith("</") && fullTag.length > 2;
              if (isClosing) {
                if (depth === 0 || tagName !== openTagStack[openTagStack.length - 1]) {
                  continue;
                }
                openTagStack.pop();
                depth--;
                if (depth === 0) {
                  results.push({ start: match.index - fullTag.length + 1, end: match.index + fullTag.length });
                }
              } else {
                openTagStack.push(tagName);
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
        const isDe = langCode === "de";
        const activeBatchedRegex = isDe ? this.deBatchedRegex : this.enBatchedRegex;
        const activeReplacementMap = isDe ? this.deReplacementMap : this.enReplacementMap;
        if (activeBatchedRegex && activeReplacementMap) {
          text = text.replace(activeBatchedRegex, (match) => {
            const repl = activeReplacementMap.get(match);
            if (!repl || !repl.trim()) {
              phraseMatches++;
              phraseCharsSaved += match.length - 1;
              return " ";
            }
            const saved = match.length - repl.length;
            phraseMatches++;
            phraseCharsSaved += saved;
            return repl;
          });
        }
        const tokenPattern = /([^\w\u00C0-\u024F\u1E00-\u1EFF]+)|([\w\u00C0-\u024F\u1E00-\u1EFF]+)/gu;
        const allWords = [];
        for (const m of text.matchAll(tokenPattern)) {
          if (m[2]) allWords.push(m[2]);
        }
        if (debug) {
          console.log(`[Troglodyte] Found ${allWords.length} words for filtering`);
        }
        let filteredCount = 0;
        let synonymCount = 0;
        const keptWords = [];
        for (const word of allWords) {
          const lower = word.toLowerCase();
          if (effectiveBlacklist.has(lower)) {
            filteredCount++;
            continue;
          }
          const replacement = this.synonymMap.get(lower);
          if (replacement !== void 0 && synonymReplacementRatio > 0) {
            const hash = word.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % 100;
            if (hash < synonymReplacementRatio * 100) {
              synonymCount++;
              keptWords.push(replacement);
              continue;
            }
          }
          keptWords.push(word);
        }
        if (debug) {
          console.log(`[Troglodyte] Blacklist: ${levelBlacklist.size} words, Filtered: ${filteredCount}, Synonyms: ${synonymCount}`);
        }
        const finalParts = [];
        let wordIdx = 0;
        for (const m of text.matchAll(tokenPattern)) {
          if (m[2] !== void 0) {
            finalParts.push(keptWords[wordIdx++] || "");
          } else {
            finalParts.push(m[1]);
          }
        }
        text = finalParts.join("").replace(/\s+/g, " ").replace(/([.,?!;:])(?=[A-ZßÄÖÜ])/g, "$1 ").trim();
        text = text.replace(/\s+([.,?!;:])/g, "$1").replace(/^([.,?!;:]|\s)+/g, "").replace(/[^\p{L}\p{N}\p{So}\p{Sk}\p{Sc}\p{Sm}\uE000-\uF8FF]+$/gu, "");
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
        const originalTrailing = prompt.trim().match(/[?.!]+$/)?.[0] || "";
        if (originalTrailing) {
          text = text.replace(/[?.!]+$/, "");
          text += originalTrailing;
        } else if (["?", "!"].includes(prompt.trim().slice(-1))) {
          text = text.replace(/[?!]+$/, "") + prompt.trim().slice(-1);
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
      "step by step": "sequential",
      "step-by-step": "sequential",
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
      // German filler phrases (FIX #16: Use empty strings for removal, not English replacements)
      "Ich versuche herauszufinden": "",
      "Ich versuche zu": "",
      "Ich m\xF6chte": "",
      "Ich w\xFCrde gerne": "",
      "Ich brauche": "",
      "Ich habe eine Frage": "Frage",
      "Meine Frage ist": "Frage",
      "Die Frage ist": "Frage",
      "Ich frage mich": "",
      "Ich bin neugierig": "Neugierig",
      // German redundant phrases (FIX #16: Use German or empty replacements)
      "Aufgrund der Tatsache, dass": "Weil",
      "Um zu": "",
      "Zu dem Zweck": "",
      "In diesem Moment": "Jetzt",
      "An dieser Stelle": "Jetzt",
      "Meiner Meinung nach": "IMO",
      "Ehrlich gesagt": "",
      "Um ehrlich zu sein": "",
      "Eigentlich": "",
      "Tats\xE4chlich": "",
      // German technical filler (FIX #16: Use German replacements)
      "Stellen Sie sicher, dass": "Sicherstellen",
      "Stellen Sie sicher": "Sicherstellen",
      "Sicherstellen, dass": "Sicherstellen",
      "Es ist wichtig": "Wichtig",
      "Es ist notwendig": "Notwendig",
      "Es ist erforderlich": "Erforderlich",
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
      // German common patterns (FIX #16: Use German replacements only)
      "Schritt f\xFCr Schritt": "sequenziell",
      "im Detail": "detailiert",
      "erkl\xE4re im Detail": "erkl\xE4re detailiert",
      "geben Sie mir": "",
      "zeigen Sie mir": "zeig",
      "sagen Sie mir": "sag",
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
      "instances": "insts"
      // Error/warning types — REMOVED: no-op entries (word maps to itself) — wasteful dead code
      // 'undefined': 'undefined',
      // 'unresolved': 'unresolved',
      // 'incomplete': 'incomplete',
      // 'unused': 'unused',
      // 'deprecated': 'deprecated',
      // 'obsolete': 'obsolete',
      // 'redundant': 'redundant',
      // 'duplicate': 'duplicate',
      // 'conflict': 'conflict',
      // 'ambiguous': 'ambiguous',
      // File/path related — REMOVED: no-op entries
      // 'folder': 'folder',
      // 'path': 'path',
      // 'paths': 'paths',
      // 'source': 'source',
      // 'sources': 'sources',
      // 'header': 'header',
      // 'headers': 'headers',
      // 'include': 'include',
      // 'includes': 'includes',
      // German build terms — REMOVED: no-op entries
      // 'erstellung': 'erstellung',
      // 'kompilieren': 'kompilieren',
      // 'verknüpfen': 'verknüpfen',
      // 'fehler': 'fehler',
      // 'warnung': 'warnung',
      // 'hinweis': 'hinweis',
      // 'quelle': 'quelle',
      // 'ziel': 'ziel',
      // 'verzeichnis': 'verzeichnis',
      // MSVC German error terms — REMOVED: no-op entries
      // 'bezeichner': 'bezeichner',
      // 'typspezifizierer': 'typspezifizierer',
      // 'syntaxfehler': 'syntaxfehler',
      // 'deklarierter': 'deklarierter',
      // 'ungültig': 'ungültig',
      // 'angenommen': 'angenommen',
      // 'unterstützt': 'unterstützt',
      // 'geöffnet': 'geöffnet',
      // 'verwendung': 'verwendung',
      // 'gefunden': 'gefunden',
      // 'fehlt': 'fehlt',
      // 'fehlendes': 'fehlendes',
      // Warning terms — REMOVED: no-op entry
      // 'neuerstellung': 'neuerstellung',
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
  const zeitMatch = text.match(/(?<=\s|^)\[zeit:\s*/i);
  const systemEmpfehlungMatch1 = text.match(/\*\*SYSTEMEMPFEHLUNG:\*\*/);
  const systemEmpfehlungMatch2 = text.match(/\bSYSTEMEMPFEHLUNG!/);
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
    status.setState({
      status: "error",
      text: `Compression failed: ${error instanceof Error ? error.message.substring(0, 50) : "Unknown"}`
    });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2RpY3Rpb25hcmllcy9lbi1maWxsZXIudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9kZS1maWxsZXIudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9pbmRleC50cyIsICIuLi9zcmMvdHJvZ2xvZHl0ZS50cyIsICIuLi9zcmMvZGljdGlvbmFyaWVzL3BocmFzZXMudHMiLCAiLi4vc3JjL2RpY3Rpb25hcmllcy9zeW5vbnltcy50cyIsICIuLi9zcmMvY29uZmlnLnRzIiwgIi4uL3NyYy9wcm9tcHRQcmVwcm9jZXNzb3IudHMiLCAiLi4vc3JjL2luZGV4LnRzIiwgImVudHJ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEVuZ2xpc2ggZmlsbGVyIHdvcmRzIG9yZ2FuaXplZCBieSBjb21wcmVzc2lvbiBsZXZlbC5cbiAqIFNvdXJjZTogTGluZ3Vpc3RpYyByZXNlYXJjaCwgTkxQIHJlc291cmNlcywgQ09DQSBmcmVxdWVuY3kgbGlzdHNcbiAqL1xuXG4vLyBHZW50bGUgdGllcjogT25seSBwb2xpdGUgZmlsbGVyIGFuZCBiYXNpYyBjb3VydGVzeSB3b3Jkc1xuZXhwb3J0IGNvbnN0IEVOX0dFTlRMRSA9IFtcbiAgJ3BsZWFzZScsICd0aGFua3MnLCAndGhhbmsnLCAnYXBwcmVjaWF0ZScsICdhcHByZWNpYXRlZCcsICdncmF0ZWZ1bCcsICdraW5kbHknLCAncG9saXRlJyxcbiAgJ3VtJywgJ3VoJywgJ29oJywgJ2FoJywgJ3dvdycsICdobW0nLCAnaG1tbScsICd3ZWxsJywgJ29rYXknLCAnb2snLFxuXTtcblxuLy8gQmFsYW5jZWQgdGllcjogfjMwMCBoaWdoLWZyZXF1ZW5jeSB3b3JkcyBzYWZlIHRvIHJlbW92ZSAoZGVkdXBsaWNhdGVkKVxuZXhwb3J0IGNvbnN0IEVOX0JBTEFOQ0VEID0gW1xuICAuLi5FTl9HRU5UTEUsXG4gIC8vIEFydGljbGVzXG4gICdhJywgJ2FuJywgJ3RoZScsXG4gIC8vIFN1YmplY3QgcHJvbm91bnNcbiAgJ2knLCAnbWUnLCAnbXknLCAnbWluZScsICdteXNlbGYnLCAnd2UnLCAndXMnLCAnb3VyJywgJ291cnMnLCAnb3Vyc2VsdmVzJyxcbiAgJ3lvdScsICd5b3VyJywgJ3lvdXJzJywgJ3lvdXJzZWxmJywgJ3lvdXJzZWx2ZXMnLFxuICAvLyBDb3B1bGFzXG4gICdpcycsICdhbScsICdhcmUnLCAnd2FzJywgJ3dlcmUnLCAnYmUnLCAnYmVlbicsICdiZWluZycsXG4gIC8vIEF1eGlsaWFyaWVzXG4gICdoYXZlJywgJ2hhcycsICdoYWQnLCAnZG8nLCAnZG9lcycsICdkaWQnLCAnd2lsbCcsICd3b3VsZCcsICdjb3VsZCcsICdzaG91bGQnLFxuICAnbWF5JywgJ21pZ2h0JywgJ2NhbicsICdzaGFsbCcsXG4gIC8vIFByZXBvc2l0aW9uc1xuICAnb2YnLCAnaW4nLCAndG8nLCAnZm9yJywgJ3dpdGgnLCAnb24nLCAnYXQnLCAnZnJvbScsICdieScsICdhYm91dCcsICd1cCcsICdkb3duJyxcbiAgJ291dCcsICdvZmYnLCAnb3ZlcicsICd0aHJvdWdoJywgJ2ludG8nLCAnYWZ0ZXInLCAnYmVmb3JlJywgJ2R1cmluZycsICdhZ2FpbicsXG4gICdoZXJlJywgJ3RoZXJlJywgJ2JldHdlZW4nLCAndW5kZXInLCAnYWJvdmUnLCAnYmVsb3cnLCAnbmVhcicsICdhcm91bmQnLCAnYWdhaW5zdCcsXG4gICd3aXRoaW4nLCAnd2l0aG91dCcsICdhbG9uZycsICdhY3Jvc3MnLCAnYmVoaW5kJywgJ2JleW9uZCcsICdpbnNpZGUnLCAnb3V0c2lkZScsXG4gICd0b3dhcmQnLCAndG93YXJkcycsICd1cG9uJywgJ3ZpYScsICdwZXInLCAnYW1vbmcnLFxuICAvLyBDb25qdW5jdGlvbnNcbiAgJ2FuZCcsICdidXQnLCAnb3InLCAnbm9yJywgJ3lldCcsICdzbycsICdiZWNhdXNlJywgJ3NpbmNlJywgJ3VubGVzcycsICd3aGlsZScsXG4gICdhbHRob3VnaCcsICd0aG91Z2gnLCAnaWYnLCAnd2hldGhlcicsICdhcycsICd0aGFuJywgJ3RoYXQnLCAnd2hlbicsICd3aGVyZScsXG4gIC8vIERlbW9uc3RyYXRpdmVzXG4gICd0aGlzJywgJ3RoZXNlJywgJ3Rob3NlJywgJ3N1Y2gnLFxuICAvLyBRdWFudGlmaWVycyAmIEFkdmVyYnMgKGRlZHVwbGljYXRlZClcbiAgJ3NvbWUnLCAnYW55JywgJ2FsbCcsICdlYWNoJywgJ2V2ZXJ5JywgJ2JvdGgnLCAnZmV3JywgJ21hbnknLCAnbXVjaCcsICdtb3JlJyxcbiAgJ21vc3QnLCAnb3RoZXInLCAnYW5vdGhlcicsICdzYW1lJywgJ293bicsICdlbm91Z2gnLCAnb25seScsICdldmVuJywgJ2Fsc28nLFxuICAndG9vJywgJ3ZlcnknLCAncmVhbGx5JywgJ3F1aXRlJywgJ3JhdGhlcicsICdqdXN0JywgJ3N0aWxsJywgJ2FscmVhZHknLFxuICAnYWxtb3N0JywgJ25lYXJseScsICdvYnZpb3VzbHknLCAnY2xlYXJseScsICdjZXJ0YWlubHknLCAnZGVmaW5pdGVseScsICdhYnNvbHV0ZWx5JywgJ3RydWx5JyxcbiAgJ2hvbmVzdGx5JywgJ3NlcmlvdXNseScsICdlc3NlbnRpYWxseScsICdnZW5lcmFsbHknLCAndHlwaWNhbGx5JywgJ3VzdWFsbHknLFxuICAnbm9ybWFsbHknLCAnY29tbW9ubHknLCAnZnJlcXVlbnRseScsICdvZnRlbicsICdyZWd1bGFybHknLCAnYWx3YXlzJywgJ25ldmVyJyxcbiAgJ2V2ZXInLCAnc29tZXRpbWVzJywgJ3JhcmVseScsICdzZWxkb20nLFxuICAvLyBIaWdoLWZyZXF1ZW5jeSB2ZXJicyAoZGVkdXBsaWNhdGVkKVxuICAnZ2V0JywgJ2dvdCcsICdnbycsICdnb2VzJywgJ2dvaW5nJywgJ2dvbmUnLCAnbWFrZScsICdtYWRlJywgJ3Rha2UnLCAndG9vaycsXG4gICdnaXZlJywgJ2dhdmUnLCAna25vdycsICdrbmV3JywgJ3RoaW5rJywgJ3Rob3VnaHQnLCAnc2VlJywgJ3NhdycsICdsb29rJyxcbiAgJ2ZpbmQnLCAndGVsbCcsICdhc2snLCAnbmVlZCcsICd0cnknLCAnZmVlbCcsICdrZWVwJywgJ2xldCcsICdiZWdpbicsICdzdGFydCcsXG4gICdzaG93JywgJ2hlYXInLCAnY2FsbCcsICd0dXJuJywgJ21vdmUnLCAnbGl2ZScsICdob2xkJywgJ2JyaW5nJywgJ2hhcHBlbicsXG4gICd3cml0ZScsICdwcm92aWRlJywgJ3NpdCcsICdzdGFuZCcsICdwYXknLCAnbWVldCcsICdpbmNsdWRlJywgJ2NvbnRpbnVlJyxcbiAgJ3NldCcsICdsZWFybicsICdjaGFuZ2UnLCAnbGVhZCcsICd1bmRlcnN0YW5kJywgJ3dhdGNoJywgJ2ZvbGxvdycsICdjcmVhdGUnLFxuICAnc3BlYWsnLCAncmVhZCcsICdhbGxvdycsICdhZGQnLCAnc3BlbmQnLCAnZ3JvdycsICdvcGVuJywgJ3dhbGsnLCAnb2ZmZXInLFxuICAncmVtZW1iZXInLCAnY29uc2lkZXInLCAnYXBwZWFyJywgJ3dhaXQnLCAnc2VydmUnLCAnc2VuZCcsICdleHBlY3QnLCAnYnVpbGQnLFxuICAnc3RheScsICdmYWxsJywgJ3JlYWNoJywgJ3JlbWFpbicsICdzdWdnZXN0JywgJ3JhaXNlJywgJ3Bhc3MnLCAnc2VsbCcsXG4gICdyZXF1aXJlJywgJ3JlcG9ydCcsICdkZWNpZGUnLCAncHVsbCcsICdyZXR1cm4nLCAnZGV2ZWxvcCcsICdhY2NlcHQnLCAnYXJndWUnLFxuICAnZGllJywgJ2JlbGlldmUnLCAnc2VlbScsICdoYXRlJywgJ2xvdmUnLCAnbGlrZScsICd3YW50JywgJ2hvcGUnLCAnd2lzaCcsXG4gICdzdXBwb3NlJywgJ2ltYWdpbmUnLCAncmVhbGl6ZScsICdub3RpY2UnLCAncmVjb2duaXplJywgJ3dvbmRlcicsXG4gICdwcmV0ZW5kJywgJ3JlZnVzZScsICdjbGFpbScsICdhbm5vdW5jZScsICdleHBsYWluJywgJ2Rlc2NyaWJlJywgJ21lbnRpb24nLFxuICAnZGlzY3VzcycsICdyZWNvbW1lbmQnLCAnYWR2aXNlJywgJ3dhcm4nLCAncHJvbWlzZScsICdhZ3JlZScsXG4gICdkaXNhZ3JlZScsICdyZWplY3QnLCAnZGVueScsICdhZG1pdCcsICdjb25mZXNzJywgJ2RlY2xhcmUnLFxuICAnZGlzY292ZXInLCAnaW52ZW50JywgJ2Rlc2lnbicsICdwcm9kdWNlJywgJ3ByZXBhcmUnLCAnYXJyYW5nZScsICdvcmdhbml6ZScsXG4gICdtYW5hZ2UnLCAnY29udHJvbCcsICdvcGVyYXRlJywgJ3J1bicsICdkcml2ZScsICdmbHknLCAnc3dpbScsICdqdW1wJyxcbiAgJ2NsaW1iJywgJ3B1c2gnLCAncHVsbCcsICdsaWZ0JywgJ2NhcnJ5JywgJ2RlbGl2ZXInLCAncmVjZWl2ZScsICdvYnRhaW4nLFxuICAnYWNoaWV2ZScsICdhY2NvbXBsaXNoJywgJ2NvbXBsZXRlJywgJ2ZpbmlzaCcsICdlbmQnLCAnc3RvcCcsICdwYXVzZScsXG4gICdwcm9jZWVkJywgJ2FkdmFuY2UnLCAncHJvZ3Jlc3MnLCAnaW1wcm92ZScsICdpbmNyZWFzZScsXG4gICdkZWNyZWFzZScsICdyZWR1Y2UnLCAnZXhwYW5kJywgJ2V4dGVuZCcsICdsaW1pdCcsICdyZXN0cmljdCcsICdwcmV2ZW50JyxcbiAgJ2F2b2lkJywgJ2VzY2FwZScsICdwcm90ZWN0JywgJ2RlZmVuZCcsICdhdHRhY2snLCAnZmlnaHQnLCAnd2luJywgJ2xvc2UnLFxuICAnc3VjY2VlZCcsICdmYWlsJywgJ2F0dGVtcHQnLCAncHJhY3RpY2UnLCAndHJhaW4nLCAnc3R1ZHknLCAndGVhY2gnLFxuICAnZXhwbG9yZScsICdzZWFyY2gnLCAnc2VlaycsICdodW50JywgJ2NhdGNoJywgJ2NhcHR1cmUnLFxuICAncmVsZWFzZScsICdmcmVlJywgJ3NhdmUnLCAncmVzY3VlJywgJ2hlbHAnLCAnc3VwcG9ydCcsICdhc3Npc3QnLFxuICAnZW1wbG95JywgJ2hpcmUnLCAnZmlyZScsICdwcm9tb3RlJywgJ2RlbW90ZScsICdhcHBvaW50JywgJ2VsZWN0JywgJ3ZvdGUnLFxuICAnY2hvb3NlJywgJ3NlbGVjdCcsICdwcmVmZXInLCAnZGV0ZXJtaW5lJywgJ2NvbmNsdWRlJywgJ2p1ZGdlJyxcbiAgJ2V2YWx1YXRlJywgJ2Fzc2VzcycsICdtZWFzdXJlJywgJ2NhbGN1bGF0ZScsICdjb3VudCcsICdlc3RpbWF0ZScsICdwcmVkaWN0JyxcbiAgJ2ZvcmVjYXN0JywgJ3BsYW4nLCAnc2NoZWR1bGUnLCAnYm9vaycsXG4gICdvcmRlcicsICdyZXF1ZXN0JywgJ2RlbWFuZCcsICdjb21tYW5kJywgJ2RpcmVjdCcsICdpbnN0cnVjdCcsICdndWlkZScsXG4gICdhY2NvbXBhbnknLCAnam9pbicsICdsZWF2ZScsICdkZXBhcnQnLCAnYXJyaXZlJyxcbiAgJ2VudGVyJywgJ2V4aXQnLCAnYXBwcm9hY2gnLCAnd2l0aGRyYXcnLCAncmV0cmVhdCcsICdzaGlmdCcsXG4gICd0cmFuc2ZlcicsICd0cmFuc3BvcnQnLCAnY29sbGVjdCcsICdnYXRoZXInLFxuICAnZGlzdHJpYnV0ZScsICdzcHJlYWQnLCAnc2NhdHRlcicsICdjb25jZW50cmF0ZScsICdmb2N1cycsICdhaW0nLCAndGFyZ2V0JyxcbiAgJ2hpdCcsICdtaXNzJywgJ3N0cmlrZScsICd0b3VjaCcsICdncmFiJyxcbiAgJ3Blcm1pdCcsICdlbmFibGUnLCAnZm9yY2UnLCAnY29tcGVsJywgJ29ibGlnZScsXG4gICdkZXNpcmUnLCAnYW50aWNpcGF0ZScsICdmZWFyJywgJ2RyZWFkJywgJ3dvcnJ5JyxcbiAgJ2NvbmNlcm4nLCAnaW50ZXJlc3QnLCAnYXR0cmFjdCcsICdhcHBlYWwnLCAncGxlYXNlJywgJ3NhdGlzZnknLCAnZGlzYXBwb2ludCcsXG4gICdzdXJwcmlzZScsICdhbWF6ZScsICdhc3RvbmlzaCcsICdzaG9jaycsICdmcmlnaHRlbicsICdzY2FyZScsICd0ZXJyaWZ5JyxcbiAgJ2NhbG0nLCAncmVsYXgnLCAncmVzdCcsICdzbGVlcCcsICd3YWtlJywgJ3Jpc2UnLCAnbGllJyxcbiAgJ2xlYW4nLCAnYmVuZCcsICd0d2lzdCcsICdzcGluJywgJ3JvdGF0ZScsICdyZXZvbHZlJywgJ29yYml0JyxcbiAgJ2NpcmNsZScsICdzdXJyb3VuZCcsICdlbmNsb3NlJywgJ2NvbnRhaW4nLCAnZXhjbHVkZScsICdpbnZvbHZlJyxcbiAgJ2FmZmVjdCcsICdpbmZsdWVuY2UnLCAnaW1wYWN0JywgJ2FsdGVyJywgJ21vZGlmeScsICdhZGp1c3QnLFxuICAnYWRhcHQnLCAndHJhbnNmb3JtJywgJ2NvbnZlcnQnLCAndHJhbnNsYXRlJywgJ2ludGVycHJldCcsXG4gICdjbGFyaWZ5JywgJ3NpbXBsaWZ5JywgJ2NvbXBsaWNhdGUnLCAnY29uZnVzZScsICdwdXp6bGUnLCAnbXlzdGlmeScsXG4gICdyZXZlYWwnLCAnZXhwb3NlJywgJ2hpZGUnLCAnY29uY2VhbCcsICdjb3ZlcicsICd1bmNvdmVyJyxcbiAgJ2xvY2F0ZScsICdpZGVudGlmeScsICdkaXN0aW5ndWlzaCcsICdkaWZmZXJlbnRpYXRlJyxcbiAgJ2NvbXBhcmUnLCAnY29udHJhc3QnLCAnbWF0Y2gnLCAnZml0JywgJ3N1aXQnLCAnd29yaycsICdmdW5jdGlvbicsXG4gICdwZXJmb3JtJywgJ2V4ZWN1dGUnLCAnYXR0YWluJywgJ2dhaW4nLFxuICAnZWFybicsICdjb3N0JywgJ2NoYXJnZScsICdwcmljZScsICd2YWx1ZScsICd3b3J0aCcsXG4gICdyaWNoJywgJ3Bvb3InLCAnY2hlYXAnLCAnZXhwZW5zaXZlJywgJ2ZyZWUnLCAncGFpZCcsICdhZmZvcmRhYmxlJywgJ2Nvc3RseScsXG5dO1xuXG4vLyBBZ2dyZXNzaXZlIHRpZXI6IEV2ZXJ5dGhpbmcgKyBtb3JlIChkZWR1cGxpY2F0ZWQpXG5leHBvcnQgY29uc3QgRU5fQUdHUkVTU0lWRSA9IFtcbiAgLi4uRU5fQkFMQU5DRUQsXG4gIC8vIE9iamVjdCBwcm9ub3Vuc1xuICAnaGUnLCAnaGltJywgJ2hpcycsICdoaW1zZWxmJywgJ3NoZScsICdoZXInLCAnaGVycycsICdoZXJzZWxmJywgJ2l0JywgJ2l0cycsXG4gICdpdHNlbGYnLCAndGhleScsICd0aGVtJywgJ3RoZWlyJywgJ3RoZWlycycsICd0aGVtc2VsdmVzJyxcbiAgLy8gUmVsYXRpdmUgcHJvbm91bnNcbiAgJ3doaWNoJywgJ3dobycsICd3aG9tJywgJ3dob3NlJywgJ3doYXQnLCAnd2hlcmUnLCAnd2hlbicsICd3aHknLCAnaG93JyxcbiAgLy8gSW50ZW5zaWZpZXJzICYgQWR2ZXJicyAoZGVkdXBsaWNhdGVkKVxuICAnZXh0cmVtZWx5JywgJ2luY3JlZGlibHknLCAnYWJzb2x1dGVseScsICd0b3RhbGx5JywgJ2NvbXBsZXRlbHknLCAndXR0ZXJseScsXG4gICdoaWdobHknLCAncGFydGljdWxhcmx5JywgJ2VzcGVjaWFsbHknLCAnZnVuZGFtZW50YWxseScsXG4gICdnZW5lcmFsbHknLCAndHlwaWNhbGx5JywgJ3VzdWFsbHknLCAnbm9ybWFsbHknLCAnY29tbW9ubHknLCAnZnJlcXVlbnRseScsXG4gICdyZWd1bGFybHknLCAnY29uc2lzdGVudGx5JywgJ2NvbnN0YW50bHknLCAnY29udGludW91c2x5JywgJ3BlcnBldHVhbGx5JyxcbiAgJ2Fsd2F5cycsICduZXZlcicsICdldmVyJywgJ2hvd2V2ZXInLCAnbW9yZW92ZXInLCAnZnVydGhlcm1vcmUnLCAnYWRkaXRpb25hbGx5JyxcbiAgJ2VpdGhlcicsICduZWl0aGVyJywgJ2xlYXN0JywgJ2xlc3MnLCAnYmV5b25kJyxcbl07XG5cbmV4cG9ydCBjb25zdCBFTl9CTEFDS0xJU1QgPSB7XG4gIGdlbnRsZTogRU5fR0VOVExFLFxuICBiYWxhbmNlZDogRU5fQkFMQU5DRUQsXG4gIGFnZ3Jlc3NpdmU6IEVOX0FHR1JFU1NJVkUsXG59O1xuIiwgIi8qKlxuICogR2VybWFuIGZpbGxlciB3b3JkcyBvcmdhbml6ZWQgYnkgY29tcHJlc3Npb24gbGV2ZWwuXG4gKiBTb3VyY2U6IExpbmd1aXN0aWMgcmVzZWFyY2gsIE5MUCByZXNvdXJjZXNcbiAqL1xuXG4vLyBHZW50bGUgdGllcjogT25seSBwb2xpdGUgZmlsbGVyXG5leHBvcnQgY29uc3QgREVfR0VOVExFID0gW1xuICAnYml0dGUnLCAnZGFua2UnLCAnZGFua2VuJywgJ3ZpZWxlbicsICdoZXJ6bGljaCcsICdmcmV1dCcsXG4gICdcdTAwRTRobScsICdcdTAwRTRoJywgJ2htJywgJ2htbScsICdvaCcsICdhY2gnLCAnbmEnLCAndGphJyxcbl07XG5cbi8vIEJhbGFuY2VkIHRpZXI6IH4yNTAgaGlnaC1mcmVxdWVuY3kgR2VybWFuIHdvcmRzIChkZWR1cGxpY2F0ZWQpXG5leHBvcnQgY29uc3QgREVfQkFMQU5DRUQgPSBbXG4gIC4uLkRFX0dFTlRMRSxcbiAgLy8gQXJ0aWNsZXNcbiAgJ2RlcicsICdkaWUnLCAnZGFzJywgJ2RlbicsICdkZW0nLCAnZGVzJywgJ2VpbicsICdlaW5lJywgJ2VpbmVuJywgJ2VpbmVtJywgJ2VpbmVzJyxcbiAgLy8gUHJvbm91bnNcbiAgJ2ljaCcsICdtaWNoJywgJ21pcicsICdtZWluJywgJ21laW5lJywgJ21laW5lcicsICd1bnMnLCAndW5zZXJlJywgJ3Vuc2VyZXInLFxuICAnZHUnLCAnZGljaCcsICdkaXInLCAnZGVpbicsICdkZWluZScsICdlcicsICdpaG4nLCAnaWhtJywgJ3NlaW4nLCAnc2VpbmUnLFxuICAnc2llJywgJ2locicsICdpaHJlJywgJ2VzJywgJ3dpcicsICdldWNoJywgJ21hbicsICdtZW5zY2gnLFxuICAvLyBDb3B1bGFzXG4gICdpc3QnLCAnc2luZCcsICd3YXInLCAnd2FyZW4nLCAnc2VpbicsICdnZXdlc2VuJywgJ3dlcmRlJywgJ3dlcmRlbicsICd3dXJkZScsXG4gIC8vIEF1eGlsaWFyaWVzXG4gICdoYWJlbicsICdoYXQnLCAnaGFiZScsICdoYXR0ZW4nLCAna1x1MDBGNm5uZW4nLCAna2FubicsICdtXHUwMEZDc3NlbicsICdzb2xsZW4nLCAnZFx1MDBGQ3JmZW4nLFxuICAnbVx1MDBGNmdlbicsICdtb2NodGUnLCAnd29sbGVuJywgJ3dpbGwnLCAnd29sbHRlJywgJ211c3N0ZScsICdzb2xsdGUnLCAna29ubnRlJyxcbiAgLy8gUHJlcG9zaXRpb25zXG4gICd2b24nLCAnaW4nLCAnenUnLCAnZlx1MDBGQ3InLCAnbWl0JywgJ2FuJywgJ2F1ZicsICdiZWknLCAnbmFjaCcsICdcdTAwRkNiZXInLCAndW50ZXInLFxuICAnZHVyY2gnLCAndW0nLCAnYmlzJywgJ29obmUnLCAnYXVzJywgJ3ZvcicsICd6d2lzY2hlbicsICdnZWdlbicsICdzZWl0JyxcbiAgJ3dcdTAwRTRocmVuZCcsICdoaW50ZXInLCAnbmViZW4nLCAnb2JlcmhhbGInLCAndW50ZXJoYWxiJywgJ2lubmVyaGFsYicsICdhdVx1MDBERmVyaGFsYicsXG4gICdzdGF0dCcsICd0cm90eicsICd3ZWdlbicsICdnZW1cdTAwRTRcdTAwREYnLCAnbGF1dCcsICdlbnRsYW5nJywgJ2VudGdlZ2VuJywgJ2Zlcm4nLFxuICAnamVuc2VpdHMnLCAna25hcCcsICduXHUwMEY2cmRsaWNoJywgJ1x1MDBGNnN0bGljaCcsICdzXHUwMEZDZGxpY2gnLCAnd2VzdGxpY2gnLCAnYWInLFxuICAvLyBDb25qdW5jdGlvbnNcbiAgJ3VuZCcsICdvZGVyJywgJ2FiZXInLCAnZGVubicsICdzb25kZXJuJywgJ3dlaWwnLCAnZGEnLCAnb2J3b2hsJywgJ3dlbm4nLFxuICAnZmFsbHMnLCAnYmV2b3InLCAnbmFjaGRlbScsICdzb2JhbGQnLCAnYWxzJywgJ3dpZScsICdkYXNzJywgJ29iJyxcbiAgJ2VudHdlZGVyJywgJ25vY2gnLCAnc293b2hsJywgJ3dlZGVyJyxcbiAgLy8gRGVtb25zdHJhdGl2ZXNcbiAgJ2RpZXNlcicsICdkaWVzZScsICdkaWVzZXMnLCAnZGllc2VtJywgJ2RpZXNlbicsICdqZW5lcicsICdqZW5lJywgJ3NvbGNoJyxcbiAgJ3NvbGNoZXInLCAnc2VsYnN0JywgJ3NlbGJlcicsICdlYmVuJywgJ2dlcmFkZScsICduXHUwMEU0bWxpY2gnLFxuICAvLyBRdWFudGlmaWVyc1xuICAnYWxsZScsICdhbGxlcycsICd2aWVsJywgJ3ZpZWxlJywgJ3ZpZWxlcicsICdtZWhyJywgJ21laHJlcmUnLCAnd2VuaWcnLFxuICAnd2VuaWdlJywgJ21hbmNoJywgJ21hbmNoZScsICdqZWRlcicsICdqZWRlJywgJ2plZGVzJywgJ25pY2h0cycsICdldHdhcycsXG4gICdpcmdlbmQnLCAnaXJnZW5kZWluJywgJ2VpbmlnZScsICd2ZXJzY2hpZWRlbmUnLCAnemFobHJlaWNoZScsICdrZWluZScsXG4gICdrZWluZXInLCAna2VpbmVzJywgJ25pZW1hbmQnLFxuICAvLyBJbnRlbnNpZmllcnMvRmlsbGVyc1xuICAnYXVjaCcsICdzbycsICdhbHNvJywgJ2hhbHQnLCAnbWFsJywgJ2RvY2gnLCAnZWlnZW50bGljaCcsICd0YXRzXHUwMEU0Y2hsaWNoJyxcbiAgJ3dpcmtsaWNoJywgJ3NlaHInLCAnemllbWxpY2gnLCAnc2Nob24nLCAnbnVyJywgJ2FsbGVpbicsICdpbW1lcicsXG4gICduaWUnLCAnbmllbWFscycsICdvZnQnLCAnbWFuY2htYWwnLCAnaFx1MDBFNHVmaWcnLCAnc2VsdGVuJyxcbiAgJ3ZpZWxsZWljaHQnLCAnd2FocnNjaGVpbmxpY2gnLCAnc2ljaGVyJywgJ2tsYXInLCAnbmF0XHUwMEZDcmxpY2gnLCAnZnJlaWxpY2gnLFxuICAnXHUwMEZDYnJpZ2VucycsICdhbGxlcmRpbmdzJywgJ2plZG9jaCcsICdzb25zdCcsICdkYW5uJywgJ2pldHp0JywgJ2hldXRlJyxcbiAgJ21vcmdlbicsICdnZXN0ZXJuJywgJ2hpZXInLCAnZG9ydCcsICdkYScsICd3b2hpbicsICdoZXInLCAnd2VnJywgJ2hpbicsXG4gICdyYW4nLCAncnVtJywgJ2hlcnVtJywgJ2RhYmVpJywgJ2Rhdm9uJywgJ2RhcnVtJywgJ2RhbWl0JywgJ2RhZlx1MDBGQ3InLFxuICAnZGFnZWdlbicsICdkYXp1JywgJ2RhaGVyJywgJ2Rhclx1MDBGQ2JlcicsICdkYXJ1bnRlcicsICdkYXp3aXNjaGVuJywgJ2RyYW4nLFxuICAnZHJhdWYnLCAnZHJpbicsICdkclx1MDBGQ2JlcicsICdkcnVudGVyJywgJ2phJywgJ25laW4nLFxuICAvLyBIaWdoLWZyZXF1ZW5jeSB2ZXJic1xuICAnbWFjaGVuJywgJ21hY2h0JywgJ3NhZ2VuJywgJ3NhZ3QnLCAnc2FndGUnLCAnZ2ViZW4nLCAnZ2lidCcsICdnYWInLFxuICAnbmVobWVuJywgJ25pbW10JywgJ25haG0nLCAnZmluZGVuJywgJ2ZpbmRldCcsICdmYW5kJywgJ3dpc3NlbicsICd3ZWlcdTAwREYnLFxuICAnd3Vzc3RlJywgJ2RlbmtlbicsICdkZW5rdCcsICdkYWNodGUnLCAnc2VoZW4nLCAnc2llaHQnLCAnc2FoJywgJ2tvbW1lbicsXG4gICdrb21tdCcsICdrYW0nLCAnZ2VoZW4nLCAnZ2VodCcsICdnaW5nJywgJ3N0ZWhlbicsICdzdGVodCcsICdsaWVnZW4nLCAnbGllZ3QnLFxuICAnbGFzc2VuJywgJ2xcdTAwRTRzc3QnLCAnaGFsdGVuJywgJ2hcdTAwRTRsdCcsICdoaWVsdCcsICdicmluZ2VuJywgJ2JyaW5ndCcsICdicmFjaHRlJyxcbiAgJ2JsZWliZW4nLCAnYmxlaWJ0JywgJ2JsaWViJywgJ2ZyYWdlbicsICdmcmFndCcsICdmcmFndGUnLCAnYW50d29ydGVuJyxcbiAgJ2FudHdvcnRldCcsICd6ZWlnZW4nLCAnemVpZ3QnLCAnemVpZ3RlJywgJ3NwcmVjaGVuJywgJ3NwcmljaHQnLCAnc3ByYWNoJyxcbiAgJ2hcdTAwRjZyZW4nLCAnaFx1MDBGNnJ0JywgJ2hcdTAwRjZydGUnLCAnbGVybmVuJywgJ2xlcm50JywgJ2xlcm50ZScsICd2ZXJzdGVoZW4nLCAndmVyc3RlaHQnLFxuICAndmVyc3RhbmQnLCAnYmVnaW5uZW4nLCAnYmVnaW5udCcsICdiZWdhbm4nLCAnZW5kZW4nLCAnZW5kZXQnLCAnZW5kZXRlJyxcbiAgJ2FyYmVpdGVuJywgJ2FyYmVpdGV0JywgJ2FyYmVpdGV0ZScsICdsZWJlbicsICdsZWJ0JywgJ2xlYnRlJywgJ3NwaWVsZW4nLFxuICAnc3BpZWx0JywgJ3NwaWVsdGUnLCAnc2NoYXVlbicsICdzY2hhdXQnLCAnc2NoYXV0ZScsICdzY2hyZWliZW4nLCAnc2NocmVpYnQnLFxuICAnc2NocmllYicsICdsZXNlbicsICdsaWVzdCcsICdsYXMnLCAnbWVpbmVuJywgJ21laW50JywgJ21laW50ZScsICdnbGF1YmVuJyxcbiAgJ2dsYXVidCcsICdnbGF1YnRlJywgJ2hvZmZlbicsICdob2ZmdCcsICdob2ZmdGUnLCAnYnJhdWNoZW4nLCAnYnJhdWNodCcsXG4gICdicmF1Y2h0ZScsICdkYXJmJywgJ2R1cmZ0ZScsICdzb2xsJywgJ211c3MnLCAnbWFnJywgJ2tlbm5lbicsICdrZW5udCcsXG4gICdrYW5udGUnLCAnaGVpXHUwMERGZW4nLCAnaGVpXHUwMERGdCcsICdoaWVcdTAwREYnLFxuXTtcblxuLy8gQWdncmVzc2l2ZSB0aWVyIChkZWR1cGxpY2F0ZWQpXG5leHBvcnQgY29uc3QgREVfQUdHUkVTU0lWRSA9IFtcbiAgLi4uREVfQkFMQU5DRUQsXG4gICdpaG5lbicsICdpaHJlcicsICdzZWluZW4nLCAnZGVyZW4nLCAnZGVzc2VuJywgJ3dlbGNoZXInLCAnd2VsY2hlJywgJ3dlcicsXG4gICd3YXMnLCAnd28nLCAnd2llJywgJ2dlbmF1Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBERV9CTEFDS0xJU1QgPSB7XG4gIGdlbnRsZTogREVfR0VOVExFLFxuICBiYWxhbmNlZDogREVfQkFMQU5DRUQsXG4gIGFnZ3Jlc3NpdmU6IERFX0FHR1JFU1NJVkUsXG59O1xuIiwgIi8qKlxuICogTXVsdGktbGFuZ3VhZ2UgZGljdGlvbmFyeSBpbmRleC5cbiAqIEV4cG9ydHMgYWxsIGxhbmd1YWdlLXNwZWNpZmljIGZpbGxlciB3b3JkIGRpY3Rpb25hcmllcy5cbiAqL1xuXG5leHBvcnQgeyBFTl9CTEFDS0xJU1QgfSBmcm9tICcuL2VuLWZpbGxlcic7XG5leHBvcnQgeyBERV9CTEFDS0xJU1QgfSBmcm9tICcuL2RlLWZpbGxlcic7XG5cbi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIGxhbmd1YWdlIGNvZGVzXG5leHBvcnQgdHlwZSBMYW5ndWFnZUNvZGUgPSAnZW4nIHwgJ2RlJztcblxuLy8gTWFwIG9mIGxhbmd1YWdlIGNvZGUgdG8gYmxhY2tsaXN0IG9iamVjdFxuaW1wb3J0IHsgRU5fQkxBQ0tMSVNUIH0gZnJvbSAnLi9lbi1maWxsZXInO1xuaW1wb3J0IHsgREVfQkxBQ0tMSVNUIH0gZnJvbSAnLi9kZS1maWxsZXInO1xuXG5leHBvcnQgY29uc3QgTEFOR1VBR0VfRElDVElPTkFSSUVTOiBSZWNvcmQ8TGFuZ3VhZ2VDb2RlLCB7IGdlbnRsZTogc3RyaW5nW107IGJhbGFuY2VkOiBzdHJpbmdbXTsgYWdncmVzc2l2ZTogc3RyaW5nW10gfT4gPSB7XG4gIGVuOiBFTl9CTEFDS0xJU1QsXG4gIGRlOiBERV9CTEFDS0xJU1QsXG59O1xuXG5leHBvcnQgY29uc3QgU1VQUE9SVEVEX0xBTkdVQUdFUzogTGFuZ3VhZ2VDb2RlW10gPSBbJ2VuJywgJ2RlJ107XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT0gTVVMVEktTEFOR1VBR0UgU1VQUE9SVCAoRU4vREUgT05MWSkgPT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHtcbiAgTEFOR1VBR0VfRElDVElPTkFSSUVTLFxuICB0eXBlIExhbmd1YWdlQ29kZSxcbiAgU1VQUE9SVEVEX0xBTkdVQUdFUyxcbn0gZnJvbSAnLi9kaWN0aW9uYXJpZXMnO1xuXG5leHBvcnQgdHlwZSB7IExhbmd1YWdlQ29kZSB9O1xuXG5leHBvcnQgdHlwZSBDb21wcmVzc2lvbkxldmVsID0gXCJnZW50bGVcIiB8IFwiYmFsYW5jZWRcIiB8IFwiYWdncmVzc2l2ZVwiO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PSBTVEFUSVNUSUNTIFRSQUNLSU5HID09PT09PT09PT09PT09PT09PT09XG5cbmludGVyZmFjZSBDb21wcmVzc2lvblN0YXRzIHtcbiAgdG90YWxDb21wcmVzc2lvbnM6IG51bWJlcjtcbiAgdG90YWxDaGFyc09yaWdpbmFsOiBudW1iZXI7XG4gIHRvdGFsQ2hhcnNDb21wcmVzc2VkOiBudW1iZXI7XG4gIGxhc3RVcGRhdGVkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUGVyLWluc3RhbmNlIHN0YXRzIHRvIGF2b2lkIHN0YWxlIGRhdGEgZHVyaW5nIGhvdC1yZWxvYWQuXG4gKiBFYWNoIFRyb2dsb2R5dGUgaW5zdGFuY2UgZ2V0cyBpdHMgb3duIHN0YXRzIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlU3RhdHMoKTogQ29tcHJlc3Npb25TdGF0cyB7XG4gIHJldHVybiB7XG4gICAgdG90YWxDb21wcmVzc2lvbnM6IDAsXG4gICAgdG90YWxDaGFyc09yaWdpbmFsOiAwLFxuICAgIHRvdGFsQ2hhcnNDb21wcmVzc2VkOiAwLFxuICAgIGxhc3RVcGRhdGVkOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gIH07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IExBTkdVQUdFIERFVEVDVElPTiAoRU4vREUgT05MWSkgLSBJTVBST1ZFRCA9PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciB0ZXh0IGlzIEVuZ2xpc2ggb3IgR2VybWFuIHVzaW5nIHdlaWdodGVkIHdvcmQgZnJlcXVlbmN5IGFuYWx5c2lzLlxuICogXG4gKiBTdHJhdGVneTpcbiAqIC0gSGlnaC13ZWlnaHQgd29yZHM6IGFydGljbGVzLCBwcm9ub3VucywgY29tbW9uIGZ1bmN0aW9uIHdvcmRzIChzdHJvbmcgc2lnbmFsKVxuICogLSBMb3ctd2VpZ2h0IHdvcmRzOiB0ZWNobmljYWwgdGVybXMgdGhhdCBhcHBlYXIgaW4gYm90aCBsYW5ndWFnZXMnIGNvZGUgY29udGV4dHNcbiAqIC0gQ29uZmlkZW5jZSB0aHJlc2hvbGQ6IGlmIHJhdGlvIDwgMS41OjEsIGRlZmF1bHQgdG8gRW5nbGlzaCAoc2FmZXIgZmFsbGJhY2spXG4gKiAtIEFEREVEOiBMb3dlcmVkIHRocmVzaG9sZCB0byAxLjI6MSB0byBoYW5kbGUgY29kZS1taXhlZC9iaWxpbmd1YWwgcHJvbXB0cyBiZXR0ZXJcbiAqL1xuXG4vLyBIaWdoLWNvbmZpZGVuY2UgRW5nbGlzaCBpbmRpY2F0b3JzIFx1MjAxNCByYXJlIG9yIGFic2VudCBpbiBHZXJtYW5cbmNvbnN0IEVOX0hJR0ggPSBuZXcgU2V0KFtcbiAgJ3RoZScsICdhJywgJ2FuJywgJ2lzJywgJ2FyZScsICd3YXMnLCAnd2VyZScsICdiZScsICdiZWVuJywgJ2hhdmUnLCAnaGFzJywgJ2hhZCcsIFxuICAnZG8nLCAnZG9lcycsICdkaWQnLCAnd2lsbCcsICd3b3VsZCcsICdjb3VsZCcsICdzaG91bGQnLCAnbWF5JywgJ21pZ2h0JywgJ211c3QnLFxuICAndGhpcycsICd0aGF0JywgJ3RoZXNlJywgJ3Rob3NlJywgJ2l0JywgJ2l0cycsICd0aGV5JywgJ3RoZW0nLCAndGhlaXInLCAndGhlcmUnLFxuICAnaGVyZScsICd3aGF0JywgJ3doZW4nLCAnd2hlcmUnLCAnd2hvJywgJ2hvdycsICd3aHknLCAnd2hpY2gnLCAnbm90JywgJ25vJywgJ25vcicsXG4gICdidXQnLCAnYW5kJywgJ29yJywgJ2ZvcicsICdzbycsICdpZicsICd0aGVuJywgJ3RoYW4nLCAndG9vJywgJ3ZlcnknLCAnanVzdCcsXG4gICdhYm91dCcsICdhYm92ZScsICdhZnRlcicsICdhZ2FpbicsICdhbGwnLCAnYWxzbycsICdhbnknLCAnYmVjYXVzZScsICdiZWZvcmUnLFxuICAnYmV0d2VlbicsICdib3RoJywgJ2NhbicsICdlYWNoJywgJ2Zyb20nLCAnZnVydGhlcicsICdnZXQnLCAnZ290JywgJ2hpbScsICdoaXMnLFxuICAnaW50bycsICdtb3JlJywgJ21vc3QnLCAnb3RoZXInLCAnb3VyJywgJ291dCcsICdvdmVyJywgJ293bicsICdzYW1lJywgJ3NvbWUnLFxuICAnc3VjaCcsICd0aHJvdWdoJywgJ3VuZGVyJywgJ3VudGlsJywgJ3VwJywgJ3doaWxlJyxcbl0pO1xuXG4vLyBIaWdoLWNvbmZpZGVuY2UgR2VybWFuIGluZGljYXRvcnMgXHUyMDE0IHJhcmUgb3IgYWJzZW50IGluIEVuZ2xpc2hcbi8vIEZJWCAjMzogQWRkZWQgJ3dcdTAwRkNyZGUnIGhlcmUgKHdhcyBpbmNvcnJlY3RseSBpbiBORVVUUkFMX1dPUkRTKVxuY29uc3QgREVfSElHSCA9IG5ldyBTZXQoW1xuICAnZGVyJywgJ2RpZScsICdkYXMnLCAnZGVuJywgJ2RlbScsICdkZXMnLCAnZWluJywgJ2VpbmUnLCAnZWluZXInLCAnZWluZW0nLCAnZWluZXMnLFxuICAnaWNoJywgJ21pY2gnLCAnbWlyJywgJ2R1JywgJ2RpY2gnLCAnZGlyJywgJ2VyJywgJ3NpZScsICdlcycsICd3aXInLCAndW5zJywgJ2locicsIFxuICAnZXVjaCcsICdpc3QnLCAnc2luZCcsICd3YXInLCAnd2FyZW4nLCAnc2VpbicsICdoYWJlbicsICdoYXQnLCAnaGFiZScsXG4gICd1bmQnLCAnb2RlcicsICdhYmVyJywgJ25pY2h0JywgJ2F1Y2gnLCAnc2VocicsICd2aWVsJywgJ21laHInLCBcbiAgJ2FsbGUnLCAnYWxsZXMnLCAnZGllc2VyJywgJ2RpZXNlJywgJ2RpZXNlcycsICdqZWRlcicsICdqZWRlJywgJ2plZGVzJywgJ2tlaW4nLCBcbiAgJ2tlaW5lJywgJ21pdCcsICduYWNoJywgJ3ZvbicsICd6dScsICdiZWknLCAnYXVmJywgJ2F1cycsICdpbicsICdhbicsXG4gICdmXHUwMEZDcicsICd1bScsICdnZWdlbicsICdvaG5lJywgJ2R1cmNoJywgJ3dpZScsICd3YXMnLCAnd2VubicsICd3ZWlsJyxcbiAgJ3NvbGx0ZScsICdrXHUwMEY2bm50ZScsICdtXHUwMEZDc3N0ZScsICdkYXJmJywgJ2RcdTAwRkNyZmUnLCAnbWFnJywgJ21cdTAwRjZnZScsICd3aWxsJywgJ3dvbGxlbicsXG4gICd3XHUwMEZDcmRlJywgLy8gRklYICMzOiBNb3ZlZCBmcm9tIE5FVVRSQUxfV09SRFMgdG8gREVfSElHSFxuXSk7XG5cbi8vIExvdy13ZWlnaHQgd29yZHMgdGhhdCBhcHBlYXIgaW4gYm90aCBsYW5ndWFnZXMgKGNvZGUgY29udGV4dCBub2lzZSkgXHUyMDE0IGV4Y2x1ZGVkIGZyb20gZGV0ZWN0aW9uXG5jb25zdCBORVVUUkFMX1dPUkRTID0gbmV3IFNldChbXG4gIC8vIENvbW1vbiBFbmdsaXNoL0dlcm1hbiBvdmVybGFwIG9yIGNvZGUga2V5d29yZHNcbiAgJ2NvZGUnLCAnZnVuY3Rpb24nLCAncmV0dXJuJywgJ2NsYXNzJywgJ2ltcG9ydCcsICdleHBvcnQnLCBcbiAgJ2NvbnN0JywgJ2xldCcsICd2YXInLCAnaWYnLCAnZWxzZScsICdmb3InLCAnd2hpbGUnLFxuICAnd2lyZCcsIC8vICd3XHUwMEZDcmRlJyByZW1vdmVkIFx1MjAxNCBub3cgaW4gREVfSElHSCAoRklYICMzKVxuICAnZGFcdTAwREYnLFxuXSk7XG5cbi8vIE9QVElNSVpBVElPTiAjMTogSG9pc3RlZCByZWdleCB0byBhdm9pZCByZWNvbXBpbGF0aW9uIG9uIGV2ZXJ5IGNhbGxcbmNvbnN0IFdPUkRfVE9LRU5fUkVHRVggPSAvXFxiW2Etelx1MDBFNFx1MDBGNlx1MDBGQ1x1MDBERl17Myx9XFxiL2c7XG5cbi8qKlxuICogRGV0ZWN0IGxhbmd1YWdlIHdpdGggY29uZmlkZW5jZSB0aHJlc2hvbGQuXG4gKiBSZXR1cm5zICdlbicgYXMgZGVmYXVsdCBpZiB0ZXh0IGlzIHRvbyBzaG9ydCBvciBzaWduYWwgaXMgd2Vhay5cbiAqIEZJWDogTG93ZXJlZCB0aHJlc2hvbGQgZnJvbSAxLjUgdG8gMS4yIHRvIGhhbmRsZSBjb2RlLW1peGVkIHByb21wdHMuXG4gKi9cbmZ1bmN0aW9uIGRldGVjdExhbmd1YWdlKHRleHQ6IHN0cmluZyk6IExhbmd1YWdlQ29kZSB7XG4gIC8vIE9QVElNSVpBVElPTjogTGltaXQgc2NhbiB0byBmaXJzdCAxMDAwIGNoYXJzLiBMYW5ndWFnZSBzaWduYWwgaXMgc3Ryb25nZXN0IGF0IHRoZSBzdGFydC5cbiAgY29uc3Qgc2NhbkxpbWl0ID0gTWF0aC5taW4odGV4dC5sZW5ndGgsIDEwMDApO1xuICBjb25zdCBzbmlwcGV0ID0gdGV4dC5zdWJzdHJpbmcoMCwgc2NhbkxpbWl0KS50b0xvd2VyQ2FzZSgpO1xuICBcbiAgLy8gVXNlIGhvaXN0ZWQgcmVnZXggKFY4IGNhY2hlcyBjb21waWxlZCBieXRlY29kZSlcbiAgY29uc3Qgd29yZHMgPSBzbmlwcGV0Lm1hdGNoKFdPUkRfVE9LRU5fUkVHRVgpIHx8IFtdO1xuICBcbiAgLy8gTmVlZCBtaW5pbXVtIHNpZ25hbCB0byBtYWtlIGEgZGVjaXNpb25cbiAgaWYgKHdvcmRzLmxlbmd0aCA8IDUpIHJldHVybiAnZW4nO1xuICBcbiAgbGV0IGVuU2NvcmUgPSAwO1xuICBsZXQgZGVTY29yZSA9IDA7XG4gIFxuICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZHMpIHtcbiAgICBpZiAoTkVVVFJBTF9XT1JEUy5oYXMod29yZCkpIGNvbnRpbnVlOyAvLyBTa2lwIGNvZGUvdGVjaG5pY2FsIG5vaXNlXG4gICAgXG4gICAgaWYgKEVOX0hJR0guaGFzKHdvcmQpKSBlblNjb3JlKys7XG4gICAgZWxzZSBpZiAoREVfSElHSC5oYXMod29yZCkpIGRlU2NvcmUrKztcbiAgfVxuICBcbiAgLy8gQ29uZmlkZW5jZSB0aHJlc2hvbGQ6IG5lZWQgYXQgbGVhc3QgMS4yeCByYXRpbyB0byBjb21taXQgKHdhcyAxLjUsIGxvd2VyZWQgZm9yIG1peGVkLWxhbmd1YWdlKVxuICBjb25zdCB0b3RhbCA9IGVuU2NvcmUgKyBkZVNjb3JlO1xuICBpZiAodG90YWwgPT09IDApIHJldHVybiAnZW4nO1xuICBcbiAgY29uc3QgcmF0aW8gPSBNYXRoLm1heChlblNjb3JlLCBkZVNjb3JlKSAvIE1hdGgubWluKGVuU2NvcmUsIGRlU2NvcmUpO1xuICBpZiAocmF0aW8gPCAxLjIpIHJldHVybiAnZW4nOyAvLyBXZWFrIHNpZ25hbCBcdTIxOTIgZGVmYXVsdCB0byBFbmdsaXNoICh3YXMgMS41KVxuICBcbiAgcmV0dXJuIGRlU2NvcmUgPiBlblNjb3JlID8gJ2RlJyA6ICdlbic7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09IFNNQVJUIE1PREUgREVURUNUSU9OID09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogRGV0ZWN0cyBpZiB0aGUgcHJvbXB0IGlzIHRlY2huaWNhbCAoY29kZS1oZWF2eSkgb3IgY29udmVyc2F0aW9uYWwuXG4gKiBSZXR1cm5zIHRydWUgaWYgdGVjaG5pY2FsLCBmYWxzZSBpZiBjb252ZXJzYXRpb25hbC5cbiAqIEZJWCAjNDogT25seSBjb3VudCBicmFjZXMgYWRqYWNlbnQgdG8gY29kZSBrZXl3b3Jkcywgbm90IGFsbCBicmFjZXMgaW4gdGV4dC5cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0VGVjaG5pY2FsQ29udGV4dCh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gRklYICM0OiBPbmx5IGNvdW50IGtleXdvcmRzIEFORCBicmFjZXMgdGhhdCBhcmUgbmVhciBrZXl3b3JkcyAobm90IEFMTCBicmFjZXMpXG4gIC8vIFRoaXMgcHJldmVudHMgZmFsc2UgcG9zaXRpdmVzIGZyb20gY3VybHkgcXVvdGVzIG9yIHByb3NlIG1lbnRpb25pbmcgYnJhY2VzXG4gIGNvbnN0IGtleXdvcmRQYXR0ZXJuID0gL1xcYig/OmNvbnN0fGxldHx2YXJ8ZnVuY3Rpb258Y2xhc3N8aW1wb3J0fGV4cG9ydClcXGIvZztcbiAgbGV0IGNvZGVTY29yZSA9IDA7XG4gIGxldCBtYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbDtcbiAgXG4gIHdoaWxlICgobWF0Y2ggPSBrZXl3b3JkUGF0dGVybi5leGVjKHRleHQpKSAhPT0gbnVsbCkge1xuICAgIGNvZGVTY29yZSsrO1xuICAgIC8vIEFsc28gY291bnQgYnJhY2VzIHdpdGhpbiA1IGNoYXJzIG9mIHRoZSBrZXl3b3JkIChsaWtlbHkgY29kZSBjb250ZXh0KVxuICAgIGNvbnN0IGNvbnRleHRTdGFydCA9IE1hdGgubWF4KDAsIG1hdGNoLmluZGV4IC0gNSk7XG4gICAgY29uc3QgY29udGV4dEVuZCA9IE1hdGgubWluKHRleHQubGVuZ3RoLCBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCArIDUpO1xuICAgIGNvbnN0IGNvbnRleHQgPSB0ZXh0LnN1YnN0cmluZyhjb250ZXh0U3RhcnQsIGNvbnRleHRFbmQpO1xuICAgIGNvbnN0IGJyYWNlTWF0Y2hlcyA9IGNvbnRleHQubWF0Y2goL1t7fV0vZyk7XG4gICAgaWYgKGJyYWNlTWF0Y2hlcykgY29kZVNjb3JlICs9IGJyYWNlTWF0Y2hlcy5sZW5ndGg7XG4gIH1cbiAgXG4gIGNvbnN0IHRvdGFsVG9rZW5zID0gdGV4dC5zcGxpdCgvXFxzKy8pLmxlbmd0aDtcbiAgcmV0dXJuIHRvdGFsVG9rZW5zID4gMCAmJiAoY29kZVNjb3JlIC8gdG90YWxUb2tlbnMpID4gMC4yNTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT0gVFJPR0xPRFlURSBDTEFTUyA9PT09PT09PT09PT09PT09PT09PVxuXG4vLyBQcmUtY29tcGlsZWQgcGhyYXNlIHN0cnVjdHVyZSBmb3IgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uXG5pbnRlcmZhY2UgQ29tcGlsZWRQaHJhc2Uge1xuICBwaHJhc2U6IHN0cmluZztcbiAgcmVwbGFjZW1lbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVnZXg6IFJlZ0V4cDtcbn1cblxuLy8gRklYICMxOiBDYXNlLWluc2Vuc2l0aXZlIE1hcCB3cmFwcGVyIGZvciBwaHJhc2UgbG9va3Vwc1xuY2xhc3MgQ2FzZUluc2Vuc2l0aXZlTWFwPFY+IGV4dGVuZHMgTWFwPHN0cmluZywgVj4ge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBWIHwgdW5kZWZpbmVkIHtcbiAgICAvLyBFeGFjdCBtYXRjaCBmaXJzdCAoZmFzdCBwYXRoKVxuICAgIGNvbnN0IGV4YWN0ID0gc3VwZXIuZ2V0KGtleSk7XG4gICAgaWYgKGV4YWN0ICE9PSB1bmRlZmluZWQpIHJldHVybiBleGFjdDtcbiAgICAvLyBDYXNlLWluc2Vuc2l0aXZlIGZhbGxiYWNrXG4gICAgY29uc3QgbG93ZXIgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiB0aGlzKSB7XG4gICAgICBpZiAoay50b0xvd2VyQ2FzZSgpID09PSBsb3dlcikgcmV0dXJuIHY7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyb2dsb2R5dGUge1xuICAvLyBMYW5ndWFnZS1zcGVjaWZpYyBwaHJhc2UgbWFwcyAoaXNvbGF0ZWQgdG8gcHJldmVudCBjcm9zcy1sYW5ndWFnZSBtaXhpbmcpXG4gIHByaXZhdGUgZW5QaHJhc2VzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBwcml2YXRlIGRlUGhyYXNlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgXG4gIC8vIE9QVElNSVpBVElPTiAjMjogVXNlIE1hcCBpbnN0ZWFkIG9mIFJlY29yZCBmb3IgTygxKSBsb29rdXBzIHdpdGhvdXQgcHJvdG90eXBlIGNoYWluIHRyYXZlcnNhbFxuICBwcml2YXRlIHN5bm9ueW1NYXA6IE1hcDxzdHJpbmcsIHN0cmluZz47IFxuICBwcml2YXRlIGNhY2hlZEJsYWNrbGlzdHM6IE1hcDxMYW5ndWFnZUNvZGUsIE1hcDxDb21wcmVzc2lvbkxldmVsLCBTZXQ8c3RyaW5nPj4+O1xuICBwcml2YXRlIHN0YXRzOiBDb21wcmVzc2lvblN0YXRzO1xuICBwcml2YXRlIHJlYWRvbmx5IE1BWF9DT01QUkVTU0lPTlNfQkVGT1JFX1JFU0VUID0gMTAwMDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgTUFYX0NIQVJTX0JFRk9SRV9SRVNFVCA9IDEwXzAwMF8wMDA7XG4gIFxuICAvLyBQcmUtc29ydGVkIHBocmFzZXMgd2l0aCBwcmUtY29tcGlsZWQgcmVnZXhlcyAoUEVSRk9STUFOQ0UgRklYKSAtIGxhbmd1YWdlLXNwZWNpZmljXG4gIHByaXZhdGUgZW5Db21waWxlZFBocmFzZXM6IENvbXBpbGVkUGhyYXNlW107XG4gIHByaXZhdGUgZGVDb21waWxlZFBocmFzZXM6IENvbXBpbGVkUGhyYXNlW107XG4gIFxuICAvLyBCQVRDSEVEIFJFR0VYIE9QVElNSVpBVElPTiAocHJlLWJ1aWx0IGluIGNvbnN0cnVjdG9yKSAtIGxhbmd1YWdlLXNwZWNpZmljXG4gIHByaXZhdGUgZW5CYXRjaGVkUmVnZXg6IFJlZ0V4cCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGRlQmF0Y2hlZFJlZ2V4OiBSZWdFeHAgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBlblJlcGxhY2VtZW50TWFwOiBDYXNlSW5zZW5zaXRpdmVNYXA8c3RyaW5nIHwgdW5kZWZpbmVkPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGRlUmVwbGFjZW1lbnRNYXA6IENhc2VJbnNlbnNpdGl2ZU1hcDxzdHJpbmcgfCB1bmRlZmluZWQ+IHwgbnVsbCA9IG51bGw7XG5cbiAgLy8gT1BUSU1JWkFUSU9OICM0OiBQcmUtY29tcHV0ZSBlbXB0eSByZXBsYWNlbWVudHMgdG8gYXZvaWQgcnVudGltZSBgLnRyaW0oKWAgY2hlY2tzXG4gIHByaXZhdGUgZW1wdHlSZXBsYWNlbWVudHM6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuXG4gIGNvbnN0cnVjdG9yKGRpY3Rpb25hcmllczoge1xuICAgIHBocmFzZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gICAgYmxhY2tsaXN0OiBzdHJpbmdbXTtcbiAgICBzeW5vbnltcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIH0pIHtcbiAgICAvLyBTUExJVCBQSFJBU0VTIElOVE8gTEFOR1VBR0UtU1BFQ0lGSUMgTUFQUyAoRklYICMxNjogUHJldmVudCBjcm9zcy1sYW5ndWFnZSBtaXhpbmcpXG4gICAgY29uc3QgYWxsUGhyYXNlcyA9IGRpY3Rpb25hcmllcy5waHJhc2VzO1xuICAgIHRoaXMuZW5QaHJhc2VzID0ge307XG4gICAgdGhpcy5kZVBocmFzZXMgPSB7fTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IFtwaHJhc2UsIHJlcGxhY2VtZW50XSBvZiBPYmplY3QuZW50cmllcyhhbGxQaHJhc2VzKSkge1xuICAgICAgLy8gRGV0ZWN0IGlmIHBocmFzZSBjb250YWlucyBHZXJtYW4gY2hhcmFjdGVycyBvciBpcyBsaWtlbHkgR2VybWFuXG4gICAgICBjb25zdCBoYXNHZXJtYW5DaGFycyA9IC9bXHUwMEU0XHUwMEY2XHUwMEZDXHUwMERGXHUwMEM0XHUwMEQ2XHUwMERDXS8udGVzdChwaHJhc2UpO1xuICAgICAgY29uc3QgbG93ZXJQaHJhc2UgPSBwaHJhc2UudG9Mb3dlckNhc2UoKTtcbiAgICAgIFxuICAgICAgLy8gU2ltcGxlIGhldXJpc3RpYzogcGhyYXNlcyB3aXRoIGNvbW1vbiBHZXJtYW4gd29yZHMgYXJlIEdlcm1hblxuICAgICAgY29uc3QgaXNHZXJtYW4gPSBoYXNHZXJtYW5DaGFycyB8fCBcbiAgICAgICAgL14oaWNofGR1fGVyfHNpZXxlc3x3aXJ8aWhyfGRlcnxkaWV8ZGFzfGVpbnxlaW5lfHVuZHxvZGVyfGFiZXJ8bmljaHR8a2FubnxtdXNzfHdpbGx8c29sbHxoYXR8aXN0fHdhcikvLnRlc3QobG93ZXJQaHJhc2UpIHx8XG4gICAgICAgIGxvd2VyUGhyYXNlLmluY2x1ZGVzKCdrXHUwMEY2bm50ZScpIHx8IGxvd2VyUGhyYXNlLmluY2x1ZGVzKCd3XHUwMEZDcmRlJykgfHwgbG93ZXJQaHJhc2UuaW5jbHVkZXMoJ21cdTAwRkNzc3RlJyk7XG4gICAgICBcbiAgICAgIGlmIChpc0dlcm1hbikge1xuICAgICAgICB0aGlzLmRlUGhyYXNlc1twaHJhc2VdID0gcmVwbGFjZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVuUGhyYXNlc1twaHJhc2VdID0gcmVwbGFjZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIE9QVElNSVpBVElPTiAjMjogQ29udmVydCBzeW5vbnltcyB0byBNYXAgaW1tZWRpYXRlbHlcbiAgICB0aGlzLnN5bm9ueW1NYXAgPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKGRpY3Rpb25hcmllcy5zeW5vbnltcyB8fCB7fSkpO1xuICAgIFxuICAgIC8vIFByZS1zb3J0IHBocmFzZXMgYnkgbGFuZ3VhZ2UgYW5kIHByZS1jb21waWxlIHJlZ2V4ZXMgKEZJWCAjMTY6IExhbmd1YWdlIGlzb2xhdGlvbilcbiAgICBjb25zdCB3b3JkQ2hhciA9IFwiYS16QS1aMC05XydcdTAwREZcdTAwRTRcdTAwRjZcdTAwRkNcdTAwQzRcdTAwRDZcdTAwRENcIjtcbiAgICBcbiAgICAvLyBCdWlsZCBFTiBjb21waWxlZCBwaHJhc2VzXG4gICAgdGhpcy5lbkNvbXBpbGVkUGhyYXNlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuZW5QaHJhc2VzKVxuICAgICAgLmZpbHRlcigoW3BocmFzZV0pID0+IHBocmFzZSAmJiBwaHJhc2UubGVuZ3RoID49IDIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYlswXS5sZW5ndGggLSBhWzBdLmxlbmd0aClcbiAgICAgIC5tYXAoKFtwaHJhc2UsIHJlcGxhY2VtZW50XSkgPT4gKHtcbiAgICAgICAgcGhyYXNlLFxuICAgICAgICByZXBsYWNlbWVudCxcbiAgICAgICAgcmVnZXg6IG5ldyBSZWdFeHAoYCg/PCFbJHt3b3JkQ2hhcn1dKSR7dGhpcy5lc2NhcGVSZWdleChwaHJhc2UpfSg/IVske3dvcmRDaGFyfV0pYCwgJ2dpJylcbiAgICAgIH0pKTtcbiAgICBcbiAgICAvLyBCdWlsZCBERSBjb21waWxlZCBwaHJhc2VzXG4gICAgdGhpcy5kZUNvbXBpbGVkUGhyYXNlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuZGVQaHJhc2VzKVxuICAgICAgLmZpbHRlcigoW3BocmFzZV0pID0+IHBocmFzZSAmJiBwaHJhc2UubGVuZ3RoID49IDIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYlswXS5sZW5ndGggLSBhWzBdLmxlbmd0aClcbiAgICAgIC5tYXAoKFtwaHJhc2UsIHJlcGxhY2VtZW50XSkgPT4gKHtcbiAgICAgICAgcGhyYXNlLFxuICAgICAgICByZXBsYWNlbWVudCxcbiAgICAgICAgcmVnZXg6IG5ldyBSZWdFeHAoYCg/PCFbJHt3b3JkQ2hhcn1dKSR7dGhpcy5lc2NhcGVSZWdleChwaHJhc2UpfSg/IVske3dvcmRDaGFyfV0pYCwgJ2dpJylcbiAgICAgIH0pKTtcbiAgICBcbiAgICAvLyBCVUlMRCBCQVRDSEVEIFJFR0VYIGZvciBFTiAob25lLXRpbWUgY29zdCBpbiBjb25zdHJ1Y3RvcilcbiAgICBpZiAodGhpcy5lbkNvbXBpbGVkUGhyYXNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBlc2NhcGVkUGhyYXNlcyA9IHRoaXMuZW5Db21waWxlZFBocmFzZXNcbiAgICAgICAgLm1hcCgoeyBwaHJhc2UgfSkgPT4gcGhyYXNlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKTsgLy8gTG9uZ2VzdCBmaXJzdCBmb3IgZ3JlZWR5IG1hdGNoaW5nXG4gICAgICBcbiAgICAgIC8vIEZJWCAjNjogU3BsaXQgaW50byBjaHVua3Mgb2YgNTAgdG8gYXZvaWQgcmVnZXggYWx0ZXJuYXRpb24gZXhwbG9zaW9uXG4gICAgICBjb25zdCBDSFVOS19TSVpFID0gNTA7XG4gICAgICBsZXQgY29tYmluZWRQYXR0ZXJuOiBzdHJpbmc7XG4gICAgICBpZiAoZXNjYXBlZFBocmFzZXMubGVuZ3RoIDw9IENIVU5LX1NJWkUpIHtcbiAgICAgICAgY29tYmluZWRQYXR0ZXJuID0gYCg/OiR7ZXNjYXBlZFBocmFzZXMuam9pbignfCcpfSlgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVXNlIG5vbi1jYXB0dXJpbmcgZ3JvdXAgd2l0aCBhbHRlcm5hdGlvbiBjaHVua3NcbiAgICAgICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXNjYXBlZFBocmFzZXMubGVuZ3RoOyBpICs9IENIVU5LX1NJWkUpIHtcbiAgICAgICAgICBjaHVua3MucHVzaChgKD86JHtlc2NhcGVkUGhyYXNlcy5zbGljZShpLCBpICsgQ0hVTktfU0laRSkuam9pbignfCcpfSlgKTtcbiAgICAgICAgfVxuICAgICAgICBjb21iaW5lZFBhdHRlcm4gPSBgKD86JHtjaHVua3Muam9pbignfCcpfSlgO1xuICAgICAgfVxuICAgICAgdGhpcy5lbkJhdGNoZWRSZWdleCA9IG5ldyBSZWdFeHAoYCg/PCFbJHt3b3JkQ2hhcn1dKSR7Y29tYmluZWRQYXR0ZXJufSg/IVske3dvcmRDaGFyfV0pYCwgJ2dpJyk7XG4gICAgICBcbiAgICAgIC8vIEZJWCAjMTogVXNlIENhc2VJbnNlbnNpdGl2ZU1hcCBmb3IgcGhyYXNlIGxvb2t1cHMgKEVOKVxuICAgICAgdGhpcy5lblJlcGxhY2VtZW50TWFwID0gbmV3IENhc2VJbnNlbnNpdGl2ZU1hcChcbiAgICAgICAgdGhpcy5lbkNvbXBpbGVkUGhyYXNlcy5tYXAoKHsgcGhyYXNlLCByZXBsYWNlbWVudCB9KSA9PiBbcGhyYXNlLCByZXBsYWNlbWVudF0pXG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvLyBCVUlMRCBCQVRDSEVEIFJFR0VYIGZvciBERSAob25lLXRpbWUgY29zdCBpbiBjb25zdHJ1Y3RvcilcbiAgICBpZiAodGhpcy5kZUNvbXBpbGVkUGhyYXNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBlc2NhcGVkUGhyYXNlcyA9IHRoaXMuZGVDb21waWxlZFBocmFzZXNcbiAgICAgICAgLm1hcCgoeyBwaHJhc2UgfSkgPT4gcGhyYXNlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKTsgLy8gTG9uZ2VzdCBmaXJzdCBmb3IgZ3JlZWR5IG1hdGNoaW5nXG4gICAgICBcbiAgICAgIGNvbnN0IENIVU5LX1NJWkUgPSA1MDtcbiAgICAgIGxldCBjb21iaW5lZFBhdHRlcm46IHN0cmluZztcbiAgICAgIGlmIChlc2NhcGVkUGhyYXNlcy5sZW5ndGggPD0gQ0hVTktfU0laRSkge1xuICAgICAgICBjb21iaW5lZFBhdHRlcm4gPSBgKD86JHtlc2NhcGVkUGhyYXNlcy5qb2luKCd8Jyl9KWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjaHVua3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlc2NhcGVkUGhyYXNlcy5sZW5ndGg7IGkgKz0gQ0hVTktfU0laRSkge1xuICAgICAgICAgIGNodW5rcy5wdXNoKGAoPzoke2VzY2FwZWRQaHJhc2VzLnNsaWNlKGksIGkgKyBDSFVOS19TSVpFKS5qb2luKCd8Jyl9KWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbWJpbmVkUGF0dGVybiA9IGAoPzoke2NodW5rcy5qb2luKCd8Jyl9KWA7XG4gICAgICB9XG4gICAgICB0aGlzLmRlQmF0Y2hlZFJlZ2V4ID0gbmV3IFJlZ0V4cChgKD88IVske3dvcmRDaGFyfV0pJHtjb21iaW5lZFBhdHRlcm59KD8hWyR7d29yZENoYXJ9XSlgLCAnZ2knKTtcbiAgICAgIFxuICAgICAgLy8gRklYICMxOiBVc2UgQ2FzZUluc2Vuc2l0aXZlTWFwIGZvciBwaHJhc2UgbG9va3VwcyAoREUpXG4gICAgICB0aGlzLmRlUmVwbGFjZW1lbnRNYXAgPSBuZXcgQ2FzZUluc2Vuc2l0aXZlTWFwKFxuICAgICAgICB0aGlzLmRlQ29tcGlsZWRQaHJhc2VzLm1hcCgoeyBwaHJhc2UsIHJlcGxhY2VtZW50IH0pID0+IFtwaHJhc2UsIHJlcGxhY2VtZW50XSlcbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8vIE9QVElNSVpBVElPTiAjNDogUHJlLWNvbXB1dGUgZW1wdHkgcmVwbGFjZW1lbnRzIHRvIGF2b2lkIHJ1bnRpbWUgY2hlY2tzIChFTilcbiAgICBpZiAodGhpcy5lblJlcGxhY2VtZW50TWFwKSB7XG4gICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLmVuUmVwbGFjZW1lbnRNYXAudmFsdWVzKCkpIHtcbiAgICAgICAgaWYgKCF2YWwgfHwgIXZhbC50cmltKCkpIHtcbiAgICAgICAgICB0aGlzLmVtcHR5UmVwbGFjZW1lbnRzLmFkZCh2YWwhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBPUFRJTUlaQVRJT04gIzQ6IFByZS1jb21wdXRlIGVtcHR5IHJlcGxhY2VtZW50cyB0byBhdm9pZCBydW50aW1lIGNoZWNrcyAoREUpXG4gICAgaWYgKHRoaXMuZGVSZXBsYWNlbWVudE1hcCkge1xuICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5kZVJlcGxhY2VtZW50TWFwLnZhbHVlcygpKSB7XG4gICAgICAgIGlmICghdmFsIHx8ICF2YWwudHJpbSgpKSB7XG4gICAgICAgICAgdGhpcy5lbXB0eVJlcGxhY2VtZW50cy5hZGQodmFsISk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5jYWNoZWRCbGFja2xpc3RzID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgbGFuZ0NvZGUgb2YgU1VQUE9SVEVEX0xBTkdVQUdFUykge1xuICAgICAgY29uc3QgbGFuZ0RpY3QgPSBMQU5HVUFHRV9ESUNUSU9OQVJJRVNbbGFuZ0NvZGVdO1xuICAgICAgY29uc3QgbGV2ZWxNYXAgPSBuZXcgTWFwPENvbXByZXNzaW9uTGV2ZWwsIFNldDxzdHJpbmc+PigpO1xuICAgICAgXG4gICAgICBbJ2dlbnRsZScsICdiYWxhbmNlZCcsICdhZ2dyZXNzaXZlJ10uZm9yRWFjaCgobGV2ZWwpID0+IHtcbiAgICAgICAgY29uc3QgbHZsID0gbGV2ZWwgYXMgQ29tcHJlc3Npb25MZXZlbDtcbiAgICAgICAgbGV2ZWxNYXAuc2V0KGx2bCwgbmV3IFNldChsYW5nRGljdFtsdmxdLm1hcCh3ID0+IHcudG9Mb3dlckNhc2UoKSkpKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmNhY2hlZEJsYWNrbGlzdHMuc2V0KGxhbmdDb2RlLCBsZXZlbE1hcCk7XG4gICAgfVxuICAgIFxuICAgIC8vIEluaXRpYWxpemUgcGVyLWluc3RhbmNlIHN0YXRzXG4gICAgdGhpcy5zdGF0cyA9IGNyZWF0ZVN0YXRzKCk7XG4gIH1cblxuICBwcml2YXRlIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyBGSVhFRDogU2luZ2xlLXBhc3MgcmVnZXggcmVwbGFjZW1lbnQgdG8gYXZvaWQgY2FzY2FkaW5nIGRvdWJsZS1lc2NhcGluZ1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbiAgfVxuXG4gIGNvbXByZXNzKHByb21wdDogc3RyaW5nLCBvcHRpb25zPzogeyBcbiAgICBsZXZlbD86IENvbXByZXNzaW9uTGV2ZWw7XG4gICAgcHJvdGVjdFVybHM/OiBib29sZWFuO1xuICAgIHByb3RlY3ROdW1iZXJzPzogYm9vbGVhbjtcbiAgICBwcm90ZWN0SGVhZGVycz86IGJvb2xlYW47XG4gICAgcHJvdGVjdEZpbGVQYXRocz86IGJvb2xlYW47XG4gICAgcHJvdGVjdEpzb25YbWw/OiBib29sZWFuOyAvLyBORVdcbiAgICBsYW5ndWFnZT86IExhbmd1YWdlQ29kZTtcbiAgICBzbWFydE1vZGU/OiBib29sZWFuOyAgICAgIC8vIE5FV1xuICAgIHZlcmJvc2U/OiBib29sZWFuO1xuICB9KTogc3RyaW5nIHtcbiAgICAvLyBJTlBVVCBWQUxJREFUSU9OIChTRUNVUklUWS9TVEFCSUxJVFkpXG4gICAgaWYgKCFwcm9tcHQgfHwgdHlwZW9mIHByb21wdCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnNvbGUud2FybignW1Ryb2dsb2R5dGVdIEludmFsaWQgaW5wdXQ6IHByb21wdCBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICAgICAgcmV0dXJuIHByb21wdCB8fCAnJztcbiAgICB9XG5cbiAgICBjb25zdCBNQVhfSU5QVVRfTEVOR1RIID0gMV8wMDBfMDAwOyAvLyAxTUIgbGltaXQgdG8gcHJldmVudCBEb1NcbiAgICBpZiAocHJvbXB0Lmxlbmd0aCA+IE1BWF9JTlBVVF9MRU5HVEgpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW1Ryb2dsb2R5dGVdIElucHV0IGV4Y2VlZHMgJHtNQVhfSU5QVVRfTEVOR1RIfSBjaGFyIGxpbWl0LCB0cnVuY2F0aW5nLi4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGV2ZWwgPSBvcHRpb25zPy5sZXZlbCA/PyBcImJhbGFuY2VkXCI7XG4gICAgY29uc3QgcHJvdGVjdFVybHMgPSBvcHRpb25zPy5wcm90ZWN0VXJscyA/PyB0cnVlO1xuICAgIGNvbnN0IHByb3RlY3ROdW1iZXJzID0gb3B0aW9ucz8ucHJvdGVjdE51bWJlcnMgPz8gdHJ1ZTtcbiAgICBjb25zdCBwcm90ZWN0SGVhZGVycyA9IG9wdGlvbnM/LnByb3RlY3RIZWFkZXJzID8/IHRydWU7XG4gICAgY29uc3QgcHJvdGVjdEZpbGVQYXRocyA9IG9wdGlvbnM/LnByb3RlY3RGaWxlUGF0aHMgPz8gdHJ1ZTtcbiAgICBjb25zdCBwcm90ZWN0SnNvblhtbCA9IG9wdGlvbnM/LnByb3RlY3RKc29uWG1sID8/IHRydWU7IC8vIE5FVyBkZWZhdWx0XG4gICAgY29uc3Qgc21hcnRNb2RlID0gb3B0aW9ucz8uc21hcnRNb2RlID8/IHRydWU7ICAgICAgICAgIC8vIE5FVyBkZWZhdWx0XG4gICAgXG4gICAgbGV0IGxhbmdDb2RlOiBMYW5ndWFnZUNvZGU7XG4gICAgaWYgKG9wdGlvbnM/Lmxhbmd1YWdlKSB7XG4gICAgICBsYW5nQ29kZSA9IG9wdGlvbnMubGFuZ3VhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhbmdDb2RlID0gZGV0ZWN0TGFuZ3VhZ2UocHJvbXB0KTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGVidWcgPSBvcHRpb25zPy52ZXJib3NlID8/IGZhbHNlO1xuICAgIFxuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coYFtUcm9nbG9keXRlXSBEZXRlY3RlZCBsYW5ndWFnZTogJHtsYW5nQ29kZX0gZm9yIHByb21wdDogXCIke3Byb21wdC5zdWJzdHJpbmcoMCwgODApfS4uLlwiYCk7XG4gICAgfVxuXG4gICAgbGV0IHRleHQgPSBwcm9tcHQ7XG4gICAgY29uc3QgcHJvdGVjdGVkSXRlbXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBsZXZlbEJsYWNrbGlzdE1hcCA9IHRoaXMuY2FjaGVkQmxhY2tsaXN0cy5nZXQobGFuZ0NvZGUpO1xuICAgIGlmICghbGV2ZWxCbGFja2xpc3RNYXApIHtcbiAgICAgIGNvbnNvbGUud2FybihgW1Ryb2dsb2R5dGVdIFVua25vd24gbGFuZ3VhZ2UgY29kZTogJHtsYW5nQ29kZX0sIGZhbGxpbmcgYmFjayB0byBFbmdsaXNoYCk7XG4gICAgICBsYW5nQ29kZSA9ICdlbic7XG4gICAgfVxuICAgIGxldCBsZXZlbEJsYWNrbGlzdCA9IHRoaXMuY2FjaGVkQmxhY2tsaXN0cy5nZXQobGFuZ0NvZGUgfHwgJ2VuJykhLmdldChsZXZlbCkhO1xuXG4gICAgLy8gUFJPTk9VTiBQUk9URUNUSU9OIChGSVggIzIpOiBQcmVzZXJ2ZSBwcm9ub3VucyBpbiBiYWxhbmNlZCBtb2RlIHRvIG1haW50YWluIHJlZmVyZW5jZSB0cmFja2luZy5cbiAgICAvLyBPbmx5IHJlbW92ZSB0aGVtIGluIGFnZ3Jlc3NpdmUgbW9kZSB3aGVyZSBjb250ZXh0IGxvc3MgaXMgbGVzcyBjcml0aWNhbC5cbiAgICBsZXQgZWZmZWN0aXZlQmxhY2tsaXN0OiBTZXQ8c3RyaW5nPiA9IGxldmVsQmxhY2tsaXN0O1xuICAgIGlmIChsZXZlbCA9PT0gJ2JhbGFuY2VkJykge1xuICAgICAgY29uc3QgcHJvdGVjdGVkUHJvbm91bnMgPSBuZXcgU2V0KFtcbiAgICAgICAgLy8gRW5nbGlzaFxuICAgICAgICAnaGUnLCAnaGltJywgJ2hpcycsICdzaGUnLCAnaGVyJywgJ2l0JywgJ3RoZXknLCAndGhlbScsICd0aGVpcicsXG4gICAgICAgIC8vIEdlcm1hbiAoRklYRUQ6IE5vdyBwcmVzZXJ2ZWQgaW4gYmFsYW5jZWQgbW9kZSlcbiAgICAgICAgJ2VyJywgJ2lobicsICdpaG0nLCAnc2VpbicsICdzaWUnLCAnaWhyJywgJ2VzJywgJ3dpcicsICd1bnMnLCAnZXVjaCcsICdtZWluJywgJ2RlaW4nLFxuICAgICAgICAnZGljaCcsICdtaXInLCAnZGlyJywgJ3Vuc2VyJywgJ2V1ZXInLCAnc2ljaCcsXG4gICAgICBdKTtcbiAgICAgIGVmZmVjdGl2ZUJsYWNrbGlzdCA9IG5ldyBTZXQoWy4uLmxldmVsQmxhY2tsaXN0XS5maWx0ZXIodyA9PiAhcHJvdGVjdGVkUHJvbm91bnMuaGFzKHcpKSk7XG4gICAgfVxuXG4gICAgLy8gU21hcnQgTW9kZSBBZGp1c3RtZW50IChORVcpIFx1MjAxNCBjYWNoZWQgdG8gYXZvaWQgZG91YmxlIGNvbXB1dGF0aW9uXG4gICAgY29uc3QgaXNUZWNobmljYWwgPSBzbWFydE1vZGUgJiYgZGV0ZWN0VGVjaG5pY2FsQ29udGV4dChwcm9tcHQpO1xuICAgIC8vIEZJWCAjNy8xNTogSW5zdGVhZCBvZiBiaW5hcnkgYWxsLW9yLW5vdGhpbmcsIHJlZHVjZSBzeW5vbnltIHJhdGlvIGluIHRlY2huaWNhbCBtb2RlXG4gICAgbGV0IHN5bm9ueW1SZXBsYWNlbWVudFJhdGlvID0gaXNUZWNobmljYWwgPyAwLjMgOiAxLjA7IC8vIDMwJSBvZiBzeW5vbnltcyBpbiB0ZWNobmljYWwgbW9kZVxuICAgIGlmIChpc1RlY2huaWNhbCkge1xuICAgICAgaWYgKGRlYnVnKSBjb25zb2xlLmxvZygnW1Ryb2dsb2R5dGVdIFNtYXJ0IE1vZGU6IERldGVjdGVkIHRlY2huaWNhbCBjb250ZXh0LiBSZWR1Y2luZyBzeW5vbnltIHJlcGxhY2VtZW50IHRvIDMwJS4nKTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBQUk9URUNUSU9OIFBIQVNFID09PT09PT09PT09PT09PT09PT09XG4gICAgbGV0IHBsYWNlaG9sZGVyQ291bnRlciA9IDA7XG4gICAgY29uc3QgTUFYX1BMQUNFSE9MREVSUyA9IDB4RkZGRkY7IC8vIH4xIG1pbGxpb24gcGxhY2Vob2xkZXJzIGJlZm9yZSBvdmVyZmxvd1xuICAgIGNvbnN0IEJSRUFLX0VWRU5fTEVOR1RIID0gODsgLy8gTWluaW11bSBsZW5ndGggZm9yIHByb3RlY3Rpb24gdG8gYmUgd29ydGh3aGlsZVxuICAgIFxuICAgIC8vIENoZWNrIGlmIGlucHV0IGFscmVhZHkgY29udGFpbnMgcHJpdmF0ZSB1c2UgYXJlYSBjaGFyYWN0ZXJzIChlZGdlIGNhc2UpXG4gICAgY29uc3QgaGFzRXhpc3RpbmdQdWFDaGFycyA9IC9bXFx1RTAwMC1cXHVGOEZGXS8udGVzdCh0ZXh0KTtcbiAgICBpZiAoaGFzRXhpc3RpbmdQdWFDaGFycyAmJiBkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ1tUcm9nbG9keXRlXSBXYXJuaW5nOiBJbnB1dCBjb250YWlucyBQVUEgY2hhcmFjdGVycywgbWF5IGNhdXNlIGNvbmZsaWN0cycpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm90ZWN0SWZXb3J0aHdoaWxlID0gKG1hdGNoOiBzdHJpbmcsIG1pbkxlbjogbnVtYmVyID0gQlJFQUtfRVZFTl9MRU5HVEgpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKG1hdGNoLmxlbmd0aCA8PSBtaW5MZW4pIHJldHVybiBtYXRjaDtcbiAgICAgIC8vIENoZWNrIGZvciBvdmVyZmxvdyBiZWZvcmUgcHJvdGVjdGluZ1xuICAgICAgaWYgKHBsYWNlaG9sZGVyQ291bnRlciA+PSBNQVhfUExBQ0VIT0xERVJTKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW1Ryb2dsb2R5dGVdIFx1MjZBMFx1RkUwRiBQbGFjZWhvbGRlciBsaW1pdCByZWFjaGVkLCBza2lwcGluZyBwcm90ZWN0aW9uLicpO1xuICAgICAgICByZXR1cm4gbWF0Y2g7IC8vIFJldHVybiBvcmlnaW5hbCB3aXRob3V0IHByb3RlY3Rpb25cbiAgICAgIH1cbiAgICAgIHByb3RlY3RlZEl0ZW1zLnB1c2gobWF0Y2gpO1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCgweEUwMDAgKyBwbGFjZWhvbGRlckNvdW50ZXIrKyk7XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gICAgfTtcblxuICAgIC8vIDEuIFByb3RlY3QgY29kZSBibG9ja3NcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oYGBgW1xcc1xcU10qP2BgYHxgW15gXStgKS9nLCAobWF0Y2gpID0+IHtcbiAgICAgIHJldHVybiBwcm90ZWN0SWZXb3J0aHdoaWxlKG1hdGNoLCAxNSk7XG4gICAgfSk7XG5cbiAgICAvLyAyLiBQcm90ZWN0IFVSTHNcbiAgICBpZiAocHJvdGVjdFVybHMpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhodHRwcz86XFwvXFwvW15cXHM8PigpXCInXFxcXFtcXF1dK3x3d3cuW15cXHM8PigpXCInXFxcXFtcXF1dKykvZ2ksIChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvdGVjdElmV29ydGh3aGlsZShtYXRjaCwgMjApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gMy4gUHJvdGVjdCB2ZXJzaW9uIG51bWJlcnMgYW5kIHNvZnR3YXJlIG5hbWVzIHdpdGggZG90c1xuICAgIGlmIChwcm90ZWN0TnVtYmVycykge1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxiKHZcXGQrXFwuXFxkKyg/OlxcLlxcZCspPylcXGIvZywgcHJvdGVjdElmV29ydGh3aGlsZSk7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXGIoW0EtWl1bYS16QS1aMC05XSpcXC5bYS16QS1aMC05XSspXFxiL2csIChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvdGVjdElmV29ydGh3aGlsZShtYXRjaCwgNik7XG4gICAgICB9KTtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLygjXFxkezMsfSkvZywgcHJvdGVjdElmV29ydGh3aGlsZSk7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oWzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17MTJ9KS9naSwgcHJvdGVjdElmV29ydGh3aGlsZSk7XG4gICAgfVxuXG4gICAgLy8gNC4gUHJvdGVjdCBtYXJrZG93biBoZWFkZXJzXG4gICAgaWYgKHByb3RlY3RIZWFkZXJzKSB7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC8oXnxcXG4pKCN7MSw2fVxccysuKykvZywgKG1hdGNoLCBuZXdsaW5lLCBoZWFkZXIpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdGVjdGVkSGVhZGVyID0gcHJvdGVjdElmV29ydGh3aGlsZShoZWFkZXIsIDEyKTtcbiAgICAgICAgcmV0dXJuIGAke25ld2xpbmV9JHtwcm90ZWN0ZWRIZWFkZXJ9YDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIDUuIFByb3RlY3QgZmlsZSBwYXRocyAtIE1VU1QgY29tZSBiZWZvcmUgc3lub255bSByZXBsYWNlbWVudCFcbiAgICBpZiAocHJvdGVjdEZpbGVQYXRocykge1xuICAgICAgLy8gV2luZG93cyBhYnNvbHV0ZSBwYXRocyBGSVJTVCAoQzpcXC4uLikgd2l0aCBvcHRpb25hbCBleHRlbnNpb25cbiAgICAgIC8vIEZJWCAjMTQ6IEFkZGVkIHdvcmQgYm91bmRhcnkgYXQgZW5kIHRvIGhhbmRsZSBwYXRocyBub3QgZm9sbG93ZWQgYnkgcHVuY3R1YXRpb25cbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhbQS1aYS16XTpbXFwvXFxcXF1bXjw+XCJ8PypcXHJcXG5dezEwLH0pKD89W1xccy4sOzohPylcXF1dfCQpL2csIHByb3RlY3RJZldvcnRod2hpbGUpO1xuICAgICAgXG4gICAgICAvLyBSZWxhdGl2ZSBwYXRocyB3aXRoIC4vIG9yIC4uLyAtIG1hdGNoIGNvbXBsZXRlIHBhdGggaW5jbHVkaW5nIGV4dGVuc2lvblxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKFxcLlxcLj9bL1xcXFxdW15cXHM8PlwifD8qXSspKD89W1xccy4sOzohPylcXF1dfCQpL2csIHByb3RlY3RJZldvcnRod2hpbGUpO1xuICAgICAgXG4gICAgICAvLyBMaW51eC9tYWNPUyBhYnNvbHV0ZSBwYXRocyAoL3BhdGgvdG8vZmlsZSkgLSBtYXRjaCBjb21wbGV0ZSBwYXRoIGluY2x1ZGluZyBleHRlbnNpb25cbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyhcXC9bXlxcczw+XCJ8PypdezEwLH0pKD89W1xccy4sOzohPylcXF1dfCQpL2csIHByb3RlY3RJZldvcnRod2hpbGUpO1xuICAgICAgXG4gICAgICAvLyBIb21lIGRpcmVjdG9yaWVzICh+L2ZpbGUuZXh0KVxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvKH5bL1xcXFxdW15cXHM8PlwifD8qXSspKD89W1xccy4sOzohPylcXF1dfCQpL2csIHByb3RlY3RJZldvcnRod2hpbGUpO1xuICAgIH1cblxuICAgIC8vIDYuIE5FVzogUHJvdGVjdCBKU09OL1hNTCBzdHJ1Y3R1cmVzIChGSVhFRDogbm93IGhhbmRsZXMgbmVzdGVkIG9iamVjdHMgYW5kIHZhbGlkYXRlcyBYTUwgdGFncylcbiAgICBpZiAocHJvdGVjdEpzb25YbWwpIHtcbiAgICAgIC8vIEZJWCAjMi8jOS8jTkVXOiBQcm9wZXJseSB0cmFjayBzdHJpbmcgbGl0ZXJhbHMgZm9yIEpTT04gKGRvdWJsZS1xdW90ZSBvbmx5KVxuICAgICAgLy8gU2luZ2xlIHF1b3RlcyBpbnNpZGUgZG91YmxlLXF1b3RlZCBKU09OIHN0cmluZ3MgYXJlIGxpdGVyYWwgY2hhcmFjdGVycywgTk9UIGRlbGltaXRlcnNcbiAgICAgIGNvbnN0IHByb3RlY3RCYWxhbmNlZEJyYWNlcyA9IChpbnB1dDogc3RyaW5nLCBvcGVuQ2hhcjogc3RyaW5nLCBjbG9zZUNoYXI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgbGV0IGRlcHRoID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRCbG9jayA9ICcnO1xuICAgICAgICBsZXQgaW5TdHJpbmcgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjaGFyID0gaW5wdXRbaV07XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gT25seSB0cmFjayBkb3VibGUtcXVvdGUgc3RyaW5ncyAoc3RhbmRhcmQgSlNPTikuIFNpbmdsZSBxdW90ZXMgYXJlIGxpdGVyYWwgaW5zaWRlIEpTT04uXG4gICAgICAgICAgaWYgKCFpblN0cmluZyAmJiBjaGFyID09PSAnXCInKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgZXNjYXBlZCBxdW90ZVxuICAgICAgICAgICAgbGV0IGVzY2FwZUNvdW50ID0gMDtcbiAgICAgICAgICAgIGxldCBqID0gaSAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA+PSAwICYmIGlucHV0W2pdID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgZXNjYXBlQ291bnQrKztcbiAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVzY2FwZUNvdW50ICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICBpblN0cmluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpblN0cmluZyAmJiBjaGFyID09PSAnXCInKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgZXNjYXBlZCBxdW90ZVxuICAgICAgICAgICAgbGV0IGVzY2FwZUNvdW50ID0gMDtcbiAgICAgICAgICAgIGxldCBqID0gaSAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA+PSAwICYmIGlucHV0W2pdID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgZXNjYXBlQ291bnQrKztcbiAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVzY2FwZUNvdW50ICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICBpblN0cmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIGN1cnJlbnRCbG9jayArPSBjaGFyO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChjaGFyID09PSBvcGVuQ2hhcikge1xuICAgICAgICAgICAgZGVwdGgrKztcbiAgICAgICAgICAgIGN1cnJlbnRCbG9jayArPSBjaGFyO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gY2xvc2VDaGFyKSB7XG4gICAgICAgICAgICBkZXB0aC0tO1xuICAgICAgICAgICAgY3VycmVudEJsb2NrICs9IGNoYXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCAmJiBjdXJyZW50QmxvY2subGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgICAgLy8gUHJvdGVjdCB0aGlzIGJsb2NrXG4gICAgICAgICAgICAgIHJlc3VsdCA9IHByb3RlY3RJZldvcnRod2hpbGUoY3VycmVudEJsb2NrLCA1KTtcbiAgICAgICAgICAgICAgY3VycmVudEJsb2NrID0gJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgICAgICAgICBkZXB0aCA9IDA7XG4gICAgICAgICAgICAgIGN1cnJlbnRCbG9jayA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50QmxvY2sgKz0gY2hhcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXN1bHQgKyBjdXJyZW50QmxvY2s7IC8vIEFwcGVuZCBhbnkgcmVtYWluaW5nIHVucGFyc2VkIHRleHRcbiAgICAgIH07XG4gICAgICBcbiAgICAgIC8vIFByb3RlY3QgSlNPTiBvYmplY3RzIChjdXJseSBicmFjZXMpIC0gaGFuZGxlcyBuZXN0aW5nIEFORCBzdHJpbmcgbGl0ZXJhbHMhXG4gICAgICB0ZXh0ID0gcHJvdGVjdEJhbGFuY2VkQnJhY2VzKHRleHQsICd7JywgJ30nKTtcbiAgICAgIFxuICAgICAgLy8gWE1MIFByb3RlY3Rpb24gLSBGSVhFRDogTm93IHZhbGlkYXRlcyB0YWcgcGFpcmluZyB0byBwcmV2ZW50IG1pc21hdGNoZWQgdGFnc1xuICAgICAgY29uc3QgZmluZE91dGVybW9zdFhtbCA9IChpbnB1dDogc3RyaW5nKTogeyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlciB9W10gPT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzOiB7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyIH1bXSA9IFtdO1xuICAgICAgICBjb25zdCB0YWdSZWdleCA9IC88XFwvPyhbYS16QS1aXVthLXpBLVowLTldKikoW14+XSo/KT4vZztcbiAgICAgICAgbGV0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsO1xuICAgICAgICBsZXQgZGVwdGggPSAwO1xuICAgICAgICBjb25zdCBvcGVuVGFnU3RhY2s6IHN0cmluZ1tdID0gW107IC8vIEZJWEVEOiBUcmFjayBhY3R1YWwgdGFnIG5hbWVzIGZvciB2YWxpZGF0aW9uXG5cbiAgICAgICAgd2hpbGUgKChtYXRjaCA9IHRhZ1JlZ2V4LmV4ZWMoaW5wdXQpKSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGZ1bGxUYWcgPSBtYXRjaFswXTtcbiAgICAgICAgICBjb25zdCB0YWdOYW1lID0gbWF0Y2hbMV07XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGZ1bGxUYWcuZW5kc1dpdGgoJy8+JykpIGNvbnRpbnVlOyAvLyBTZWxmLWNsb3NpbmcgZG9lc24ndCBhZmZlY3QgZGVwdGhcblxuICAgICAgICAgIC8vIEZJWEVEOiBDaGVjayBhY3R1YWwgY2xvc2luZyB0YWcgYW5kIHZhbGlkYXRlIGl0IG1hdGNoZXMgdGhlIG1vc3QgcmVjZW50IG9wZW4gdGFnXG4gICAgICAgICAgY29uc3QgaXNDbG9zaW5nID0gZnVsbFRhZy5zdGFydHNXaXRoKCc8LycpICYmIGZ1bGxUYWcubGVuZ3RoID4gMjtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoaXNDbG9zaW5nKSB7XG4gICAgICAgICAgICBpZiAoZGVwdGggPT09IDAgfHwgdGFnTmFtZSAhPT0gb3BlblRhZ1N0YWNrW29wZW5UYWdTdGFjay5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgICAvLyBPcnBoYW4gb3IgbWlzbWF0Y2hlZCBjbG9zaW5nIHRhZywgaWdub3JlXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3BlblRhZ1N0YWNrLnBvcCgpOyAvLyBSZW1vdmUgbWF0Y2hlZCBvcGVuaW5nIHRhZ1xuICAgICAgICAgICAgZGVwdGgtLTtcbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeyBzdGFydDogbWF0Y2guaW5kZXggLSBmdWxsVGFnLmxlbmd0aCArIDEsIGVuZDogbWF0Y2guaW5kZXggKyBmdWxsVGFnLmxlbmd0aCB9KTsgLy8gRklYRUQ6IENvcnJlY3QgaW5kZXggY2FsY3VsYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3BlblRhZ1N0YWNrLnB1c2godGFnTmFtZSk7IC8vIFRyYWNrIG9wZW5pbmcgdGFnIG5hbWVcbiAgICAgICAgICAgIGRlcHRoKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfTtcbiAgICAgIFxuICAgICAgY29uc3QgeG1sU3RydWN0dXJlcyA9IGZpbmRPdXRlcm1vc3RYbWwodGV4dCk7XG4gICAgICAvLyBQcm90ZWN0IGZyb20gZW5kIHRvIHN0YXJ0IHRvIHByZXNlcnZlIGluZGljZXNcbiAgICAgIGZvciAobGV0IGkgPSB4bWxTdHJ1Y3R1cmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IHN0cnVjdHVyZSA9IHhtbFN0cnVjdHVyZXNbaV07XG4gICAgICAgIGNvbnN0IHhtbFRleHQgPSB0ZXh0LnN1YnN0cmluZyhzdHJ1Y3R1cmUuc3RhcnQsIHN0cnVjdHVyZS5lbmQpO1xuICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgc3RydWN0dXJlLnN0YXJ0KSArIFxuICAgICAgICAgICAgICAgcHJvdGVjdElmV29ydGh3aGlsZSh4bWxUZXh0LCA1KSArIFxuICAgICAgICAgICAgICAgdGV4dC5zdWJzdHJpbmcoc3RydWN0dXJlLmVuZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gQ09NUFJFU1NJT04gUEhBU0UgPT09PT09PT09PT09PT09PT09PT1cblxuICAgIGxldCBwaHJhc2VNYXRjaGVzID0gMDtcbiAgICBsZXQgcGhyYXNlQ2hhcnNTYXZlZCA9IDA7XG5cbiAgICAvLyBMYW5ndWFnZS1zcGVjaWZpYyBiYXRjaGVkIHJlZ2V4IGFuZCByZXBsYWNlbWVudCBtYXAgKEZJWCAjMTYpXG4gICAgY29uc3QgaXNEZSA9IGxhbmdDb2RlID09PSAnZGUnO1xuICAgIGNvbnN0IGFjdGl2ZUJhdGNoZWRSZWdleCA9IGlzRGUgPyB0aGlzLmRlQmF0Y2hlZFJlZ2V4IDogdGhpcy5lbkJhdGNoZWRSZWdleDtcbiAgICBjb25zdCBhY3RpdmVSZXBsYWNlbWVudE1hcCA9IGlzRGUgPyB0aGlzLmRlUmVwbGFjZW1lbnRNYXAgOiB0aGlzLmVuUmVwbGFjZW1lbnRNYXA7XG5cbiAgICAvLyBVc2UgcHJlLWJ1aWx0IGJhdGNoZWQgcmVnZXggKE8obikgaW5zdGVhZCBvZiBPKG4gXHUwMEQ3IG0pKVxuICAgIGlmIChhY3RpdmVCYXRjaGVkUmVnZXggJiYgYWN0aXZlUmVwbGFjZW1lbnRNYXApIHtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoYWN0aXZlQmF0Y2hlZFJlZ2V4LCAobWF0Y2gpID0+IHtcbiAgICAgICAgLy8gRklYICMxOiBVc2UgQ2FzZUluc2Vuc2l0aXZlTWFwLmdldCgpIFx1MjAxNCBoYW5kbGVzIGV4YWN0ICsgY2FzZS1pbnNlbnNpdGl2ZSBsb29rdXBcbiAgICAgICAgY29uc3QgcmVwbCA9IGFjdGl2ZVJlcGxhY2VtZW50TWFwIS5nZXQobWF0Y2gpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFyZXBsIHx8ICFyZXBsLnRyaW0oKSkge1xuICAgICAgICAgIHBocmFzZU1hdGNoZXMrKztcbiAgICAgICAgICBwaHJhc2VDaGFyc1NhdmVkICs9IG1hdGNoLmxlbmd0aCAtIDE7IC8vIFJlcGxhY2Ugd2l0aCBzcGFjZVxuICAgICAgICAgIHJldHVybiAnICc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzYXZlZCA9IG1hdGNoLmxlbmd0aCAtIHJlcGwubGVuZ3RoO1xuICAgICAgICBwaHJhc2VNYXRjaGVzKys7XG4gICAgICAgIHBocmFzZUNoYXJzU2F2ZWQgKz0gc2F2ZWQ7XG4gICAgICAgIHJldHVybiByZXBsO1xuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBXT1JEIEZJTFRFUklORyBQSEFTRSA9PT09PT09PT09PT09PT09PT09PVxuICAgIFxuICAgIC8vIE9QVElNSVpBVElPTjogU2luZ2xlLXBhc3MgdG9rZW5pemVyIHVzaW5nIG1hdGNoQWxsIHRvIGF2b2lkIGRvdWJsZSBzY2FubmluZyAobWF0Y2ggKyBzcGxpdCkuXG4gICAgLy8gRklYRUQ6IEluY2x1ZGUgVW5pY29kZSBsZXR0ZXJzIGZvciBHZXJtYW4gdW1sYXV0IHN1cHBvcnQgKFx1MDBFNFx1MDBGNlx1MDBGQ1x1MDBERlx1MDBDNFx1MDBENlx1MDBEQylcbiAgICAvLyBGSVg6IEdyb3VwIDEgbXVzdCBjYXB0dXJlIHNwYWNlcyB0b28gXHUyMDE0IHRoZSBvcmlnaW5hbCBbXlxccy4uLl0gZXhjbHVkZWQgd2hpdGVzcGFjZSxcbiAgICAvLyBjYXVzaW5nIGFsbCBzcGFjZXMgdG8gYmUgbG9zdCBkdXJpbmcgcmVjb25zdHJ1Y3Rpb24uIE5vdyBjYXB0dXJlcyBBTEwgbm9uLWxldHRlciBjaGFycy5cbiAgICBjb25zdCB0b2tlblBhdHRlcm4gPSAvKFteXFx3XFx1MDBDMC1cXHUwMjRGXFx1MUUwMC1cXHUxRUZGXSspfChbXFx3XFx1MDBDMC1cXHUwMjRGXFx1MUUwMC1cXHUxRUZGXSspL2d1OyAvLyBDYXB0dXJlcyBkZWxpbWl0ZXJzIChncm91cCAxKSAmIHdvcmRzIChncm91cCAyKVxuICAgIGNvbnN0IGFsbFdvcmRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgbSBvZiB0ZXh0Lm1hdGNoQWxsKHRva2VuUGF0dGVybikpIHtcbiAgICAgIGlmIChtWzJdKSBhbGxXb3Jkcy5wdXNoKG1bMl0pO1xuICAgIH1cbiAgICBcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbVHJvZ2xvZHl0ZV0gRm91bmQgJHthbGxXb3Jkcy5sZW5ndGh9IHdvcmRzIGZvciBmaWx0ZXJpbmdgKTtcbiAgICB9XG5cbiAgICBsZXQgZmlsdGVyZWRDb3VudCA9IDA7XG4gICAgbGV0IHN5bm9ueW1Db3VudCA9IDA7XG4gICAgY29uc3Qga2VwdFdvcmRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIFxuICAgIC8vIEZpbHRlciB3b3JkcyBpbiBhIHNpbmdsZSBwYXNzIChubyBpbnRlcmxlYXZpbmcgd2l0aCBkZWxpbWl0ZXJzKVxuICAgIGZvciAoY29uc3Qgd29yZCBvZiBhbGxXb3Jkcykge1xuICAgICAgY29uc3QgbG93ZXIgPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgICBcbiAgICAgIC8vIENoZWNrIGJsYWNrbGlzdCBmaXJzdFxuICAgICAgaWYgKGVmZmVjdGl2ZUJsYWNrbGlzdC5oYXMobG93ZXIpKSB7XG4gICAgICAgIGZpbHRlcmVkQ291bnQrKztcbiAgICAgICAgY29udGludWU7IC8vIFNraXAgdGhpcyB3b3JkIGVudGlyZWx5XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIEZJWCAjNy8xNS8jTkVXOiBEZXRlcm1pbmlzdGljIHN5bm9ueW0gcmVwbGFjZW1lbnQgKG5vdCBwcm9iYWJpbGlzdGljKVxuICAgICAgLy8gVXNlIGNoYXJhY3Rlci1jb2RlIGhhc2ggZm9yIHJlcHJvZHVjaWJpbGl0eTogc2FtZSB3b3JkIFx1MjE5MiBzYW1lIGRlY2lzaW9uIGV2ZXJ5IHRpbWVcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gdGhpcy5zeW5vbnltTWFwLmdldChsb3dlcik7XG4gICAgICBpZiAocmVwbGFjZW1lbnQgIT09IHVuZGVmaW5lZCAmJiBzeW5vbnltUmVwbGFjZW1lbnRSYXRpbyA+IDApIHtcbiAgICAgICAgLy8gRGV0ZXJtaW5pc3RpYyBoYXNoOiBzdW0gb2YgY2hhcmFjdGVyIGNvZGVzIG1vZCAxMDBcbiAgICAgICAgY29uc3QgaGFzaCA9IHdvcmQuc3BsaXQoJycpLnJlZHVjZSgoYSwgYykgPT4gYSArIGMuY2hhckNvZGVBdCgwKSwgMCkgJSAxMDA7XG4gICAgICAgIGlmIChoYXNoIDwgc3lub255bVJlcGxhY2VtZW50UmF0aW8gKiAxMDApIHtcbiAgICAgICAgICBzeW5vbnltQ291bnQrKztcbiAgICAgICAgICBrZXB0V29yZHMucHVzaChyZXBsYWNlbWVudCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gS2VlcCBvcmlnaW5hbCB3b3JkXG4gICAgICBrZXB0V29yZHMucHVzaCh3b3JkKTtcbiAgICB9XG5cbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbVHJvZ2xvZHl0ZV0gQmxhY2tsaXN0OiAke2xldmVsQmxhY2tsaXN0LnNpemV9IHdvcmRzLCBGaWx0ZXJlZDogJHtmaWx0ZXJlZENvdW50fSwgU3lub255bXM6ICR7c3lub255bUNvdW50fWApO1xuICAgIH1cblxuICAgIC8vIFJlY29uc3RydWN0IHRleHQgYnkgaW50ZXJsZWF2aW5nIGRlbGltaXRlcnMgd2l0aCBrZXB0IHdvcmRzIGNvcnJlY3RseS5cbiAgICBjb25zdCBmaW5hbFBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCB3b3JkSWR4ID0gMDtcbiAgICBcbiAgICBmb3IgKGNvbnN0IG0gb2YgdGV4dC5tYXRjaEFsbCh0b2tlblBhdHRlcm4pKSB7XG4gICAgICBpZiAobVsyXSAhPT0gdW5kZWZpbmVkKSB7IC8vIFdvcmQgbWF0Y2hcbiAgICAgICAgZmluYWxQYXJ0cy5wdXNoKGtlcHRXb3Jkc1t3b3JkSWR4KytdIHx8ICcnKTsgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaW5hbFBhcnRzLnB1c2gobVsxXSk7IC8vIERlbGltaXRlciBwcmVzZXJ2ZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGVhbiB1cCB3aGl0ZXNwYWNlIGFuZCBwdW5jdHVhdGlvbiBhcnRpZmFjdHNcbiAgICB0ZXh0ID0gZmluYWxQYXJ0cy5qb2luKCcnKVxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJyAnKSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIENvbGxhcHNlIG11bHRpcGxlIHNwYWNlcyB0byBvbmUgKE1VU1QgYmUgZmlyc3QpXG4gICAgICAucmVwbGFjZSgvKFsuLD8hOzpdKSg/PVtBLVpcdTAwREZcdTAwQzRcdTAwRDZcdTAwRENdKS9nLCAnJDEgJykgICAgICAvLyAyLiBBZGQgc3BhY2UgQUZURVIgc2VudGVuY2UtZW5kaW5nIHB1bmN0IChiZWZvcmUgQ0FQSVRBTClcbiAgICAgIC50cmltKCk7XG5cbiAgICAvLyBSZW1vdmUgb3JwaGFuZWQgcHVuY3R1YXRpb24gdGhhdCBzdXJ2aXZlZCBmaWx0ZXJpbmcgKHByZXNlcnZlID8gYW5kICEgYXQgZW5kKVxuICAgIHRleHQgPSB0ZXh0XG4gICAgICAucmVwbGFjZSgvXFxzKyhbLiw/ITs6XSkvZywgJyQxJykgICAgICAgICAgICAgICAgLy8gMy4gUmVtb3ZlIHNwYWNlIEJFRk9SRSBwdW5jdHVhdGlvblxuICAgICAgLnJlcGxhY2UoL14oWy4sPyE7Ol18XFxzKSsvZywgJycpICAgICAgICAgICAgICAgIC8vIDQuIFJlbW92ZSBsZWFkaW5nIHB1bmN0dWF0aW9uL3NwYWNlc1xuICAgICAgXG4gICAgICAvLyBGSVggIzUvI05FVzogUHJlc2VydmUgZW1vamkgYW5kIGFsbCBVbmljb2RlIHN5bWJvbHMgKG5vdCBqdXN0IGxldHRlcnMvZGlnaXRzKVxuICAgICAgLy8gQWRkZWQgXFxwe1NvfSAoZW1vamkvc3ltYm9scyksIFxccHtTa30gKG1vZGlmaWVycyksIFxccHtTY30gKGN1cnJlbmN5KSwgXFxwe1NtfSAobWF0aClcbiAgICAgIC5yZXBsYWNlKC9bXlxccHtMfVxccHtOfVxccHtTb31cXHB7U2t9XFxwe1NjfVxccHtTbX1cXHVFMDAwLVxcdUY4RkZdKyQvZ3UsICcnKTtcblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IFJFU1RPUkFUSU9OIFBIQVNFID09PT09PT09PT09PT09PT09PT09XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhgW1Ryb2dsb2R5dGVdIFJlc3RvcmluZyAke3Byb3RlY3RlZEl0ZW1zLmxlbmd0aH0gcHJvdGVjdGVkIGl0ZW1zLi4uYCk7XG4gICAgfVxuXG4gICAgLy8gUEVSRk9STUFOQ0UgRklYOiBTaW5nbGUtcGFzcyByZXBsYWNlbWVudCB1c2luZyBNYXAgKE8obikgaW5zdGVhZCBvZiBPKG5cdTAwQjIpKVxuICAgIGlmIChwcm90ZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudHMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm90ZWN0ZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXBsYWNlbWVudHMuc2V0KFN0cmluZy5mcm9tQ29kZVBvaW50KDB4RTAwMCArIGkpLCBwcm90ZWN0ZWRJdGVtc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1tcXHVFMDAwLVxcdUY4RkZdL2csIChtYXRjaCkgPT4ge1xuICAgICAgICBjb25zdCByZXN0b3JlZCA9IHJlcGxhY2VtZW50cy5nZXQobWF0Y2gpO1xuICAgICAgICBpZiAoIXJlc3RvcmVkKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbVHJvZ2xvZHl0ZV0gXHUyNkEwXHVGRTBGIFBsYWNlaG9sZGVyICR7bWF0Y2guY29kZVBvaW50QXQoMCkhIC0gMHhFMDAwfSBub3QgZm91bmQhYCk7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN0b3JlZDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFRSQUlMSU5HIFBVTkNUVUFUSU9OIE5PUk1BTElaQVRJT04gKE1VU1QgYmUgYWZ0ZXIgcmVzdG9yYXRpb24gdG8gcHJldmVudCBkb3VibGUgcGVyaW9kcylcbiAgICBjb25zdCBvcmlnaW5hbFRyYWlsaW5nID0gcHJvbXB0LnRyaW0oKS5tYXRjaCgvWz8uIV0rJC8pPy5bMF0gfHwgJyc7XG4gICAgaWYgKG9yaWdpbmFsVHJhaWxpbmcpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1s/LiFdKyQvLCAnJyk7XG4gICAgICB0ZXh0ICs9IG9yaWdpbmFsVHJhaWxpbmc7XG4gICAgfSBlbHNlIGlmIChbJz8nLCAnISddLmluY2x1ZGVzKHByb21wdC50cmltKCkuc2xpY2UoLTEpKSkge1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvWz8hXSskLywgJycpICsgcHJvbXB0LnRyaW0oKS5zbGljZSgtMSk7XG4gICAgfVxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gTUVUUklDUyBSRVBPUlQgPT09PT09PT09PT09PT09PT09PT1cblxuICAgIGNvbnN0IG9yaWdpbmFsTGVuZ3RoID0gcHJvbXB0Lmxlbmd0aDtcbiAgICBjb25zdCBjb21wcmVzc2VkTGVuZ3RoID0gdGV4dC5sZW5ndGg7XG4gICAgY29uc3Qgc2F2aW5ncyA9IG9yaWdpbmFsTGVuZ3RoIC0gY29tcHJlc3NlZExlbmd0aDtcbiAgICBjb25zdCBwZXJjZW50U2F2aW5ncyA9IG9yaWdpbmFsTGVuZ3RoID4gMCA/IChzYXZpbmdzIC8gb3JpZ2luYWxMZW5ndGgpICogMTAwIDogMDtcblxuICAgIGlmIChvcHRpb25zPy52ZXJib3NlID8/IGZhbHNlKSB7XG4gICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4nKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbVHJvZ2xvZHl0ZV0gQ29tcHJlc3Npb24gUmVwb3J0ICgke2xldmVsLnRvVXBwZXJDYXNlKCl9KWApO1xuICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIGNvbnNvbGUubG9nKGBSZXN1bHQ6ICR7b3JpZ2luYWxMZW5ndGh9IFx1MjE5MiAke2NvbXByZXNzZWRMZW5ndGh9IGNoYXJzICgke3BlcmNlbnRTYXZpbmdzLnRvRml4ZWQoMSl9JSAke3NhdmluZ3MgPj0gMCA/ICdzYXZpbmdzJyA6ICdvdmVyaGVhZCd9KWApO1xuICAgIFxuICAgIGNvbnN0IHRydW5jYXRlID0gKHM6IHN0cmluZywgbWF4ID0gMTUwKSA9PiBzLmxlbmd0aCA+IG1heCA/IGAke3Muc3Vic3RyaW5nKDAsIG1heCl9Li4uYCA6IHM7XG4gICAgY29uc29sZS5sb2coYFx1MjVCNiBJTlBVVDogICAgICBcIiR7dHJ1bmNhdGUocHJvbXB0KX1cImApO1xuICAgIGNvbnNvbGUubG9nKGBcdTI1QjYgQ09NUFJFU1NFRDogXCIke3RydW5jYXRlKHRleHQpfVwiYCk7XG4gICAgXG4gICAgaWYgKHBocmFzZU1hdGNoZXMgPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUGhyYXNlIGNvbGxhcHNpbmc6ICR7cGhyYXNlTWF0Y2hlc30gbWF0Y2hlcywgLSR7cGhyYXNlQ2hhcnNTYXZlZH0gY2hhcnNgKTtcbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkQ291bnQgPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhgV29yZCBmaWx0ZXJpbmc6ICR7ZmlsdGVyZWRDb3VudH0gd29yZHMgcmVtb3ZlZCwgJHtzeW5vbnltQ291bnR9IHN5bm9ueW1zIGFwcGxpZWRgKTtcbiAgICB9XG4gICAgaWYgKHByb3RlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQcm90ZWN0aW9uOiAke3Byb3RlY3RlZEl0ZW1zLmxlbmd0aH0gaXRlbXMgcHJlc2VydmVkYCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGN1bXVsYXRpdmVTdGF0cyA9IHRoaXMuZ2V0U3RhdHMoKTtcbiAgICBjb25zdCB0b3RhbFNhdmluZ3MgPSBjdW11bGF0aXZlU3RhdHMudG90YWxDaGFyc09yaWdpbmFsIC0gY3VtdWxhdGl2ZVN0YXRzLnRvdGFsQ2hhcnNDb21wcmVzc2VkO1xuICAgIGNvbnN0IGF2Z1NhdmluZ3NQZXJjZW50ID0gY3VtdWxhdGl2ZVN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCA+IDAgXG4gICAgICA/ICh0b3RhbFNhdmluZ3MgLyBjdW11bGF0aXZlU3RhdHMudG90YWxDaGFyc09yaWdpbmFsKSAqIDEwMCA6IDA7XG4gICAgY29uc29sZS5sb2coYEN1bXVsYXRpdmU6ICR7Y3VtdWxhdGl2ZVN0YXRzLnRvdGFsQ29tcHJlc3Npb25zfSBjb21wcmVzc2lvbnMsICR7YXZnU2F2aW5nc1BlcmNlbnQudG9GaXhlZCgxKX0lIGF2ZyBzYXZpbmdzYCk7XG4gICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4nKTtcbiAgICB9IC8vIEVuZCB2ZXJib3NlIGJsb2NrXG5cbiAgICAvLyBNZW1vcnkgbWFuYWdlbWVudCAocGVyLWluc3RhbmNlKSBcdTIwMTQgRklYRUQ6IENoZWNrIHRocmVzaG9sZCBCRUZPUkUgaW5jcmVtZW50aW5nIHRvIGF2b2lkIG9mZi1ieS1vbmUgcmVzZXRcbiAgICBpZiAodGhpcy5zdGF0cy50b3RhbENvbXByZXNzaW9ucyA+PSB0aGlzLk1BWF9DT01QUkVTU0lPTlNfQkVGT1JFX1JFU0VUIHx8IFxuICAgICAgICB0aGlzLnN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCA+PSB0aGlzLk1BWF9DSEFSU19CRUZPUkVfUkVTRVQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbVHJvZ2xvZHl0ZV0gU3RhdHMgdGhyZXNob2xkIHJlYWNoZWQsIHJlc2V0dGluZycpO1xuICAgICAgdGhpcy5zdGF0cyA9IGNyZWF0ZVN0YXRzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0cy50b3RhbENvbXByZXNzaW9ucysrO1xuICAgIHRoaXMuc3RhdHMudG90YWxDaGFyc09yaWdpbmFsICs9IHByb21wdC5sZW5ndGg7XG4gICAgdGhpcy5zdGF0cy50b3RhbENoYXJzQ29tcHJlc3NlZCArPSB0ZXh0Lmxlbmd0aDtcbiAgICB0aGlzLnN0YXRzLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBnZXRTdGF0cygpOiBDb21wcmVzc2lvblN0YXRzICYgeyB0b3RhbFNhdmluZ3M6IG51bWJlcjsgc2F2aW5nc1BlcmNlbnQ6IG51bWJlciB9IHtcbiAgICBjb25zdCB0b3RhbFNhdmluZ3MgPSB0aGlzLnN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCAtIHRoaXMuc3RhdHMudG90YWxDaGFyc0NvbXByZXNzZWQ7XG4gICAgY29uc3Qgc2F2aW5nc1BlcmNlbnQgPSB0aGlzLnN0YXRzLnRvdGFsQ2hhcnNPcmlnaW5hbCA+IDAgXG4gICAgICA/IE1hdGgucm91bmQoKHRvdGFsU2F2aW5ncyAvIHRoaXMuc3RhdHMudG90YWxDaGFyc09yaWdpbmFsKSAqIDEwMCkgOiAwO1xuICAgIFxuICAgIHJldHVybiB7IC4uLnRoaXMuc3RhdHMsIHRvdGFsU2F2aW5ncywgc2F2aW5nc1BlcmNlbnQgfTtcbiAgfVxuXG4gIHJlc2V0U3RhdHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0cyA9IGNyZWF0ZVN0YXRzKCk7XG4gIH1cbn1cbiIsICJleHBvcnQgY29uc3QgcGhyYXNlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gRU5HTElTSCBQSFJBU0VTID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gUG9saXRlIG9wZW5lcnNcbiAgJ0hlbGxvIHRoZXJlJzogJycsXG4gICdIZWxsbyc6ICcnLFxuICAnSGknOiAnJyxcbiAgJ0hleSc6ICcnLFxuICAnR29vZCBtb3JuaW5nJzogJycsXG4gICdHb29kIGFmdGVybm9vbic6ICcnLFxuICAnR29vZCBldmVuaW5nJzogJycsXG5cbiAgLy8gUG9saXRlIGNsb3NlcnNcbiAgJ1RoYW5rIHlvdSc6ICcnLFxuICAnVGhhbmtzJzogJycsXG4gICdUaGFuayB5b3Ugc28gbXVjaCc6ICcnLFxuICAnVGhhbmtzIGEgbG90JzogJycsXG4gICdzbyBtdWNoJzogJycsXG5cbiAgJ0kgYXBwcmVjaWF0ZSBpdCc6ICcnLFxuICAnSSBhcHByZWNpYXRlIHlvdXIgaGVscCc6ICcnLFxuXG4gIC8vIFBvbGl0ZSByZXF1ZXN0c1xuICAnSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSBpdCBpZiB5b3UgY291bGQnOiAnJyxcbiAgJ0kgd291bGQgYXBwcmVjaWF0ZSBpdCBpZiB5b3UgY291bGQnOiAnJyxcbiAgJ0NvdWxkIHlvdSBwbGVhc2UnOiAnJyxcbiAgJ0NhbiB5b3UgcGxlYXNlJzogJycsXG4gICdQbGVhc2UnOiAnJyxcbiAgXCJJZiB5b3UgZG9uJ3QgbWluZFwiOiAnJyxcbiAgJ0lmIHlvdSBjb3VsZCc6ICcnLFxuXG4gIC8vIFJvbGUtcGxheWluZ1xuICAnSSB3b3VsZCBsaWtlIHlvdSB0byBhY3QgYXMnOiAnQmUnLFxuICAnQWN0IGFzIGEnOiAnQmUnLFxuICAnQWN0IGFzJzogJ0JlJyxcbiAgJ1ByZXRlbmQgdG8gYmUnOiAnQmUnLFxuICAnWW91IGFyZSBhJzogJ0JlJyxcbiAgJ1lvdSBhcmUnOiAnQmUnLFxuXG4gIC8vIEZpbGxlciBwaHJhc2VzXG4gICdJIGFtIHRyeWluZyB0byBmaWd1cmUgb3V0JzogJ05lZWQnLFxuICAnSSBhbSB0cnlpbmcgdG8nOiAnTmVlZCcsXG4gICdJIHdhbnQgdG8nOiAnTmVlZCcsXG4gICdJIG5lZWQgdG8nOiAnTmVlZCcsXG4gICdJIHdvdWxkIGxpa2UgdG8nOiAnTmVlZCcsXG4gICdJIHdvdWxkIGxpa2UnOiAnTmVlZCcsXG4gICdJIHdhbnQnOiAnTmVlZCcsXG4gICdJIG5lZWQnOiAnTmVlZCcsXG4gICdJIGhhdmUgYSBxdWVzdGlvbiBhYm91dCc6ICdRdWVzdGlvbicsXG4gICdJIGhhdmUgYSBxdWVzdGlvbic6ICdRdWVzdGlvbicsXG4gICdNeSBxdWVzdGlvbiBpcyc6ICdRdWVzdGlvbicsXG4gICdUaGUgcXVlc3Rpb24gaXMnOiAnUXVlc3Rpb24nLFxuICAnSSBhbSB3b25kZXJpbmcnOiAnJyxcbiAgJ0kgd2FzIHdvbmRlcmluZyc6ICcnLFxuICAnSSBhbSBjdXJpb3VzJzogJ0N1cmlvdXMnLFxuXG4gIC8vIFJlZHVuZGFudCBwaHJhc2VzXG4gICdEdWUgdG8gdGhlIGZhY3QgdGhhdCc6ICdCZWNhdXNlJyxcbiAgJ0luIG9yZGVyIHRvJzogJ1RvJyxcbiAgJ0luIHRoZSBldmVudCB0aGF0JzogJ0lmJyxcbiAgJ0ZvciB0aGUgcHVycG9zZSBvZic6ICdUbycsXG4gICdBdCB0aGlzIHBvaW50IGluIHRpbWUnOiAnTm93JyxcbiAgJ0F0IHRoaXMgbW9tZW50JzogJ05vdycsXG4gICdJbiBteSBvcGluaW9uJzogJ0lNTycsXG4gICdJbiBteSBodW1ibGUgb3Bpbmlvbic6ICdJTU8nLFxuICAnQXMgZmFyIGFzIEkga25vdyc6ICdBRkFJSycsXG4gICdBcyBmYXIgYXMgSSBjYW4gdGVsbCc6ICdBRkFJQ1QnLFxuICAnSXQgaXMgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCc6ICdOb3RlJyxcbiAgJ0l0IGlzIHdvcnRoIG5vdGluZyB0aGF0JzogJ05vdGUnLFxuICAnSXQgc2hvdWxkIGJlIG5vdGVkIHRoYXQnOiAnTm90ZScsXG4gICdJdCBpcyB3b3J0aCBtZW50aW9uaW5nIHRoYXQnOiAnTm90ZScsXG4gICdJdCBnb2VzIHdpdGhvdXQgc2F5aW5nIHRoYXQnOiAnJyxcbiAgJ05lZWRsZXNzIHRvIHNheSc6ICcnLFxuICAnQXMgYSBtYXR0ZXIgb2YgZmFjdCc6ICdBY3R1YWxseScsXG4gICdBcyBhIG1hdHRlciBvZic6ICcnLFxuXG4gIC8vIFRlY2huaWNhbCBmaWxsZXJcbiAgJ01ha2Ugc3VyZSB0aGF0JzogJ0Vuc3VyZScsXG4gICdNYWtlIHN1cmUnOiAnRW5zdXJlJyxcbiAgJ0Vuc3VyZSB0aGF0JzogJ0Vuc3VyZScsXG4gICdNYWtlIGNlcnRhaW4gdGhhdCc6ICdFbnN1cmUnLFxuICAnTWFrZSBjZXJ0YWluJzogJ0Vuc3VyZScsXG4gICdJdCBpcyByZXF1aXJlZCB0aGF0JzogJ1JlcXVpcmVkJyxcbiAgJ0l0IGlzIHJlcXVpcmVkJzogJ1JlcXVpcmVkJyxcbiAgJ0l0IGlzIG5lY2Vzc2FyeSc6ICdSZXF1aXJlZCcsXG4gICdJdCBpcyBpbXBvcnRhbnQnOiAnSW1wb3J0YW50JyxcbiAgJ0l0IGlzIGNydWNpYWwnOiAnQ3J1Y2lhbCcsXG4gICdJdCBpcyBlc3NlbnRpYWwnOiAnRXNzZW50aWFsJyxcblxuICAvLyBDb2RlLXJlbGF0ZWRcbiAgJ3RoZSBmb2xsb3dpbmcgY29kZSc6ICdjb2RlJyxcbiAgJ3RoZSBmb2xsb3dpbmcgc25pcHBldCc6ICdzbmlwcGV0JyxcbiAgJ3RoZSBmb2xsb3dpbmcgZXhhbXBsZSc6ICdleGFtcGxlJyxcbiAgJ3RoZSBmb2xsb3dpbmcnOiAnJyxcbiAgJ3RoZSBhYm92ZSc6ICcnLFxuICAnYmVsb3cgaXMnOiAnJyxcbiAgJ2Fib3ZlIGlzJzogJycsXG5cbiAgLy8gTG9naWMgc3ltYm9scyAtIFJFTU9WRUQ6IFRoZXNlIGJyZWFrIG5hdHVyYWwgbGFuZ3VhZ2UhXG4gIC8vICdub3QnOiAnIScsXG4gIC8vICdhbmQnOiAnJiYnLFxuICAvLyAnb3InOiAnfHwnLFxuICAvLyAnZXF1YWxzJzogJz09JyxcbiAgLy8gJ2VxdWFsIHRvJzogJz09JyxcbiAgLy8gJ2lzIGVxdWFsIHRvJzogJz09JyxcbiAgLy8gJ2dyZWF0ZXIgdGhhbic6ICc+JyxcbiAgLy8gJ2xlc3MgdGhhbic6ICc8JyxcbiAgLy8gJ2dyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byc6ICc+PScsXG4gIC8vICdsZXNzIHRoYW4gb3IgZXF1YWwgdG8nOiAnPD0nLFxuICAvLyAnbm90IGVxdWFsIHRvJzogJyE9JyxcbiAgLy8gJ2RvZXMgbm90IGVxdWFsJzogJyE9JyxcblxuICAvLyBDb21tb24gQUkgcHJvbXB0IHBhdHRlcm5zXG4gICdzdGVwIGJ5IHN0ZXAnOiAnc2VxdWVudGlhbCcsXG4gICdzdGVwLWJ5LXN0ZXAnOiAnc2VxdWVudGlhbCcsXG4gICdpbiBkZXRhaWwnOiAnZGV0YWlsZWQnLFxuICAnaW4gbW9yZSBkZXRhaWwnOiAnZGV0YWlsZWQnLFxuICAnZXhwbGFpbiBpbiBkZXRhaWwnOiAnZXhwbGFpbiBkZXRhaWxlZCcsXG4gICdwcm92aWRlIGEnOiAnJyxcbiAgJ3Byb3ZpZGUnOiAnJyxcbiAgJ2dpdmUgbWUnOiAnJyxcbiAgJ2dpdmUnOiAnJyxcbiAgJ3Nob3cgbWUnOiAnc2hvdycsXG4gICd0ZWxsIG1lJzogJ3RlbGwnLFxuICAnY2FuIHlvdSB0ZWxsIG1lJzogJ3RlbGwnLFxuICAnY291bGQgeW91IHRlbGwgbWUnOiAndGVsbCcsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gR0VSTUFOIFBIUkFTRVMgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBHZXJtYW4gcG9saXRlIG9wZW5lcnNcbiAgJ0hhbGxvJzogJycsXG4gICdHdXRlbiBNb3JnZW4nOiAnJyxcbiAgJ0d1dGVuIFRhZyc6ICcnLFxuICAnR3V0ZW4gQWJlbmQnOiAnJyxcbiAgJ0hhbGxvIHp1c2FtbWVuJzogJycsXG5cbiAgLy8gR2VybWFuIHBvbGl0ZSBjbG9zZXJzXG4gICdEYW5rZSc6ICcnLFxuICAnRGFua2Ugc2NoXHUwMEY2bic6ICcnLFxuICAnVmllbGVuIERhbmsnOiAnJyxcbiAgJ0hlcnpsaWNoZW4gRGFuayc6ICcnLFxuICAnRGFua2UgaW0gVm9yYXVzJzogJycsXG4gICdJY2ggZGFua2UgSWhuZW4nOiAnJyxcblxuICAvLyBHZXJtYW4gcG9saXRlIHJlcXVlc3RzXG4gICdCaXR0ZSc6ICcnLFxuICAnS1x1MDBGNm5udGVuIFNpZSBiaXR0ZSc6ICcnLFxuICAnS1x1MDBGNm5uZW4gU2llIGJpdHRlJzogJycsXG4gICdLXHUwMEY2bm50ZXN0IGR1IGJpdHRlJzogJycsXG4gICdLYW5uc3QgZHUgYml0dGUnOiAnJyxcbiAgJ0ljaCB3XHUwMEZDcmRlIGJpdHRlbic6ICcnLFxuICAnSFx1MDBFNHR0ZW4gU2llIGRpZSBGcmV1bmRsaWNoa2VpdCc6ICcnLFxuXG4gIC8vIEdlcm1hbiByb2xlLXBsYXlpbmcgLyBpbnN0cnVjdGlvbnNcbiAgJ0ljaCBtXHUwMEY2Y2h0ZSwgZGFzcyBTaWUgYWdpZXJlbiBhbHMnOiAnU2VpJyxcbiAgJ0FnaWVyZW4gU2llIGFscyc6ICdTZWknLFxuICAnQWdpZXJlbiBhbHMnOiAnU2VpJyxcbiAgJ1R1biBTaWUgc28gYWxzIG9iJzogJ1NlaScsXG4gICdTaWUgc2luZCBlaW4nOiAnU2VpJyxcbiAgJ1NpZSBzaW5kJzogJ1NlaScsXG4gICdOZWhtZW4gU2llIGRpZSBSb2xsZSBhbiB2b24nOiAnU2VpJyxcblxuICAvLyBHZXJtYW4gZmlsbGVyIHBocmFzZXMgKEZJWCAjMTY6IFVzZSBlbXB0eSBzdHJpbmdzIGZvciByZW1vdmFsLCBub3QgRW5nbGlzaCByZXBsYWNlbWVudHMpXG4gICdJY2ggdmVyc3VjaGUgaGVyYXVzenVmaW5kZW4nOiAnJyxcbiAgJ0ljaCB2ZXJzdWNoZSB6dSc6ICcnLFxuICAnSWNoIG1cdTAwRjZjaHRlJzogJycsXG4gICdJY2ggd1x1MDBGQ3JkZSBnZXJuZSc6ICcnLFxuICAnSWNoIGJyYXVjaGUnOiAnJyxcbiAgJ0ljaCBoYWJlIGVpbmUgRnJhZ2UnOiAnRnJhZ2UnLFxuICAnTWVpbmUgRnJhZ2UgaXN0JzogJ0ZyYWdlJyxcbiAgJ0RpZSBGcmFnZSBpc3QnOiAnRnJhZ2UnLFxuICAnSWNoIGZyYWdlIG1pY2gnOiAnJyxcbiAgJ0ljaCBiaW4gbmV1Z2llcmlnJzogJ05ldWdpZXJpZycsXG5cbiAgLy8gR2VybWFuIHJlZHVuZGFudCBwaHJhc2VzIChGSVggIzE2OiBVc2UgR2VybWFuIG9yIGVtcHR5IHJlcGxhY2VtZW50cylcbiAgJ0F1ZmdydW5kIGRlciBUYXRzYWNoZSwgZGFzcyc6ICdXZWlsJyxcbiAgJ1VtIHp1JzogJycsXG4gICdadSBkZW0gWndlY2snOiAnJyxcbiAgJ0luIGRpZXNlbSBNb21lbnQnOiAnSmV0enQnLFxuICAnQW4gZGllc2VyIFN0ZWxsZSc6ICdKZXR6dCcsXG4gICdNZWluZXIgTWVpbnVuZyBuYWNoJzogJ0lNTycsXG4gICdFaHJsaWNoIGdlc2FndCc6ICcnLFxuICAnVW0gZWhybGljaCB6dSBzZWluJzogJycsXG4gICdFaWdlbnRsaWNoJzogJycsXG4gICdUYXRzXHUwMEU0Y2hsaWNoJzogJycsXG5cbiAgLy8gR2VybWFuIHRlY2huaWNhbCBmaWxsZXIgKEZJWCAjMTY6IFVzZSBHZXJtYW4gcmVwbGFjZW1lbnRzKVxuICAnU3RlbGxlbiBTaWUgc2ljaGVyLCBkYXNzJzogJ1NpY2hlcnN0ZWxsZW4nLFxuICAnU3RlbGxlbiBTaWUgc2ljaGVyJzogJ1NpY2hlcnN0ZWxsZW4nLFxuICAnU2ljaGVyc3RlbGxlbiwgZGFzcyc6ICdTaWNoZXJzdGVsbGVuJyxcbiAgJ0VzIGlzdCB3aWNodGlnJzogJ1dpY2h0aWcnLFxuICAnRXMgaXN0IG5vdHdlbmRpZyc6ICdOb3R3ZW5kaWcnLFxuICAnRXMgaXN0IGVyZm9yZGVybGljaCc6ICdFcmZvcmRlcmxpY2gnLFxuXG4gIC8vIEdlcm1hbiBjb2RlLXJlbGF0ZWRcbiAgJ2RlciBmb2xnZW5kZSBDb2RlJzogJ2NvZGUnLFxuICAnZGVyIGZvbGdlbmRlIFNuaXBwZXQnOiAnc25pcHBldCcsXG4gICdkYXMgZm9sZ2VuZGUgQmVpc3BpZWwnOiAnZXhhbXBsZScsXG4gICdmb2xnZW5kZXMnOiAnJyxcbiAgJ29iZW4nOiAnJyxcbiAgJ3VudGVuJzogJycsXG5cbiAgLy8gR2VybWFuIGxvZ2ljIHN5bWJvbHMgLSBSRU1PVkVEOiBUaGVzZSBicmVhayBuYXR1cmFsIGxhbmd1YWdlIVxuICAvLyAndW5kJzogJyYmJyxcbiAgLy8gJ29kZXInOiAnfHwnLFxuICAvLyAnbmljaHQnOiAnIScsXG4gIC8vICdnbGVpY2gnOiAnPT0nLFxuICAvLyAnaXN0IGdsZWljaCc6ICc9PScsXG4gIC8vICdnclx1MDBGNlx1MDBERmVyIGFscyc6ICc+JyxcbiAgLy8gJ2tsZWluZXIgYWxzJzogJzwnLFxuICAvLyAnZ3JcdTAwRjZcdTAwREZlciBvZGVyIGdsZWljaCc6ICc+PScsXG4gIC8vICdrbGVpbmVyIG9kZXIgZ2xlaWNoJzogJzw9JyxcbiAgLy8gJ3VuZ2xlaWNoJzogJyE9JyxcblxuICAvLyBHZXJtYW4gY29tbW9uIHBhdHRlcm5zIChGSVggIzE2OiBVc2UgR2VybWFuIHJlcGxhY2VtZW50cyBvbmx5KVxuICAnU2Nocml0dCBmXHUwMEZDciBTY2hyaXR0JzogJ3NlcXVlbnppZWxsJyxcbiAgJ2ltIERldGFpbCc6ICdkZXRhaWxpZXJ0JyxcbiAgJ2Vya2xcdTAwRTRyZSBpbSBEZXRhaWwnOiAnZXJrbFx1MDBFNHJlIGRldGFpbGllcnQnLFxuICAnZ2ViZW4gU2llIG1pcic6ICcnLFxuICAnemVpZ2VuIFNpZSBtaXInOiAnemVpZycsXG4gICdzYWdlbiBTaWUgbWlyJzogJ3NhZycsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gQlVJTEQgTE9HIC8gQ09NUElMRVIgT1VUUFVUID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gQnVpbGQgc3RhdHVzIGJvaWxlcnBsYXRlIChFbmdsaXNoKVxuICAnQnVpbGQgc3RhcnRlZCc6ICcnLFxuICAnQnVpbGQgY29tcGxldGVkJzogJycsXG4gICdCdWlsZGluZyc6ICcnLFxuICAnQ29tcGlsaW5nJzogJycsXG4gICdMaW5raW5nJzogJycsXG4gICdHZW5lcmF0aW5nJzogJycsXG4gICdDcmVhdGluZyc6ICcnLFxuICAnU3VjY2Vzc2Z1bGx5JzogJycsXG4gICdzdWNjZXNzZnVsbHknOiAnJyxcbiAgJ0Vycm9yJzogJ0UnLFxuICAnV2FybmluZyc6ICdXJyxcbiAgJ05vdGUnOiAnTicsXG5cbiAgLy8gSW5jbHVkZSBjaGFpbiBub2lzZSAobW9zdCBjb21tb24gYnVpbGQgbG9nIGZpbGxlcilcbiAgJ0luIGZpbGUgaW5jbHVkZWQgZnJvbSc6ICdpbmMnLFxuICAnaW5jbHVkZWQgZnJvbSc6ICdpbmMnLFxuICAnZnJvbSc6ICcnLFxuXG4gIC8vIFByb2plY3QvY29uZmlndXJhdGlvbiBib2lsZXJwbGF0ZVxuICAnUHJvamVjdDonOiAnUHJvajonLFxuICAnQ29uZmlndXJhdGlvbjonOiAnQ2ZnOicsXG4gICdQbGF0Zm9ybTonOiAnUGxhdDonLFxuICAnVGFyZ2V0Oic6ICdUZ3Q6JyxcblxuICAvLyBCdWlsZCByZXN1bHQgc3VtbWFyaWVzXG4gICdzdWNjZXNzZnVsJzogJ29rJyxcbiAgJ2Vycm9ycyc6ICdlcnInLFxuICAnd2FybmluZ3MnOiAnd2FybicsXG4gICd1cCB0byBkYXRlJzogJ3VwZGF0ZWQnLFxuICAnc2tpcHBlZCc6ICdza2lwJyxcblxuICAvLyBUaW1lL2R1cmF0aW9uIGJvaWxlcnBsYXRlXG4gICd0b29rJzogJycsXG4gICdzZWNvbmRzJzogJ3MnLFxuICAnbWlsbGlzZWNvbmRzJzogJ21zJyxcbiAgJ3N0YXJ0ZWQgYXQnOiAnJyxcbiAgJ2NvbXBsZXRlZCBhdCc6ICcnLFxuICAnZHVyYXRpb246JzogJycsXG5cbiAgLy8gTGluZSBudW1iZXIgaW5kaWNhdG9ycyAocmVkdW5kYW50IHdpdGggYWN0dWFsIGxpbmUgbnVtYmVycylcbiAgJ2F0IGxpbmUnOiAnJyxcbiAgJ29uIGxpbmUnOiAnJyxcbiAgJ2NvbHVtbic6ICdjb2wnLFxuXG4gIC8vIFZhcmlhYmxlL2Z1bmN0aW9uIHR5cGUgZGVzY3JpcHRvcnNcbiAgJ3ZhcmlhYmxlJzogJ3ZhcicsXG4gICdmdW5jdGlvbic6ICdmbicsXG4gICdwYXJhbWV0ZXInOiAncGFyYW0nLFxuICAnYXJndW1lbnQnOiAnYXJnJyxcbiAgJ2V4cHJlc3Npb24nOiAnZXhwcicsXG4gICdzdGF0ZW1lbnQnOiAnc3RtdCcsXG4gICdkZWNsYXJhdGlvbic6ICdkZWNsJyxcbiAgJ2RlZmluaXRpb24nOiAnZGVmJyxcbiAgJ3R5cGUnOiAndHlwJyxcblxuICAvLyBDb21tb24gZXJyb3Ivd2FybmluZyBwcmVmaXhlc1xuICAnZXJyb3I6JzogJ0U6JyxcbiAgJ3dhcm5pbmc6JzogJ1c6JyxcbiAgJ25vdGU6JzogJ046JyxcbiAgJ2ZhdGFsIGVycm9yOic6ICdGRTonLFxuICAnZXJyb3IgQyc6ICdDJyxcbiAgJ3dhcm5pbmcgQyc6ICdXQycsXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gR0VSTUFOIEJVSUxEIExPRyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIEdlcm1hbiBidWlsZCBzdGF0dXNcbiAgJ0Vyc3RlbGxlbiBnZXN0YXJ0ZXQnOiAnJyxcbiAgJ0Vyc3RlbGxlbiBhYmdlc2NobG9zc2VuJzogJycsXG4gICdFcnN0ZWxsdW5nIHd1cmRlJzogJycsXG4gICdQcm9qZWt0Oic6ICdQcm9qOicsXG4gICdLb25maWd1cmF0aW9uOic6ICdDZmc6JyxcbiAgJ2VyZm9sZ3JlaWNoJzogJ29rJyxcbiAgJ0ZlaGxlcic6ICdFJyxcbiAgJ1dhcm51bmcnOiAnVycsXG4gICdIaW53ZWlzJzogJ04nLFxuICAnYWt0dWVsbCc6ICd1cHRvZGF0ZScsXG4gICdcdTAwRkNiZXJzcHJ1bmdlbic6ICdza2lwJyxcbiAgJ2RhdWVydGUnOiAnJyxcbiAgJ1Nla3VuZGVuJzogJ3MnLFxuICAndW0nOiAnJyxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBNU1ZDIEdFUk1BTiBFUlJPUiBNRVNTQUdFUyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIE1vc3QgY29tbW9uIHJlcGVhdGVkIGVycm9yIG1lc3NhZ2VzIChHZXJtYW4gXHUyMTkyIEVuZ2xpc2ggc2hvcnRoYW5kKVxuICAnbmljaHRkZWtsYXJpZXJ0ZXIgQmV6ZWljaG5lcic6ICd1bmRlY2xhcmVkIGlkZW50JyxcbiAgJ0ZlaGxlbmRlciBUeXBzcGV6aWZpemllcmVyJzogJ21pc3NpbmcgdHlwZSBzcGVjJyxcbiAgJ1N5bnRheGZlaGxlcic6ICdzeW50YXggZXJyJyxcbiAgJ0RhdGVpIGthbm4gbmljaHQgZ2VcdTAwRjZmZm5ldCB3ZXJkZW4nOiAnY2Fubm90IG9wZW4gZmlsZScsXG4gICdEaWVzZSBWZXJ3ZW5kdW5nIHZvbiBpc3QgdW5nXHUwMEZDbHRpZyc6ICdpbnZhbGlkIHVzZSBvZicsXG4gICdCZXplaWNobmVyIHd1cmRlIG5pY2h0IGdlZnVuZGVuJzogJ2lkZW50IG5vdCBmb3VuZCcsXG5cbiAgLy8gTVNWQyBlcnJvciBtZXNzYWdlIGZyYWdtZW50c1xuICAnaW50IHdpcmQgYW5nZW5vbW1lbic6ICdpbnQgYXNzdW1lZCcsXG4gICdkZWZhdWx0LWludCB3aXJkIHZvbiBDKysgbmljaHQgdW50ZXJzdFx1MDBGQ3R6dCc6ICdubyBkZWZhdWx0LWludCBpbiBDKysnLFxuICAnRmVobGVuZGVzIHZvcic6IFwibWlzc2luZyAnOycgYmVmb3JlXCIsXG4gICdJbmNsdWRlIGthbm4gbmljaHQgZ2VcdTAwRjZmZm5ldCB3ZXJkZW4nOiAnaW5jbHVkZSBjYW5ub3Qgb3BlbicsXG4gICdObyBzdWNoIGZpbGUgb3IgZGlyZWN0b3J5JzogJ2ZpbGUgbm90IGZvdW5kJyxcblxuICAvLyBCdWlsZCByZXN1bHQgc3VtbWFyaWVzIChHZXJtYW4gTVNWQylcbiAgJ0FsbGUgbmV1IGVyc3RlbGxlbic6ICdSZWJ1aWxkJyxcbiAgJ25ldSBlcnN0ZWxsZW4nOiAncmVidWlsZCcsXG4gICdmZWhsZ2VzY2hsYWdlbic6ICdmYWlsJyxcbiAgJ05ldSBlcnN0ZWxsZW4gYWJnZXNjaGxvc3Nlbic6ICcnLFxuICAndW5kIGRhdWVydGUnOiAnJyxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBDTEFORy9HQ0MgQlVJTEQgTE9HIFBBVFRFUk5TID09PT09PT09PT09PT09PT09PT09XG5cbiAgLy8gV2FybmluZyBjb3VudCBzdW1tYXJpZXMgKHJlcGVhdGVkIGFmdGVyIGVhY2ggd2FybmluZylcbiAgJ3dhcm5pbmcgZ2VuZXJhdGVkJzogJycsXG4gICd3YXJuaW5ncyBnZW5lcmF0ZWQnOiAnJyxcbiAgJ2Vycm9yIGdlbmVyYXRlZCc6ICcnLFxuICAnZXJyb3JzIGdlbmVyYXRlZCc6ICcnLFxuXG4gIC8vIEluY2x1ZGUgcGF0aCB3YXJuaW5nc1xuICAncmVzb2x2ZWQgdXNpbmcgbm9uLXBvcnRhYmxlIE1pY3Jvc29mdCBzZWFyY2ggcnVsZXMgYXM6JzogJ25vbi1wb3J0YWJsZSBpbmNsdWRlOicsXG4gICcjaW5jbHVkZSByZXNvbHZlZCB1c2luZyBub24tcG9ydGFibGUgTWljcm9zb2Z0IHNlYXJjaCBydWxlcyBhczonOiAnbm9uLXBvcnRhYmxlIGluY2x1ZGU6JyxcblxuICAvLyBVbnVzZWQgdmFyaWFibGUvZnVuY3Rpb24gd2FybmluZ3NcbiAgJ3VudXNlZCB2YXJpYWJsZSc6ICd1bnNkIHZhcicsXG4gICd1bnVzZWQgZnVuY3Rpb24nOiAndW5zZCBmbicsXG4gICdzZXQgYnV0IG5vdCB1c2VkJzogJ3NldCB1bnVzZWQnLFxuXG4gIC8vIEdlcm1hbiBidWlsZCBzdGF0dXMgKENsYW5nL0xMVk0pXG4gICdEaWUgTmV1ZXJzdGVsbHVuZyB3dXJkZSc6ICcnLFxuICAnTmV1ZXMgRXJzdGVsbGVuIGdlc3RhcnRldCc6ICcnLFxuICAnZ2VzdGFydGV0OiBQcm9qZWt0Oic6ICdQcm9qOicsXG59O1xuIiwgIi8qKlxuICogU3lub255bSByZXBsYWNlbWVudHMgZm9yIHByb21wdCBjb21wcmVzc2lvbi5cbiAqIFxuICogQ1JJVEVSSUE6IE9ubHkgcmVhbCwgd2lkZWx5LXJlY29nbml6ZWQgYWJicmV2aWF0aW9ucyB0aGF0IHByZXNlcnZlIG1lYW5pbmcuXG4gKiAtIE5vIG5vbi13b3JkcyAoZS5nLiwgXCJpbXBsaW5nXCIsIFwibmV3ZWRcIilcbiAqIC0gTm8gc2VtYW50aWMgaW52ZXJzZXMgKGUuZy4sIFwiaW1wbGVtZW50ZWRcIiBcdTIxOTIgXCJpbXBsaWVkXCIpXG4gKiAtIE5vIGFtYmlndW91cyBzaG9ydCBmb3JtcyAoZS5nLiwgXCJvcHRcIiBjb3VsZCBtZWFuIFwiY2hvb3NlXCIpXG4gKiAtIE5vIG5vLW9wcyAod29yZCBtYXBwaW5nIHRvIGl0c2VsZikgXHUyMDE0IHJlbW92ZWQgZm9yIHBlcmZvcm1hbmNlXG4gKi9cblxuZXhwb3J0IGNvbnN0IHN5bm9ueW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAvLyA9PT09PT09PT09PT09PT09PT09PSBFTkdMSVNIIFRFQ0hOSUNBTCBURVJNUyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIFdlbGwtZXN0YWJsaXNoZWQgYWJicmV2aWF0aW9ucyBvbmx5XG4gICdhcHBsaWNhdGlvbic6ICdhcHAnLFxuICAnYXBwbGljYXRpb25zJzogJ2FwcHMnLFxuICAnaW5mb3JtYXRpb24nOiAnaW5mbycsXG4gICdlbnZpcm9ubWVudCc6ICdlbnYnLFxuICAnZW52aXJvbm1lbnRzJzogJ2VudnMnLFxuICAnY29uZmlndXJhdGlvbic6ICdjb25maWcnLFxuICAnY29uZmlndXJhdGlvbnMnOiAnY29uZmlncycsXG4gICdkb2N1bWVudGF0aW9uJzogJ2RvY3MnLFxuICBcbiAgLy8gVmVyYnMgXHUyMTkyIGluZmluaXRpdmUvZ2VydW5kIGZvcm1zIChyZWFsIHdvcmRzKVxuICAndXRpbGl6YXRpb24nOiAndXNlJyxcbiAgJ3V0aWxpemUnOiAndXNlJyxcbiAgJ3V0aWxpemVzJzogJ3VzZXMnLFxuICAndXRpbGl6aW5nJzogJ3VzaW5nJyxcbiAgJ3V0aWxpemVkJzogJ3VzZWQnLFxuICAnaW1wbGVtZW50YXRpb24nOiAnaW1wbCcsXG4gICdpbXBsZW1lbnRhdGlvbnMnOiAnaW1wbHMnLFxuICAnaW1wbGVtZW50JzogJ2ltcGwnLFxuICAnaW1wbGVtZW50cyc6ICdpbXBscycsXG4gICdpbml0aWFsaXphdGlvbic6ICdpbml0JyxcbiAgJ2luaXRpYWxpemUnOiAnaW5pdCcsXG4gICdpbml0aWFsaXplcyc6ICdpbml0cycsXG4gICdpbml0aWFsaXppbmcnOiAnaW5pdGluZycsXG4gICdpbml0aWFsaXplZCc6ICdpbml0ZWQnLFxuICAnc3luY2hyb25pemF0aW9uJzogJ3N5bmMnLFxuICAnc3luY2hyb25pemUnOiAnc3luYycsXG4gICdzeW5jaHJvbml6ZXMnOiAnc3luY3MnLFxuICAnc3luY2hyb25pemluZyc6ICdzeW5jaW5nJyxcbiAgJ3N5bmNocm9uaXplZCc6ICdzeW5jZWQnLFxuICAnYXV0aGVudGljYXRpb24nOiAnYXV0aCcsXG4gICdhdXRoZW50aWNhdGUnOiAnYXV0aCcsXG4gICdhdXRoZW50aWNhdGVzJzogJ2F1dGhzJyxcbiAgJ2F1dGhvcml6YXRpb24nOiAnYXV0aHonLFxuICAnYXV0aG9yaXplJzogJ2F1dGh6JyxcbiAgJ2F1dGhvcml6ZXMnOiAnYXV0aHpzJyxcbiAgXG4gIC8vIFNhZmUgdmVyYiByZXBsYWNlbWVudHMgKHJlYWwgd29yZHMpXG4gICdwZXJmb3JtaW5nJzogJ2RvaW5nJyxcbiAgJ3BlcmZvcm1lZCc6ICdkaWQnLFxuICAnZXhlY3V0aW5nJzogJ3J1bm5pbmcnLFxuICAnZXhlY3V0ZWQnOiAncmFuJyxcbiAgJ2VzdGFibGlzaGluZyc6ICdzZXR0aW5nJyxcbiAgJ2VzdGFibGlzaGVkJzogJ3NldCcsXG4gICdwcm92aWRpbmcnOiAnZ2l2aW5nJyxcbiAgJ3Byb3ZpZGVkJzogJ2dpdmVuJyxcbiAgJ29idGFpbmluZyc6ICdnZXR0aW5nJyxcbiAgJ29idGFpbmVkJzogJ2dvdCcsXG4gICdhY3F1aXJpbmcnOiAnZ2V0dGluZycsXG4gICdhY3F1aXJlZCc6ICdnb3QnLFxuICAncmV0cmlldmluZyc6ICdnZXR0aW5nJyxcbiAgJ3JldHJpZXZlZCc6ICdnb3QnLFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09IEVOR0xJU0ggR0VORVJBTCBURVJNUyA9PT09PT09PT09PT09PT09PT09PVxuXG4gIC8vIENvbmp1bmN0aW9ucy9hZHZlcmJzIFx1MjE5MiBzaG9ydGVyIHJlYWwgd29yZHNcbiAgJ2hvd2V2ZXInOiAnYnV0JyxcbiAgJ3RoZXJlZm9yZSc6ICdzbycsXG4gICdjb25zZXF1ZW50bHknOiAnc28nLFxuICAndGh1cyc6ICdzbycsXG4gICdoZW5jZSc6ICdzbycsXG4gICdhbHRob3VnaCc6ICd0aG91Z2gnLFxuICBcbiAgLy8gUHJlcG9zaXRpb25zIFx1MjE5MiBzdGFuZGFyZCBhYmJyZXZpYXRpb25zICh1c2VkIGluIG5vdGVzLCBub3QgcHJvc2UpXG4gICdyZWdhcmRpbmcnOiAncmUnLFxuICAnY29uY2VybmluZyc6ICdyZScsXG4gICdyZXNwZWN0aW5nJzogJ3JlJyxcbiAgJ3BlcnRhaW5pbmcnOiAncmUnLFxuICAncmVsYXRpbmcnOiAncmUnLFxuXG4gIC8vIENvbW1vbiB3b3JkcyBcdTIxOTIgcmVjb2duaXplZCBzaG9ydGhhbmRcbiAgJ3Rocm91Z2gnOiAndGhydScsXG4gICd1bnRpbCc6ICd0aWwnLFxuICAnd2l0aG91dCc6ICd3L28nLFxuICAnYmV0d2Vlbic6ICdidHduJyxcbiAgJ2FwcHJveGltYXRlbHknOiAnYXBwcm94JyxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PSBHRVJNQU4gVEVDSE5JQ0FMIFRFUk1TID09PT09PT09PT09PT09PT09PT09XG5cbiAgJ2Fud2VuZHVuZyc6ICdhcHAnLFxuICAnYW53ZW5kdW5nZW4nOiAnYXBwcycsXG4gICdpbmZvcm1hdGlvbmVuJzogJ2luZm9zJyxcbiAgJ3VtZ2VidW5nJzogJ2VudicsXG4gICdrb25maWd1cmF0aW9uJzogJ2NvbmZpZycsXG4gICdkb2t1bWVudGF0aW9uJzogJ2RvY3MnLFxuICAnZnVua3Rpb25hbGl0XHUwMEU0dCc6ICdmdW5jJyxcbiAgJ2ltcGxlbWVudGllcnVuZyc6ICdpbXBsJyxcbiAgJ2luaXRpYWxpc2llcnVuZyc6ICdpbml0JyxcbiAgJ29wdGltaWVydW5nJzogJ29wdCcsXG4gICdzeW5jaHJvbmlzYXRpb24nOiAnc3luYycsXG4gICdhdXRoZW50aWZpemllcnVuZyc6ICdhdXRoJyxcbiAgJ2F1dG9yaXNhdGlvbic6ICdhdXRoeicsXG4gICdpZGVudGlmaWthdGlvbic6ICdpZCcsXG4gICdrb21tdW5pa2F0aW9uJzogJ2NvbW0nLFxuXG4gIC8vIEdlcm1hbiB2ZXJicyBcdTIwMTQgcmVtb3ZlZCBuby1vcCBlbnRyaWVzICh3b3JkcyBtYXBwaW5nIHRvIHRoZW1zZWx2ZXMpXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gU0FGRSBCVUlMRC9ERVYgVEVSTVMgKFJFQUwgQUJCUkVWSUFUSU9OUykgPT09PT09PT09PT09PT09PT09PT1cblxuICAvLyBPbmx5IGtlZXAgdGVybXMgd2hlcmUgdGhlIGFiYnJldmlhdGlvbiBpcyB1bml2ZXJzYWxseSByZWNvZ25pemVkIGluIGRldiBjb250ZXh0c1xuICAnZGlyZWN0b3J5JzogJ2RpcicsXG4gICdkaXJlY3Rvcmllcyc6ICdkaXJzJyxcbiAgJ3BhcmFtZXRlcic6ICdwYXJhbScsICAgICAgIC8vIFwicHJtXCIgaXMgbm90IHN0YW5kYXJkXG4gICdwYXJhbWV0ZXJzJzogJ3BhcmFtcycsXG4gICdhcmd1bWVudCc6ICdhcmcnLFxuICAnYXJndW1lbnRzJzogJ2FyZ3MnLFxuICAnZXhwcmVzc2lvbic6ICdleHByJyxcbiAgJ2V4cHJlc3Npb25zJzogJ2V4cHJzJyxcbiAgJ3N0YXRlbWVudCc6ICdzdG10JyxcbiAgJ3N0YXRlbWVudHMnOiAnc3RtdHMnLFxuICAnZGVjbGFyYXRpb24nOiAnZGVjbCcsXG4gICdkZWNsYXJhdGlvbnMnOiAnZGVjbHMnLFxuICAnZGVmaW5pdGlvbic6ICdkZWYnLFxuICAnZGVmaW5pdGlvbnMnOiAnZGVmcycsXG4gICdpbnN0YW5jZSc6ICdpbnN0JyxcbiAgJ2luc3RhbmNlcyc6ICdpbnN0cycsXG5cbiAgLy8gRXJyb3Ivd2FybmluZyB0eXBlcyBcdTIwMTQgUkVNT1ZFRDogbm8tb3AgZW50cmllcyAod29yZCBtYXBzIHRvIGl0c2VsZikgXHUyMDE0IHdhc3RlZnVsIGRlYWQgY29kZVxuICAvLyAndW5kZWZpbmVkJzogJ3VuZGVmaW5lZCcsXG4gIC8vICd1bnJlc29sdmVkJzogJ3VucmVzb2x2ZWQnLFxuICAvLyAnaW5jb21wbGV0ZSc6ICdpbmNvbXBsZXRlJyxcbiAgLy8gJ3VudXNlZCc6ICd1bnVzZWQnLFxuICAvLyAnZGVwcmVjYXRlZCc6ICdkZXByZWNhdGVkJyxcbiAgLy8gJ29ic29sZXRlJzogJ29ic29sZXRlJyxcbiAgLy8gJ3JlZHVuZGFudCc6ICdyZWR1bmRhbnQnLFxuICAvLyAnZHVwbGljYXRlJzogJ2R1cGxpY2F0ZScsXG4gIC8vICdjb25mbGljdCc6ICdjb25mbGljdCcsXG4gIC8vICdhbWJpZ3VvdXMnOiAnYW1iaWd1b3VzJyxcblxuICAvLyBGaWxlL3BhdGggcmVsYXRlZCBcdTIwMTQgUkVNT1ZFRDogbm8tb3AgZW50cmllc1xuICAvLyAnZm9sZGVyJzogJ2ZvbGRlcicsXG4gIC8vICdwYXRoJzogJ3BhdGgnLFxuICAvLyAncGF0aHMnOiAncGF0aHMnLFxuICAvLyAnc291cmNlJzogJ3NvdXJjZScsXG4gIC8vICdzb3VyY2VzJzogJ3NvdXJjZXMnLFxuICAvLyAnaGVhZGVyJzogJ2hlYWRlcicsXG4gIC8vICdoZWFkZXJzJzogJ2hlYWRlcnMnLFxuICAvLyAnaW5jbHVkZSc6ICdpbmNsdWRlJyxcbiAgLy8gJ2luY2x1ZGVzJzogJ2luY2x1ZGVzJyxcblxuICAvLyBHZXJtYW4gYnVpbGQgdGVybXMgXHUyMDE0IFJFTU9WRUQ6IG5vLW9wIGVudHJpZXNcbiAgLy8gJ2Vyc3RlbGx1bmcnOiAnZXJzdGVsbHVuZycsXG4gIC8vICdrb21waWxpZXJlbic6ICdrb21waWxpZXJlbicsXG4gIC8vICd2ZXJrblx1MDBGQ3BmZW4nOiAndmVya25cdTAwRkNwZmVuJyxcbiAgLy8gJ2ZlaGxlcic6ICdmZWhsZXInLFxuICAvLyAnd2FybnVuZyc6ICd3YXJudW5nJyxcbiAgLy8gJ2hpbndlaXMnOiAnaGlud2VpcycsXG4gIC8vICdxdWVsbGUnOiAncXVlbGxlJyxcbiAgLy8gJ3ppZWwnOiAnemllbCcsXG4gIC8vICd2ZXJ6ZWljaG5pcyc6ICd2ZXJ6ZWljaG5pcycsXG5cbiAgLy8gTVNWQyBHZXJtYW4gZXJyb3IgdGVybXMgXHUyMDE0IFJFTU9WRUQ6IG5vLW9wIGVudHJpZXNcbiAgLy8gJ2JlemVpY2huZXInOiAnYmV6ZWljaG5lcicsXG4gIC8vICd0eXBzcGV6aWZpemllcmVyJzogJ3R5cHNwZXppZml6aWVyZXInLFxuICAvLyAnc3ludGF4ZmVobGVyJzogJ3N5bnRheGZlaGxlcicsXG4gIC8vICdkZWtsYXJpZXJ0ZXInOiAnZGVrbGFyaWVydGVyJyxcbiAgLy8gJ3VuZ1x1MDBGQ2x0aWcnOiAndW5nXHUwMEZDbHRpZycsXG4gIC8vICdhbmdlbm9tbWVuJzogJ2FuZ2Vub21tZW4nLFxuICAvLyAndW50ZXJzdFx1MDBGQ3R6dCc6ICd1bnRlcnN0XHUwMEZDdHp0JyxcbiAgLy8gJ2dlXHUwMEY2ZmZuZXQnOiAnZ2VcdTAwRjZmZm5ldCcsXG4gIC8vICd2ZXJ3ZW5kdW5nJzogJ3ZlcndlbmR1bmcnLFxuICAvLyAnZ2VmdW5kZW4nOiAnZ2VmdW5kZW4nLFxuICAvLyAnZmVobHQnOiAnZmVobHQnLFxuICAvLyAnZmVobGVuZGVzJzogJ2ZlaGxlbmRlcycsXG5cbiAgLy8gV2FybmluZyB0ZXJtcyBcdTIwMTQgUkVNT1ZFRDogbm8tb3AgZW50cnlcbiAgLy8gJ25ldWVyc3RlbGx1bmcnOiAnbmV1ZXJzdGVsbHVuZycsXG59O1xuIiwgImltcG9ydCB7IGNyZWF0ZUNvbmZpZ1NjaGVtYXRpY3MgfSBmcm9tIFwiQGxtc3R1ZGlvL3Nka1wiO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gc2NoZW1hIGZvciB0aGUgVHJvZ2xvZHl0ZSBwbHVnaW4uXG4gKiBEZWZpbmVzIFVJIHNldHRpbmdzIHRoYXQgdXNlcnMgY2FuIGN1c3RvbWl6ZSBpbiBMTSBTdHVkaW8uXG4gKi9cbmV4cG9ydCBjb25zdCBjb25maWdTY2hlbWF0aWNzID0gY3JlYXRlQ29uZmlnU2NoZW1hdGljcygpXG4gIC8vIENvcmUgY29tcHJlc3Npb24gc2V0dGluZ3NcbiAgLmZpZWxkKFxuICAgIFwiY29tcHJlc3Npb25MZXZlbFwiLFxuICAgIFwic2VsZWN0XCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiQ29tcHJlc3Npb24gTGV2ZWxcIixcbiAgICAgIGhpbnQ6IFwiSG93IGFnZ3Jlc3NpdmVseSB0byBjb21wcmVzcyBwcm9tcHRzLiBHZW50bGUgcHJlc2VydmVzIG1vcmUgd29yZHMsIEFnZ3Jlc3NpdmUgbWF4aW1pemVzIHRva2VuIHNhdmluZ3MuXCIsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHsgdmFsdWU6IFwiZ2VudGxlXCIsIGRpc3BsYXlOYW1lOiBcIkdlbnRsZSAofjIwLTMwJSByZWR1Y3Rpb24pXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJiYWxhbmNlZFwiLCBkaXNwbGF5TmFtZTogXCJCYWxhbmNlZCAofjQ1JSByZWR1Y3Rpb24pXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJhZ2dyZXNzaXZlXCIsIGRpc3BsYXlOYW1lOiBcIkFnZ3Jlc3NpdmUgKH42MC03MCUgcmVkdWN0aW9uKVwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgXCJiYWxhbmNlZFwiLFxuICApXG4gIC8vIFNtYXJ0IE1vZGUgKE5FVylcbiAgLmZpZWxkKFxuICAgIFwic21hcnRNb2RlXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiU21hcnQgTW9kZSAoQ29udGV4dC1Bd2FyZSlcIixcbiAgICAgIGhpbnQ6IFwiQXV0b21hdGljYWxseSBkZXRlY3RzIGlmIHRoZSBwcm9tcHQgaXMgdGVjaG5pY2FsIG9yIGNvbnZlcnNhdGlvbmFsIGFuZCBhZGp1c3RzIGNvbXByZXNzaW9uIHJ1bGVzIGFjY29yZGluZ2x5LlwiLFxuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKVxuICAvLyBQcm90ZWN0aW9uIG9wdGlvbnNcbiAgLmZpZWxkKFxuICAgIFwicHJvdGVjdFVybHNcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogXCJQcm90ZWN0IFVSTHMgJiBMaW5rc1wiLFxuICAgICAgaGludDogXCJQcmVzZXJ2ZSBVUkxzIGFuZCB3ZWIgbGlua3MgaW50YWN0IGR1cmluZyBjb21wcmVzc2lvbi5cIixcbiAgICB9LFxuICAgIHRydWUsXG4gIClcbiAgLmZpZWxkKFxuICAgIFwicHJvdGVjdE51bWJlcnNcIixcbiAgICBcImJvb2xlYW5cIixcbiAgICB7XG4gICAgICBkaXNwbGF5TmFtZTogXCJQcm90ZWN0IFZlcnNpb24gTnVtYmVycyAmIElEc1wiLFxuICAgICAgaGludDogXCJLZWVwIHZlcnNpb24gbnVtYmVycyAodjEuMC4wKSwgaXNzdWUgcmVmZXJlbmNlcyAoIzEyMzQpLCBhbmQgVVVJRHMgaW50YWN0LlwiLFxuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKVxuICAuZmllbGQoXG4gICAgXCJwcm90ZWN0SGVhZGVyc1wiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlByb3RlY3QgTWFya2Rvd24gSGVhZGVyc1wiLFxuICAgICAgaGludDogXCJQcmVzZXJ2ZSAjIEhlYWRlciBzdHJ1Y3R1cmUgaW4gbWFya2Rvd24gZG9jdW1lbnRzLlwiLFxuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKVxuICAuZmllbGQoXG4gICAgXCJwcm90ZWN0RmlsZVBhdGhzXCIsXG4gICAgXCJib29sZWFuXCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiUHJvdGVjdCBGaWxlIFBhdGhzXCIsXG4gICAgICBoaW50OiBcIktlZXAgZmlsZSBwYXRocyBpbnRhY3QgKHByZXZlbnRzICdTb3VyY2UnIFx1MjE5MiAnc3JjJyBjb3JydXB0aW9uKS5cIixcbiAgICB9LFxuICAgIHRydWUsXG4gIClcbiAgLy8gTkVXOiBQcm90ZWN0IFN0cnVjdHVyZWQgRGF0YVxuICAuZmllbGQoXG4gICAgXCJwcm90ZWN0SnNvblhtbFwiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlByb3RlY3QgSlNPTi9YTUwgU3RydWN0dXJlc1wiLFxuICAgICAgaGludDogXCJQcmVzZXJ2ZSBzdHJ1Y3R1cmVkIGRhdGEgZm9ybWF0cyBsaWtlIEpTT04gYW5kIFhNTCBmcm9tIGJlaW5nIG1hbmdsZWQuXCIsXG4gICAgfSxcbiAgICB0cnVlLFxuICApXG4gIC8vIExhbmd1YWdlIHNldHRpbmdzXG4gIC5maWVsZChcbiAgICBcImxhbmd1YWdlTW9kZVwiLFxuICAgIFwic2VsZWN0XCIsXG4gICAge1xuICAgICAgZGlzcGxheU5hbWU6IFwiTGFuZ3VhZ2UgTW9kZVwiLFxuICAgICAgaGludDogXCJTZWxlY3QgdGhlIGxhbmd1YWdlIGZvciBjb21wcmVzc2lvbiBvciBlbmFibGUgYXV0by1kZXRlY3Rpb24uIEN1cnJlbnRseSBzdXBwb3J0cyBFbmdsaXNoIGFuZCBHZXJtYW4gb25seS5cIixcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgeyB2YWx1ZTogXCJhdXRvXCIsIGRpc3BsYXlOYW1lOiBcIlx1RDgzRFx1REQwRCBBdXRvLURldGVjdCAoRU4vREUpXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJlblwiLCBkaXNwbGF5TmFtZTogXCJcdUQ4M0NcdURERUNcdUQ4M0NcdURERTcgRW5nbGlzaFwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiZGVcIiwgZGlzcGxheU5hbWU6IFwiXHVEODNDXHVEREU5XHVEODNDXHVEREVBIEdlcm1hblwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgXCJhdXRvXCIsXG4gIClcbiAgLy8gRGlzcGxheSBvcHRpb25zXG4gIC5maWVsZChcbiAgICBcInNob3dTdGF0c1wiLFxuICAgIFwiYm9vbGVhblwiLFxuICAgIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlNob3cgU3RhdGlzdGljcyBpbiBDb25zb2xlXCIsXG4gICAgICBoaW50OiBcIkRpc3BsYXkgY29tcHJlc3Npb24gc3RhdGlzdGljcyBhZnRlciBlYWNoIG1lc3NhZ2UuXCIsXG4gICAgfSxcbiAgICB0cnVlLFxuICApXG4gIC5idWlsZCgpO1xuXG4vKipcbiAqIFR5cGUgcmVwcmVzZW50aW5nIHRoZSBwbHVnaW4gY29uZmlndXJhdGlvbiB2YWx1ZXMuXG4gKi9cbmV4cG9ydCB0eXBlIFBsdWdpbkNvbmZpZyA9IHR5cGVvZiBjb25maWdTY2hlbWF0aWNzO1xuIiwgImltcG9ydCB7IHR5cGUgUHJvbXB0UHJlcHJvY2Vzc29yQ29udHJvbGxlciwgdHlwZSBDaGF0TWVzc2FnZSB9IGZyb20gXCJAbG1zdHVkaW8vc2RrXCI7XG5pbXBvcnQgeyBUcm9nbG9keXRlLCB0eXBlIENvbXByZXNzaW9uTGV2ZWwgfSBmcm9tICcuL3Ryb2dsb2R5dGUnO1xuaW1wb3J0IHsgcGhyYXNlcyB9IGZyb20gJy4vZGljdGlvbmFyaWVzL3BocmFzZXMnO1xuaW1wb3J0IHsgc3lub255bXMgfSBmcm9tICcuL2RpY3Rpb25hcmllcy9zeW5vbnltcyc7XG5pbXBvcnQgeyBjb25maWdTY2hlbWF0aWNzIH0gZnJvbSAnLi9jb25maWcnO1xuXG4vLyBJbml0aWFsaXplIFRyb2dsb2R5dGUgd2l0aCBkaWN0aW9uYXJpZXNcbmNvbnN0IHRyb2dsb2R5dGUgPSBuZXcgVHJvZ2xvZHl0ZSh7XG4gIHBocmFzZXMsXG4gIGJsYWNrbGlzdDogW10sIC8vIEJsYWNrbGlzdCBub3cgaGFuZGxlZCBpbnRlcm5hbGx5IGJ5IGNvbXByZXNzaW9uIGxldmVsXG4gIHN5bm9ueW1zLFxufSk7XG5cbi8qKlxuICogRXh0cmFjdHMgb25seSB0aGUgYWN0dWFsIHVzZXIgaW5wdXQgZnJvbSBhIG1lc3NhZ2UgdGhhdCBtYXkgY29udGFpbiBzeXN0ZW0gbWV0YWRhdGEuXG4gKiBTeXN0ZW0gbWV0YWRhdGEgbWFya2VyczogW1plaXQ6LCAqKlNZU1RFTUVNUEZFSExVTkc6KiosIFNZU1RFTUVNUEZFSExVTkchXG4gKiBGSVhFRDogQ2FzZS1pbnNlbnNpdGl2ZSBtYXRjaGluZyB3aXRoIHdvcmQgYm91bmRhcnkgdG8gYXZvaWQgZmFsc2UgcG9zaXRpdmVzIG9uIHRpbWVzdGFtcHMvZmlsZSBuYW1lcy5cbiAqXG4gKiBOT1RFOiBJZiBhIG1hcmtlciBhcHBlYXJzIG1pZC1zZW50ZW5jZSwgb25seSB0ZXh0IEJFRk9SRSBpdCBpcyBwcm9jZXNzZWQuXG4gKiBUZXh0IGFmdGVyIHRoZSBtYXJrZXIgaXMgcHJlc2VydmVkIGJ1dCBwYXNzZWQgdGhyb3VnaCB1bmNvbXByZXNzZWQuXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RVc2VySW5wdXQodGV4dDogc3RyaW5nKTogeyB1c2VySW5wdXQ6IHN0cmluZzsgaGFzU3lzdGVtTWV0YWRhdGE6IGJvb2xlYW4gfSB7XG4gIC8vIExvb2sgZm9yIHN5c3RlbSBtZXRhZGF0YSBtYXJrZXJzIC0gRklYRUQ6IGNhc2UtaW5zZW5zaXRpdmUgd2l0aCB3b3JkIGJvdW5kYXJ5XG4gIGNvbnN0IHplaXRNYXRjaCA9IHRleHQubWF0Y2goLyg/PD1cXHN8XilcXFt6ZWl0OlxccyovaSk7XG4gIGNvbnN0IHN5c3RlbUVtcGZlaGx1bmdNYXRjaDEgPSB0ZXh0Lm1hdGNoKC9cXCpcXCpTWVNURU1FTVBGRUhMVU5HOlxcKlxcKi8pOyAgLy8gV2l0aCBhc3Rlcmlza3MgYW5kIGNvbG9uXG4gIGNvbnN0IHN5c3RlbUVtcGZlaGx1bmdNYXRjaDIgPSB0ZXh0Lm1hdGNoKC9cXGJTWVNURU1FTVBGRUhMVU5HIS8pOyAgICAgICAgICAgLy8gV2l0aG91dCBhc3Rlcmlza3MsIHdpdGggZXhjbGFtYXRpb25cblxuICBsZXQgbWFya2VySW5kZXggPSAtMTtcblxuICAvLyBGaW5kIHRoZSBlYXJsaWVzdCBtYXRjaGluZyBtYXJrZXJcbiAgaWYgKHplaXRNYXRjaCkge1xuICAgIG1hcmtlckluZGV4ID0gemVpdE1hdGNoLmluZGV4ID8/IC0xO1xuICB9XG4gIGlmIChzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gxICYmIHN5c3RlbUVtcGZlaGx1bmdNYXRjaDEuaW5kZXggIT0gbnVsbCkge1xuICAgIGNvbnN0IGlkeCA9IHN5c3RlbUVtcGZlaGx1bmdNYXRjaDEuaW5kZXg7XG4gICAgaWYgKG1hcmtlckluZGV4ID09PSAtMSB8fCBpZHggPCBtYXJrZXJJbmRleCkge1xuICAgICAgbWFya2VySW5kZXggPSBpZHg7XG4gICAgfVxuICB9XG4gIGlmIChzeXN0ZW1FbXBmZWhsdW5nTWF0Y2gyICYmIHN5c3RlbUVtcGZlaGx1bmdNYXRjaDIuaW5kZXggIT0gbnVsbCkge1xuICAgIGNvbnN0IGlkeCA9IHN5c3RlbUVtcGZlaGx1bmdNYXRjaDIuaW5kZXg7XG4gICAgaWYgKG1hcmtlckluZGV4ID09PSAtMSB8fCBpZHggPCBtYXJrZXJJbmRleCkge1xuICAgICAgbWFya2VySW5kZXggPSBpZHg7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgbm8gc3lzdGVtIG1ldGFkYXRhIGZvdW5kLCByZXR1cm4gZnVsbCB0ZXh0XG4gIGlmIChtYXJrZXJJbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4geyB1c2VySW5wdXQ6IHRleHQsIGhhc1N5c3RlbU1ldGFkYXRhOiBmYWxzZSB9O1xuICB9XG5cbiAgLy8gRXh0cmFjdCBldmVyeXRoaW5nIGJlZm9yZSB0aGUgZmlyc3Qgc3lzdGVtIG1ldGFkYXRhIG1hcmtlclxuICBjb25zdCB1c2VySW5wdXQgPSB0ZXh0LnN1YnN0cmluZygwLCBtYXJrZXJJbmRleCkudHJpbSgpO1xuXG4gIC8vIFNhZmV0eTogaWYgdXNlcklucHV0IGlzIGVtcHR5IGJ1dCB0ZXh0IGlzbid0LCB0aGUgbWFya2VyIHdhcyBhdCB0aGUgc3RhcnQgXHUyMDE0IHByb2Nlc3MgZnVsbCB0ZXh0XG4gIGlmICghdXNlcklucHV0ICYmIHRleHQudHJpbSgpKSB7XG4gICAgcmV0dXJuIHsgdXNlcklucHV0OiB0ZXh0LCBoYXNTeXN0ZW1NZXRhZGF0YTogZmFsc2UgfTtcbiAgfVxuXG4gIHJldHVybiB7IHVzZXJJbnB1dCwgaGFzU3lzdGVtTWV0YWRhdGE6IHRydWUgfTtcbn1cblxuXG4vKipcbiAqIFByb21wdCBQcmVwcm9jZXNzb3IgLSBDb21wcmVzc2VzIHVzZXIgcHJvbXB0cyBieSByZW1vdmluZyBmbHVmZiBhbmQgZmlsbGVyIHdvcmRzLlxuICogUmVkdWNlcyB0b2tlbiB1c2FnZSBieSB+NDUlIHdoaWxlIHByZXNlcnZpbmcgY29yZSBtZWFuaW5nLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlcHJvY2VzcyhjdGw6IFByb21wdFByZXByb2Nlc3NvckNvbnRyb2xsZXIsIHVzZXJNZXNzYWdlOiBDaGF0TWVzc2FnZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gIC8vIEhhbmRsZSBhYm9ydCBzaWduYWwgLSBleGl0IGVhcmx5IGlmIHByZXByb2Nlc3Npbmcgd2FzIGNhbmNlbGxlZFxuICBpZiAoY3RsLmFib3J0U2lnbmFsLmFib3J0ZWQpIHtcbiAgICByZXR1cm4gdXNlck1lc3NhZ2UuZ2V0VGV4dCgpO1xuICB9XG5cbiAgLy8gUmVhZCBhbGwgY29uZmlndXJhdGlvbiBmcm9tIHBsdWdpbiBjb25maWdcbiAgY29uc3QgcGx1Z2luQ29uZmlnID0gY3RsLmdldFBsdWdpbkNvbmZpZyhjb25maWdTY2hlbWF0aWNzKTtcbiAgXG4gIGNvbnN0IGNvbXByZXNzaW9uTGV2ZWw6IENvbXByZXNzaW9uTGV2ZWwgPSAocGx1Z2luQ29uZmlnLmdldChcImNvbXByZXNzaW9uTGV2ZWxcIikgYXMgQ29tcHJlc3Npb25MZXZlbCkgPz8gXCJiYWxhbmNlZFwiO1xuICBjb25zdCBzbWFydE1vZGUgPSBwbHVnaW5Db25maWcuZ2V0KFwic21hcnRNb2RlXCIpIGFzIGJvb2xlYW4gPz8gdHJ1ZTsgLy8gTkVXXG4gIGNvbnN0IHByb3RlY3RVcmxzID0gcGx1Z2luQ29uZmlnLmdldChcInByb3RlY3RVcmxzXCIpIGFzIGJvb2xlYW4gPz8gdHJ1ZTtcbiAgY29uc3QgcHJvdGVjdE51bWJlcnMgPSBwbHVnaW5Db25maWcuZ2V0KFwicHJvdGVjdE51bWJlcnNcIikgYXMgYm9vbGVhbiA/PyB0cnVlO1xuICBjb25zdCBwcm90ZWN0SGVhZGVycyA9IHBsdWdpbkNvbmZpZy5nZXQoXCJwcm90ZWN0SGVhZGVyc1wiKSBhcyBib29sZWFuID8/IHRydWU7XG4gIGNvbnN0IHByb3RlY3RGaWxlUGF0aHMgPSBwbHVnaW5Db25maWcuZ2V0KFwicHJvdGVjdEZpbGVQYXRoc1wiKSBhcyBib29sZWFuID8/IHRydWU7XG4gIGNvbnN0IHByb3RlY3RKc29uWG1sID0gcGx1Z2luQ29uZmlnLmdldChcInByb3RlY3RKc29uWG1sXCIpIGFzIGJvb2xlYW4gPz8gdHJ1ZTsgLy8gTkVXXG4gIGNvbnN0IGxhbmd1YWdlTW9kZSA9IHBsdWdpbkNvbmZpZy5nZXQoXCJsYW5ndWFnZU1vZGVcIikgYXMgc3RyaW5nID8/IFwiYXV0b1wiO1xuICAvLyBTdGF0cyBhbHdheXMgc2hvd24gLSBoYXJkY29kZWQgZm9yIHZpc2liaWxpdHlcbiAgY29uc3Qgc2hvd1N0YXRzID0gdHJ1ZTtcblxuICAvLyBDcmVhdGUgc3RhdHVzIHJlcG9ydCBmb3IgVUkgZmVlZGJhY2tcbiAgY29uc3Qgc3RhdHVzID0gY3RsLmNyZWF0ZVN0YXR1cyh7XG4gICAgc3RhdHVzOiBcImxvYWRpbmdcIiBhcyBjb25zdCxcbiAgICB0ZXh0OiBgQ29tcHJlc3NpbmcgcHJvbXB0ICgke2NvbXByZXNzaW9uTGV2ZWx9KS4uLmAsXG4gIH0pO1xuXG4gIGxldCBjb21wcmVzc2VkVGV4dCA9IHVzZXJNZXNzYWdlLmdldFRleHQoKTsgLy8gRGVmYXVsdCB0byBvcmlnaW5hbCB0ZXh0XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBmdWxsVGV4dCA9IHVzZXJNZXNzYWdlLmdldFRleHQoKTtcbiAgICBcbiAgICAvLyBPUFRJT04gMiBGSVg6IEV4dHJhY3Qgb25seSBhY3R1YWwgdXNlciBpbnB1dCwgc2tpcCBzeXN0ZW0gbWV0YWRhdGFcbiAgICBjb25zdCB7IHVzZXJJbnB1dCwgaGFzU3lzdGVtTWV0YWRhdGEgfSA9IGV4dHJhY3RVc2VySW5wdXQoZnVsbFRleHQpO1xuICAgIFxuICAgIGlmIChzaG93U3RhdHMgJiYgaGFzU3lzdGVtTWV0YWRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbVHJvZ2xvZHl0ZV0gRGV0ZWN0ZWQgc3lzdGVtIG1ldGFkYXRhLiBQcm9jZXNzaW5nICR7dXNlcklucHV0Lmxlbmd0aH0gY2hhcnMgb2YgdXNlciBpbnB1dCAoc2tpcHBlZCAke2Z1bGxUZXh0Lmxlbmd0aCAtIHVzZXJJbnB1dC5sZW5ndGh9IGNoYXJzIG9mIG1ldGFkYXRhKWApO1xuICAgIH1cbiAgICBcbiAgICAvLyBDb21wcmVzcyBvbmx5IHRoZSBhY3R1YWwgdXNlciBpbnB1dFxuICAgIGNvbnN0IGNvbXByZXNzZWRVc2VySW5wdXQgPSB0cm9nbG9keXRlLmNvbXByZXNzKHVzZXJJbnB1dCwgeyBcbiAgICAgIGxldmVsOiBjb21wcmVzc2lvbkxldmVsLFxuICAgICAgcHJvdGVjdFVybHMsXG4gICAgICBwcm90ZWN0TnVtYmVycyxcbiAgICAgIHByb3RlY3RIZWFkZXJzLFxuICAgICAgcHJvdGVjdEZpbGVQYXRocyxcbiAgICAgIHByb3RlY3RKc29uWG1sLCAvLyBORVdcbiAgICAgIHNtYXJ0TW9kZSwgICAgICAvLyBORVdcbiAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZU1vZGUgIT09IFwiYXV0b1wiID8gKGxhbmd1YWdlTW9kZSBhcyBpbXBvcnQoJy4vdHJvZ2xvZHl0ZScpLkxhbmd1YWdlQ29kZSkgOiB1bmRlZmluZWQsXG4gICAgICB2ZXJib3NlOiBzaG93U3RhdHMsIC8vIFBhc3Mgc2hvd1N0YXRzIGFzIHZlcmJvc2UgZmxhZ1xuICAgIH0pO1xuXG4gICAgLy8gUmVjb25zdHJ1Y3QgdGhlIGZ1bGwgbWVzc2FnZSB3aXRoIGNvbXByZXNzZWQgdXNlciBpbnB1dCArIG9yaWdpbmFsIHN5c3RlbSBtZXRhZGF0YVxuICAgIGNvbnN0IHN5c3RlbU1ldGFkYXRhID0gaGFzU3lzdGVtTWV0YWRhdGEgPyBmdWxsVGV4dC5zdWJzdHJpbmcodXNlcklucHV0Lmxlbmd0aCkgOiAnJztcbiAgICBjb21wcmVzc2VkVGV4dCA9IGNvbXByZXNzZWRVc2VySW5wdXQgKyBzeXN0ZW1NZXRhZGF0YTtcblxuICAgIC8vIENhbGN1bGF0ZSBjb21wcmVzc2lvbiBzdGF0cyAob25seSBvbiB1c2VyIGlucHV0IHBvcnRpb24pXG4gICAgY29uc3Qgb3JpZ2luYWxMZW5ndGggPSB1c2VySW5wdXQubGVuZ3RoO1xuICAgIGNvbnN0IGNvbXByZXNzZWRMZW5ndGggPSBjb21wcmVzc2VkVXNlcklucHV0Lmxlbmd0aDtcbiAgICBjb25zdCBzYXZpbmdzID0gTWF0aC5yb3VuZCgoKG9yaWdpbmFsTGVuZ3RoIC0gY29tcHJlc3NlZExlbmd0aCkgLyBvcmlnaW5hbExlbmd0aCkgKiAxMDApO1xuXG4gICAgLy8gR2V0IGN1bXVsYXRpdmUgc3RhdGlzdGljc1xuICAgIGNvbnN0IGN1bXVsYXRpdmVTdGF0cyA9IHRyb2dsb2R5dGUuZ2V0U3RhdHMoKTtcblxuICAgIC8vIERldGFpbGVkIGxvZ2dpbmcgaXMgbm93IGhhbmRsZWQgaW4gdHJvZ2xvZHl0ZS50cyB0byBhdm9pZCBkdXBsaWNhdGlvblxuICAgIC8vIGFuZCB0byBpbmNsdWRlIHRoZSBuZXcgXHUyNUI2IElOUFVUIC8gXHUyNUI2IENPTVBSRVNTRUQgZGVidWcgbGluZXMuXG5cbiAgICAvLyBVcGRhdGUgc3RhdHVzIHRvIGNvbXBsZXRlZCB3aXRoIGRldGFpbGVkIGluZm9cbiAgICBjb25zdCBwcm90ZWN0aW9uSW5mbyA9IFtdO1xuICAgIGlmIChwcm90ZWN0VXJscykgcHJvdGVjdGlvbkluZm8ucHVzaChcIlVSTHNcIik7XG4gICAgaWYgKHByb3RlY3ROdW1iZXJzKSBwcm90ZWN0aW9uSW5mby5wdXNoKFwiSURzXCIpO1xuICAgIFxuICAgIGxldCBzdGF0dXNUZXh0ID0gYENvbXByZXNzZWQgYnkgJHtzYXZpbmdzfSVgO1xuICAgIGlmIChwcm90ZWN0aW9uSW5mby5sZW5ndGggPiAwKSB7XG4gICAgICBzdGF0dXNUZXh0ICs9IGAgfCBQcm90ZWN0aW5nOiAke3Byb3RlY3Rpb25JbmZvLmpvaW4oJywgJyl9YDtcbiAgICB9XG4gICAgaWYgKHNtYXJ0TW9kZSkge1xuICAgICAgc3RhdHVzVGV4dCArPSBcIiB8IFNtYXJ0IE1vZGVcIjsgLy8gTkVXXG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHN0YXR1cyB3aXRoIGNvbXByZXNzaW9uIHJhdGVcbiAgICBzdGF0dXMuc2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiBcImRvbmVcIixcbiAgICAgIHRleHQ6IGBDb21wcmVzc2VkIGJ5ICR7c2F2aW5nc30lYCxcbiAgICB9KTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tUcm9nbG9keXRlXSBDb21wcmVzc2lvbiBmYWlsZWQ6JywgZXJyb3IpO1xuICAgIFxuICAgIC8vIEZJWEVEOiBQcm92aWRlIHVzZXIgZmVlZGJhY2sgaW5zdGVhZCBvZiBzaWxlbnQgZmFpbHVyZVxuICAgIHN0YXR1cy5zZXRTdGF0ZSh7IFxuICAgICAgc3RhdHVzOiBcImVycm9yXCIgYXMgY29uc3QsIFxuICAgICAgdGV4dDogYENvbXByZXNzaW9uIGZhaWxlZDogJHtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZS5zdWJzdHJpbmcoMCwgNTApIDogJ1Vua25vd24nfWAgXG4gICAgfSk7XG4gICAgXG4gICAgLy8gS2VlcCBvcmlnaW5hbCB0ZXh0IG9uIGVycm9yIChleGlzdGluZyBiZWhhdmlvcilcbiAgfVxuXG4gIHJldHVybiBjb21wcmVzc2VkVGV4dDtcbn1cbiIsICJpbXBvcnQgeyB0eXBlIFBsdWdpbkNvbnRleHQgfSBmcm9tIFwiQGxtc3R1ZGlvL3Nka1wiO1xuaW1wb3J0IHsgcHJlcHJvY2VzcyB9IGZyb20gXCIuL3Byb21wdFByZXByb2Nlc3NvclwiO1xuaW1wb3J0IHsgY29uZmlnU2NoZW1hdGljcyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG4vKipcbiAqIE1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSBUcm9nbG9keXRlIHBsdWdpbi5cbiAqIFJlZ2lzdGVycyB0aGUgcHJvbXB0IHByZXByb2Nlc3NvciBhbmQgY29uZmlndXJhdGlvbiB3aXRoIExNIFN0dWRpby5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4oY29udGV4dDogUGx1Z2luQ29udGV4dCkge1xuICAvLyBSZWdpc3RlciB0aGUgY29uZmlndXJhdGlvbiBzY2hlbWF0aWNzIChlbmFibGVzIFVJIHNldHRpbmdzKVxuICBjb250ZXh0LndpdGhDb25maWdTY2hlbWF0aWNzKGNvbmZpZ1NjaGVtYXRpY3MpO1xuICBcbiAgLy8gUmVnaXN0ZXIgdGhlIHByb21wdCBwcmVwcm9jZXNzb3JcbiAgY29udGV4dC53aXRoUHJvbXB0UHJlcHJvY2Vzc29yKHByZXByb2Nlc3MpO1xufVxuIiwgImltcG9ydCB7IExNU3R1ZGlvQ2xpZW50LCB0eXBlIFBsdWdpbkNvbnRleHQgfSBmcm9tIFwiQGxtc3R1ZGlvL3Nka1wiO1xuXG5kZWNsYXJlIHZhciBwcm9jZXNzOiBhbnk7XG5cbi8vIFdlIHJlY2VpdmUgcnVudGltZSBpbmZvcm1hdGlvbiBpbiB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuY29uc3QgY2xpZW50SWRlbnRpZmllciA9IHByb2Nlc3MuZW52LkxNU19QTFVHSU5fQ0xJRU5UX0lERU5USUZJRVI7XG5jb25zdCBjbGllbnRQYXNza2V5ID0gcHJvY2Vzcy5lbnYuTE1TX1BMVUdJTl9DTElFTlRfUEFTU0tFWTtcbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5MTVNfUExVR0lOX0JBU0VfVVJMO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgTE1TdHVkaW9DbGllbnQoe1xuICBjbGllbnRJZGVudGlmaWVyLFxuICBjbGllbnRQYXNza2V5LFxuICBiYXNlVXJsLFxufSk7XG5cbihnbG9iYWxUaGlzIGFzIGFueSkuX19MTVNfUExVR0lOX0NPTlRFWFQgPSB0cnVlO1xuXG5sZXQgcHJlZGljdGlvbkxvb3BIYW5kbGVyU2V0ID0gZmFsc2U7XG5sZXQgcHJvbXB0UHJlcHJvY2Vzc29yU2V0ID0gZmFsc2U7XG5sZXQgY29uZmlnU2NoZW1hdGljc1NldCA9IGZhbHNlO1xubGV0IGdsb2JhbENvbmZpZ1NjaGVtYXRpY3NTZXQgPSBmYWxzZTtcbmxldCB0b29sc1Byb3ZpZGVyU2V0ID0gZmFsc2U7XG5sZXQgZ2VuZXJhdG9yU2V0ID0gZmFsc2U7XG5cbmNvbnN0IHNlbGZSZWdpc3RyYXRpb25Ib3N0ID0gY2xpZW50LnBsdWdpbnMuZ2V0U2VsZlJlZ2lzdHJhdGlvbkhvc3QoKTtcblxuY29uc3QgcGx1Z2luQ29udGV4dDogUGx1Z2luQ29udGV4dCA9IHtcbiAgd2l0aFByZWRpY3Rpb25Mb29wSGFuZGxlcjogKGdlbmVyYXRlKSA9PiB7XG4gICAgaWYgKHByZWRpY3Rpb25Mb29wSGFuZGxlclNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJlZGljdGlvbkxvb3BIYW5kbGVyIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKHRvb2xzUHJvdmlkZXJTZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlByZWRpY3Rpb25Mb29wSGFuZGxlciBjYW5ub3QgYmUgdXNlZCB3aXRoIGEgdG9vbHMgcHJvdmlkZXJcIik7XG4gICAgfVxuXG4gICAgcHJlZGljdGlvbkxvb3BIYW5kbGVyU2V0ID0gdHJ1ZTtcbiAgICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5zZXRQcmVkaWN0aW9uTG9vcEhhbmRsZXIoZ2VuZXJhdGUpO1xuICAgIHJldHVybiBwbHVnaW5Db250ZXh0O1xuICB9LFxuICB3aXRoUHJvbXB0UHJlcHJvY2Vzc29yOiAocHJlcHJvY2VzcykgPT4ge1xuICAgIGlmIChwcm9tcHRQcmVwcm9jZXNzb3JTZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb21wdFByZXByb2Nlc3NvciBhbHJlYWR5IHJlZ2lzdGVyZWRcIik7XG4gICAgfVxuICAgIHByb21wdFByZXByb2Nlc3NvclNldCA9IHRydWU7XG4gICAgc2VsZlJlZ2lzdHJhdGlvbkhvc3Quc2V0UHJvbXB0UHJlcHJvY2Vzc29yKHByZXByb2Nlc3MpO1xuICAgIHJldHVybiBwbHVnaW5Db250ZXh0O1xuICB9LFxuICB3aXRoQ29uZmlnU2NoZW1hdGljczogKGNvbmZpZ1NjaGVtYXRpY3MpID0+IHtcbiAgICBpZiAoY29uZmlnU2NoZW1hdGljc1NldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29uZmlnIHNjaGVtYXRpY3MgYWxyZWFkeSByZWdpc3RlcmVkXCIpO1xuICAgIH1cbiAgICBjb25maWdTY2hlbWF0aWNzU2V0ID0gdHJ1ZTtcbiAgICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5zZXRDb25maWdTY2hlbWF0aWNzKGNvbmZpZ1NjaGVtYXRpY3MpO1xuICAgIHJldHVybiBwbHVnaW5Db250ZXh0O1xuICB9LFxuICB3aXRoR2xvYmFsQ29uZmlnU2NoZW1hdGljczogKGdsb2JhbENvbmZpZ1NjaGVtYXRpY3MpID0+IHtcbiAgICBpZiAoZ2xvYmFsQ29uZmlnU2NoZW1hdGljc1NldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2xvYmFsIGNvbmZpZyBzY2hlbWF0aWNzIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtcbiAgICB9XG4gICAgZ2xvYmFsQ29uZmlnU2NoZW1hdGljc1NldCA9IHRydWU7XG4gICAgc2VsZlJlZ2lzdHJhdGlvbkhvc3Quc2V0R2xvYmFsQ29uZmlnU2NoZW1hdGljcyhnbG9iYWxDb25maWdTY2hlbWF0aWNzKTtcbiAgICByZXR1cm4gcGx1Z2luQ29udGV4dDtcbiAgfSxcbiAgd2l0aFRvb2xzUHJvdmlkZXI6ICh0b29sc1Byb3ZpZGVyKSA9PiB7XG4gICAgaWYgKHRvb2xzUHJvdmlkZXJTZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRvb2xzIHByb3ZpZGVyIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKHByZWRpY3Rpb25Mb29wSGFuZGxlclNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9vbHMgcHJvdmlkZXIgY2Fubm90IGJlIHVzZWQgd2l0aCBhIHByZWRpY3Rpb25Mb29wSGFuZGxlclwiKTtcbiAgICB9XG5cbiAgICB0b29sc1Byb3ZpZGVyU2V0ID0gdHJ1ZTtcbiAgICBzZWxmUmVnaXN0cmF0aW9uSG9zdC5zZXRUb29sc1Byb3ZpZGVyKHRvb2xzUHJvdmlkZXIpO1xuICAgIHJldHVybiBwbHVnaW5Db250ZXh0O1xuICB9LFxuICB3aXRoR2VuZXJhdG9yOiAoZ2VuZXJhdG9yKSA9PiB7XG4gICAgaWYgKGdlbmVyYXRvclNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0b3JTZXQgPSB0cnVlO1xuICAgIHNlbGZSZWdpc3RyYXRpb25Ib3N0LnNldEdlbmVyYXRvcihnZW5lcmF0b3IpO1xuICAgIHJldHVybiBwbHVnaW5Db250ZXh0O1xuICB9LFxufTtcblxuaW1wb3J0KFwiLi8uLi9zcmMvaW5kZXgudHNcIikudGhlbihhc3luYyBtb2R1bGUgPT4ge1xuICByZXR1cm4gYXdhaXQgbW9kdWxlLm1haW4ocGx1Z2luQ29udGV4dCk7XG59KS50aGVuKCgpID0+IHtcbiAgc2VsZlJlZ2lzdHJhdGlvbkhvc3QuaW5pdENvbXBsZXRlZCgpO1xufSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSB0aGUgbWFpbiBmdW5jdGlvbiBvZiB0aGUgcGx1Z2luLlwiKTtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7OztBQUFBLElBTWEsV0FNQSxhQXNGQSxlQWdCQTtBQWxIYjtBQUFBO0FBQUE7QUFNTyxJQUFNLFlBQVk7QUFBQSxNQUN2QjtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQWM7QUFBQSxNQUFlO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUNoRjtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLElBQ2hFO0FBR08sSUFBTSxjQUFjO0FBQUEsTUFDekIsR0FBRztBQUFBO0FBQUEsTUFFSDtBQUFBLE1BQUs7QUFBQSxNQUFNO0FBQUE7QUFBQSxNQUVYO0FBQUEsTUFBSztBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFDOUQ7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFZO0FBQUE7QUFBQSxNQUVwQztBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQTtBQUFBLE1BRWhEO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFDckU7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQTtBQUFBLE1BRXZCO0FBQUEsTUFBTTtBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFNO0FBQUEsTUFBUztBQUFBLE1BQU07QUFBQSxNQUMxRTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQ3pFO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQ3RFO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQTtBQUFBLE1BRTNDO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQU07QUFBQSxNQUFXO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBO0FBQUEsTUFFckU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQTtBQUFBLE1BRTFCO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDdEU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ3JFO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQzdEO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFhO0FBQUEsTUFBVztBQUFBLE1BQWE7QUFBQSxNQUFjO0FBQUEsTUFBYztBQUFBLE1BQ3JGO0FBQUEsTUFBWTtBQUFBLE1BQWE7QUFBQSxNQUFlO0FBQUEsTUFBYTtBQUFBLE1BQWE7QUFBQSxNQUNsRTtBQUFBLE1BQVk7QUFBQSxNQUFZO0FBQUEsTUFBYztBQUFBLE1BQVM7QUFBQSxNQUFhO0FBQUEsTUFBVTtBQUFBLE1BQ3RFO0FBQUEsTUFBUTtBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUE7QUFBQSxNQUUvQjtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ3JFO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUNsRTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQ3RFO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUNqRTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUM5RDtBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFjO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUNuRTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDbEU7QUFBQSxNQUFZO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFDckU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFDL0Q7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFDdEU7QUFBQSxNQUFPO0FBQUEsTUFBVztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ2xFO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQWE7QUFBQSxNQUN4RDtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQ2pFO0FBQUEsTUFBVztBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUNyRDtBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFXO0FBQUEsTUFDbEQ7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUNqRTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUMvRDtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUNoRTtBQUFBLE1BQVc7QUFBQSxNQUFjO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQzlEO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQzdDO0FBQUEsTUFBWTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFZO0FBQUEsTUFDL0Q7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFDbEU7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUM1RDtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFDOUM7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUN4RDtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUNuRTtBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQWE7QUFBQSxNQUFZO0FBQUEsTUFDdkQ7QUFBQSxNQUFZO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFhO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUNuRTtBQUFBLE1BQVk7QUFBQSxNQUFRO0FBQUEsTUFBWTtBQUFBLE1BQ2hDO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFZO0FBQUEsTUFDL0Q7QUFBQSxNQUFhO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFDeEM7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVk7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQ3BEO0FBQUEsTUFBWTtBQUFBLE1BQWE7QUFBQSxNQUFXO0FBQUEsTUFDcEM7QUFBQSxNQUFjO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFlO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUNsRTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUNsQztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUN2QztBQUFBLE1BQVU7QUFBQSxNQUFjO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUN6QztBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQ2pFO0FBQUEsTUFBWTtBQUFBLE1BQVM7QUFBQSxNQUFZO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUFTO0FBQUEsTUFDL0Q7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUNsRDtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQ3REO0FBQUEsTUFBVTtBQUFBLE1BQVk7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUN2RDtBQUFBLE1BQVU7QUFBQSxNQUFhO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFDcEQ7QUFBQSxNQUFTO0FBQUEsTUFBYTtBQUFBLE1BQVc7QUFBQSxNQUFhO0FBQUEsTUFDOUM7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQWM7QUFBQSxNQUFXO0FBQUEsTUFBVTtBQUFBLE1BQzFEO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQVM7QUFBQSxNQUNoRDtBQUFBLE1BQVU7QUFBQSxNQUFZO0FBQUEsTUFBZTtBQUFBLE1BQ3JDO0FBQUEsTUFBVztBQUFBLE1BQVk7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFDdkQ7QUFBQSxNQUFXO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUNoQztBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFDNUM7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFhO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFjO0FBQUEsSUFDdEU7QUFHTyxJQUFNLGdCQUFnQjtBQUFBLE1BQzNCLEdBQUc7QUFBQTtBQUFBLE1BRUg7QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQU07QUFBQSxNQUN0RTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUE7QUFBQSxNQUU3QztBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUE7QUFBQSxNQUVqRTtBQUFBLE1BQWE7QUFBQSxNQUFjO0FBQUEsTUFBYztBQUFBLE1BQVc7QUFBQSxNQUFjO0FBQUEsTUFDbEU7QUFBQSxNQUFVO0FBQUEsTUFBZ0I7QUFBQSxNQUFjO0FBQUEsTUFDeEM7QUFBQSxNQUFhO0FBQUEsTUFBYTtBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBWTtBQUFBLE1BQzdEO0FBQUEsTUFBYTtBQUFBLE1BQWdCO0FBQUEsTUFBYztBQUFBLE1BQWdCO0FBQUEsTUFDM0Q7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQWU7QUFBQSxNQUNqRTtBQUFBLE1BQVU7QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxJQUN4QztBQUVPLElBQU0sZUFBZTtBQUFBLE1BQzFCLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxJQUNkO0FBQUE7QUFBQTs7O0FDdEhBLElBTWEsV0FNQSxhQTREQSxlQU1BO0FBOUViO0FBQUE7QUFBQTtBQU1PLElBQU0sWUFBWTtBQUFBLE1BQ3ZCO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVk7QUFBQSxNQUNsRDtBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxJQUMvQztBQUdPLElBQU0sY0FBYztBQUFBLE1BQ3pCLEdBQUc7QUFBQTtBQUFBLE1BRUg7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUE7QUFBQSxNQUUzRTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQU87QUFBQSxNQUFVO0FBQUEsTUFDbEU7QUFBQSxNQUFNO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUNsRTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQTtBQUFBLE1BRWxEO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQTtBQUFBLE1BRXJFO0FBQUEsTUFBUztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUN4RTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQTtBQUFBLE1BRW5FO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQ3JFO0FBQUEsTUFBUztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBWTtBQUFBLE1BQVM7QUFBQSxNQUNqRTtBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVk7QUFBQSxNQUFhO0FBQUEsTUFBYTtBQUFBLE1BQ3BFO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBWTtBQUFBLE1BQ25FO0FBQUEsTUFBWTtBQUFBLE1BQVE7QUFBQSxNQUFZO0FBQUEsTUFBVztBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUE7QUFBQSxNQUVsRTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVE7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFVO0FBQUEsTUFDbEU7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFVO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFDN0Q7QUFBQSxNQUFZO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQTtBQUFBLE1BRTlCO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQ2xFO0FBQUEsTUFBVztBQUFBLE1BQVU7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQVU7QUFBQTtBQUFBLE1BRWpEO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVztBQUFBLE1BQy9EO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFVO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQ2pFO0FBQUEsTUFBVTtBQUFBLE1BQWE7QUFBQSxNQUFVO0FBQUEsTUFBZ0I7QUFBQSxNQUFjO0FBQUEsTUFDL0Q7QUFBQSxNQUFVO0FBQUEsTUFBVTtBQUFBO0FBQUEsTUFFcEI7QUFBQSxNQUFRO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFjO0FBQUEsTUFDM0Q7QUFBQSxNQUFZO0FBQUEsTUFBUTtBQUFBLE1BQVk7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQVU7QUFBQSxNQUMxRDtBQUFBLE1BQU87QUFBQSxNQUFXO0FBQUEsTUFBTztBQUFBLE1BQVk7QUFBQSxNQUFVO0FBQUEsTUFDL0M7QUFBQSxNQUFjO0FBQUEsTUFBa0I7QUFBQSxNQUFVO0FBQUEsTUFBUTtBQUFBLE1BQWE7QUFBQSxNQUMvRDtBQUFBLE1BQVk7QUFBQSxNQUFjO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQzlEO0FBQUEsTUFBVTtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUNsRTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUMzRDtBQUFBLE1BQVc7QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVc7QUFBQSxNQUFZO0FBQUEsTUFBYztBQUFBLE1BQ2pFO0FBQUEsTUFBUztBQUFBLE1BQVE7QUFBQSxNQUFVO0FBQUEsTUFBVztBQUFBLE1BQU07QUFBQTtBQUFBLE1BRTVDO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUTtBQUFBLE1BQzlEO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQ2pFO0FBQUEsTUFBVTtBQUFBLE1BQVU7QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1B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TTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUN4RTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUM1RTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFNO0FBQUEsTUFBTTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUN0RTtBQUFBLE1BQVM7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFXO0FBQUEsTUFDckU7QUFBQSxNQUFXO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUMxRTtBQUFBLE1BQVE7QUFBQSxNQUFRO0FBQUEsTUFBUTtBQUFBLE1BQVM7QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQ3RFO0FBQUEsTUFBUTtBQUFBLE1BQVc7QUFBQSxNQUFTO0FBQUEsTUFBUztBQUFBLE1BQU07QUFBQSxJQUM3QyxDQUFDO0FBSUQsSUFBTSxVQUFVLG9CQUFJLElBQUk7QUFBQSxNQUN0QjtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBTztBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBUztBQUFBLE1BQVM7QUFBQSxNQUMzRTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQU07QUFBQSxNQUFPO0FBQUEsTUFBTTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFD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QW9CQSxpQkFBZ0I7QUFDekQsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLDRCQUE0QixDQUFDLDJCQUEyQjtBQUN0RCxRQUFJLDJCQUEyQjtBQUM3QixZQUFNLElBQUksTUFBTSw2Q0FBNkM7QUFBQSxJQUMvRDtBQUNBLGdDQUE0QjtBQUM1Qix5QkFBcUIsMEJBQTBCLHNCQUFzQjtBQUNyRSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsbUJBQW1CLENBQUMsa0JBQWtCO0FBQ3BDLFFBQUksa0JBQWtCO0FBQ3BCLFlBQU0sSUFBSSxNQUFNLG1DQUFtQztBQUFBLElBQ3JEO0FBQ0EsUUFBSSwwQkFBMEI7QUFDNUIsWUFBTSxJQUFJLE1BQU0sNERBQTREO0FBQUEsSUFDOUU7QUFFQSx1QkFBbUI7QUFDbkIseUJBQXFCLGlCQUFpQixhQUFhO0FBQ25ELFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxlQUFlLENBQUMsY0FBYztBQUM1QixRQUFJLGNBQWM7QUFDaEIsWUFBTSxJQUFJLE1BQU0sOEJBQThCO0FBQUEsSUFDaEQ7QUFFQSxtQkFBZTtBQUNmLHlCQUFxQixhQUFhLFNBQVM7QUFDM0MsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUVBLHdEQUE0QixLQUFLLE9BQU1DLFlBQVU7QUFDL0MsU0FBTyxNQUFNQSxRQUFPLEtBQUssYUFBYTtBQUN4QyxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ1osdUJBQXFCLGNBQWM7QUFDckMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUFVO0FBQ2xCLFVBQVEsTUFBTSxvREFBb0Q7QUFDbEUsVUFBUSxNQUFNLEtBQUs7QUFDckIsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X3NkayIsICJwcmVwcm9jZXNzIiwgImNvbmZpZ1NjaGVtYXRpY3MiLCAibW9kdWxlIl0KfQo=
