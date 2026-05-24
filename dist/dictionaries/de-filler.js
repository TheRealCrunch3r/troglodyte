"use strict";
/**
 * German filler words organized by compression level.
 * Source: Linguistic research, NLP resources
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DE_BLACKLIST = exports.DE_AGGRESSIVE = exports.DE_BALANCED = exports.DE_GENTLE = void 0;
// Gentle tier: Only polite filler
exports.DE_GENTLE = [
    'bitte', 'danke', 'danken', 'vielen', 'herzlich', 'freut',
    'ähm', 'äh', 'hm', 'hmm', 'oh', 'ach', 'na', 'tja',
];
// Balanced tier: ~250 high-frequency German words (deduplicated)
exports.DE_BALANCED = [
    ...exports.DE_GENTLE,
    // Articles
    'der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einen', 'einem', 'eines',
    // Pronouns
    'ich', 'mich', 'mir', 'mein', 'meine', 'meiner', 'uns', 'unsere', 'unserer',
    'du', 'dich', 'dir', 'dein', 'deine', 'er', 'ihn', 'ihm', 'sein', 'seine',
    'sie', 'ihr', 'ihre', 'es', 'wir', 'euch', 'man', 'mensch',
    // Copulas
    'ist', 'sind', 'war', 'waren', 'sein', 'gewesen', 'werde', 'werden', 'wurde',
    // Auxiliaries
    'haben', 'hat', 'habe', 'hatten', 'können', 'kann', 'müssen', 'sollen', 'dürfen',
    'mögen', 'mochte', 'wollen', 'will', 'wollte', 'musste', 'sollte', 'konnte',
    // Prepositions
    'von', 'in', 'zu', 'für', 'mit', 'an', 'auf', 'bei', 'nach', 'über', 'unter',
    'durch', 'um', 'bis', 'ohne', 'aus', 'vor', 'zwischen', 'gegen', 'seit',
    'während', 'hinter', 'neben', 'oberhalb', 'unterhalb', 'innerhalb', 'außerhalb',
    'statt', 'trotz', 'wegen', 'gemäß', 'laut', 'entlang', 'entgegen', 'fern',
    'jenseits', 'knap', 'nördlich', 'östlich', 'südlich', 'westlich', 'ab',
    // Conjunctions
    'und', 'oder', 'aber', 'denn', 'sondern', 'weil', 'da', 'obwohl', 'wenn',
    'falls', 'bevor', 'nachdem', 'sobald', 'als', 'wie', 'dass', 'ob',
    'entweder', 'noch', 'sowohl', 'weder',
    // Demonstratives
    'dieser', 'diese', 'dieses', 'diesem', 'diesen', 'jener', 'jene', 'solch',
    'solcher', 'selbst', 'selber', 'eben', 'gerade', 'nämlich',
    // Quantifiers
    'alle', 'alles', 'viel', 'viele', 'vieler', 'mehr', 'mehrere', 'wenig',
    'wenige', 'manch', 'manche', 'jeder', 'jede', 'jedes', 'nichts', 'etwas',
    'irgend', 'irgendein', 'einige', 'verschiedene', 'zahlreiche', 'keine',
    'keiner', 'keines', 'niemand',
    // Intensifiers/Fillers
    'auch', 'so', 'also', 'halt', 'mal', 'doch', 'eigentlich', 'tatsächlich',
    'wirklich', 'sehr', 'ziemlich', 'schon', 'nur', 'allein', 'immer',
    'nie', 'niemals', 'oft', 'manchmal', 'häufig', 'selten',
    'vielleicht', 'wahrscheinlich', 'sicher', 'klar', 'natürlich', 'freilich',
    'übrigens', 'allerdings', 'jedoch', 'sonst', 'dann', 'jetzt', 'heute',
    'morgen', 'gestern', 'hier', 'dort', 'da', 'wohin', 'her', 'weg', 'hin',
    'ran', 'rum', 'herum', 'dabei', 'davon', 'darum', 'damit', 'dafür',
    'dagegen', 'dazu', 'daher', 'darüber', 'darunter', 'dazwischen', 'dran',
    'drauf', 'drin', 'drüber', 'drunter', 'ja', 'nein',
    // High-frequency verbs
    'machen', 'macht', 'sagen', 'sagt', 'sagte', 'geben', 'gibt', 'gab',
    'nehmen', 'nimmt', 'nahm', 'finden', 'findet', 'fand', 'wissen', 'weiß',
    'wusste', 'denken', 'denkt', 'dachte', 'sehen', 'sieht', 'sah', 'kommen',
    'kommt', 'kam', 'gehen', 'geht', 'ging', 'stehen', 'steht', 'liegen', 'liegt',
    'lassen', 'lässt', 'halten', 'hält', 'hielt', 'bringen', 'bringt', 'brachte',
    'bleiben', 'bleibt', 'blieb', 'fragen', 'fragt', 'fragte', 'antworten',
    'antwortet', 'zeigen', 'zeigt', 'zeigte', 'sprechen', 'spricht', 'sprach',
    'hören', 'hört', 'hörte', 'lernen', 'lernt', 'lernte', 'verstehen', 'versteht',
    'verstand', 'beginnen', 'beginnt', 'begann', 'enden', 'endet', 'endete',
    'arbeiten', 'arbeitet', 'arbeitete', 'leben', 'lebt', 'lebte', 'spielen',
    'spielt', 'spielte', 'schauen', 'schaut', 'schaute', 'schreiben', 'schreibt',
    'schrieb', 'lesen', 'liest', 'las', 'meinen', 'meint', 'meinte', 'glauben',
    'glaubt', 'glaubte', 'hoffen', 'hofft', 'hoffte', 'brauchen', 'braucht',
    'brauchte', 'darf', 'durfte', 'soll', 'muss', 'mag', 'kennen', 'kennt',
    'kannte', 'heißen', 'heißt', 'hieß',
];
// Aggressive tier (deduplicated)
exports.DE_AGGRESSIVE = [
    ...exports.DE_BALANCED,
    'ihnen', 'ihrer', 'seinen', 'deren', 'dessen', 'welcher', 'welche', 'wer',
    'was', 'wo', 'wie', 'genau',
];
exports.DE_BLACKLIST = {
    gentle: exports.DE_GENTLE,
    balanced: exports.DE_BALANCED,
    aggressive: exports.DE_AGGRESSIVE,
};
