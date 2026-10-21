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



// 📌 varje category får en beskrivning
export const categoryDescriptions: Record<string, string> = {
  'A': 'Varningsmärken kännetecknas av sin triangulära form med röd ram och gul botten. Deras syfte är att uppmärksamma trafikanter på farliga situationer eller hinder i god tid.',
  'B': 'Väjningspliktsmärken reglerar vem som har företräde i korsningar och svåra passagepunkter. De kräver att du lämnar företräde åt annan trafik.',
  'C': 'Förbudsmärken talar om vad du inte får göra och har oftast en rund form med röd bård och gul botten. Förbudet gäller från märket tills det upphör eller tills nästa korsning om inget annat anges.',
  'D': 'Påbudsmärken talar om vad du måste göra och har en rund form med blå botten och vit symbol. Påbudet gäller från platsen där märket sitter till nästa korsning, om inte annat anges.',
  'E': 'Anvisningsmärken upplyser om förhållanden som gäller för en viss väg eller vägsträcka där anvisningen placerats. De har oftast rektangulär form med blå botten.',
  'F_VAGVISNING': 'Lokaliseringsmärken för vägvisning visar vägen till orter, platser, vägnummer eller omledningsvägar för att underlätta din navigering i trafiken.',
  'F_GANG_CYKEL': 'Lokaliseringsmärken för vägvisning av gång- och cykeltrafik visar lämpliga vägar, avstånd och färdriktningar anpassade för gående och cyklister.',
  'G_INRATTLINGAR': 'Lokaliseringsmärken för upplysning om allmänna inrättningar visar vägen till offentlig service såsom sjukhus, stationer, post och flygplatser.',
  'H_SERVICE': 'Lokaliseringsmärken för serviceanläggningar visar vägen till kommersiell och praktisk service längs vägen, som drivmedel, mat, boende, laddstationer och rastplatser.',
  'I_TURISM': 'Lokaliseringsmärken för turistiskt intressanta mål ger information om sevärdheter, turistvägar, landmärken och världsarv.',
  'J_UPPLYSNINGSMARKEN': 'Upplysningsmärken ger dig särskild information om framkomlighet, vägsaltning, luftledningar och säkerhet på den aktuella vägsträckan.',
  'M_VAGMARKERINGAR': 'Vägmarkeringar är målade direkt på vägbanan och används för att reglera, varna eller vägleda trafikanter i form av linjer, pilar, symboler och text.',
  'P_POLIS': 'Tecken av polisman och andra behöriga väghållare har högsta prioritet i trafiken och anger stopp, kör fram eller sänkt hastighet direkt från fordon eller person.',
  'S_SYMBOLER': 'Symboler används på tilläggstavlor och vägmärken för att förtydliga vilket eller vilka fordonsslag och trafikantgrupper som reglerna gäller för.',
  'T_TILLAGGSTAVLOR': 'Tilläggstavlor placeras under ett huvudmärke för att komplettera, förtydliga eller begränsa märkets innebörd gällande t.ex. avstånd, sträcka, tidsangivelser eller avgift.',
  'V': 'Tecken av vakt anger anvisningar från utsedd vägvakt som måste följas vid t.ex. vägarbeten eller tillfälliga avstängningar.',
  'TRAFIKSIGNALER': 'Trafiksignaler reglerar trafiken med ljus- och ljudsignaler i korsningar, körfält, övergångsställen samt vid järnvägskorsningar.',
  'X_ANDRA_ANORDNINGAR': 'Andra anordningar för teckenvisning och spärrning omfattar bl.a. markeringsskärmar, farthinder och spärranordningar vid vägarbeten.',
  'Y_SIGNALS': 'Signaler för järnvägskorsningar och rörliga broar varnar för korsande tågtrafik eller rörliga broar med röda blinkande ljus och ljud.'
};
export const roadSignsData: RoadSign[] = [
  // A. Varningsmärken klar 
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

  // B: Väjningspliktsmärken --- klar 
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

  // Förbudsmärken (C1 - C46) --- klar 
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

  // Påbudsmärken --- klar 
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
  
  // E. Anvisningsmärken --- klar
  {
    id: 'e1',
    title: 'Motorväg',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e01.-motorvag/e-11.png',
    description: 'Används märket som förberedande upplysning om att en motorväg börjar anges avståndet på en tilläggstavla. Märket kan även vara infogat i ett lokaliseringsmärke.',
    ruleTips: 'Minsta tillåtna hastighet är 40 km/tim för fordon som får köra här. Det är förbjudet att vända, backa, stanna eller gå på motorväg.'
  },
  {
    id: 'e2',
    title: 'Motorväg upphör',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e02.-motorvag-upphor/e2-1.png',
    description: 'Används märket som förberedande upplysning om att en motorväg upphör anges avståndet på en tilläggstavla. Märket används inte när en motorväg övergår i motortrafikled.',
    ruleTips: 'Var beredd på att trafikregler för vanlig landsväg gäller igen och att du kan möta mötande trafik och korsande vägar.'
  },
  {
    id: 'e3',
    title: 'Motortrafikled',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e03.-motortrafikled/e3-1.png',
    description: 'Används märket som förberedande upplysning om att en motortrafikled börjar anges avståndet på en tilläggstavla. Märket kan även vara infogat i ett lokaliseringsmärke.',
    ruleTips: 'Samma regler gäller som för motorväg (förbud mot att gå, cykla, stanna eller vända), men vägen kan vara tvåfilig utan mittremsa.'
  },
  {
    id: 'e4',
    title: 'Motortrafikled upphör',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e04.-motortrafikled-upphor/e4-1.png',
    description: 'Används märket som förberedande upplysning om att en motortrafikled upphör anges avståndet på en tilläggstavla. Märket används inte när en motortrafikled övergår i motorväg.',
    ruleTips: 'Sänk hastigheten och anpassa körningen till vanliga landsvägsförhållanden.'
  },
  {
    id: 'e5',
    title: 'Tättbebyggt område',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e05.-tattbebyggt-omrade/e5-1.png',
    description: 'Ortnamnet kan vara infogat i märket.',
    ruleTips: 'Om ingen hastighet anges på tilläggsskylt gäller generellt 50 km/tim (eller 30/40 km/tim beroende på lokal föreskrift). Datumparkering gäller ofta inom området.'
  },
  {
    id: 'e6',
    title: 'Tättbebyggt område upphör',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e06.-tattbebyggt-omrade-upphor/e6-1.png',
    description: 'Ortnamnet kan vara infogat i märket.',
    ruleTips: 'Hastighetsgränsen ändras vanligtvis till 70 km/tim om inget annat anges.'
  },
  {
    id: 'e7',
    title: 'Gågata',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e07.-gagata/e7-1.png',
    description: 'Märket anger att bestämmelserna i 8 kap. 1 § trafikförordningen (1998:1276) är tillämpliga. Förbud mot att föra fordon som får föras på gågata enligt 8 kap. 1 § andra stycket trafikförordningen anges på en tilläggstavla.',
    ruleTips: 'Motortrafik är endast tillåten för varuleveranser, sjuktransporter eller boende. Högsta tillåtna hastighet är gångfart och gående har alltid företräde.'
  },
  {
    id: 'e8',
    title: 'Gågata upphör',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e08.-gagata-upphor/e8-1.png',
    description: 'Märket behöver inte vara uppsatt om det ändå tydligt framgår att gågatan upphör.',
    ruleTips: 'När du lämnar en gågata har du väjningsplikt mot alla fordon på den väg du kör ut på (utfartsregeln gäller).'
  },
  {
    id: 'e9',
    title: 'Gångfartsområde',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E9',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e09.-gangfartsomrade/e9-1.png',
    description: 'Märket anger att bestämmelserna i 8 kap. 1 § första stycket trafikförordningen är tillämpliga.',
    ruleTips: 'Fordon får inte köras med högre hastighet än gångfart (ca 5–7 km/tim). Gående har företräde och parkering är endast tillåten på särskilt anvisade p-platser.'
  },
  {
    id: 'e10',
    title: 'Gångfartsområde upphör',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e10.-gangfartsomrade-upphor/e10-1.png',
    description: 'Märket behöver inte vara uppsatt om det ändå tydligt framgår att gångfartsområdet upphör.',
    ruleTips: 'Utfartsregeln gäller när du lämnar ett gångfartsområde – du måste lämna företräde åt all trafik på den korsande vägen.'
  },
  {
    id: 'e11',
    title: 'Rekommenderad lägre hastighet',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E11',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e11.-rekommenderad-lagre-hastighet/e11-1.png',
    description: 'Märket anger en vägsträcka eller ett område där särskilda åtgärder vidtagits eller där förhållandena är sådana att det är lämpligt att färdas med lägre hastighet än den högsta tillåtna. Den rekommenderade lägre hastigheten anges på märket.',
    ruleTips: 'Anger inte en juridisk hastighetsgräns, men det är starkt rekommenderat att sänka farten för säkerheten på grund av t.ex. en skarp kurva eller vägarbete.'
  },
  {
    id: 'e12',
    title: 'Rekommenderad lägre hastighet upphör',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E12',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e12.-rekommenderad-lagre-hastighet-upphor/e12-1.png',
    description: 'Märket behöver inte vara uppsatt om det ändå tydligt framgår att sträckan upphör.',
    ruleTips: 'Du kan återgå till den ordinarie hastighetsgränsen som gäller för vägen.'
  },
  {
    id: 'e13',
    title: 'Rekommenderad högsta hastighet',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E13',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e13.-rekommenderad-hogsta-hastighet/e13-1.png',
    description: 'Märket används endast som omställbart vägmärke och anger att förhållandena tillfälligt är sådana att det inte är lämpligt att färdas med högre hastighet än den som anges på märket. Den angivna hastigheten är alltid lägre än den högsta tillåtna.',
    ruleTips: 'Gäller ofta tillfälligt vid t.ex. vägarbetsplatser eller farliga sträckor för att hålla ett jämnt och säkert trafikflöde.'
  },
  {
    id: 'e14',
    title: 'Rekommenderad högsta hastighet upphör',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E14',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e14.-rekommenderad-hogsta-hastighet-upphor/e14-1.png',
    description: 'Märket behöver inte vara uppsatt om det ändå tydligt framgår att de tillfälliga förhållandena upphört.',
    ruleTips: 'Återgå till vägens vanliga hastighetsgräns när du passerat märket.'
  },
  {
    id: 'e15',
    title: 'Sammanvävning',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E15',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e15.-sammanvavning/e15-1.png',
    description: 'Märket upplyser om att två körfält eller körbanor löper samman och att förarna ska anpassa sig till de nya förhållandena på platsen enligt bestämmelserna i 3 kap. 44 § trafikförordningen. Märket används även som förberedande upplysning om att två körfält eller körbanor löper samman. Avståndet anges då på en tilläggstavla.',
    ruleTips: 'Ingen har absolut företräde. Förare i båda körfälten har ett gemensamt ansvar att lämna plats och väva samman bilarna varannan gång.'
  },
  {
    id: 'e16',
    title: 'Enkelriktad trafik',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E16',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e16.-enkelriktad-trafik/e16-1.png',
    description: 'Märket anger att fordonstrafiken på vägen är enkelriktad i pilens riktning. Uppåtriktad pil anger att trafiken är enkelriktad i riktning rakt fram.',
    ruleTips: 'Det är förbjudet att vända eller köra mot pilens riktning. Vid vänstersväng ska du placera bilen så långt till vänster på vägen som möjligt.'
  },
  {
    id: 'e17',
    title: 'Återvändsväg',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E17',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e17.-atervandsvag/e17-1.png',
    description: 'Märket anger att genomfart inte är möjlig. Symbolen anpassas efter förhållandena på platsen och kan vara infogad i ett lokaliseringsmärke. Om genomfart med cykel och moped klass II är möjlig anges det genom att symbol S8, cykel och moped klass II, är infogad i märket.',
    ruleTips: 'Symbolen kan anpassas efter hur vägen ser ut. Det är tillåtet att köra in för parkering eller leverans men vägen saknar genomfart.'
  },
  {
    id: 'e18',
    title: 'Mötesplats',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E18',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e18.-motesplats/e18-1.png',
    description: 'Märket anger en plats som är avsedd för möte på smala vägar.',
    ruleTips: 'Det är absolut förbjudet att parkera eller stanna här, förutom kortvarigt för att underlätta ett möte. Den som har mötesplatsen på sin sida stannar i första hand.'
  },
  {
    id: 'e19',
    title: 'Parkering',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E19',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e19.-parkering/e19-1.png',
    description: 'Märket anger att parkering är tillåten på en parkeringsplats eller på en sträcka på den sida av vägen där vägmärket är uppsatt. Är märket uppsatt vid en väg anger det att tillåtelsen börjar där märket har satts upp och gäller enligt vad som anges på en tilläggstavla, till den plats där en annan bestämmelse om stannande eller parkering märkts ut eller i annat fall till nästa korsning med en annan väg än sådan som avses i 3 kap. 21 § andra stycket trafikförordningen. Gäller sådan annan bestämmelse på en kortare sträcka gäller dock anvisningen på nytt efter sträckans slut utan att märket upprepas. Används märket vid en särskilt anordnad parkeringsplats gäller anvisningen hela parkeringsplatsen. Märket anger inte rätt att parkera där fordon enligt trafikförordningen inte får stannas eller parkeras, om inte en sådan rätt tydligt framgår av märkets placering eller anges på en tilläggstavla. Märket anger inte heller rätt att parkera fordon i strid mot 3 kap. 49 a § första stycket trafikförordningen. Används märket av en markägare enligt lagen (1984:318) om kontrollavgift vid olovlig parkering anger märket att parkering är tillåten, dock högst 24 timmar i följd vardagar utom vardag före sön- och helgdag, om inte annat framgår av en tilläggstavla. Märket kan vara infogat i ett lokaliseringsmärke. Om märket används som förberedande upplysning, kan uppgift om parkeringsplatsens namn, om att parkeringsplatsen är fullbelagd eller att det finns lediga platser lämnas i anslutning till märket.',
    ruleTips: 'På vardagar gäller fri parkering i högst 24 timmar i sträck om inga tilläggstavlor anger tidsbegränsning, avgift eller p-skiva.'
  },
  {
    id: 'e20',
    title: 'Områdesmärke',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E20',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e20.-omradesmarke/e20-1.png',
    description: 'Märket anger att ett område börjar med de förbud eller tillåtelser som anges med det infogade märket. Avvikelser från anvisningarna på märket kan anges genom tilläggstavlor. Tidsbegränsningar kan även infogas i märket. Märket är uppsatt vid infarterna till området och gäller till den plats där tavla E21, slut på område, är uppsatt eller det på annat tydligt sätt framgår att anvisningarna på märket inte gäller. Inom området kan det förekomma avvikelser från anvisningarna på märket. Dessa avvikelser anges genom andra vägmärken och tilläggstavlor. Anvisningarna på märket gäller även efter sådan avvikelse utan att märket upprepas. Andra förbud eller tillåtelser kan anges på märket. Transportstyrelsen får meddela föreskrifter om vilka andra vägmärken som får infogas.',
    ruleTips: 'Gäller inom hela området efter märket, även efter korsningar, utan att märket behöver upprepas.'
  },
  {
    id: 'e21',
    title: 'Slut på område',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E21',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e21.-slut-pa-omrade/e21-1.png',
    description: 'Märket anger att ett område med förbud eller tillåtelser som angetts med ett märke E20, områdesmärke, upphör. Utseendet är anpassat till det märke som infogats i märke E20, områdesmärke.',
    ruleTips: 'De bestämmelser som gällde inom området upphör att gälla från och med denna skylt.'
  },
  {
    id: 'e22',
    title: 'Busshållplats',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E22',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e22.-busshallplats/e22-1.png',
    description: 'Märket anger en hållplats för fordon i linjetrafik och skolskjuts om inte hållplatsen tydligt framgår på annat sätt. Trots bestämmelserna i 1 kap. 5 § kan uppgifter om busslinjer, bussföretag och motsvarande förekomma på eller vid märket. Klockslag kan anges på märket.',
    ruleTips: 'Det är förbjudet att parkera eller stanna inom 20 meter före och 5 meter efter hållplatsen. På vägar med 50 km/tim eller lägre måste du lämna företräde åt bussen när den blinkar ut.'
  },
  {
    id: 'e23',
    title: 'Taxi',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E23',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e23.-taxi/e23-1.png',
    description: 'Märket anger den, i färdriktningen, bortre gränsen för en särskild uppställningsplats för fordon som används i taxitrafik.',
    ruleTips: 'Andra fordon får inte stanna eller parkera här, förutom för kort på- och avstigning om det kan ske utan att hindra taxitrafiken.'
  },
  {
    id: 'e24',
    title: 'Automatisk trafikövervakning',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E24',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e24.-automatisk-trafikovervakning/e24-1.png',
    description: 'Märket anger att automatisk övervakning med kamera eller motsvarande kan ske på en plats eller vägsträcka för övervakning av trafikregler, beskattning eller avgiftsbeläggning. Märket anger vidare att personuppgifter kan registreras enligt Dataskyddsförordningen, lagen (2001:558) om vägtrafikregister eller någon annan registerlag. Gäller anvisningen en längre vägsträcka, anges sträckans längd på tilläggstavla T1, vägsträckas längd. Märket upprepas på lämpliga avstånd.',
    ruleTips: 'Mätning av hastighet sker automatiskt. Håll den angivna hastighetsgränsen för att undvika böter och öka trafiksäkerheten.'
  },
  {
    id: 'e25',
    title: 'Betalväg',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E25',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e25.-betalvag/e25-1.png',
    description: 'Märket anger att avgift eller särskild skatt ska betalas vid färd på en viss väg eller inom ett visst område.',
    ruleTips: 'Avgiften registreras oftast automatiskt via kameror som läser av registreringsskylten och faktureras fordonsägaren.'
  },
  {
    id: 'e26',
    title: 'Tunnel',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E26',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e26.-tunnel/e26-1.png',
    description: 'Märket anger tunnel. Tunnelns längd anges och tunnelns namn kan anges på märket. Märket är upprepat efter varje kilometer och kvarvarande tunnellängd anges då på märket.',
    ruleTips: 'Det är förbjudet att vända, backa eller stanna i tunneln. Halvljus måste vara tänt. Vid köbildning eller nödsituation – stäng av motorn.'
  },
  {
    id: 'e27',
    title: 'Nöduppställningsplats',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E27',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e27.-noduppstallningsplats/e27-1.png',
    description: 'Märket anger plats för uppställning av fordon vid haveri, motorstopp eller liknande. Symbol för hjälptelefon eller brandsläckare kan vara infogad i märket. Märket är utformat efter förhållandena på platsen. Används märket som förberedande upplysning om nöduppställningsplats anges avståndet på en tilläggstavla.',
    ruleTips: 'Får endast användas vid nödsituationer eller motorhaveri. Vanlig parkering eller vila är strängt förbjuden.'
  },
  {
    id: 'e28',
    title: 'Nödutgång',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E28',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e28.-nodutgang/e28-1.png',
    description: 'Märket anger nödutgång för gående.',
    ruleTips: 'Används för utrymning vid brand eller allvarlig olycka i tunneln.'
  },
  {
    id: 'e29',
    title: 'Utrymningsväg',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E29',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e29.-utrymningsvag/e29-1.png',
    description: 'Märket anger riktning och avstånd till nödutgång eller motsvarande för gående. Märket är uppsatt med högst 25 meters mellanrum.',
    ruleTips: 'Följ pilens riktning vid utrymning till fots i en nödsituation.'
  },
  {
    id: 'e30',
    title: 'Särskilda bestämmelser för parkering',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E30',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e30.-sarskilda-bestammelser-for-parkering/e30.png',
    description: 'Märket anger att parkering är tillåten med de infogade villkoren. Märket kan också ange avvikelse från den reglering som anges med det märke som den är uppsatt under. De närmare föreskrifterna för märke E19, parkering, utom sjätte och sjunde styckena, gäller även för detta märke. För tid gäller de närmare föreskrifterna för tilläggstavla T6, tidsangivelse. Andra villkor kan anges på märket. Märket används under något av märkena C35, förbud mot att parkera fordon, C36, förbud mot att parkera fordon på dag med udda datum, C37, förbud mot att parkera fordon på dag med jämnt datum, C38, datumparkering, C39, förbud mot att stanna och parkera fordon, C40, ändamålsplats, C42, vändplats, D10, påbjudet körfält eller körbana för fordon i linjetrafik m.fl., E19, parkering, eller E22, busshållplats.',
    ruleTips: 'Läs tilläggstavlan noga för att se vilka tider, avgifter eller p-skiva som krävs för att undvika parkeringsböter.'
  },
  {
    id: 'e31',
    title: 'Miljözon',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E31',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e31.-miljozon/e31-1.png',
    description: 'Märket anger att bestämmelserna i 4 kap. 22-24 a §§ trafikförordningen (1998:1276) är tillämpliga. Om märket används som förberedande upplysning om att en miljözon börjar, anges avståndet på en tilläggstavla. Märket kan även vara infogat i ett lokaliseringsmärke. Märket är uppsatt vid infarterna till miljözonen och gäller till den plats där ett märke E6, tättbebyggt område upphör, märke E32, slut på miljözon eller ett annat miljözonsmärke är uppsatt.',
    ruleTips: 'Endast fordon som uppfyller de angivna miljöklasserna (t.ex. Euro 6 eller el/hybrid) får köras inom zonens gränser.'
  },
  {
    id: 'e32',
    title: 'Slut på miljözon',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E32',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e32.-slut-pa-miljozon/e32-1.png',
    description: 'Märket anger att en miljözon slutar.',
    ruleTips: 'De särskilda miljöreglerna och kraven på fordonet upphör från denna punkt.'
  },
  {
    id: 'e33',
    title: 'Cykelgata',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E33',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e33.-cykelgata/e33-cykelgata.png',
    description: 'Märket anger att bestämmelserna i 8 kap. 1 a § trafikförordningen (1998:1276) är tillämpliga.',
    ruleTips: 'Högsta tillåtna hastighet är 30 km/tim. Motordrivna fordon måste anpassa sin hastighet till cykeltrafiken och får inte köra om cyklister på ett farligt sätt.'
  },
  {
    id: 'e34',
    title: 'Cykelgata upphör',
    categoryCode: 'E',
    categoryName: 'E. Anvisningsmärken',
    code: 'E34',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e34.-cykelgata-upphor/e34-cykelgata-upphor.png',
    description: 'Märket anger att en cykelgata upphör. <b>Kommentar:</b> Det förekommer för närvarande inga närmare föreskrifter om vägmärkets storlekar. Andra vägmärken som E7 Gågata och E11 Rekommenderad lägre hastighet som kan förekomma i likande trafikmiljöer har storlekarna Liten 0,4 x 0,4 m, Normal 0,6 x 0,6 m och Stor 0,8 x 0,8 m.',
    ruleTips: 'När du kör ut från en cykelgata gäller utfartsregeln – du har väjningsplikt mot trafik på den korsande vägen.'
  },


  // F. Lokaliseringsmärken för vägvisning    ---klar 
  {
    id: 'f1-1',
    title: 'Orienteringstavla',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F1-1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f01.-orienteringstavla/f1-1.png',
    description: 'Märket är en förberedande upplysning om korsning, cirkulationsplats eller motsvarande. Om det finns särskilda skäl kan upplysning om två korsningar anges på märket.',
    ruleTips: 'Ger en översikt av vägkorsningen och avfarter i förväg så att du kan planera din körning och placera dig rätt.'
  },
  {
    id: 'f2',
    title: 'Orienteringstavla vid förbjuden sväng i korsning',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f02.-orienteringstavla-vid-forbjuden-svang-i-korsning/f2-1.png',
    description: 'Märket är en förberedande upplysning om att det är förbjudet att svänga i en korsning, men att en annan körriktning kan väljas.',
    ruleTips: 'Visar alternativ väg och hur du kör runt kvarteret när vänstersväng eller direkt sväng i korsningen är förbjuden.'
  },
  {
    id: 'f3',
    title: 'Tabellorienteringstavla',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f03.-tabellorienteringstavla/f3-1.png',
    description: 'Märket är en förberedande upplysning om korsning, cirkulationsplats eller motsvarande. Avståndsangivelsen på märket är anpassad till förhållandena på platsen. Samtliga färdriktningar i korsningen anges.',
    ruleTips: 'Visar i tabellform vilka vägar och resmål som nås i korsningen samt avstånd eller hastighetsgränser.'
  },
  {
    id: 'f4',
    title: 'Avfartsorienteringstavla',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f04.-avfartsorienteringstavla/f4-1.png',
    description: 'Märket är en förberedande upplysning om avfart. Avståndsangivelsen på märket är anpassad till förhållandena på platsen.',
    ruleTips: 'Informerar i god tid före en avfart på motorväg eller motortrafikled om kommande avfartsnummer och resmål.'
  },
  {
    id: 'f5',
    title: 'Vägvisare',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f05.-vagvisare/f5-1.png',
    description: 'Märket är uppsatt i anslutning till en korsning. Om avstånd anges ska det anges i hela kilometer.',
    ruleTips: 'Placerad direkt i korsningen och pekar ut riktningen och avståndet till angivet resmål.'
  },
  {
    id: 'f6',
    title: 'Tabellvägvisare',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f06.-tabellvagvisare/f6-1.png',
    description: 'Märket kan användas i stället för märke F5, vägvisare, och är uppsatt på kort avstånd före en korsning, cirkulationsplats eller i utfarten från en cirkulationsplats. Används märket i anslutning till ett sjukhusområde, industriområde eller motsvarande får området anges överst på märket utan riktningsangivelse.',
    ruleTips: 'Visar flera resmål och riktningar samtidigt direkt i anslutning till korsningen.'
  },
  {
    id: 'f7',
    title: 'Avfartsvisare',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f07.-avfartsvisare/f7-1.png',
    description: 'Märket är uppsatt där avfarten börjar.',
    ruleTips: 'Placerad vid själva avfartspunkten från en större väg för att markera exakt var du ska svänga av.'
  },
  {
    id: 'f8',
    title: 'Körfältsvägvisare',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f08.-korfaltsvagvisare/f8-1.png',
    description: 'Märket anger det eller de körfält som är lämpligt att använda för färd till målet. Märket är uppsatt över det eller de körfält det avser. Körfältsvägvisare kan även användas som förberedande upplysning om avfart. I sådana fall anges avståndet till avfarten under angivelsen för avfarten.',
    ruleTips: 'Placerad ovanför körfältet och anger vilket körfält du ska välja för att nå angivet resmål.'
  },
  {
    id: 'f9',
    title: 'Samlingsmärke för vägvisning',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F9',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f09.-samlingsmarke-for-vagvisning/f9-1.png',
    description: 'Inom klammer anges mål som nås via ett gemensamt vägval och under klammerns spets anges det gemensamma vägvalet. Avståndet till aktuell avfart eller korsning kan anges på en tilläggstavla.',
    ruleTips: 'Samlar vägvisning till flera olika resmål eller stadsdelar på en gemensam skylt.'
  },
  {
    id: 'f10',
    title: 'Platsmärke',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f10.-platsmarke/f10-1.png',
    description: 'Märket anger en ort eller annan plats av betydelse för orienteringen. Kommun-, stads- eller länsvapen kan vara infogat i märket.',
    ruleTips: 'Anger namnet på en ort, stadsdel, kommun eller annan viktig geografisk plats.'
  },
  {
    id: 'f11',
    title: 'Vägnamn',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F11',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f11.-vagnamn/f11-1.png',
    description: 'Märket anger namn på en viss väg eller led. Avvikelse från färg får inte ske.',
    ruleTips: 'Anger namnet på en specifik gata eller väg.'
  },
  {
    id: 'f12',
    title: 'Vattendrag',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F12',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f12.-vattendrag/f12-1.png',
    description: 'Märket anger namnet på ett vattendrag.',
    ruleTips: 'Anger namnet på en å, elv, sjö eller annat vattendrag som vägen korsar.'
  },
  {
    id: 'f13',
    title: 'Avståndstavla',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F13',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f13.-avstandstavla/f13-1.png',
    description: 'Avstånd anges i hela kilometer. Vägnamn eller vägnummer kan vara infogade i märket.',
    ruleTips: 'Placerad efter korsningar för att bekräfta att du är på rätt väg samt ange avståndet i kilometer till kommande ort.'
  },
  {
    id: 'f14',
    title: 'Vägnummer',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F14',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f14.-vagnummer/f14-1.png',
    description: 'Vägnummer anges endast för vägar i nummergruppen 1-499. Ett märke med streckad bård anger att vägen leder till den väg som vägvisas med det nummer som anges på märket.',
    ruleTips: 'Anger numret på vägen (t.ex. Europaväg E4 med grön bakgrund eller riksväg med blå bakgrund).'
  },
  {
    id: 'f15',
    title: 'Omledning',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F15',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f15.-omledning/f15-1.png',
    description: 'Märket anger permanent omledningsväg för ordinarie numrerad väg. Avvikelse från färg får inte ske.',
    ruleTips: 'Anger tillfällig omledningsväg med orange bakgrund vid avstängd väg eller vägarbete.'
  },
  {
    id: 'f16',
    title: 'Ökning av antal körfält',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F16',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f16.-okning-av-antal-korfalt/f16-1.png',
    description: 'Märket anger att antalet körfält ökar. Märket är anpassat efter förhållandena på platsen. Symboler för fordonsslag, vägnummer eller fysisk avgränsning mellan motriktade körfält kan vara infogade i märket. Märket används även som förberedande upplysning om att antalet körfält ökar. Avståndet anges då på en tilläggstavla. Vid tillfällig trafikomläggning får märket utföras på orange botten. I övrigt får avvikelse från färg inte ske.',
    ruleTips: 'Informerar om att antalet körfält utökas framöver på vägsträckan.'
  },
  {
    id: 'f17',
    title: 'Minskning av antal körfält',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F17',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f17.-minskning-av-antal-korfalt/f17-1.png',
    description: 'Märket anger att antalet körfält minskar. Märket är anpassat efter förhållandena på platsen. Märket används även som förberedande upplysning om att antalet körfält minskar. Avståndet anges då på en tilläggstavla. Vid tillfällig trafikomläggning får märket utföras på orange botten. I övrigt får avvikelse från färg inte ske.',
    ruleTips: 'Varnar för att ett körfält upphör eller går ihop med ett annat (sammanvävning/zip-merging).'
  },
  {
    id: 'f18',
    title: 'Körfältsindelning på sträcka',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F18',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f18.-korfaltsindelning-pa-stracka/f18-1.png',
    description: 'Märket anger körriktning i körfält. Märket är anpassat efter förhållandena på platsen. Symboler för fordonsslag, vägnummer eller fysisk avgränsning mellan motriktade körfält kan vara infogade i märket. Märket används även som förberedande upplysning om att körfält börjar. Avståndet anges då på en tilläggstavla. Vid tillfällig trafikomläggning kan märket vara utfört med orange botten. I övrigt får avvikelse från färg inte ske.',
    ruleTips: 'Visar körfältens riktning och om något körfält är avsett för motströms trafik.'
  },
  {
    id: 'f19',
    title: 'Väganslutning med me accelerationsfält',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F19',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f19.-vaganslutning-med-accelerationsfalt/f19-1.png',
    description: 'Märket är anpassat efter förhållandena på platsen. Vid tillfällig trafikomläggning kan märket vara utfört med orange botten. I övrigt får avvikelse från färg inte ske.',
    ruleTips: 'Visar att påfartstrafik ansluter via ett accelerationsfält.'
  },
  {
    id: 'f20',
    title: 'Väganslutning med separat körfält',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F20',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f20.-vaganslutning-med-separat-korfalt/f20-1.png',
    description: 'Märket är anpassat efter förhållandena på platsen. Vid tillfällig trafikomläggning kan märket vara utfört med orange botten. I övrigt får avvikelse från färg inte ske.',
    ruleTips: 'Visar att tillkommande trafik får ett eget nytt körfält vid anslutningen utan att behöva väva samman direkt.'
  },
  {
    id: 'f21',
    title: 'Körfältsindelning före korsning',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F21',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f21.-korfaltsindelning-fore-korsning/f21-1.png',
    description: 'Märket visar lämpligt körfält för fortsatt färd. Märket är anpassat till förhållandena på platsen. Avvikelse från färg får inte ske.',
    ruleTips: 'Visar körfältens tillåtna färdriktningar i god tid före korsningen.'
  },
  {
    id: 'f22',
    title: 'Riksmärke',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F22',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f22.-riksmarke/f22-1.png',
    description: 'Märket anger gräns till Sverige eller annat EU-land. Avvikelser från färg får inte ske.',
    ruleTips: 'Markera gränsen vid inresa i Sverige vid landgräns eller färjeläge.'
  },
  {
    id: 'f23',
    title: 'Orienteringstavla för omledningsväg',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F23',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f23.-orienteringstavla-for-omledningsvag/f23-1.png',
    description: 'Märket anger omledningsväg när ordinarie väg tillfälligt är avstängd. Avvikelse från färg får inte ske.',
    ruleTips: 'Orange tavla som visar hur omledningsvägen förbi ett vägarbete eller avstängning dras.'
  },
  {
    id: 'f24',
    title: 'Färdriktning vid omledning',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F24',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f24.-fardriktning-vid-omledning/f24-1.png',
    description: 'Märket anger färdriktning vid tillfällig omledning av trafik. Avvikelse från färg får inte ske.',
    ruleTips: 'Orange pil som pekar ut den tillfälliga färdriktningen under en omledning.'
  },
  {
    id: 'f25',
    title: 'Körfält upphör',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F25',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f25.-korfalt-upphor/f25-1.png',
    description: 'Märket anger att ett körfält tillfälligt är avstängt och att ett annat körfält kan användas i färdriktningen. Märket är anpassat efter förhållandena på platsen. Avvikelse från färg får inte ske.',
    ruleTips: 'Informerar om tillfälligt avstängt eller stängt körfält vid vägarbete.'
  },
  {
    id: 'f26',
    title: 'Körfält avstängt',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F26',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f26.-korfalt-avstangt/f26-1.png',
    description: 'Märket anger att ett körfält tillfälligt är avstängt och att inget annat körfält i färdriktningen kan användas. Märket är anpassat efter förhållandena på platsen. Avvikelse från färg får inte ske.',
    ruleTips: 'Anger att ett körfält är helt avstängt för trafik.'
  },
  {
    id: 'f27',
    title: 'Trafikplatsnummer',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F27',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f27.-trafikplatsnummer/f27-1.png',
    description: 'Märket anger numret på trafikplatsen. Märket kan vara kompletterat med avfartens beteckning. Avvikelse från färg får inte ske.',
    ruleTips: 'Anger numret på trafikplatsen/avfarten (t.ex. avfart 75) för enklare navigering.'
  },
  {
    id: 'f28',
    title: 'Parkeringshus',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F28',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f28.-parkeringshus/f28-1.png',
    description: 'Upplysning om att parkeringsplatsen är fullbelagd eller om att det finns lediga platser kan lämnas i anslutning till märket. Parkeringshusets namn kan vara infogat i märket.',
    ruleTips: 'Visar vägen till ett parkeringshus eller täckt parkeringsanläggning.'
  },
  {
    id: 'f29',
    title: 'Infartsparkering',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F29',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f29.-infartsparkering/f29-1.png',
    description: 'Märket anger parkeringsplats i anslutning till kollektivtrafik. Symbolen på märket anger vilken typ av kollektivtrafik som är tillgänglig. Transportstyrelsen får meddela föreskrifter om vilka andra symboler som får användas. Parkeringsplatsens namn kan vara infogat i märket. Avvikelse från färg får inte ske.',
    ruleTips: 'Parkering i anslutning till kollektivtrafik (t.ex. tåg/buss) för byte till kollektivt resande.'
  },
  {
    id: 'f30',
    title: 'Lokal slinga',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F30',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f30.-lokal-slinga/f30-1.png',
    description: 'Märket anger ringväg eller motsvarande. Märket kan vara kompletterat med beteckning eller motsvarande. Avvikelse från färg får inte ske.',
    ruleTips: 'Visar vägen runt ett område eller stadsdel för lokal distribution eller transit.'
  },
  {
    id: 'f31',
    title: 'Lämplig väg eller förbifart för visst fordonsslag eller trafikantgrupp',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F31',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f31.-lamplig-vag-eller-forbifart-for-visst-fordonsslag-eller-trafikantgrupp/f31-1.png',
    description: 'Fordonsslaget eller trafikantgruppen anges med symbol enligt 28 §.',
    ruleTips: 'Anvisar lämpligst färdväg för t.ex. tunga lastbilar för att undvika bostadsområden.'
  },
  {
    id: 'f31a',
    title: 'Färdväg för långa fordonståg',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F31a',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f31a.-fardvag-for-langa-fordonstag/f31a.png',
    description: 'Märket anger färdväg för långa fordonståg enligt föreskrifter meddelade med stöd av 4 kap. 17 f § trafikförordningen (1998:1276). Avvikelse från färg får inte ske.',
    ruleTips: 'Pekar ut godkänd färdväg för extra långa fordonskombinationer (t.ex. upp till 34,5 meter).'
  },
  {
    id: 'f32',
    title: 'Farligt gods',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F32',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f32.-farligt-gods/f32-1.png',
    description: 'Märket anger rekommenderad färdväg för fordon med last som omfattas av krav på märkning med orangefärgad skylt enligt föreskrifter som har meddelats med stöd av lagen (2006:263) om transport av farligt gods. Avvikelse från färg får inte ske.',
    ruleTips: 'Anvisar godkänd och rekommenderad transportväg för fordon som transporterar farligt gods.'
  },
  {
    id: 'f33',
    title: 'Räddningsplats',
    categoryCode: 'F_VAGVISNING',
    categoryName: 'F. Lokaliseringsmärken för vägvisning',
    code: 'F33',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f33.-raddningsplats/f33-1.png',
    description: 'Märket anger en räddningsplats vid vägarbeten eller motsvarande. Siffran anger räddningsplatsens nummer. Avvikelse från färg får inte ske.',
    ruleTips: 'Anger en uppställningsplats reserverad för räddningstjänst och utryckningsfordon vid insats.'
  },

  // F. Lokaliseringsmärken för vägvisning av gång- och cykeltrafik   --- klar 
  {
    id: 'f34',
    title: 'Vägvisare',
    categoryCode: 'F_GANG_CYKEL',
    categoryName: 'F. Lokaliseringsmärken för vägvisning av gång- och cykeltrafik',
    code: 'F34',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning-av-gang--och-cykeltrafik/f34.-vagvisare/f34-1.png',
    description: 'Märket anger väg till en ort, plats, anläggning eller liknande. Avstånd i kilometer kan anges. Andra symboler kan förekomma på märket. Transportstyrelsen får meddela föreskrifter om vilka symboler som får förekomma. Transportstyrelsen får också meddela föreskrifter om att det inte behöver förekomma någon symbol på märket.',
    ruleTips: 'Visar vägen och riktningen till ett specifikt resmål för cykel- och gångtrafik.'
  },
  {
    id: 'f35',
    title: 'Tabellvägvisare',
    categoryCode: 'F_GANG_CYKEL',
    categoryName: 'F. Lokaliseringsmärken för vägvisning av gång- och cykeltrafik',
    code: 'F35',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning-av-gang--och-cykeltrafik/f35.-tabellvagvisare/f35-1.png',
    description: 'Märket anger väg till orter, platser, anläggningar eller liknande. Avståndet anges i kilometer. Andra symboler kan förekomma på märket. Transportstyrelsen får meddela föreskrifter om vilka symboler som får förekomma. Transportstyrelsen får också meddela föreskrifter om att det inte behöver förekomma någon symbol på märket.',
    ruleTips: 'Visar flera olika resmål, riktningar och avstånd i kilometer eller meter för gående och cyklister.'
  },
  {
    id: 'f36',
    title: 'Platsmärke',
    categoryCode: 'F_GANG_CYKEL',
    categoryName: 'F. Lokaliseringsmärken för vägvisning av gång- och cykeltrafik',
    code: 'F36',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning-av-gang--och-cykeltrafik/f36.-platsmarke/f36-1.png',
    description: 'Märket anger en ort eller annan plats av betydelse för orienteringen. Kommun-, stads- eller länsvapen kan vara infogat i märket.',
    ruleTips: 'Anger namnet på en ort, stadsdel eller plats längs cykel- och gångvägen.'
  },
  {
    id: 'f37',
    title: 'Avståndstavla',
    categoryCode: 'F_GANG_CYKEL',
    categoryName: 'F. Lokaliseringsmärken för vägvisning av gång- och cykeltrafik',
    code: 'F37',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning-av-gang--och-cykeltrafik/f37.-avstandstavla/f37-1.png',
    description: 'Märket anger avståndet till angivna orter, platser, anläggningar eller liknande. Avståndet anges i kilometer. Andra symboler kan förekomma på märket. Transportstyrelsen får meddela föreskrifter om vilka symboler som får förekomma. Transportstyrelsen får också meddela föreskrifter om att det inte behöver förekomma någon symbol på märket.',
    ruleTips: 'Bekräftar resmål och anger återstående avstånd för cyklister och gående.'
  },
  {
    id: 'f38',
    title: 'Cykelled',
    categoryCode: 'F_GANG_CYKEL',
    categoryName: 'F. Lokaliseringsmärken för vägvisning av gång- och cykeltrafik',
    code: 'F38',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning-av-gang--och-cykeltrafik/f38.-cykelled/f38-1.png',
    description: 'Märket anger en särskilt anordnad cykelled. Märkets färgsättning kan variera.',
    ruleTips: 'Märker ut en sammanhängande cykelled eller turistväg anpassad för cykeltrafik.'
  },


  // G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera     --- klar 
  {
    id: 'g1',
    title: 'Post',
    categoryCode: 'G_INRATTLINGAR',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g01.-post/g1-1.png',
    description: 'Märket anger postombud där brev och pakethantering samt frimärksförsäljning erbjuds.',
    ruleTips: 'Visar vägen till ett postkontor eller postombud.'
  },
  {
    id: 'g2',
    title: 'Hjälptelefon',
    categoryCode: 'G_INRATTLINGAR',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarkMärket anger en järnvägsstation.en2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g02.-hjalptelefon/g2-1.png',
    description: 'Märket anger en hjälptelefon.',
    ruleTips: 'Upplyser om var det finns en nödtelefon för akut kontakt vid haveri eller olycka.'
  },
  {
    id: 'g3',
    title: 'Radiostation för vägtrafikinformation',
    categoryCode: 'G_INRATTLINGAR',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g03.-radiostation-for-vagtrafikinformation/g3-1.png',
    description: 'Märket anger att vägtrafikinformation ges regelbundet i återkommande sändningar som är avsedda att täcka ett större område.',
    ruleTips: 'Anger radiofrekvensen för lokala trafikmeddelanden och väginformation.'
  },
  {
    id: 'g4',
    title: 'Akutsjukhus',
    categoryCode: 'G_INRATTLINGAR',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g04.-akutsjukhus/g4-1.png',
    description: 'Märket anger ett sjukhus med akutmottagning.',
    ruleTips: 'Visar vägen till ett sjukhus med dygnet runt-öppen akutmottagning.'
  },
  {
    id: 'g5',
    title: 'Industriområde',
    categoryCode: 'G_INRATTLINGAR',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g05.-industriomrade/g5-1.png',
    description: 'Märket anger ett område för industri eller annan liknande verksamhet.',
    ruleTips: 'Anger vägen till ett industri- eller företagsområde.'
  },
  {
    id: 'g6',
    title: 'Järnvägsstation',
    categoryCode: 'G_INRATTLINGAR',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g06.-jarnvagsstation/g6-1.png',
    description: 'Märket anger en järnvägsstation.',
    ruleTips: 'Visar vägen till en tåg- eller järnvägsstation.'
  },
  {
    id: 'g7',
    title: 'Busstation',
    categoryCode: 'G_INRATTLINGAR',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g07.-busstation/g7.png',
    description: 'Märket anger en busstation som utgör knutpunkt för flera busslinjer.',
    ruleTips: 'Visar vägen till en busstation eller central hållplats för linjetrafik.'
  },
  {
    id: 'g8',
    title: 'Flygplats',
    categoryCode: 'G_INRATTLINGAR',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G8',
    image: 'http://transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g08.-flygplats/g8-1.png',
    description: 'Märket anger en flygplats med reguljär flygtrafik.',
    ruleTips: 'Visar vägen till en flygplats.'
  },
  {
    id: 'g9',
    title: 'Brandsläckare',
    categoryCode: 'G_INRATTLINGAR',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G9',
    image: 'http://transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g09.-brandslackare/g9-1.png',
    description: 'Märket anger en brandsläckare.',
    ruleTips: 'Anger var det finns en brandsläckare tillgänglig vid nödsituation, t.ex. i tunnel eller på rastplats.'
  },
  {
    id: 'g10',
    title: 'Handelsområde',
    categoryCode: 'G_INRATTLINGAR',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g10.-handelsomrade/g10.png',
    description: 'Märket anger ett område för handel.',
    ruleTips: 'Visar vägen till ett köpcentrum eller handelsområde.'
  },
  {
    id: 'g11',
    title: 'Färja',
    categoryCode: 'G_INRATTLINGAR',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G11',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g11.-farja/g11.png',
    description: 'Märket anger ett färjeläge eller att angivet färdmål nås med färja.',
    ruleTips: 'Visar vägen till ett färjeläge för bil- eller bil/passagerarfärja.'
  },
  {
    id: 'g12',
    title: 'Personfärja',
    categoryCode: 'G_INRATTLINGAR',
    categoryName: 'G. Lokaliseringsmärken för upplysning om allmänna inrättningar med mera',
    code: 'G12',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g12.-personfarja/g12.png',
    description: 'Märket anger ett färjeläge för personfärja eller att angivet färdmål endast kan nås med färja avsedd för persontransport.',
    ruleTips: 'Visar vägen till en färja som endast tar gående och passagerare (ej fordon).'
  },


  // H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera   --- klar
  {
    id: 'h1',
    title: 'Informationsplats',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h01.-informationsplats/h1-1.png',
    description: 'Märket anger en plats där det går att få information. Uppgift om vilken typ av information som finns kan anges i anslutning till märket.',
    ruleTips: 'Visar vägen till en plats där du kan få turist- eller väginformation.'
  },
  {
    id: 'h2',
    title: 'Fordonsverkstad',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h02.-fordonsverkstad/h2-1.png',
    description: '',
    ruleTips: 'Visar vägen till en bilverkstad för reparation av fordon.'
  },
  {
    id: 'h3',
    title: 'Drivmedel',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h03.-drivmedel/h3-1.png',
    description: 'Märket anger en anläggning som tillhandahåller drivmedel. Företagsemblem kan anges i anslutning till märket.',
    ruleTips: 'Visar vägen till en bensinstation eller drivmedelsanläggning.'
  },
  {
    id: 'h4',
    title: 'Gas för fordonsdrift',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h04.-gas-for-fordonsdrift/h4-1.png',
    description: 'Märket anger anläggningar som tillhandahåller olika typer av fordonsgas där typ av gas framgår av förkortningen i märket. Förkortningen CNG anger komprimerad naturgas. Transportstyrelsen får meddela föreskrifter om vilka andra förkortningar som får förekomma och vad de anger.',
    ruleTips: 'Visar vägen till en tankstation för fordonsgas (CNG/LBG).'
  },
  {
    id: 'h5',
    title: 'Servering',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h05.-servering/h5-1.png',
    description: 'Märket anger en anläggning som serverar drycker och enklare maträtter.',
    ruleTips: 'Visar vägen till ett kafé eller enklare serveringsställe.'
  },
  {
    id: 'h6',
    title: 'Restaurang',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h06.-restaurang/h6-1.png',
    description: '',
    ruleTips: 'Visar vägen till en restaurang.'
  },
  {
    id: 'h7',
    title: 'Hotell',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h07.-hotell/h7-1.png',
    description: '',
    ruleTips: 'Visar vägen till ett hotell eller motell.'
  },
  {
    id: 'h8',
    title: 'Vandrarhem',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h08.-vandrarhem/h8-1.png',
    description: '',
    ruleTips: 'Visar vägen till ett vandrarhem.'
  },
  {
    id: 'h9',
    title: 'Stugby',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H9',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h09.-stugby/h9-1.png',
    description: 'Märket anger en anläggning med ett större antal stugor.',
    ruleTips: 'Visar vägen till en stugby med stugor för uthyrning.'
  },
  {
    id: 'h10',
    title: 'Stuga',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h10.-stuga/h10-1.png',
    description: 'Märket anger en anläggning med ett fåtal stugor.',
    ruleTips: 'Visar vägen till en enskild stuga för uthyrning.'
  },
  {
    id: 'h11',
    title: 'Campingplats',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H11',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h11.-campingplats/h11-1.png',
    description: 'Märket anger en anläggning som tillhandahåller platser för såväl tält som fordon med bostadsutrymme.',
    ruleTips: 'Visar vägen till en campingplats för tält och husvagnar.'
  },
  {
    id: 'h12',
    title: 'Husvagnsplats',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H12',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h12.-husvagnsplats/h12-1.png',
    description: 'Märket anger en anläggning som enbart tillhandahåller platser för fordon med bostadsutrymme.',
    ruleTips: 'Visar vägen till en särskild uppställningsplats för husvagnar eller husbilar.'
  },
  {
    id: 'h13',
    title: 'Rastplats',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H13',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h13.-rastplats/h13-1.png',
    description: 'Märket anger en rastplats där det finns toalett som är tillgänglig även för rörelsehindrade.',
    ruleTips: 'Visar vägen till en iordningställd rastplats vid vägen med t.ex. bänkar och soptunnor.'
  },
  {
    id: 'h14',
    title: 'Toalett',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H14',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h14.-toalett/h14-1.png',
    description: 'Märket anger en toalett som är tillgänglig även för rörelsehindrade.',
    ruleTips: 'Visar var det finns en offentlig toalett.'
  },
  {
    id: 'h15',
    title: 'Badplats',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H15',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h15.-badplats/h15-1.png',
    description: 'Märket anger en badstrand eller annan badanläggning.',
    ruleTips: 'Visar vägen till en ordnad badplats.'
  },
  {
    id: 'h16',
    title: 'Friluftsområde',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H16',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h16.-friluftsomrade/h16-1.png',
    description: '',
    ruleTips: 'Visar vägen till ett område lämpat för friluftsliv och rekreation.'
  },
  {
    id: 'h17',
    title: 'Vandringsled',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H17',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h17.-vandringsled/h17-1.png',
    description: '',
    ruleTips: 'Visar vägen till en markerad vandringsled.'
  },
  {
    id: 'h18',
    title: 'Stollift',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H18',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h18.-stollift/h18-1.png',
    description: 'Märket anger en liftanläggning med stolar eller liknande.',
    ruleTips: 'Visar vägen till en stollift i en skidanläggning.'
  },
  {
    id: 'h19',
    title: 'Släplift',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H19',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h19.-slaplift/h19-1.png',
    description: 'Märket anger en liftanläggning där skidåkare dras fram.',
    ruleTips: 'Visar vägen till en släplift för skidåkning.'
  },
  {
    id: 'h20',
    title: 'Golfbana',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H20',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h20.-golfbana/h20-1.png',
    description: '',
    ruleTips: 'Visar vägen till en golfbana.'
  },
  {
    id: 'h21',
    title: 'Försäljningsställe för fiskekort',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H21',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h21.-forsaljningsstalle-for-fiskekort/h21-1.png',
    description: '',
    ruleTips: 'Visar var du kan köpa fiskekort för spöfiske i området.'
  },
  {
    id: 'h22',
    title: 'Sevärdhet',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H22',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h22.-sevardhet/h22-1.png',
    description: 'Märket anger en sevärdhet av nationellt intresse. Sevärdhetens art anges i anslutning till märket.',
    ruleTips: 'Märket anger en kulturhistoriskt intressant plats eller turistisk sevärdhet.'
  },
  {
    id: 'h23',
    title: 'Förberedande upplysning om vägnära service',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H23',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h23.-forberedande-upplysning/h23.png',
    description: 'Märket anger vägnära serviceanläggningar samt i vissa fall namn på dessa. Symbol för serviceanläggningarna drivmedel, restaurang och hotell kan vara kompletterade med företagsemblem eller företagsnamn. På märket anges avståndet till aktuell avfart eller korsning.',
    ruleTips: 'Informerar i förväg om vilken service (t.ex. drivmedel, mat, toalett) som finns tillgänglig vid en kommande avfart.'
  },
  {
    id: 'h24',
    title: 'Rum och frukost',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H24',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h24.-rum-och-frukost/h24-1.png',
    description: 'Märket anger en anläggning som tillhandahåller rum för övernattning och frukost.',
    ruleTips: 'Visar vägen till boende med Bed & Breakfast.'
  },
  {
    id: 'h25',
    title: 'Gårdsbutik',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H25',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h25.-gardsbutik/h25.png',
    description: 'Märket anger en anläggning med försäljning av lokalt tillverkade eller närodlade produkter.',
    ruleTips: 'Visar vägen till en gårdsbutik som säljer t.ex. lokala råvaror eller hantverk.'
  },
  {
    id: 'h26',
    title: 'Hantverk',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H26',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h26.-hantverk/h26.png',
    description: 'Märket anger en anläggning med tillverkning och försäljning av hantverksprodukter.',
    ruleTips: 'Visar vägen till en verkstad eller försäljning av lokalt hantverk.'
  },
  {
    id: 'h27',
    title: 'Laddstation',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H27',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h27.-laddstation/h27.png',
    description: 'Märket anger en anläggning för extern laddning med elektrisk energi för fordons framdrivning.',
    ruleTips: 'Visar vägen till en laddstation för elfordon.'
  },
  {
    id: 'h28',
    title: 'Anläggning som enbart tillhandahåller platser för bilar med bostadsutrymme',
    categoryCode: 'H_SERVICE',
    categoryName: 'H. Lokaliseringsmärken för upplysning om serviceanläggningar med mera',
    code: 'H28',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h28.-anlaggning-bilar-bostadsutrymme/h28.png',
    description: 'Märket anger en anläggning som enbart tillhandahåller platser för bilar med bostadsutrymme.',
    ruleTips: 'Märket anger en ställplats avsedd enbart för husbilar.'
  },


  // I. Lokaliseringsmärken för turistiskt intressanta mål med mera    ---  klar
  {
    id: 'i1',
    title: 'Turistväg',
    categoryCode: 'I_TURISM',
    categoryName: 'I. Lokaliseringsmärken för turistiskt intressanta mål med mera',
    code: 'I1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/i.-lokaliseringsmarken-for-turistiskt-intressanta-mal/i01.-turistvag/i1-1.png',
    description: 'Märket anger en väg eller vägsträckning av turistiskt intresse. Märket kan vara infogat i ett lokaliseringsmärke för vägvisning.',
    ruleTips: 'Märket visar vägen längs en särskilt naturskön eller turistiskt intressant vägsträcka.'
  },
  {
    id: 'i2',
    title: 'Turistområde',
    categoryCode: 'I_TURISM',
    categoryName: 'I. Lokaliseringsmärken för turistiskt intressanta mål med mera',
    code: 'I2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/i.-lokaliseringsmarken-for-turistiskt-intressanta-mal/i02.-turistomrade/i2-1.png',
    description: 'Symbolen på märket är anpassad till temat för turistområdet. Symbolen kan vara infogad i ett lokaliseringsmärke för vägvisning. Transportstyrelsen får meddela föreskrifter om vilka symboler som får användas.',
    ruleTips: 'Visar vägen till ett större turistområde med flera sevärdheter eller aktiviteter.'
  },
  {
    id: 'i3',
    title: 'Landmärke',
    categoryCode: 'I_TURISM',
    categoryName: 'I. Lokaliseringsmärken för turistiskt intressanta mål med mera',
    code: 'I3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/i.-lokaliseringsmarken-for-turistiskt-intressanta-mal/i03.-landmarke/i3-1.png',
    description: 'Märket upplyser om ett landmärke av turistiskt intresse som kan ses från vägen. Symbolen på märket visar en siluett av platsen. Transportstyrelsen får meddela föreskrifter om vilka symboler som får användas.',
    ruleTips: 'Visar vägen till ett känt landmärke eller en särskild byggnad/monument.'
  },
  {
    id: 'i4',
    title: 'Världsarv',
    categoryCode: 'I_TURISM',
    categoryName: 'I. Lokaliseringsmärken för turistiskt intressanta mål med mera',
    code: 'I4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/i.-lokaliseringsmarken-for-turistiskt-intressanta-mal/i04.-varldsarv/i4-1.png',
    description: 'Märket anger ett av UNESCO beslutat världsarv. Märket kan vara infogat i ett lokaliseringsmärke för vägvisning.',
    ruleTips: 'Visar vägen till ett av UNESCO utsett världsarv.'
  },


  // J. Upplysningsmärken    --- klar
  {
    id: 'j2',
    title: 'Vägsaltning upphör',
    categoryCode: 'J_UPPLYSNINGSMARKEN',
    categoryName: 'J. Upplysningsmärken',
    code: 'J2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/j.-upplysningsmarken/j02.-upplysningsmarke/j2-1.png',
    description: 'Märket ger upplysning av väsentligt intresse för framkomlighet eller säkerhet som inte kan ges på annat sätt. Varnings- eller förbudsmärke och lokaliseringsmärkena F14, vägnummer, och F15, omledning, kan vara infogade som förberedande upplysning. Upplysning med versal och gemen text kan förekomma.',
    ruleTips: 'Informerar om att vägsaltning inte längre utförs på den kommande vägsträckan, vilket innebär en ökad risk för halka under vinterförhållanden.'
  },
  {
    id: 'j3',
    title: 'Livsfarlig ledning',
    categoryCode: 'J_UPPLYSNINGSMARKEN',
    categoryName: 'J. Upplysningsmärken',
    code: 'J3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/j.-upplysningsmarken/j03.-livsfarlig-ledning/j3-1.png',
    description: 'Märket anger att det finns en elektrisk ledning över vägen eller leden som kan innebära fara.',
    ruleTips: 'Varnar för elektrisk luftledning med livsfarlig spänning, exempelvis vid lågt i stånd för transport av höga laster eller mastarbete.'
  },


  // M. Vägmarkeringar     --- klar 
  {
    id: 'm1',
    title: 'Mittlinje eller körfältslinje',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m01.-mittlinje-eller-korfaltslinje/m1-1.png',
    description: 'Mittlinje anger gränsen mellan körfält avsedda för färd i motsatta färdriktningar. Körfältslinje anger gränsen mellan körfält för färd i samma riktning. Markeringen har längdförhållandet 1:3 eller 1:1 mellan dellinje och mellanrum. Mittlinje kan även ange en cykelbanas mitt och har då längdförhållandet 1:1 mellan dellinje och mellanrum.',
    ruleTips: 'Delar upp vägbanan i körfält eller riktningar med korta streck.'
  },
  {
    id: 'm2',
    title: 'Kantlinje',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m02.-kantlinje/m2-1.png',
    description: 'Markeringen anger en körbanas yttre gräns. Markeringen har längdförhållandet 1:2 mellan dellinje och mellanrum.',
    ruleTips: 'Markerar vägbanans yttre yta och ytterkant.'
  },
  {
    id: 'm3',
    title: 'Varningslinje',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m03.-varningslinje/m3-1.png',
    description: 'Varningslinje används för att informera om att linjen är olämplig att överskrida på grund av trafikförhållandena. Markeringen anger gränsen mellan körfält avsedda för färd i motsatta färdriktningar. Markeringen kan även användas för att upplysa om en kommande heldragen linje. Markeringen har längdförhållandet 3:1 mellan dellinje och mellanrum.',
    ruleTips: 'Längre streck som varnar för att det är sämre sikt eller fara längre fram vid omkörning.'
  },
  {
    id: 'm4',
    title: 'Ledlinje',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m04.-ledlinje/m4-1.png',
    description: 'Markeringen anger lämplig färdväg för trafik i komplicerade korsningar. Markeringen används även i andra fall där det finns behov av ledning. Markeringen har längdförhållandet 1:1 mellan dellinje och mellanrum.',
    ruleTips: 'Vägleder trafiken genom svåra eller komplicerade korsningar och trafikplatser.'
  },
  {
    id: 'm5',
    title: 'Cykelfältslinje',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m05.-cykelfaltslinje/m5-1.png',
    description: 'Markeringen anger gränsen mellan ett cykelfält och ett annat körfält. Markeringen har längdförhållandet 1:1 mellan dellinje och mellanrum.',
    ruleTips: 'Avgränsar ett körfält som är avsett för cyklister och mopedister.'
  },
  {
    id: 'm6',
    title: 'Linje för fordon i linjetrafik med mera',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m06.-linje-for-fordon-i-linjetrafik-med-flera/m6-1.png',
    description: '',
    ruleTips: 'Markerar körfält avsett för kollektivtrafik (bussar).'
  },
  {
    id: 'm7',
    title: 'Reversibelt körfält',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m07.-reversibelt-korfalt/m7-1.png',
    description: 'Markeringen avgränsar körfält som upplåts för trafik omväxlande i den ena och i den andra färdriktningen. Markeringen har längdförhållandet 1:1 mellan dellinje och mellanrum.',
    ruleTips: 'Körfält vars färdriktning kan ändras under olika tider på dygnet.'
  },
  {
    id: 'm8',
    title: 'Heldragen linje',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m08.-heldragen-linje/m8-1.png',
    description: 'Markeringen anger att bestämmelserna i 3 kap. 11 § eller 12 § tredje stycket trafikförordningen (1998:1276) eller föreskrifter meddelade med stöd av den förordningen är tillämpliga. Heldragen linje kan vara heldragen mittlinje, heldragen körfältslinje eller heldragen kantlinje. Heldragen körfältslinje och heldragen kantlinje är enkel. Heldragen mittlinje kan vara såväl enkel som dubbel.',
    ruleTips: 'Du får inte korsa eller köra på en heldragen linje om det inte är absolut nödvändigt för att passera ett hinder.'
  },
  {
    id: 'm9',
    title: 'Spärrområde',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M9',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m09.-sparromrade/m9-1.png',
    description: 'Markeringen anger ett område där fordon inte får föras enligt 3 kap. 11 § trafikförordningen. Markeringen består av vinklade eller snedställda streck beroende på förhållandena på platsen. Del av eller hela området kan utföras i vitt.',
    ruleTips: 'Det är absolut förbjudet att köra in på eller korsa ett spärrområde.'
  },
  {
    id: 'm10',
    title: 'Mittlinje eller körfältslinje och heldragen linje',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m10.-mittlinje-eller-korfaltslinje-och-heldragen-linje/m10-1.png',
    description: 'Markeringen används där det inte är tillåtet för fordon som befinner sig på samma sida som den heldragna linjen att byta körfält.',
    ruleTips: 'Kombinerad linje där omkörning är tillåten från den brutna linjens sida men förbjuden från den heldragna sidan.'
  },
  {
    id: 'm11',
    title: 'Varningslinje och heldragen linje',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M11',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m11.-varningslinje-och-heldragen-linje/m11-1.png',
    description: 'Markeringen används där det inte är tillåtet för fordon som befinner sig på samma sida som den heldragna linjen att byta körfält.',
    ruleTips: 'Varnar för ökad risk och förbjuder överträdelse från den heldragna sidan.'
  },
  {
    id: 'm12',
    title: 'Mittlinje och varningslinje',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M12',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m12.-mittlinje-och-varningslinje/m12-1.png',
    description: 'Markeringen används där det är olämpligt att överskrida varningslinjen på grund av trafikförhållandena.',
    ruleTips: 'Kombination som varnar för siktförhållanden och reglerar körfältsbyten.'
  },
  {
    id: 'm13',
    title: 'Stopplinje',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkering',
    code: 'M13',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m13.-stopplinje/m13-1.png',
    description: 'Markeringen anger var ett fordon ska stannas enligt ett vägmärke, en trafiksignal eller Y1, ljussignal.',
    ruleTips: 'Anger var du är skyldig att stanna vid stopplikts- eller rödlyktssignal.'
  },
  {
    id: 'm14',
    title: 'Väjningslinje',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M14',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m14.-vajningslinje/m14-1.png',
    description: 'Markeringen anger den linje som fordon inte bör passera när föraren iakttar väjningsplikt.',
    ruleTips: 'Triangelmönstrade linjer som visar var du har väjningsplikt mot korsande trafik.'
  },
  {
    id: 'm15',
    title: 'Övergångsställe',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M15',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m15.-overgangsstalle/m15-1.png',
    description: 'Markeringen anger ett övergångsställe och är utförd där märke B3, övergångsställe, är uppsatt.',
    ruleTips: 'Zebramålning som markerar övergångsställe för gående.'
  },
  {
    id: 'm16',
    title: 'Cykelpassage eller cykelöverfart',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M16',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m16.-cykelpassage-eller-cykeloverfart/m16-1.jpg',
    description: 'Markeringen anger en cykelpassage eller en cykelöverfart där märke B8, cykelöverfart, är uppsatt. Om markeringen avser en cykelöverfart ska den kombineras med markeringen M14, väjningslinje. Markeringen M15, övergångsställe, får utgöra en av begränsningslinjerna till en cykelpassage eller en cykelöverfart.',
    ruleTips: 'Markerar var cyklister passerar eller korsar vägbanan.'
  },
  {
    id: 'm17',
    title: 'Farthinder',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M17',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m17.-farthinder/m17-1.png',
    description: 'Markeringen anger ett farthinder i form av gupp, grop eller liknande.',
    ruleTips: 'Målade markeringar som varnar för eller markerar ett farthinder på vägen.'
  },
  {
    id: 'm17a',
    title: 'Cykelbox',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M17a',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m17a.-cykelbox/m17a-cykelbox.png',
    description: 'Markeringen anger lämplig placering för cyklande och förare av moped klass II. Markeringen får anpassas efter förhållandena på platsen.',
    ruleTips: 'Ett avskilt utrymme framför bilarna där cyklister kan ställa sig vid rödljus.'
  },
  {
    id: 'm18',
    title: 'Förberedande upplysning om väjningsplikt eller stopplikt',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M18',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m18.-forberedande-upplysning-om-vajningsplikt-eller-stopplikt/m18-1.png',
    description: 'Markeringen anger att väjningsplikt eller stopplikt gäller längre fram i färdriktningen.',
    ruleTips: 'Målad triangel på vägen som förvarnar om att du har väjningsplikt längre fram.'
  },
  {
    id: 'm19',
    title: 'Körfältspilar',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M19',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m19.-korfaltspilar/m19-1.png',
    description: 'Markeringen upplyser, för närmaste korsning, lämpligt körfält för fortsatt färd. Är körfältet avgränsat med heldragen körfältslinje ska förare följa den eller de riktningar som pilen visar. Detta gäller dock inte förare som i anslutning till korsningen färdas in i eller från ett reserverat körfält. Körfältspil med två pilangivelser i samma riktning upplyser om lämpligt körfält för fortsatt färd i närmaste och därpå följande korsning. Markeringarna upplyser också om att fordon inte får föras i motsatt riktning.',
    ruleTips: 'Visar vilken färdriktning eller vilket körfält du måste välja i korsningen.'
  },
  {
    id: 'm20',
    title: 'Körfältsbyte',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M20',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m20.-korfaltsbyte/m20-1.png',
    description: 'Markeringen anger att körfältsbyte snarast måste ske.',
    ruleTips: 'Snedställd pil som varnar för att det nuvarande körfältet upphör och att du måste byta fält.'
  },
  {
    id: 'm21',
    title: 'Förbud mot att stanna och parkera',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M21',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m21.-forbud-mot-att-stanna-och-parkera/m21-1.png',
    description: 'Markeringen upplyser om förbud mot att stanna och parkera fordon och är placerad i körbanans kant. Avvikelse från färg får inte ske.',
    ruleTips: 'Gul linje längs med vägkanten eller trottoaren som förbjuder både stannande och parkering.'
  },
  {
    id: 'm22',
    title: 'Förbud mot att parkera',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M22',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m22.-forbud-mot-att-parkera/m22-1.png',
    description: 'Markeringen upplyser om förbud mot att parkera fordon och är placerad i körbanans kant. Markeringen upplyser även om utsträckning av busshållplats. Markeringen har längdförhållandet 1:1 mellan dellinje och mellanrum. Avvikelse från färg får inte ske.',
    ruleTips: 'Linje eller markering som förbjuder parkering.'
  },
  {
    id: 'm23',
    title: 'Förbud mot att stanna och parkera eller att parkera (Zon/Sicksack)',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringار',
    code: 'M23',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m23.-forbud-mot-att-stanna-och-parkera-eller-att-parkera/m23-1.png',
    description: 'Markeringen används som förstärkning av markeringarna M21, förbud mot att stanna och parkera, och M22, förbud mot att parkera. Avvikelse från färg får inte ske.',
    ruleTips: 'Sicksack-linje vid kanten som markerar förbud mot att stanna eller parkera (t.ex. vid skolor eller busslinjer).'
  },
  {
    id: 'm24',
    title: 'Uppställningsplats',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M24',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m24.-uppstallningsplats/m24-1.png',
    description: 'Markeringen anger gränsen för uppställningsplats för fordon. Markeringen kan vara utförd med bruten linje.',
    ruleTips: 'Markerar uppmålade parkeringsrutor eller uppställningsplatser.'
  },
  {
    id: 'm25',
    title: 'Gång- och cykelpil',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M25',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m25.-gang--och-cykelpil/m25-1.png',
    description: 'Markeringen visar lämplig färdväg för gående eller cyklande och förare av moped klass II.',
    ruleTips: 'Visar riktningen för gående och cyklister på delad bana.'
  },
  {
    id: 'm26',
    title: 'Cykel',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M26',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m26.-cykel/m26-1.png',
    description: 'Markeringen visar bana eller lämplig färdväg för cyklande och förare av moped klass II.',
    ruleTips: 'Symbol som markerar att körfältet eller banan är avsedd för cyklar.'
  },
  {
    id: 'm27',
    title: 'Gående',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M27',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m27.-gaende/m27-1.png',
    description: 'Markeringen visar bana eller lämplig färdväg för gående.',
    ruleTips: 'Symbol som markerar gångbana eller avsnitt för gående.'
  },
  {
    id: 'm28',
    title: 'Buss',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M28',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m28.-buss/m28-1.png',
    description: 'Markeringen visar att körfältet är avsett för fordon i linjetrafik med flera.',
    ruleTips: 'Textmarkering på vägen för bussfil.'
  },
  {
    id: 'm29',
    title: 'Hastighet',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M29',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m29.-hastighet/m29-1.png',
    description: 'Markeringen upplyser om högsta tillåtna hastighet.',
    ruleTips: 'Målad hastighetsbegränsning direkt på asfalt (t.ex. 30 أو 50).'
  },
  {
    id: 'm30',
    title: 'Vägnummer',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M30',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m30.-vagnummer/m30.png',
    description: 'Markeringen upplyser om vägnummer.',
    ruleTips: 'Målat vägnummer på vägbanan för vägledning.'
  },
  {
    id: 'm31',
    title: 'Ändamålsplats',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M31',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m31.-andamalsplats/m31-1.png',
    description: 'Markeringen upplyser om en uppställningsplats som är avsedd för ett visst ändamål. Texten anpassas efter ändamålet.',
    ruleTips: 'Markerar plats avsedd för visst ändamål (t.ex. lastzon - Lastplats).'
  },
  {
    id: 'm32',
    title: 'Stopp',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M32',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m32.-stopp/m32-1.png',
    description: 'Markeringen upplyser om stopplikt. Markeringen används tillsammans med märke B2, stopplikt, för att förstärka anvisningen.',
    ruleTips: 'Texten STOPP målad på vägbanan som kompletterar stopplinjen och stopplikten.'
  },
  {
    id: 'm33',
    title: 'Rörelsehindrad',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M33',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m33.-rorelsehindrad/m33-1.png',
    description: 'Markeringen upplyser om uppställningsplats endast för rörelsehindrade.',
    ruleTips: 'Rullstolsymbol som markerar parkeringsplats reserverad för rörelsehindrade.'
  },
  {
    id: 'm34',
    title: 'Information',
    categoryCode: 'M_VAGMARKERINGAR',
    categoryName: 'M. Vägmarkeringar',
    code: 'M34',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m34.-information/m34-1.png',
    description: 'Markeringen ger upplysning, varning eller vägledning av vikt för trafikanten.',
    ruleTips: 'Markerar information eller särskild zon på vägen.'
  },


  // P. Tecken av polisman med flera     --- klar 
  {
    id: 'p1',
    title: 'Stopp',
    categoryCode: 'P_POLIS',
    categoryName: 'P. Tecken av polisman med flera',
    code: 'P1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p01.-stopp/p1-1.png',
    description: 'Tecknet anger stopp för den trafikant som kommer framifrån eller bakifrån. Tecknet används i vägkorsning och gäller så länge polismannen vänder sig åt samma håll. För trafikanter som kommer från sidan betyder tecknet att vägen är fri och att det är tillåtet att köra. Tecknet får ges i kombination med tecken P2, stopp. Tecknet kan ges med en stoppspade.',
    ruleTips: 'Polismans tecken som betyder absolut stopp för trafik som närmar sig framifrån eller bakifrån.'
  },
  {
    id: 'p2',
    title: 'Stopp',
    categoryCode: 'P_POLIS',
    categoryName: 'P. Tecken av polisman med flera',
    code: 'P2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p02.-stopp/p2-1.png',
    description: 'Tecknet anger stopp för den trafikant som handflatan är vänd mot. Tecknet kan ges med en stoppspade.',
    ruleTips: 'Stoppsignal från  polisman riktad mot trafik i en specifik körriktning.'
  },
  {
    id: 'p3',
    title: 'Stopp',
    categoryCode: 'P_POLIS',
    categoryName: 'P. Tecken av polisman med flera',
    code: 'P3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p03.-stopp/p3-1.png',
    description: 'Tecknet anger stopp för den trafikant som lyktan är vänd mot. Tecknet används under mörker och vid nedsatt sikt. Lyktan hålls i den position där den lättast uppfattas av trafikanter.',
    ruleTips: 'Stoppsignal medlyft arm eller stoppspade/lykta från polisman.'
  },
  {
    id: 'p4',
    title: 'Kör fram',
    categoryCode: 'P_POLIS',
    categoryName: 'P. Tecken av polisman med flera',
    code: 'P4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p04.-kor-fram/p4-1.png',
    description: 'Tecknet anger att trafikanter i den färdriktning som tecknet ges får fortsätta framåt. Tecknet ges med en vinkande rörelse i färdriktningen.',
    ruleTips: 'Tecken från polisman som innebär att du får köra fram i angiven riktning.'
  },
  {
    id: 'p5',
    title: 'Minska hastigheten',
    categoryCode: 'P_POLIS',
    categoryName: 'P. Tecken av polisman med flera',
    code: 'P5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p05.-minska-hastigheten/p5-1.png',
    description: 'Tecknet anger att den trafikant som polismannen är vänd mot ska minska hastigheten. Under mörker och vid nedsatt sikt kan tecknet vara förtydligat med en lykta som visar vitt eller gult ljus eller en reflexanordning som återkastar vitt eller gult ljus.',
    ruleTips: 'Polisman som sänker armen upp och ned för att uppmana till sänkt hastighet.'
  },
  {
    id: 'p6',
    title: 'Kontroll',
    categoryCode: 'P_POLIS',
    categoryName: 'P. Tecken av polisman med flera',
    code: 'P6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p06.-kontroll/p6-1.png',
    description: 'Tecknet anger att fordonsförare ska köra in på kontrollplats för kontroll. Visas symbol för visst eller vissa slag av fordon enligt 2 kap. 28 § gäller skyldigheten att köra in för kontroll endast för förare av dessa fordon. Tecknet är anpassat till förhållandena på platsen.',
    ruleTips: 'Informerar om att det pågår en polis- eller myndighetskontroll längre fram.'
  },
  {
    id: 'p7',
    title: 'Förberedande upplysning om kontroll',
    categoryCode: 'P_POLIS',
    categoryName: 'P. Tecken av polisman med flera',
    code: 'P7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p07.-forberedande-upplysning-om-kontroll/p7-1.png',
    description: 'Tecknet ger förberedande upplysning om kontroll. Tecknet är anpassat till förhållandena på platsen.',
    ruleTips: 'Förvarnar om att en kontrollstation (t.ex. tull eller poliskontroll) närmar sig på angivet avstånd (t.ex. 1000 m).'
  },
  {
    id: 'p8',
    title: 'Minska hastigheten',
    categoryCode: 'P_POLIS',
    categoryName: 'P. Tecken av polisman med flera',
    code: 'P8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p08.-minska-hastigheten/p8-1.png',
    description: 'Tecknet anger att de trafikanter som befinner sig bakom polisfordonet ska minska hastigheten. Under mörker och vid nedsatt sikt får tecknet förtydligas med en lykta som visar vitt eller gult ljus eller en reflexanordning som återkastar vitt eller gult ljus.',
    ruleTips: 'Skylt eller signal från polisfordon som uppmanar till sänkt hastighet.'
  },
  {
    id: 'p9',
    title: 'Minska hastigheten',
    categoryCode: 'P_POLIS',
    categoryName: 'P. Tecken av polisman med flera',
    code: 'P9',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p09.-minska-hastigheten/p9-1.png',
    description: 'Tecknet anger att de trafikanter som möter polisfordonet ska minska hastigheten. Under mörker och vid nedsatt sikt får tecknet förtydligas med en lykta som visar vitt eller gult ljus eller en reflexanordning som återkastar vitt eller gult ljus.',
    ruleTips: 'Anvisning från polisbil om att sakta ner.'
  },
  {
    id: 'p10',
    title: 'Följ efter och stanna bakom polisfordonet när detta stannar',
    categoryCode: 'P_POLIS',
    categoryName: 'P. Tecken av polisman med flera',
    code: 'P10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p10.-folj-med-och-stanna/p10-1.png',
    description: 'Tecknet anger att föraren av det fordon som befinner sig bakom polisfordonet ska följa efter det och stanna när polisfordonet stannar. Tecknet kan ges med en stoppspade.',
    ruleTips: 'Order från polisen (via skylt på taket t.ex. "Följ efter") om att köra efter polisbilen tills den stannar.'
  },
  {
    id: 'p11',
    title: 'Kör in till vägkanten och stanna framför polisfordonet',
    categoryCode: 'P_POLIS',
    categoryName: 'P. Tecken av polisman med flera',
    code: 'P11',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p11.-kor-in-till-vagkanten/p11-1.png',
    description: 'Tecknet anger att föraren av det fordon som befinner sig framför polisfordonet ska köra in till vägkanten och stanna. Tecknet ges med växelvis blinkande blått och rött ljus.',
    ruleTips: 'Anvisning från polisen om att dra åt kanten och stanna framför polisbilen.'
  },

 
  // S. Symboler    --- klar
  {
    id: 's1',
    title: 'Tung lastbil',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s01.-tung-lastbil/s1-1.png',
    description: '',
    ruleTips: 'Symbol som anger att regeln eller skylten gäller för tung lastbil (totalvikt över 3,5 ton).'
  },
  {
    id: 's2',
    title: 'Tung lastbil med tillkopplad släpvagn',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s02.-tung-lastbil-med-slapvagn/s2-1.png',
    description: '',
    ruleTips: 'Symbol som visar att skylten avser tung lastbil med tillkopplat släp.'
  },
  {
    id: 's3',
    title: 'Personbil',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s03.-personbil/s3-1.png',
    description: '',
    ruleTips: 'Symbol som anger att anvisningen gäller för personbil.'
  },
  {
    id: 's4',
    title: 'Personbil med tillkopplad släpkärra',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s04.-personbil-med-slapkarra/s4-1.png',
    description: '',
    ruleTips: 'Symbol för personbil med släpvagn eller husvagn.'
  },
  {
    id: 's5',
    title: 'Buss',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s05.-buss/s5-1.png',
    description: '',
    ruleTips: 'Symbol som visar att anvisningen avser buss.'
  },
  {
    id: 's6',
    title: 'Traktor och motorredskap klass II',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s06.-traktor-och-motorredskap-klass-ii/s6-1.png',
    description: '',
    ruleTips: 'Symbol för traktor samt långsamtgående motorredskap (klass II).'
  },
  {
    id: 's7',
    title: 'Motorcykel',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s07.-motorcykel/s7-1.png',
    description: 'Symbolen anger tvåhjulig motorcykel utan sidvagn och tvåhjulig moped klass I utan sidvagn.',
    ruleTips: 'Symbol som visar att anvisningen gäller för tvåhjulig motorcykel.'
  },
  {
    id: 's8',
    title: 'Cykel och moped klass II',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s08.-cykel-och-moped-klass-ii/s8-1.png',
    description: '',
    ruleTips: 'Symbol som gäller för både cykel och moped klass II.'
  },
  {
    id: 's9',
    title: 'Släpkärra',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S9',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s09.-slapkarra/s9-1.png',
    description: '',
    ruleTips: 'Symbol som visar att anvisningen avser släpvagn/släpfordon.'
  },
  {
    id: 's10',
    title: 'Gående',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s10.-gaende/s10-1.png',
    description: '',
    ruleTips: 'Symbol som avser gående och fotgängare.'
  },
  {
    id: 's11',
    title: 'Rörelsehindrade',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S11',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s11.-rorelsehindrade/s11-1.png',
    description: '',
    ruleTips: 'Rullstolssymbol som viser att utrymmet eller regeln är avsedd för personer med rörelsehinder (med parkeringstillstånd).'
  },
  {
    id: 's12',
    title: 'Personbil klass II',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S12',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s12.-personbil-klass-ii/s12-1.png',
    description: '',
    ruleTips: 'Symbol för husbil (Personbil klass II).'
  },
  {
    id: 's13',
    title: 'Personfärja',
    categoryCode: 'S_SYMBOLER',
    categoryName: 'S. Symboler',
    code: 'S13',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s13.-personfarja/s13-1.png',
    description: 'Symbolen anger ett färjeläge för personfärja eller att angivet färdmål endast kan nås med färja avsedd för persontransport.',
    ruleTips: 'Symbol för passagerarfärja/personfärja.'
  },


  // T. Tilläggstavlor     --- klar
  {
    id: 't1',
    title: 'Vägsträckas längd',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t01.-vagstrackas-langd/t1-1.png',
    description: 'Tavlan anger början och slutet på en vägsträcka.',
    ruleTips: 'Anger sträckans längd som huvudmärkes anvisning eller förbud gäller på (t.ex. 200-800 m).'
  },
  {
    id: 't2',
    title: 'Avstånd',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t02.-avstand/t2-1.png',
    description: 'Tavlan anger avståndet till det som vägmärket avser.',
    ruleTips: 'Anger avståndet från märket till den plats där anvisningen eller faran börjar.'
  },
  {
    id: 't3',
    title: 'Avstånd till stopplikt',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t03.-avstand-till-stopplikt/t3-1.png',
    description: 'Tavlan används endast under märke B1, väjningsplikt.',
    ruleTips: 'Tilläggstavla under väjningspliktsmärke som förvarnar om stopplikt på angivet avstånd (t.ex. STOPP 200 m).'
  },
  {
    id: 't4',
    title: 'Fri bredd',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t04.-fri-bredd/t4-1.png',
    description: '',
    ruleTips: 'Anger den fria bredden på vägen eller passagen.'
  },
  {
    id: 't5',
    title: 'Totalvikt',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t05.-totalvikt/t5.png',
    description: 'Tavlan anger att angivelsen på märket gäller fordon med en totalvikt som överstiger det angivna värdet.',
    ruleTips: 'Anger att huvudmärket endast gäller fordon eller fordonskombinationer med en viss totalvikt.'
  },
  {
    id: 't6',
    title: 'Tidsangivelse',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t06.-tidangivelse/t6-1.png',
    description: 'Tavlan anger när angivelsen på vägmärket gäller. Används klockslag i kombination med andra villkor anger tavlan även när dessa villkor gäller. Svarta eller vita siffror utan parentes avser vardagar utom vardag före sön- och helgdag. Svarta eller vita siffror inom parentes avser vardag före sön- och helgdag. Röda siffror avser sön- och helgdag. Om angivelsen sträcker sig över midnatt gäller tidsperioden efter midnatt påföljande dag. Anges viss dag eller viss veckodag gäller regleringen denna dag oavsett om dagen är en vardag, söndag eller helgdag.',
    ruleTips: 'Svarta siffror gäller vardagar utom dag före söndag. Siffror inom parentes gäller lördagar/dag före helgdag. Röda siffror gäller söndagar och helgdagar.'
  },
  {
    id: 't7',
    title: 'Rörelsehindrade',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t07.-rorelsehindrade/t7.png',
    description: 'Tavlan anger att angivelsen på märket gäller den som får parkera enligt ett parkeringstillstånd som avses i 13 kap. 8 eller 9 § trafikförordningen. Tavlan används endast under märke E19, parkering. Anges tid med tavla T6, tidsangivelse, gäller den kompletterande anvisningen enligt de närmare föreskrifterna till tavlan T6, tidsangivelse.',
    ruleTips: 'Anger att parkering eller anvisning endast gäller för personer med särskilt parkeringstillstånd för rörelsehindrade.'
  },
  {
    id: 't8',
    title: 'Symboltavla',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t08.-symboltavla/t8-1.png',
    description: 'Tavlan anger att det märke som tavlan är uppsatt under endast gäller för det fordonsslag eller den trafikantgrupp som anges på tavlan. Fordonsslaget eller trafikantgruppen anges med symbol enligt 28 §. Anges tid enligt tavla T6, tidsangivelse, gäller den kompletterande anvisningen enligt de närmare föreskrifterna till tavlan T6, tidsangivelse.',
    ruleTips: 'Innehåller en symbol (t.ex. lastbil) som visar vilken trafikantgrupp huvudmärket gäller för.'
  },
  {
    id: 't9',
    title: 'Nedsatt syn',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T9',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t09.-nedsatt-syn/t9-1.png',
    description: 'Tavlan anger att personer med nedsatt syn är vanligt förekommande.',
    ruleTips: 'Varnar för att synskadade personer ofta korsar vägen eller vistas i området.'
  },
  {
    id: 't10',
    title: 'Nedsatt hörsel',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t10.-nedsatt-horsel/t10.png',
    description: 'Tavlan anger att personer med nedsatt hörsel är vanligt förekommande. Tavlan har alltid gul bottenfärg.',
    ruleTips: 'Varnar för att hörselskadade personer ofta korsar vägen eller vistas i området.'
  },
  {
    id: 't11',
    title: 'Utsträckning',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T11',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t11.-utstrackning/t11-1.png',
    description: 'Tavlan med dubbelriktade pilar, uppsatt vågrätt eller lodrätt, anger att angivelsen gäller på båda sidor av märket. Tavlan med nedåtriktad pil anger att angivelsen slutar. Tavlan med höger- eller vänsterriktad pil visar att angivelsen gäller åt det håll pilen visar. Används tavlan under märke E19, parkering, har den svarta tecken på vit botten utan bård. Tavlorna kan även användas fristående för att ange avgränsning av uppställningsplatser på ett område, om det vid infarten till området anges att parkering är tillåten.',
    ruleTips: 'Pilar som visar i vilken riktning eller utsträckning från märket som anvisningen (t.ex. parkering) gäller.'
  },
  {
    id: 't12',
    title: 'Riktning',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T12',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t12.-riktning/t12-1.png',
    description: 'Tavlan anger riktning till angivelsen på märket.',
    ruleTips: 'Visar i vilken riktning (t.ex. åt höger eller vänster) anvisningen på huvudmärket gäller.'
  },
  {
    id: 't13',
    title: 'Flervägsväjning',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T13',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t13.-flervagsvajning/t13-1.png',
    description: 'Tavlan anger att förare på samtliga tillfarter i en korsning har väjningsplikt.',
    ruleTips: 'Anger att samtliga tillfarter i korsningen har väjningsplikt. Följ ömsesidig hänsyn.'
  },
  {
    id: 't14',
    title: 'Flervägsstopp',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T14',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t14.-flervagsstopp/t14-1.png',
    description: 'Tavlan anger att förare på samtliga tillfarter i en korsning har stopplikt.',
    ruleTips: 'Anger att alla fordon från samtliga tillfarter i korsningen har stopplikt. Den som stannade först kör i regel först.'
  },
  {
    id: 't15',
    title: 'Vägars fortsättning i korsning',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T15',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t15.-vagars-fortsattning-i-korsning/t15-1.png',
    description: 'Tavlan anger en korsning där förare på en väg som anges med smalt streck har väjningsplikt mot fordon på en väg som anges med brett streck. Symbolen är anpassad efter förhållandena på platsen.',
    ruleTips: 'Det tjocka strecket visar den huvudsakliga vägen (t.ex. huvudled) och dess sträckning genom korsningen.'
  },
  {
    id: 't16',
    title: 'Avgift',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T16',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t16.-avgift/t16.png',
    description: 'Tavlan anger att avgift ska betalas för parkering enligt den taxa som anges på en parkeringsmätare, biljettautomat eller motsvarande och att övriga villkor för parkering som anges där ska iakttas. Anges tid enligt tavla T6, tidsangivelse, gäller den kompletterande anvisningen enligt de närmare föreskrifterna till tavlan T6, tidsangivelse.',
    ruleTips: 'Anger att avgift måste betalas för parkering enligt angivna villkor.'
  },
  {
    id: 't17',
    title: 'Parkeringsskiva',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T17',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t17.-parkeringsskiva/t17-1.png',
    description: 'Tavlan anger att tiden när parkering påbörjats ska anges med en parkeringsskiva eller motsvarande. Anges tid enligt tavla T6, tidsangivelse, gäller den kompletterande anvisningen enligt de närmare föreskrifterna till tavlan T6, tidsangivelse.',
    ruleTips: 'Anger att P-skiva måste användas för tidsbegränsad parkering under angivna tider.'
  },
  {
    id: 't18',
    title: 'Tillåten tid för parkering',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T18',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t18.-tillaten-tid-for-parkering/t18.png',
    description: 'Tavlan anger längsta tillåten tid för parkering. Anges tid enligt tavla T6, tidsangivelse, gäller den kompletterande anvisningen enligt de närmare föreskrifterna till tavlan T6, tidsangivelse.',
    ruleTips: 'Anger den maximalt tillåtna tiden för parkering (t.ex. 2 timmar).'
  },
  {
    id: 't19',
    title: 'Boende',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T19',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t19.-boende/t19.png',
    description: 'Tavlan anger att boende i ett område, med särskilt tillstånd, får parkera enligt särskilda villkor. Texten kan vara kompletterad med områdesbeteckning eller motsvarande. Anges tid enligt tavla T6, tidsangivelse, gäller den kompletterande anvisningen enligt de närmare föreskrifterna till tavlan T6, tidsangivelse.',
    ruleTips: 'Anger att parkering är reserverad eller avgiftsfri för personer med boendeparkeringstillstånd i området.'
  },
  {
    id: 't20',
    title: 'Parkeringsbiljett',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T20',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t20.-parkeringsbiljett/t20.png',
    description: 'Tavlan anger att parkering är avgiftsfri men att parkeringsbiljett ska användas vid parkering. Anges tid enligt tavla T6, tidsangivelse, gäller den kompletterande anvisningen enligt de närmare föreskrifterna till tavlan T6, tidsangivelse.',
    ruleTips: 'Anger att parkeringsbiljett ska köpas och placeras synlig i vindrutan.'
  },
  {
    id: 't21',
    title: 'Uppställning av fordon',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T21',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t21.-uppstallning-av-fordon/t21-1.png',
    description: 'Tavlan anger hur fordon ska ställas upp på en parkeringsplats. Tavlan är anpassad efter förhållandena på platsen.',
    ruleTips: 'Visar hur fordon ska parkeras i förhållande till trottoarkanten/körbanan (t.ex. helt på trottoaren eller i vinkel).'
  },
  {
    id: 't22',
    title: 'Text',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T22',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t22.-text/t22-1.png',
    description: 'Tavlan ger kompletterande anvisning som inte kan ges med någon annan tilläggstavla eller kombinationer av dessa. Anges tid enligt tavla T6, tidsangivelse, gäller den kompletterande anvisningen enligt de närmare föreskrifterna till tavlan T6, tidsangivelse.',
    ruleTips: 'Innehåller kompletterande klartextanvisning till huvudmärket.'
  },
  {
    id: 't23',
    title: 'Tunnelkategori',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T23',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t23.-tunnelkategori/t23-1.jpg',
    description: 'Tavlan används under märke C9, förbud mot trafik med fordon lastat med farligt gods. Bokstaven B, C, D eller E anger tunnelns kategori. Klockslag kan anges på tavlan enligt de närmare föreskrifterna till tilläggstavla T6, tidsangivelse.',
    ruleTips: 'Anger tunnelkategori (t.ex. B, C, D eller E) för inskränkningar gällande transport av farligt gods.'
  },
  {
    id: 't24',
    title: 'Laddplats',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T24',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t24.-laddplats/t24-1.png',
    description: 'Tavlan anger en plats för extern laddning av elektricitet för fordons framdrivning. Tavlan används under märke E19, parkering, och anger att endast fordon med möjlighet till extern laddning av elektricitet för fordonets framdrivning får parkera.',
    ruleTips: 'Anger att parkeringsplatsen endast är avsedd för laddning av elfordon.'
  },
  {
    id: 't25',
    title: 'Öppet dygnet runt',
    categoryCode: 'T_TILLAGGSTAVLOR',
    categoryName: 'T. Tilläggstavlor',
    code: 'T25',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t25.-oppet-dygnet-runt/t25-1.png',
    description: 'Tavlan anger att en servering eller restaurang är öppen dygnet runt. Tavlan används under något av märkena H5, servering, eller H6, restaurang.',
    ruleTips: 'Anger att anläggningen, servicen eller parkeringen är öppen dygnet runt (24 timmar).'
  },

 
  // Trafiksignaler (SIG1 - SIG18)   ---klar 
  {
    id: 'sig1',
    title: 'Röd',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig01.-rod/sig1-1.png',
    description: 'Stopp. Fordon får inte passera stopplinjen eller, om sådan saknas, signalen. Signal med konturpil gäller endast den eller de färdriktningar som anges med pilen.',
    ruleTips: 'Rött ljus betyder stopp. Du får inte passera stopplinjen eller korsa signalen.'
  },
  {
    id: 'sig2',
    title: 'Röd + gul',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig02.-rodgul/sig2-1.png',
    description: 'Växling till grön signalbild är omedelbart förestående. I övrigt har signalbilden samma innebörd som röd.',
    ruleTips: 'Visar att det snart blir grönt. Gör dig beredd att starta men kör inte förrän det slår om till grönt.'
  },
  {
    id: 'sig3',
    title: 'Grön',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig03.-gron/sig3-1.png',
    description: 'Fordon får fortsätta framåt. Grön pil innebär att signalen gäller den färdriktning som anges med pilen. Fordon får föras i pilens riktning även om en annan signalbild visas samtidigt.',
    ruleTips: 'Grönt ljus betyder att du får köra, men du har ändå väjningsplikt mot gående och cyklister som fortfarande korsar gatan.'
  },
  {
    id: 'sig4',
    title: 'Gul',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig04.-gul/sig4-1.png',
    description: 'Stanna. Fordon får inte passera stopplinjen eller, om sådan saknas, signalen i annat fall än då det hunnit så långt fram när signalbilden växlar från grön till gul att det inte kan stannas utan fara. Signal med konturpil gäller endast den eller de färdriktningar som anges med pilen.',
    ruleTips: 'Gult ljus betyder stopp om du kan stanna på ett säkert sätt utan att orsaka en påkörningsolycka bakifrån.'
  },
  {
    id: 'sig5',
    title: 'Blinkande gul',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig05.-blinkande-gul/sig5-1.png',
    description: 'Särskild försiktighet ska iakttas vid passage.',
    ruleTips: 'Signalen är ur funktion eller varnar för fara. Var extra försiktig och följ gällande väjningsregler i korsningen.'
  },
  {
    id: 'sig6',
    title: 'Röd akustisk signal med långsam pulsfrekvens',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig06.-rod-akustisk-signal/sig6-1.png',
    description: 'Förbjudet att beträda en körbana, cykelbana eller järnvägs- eller spårvägskorsning. Gående som befinner sig på körbanan eller cykelbanan när signalen slår om till röd signalbild skall fortsätta till andra sidan. Finns en refug eller liknande anordning skall den gående dock stanna där.',
    ruleTips: 'Ljudsignal för synskadade som anger att det är rött ljus och att det inte är tillåtet att gå över gatan.'
  },
  {
    id: 'sig7',
    title: 'Grön akustisk signal med snabb pulsfrekvens',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig07.-gron-akustisk-signal/sig7-1.png',
    description: 'Körbana, cykelbana eller järnvägs- eller spårvägskorsning får beträdas.',
    ruleTips: 'Ljudsignal för synskadade som anger att det är grönt ljus och säkert att börja korsa gatan.'
  },
  {
    id: 'sig8',
    title: 'S',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig08.-s/sig8-1.png',
    description: 'Stopp. Fordon och spårvagn får inte passera stopplinjen, eller om sådan saknas, signalen.',
    ruleTips: 'Särskild trafiksignal som gäller för spårvagnar och linjebussar i särskilt körfält.'
  },
  {
    id: 'sig9',
    title: 'S + vågrätt streck',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG9',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig09.-svagratt-streck/sig9-1.png',
    description: 'Växling till lodrätt streck är omedelbart förestående. I övrigt har signalbilden samma innebörd som S.',
    ruleTips: 'Stoppsignal för spårvagnar och linjebussar.'
  },
  {
    id: 'sig10',
    title: 'Lodrätt streck eller pil',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig10.-lodratt-streck-eller-pil/sig10-1.png',
    description: 'Fordon och spårvagn får fortsätta framåt. Pil innebär att signalen gäller den färdriktning som anges med pilen.',
    ruleTips: 'Kör tillåtet rakt fram eller i pilens riktning för kollektivtrafik/spårvagn.'
  },
  {
    id: 'sig11',
    title: 'Vågrätt streck',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG11',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig11.-vagratt-streck/sig11-1.png',
    description: 'Stanna. Fordon och spårvagn får inte passera stopplinjen, eller om sådan saknas, signalen i annat fall än då det hunnit så långt fram när signalen växlar från lodrätt till vågrätt streck att det inte kan stannas utan fara.',
    ruleTips: 'Stoppsignal för viss trafik.'
  },
  {
    id: 'sig12',
    title: 'Rött kryss',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG12',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig12.-rott-kryss/sig12-1.png',
    description: 'Körfältet och i förekommande fall vägrenen intill körfältet får inte användas för trafik.',
    ruleTips: 'Körfältssignal som anger att det är förbjudet att köra i detta körfält.'
  },
  {
    id: 'sig13',
    title: 'Gul pil eller pilar',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG13',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig13.-gul-pil-eller-pilar/sig13-1.png',
    description: 'Föraren skall byta körfält i den riktning pilen eller pilarna anger.',
    ruleTips: 'Varnar om att körfältet håller på att stängas och att du måste byta körfält i pilens riktning.'
  },
  {
    id: 'sig14',
    title: 'Grön pil',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG14',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig14.-gron-pil/sig14-1.png',
    description: 'Körfältet får användas för trafik. I stället för grön pil kan ett vägmärke förekomma.',
    ruleTips: 'Körfältssignal som anger att det är tillåtet att köra i detta körfält.'
  },
  {
    id: 'sig16',
    title: 'Rött blinkande ljus',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG16',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig16.-rott-blinkande-ljus/sig16-1.png',
    description: 'Stopp. Trafikanter får inte passera stopplinjen eller, om sådan saknas, signalen.',
    ruleTips: 'Absolut stoppsignal vid järnvägskorsning, rörlig bro eller utryckningsstation.'
  },
  {
    id: 'sig17',
    title: 'Rött fast ljus',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG17',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig17.-rott-fast-ljus/sig17-1.png',
    description: 'Signalen anger att en väg är helt avstängd.',
    ruleTips: 'Fast rött sken betyder stopp.'
  },
  {
    id: 'sig18',
    title: 'Gult blinkande ljus för påkallande av särskild försiktighet',
    categoryCode: 'TRAFIKSIGNALER',
    categoryName: 'Trafiksignaler',
    code: 'SIG18',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig18.-gult-blinkande-ljus/sig18-1.png',
    description: 'Signalen används där en väg är delvis avstängd eller för att det ska vara lättare att upptäcka ett vägmärke eller en annan anordning. Antalet ljusöppningar och deras placering är anpassade till den anordning signalen är placerad vid. Signalen kan användas fristående eller tillsammans med en anordning som avger ljud för att ge anvisning för gående om korsande spårvagn eller buss.',
    ruleTips: 'Varnar för ett hinder eller en farlig situation som kräver extra uppmärksamhet och sänkt hastighet.'
  },

  // V. Tecken av vakt
 
  {
    id: 'v1',
    title: 'Stopp',
    categoryCode: 'V',
    categoryName: 'V. Tecken av vakt',
    code: 'V1',
    image:'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/v.-tecken-av-vakt/v01.-stopp/v1.png',
    description: 'Tecknet anger stopp för den trafikant vakten är vänd mot. Under mörker ges tecknet med lykta med rött ljus. Tecknet får också ges med märke C34, stopp för angivet ändamål, med texten Vakt.',
    ruleTips: 'Anger att trafikanter ska stanna. Ges av vägvakt eller polis med t.ex. röd flagga, stoppspade eller lykta.'
  },
  {
    id: 'v2',
    title: 'Kör fram',
    categoryCode: 'V',
    categoryName: 'V. Tecken av vakt',
    code: 'V2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/v.-tecken-av-vakt/v02.-kor-fram/v2.png',
    description: 'Tecknet anger att trafikanten får fortsätta framåt. Tecknet ges med en vinkande rörelse i färdriktningen.',
    ruleTips: 'Innebär att du får köra framåt eller fortsätta i den riktning vakten anvisar.'
  },
  {
    id: 'v3',
    title: 'Kännetecken',
    categoryCode: 'V',
    categoryName: 'V. Tecken av vakt',
    code: 'V3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/v.-tecken-av-vakt/v03.-kannetecken/v3.png',
    description: 'Kännetecken ska bäras både framtill och baktill.',
    ruleTips: 'Märke eller väst som visar att personen är en behörig vägvakt vars anvisningar måste följas.'
  },

  // X. Andra anordningar för anvisningar för trafiken   --- klar

  {
    id: 'x1',
    title: 'Markeringspil',
    categoryCode: 'X',
    categoryName: 'X. Andra anordningar för anvisningar för trafiken',
    code: 'X1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x01.-markeringspil/x1.png',
    description: 'Anordningen anger att fordonsförare måste svänga kraftigt i den gula pilens eller de gula pilarnas riktning på grund av till exempel en kurva. Antalet pilar är anpassat till förhållandena på platsen. Om anordningen används vid ett vägarbete eller tillfälligt av någon annan anledning har den röd botten.',
    ruleTips: 'Anger riktningen i en snäv kurva eller vid ett hinder där du måste svänga kraftigt.'
  },
  {
    id: 'x2',
    title: 'Markeringsskärm för hinder',
    categoryCode: 'X',
    categoryName: 'X. Andra anordningar för anvisningar för trafiken',
    code: 'X2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x02.-markeringsskarm-for-hinder/x2-1.png',
    description: 'Anordningen anger att framkomligheten på vägen är inskränkt på grund av ett hinder. Anordningen kan även ange att en väg är helt eller delvis avstängd för trafik. Antalet gula fält är anpassat till hindret eller till förhållandena på platsen. Om anordningen används vid ett vägarbete eller tillfälligt av någon annan anledning har den röd botten.',
    ruleTips: 'Markerar ett hinder på eller nära vägbanan som du ska köra förbi.'
  },
  {
    id: 'x3',
    title: 'Markeringsskärm för sidohinder, farthinder med mera',
    categoryCode: 'X',
    categoryName: 'X. Andra anordningar för anvisningar för trafiken',
    code: 'X3',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x03.-markeringsskarm-for-sidohinder/x3-1.png',
    description: 'Anordningen anger vägens eller körbanans kant eller skiljer trafikriktningar åt vid komplicerade passager. Anordningen anger även att fordon ska föras på den sida som de gula fälten lutar ned mot. Om anordningen används vid ett vägarbete eller tillfälligt av någon annan anledning har den röd botten. De gula fälten kan då vara vågräta. Fordonen får då föras på båda sidor om anordningen.',
    ruleTips: 'Anger sidohinder, vägarbetsplatser, avsmalnande väg eller var ett farthinder finns placera på vägen. Ränderna lutar nedåt mot den sida där trafiken ska köra.'
  },
  {
    id: 'x4',
    title: 'Avfartsskärm',
    categoryCode: 'X',
    categoryName: 'X. Andra anordningar för anvisningar för trafiken',
    code: 'X4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x04.-avfartsskarm/x4-1.png',
    description: 'Anordningen anger skiljepunkten mellan en huvudkörbana och en avfart där det finns ett retardationsfält.',
    ruleTips: 'Placeras i skärningen mellan två vägar vid en avfart för att tydligt skilja körfälten åt.'
  },
  {
    id: 'x5',
    title: 'Gul ljuspil eller ljuspilar',
    categoryCode: 'X',
    categoryName: 'X. Andra anordningar för anvisningar för trafiken',
    code: 'X5',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x05.-gul-ljuspil-eller-ljuspilar/x5-1.png',
    description: 'Anordningen anger att trafikanter ska passera på den sida pilen eller pilarna visar. Pilen eller pilarna kan vara blinkande.',
    ruleTips: 'Visar att du måste byta körfält i pilens/pilarnas riktning, ofta vid tillfälliga vägarbeten eller hinder.'
  },
  {
    id: 'x6',
    title: 'Särskild varningsanordning',
    categoryCode: 'X',
    categoryName: 'X. Andra anordningar för anvisningar för trafiken',
    code: 'X6',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x06.-sarskild-varningsanordning/x6-1.png',
    description: 'Anordningen anger att framkomligheten på en väg är inskränkt på grund av ett tillfälligt hinder eller liknande. Texten på anordningen anpassas till orsaken.',
    ruleTips: 'Varnar för akuta faror eller olyckor längre fram på vägen.'
  },
  {
    id: 'x7',
    title: 'Vägbom',
    categoryCode: 'X',
    categoryName: 'X. Andra anordningar för anvisningar för trafiken',
    code: 'X7',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x07.-vagbom/x7-1.png',
    description: 'Anordningen anger att en väg är helt eller delvis avstängd för trafik. En bom kan vara försedd med ytterligare anordningar för att öka synbarheten.',
    ruleTips: 'Markerar att vägen är stängd helt eller delvis för genomfart.'
  },
  {
    id: 'x8',
    title: 'Tillfällig stängning',
    categoryCode: 'X',
    categoryName: 'X. Andra anordningar för anvisningar för trafiken',
    code: 'X8',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x08.-tillfallig-stangning/x8-1.png',
    description: 'Anordningen anger att en anvisning genom ett vägmärke om väg till ort, plats, inrättning, anläggning eller liknande tillfälligt inte gäller. Anordningen är anpassad till vägmärket.',
    ruleTips: 'Anger att ett vägmärke eller en anvisning tillfälligt inte gäller.'
  },
  {
    id: 'x9',
    title: 'Cirkulationstrafik',
    categoryCode: 'X',
    categoryName: 'X. Andra anordningar för anvisningar för trafiken',
    code: 'X9',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x09.-cirkulationstrafik/x9-1.png',
    description: 'Anordningen anger mittpunkten i en rondell runt vilken fordon ska föras.',
    ruleTips: 'Placerad i mitten av en cirkulationsplats för att förtydliga att du ska köra motsols runt rondellen.'
  },
  {
    id: 'x10',
    title: 'Stolpmarkeringsanordning',
    categoryCode: 'X',
    categoryName: 'X. Andra anordningar för anvisningar för trafiken',
    code: 'X10',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x10.-stolpmarkeringsanordning/x10.png',
    description: 'Anordningen används för att det ska vara lättare att upptäcka ett vägmärke eller en annan anordning enligt denna förordning. Anordningen är placerad på en stolpe eller motsvarande som bär upp ett vägmärke eller en annan anordning. Anordningen är anpassad till förhållandena på platsen. En stolpmarkeringsanordning har samma färgsättning som det vägmärke eller den andra anordning som den sitter under om inte Transportstyrelsen föreskriver annat.',
    ruleTips: 'Placeras på stolpar eller hinder för att öka synligheten under mörker och försämrad sikt.'
  },

  // Y. Signaler vid korsning med järnväg eller spårväg  --- klar 
  {
    id: 'y1',
    title: 'Rött blinkande ljus',
    categoryCode: 'Y',
    categoryName: 'Y. Signaler vid korsning med järnväg eller spårväg',
    code: 'Y1',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/y.-signaler-vid-korsning-med-jarnvag-eller-sparvag/y01.-rott-blinkande-ljus/y1.png',
    description: 'Stopp. Trafikanter får inte passera stopplinjen eller, om sådan saknas, signalen. Ljussignalen består av två ljusöppningar på samma höjd som avger växelvis blinkande rött ljus och en skärm i form av en triangel med rundade hörn och med spetsen nedåt. Skärmen kan vara försedd med vit bård. Under de röda ljusöppningarna kan det finnas en cirkulär ljusöppning, från vilken det kan avges blinkande vitt ljus för att göra korsningen lättare att upptäcka.',
    ruleTips: 'Du måste alltid stanna före stopplinjen eller signalen när det röda ljuset blinkar. Det är absolut förbud att korsa spåret.'
  },
  {
    id: 'y2',
    title: 'Ljudsignal',
    categoryCode: 'Y',
    categoryName: 'Y. Signaler vid korsning med järnväg eller spårväg',
    code: 'Y2',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/y.-signaler-vid-korsning-med-jarnvag-eller-sparvag/y02.-ljudsignal/y2-1.gif',
    description: 'Ljudsignalen anger att tåg eller spårvagn närmar sig och att du måste stanna.',
    ruleTips: 'Ljudsignalen kombineras oftast med rött blinkande ljus. Om ljudsignalen börjar låta måste du stanna omedelbart om du inte redan befinner dig ute på spåret.'
  },
  {
    id: 'y3',
    title: 'Bom',
    categoryCode: 'Y',
    categoryName: 'Y. Signaler vid korsning med järnväg eller spårväg',
    code: 'Y3',
    image: ' https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/y.-signaler-vid-korsning-med-jarnvag-eller-sparvag/y03.-bom/y3-1.png',
    description: 'Anordningens baksida får förses med texten ”Kör genom bommen”.',
    ruleTips: 'Det är strängt förbjudet att köra runt fällda eller nedåtgående bommar. Om du skulle bli instängd mellan bommarna: kör rakt igenom bommen, den är konstruerad för att gå sönder vid påkörning.'
  },
  {
    id: 'y4',
    title: 'Plankorsningsskärm',
    categoryCode: 'Y',
    categoryName: 'Y. Signaler vid korsning med järnväg eller spårväg',
    code: 'Y4',
    image: 'https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/y.-signaler-vid-korsning-med-jarnvag-eller-sparvag/y04.-plankorsningsskarm/y4.png',
    description: 'Skärmen används för att göra en plankorsning lättare att upptäcka. Skärmen är anpassad till förhållandena på platsen och kan vara liggande.',
    ruleTips: 'Förstärker uppmärksamheten vid en plankorsning och varnar för att anordningen finns på platsen.'
  },
]