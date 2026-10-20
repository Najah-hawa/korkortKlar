import type { Question } from '@/types/question'

export const parkeringTillstandQuestions: Question[] = [
  {
    id: 'q_p1',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad är den maximala giltighetstiden för ett parkeringstillstånd för rörelsehindrade?',
      en: '',
      ar: ''
    },
    // Ingen bild behövs för denna fråga
    options: [
      { id: 'A', text: { sv: 'Högst 5 år', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Högst 2 år', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Högst 10 år', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det gäller livet ut utan förnyelse', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Ett parkeringstillstånd för rörelsehindrade gäller under en viss bestämd tid, dock under högst 5 år.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'q_p2',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Hur länge får du som mest parkera på en plats där parkering är förbjuden (eller tillåten under kortare tid än 3 timmar) om du har parkeringstillstånd för rörelsehindrade?',
      en: '',
      ar: ''
    },
    options: [
      { id: 'A', text: { sv: 'Högst 3 timmar', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Högst 1 timme', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Högst 24 timmar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Hur länge som helst', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Tillståndet ger rätt att parkera under högst 3 timmar där parkering är förbjuden eller tillåten under kortare tid än 3 timmar.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'q_p3',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Hur ska ett parkeringstillstånd för rörelsehindrade placeras i fordonet när det används?',
      en: '',
      ar: ''
    },
    options: [
      { id: 'A', text: { sv: 'I fordonets främre del så att det är väl synligt och läsbart utifrån', en: '', ar: '' } },
      { id: 'B', text: { sv: 'I handskfacket så länge du kan visa upp det vid en kontroll', en: '', ar: '' } },
      { id: 'C', text: { sv: 'I den bakre sidorutan på passagerarsidan', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det spelar ingen roll så länge det finns med i bilen', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Tillståndet ska alltid placeras i fordonets främre del (t.ex. i vindrutan) så att det enkelt kan läsas och kontrolleras utifrån.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'q_p4',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Är det alltid kostnadsfritt att parkera på handikapplatser om du har ett giltigt parkeringstillstånd?',
      en: '',
      ar: ''
    },
    options: [
      { id: 'A', text: { sv: 'Nej, grundregeln är att parkeringsavgift ska betalas, men det varierar mellan kommuner', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, parkeringstillståndet ger alltid fri parkering i hela landet', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, men endast om man parkerar kortare än 1 timme', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Nej, det är alltid dubbel avgift för reserverade platser', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Grundregeln är att parkeringsavgift ska betalas. Vissa kommuner erbjuder gratis parkering, men det varierar från kommun till kommun.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'q_p5',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vilken myndighet prövar ansökan och utfärdar parkeringstillstånd för rörelsehindrade?',
      en: '',
      ar: ''
    },
    options: [
      { id: 'A', text: { sv: 'Kommunen där sökanden är folkbokförd', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Polismyndigheten', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Trafikverket', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Transportstyrelsen', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Det är kommunerna som prövar ansökan och utfärdar parkeringstillstånd för de som är folkbokförda i kommunen.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'q_p6',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vilka krav ställs på en passagerare (som inte kör själv) för att få ett parkeringstillstånd?',
      en: '',
      ar: ''
    },
    options: [
      { id: 'A', text: { sv: 'Att personen regelbundet behöver förarens hjälp utanför fordonet och inte ensam kan invänta föraren', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att personen är över 65 år gammal', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att personen åker bil minst en gång om dagen', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det finns inga särskilda krav för passagerare', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'För en rörelsehindrad passagerare krävs det att personen regelbundet behöver hjälp utanför fordonet och inte ensam kan lämnas att invänta föraren vid målpunkten.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'q_p7',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Hur länge får du som mest parkera på en gågata med ett giltigt parkeringstillstånd för rörelsehindrade?',
      en: '',
      ar: ''
    },
    options: [
      { id: 'A', text: { sv: 'Högst 3 timmar', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Högst 15 minuter', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Högst 24 timmar', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det är helt förbjudet att parkera på gågata även med tillstånd', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Parkeringstillståndet ger rätt att parkera under högst 3 timmar på gågata.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'q_p8',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad gäller om du ska hämta en sjuk eller rörelsehindrad person som INTE har ett parkeringstillstånd?',
      en: '',
      ar: ''
    },
    options: [
      { id: 'A', text: { sv: 'Du får stanna och parkera trots parkeringsförbud om omständigheterna kräver det och försiktighet iakttas', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Du får under inga omständigheter bryta mot parkeringsförbudet', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Du måste alltid söka tillfälligt tillstånd hos polisen i förväg', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Du får parkera på reserverade handikapplatser i max 5 minuter', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Det finns ett allmänt undantag i trafikförordningen som tillåter att man stannar/parkerar vid parkeringsförbud för att hämta eller lämna sjuka eller rörelsehindrade om omständigheterna kräver det.',
      en: '',
      ar: ''
    }
  },
  {
    id: 'q_p9',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Kostar det något att ansöka om parkeringstillstånd hos kommunen?',
      en: '',
      ar: ''
    },
    options: [
      { id: 'A', text: { sv: 'Nej, kommunerna får inte ta ut någon avgift för att pröva ärendet', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Ja, det kostar alltid en fast statlig ansökningsavgift', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ja, men endast om ansökan avslås', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Det beror på hur länge tillståndet ska gälla', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Prövningen är helt avgiftsfri och kommunen får inte ta ut någon avgift för att pröva ansökan.',
      en: '',
      ar: ''
    }
  },
  {

id: 'q_p10',

categoryId: 'trafikregler',

questionText: {

sv: 'Vilka kan få ett parkeringstillstånd för rörelsehindrade?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Endast rörelsehindrade som själva kör motordrivna fordon', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Endast rörelsehindrade passagerare som blir skjutsade', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Alla personer över 70 år', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Både rörelsehindrade som själva kör och andra rörelsehindrade som regelbundet behöver förarens hjälp utanför fordonet', en: '', ar: '' } }

],

correctAnswerId: 'D',

explanation: {

sv: 'Tillståndet kan utfärdas både till rörelsehindrade som själva kör motordrivna fordon och till andra rörelsehindrade som regelbundet behöver hjälp av föraren utanför fordonet.',

en: '',

ar: ''

}

},

{

id: 'q_p11',

categoryId: 'trafikregler',

questionText: {

sv: 'Vilken typ av funktionsnedsättning krävs för att få ett parkeringstillstånd?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'En tillfällig skada som varar några veckor', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Vilken funktionsnedsättning som helst', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Endast att personen sitter i rullstol', en: '', ar: '' } },

{ id: 'D', text: { sv: 'En varaktig funktionsnedsättning som ger väsentliga svårigheter att förflytta sig på egen hand', en: '', ar: '' } }

],

correctAnswerId: 'D',

explanation: {

sv: 'Ett tillstånd får endast utfärdas till en rörelsehindrad som har en varaktig funktionsnedsättning som innebär väsentliga svårigheter att förflytta sig på egen hand.',

en: '',

ar: ''

}

},

{

id: 'q_p12',

categoryId: 'trafikregler',

questionText: {

sv: 'Var i landet gäller ett parkeringstillstånd för rörelsehindrade?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Endast i den kommun som utfärdade tillståndet', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Endast i storstäderna', en: '', ar: '' } },

{ id: 'C', text: { sv: 'I hela landet', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Endast i det län där personen bor', en: '', ar: '' } }

],

correctAnswerId: 'C',

explanation: {

sv: 'Parkeringstillståndet gäller i hela landet.',

en: '',

ar: ''

}

},

{

id: 'q_p13',

categoryId: 'trafikregler',

questionText: {

sv: 'Hur länge får du som mest parkera på en plats där parkering enligt en lokal trafikföreskrift är tillåten i minst tre men mindre än 24 timmar?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Högst 24 timmar', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Högst 3 timmar', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Högst 12 timmar', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Hur länge som helst', en: '', ar: '' } }

],

correctAnswerId: 'A',

explanation: {

sv: 'Tillståndet ger rätt att parkera under högst 24 timmar där parkering är tillåten under minst tre men mindre än 24 timmar.',

en: '',

ar: ''

}

},

{

id: 'q_p14',

categoryId: 'trafikregler',

questionText: {

sv: 'Vad gäller på en parkeringsplats som är reserverad för rörelsehindrade med parkeringstillstånd och där en längsta uppställningstid är föreskriven?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Uppställningstiden får överskridas om du har tillstånd', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Uppställningstiden gäller bara för fordon utan tillstånd', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Uppställningstiden gäller endast nattetid', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Den föreskrivna längsta uppställningstiden ska iakttas', en: '', ar: '' } }

],

correctAnswerId: 'D',

explanation: {

sv: 'På platser som reserverats för rörelsehindrade ska den längsta uppställningstid som föreskrivits för platsen iakttas.',

en: '',

ar: ''

}

},

{

id: 'q_p15',

categoryId: 'trafikregler',

questionText: {

sv: 'Får du parkera på en plats som är avsedd för ett visst ändamål eller fordonsslag om du har ett parkeringstillstånd för rörelsehindrade?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Ja, tillståndet gäller på alla platser', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Nej, tillståndet ger inte rätt att parkera på sådana platser', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Ja, men högst 3 timmar', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Ja, om du använder varningsblinkers', en: '', ar: '' } }

],

correctAnswerId: 'B',

explanation: {

sv: 'Parkeringstillståndet ger inte rätt att parkera på en plats som föreskrivits vara avsedd för ett visst ändamål eller fordonsslag.',

en: '',

ar: ''

}

},

{

id: 'q_p16',

categoryId: 'trafikregler',

questionText: {

sv: 'Vem beslutar om parkeringsavgiften på parkeringsplatser för personer med parkeringstillstånd för rörelsehindrade?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Transportstyrelsen', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Polismyndigheten', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Kommunfullmäktige i varje kommun', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Riksdagen', en: '', ar: '' } }

],

correctAnswerId: 'C',

explanation: {

sv: 'Parkeringsavgiften är en kommunal angelägenhet som kommunfullmäktige i varje kommun beslutar om.',

en: '',

ar: ''

}

},

{

id: 'q_p17',

categoryId: 'trafikregler',

questionText: {

sv: 'Vad bör du tänka på när du parkerar på en plats för personer med parkeringstillstånd i en kommun du inte känner till?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Att avgiftsreglerna varierar mellan kommuner, så du bör vara uppmärksam', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Att parkeringen alltid är gratis i hela landet', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Att du alltid måste betala dubbel avgift', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Att du måste anmäla parkeringen till kommunen i förväg', en: '', ar: '' } }

],

correctAnswerId: 'A',

explanation: {

sv: 'Några kommuner tar inte ut någon avgift, andra gör det. Det varierar från kommun till kommun, så var uppmärksam när du ska parkera.',

en: '',

ar: ''

}

},

{

id: 'q_p18',

categoryId: 'trafikregler',

questionText: {

sv: 'Vad bör enligt Transportstyrelsen bedömningen grundas på när det gäller en rörelsehindrad som inte själv kör och om personen regelbundet behöver förarens hjälp utanför fordonet?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Personens ålder', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Avståndet mellan hemmet och arbetsplatsen', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Hur ofta bilen används', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Sökandens förmåga att ensam invänta föraren vid målpunkten', en: '', ar: '' } }

],

correctAnswerId: 'D',

explanation: {

sv: 'Bedömningen bör grundas på sökandens förmåga att ensam invänta föraren vid målpunkten.',

en: '',

ar: ''

}

},

{

id: 'q_p19',

categoryId: 'trafikregler',

questionText: {

sv: 'Vad bör bedömningen av väsentliga svårigheter att förflytta sig på egen hand enligt Transportstyrelsen grundas på?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Endast den allvarligaste funktionsnedsättningen', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Samtliga funktionsnedsättningars påverkan på förmågan att förflytta sig, med eventuella hjälpmedel', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Sökandens inkomst och bostadsort', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Om sökanden har körkort', en: '', ar: '' } }

],

correctAnswerId: 'B',

explanation: {

sv: 'Bedömningen bör grundas på samtliga funktionsnedsättningars påverkan på förmågan att förflytta sig med eventuella hjälpmedel.',

en: '',

ar: ''

}

},

{

id: 'q_p20',

categoryId: 'trafikregler',

questionText: {

sv: 'Vilken bestämmelse i trafikförordningen ger ett allmänt undantag för den som transporterar sjuka eller rörelsehindrade och behöver stanna eller parkera trots förbud?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: '11 kap. 9 § punkten 7', en: '', ar: '' } },

{ id: 'B', text: { sv: '13 kap. 8 §', en: '', ar: '' } },

{ id: 'C', text: { sv: '3 kap. 1 §', en: '', ar: '' } },

{ id: 'D', text: { sv: '2 kap. 5 §', en: '', ar: '' } }

],

correctAnswerId: 'A',

explanation: {

sv: 'Undantaget finns i trafikförordningen 11 kap. 9 § punkten 7. Reglerna om själva parkeringstillståndet finns i 13 kap. 8 §.',

en: '',

ar: ''

}

},

{

id: 'q_p21',

categoryId: 'trafikregler',

questionText: {

sv: 'Under vilka villkor får du stanna eller parkera trots parkeringsförbud för att transportera sjuka eller rörelsehindrade utan parkeringstillstånd?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Alltid, utan några villkor', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Bara på dagtid', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Endast om omständigheterna kräver det och särskild försiktighet iakttas', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Endast om du i förväg har fått tillstånd av polisen', en: '', ar: '' } }

],

correctAnswerId: 'C',

explanation: {

sv: 'Undantaget gäller endast om omständigheterna kräver det och om särskild försiktighet iakttas.',

en: '',

ar: ''

}

},

{

id: 'q_p22',

categoryId: 'trafikregler',

questionText: {

sv: 'Du har hjälpt en rörelsehindrad passagerare ur bilen vid målpunkten med stöd av undantaget i trafikförordningen. Vad bör du göra därefter?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Lämna bilen kvar där du stannade', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Flytta bilen till en handikapplats', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Låta passageraren vakta bilen', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Parkera fordonet på en vanlig parkeringsplats', en: '', ar: '' } }

],

correctAnswerId: 'D',

explanation: {

sv: 'Undantaget gör att du kan stanna nära målpunkten och hjälpa passageraren ur bilen, varefter du parkerar på en vanlig parkeringsplats.',

en: '',

ar: ''

}

},

{

id: 'q_p23',

categoryId: 'trafikregler',

questionText: {

sv: 'Var finns reglerna om parkeringstillstånd för rörelsehindrade?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'I körkortslagen', en: '', ar: '' } },

{ id: 'B', text: { sv: 'I 13 kap. 8 § trafikförordningen och i Transportstyrelsens föreskrifter (TSFS 2009:73)', en: '', ar: '' } },

{ id: 'C', text: { sv: 'I brottsbalken', en: '', ar: '' } },

{ id: 'D', text: { sv: 'I plan- och bygglagen', en: '', ar: '' } }

],

correctAnswerId: 'B',

explanation: {

sv: 'Reglerna finns i 13 kap. 8 § trafikförordningen (1998:1276) och i Transportstyrelsens föreskrifter och allmänna råd (TSFS 2009:73).',

en: '',

ar: ''

}

},

{

id: 'q_p24',

categoryId: 'trafikregler',

questionText: {

sv: 'Vad grundar sig de svenska reglerna om parkeringstillstånd för rörelsehindrade på?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'EU:s körkortsdirektiv', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Nordiska rådets konvention', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Europeiska unionens råds rekommendation om parkeringstillstånd för passagerare med funktionsnedsättning (98/376/EG)', en: '', ar: '' } },

{ id: 'D', text: { sv: 'FN:s vägtrafikkonvention', en: '', ar: '' } }

],

correctAnswerId: 'C',

explanation: {

sv: 'Reglerna grundar sig på Europeiska unionens råds rekommendation av den 4 juni 1998 (98/376/EG) om parkeringstillstånd för passagerare med funktionsnedsättning.',

en: '',

ar: ''

}

},

{

id: 'q_p25',

categoryId: 'trafikregler',

questionText: {

sv: 'Vilken kommun prövar ansökan om sökanden inte är folkbokförd i Sverige?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Den kommun där han eller hon vistas', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Stockholms kommun', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Ansökan kan inte prövas', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Den kommun där fordonet är registrerat', en: '', ar: '' } }

],

correctAnswerId: 'A',

explanation: {

sv: 'Ansökan prövas av den kommun där sökanden är folkbokförd, eller om sökanden inte är folkbokförd i riket, där han eller hon vistas.',

en: '',

ar: ''

}

},

{

id: 'q_p26',

categoryId: 'trafikregler',

questionText: {

sv: 'Du har ett giltigt parkeringstillstånd för rörelsehindrade. På en gata är parkering tillåten i högst 1 timme. Hur länge får du som mest stå där?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Högst 1 timme, som för alla andra', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Högst 3 timmar', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Högst 24 timmar', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Högst 6 timmar', en: '', ar: '' } }

],

correctAnswerId: 'B',

explanation: {

sv: 'Där parkering är tillåten under kortare tid än tre timmar ger tillståndet rätt att parkera under högst tre timmar.',

en: '',

ar: ''

}

},

{

id: 'q_p27',

categoryId: 'trafikregler',

questionText: {

sv: 'Du har ett giltigt parkeringstillstånd för rörelsehindrade. På en plats är parkering tillåten i högst 6 timmar. Hur länge får du som mest stå där?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Högst 3 timmar', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Högst 6 timmar, som för alla andra', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Högst 12 timmar', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Högst 24 timmar', en: '', ar: '' } }

],

correctAnswerId: 'D',

explanation: {

sv: 'Där parkering är tillåten i minst tre men mindre än 24 timmar ger tillståndet rätt att parkera under högst 24 timmar.',

en: '',

ar: ''

}

},

{

id: 'q_p28',

categoryId: 'trafikregler',

questionText: {

sv: 'Vilket av följande påståenden om giltighet och användning av parkeringstillstånd för rörelsehindrade stämmer?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Tillståndet gäller bara i den kommun som utfärdade det', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Tillståndet gäller alltid livet ut', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Tillståndet gäller i hela landet under en viss tid, dock längst 5 år', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Tillståndet ger alltid gratis parkering', en: '', ar: '' } }

],

correctAnswerId: 'C',

explanation: {

sv: 'Ett parkeringstillstånd gäller under en viss tid, dock längst 5 år, och gäller i hela landet.',

en: '',

ar: ''

}

},

{

id: 'q_p29',

categoryId: 'trafikregler',

questionText: {

sv: 'En rörelsehindrad passagerare kan utan problem vänta ensam vid målpunkten medan föraren parkerar. Uppfyller personen då normalt kravet för att få ett parkeringstillstånd som passagerare?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Nej, bedömningen grundas på förmågan att ensam invänta föraren, och här behövs inte förarens hjälp utanför fordonet', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Ja, alla rörelsehindrade passagerare får tillstånd', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Ja, om personen är över 65 år', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Ja, om föraren betalar en särskild avgift', en: '', ar: '' } }

],

correctAnswerId: 'A',

explanation: {

sv: 'För passagerare bör bedömningen grundas på förmågan att ensam invänta föraren vid målpunkten. Kan personen det, behöver hon eller han normalt inte förarens hjälp utanför fordonet.',

en: '',

ar: ''

}

},

{

id: 'q_p30',

categoryId: 'trafikregler',

questionText: {

sv: 'Vilket av följande får du göra med ett giltigt parkeringstillstånd för rörelsehindrade?',

en: '',

ar: ''

},

options: [

{ id: 'A', text: { sv: 'Parkera på en lastplats', en: '', ar: '' } },

{ id: 'B', text: { sv: 'Parkera på en taxiplats', en: '', ar: '' } },

{ id: 'C', text: { sv: 'Parkera obegränsat på gågata', en: '', ar: '' } },

{ id: 'D', text: { sv: 'Parkera högst 3 timmar på gågata', en: '', ar: '' } }

],

correctAnswerId: 'D',

explanation: {

sv: 'Tillståndet ger rätt att parkera under högst tre timmar på gågata, men inte på platser avsedda för ett visst ändamål eller fordonsslag.',

en: '',

ar: ''

}

}
]