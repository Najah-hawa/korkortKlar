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


// 📌 قاموس يربط كل رمز فئة بوصفها الخاص (مرة واحدة فقط لكل فئة!)
export const categoryDescriptions: Record<string, string> = {
  'A': 'Varningsmärken kännetecknas av sin triangulära form med röd ram och gul botten. Deras syfte är att uppmärksamma trafikanter på farliga situationer eller hinder i god tid.',
  'B': 'Väjningspliktsmärken reglerar vem som har företräde i korsningar och svåra passagepunkter. De kräver att du lämnar företräde åt annan trafik.',
  'C': 'Förbudsmärken talar om vad du inte får göra och har oftast en rund form med röd bård och gul botten. Förbudet gäller från märket tills det upphör eller tills nästa korsning om inget annat anges.',
  'D': 'Påbudsmärken talar om vad du måste göra och har en rund form med blå botten och vit symbol. Påbudet gäller från platsen där märket sitter till nästa korsning, om inte annat anges.'
  // سنضيف بقية الفئات هنا لاحقاً بكل سهولة
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

  // B: Väjningspliktsmärken ---
  {
    id: 'b1',
    title: 'Väjningsplikt',
    categoryCode: 'B',
    categoryName: 'B. Väjningspliktsmärken',
    code: 'B1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b01.-vajningsplikt/b1-1.png',
    description: 'Märket anger att du har väjningsplikt mot trafikanter på den korsande vägen.',
    ruleTips: 'Sänk hastigheten i god tid, stanna vid behov och lämna företräde åt all trafik på den korsande vägen.'
  },
  {
    id: 'b2',
    title: 'Stopplikt',
    categoryCode: 'B',
    categoryName: 'B. Väjningspliktsmärken',
    code: 'B2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b02.-stopplikt/b2-1.png',
    description: 'Märket anger att du är skyldig att stanna helt innan du kör in i en korsning eller lämnar företräde.',
    ruleTips: 'Du måste alltid stanna helt (hjulen ska stå stilla) vid stopplinjen eller omedelbart före den korsande vägen.'
  },
  {
    id: 'b3',
    title: 'Övergångsställe',
    categoryCode: 'B',
    categoryName: 'B. Väjningspliktsmärken',
    code: 'B3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b03.-overgangsstalle/b3-1.png',
    description: 'Märket anger ett obevakat övergångsställe.',
    ruleTips: 'Lämna företräde åt gående som har gått ut på eller just ska gå ut på övergångsstället.'
  },
  {
    id: 'b4',
    title: 'Huvudled',
    categoryCode: 'B',
    categoryName: 'B. Väjningspliktsmärken',
    code: 'B4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b04.-huvudled/b4-1.png',
    description: 'Märket anger att trafiken på vägen har företräde mot korsande trafik.',
    ruleTips: 'Du har företräde i alla anslutande korsningar tills huvudleden upphör, men var ändå uppmärksam på trafikanter som bryter mot väjningsplikten.'
  },
  {
    id: 'b5',
    title: 'Huvudled upphör',
    categoryCode: 'B',
    categoryName: 'B. Väjningspliktsmärken',
    code: 'B5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b05.-huvudled-upphor/b5-1.png',
    description: 'Märket anger att huvudleden upphör.',
    ruleTips: 'Efter detta märke gäller normala väjningsregler, vanligen högerregeln om inget annat skyltas.'
  },
  {
    id: 'b6',
    title: 'Väjningsplikt mot mötande trafik',
    categoryCode: 'B',
    categoryName: 'B. Väjningspliktsmärken',
    code: 'B6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b06.-vajningsplikt-mot-motande-trafik/b6-1.png',
    description: 'Märket anger att du är skyldig att lämna mötande fordon företräde vid trånga passager.',
    ruleTips: 'Stanna i god tid om ett mötande fordon redan har kört in i den trånga passagen.'
  },
  {
    id: 'b7',
    title: 'Mötande trafik har väjningsplikt',
    categoryCode: 'B',
    categoryName: 'B. Väjningspliktsmärken',
    code: 'B7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b07.-motande-trafik-har-vajningsplikt/b7-1.png',
    description: 'Märket anger att mötande trafik har väjningsplikt mot dig vid trånga passager.',
    ruleTips: 'Du har företräde genom passagen, men var ändå beredd att lämna företräde om mötande fordon inte uppmärksammat skylten.'
  },
  {
    id: 'b8',
    title: 'Cykelöverfart',
    categoryCode: 'B',
    categoryName: 'B. Väjningspliktsmärken',
    code: 'B8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b08.-cykeloverfart/b8-1.png',
    description: 'Märket anger en cykelöverfart.',
    ruleTips: 'Som bilist har du väjningsplikt mot cyklister och mopedförare som är på väg ut på eller befinner sig på cykelöverfarten.'
  },

  // Förbudsmärken (C1 - C46) ---
  {
    id: 'c1',
    title: 'Förbud mot infart med fordon',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c01.-forbud-mot-infart-med-fordon/c1-1.png',
    description: 'Märket anger förbud mot infart med fordon.',
    ruleTips: 'Infart är helt förbjuden för alla fordon. Används ofta på enkelriktade gator i motsatt körriktning.'
  },
  {
    id: 'c2',
    title: 'Förbud mot trafik med fordon',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c02.-forbud-mot-trafik-med-fordon/c2-1.png',
    description: 'Märket anger förbud mot trafik med fordon i båda riktningarna.',
    ruleTips: 'Gäller samtliga fordon i båda körriktningarna. Gående berörs inte av märket.'
  },
  {
    id: 'c3',
    title: 'Förbud mot trafik med annat motordrivet fordon än moped klass II',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c03.-forbud-mot-trafik-med-annat-motordrivet-fordon-an-moped-klass-ii/c3-1.png',
    description: 'Märket anger förbud mot trafik med motordrivna fordon förutom moped klass II.',
    ruleTips: 'Bilar, motorcyklar och moped klass I får inte köra här. Moped klass II och cyklar är tillåtna.'
  },
  {
    id: 'c4',
    title: 'Förbud mot trafik med motordrivet fordon med fler än två hjul',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c04.-forbud-mot-trafik-med-motordrivet-fordon-med-fler-an-tva-hjul/c4-1.png',
    description: 'Märket anger förbud mot trafik med motordrivna fordon med mer än två hjul.',
    ruleTips: 'Gäller bilar, traktorer och trehjuliga/fyrhjuliga motorcyklar. Tvåhjuliga motorcyklar och mopeder får köra.'
  },
  {
    id: 'c5',
    title: 'Förbud mot trafik med motorcykel och moped klass I',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c05.-forbud-mot-trafik-med-motorcykel-och-moped-klass-i/c5-1.png',
    description: 'Märket anger förbud mot trafik med motorcykel och moped klass I.',
    ruleTips: 'Avsett för att minska buller eller olycksrisker från tvåhjuliga motorfordon. Bilar och moped klass II påverkas inte.'
  },
  {
    id: 'c6',
    title: 'Förbud mot trafik med motordrivet fordon med tillkopplad släpvagn',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c06.-forbud-mot-trafik-med-motordrivet-fordon-med-tillkopplad-slapvagn/c6-1.png',
    description: 'Märket anger förbud mot motordrivna fordon med släpvagn.',
    ruleTips: 'Gäller motordrivna fordon med alla typer av släp eller påhängsvagnar, såvida det inte är en påhängsvagn/påhängsvagn som anges på en tilläggstavla.'
  },
  {
    id: 'c7',
    title: 'Förbud mot trafik med tung lastbil',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c07.-forbud-mot-trafik-med-tung-lastbil/c7-1.png',
    description: 'Märket anger förbud mot trafik med tung lastbil (totalvikt över 3,5 ton).',
    ruleTips: 'Lätta lastbilar och personbilar får köra. Tung lastbil får endast köra om det finns tilläggstavla för t.ex. varuleverans.'
  },
  {
    id: 'c8',
    title: 'Förbud mot trafik med traktor och motorredskap klass II',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c08.-forbud-mot-trafik-med-traktor-och-motorredskap-klass-ii/c8-1.png',
    description: 'Märket anger förbud mot trafik med traktor samt motorredskap klass II.',
    ruleTips: 'Hindrar långsamtgående arbetsfordon från att köra på sträckan.'
  },
  {
    id: 'c9',
    title: 'Förbud mot trafik med fordon lastat med farligt gods',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C9',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c09.-forbud-mot-trafik-med-fordon-lastat-med-farligt-gods/c9-1.png',
    description: 'Märket anger förbud mot fordon som transporterar farligt gods i sådan mängd att det krävs orangefärgade skyltar.',
    ruleTips: 'Vanligt förekommande vid tunnlar, vattentäktsområden och täta bostadsområden för att förhindra miljöolyckor.'
  },
  {
    id: 'c10',
    title: 'Förbud mot trafik med cykel och moped klass II',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c10.-forbud-mot-trafik-med-cykel-och-moped-klass-ii/c10-1.png',
    description: 'Märket anger förbud mot cykeltrafik och moped klass II.',
    ruleTips: 'Inga cyklar eller klass II-mopeder får framföras här. Gående berörs inte.'
  },
  {
    id: 'c11',
    title: 'Förbud mot trafik med moped klass II',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C11',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c11.-forbud-mot-trafik-med-moped-klass-ii/c11-1.png',
    description: 'Märket anger förbud mot trafik med endast moped klass II.',
    ruleTips: 'Cykel är tillåten, men inte moped klass II.'
  },
  {
    id: 'c12',
    title: 'Förbud mot trafik med fordon förspänt med dragdjur',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C12',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c12.-forbud-mot-trafik-med-fordon-forspant-med-dragdjur/c12-1.png',
    description: 'Märket anger förbud mot fordon dragna av djur (häst och vagn etc.).',
    ruleTips: 'Gäller alla fordon förspända med dragdjur.'
  },
  {
    id: 'c13',
    title: 'Förbud mot trafik med terrängmotorfordon och terrängsläp',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C13',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c13.-forbud-mot-trafik-med-terrangmotorfordon-och-terrangslap/c13-1.png',
    description: 'Märket anger förbud mot snöskotrar, terränghjulingar (ATV) och tillhörande terrängsläp.',
    ruleTips: 'Hindrar terrängfordon från att köra på skyddade markområden eller vägar.'
  },
  {
    id: 'c14',
    title: 'Förbud mot ridning',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C14',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c14.-forbud-mot-ridning/c14-1.png',
    description: 'Märket anger förbud mot ridning samt leda av häst.',
    ruleTips: 'Förbjuder ridning och att leda häst på den angivna sträckan.'
  },
  {
    id: 'c15',
    title: 'Förbud mot gångtrafik',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C15',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c15.-forbud-mot-gangtrafik/c15-1.png',
    description: 'Märket anger förbud mot gående.',
    ruleTips: 'Gående får inte använda vägen eller området (vanligt vid motortrafikleder/tunnlar).'
  },
  {
    id: 'c16',
    title: 'Begränsad fordonsbredd',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C16',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c16.-begransad-fordonsbredd/c16-1.png',
    description: 'Märket anger förbud mot fordon eller fordonståg som breddmässigt överstiger angivet mått.',
    ruleTips: 'Siffran anger maximal bredd i meter inklusive last. Särskilt viktigt vid smala broar och byggarbetsplatser.'
  },
  {
    id: 'c17',
    title: 'Begränsad fordonshöjd',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C17',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c17.-begransad-fordonshojd/c17-1.png',
    description: 'Märket anger förbud mot fordon eller fordonståg som höjdmässigt överstiger angivet mått.',
    ruleTips: 'Måttet anger högsta tillåtna höjd i meter inklusive last. Kontrollera fordonets höjd noggrant innan du kör under viadukter.'
  },
  {
    id: 'c18',
    title: 'Begränsad fordonslängd',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C18',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c18.-begransad-fordonslangd/c18-1.png',
    description: 'Märket anger förbud mot fordon eller fordonståg som längdmässigt överstiger angivet mått.',
    ruleTips: 'Måttet anger den totala tillåtna längden i meter för fordonet inklusive eventuellt släp och last.'
  },
  {
    id: 'c19',
    title: 'Minsta avstånd',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C19',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c19.-minsta-avstand/c19-1.png',
    description: 'Märket anger det minsta avståndet som motordrivna fordon ska hålla till framförvarande fordon.',
    ruleTips: 'Siffran visar minsta avstånd i meter. Vanligt på svaga broar eller i långa tunnlar.'
  },
  {
    id: 'c20',
    title: 'Begränsad bruttovikt på fordon',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C20',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c20.-begransad-bruttovikt-pa-fordon/c20-1.png',
    description: 'Märket anger förbud mot fordon vars bruttovikt överstiger angiven vikt i ton.',
    ruleTips: 'Avser fordonets faktiska vikt vid tillfället. Vid fordonståg gäller begränsningen varje enskilt fordon för sig.'
  },
  {
    id: 'c21',
    title: 'Begränsad bruttovikt på fordon och fordonståg',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C21',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c21.-begransad-bruttovikt-pa-fordon-och-fordonstag/c21-1.png',
    description: 'Märket anger förbud mot fordon eller fordonståg vars sammanlagda bruttovikt överstiger angiven vikt.',
    ruleTips: 'Till skillnad från C20 gäller detta den sammanlagda vikten för bil plus släpvagn tillsammans.'
  },
  {
    id: 'c22',
    title: 'Bärighetsklass',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C22',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c22.-barighetsklass/c22-3.png',
    description: 'Märket anger att vägen har en lägre bärighetsklass än BK1 (t.ex. BK2 eller BK3).',
    ruleTips: 'Begränsar tunga transporter utifrån vägens och broarnas hållfasthet.'
  },
  {
    id: 'c23',
    title: 'Begränsat axeltryck',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C23',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c23.-begransat-axeltryck/c23-1.png',
    description: 'Märket anger förbud mot fordon med högre axeltryck än det angivna i ton.',
    ruleTips: 'Gäller det faktiska trycket som en enskild axel överför till vägbanan.'
  },
  {
    id: 'c24',
    title: 'Begränsat boggitryck',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C24',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c24.-begransat-boggitryck/c24-1.png',
    description: 'Märket anger förbud mot fordon med högre boggitryck än det angivna i ton.',
    ruleTips: 'Gäller det sammanlagda trycket från två axlar med mindre än 2,0 meters avstånd.'
  },
  {
    id: 'c25',
    title: 'Förbud mot sväng i korsning',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C25',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c25.-forbud-mot-svang-i-korsning/c25-1.png',
    description: 'Märket anger förbud mot sväng i den riktning pilen visar.',
    ruleTips: 'Förbudet gäller den korsning eller vägkorsning där märket är placerat.'
  },
  {
    id: 'c26',
    title: 'Förbud mot U-sväng',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C26',
    image: 'https://www.transportstyrelsen.se/link/1a08ef742b0c4d0d8dc95c9364524cb9.aspx',
    description: 'Märket anger förbud mot att vända (göra U-sväng).',
    ruleTips: 'Gäller fram till nästa korsning om inte annat anges.'
  },
  {
    id: 'c27',
    title: 'Förbud mot omkörning',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C27',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c27.-forbud-mot-omkorning/c27-1.png',
    description: 'Märket anger förbud mot omkörning av motordrivna fordon med fler än två hjul.',
    ruleTips: 'Du får inte köra om andra flerhjuliga motordrivna fordon. Tvåhjuliga moped/MC får köras om. Förbudet gäller till slutmärket C28 eller nästa korsning.'
  },
  {
    id: 'c28',
    title: 'Slut på förbud mot omkörning',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C28',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c28.-slut-pa-forbud-mot-omkorning/c28-1.png',
    description: 'Märket anger att förbudet mot omkörning upphör.',
    ruleTips: 'Anger att du återigen får köra om enligt gällande trafikregler.'
  },
  {
    id: 'c29',
    title: 'Förbud mot omkörning med tung lastbil',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C29',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c29.-forbud-mot-omkorning-med-tung-lastbil/c29-1.png',
    description: 'Märket anger förbud för tung lastbil att köra om andra motordrivna fordon med fler än två hjul.',
    ruleTips: 'Gäller endast tunga lastbilar (totalvikt över 3,5 ton).'
  },
  {
    id: 'c30',
    title: 'Slut på förbud mot omkörning med tung lastbil',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C30',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c30.-slut-pa-forbud-mot-omkorning-med-tung-lastbil/c30-1.png',
    description: 'Märket anger att omkörningsförbudet för tung lastbil upphör.',
    ruleTips: 'Tunga lastbilar kan åter köra om enligt normala regler.'
  },
  {
    id: 'c31',
    title: 'Hastighetsbegränsning',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C31',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c31.-hastighetsbegransning/c31-3.png',
    description: 'Märket anger högsta tillåtna hastighet i kilometer i timmen.',
    ruleTips: 'Gäller från märket till en annan hastighetsskylt, slutmärke eller ny zon.'
  },
  {
    id: 'c32',
    title: 'Tillfällig hastighetsbegränsning upphör',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C32',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c32.-tillfallig-hastighetsbegransning-upphor/c32-3.png',
    description: 'Märket anger att en tillfällig hastighetsbegränsning (t.ex. vid vägarbete) har upphört.',
    ruleTips: 'Därefter gäller ordinarie hastighet för sträckan.'
  },
  {
    id: 'c33',
    title: 'Stopp vid tull',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C33',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c33.-stopp-vid-tull/c33-1.png',
    description: 'Märket anger skyldighet att stanna vid tullstation.',
    ruleTips: 'Fordonet ska stanna vid tullanläggningen före passage.'
  },
  {
    id: 'c34',
    title: 'Stopp för angivet ändamål',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C34',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c34.-stopp-for-angivet-andamal/c34.png',
    description: 'Märket anger skyldighet att stanna av den anledning som anges på märket (t.ex. KONTROLL eller SIGNAL).',
    ruleTips: 'Stanna omedelbart vid märket eller anvisad plats.'
  },
  {
    id: 'c35',
    title: 'Förbud mot att parkera fordon',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C35',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c35.-forbud-mot-att-parkera-fordon/c35-1.png',
    description: 'Märket anger förbud mot att parkera fordon.',
    ruleTips: 'Kortvarigt stopp för i- och urstigning eller på- och avlastning av gods är tillåtet, men inte parkering.'
  },
  {
    id: 'c36',
    title: 'Förbud mot att parkera fordon på dag med udda datum',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C36',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c36.-forbud-mot-att-parkera-fordon-pa-dag-med-udda-datum/c36-1.png',
    description: 'Märket anger förbud att parkera på udda datum (1, 3, 5 osv.).',
    ruleTips: 'En del i datumparkeringsreglerna för att underlätta snöröjning och gatustädning.'
  },
  {
    id: 'c37',
    title: 'Förbud mot att parkera fordon på dag med jämnt datum',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C37',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c37.-forbud-mot-att-parkera-fordon-pa-dag-med-jamnt-datum/c37-1.png',
    description: 'Märket anger förbud att parkera på jämna datum (2, 4, 6 osv.).',
    ruleTips: 'Tillämpas ofta parallellt med C36 på motsatt sida av gatan.'
  },
  {
    id: 'c38',
    title: 'Datumparkering',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C38',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c38.-datumparkering/c38-1.png',
    description: 'Märket anger förbud mot parkering på gatuadressens jämna husnummer på jämna datum och udda husnummer på udda datum.',
    ruleTips: 'Parkera på sidan med udda nummer när det är jämnt datum, och vice versa (gäller normalt mellan kl. 00:00 och 06:00 eller angivna tider).'
  },
  {
    id: 'c39',
    title: 'Förbud mot att stanna och parkera fordon',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C39',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c39.-forbud-mot-att-stanna-och-parkera-fordon/c39-1.png',
    description: 'Märket anger förbud mot att både stanna och parkera fordon.',
    ruleTips: 'Det är helt förbjudet att stanna fordonet, även för snabb avstigning eller godslastning (gäller inte stanning för trafikförhållanden).'
  },
  {
    id: 'c40',
    title: 'Ändamålsplats',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C40',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c40.-andamalsplats/c40-1.png',
    description: 'Märket anger förbud mot att stanna och parkera annat än för det ändamål som anges på märket (t.ex. Lastplats).',
    ruleTips: 'Andra fordon än de avsedda får inte stanna eller parkera här.'
  },
  {
    id: 'c41',
    title: 'Slut på ändamålsplats',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C41',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c41.-slut-pa-andamalsplats/c41-1.png',
    description: 'Märket anger att en ändamålsplats upphör.',
    ruleTips: 'Restriktionerna för ändamålsplatsen gäller inte efter denna skylt.'
  },
  {
    id: 'c42',
    title: 'Vändplats',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C42',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c42.-vandplats/c42-1.png',
    description: 'Märket anger förbud mot parkering på en plats reserverad för vändning av fordon.',
    ruleTips: 'Parkering är förbjuden för att vändande fordon (t.ex. sopbilar och utryckningsfordon) inte ska hindras.'
  },
  {
    id: 'c43',
    title: 'Slut på vändplats',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C43',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c43.-slut-pa-vandplats/c43-1.png',
    description: 'Märket anger att vändplatsen upphör.',
    ruleTips: 'Anger slutet på området reserverat för vändning.'
  },
  {
    id: 'c44',
    title: 'Förbud mot trafik med annat motordrivet fordon med dubbdäck än moped klass II',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C44',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c44.-forbud-mot-trafik-med-annat-motordrivet-fordon-med-dubbdack-an-moped-klass-ii/c44.png',
    description: 'Märket anger förbud mot fordon med dubbdäck.',
    ruleTips: 'Gäller oftast miljözoner eller gator i innerstäder där dubbdäck är förbjudna för att minska partikelutsläpp.'
  },
  {
    id: 'c45',
    title: 'Särskilda bestämmelser för stannande och parkering',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C45',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c45.-sarskilda-bestammelser-for-stannande-och-parkering/c45.png',
    description: 'Märket anger att särskilda tids- eller parkeringsregler gäller för stannande och parkering.',
    ruleTips: 'Tidsangivelsen visar under vilka klockslag parkerings/stoppförbudet gäller.'
  },
  {
    id: 'c46',
    title: 'Begränsat trippelaxeltryck',
    categoryCode: 'C',
    categoryName: 'C. Förbudsmärken',
    code: 'C46',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c46.-begransat-trippelaxeltryck/c46.png',
    description: 'Märket anger förbud mot fordon med högre trippelaxeltryck än det angivna i ton.',
    ruleTips: 'Gäller det sammanlagda trycket från tre axlar placerade tätt intill varandra.'
  },

  // Påbudsmärken (D1 - D12) ---
  {
    id: 'd1',
    title: 'Påbjuden körriktning',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d01.-pabjuden-korriktning/d1-1.png',
    description: 'Märket anger att fordon endast får föras i pilens riktning.',
    ruleTips: 'Du är skyldig att följa pilens riktning. Det är förbjudet att svänga åt något annat håll i korsningen.'
  },
  {
    id: 'd2',
    title: 'Påbjuden körbana',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d02.-pabjuden-korbana/d2-1.png',
    description: 'Märket anger att fordon ska föras på den sida om märket eller spärrområdet som pilen visar.',
    ruleTips: 'Passera märket eller hinder/trafikdelare på den sida som pilen pekar mot (t.ex. vid en refug).'
  },
  {
    id: 'd3',
    title: 'Cirkulationsplats',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d03.-cirkulationsplats/d3-1.png',
    description: 'Märket anger att du måste köra i märkets pilriktning runt cirkulationsplatsen (motsols).',
    ruleTips: 'Kör alltid motsols runt rondellen. Lämna företräde åt fordon som redan befinner sig inne i cirkulationsplatsen.'
  },
  {
    id: 'd4',
    title: 'Påbjuden cykelbana',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d04.-pabjuden-cykelbana/d4-1.png',
    description: 'Märket anger att banan endast är avsedd för cykeltrafik och moped klass II.',
    ruleTips: 'Måste användas av cyklister och moped klass II. Motortrafik och gående ska inte använda denna bana.'
  },
  {
    id: 'd5',
    title: 'Påbjuden gångbana',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d05.-pabjuden-gangbana/d5-1.png',
    description: 'Märket anger att banan endast är avsedd för gående.',
    ruleTips: 'Endast avsedd för gående. Cyklar, mopeder och andra fordon får inte köras här.'
  },
  {
    id: 'd6',
    title: 'Påbjuden gång- och cykelbana',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d06.-pabjuden-gang--och-cykelbana/d6-1.png',
    description: 'Märket anger en gemensam bana för gående, cykeltrafik och moped klass II.',
    ruleTips: 'Gående och cyklister delar på samma bana. Cyklister ska anpassa hastigheten efter de gående.'
  },
  {
    id: 'd7',
    title: 'Påbjudna gång- och cykelbanor',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d07.-pabjudna-gang--och-cykelbanor/d7-1.png',
    description: 'Märket anger att banan är uppdelad i skilda delar för gående respektive cykeltrafik/moped klass II.',
    ruleTips: 'Gående och cyklister ska hålla sig på den sida av banan som symbolen på märket anvisar.'
  },
  {
    id: 'd8',
    title: 'Påbjuden ridväg',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d08.-pabjuden-ridvag/d8-1.png',
    description: 'Märket anger att vägen eller banan endast är avsedd för ridning och för att leda häst.',
    ruleTips: 'Banan är reserverad för ryttare och hästar. Motortrafik och cyklister får inte använda vägen.'
  },
  {
    id: 'd9',
    title: 'Påbjuden led för terrängmotorfordon och terrängsläp',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D9',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d09.-pabjuden-led-for-terrangmotorfordon-och-terrangslap/d9-1.png',
    description: 'Märket anger att leden är avsedd för terrängmotorfordon (t.ex. snöskotrar) och terrängsläp.',
    ruleTips: 'Skoterförare ska följa leden. Ordinarie vägtrafik berörs inte.'
  },
  {
    id: 'd10',
    title: 'Påbjudet körfält eller körbana för fordon i linjetrafik med flera',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d10.-pabjudet-korfalt-eller-korbana-for-fordon-i-linjetrafik-m.fl/d10-1.png',
    description: 'Märket anger att körfältet är reserverat för bussar i linjetrafik (och andra fordon enligt tilläggstext).',
    ruleTips: 'Vanliga personbilar får inte köra i kollektivkörfältet om det inte anges särskilt på en tilläggstavla.'
  },
  {
    id: 'd11',
    title: 'Slut på påbjuden bana, körfält, väg eller led',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D11',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d11.-slut-pa-pabjuden-bana-korfalt-vag-eller-led/d11-1.png',
    description: 'Märket anger att påbudet för banan, körfältet eller leden har upphört.',
    ruleTips: 'Visar att den särskilda banan eller kollektivkörfältet slutar och övergår till normal väg.'
  },
  {
    id: 'd12',
    title: 'Påbjuden körriktning för fordon lastat med farligt gods',
    categoryCode: 'D',
    categoryName: 'D. Påbudsmärken',
    code: 'D12',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d12.-pabjuden-korriktning-for-fordon-lastat-med-farligt-gods/d12-1.png',
    description: 'Märket anger skyldig körriktning för fordon som transporterar farligt gods.',
    ruleTips: 'Gäller endast fordon med farligt gods för att leda bort dem från känsliga områden. Vanliga personbilar påverkas inte.'
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