"use strict";
/**
 * English filler words organized by compression level.
 * Source: Linguistic research, NLP resources, COCA frequency lists
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EN_BLACKLIST = exports.EN_AGGRESSIVE = exports.EN_BALANCED = exports.EN_GENTLE = void 0;
// Gentle tier: Only polite filler and basic courtesy words
exports.EN_GENTLE = [
    'please', 'thanks', 'thank', 'appreciate', 'appreciated', 'grateful', 'kindly', 'polite',
    'um', 'uh', 'oh', 'ah', 'wow', 'hmm', 'hmmm', 'well', 'okay', 'ok',
];
// Balanced tier: ~300 high-frequency words safe to remove (deduplicated)
exports.EN_BALANCED = [
    ...exports.EN_GENTLE,
    // Articles
    'a', 'an', 'the',
    // Subject pronouns
    'i', 'me', 'my', 'mine', 'myself', 'we', 'us', 'our', 'ours', 'ourselves',
    'you', 'your', 'yours', 'yourself', 'yourselves',
    // Copulas
    'is', 'am', 'are', 'was', 'were', 'be', 'been', 'being',
    // Auxiliaries
    'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should',
    'may', 'might', 'can', 'shall',
    // Prepositions
    'of', 'in', 'to', 'for', 'with', 'on', 'at', 'from', 'by', 'about', 'up', 'down',
    'out', 'off', 'over', 'through', 'into', 'after', 'before', 'during', 'again',
    'here', 'there', 'between', 'under', 'above', 'below', 'near', 'around', 'against',
    'within', 'without', 'along', 'across', 'behind', 'beyond', 'inside', 'outside',
    'toward', 'towards', 'upon', 'via', 'per', 'among',
    // Conjunctions
    'and', 'but', 'or', 'nor', 'yet', 'so', 'because', 'since', 'unless', 'while',
    'although', 'though', 'if', 'whether', 'as', 'than', 'that', 'when', 'where',
    // Demonstratives
    'this', 'these', 'those', 'such',
    // Quantifiers & Adverbs (deduplicated)
    'some', 'any', 'all', 'each', 'every', 'both', 'few', 'many', 'much', 'more',
    'most', 'other', 'another', 'same', 'own', 'enough', 'only', 'even', 'also',
    'too', 'very', 'really', 'quite', 'rather', 'just', 'still', 'already',
    'almost', 'nearly', 'obviously', 'clearly', 'certainly', 'definitely', 'absolutely', 'truly',
    'honestly', 'seriously', 'essentially', 'generally', 'typically', 'usually',
    'normally', 'commonly', 'frequently', 'often', 'regularly', 'always', 'never',
    'ever', 'sometimes', 'rarely', 'seldom',
    // High-frequency verbs (deduplicated)
    'get', 'got', 'go', 'goes', 'going', 'gone', 'make', 'made', 'take', 'took',
    'give', 'gave', 'know', 'knew', 'think', 'thought', 'see', 'saw', 'look',
    'find', 'tell', 'ask', 'need', 'try', 'feel', 'keep', 'let', 'begin', 'start',
    'show', 'hear', 'call', 'turn', 'move', 'live', 'hold', 'bring', 'happen',
    'write', 'provide', 'sit', 'stand', 'pay', 'meet', 'include', 'continue',
    'set', 'learn', 'change', 'lead', 'understand', 'watch', 'follow', 'create',
    'speak', 'read', 'allow', 'add', 'spend', 'grow', 'open', 'walk', 'offer',
    'remember', 'consider', 'appear', 'wait', 'serve', 'send', 'expect', 'build',
    'stay', 'fall', 'reach', 'remain', 'suggest', 'raise', 'pass', 'sell',
    'require', 'report', 'decide', 'pull', 'return', 'develop', 'accept', 'argue',
    'die', 'believe', 'seem', 'hate', 'love', 'like', 'want', 'hope', 'wish',
    'suppose', 'imagine', 'realize', 'notice', 'recognize', 'wonder',
    'pretend', 'refuse', 'claim', 'announce', 'explain', 'describe', 'mention',
    'discuss', 'recommend', 'advise', 'warn', 'promise', 'agree',
    'disagree', 'reject', 'deny', 'admit', 'confess', 'declare',
    'discover', 'invent', 'design', 'produce', 'prepare', 'arrange', 'organize',
    'manage', 'control', 'operate', 'run', 'drive', 'fly', 'swim', 'jump',
    'climb', 'push', 'pull', 'lift', 'carry', 'deliver', 'receive', 'obtain',
    'achieve', 'accomplish', 'complete', 'finish', 'end', 'stop', 'pause',
    'proceed', 'advance', 'progress', 'improve', 'increase',
    'decrease', 'reduce', 'expand', 'extend', 'limit', 'restrict', 'prevent',
    'avoid', 'escape', 'protect', 'defend', 'attack', 'fight', 'win', 'lose',
    'succeed', 'fail', 'attempt', 'practice', 'train', 'study', 'teach',
    'explore', 'search', 'seek', 'hunt', 'catch', 'capture',
    'release', 'free', 'save', 'rescue', 'help', 'support', 'assist',
    'employ', 'hire', 'fire', 'promote', 'demote', 'appoint', 'elect', 'vote',
    'choose', 'select', 'prefer', 'determine', 'conclude', 'judge',
    'evaluate', 'assess', 'measure', 'calculate', 'count', 'estimate', 'predict',
    'forecast', 'plan', 'schedule', 'book',
    'order', 'request', 'demand', 'command', 'direct', 'instruct', 'guide',
    'accompany', 'join', 'leave', 'depart', 'arrive',
    'enter', 'exit', 'approach', 'withdraw', 'retreat', 'shift',
    'transfer', 'transport', 'collect', 'gather',
    'distribute', 'spread', 'scatter', 'concentrate', 'focus', 'aim', 'target',
    'hit', 'miss', 'strike', 'touch', 'grab',
    'permit', 'enable', 'force', 'compel', 'oblige',
    'desire', 'anticipate', 'fear', 'dread', 'worry',
    'concern', 'interest', 'attract', 'appeal', 'please', 'satisfy', 'disappoint',
    'surprise', 'amaze', 'astonish', 'shock', 'frighten', 'scare', 'terrify',
    'calm', 'relax', 'rest', 'sleep', 'wake', 'rise', 'lie',
    'lean', 'bend', 'twist', 'spin', 'rotate', 'revolve', 'orbit',
    'circle', 'surround', 'enclose', 'contain', 'exclude', 'involve',
    'affect', 'influence', 'impact', 'alter', 'modify', 'adjust',
    'adapt', 'transform', 'convert', 'translate', 'interpret',
    'clarify', 'simplify', 'complicate', 'confuse', 'puzzle', 'mystify',
    'reveal', 'expose', 'hide', 'conceal', 'cover', 'uncover',
    'locate', 'identify', 'distinguish', 'differentiate',
    'compare', 'contrast', 'match', 'fit', 'suit', 'work', 'function',
    'perform', 'execute', 'attain', 'gain',
    'earn', 'cost', 'charge', 'price', 'value', 'worth',
    'rich', 'poor', 'cheap', 'expensive', 'free', 'paid', 'affordable', 'costly',
];
// Aggressive tier: Everything + more (deduplicated)
exports.EN_AGGRESSIVE = [
    ...exports.EN_BALANCED,
    // Object pronouns
    'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its',
    'itself', 'they', 'them', 'their', 'theirs', 'themselves',
    // Relative pronouns
    'which', 'who', 'whom', 'whose', 'what', 'where', 'when', 'why', 'how',
    // Intensifiers & Adverbs (deduplicated)
    'extremely', 'incredibly', 'absolutely', 'totally', 'completely', 'utterly',
    'highly', 'particularly', 'especially', 'fundamentally',
    'generally', 'typically', 'usually', 'normally', 'commonly', 'frequently',
    'regularly', 'consistently', 'constantly', 'continuously', 'perpetually',
    'always', 'never', 'ever', 'however', 'moreover', 'furthermore', 'additionally',
    'either', 'neither', 'least', 'less', 'beyond',
];
exports.EN_BLACKLIST = {
    gentle: exports.EN_GENTLE,
    balanced: exports.EN_BALANCED,
    aggressive: exports.EN_AGGRESSIVE,
};
