export const tamingOfShrewStory = {
  "node_1.0": {
    id: "node_1.0",
    title: "Meeting Katherine",
    text: "You are Petruchio, arriving in Padua seeking a wife with a fortune. Your friend Hortensio tells you of Katherine, the eldest daughter of wealthy Baptista. 'She's shrewd and forward,' he warns, 'her tongue will cut a man to pieces.' But her dowry is substantial, and no man has been able to court her younger sister Bianca until Kate is wed.",
    choices: [
      {
        text: "Use psychological tactics to 'tame' her as society expects",
        nextNode: "node_1.1A"
      },
      {
        text: "Seek to understand the source of her anger and frustration",
        nextNode: "node_1.1B"
      }
    ]
  },

  // Traditional Plot Path
  "node_1.1A": {
    id: "node_1.1A",
    title: "The Taming Approach",
    text: "You decide to use psychological tactics to break Katherine's spirit, believing this is what society expects of a husband. At your first meeting, you contradict everything she says, calling her 'Kate' despite her protests, and insisting she is gentle and mild when she clearly is not.",
    choices: [
      {
        text: "Deny Katherine food and sleep until she submits to your will",
        nextNode: "node_1.2A"
      },
      {
        text: "Embarrass her publicly at your wedding to force compliance",
        nextNode: "node_1.2B"
      }
    ]
  },

  "node_1.2A": {
    id: "node_1.2A",
    title: "Deprivation Tactics",
    text: "After marrying Katherine, you take her to your country house where you deny her food under the pretense that nothing is good enough for her. You also prevent her from sleeping by complaining about the bed. Katherine grows weak and begins to agree with everything you say, no matter how absurd.",
    choices: [
      {
        text: "Continue the deprivation until she is completely submissive",
        nextNode: "node_1.3A"
      },
      {
        text: "Ease up now that she's showing signs of compliance",
        nextNode: "node_1.3B"
      }
    ]
  },

  "node_1.3A": {
    id: "node_1.3A",
    title: "Complete Submission",
    text: "Katherine becomes the obedient wife you demanded, agreeing that the sun is the moon if you say so. At Bianca's wedding feast, you boast of your success to the other husbands. The moment has come to demonstrate your total victory.",
    choices: [
      {
        text: "Have Katherine deliver the infamous speech about wives submitting to husbands",
        nextNode: "node_1.4A"
      },
      {
        text: "Privately acknowledge to Katherine that you respect her intelligence",
        nextNode: "node_1.4B"
      }
    ]
  },

  "node_1.4A": {
    id: "node_1.4A",
    title: "The Submission Speech",
    text: "Katherine delivers the speech about how wives should submit to their husbands as subjects to their king, winning you the wager. You've successfully 'tamed' her public persona, though something in her eyes suggests her spirit remains her own. Society applauds your success, but you wonder what you've truly won.",
    ending: "HOLLOW VICTORY",
    endingDescription: "You've won society's approval and the wager, but at what cost? You've successfully broken Katherine's public defiance, though something essential may have been lost in the process.",
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
    title: "Secret Partnership",
    text: "In private, you and Katherine develop a conspiracy of equals. She plays the submissive wife in public, winning you the wager and social approval, while behind closed doors you treat her as an intellectual partner. Together you manipulate Padua's patriarchal society while maintaining your own private truth.",
    ending: "SECRET PARTNERSHIP",
    endingDescription: "You've created a marriage of public performance and private equality, gaming the system while preserving Katherine's true self. Whether this compromise is victory or defeat remains unclear.",
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
    title: "Measured Control",
    text: "You allow Katherine some food and rest now that she's showing compliance, but maintain your psychological dominance. She seems grateful for these small mercies, which troubles you. At Lucentio and Bianca's wedding, you're invited to demonstrate your success.",
    choices: [
      {
        text: "Participate in the obedient wife contest with confidence",
        nextNode: "node_1.4C"
      },
      {
        text: "Begin to question whether your methods were right",
        nextNode: "node_1.4D"
      }
    ]
  },

  "node_1.4C": {
    id: "node_1.4C",
    title: "Public Display",
    text: "Katherine obeys your summons while Bianca and the Widow refuse their husbands' calls. You win the wager, but Katherine's mechanical obedience lacks the fire that first attracted you. The other wives look at Katherine with pity rather than admiration.",
    ending: "PYRRHIC VICTORY",
    endingDescription: "You've achieved the obedience you sought, but the spirited woman you married has been replaced by a compliant shadow. Victory feels strangely like loss.",
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
    title: "Dawning Regret",
    text: "Watching Katherine's subdued manner, you realize you may have broken something beautiful rather than tamed something wild. You quietly tell the other husbands you won't participate in their contest, instead asking Katherine what she truly wants. Her surprise at being asked is heartbreaking.",
    ending: "LATE AWAKENING",
    endingDescription: "Your recognition of what you've done comes almost too late, but perhaps not entirely. The road back to Katherine's true self will be long, but you've taken the first step.",
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
    title: "Wedding Day Spectacle",
    text: "You arrive late to your own wedding, dressed outrageously, and behave boorishly throughout the ceremony. You refuse to stay for the feast, dragging Katherine away against her will. Your public humiliation of her is complete, and she's too shocked to resist effectively.",
    choices: [
      {
        text: "Continue the humiliation campaign at your home",
        nextNode: "node_1.3C"
      },
      {
        text: "Explain privately that this was all an act to get her away from her father",
        nextNode: "node_1.3D"
      }
    ]
  },

  "node_1.3C": {
    id: "node_1.3C",
    title: "Systematic Humiliation",
    text: "At home, you continue to humiliate Katherine under the guise of caring for her. You reject clothes and food as 'not good enough,' while secretly enjoying your power over her. Katherine's spirit begins to break under the constant psychological assault.",
    choices: [
      {
        text: "Press your advantage until she's completely broken",
        nextNode: "node_1.4E"
      },
      {
        text: "Test her compliance with increasingly absurd demands",
        nextNode: "node_1.4F"
      }
    ]
  },

  "node_1.4E": {
    id: "node_1.4E",
    title: "Broken Spirit",
    text: "Katherine's spirit is utterly crushed. She speaks only when spoken to, agrees with everything you say, and flinches when you move suddenly. You've created exactly the submissive wife society expected, but the victory feels hollow as you realize you've destroyed the very qualities that first attracted you to her.",
    ending: "DESTRUCTIVE SUCCESS",
    endingDescription: "You've achieved society's ideal of a submissive wife, but destroyed the fierce intelligence and spirit that made Katherine unique. The cost of conformity has been devastatingly high.",
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
    title: "Absurd Obedience",
    text: "You make Katherine call the sun the moon and address an old man as a young maiden. She complies with everything, no matter how ridiculous. At the wedding feast, her robotic obedience wins you the bet, but the other women look at her with horror rather than admiration.",
    ending: "GROTESQUE TRIUMPH",
    endingDescription: "Your 'taming' has succeeded so completely that it's become a cautionary tale. Katherine's absolute obedience reveals the horrifying extremes of patriarchal control.",
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
    title: "The Act Revealed",
    text: "Once alone, you explain that your outrageous behavior at the wedding was an act to remove her from her father's house quickly. 'I thought to free you from his tyranny,' you say. Katherine is intrigued but wary - she's not sure whether to trust this explanation or see it as another manipulation.",
    choices: [
      {
        text: "Propose a genuine partnership based on mutual respect",
        nextNode: "node_1.4G"
      },
      {
        text: "Suggest you both play roles publicly while being equals privately",
        nextNode: "node_1.4H"
      }
    ]
  },

  "node_1.4G": {
    id: "node_1.4G",
    title: "Honest Partnership",
    text: "You propose that you abandon all pretense and build a marriage based on honesty and mutual respect. Katherine cautiously agrees, but insists on testing your sincerity. Together, you return to Padua as equal partners, shocking society but creating something genuinely new.",
    ending: "REVOLUTIONARY MARRIAGE",
    endingDescription: "You've rejected society's expectations entirely, creating a marriage of true equals. It's a radical choice that challenges everyone around you, but it's built on genuine respect and honesty.",
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
    title: "Performance Partnership",
    text: "You and Katherine agree to perform traditional roles in public while maintaining equality in private. At the wedding feast, you both play your parts perfectly - she appears submissive, you appear dominant - but you share knowing looks that reveal your true partnership to any who watch carefully.",
    ending: "STRATEGIC ALLIANCE",
    endingDescription: "You've chosen to work within the system while subverting it from within. Your marriage becomes a sophisticated performance that protects you both while preserving your authentic relationship.",
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
    title: "Understanding Katherine",
    text: "Rather than trying to break Katherine's spirit, you seek to understand why she's so angry at the world. You observe how her father clearly favors Bianca, how suitors ignore her while praising her younger sister's 'sweetness,' and how she's been labeled a shrew for having opinions. Your different approach surprises her.",
    choices: [
      {
        text: "Stand up to her father about his preferential treatment of Bianca",
        nextNode: "node_1.2C"
      },
      {
        text: "Create a safe space for Katherine to express herself honestly",
        nextNode: "node_1.2D"
      }
    ]
  },

  "node_1.2C": {
    id: "node_1.2C",
    title: "Confronting Baptista",
    text: "You publicly challenge Baptista about his obvious favoritism toward Bianca. 'You have two daughters, yet you speak as if you have only one,' you say. The confrontation shocks everyone - Katherine looks at you with new interest, while Baptista becomes defensive. Bianca seems uncomfortable with the attention.",
    choices: [
      {
        text: "Propose a marriage based on mutual respect, not ownership",
        nextNode: "node_1.3C"
      },
      {
        text: "Suggest you and Katherine leave Padua to start fresh elsewhere",
        nextNode: "node_1.3D"
      }
    ]
  },

  "node_1.3E": {
    id: "node_1.3E",
    title: "Respectful Proposal",
    text: "You propose marriage to Katherine, but on terms of equality rather than dominance. 'I seek a partner, not a possession,' you tell her. Katherine is cautiously intrigued by this unusual approach, though she remains skeptical of your motives. Baptista is confused by your unorthodox courtship.",
    choices: [
      {
        text: "Work together to change perceptions at Bianca's wedding feast",
        nextNode: "node_1.4I"
      },
      {
        text: "Ignore society's expectations and live on your own terms",
        nextNode: "node_1.4J"
      }
    ]
  },

  "node_1.4I": {
    id: "node_1.4I",
    title: "Public Challenge",
    text: "At the wedding feast, when the wager about obedient wives is proposed, Katherine delivers a surprising speech about mutual respect and partnership in marriage. Some men scoff, but others listen thoughtfully, and a few wives stand beside their husbands with new confidence rather than submission.",
    ending: "SOCIAL REVOLUTION",
    endingDescription: "Your marriage becomes a catalyst for change in Padua. While not everyone accepts your new model, you've planted seeds of a more equitable future between men and women.",
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
    title: "Private Paradise",
    text: "You and Katherine establish your household away from Paduan judgment. When Bianca and Lucentio visit years later, they find you in a home of laughter, debate, and genuine partnership—a stark contrast to their own conventional but increasingly strained marriage where Bianca's sweetness has curdled into manipulation.",
    ending: "PRIVATE PARADISE",
    endingDescription: "By rejecting society's expectations, you've created something beautiful and authentic. Your marriage becomes a refuge of equality in a world still bound by rigid gender roles.",
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
    title: "Escape Plan",
    text: "You propose that you and Katherine escape Padua together, leaving behind the toxic family dynamics and social expectations. 'We could build something new,' you suggest, 'where your intelligence is valued, not feared.' Katherine is tempted by the possibility of freedom from her father's house and society's constraints.",
    choices: [
      {
        text: "Elope immediately and start over in a new city",
        nextNode: "node_1.4K"
      },
      {
        text: "Plan a more gradual departure while building trust between you",
        nextNode: "node_1.4L"
      }
    ]
  },

  "node_1.4K": {
    id: "node_1.4K",
    title: "Bold Escape",
    text: "You and Katherine elope in the night, leaving Padua behind forever. In a new city where no one knows your reputations, you build a life as equals. Katherine's intelligence flourishes without the constant criticism she faced at home. Your marriage becomes a true partnership of minds and hearts.",
    ending: "LIBERATION THROUGH LOVE",
    endingDescription: "Your bold choice to escape society's constraints has freed both of you to become your best selves. Love has been the key to liberation from oppressive expectations.",
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
    title: "Gradual Independence",
    text: "You spend months building trust with Katherine while gradually asserting your independence from Baptista's control. When you finally marry and move away, it's with a solid foundation of mutual respect. Your patient approach has created something deeper than passion - genuine partnership.",
    ending: "PATIENT PARTNERSHIP",
    endingDescription: "Your careful, respectful courtship has built something lasting. By taking time to truly know each other, you've created a marriage that can withstand any challenge.",
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
    title: "Safe Haven",
    text: "You create opportunities for Katherine to speak freely without judgment. In your private conversations, you discover her sharp wit, her frustration with being overlooked, and her genuine desire for respect. She begins to trust that you won't use her vulnerability against her, something she's never experienced before.",
    choices: [
      {
        text: "Encourage her to express her true self publicly, consequences be damned",
        nextNode: "node_1.3G"
      },
      {
        text: "Suggest a marriage where she can be herself with your protection",
        nextNode: "node_1.3H"
      }
    ]
  },

  "node_1.3G": {
    id: "node_1.3G",
    title: "Public Authenticity",
    text: "You encourage Katherine to stop hiding her intelligence and speak her mind publicly. With your support, she begins to express her genuine thoughts rather than just her anger. Some in Padua are shocked, but others, particularly some women, are inspired by her courage to be authentic.",
    choices: [
      {
        text: "Face the social consequences together as a united front",
        nextNode: "node_1.4M"
      },
      {
        text: "Use your influence to protect her while she finds her voice",
        nextNode: "node_1.4N"
      }
    ]
  },

  "node_1.4M": {
    id: "node_1.4M",
    title: "United Against Society",
    text: "You and Katherine face Padua's disapproval together, supporting each other against social pressure. Your united front gradually changes some minds, while inspiring others who had been living false lives. Your marriage becomes a beacon for authenticity over conformity.",
    ending: "AUTHENTIC REBELLION",
    endingDescription: "By choosing authenticity over acceptance, you've created a marriage that inspires others to question society's rigid expectations. Your rebellion is quiet but profound.",
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
    title: "Protected Voice",
    text: "Using your social position, you create spaces where Katherine can speak freely while protecting her from the worst consequences. Gradually, other women begin to seek out these conversations, and Katherine becomes an unofficial leader in expanding women's roles in Paduan society.",
    ending: "PROTECTED PROGRESS",
    endingDescription: "Your protection has allowed Katherine to become the leader she was meant to be. Together, you're changing society one conversation at a time.",
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
    title: "Protected Partnership",
    text: "You propose a marriage that would give Katherine the protection of your name and status while allowing her to be her true self. She's torn between the safety this offers and her hard-won independence. The question becomes whether she can trust you not to become like other husbands once you're wed.",
    choices: [
      {
        text: "Propose a trial period where you live as married but she keeps her independence",
        nextNode: "node_1.4O"
      },
      {
        text: "Offer to put your promises in writing, creating a marriage contract of equals",
        nextNode: "node_1.4P"
      }
    ]
  },

  "node_1.4O": {
    id: "node_1.4O",
    title: "Trial Marriage",
    text: "Your unconventional trial period proves to Katherine that you mean what you say. Living as partners but not bound by traditional marriage law, you both discover what true partnership looks like. When you finally marry officially, it's with complete trust and understanding.",
    ending: "PROVEN PARTNERSHIP",
    endingDescription: "Your patience and unconventional approach have created something unprecedented - a marriage entered into with complete knowledge and trust. You've proven that love can exist without dominance.",
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
    title: "Contract of Equals",
    text: "Your written marriage contract, guaranteeing Katherine's rights and independence, shocks Paduan society but proves your sincerity to her. While other wives are legally their husbands' property, Katherine remains a full person under law and in practice. Your marriage becomes a model others seek to emulate.",
    ending: "LEGAL REVOLUTION",
    endingDescription: "By putting equality into legal writing, you've created a new model for marriage. Your contract becomes a template for other couples seeking true partnership rather than ownership.",
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