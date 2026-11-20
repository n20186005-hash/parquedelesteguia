import type { nearbyTopics } from "./nearby";

type Place = (typeof nearbyTopics)[number];
type Localized = readonly [es: string, en: string, zh: string];
type Context = {
  context: Localized;
  station: string;
  access: "park" | "venue" | "street" | "trail" | "commercial" | "church";
  source?: string;
  management?: { note: Localized; source: string };
};

export const nearbyContext = {
  "planetario-humboldt": {
    station: "Miranda", access: "venue",
    context: ["El planetario abrió con el parque en 1961 y acercó la astronomía al público caraqueño. Desde la entrada se distinguen un cuerpo bajo y la cúpula blanca, diseñada por Carlos Guinand Sandoz. En la sala, la forma hemisférica permite proyectar el cielo alrededor del público.", "Opened with the park in 1961, the planetarium brought astronomy to a wider Caracas audience. At the entrance, look for the contrast between the low building and the white dome designed by Carlos Guinand Sandoz. Inside, the hemispherical screen allows the sky to be projected around the audience.", "天文館於 1961 年隨公園啟用，讓卡拉卡斯市民有機會在室內認識星空。走近入口，可比較低矮的館舍與卡洛斯・吉南・桑多斯設計的白色圓頂。入館後留意半球形幕面如何把投影延伸到觀眾四周。"],
  },
  "museo-del-transporte": {
    station: "Miranda", access: "venue",
    context: ["El museo, abierto en 1970, conserva vehículos de escalas muy distintas. La visita permite pasar de la escala del pasajero en un automóvil al espacio que necesitan un tren o una aeronave. Antes de seguir a otra sala, mira las ruedas y la altura de acceso de dos piezas comparables.", "The museum opened in 1970 and preserves vehicles on very different scales. The visit moves from a passenger’s space in a car to the room needed by a train or an aircraft. Before changing galleries, compare wheel size and boarding height on two comparable pieces.", "博物館於 1970 年開館，收藏的交通工具從汽車延伸到鐵路車輛和航空器。換展區之前，可選兩件展品比較輪徑和上下車的高度，再看整輛車與展廳的尺度關係。"],
  },
  "plaza-francia": {
    station: "Altamira", access: "street",
    context: ["Inaugurada en 1945 como Plaza Altamira, la plaza se reconoce por cómo el obelisco ordena el conjunto. Desde un extremo observa la secuencia de pavimento, fuente y monumento; luego desplázate al borde para ver cómo ese eje se cruza con la circulación de Altamira.", "Opened in 1945 as Plaza Altamira, the square is recognizable by the way its obelisk organizes the space. From one end, read the sequence of paving, fountain and monument. At the edge, see how that axis meets the circulation of Altamira.", "這座廣場於 1945 年以阿爾塔米拉廣場之名啟用。從端點沿中軸依序看鋪面、噴泉和方尖碑，再往廣場邊緣移動，觀察這條軸線如何接上街道和人流。"],
  },
  "la-estancia": {
    station: "Altamira", access: "venue",
    context: ["El centro de arte reutiliza la casa de una antigua hacienda. Desde el jardín se entiende la diferencia entre el edificio doméstico y el recinto cultural actual: los caminos reciben al público desde varios ángulos y la casa conserva la escala de un lugar que originalmente tuvo otra función.", "The arts center reuses the house of a former estate. From the garden you can see the difference between the domestic building and the cultural venue it has become: paths bring the public in from several angles while the house retains its original scale.", "藝術中心活化了一座舊莊園的宅邸。從花園看，步道由不同角度把遊客引向屋舍，而宅邸仍保有當年住宅的尺度。這也是理解昔日莊園如何成為公共文化空間的起點。"],
  },
  "lago-9-leander": {
    station: "Miranda", access: "park",
    context: ["El Lago 9 pertenece al sistema de lagos artificiales del diseño paisajístico del parque. El barco que hoy domina la orilla es una réplica vinculada a la expedición de Francisco de Miranda de 1806. La mejor lectura del conjunto combina el perfil completo del buque y una segunda vista oblicua desde el sendero habilitado.", "Lake 9 is part of the artificial lake system in the park’s landscape design. The ship that now dominates the shore is a replica associated with Francisco de Miranda’s 1806 expedition. Compare its full profile with a second, oblique view from the open path.", "第九湖是東方公園人工湖系統的一環。湖畔的利安德號是為紀念弗朗西斯科・德・米蘭達 1806 年遠征而設的復刻船。沿開放步道先看完整側影，再斜向觀察船首與水岸的關係。"],
  },
  "patios-ornamentales": {
    station: "Miranda", access: "park",
    context: ["Los patios ornamentales concentran el trabajo de Roberto Burle Marx y su equipo con recintos, color y agua. Al cruzar un umbral, compara el tamaño de la abertura con el muro que la rodea. Luego mira dónde se colocaron los azulejos y las plantas de mayor porte para dirigir la vista.", "The ornamental courtyards concentrate Roberto Burle Marx and his team’s work with enclosures, color and water. At a threshold, compare the opening with the surrounding wall. Then see how tiles and taller plantings are positioned to direct the eye.", "景觀庭院集中呈現布爾勒・馬克斯團隊對圍合、色彩和水景的運用。走過門洞時，可比較開口與牆面的比例，再觀察瓷磚和高大植栽如何引導視線。"],
  },
  "jardin-xerofitico": {
    station: "Miranda", access: "park",
    context: ["En un parque que reúne paisajes venezolanos distintos, el jardín xerófito presenta plantas adaptadas a condiciones secas. Desde la caminería compara la silueta vertical de un ejemplar con la de otro que se extienda a ras del suelo. Las texturas cobran importancia en un espacio sin el dosel continuo de los sectores arbolados.", "Within a park that evokes several Venezuelan landscapes, the xerophytic garden presents plants adapted to dry conditions. Compare an upright specimen with one that spreads near ground level. Textures stand out here without the continuous canopy of the wooded sections.", "東方公園以不同植栽呈現委內瑞拉的多種景觀，旱生植物園展示適應乾燥環境的植物。從步道比較直立生長和貼地延展的株形，這一區沒有連續樹冠遮蔽，植物質地與輪廓格外容易辨認。"],
  },
  "concha-acustica": {
    station: "Miranda", access: "park",
    context: ["La concha acústica conserva la idea de un escenario de parque integrado al paseo. De frente se entiende el marco que la cubierta crea para el público. Desde un lateral se aprecia el espesor de ese marco y cómo el escenario se abre hacia la zona de espectadores.", "The band shell preserves the idea of a park stage integrated into the walk. Head-on, the roof frames the stage for the audience. A side view reveals the depth of the structure and the way the stage opens toward the spectators’ area.", "露天音樂台把表演空間放入園內步行動線。正面可看屋頂如何框住舞台，側面則能看出構造的深度，以及舞台如何向觀眾區敞開。"],
  },
  "aviario": {
    station: "Miranda", access: "park",
    context: ["El aviario pertenece al recorrido de divulgación animal del parque. Lee el recinto en altura: el suelo, las ramas y los puntos cubiertos revelan zonas de uso distintas. La fotografía de archivo registra un ejemplar que estuvo allí; la observación del día depende de los animales y del acceso habilitado.", "The aviary forms part of the park’s animal education route. Read the enclosure vertically: the ground, branches and sheltered points offer different spaces. The archival photo records a bird once housed there. Your sightings depend on the animals and which paths are open.", "鳥舍是園內動物教育路線的一站。由下往上觀察地面、枝架和有遮蔽的位置，可以理解圍欄內不同高度的空間。舊照記錄曾在此飼養的鳥類，當日能看到什麼仍取決於開放區域與動物活動。"],
  },
  "terrario": {
    station: "Miranda", access: "park",
    context: ["El terrario complementa el aviario en el conjunto zoológico del parque. Donde se permita ver los recintos, compara iluminación, refugios y barreras antes de buscar un animal en particular. La propia disposición enseña cómo un recinto reserva zonas visibles y zonas de retiro.", "The terrarium complements the aviary in the park’s zoo facilities. Where enclosure viewing is permitted, compare lighting, shelters and barriers before looking for a particular animal. The layout shows how visible areas and retreats share one enclosure.", "爬蟲館和鳥舍同屬園內動物教育設施。在開放的觀察位置，可先比較照明、遮蔽物和隔離設施，再找動物。展區的配置本身就能說明何處便於觀察、何處讓動物躲藏。"],
  },
  "parque-simon-bolivar": {
    station: "Miranda", access: "park",
    context: ["El parque abrió en 2018 en parte de los terrenos del antiguo aeropuerto de La Carlota. El Lago Libertad y el espacio abierto ofrecen una escala distinta a la de los patios del Parque del Este. Si el puente Independencia está habilitado, observa desde su recorrido cómo se relacionan ambos paisajes.", "The park opened in 2018 on part of the former La Carlota airport. Lake Libertad and the open grounds are on a different scale from the courtyards of East Park. If Puente Independencia is open, use the crossing to compare the two landscapes.", "公園於 2018 年在部分拉卡洛塔舊機場用地開放。自由湖和開闊場地與東方公園的圍合庭院形成對比。獨立橋若開放通行，可在過橋時觀察兩座公園景觀尺度的轉換。"],
  },
  "fuente-las-cortinas": {
    station: "Miranda", access: "park",
    context: ["La fuente forma parte de los elementos acuáticos del Parque del Este, inaugurado en 1961. Observa primero la repetición de bordes y planos desde el frente. Al mover tu posición hacia un lateral, se aclara el espesor del conjunto y el lugar que ocupa dentro del patio.", "The fountain belongs to the water features of East Park, opened in 1961. Start by viewing the repeating edges and planes head-on. Move sideways to see the depth of the structure and how it sits within the courtyard.", "水幕噴泉屬於 1961 年啟用的東方公園水景設施。先正面觀察反覆排列的邊緣和平面，再往側邊移動，就能看出構造的深度及其在庭院中的位置。"],
  },
  "plaza-bolivar-chacao": {
    station: "Chacao", access: "street",
    context: ["La plaza organizó el trazado fundacional de Chacao en 1768. La reforma de 2011 volvió a ordenar la relación entre la estatua ecuestre y el frente del templo. Camina el perímetro para entender cómo la plaza vincula la iglesia y las calles del casco antiguo.", "The square organized Chacao’s original street plan in 1768. A 2011 redesign rearranged the relationship between the equestrian statue and the church frontage. Walk the perimeter to see how the square connects the church with the streets of the old center.", "查考 1768 年的建城格局以這座廣場為中心。2011 年整修調整了騎馬銅像與教堂正面的相對位置。沿外緣走一圈，可看出廣場如何把教堂和老城街道連在一起。"],
  },
  "iglesia-san-jose-chacao": {
    station: "Chacao", access: "church",
    context: ["Las obras del templo comenzaron en 1769, poco después del trazado de Chacao. Desde la plaza observa la altura de la fachada respecto a las calles cercanas y el espacio que la precede. El punto de vista explica por qué iglesia y plaza se pueden leer como un solo conjunto urbano.", "Construction began in 1769, shortly after Chacao’s street plan was laid out. From the square, compare the height of the facade with the neighboring streets and look at the open space in front. This vantage explains why the church and square read as one ensemble.", "教堂自 1769 年開始興建，緊接在查考老城街廓規劃之後。站在廣場比較教堂立面高度和鄰街尺度，並留意門前的開放空間，即可理解教堂和廣場為何構成同一個市鎮核心。"],
  },
  "biblioteca-los-palos-grandes": {
    station: "Altamira", access: "venue",
    context: ["La biblioteca, inaugurada en 2011, ocupa el borde norte de la plaza de Los Palos Grandes. Empieza en el espacio exterior para distinguir el volumen bibliotecario y su entrada. Si pasas a las salas abiertas, observa cómo cambia la actividad de la plaza al espacio de lectura.", "Opened in 2011, the library occupies the north edge of Los Palos Grandes square. Start outside to distinguish the library volume and its entrance. If the reading rooms are open, notice how activity changes between the square and the quieter interior.", "2011 年啟用的圖書館坐落在洛斯帕洛斯格蘭德斯廣場北側。先從戶外辨認館舍量體與入口，若閱覽空間開放，再留意從廣場到館內的活動與聲音如何改變。"],
  },
  "mercado-municipal-chacao": {
    station: "Chacao", access: "commercial",
    context: ["Construido como primera etapa de un proyecto cívico entre 2006 y 2008, el mercado reunió en un edificio el comercio asociado al casco. Entra por un pasillo, observa dónde se cruzan los flujos de compra y carga, y deja las fotos para un punto donde no obstaculices el paso.", "Built as the first stage of a civic project between 2006 and 2008, the market brought shopping associated with the old center into one building. Walk an aisle, notice where shopping and deliveries intersect, and find a spot clear of traffic before taking photos.", "市場於 2006 至 2008 年間作為市政計畫首期興建，將和查考老城有關的交易集中到一棟建築。先走一條通道，留意採買與送貨動線在哪裡交會，再找不妨礙通行的位置拍照。"],
  },
  "plaza-brion": {
    station: "Chacaíto", access: "street",
    context: ["La plaza abrió en 1983 junto con la estación Chacaíto y lleva el nombre del almirante Luis Brión. El monumento y las salidas del metro permiten leer dos funciones de la plaza: punto de encuentro en superficie y transición hacia el bulevar peatonal.", "The square opened in 1983 alongside Chacaíto station and is named after Admiral Luis Brión. The monument and station exits reveal its two roles: a meeting place above ground and a transition into the pedestrian boulevard.", "廣場於 1983 年隨查凱托站啟用，以海軍將領路易斯・布里翁命名。從紀念像和地鐵出口可看出它的兩種用途：地面上的集合場所，以及通往步行大道的轉接點。"],
  },
  "parque-aruflo": {
    station: "Altamira", access: "park",
    source: "https://www.chacao.gob.ve/cyc---ambiente/897/alcalde-gustavo-duque-entrega-a-los-vecinos-el-parque-aruflo-totalmente-recuperado",
    context: ["La Alcaldía de Chacao entregó en 2024 una rehabilitación de las caminerías y áreas verdes. Aruflo forma parte de una secuencia de espacios públicos cerca de la avenida Libertador. Aruflo y La Salle son dos paradas distintas. Desde el sendero, mira cómo la vegetación cambia la vista de los edificios de la avenida y cómo el acceso mantiene el vínculo con la calle.", "Chacao’s municipal government handed over restored paths and green areas in 2024. Aruflo is part of a sequence of public spaces near Avenida Libertador. Aruflo and La Salle are separate stops. From the path, see how planting changes the view towards the avenue buildings while the entrance keeps the park connected to the street.", "查考市政府在 2024 年完成步道與綠地整修。阿魯弗洛公園是解放者大道一帶一連串公共空間中的一站，與拉薩爾公園為不同地點。沿園內步道看植栽如何遮擋或框住街旁建築，再回望入口與街道的銜接。"],
  },
  "plaza-el-indio": {
    station: "Chacao", access: "street",
    context: ["El pequeño espacio del casco de Chacao se identifica por la figura indígena que le da nombre. Observa la posición de la figura desde dos lados de la plaza y la manera en que la calle Sucre delimita el espacio. Después, en la Plaza Bolívar, compara la escala y el papel de cada monumento.", "This small space in Chacao’s old center takes its name from its Indigenous figure. View the figure from two sides and see how Calle Sucre defines the square. Later, at Plaza Bolívar, compare the scale and role of the two monuments.", "這座小廣場因其中的原住民造像而得名。可從兩側比較造像的位置，看看蘇克雷街如何界定廣場。到玻利瓦爾廣場後，再比較兩座紀念物在不同尺度的公共空間中扮演的角色。"],
  },
  "parque-cristal": {
    station: "Miranda", access: "commercial",
    context: ["El edificio se reconoce por el gran vacío de su volumen acristalado. Desde el lado del Parque del Este, compara el perfil del cubo con la escala de la avenida; desde una acera lateral, busca el ángulo en que el vacío se percibe como una abertura profunda.", "The building is recognizable by the large opening in its glazed volume. From the East Park side, compare the cube’s outline with the scale of the avenue. From a side sidewalk, look for the angle that reveals the depth of the opening.", "大樓以玻璃立方體中央的大開口著稱。先從東方公園一側比較大樓輪廓與大道寬度，再由側邊人行道找出能看見開口深度的角度。"],
  },
  "centro-san-ignacio": {
    station: "Chacao", access: "commercial",
    context: ["El conjunto de B&G Arquitectura, abierto en 1998, ocupa terrenos de antiguas canchas del Colegio San Ignacio. Sus recorridos abiertos permiten mirar entre niveles. Desde dos plantas de acceso público, compara el borde de las galerías y las líneas de visión sobre el patio.", "Opened in 1998, the B&G Arquitectura complex occupies former playing fields of Colegio San Ignacio. The open circulation lets you look across levels. From two public floors, compare the edges of the galleries and the sightlines across the courtyard.", "B&G 建築團隊設計的聖伊格納西奧中心於 1998 年開幕，原址是同名學校的球場。開放式動線讓遊客看見不同樓層，可從兩處公共樓層比較走廊邊緣與跨越中庭的視線。"],
  },
  "museo-arte-contemporaneo": {
    station: "Bellas Artes", access: "venue",
    source: "https://fundaayc.com/2013/11/15/1974-se-inaugura-el-museo-de-arte-contemporaneo-de-caracas/",
    context: ["Inaugurado en 1974 por iniciativa de Sofía Ímber, el museo se inserta en Parque Central. Antes de entrar, mira cómo el acceso a salas de escala peatonal aparece entre torres y pasos del complejo. Después de la exposición, vuelve al mismo punto para comparar la circulación interior del museo con la del conjunto urbano.", "The museum opened in 1974 through the initiative of Sofía Ímber and is set inside Parque Central. Before entering, find how a pedestrian-scale gallery entrance fits between the towers and passages. After the exhibition, return to the same point and compare movement within the museum with circulation through the complex.", "博物館由索菲婭・因貝爾推動成立，1974 年在中央公園建築群啟用。入館前可觀察展廳入口如何嵌在塔樓與通道之間；看完展覽後回到同一位置，比較館內步行動線和外部建築群的尺度。"],
  },
  "sabas-nieves": {
    station: "Altamira", access: "trail",
    context: ["El acceso de Sabas Nieves enlaza la trama de Altamira con el Parque Nacional Waraira Repano. La transición más clara se percibe al final de la avenida San Juan Bosco, donde termina el recorrido urbano. Antes de subir, usa el cartel del acceso como punto de orientación para el regreso.", "The Sabas Nieves entrance links the streets of Altamira to Waraira Repano National Park. The clearest transition is at the end of Avenida San Juan Bosco, where the city walk meets the hillside. Before climbing, note the trailhead sign as a landmark for the return.", "薩瓦斯涅韋斯入口把阿爾塔米拉街區接到瓦萊拉雷帕諾國家公園。走到聖胡安博斯科大道盡頭，最能看出城市街道如何轉為山坡步道。上坡之前，可先記下入口告示牌作為折返地標。"],
  },
  "plaza-venezuela": {
    station: "Plaza Venezuela", access: "street",
    management: {
      source: "https://arquitecturapanamericana.com/rehabilitacion-integral-de-la-fuente-de-plaza-venezuela-y-sus-zonas-de-injerencia/nggallery/slideshow",
      note: ["La rehabilitación de la fuente reunió a PDVSA La Estancia, la Alcaldía de Caracas, el Gobierno del Distrito Capital y Metro de Caracas. La fuente y sus accesos peatonales son partes distintas del conjunto.", "The fountain rehabilitation involved PDVSA La Estancia, the Caracas municipal government, the Capital District government and Metro de Caracas. The fountain and its pedestrian approaches are separate parts of the site.", "噴泉整修由 PDVSA La Estancia、卡拉卡斯市政府、首都區政府及卡拉卡斯地鐵共同參與。噴泉和周邊行人通道各是廣場的一部分。"],
    },
    context: ["La fuente ocupa el centro de una plaza atravesada por conexiones de metro y grandes avenidas. Desde el perímetro peatonal, mira primero la fuente y luego usa los edificios altos para ubicar la salida que te interesa. Este orden ayuda a orientarse aunque el agua esté apagada.", "The fountain sits at the center of a square crossed by metro connections and large avenues. From the pedestrian perimeter, locate the fountain and then use the tall buildings to orient yourself toward your exit. The same sequence works when the water is off.", "噴泉位於地鐵和主要大道匯合的廣場中央。從行人區先辨認噴泉，再借周圍高樓判斷要走的出口；即使停水，也能用同樣方式看懂廣場配置。"],
  },
  "bulevar-sabana-grande": {
    station: "Sabana Grande", access: "street",
    management: {
      source: "https://publiservicios.2001online.com/comunidad/caracas-alcaldia-retira-elementos-ludicos-del-boulevard-de-sabana-grande-20266101200",
      note: ["La Alcaldía de Caracas realiza labores de mantenimiento del espacio público; PDVSA La Estancia ha participado en su rehabilitación y en intervenciones sobre el mobiliario.", "The Caracas municipal government maintains public spaces along the boulevard. PDVSA La Estancia helped rehabilitate the promenade and has worked on its street furniture.", "卡拉卡斯市政府參與步行大道公共空間的維護，PDVSA La Estancia 則參與過大道整修及街道設施的維護工作。"],
    },
    context: ["El antiguo eje comercial fue rehabilitado por PDVSA La Estancia como paseo peatonal. Entre Chacaíto y Plaza Venezuela, mira cómo las plantas bajas se abren al paso y cómo cada calle transversal encuadra un tramo distinto del bulevar.", "The former commercial corridor was rehabilitated by PDVSA La Estancia as a pedestrian promenade. Between Chacaíto and Plaza Venezuela, see how ground-floor shops open onto the walk and how each cross street frames a different view of the boulevard.", "這條舊商業軸線經 PDVSA La Estancia 整修改為行人步道。走在查凱托和委內瑞拉廣場之間，可看一樓商店如何面向步道，以及每條橫巷如何框出大道的不同視角。"],
  },
  "parque-los-caobos": {
    station: "Bellas Artes", access: "park",
    context: ["Junto a la Plaza de los Museos, Los Caobos permite pasar de la arquitectura de los pabellones a un recorrido entre árboles y esculturas. Observa primero la ubicación de una pieza respecto al sendero y al dosel del arbolado. La siguiente pieza ofrece otro punto de orientación dentro del paseo.", "Beside Plaza de los Museos, Los Caobos takes you from the museum buildings into a walk among trees and sculptures. Start by looking at one piece in relation to the path and canopy. The next sculpture gives you another landmark along the route.", "洛斯考沃斯公園毗鄰博物館廣場，走幾步就能從展館建築轉入林蔭與雕塑步道。可先看一件雕塑與步道、樹冠的相對位置，再以沿途另一件作品作為辨認路徑的地標。"],
  },
  "museo-bellas-artes": {
    station: "Bellas Artes", access: "venue",
    source: "https://www.mincultura.gob.ve/noticias/museo-de-bellas-artes-de-caracas-celebra-el-aniversario-86-de-su-edificio-neoclasico/",
    context: ["La sede neoclásica diseñada por Carlos Raúl Villanueva abrió en 1938. La ampliación posterior dio al museo un volumen de lenguaje moderno. Desde la Plaza de los Museos, lee primero el frente bajo y su pórtico, y después busca cómo cambia la escala al acercarte a la ampliación.", "Carlos Raúl Villanueva’s neoclassical building opened in 1938. A later extension added a modern volume. From Plaza de los Museos, start with the low frontage and portico, then look for the change in scale as you approach the extension.", "卡洛斯・勞爾・維亞努埃瓦設計的新古典館舍於 1938 年開放，後來的擴建引入現代主義量體。在博物館廣場先看低矮舊館的門廊，往擴建處移動時再比較尺度如何改變。"],
  },
  "museo-ciencias": {
    station: "Bellas Artes", access: "venue",
    source: "https://iamvenezuela.org/2015/04/museo-de-ciencias-2/",
    context: ["El edificio de Carlos Raúl Villanueva se inauguró en 1940 para alojar colecciones científicas procedentes del antiguo Museo Nacional. El pórtico neoclásico dialoga con el museo vecino y su decoración añade rasgos Art Déco. Desde la plaza resulta fácil comparar ambos accesos antes de entrar.", "Carlos Raúl Villanueva’s building opened in 1940 to house scientific collections from the former National Museum. Its neoclassical portico echoes the neighboring museum while its ornament adds Art Deco elements. From the square, compare the two entrances before choosing your museum.", "卡洛斯・勞爾・維亞努埃瓦設計的館舍於 1940 年開放，用以安置舊國立博物館的科學藏品。新古典門廊呼應毗鄰的美術館，另外可看到裝飾藝術風格的細節。入館前可在廣場先比較兩座入口。"],
  },
  "teatro-teresa-carreno": {
    station: "Bellas Artes", access: "venue",
    source: "https://www.el-carabobeno.com/teatro-teresa-carreno-celebra-35-anos-de-apertura/",
    context: ["La Sala José Félix Ribas comenzó a funcionar en 1976; con la apertura de la Sala Ríos Reyna en 1983 se completó la inauguración del complejo. Desde Paseo Colón, mira cómo los niveles de concreto enlazan la calle con los vestíbulos y separan los recorridos a las salas.", "The José Félix Ribas hall began operating in 1976; the opening of the Ríos Reyna hall in 1983 completed the public opening. From Paseo Colón, look for how the concrete levels connect the street to the foyers and separate paths to the halls.", "何塞・費利克斯・里瓦斯廳於 1976 年開始使用，里奧斯・雷納廳於 1983 年開放後，劇院綜合體才全面啟用。站在哥倫布大道，可看出混凝土平台如何連接街道、大廳和通往各演出廳的動線。"],
  },
  "galeria-arte-nacional": {
    station: "Bellas Artes", access: "venue",
    source: "https://www.mincultura.gob.ve/noticias/museo-de-bellas-artes-de-caracas-celebra-el-aniversario-86-de-su-edificio-neoclasico/",
    context: ["La Galería de Arte Nacional ocupó provisionalmente la sede original del Museo de Bellas Artes a partir de 1976. La visita actual se dirige al edificio de avenida México. Desde su explanada, toma distancia para ver la escala de la fachada y luego busca el acceso que corresponda a la programación.", "The National Art Gallery occupied the original Museum of Fine Arts building on an interim basis from 1976. Today’s visit leads to the Avenida México building. On the forecourt, step back to read the facade and then locate the entrance for the current program.", "國家藝術畫廊自 1976 年起曾暫用美術館的舊館。如今應前往墨西哥大道的館舍，可先在入口前廣場退後看整個立面，再依當期展覽公告找到入館動線。"],
  },
  "jardin-botanico-ucv": {
    station: "Plaza Venezuela", access: "venue",
    context: ["Fundado en 1945, el jardín botánico se incorporó al conjunto de la Ciudad Universitaria de Caracas reconocido por la UNESCO. La Laguna Venezuela ofrece un contraste con las áreas de cultivo terrestre. Desde el sendero, compara la forma de las plantas que emergen del agua con las de una zona más seca.", "Founded in 1945, the botanical garden became part of the UNESCO-listed Ciudad Universitaria de Caracas. Laguna Venezuela contrasts with the dry-land collections. From the path, compare the shapes of plants rising from the water with those in a drier section.", "植物園創立於 1945 年，是聯合國教科文組織列入世界遺產的卡拉卡斯大學城的一部分。若湖區步道開放，可比較委內瑞拉湖挺水植物的株形與較乾燥區域的陸生植物。"],
  },
} satisfies Record<Place, Context>;

export const visitorAccess = {
  park: [
    ["Horarios y acceso al parque", "Consulta primero la apertura del parque y luego la del sector concreto. Un cierre del recinto o del paso peatonal puede cambiar el recorrido; usa los carteles del acceso antes de seguir el mapa."],
    ["Park hours and access", "Check park opening hours first, then whether the specific area is accessible. A closed enclosure or pedestrian connection can change the walk. Follow signs at the entrance before following the map."],
    ["公園開放與入場", "先查公園開放時間，再核對要去的分區是否可進入。園內設施或步道臨時關閉時，請以入口告示和現場指標調整路線。"],
  ],
  venue: [
    ["Horarios, entradas y reservas", "Consulta la agenda del recinto para tu fecha. Confirma qué salas o funciones recibirán público, si hay tarifa o reserva, y si la última entrada es anterior al cierre."],
    ["Hours, tickets and reservations", "Check the venue’s program for your date. Confirm which rooms or events are open to visitors, whether tickets or reservations are required, and when last entry is."],
    ["開放時間、門票與預約", "按到訪日期查詢館方公告，確認開放館室或場次、票價、預約方式及最後入場時間。"],
  ],
  street: [
    ["Acceso desde la calle", "Plantea la parada como un recorrido exterior por el espacio público. Para eventos o trabajos de mantenimiento, respeta el perímetro indicado y deja una alternativa que no requiera cruzar la zona cerrada."],
    ["Access from the street", "Plan this stop as an outdoor walk through public space. If an event or maintenance closes part of the route, follow posted boundaries and choose an alternative that stays outside the closed area."],
    ["街道與廣場通行", "可把這一站排為戶外步行。遇到活動或維護工程，請按現場指示繞開管制範圍，並保留另一條行人路線。"],
  ],
  trail: [
    ["Acceso al sendero y regreso", "Revisa los avisos del parque antes de entrar. Si el sendero está cerrado o la subida no encaja con el tiempo del grupo, termina la visita en el punto de acceso. Calcula el regreso antes de iniciar el ascenso."],
    ["Trail access and return", "Check park notices before entering. If the trail is closed or the climb does not fit your group’s schedule, end your visit at the trailhead. Allow for the return before starting uphill."],
    ["步道開放與折返", "進入步道前先看園方公告。若遇封閉，或同行者時間不足，可把入口當作終點。開始上坡之前，先把下山折返時間算進行程。"],
  ],
  commercial: [
    ["Horarios de locales y accesos", "Los accesos del edificio y el horario de cada local pueden ser distintos. Si vas a un puesto o comercio concreto, consúltalo antes de desplazarte y ubica el acceso público que corresponda."],
    ["Building and business hours", "Building access and individual business hours can differ. If visiting a particular stall or business, check with it before traveling and locate the appropriate public entrance."],
    ["商戶時間與入口", "大樓開放時間與各攤位或店家的營業時間可能不同。若為特定商戶而來，出發前先向對方確認，並辨認適用的公共入口。"],
  ],
  church: [
    ["Visita y servicios religiosos", "Consulta a la parroquia si quieres ver el interior. Si tu visita coincide con misa u otro servicio, deja las fotos para la plaza y mantén libre la entrada."],
    ["Visiting around services", "Ask the parish if you plan to enter. If you arrive during Mass or another service, take photos from the square and keep the doorway clear."],
    ["參觀與宗教活動", "想入內參觀可先向堂區查詢。若到訪時正在舉行彌撒或其他活動，可在廣場拍外觀，避免在入口停留。"],
  ],
} as const;
