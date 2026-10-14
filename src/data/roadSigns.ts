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
  },
  {
    id: 'a2',
    title: 'Varning för flera farliga kurvor',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a02.-varning-for-flera-farliga-kurvor/a2-1.png',
    description: 'Märket anger flera farliga kurvor samt den första farliga kurvans riktning.',
    ruleTips: 'Symbolen visar riktningen på den första kurvan. Sänk hastigheten i god tid och håll den låg genom hela kurvpartiet. Om sträckan är längre än 1 km kompletteras märket med en tilläggstavla för avstånd.'
  },
  {
    id: 'a3',
    title: 'Varning för nedförslutning',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a03.-varning-for-nedforslutning/a3-1.png',
    description: 'Märket anger brant nedförslutning. Siffran anger lutningen i procent och är anpassad till förhållandena på platsen.',
    ruleTips: 'Använd motorbroms (lägre växel) för att undvika överhettning av bromsarna i långa nedförsbackar.'
  },
  {
    id: 'a4',
    title: 'Varning för stigning',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a04.-varning-for-stigning/a4-1.png',
    description: 'Märket anger kraftig stigning. Siffran anger stigningen i procent och är anpassad till förhållandena på platsen.',
    ruleTips: 'Växla ner i god tid om det behövs för att behålla motorns kraft och undvika tidsförlust eller tjuvstopp.'
  },
  {
    id: 'a5',
    title: 'Varning för avsmalnande väg',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a05.-varning-for-avsmalnande-vag/a5-1.png',
    description: 'Märket anger att vägen smalnar av från någon av sidorna eller från båda sidor.',
    ruleTips: 'Anpassa hastigheten och var beredd på mötande trafik. Vid kraftig avsmalning gäller kuggprincipen om två körfält blir ett.'
  },
  {
    id: 'a6',
    title: 'Varning för bro',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a06.-varning-for-bro/a6-1.png',
    description: 'Märket anger en öppningsbar bro.',
    ruleTips: 'Varnar för öppningsbar bro eller lyftbro. Var uppmärksam på ljussignaler och bommar; stanna alltid vid rött ljus.'
  },
  {
    id: 'a7',
    title: 'Varning för kaj',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a07.-varning-for-kaj/a7-1.png',
    description: 'Märket anger en plats där vägen slutar mot vatten',
    ruleTips: 'Vägen slutar mot vatten, kaj eller strandlinje. Var extra försiktig vid mörker, dimma eller halka.'
  },
  {
    id: 'a8',
    title: 'Varning för ojämn väg',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a08.-varning-for-ojamn-vag/a8-1.png',
    description: 'Märket anger sådana ojämnheter eller skador i vägbanan som medför att det är lämpligt att färdas med lägre hastighet än som annars skulle varit fallet.',
    ruleTips: 'Sänk hastigheten för att förhindra skador på fordonet och förlorad kontroll över styrningen.'
  },
  {
    id: 'a9',
    title: 'Varning för farthinder',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A9',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a09.-varning-for-farthinder/a9-1.png',
    description: 'Märkena anger upphöjning eller grop som anlagts som fartdämpande åtgärd.',
    ruleTips: 'Passera farthindret i låg hastighet för att undvika skador på bilens hjulupphängning och komfortstörning.'
  },
  {
    id: 'a10',
    title: 'Varning för slirig väg',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a10.-varning-for-slirig-vag/a10-1.png',
    description: 'Märket anger att vägen kan vara slirig. Endast om det finns särskilda skäl används märket för att varna för halka på grund av snö eller is.',
    ruleTips: 'Öka avståndet till framförvarande fordon, undvik hastiga rattrörelser och tvära inbromsningar.'
  },
  {
    id: 'a11',
    title: 'Varning för stenskott',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A11',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a11.-varning-for-stenskott/a11-1.png',
    description: 'Märket anger risk för stenskott. Märket används inte på grusvägar eller liknande vägar där stenskott är vanligt förekommande.',
    ruleTips: 'Håll extra långt säkerhetsavstånd till framförvarande fordon och undvik omkörningar för att minska risken för vindruteskador.'
  },
  {
    id: 'a12',
    title: 'Varning för stenras',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A12',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a12.-varning-for-stenras/a12-1.png',
    description: 'Märket anger risk för stenras och för att stenar kan förekomma på vägen på grund av stenras. Symbolen är anpassad efter förhållandena på platsen.',
    ruleTips: 'Se upp för nedfallna stenar på vägbanan och undvik i möjligaste mån att stanna på det varnade vägavsnittet.'
  },
  {
    id: 'a13',
    title: 'Varning för övergångsställe',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A13',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a13.-varning-for-overgangsstalle/a13-1.png',
    description: 'Märket varnar för att ett obevakat eller bevakat övergångsställe närmar sig.',
    ruleTips: 'Anpassa hastigheten så att du kan lämna företräde åt gående som gått ut på eller just ska gå ut på övergångsstället. Omkörning är förbjuden precis före och på övergångsstället.'
  },
  {
    id: 'a14',
    title: 'Varning för gående',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A14',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a14.-varning-for-gaende/a14.png',
    description: 'Märket anger en vägsträcka där gående ofta korsar eller uppehåller sig på eller vid vägen.',
    ruleTips: 'Vägsträckan används ofta av gående (t.ex. saknas gångbana). Var beredd på att sänka hastigheten och hålla ut tillräckligt vid passage.'
  },
  {
    id: 'a15',
    title: 'Varning för barn',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A15',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a15.-varning-for-barn/a15-1.png',
    description: 'Märket anger en vägsträcka där barn ofta korsar eller uppehåller sig på eller vid vägen.',
    ruleTips: 'Vanligt vid skolor och förskolor. Barn kan handla impulsivt och springa ut i vägen; iaktta skärpt uppmärksamhet och kör långsamt.'
  },
  {
    id: 'a16',
    title: 'Varning för cyklande och mopedförare',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A16',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a16.-varning-for-cyklande-och-mopedforare/a16-1.png',
    description: 'Märket anger en vägsträcka där cyklande eller mopedförare ofta korsar eller kör in på vägen.',
    ruleTips: 'Ange att cyklister eller mopedister ofta korsar eller färdas på vägen. Kör försiktigt vid cykelöverfarter och cykelpassager.'
  },
  {
    id: 'a17',
    title: 'Varning för skidåkare',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A17',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a17.-varning-for-skidakare/a17-1.png',
    description: 'Märket anger en plats där skidåkare ofta korsar eller uppehåller sig på vägen.',
    ruleTips: 'Skidspår korsar vägen eller skidåkare rör sig i närheten. Sänk hastigheten, särskilt vid skymd sikt eller vinterhalka.'
  },
  {
    id: 'a18',
    title: 'Varning för ridande',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A18',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a18.-varning-for-ridande/a18-1.png',
    description: 'Märket anger en vägsträcka där ridande ofta korsar eller uppehåller sig på vägen.',
    ruleTips: 'Hästar skräms lätt. Passera ridande eller hästfordon i låg hastighet, hålla stort sidoavstånd och tuta aldrig.'
  },
  {
    id: 'a19',
    title: 'Varning för djur',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A19',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a19.-varning-for-djur/a19-1.png',
    description: 'Märket anger en plats eller vägsträcka där det finns särskild risk för djur på eller vid vägen. Andra symboler kan förekomma på märket. Transportstyrelsen får meddela föreskrifter om vilka andra symboler som får förekomma.',
    ruleTips: 'Hög risk för viltolycka (t.ex. älg, rådjur). Var extra uppmärksam vid skymning, gryning samt vid viltstängslets slut.'
  },
  {
    id: 'a20',
    title: 'Varning för vägarbete',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A20',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a20.-varning-for-vagarbete/a20-1.png',
    description: 'Märket anger en vägsträcka där vägarbete eller liknande arbete pågår.',
    ruleTips: 'Sänk hastigheten rejält för att skydda vägarbetarna. Var beredd på tillfälliga avspärrningar, grus och manuell dirigering.'
  },
  {
    id: 'a21',
    title: 'Slut på sträcka med vägarbete',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A21',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a21.-slut-pa-stracka-med-vagarbete/a21-1.png',
    description: 'Märket anger slut på en vägsträcka med vägarbete som märkts ut med märke A20, varning för vägarbete. Märket är inte uppsatt om det ändå tydligt framgår var sträckan slutar.',
    ruleTips: 'Anger att vägarbetsområdet har upphört och du kan återgå till normal uppmärksamhet och gällande hastighet.'
  },
  {
    id: 'a22',
    title: 'Varning för flerfärgssignal',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A22',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a22.-varning-for-flerfargssignal/a22-1.png',
    description: 'Märket anger en plats där trafiken regleras med flerfärgssignal med tre ljusöppningar. Inom tättbebyggt område är märket uppsatt endast om det finns särskilda skäl för det.',
    ruleTips: 'Varnar för en trafiksignal som kan komma överraskande (t.ex. efter en kurva eller på landsbygd). Var beredd att stanna.'
  },
  {
    id: 'a23',
    title: 'Varning för lågt flygande flygplan',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A23',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a23.-varning-for-lagt-flygande-flygplan/a23-1.png',
    description: 'Märket varnar för ett område nära en flygplats där lågt flygande flygplan eller helikoptrar kan förekomma.',
    ruleTips: 'Flygplan eller helikoptrar kan orsaka plötsliga och starka motorljud eller överraska dig. Låt dig inte distraheras under körningen.'
  },
  {
    id: 'a24',
    title: 'Varning för sidvind',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A24',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a24.-varning-for-sidvind/a24-1.png',
    description: 'Märket anger en vägsträcka där det ofta förekommer stark sidvind. Symbolen är anpassad efter förhållandena på platsen.',
    ruleTips: 'Stor risk för kraftiga vindbyar, särskilt vid broar eller öppna fält. Håll stadigt i ratten och sänk hastigheten (extra känsligt för släp och höga fordon).'
  },
  {
    id: 'a25',
    title: 'Varning för mötande trafik',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A25',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a25.-varning-for-motande-trafik/a25-1.png',
    description: 'Märket anger att en körbana med enkelriktad trafik övergår i en körbana med trafik i båda riktningarna.',
    ruleTips: 'Vägen övergår från enkelriktad till tvåvägstrafik. Se upp för mötande fordon i ditt körfält och håll till höger.'
  },
  {
    id: 'a26',
    title: 'Varning för tunnel',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A26',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a26.-varning-for-tunnel/a26-1.png',
    description:'Märket varnar för en framförvarande tunnel.',
    ruleTips: 'Slå på halvljuset i god tid. I tunnel är det förbjudet att vända, backa och stanna (förutom vid nödläge). Tänk på ljusomställningen vid in- och utfart.'
  },
  {
    id: 'a27',
    title: 'Varning för svag vägkant eller hög körbanekant',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A27',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a27.-varning-for-svag-vagkant-eller-hog-korbanekant/a27-1.png',
    description: 'Märket varnar för att vägkanten är svag eller att det är en hög kant mellan körbanan och vägkanten.',
    ruleTips: 'Undvik att köra för nära vägkanten då den kan ge vika eller ge skador på däcken. Håll säker marginal vid möten.'
  },
  {
    id: 'a28',
    title: 'Varning för vägkorsning',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A28',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a28.-varning-for-vagkorsning/a28-1.png',
    description: 'Märket anger en vägkorsning där bestämmelserna i 3 kap. 18 § trafikförordningen (1998:1276) är tillämpliga.',
    ruleTips: 'Varnar för vägkorsning där högerregeln gäller om inga andra väjningsregler anges på platsen. Var beredd att lämna företräde åt trafik från höger.'
  },
  {
    id: 'a29',
    title: 'Varning för vägkorsning där trafikanter på anslutande väg har väjningsplikt eller stopplikt',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A29',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a29.-varning-for-vagkorsning-dar-trafikanter-pa-anslutande-vag/a29-1.png',
    description: 'Märket anger en vägkorsning där förare av fordon på anslutande vägar har väjningsplikt eller stopplikt. Symbolen är anpassad efter förhållandena på platsen.',
    ruleTips: 'Du kör på den korsande vägen och anslutande trafik har väjningsplikt eller stopplikt. Var ändå uppmärksam ifall en anslutande bilist missar sin plikt.'
  },
  {
    id: 'a30',
    title: 'Varning för cirkulationsplats',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A30',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a30.-varning-for-cirkulationsplats/a30-1.png',
    description: 'Märket varnar för en framförvarande cirkulationsplats (rondell).',
    ruleTips: 'Sänk hastigheten. Du har väjningsplikt mot all trafik som redan befinner sig inne i cirkulationsplatsen innan du kör in.'
  },
  {
    id: 'a31',
    title: 'Varning för långsamtgående fordon',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A31',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a31.-varning-for-langsamtgaende-fordon/a31.png',
    description: 'Märket anger en plats där långsamtgående fordon ofta korsar eller kör in på vägen.',
    ruleTips: 'Varnar för att fordon som t.ex. traktorer eller A-traktorer ofta kör in eller ut på vägen. Var beredd på stora hastighetsskillnader.'
  },
  {
    id: 'a32',
    title: 'Varning för fordon med förspänt dragdjur',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A32',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a32.-varning-for-fordon-med-forspant-dragdjur/a32-1.png',
    description: 'Märket anger en vägsträcka där fordon förspända med dragdjur ofta korsar eller uppehåller sig på vägen. Andra symboler kan förekomma på märket. Transportstyrelsen får meddela föreskrifter om vilka andra symboler som får förekomma.',
    ruleTips: 'Häst och vagn förekommer på vägen. Sänk hastigheten och kör om med stort sidoavstånd och utan plötsliga ljud.'
  },
  {
    id: 'a33',
    title: 'Varning för terrängskotertrafik',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A33',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a33.-varning-for-terrangskotertrafik/a33-1.png',
    description: 'Märket anger en plats där terrängskotrar ofta korsar eller kör in på vägen.',
    ruleTips: 'Snöskotrar korsar eller färdas längs vägen. Var extra vaksam vid skymning och där snöskoterleder korsar körbanan.'
  },
  {
    id: 'a34',
    title: 'Varning för kö',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A34',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a34.-varning-for-ko/a34-1.png',
    description: 'Märket anger en vägsträcka där det finns risk för köbildning.',
    ruleTips: 'Stor risk för plötsliga köbildningar och stillastående trafik. Slå gärna på varningsblinkers om du kommer först till en tvärstannande kö för att varna bakomvarande.'
  },
  {
    id: 'a35',
    title: 'Varning för järnvägskorsning med bommar',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A35',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a35.-varning-for-jarnvagskorsning-med-bommar/a35-1.png',
    description: 'Märket anger en korsning med järnväg eller spårväg där det finns bommar.',
    ruleTips: 'Korsning med järnväg som har bommar. Stanna alltid vid rött ljus och kör aldrig ut på spåret om du inte kan passera helt utan att bli stående.'
  },
  {
    id: 'a36',
    title: 'Varning för järnvägskorsning utan bommar',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A36',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a36.-varning-for-jarnvagskorsning-utan-bommar/a36-1.png',
    description: 'Märket varnar för en järnvägskorsning som saknar bommar.',
    ruleTips: 'Korsning med järnväg som saknar bommar. Titta åt båda hållen och lyssna noga efter tåg innan du korsar spåret.'
  },
  {
    id: 'a37',
    title: 'Varning för korsning med spårväg utan bommar',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A37',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a37.-varning-for-korsning-med-sparvag-utan-bommar/a37-1.png',
    description: 'Märket varnar för en korsning med spårväg som saknar bommar.',
    ruleTips: 'Spårvagn har lång bromssträcka och svårt att väja. Lämna fri väg för spårvagnen om inga andra särskilda signaler anger annat.'
  },
  {
    id: 'a38',
    title: 'Avstånd till plankorsning',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A38',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a38.-avstand-till-plankorsning/a38-1.png',
    description: 'Märkena anger avståndet till en plankorsning i tredjedelar. Märket med tre markeringar är utom tättbebyggt område, uppsatt under något av märkena A35, varning för järnvägskorsning med bommar, A36, varning för järnvägskorsning utan bommar, eller A37, varning för korsning med spårväg utan bommar. Märket med två markeringar anger två tredjedels avstånd till plankorsning och märket med en markering anger den sista tredjedelen av avståndet.',
    ruleTips: 'Placeras under varningsmärket för järnväg. Stolpmarkeringarna visar avståndet i tredjedelar kvar till korsningen (3 streck = längst ifrån, 1 streck = närmast korsningen).'
  },
  {
    id: 'a39',
    title: 'Kryssmärke',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A39',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a39.-kryssmarke/a39-1.png',
    description: 'Märket anger en korsning med järnväg eller spårväg med ett eller flera spår. Märket är uppsatt omedelbart före en plankorsning. Det behöver inte vara uppsatt vid enskild väg med lite trafik där det kan underlåtas utan fara för trafiksäkerheten. Märket kan även vara uppsatt viden annan korsning med järnväg eller spårväg än en plankorsning.',
    ruleTips: 'Placeras omedelbart före järnväg eller spårväg. Visar var själva spårområdet börjar och kräver skärpt uppmärksamhet. Enkelkryss = ett spår, dubbelkryss = flera spår.'
  },
  {
    id: 'a40',
    title: 'Varning för annan fara',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A40',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a40.-varning-for-annan-fara/a40-1.png',
    description: 'Märket anger en annan fara än sådan som kan anges med något annat varningsmärke. Farans art anges på en tilläggstavla.',
    ruleTips: 'Varnar för en fara som det inte finns något särskilt varningsmärke för. Faran anges oftast på en tilläggstavla (t.ex. "Halka" eller "Förhöjd vägkant").'
  },
  {
    id: 'a41',
    title: 'Varning för olycka',
    categoryCode: 'A',
    categoryName: 'A. Varningsmärken',
    code: 'A41',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a41.-varning-for-olycka/a41.png',
    description: 'Märket varnar tillfälligt för att en trafikolycka har inträffat längre fram på vägen.',
    ruleTips: 'Tillfällig varning för att en trafikolycka inträffat längre fram. Sänk hastigheten, håll avstånd och var uppmärksam på räddningspersonal och bärgningsfordon.'
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