import type { Question } from '@/types/question'

export const trafikreglerQuestions: Question[] = [
  {
    id: 'q_a1',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vilken betydelse har detta varningsmärke?',
      en: 'What is the meaning of this warning sign?',
      ar: 'ما هي دلالة هذه الشاخصة التحذيرية؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a01.-varning-for-farlig-kurva/a1-1.png',
    options: [
      { id: 'A', text: { sv: 'Märket anger en farlig kurva samt kurvans riktning.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Märket anger en obevakad järnvägskorsning.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Märket anger att mötande trafik har företräde.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Märket anger att det är förbud mot att svänga.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för en farlig kurva. Symbolen visar också åt vilket håll kurvan svänger.',
      en: '',
      ar: ''
    },
    signRefId: 'a1'
  },
  {
    id: 'q_a2',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad varnar detta märke för?',
      en: 'What does this sign warn for?',
      ar: 'ماذا تحذر هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a02.-varning-for-flera-farliga-kurvor/a2-1.png',
    options: [
      { id: 'A', text: { sv: 'Flera farliga kurvor efter varandra, där den första svänger åt höger.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Halka på grund av snö och is.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Vägarbete med avstängt körfält.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att en cirkulationsplats närmar sig.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket anger flera farliga kurvor efter varandra, och den första kurvans riktning visas av symbolen.',
      en: '',
      ar: ''
    },
    signRefId: 'a2'
  },
  {
    id: 'q_a4',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad informerar detta varningsmärke om?',
      en: 'What does this warning sign inform about?',
      ar: 'عما توفره هذه الشاخصة التحذيرية من معلومات؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a04.-varning-for-stigning/a4-1.png',
    options: [
      { id: 'A', text: { sv: 'Kraftig stigning på vägen.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Hög risk för stenskott.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Vägbula eller farthinder.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att vägen smalnar av.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket anger kraftig stigning. Det kan krävas att du växlar ner i god tid för att behålla motorns kraft.',
      en: '',
      ar: ''
    },
    signRefId: 'a4'
  },
  {
    id: 'q_a5',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad innebär detta märke?',
      en: 'What does this sign mean?',
      ar: 'ماذا تعني هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a05.-varning-for-avsmalnande-vag/a5-1.png',
    options: [
      { id: 'A', text: { sv: 'Varning för avsmalnande väg.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Varning för mötande trafik i samma körfält.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Vägen övergår till enkelriktad trafik.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Förbud mot att köra in.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för att vägen smalnar av från någon eller båda sidorna. Anpassa hastigheten och var beredd på möte.',
      en: '',
      ar: ''
    },
    signRefId: 'a5'
  },
  {
    id: 'q_a6',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vilken typ av bro varnar detta märke för?',
      en: 'What kind of bridge does this sign warn for?',
      ar: 'ما نوع الجسر الذي تحذر منه هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a06.-varning-for-bro/a6-1.png',
    options: [
      { id: 'A', text: { sv: 'Öppningsbar bro.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Enkelriktad bro med begränsad bärighet.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Hängbro utan sidoräcken.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Pontonbro med hastighetsbegränsning.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för en öppningsbar bro. Stanna alltid i god tid om ljussignalen visar rött eller om bommarna fälls ner.',
      en: '',
      ar: ''
    },
    signRefId: 'a6'
  },
  {
    id: 'q_a7',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad innebär varningsmärke A7?',
      en: 'What does warning sign A7 mean?',
      ar: 'ماذا تعني الشاخصة التحذيرية A7؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a07.-varning-for-kaj/a7-1.png',
    options: [
      { id: 'A', text: { sv: 'Vägen slutar mot vatten eller kaj.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Färjeläge med fast tidtabell.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Plats för bad och vattensport.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Varning för översvämning på vägen.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket anger en plats där vägen slutar mot vatten, kaj eller strandlinje. Var extra försiktig i mörker eller halka.',
      en: '',
      ar: ''
    },
    signRefId: 'a7'
  },
  {
    id: 'q_a8',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad betyder detta vägmärke?',
      en: 'What does this road sign mean?',
      ar: 'ماذا تعني هذه الشاخصة المرورية؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a08.-varning-for-ojamn-vag/a8-1.png',
    options: [
      { id: 'A', text: { sv: 'Varning för ojämn väg.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Varning för stenskott.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Varning för slirig väg.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Vägarbete pågår.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för ojämnheter eller skador i vägbanan som kan skada fordonet om du håller för hög hastighet.',
      en: '',
      ar: ''
    },
    signRefId: 'a8'
  },
  {
    id: 'q_a9',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad anger detta märke?',
      en: 'What does this sign indicate?',
      ar: 'ماذا تشير هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a09.-varning-for-farthinder/a9-1.png',
    options: [
      { id: 'A', text: { sv: 'Varning för farthinder (upphöjning eller grop).', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Varning för vägkorsning.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Varning för brant stigning.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Slut på allmän väg.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för ett anlagt farthinder. Sänk hastigheten för att undvika onödiga stötar och skador på bilen.',
      en: '',
      ar: ''
    },
    signRefId: 'a9'
  },
  {
    id: 'q_a10',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vilken risk indikerar detta varningsmärke?',
      en: 'What risk does this warning sign indicate?',
      ar: 'ما هي الخطر الذي تشير إليه هذه الشاخصة التحذيرية؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a10.-varning-for-slirig-vag/a10-1.png',
    options: [
      { id: 'A', text: { sv: 'Att vägen kan vara slirig (halka).', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att det är stark sidvind på platsen.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Risk för stenras från sluttningar.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att vägen är avstängd för lastbilar.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för att vägytan har sämre väggrepp. Undvik häftiga rattrörelser och kraftiga inbromsningar.',
      en: '',
      ar: ''
    },
    signRefId: 'a10'
  },
  {
    id: 'q_a11',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad varnar märke A11 för?',
      en: 'What does sign A11 warn for?',
      ar: 'ماذا تحذر الشاخصة A11؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a11.-varning-for-stenskott/a11-1.png',
    options: [
      { id: 'A', text: { sv: 'Risk för stenskott.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Risk för rasande stenblock från berg.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Flis på vägen efter asfaltering.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Vägkant som saknar beläggning.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för stenskott. Håll extra avstånd till framförvarande fordon för att skydda vindrutan.',
      en: '',
      ar: ''
    },
    signRefId: 'a11'
  },
  {
    id: 'q_a12',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad innebär detta märke?',
      en: 'What does this sign mean?',
      ar: 'ماذا تعني هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a12.-varning-for-stenras/a12-1.png',
    options: [
      { id: 'A', text: { sv: 'Risk för stenras och stenar på vägen.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Stenbrott i närheten av vägen.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ojämn väg med löst grus.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Förbud mot terrängkörning.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för stenras från intilliggande branter. Var uppmärksam på hinder på körbanan.',
      en: '',
      ar: ''
    },
    signRefId: 'a12'
  },
  {
    id: 'q_a13',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vilken skyldighet har du när du närmar dig detta varningsmärke?',
      en: 'What obligation do you have when approaching this warning sign?',
      ar: 'ما هي التزاماتك عند الاقتراب من هذه الشاخصة التحذيرية؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a13.-varning-for-overgangsstalle/a13-1.png',
    options: [
      { id: 'A', text: { sv: 'Anpassa hastigheten så att du kan lämna företräde åt gående på övergångsstället.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Alltid stanna helt innan övergångsstället.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Köra om eventuella fordon som stannat före övergångsstället.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Väja endast om gående befinner sig mitt på gatan.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för ett övergångsställe. Du är skyldig att lämna företräde åt gående som har gått ut på eller just ska gå ut på övergångsstället.',
      en: '',
      ar: ''
    },
    signRefId: 'a13'
  },
  {
    id: 'q_a14',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad anger varningsmärke A14?',
      en: 'What does warning sign A14 indicate?',
      ar: 'ماذا تشير الشاخصة التحذيرية A14؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a14.-varning-for-gaende/a14.png',
    options: [
      { id: 'A', text: { sv: 'Vägsträcka där gående ofta korsar eller uppehåller sig på vägen.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Gågata där motortrafik är förbjuden.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Obligatorisk gångbana.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Varning för lekande barn.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för att gående ofta rör sig på eller i anslutning till vägen. Håll extra uppsikt och lämna gott om utrymme.',
      en: '',
      ar: ''
    },
    signRefId: 'a14'
  },
  {
    id: 'q_a15',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Var är det vanligast att stöta på detta varningsmärke?',
      en: 'Where is it most common to encounter this warning sign?',
      ar: 'أين هو الأكثر شيوعاً مواجهة هذه الشاخصة التحذيرية؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a15.-varning-for-barn/a15-1.png',
    options: [
      { id: 'A', text: { sv: 'I närheten av skolor och förskolor.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Vid motorvägens påfarter.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'I industriområden med tung trafik.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Vid obevakade järnvägsövergångar.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för barn på eller vid vägen (t.ex. vid skolor). Barn kan handla impulsivt, så sänk hastigheten och var extra beredd.',
      en: '',
      ar: ''
    },
    signRefId: 'a15'
  },
  {
    id: 'q_a16',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad betyder detta vägmärke?',
      en: 'What does this road sign mean?',
      ar: 'ماذا تعني هذه الشاخصة المرورية؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a16.-varning-for-cyklande-och-mopedforare/a16-1.png',
    options: [
      { id: 'A', text: { sv: 'Varning för cyklande och mopedförare.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Förbud mot cykeltrafik.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Påbjuden cykelbana.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Rekommenderad hastighet för mopeder.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för att cyklister och mopedister ofta korsar eller kör ut på vägen.',
      en: '',
      ar: ''
    },
    signRefId: 'a16'
  },
  {
    id: 'q_a17',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad varnar varningsmärke A17 för?',
      en: 'What does warning sign A17 warn for?',
      ar: 'ماذا تحذر الشاخصة التحذيرية A17؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a17.-varning-for-skidakare/a17-1.png',
    options: [
      { id: 'A', text: { sv: 'Skidåkare som korsar vägen.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Snöskoter- och terrängkörning.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Vinterväglag med risk för snöstorm.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Skidlift som passerar över vägen.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för att skidåkare ofta korsar vägen (vanligt i fjäll- och vintersportområden).',
      en: '',
      ar: ''
    },
    signRefId: 'a17'
  },
  {
    id: 'q_a19',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vilken särskild risk varnar detta märke för?',
      en: 'What special risk does this sign warn for?',
      ar: 'ما هو الخطر الخاص الذي تحذر منه هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a19.-varning-for-djur/a19-1.png',
    options: [
      { id: 'A', text: { sv: 'Djur (t.ex. älg eller rådjur) på eller vid vägen.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Närliggande djurpark eller ängsmark.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Långsamtgående jordbruksmaskiner.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Förbud mot husdjur i fordon.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för viltolyckor. Var extra uppmärksam vid skymning och gryning då djur är som mest aktiva.',
      en: '',
      ar: ''
    },
    signRefId: 'a19'
  },
  {
    id: 'q_a20',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad innebär varningsmärke A20?',
      en: 'What does warning sign A20 mean?',
      ar: 'ماذا تعني الشاخصة التحذيرية A20؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a20.-varning-for-vagarbete/a20-1.png',
    options: [
      { id: 'A', text: { sv: 'Vägarbete pågår.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Vägen är permanent stängd för byggnation.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Slut på tättbebyggt område.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Olycksplats längre fram.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för vägarbete. Sänk hastigheten för att skydda arbetare och andra trafikanter i området.',
      en: '',
      ar: ''
    },
    signRefId: 'a20'
  },
  {
    id: 'q_a21',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad anger detta märke?',
      en: 'What does this sign indicate?',
      ar: 'ماذا تشير هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a21.-slut-pa-stracka-med-vagarbete/a21-1.png',
    options: [
      { id: 'A', text: { sv: 'Slut på sträcka med vägarbete.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Början på en ny hastighetszon.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Varning för kommande vägarbete.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Huvudled upphör.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket visar att vägarbetssträckan är slut och att normala trafikförhållanden gäller igen.',
      en: '',
      ar: ''
    },
    signRefId: 'a21'
  },
  {
    id: 'q_a22',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad varnar detta märke för?',
      en: 'What does this sign warn for?',
      ar: 'ماذا تحذر هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a22.-varning-for-flerfargssignal/a22-1.png',
    options: [
      { id: 'A', text: { sv: 'Flerfärgssignal (trafikljus) längre fram.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Varningsblinker vid järnväg.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Vägtull med elektronisk betalning.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Räddningstjänstens utryckningsplats.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för trafiksignaler som kan komma oväntat (till exempel efter en skymd kurva på landsväg).',
      en: '',
      ar: ''
    },
    signRefId: 'a22'
  },
  {
    id: 'q_a23',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad innebär varningsmärke A23?',
      en: 'What does warning sign A23 mean?',
      ar: 'ماذا تعني الشاخصة التحذيرية A23؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a23.-varning-for-lagt-flygande-flygplan/a23-1.png',
    options: [
      { id: 'A', text: { sv: 'Lågt flygande flygplan eller helikoptrar.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Närliggande fallskärmshopparzon.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Militärt övningsområde för drönare.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Hinderbana för radiostyrda flygplan.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för lågt flygande flygplan nära flygplatser. Låt dig inte överraskas av plötsliga motorljud.',
      en: '',
      ar: ''
    },
    signRefId: 'a23'
  },
  {
    id: 'q_a25',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad betyder detta vägmärke?',
      en: 'What does this road sign mean?',
      ar: 'ماذا تعني هذه الشاخصة المرورية؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a25.-varning-for-motande-trafik/a25-1.png',
    options: [
      { id: 'A', text: { sv: 'Mötande trafik (enkelriktad väg övergår i tvåvägstrafik).', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Körbanan smalnar av från båda håll.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Obligatorisk körbana för mötande.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Korsning med företräde för mötande.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för att en enkelriktad väg eller mötesfri väg övergår i vanlig tvåvägstrafik.',
      en: '',
      ar: ''
    },
    signRefId: 'a25'
  },
  {
    id: 'q_a26',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad bör du tänka på när du kör in i en tunnel efter att ha sett detta märke?',
      en: 'What should you keep in mind when entering a tunnel after seeing this sign?',
      ar: 'ما الذي يجب أن تضعه في اعتبارك عند دخول نفق بعد رؤية هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a26.-varning-for-tunnel/a26-1.png',
    options: [
      { id: 'A', text: { sv: 'Slå på halvljus i god tid och observera att det är förbud mot att vända eller backa.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Släcka alla ljus för att spara bilens batteri.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Öka hastigheten för att inte hindra bakomvarande.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Byta till helljus för att se bättre i mörkret.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för tunnel. I tunnlar gäller särskilda regler som t.ex. påbjudet halvljus samt förbud mot vändning, backning och parkering.',
      en: '',
      ar: ''
    },
    signRefId: 'a26'
  },
  {
    id: 'q_a27',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad varnar varningsmärke A27 för?',
      en: 'What does warning sign A27 warn for?',
      ar: 'ماذا تحذر الشاخصة التحذيرية A27؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a27.-varning-for-svag-vagkant-eller-hog-korbanekant/a27-1.png',
    options: [
      { id: 'A', text: { sv: 'Svag vägkant eller hög körbanekant.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Vägen slutar abrupt utan skyddsräcke.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Förbud mot att parkera på vägrenen.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Löst grus på hela vägbanan.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för att vägkanten kan vara svag eller att det är en hög kant ut till vägrenen. Undvik att köra för långt ut på kanten.',
      en: '',
      ar: ''
    },
    signRefId: 'a27'
  },
  {
    id: 'q_a28',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vilken regel gäller som huvudregel i en vägkorsning om ingen annan skyltning finns (och detta märke sitter uppsatt)?',
      en: 'What rule applies as a main rule in an intersection if no other signage exists?',
      ar: 'ما هي القاعدة التي تسري كقاعدة عامة في تقاطع طرق إذا لم تكن هناك إشارات أخرى؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a28.-varning-for-vagkorsning/a28-1.png',
    options: [
      { id: 'A', text: { sv: 'Högerregeln.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Företräde för trafik på genomgående led.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Stopplikt för alla inkommande fordon.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Cirkulationsdrift.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för vägkorsning där högerregeln tillämpas om inget annat anges på platsen.',
      en: '',
      ar: ''
    },
    signRefId: 'a28'
  },
  {
    id: 'q_a29',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad innebär varningsmärke A29?',
      en: 'What does warning sign A29 mean?',
      ar: 'ماذا تعني الشاخصة التحذيرية A29؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a29.-varning-for-vagkorsning-dar-trafikanter-pa-anslutande-vag/a29-1.png',
    options: [
      { id: 'A', text: { sv: 'Vägkorsning där anslutande trafik har väjningsplikt eller stopplikt.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Du har väjningsplikt mot alla korsande fordon.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att du kör på en mindre enskild väg.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att korsningen har fungerande trafiksignaler.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket anger att du kör på en väg där anslutande trafik från sidorna har väjningsplikt eller stopplikt.',
      en: '',
      ar: ''
    },
    signRefId: 'a29'
  },
  {
    id: 'q_a30',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad betyder detta vägmärke?',
      en: 'What does this road sign mean?',
      ar: 'ماذا تعني هذه الشاخصة المرورية؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a30.-varning-for-cirkulationsplats/a30-1.png',
    options: [
      { id: 'A', text: { sv: 'Varning för cirkulationsplats (rondell).', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Vändzon för tunga lastbilar.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Obligatorisk körriktning i korsning.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Trafikljusreglerad korsning.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för en kommande cirkulationsplats. Kom ihåg att du har väjningsplikt mot fordon som redan är inne i rondellen.',
      en: '',
      ar: ''
    },
    signRefId: 'a30'
  },
  {
    id: 'q_a31',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vilka fordon avses vanligtvis med märket för långsamtgående fordon (A31)?',
      en: 'Which vehicles are usually referred to by the slow-moving vehicle sign (A31)?',
      ar: 'ما هي المركبات التي تشير إليها عادة شاخصة المركبات بطيئة الحركة (A31)؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a31.-varning-for-langsamtgaende-fordon/a31.png',
    options: [
      { id: 'A', text: { sv: 'Traktorer, A-traktorer och liknande fordon.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Cyklister och elsparkcyklar.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Tunga lastbilar i uppförsbackar.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Utryckningsfordon under utryckning.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för att långsamtgående fordon som traktorer eller A-traktorer ofta korsar eller kör ut på vägen.',
      en: '',
      ar: ''
    },
    signRefId: 'a31'
  },
  {
    id: 'q_a32',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad varnar detta märke för?',
      en: 'What does this sign warn for?',
      ar: 'ماذا تحذر هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a32.-varning-for-fordon-med-forspant-dragdjur/a32-1.png',
    options: [
      { id: 'A', text: { sv: 'Fordon med förspänt dragdjur (t.ex. häst och vagn).', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Kreatur på bete i skogen.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Ridskola och inhägnade hästar.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Viltstråk med stora hjortdjur.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för fordon med förspända dragdjur. Var försiktig vid omkörning och håll säkert avstånd.',
      en: '',
      ar: ''
    },
    signRefId: 'a32'
  },
  {
    id: 'q_a33',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad anger varningsmärke A33?',
      en: 'What does warning sign A33 indicate?',
      ar: 'ماذا تشير الشاخصة التحذيرية A33؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a33.-varning-for-terrangskotertrafik/a33-1.png',
    options: [
      { id: 'A', text: { sv: 'Terrängskotertrafik (t.ex. snöskotrar) som korsar vägen.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Förbud mot terrängkörning med fyrhjuling.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Vinterväg med tillåten dubbdäckskörning.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Skidspår längs med hela vägrenen.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för platser där terrängskotrar ofta korsar eller färdas i anslutning till vägen.',
      en: '',
      ar: ''
    },
    signRefId: 'a33'
  },
  {
    id: 'q_a34',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad varnar detta märke för?',
      en: 'What does this sign warn for?',
      ar: 'ماذا تحذر هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a34.-varning-for-ko/a34-1.png',
    options: [
      { id: 'A', text: { sv: 'Risk för köbildning.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Kreatursbete nära körbanan.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Tullstation med betalningsköer.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Område med parkeringsförbud.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för sträckor där det ofta uppstår köer (t.ex. vid rusningstrafik eller trafikljus längre fram).',
      en: '',
      ar: ''
    },
    signRefId: 'a34'
  },
  {
    id: 'q_a35',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad anger detta varningsmärke?',
      en: 'What does this warning sign indicate?',
      ar: 'ماذا تشير هذه الشاخصة التحذيرية؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a35.-varning-for-jarnvagskorsning-med-bommar/a35-1.png',
    options: [
      { id: 'A', text: { sv: 'Järnvägskorsning med bommar.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Järnvägskorsning som saknar bommar.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Spårväg i tättbebyggt område.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Sista avståndsmarkeringen till en station.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för en järnvägskorsning som är utrustad med bommar.',
      en: '',
      ar: ''
    },
    signRefId: 'a35'
  },
  {
    id: 'q_a36',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad innebär märke A36?',
      en: 'What does sign A36 mean?',
      ar: 'ماذا تعني الشاخصة A36؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a36.-varning-for-jarnvagskorsning-utan-bommar/a36-1.png',
    options: [
      { id: 'A', text: { sv: 'Järnvägskorsning utan bommar.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Bevakad järnvägskorsning med ljussignal.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Nedlagd järnväg som gjorts om till cykelbana.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Industrispår som endast används nattetid.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för järnvägskorsning som saknar bommar. Var extra försiktig och titta/lyssna noga efter tåg.',
      en: '',
      ar: ''
    },
    signRefId: 'a36'
  },
  {
    id: 'q_a37',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad varnar detta märke för?',
      en: 'What does this sign warn for?',
      ar: 'ماذا تحذر هذه الشاخصة؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a37.-varning-for-korsning-med-sparvag-utan-bommar/a37-1.png',
    options: [
      { id: 'A', text: { sv: 'Korsning med spårväg utan bommar.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Tågspår för godståg i hamnområde.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Tunnelbana som korsar landsväg i plan.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Korsande spårbunden bergbana.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för korsning med spårväg som saknar bommar. Kom ihåg att spårvagnar har lång bromssträcka.',
      en: '',
      ar: ''
    },
    signRefId: 'a37'
  },
  {
    id: 'q_a38',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad anger dessa avståndsmarkeringar (A38) när de sitter under ett varningsmärke för järnväg?',
      en: 'What do these distance markers (A38) indicate when placed under a railway warning sign?',
      ar: 'ماذا تشير علامات المسافة هذه (A38) عند وضعها تحت شاخصة تحذير السكك الحديدية؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a38.-avstand-till-plankorsning/a38-1.png',
    options: [
      { id: 'A', text: { sv: 'Avståndet till en plankorsning i tredjedelar (tre streck = längst bort, ett streck = närmast).', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Antal spår som korsar vägen.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Högsta tillåtna hastighet över spåret.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Antal kilometer till närmaste tågstation.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Markeringarna delar upp avståndet till plankorsningen i tre delar. Tre streck sätts längst bort, två i mitten och ett streck närmast korsningen.',
      en: '',
      ar: ''
    },
    signRefId: 'a38'
  },
  {
    id: 'q_a39',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Var är kryssmärket (A39) uppsatt?',
      en: 'Where is the cross mark (A39) placed?',
      ar: 'أين يتم وضع علامة التقاطع (A39)؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a39.-kryssmarke/a39-1.png',
    options: [
      { id: 'A', text: { sv: 'Omedelbart före en järnvägs- eller spårvägskorsning.', en: '', ar: '' } },
      { id: 'B', text: { sv: '500 meter före varje järnvägsövergång.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Endast vid obemannade hamnspår.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Vid början av en motorvägssträcka.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Kryssmärket sitter uppsatt omedelbart före järnvägs- eller spårvägskorsningen. Ett enkelt kryss anger ett spår, ett dubbelt kryss anger flera spår.',
      en: '',
      ar: ''
    },
    signRefId: 'a39'
  },
  {
    id: 'q_a40',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad innebär varningsmärke A40 ("Varning för annan fara")?',
      en: 'What does warning sign A40 ("Warning for other danger") mean?',
      ar: 'ماذا تعني الشاخصة التحذيرية A40 (تحذير من خطر آخر)؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a40.-varning-for-annan-fara/a40-1.png',
    options: [
      { id: 'A', text: { sv: 'Varning för en fara som anges närmare på en tilläggstavla.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att du omedelbart måste stanna fordonet.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att all trafik är förbjuden på sträckan.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Att poliskontroll äger rum längre fram.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar för en specifik fara som inte har ett eget standardsymbolmärke. Farans art förklaras alltid på en tilläggstavla under märket.',
      en: '',
      ar: ''
    },
    signRefId: 'a40'
  },
  {
    id: 'q_a41',
    categoryId: 'trafikregler',
    questionText: {
      sv: 'Vad varnar detta tillfälliga märke (A41) för?',
      en: 'What does this temporary sign (A41) warn for?',
      ar: 'ماذا تحذر هذه الشاخصة المؤقتة (A41)؟'
    },
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a41.-varning-for-olycka/a41.png',
    options: [
      { id: 'A', text: { sv: 'Att en trafikolycka har inträffat längre fram på vägen.', en: '', ar: '' } },
      { id: 'B', text: { sv: 'Att en bilinspektion äger rum.', en: '', ar: '' } },
      { id: 'C', text: { sv: 'Att en permanent bilskrot ligger i närheten.', en: '', ar: '' } },
      { id: 'D', text: { sv: 'Risk för slirig väg på grund av oljeutsläpp.', en: '', ar: '' } }
    ],
    correctAnswerId: 'A',
    explanation: {
      sv: 'Märket varnar tillfälligt för en inträffad trafikolycka längre fram. Sänk hastigheten och var beredd på räddningspersonal.',
      en: '',
      ar: ''
    },
    signRefId: 'a41'
  },
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