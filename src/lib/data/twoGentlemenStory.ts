export const twoGentlemenStory = {
  "node_1.0": {
    id: "node_1.0",
    title: "Arrival in Milan",
    text: "You are Proteus, arriving in Milan after promising fidelity to Julia. Valentine, your best friend, introduces you to Silvia, the Duke's daughter. She is captivating, intelligent, and beautiful. Your heart unexpectedly skips a beat.",
    image: "proteus_arrival.jpg",
    choices: [
      {
        text: "Stay loyal to Julia, remembering your promise of fidelity",
        nextNode: "node_1.1A"
      },
      {
        text: "Pursue Silvia despite Valentine's obvious affection for her",
        nextNode: "node_1.1B"
      }
    ]
  },
  
  // Loyalty Path
  "node_1.1A": {
    id: "node_1.1A",
    title: "Resisting Temptation",
    text: "You decide to honor your promise to Julia. Valentine introduces you to Silvia, and while she is beautiful, you keep thoughts of Julia in your heart. Still, you feel conflicted about these unexpected feelings.",
    image: "proteus_thinking.jpg",
    choices: [
      {
        text: "Tell Valentine about your momentary temptation and seek his counsel",
        nextNode: "node_1.2A"
      },
      {
        text: "Write to Julia asking her to come to Milan",
        nextNode: "node_1.2B"
      }
    ]
  },
  
  "node_1.2A": {
    id: "node_1.2A",
    title: "Confiding in Valentine",
    text: "Valentine appreciates your honesty. 'True friendship is transparent,' he says, clapping you on the shoulder. He then confides that he plans to elope with Silvia against her father's wishes, as the Duke intends her for the wealthy Thurio.",
    image: "valentine_confiding.jpg",
    choices: [
      {
        text: "Offer to help Valentine with his elopement plan",
        nextNode: "node_1.3A"
      },
      {
        text: "Suggest Valentine seek the Duke's blessing instead",
        nextNode: "node_1.3B"
      }
    ]
  },
  
  "node_1.3A": {
    id: "node_1.3A",
    title: "The Elopement Plan",
    text: "You help arrange Valentine and Silvia's escape. You create a diversion at the palace while they prepare to flee. However, the Duke discovers partial information about a planned elopement but doesn't know who's involved. He's furious and demands answers.",
    image: "duke_angry.jpg",
    choices: [
      {
        text: "Take the blame yourself to protect Valentine",
        nextNode: "node_1.4A"
      },
      {
        text: "Help Valentine hide and escape the Duke's wrath",
        nextNode: "node_1.4B"
      }
    ]
  },
  
  "node_1.4A": {
    id: "node_1.4A",
    title: "Noble Sacrifice",
    text: "Your sacrifice touches the Duke. When Julia arrives in Milan (disguised as a page), she witnesses your loyalty to your friends. The Duke, impressed by your character, eventually pardons Valentine and blesses his union with Silvia. You and Julia reconcile with a stronger bond than before.",
    image: "reconciliation.jpg",
    ending: "REDEMPTIVE FRIENDSHIP",
    endingDescription: "Your loyalty to both friend and lover has created a harmonious resolution, proving that true love and friendship can coexist without betrayal.",
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
    title: "Forest Outlaws",
    text: "Valentine successfully escapes to the forest where he encounters outlaws. You and Julia (who has arrived disguised as a page) join him. Together, you help Valentine become the outlaws' leader and eventually negotiate peace with the Duke, leading to a double wedding.",
    image: "forest_outlaws.jpg",
    ending: "ADVENTUROUS RESOLUTION",
    endingDescription: "Through unexpected twists, your loyalty has created a band of allies and forged a path to happiness for all involved.",
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
  
  // Alternate branch from Node 1.2A
  "node_1.3B": {
    id: "node_1.3B",
    title: "Diplomatic Approach",
    text: "You convince Valentine to speak with the Duke before taking drastic measures. The Duke initially refuses, but when Thurio insults Valentine during the meeting, the Duke sees Thurio's true character. Meanwhile, Julia arrives in Milan looking for you.",
    image: "duke_hall.jpg",
    choices: [
      {
        text: "Reunite with Julia and together convince the Duke",
        nextNode: "node_1.4E"
      },
      {
        text: "Ask Silvia to stand up to her father",
        nextNode: "node_1.4F"
      }
    ]
  },
  
  "node_1.4E": {
    id: "node_1.4E",
    title: "United Front",
    text: "Julia's presence reminds you of your own love story. Together, you speak eloquently to the Duke about true love. Moved by your sincerity and seeing his daughter's happiness with Valentine, the Duke relents and gives his blessing to both couples.",
    image: "duke_blessing.jpg",
    ending: "DIPLOMATIC VICTORY",
    endingDescription: "Through honesty and persuasion rather than deception, you've achieved happiness for all without the need for dangerous escapes or exile.",
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
    title: "Silvia's Stand",
    text: "Encouraged by your support, Silvia confronts her father directly. 'I will marry for love or not at all,' she declares. The Duke, surprised by her determination, reluctantly agrees to meet Valentine again. Julia arrives to find you supporting your friends rather than pursuing Silvia.",
    image: "silvia_confrontation.jpg",
    ending: "EMPOWERED RESOLUTION",
    endingDescription: "By encouraging Silvia to find her voice and respecting both friendship and love, you've helped create a resolution where women's choices matter.",
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
  
  // From Node 1.1A, second choice
  "node_1.2B": {
    id: "node_1.2B",
    title: "Letter to Julia",
    text: "You write to Julia, expressing your longing and inviting her to Milan. Unknown to you, she receives your letter and decides to travel in disguise as a young man named Sebastian, to see how you behave when you think she's not present.",
    image: "julia_letter.jpg",
    choices: [
      {
        text: "Confide in 'Sebastian' about your momentary attraction to Silvia",
        nextNode: "node_1.3E"
      },
      {
        text: "Hire 'Sebastian' as your page while awaiting Julia's arrival",
        nextNode: "node_1.3F"
      }
    ]
  },
  
  "node_1.3E": {
    id: "node_1.3E",
    title: "Honest Confession",
    text: "You confide in 'Sebastian' about your brief attraction to Silvia but assure the page that your heart belongs to Julia. You speak of Julia with such tender affection that tears come to Sebastian's eyes. You notice the page's strange reaction.",
    image: "sebastian_tears.jpg",
    choices: [
      {
        text: "Realize that Sebastian might be Julia in disguise",
        nextNode: "node_1.4I"
      },
      {
        text: "Ask Sebastian to help you plan a welcome for Julia",
        nextNode: "node_1.4J"
      }
    ]
  },
  
  "node_1.4I": {
    id: "node_1.4I",
    title: "The Revelation",
    text: "You gently suggest that Sebastian reminds you of someone dear. Julia, moved by your honesty and continued devotion, reveals herself. Your relationship is strengthened by this test, and together you help Valentine and Silvia overcome the Duke's opposition.",
    image: "julia_reveal.jpg",
    ending: "HONEST REUNION",
    endingDescription: "Your transparency about temptation and ultimate loyalty has strengthened your bond with Julia, proving that honest vulnerability builds stronger relationships than perfect pretense.",
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
    title: "The Welcome Plan",
    text: "'Sebastian' helps you prepare a romantic welcome for Julia, secretly touched by your efforts. When you present your elaborate welcome to the 'arriving' Julia, she reveals herself as Sebastian. Your thoughtfulness despite temptation proves your love is true.",
    image: "romantic_welcome.jpg",
    ending: "COMEDIC REUNION",
    endingDescription: "Your earnest efforts to welcome the woman who was already at your side create a moment of revelation filled with both humor and deeper understanding.",
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
    title: "An Unusual Page",
    text: "You hire 'Sebastian' as your page, unaware of the page's true identity. Sebastian serves you loyally but seems strangely affected when you speak of Julia. Meanwhile, Valentine's planned elopement with Silvia is discovered by the Duke.",
    image: "sebastian_page.jpg",
    choices: [
      {
        text: "Help Valentine despite the risks",
        nextNode: "node_1.4K"
      },
      {
        text: "Stay neutral to avoid the Duke's wrath",
        nextNode: "node_1.4L"
      }
    ]
  },
  
  "node_1.4K": {
    id: "node_1.4K",
    title: "Friendship's Test",
    text: "You and Sebastian help Valentine escape the Duke's anger. In the chaos, Sebastian is injured protecting you. Tending to the wound, you discover Julia's identity. Together, you follow Valentine into exile, eventually reconciling all parties.",
    image: "sebastian_wounded.jpg",
    ending: "DRAMATIC REVELATION",
    endingDescription: "Through danger and sacrifice, truth emerges. Your loyalty to friendship leads to unexpected revelations and ultimately brings all conflicts to resolution.",
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
    title: "Cautious Bystander",
    text: "You remain neutral as Valentine is banished. Sebastian clearly disapproves of your inaction. When Valentine's love token to Silvia falls from your pocket, Sebastian/Julia realizes you've been holding messages for them and misreads the situation completely.",
    image: "misunderstanding.jpg",
    ending: "COMIC MISUNDERSTANDING",
    endingDescription: "Your attempt to avoid trouble creates a classic Shakespearean complication of errors, requiring elaborate explanations before all is resolved.",
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
  
  // Betrayal Path
  "node_1.1B": {
    id: "node_1.1B",
    title: "Forbidden Desire",
    text: "Captivated by Silvia's beauty, you decide to pursue her despite your promise to Julia and Valentine's love for her. The Duke's opposition to Valentine gives you an opening, but you'll have to betray both your friend and your former love.",
    image: "proteus_tempted.jpg",
    choices: [
      {
        text: "Sabotage Valentine by revealing his elopement plans to the Duke",
        nextNode: "node_1.2C"
      },
      {
        text: "Compete for Silvia's affection while keeping Valentine in the dark",
        nextNode: "node_1.2D"
      }
    ]
  },
  
  "node_1.2C": {
    id: "node_1.2C",
    title: "Betrayal",
    text: "The Duke banishes Valentine after you reveal his planned elopement. Silvia is heartbroken and confined to her chambers. Valentine leaves without knowing who betrayed him. You now have a clear path to Silvia, but guilt gnaws at you.",
    image: "valentine_banished.jpg",
    choices: [
      {
        text: "Realize your mistake and try to find Valentine",
        nextNode: "node_1.3C"
      },
      {
        text: "Press your advantage with Silvia",
        nextNode: "node_1.3D"
      }
    ]
  },
  
  "node_1.3C": {
    id: "node_1.3C",
    title: "The Search",
    text: "You journey to find Valentine, encountering Julia (disguised as a page) along the way. She joins you without revealing her identity. Together you hear rumors of a noble youth who has become leader of a forest outlaw band.",
    image: "forest_journey.jpg",
    choices: [
      {
        text: "Confess everything to Julia and seek forgiveness",
        nextNode: "node_1.4C"
      },
      {
        text: "Focus on finding Valentine first",
        nextNode: "node_1.4D"
      }
    ]
  },
  
  "node_1.4C": {
    id: "node_1.4C",
    title: "Painful Truth",
    text: "Julia reveals herself and initially rejects your apology, but your genuine remorse moves her. Together, you find Valentine with the outlaws. Your honesty and effort to make amends heal both relationships, though trust will take time to rebuild.",
    image: "julia_revealed.jpg",
    ending: "DIFFICULT REDEMPTION",
    endingDescription: "Through painful honesty and genuine remorse, you've begun to repair the damage of your betrayal, though the scars will remain as reminders.",
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
    title: "Confrontation",
    text: "You find Valentine leading a band of outlaws. When confronted, you're unable to explain your betrayal. Julia reveals herself, and both Valentine and Julia reject you. You're left alone to reflect on the consequences of betraying those who loved you.",
    image: "proteus_alone.jpg",
    ending: "ISOLATED REGRET",
    endingDescription: "Your betrayals have cost you everything - friendship, love, and honor. Some actions cannot be undone, and some bridges, once burned, cannot be rebuilt.",
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
    title: "Pursuit of Silvia",
    text: "Silvia rejects your advances, disgusted by your betrayal of Valentine. Desperate, you threaten to force your affections on her. Just then, a disguised Julia witnesses your deplorable behavior.",
    image: "silvia_rejects.jpg",
    choices: [
      {
        text: "Come to your senses and back down immediately",
        nextNode: "node_1.4G"
      },
      {
        text: "Persist in your unwanted advances",
        nextNode: "node_1.4H"
      }
    ]
  },
  
  "node_1.4G": {
    id: "node_1.4G",
    title: "Last-Minute Conscience",
    text: "Horror at your own actions stops you. Julia reveals herself, as does Valentine who has secretly returned. Though they cannot fully forgive you, your last-minute restraint prevents irreparable harm. You leave Milan alone but with a chance for redemption elsewhere.",
    image: "proteus_revelation.jpg",
    ending: "CHASTENED DEPARTURE",
    endingDescription: "You've lost love and friendship, but preserved enough honor to begin again elsewhere, wiser for your bitter lessons.",
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
    title: "The Darkest Path",
    text: "As you persist, Valentine emerges from hiding and confronts you. A fight ensues, and in the confusion, Julia reveals herself. Seeing the pain you've caused, the Duke's guards arrive to arrest you. You've lost everything through your unchecked desires.",
    image: "proteus_arrested.jpg",
    ending: "TRAGIC DOWNFALL",
    endingDescription: "Your story becomes a cautionary tale of how betrayal and obsession lead only to destruction. Unlike Shakespeare's convenient resolution, real consequences follow unconscionable actions.",
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
    title: "Secret Competition",
    text: "You begin to court Silvia secretly, using your position as Valentine's friend to spend time with her. She clearly prefers Valentine but is polite to you. Meanwhile, Julia arrives in Milan disguised as a page named Sebastian.",
    image: "secret_courting.jpg",
    choices: [
      {
        text: "Hire 'Sebastian' as your messenger to Silvia",
        nextNode: "node_1.3G"
      },
      {
        text: "Attempt to discredit Valentine to Silvia",
        nextNode: "node_1.3H"
      }
    ]
  },
  
  "node_1.3G": {
    id: "node_1.3G",
    title: "Unwitting Messenger",
    text: "You hire 'Sebastian' to deliver love letters to Silvia, unaware this page is actually Julia. Sebastian reluctantly agrees but delivers your messages with subtle undermining. Silvia shows your letters to Valentine, who confronts you about your betrayal.",
    image: "sebastian_messenger.jpg",
    choices: [
      {
        text: "Confess and beg forgiveness from both Valentine and 'Sebastian'",
        nextNode: "node_1.4M"
      },
      {
        text: "Deny everything and claim Valentine misunderstands",
        nextNode: "node_1.4N"
      }
    ]
  },
  
  "node_1.4M": {
    id: "node_1.4M",
    title: "Painful Honesty",
    text: "Your confession is met with justified anger, but also surprise at your honesty. Julia reveals herself, devastated but relieved you finally spoke truth. Valentine banishes you from his sight, but later sends word that redemption might be possible - though his trust is forever altered.",
    image: "confession_scene.jpg",
    ending: "COSTLY TRUTH",
    endingDescription: "Your belated honesty costs you dearly but preserves the possibility of eventual redemption. Some wounds heal, but always leave scars.",
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
    title: "Deepening Deception",
    text: "Your denial enrages Valentine and confuses 'Sebastian.' As you continue lying, Julia reveals herself, producing the ring you once gave her. Thoroughly exposed, you lose both friendships and Silvia's respect. The Duke, learning of the discord, banishes you from Milan.",
    image: "exposed_lies.jpg",
    ending: "COMPLETE DISGRACE",
    endingDescription: "Your web of deception collapses completely, leaving you without friends, love, or reputation. Some mistakes, compounded by lies, cannot be undone.",
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
    title: "Malicious Rumors",
    text: "You begin spreading subtle rumors that Valentine has been seen with other women. Silvia doesn't believe you, but the Duke hears the rumors and increases his opposition to Valentine. Meanwhile, a page named Sebastian has been watching you closely.",
    image: "spreading_rumors.jpg",
    choices: [
      {
        text: "Continue your scheme by forging compromising letters",
        nextNode: "node_1.4O"
      },
      {
        text: "Reconsider your actions when confronted by Sebastian",
        nextNode: "node_1.4P"
      }
    ]
  },
  
  "node_1.4O": {
    id: "node_1.4O",
    title: "Forged Letters",
    text: "Your forged letters cause a temporary rift between Valentine and Silvia. As you move to comfort Silvia, Sebastian reveals herself as Julia and exposes your scheme. All turn against you, and the Duke, disgusted by your dishonorable conduct, banishes you from the court.",
    image: "forged_letters.jpg",
    ending: "DISHONORABLE EXILE",
    endingDescription: "Your increasingly desperate schemes have revealed the depths of your character flaws. In trying to steal love through deception, you've lost all that truly mattered.",
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
    title: "Timely Intervention",
    text: "Sebastian confronts you privately, revealing herself as Julia. Seeing her pain stops you cold. You confess everything to Valentine and Silvia, who are angry but moved by your remorse. Your relationships damaged but not destroyed, you begin the long process of rebuilding trust.",
    image: "julia_confrontation.jpg",
    ending: "INTERRUPTED DESCENT",
    endingDescription: "Julia's timely intervention halts your moral decline. Though trust is broken, your willingness to face consequences opens a narrow path to eventual redemption.",
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