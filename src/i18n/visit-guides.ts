export const guideLanguages = ["es", "en", "zh"] as const;
export const guideTopics = ["horarios", "como-llegar", "mapa"] as const;

export type GuideLanguage = (typeof guideLanguages)[number];
export type GuideTopic = (typeof guideTopics)[number];

type Guide = {
  title: string;
  description: string;
  sections: [string, string][];
  steps?: string[];
};

export const guideLabels = {
  es: { guides: "Guías de visita", home: "Parque del Este", maps: "Abrir en Google Maps", station: "Estación Miranda en Google Maps", source: "Consultar INPARQUES", route: "Recorrido a pie" },
  en: { guides: "Visitor guides", home: "East Park", maps: "Open in Google Maps", station: "Miranda station on Google Maps", source: "Check INPARQUES", route: "Walking route" },
  zh: { guides: "遊覽指南", home: "東方公園", maps: "在 Google 地圖開啟", station: "在 Google 地圖查看米蘭達站", source: "查閱 INPARQUES 公告", route: "步行路線" },
};

export const guides: Record<GuideLanguage, Record<GuideTopic, Guide>> = {
  es: {
    horarios: {
      title: "Horario del Parque del Este y entrada",
      description: "Cómo comprobar si el Parque del Este está abierto hoy, qué preguntar si vas un lunes y cómo planificar la entrada al parque y al planetario.",
      sections: [
        ["¿Está abierto hoy el Parque del Este?", "Confirma con INPARQUES el horario de la fecha concreta y la hora de último ingreso. La ficha oficial describe el parque y sus atractivos, pero no publica un horario semanal completo. Comprueba también si hay cambios por feriados o cierres parciales."],
        ["¿Abre los lunes?", "Si tu viaje depende de un lunes, pregunta por esa fecha y por el acceso de la avenida Francisco de Miranda antes de salir. Conviene dejar un día alternativo si no consigues confirmar la apertura."],
        ["Entrada al parque y actividades", "La entrada general al parque es gratuita. Consulta por separado las funciones y condiciones de acceso del Planetario Humboldt y la disponibilidad de los botes del Lago 9. Si dispones de poco tiempo, centra la visita en los patios ornamentales y deja el lago para una segunda parada."],
      ],
    },
    "como-llegar": {
      title: "Cómo llegar al Parque del Este en metro",
      description: "Ubica la estación Miranda de la Línea 1, la entrada por la avenida Francisco de Miranda y el punto de llegada para taxi o a pie.",
      sections: [
        ["En metro desde Caracas", "Toma la Línea 1 hasta Miranda. Al salir, busca la avenida Francisco de Miranda y la entrada del Parque Generalísimo Francisco de Miranda, el nombre oficial del Parque del Este. Usa el enlace de la estación para ubicar primero tu punto de llegada."],
        ["En taxi o a pie", "Pide la entrada por la avenida Francisco de Miranda, cerca de la estación Miranda. Si vienes a pie desde Los Palos Grandes, usa los cruces señalizados. Para coordinar el regreso, acuerda la misma entrada como punto de encuentro."],
        ["Dirección y primera parada", "Avenida Francisco de Miranda, Caracas 1071, Miranda, Venezuela (F5V6+76M). El Planetario Humboldt queda cerca de la entrada principal y su cúpula blanca sirve de referencia para empezar el recorrido."],
      ],
    },
    mapa: {
      title: "Mapa del Parque del Este y ruta a pie",
      description: "Organiza la visita desde la entrada de Miranda con un recorrido por el Planetario Humboldt, los patios ornamentales y el Lago 9.",
      sections: [
        ["Cómo orientarte", "Usa el mapa para llegar por la avenida Francisco de Miranda. Dentro del parque, fíjate en la señalización de los senderos y en tres referencias: la cúpula del Planetario Humboldt, los patios ornamentales y el Lago 9."],
        ["Qué observar", "En los patios del diseño de Roberto Burle Marx, observa cómo los muros de azulejos enmarcan el agua y las plantas. Desde la orilla del Lago 9, busca la réplica del Leander, vinculada al viaje de Francisco de Miranda en 1806."],
        ["Ajusta la ruta a tu visita", "Para una visita breve, elige los patios y vuelve por el acceso de Miranda. Si vas con niños, deja tiempo para las pausas y consulta las funciones del planetario antes de incluirlo. Sigue los desvíos señalizados si hay pasos cerrados."],
      ],
      steps: ["Entra por la avenida Francisco de Miranda y ubica la cúpula del Planetario Humboldt.", "Sigue la señalización hacia los patios ornamentales y recorre sus espacios de agua y sombra.", "Continúa al Lago 9 para ver el Leander desde la orilla y vuelve al acceso de Miranda por los senderos abiertos."],
    },
  },
  en: {
    horarios: {
      title: "East Park opening hours and admission",
      description: "Find out how to check whether Parque del Este is open today, what to ask before a Monday visit and how to plan for the planetarium.",
      sections: [
        ["Is East Park open today?", "Ask INPARQUES about your visit date and the last admission time. Its park listing describes the main attractions but does not publish a full weekly schedule. Check for holiday changes and partial closures as well."],
        ["Can you visit on a Monday?", "If you are planning a Monday visit, confirm that specific date and ask about access from Avenida Francisco de Miranda. Keep an alternate day available if you cannot confirm opening."],
        ["Park admission and activities", "General park admission is free. Check Planetario Humboldt showtimes and entry arrangements separately, along with pedal boat availability at Lake 9. On a short visit, start with the ornamental courtyards and add the lake if time permits."],
      ],
    },
    "como-llegar": {
      title: "How to reach East Park by metro",
      description: "Find Miranda station on Line 1, the Avenida Francisco de Miranda entrance and a convenient meeting point for a taxi or walk.",
      sections: [
        ["By metro from Caracas", "Take Line 1 to Miranda. After exiting, look for Avenida Francisco de Miranda and the entrance to Parque Generalísimo Francisco de Miranda, the official name of East Park. Use the station map link to locate your arrival point."],
        ["By taxi or on foot", "Ask for the Avenida Francisco de Miranda entrance near Miranda station. If walking from Los Palos Grandes, use marked crossings. Arrange to meet at the same entrance for the return journey."],
        ["Address and first landmark", "Avenida Francisco de Miranda, Caracas 1071, Miranda, Venezuela (F5V6+76M). The white dome of the Humboldt Planetarium is near the main entrance and makes a handy first landmark."],
      ],
    },
    mapa: {
      title: "East Park map and walking route",
      description: "Plan a walk from the Miranda entrance through the Humboldt Planetarium area and ornamental courtyards to Lake 9.",
      sections: [
        ["Finding your way", "Use the map to reach Avenida Francisco de Miranda. Once inside, follow posted trail signs and look for three landmarks: the Humboldt Planetarium dome, the ornamental courtyards and Lake 9."],
        ["What to look for", "In the courtyards of Roberto Burle Marx’s design, look at how the tiled walls frame water and plants. From the shore of Lake 9, look for the Leander replica, which recalls Francisco de Miranda’s voyage in 1806."],
        ["Adapt the walk to your visit", "For a short visit, choose the courtyards and return to the Miranda entrance. With children, allow extra time for breaks and check showtimes before adding the planetarium. Follow posted detours around closed paths."],
      ],
      steps: ["Enter from Avenida Francisco de Miranda and locate the Humboldt Planetarium dome.", "Follow signs to the ornamental courtyards and explore their shaded spaces and water features.", "Continue to Lake 9, see the Leander replica from the shore, and return to the Miranda entrance on open paths."],
    },
  },
  zh: {
    horarios: {
      title: "卡拉卡斯東方公園開放時間與門票",
      description: "查詢東方公園今天是否開放、星期一能否入園，以及如何安排洪堡天文館及湖區遊覽。",
      sections: [
        ["東方公園今天有開嗎？", "出發前向委內瑞拉國家公園管理局（INPARQUES）查詢到訪當天的開放時間與最晚入園時間。官方景點頁介紹了園內設施，但未列出完整的每週時段。假日也請留意臨時調整及部分區域關閉的公告。"],
        ["星期一可以入園嗎？", "如果計畫星期一前往，請確認該日期及弗朗西斯科・德・米蘭達大道入口是否開放。若無法在出發前取得確認，可預留另一個到訪日。"],
        ["入園與園內活動", "公園一般入園免費。洪堡天文館的場次及入場方式、第九湖的腳踏船營運情形，請分別查詢。時間較短可先逛景觀庭院，再視行程加上湖區。"],
      ],
    },
    "como-llegar": {
      title: "東方公園交通指南與米蘭達地鐵站",
      description: "查找卡拉卡斯地鐵 1 號線米蘭達站、弗朗西斯科・德・米蘭達大道入口，以及步行和乘車抵達的會合點。",
      sections: [
        ["搭地鐵前往", "搭乘卡拉卡斯地鐵 1 號線至米蘭達站（Miranda）。出站後找弗朗西斯科・德・米蘭達大道及公園入口。公園正式名稱是弗朗西斯科・德・米蘭達將軍公園，可先用地圖連結確認車站位置。"],
        ["搭計程車或步行", "搭車時可告知司機在米蘭達站附近的大道入口下車。從洛斯帕洛斯格蘭德斯一帶步行時，請使用有標線的行人穿越道。回程可約在同一入口會合。"],
        ["地址與第一個地標", "委內瑞拉米蘭達州卡拉卡斯 1071，弗朗西斯科・德・米蘭達大道（F5V6+76M）。洪堡天文館的白色圓頂靠近主要入口，可作為進園後的辨識地標。"],
      ],
    },
    mapa: {
      title: "東方公園地圖與園內步行路線",
      description: "從米蘭達站旁入口出發，依序辨認洪堡天文館、景觀庭院和第九湖，規劃適合自己的步行行程。",
      sections: [
        ["入園後怎麼辨認方向？", "先用地圖導航至弗朗西斯科・德・米蘭達大道。入園後依循步道指標，依序辨認洪堡天文館圓頂、景觀庭院和第九湖。"],
        ["沿途看什麼？", "在羅伯托・布爾勒・馬克思設計的景觀庭院，觀察彩色磁磚牆如何搭配水景與植栽。走到第九湖岸邊，可看到重現弗朗西斯科・德・米蘭達 1806 年航程的利安德號仿造船。"],
        ["依停留時間調整", "短程可主逛庭院，再原路返回米蘭達入口。親子同行可多留休息時間，想入內參觀天文館可事先查詢場次。遇到步道關閉，請依現場指標改道。"],
      ],
      steps: ["從弗朗西斯科・德・米蘭達大道入園，先辨認洪堡天文館圓頂。", "沿園內指標前往景觀庭院，觀察水景、植栽與磁磚牆。", "續行至第九湖，從岸邊觀看利安德號，再沿開放步道返回米蘭達入口。"],
    },
  },
};
