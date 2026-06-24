export const phrases: Record<string, string> = {
  // ==================== ENGLISH PHRASES ====================

  // Polite openers
  'Hello there': '',
  'Hello': '',
  'Hi': '',
  'Hey': '',
  'Good morning': '',
  'Good afternoon': '',
  'Good evening': '',

  // Polite closers
  'Thank you': '',
  'Thanks': '',
  'Thank you so much': '',
  'Thanks a lot': '',
  'so much': '',

  'I appreciate it': '',
  'I appreciate your help': '',

  // Polite requests
  'I would really appreciate it if you could': '',
  'I would appreciate it if you could': '',
  'Could you please': '',
  'Can you please': '',
  'Please': '',
  "If you don't mind": '',
  'If you could': '',

  // Role-playing
  'I would like you to act as': 'Be',
  'Act as a': 'Be',
  'Act as': 'Be',
  'Pretend to be': 'Be',
  'You are a': 'Be',
  'You are': 'Be',

  // Filler phrases
  'I am trying to figure out': 'Need',
  'I am trying to': 'Need',
  'I want to': 'Need',
  'I need to': 'Need',
  'I would like to': 'Need',
  'I would like': 'Need',
  'I want': 'Need',
  'I need': 'Need',
  'I have a question about': 'Question',
  'I have a question': 'Question',
  'My question is': 'Question',
  'The question is': 'Question',
  'I am wondering': '',
  'I was wondering': '',
  'I am curious': 'Curious',

  // Redundant phrases
  'Due to the fact that': 'Because',
  'In order to': 'To',
  'In the event that': 'If',
  'For the purpose of': 'To',
  'At this point in time': 'Now',
  'At this moment': 'Now',
  'In my opinion': 'IMO',
  'In my humble opinion': 'IMO',
  'As far as I know': 'AFAIK',
  'As far as I can tell': 'AFAICT',
  'It is important to note that': 'Note',
  'It is worth noting that': 'Note',
  'It should be noted that': 'Note',
  'It is worth mentioning that': 'Note',
  'It goes without saying that': '',
  'Needless to say': '',
  'As a matter of fact': 'Actually',
  'As a matter of': '',

  // Technical filler
  'Make sure that': 'Ensure',
  'Make sure': 'Ensure',
  'Ensure that': 'Ensure',
  'Make certain that': 'Ensure',
  'Make certain': 'Ensure',
  'It is required that': 'Required',
  'It is required': 'Required',
  'It is necessary': 'Required',
  'It is important': 'Important',
  'It is crucial': 'Crucial',
  'It is essential': 'Essential',

  // Code-related
  'the following code': 'code',
  'the following snippet': 'snippet',
  'the following example': 'example',
  'the following': '',
  'the above': '',
  'below is': '',
  'above is': '',

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
  'step by step': 'sequential',
  'step-by-step': 'sequential',
  'in detail': 'detailed',
  'in more detail': 'detailed',
  'explain in detail': 'explain detailed',
  'provide a': '',
  'provide': '',
  'give me': '',
  'give': '',
  'show me': 'show',
  'tell me': 'tell',
  'can you tell me': 'tell',
  'could you tell me': 'tell',

  // ==================== GERMAN PHRASES ====================

  // German polite openers
  'Hallo': '',
  'Guten Morgen': '',
  'Guten Tag': '',
  'Guten Abend': '',
  'Hallo zusammen': '',

  // German polite closers
  'Danke': '',
  'Danke schön': '',
  'Vielen Dank': '',
  'Herzlichen Dank': '',
  'Danke im Voraus': '',
  'Ich danke Ihnen': '',

  // German polite requests
  'Bitte': '',
  'Könnten Sie bitte': '',
  'Können Sie bitte': '',
  'Könntest du bitte': '',
  'Kannst du bitte': '',
  'Ich würde bitten': '',
  'Hätten Sie die Freundlichkeit': '',

  // German role-playing / instructions
  'Ich möchte, dass Sie agieren als': 'Sei',
  'Agieren Sie als': 'Sei',
  'Agieren als': 'Sei',
  'Tun Sie so als ob': 'Sei',
  'Sie sind ein': 'Sei',
  'Sie sind': 'Sei',
  'Nehmen Sie die Rolle an von': 'Sei',

  // German filler phrases (FIX #16: Use empty strings for removal, not English replacements)
  'Ich versuche herauszufinden': '',
  'Ich versuche zu': '',
  'Ich möchte': '',
  'Ich würde gerne': '',
  'Ich brauche': '',
  'Ich habe eine Frage': 'Frage',
  'Meine Frage ist': 'Frage',
  'Die Frage ist': 'Frage',
  'Ich frage mich': '',
  'Ich bin neugierig': 'Neugierig',

  // German redundant phrases (FIX #16: Use German or empty replacements)
  'Aufgrund der Tatsache, dass': 'Weil',
  'Um zu': '',
  'Zu dem Zweck': '',
  'In diesem Moment': 'Jetzt',
  'An dieser Stelle': 'Jetzt',
  'Meiner Meinung nach': 'IMO',
  'Ehrlich gesagt': '',
  'Um ehrlich zu sein': '',
  'Eigentlich': '',
  'Tatsächlich': '',

  // German technical filler (FIX #16: Use German replacements)
  'Stellen Sie sicher, dass': 'Sicherstellen',
  'Stellen Sie sicher': 'Sicherstellen',
  'Sicherstellen, dass': 'Sicherstellen',
  'Es ist wichtig': 'Wichtig',
  'Es ist notwendig': 'Notwendig',
  'Es ist erforderlich': 'Erforderlich',

  // German code-related
  'der folgende Code': 'code',
  'der folgende Snippet': 'snippet',
  'das folgende Beispiel': 'example',
  'folgendes': '',
  'oben': '',
  'unten': '',

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
  'Schritt für Schritt': 'sequenziell',
  'im Detail': 'detailiert',
  'erkläre im Detail': 'erkläre detailiert',
  'geben Sie mir': '',
  'zeigen Sie mir': 'zeig',
  'sagen Sie mir': 'sag',

  // ==================== END OF PROMPHRASES ====================
};
