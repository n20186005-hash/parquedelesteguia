export type Locale = "zh" | "en" | "es";

export const translations = {
  zh: {
    nav: {
      about: "关于",
      visiting: "游览信息",
      transportation: "交通方式",
      history: "历史与生态",
      location: "位置",
      tips: "贴士",
      reviews: "评价",
      faq: "常见问题",
    },
    hero: {
      tagline: "加拉加斯的绿色心脏",
      title: "东区公园",
      subtitle: "Parque Generalísimo Francisco de Miranda",
      cta: "探索城市绿洲",
    },
    rating: {
      label: "游客评分",
      reviews: "条评价",
      source: "Google 评论",
    },
    about: {
      title: "关于东区公园",
      p1: "东区公园（Parque del Este / Parque Generalísimo Francisco de Miranda）位于委内瑞拉首都加拉加斯东部，是这座城市最重要的城市公园之一。公园占地面积广阔，坐落在美丽的山脉和山谷之间，为市民和游客提供了一个远离城市喧嚣的绿色休闲空间。",
      p2: "公园以委内瑞拉独立英雄弗朗西斯科·德·米兰达（Francisco de Miranda）将军的名字命名。这里拥有丰富的植被、步道、儿童游乐区、运动场地和安静的休息区域，是当地居民日常休闲、运动和家庭聚会的热门场所。公园内还设有博物馆和文化设施，是了解委内瑞拉历史文化的绝佳地点。",
      highlights: {
        title: "公园亮点",
        items: [
          "广阔的城市绿地与植被",
          "儿童游乐区与运动场地",
          "历史文化博物馆",
          "步行道与休闲区",
          "免费对外开放",
        ],
      },
      management: {
        title: "公园管理",
        content: "东区公园由米兰达州政府和相关市政部门共同管理。作为重要的城市公共空间，公园免费对公众开放。管理部门负责公园的日常维护、安全巡逻和设施改善。",
      },
    },
    visiting: {
      title: "游览信息",
      hours: {
        title: "开放时间",
        content: "周四至周六 7:00 - 16:00\n周一至周三 7:00 - 13:00\n周日 关闭",
        note: "建议上午前往，气候较为凉爽",
      },
      price: {
        title: "门票",
        content: "免费",
        note: "公园对公众免费开放",
      },
      duration: {
        title: "建议游览时长",
        content: "2 - 4 小时",
        note: "含散步、参观博物馆与休闲",
      },
      bring: {
        title: "建议携带",
        items: ["防晒霜与遮阳帽", "舒适的步行鞋", "饮用水", "防蚊液（植被区域）", "相机或手机（拍照留念）", "轻便零食"],
      },
    },
    transportation: {
      title: "交通指南",
      fromAirport: {
        title: "从机场出发",
        content: "从西蒙·玻利瓦尔国际机场（CCS）到加拉加斯市区约需45分钟至1小时车程。可乘坐出租车或机场班车前往。东区公园位于加拉加斯东部，交通便利。",
      },
      selfDrive: {
        title: "自驾前往",
        content: "公园位于弗朗西斯科·德·米兰达大道（Avenida Francisco de Miranda）沿线，交通便利。建议使用导航应用前往，周边有停车区域。",
      },
      publicTransport: {
        title: "公共交通",
        content: "加拉加斯的地铁系统和公交网络可以到达公园附近。建议查询最新的公共交通路线，或使用出租车/网约车服务前往。",
      },
      otherWays: {
        title: "步行与骑行",
        content: "公园周边是加拉加斯的繁华区域，从附近的酒店或商业区步行即可到达。公园内也有适合散步的步道。",
      },
    },
    history: {
      title: "历史与生态环境",
      p1: "东区公园以弗朗西斯科·德·米兰达（1750-1816）命名，他是委内瑞拉和拉丁美洲独立运动的重要先驱人物。米兰达将军被誉为'先驱者'（El Precursor），他的理想和政策为西蒙·玻利瓦尔后来的独立战争奠定了基础。",
      p2: "公园内设有以米兰达为主题的博物馆和文化设施，展示他的生平和委内瑞拉独立历史。公园的生态环境也值得关注，这里种植了多种本地和外来植物，为城市提供了重要的绿色空间，有助于改善空气质量和城市热岛效应。",
      p3: "作为一个城市公园，东区公园在加拉加斯的城市生活中扮演着重要角色。它不仅是休闲场所，也是社区活动、文化表演和公共集会的空间。",
    },
    location: {
      title: "位置与交通",
      address: "F5V6+76M, Avenida Francisco de Miranda, Caracas 1071, Miranda, 委内瑞拉",
      mapHint: "点击地图在 Google Maps 中打开",
      openMaps: "在 Google Maps 中查看",
    },
    contact: {
      title: "联系方式",
      phone: "+58 212-2732867",
      phoneNote: "建议提前致电确认开放情况",
    },
    tips: {
      title: "实用信息与安全贴士",
      items: [
        "☀️ 加拉加斯位于高原，阳光强烈，务必做好防晒措施。",
        "💧 建议携带充足的饮用水，尤其是在步行或运动时。",
        "👨‍👩‍👧‍👦 公园是家庭出游的热门场所，周末可能较为拥挤，建议平日前往。",
        "📱 手机信号在公园内一般良好，但建议提前下载离线地图。",
        "🚗 周边停车可能有限，建议选择公共交通或网约车前往。",
        "🏛️ 如计划参观博物馆，请提前查询开放时间和门票信息。",
      ],
    },
    gallery: {
      title: "精彩照片",
      viewMore: "在 Google Maps 查看更多相片",
    },
    reviews: {
      title: "游客评价",
      subtitle: "来自 Google Maps 的真实评价",
      loadMore: "查看更多评价",
      viewMore: "在 Google Maps 查看更多评价",
    },
    faq: {
      title: "常见问题",
      subtitle: "关于东区公园的一切疑问",
      items: [
        {
          question: "东区公园的开放时间是什么？",
          answer: "公园的开放时间如下：\n\n周四至周六：上午7:00至下午4:00\n周一至周三：上午7:00至下午1:00\n周日：关闭\n\n请注意，开放时间可能会因节假日或特殊活动而有所调整，建议提前确认。"
        },
        {
          question: "公园是否免费开放？",
          answer: "是的，东区公园对公众免费开放。这是一个重要的城市公共空间，旨在为市民和游客提供免费的休闲和文化体验。"
        },
        {
          question: "公园内有哪些设施？",
          answer: "公园内设有多种设施，包括：\n\n1. 步行道和慢跑路径\n2. 儿童游乐区\n3. 运动场地（篮球场、足球场等）\n4. 博物馆和文化设施\n5. 休息区和野餐区\n6. 公共厕所\n\n设施的具体开放情况可能会有所变化，建议现场确认。"
        },
        {
          question: "如何前往东区公园？",
          answer: "东区公园位于加拉加斯东部，地址为 Avenida Francisco de Miranda。可以通过以下方式前往：\n\n1. 自驾：使用导航应用，周边有停车区域\n2. 公共交通：加拉加斯地铁和公交系统\n3. 出租车/网约车：最为便捷的方式\n\n建议使用 Google Maps 导航至精确位置。"
        },
        {
          question: "公园内是否有餐饮服务？",
          answer: "公园内可能有小贩或简易餐饮设施，但为了更好的体验，建议自带饮用水和零食。公园周边也有餐厅和咖啡馆。"
        },
        {
          question: "适合儿童游玩吗？",
          answer: "是的，东区公园非常适合家庭出游。公园内设有儿童游乐区，孩子们可以在安全的环境中玩耍。不过，家长仍需全程看管儿童，并注意防晒和补水。"
        },
      ],
    },
    footer: {
      text: "© 2026 东区公园旅行指南 ·保留所有权利。",
      made: "本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。为探索者而制",
      linksTitle: "相关链接",
      links: [
        { name: "委内瑞拉国家公园管理局", url: "https://www.inparques.gob.ve/" },
        { name: "委内瑞拉生态社会主义部", url: "https://www.minec.gob.ve/" },
        { name: "委内瑞拉人民政权旅游部", url: "http://www.mintur.gob.ve/" },
        { name: "世界保护区数据库", url: "https://www.protectedplanet.net/" },
        { name: "委内瑞拉非盈利生态保护NGO", url: "https://www.provita.org.ve/" },
        { name: "米兰达州政府", url: "http://www.miranda.gob.ve/" },
      ],
    },
  },
  en: {
    nav: {
      about: "About",
      visiting: "Visit",
      transportation: "Getting There",
      history: "History & Ecology",
      location: "Location",
      tips: "Tips",
      reviews: "Reviews",
      faq: "FAQ",
    },
    hero: {
      tagline: "The Green Heart of Caracas",
      title: "East Park",
      subtitle: "Parque Generalísimo Francisco de Miranda",
      cta: "Explore the Urban Oasis",
    },
    rating: {
      label: "Visitor Rating",
      reviews: "reviews",
      source: "Google Reviews",
    },
    about: {
      title: "About East Park",
      p1: "East Park (Parque del Este / Parque Generalísimo Francisco de Miranda) is located in the eastern part of Caracas, the capital of Venezuela. It is one of the city's most important urban parks, covering a vast area nestled between beautiful mountains and valleys, providing citizens and visitors with a green leisure space away from the city's hustle and bustle.",
      p2: "The park is named after General Francisco de Miranda, a Venezuelan independence hero. It features rich vegetation, walking trails, children's play areas, sports facilities, and quiet resting zones, making it a popular destination for local residents' daily recreation, sports, and family gatherings. The park also houses museums and cultural facilities, making it an excellent place to learn about Venezuelan history and culture.",
      highlights: {
        title: "Highlights",
        items: [
          "Vast urban green space with rich vegetation",
          "Children's play areas and sports facilities",
          "History and culture museums",
          "Walking trails and leisure zones",
          "Free admission for the public",
        ],
      },
      management: {
        title: "Park Management",
        content: "East Park is jointly managed by the Miranda State Government and relevant municipal departments. As an important urban public space, the park is free and open to the public. The management is responsible for daily maintenance, security patrols, and facility improvements."
      },
    },
    visiting: {
      title: "Visitor Information",
      hours: {
        title: "Opening Hours",
        content: "Thu-Sat 7:00 - 16:00\nMon-Wed 7:00 - 13:00\nSunday: Closed",
        note: "Morning visits recommended when it's cooler",
      },
      price: {
        title: "Admission",
        content: "Free",
        note: "The park is free and open to the public",
      },
      duration: {
        title: "Suggested Duration",
        content: "2 - 4 Hours",
        note: "Including walking, museum visit & leisure",
      },
      bring: {
        title: "What to Bring",
        items: ["Sunscreen & sun hat", "Comfortable walking shoes", "Drinking water", "Insect repellent (for vegetated areas)", "Camera or smartphone", "Light snacks"],
      },
    },
    transportation: {
      title: "Transportation Guide",
      fromAirport: {
        title: "From the Airport",
        content: "From Simón Bolívar International Airport (CCS), it takes about 45 minutes to 1 hour to reach downtown Caracas. You can take a taxi or airport shuttle. East Park is located in eastern Caracas with convenient transportation access.",
      },
      selfDrive: {
        title: "Self-Drive",
        content: "The park is located along Avenida Francisco de Miranda, with convenient transportation access. It is recommended to use navigation apps to get there. There are parking areas nearby.",
      },
      publicTransport: {
        title: "Public Transportation",
        content: "Caracas's metro system and bus network can get you near the park. It is recommended to check the latest public transportation routes or use taxi/rideshare services to get there.",
      },
      otherWays: {
        title: "Walking & Cycling",
        content: "The area around the park is a bustling district of Caracas. You can walk to the park from nearby hotels or commercial areas. The park also has walking trails suitable for strolling.",
      },
    },
    history: {
      title: "History & Ecological Environment",
      p1: "East Park is named after Francisco de Miranda (1750-1816), an important precursor to Venezuela's and Latin America's independence movements. General Miranda is known as 'El Precursor' (The Precursor), and his ideals and policies laid the foundation for Simón Bolívar's later independence wars.",
      p2: "The park houses museums and cultural facilities themed around Miranda, showcasing his life and Venezuelan independence history. The park's ecological environment is also noteworthy, with various native and exotic plants providing important green space for the city, helping to improve air quality and mitigate the urban heat island effect.",
      p3: "As an urban park, East Park plays an important role in Caracas's urban life. It is not only a leisure venue but also a space for community activities, cultural performances, and public gatherings.",
    },
    location: {
      title: "Location & Directions",
      address: "F5V6+76M, Avenida Francisco de Miranda, Caracas 1071, Miranda, Venezuela",
      mapHint: "Click map to open in Google Maps",
      openMaps: "Open in Google Maps",
    },
    contact: {
      title: "Contact",
      phone: "+58 212-2732867",
      phoneNote: "Call ahead to confirm opening status",
    },
    tips: {
      title: "Practical Info & Safety Tips",
      items: [
        "☀️ Caracas is located on a plateau with intense sunlight — make sure to use sun protection.",
        "💧 Bring plenty of drinking water, especially when walking or exercising.",
        "👨‍👩‍👧‍👦 The park is popular for family outings; it may be crowded on weekends. Weekdays are recommended.",
        "📱 Mobile signal is generally good in the park, but downloading offline maps in advance is recommended.",
        "🚗 Parking nearby may be limited; consider using public transportation or rideshare services.",
        "🏛️ If planning to visit the museum, please check opening hours and ticket information in advance.",
      ],
    },
    gallery: {
      title: "Photo Gallery",
      viewMore: "View More Photos on Google Maps",
    },
    reviews: {
      title: "Visitor Reviews",
      subtitle: "Real reviews from Google Maps",
      loadMore: "Load more reviews",
      viewMore: "View More Reviews on Google Maps",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about East Park",
      items: [
        {
          question: "What are the opening hours of East Park?",
          answer: "The park's opening hours are as follows:\n\nThursday to Saturday: 7:00 AM to 4:00 PM\nMonday to Wednesday: 7:00 AM to 1:00 PM\nSunday: Closed\n\nPlease note that opening hours may be adjusted due to holidays or special events. It is recommended to confirm in advance."
        },
        {
          question: "Is the park free to visit?",
          answer: "Yes, East Park is free and open to the public. It is an important urban public space designed to provide free recreational and cultural experiences for citizens and visitors."
        },
        {
          question: "What facilities are available in the park?",
          answer: "The park has various facilities, including:\n\n1. Walking trails and jogging paths\n2. Children's play areas\n3. Sports facilities (basketball courts, soccer fields, etc.)\n4. Museums and cultural facilities\n5. Rest and picnic areas\n6. Public restrooms\n\nThe specific opening status of facilities may vary; on-site confirmation is recommended."
        },
        {
          question: "How do I get to East Park?",
          answer: "East Park is located in eastern Caracas at Avenida Francisco de Miranda. You can get there by:\n\n1. Self-drive: Use navigation apps; there are parking areas nearby\n2. Public transportation: Caracas metro and bus system\n3. Taxi/rideshare: The most convenient way\n\nIt is recommended to use Google Maps for precise navigation."
        },
        {
          question: "Is there food service in the park?",
          answer: "There may be vendors or simple food facilities in the park, but for a better experience, it is recommended to bring your own drinking water and snacks. There are also restaurants and cafes around the park."
        },
        {
          question: "Is it suitable for children?",
          answer: "Yes, East Park is very suitable for family outings. The park has children's play areas where kids can play in a safe environment. However, parents should still supervise children at all times and pay attention to sun protection and hydration."
        },
      ],
    },
    footer: {
      text: "© 2026 East Park Travel Guide · All rights reserved.",
      made: "This website is an independent third-party travel information project. We have no affiliation with local government or other official institutions. Made for explorers",
      linksTitle: "Related Links",
      links: [
        { name: "Inparques (Venezuela National Parks Institute)", url: "https://www.inparques.gob.ve/" },
        { name: "Ministry of Ecosocialism (Venezuela)", url: "https://www.minec.gob.ve/" },
        { name: "Ministry of Tourism (Venezuela)", url: "http://www.mintur.gob.ve/" },
        { name: "World Database on Protected Areas", url: "https://www.protectedplanet.net/" },
        { name: "Provita (Venezuelan Conservation NGO)", url: "https://www.provita.org.ve/" },
        { name: "Miranda State Government", url: "http://www.miranda.gob.ve/" },
      ],
    },
  },
  es: {
    nav: {
      about: "Acerca de",
      visiting: "Visitar",
      transportation: "Cómo Llegar",
      history: "Historia y Ecología",
      location: "Ubicación",
      tips: "Consejos",
      reviews: "Reseñas",
      faq: "Preguntas Frecuentes",
    },
    hero: {
      tagline: "El Corazón Verde de Caracas",
      title: "Parque del Este",
      subtitle: "Parque Generalísimo Francisco de Miranda",
      cta: "Explora el Oasis Urbano",
    },
    rating: {
      label: "Calificación",
      reviews: "reseñas",
      source: "Google Reviews",
    },
    about: {
      title: "Acerca del Parque del Este",
      p1: "El Parque del Este (Parque Generalísimo Francisco de Miranda) está ubicado en la parte oriental de Caracas, la capital de Venezuela. Es uno de los parques urbanos más importantes de la ciudad, cubriendo una vasta área situada entre hermosas montañas y valles, proporcionando a los ciudadanos y visitantes un espacio verde de recreación alejado del bullicio de la ciudad.",
      p2: "El parque recibe su nombre del General Francisco de Miranda, héroe de la independencia venezolana. Cuenta con rica vegetación, senderos peatonales, áreas de juego para niños, instalaciones deportivas y zonas de descanso tranquila, lo que lo convierte en un destino popular para el recreo diario, deportes y reuniones familiares de los residentes locales. El parque también alberga museos y instalaciones culturales, siendo un excelente lugar para conocer la historia y cultura venezolana.",
      highlights: {
        title: "Aspectos Destacados",
        items: [
          "Vasto espacio verde urbano con rica vegetación",
          "Áreas de juego para niños e instalaciones deportivas",
          "Museos e instalaciones culturales",
          "Senderos peatonales y zonas de recreo",
          "Entrada gratuita para el público",
        ],
      },
      management: {
        title: "Gestión del Parque",
        content: "El Parque del Este es gestionado conjuntamente por el Gobierno del Estado Miranda y los departamentos municipales relevantes. Como un importante espacio público urbano, el parque es gratuito y está abierto al público. La administración es responsable del mantenimiento diario, patrullas de seguridad y mejoras de instalaciones."
      },
    },
    visiting: {
      title: "Información para Visitas",
      hours: {
        title: "Horario",
        content: "Jue-Sáb 7:00 - 16:00\nLun-Mié 7:00 - 13:00\nDomingo: Cerrado",
        note: "Se recomiendan las visitas por la mañana cuando hace más fresco",
      },
      price: {
        title: "Entrada",
        content: "Gratuita",
        note: "El parque es gratuito y está abierto al público",
      },
      duration: {
        title: "Duración Sugerida",
        content: "2 - 4 Horas",
        note: "Incluyendo caminatas, visita al museo y recreo",
      },
      bring: {
        title: "Qué Llevar",
        items: ["Protector solar y sombrero", "Zapatos cómodos para caminar", "Agua potable", "Repelente de insectos (para áreas con vegetación)", "Cámara o teléfono inteligente", "Snacks ligeros"],
      },
    },
    transportation: {
      title: "Guía de Transporte",
      fromAirport: {
        title: "Desde el Aeropuerto",
        content: "Desde el Aeropuerto Internacional Simón Bolívar (CCS), se tarda aproximadamente 45 minutos a 1 hora para llegar al centro de Caracas. Puede tomar un taxi o un transporte del aeropuerto. El Parque del Este está ubicado en el este de Caracas con conveniente acceso de transporte.",
      },
      selfDrive: {
        title: "Conducción Propia",
        content: "El parque está ubicado a lo largo de la Avenida Francisco de Miranda, con conveniente acceso de transporte. Se recomienda usar aplicaciones de navegación para llegar. Hay áreas de estacionamiento cerca.",
      },
      publicTransport: {
        title: "Transporte Público",
        content: "El sistema de metro y la red de autobuses de Caracas pueden llevarlo cerca del parque. Se recomienda consultar las rutas de transporte público más recientes o usar servicios de taxi/transporte compartido para llegar.",
      },
      otherWays: {
        title: "Caminando y en Bicicleta",
        content: "El área alrededor del parque es un distrito bullicioso de Caracas. Puede caminar al parque desde hoteles o áreas comerciales cercanas. El parque también tiene senderos peatonales adecuados para caminar.",
      },
    },
    history: {
      title: "Historia y Ambiente Ecológico",
      p1: "El Parque del Este recibe su nombre de Francisco de Miranda (1750-1816), un importante precursor de los movimientos de independencia de Venezuela y Latinoamérica. El General Miranda es conocido como 'El Precursor', y sus ideales y políticas sentaron las bases para las posteriores guerras de independencia de Simón Bolívar.",
      p2: "El parque alberga museos e instalaciones culturales con temática de Miranda, mostrando su vida y la historia de la independencia venezolana. El ambiente ecológico del parque también es notable, con diversas plantas nativas y exóticas que proporcionan un importante espacio verde para la ciudad, ayudando a mejorar la calidad del aire y mitigar el efecto de isla de calor urbano.",
      p3: "Como parque urbano, el Parque del Este juega un papel importante en la vida urbana de Caracas. No es solo un lugar de recreo, sino también un espacio para actividades comunitarias, actuaciones culturales y reuniones públicas.",
    },
    location: {
      title: "Ubicación y Cómo Llegar",
      address: "F5V6+76M, Avenida Francisco de Miranda, Caracas 1071, Miranda, Venezuela",
      mapHint: "Haz clic en el mapa para abrir en Google Maps",
      openMaps: "Abrir en Google Maps",
    },
    contact: {
      title: "Contacto",
      phone: "+58 212-2732867",
      phoneNote: "Llame con anticipación para confirmar el estado de apertura",
    },
    tips: {
      title: "Información Práctica y Consejos de Seguridad",
      items: [
        "☀️ Caracas está ubicada en una meseta con luz solar intensa — asegúrese de usar protección solar.",
        "💧 Traiga suficiente agua potable, especialmente al caminar o hacer ejercicio.",
        "👨‍👩‍👧‍👦 El parque es popular para salidas familiares; puede estar concurrido los fines de semana. Se recomiendan los días de diario.",
        "📱 La señal de celular es generalmente buena en el parque, pero se recomienda descargar mapas sin conexión con anticipación.",
        "🚗 El estacionamiento cerca del parque puede ser limitado; considere usar transporte público o servicios de transporte compartido.",
        "🏛️ Si planea visitar el museo, verifique con anticipación el horario de apertura y la información de entradas.",
      ],
    },
    gallery: {
      title: "Galería de Fotos",
      viewMore: "Ver Más Fotos en Google Maps",
    },
    reviews: {
      title: "Reseñas de Visitantes",
      subtitle: "Reseñas reales de Google Maps",
      loadMore: "Ver más reseñas",
      viewMore: "Ver Más Reseñas en Google Maps",
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre el Parque del Este",
      items: [
        {
          question: "¿Cuál es el horario de apertura del Parque del Este?",
          answer: "El horario de apertura del parque es el siguiente:\n\nJueves a sábado: 7:00 AM a 4:00 PM\nLunes a miércoles: 7:00 AM a 1:00 PM\nDomingo: Cerrado\n\nTenga en cuenta que el horario de apertura puede ajustarse debido a festivos o eventos especiales. Se recomienda confirmar con anticipación."
        },
        {
          question: "¿Es gratuito visitar el parque?",
          answer: "Sí, el Parque del Este es gratuito y está abierto al público. Es un importante espacio público urbano diseñado para proporcionar experiencias recreativas y culturales gratuitas para los ciudadanos y visitantes."
        },
        {
          question: "¿Qué instalaciones están disponibles en el parque?",
          answer: "El parque cuenta con diversas instalaciones, incluyendo:\n\n1. Senderos peatonales y caminos para trotar\n2. Áreas de juego para niños\n3. Instalaciones deportivas (canchas de baloncesto, campos de fútbol, etc.)\n4. Museos e instalaciones culturales\n5. Áreas de descanso y picnic\n6. Baños públicos\n\nEl estado de apertura específico de las instalaciones puede variar; se recomienda la confirmación en el sitio."
        },
        {
          question: "¿Cómo llego al Parque del Este?",
          answer: "El Parque del Este está ubicado en el este de Caracas en la Avenida Francisco de Miranda. Puede llegar por:\n\n1. Conducción propia: Use aplicaciones de navegación; hay áreas de estacionamiento cerca\n2. Transporte público: Sistema de metro y autobuses de Caracas\n3. Taxi/transporte compartido: La forma más conveniente\n\nSe recomienda usar Google Maps para una navegación precisa."
        },
        {
          question: "¿Hay servicio de comida en el parque?",
          answer: "Puede haber vendedores o instalaciones de comida simples en el parque, pero para una mejor experiencia, se recomienda traer su propia agua potable y snacks. También hay restaurantes y cafeterías alrededor del parque."
        },
        {
          question: "¿Es adecuado para niños?",
          answer: "Sí, el Parque del Este es muy adecuado para salidas familiares. El parque tiene áreas de juego para niños donde los pequeños pueden jugar en un entorno seguro. Sin embargo, los padres deben supervisar a los niños en todo momento y prestar atención a la protección solar e hidratación."
        },
      ],
    },
    footer: {
      text: "© 2026 Guía de Viaje Parque del Este · Todos los derechos reservados.",
      made: "Este sitio web es un proyecto independiente de información turística de terceros. No tenemos afiliación con el gobierno local u otras instituciones oficiales. Hecho para exploradores",
      linksTitle: "Enlaces Relacionados",
      links: [
        { name: "Inparques (Instituto Nacional de Parques)", url: "https://www.inparques.gob.ve/" },
        { name: "Ministerio del Poder Popular para el Ecosocialismo", url: "https://www.minec.gob.ve/" },
        { name: "Ministerio del Poder Popular para el Turismo", url: "http://www.mintur.gob.ve/" },
        { name: "Base de Datos Mundial de Áreas Protegidas", url: "https://www.protectedplanet.net/" },
        { name: "Provita (ONG de Conservación Venezolana)", url: "https://www.provita.org.ve/" },
        { name: "Gobernación del Estado Miranda", url: "http://www.miranda.gob.ve/" },
      ],
    },
  },
};

export type LinkItem = { name: string; url: string };

export type FAQItem = { question: string; answer: string };

export type Translations = {
  nav: { about: string; visiting: string; transportation: string; history: string; location: string; tips: string; reviews: string; faq: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { label: string; reviews: string; source: string };
  about: {
    title: string;
    p1: string;
    p2: string;
    highlights: { title: string; items: string[] };
    management: { title: string; content: string };
  };
  visiting: {
    title: string;
    hours: { title: string; content: string; note: string };
    price: { title: string; content: string; note: string };
    duration: { title: string; content: string; note: string };
    bring: { title: string; items: string[] };
  };
  transportation: {
    title: string;
    fromAirport: { title: string; content: string };
    selfDrive: { title: string; content: string };
    publicTransport: { title: string; content: string };
    otherWays: { title: string; content: string };
  };
  history: { title: string; p1: string; p2: string; p3: string };
  location: { title: string; address: string; mapHint: string; openMaps: string };
  contact: { title: string; phone: string; phoneNote: string };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; loadMore: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  footer: { text: string; made: string; linksTitle: string; links: LinkItem[] };
};
