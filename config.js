const CONFIG = {

  // ========================================
  // URL APPS SCRIPT - NE PAS MODIFIER LE FORMAT
  // ========================================
  appsScriptURL: "https://script.google.com/macros/s/AKfycbwqBtWkPnLfR6ew0Sh7O_3KEW4Fevh5FWe6O6hURI-3MsnjHuiTxvvCv4Rq_7doQkxt/exec",

  // ========================================
  // PAGE 1 - Page d'accueil
  // ========================================
  page1: {
    photo: "hasarddedingue.png",
    texte: "Ton texte ici pour la page 1. Pose ta question ou écris ce que tu veux.",
    boutonOui: "Oui",
    boutonNon: "Non",
  },

  // ========================================
  // CHEMIN NON → Page N1
  // ========================================
  pageN1: {
    photo: "quielleestcellela.jpeg",
    texte: "Ton texte ici pour la page Non. Explique le contexte ou pose une question.",
    choix1: "Premier choix",
    choix2: "Deuxième choix",
  },

  // Page N1a - résultat du choix 1
  pageN1a: {
    texte: "Texte de résultat pour le choix 1. Tu peux écrire ce que tu veux ici.",
  },

  // Page N1b - résultat du choix 2
  pageN1b: {
    texte: "Texte de résultat pour le choix 2. Tu peux écrire ce que tu veux ici.",
  },

  // ========================================
  // CHEMIN OUI → Page O1
  // ========================================
  pageO1: {
    photo: "chatrose.gif",
    texte: "Ton texte ici pour la page Oui. Demande à l'utilisateur de saisir quelque chose.",
    placeholder: "Écris ici...",
    boutonSuivant: "Suivant →",
  },

  // Page O2 - choix final Oui/Non
  pageO2: {
    texte: "Dernière question avant la fin. Tu es sûr(e) de ton choix ?",
    boutonOui: "Oui",
    boutonNon: "Non",
  },

  // Page finale
  pageFin: {
    texte: "C'est noté ! Merci pour ta réponse. 💕",
  },

};
