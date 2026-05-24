"use strict";
/**
 * Synonym replacements for prompt compression.
 *
 * CRITERIA: Only real, widely-recognized abbreviations that preserve meaning.
 * - No non-words (e.g., "impling", "newed")
 * - No semantic inverses (e.g., "implemented" → "implied")
 * - No ambiguous short forms (e.g., "opt" could mean "choose")
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.synonyms = void 0;
exports.synonyms = {
    // ==================== ENGLISH TECHNICAL TERMS ====================
    // Well-established abbreviations only
    'application': 'app',
    'applications': 'apps',
    'information': 'info',
    'environment': 'env',
    'environments': 'envs',
    'configuration': 'config',
    'configurations': 'configs',
    'documentation': 'docs',
    // Verbs → infinitive/gerund forms (real words)
    'utilization': 'use',
    'utilize': 'use',
    'utilizes': 'uses',
    'utilizing': 'using',
    'utilized': 'used',
    'implementation': 'impl',
    'implementations': 'impls',
    'implement': 'impl',
    'implements': 'impls',
    'initialization': 'init',
    'initialize': 'init',
    'initializes': 'inits',
    'initializing': 'initing',
    'initialized': 'inited',
    'synchronization': 'sync',
    'synchronize': 'sync',
    'synchronizes': 'syncs',
    'synchronizing': 'syncing',
    'synchronized': 'synced',
    'authentication': 'auth',
    'authenticate': 'auth',
    'authenticates': 'auths',
    'authorization': 'authz',
    'authorize': 'authz',
    'authorizes': 'authzs',
    // Safe verb replacements (real words)
    'performing': 'doing',
    'performed': 'did',
    'executing': 'running',
    'executed': 'ran',
    'establishing': 'setting',
    'established': 'set',
    'providing': 'giving',
    'provided': 'given',
    'obtaining': 'getting',
    'obtained': 'got',
    'acquiring': 'getting',
    'acquired': 'got',
    'retrieving': 'getting',
    'retrieved': 'got',
    // ==================== ENGLISH GENERAL TERMS ====================
    // Conjunctions/adverbs → shorter real words
    'however': 'but',
    'therefore': 'so',
    'consequently': 'so',
    'thus': 'so',
    'hence': 'so',
    'although': 'though',
    // Prepositions → standard abbreviations (used in notes, not prose)
    'regarding': 're',
    'concerning': 're',
    'respecting': 're',
    'pertaining': 're',
    'relating': 're',
    // Common words → recognized shorthand
    'through': 'thru',
    'until': 'til',
    'without': 'w/o',
    'between': 'btwn',
    'approximately': 'approx',
    // ==================== GERMAN TECHNICAL TERMS ====================
    'anwendung': 'app',
    'anwendungen': 'apps',
    'informationen': 'infos',
    'umgebung': 'env',
    'konfiguration': 'config',
    'dokumentation': 'docs',
    'funktionalität': 'func',
    'implementierung': 'impl',
    'initialisierung': 'init',
    'optimierung': 'opt',
    'synchronisation': 'sync',
    'authentifizierung': 'auth',
    'autorisation': 'authz',
    'identifikation': 'id',
    'kommunikation': 'comm',
    // German verbs — removed no-op entries (words mapping to themselves)
    // ==================== SAFE BUILD/DEV TERMS (REAL ABBREVIATIONS) ====================
    // Only keep terms where the abbreviation is universally recognized in dev contexts
    'directory': 'dir',
    'directories': 'dirs',
    'parameter': 'param', // "prm" is not standard
    'parameters': 'params',
    'argument': 'arg',
    'arguments': 'args',
    'expression': 'expr',
    'expressions': 'exprs',
    'statement': 'stmt',
    'statements': 'stmts',
    'declaration': 'decl',
    'declarations': 'decls',
    'definition': 'def',
    'definitions': 'defs',
    'instance': 'inst',
    'instances': 'insts',
    // Error/warning types — keep full words, they're already short
    'undefined': 'undefined', // "undef" is not standard in prose
    'unresolved': 'unresolved',
    'incomplete': 'incomplete',
    'unused': 'unused',
    'deprecated': 'deprecated',
    'obsolete': 'obsolete',
    'redundant': 'redundant',
    'duplicate': 'duplicate',
    'conflict': 'conflict',
    'ambiguous': 'ambiguous',
    // File/path related — keep full, they're already short
    'folder': 'folder', // "fldr" is not standard
    'path': 'path', // "pth" is ambiguous (could be "paths")
    'paths': 'paths',
    'source': 'source', // "src" is a directory name, not a synonym for "source"
    'sources': 'sources',
    'header': 'header', // "hdr" is file extension context only
    'headers': 'headers',
    'include': 'include', // "inc" is ambiguous (could be "income")
    'includes': 'includes',
    // German build terms — keep full, abbreviations are not standard in prose
    'erstellung': 'erstellung',
    'kompilieren': 'kompilieren',
    'verknüpfen': 'verknüpfen',
    'fehler': 'fehler',
    'warnung': 'warnung',
    'hinweis': 'hinweis',
    'quelle': 'quelle',
    'ziel': 'ziel',
    'verzeichnis': 'verzeichnis',
    // MSVC German error terms — keep full (these are proper nouns/technical terms)
    'bezeichner': 'bezeichner',
    'typspezifizierer': 'typspezifizierer',
    'syntaxfehler': 'syntaxfehler',
    'deklarierter': 'deklarierter',
    'ungültig': 'ungültig',
    'angenommen': 'angenommen',
    'unterstützt': 'unterstützt',
    'geöffnet': 'geöffnet',
    'verwendung': 'verwendung',
    'gefunden': 'gefunden',
    'fehlt': 'fehlt',
    'fehlendes': 'fehlendes',
    // Warning terms — keep full
    'neuerstellung': 'neuerstellung',
};
