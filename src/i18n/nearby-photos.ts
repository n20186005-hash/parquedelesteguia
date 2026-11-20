import type { nearbyTopics } from "./nearby";

type Place = (typeof nearbyTopics)[number];
type NearbyPhoto = { src: string; width: number; height: number; source: string; alt: readonly [string, string, string] };

export const nearbyPhotos: Partial<Record<Place, NearbyPhoto>> = {
  "aviario": {
    "src": "/nearby/aviario-detail.jpg",
    "width": 1100,
    "height": 825,
    "source": "https://commons.wikimedia.org/wiki/File:Tucan._Aviario_del_Parque_del_este%2C_Caracas_-_panoramio.jpg",
    "alt": [
      "Tucán fotografiado en el aviario",
      "Toucan photographed at the aviary",
      "鳥舍內拍攝的巨嘴鳥"
    ]
  },
  "biblioteca-los-palos-grandes": {
    "src": "/nearby/biblioteca-los-palos-grandes-detail.jpg",
    "width": 1100,
    "height": 825,
    "source": "https://commons.wikimedia.org/wiki/File:Plaza_de_los_Palos_Grandes%2C_Altamira..jpg",
    "alt": [
      "Espacio público frente a la biblioteca",
      "Public square by the library",
      "圖書館旁的公共廣場"
    ]
  },
  "centro-san-ignacio": {
    "src": "/nearby/centro-san-ignacio-detail.jpg",
    "width": 1100,
    "height": 690,
    "source": "https://commons.wikimedia.org/wiki/File:Csi11.jpg",
    "alt": [
      "Vista elevada del conjunto",
      "Aerial view of the complex",
      "聖伊格納西奧中心俯視圖"
    ]
  },
  "concha-acustica": {
    "src": "/nearby/concha-acustica-detail.jpg",
    "width": 1100,
    "height": 649,
    "source": "https://commons.wikimedia.org/wiki/File:Concha_ac%C3%BAstica_Parque_del_Este.png",
    "alt": [
      "Escenario de la concha y zona de espectadores",
      "Band shell and spectators’ area",
      "露天音樂台與觀眾區"
    ]
  },
  "fuente-las-cortinas": {
    "src": "/nearby/fuente-las-cortinas-detail.jpg",
    "width": 1100,
    "height": 647,
    "source": "https://commons.wikimedia.org/wiki/File:Fuente_Las_Cortinas_%28Parque_del_Este%29_Caracas_Venezuela_1.jpg",
    "alt": [
      "Cortinas de agua vistas desde la caminería",
      "Water curtains viewed from the walkway",
      "從步道看水幕噴泉"
    ]
  },
  "jardin-botanico-ucv": {
    "src": "/nearby/jardin-botanico-ucv-detail.jpg",
    "width": 557,
    "height": 731,
    "source": "https://commons.wikimedia.org/wiki/File:3.Laguna_Venezuela%2C_Jard%C3%ADn_Botanico_de_la_UCV_y_parque_Central_en_Caracas%2C_Venezuela.jpg",
    "alt": [
      "Laguna Venezuela con Parque Central al fondo",
      "Laguna Venezuela with Parque Central in the distance",
      "委內瑞拉湖與遠處的中央公園建築群"
    ]
  },
  "jardin-xerofitico": {
    "src": "/nearby/jardin-xerofitico-detail.jpg",
    "width": 1100,
    "height": 825,
    "source": "https://commons.wikimedia.org/wiki/File:Jard%C3%ADn_xerof%C3%ADtico._Parque_General%C3%ADsimo_Francisco_De_Miranda_%28Parque_del_Este%29.jpg",
    "alt": [
      "Camino entre las plantas xerófitas",
      "Path among the dry-climate plants",
      "旱生植物之間的步道"
    ]
  },
  "la-estancia": {
    "src": "/nearby/la-estancia-detail.jpg",
    "width": 1100,
    "height": 825,
    "source": "https://commons.wikimedia.org/wiki/File:Centro_de_Arte_La_Estancia.jpg",
    "alt": [
      "Jardines y edificios bajos de La Estancia",
      "Gardens and low buildings at La Estancia",
      "拉埃斯坦西亞的花園與低矮館舍"
    ]
  },
  "lago-9-leander": {
    "src": "/nearby/lago-9-leander-detail.jpg",
    "width": 586,
    "height": 446,
    "source": "https://commons.wikimedia.org/wiki/File:Leander_-_Parque_del_Este.jpg",
    "alt": [
      "Vistas de la réplica del Leander y su entorno",
      "Views of the Leander replica and its surroundings",
      "利安德號復刻船與周圍景觀"
    ]
  },
  "museo-bellas-artes": {
    "src": "/nearby/museo-bellas-artes-detail.jpg",
    "width": 640,
    "height": 480,
    "source": "https://commons.wikimedia.org/wiki/File:MBA_2014.jpg",
    "alt": [
      "Pórtico del Museo de Bellas Artes",
      "Portico of the Museum of Fine Arts",
      "美術博物館門廊"
    ]
  },
  "museo-del-transporte": {
    "src": "/nearby/museo-del-transporte-detail.jpg",
    "width": 800,
    "height": 600,
    "source": "https://commons.wikimedia.org/wiki/File:Museo_del_Transporte_de_Caracas_010.jpg",
    "alt": [
      "Locomotora bajo la cubierta de exposición",
      "Locomotive under an exhibition canopy",
      "展棚下的蒸汽機車"
    ]
  },
  "parque-aruflo": {
    "src": "/nearby/parque-aruflo-detail.jpg",
    "width": 1100,
    "height": 733,
    "source": "https://www.chacao.gob.ve/cyc---ambiente/897/alcalde-gustavo-duque-entrega-a-los-vecinos-el-parque-aruflo-totalmente-recuperado",
    "alt": [
      "Caminerías y área verde del Parque Aruflo",
      "Paths and green space at Parque Aruflo",
      "阿魯弗洛公園的步道與綠地"
    ]
  },
  "parque-cristal": {
    "src": "/nearby/parque-cristal-detail.jpg",
    "width": 637,
    "height": 850,
    "source": "https://commons.wikimedia.org/wiki/File:Edificio_Parque_Cristal.JPG",
    "alt": [
      "Vista del vacío central del edificio",
      "Parque Cristal’s central opening",
      "水晶公園大樓的中央開口"
    ]
  },
  "parque-simon-bolivar": {
    "src": "/nearby/parque-simon-bolivar-detail.jpg",
    "width": 1100,
    "height": 618,
    "source": "https://commons.wikimedia.org/wiki/File:Parque_Simon_Bolivar_Caracas_Venezuela_1.png",
    "alt": [
      "Sendero y paisaje abierto de La Carlota",
      "Path and open landscape at La Carlota",
      "拉卡洛塔公園的步道與開闊景觀"
    ]
  },
  "planetario-humboldt": {
    "src": "/nearby/planetario-humboldt-detail.jpg",
    "width": 1100,
    "height": 814,
    "source": "https://commons.wikimedia.org/wiki/File:Planetario_Exterior.jpg",
    "alt": [
      "Exterior del Planetario Humboldt desde el parque",
      "Humboldt Planetarium exterior from the park",
      "從園內步道看洪堡天文館外觀"
    ]
  },
  "plaza-el-indio": {
    "src": "/nearby/plaza-el-indio-detail.jpg",
    "width": 1100,
    "height": 825,
    "source": "https://commons.wikimedia.org/wiki/File:Busto_del_Indio_Chacao.JPG",
    "alt": [
      "Busto indígena en el casco de Chacao",
      "Indigenous bust in Chacao’s old center",
      "查考老城的原住民半身像"
    ]
  },
  "plaza-francia": {
    "src": "/nearby/plaza-francia-detail.jpg",
    "width": 616,
    "height": 850,
    "source": "https://commons.wikimedia.org/wiki/File:Obelisco-Plaza-Francia-Altamira.JPG",
    "alt": [
      "Obelisco de la plaza Francia",
      "Plaza Francia’s obelisk",
      "法國廣場方尖碑"
    ]
  },
  "plaza-venezuela": {
    "src": "/nearby/plaza-venezuela-detail.jpg",
    "width": 1100,
    "height": 825,
    "source": "https://commons.wikimedia.org/wiki/File:Plaza_Venezuela%2C_Caracas._Venezuela.jpg",
    "alt": [
      "Fuente y edificios del entorno de Plaza Venezuela",
      "Plaza Venezuela fountain and surrounding buildings",
      "委內瑞拉廣場的噴泉與周圍建築"
    ]
  },
  "sabas-nieves": {
    "src": "/nearby/sabas-nieves-detail.jpg",
    "width": 604,
    "height": 453,
    "source": "https://commons.wikimedia.org/wiki/File:Vista_desde_sabas_nieves.jpg",
    "alt": [
      "Vista de Caracas desde Sabas Nieves",
      "View of Caracas from Sabas Nieves",
      "從薩瓦斯涅韋斯俯瞰卡拉卡斯"
    ]
  }
};
