/**
 * Synonym replacements for prompt compression.
 * 
 * CRITERIA: Only real, widely-recognized abbreviations that preserve meaning.
 * - No non-words (e.g., "impling", "newed")
 * - No semantic inverses (e.g., "implemented" → "implied")
 * - No ambiguous short forms (e.g., "opt" could mean "choose")
 * - No no-ops (word mapping to itself) — removed for performance
 */

export const synonyms: Record<string, string> = {
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
  'parameter': 'param',       // "prm" is not standard
  'parameters': 'params',
  'argument': 'arg',
  'arguments': 'args',
  'expression': 'expr',
  'expressions': 'exprs',
  'statement': 'stmt',
  'statements': 'stmts',
  'declaration': 'decl',
};
