/**
 * English filler words organized by compression level.
 * Source: Linguistic research, NLP resources, COCA frequency lists
 */

// Gentle tier: Only polite filler and basic courtesy words
export const EN_GENTLE = [
  'please', 'thanks', 'thank', 'appreciate', 'appreciated', 'grateful', 'kindly', 'polite',
  'um', 'uh', 'oh', 'ah', 'wow', 'hmm', 'hmmm', 'well', 'okay', 'ok',
];

// Balanced tier: ~300 high-frequency words safe to remove
export const EN_BALANCED = [
  ...EN_GENTLE,
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
  // Quantifiers
  'some', 'any', 'all', 'each', 'every', 'both', 'few', 'many', 'much', 'more',
  'most', 'other', 'another', 'same', 'own', 'enough', 'only', 'even', 'also',
  'too', 'very', 'really', 'quite', 'rather', 'just', 'still', 'already', 'yet',
  'almost', 'nearly', 'only', 'simply', 'basically', 'literally', 'actually',
  'obviously', 'clearly', 'certainly', 'definitely', 'absolutely', 'truly',
  'honestly', 'seriously', 'essentially', 'generally', 'typically', 'usually',
  'normally', 'commonly', 'frequently', 'often', 'regularly', 'always', 'never',
  'ever', 'sometimes', 'often', 'rarely', 'seldom',
  // High-frequency verbs (safe to remove in context)
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
  'suppose', 'imagine', 'realize', 'notice', 'recognize', 'suppose', 'wonder',
  'pretend', 'refuse', 'claim', 'announce', 'explain', 'describe', 'mention',
  'discuss', 'suggest', 'recommend', 'advise', 'warn', 'promise', 'agree',
  'disagree', 'accept', 'reject', 'deny', 'admit', 'confess', 'declare',
  'discover', 'invent', 'design', 'produce', 'prepare', 'arrange', 'organize',
  'manage', 'control', 'operate', 'run', 'drive', 'fly', 'swim', 'run', 'jump',
  'climb', 'push', 'pull', 'lift', 'carry', 'deliver', 'receive', 'obtain',
  'achieve', 'accomplish', 'complete', 'finish', 'end', 'stop', 'pause',
  'continue', 'proceed', 'advance', 'progress', 'improve', 'increase',
  'decrease', 'reduce', 'expand', 'extend', 'limit', 'restrict', 'prevent',
  'avoid', 'escape', 'protect', 'defend', 'attack', 'fight', 'win', 'lose',
  'succeed', 'fail', 'try', 'attempt', 'practice', 'train', 'study', 'teach',
  'learn', 'discover', 'explore', 'search', 'seek', 'hunt', 'catch', 'capture',
  'release', 'free', 'save', 'rescue', 'help', 'support', 'assist', 'serve',
  'employ', 'hire', 'fire', 'promote', 'demote', 'appoint', 'elect', 'vote',
  'choose', 'select', 'prefer', 'decide', 'determine', 'conclude', 'judge',
  'evaluate', 'assess', 'measure', 'calculate', 'count', 'estimate', 'predict',
  'forecast', 'plan', 'prepare', 'organize', 'arrange', 'schedule', 'book',
  'order', 'request', 'demand', 'command', 'direct', 'instruct', 'guide',
  'lead', 'follow', 'accompany', 'join', 'leave', 'depart', 'arrive', 'return',
  'enter', 'exit', 'approach', 'withdraw', 'retreat', 'advance', 'move', 'shift',
  'transfer', 'transport', 'deliver', 'send', 'receive', 'collect', 'gather',
  'distribute', 'spread', 'scatter', 'concentrate', 'focus', 'aim', 'target',
  'hit', 'miss', 'strike', 'touch', 'grab', 'hold', 'release', 'let', 'allow',
  'permit', 'enable', 'force', 'compel', 'oblige', 'require', 'need', 'want',
  'desire', 'wish', 'hope', 'expect', 'anticipate', 'fear', 'dread', 'worry',
  'concern', 'interest', 'attract', 'appeal', 'please', 'satisfy', 'disappoint',
  'surprise', 'amaze', 'astonish', 'shock', 'frighten', 'scare', 'terrify',
  'calm', 'relax', 'rest', 'sleep', 'wake', 'rise', 'stand', 'sit', 'lie',
  'lean', 'bend', 'twist', 'turn', 'spin', 'rotate', 'revolve', 'orbit',
  'circle', 'surround', 'enclose', 'contain', 'include', 'exclude', 'involve',
  'affect', 'influence', 'impact', 'change', 'alter', 'modify', 'adjust',
  'adapt', 'transform', 'convert', 'translate', 'interpret', 'explain',
  'clarify', 'simplify', 'complicate', 'confuse', 'puzzle', 'mystify',
  'reveal', 'expose', 'hide', 'conceal', 'cover', 'uncover', 'discover',
  'find', 'locate', 'identify', 'recognize', 'distinguish', 'differentiate',
  'compare', 'contrast', 'match', 'fit', 'suit', 'work', 'function', 'operate',
  'perform', 'execute', 'accomplish', 'achieve', 'attain', 'reach', 'gain',
  'earn', 'win', 'lose', 'spend', 'cost', 'charge', 'price', 'value', 'worth',
  'rich', 'poor', 'cheap', 'expensive', 'free', 'paid', 'affordable', 'costly',
];

// Aggressive tier: Everything + more
export const EN_AGGRESSIVE = [
  ...EN_BALANCED,
  // Object pronouns
  'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its',
  'itself', 'they', 'them', 'their', 'theirs', 'themselves',
  // Relative pronouns
  'which', 'who', 'whom', 'whose', 'what', 'where', 'when', 'why', 'how',
  // Intensifiers
  'extremely', 'incredibly', 'absolutely', 'totally', 'completely', 'utterly',
  'highly', 'particularly', 'especially', 'fundamentally', 'generally',
  'typically', 'usually', 'normally', 'commonly', 'frequently', 'regularly',
  'consistently', 'constantly', 'continuously', 'perpetually', 'always',
  'never', 'ever', 'however', 'moreover', 'furthermore', 'additionally',
  'either', 'neither', 'least', 'less', 'beyond',
];

export const EN_BLACKLIST = {
  gentle: EN_GENTLE,
  balanced: EN_BALANCED,
  aggressive: EN_AGGRESSIVE,
};
