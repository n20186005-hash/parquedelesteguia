import type { nearbyTopics } from "./nearby";

type Place = (typeof nearbyTopics)[number];

export const nearbyFaq = {
  "planetario-humboldt": [
    ["¿Dónde se ve mejor la forma de la cúpula?", "Desde un lateral del sendero de la entrada puedes encuadrarla junto con el cuerpo bajo del edificio."],
    ["Where is the dome’s shape easiest to see?", "Stand to one side of the entrance path to frame the dome alongside the low building."],
    ["從哪裡較容易看清圓頂？", "可站在入口步道側邊，讓圓頂和低矮館舍同時入鏡，兩者的比例較清楚。"],
  ],
  "museo-del-transporte": [
    ["¿Qué puedo comparar si tengo poco tiempo?", "Elige dos piezas con formas de acceso distintas. Un automóvil y un vehículo ferroviario permiten comparar la altura de entrada y el espacio para pasajeros."],
    ["What can I compare on a short visit?", "Choose two exhibits with different boarding designs, such as a car and a rail vehicle. Compare entry height and passenger space."],
    ["時間短時可以比較哪些展品？", "可挑一輛汽車和一件鐵路車輛，比較踏階高度、車門和乘客空間。"],
  ],
  "plaza-francia": [
    ["¿Dónde veo toda la composición de la plaza?", "Empieza por un extremo del paseo central. Para apreciar el obelisco de perfil, recorre luego el borde de la plaza."],
    ["Where can I see the full layout of the square?", "Start at an end of the central walk. Follow the edge of the square afterward for a side view of the obelisk."],
    ["在哪裡可以看出整座廣場的配置？", "先從中央步道一端對準廣場中軸，再沿邊緣走到方尖碑的側面。"],
  ],
  "la-estancia": [
    ["¿Cómo organizo una visita si solo quiero ver la hacienda?", "Confirma el acceso al jardín y enfoca el recorrido en los exteriores de la casa. Las exposiciones pueden consultarse por separado en la agenda."],
    ["How should I plan a visit focused on the old estate?", "Check access to the garden and focus on the exterior of the house. The program lists exhibitions separately."],
    ["只想看舊莊園該怎麼安排？", "先確認花園是否開放，再由戶外步道看宅邸外觀。展覽可另外查詢。"],
  ],
  "lago-9-leander": [
    ["¿El barco es el que navegó en 1806?", "El que se ve en el lago es una réplica. La fecha de 1806 corresponde a la expedición histórica de Francisco de Miranda."],
    ["Is this the ship that sailed in 1806?", "The ship at the lake is a replica. The 1806 date refers to Francisco de Miranda’s historic expedition."],
    ["湖上的船是 1806 年遠征的原船嗎？", "湖上是復刻船。1806 年指的是弗朗西斯科・德・米蘭達當年的遠征。"],
  ],
  "patios-ornamentales": [
    ["¿Merece la pena entrar si no corre el agua?", "Sí. Enfoca el paseo en los murales de azulejos, las aperturas de los muros y los cambios de sombra entre patios."],
    ["Are the courtyards worth seeing when water is off?", "Yes. Look at the tiled murals, wall openings and changes in shade from one courtyard to the next."],
    ["水景停用時還有哪些看點？", "可看瓷磚壁畫、牆面開口，以及各座庭院間的光影差異。"],
  ],
  "jardin-xerofitico": [
    ["¿Qué diferencia este jardín de los patios?", "Aquí la forma de la planta ocupa el primer plano. En los patios, muros, pavimento y agua enmarcan la vegetación de otra manera."],
    ["How does this garden differ from the courtyards?", "Here the plants’ shapes take center stage. In the courtyards, walls, paving and water frame plants differently."],
    ["旱生植物園與景觀庭院有何不同？", "這裡以植物本身的株形為焦點；景觀庭院則以牆面、鋪面和水景來框住植栽。"],
  ],
  "concha-acustica": [
    ["¿Es un auditorio interior?", "Se contempla desde una zona de espectadores al aire libre. Para entrar a un acto, sigue las condiciones de ese evento."],
    ["Is this an indoor auditorium?", "The spectators’ area is outdoors. Follow the organizer’s admission rules if attending an event."],
    ["這是室內演出廳嗎？", "觀眾區在戶外。若為活動前來，入場方式以該場活動公告為準。"],
  ],
  "aviario": [
    ["¿Veré las mismas aves de las fotos?", "Las fotos documentan el lugar y sus aves en fechas concretas. En tu visita, consulta los rótulos y observa solo desde el sendero habilitado."],
    ["Will I see the same birds as in the photos?", "The photos document birds at the aviary on particular dates. Read the current signs and observe from the designated path."],
    ["當天會看到照片裡的鳥嗎？", "照片記錄的是特定時間的鳥舍與鳥類。到訪時可先閱讀現場說明，再從開放步道觀察。"],
  ],
  "terrario": [
    ["¿Cómo observo sin molestar a los animales?", "Detente unos pasos antes del vidrio, mira los refugios y evita el flash. Si un animal está escondido, deja que salga por sí solo."],
    ["How can I watch without disturbing the animals?", "Pause a few steps back from the glass, look for shelters and avoid flash. Let any hidden animal emerge on its own."],
    ["如何觀察才不會打擾動物？", "在玻璃前退幾步找遮蔽物，避免閃光燈。若動物躲藏，請等牠自行出來。"],
  ],
  "parque-simon-bolivar": [
    ["¿Qué hago si el puente Independencia está cerrado?", "Busca el acceso abierto de La Carlota en el mapa y confirma el paso peatonal antes de salir. Si no puedes confirmar un cruce, organiza ambos parques como visitas separadas."],
    ["What if Puente Independencia is closed?", "Locate La Carlota’s open entrance and confirm pedestrian access before leaving. If you cannot confirm a crossing, plan the two parks as separate visits."],
    ["獨立橋關閉時怎麼辦？", "先查拉卡洛塔當日開放的入口和人行通道。若無法確定有連通路線，可把兩座公園分開遊覽。"],
  ],
  "fuente-las-cortinas": [
    ["¿Qué detalle se aprecia con la fuente apagada?", "Desde un lateral verás la separación entre los muros y el sendero, además del ritmo de sus bordes."],
    ["What can I see when the fountain is off?", "From the side you can see the spacing between the walls and walkway and the rhythm of the fountain’s edges."],
    ["停水時可以看什麼細節？", "可從側面留意牆面與步道的間距，以及噴泉各道邊緣的排列節奏。"],
  ],
  "plaza-bolivar-chacao": [
    ["¿Es la misma Plaza Bolívar del centro de Caracas?", "Esta es la plaza del municipio Chacao, junto a su iglesia de San José. Usa el resultado que mencione Chacao en el mapa."],
    ["Is it the same Plaza Bolívar as downtown Caracas?", "This square is in Chacao, beside its San José church. Choose the map result that names Chacao."],
    ["這是卡拉卡斯市中心的玻利瓦爾廣場嗎？", "此處位於查考，旁邊是聖何塞教堂。導航時請選名稱帶有查考（Chacao）的結果。"],
  ],
  "iglesia-san-jose-chacao": [
    ["¿Desde dónde puedo fotografiar el frente completo?", "Desde el lado opuesto de la Plaza Bolívar de Chacao tendrás más distancia y evitarás bloquear el paso en el atrio."],
    ["Where can I photograph the full facade?", "The far side of Chacao’s Plaza Bolívar gives more distance and keeps you clear of the church entrance."],
    ["在哪裡較容易拍到整個教堂正面？", "到查考玻利瓦爾廣場對側取景，可以拉開距離，也不會擋住教堂入口。"],
  ],
  "biblioteca-los-palos-grandes": [
    ["¿Puedo visitar solo la plaza?", "La plaza permite ver el borde exterior de la biblioteca. Para entrar a las salas de lectura o a la ludoteca, consulta el horario de cada servicio."],
    ["Can I visit only the square?", "The square gives a view of the library’s exterior. Check individual hours for the reading rooms or children’s area if you want to enter."],
    ["可以只逛廣場嗎？", "廣場上就能看到圖書館外觀。若還想進閱覽室或兒童區，請另查各項服務的開放時間。"],
  ],
  "mercado-municipal-chacao": [
    ["¿Cómo hago una parada corta en el mercado?", "Elige primero si buscas productos o comida preparada. Recorre un solo pasillo y pregunta qué puestos están abiertos antes de continuar al casco histórico."],
    ["How can I make a short stop at the market?", "Decide whether you want produce or prepared food. Walk one aisle and ask which stalls are open before continuing to the old center."],
    ["時間有限時怎麼逛市場？", "先決定是買食材還是找熟食，逛一條走道，確認哪些攤位有營業，再接著往老城走。"],
  ],
  "plaza-brion": [
    ["¿Dónde conviene reunirse antes de caminar por el bulevar?", "Acuerda un punto en la zona peatonal cerca del monumento y confirma con el grupo la salida de Chacaíto que utilizarán."],
    ["Where should a group meet before walking the boulevard?", "Choose a pedestrian spot near the monument and agree which Chacaíto exit everyone will use."],
    ["步行大道之旅在哪裡集合較方便？", "可約在紀念像附近的行人區，同時先確認大家會使用哪個查凱托站出口。"],
  ],
  "parque-aruflo": [
    ["¿Aruflo y La Salle son el mismo parque?", "Son espacios distintos del entorno de la avenida Libertador. Elige la ficha de Aruflo en el mapa y verifica que el nombre coincida al llegar."],
    ["Are Aruflo and La Salle the same park?", "They are separate green spaces near Avenida Libertador. Select Aruflo on the map and check the name when you arrive."],
    ["阿魯弗洛和拉薩爾是同一座公園嗎？", "它們是解放者大道附近兩處不同的綠地。導航請選阿魯弗洛，到達後再核對入口名稱。"],
  ],
  "plaza-el-indio": [
    ["¿Cómo distingo esta plaza de otras con nombre parecido?", "Busca la referencia a Chacao y a la calle Sucre. En el lugar, usa la figura indígena como punto de orientación."],
    ["How do I distinguish this square from similarly named places?", "Look for Chacao and Calle Sucre. At the square, use the Indigenous figure as your landmark."],
    ["怎麼避免走到同名廣場？", "用查考和蘇克雷街確認地點，抵達後再以廣場內的原住民造像辨認。"],
  ],
  "parque-cristal": [
    ["¿Qué lado muestra mejor la abertura central?", "La acera frente al volumen de vidrio da la vista general. Un segundo ángulo lateral muestra la profundidad de la abertura."],
    ["Which side best shows the central opening?", "The sidewalk facing the glass volume gives the overview. A second view from the side reveals the depth of the opening."],
    ["大樓正中央的開口怎麼看才清楚？", "正對玻璃立方體的人行道適合看全貌，再到斜側方觀察開口的深度。"],
  ],
  "centro-san-ignacio": [
    ["¿Cómo aprecio el diseño si no voy de compras?", "Recorre dos niveles de acceso público que miren al mismo patio. Compara la vista hacia el vacío y el recorrido que lleva a cada borde."],
    ["How can I appreciate the design without going shopping?", "Walk two public levels overlooking the same courtyard. Compare the view across the opening and how each level leads to its edge."],
    ["不購物也能看出商場的建築特色嗎？", "可走到面向同一中庭的兩個公共樓層，比較跨越中庭的視線與走廊動線。"],
  ],
  "museo-arte-contemporaneo": [
    ["¿Parque Central es el nombre de una sala?", "Es el complejo urbano donde está el museo. Para llegar a la exposición, sigue la señalización específica del museo dentro del conjunto."],
    ["Is Parque Central the name of a gallery?", "It is the urban complex housing the museum. Once inside the complex, follow museum signs to reach the exhibitions."],
    ["中央公園是展廳名稱嗎？", "中央公園指博物館所在的建築群。走入建築群後，請循博物館標誌前往展廳。"],
  ],
  "sabas-nieves": [
    ["¿Dónde decido si seguir cuesta arriba?", "Usa el cartel al final de la avenida San Juan Bosco para comprobar el estado del sendero. Si tienes dudas sobre el ascenso o el regreso, ese es un buen punto para dar la vuelta."],
    ["Where should I decide whether to climb?", "Use the sign at the end of Avenida San Juan Bosco to check trail conditions. If the climb or return is uncertain, make the trailhead your turnaround point."],
    ["在哪裡決定是否繼續上坡？", "到聖胡安博斯科大道盡頭查看步道告示。若無法掌握上坡或折返所需時間，可在入口折回。"],
  ],
  "plaza-venezuela": [
    ["¿Desde dónde conviene mirar la fuente?", "Usa el perímetro peatonal y los cruces señalizados. Así puedes cambiar de ángulo y continuar hacia la salida de metro sin acercarte a los carriles."],
    ["Where is the best place to view the fountain?", "Stay on the pedestrian perimeter and use marked crossings. You can change angles and continue toward the metro without stepping into traffic lanes."],
    ["應從哪裡看委內瑞拉廣場噴泉？", "沿行人區外緣觀看，過街用行人穿越道。這樣可換角度拍水景，再順路回到地鐵出口。"],
  ],
  "bulevar-sabana-grande": [
    ["¿Dónde puedo acortar el paseo?", "Entre Chacaíto y Plaza Venezuela puedes terminar en la estación Sabana Grande. Define ese punto antes de salir si el grupo dispone de poco tiempo."],
    ["Where can I shorten the walk?", "Between Chacaíto and Plaza Venezuela, you can end at Sabana Grande station. Agree on that exit before starting if time is limited."],
    ["不走完全程可以在哪裡離開？", "從查凱托往委內瑞拉廣場走時，可以在中途的薩瓦納格蘭德站結束行程。時間有限可先約好在這裡離開。"],
  ],
  "parque-los-caobos": [
    ["¿En qué orden combino el parque y los museos?", "Consulta primero los horarios de sala. Visita el museo con una hora de cierre más próxima y reserva el paseo arbolado para antes o después según el acceso."],
    ["In what order should I visit the park and museums?", "Check museum hours first. Visit the one with the earlier closing time, then fit the wooded walk around park access."],
    ["公園和博物館該先去誰？", "先查展廳時間，優先安排較早閉館的一間。再按公園入口開放情況，把林蔭步道放在前後合適的時段。"],
  ],
  "museo-bellas-artes": [
    ["¿Puedo comparar los dos edificios sin entrar?", "Desde la plaza se aprecia el frente bajo; cambia de ángulo por el exterior para identificar el volumen moderno de la ampliación."],
    ["Can I compare the two buildings without going inside?", "The square gives a view of the low frontage. Move to another public vantage point to identify the modern volume of the extension."],
    ["不進館也能比較新舊建築嗎？", "博物館廣場可看低矮舊館正面，再沿開放的外部步道換個角度辨認現代擴建量體。"],
  ],
  "museo-ciencias": [
    ["¿Qué detalle busco antes de visitar las salas?", "Mira el pórtico y la ornamentación de la fachada. Después compara su acceso con el del Museo de Bellas Artes, al otro lado del conjunto."],
    ["What detail should I look for before entering the galleries?", "Look at the portico and facade ornament. Then compare its entrance with the Museum of Fine Arts entrance in the same ensemble."],
    ["入館之前可先看什麼？", "可先看門廊與立面裝飾，再在同一座博物館廣場比較科學博物館和美術館的入口。"],
  ],
  "teatro-teresa-carreno": [
    ["¿Cómo identifico el acceso correcto para mi entrada?", "Busca el nombre de la sala en el boleto. Consulta allí mismo el acceso habilitado a Ríos Reyna o José Félix Ribas, porque el complejo tiene varios niveles."],
    ["How do I find the right entrance on my ticket?", "Check the hall name on the ticket. Ask which entrance serves Ríos Reyna or José Félix Ribas, since the complex spans several levels."],
    ["如何找到票券指定的入口？", "先看票券標示的是里奧斯・雷納廳還是何塞・費利克斯・里瓦斯廳，再核對現場開放的入口及所在樓層。"],
  ],
  "galeria-arte-nacional": [
    ["¿La galería sigue en el edificio antiguo de Bellas Artes?", "La visita actual corresponde a la sede de avenida México. Los recorridos sobre la historia de la galería pueden mencionar su sede provisional anterior."],
    ["Is the gallery still in the old Fine Arts Museum building?", "Visit the current building on Avenida México. Accounts of the gallery’s history may refer to its earlier temporary home."],
    ["藝術畫廊還在美術館舊址嗎？", "現今應前往墨西哥大道的館舍。閱讀歷史資料時，仍可能看到畫廊曾暫借美術館舊館的記載。"],
  ],
  "jardin-botanico-ucv": [
    ["¿Puedo limitar el recorrido a la Laguna Venezuela?", "Sí, cuando el acceso y el sendero a la laguna estén habilitados. Pregunta en la entrada por el tramo que permite volver sin continuar por todo el jardín."],
    ["Can I limit the visit to Laguna Venezuela?", "Yes, when the entrance and lagoon path are open. Ask at the gate which route lets you return without touring the entire garden."],
    ["可以只遊覽委內瑞拉湖嗎？", "湖區入口與步道開放時可以。進園先詢問哪一段可走到湖邊並原路折返。"],
  ],
} as const satisfies Record<Place, readonly (readonly [string, string])[]>;
