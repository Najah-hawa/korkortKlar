export interface RoadSign {
  id: string
  title: string
  categoryCode: string
  categoryName: string
  code: string
  image: string
  description: string
  ruleTips?: string
}

export const roadSignsData: RoadSign[] = [
  // A. Varningsmärken
  {
    id: 'a1',
    title: ' Varning för farlig kurva',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a01.-varning-for-farlig-kurva/a1-1.png',
    description: 'Märket anger en farlig kurva samt kurvans riktning.',
    ruleTips: 'Sänk hastigheten i god tid före kurvan, anpassa placeringen i körfältet och undvik kraftiga inbromsningar eller omkörningar i kurvan.'
  },{
    id: 'a2',
    title: 'Varning för flera farliga kurvor',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a02.-varning-for-flera-farliga-kurvor/a2-1.png',
    description: 'Märket anger flera farliga kurvor samt den första farliga kurvans riktning.',
    ruleTips: 'Symbolen visar riktningen på den första kurvan. Sänk hastigheten i god tid och håll den låg genom hela kurvpartiet. Om sträckan är längre än 1 km kompletteras märket med en tilläggstavla för avstånd.'
  },

  // B. Väjningspliktsmärken
  {
    id: 'b1',
    title: 'Väjningsplikt',
    categoryCode: 'B',
    categoryName: 'B. Väjningspliktsmärken',
    code: 'B1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b01.-vajningsplikt/b1-1.png',
    description: 'Märket anger att förare har väjningsplikt mot fordon på den korsande eller anslutande vägen.',
    ruleTips: 'Du måste lämna företräde åt trafik på den korsande vägen.'
  },

  // C. Förbudsmärken
  {
    id: 'c1',
    title: 'Förbud mot infart',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c01.-forbud-mot-infart-med-fordon/c1-1.png',
    description: 'Märket anger förbud mot infart med alla typer av fordon.',
    ruleTips: 'Det är helt förbjudet att köra in här från detta håll.'
  },

  // D. Påbudsmärken
  {
    id: 'd1',
    title: 'Påbud - kör rakt fram',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D1a',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d01.-pabjuden-korriktning/d1-1.png',
    description: 'Märket anger att förare endast får köra i pilens riktning.',
    ruleTips: 'Gäller före korsningen där märket är placerat.'
  },

  // E. Anvisningsmärken
  {
    id: 'e1',
    title: 'Övergångsställe',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e01.-motorvag/e-11.png',
    description: 'Märket anger ett övergångsställe där gående har företräde.',
    ruleTips: 'Du har väjningsplikt mot gående som gått ut på eller just ska gå ut på övergångsstället.'
  },

  // F. Lokaliseringsmärken för vägvisning
  {
    id: 'f1',
    title: 'Vägvisning för körfält',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f01.-orienteringstavla/f1-1.png',
    description: 'Visar rekommenderade körfält och riktningar vid kommande korsningar.',
    ruleTips: 'Placera dig i rätt körfält i god tid före korsningen.'
  },

  // F. Lokaliseringsmärken för vägvisning av gång- och cykeltrafik
  {
    id: 'f2',
    title: 'Vägvisning för gång- och cykeltrafik',
    categoryCode: 'F_CYKEL',
    categoryName: 'F. Lokaliseringsmärken för vägvisning av gång- och cykeltrafik',
    code: 'F2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning-av-gang--och-cykeltrafik/f34.-vagvisare/f34-1.png',
    description: 'Visar väg och avstånd för gående och cyklister.',
    ruleTips: 'Gäller särskilt för oskyddade trafikanter.'
  },

  // G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera
  {
    id: 'g1',
    title: 'Post',
    categoryCode: 'G',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g01.-post/g1-1.png',
    description: 'Anger att det finns ett postkontor eller postombud i närheten.',
    ruleTips: 'Användbart för att hitta samhällsservice.'
  },

  // H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera
  {
    id: 'h1',
    title: 'Informationstavla / Turistinformation',
    categoryCode: 'H',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h01.-informationsplats/h1-1.png',
    description: 'Anger att det finns serviceanläggning eller information på platsen.',
    ruleTips: 'Bra att känna till för längre bilresor.'
  },

  // I. Lokaliseringsmärken för turistiskt intressanta mål med mera
  {
    id: 'i1',
    title: 'Turistiskt intressant mål',
    categoryCode: 'I',
    categoryName: 'I. Lokaliseringsmärken för turistiskt intressanta mål med mera',
    code: 'I1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/i.-lokaliseringsmarken-for-turistiskt-intressanta-mal/i01.-turistvag/i1-1.png',
    description: 'Märket uppmärksammar på sevärdheter, naturreservat eller kulturmiljöer.',
    ruleTips: 'Inget tvingande märke, enbart orientering.'
  },

  // J. Upplysningsmärken
  {
    id: 'j1',
    title: 'Vägsaltning upphör',
    categoryCode: 'J',
    categoryName: 'J. Upplysningsmärken',
    code: 'J1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/j.-upplysningsmarken/j02.-upplysningsmarke/j2-1.png',
    description: 'Ger allmän information om trafikförhållanden som inte är förbud eller påbud.',
    ruleTips: 'Var uppmärksam på att väglaget kan förändras.'
  },

  // M. Vägmarkeringar
  {
    id: 'm1',
    title: 'Vägmarkeringar',
    categoryCode: 'M',
    categoryName: 'M. Vägmarkeringar',
    code: 'M1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m01.-mittlinje-eller-korfaltslinje/m1-1.png',
    description: 'Linjer och markeringar målade direkt på asfalten som styr körningen.',
    ruleTips: 'Heltäckande linje får inte överskridas annat än i nödfall.'
  },

  // P. Tecken av polisman med flera
  {
    id: 'p1',
    title: 'Tecken av polisman med flera',
    categoryCode: 'P',
    categoryName: 'P. Tecken av polisman med flera',
    code: 'P1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p01.-stopp/p1-1.png',
    description: 'Anvisningar som ges av polisman eller vakt gäller alltid före alla andra regler och märken.',
    ruleTips: 'Polismans tecken har högsta prioritet i trafiken.'
  },

  // S. Symboler
  {
    id: 's1',
    title: 'Symboler',
    categoryCode: 'S',
    categoryName: 'S. Symboler',
    code: 'S1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s01.-tung-lastbil/s1-1.png',
    description: 'Används på tilläggstavlor för att visa vilka fordon skylten gäller för.',
    ruleTips: 'Var noga med att titta vilken symbol som tillhör huvudmärket.'
  },

  // T. Tilläggstavlor
  {
    id: 't1',
    title: 'Tilläggstavlor',
    categoryCode: 'T',
    categoryName: 'T. Tilläggstavlor',
    code: 'T1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t01.-vagstrackas-langd/t1-1.png',
    description: 'Visar avståndet till den plats som det egna märket avser eller sträckan som gäller.',
    ruleTips: 'Kombineras alltid under ett huvudmärke.'
  },

  // SIG. Trafiksignaler
  {
    id: 'sig1',
    title: 'Trafiksignaler',
    categoryCode: 'SIG',
    categoryName: 'SIG. Trafiksignaler',
    code: 'SIG1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig01.-rod/sig1-1.png',
    description: 'Reglerar trafiken i korsningar och övergångsställen med ljussignaler.',
    ruleTips: 'Gult ljus betyder stanna om du kan stanna på ett säkert sätt.'
  },

  // V. Tecken av vakt
  {
    id: 'v1',
    title: 'Tecken av vakt',
    categoryCode: 'V',
    categoryName: 'V. Tecken av vakt',
    code: 'V1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/v.-tecken-av-vakt/v01.-stopp/v1.png',
    description: 'Visar när vägvakter eller skolvaktreglerare dirigerar trafik vid vägarbete eller skolor.',
    ruleTips: 'Följ alltid vaktens direktiv omedelbart.'
  },

  // X. Andra anordningar för anvisningar för trafiken
  {
    id: 'x1',
    title: 'Andra anordningar för anvisningar för trafiken',
    categoryCode: 'X',
    categoryName: 'X. Andra anordningar för anvisningar för trafiken',
    code: 'X1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x01.-markeringspil/x1.png',
    description: 'Fysiska hinder, koner och avlysningsanordningar för att leda om trafik.',
    ruleTips: 'Reducerar hastighet och markerar körbanans avgränsning.'
  },

  // Y. Signaler vid korsning med järnväg eller spårväg
  {
    id: 'y1',
    title: 'Signaler vid korsning med järnväg eller spårväg',
    categoryCode: 'Y',
    categoryName: 'Y. Signaler vid korsning med järnväg eller spårväg',
    code: 'Y1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/y.-signaler-vid-korsning-med-jarnvag-eller-sparvag/y01.-rott-blinkande-ljus/y1.png',
    description: 'Varnar för tåg vid järnvägskorsning med ljus- och ljudsignaler.',
    ruleTips: 'Korsa aldrig spåret så länge ljuset blinkar rött.'
  }
]