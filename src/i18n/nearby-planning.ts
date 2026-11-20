import type { nearbyTopics } from "./nearby";

type Place = (typeof nearbyTopics)[number];
type Planning = {
  next: readonly [Place, Place];
  advice: readonly [es: string, en: string, zh: string];
};

// The order of each pair suggests a continuation without implying a fixed schedule.
export const nearbyPlanning = {
  "museo-del-transporte": {
    next: ["planetario-humboldt", "parque-cristal"],
    advice: ["Organiza la visita por tipos de transporte. Elige un vehículo de carretera y una pieza ferroviaria y compara cómo resuelven la carga o el acceso de los pasajeros. Si el museo está cerrado, continúa al Parque del Este por los cruces señalizados de la avenida.", "Organize your visit by mode of transport. Compare a road vehicle with a railway exhibit and look at how each handles cargo or passenger boarding. If the museum is closed, continue to East Park using marked crossings.", "可按交通工具類型參觀，選一輛道路車輛和一件鐵路展品，比較它們如何載貨或讓乘客上下車。若博物館閉館，可經大道的行人穿越道前往東方公園。"],
  },
  "plaza-francia": {
    next: ["la-estancia", "biblioteca-los-palos-grandes"],
    advice: ["Recorre primero el eje que encara el obelisco y luego mira desde un lateral cómo se relaciona la plaza con las avenidas de Altamira. Deja La Estancia para la segunda parada si sus jardines están abiertos.", "Walk the axis facing the obelisk, then step to one side to see how the square meets Altamira’s avenues. Make La Estancia your second stop if its gardens are open.", "先沿廣場中軸觀察方尖碑，再移到側邊看廣場如何銜接阿爾塔米拉的街道。若拉埃斯坦西亞的花園開放，可接著前往。"],
  },
  "la-estancia": {
    next: ["plaza-francia", "biblioteca-los-palos-grandes"],
    advice: ["Dedica el primer tramo al jardín y deja los espacios expositivos para después de consultar la cartelera. Fíjate en la transición entre la casa, los caminos y los jardines para entender la escala de la antigua finca.", "Start in the garden and check the events board before detouring into the exhibition spaces. Follow the transition from house to paths to gardens to appreciate the scale of the former estate.", "先走花園，再看公告決定要不要進展覽空間。沿宅邸、步道與花園之間的轉折行走，可以理解昔日莊園的尺度。"],
  },
  "lago-9-leander": {
    next: ["aviario", "patios-ornamentales"],
    advice: ["Haz del Lago 9 el punto de retorno si tienes poco tiempo. Desde la orilla habilitada observa cómo cambia la silueta del barco al desplazarte. Si el acceso a bordo está cerrado, puedes centrar la visita en el paisaje del lago.", "Make Lake 9 your turnaround point on a short visit. Walk the open shoreline path to see how the ship’s silhouette changes. If boarding is closed, focus on the lakeside landscape.", "行程較短時，可把第九湖當作折返點。沿開放的湖岸步道移動，觀察船身輪廓如何隨視角改變。若不能登船，可把時間留給湖岸景觀。"],
  },
  "patios-ornamentales": {
    next: ["jardin-xerofitico", "fuente-las-cortinas"],
    advice: ["Entra despacio y compara un patio desde el umbral y desde uno de sus lados. El cambio de perspectiva permite apreciar la geometría de los muros, el pavimento y los elementos de agua aunque las fuentes estén apagadas.", "Compare a courtyard from its threshold and from one side. The change of perspective reveals how walls, paving and water features are arranged even when fountains are off.", "先從入口看一座庭院，再走到側面比較。即使噴泉沒有運作，也能從兩個角度辨認牆面、鋪面和水景的幾何關係。"],
  },
  "jardin-xerofitico": {
    next: ["patios-ornamentales", "fuente-las-cortinas"],
    advice: ["Elige dos plantas visibles desde el sendero y compara tallos, hojas y espinas sin tocarlas. Combina el jardín con los patios ornamentales para observar dos maneras distintas de organizar la vegetación.", "Choose two plants visible from the path and compare stems, leaves and spines without touching them. Pair the garden with the ornamental courtyards to see two approaches to planting.", "從步道挑兩株看得清楚的植物，比較莖、葉和刺，避免觸碰。接著走到景觀庭院，可對照兩種不同的植栽配置。"],
  },
  "concha-acustica": {
    next: ["patios-ornamentales", "planetario-humboldt"],
    advice: ["Cuando no haya evento, observa el escenario desde un lateral y luego desde el centro de la zona pública. Si hay montaje, respeta el perímetro y cambia el orden del paseo para visitar primero los patios.", "Between events, view the stage from the side and then from the middle of the public area. If crews are setting up, respect the perimeter and visit the courtyards first.", "沒有活動時，可先從側面、再從公共觀眾區中央觀察舞台。若現場正在搭台，請繞開管制範圍，先逛景觀庭院。"],
  },
  "aviario": {
    next: ["terrario", "lago-9-leander"],
    advice: ["Para una visita tranquila, espera junto al recorrido público a que las aves se muevan por sí solas. Mira primero las posaderas y luego el suelo del recinto. Si no ves actividad, sigue hacia el Lago 9 y vuelve solo si el horario lo permite.", "Wait quietly on the public path and allow the birds to move on their own. Scan the perches first and then the enclosure floor. If little is happening, continue to Lake 9 and return only if opening hours allow.", "可在公共步道安靜等候，讓鳥類自行活動。先看棲架，再看圍欄內的地面；若一時看不到活動，可先去第九湖，視開放時間再折返。"],
  },
  "terrario": {
    next: ["aviario", "lago-9-leander"],
    advice: ["Antes de pasar al siguiente recinto, busca los refugios, las zonas de luz y los avisos que describen el ambiente. No golpees el vidrio ni uses flash. Si el terrario no está abierto, continúa por el recorrido exterior hacia el aviario.", "Before moving to the next enclosure, look for shelters, lit areas and signs explaining the habitat. Avoid tapping the glass or using flash. If the terrarium is closed, continue outside toward the aviary.", "走到下一個展區前，先觀察躲藏處、光照區及棲地說明牌。避免敲玻璃或使用閃光燈。若爬蟲館關閉，可沿戶外步道往鳥舍。"],
  },
  "parque-simon-bolivar": {
    next: ["planetario-humboldt", "lago-9-leander"],
    advice: ["Si combinas La Carlota con el Parque del Este, ubica primero el acceso habilitado de cada parque. Haz un circuito corto cerca de la entrada que uses y deja el cruce entre parques para cuando hayas confirmado el paso peatonal.", "If combining La Carlota with East Park, locate the open entrance for each park first. Begin with a short loop near your arrival point and transfer between parks once you have confirmed the pedestrian connection.", "若要連遊拉卡洛塔與東方公園，先確認兩座公園各自開放的入口。可先由抵達的入口走一段短環線，確認行人通道後再換到另一座公園。"],
  },
  "fuente-las-cortinas": {
    next: ["patios-ornamentales", "jardin-xerofitico"],
    advice: ["Busca una vista frontal para leer la repetición de los muros y otra lateral para ver su profundidad. Con agua, observa el efecto de cortina desde el paso público; en seco, sigue las líneas de la estructura hasta el patio.", "Take a frontal look at the repeating walls, then move sideways to see their depth. When water is flowing, view the curtain effect from the public walkway. In dry conditions, follow the lines of the structure into the courtyard.", "先從正面看重複排列的牆面，再到側面看深度。有水時可從公共步道看水幕，停水時則可沿著構造線條觀察它如何接到庭院。"],
  },
  "plaza-bolivar-chacao": {
    next: ["iglesia-san-jose-chacao", "mercado-municipal-chacao"],
    advice: ["Empieza en la plaza para situar la iglesia respecto al espacio cívico. Continúa al mercado si coincide con su actividad; si solo tienes unos minutos, recorre el perímetro de la plaza y quédate en el casco central.", "Start in the plaza to see how the church relates to the civic space. Continue to the market during trading hours, or spend a short stop walking the square’s perimeter within the historic center.", "先在廣場辨認教堂與公共空間的相對位置。市集營業時可順路繼續；若只停留幾分鐘，沿廣場外緣走一圈即可感受老城中心的尺度。"],
  },
  "iglesia-san-jose-chacao": {
    next: ["plaza-bolivar-chacao", "plaza-el-indio"],
    advice: ["Observa la fachada desde la plaza para obtener una vista completa. Si hay culto, deja el interior para otro momento y aprovecha el espacio abierto para estudiar la relación de la entrada con la calle.", "View the complete facade from the square. If a service is underway, save the interior for another time and use the open space to study how the entrance meets the street.", "站在廣場上較容易看清整個立面。若正在舉行禮拜，可改日再進入，先從外面觀察教堂入口與街道的銜接。"],
  },
  "biblioteca-los-palos-grandes": {
    next: ["plaza-francia", "la-estancia"],
    advice: ["Combina una pausa en la plaza con una visita breve a la biblioteca. Si viajas con niños, consulta si el área infantil está disponible y recuerda que las salas de lectura requieren un ritmo más tranquilo que la plaza.", "Combine a pause in the square with a short library visit. With children, ask whether the children’s area is available and allow for a quieter pace in reading rooms than on the plaza.", "可先在廣場歇腳，再短暫參觀圖書館。帶孩子同行時，可先詢問兒童區是否開放，進入閱覽區後放輕聲量和腳步。"],
  },
  "mercado-municipal-chacao": {
    next: ["plaza-bolivar-chacao", "iglesia-san-jose-chacao"],
    advice: ["Recorre un pasillo antes de decidir dónde comprar. Compara los puestos por productos y pregunta antes de fotografiar a vendedores o clientes. Si buscas comer allí, comprueba qué locales están atendiendo.", "Walk an aisle before deciding where to shop. Compare what stalls sell and ask before photographing vendors or customers. If you plan to eat there, see which counters are serving.", "先走一條走道再決定在哪家採買，留意各攤販售的品項。拍攝攤商或顧客之前先詢問；想在市場用餐，可先看看當天有哪些攤位供餐。"],
  },
  "plaza-brion": {
    next: ["bulevar-sabana-grande", "plaza-venezuela"],
    advice: ["Usa la plaza como punto de encuentro antes de entrar al bulevar. Elige de antemano la estación donde terminarás el paseo; esto permite recorrer solo el tramo de Sabana Grande que te interese.", "Use the square as a meeting point before entering the boulevard. Choose your exit station in advance so you can walk only the stretch of Sabana Grande you want to explore.", "可把廣場當作進入步行大道前的集合點。先約好回程要搭哪個地鐵站，就能按時間與興趣選擇薩瓦納格蘭德的步行段。"],
  },
  "parque-aruflo": {
    next: ["plaza-bolivar-chacao", "plaza-el-indio"],
    advice: ["Reserva este parque para una pausa de barrio. Recorre el sendero antes de escoger dónde sentarte y comprueba qué zonas están abiertas antes de prometer una parada de juegos o descanso al grupo.", "Use this neighborhood park as a short rest stop. Walk the path before choosing where to sit and check which areas are open before planning a play or rest break for the group.", "可把這座社區公園排作短暫休息點。先走一段步道再挑座位，若同行者想遊戲或休息，先確認哪些區域開放。"],
  },
  "plaza-el-indio": {
    next: ["plaza-bolivar-chacao", "iglesia-san-jose-chacao"],
    advice: ["Mira la figura de la plaza antes de continuar al centro de Chacao. Compara luego el carácter de esta pequeña parada vecinal con el espacio más ceremonial de la Plaza Bolívar.", "Look at the square’s figure before continuing into central Chacao. Compare the neighborhood scale of this stop with the more ceremonial setting of Plaza Bolívar.", "先觀察廣場的原住民造像，再往查考中心走。到玻利瓦爾廣場後，可比較這處鄰里空間與具有典禮用途的廣場有何不同。"],
  },
  "parque-cristal": {
    next: ["planetario-humboldt", "plaza-francia"],
    advice: ["Para leer el edificio, mira primero desde una acera frontal y luego desde un ángulo oblicuo. Compara el vacío del centro con el volumen de vidrio a su alrededor y deja el acceso interior fuera de tu plan si solo vas por la arquitectura.", "Start from a public sidewalk facing the building, then view it obliquely. Compare the central opening with the glass volume surrounding it. An exterior stop is enough if your interest is the architecture.", "可先從正對大樓的公共人行道觀看，再移到斜側方，比較中央開口與四周玻璃量體的關係。以建築為主要目的時，安排外觀停留即可。"],
  },
  "centro-san-ignacio": {
    next: ["plaza-francia", "plaza-bolivar-chacao"],
    advice: ["Elige un punto del patio que puedas reconocer desde más de un nivel. Al cambiar de planta, compara las visuales y los recorridos. Antes de salir, localiza la puerta que te convenga para seguir por La Castellana.", "Pick a point in the courtyard you can recognize from more than one level. Compare views and circulation as you move between floors, then choose the exit that suits your onward walk through La Castellana.", "在中庭挑一個從不同樓層都看得見的參照點。換樓層時比較視線與動線，離開前再選適合接往拉卡斯特利亞街區的出口。"],
  },
  "museo-arte-contemporaneo": {
    next: ["teatro-teresa-carreno", "parque-los-caobos"],
    advice: ["Ubica la entrada del museo antes de internarte en Parque Central. Escoge una exposición de la cartelera como objetivo de la visita y deja tiempo al salir para comparar la escala de la sala con la del complejo de torres.", "Locate the museum entrance before going deep into Parque Central. Pick one exhibition from the program and leave time on your way out to compare the gallery’s scale with that of the tower complex.", "走進中央公園建築群深處之前，先辨認博物館入口。可從當期節目中選一個展覽細看，離館時再比較展廳和周圍塔樓群的尺度。"],
  },
  "sabas-nieves": {
    next: ["plaza-francia", "la-estancia"],
    advice: ["Decide en el acceso si harás solo la aproximación o la subida. Considera el regreso antes de fijar la hora de vuelta y sigue las indicaciones de INPARQUES para el estado del sendero. La plaza de Altamira funciona como parada urbana antes o después.", "Decide at the trailhead whether to stop at the entrance or climb. Allow time for the return and follow INPARQUES notices on trail conditions. Altamira’s square makes an urban stop before or after the trail.", "抵達步道口後再決定只走到入口，還是繼續上坡。訂回程時間時要預留折返路程，並依 INPARQUES 公告掌握步道狀況。阿爾塔米拉廣場可排在登山前或回程。"],
  },
  "plaza-venezuela": {
    next: ["bulevar-sabana-grande", "jardin-botanico-ucv"],
    advice: ["Escoge primero la salida peatonal hacia tu siguiente destino. Mira la fuente desde el perímetro y deja tiempo para los cruces señalizados si continúas hacia el bulevar o la Ciudad Universitaria.", "Choose the pedestrian exit for your next stop first. View the fountain from the perimeter and allow time for marked crossings if continuing to the boulevard or the university campus.", "先辨認往下一站的行人出口，再從廣場外緣觀察噴泉。若接著去步行大道或大學城，要預留經行人穿越道過街的時間。"],
  },
  "bulevar-sabana-grande": {
    next: ["plaza-brion", "plaza-venezuela"],
    advice: ["Usa Chacaíto y Sabana Grande como puntos para dividir el eje en tramos. Fíjate en cómo los comercios de planta baja y las calles transversales cambian el ritmo del paseo antes de decidir si sigues a Plaza Venezuela.", "Use Chacaíto and Sabana Grande stations to split the boulevard into segments. Notice how ground-floor shops and side streets change the rhythm of the walk before deciding whether to continue to Plaza Venezuela.", "可用查凱托站與薩瓦納格蘭德站把步行大道分段。留意一樓商舖和橫街怎樣改變沿途的步行節奏，再決定是否繼續到委內瑞拉廣場。"],
  },
  "parque-los-caobos": {
    next: ["museo-bellas-artes", "museo-ciencias"],
    advice: ["Si combinas parque y museo, verifica primero la cartelera de la Plaza de los Museos. En el parque, compara una escultura situada en sombra con otra más expuesta para ver cómo el arbolado cambia la percepción de las obras.", "If pairing the park with a museum, check the Plaza de los Museos schedule first. In the park, compare a sculpture in shade with one in a more open spot to see how the trees change the experience.", "若要連遊公園和博物館，先查博物館廣場各館的開放資訊。園內可比較林蔭下和較開闊處的雕塑，看看樹木如何改變觀看感受。"],
  },
  "museo-bellas-artes": {
    next: ["museo-ciencias", "parque-los-caobos"],
    advice: ["Elige una exposición como objetivo principal y reserva unos minutos para comparar los volúmenes del museo desde la plaza. Si solo dispones de tiempo para un museo, distingue su entrada de la del Museo de Ciencias antes de hacer fila.", "Choose one exhibition as your main goal and save a few minutes to compare the museum’s building volumes from the square. If you only have time for one museum, identify its entrance before joining a queue.", "可先選一個展覽作為參觀重點，再從廣場比較美術館各棟建築的量體。若時間只夠去一間博物館，排隊前先辨認美術館和科學博物館各自的入口。"],
  },
  "museo-ciencias": {
    next: ["museo-bellas-artes", "parque-los-caobos"],
    advice: ["Escoge las salas abiertas que más interesen al grupo. Con niños, elige una pieza y lee su cédula juntos antes de seguir. Si tienes que esperar o el museo está cerrado, continúa al parque Los Caobos.", "Choose the open galleries that most interest your group. With children, pick one exhibit and read its label together before moving on. If you need to wait or the museum is closed, continue to Los Caobos Park.", "先從開放展廳中選出最符合同行者興趣的幾間。帶孩子時可選一件展品一起讀說明牌。若要等候或遇到閉館，可先去洛斯考沃斯公園。"],
  },
  "teatro-teresa-carreno": {
    next: ["parque-los-caobos", "museo-bellas-artes"],
    advice: ["Si tienes una función, identifica la sala y su acceso antes de pasear por el sector. Si solo vas por la arquitectura, compara la profundidad de las terrazas desde un punto lateral y luego vuelve a la vista de conjunto desde la calle.", "If attending a show, locate your hall and its entrance before exploring the area. For an architectural visit, compare the terrace depths from the side and then return to a broader view from the street.", "有票時可先確認演出廳與入口，再安排周邊步行。若只看建築，可先從側面比較階梯式露台的深度，再回到街上看整體。"],
  },
  "galeria-arte-nacional": {
    next: ["museo-bellas-artes", "teatro-teresa-carreno"],
    advice: ["Consulta qué exposiciones están montadas y prioriza una de arte venezolano si aparece en cartelera. Deja el segundo museo para después; en la avenida México los cruces y el acceso a cada recinto añaden tiempo al paseo.", "Check current exhibitions and prioritize one on Venezuelan art if it is on the program. Schedule a second museum afterward and allow time for crossings and separate entrances along Avenida México.", "先查看目前有哪些展覽，若展出委內瑞拉藝術，可選一檔細看。第二間博物館排在後面，墨西哥大道上的過街與各館入口也要預留時間。"],
  },
  "jardin-botanico-ucv": {
    next: ["plaza-venezuela", "parque-los-caobos"],
    advice: ["Si el sendero a la Laguna Venezuela está abierto, compara la vegetación acuática con la de un tramo terrestre. Antes de salir, identifica la puerta de regreso a Plaza Venezuela y deja la visita a otros recintos universitarios para un recorrido aparte.", "If the path to Laguna Venezuela is open, compare aquatic vegetation with plants along a dry segment. Before leaving, identify the gate back toward Plaza Venezuela and save other university buildings for a separate visit.", "若委內瑞拉湖步道開放，可對照水生植栽和旱地步道旁的植物。離開前確認回委內瑞拉廣場要走哪個入口，其他大學建築可安排另一次參觀。"],
  },
} satisfies Record<Exclude<Place, "planetario-humboldt">, Planning>;
