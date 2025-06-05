export const merchantOfVeniceStory = {
  "node_1.0": {
    id: "node_1.0",
    title: "A Fortune Sought",
    text: "You are Bassanio, a young Venetian gentleman who has squandered his inheritance. You're deeply in love with Portia, a wealthy heiress of Belmont, but lack the funds to court her properly. Your dear friend Antonio, a merchant, offers to help by borrowing money using his expected ship returns as collateral.",
    choices: [
      {
        text: "Accept Antonio's offer to borrow from Shylock with unusual terms",
        nextNode: "node_1.1A"
      },
      {
        text: "Find another way to raise funds without risking Antonio",
        nextNode: "node_1.1B"
      }
    ]
  },

  // Traditional Plot Path
  "node_1.1A": {
    id: "node_1.1A",
    title: "The Dangerous Loan",
    text: "Antonio agrees to borrow three thousand ducats from Shylock, the Jewish moneylender. Shylock, who has endured years of Antonio's public scorn and abuse, proposes an unusual bond: if the loan isn't repaid in three months, he may take a pound of Antonio's flesh. Antonio dismisses this as a jest, confident his ships will return in time.",
    choices: [
      {
        text: "Accept Shylock's terms without question, trusting in Antonio's confidence",
        nextNode: "node_1.2A"
      },
      {
        text: "Try to negotiate better terms or understand Shylock's motivations",
        nextNode: "node_1.2B"
      }
    ]
  },

  "node_1.2A": {
    id: "node_1.2A",
    title: "Fateful Agreement",
    text: "The bond is signed, and you sail to Belmont with newfound wealth. You successfully woo Portia by choosing the lead casket in her father's test. But as you celebrate your engagement, devastating news arrives: Antonio's ships are lost at sea, and he cannot repay the loan. Shylock demands his pound of flesh.",
    choices: [
      {
        text: "Offer Shylock multiple times the original loan amount",
        nextNode: "node_1.3A"
      },
      {
        text: "Seek legal help to find a loophole in the contract",
        nextNode: "node_1.3B"
      }
    ]
  },

  "node_1.3A": {
    id: "node_1.3A",
    title: "The Rejected Offer",
    text: "Shylock refuses your money, insisting on the original terms. 'I crave the law,' he says. His desire for revenge against Antonio runs deeper than mere profit. The Duke himself cannot dissuade him, and the trial proceeds. Antonio appears to accept his fate with resignation.",
    choices: [
      {
        text: "Ask Portia for help, revealing her legal knowledge",
        nextNode: "node_1.4A"
      },
      {
        text: "Plead directly with Shylock about mercy and humanity",
        nextNode: "node_1.4B"
      }
    ]
  },

  "node_1.4A": {
    id: "node_1.4A",
    title: "Portia's Deception",
    text: "Portia disguises herself as a young lawyer and uses Shylock's strict adherence to the contract against him: he may take flesh but no blood, and exactly one pound, no more or less. When Shylock cannot comply, he loses everything and is forced to convert to Christianity. Justice has become vengeance.",
    ending: "PROBLEMATIC VICTORY",
    endingDescription: "You've saved Antonio's life, but at a terrible cost. Shylock's punishment - losing his wealth, religion, and dignity - reveals the cruel underside of Venetian 'mercy.' Victory feels tainted.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.4B": {
    id: "node_1.4B",
    title: "Appeal to Humanity",
    text: "Your passionate plea about mercy moves some in the courtroom. When you speak of Shylock as a fellow human being who has suffered cruelty, he pauses. The Duke, inspired by your words, offers a compromise: Shylock keeps his religion but accepts payment. A grudging respect develops between former enemies.",
    ending: "COMPASSIONATE RESOLUTION",
    endingDescription: "Your appeal to shared humanity has prevented tragedy. While tensions remain, you've planted seeds for healing the community divide between Christians and Jews.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.3B": {
    id: "node_1.3B",
    title: "Legal Maneuvering",
    text: "You hire the best legal minds in Venice to find a way out of the contract. They discover technicalities about alien blood and Venetian law, but these feel like tricks rather than justice. Meanwhile, Shylock sharpens his knife, and Antonio writes his will.",
    choices: [
      {
        text: "Use the legal technicalities despite their unfairness",
        nextNode: "node_1.4C"
      },
      {
        text: "Abandon the legal tricks and face the situation honestly",
        nextNode: "node_1.4D"
      }
    ]
  },

  "node_1.4C": {
    id: "node_1.4C",
    title: "Hollow Technicalities",
    text: "The court uses legal technicalities to trap Shylock, stripping him of his wealth and faith. You've saved Antonio, but the victory feels hollow. Venice's justice appears to be nothing more than Christian privilege protecting its own while destroying outsiders.",
    ending: "PYRRHIC LEGALISM",
    endingDescription: "Legal technicalities have saved your friend but destroyed justice itself. You've learned that sometimes winning in court means losing one's humanity.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.4D": {
    id: "node_1.4D",
    title: "Honest Reckoning",
    text: "You abandon legal tricks and face Shylock honestly. 'We wronged you,' you admit publicly. 'Antonio's contempt was cruel, and my carelessness put him at risk.' Your honesty shocks the court but moves Shylock to reconsider. Antonio, humbled, offers an apology he should have given years ago.",
    ending: "PAINFUL HONESTY",
    endingDescription: "Your willingness to face uncomfortable truths has opened a path to genuine resolution. Healing will take time, but it has begun with acknowledgment of past wrongs.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.2B": {
    id: "node_1.2B",
    title: "Understanding Shylock",
    text: "You take time to understand why Shylock proposes such unusual terms. Speaking with him privately, you learn of years of Antonio's public humiliation, spitting, and abuse. 'He hath disgraced me, and hindered me half a million,' Shylock explains. His 'merry bond' masks deep pain and desire for dignity.",
    choices: [
      {
        text: "Convince Antonio to apologize and seek a standard interest loan",
        nextNode: "node_1.3C"
      },
      {
        text: "Propose a three-way meeting to address the underlying tensions",
        nextNode: "node_1.3D"
      }
    ]
  },

  "node_1.3C": {
    id: "node_1.3C",
    title: "Antonio's Apology",
    text: "You convince Antonio to swallow his pride and apologize to Shylock for years of mistreatment. The apology is grudging but genuine, and Shylock is visibly moved - perhaps the first time a Christian has acknowledged his humanity. He agrees to a standard loan with reasonable interest.",
    choices: [
      {
        text: "Use this reconciliation to build bridges in Venice",
        nextNode: "node_1.4E"
      },
      {
        text: "Focus on your courtship of Portia with a clear conscience",
        nextNode: "node_1.4F"
      }
    ]
  },

  "node_1.4E": {
    id: "node_1.4E",
    title: "Building Bridges",
    text: "The reconciliation between Antonio and Shylock becomes a model for others. You facilitate meetings between Christian merchants and Jewish moneylenders, slowly healing decades of mistrust. Venice becomes more tolerant, and your marriage to Portia includes guests from both communities.",
    ending: "VENETIAN HEALING",
    endingDescription: "Your efforts have begun to heal Venice's religious divide. While prejudice remains, you've proven that understanding and respect can overcome ancient hatred.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.4F": {
    id: "node_1.4F",
    title: "Clear Conscience",
    text: "With the loan resolved honorably, you court Portia with a clear conscience. When you choose the lead casket correctly, you can honestly say you chose for love, not just for wealth. Your marriage begins without the shadow of Antonio's near-death or Shylock's destruction.",
    ending: "UNTAINTED LOVE",
    endingDescription: "By handling the financial crisis with honor, you've preserved both friendship and love. Your marriage to Portia is built on genuine affection rather than desperate need.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.3D": {
    id: "node_1.3D",
    title: "Three-Way Mediation",
    text: "You arrange a meeting between yourself, Antonio, and Shylock to address the underlying tensions before finalizing any loan. The conversation is difficult, with years of prejudice and hurt on both sides, but it's the first time they've spoken as equals rather than as oppressor and victim.",
    choices: [
      {
        text: "Propose a business partnership instead of a simple loan",
        nextNode: "node_1.4G"
      },
      {
        text: "Suggest ongoing dialogue to address Venice's religious tensions",
        nextNode: "node_1.4H"
      }
    ]
  },

  "node_1.4G": {
    id: "node_1.4G",
    title: "Unexpected Partnership",
    text: "Your radical proposal for a three-way business partnership shocks both men, but Shylock's financial acumen and Antonio's trade connections prove complementary. When you win Portia through the casket test, you return to find your partners have created Venice's most successful trading company.",
    ending: "BUSINESS BROTHERHOOD",
    endingDescription: "By transforming enemies into partners, you've created something unprecedented in Venice. Profit has proven more powerful than prejudice in building bridges between communities.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.4H": {
    id: "node_1.4H",
    title: "Dialogue for Change",
    text: "Your suggestion for ongoing dialogue between Christians and Jews in Venice bears unexpected fruit. Antonio and Shylock become unlikely advocates for religious tolerance, and their public conversations begin to change minds throughout the city. Venice slowly becomes more inclusive.",
    ending: "GRADUAL ENLIGHTENMENT",
    endingDescription: "Your mediation has planted seeds of tolerance that will grow for generations. Venice is beginning to learn that diversity strengthens rather than threatens the community.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  // Alternative Path
  "node_1.1B": {
    id: "node_1.1B",
    title: "The Honest Path",
    text: "You decide not to risk Antonio's life with Shylock's dangerous loan. Instead, you must find another way to court Portia, even if it means approaching her without the wealth that other suitors possess. This choice requires courage but preserves your integrity and Antonio's safety.",
    choices: [
      {
        text: "Work honestly to earn money before pursuing Portia",
        nextNode: "node_1.2C"
      },
      {
        text: "Approach Portia honestly about your financial situation",
        nextNode: "node_1.2D"
      }
    ]
  },

  "node_1.2C": {
    id: "node_1.2C",
    title: "Honest Labor",
    text: "You take a position managing trade for a merchant house, showing unexpected talent for business. Your integrity and intelligence quickly earn respect in Venice's commercial circles. News of your honorable conduct reaches Portia, who becomes curious about the young man choosing virtue over easy wealth.",
    choices: [
      {
        text: "Continue building your fortune patiently before approaching Portia",
        nextNode: "node_1.3E"
      },
      {
        text: "Visit Portia now that you have modest but honest means",
        nextNode: "node_1.3F"
      }
    ]
  },

  "node_1.3E": {
    id: "node_1.3E",
    title: "Patient Success",
    text: "Your business acumen grows your wealth steadily. When you finally visit Portia, you arrive as a successful merchant in your own right, not dependent on borrowed money or others' fortune. Your self-made success impresses Portia more than inherited wealth ever could.",
    choices: [
      {
        text: "Participate in the casket challenge as in the original play",
        nextNode: "node_1.4I"
      },
      {
        text: "Propose a courtship based on mutual respect rather than her father's test",
        nextNode: "node_1.4J"
      }
    ]
  },

  "node_1.4I": {
    id: "node_1.4I",
    title: "Earned Victory",
    text: "You choose the lead casket, winning Portia's hand through the test her father designed. But unlike other suitors, your success comes from wisdom gained during your time working, not from borrowed wealth or desperate gambling. Portia respects that you came to her as an equal, not a fortune-hunter.",
    ending: "EARNED HAPPINESS",
    endingDescription: "Your patient approach has created a marriage of equals. By earning your place rather than borrowing it, you've built a foundation of mutual respect that will last a lifetime.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.4J": {
    id: "node_1.4J",
    title: "Revolutionary Courtship",
    text: "Portia appreciates your honesty about rejecting the casket challenge. 'Why should my father's riddle determine my heart?' she asks. Together you create a new path forward based on transparency and mutual choice rather than patriarchal games or societal expectations about wealth and marriage.",
    ending: "MODERN PARTNERSHIP",
    endingDescription: "By rejecting traditional courtship rules, you've created something revolutionary - a marriage based on free choice and equality. Your love story challenges conventional ideas about wealth, inheritance, and women's agency.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.3F": {
    id: "node_1.3F",
    title: "Modest Means",
    text: "You visit Portia with modest but honestly earned wealth. Your straightforward approach refreshes her after dealing with wealthy suitors who see only her inheritance. She's intrigued by someone who chose the harder path of earning rather than borrowing his way to her door.",
    choices: [
      {
        text: "Admit you don't have the wealth of other suitors but offer genuine affection",
        nextNode: "node_1.4K"
      },
      {
        text: "Propose that you both ignore her father's casket test as antiquated",
        nextNode: "node_1.4L"
      }
    ]
  },

  "node_1.4K": {
    id: "node_1.4K",
    title: "Genuine Affection",
    text: "Your honest admission that you cannot match other suitors' wealth but can offer genuine love moves Portia deeply. She reveals that she's tired of men who see her as a prize to be won rather than a person to be loved. Your honesty wins what gold could not purchase.",
    ending: "LOVE OVER WEALTH",
    endingDescription: "Your choice to value love over money has been rewarded with both. Portia chooses you not despite your modest means, but because of the character those choices revealed.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.4L": {
    id: "node_1.4L",
    title: "Challenging Tradition",
    text: "Your proposal to ignore her father's casket test as an outdated patriarchal relic delights Portia, who has long resented having her choice dictated by a dead man's riddle. Together, you challenge not just this tradition but others, creating a marriage based on modern ideals of equality.",
    ending: "TRADITION BROKEN",
    endingDescription: "By questioning inherited traditions, you've freed both yourself and Portia from the past's constraints. Your marriage becomes a model for how love can triumph over convention.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.2D": {
    id: "node_1.2D",
    title: "Radical Honesty",
    text: "You decide to approach Portia directly and honestly about your financial situation. Arriving at Belmont without the wealth of other suitors, you request an audience not as a participant in her father's casket test, but as someone who wishes to know her as a person rather than pursue her as a prize.",
    choices: [
      {
        text: "Explain why you refused to risk your friend's life for wealth",
        nextNode: "node_1.3G"
      },
      {
        text: "Ask if she would consider courtship based on character rather than wealth",
        nextNode: "node_1.3H"
      }
    ]
  },

  "node_1.3G": {
    id: "node_1.3G",
    title: "Moral Courage",
    text: "You explain to Portia how you refused to let Antonio risk his life for your romantic ambitions. Your willingness to sacrifice your own desires to protect a friend reveals a character that impresses her far more than the gold and jewels other suitors have offered.",
    choices: [
      {
        text: "Suggest that true partnership requires moral as well as financial compatibility",
        nextNode: "node_1.4M"
      },
      {
        text: "Admit that you may have lost your chance but couldn't live with the alternative",
        nextNode: "node_1.4N"
      }
    ]
  },

  "node_1.4M": {
    id: "node_1.4M",
    title: "Moral Partnership",
    text: "Your proposal that marriage should be based on shared values rather than financial convenience resonates deeply with Portia. She reveals her own struggles with her father's mercenary approach to her marriage and her desire for a partner who understands that true wealth lies in character.",
    ending: "ETHICAL UNION",
    endingDescription: "Your commitment to ethics over expedience has won you both love and respect. Your marriage to Portia will be built on shared values that no financial reverse can shake.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.4N": {
    id: "node_1.4N",
    title: "Noble Sacrifice",
    text: "Your admission that you may have sacrificed your romantic dreams for friendship moves Portia to tears. She declares that anyone capable of such loyalty deserves love in return, and that her father's casket test was designed to find exactly such character, not mere cleverness.",
    ending: "FRIENDSHIP REWARDED",
    endingDescription: "Your loyalty to Antonio has been rewarded with Portia's love. She recognizes that a man who values friendship so highly will be a faithful and devoted husband.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.3H": {
    id: "node_1.3H",
    title: "Character Over Wealth",
    text: "Your question about whether character might matter more than wealth in courtship intrigues Portia. She's grown weary of suitors who see her only as a business transaction and is curious about someone willing to be judged on merit rather than money.",
    choices: [
      {
        text: "Propose a trial period where you both get to know each other as people",
        nextNode: "node_1.4O"
      },
      {
        text: "Suggest that you work together on charitable projects to test compatibility",
        nextNode: "node_1.4P"
      }
    ]
  },

  "node_1.4O": {
    id: "node_1.4O",
    title: "Trial Partnership",
    text: "Your unconventional proposal for a trial courtship delights Portia. Spending time together without the pressure of her father's test or the competition with other suitors, you both discover genuine compatibility. When you do marry, it's with full knowledge of each other's character.",
    ending: "TESTED COMPATIBILITY",
    endingDescription: "Your patient, unconventional approach has created a marriage based on genuine knowledge and compatibility. You've proven that the best partnerships develop naturally rather than through artificial tests.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  },

  "node_1.4P": {
    id: "node_1.4P",
    title: "Charitable Partnership",
    text: "Working together on charitable projects reveals your shared values and complementary strengths. Portia discovers your practical wisdom while you appreciate her generosity and intelligence. Your courtship becomes a collaboration that naturally develops into love and partnership.",
    ending: "SERVICE THROUGH LOVE",
    endingDescription: "Your shared commitment to helping others has revealed your compatibility and created a marriage based on common purpose. Together, you'll continue to serve your community while building your own happiness.",
    choices: [
      {
        text: "Play again",
        nextNode: "node_1.0"
      },
      {
        text: "Try another play",
        nextNode: "main_menu"
      }
    ]
  }
};