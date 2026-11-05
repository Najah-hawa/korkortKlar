import type { Question } from '@/types/question'

// Källa: Transportstyrelsen/Trafikverket – Regler för olika fordonsslag > Släpfordon
export const fordonskannedomQuestions: Question[] = [

   // ===== Flyttade från vägmärkena (varningsmärken) =====
  {
    id: 'q_a3',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Hur bör du anpassa din körning när du ser detta märke i en lång backe?',
      en: 'How should you adjust your driving when seeing this sign on a long hill?',
      ar: 'كيف يجب أن تعدل قيادتك عند رؤية هذه الشاخصة في منحدر طويل؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a03.-varning-for-nedforslutning/a3-1.png',
    options: [
      { id: 'A', text: { sv: 'Frikoppla och rulla för att spara bränsle.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Öka hastigheten för att snabbt passera backen.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Använda motorbroms (lägre växel) för att undvika överhettade bromsar.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Växla till högsta möjliga växel.', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Märket varnar för brant nedförslutning. Genom att använda motorbroms undviker du att bromsarna överhettas och tappar verkan.',
      en: '',
      ar: ''
    },
    signRefId: 'a3'
  },
  {
    id: 'q_a24',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilka fordon drabbas oftast hårdast av den fara som detta märke varnar för?',
      en: 'Which vehicles are usually most affected by the hazard warned of by this sign?',
      ar: 'ما هي المركبات الأكثر تأثراً بالخطر الذي تحذر منه هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a24.-varning-for-sidvind/a24-1.png',
    options: [
      { id: 'A', text: { sv: 'Elbilar med låg vikt.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Höga fordon, husvagnar och släpvagnar (på grund av sidvind).', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Låga sportbilar med breda däck.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Fordon utrustade med dubbdäck.', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Märket varnar för stark sidvind. Vindbyar kan vara kraftiga, särskilt på öppna broar och fält, vilket påverkar lätta och höga fordon.',
      en: '',
      ar: ''
    },
    signRefId: 'a24'
  },


   // =====  fordon_slap =====
  {
    id: 'fordon_slap_1',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Hur definieras ett lätt släpfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Totalvikt på högst 500 kg i alla situationer', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Totalvikt på över 750 kg men aldrig över 1 500 kg', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Totalvikt på högst 750 kg, eller högre om dragfordonets och släpfordonets sammanlagda totalvikt inte överstiger 3 500 kg', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Totalvikt på högst 3 500 kg oavsett dragfordonets vikt', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Ett lätt släpfordon har en totalvikt på högst 750 kg, eller högre under förutsättning att dragfordonets och släpfordonets sammanlagda totalvikt inte överstiger 3 500 kg.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_2',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Ett släpfordon har en totalvikt på 1 200 kg och dragfordonet har en totalvikt på 2 000 kg. Vilken typ av släpfordon är det?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ett lätt släpfordon, eftersom den sammanlagda totalvikten (3 200 kg) inte överstiger 3 500 kg', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ett tungt släpfordon, eftersom släpfordonet väger över 750 kg', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ett tungt släpfordon, eftersom dragfordonet väger över 1 500 kg', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det går inte att avgöra utan att veta hastigheten', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Släpfordonet väger över 750 kg, men den sammanlagda totalvikten är 3 200 kg och överstiger alltså inte 3 500 kg. Då räknas det som ett lätt släpfordon.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_3',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Ett släpfordon har en totalvikt på 1 500 kg och dragfordonet har en totalvikt på 2 200 kg. Vilken typ av släpfordon är det?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ett lätt släpfordon, eftersom släpfordonet väger under 3 500 kg', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ett lätt släpfordon, eftersom endast dragfordonets vikt avgör', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Det beror på om släpfordonet är bromsat eller obromsat', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ett tungt släpfordon, eftersom det väger över 750 kg och den sammanlagda totalvikten (3 700 kg) överstiger 3 500 kg', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Ett tungt släpfordon väger över 750 kg och överstiger tillsammans med dragfordonets vikt 3 500 kg. Här är den sammanlagda vikten 3 700 kg.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_4',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilket påstående stämmer för ett tungt släpfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Det väger över 750 kg, oavsett hur tungt dragfordonet är', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Det väger över 750 kg och överstiger tillsammans med dragfordonets vikt 3 500 kg', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Det väger mer än dragfordonet', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det är alltid ett efterfordon', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Ett tungt släpfordon är ett släpfordon som väger över 750 kg och som tillsammans med dragfordonets vikt överstiger 3 500 kg.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_5',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad är ett släpfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ett fordon som är byggt för att kopplas till ett annat motordrivet fordon och är avsett för person- eller godstransport', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ett fordon som är byggt för att köras utan dragfordon', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ett fordon som dras efter bilen och inte har någon last', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ett motordrivet fordon med en totalvikt på högst 750 kg', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Ett släpfordon är byggt för att kopplas till ett annat motordrivet fordon och är avsett för person- eller godstransport.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_6',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Till vilket av följande fordon kan ett släpfordon enligt definitionen inte kopplas?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Personbil', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Lastbil', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Motorcykel', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Moped klass II', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Ett släpfordon är byggt för att kopplas till ett annat motordrivet fordon, men inte till moped klass II.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_7',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Hur delas släpfordon in?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Personsläp, godssläp och terrängsläp', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Släpvagnar, husvagnar och efterfordon', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Släpvagnar, släpslädar och terrängsläp', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Bromsade släp, obromsade släp och terrängsläp', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Släpfordon delas in i släpvagnar, släpslädar och terrängsläp, samt i lätta och tunga släpfordon.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_8',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad är en släpvagn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ett släpfordon på medar, byggt för att dras av ett motorfordon', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ett släpfordon på hjul eller band, tillverkat för att dras av ett motorfordon, en traktor eller ett motorredskap', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ett släpfordon som bara kan dras av ett terrängmotorfordon', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ett fordon som dras efter bilen och inte har någon last', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'En släpvagn är ett släpfordon på hjul eller band, tillverkat för att dras av ett motorfordon, en traktor eller ett motorredskap.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_9',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad är en släpsläde?',
      en: '',
      ar: ''
    }, 
    image:'/images/questions/manovrering/fordons_slap_9.jfif',
    // BILD REKOMMENDERAS: En släde som står på medar (som breda skidor eller skenor) i stället för hjul,
    // gärna kopplad bakom en traktor eller ett motorfordon i snö. Tydligt att den saknar hjul.
    options: [
      { id: 'A', text: { sv: 'Ett släpfordon på medar, byggt för att dras av ett motorfordon, en traktor eller ett motorredskap', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ett släpfordon på hjul eller band', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ett släpfordon som bara dras av en terrängskoter', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ett efterfordon utan last', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'En släpsläde är ett släpfordon på medar, byggt för att dras av ett motorfordon, en traktor eller ett motorredskap.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_10',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilket fordon är ett terrängsläp byggt för att dras av?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordons_slap_10.jfif',
    // BILD REKOMMENDERAS: En terrängskoter (eller terrängvagn) som drar ett litet släp över terräng/snö.
    // Visa att släpet är kopplat till terrängfordonet, inte till en vanlig bil.
    options: [
      { id: 'A', text: { sv: 'En personbil', en: '', ar: '' } },
      { id: 'B', text: { sv: 'En lastbil', en: '', ar: '' } },
      { id: 'C', text: { sv: 'En traktor', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ett terrängmotorfordon, till exempel en terrängvagn eller terrängskoter', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Ett terrängsläp är ett släpfordon som är byggt för att dras av ett terrängmotorfordon (terrängvagn eller terrängskoter).',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_11',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilket av följande är ett exempel på ett efterfordon?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordons_slap_11.jfif',
    // BILD REKOMMENDERAS: En skylift (eller tryckluftskompressor) på hjul, kopplad bakom en personbil.
    // Den ska se ut som något som dras efter bilen utan att ha en lastyta.
    options: [
      { id: 'A', text: { sv: 'En husvagn', en: '', ar: '' } },
      { id: 'B', text: { sv: 'En släpvagn för last', en: '', ar: '' } },
      { id: 'C', text: { sv: 'En skylift som dras efter bilen', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ett terrängsläp', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Ett efterfordon kan till exempel vara en skylift, en kompressor eller ett annat fordon som dras efter bilen och som inte har last.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_12',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad skiljer ett efterfordon från ett släpfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ett efterfordon är alltid tyngre än 750 kg', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ett efterfordon är inte ett släpfordon. Det dras efter bilen och har ingen last', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ett efterfordon är avsett för persontransport', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det finns ingen skillnad, båda är släpfordon', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Ett efterfordon är något annat än ett släpfordon. Det dras efter bilen och har ingen last, till exempel en skylift eller en kompressor.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_13',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilka släpfordon måste vara registrerade och ha en registreringsskylt?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Alla släpfordon', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Endast släpfordon som väger över 750 kg', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Endast tunga släpfordon', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Endast släpfordon som används yrkesmässigt', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Alla släpfordon måste vara registrerade och ha en registreringsskylt.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_14',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du har ett äldre släpfordon som du bara tänker köra i låg hastighet, till exempel 30 km/tim. Måste det ha en registreringsskylt?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Nej, eftersom hastigheten är så låg', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Nej, äldre släpfordon är undantagna', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, det gäller även äldre släpfordon och även vid låg hastighet', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, men bara om det väger över 750 kg', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Alla släpfordon måste vara registrerade och ha en registreringsskylt. Det gäller även äldre släpfordon, även om du bara tänker köra i låg hastighet.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_15',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilka släpfordon behöver till exempel kontrollbesiktas?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Alla släpfordon utan undantag', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Endast släpfordon som väger över 3 500 kg', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Endast husvagnar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Till exempel släpvagnar och registrerade terrängsläp som används i yrkesmässig trafik för persontransport', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Vissa släpfordon behöver kontrollbesiktas, till exempel släpvagnar och registrerade terrängsläp som används i yrkesmässig trafik för persontransport.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_16',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Måste alla släpfordon kontrollbesiktas?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, alla släpfordon', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Nej, bara vissa släpfordon behöver kontrollbesiktas', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Nej, inga släpfordon behöver kontrollbesiktas', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, men bara om de väger över 750 kg', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Det är bara vissa släpfordon som behöver kontrollbesiktas, till exempel släpvagnar och terrängsläp som används yrkesmässigt för persontransport.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_17',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Behöver ett släpfordon en trafikförsäkring?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Nej, ett släpfordon behöver ingen trafikförsäkring', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, alla släpfordon behöver trafikförsäkring', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, men bara om det väger över 750 kg', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, men bara om det används yrkesmässigt', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Ett släpfordon behöver ingen trafikförsäkring.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_18',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad avgör om du behöver betala fordonsskatt för ett släpfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Alla släpfordon är alltid skattepliktiga', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Inga släpfordon är skattepliktiga', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Endast släpfordonets färg och ålder', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det beror på hur släpfordonet används', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Om du behöver betala fordonsskatt för släpfordonet beror det på hur det används.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_19',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Under vilken period kan en släpvagn behöva vinterdäck om det råder vinterväglag?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: '1 november–30 april', en: '', ar: '' } },
      { id: 'B', text: { sv: '15 oktober–15 april', en: '', ar: '' } },
      { id: 'C', text: { sv: '1 december–31 mars', en: '', ar: '' } },
      { id: 'D', text: { sv: '1 januari–28 februari', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'En släpvagn kan behöva vinterdäck under perioden 1 december–31 mars om det råder vinterväglag.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_20',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Måste en släpvagn alltid ha vinterdäck varje dag mellan 1 december och 31 mars?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, varje dag under hela perioden', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Nej, det kan krävas om det råder vinterväglag', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Nej, släpvagnar behöver aldrig vinterdäck', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, men bara om släpvagnen väger över 750 kg', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'En släpvagn kan behöva vinterdäck under perioden 1 december–31 mars om det råder vinterväglag.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_21',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken körkortsbehörighet krävs för att köra ett tungt släpfordon med personbil?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'B', en: '', ar: '' } },
      { id: 'B', text: { sv: 'C1E', en: '', ar: '' } },
      { id: 'C', text: { sv: 'D1E', en: '', ar: '' } },
      { id: 'D', text: { sv: 'BE', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Om du kör ett tungt släpfordon med personbil krävs BE-behörighet.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_22',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken körkortsbehörighet krävs för att köra ett tungt släpfordon med tung lastbil?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'C1E eller CE', en: '', ar: '' } },
      { id: 'B', text: { sv: 'BE', en: '', ar: '' } },
      { id: 'C', text: { sv: 'D1E eller DE', en: '', ar: '' } },
      { id: 'D', text: { sv: 'B', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Om du kör ett tungt släpfordon med tung lastbil krävs C1E- eller CE-behörighet.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_23',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken körkortsbehörighet krävs för att köra ett tungt släpfordon med buss?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'BE', en: '', ar: '' } },
      { id: 'B', text: { sv: 'C1E eller CE', en: '', ar: '' } },
      { id: 'C', text: { sv: 'D1E eller DE', en: '', ar: '' } },
      { id: 'D', text: { sv: 'B', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Om du kör ett tungt släpfordon med buss krävs D1E- eller DE-behörighet.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_24',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du har byggt en egen släpvagn. Vad behöver du för den?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Inget, egenbyggda släpvagnar är undantagna', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ett chassinummer (identifieringsnummer) som du ansöker om', en: '', ar: '' } },
      { id: 'C', text: { sv: 'En trafikförsäkring i stället för registrering', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ett särskilt körkort för egenbyggda fordon', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Du behöver ett chassinummer (identifieringsnummer) till din egenbyggda släpvagn. Du ansöker om det med blanketten ansökan om identifieringsnummer.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_25',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken är huvudregeln för högsta hastighet med en obromsad släp- eller husvagn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: '40 km/tim', en: '', ar: '' } },
      { id: 'B', text: { sv: '80 km/tim', en: '', ar: '' } },
      { id: 'C', text: { sv: '30 km/tim', en: '', ar: '' } },
      { id: 'D', text: { sv: '100 km/tim', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Du får köra högst 40 km/tim med en obromsad släp- eller husvagn. Under vissa omständigheter kan 80 km/tim vara tillåtet.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_26',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken är den högsta hastigheten med en bromsad släp- eller husvagn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: '40 km/tim', en: '', ar: '' } },
      { id: 'B', text: { sv: '60 km/tim', en: '', ar: '' } },
      { id: 'C', text: { sv: '80 km/tim', en: '', ar: '' } },
      { id: 'D', text: { sv: '100 km/tim', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Du får köra högst 80 km/tim med en bromsad släp- eller husvagn.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_27',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Kan du få köra i 80 km/tim med en obromsad släp- eller husvagn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Nej, aldrig', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, alltid', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, men bara på motorväg', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, under vissa omständigheter', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Huvudregeln är högst 40 km/tim för en obromsad släp- eller husvagn, men under vissa omständigheter kan du få köra i 80 km/tim.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_slap_28',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilka fordon kan dra en släpvagn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Endast personbilar', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ett motorfordon, en traktor eller ett motorredskap', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Endast terrängmotorfordon', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Endast lastbilar', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'En släpvagn är tillverkad för att dras av ett motorfordon, en traktor eller ett motorredskap.',
      en: '',
      ar: ''
    }
  },
 
  // ===== Köra personbil eller lätt lastbil med släp- eller husvagn =====
  {
    id: 'fordon_kora_slap_1',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad behöver du säkerställa innan du ger dig ut på vägen med en släpvagn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Att släpvagnen är nytvättad och att bilen har fullt bränsle', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att körkortsbehörigheten är tillräcklig, att vikterna är inom tillåtna gränser och att lasten är korrekt säkrad', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att släpvagnen är lastad med minst 50 kg', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att du kör med varningsblinkers påslagna', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Innan du kör med släpvagn ska du säkerställa att din körkortsbehörighet är tillräcklig, att bilens och släpvagnens vikt är inom de tillåtna gränserna och att lasten är korrekt säkrad.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_2',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad avgör hur tung släpvagn du får dra?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Endast bilens tekniska begränsningar', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Endast din körkortsbehörighet', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Endast släpvagnens ålder', en: '', ar: '' } },
      { id: 'D', text: { sv: 'En kombination av bilens tillåtna vikter och reglerna för din körkortsbehörighet', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Hur tung släpvagn du får dra avgörs både av bilens tekniska begränsningar och av vilken körkortsbehörighet du har.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_3',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad kan du använda släpvagnskalkylatorn till?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Att ta reda på om du får dra en viss släpvagn med din bil och ditt körkort', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att beräkna vad släpvagnen kostar att försäkra', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att boka tid för besiktning', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att beräkna hur mycket bensin du förbrukar', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Släpvagnskalkylatorn hjälper dig att ta reda på om du får dra en viss släpvagn med din bil och ditt körkort. Du kan också använda den för att ta reda på hur fort och hur tung släpvagn du får dra.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_4',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Var kan du läsa hur tung släpvagn eller husvagn din bil får dra?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'På skylten på släpvagnen', en: '', ar: '' } },
      { id: 'B', text: { sv: 'I körkortet', en: '', ar: '' } },
      { id: 'C', text: { sv: 'På bilens registreringsbevis', en: '', ar: '' } },
      { id: 'D', text: { sv: 'I försäkringsbrevet', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Hur tung släpvagn eller husvagn din bil får dra kan du läsa på registreringsbeviset.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_5',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad gäller för en kulhandske som är försedd med en lås- eller spärrtillsats?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordons_kora_slap_5.jfif',
    // BILD REKOMMENDERAS: Närbild på en kulhandske (kopplingshuvud) med en synlig lås- eller spärrtillsats
    // (spärr/stift) som sitter över kulan. Gärna med en pil som visar spärren i låst läge.
    options: [
      { id: 'A', text: { sv: 'Tillsatsen är bara en extra dekoration', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Tillsatsen ska se till att kulhandsken förblir i ett låst läge', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Tillsatsen ska tas bort före körning', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Tillsatsen används bara när släpvagnen är olastad', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Den här typen av kulhandske ska vara försedd med en lås- eller spärrtillsats som ser till att den förblir i ett låst läge.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_6',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Hur ska handtaget stå på en kulhandske med handtag när du kopplar samman bilen och släpvagnen?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordons_kora_slap_6.jfif',
    // BILD REKOMMENDERAS: Kulhandske med handtag i uppfällt läge, precis innan den sänks ned över kulan på dragkroken.
    options: [
      { id: 'A', text: { sv: 'I uppfällt läge', en: '', ar: '' } },
      { id: 'B', text: { sv: 'I nedfällt läge', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Det spelar ingen roll hur handtaget står', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Handtaget ska hållas nedtryckt med handen under hela kopplingen', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'På den här kulhandsken ska handtaget vara i uppfällt läge när du gör sammankopplingen.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_7',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad händer med handtaget på en kulhandske med handtag när kulan har hamnat rätt i kulhandsken?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Du måste själv låsa handtaget med ett hänglås', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Handtaget måste fortsätta hållas i uppfällt läge', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Handtaget ska sågas av', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Handtaget går automatiskt till ett låst läge', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'När kulan hamnat rätt i kulhandsken går handtaget automatiskt till ett låst läge.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_8',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad ska du kontrollera som slutlig kontroll när du har kopplat släpvagnen?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordon_kora_slap_8.jpg',
    // BILD REKOMMENDERAS: Två närbilder bredvid varandra av dragkrok och kulhandske.
    // Vänster: kulan syns utanför handsken (FEL). Höger: kulan har gått in helt och syns inte (RÄTT).
    options: [
      { id: 'A', text: { sv: 'Att kulan syns tydligt utanför kulhandsken', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att släpvagnens däck är nya', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att kulan har gått in i handsken, så att kulan inte syns', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att kulhandsken är varm', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Som slutlig kontroll ska du kontrollera att kulan har gått in i handsken. Kulan får inte synas.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_9',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du får köra högst 80 km/tim med vilken typ av släp- eller husvagn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Endast med tom husvagn', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Med bromsad släp- eller husvagn', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Endast med släpvagn som väger under 300 kg', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ingen släp- eller husvagn får köras i 80 km/tim', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Du får köra i högst 80 km/tim med bromsad släp- eller husvagn.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_10',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du drar en obromsad släpvagn med en totalvikt på 600 kg. Bilens tjänstevikt är 1 400 kg. Hur fort får du köra som mest?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: '30 km/tim', en: '', ar: '' } },
      { id: 'B', text: { sv: '40 km/tim', en: '', ar: '' } },
      { id: 'C', text: { sv: '60 km/tim', en: '', ar: '' } },
      { id: 'D', text: { sv: '80 km/tim, eftersom släpvagnens totalvikt (600 kg) inte överstiger bilens halva tjänstevikt (700 kg)', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'En obromsad släpvagn med totalvikt på högst 750 kg får köras i 80 km/tim om totalvikten inte överstiger bilens halva tjänstevikt. Här är halva tjänstevikten 700 kg och släpvagnens totalvikt 600 kg.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_11',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du drar en lastad obromsad släpvagn med en totalvikt på 700 kg. Bilens tjänstevikt är 1 200 kg. Hur fort får du köra som mest?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: '40 km/tim, eftersom släpvagnens totalvikt (700 kg) överstiger bilens halva tjänstevikt (600 kg)', en: '', ar: '' } },
      { id: 'B', text: { sv: '80 km/tim, eftersom släpvagnen väger under 750 kg', en: '', ar: '' } },
      { id: 'C', text: { sv: '100 km/tim', en: '', ar: '' } },
      { id: 'D', text: { sv: '60 km/tim', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'En lastad obromsad släpvagn vars totalvikt överstiger bilens halva tjänstevikt får köras i högst 40 km/tim. Här är halva tjänstevikten 600 kg och totalvikten 700 kg.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_12',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du drar en olastad obromsad släpvagn med tjänstevikt 400 kg och totalvikt 700 kg. Bilens tjänstevikt är 1 600 kg. Hur fort får du köra som mest?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: '30 km/tim', en: '', ar: '' } },
      { id: 'B', text: { sv: '40 km/tim', en: '', ar: '' } },
      { id: 'C', text: { sv: '80 km/tim, eftersom släpvagnens tjänstevikt (400 kg) inte överstiger bilens halva tjänstevikt (800 kg)', en: '', ar: '' } },
      { id: 'D', text: { sv: '70 km/tim', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'En olastad obromsad släpvagn får köras i 80 km/tim om dess tjänstevikt inte överstiger bilens halva tjänstevikt. Här är halva tjänstevikten 800 kg och släpvagnens tjänstevikt 400 kg.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_13',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du drar en olastad obromsad släpvagn med tjänstevikt 500 kg och totalvikt 750 kg. Bilens tjänstevikt är 900 kg. Hur fort får du köra som mest?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: '80 km/tim', en: '', ar: '' } },
      { id: 'B', text: { sv: '40 km/tim, eftersom släpvagnens tjänstevikt (500 kg) överstiger bilens halva tjänstevikt (450 kg)', en: '', ar: '' } },
      { id: 'C', text: { sv: '60 km/tim', en: '', ar: '' } },
      { id: 'D', text: { sv: '100 km/tim', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'En olastad obromsad släpvagn vars tjänstevikt överstiger bilens halva tjänstevikt får köras i högst 40 km/tim. Här är halva tjänstevikten 450 kg och släpvagnens tjänstevikt 500 kg.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_14',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken är den högsta hastigheten för en släpvagn med ledad dragstång och påskjutsbroms (till exempel med styrande framaxel)?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: '80 km/tim', en: '', ar: '' } },
      { id: 'B', text: { sv: '60 km/tim', en: '', ar: '' } },
      { id: 'C', text: { sv: '100 km/tim', en: '', ar: '' } },
      { id: 'D', text: { sv: '40 km/tim', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Du får köra i högst 40 km/tim med en släpvagn med ledad dragstång och påskjutsbroms, till exempel med styrande framaxel.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_15',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken e-tjänst kan du använda för att ta reda på hur fort du får köra med din släpvagn eller husvagn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Fordonsskattekalkylatorn', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Besiktningsbokningen', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Släpvagnskalkylatorn', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Körkortsportalen', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Använd e-tjänsten släpvagnskalkylatorn för att ta reda på hur fort du får köra med din släpvagn eller husvagn.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_16',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken myndighet utfärdar registreringsbevis från och med år 2009?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Polismyndigheten', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Transportstyrelsen', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Kommunen', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Skatteverket', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Från och med år 2009 utfärdas registreringsbevis av Transportstyrelsen.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_17',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Hur många typer av registreringsbevis förekommer enligt texten?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Endast en typ', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Tre typer', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Fyra typer', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Två typer, en ny och en äldre', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Det förekommer två typer av registreringsbevis, ett nytt och ett äldre.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_18',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad anger uppgiften "Högsta vikt bromsat släp" på det nya registreringsbeviset?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Den högsta tillåtna släpvagnsvikten (släpvagnens tjänstevikt + lastens vikt) för bilen, som inte får överskridas', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bilens egen tjänstevikt', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Hur lång släpvagn bilen får dra', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Hur snabbt bilen får köra med släp', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Här kan du utläsa den högsta tillåtna släpvagnsvikten (släpvagnens tjänstevikt + lastens vikt) som gäller för bilen. Vikten får inte överskridas.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_19',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Kan bilens högsta tillåtna släpvagnsvikt innebära att du inte får lasta släpvagnen lika mycket som släpvagnens eget registreringsbevis anger?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Nej, släpvagnens registreringsbevis gäller alltid', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Nej, bilens uppgifter är bara en rekommendation', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, bilens högsta tillåtna släpvagnsvikt får inte överskridas', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, men bara på vintern', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Vikten som gäller för bilen får inte överskridas. Det kan innebära att släpvagnen inte får lastas så mycket som släpvagnens registreringsbevis anger.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_20',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad gäller för uppgiften "Högsta vikt obromsat släp" på det nya registreringsbeviset?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Uppgiften finns på alla bilar som någonsin tillverkats', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Den gäller släpvagnar utan bromsar och finns endast hos bilar av senare årsmodell', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Den gäller endast husvagnar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Den anger bilens bromsväg', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Denna uppgift finns endast hos bilar av senare årsmodell. Saknar släpvagnen bromsar får släpvagnsvikten (tjänstevikt + lastens vikt) inte överskrida detta värde.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_21',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad innebär uppgiften "Högsta sammanlagda bruttovikt för bil och släp" på registreringsbeviset?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Att släpvagnen aldrig får väga mer än bilen', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att bilen bara får lastas till hälften', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att endast släpvagnens vikt räknas', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att summan av bilens och släpvagnens bruttovikter inte får överstiga detta värde', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Summan av bilens och släpvagnens bruttovikter får inte överstiga detta värde.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_22',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad är bruttovikt?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Bilens respektive släpvagnens aktuella vikt, inklusive last', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Fordonets vikt utan last och utan förare', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Fordonets vikt när det är tomt men med full tank', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Den tyngsta last fordonet är konstruerat för', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Bruttovikt är bilens respektive släpvagnens aktuella vikt, inklusive last.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_23',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad anger uppgiften "Högsta totalvikt på släpet för B-körkort" på registreringsbeviset?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Hur mycket bilen själv får väga', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Hur länge du får köra med släpvagnen', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Den vikt som släpvagnens totalvikt inte får överstiga för den som har B-körkort', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Hur många passagerare bilen får ta', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'För den som har B-körkort får släpvagnens totalvikt inte överstiga den vikt som anges här.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_24',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad är bilens tjänstevikt?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Bilens vikt med full last och alla passagerare', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bilens vikt körfärdig, inklusive föraren, men utan last och passagerare', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Bilens vikt helt utan förare', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Summan av bilens och släpvagnens vikt', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Tjänstevikten är bilens vikt "körfärdig" inklusive föraren. Last och passagerare ingår inte.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_25',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Hur räknas bilens totalvikt ut?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Tjänstevikten minus maxlasten', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bilens vikt delat med två', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Släpvagnens vikt plus bilens bruttovikt', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Summan av tjänstevikten och maxlasten', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Totalvikten är summan av tjänstevikten och maxlasten.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_26',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad menas med bilens maxlast?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Den tyngsta last som bilen är konstruerad för', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Den last som bilen har just nu', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Den last du som förare själv anser vara lagom', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Den last som släpvagnen får ha', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Maxlast är den tyngsta last som bilen är konstruerad för.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_27',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du behöver sänka totalvikten på din husvagn för att få dra den med din bil. Vad bör du göra?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Skriva över vikten själv på registreringsbeviset', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Fråga polisen om lov att sänka vikten', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Kontakta ett besiktningsföretag och höra vilka tekniska förändringar som krävs för att husvagnen ska godkännas vid registreringsbesiktning', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Köra utan att ändra något och ta risken', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Kontakta ett besiktningsföretag och hör vilka tekniska förändringar du behöver göra för att husvagnen ska godkännas vid den registreringsbesiktning som måste göras. Hör även om du behöver några intyg från tillverkaren eller annan.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_28',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Behöver du ha vinterdäck på din släpvagn mellan 1 december och 31 mars?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Nej, släpvagnar behöver aldrig vinterdäck', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, om det är vinterväglag', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, men bara om släpvagnen är lastad', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Nej, bara bilen behöver vinterdäck', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Du behöver ha vinterdäck på din släpvagn 1 december–31 mars om det är vinterväglag.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_29',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Påverkar det vilken bil som drar släpvagnen hur mycket du får lasta på den?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, hur mycket du får lasta beror även på vilken bil som ska dra släpvagnen', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Nej, det är bara släpvagnens egen totalvikt som räknas', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Nej, bilen spelar ingen roll om du har B-körkort', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det avgörs bara av vädret', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Hur mycket du får lasta beror även på vilken bil som ska dra släpvagnen, eftersom bilens högsta tillåtna släpvagnsvikt inte får överskridas.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kora_slap_30',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Registreringsbeviset anger en högsta sammanlagd bruttovikt för bil och släp på 3 500 kg. Bilens aktuella vikt med last är 1 900 kg och släpvagnens aktuella vikt med last är 1 700 kg. Får du köra så?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, båda fordonen väger under 3 500 kg var för sig', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, bara bilens vikt räknas', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, om du kör långsamt', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Nej, den sammanlagda bruttovikten (3 600 kg) överstiger 3 500 kg', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Summan av bilens och släpvagnens bruttovikter får inte överstiga det värde som anges. Här är summan 1 900 + 1 700 = 3 600 kg, vilket överstiger 3 500 kg.',
      en: '',
      ar: ''
    }
  },
  // ===== Vikter att ta hänsyn till när du drar en släpvagn =====
  {
    id: 'fordon_vikter_1',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Var framgår det om din bil får dra en släpvagn och hur tung släpvagnen får vara?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'I släpvagnens försäkringsbrev', en: '', ar: '' } },
      { id: 'B', text: { sv: 'I bilens besiktningsprotokoll', en: '', ar: '' } },
      { id: 'C', text: { sv: 'I bilens registreringsbevis', en: '', ar: '' } },
      { id: 'D', text: { sv: 'På baksidan av ditt körkort', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Om din bil får dra en släpvagn och hur tung släpvagnen får vara framgår av bilens registreringsbevis. Uppgifterna finns också i Transportstyrelsens e-tjänster.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_2',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad krävs för att logga in på Mina sidor hos Transportstyrelsen och hitta uppgifter om släpvagnsvikter för dina fordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Inloggning med e-legitimation', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Endast ett vanligt lösenord', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ett intyg från ett besiktningsföretag', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ett särskilt släpvagnskonto', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Mina sidor kräver inloggning med e-legitimation. Du kan också söka fordonsuppgifter i e-tjänsten Sök fordonsuppgifter.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_3',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Under vilken rubrik i e-tjänsterna hittar du uppgifterna om högsta tillåtna släpvagnsvikter?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Besiktning och kontrollresultat', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ägarhistorik', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Skatt och avgifter', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Tekniska data, kopplingsanordning', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Uppgifterna finns under rubriken tekniska data, kopplingsanordning. Där anges bland annat högsta tillåtna bruttovikt för släpvagnen, den sammanlagda bruttovikten och vilka totalvikter som gäller för olika körkortsbehörigheter.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_4',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad innebär det om uppgifterna om släpvagnsvikt saknas för din bil?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Att du får dra en släpvagn med obegränsad vikt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att bilen inte är godkänd för att dra en släpvagn', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att du bara får dra obromsade släpvagnar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att du bara får dra husvagnar', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Om uppgifterna saknas innebär det att bilen inte är godkänd för att dra en släpvagn.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_5',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad är bruttovikt?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Fordonets faktiska vikt (tjänstevikt) tillsammans med dess last vid den aktuella tidpunkten', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Den högsta vikt som fordonet är konstruerat och godkänt för att bära', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Bilens och släpvagnens vikt delat med två', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Enbart vikten på lasten', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Bruttovikten är fordonets faktiska vikt (tjänstevikt) tillsammans med dess last under den aktuella tidpunkten.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_6',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad är totalvikt?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Fordonets faktiska vikt med last just nu', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Fordonets vikt utan last', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Den högsta tillåtna vikt som fordonet är konstruerat och godkänt för att bära', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Enbart vikten på lasten', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Totalvikten är den högsta tillåtna vikt som fordonet är konstruerat och godkänt för att bära. Bruttovikten är i stället den faktiska vikten med last just nu.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_7',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'En bil har en tjänstevikt på 1 400 kg och är lastad med 300 kg. Vad är bilens bruttovikt just nu?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: '1 100 kg', en: '', ar: '' } },
      { id: 'B', text: { sv: '1 400 kg', en: '', ar: '' } },
      { id: 'C', text: { sv: '300 kg', en: '', ar: '' } },
      { id: 'D', text: { sv: '1 700 kg', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Bruttovikten är tjänstevikten plus lasten: 1 400 + 300 = 1 700 kg.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_8',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad avser uppgiften "högsta släpvagnsvikt" (eller "max släpvagnsvikt")?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Bilens egen högsta tillåtna vikt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Släpvagnens tjänstevikt med dess last (bruttovikt) som bilen klarar av att dra', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Hur snabbt bilen får köra med släpvagn', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Antalet axlar släpvagnen får ha', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Uppgiften avser släpvagnens tjänstevikt med dess last, så kallad bruttovikt, som din bil klarar av att dra.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_9',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Var på registreringsbeviset hittar du information om bilens högsta tillåtna släpvagnsvikt?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'På registreringsbevis del 1, under rubriken kopplingsanordning', en: '', ar: '' } },
      { id: 'B', text: { sv: 'På släpvagnens skylt', en: '', ar: '' } },
      { id: 'C', text: { sv: 'På baksidan av körkortet', en: '', ar: '' } },
      { id: 'D', text: { sv: 'I bilens besiktningsprotokoll', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Information om bilens högsta tillåtna släpvagnsvikt finns på registreringsbeviset del 1 eller i e-tjänsterna under rubriken kopplingsanordning.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_10',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad anger punkt O.1 på registreringsbeviset?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordon_vikter_10',
    // BILD REKOMMENDERAS: Registreringsbevis del 1 (EU-format) med fältet "O.1" ringat eller markerat i rött.
    // Samma bild kan återanvändas i fråga 11, 12, 16 och 20 med olika fält markerade (O.2, (30), F.3, (34)).
    options: [
      { id: 'A', text: { sv: 'Högsta vikt för obromsad släpvagn', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bilens tjänstevikt', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Högsta vikt för släpvagn, för släpvagnar med bromsanordning', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Högsta sammanlagda bruttovikt för bil och släpvagn', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Punkt O.1 anger högsta vikt för släpvagn i kg och gäller för släpvagnar med bromsanordning.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_11',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad anger punkt O.2 på registreringsbeviset?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordon_vikter_11',
    // BILD REKOMMENDERAS: Samma registreringsbevis som i fråga 10, men med fältet "O.2" markerat.
    options: [
      { id: 'A', text: { sv: 'Högsta vikt för släpvagn med bromsanordning', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bilens totalvikt', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Högsta totalvikt för B-körkort', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Högsta vikt för obromsad släpvagn', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Punkt O.2 anger högsta vikt för obromsad släpvagn i kg.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_12',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad betyder uppgiften "Högsta vikt släpkärra" under punkt (30) som finns på vissa registreringsbevis?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordon_vikter_12',
    // BILD REKOMMENDERAS: Samma registreringsbevis som i fråga 10, men med fältet "(30)" markerat.
    options: [
      { id: 'A', text: { sv: 'Samma sak som högsta vikt för obromsad släpvagn', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Samma sak som O.1, alltså högsta vikt för släpvagn med bromsanordning', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Bilens egen totalvikt', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Den högsta hastigheten med släpkärra', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Punkt (30) "Högsta vikt släpkärra" finns på vissa registreringsbevis och betyder samma sak som O.1.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_13',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad kallas värdena för högsta släpvagnsvikt i Transportstyrelsens e-tjänster?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Max släpvagnsvikt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Minsta släpvagnsvikt', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Släpvagnens tomvikt', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Släpvagnens skattevikt', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'I e-tjänsterna benämns dessa värden som "max släpvagnsvikt".',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_14',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Framgår det alltid av registreringsbeviset eller e-tjänsten om bilen har en dragkrok monterad?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, det står alltid tydligt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, men bara i e-tjänsten', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Nej, det framgår inte alltid om bilen har dragkrok monterad eller inte', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Nej, dragkrok får inte registreras', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Det framgår inte alltid varken på registreringsbeviset eller i e-tjänsten om bilen har dragkrok monterad eller inte.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_15',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad menas med högsta sammanlagda bruttovikt för bil och släpvagn (tågvikt)?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Den högsta tillåtna vikten för bara släpvagnen', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Den högsta tillåtna vikten för bilen och släpvagnen tillsammans', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Den lägsta vikt bilen måste ha för att få dra släp', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Vikten på lasten i släpvagnen', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Den högsta sammanlagda bruttovikten (tågvikt) är den högsta tillåtna vikten för bilen och släpvagnen tillsammans.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_16',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Under vilken punkt i registreringsbevis del 1 finns den högsta sammanlagda bruttovikten (tågvikt) angiven?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordon_vikter_16',
    // BILD REKOMMENDERAS: Samma registreringsbevis som i fråga 10, men med fältet "F.3" markerat.
    options: [
      { id: 'A', text: { sv: 'O.1', en: '', ar: '' } },
      { id: 'B', text: { sv: 'O.2', en: '', ar: '' } },
      { id: 'C', text: { sv: '(30)', en: '', ar: '' } },
      { id: 'D', text: { sv: 'F.3', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Den högsta sammanlagda bruttovikten (tågvikt) finns angiven under punkt F.3 i registreringsbeviset del 1.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_17',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad ingår i den sammanlagda bruttovikten (tågvikten) för bil och släpvagn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Bilens tjänstevikt plus dess last (till exempel förare och packning) samt släpvagnens tjänstevikt plus dess last', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bara bilens tjänstevikt och släpvagnens tjänstevikt, utan last', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Bara släpvagnens last', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Bilens totalvikt delat med två', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Tågvikten är bilens tjänstevikt plus lasten (till exempel förare och övrig packning) plus släpvagnens tjänstevikt plus dess last.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_18',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Högsta sammanlagda bruttovikt för din bil och släpvagn är 3 000 kg. Din bil väger 1 600 kg med last och släpvagnen väger 1 500 kg med last. Får du köra så?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, båda fordonen väger under 3 000 kg var för sig', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, bara släpvagnens vikt räknas', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Nej, summan (3 100 kg) överstiger den högsta sammanlagda bruttovikten', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, om du kör långsamt', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Summan av bilens och släpvagnens bruttovikter får inte överstiga den högsta sammanlagda bruttovikten. Här är summan 1 600 + 1 500 = 3 100 kg, vilket överstiger 3 000 kg.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_19',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Högsta sammanlagda bruttovikt är 3 500 kg. Din bil väger 1 800 kg med last och släpvagnen 1 700 kg med last. Får du köra så?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Nej, summan måste alltid vara lägre än gränsen', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, summan (3 500 kg) överstiger inte den högsta sammanlagda bruttovikten', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Nej, släpvagnen får aldrig väga mer än 1 500 kg', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det går inte att avgöra', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Summan av bruttovikterna får inte överstiga den högsta sammanlagda bruttovikten. Här är summan 3 500 kg, alltså precis på gränsen och inte över den.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_20',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Under vilken punkt i registreringsbevis del 1 hittar du uppgiften "högsta totalvikt på släpet för B-körkort/B utökat"?',
      en: '',
      ar: ''
    },
     image:'/images/questions/manovrering/fordon_vikter_20',
    // BILD REKOMMENDERAS: Samma registreringsbevis som i fråga 10, men med fältet "(34)" markerat under rubriken kopplingsanordning.
    options: [
      { id: 'A', text: { sv: 'Punkt (30)', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Punkt O.1', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Punkt F.3', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Punkt (34)', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Uppgiften "högsta totalvikt på släpet för B-körkort/B utökat" finns under rubriken kopplingsanordning, punkt (34).',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_21',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad visar uppgiften om släpets högsta tillåtna totalvikt vid körkortsbehörighet B (eller B utökat)?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Den högsta totalvikt som den släpvagn du kopplat till bilen får ha, utifrån körkortsbehörigheten', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Hur tung bilen får vara', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Hur mycket last som får finnas i bilen', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Hur länge du får köra med släpvagn', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Den angivna vikten visar vilken högsta totalvikt som släpvagnen du kopplat till bilen får ha, utifrån de olika körkortsbehörigheterna.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_22',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Den högsta totalvikten utifrån körkortsbehörighet tar inte hänsyn till bilens högsta tillåtna släpvagnsvikt. Vad gäller då?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Endast körkortets gräns gäller', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bilens tekniska begränsningar gäller alltid, så släpvagnens bruttovikt får aldrig överstiga bilens högsta släpvagnsvikt', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Du får välja vilken gräns som gäller', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ingen gräns gäller för obromsade släpvagnar', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Även om en viss vikt står angiven för körkortet gäller alltid bilens tekniska begränsningar. Släpvagnen får aldrig lastas så tungt att dess bruttovikt överstiger bilens högsta släpvagnsvikt.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_vikter_23',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Din bils högsta släpvagnsvikt är 1 200 kg. Ditt B-körkort tillåter en släpvagn med totalvikt upp till 1 500 kg. Släpvagnens tjänstevikt är 500 kg och du vill lasta 800 kg. Får du köra så?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, eftersom körkortet tillåter 1 500 kg', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, eftersom lasten (800 kg) är lägre än 1 200 kg', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Nej, släpvagnens bruttovikt (1 300 kg) överstiger bilens högsta släpvagnsvikt (1 200 kg)', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Nej, släpvagnen får aldrig lastas alls', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Släpvagnens bruttovikt är 500 + 800 = 1 300 kg. Den överstiger bilens högsta släpvagnsvikt på 1 200 kg, och bilens tekniska begränsningar gäller alltid även om körkortet skulle tillåta mer.',
      en: '',
      ar: ''
    }
  },
  // ===== Dragkrok (kopplingsanordning) =====
  {
    id: 'fordon_dragkrok_1',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilket krav gäller för att en dragkrok (kopplingsanordning) ska få användas för att dra en släpvagn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Den ska vara registrerad i polisens register', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Den ska vara EU-typgodkänd och avsedd för just din bil', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Den ska vara nytillverkad', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Den ska vara godkänd av släpvagnens tillverkare', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'En dragkrok (kopplingsanordning) får användas för att dra släpvagn om den är EU-typgodkänd och avsedd för just din bil.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_2',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Får du använda en EU-typgodkänd dragkrok som är avsedd för din bil även om uppgift om dragkrok inte anges i bilens registreringsbevis?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Nej, dragkroken måste alltid stå i registreringsbeviset', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Nej, då måste du ansöka om särskilt tillstånd', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, men bara om du har B-körkort', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, det gäller även om uppgiften inte anges i registreringsbeviset', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Dragkroken får användas för att dra släpvagn om den är EU-typgodkänd och avsedd för just din bil. Det gäller även om uppgift om dragkrok inte anges i bilens registreringsbevis.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_3',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Behöver du registreringsbesiktiga en dragkrok som du har eftermonterat på en EU-typgodkänd personbil klass I?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Nej, under vissa förutsättningar behöver du inte registreringsbesiktiga den', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, alltid', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, men bara om bilen är äldre än tio år', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Nej, eftermonterade dragkrokar kräver aldrig besiktning på någon bil', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Om du har eftermonterat en dragkrok på en EU-typgodkänd personbil klass I eller lätt lastbil behöver du inte registreringsbesiktiga dragkroken, förutsatt att vissa villkor är uppfyllda.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_4',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilka två villkor ska vara uppfyllda för att du inte ska behöva registreringsbesiktiga en eftermonterad dragkrok på en EU-typgodkänd personbil klass I eller lätt lastbil?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Dragkroken är röd och bilen är nyare än tre år', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Dragkroken är köpt i Sverige och bilen har automatväxel', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Dragkroken är fackmässigt monterad enligt bil- och kroktillverkarens anvisningar och uppgiften om maximal släpvagnsvikt finns registrerad i vägtrafikregistret', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Dragkroken har monterats av föraren själv och bilen har vinterdäck', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Dragkroken ska vara fackmässigt monterad enligt bil- och kroktillverkarens anvisningar, och uppgiften om maximal släpvagnsvikt på bilen ska finnas registrerad i vägtrafikregistret.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_5',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Dragkroken är fackmässigt monterad enligt tillverkarnas anvisningar. Vilket ytterligare villkor måste vara uppfyllt för att en eftermonterad dragkrok på en EU-typgodkänd personbil klass I inte ska behöva registreringsbesiktigas?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Bilen ska ha körts minst 10 000 mil', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Uppgiften om maximal släpvagnsvikt på bilen ska finnas registrerad i vägtrafikregistret', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Du ska ha ett körkort med utökad behörighet', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Släpvagnen ska vara bromsad', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Utöver att dragkroken är fackmässigt monterad ska uppgiften om maximal släpvagnsvikt på bilen finnas registrerad i vägtrafikregistret.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_6',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad innebär det att en bil är EU-typgodkänd?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Att lika förutsättningar och krav gäller inom hela EU', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att bilen bara får köras inom Sverige', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att bilen är tillverkad i ett EU-land', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att bilen är befriad från fordonsskatt', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'EU-typgodkännande innebär att lika förutsättningar och krav gäller inom hela EU. Som bevis för att fordonet uppfyller kraven hänvisar tillverkaren till ett typgodkännande.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_7',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad gäller för nya personbilar och lätta lastbilar idag?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'De är aldrig EU-typgodkända', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Endast dyra bilar är EU-typgodkända', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Endast bilar med dragkrok är EU-typgodkända', en: '', ar: '' } },
      { id: 'D', text: { sv: 'De är som regel EU-typgodkända', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Nya personbilar och lätta lastbilar är idag som regel EU-typgodkända.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_8',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad är ett CoC-dokument?',
      en: '',
      ar: ''
    },
     image:'/images/questions/manovrering/fordon_dragkrok_8.jfif',
    // BILD REKOMMENDERAS: Ett exempel på ett CoC-dokument (Certificate of Conformity / EU-typgodkännande)
    // som visas som ett papper med rubriken "Certificate of Conformity" och rader med fordonsuppgifter (märke, modell, vikter).
    options: [
      { id: 'A', text: { sv: 'Ett körkort för släpvagnsförare', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ett försäkringsbevis för släpvagnar', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ett dokument som följer med varje typgodkänd bil och innehåller de specifika uppgifterna för just det fordonet', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ett intyg om att dragkroken är fackmässigt monterad', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Med varje typgodkänd bil följer ett dokument som innehåller de specifika uppgifterna för just det fordonet, ett så kallat CoC-dokument.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_9',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad bestämmer vilka uppgifter som ska finnas på ett CoC-dokument?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Bilens tillverkare själv', en: '', ar: '' } },
      { id: 'B', text: { sv: 'EU-regler', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Varje kommun', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Bilens ägare', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Vilka uppgifter som ska finnas på ett CoC-dokument regleras av EU-regler.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_10',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Varför finns uppgifter om kopplingsanordning inte på registreringsbeviset eller i Transportstyrelsens e-tjänster för personbilar och lätta lastbilar?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'För att ingen information om kopplingsanordning ska anges i CoC-dokumentet, så Transportstyrelsen saknar uppgiften', en: '', ar: '' } },
      { id: 'B', text: { sv: 'För att Transportstyrelsen väljer att hemlighålla uppgiften', en: '', ar: '' } },
      { id: 'C', text: { sv: 'För att alla dragkrokar är likadana', en: '', ar: '' } },
      { id: 'D', text: { sv: 'För att personbilar aldrig får ha dragkrok', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'För en personbil eller lätt lastbil ska ingen information om kopplingsanordning anges i CoC-dokumentet. Därför saknar Transportstyrelsen motsvarande information, och uppgiften finns inte på registreringsbeviset eller i e-tjänsterna.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_11',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad visar uppgiften om maximal släpvagnsvikt?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Hur snabbt du får köra med släpvagn', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Hur lång släpvagnen får vara', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Hur många axlar släpvagnen får ha', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Om fordonet får framföras med släpvagn eller inte', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Uppgiften om max släpvagnsvikt visar om fordonet får framföras med släpvagn eller inte.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_12',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad bör du alltid säkerställa innan du drar en släpvagn med din bil?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Att släpvagnen har samma färg som bilen', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att dragkroken är röd', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Hur tung släpvagn din bil får dra', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att bilen har fullt bränsle', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Säkerställ alltid hur tung släpvagn din bil får dra.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_13',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilket av följande fordon behöver registreringsbesiktigas om en dragkrok eftermonteras?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'En EU-typgodkänd personbil klass I', en: '', ar: '' } },
      { id: 'B', text: { sv: 'En personbil klass II (husbil)', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Alla lätta lastbilar utan undantag', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Inget fordon behöver registreringsbesiktigas', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Personbil klass II (husbil) behöver registreringsbesiktigas om en dragkrok eftermonteras.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_14',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken lätt lastbil behöver registreringsbesiktigas om en dragkrok eftermonteras?',
      en: '',
      ar: ''
    },
     image:'/images/questions/manovrering/fordon_dragkrok_14.jfif',
    // BILD REKOMMENDERAS: Bakdelen av en lätt lastbil/skåpbil med en eftermonterad bakgavellyft (hydraulisk lyftplatta)
    // och ett särskilt underkörningsskydd (balk under bakänden). Gärna en pil till varje del med namnet.
    options: [
      { id: 'A', text: { sv: 'En lätt lastbil med eftermonterad bakgavellyft eller särskilt underkörningsskydd', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Alla lätta lastbilar som är äldre än fem år', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Endast lätta lastbilar med dieselmotor', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ingen lätt lastbil', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'En lätt lastbil med eftermonterad bakgavellyft eller särskilt underkörningsskydd behöver registreringsbesiktigas om en dragkrok eftermonteras.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_15',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad gäller för bilar som inte är EU-typgodkända när en dragkrok eftermonteras?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'De får aldrig ha dragkrok', en: '', ar: '' } },
      { id: 'B', text: { sv: 'De behöver ingen besiktning', en: '', ar: '' } },
      { id: 'C', text: { sv: 'De behöver endast besiktigas vart tionde år', en: '', ar: '' } },
      { id: 'D', text: { sv: 'De behöver registreringsbesiktigas', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Bilar som inte är EU-typgodkända behöver registreringsbesiktigas om en dragkrok eftermonteras.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_16',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'När behöver du inte registreringsbesikta bilen om du tar bort din dragkrok?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Aldrig, du måste alltid registreringsbesikta', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bara om kroken har suttit på i mindre än ett år', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Om kroken inte är registrerad i Vägtrafikregistret', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Bara om du byter bil', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Om du tar bort din dragkrok behöver du inte registreringsbesikta förutsatt att kroken inte är registrerad i Vägtrafikregistret.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_17',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Hur kan du kontrollera om din dragkrok är registrerad i Vägtrafikregistret?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Genom att titta i registreringsbeviset', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Genom att fråga släpvagnstillverkaren', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Genom att mäta dragkroken', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Genom att ringa till polisen', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Du kan kontrollera om kroken är registrerad genom att titta i registreringsbeviset.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_18',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Det finns uppgifter om dragkrok i bilens registreringsbevis och du tar bort dragkroken. Vad gäller?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Du behöver inte göra något', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bilen måste registreringsbesiktigas', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Du måste skicka in dragkroken till Transportstyrelsen', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Du måste byta registreringsskylt', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Om det finns uppgifter om dragkrok i registreringsbeviset måste bilen registreringsbesiktigas när dragkroken tas bort.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_19',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du vill eftermontera en dragkrok på din husbil (personbil klass II). Vad gäller?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordon_dragkrok_19.jfif',
    // BILD REKOMMENDERAS: En husbil (personbil klass II) sedd från sidan/baksidan, med en dragkrok monterad på bakänden.
    options: [
      { id: 'A', text: { sv: 'Du behöver ingen besiktning om dragkroken är nyköpt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Du behöver bara anmäla det till försäkringsbolaget', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Du får inte montera dragkrok på husbilar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Bilen behöver registreringsbesiktigas', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'En personbil klass II (husbil) behöver registreringsbesiktigas om en dragkrok eftermonteras.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_dragkrok_20',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du har eftermonterat en dragkrok på en EU-typgodkänd personbil klass I. Kroken är fackmässigt monterad enligt tillverkarnas anvisningar och uppgiften om maximal släpvagnsvikt finns registrerad i vägtrafikregistret. Behöver du registreringsbesiktiga dragkroken?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, alla eftermonterade dragkrokar måste besiktigas', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, men bara första året', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Nej, villkoren för att slippa registreringsbesiktning är uppfyllda', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det beror på släpvagnens färg', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Eftersom dragkroken är fackmässigt monterad enligt tillverkarnas anvisningar och uppgiften om maximal släpvagnsvikt finns registrerad i vägtrafikregistret behöver du inte registreringsbesiktiga dragkroken.',
      en: '',
      ar: ''
    }
  },
   // ===== Efterfordon =====
  {
    id: 'fordon_efterfordon_1',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad är ett efterfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ett släpfordon på medar som dras av en traktor', en: '', ar: '' } },
      { id: 'B', text: { sv: 'En släpvagn som är byggd för att frakta gods', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ett redskap eller annat som inte är en släpvagn eller ett terrängsläp, men som är kopplat till en bil, traktor, motorredskap eller terrängmotorfordon och inte är avsett för att frakta gods', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ett motordrivet fordon som dras av en annan bil', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Ett efterfordon är ett redskap eller annat som inte är en släpvagn eller ett terrängsläp men som är kopplat till en bil, en traktor, ett motorredskap eller ett terrängmotorfordon. Ett efterfordon är inte avsett för att frakta gods.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_2',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilket av följande är ett exempel på ett efterfordon?',
      en: '',
      ar: ''
    },
     image:'/images/questions/manovrering/fordon_efterfordon_2.jpg',
    // BILD REKOMMENDERAS: Tre små bilder bredvid varandra: en skylift på hjul, en tryckluftskompressor på hjul
    // och en kioskvagn. Alla kopplade bakom en bil, utan lastyta.
    options: [
      { id: 'A', text: { sv: 'En skylift', en: '', ar: '' } },
      { id: 'B', text: { sv: 'En släpvagn med flak', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ett terrängsläp', en: '', ar: '' } },
      { id: 'D', text: { sv: 'En släpsläde', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Exempel på efterfordon är tryckluftskompressor, skylift och kioskvagn.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_3',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilka fordon som saknar fjädring klassificeras som efterfordon, trots att de är avsedda för transport av visst gods?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Flakvagnar, hästsläp och husvagnar', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Båtvagnar, flakvagnar och skåpsläp', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Endast husvagnar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Båttransportvagnar, husvagnar och tankvagnar', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Vissa fordon som saknar fjädring är klassificerade som efterfordon trots att de är avsedda för transport av visst gods. Det gäller båttransportvagnar, husvagnar och tankvagnar.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_4',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Behöver ett efterfordon registreras och ha en registreringsskylt?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, precis som en släpvagn', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Nej, efterfordon behöver inte registreras och har ingen registreringsskylt', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, men bara om det väger över 750 kg', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, men bara om det används yrkesmässigt', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Efterfordon behöver inte registreras och har ingen registreringsskylt, till skillnad från släpvagnar som måste registreras och kontrollbesiktas.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_5',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilket av följande krav gäller för ett efterfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Registreringsskylt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Kontrollbesiktning', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Fordonsskatt', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Rätt körkortsbehörighet för det fordon som drar efterfordonet', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'För efterfordon krävs ingen registreringsskylt, kontrollbesiktning, fordonsskatt eller trafikförsäkring. Du behöver däremot ha rätt behörighet för det fordon som drar efterfordonet.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_6',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad avgör vilken körkortsbehörighet som krävs när du kör med ett efterfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Efterfordonets vikt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Enbart dragfordonet', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Både dragfordonets och efterfordonets vikt tillsammans', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det krävs alltid BE', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Det finns inga särskilda körkortskrav för efterfordon. När det gäller efterfordon är det enbart dragfordonet som avgör vilken körkortsbehörighet som gäller.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_7',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du kör en personbil med en totalvikt på högst 3 500 kg och drar en skylift som efterfordon. Vilken körkortsbehörighet krävs?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'B', en: '', ar: '' } },
      { id: 'B', text: { sv: 'BE', en: '', ar: '' } },
      { id: 'C', text: { sv: 'C1E', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Inget körkort krävs', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Om du kör en personbil eller lätt lastbil med en totalvikt av högst 3 500 kg krävs körkort med behörighet B.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_8',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken behörighet krävs om du drar ett efterfordon med ett fordon som är tyngre än en personbil eller lätt lastbil med totalvikt på högst 3 500 kg?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'B', en: '', ar: '' } },
      { id: 'B', text: { sv: 'BE', en: '', ar: '' } },
      { id: 'C', text: { sv: 'C1 eller C', en: '', ar: '' } },
      { id: 'D', text: { sv: 'D1', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Kör du ett tyngre fordon än en personbil eller lätt lastbil med totalvikt på högst 3 500 kg krävs körkort med behörighet C1 eller C.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_9',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Hur bred får fordonsbredden inklusive last vara som mest på gator och allmänna vägar?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: '200 cm', en: '', ar: '' } },
      { id: 'B', text: { sv: '220 cm', en: '', ar: '' } },
      { id: 'C', text: { sv: '240 cm', en: '', ar: '' } },
      { id: 'D', text: { sv: '260 cm', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'På gator och allmänna vägar får fordonsbredden inklusive last vara högst 260 cm.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_10',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Hur långt får lasten skjuta ut utanför fordonet i sidled?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Högst 20 cm', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Högst 50 cm', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Högst 10 cm', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Högst 100 cm', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Lasten får skjuta ut högst 20 cm utanför fordonet.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_11',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad gäller för bruttovikten om ett efterfordon saknar bromsar?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Det får väga hur mycket som helst', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bruttovikten får inte överstiga dragfordonets bruttovikt', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Bruttovikten får inte överstiga 750 kg', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Bruttovikten får vara högst hälften av dragfordonets bruttovikt', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Om efterfordonet saknar bromsar får bruttovikten inte överstiga dragfordonets bruttovikt. Bruttovikten på ett efterfordon är vad fordonet väger inklusive last.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_12',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Hur fort får ett efterfordon dras som mest?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: '20 km/tim', en: '', ar: '' } },
      { id: 'B', text: { sv: '40 km/tim', en: '', ar: '' } },
      { id: 'C', text: { sv: '30 km/tim', en: '', ar: '' } },
      { id: 'D', text: { sv: '50 km/tim', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Efterfordonet får dras i högst 30 km/tim.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_13',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Är det tillåtet att avregistrera och ta bort registreringsskylten på en släpvagn med flak och sedan använda den som efterfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Nej, om släpet är avsett för transport av gods är det en släpvagn', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, om du tar bort skylten', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, om du kör högst 30 km/tim', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, om släpvagnen är olastad', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Nej. Om släpet är avsett för transport av gods är det en släpvagn.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_14',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Får du göra om din husvagn till ett efterfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, utan några särskilda krav', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Nej, det är aldrig tillåtet', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, om husvagnen bara avregistreras', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, om husvagnen avregistreras, fjädringen sätts ur funktion på ett varaktigt sätt och vagnen förses med en LGF-skylt', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Ja, under förutsättning att husvagnen avregistreras, fjädringen sätts ur funktion på ett varaktigt sätt och vagnen förses med en särskild skylt för långsamtgående fordon (LGF-skylt).',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_15',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du har avregistrerat din husvagn och satt en LGF-skylt på den, men fjädringen fungerar fortfarande. Får husvagnen användas som efterfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, avregistrering och skylt räcker', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Nej, fjädringen måste också sättas ur funktion på ett varaktigt sätt', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, om du kör långsamt', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Nej, husvagnar kan aldrig vara efterfordon', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Alla tre krav måste uppfyllas: husvagnen avregistreras, fjädringen sätts ur funktion på ett varaktigt sätt och vagnen förses med en LGF-skylt.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_16',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Din båtvagn är ett efterfordon och du har ett originaltillbehörsflak till den. Får du köra gods på flaket?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, om godset är lätt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, om flaket är originaltillbehör', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Nej, båtvagnen får endast användas för dess specifika användningsområde', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, men bara högst 100 kg', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Nej, båtvagnen får endast användas för dess specifika användningsområde.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_17',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Får du köra på motorväg eller motortrafikled med ett efterfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, om du har LGF-skylt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, om du kör i högersta filen', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, om det är dagsljus', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Nej, fordonet måste vara konstruerat för att köras i minst 40 km/tim och också få köras i den hastigheten', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Nej. För att få köra på motorväg eller motortrafikled krävs att fordonet är konstruerat för att köras i minst 40 km/tim och också får köras i den hastigheten. Inte heller moped får köra på dessa vägar.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_18',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Du har ett litet obromsat släp för transport av gods. Kan det vara ett efterfordon eftersom det är obromsat?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Nej, om släpet är avsett för transport av gods är det en släpvagn', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, alla obromsade släp är efterfordon', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, om det väger under 750 kg', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, om det saknar registreringsskylt', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Nej. Om släpet är avsett för transport av gods är det en släpvagn. De enda undantagen är vissa båtvagnar, husvagnar och tankvagnar som saknar fjädring.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_19',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken belysning krävs bak på ett efterfordon under mörker?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'En röd positionslykta', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Två röda positionslyktor', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Två vita positionslyktor', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ingen belysning krävs bak', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Under mörker krävs två röda positionslyktor bak på efterfordonet.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_20',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'När krävs en vit positionslykta fram på ett efterfordon?',
      en: '',
      ar: ''
    },
     image:'/images/questions/manovrering/fordon_efterfordon_20.jfif',
    // BILD REKOMMENDERAS: Skiss ovanifrån av en bil med efterfordon bakom. Efterfordonet sticker ut mer än 200 mm
    // åt ena sidan (in mot vägens mitt) jämfört med bilen. Måttet "200 mm" markerat med pil.
    options: [
      { id: 'A', text: { sv: 'Alltid, oavsett bredd', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Aldrig', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Om efterfordonet skjuter ut mer än 200 mm in mot vägens mitt från dragfordonet', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Om efterfordonet är längre än 5 meter', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'En vit positionslykta fram krävs om efterfordonet skjuter ut mer än 200 millimeter in mot vägens mitt från dragfordonet.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_21',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'När krävs två vita positionslyktor fram på ett efterfordon?',
      en: '',
      ar: ''
    },
     image:'/images/questions/manovrering/fordon_efterfordon_21.jfif',
    // BILD REKOMMENDERAS: Skiss ovanifrån av en bil med ett efterfordon som är bredare än bilen och sticker ut
    // mer än 200 mm i sidled på båda sidor. Måttet "200 mm" markerat.
    options: [
      { id: 'A', text: { sv: 'Om efterfordonet skjuter ut mer än 200 mm i sidled från dragfordonet', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Om efterfordonet saknar bromsar', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Om efterfordonet väger över 750 kg', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Alltid vid dagsljus', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Två vita positionslyktor fram krävs om efterfordonet skjuter ut mer än 200 millimeter i sidled från dragfordonet.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_22',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilka reflexer krävs på ett efterfordon?',
      en: '',
      ar: ''
    },
     image:'/images/questions/manovrering/fordon_efterfordon_22.jfif',
    // BILD REKOMMENDERAS: Ett efterfordon (till exempel en kompressor) sett från sidan och bakifrån med
    // markerade reflexer: två röda bak, orangegula sidomarkeringsreflexer på sidan, och två vita reflexer fram.
    options: [
      { id: 'A', text: { sv: 'Endast två röda reflexer bak', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Endast vita reflexer fram', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Inga reflexer krävs', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Två röda reflexanordningar bak, orangegula sidomarkeringsreflexer åt sidan och två vita reflexer framtill', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Efterfordon ska ha två röda reflexanordningar bak, orangegula sidomarkeringsreflexer för sken åt sidan och två vita reflexer framtill.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_23',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilket krav på körriktningsvisare gäller för efterfordon som börjar användas 1 januari 2005 eller senare?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Inget krav gäller', en: '', ar: '' } },
      { id: 'B', text: { sv: 'De ska ha två körriktningsvisare med orangegult ljus', en: '', ar: '' } },
      { id: 'C', text: { sv: 'De ska ha en körriktningsvisare med rött ljus', en: '', ar: '' } },
      { id: 'D', text: { sv: 'De ska ha fyra körriktningsvisare med vitt ljus', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Efterfordon som börjar användas 1 januari 2005 eller senare ska ha två körriktningsvisare med orangegult ljus. Transportstyrelsen rekommenderar att även äldre efterfordon utrustas med körriktningsvisare.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_24',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad gäller för bromsar på ett efterfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Efterfordonet måste alltid ha bromsar', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Efterfordonet får aldrig ha bromsar', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Efterfordonet får vara bromsat eller obromsat. Om det finns broms ska den kunna minska farten och få efterfordonet att stanna snabbt och säkert', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Bromsar krävs bara om efterfordonet väger över 750 kg', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Efterfordonet får vara bromsat eller obromsat. Om det finns broms ska den kunna minska farten och få efterfordonet att stanna snabbt och säkert. Efterfordon med bromsar måste uppfylla kraven i VVFS 2003:20.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_25',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad gäller för däckens mönsterdjup på ett efterfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Mönsterdjupet måste vara minst 1,6 mm', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Mönsterdjupet måste vara minst 3 mm', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Däcken ska ha vinterdäcksmönster', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det finns inget krav på mönsterdjup, men däckets väv (kord) får inte synas', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Något krav på mönsterdjup finns inte på däcken, utan kravet är att däckets väv (kord) inte får synas.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_26',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilket krav gäller för däckens dimension på ett efterfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Däcken ska vara dimensionerade för minst den axelbelastning som fordonet har', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Däcken ska vara lika stora som dragfordonets däck', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Däcken ska vara nya', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Däcken får vara av vilken storlek som helst', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Däcken ska vara dimensionerade för minst den axelbelastning som fordonet har.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_27',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad gäller för kopplingsanordningen på ett efterfordon?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Det räcker att efterfordonet hänger löst efter dragfordonet', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Efterfordonet ska vara kopplat på ett säkert sätt och förbindelsen ska klara de påfrestningar den utsätts för', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Kopplingen måste alltid vara en kulkoppling', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Kopplingsanordningen behöver inte vara godkänd', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Efterfordonet ska vara kopplat på ett säkert sätt till dragfordonet, och förbindelsen ska klara de påfrestningar som den utsätts för.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_28',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Hur ska skylten för långsamtgående fordon (LGF-skylten) vara och placeras?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordon_efterfordon_28.jfif',
    // BILD REKOMMENDERAS: Den officiella LGF-skylten (triangel med en spets uppåt) monterad baktill på ett efterfordon.
    // Använd gärna en bild från Transportstyrelsens sida om fordonsskyltar.
    options: [
      { id: 'A', text: { sv: 'Fram på fordonet med en spets nedåt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'På sidan av fordonet, lodrät', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Typgodkänd och placerad baktill och utanpå fordonet med en av triangelns spetsar uppåt', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Inuti fordonet bakom bakrutan', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'LGF-skylten ska vara typgodkänd och placeras baktill och utanpå fordonet med en av triangelns spetsar uppåt.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_29',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken höjdplacering gäller för LGF-skylten?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordon_efterfordon_29.jfif',
    // BILD REKOMMENDERAS: Sidovy av ett efterfordon med LGF-skylt baktill. Två måttpilar från marken upp till
    // skyltens nedre kant: den lägsta placeringen (0,6 m) och den högsta placeringen (1,8 m).
    options: [
      { id: 'A', text: { sv: 'Lägst 0,6 m och högst 1,8 m, mätt från marken till LGF-skyltens nedre del', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Lägst 0,3 m och högst 1,0 m', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Lägst 1,0 m och högst 2,5 m', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det finns ingen bestämd höjd', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Lägsta höjdplacering är 0,6 m och högsta är 1,8 m, mätt från marken och till LGF-skyltens nedre del.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_30',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad rekommenderar Transportstyrelsen när det gäller körriktningsvisare på äldre efterfordon, som började användas före 1 januari 2005?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Att de inte ska ha körriktningsvisare', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att även äldre efterfordon utrustas med körriktningsvisare', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att de ska ha körriktningsvisare med rött ljus', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att de ska tas ur trafik', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Krav på två körriktningsvisare med orangegult ljus gäller efterfordon som börjar användas 1 januari 2005 eller senare. Transportstyrelsen rekommenderar att även äldre efterfordon utrustas med körriktningsvisare.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_efterfordon_31',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilka krav måste ett efterfordon som har bromsar uppfylla?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Kraven i trafikförordningens kapitel om körkort', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Inga särskilda krav', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Kraven enligt VVFS 2003:20', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Samma krav som dragfordonets bromsar', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Efterfordon som har bromsar måste uppfylla de krav som gäller enligt VVFS 2003:20.',
      en: '',
      ar: ''
    }
  },
 
  // ===== Odelbar last och fordon som överskrider vikt- och dimensionsbestämmelser =====
  {
    id: 'fordon_odelbar_1',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad krävs alltid för att bredd- eller längdbestämmelserna får överskridas på grund av lastens bredd eller längd?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Att lasten är lätt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att lasten är lastad på ett bromsat släp', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att transporten sker på natten', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att lasten är odelbar', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Överskridande av bredd- och längdbestämmelser som föranleds av lastens bredd eller längd kräver alltid att lasten är odelbar (13 kap. 4 § trafikförordningen).',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_2',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'En odelbar last gör att transporten blir 330 cm bred. Längden och vikten är inom gränserna. Vad gäller?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Det krävs alltid dispens från väghållaren', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Transporten kan utföras med stöd av Transportstyrelsens föreskrifter (TSFS 2023:36) utan särskild dispens', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Transporten är förbjuden', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det räcker att meddela polisen', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Om en transport endast medför breddöverskridande och bredden är högst 350 cm kan den utföras med stöd av TSFS 2023:36 om färd med bred odelbar last. Det är ett föreskrivet breddundantag som inte kräver särskild dispens.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_3',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'En odelbar last gör att transporten blir 380 cm bred. Vad gäller?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Det räcker med TSFS 2023:36', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Det krävs ingenting om transporten sker på dagen', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Det krävs alltid dispens från väghållare', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det räcker med en varningsskylt', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Om bredden är större än 350 cm krävs alltid dispens från väghållare.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_4',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'En transport är 280 cm bred och överskrider även viktbestämmelserna. Vad gäller?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Det krävs alltid dispens från väghållare', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Det räcker med TSFS 2023:36 eftersom bredden är under 350 cm', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Det krävs ingen dispens om lasten är odelbar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det räcker med att transporten är utmärkt', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Transporter som är bredare än 260 cm kräver alltid dispens från väghållare om de även medför längd- eller viktöverskridande.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_5',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'En odelbar last gör att ekipaget blir 28 meter långt. Bredden och vikten är inom gränserna. Vad gäller?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Det krävs alltid dispens från väghållare', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Det kan utföras med stöd av Transportstyrelsens föreskrifter (TSFS 2023:37) utan särskild dispens', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Transporten är förbjuden', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det krävs dispens från polisen', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Om en transport endast medför längdöverskridande och längden är högst 30,0 meter kan den utföras med stöd av TSFS 2023:37 om färd med lång odelbar last. Det kräver inte någon särskild dispens från väghållare.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_6',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'En transport med odelbar last blir 32 meter lång. Vad gäller?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Det räcker med TSFS 2023:37', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Det krävs alltid dispens från väghållare', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Det krävs ingenting om lasten är odelbar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det räcker med en breddmarkeringsskylt', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Om längden är större än 30,0 meter krävs alltid dispens från väghållare.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_7',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Transporten blir 26 meter lång och överskrider även bredden. Vad gäller?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Det räcker med TSFS 2023:37 eftersom längden är under 30 meter', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Det räcker med TSFS 2023:36', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Det krävs alltid dispens, eftersom transporter över 24,0 meter som även medför bredd- eller viktöverskridande kräver det', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det krävs ingen dispens om lasten är odelbar', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Om transporten är längre än 24,0 meter och även medför bredd- eller viktöverskridande krävs alltid dispens från väghållare.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_8',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad gäller om en transport medför att största tillåtna viktbestämmelser överskrids?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Det krävs alltid dispens från väghållare', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Det räcker med TSFS 2023:36', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Det räcker att lasten är odelbar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det krävs ingenting om transporten sker på natten', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Om en transport medför att största tillåtna viktbestämmelser överskrids krävs alltid dispens från väghållare.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_9',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad gäller för ett fordon som på grund av sin konstruktion är bredare, längre eller tyngre än vad som normalt är tillåtet, även utan last?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Det får köras som vanligt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Det kräver bara en varningsskylt', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Det får bara köras på natten', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det krävs alltid dispens från väghållare', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'För färd med fordon som på grund av sin konstruktion är bredare, längre eller tyngre än vad som normalt är tillåtet krävs alltid dispens från väghållare.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_10',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'När måste en dispens från väghållare vara beviljad?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Efter att transporten har genomförts', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Innan färden får ske. Man måste ha ansökt och medgivits dispens i förväg', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Under färdens gång', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det krävs ingen ansökan i förväg', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Om en transport kräver dispens från väghållare måste man ha ansökt och medgivits ett sådant innan färd får ske.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_11',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Din transport kräver dispens och ska utföras i mer än en kommun. Var ansöker du om dispens?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Hos polisen', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Hos kommunen där färden slutar', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Hos Trafikverket i den region där färden påbörjas', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Hos Transportstyrelsen i Stockholm', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Om en transport ska utföras i mer än en kommun ansöker man hos den statliga väghållningsmyndigheten (Trafikverket) i den region där färden påbörjas. Om transporten bara ska genomföras inom en kommun ansöker man hos den kommunen.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_12',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Var hittar du nedladdningsbara ritningar på längdmarkerings-, breddmarkerings- och varningsskyltar?',
      en: '',
      ar: ''
    },
    image:'/images/questions/manovrering/fordon_odelbar_12.jfif',
    // BILD REKOMMENDERAS: En breddmarkeringsskylt eller varningsskylt (till exempel "Bred last") monterad på framdelen
    // av ett fordon med bred odelbar last, till exempel en båt på en släpvagn.
    options: [
      { id: 'A', text: { sv: 'På Transportstyrelsens sida om fordonsskyltar', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Hos polisen', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Hos närmaste bilverkstad', en: '', ar: '' } },
      { id: 'D', text: { sv: 'I trafikförordningen', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'På Transportstyrelsens sida om fordonsskyltar finns nedladdningsbara ritningar på längd- och breddmarkeringsskyltar samt varningsskyltar med gällande typsnitt, textstorlekar och storleksförhållanden.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_13',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vem bestämmer om det ska finnas särskilda längd-, bredd- eller viktbegränsningar på en enskild väg?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Polisen', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Transportstyrelsen', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Kommunen', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Vägens ägare', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Trafikförordningens längd-, bredd- och viktbestämmelser gäller bara på vägar som inte är enskilda. På enskilda vägar är det vägens ägare som bestämmer. Är du osäker bör du kontakta vägens ägare innan du genomför transporten.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_odelbar_14',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad gäller för villkoren när en transport med överskridande mått eller vikt utförs, oavsett om det sker med stöd av föreskrifter eller dispens?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Bara några av villkoren behöver vara uppfyllda', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Samtliga villkor måste vara uppfyllda', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Villkoren gäller bara vid dispens', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Villkoren gäller bara vid föreskrifter', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Oavsett om färden sker med stöd av föreskrifter eller med stöd av dispens måste samtliga villkor vara uppfyllda.',
      en: '',
      ar: ''
    }
  },
   // ===== Om släpvagnskalkylatorn =====
  {
    id: 'fordon_kalkylator_1',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad är släpvagnskalkylatorn till för?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Att räkna ut vad en släpvagn kostar att försäkra', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att boka tid för besiktning av släpvagnen', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att hjälpa dig ta reda på om du får dra en specifik släpvagn eller husvagn med din bil', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att beräkna släpvagnens bränsleförbrukning', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Släpvagnskalkylatorn har utvecklats för att hjälpa dig att ta reda på om du får dra en specifik släpvagn eller husvagn med din bil.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_2',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilka uppgifter anger du i släpvagnskalkylatorn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Registreringsnumret på bilen, registreringsnumret på släpvagnen och vilken körkortsbehörighet du har', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bara registreringsnumret på släpvagnen', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Bilens färg och släpvagnens vikt', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ditt personnummer och bilens ägare', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'I tjänsten skriver du in registreringsnumret på din bil och registreringsnumret på släpvagnen samt klickar i vilken körkortsbehörighet du har.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_3',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Hur visas resultatet i släpvagnskalkylatorn?',
      en: '',
      ar: ''
    },
     image:'/images/questions/manovrering/fordon_kalkylator_3.jfif',
    // BILD REKOMMENDERAS: En enkel illustration av en bil med en släpvagn efter sig.
    // Bilen och släpvagnen är färgade (till exempel bilen grön och släpvagnen gul) som i kalkylatorns resultatbild.
    options: [
      { id: 'A', text: { sv: 'Som en lista med siffror och vikter', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Som ett brev som skickas hem', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Som ett ja eller nej i text', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Som en bild på ett dragfordon och en släpvagn där respektive fordon är grönt, gult eller rött', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Du får omedelbart resultat i form av en bild på ett dragfordon och en släpvagn. Respektive fordon är då grönt, gult eller rött.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_4',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad betyder det om ett fordon är grönt i släpvagnskalkylatorn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Att fordonet inte är registrerat', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att det är ok att köra fordonet', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att fordonet är miljöklassat', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att fordonet måste besiktigas', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Grönt innebär att det är ok att köra fordonet.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_5',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad betyder det om ett fordon är rött i släpvagnskalkylatorn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Att fordonet får köras med vissa begränsningar', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att fordonet är nyregistrerat', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att det inte är tillåtet att köra fordonet', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att fordonet saknar vinterdäck', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Rött innebär att det inte är tillåtet att köra fordonet.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_6',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad betyder det om ett fordon är gult i släpvagnskalkylatorn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Att det är ok att köra fordonet med vissa begränsningar, till exempel att släpet inte får lastas fullt ut', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att fordonet inte får köras alls', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att fordonet får köras utan några begränsningar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att fordonet måste ha en LGF-skylt', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Gult innebär att det är ok att köra fordonet med vissa begränsningar, till exempel att släpet inte får lastas fullt ut.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_7',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'I släpvagnskalkylatorn är bilen grön och släpvagnen gul. Vad innebär det?',
      en: '',
      ar: ''
    },
     image:'/images/questions/manovrering/fordon_kalkylator_7.jfif',
    // BILD REKOMMENDERAS: En bil i grönt som drar en släpvagn i gult, som i kalkylatorns resultatbild.
    options: [
      { id: 'A', text: { sv: 'Att kombinationen inte får köras', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att du måste byta bil', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att släpvagnen måste avregistreras', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att du får köra, men med vissa begränsningar för släpvagnen, till exempel att den inte får lastas fullt ut', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Grönt innebär att det är ok att köra fordonet och gult innebär att det är ok med vissa begränsningar, till exempel att släpet inte får lastas fullt ut.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_8',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Med vilka typer av fordon fungerar släpvagnskalkylatorn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Med alla fordon, även bussar och tunga lastbilar', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Med personbilar och lätta lastbilar', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Endast med motorcyklar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Endast med traktorer', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Släpvagnskalkylatorn fungerar med personbilar och lätta lastbilar.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_9',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilka kopplingstyper och släpvagnar kan släpvagnskalkylatorn inte ta hänsyn till?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Endast kulkoppling', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Alla kopplingstyper, den fungerar bara för obromsade släp', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Drag av typen bygel, krok, vändskiva och tapp, samt släpvagnar med ledad dragstång', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Alla släpvagnar som väger under 750 kg', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Tjänsten kan inte beräkna och ta hänsyn till fordon med drag (kopplingstyp) av typen bygel, krok, vändskiva och tapp eller släpvagnar med ledad dragstång.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_10',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Beskriver släpvagnskalkylatorn hur släpvagnen ska lastas med hänsyn till kopplingstyp, högsta kultryck och S-värde?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Nej, det beskrivs inte i tjänsten', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, det beskrivs i detalj', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, men bara för husvagnar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, men bara för obromsade släp', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Hur släpvagnen ska lastas med hänsyn till kopplingstyp, högsta kultryck och S-värde beskrivs inte i tjänsten.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_11',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Visar släpvagnskalkylatorn om bilen har en dragkrok?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, den visar alltid om bilen har dragkrok', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, men bara för nya bilar', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, men bara om du anger det själv', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Nej, den visar samma resultat både för bilar som har och som saknar dragkrok', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Släpvagnskalkylatorn visar samma resultat både för bilar som saknar eller har dragkrok, eftersom uppgift om drag inte presenteras.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_12',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Varför presenteras inte uppgift om bilen har drag i släpvagnskalkylatorn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'För att det är hemligt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'För att Transportstyrelsen inte alltid har uppgift om bilen har drag eller inte', en: '', ar: '' } },
      { id: 'C', text: { sv: 'För att alla bilar har drag', en: '', ar: '' } },
      { id: 'D', text: { sv: 'För att dragkrokar inte får registreras', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Transportstyrelsen har inte alltid uppgift om bilen har drag (kopplingstyp) eller inte, därför presenteras inte uppgift om drag finns.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_13',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Visar släpvagnskalkylatorn om en bil har manuell eller automatisk växellåda?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Ja, alltid', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, men bara för personbilar', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Nej, det visar den inte', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, men bara för lätta lastbilar', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Släpvagnskalkylatorn visar inte om en bil har manuell eller automatisk växellåda.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_14',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Betyder en grön bil eller ett grönt släp i släpvagnskalkylatorn att fordonen uppfyller alla övriga krav som finns på dem?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Nej, det betyder inte att fordonen uppfyller alla övriga krav och det fritar inte föraren från ansvar', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, grönt betyder att allt är godkänt', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, men bara om släpet är olastat', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ja, och då behöver du inte besikta fordonen', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: '"Grön bil" eller "grönt släp" betyder inte att fordonen uppfyller alla övriga krav som finns på fordonen, och det fritar inte föraren från ansvar.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_15',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vem ansvarar för att fordonen framförs på ett lagligt sätt, även när släpvagnskalkylatorn ger klartecken?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Transportstyrelsen', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Släpvagnens tillverkare', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Försäkringsbolaget', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Du själv som förare', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Tjänsten är ett hjälpmedel. Det är du som ansvarar för att du framför dina fordon på ett lagligt sätt, även när släpvagnskalkylatorn ger klartecken för fordonen.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_16',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vilken uppgift saknar Transportstyrelsen för släpvagnar som vid registrering omfattas av ett EG-typgodkännande?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Släpvagnens färg', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Uppgift om bromsanordning', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Släpvagnens registreringsnummer', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Släpvagnens ägare', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Transportstyrelsen saknar uppgift om bromsanordning för släpvagnar som vid registrering omfattas av ett EG-typgodkännande.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_17',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Det saknas uppgift om broms på en släpvagn med totalvikt upp till 750 kg. Hur räknar kalkylatorn då?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Den utgår från att släpet är bromsat', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Den vägrar räkna', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Den utgår från att släpet är obromsat', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Den utgår från att släpet har ledad dragstång', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'Om det saknas uppgift om broms på en släpvagn upp till 750 kg totalvikt görs beräkningen i kalkylatorn utifrån att släpet är obromsat.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_18',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Det saknas uppgift om broms på en släpvagn med totalvikt över 750 kg. Hur räknar kalkylatorn då?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Den utgår från att släpet är bromsat', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Den utgår från att släpet är obromsat', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Den vägrar räkna', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Den ger alltid rött resultat', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Om det saknas uppgift om broms på en släpvagn över 750 kg totalvikt görs beräkningen i kalkylatorn utifrån att släpet är bromsat.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_19',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'På vilka släpvagnar kan uppgifterna i släpvagnskalkylatorn bli felaktiga på grund av att uppgift om broms saknas?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'På alla släpvagnar som tillverkats efter 2000', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bara på husvagnar', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Bara på obromsade släpvagnar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'På bromsade släpvagnar med totalvikt upp till 750 kg och på tyngre släpvagnar av 1962 års modell eller tidigare', en: '', ar: '' } }
    ],
    correctAnswerId: 'D',
    explanation: {
      sv: 'Uppgifter kan bli felaktiga på bromsade släpvagnar med totalvikt upp till 750 kg och även på tyngre släpvagnar av 1962 års modell eller tidigare.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_20',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Vad kan du göra om du misstänker att uppgifterna i släpvagnskalkylatorn är felaktiga?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Strunta i det och lita på resultatet', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Kontakta Transportstyrelsens kundtjänst', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Kontakta polisen', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Ändra uppgifterna själv i kalkylatorn', en: '', ar: '' } }
    ],
    correctAnswerId: 'B',
    explanation: {
      sv: 'Om du misstänker felaktigheter kan du kontakta Transportstyrelsens kundtjänst.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_21',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Din släpvagn har totalvikt 600 kg och är bromsad, men uppgift om broms saknas i registret. Hur beräknar kalkylatorn och vad kan det innebära?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Den utgår från att släpet är bromsat, så resultatet är alltid rätt', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Den utgår från att släpet har ledad dragstång', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Den utgår från att släpet är obromsat, så uppgifterna kan bli felaktiga', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Den ger alltid rött resultat', en: '', ar: '' } }
    ],
    correctAnswerId: 'C',
    explanation: {
      sv: 'För en släpvagn upp till 750 kg totalvikt utan uppgift om broms räknar kalkylatorn med att släpet är obromsat. Det kan ge felaktiga uppgifter för bromsade släpvagnar.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'fordon_kalkylator_22',
    categoryId: 'Fordonskännedom och manövrering',
    questionText: {
      sv: 'Din släpvagn har totalvikt 1 200 kg och uppgift om broms saknas i registret. Hur räknar kalkylatorn?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Den utgår från att släpet är bromsat', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Den utgår från att släpet är obromsat', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Den ger inget resultat alls', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Den frågar dig om släpet har broms', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'För en släpvagn över 750 kg totalvikt utan uppgift om broms räknar kalkylatorn med att släpet är bromsat.',
      en: '',
      ar: ''
    }
  }
 
]