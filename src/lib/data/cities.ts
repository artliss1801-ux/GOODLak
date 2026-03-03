// База городов и расстояний между ними (км)
// Расстояния указаны приблизительно по автомобильным дорогам

export interface City {
  id: string;
  name: string;
  region: string;
  country: 'RU' | 'BY';
  regionalCoefficient: string;
}

// Список городов
export const CITIES: City[] = [
  // Центральная Россия
  { id: 'moscow', name: 'Москва', region: 'Центральная Россия', country: 'RU', regionalCoefficient: 'moscow' },
  { id: 'spb', name: 'Санкт-Петербург', region: 'Северо-Запад', country: 'RU', regionalCoefficient: 'spb' },
  { id: 'nnovgorod', name: 'Нижний Новгород', region: 'Поволжье', country: 'RU', regionalCoefficient: 'central' },
  { id: 'tver', name: 'Тверь', region: 'Центральная Россия', country: 'RU', regionalCoefficient: 'central' },
  { id: 'yaroslavl', name: 'Ярославль', region: 'Центральная Россия', country: 'RU', regionalCoefficient: 'central' },
  { id: 'smolensk', name: 'Смоленск', region: 'Центральная Россия', country: 'RU', regionalCoefficient: 'central' },
  { id: 'tula', name: 'Тула', region: 'Центральная Россия', country: 'RU', regionalCoefficient: 'central' },
  { id: 'kaluga', name: 'Калуга', region: 'Центральная Россия', country: 'RU', regionalCoefficient: 'central' },
  { id: 'ryazan', name: 'Рязань', region: 'Центральная Россия', country: 'RU', regionalCoefficient: 'central' },
  { id: 'bryansk', name: 'Брянск', region: 'Центральная Россия', country: 'RU', regionalCoefficient: 'central' },
  { id: 'vladimir', name: 'Владимир', region: 'Центральная Россия', country: 'RU', regionalCoefficient: 'central' },

  // Юг России
  { id: 'voronezh', name: 'Воронеж', region: 'Центральное Черноземье', country: 'RU', regionalCoefficient: 'central' },
  { id: 'rostov', name: 'Ростов-на-Дону', region: 'Юг России', country: 'RU', regionalCoefficient: 'south' },
  { id: 'krasnodar', name: 'Краснодар', region: 'Юг России', country: 'RU', regionalCoefficient: 'south' },
  { id: 'novorossiysk', name: 'Новороссийск', region: 'Юг России', country: 'RU', regionalCoefficient: 'south' },
  { id: 'sochi', name: 'Сочи', region: 'Юг России', country: 'RU', regionalCoefficient: 'south' },
  { id: 'volgograd', name: 'Волгоград', region: 'Юг России', country: 'RU', regionalCoefficient: 'south' },
  { id: 'astrakhan', name: 'Астрахань', region: 'Юг России', country: 'RU', regionalCoefficient: 'south' },
  { id: 'stavropol', name: 'Ставрополь', region: 'Юг России', country: 'RU', regionalCoefficient: 'south' },

  // Поволжье
  { id: 'kazan', name: 'Казань', region: 'Поволжье', country: 'RU', regionalCoefficient: 'central' },
  { id: 'samara', name: 'Самара', region: 'Поволжье', country: 'RU', regionalCoefficient: 'central' },
  { id: 'sarato', name: 'Саратов', region: 'Поволжье', country: 'RU', regionalCoefficient: 'central' },
  { id: 'ufa', name: 'Уфа', region: 'Урал', country: 'RU', regionalCoefficient: 'ural' },
  { id: 'perm', name: 'Пермь', region: 'Урал', country: 'RU', regionalCoefficient: 'ural' },
  { id: 'penza', name: 'Пенза', region: 'Поволжье', country: 'RU', regionalCoefficient: 'central' },

  // Урал
  { id: 'ekaterinburg', name: 'Екатеринбург', region: 'Урал', country: 'RU', regionalCoefficient: 'ural' },
  { id: 'chelyabinsk', name: 'Челябинск', region: 'Урал', country: 'RU', regionalCoefficient: 'ural' },
  { id: 'tyumen', name: 'Тюмень', region: 'Урал', country: 'RU', regionalCoefficient: 'ural' },
  { id: 'omsk', name: 'Омск', region: 'Сибирь', country: 'RU', regionalCoefficient: 'siberia' },

  // Сибирь
  { id: 'novosibirsk', name: 'Новосибирск', region: 'Сибирь', country: 'RU', regionalCoefficient: 'siberia' },
  { id: 'krasnoyarsk', name: 'Красноярск', region: 'Сибирь', country: 'RU', regionalCoefficient: 'siberia' },
  { id: 'irkutsk', name: 'Иркутск', region: 'Сибирь', country: 'RU', regionalCoefficient: 'siberia' },
  { id: 'kemerovo', name: 'Кемерово', region: 'Сибирь', country: 'RU', regionalCoefficient: 'siberia' },
  { id: 'tomsk', name: 'Томск', region: 'Сибирь', country: 'RU', regionalCoefficient: 'siberia' },
  { id: 'barnaul', name: 'Барнаул', region: 'Сибирь', country: 'RU', regionalCoefficient: 'siberia' },

  // Дальний Восток
  { id: 'vladivostok', name: 'Владивосток', region: 'Дальний Восток', country: 'RU', regionalCoefficient: 'fareast' },
  { id: 'khabarovsk', name: 'Хабаровск', region: 'Дальний Восток', country: 'RU', regionalCoefficient: 'fareast' },
  { id: 'yuzhno-sakhalinsk', name: 'Южно-Сахалинск', region: 'Дальний Восток', country: 'RU', regionalCoefficient: 'fareast' },

  // Беларусь
  { id: 'minsk', name: 'Минск', region: 'Беларусь', country: 'BY', regionalCoefficient: 'belarus' },
  { id: 'brest', name: 'Брест', region: 'Беларусь', country: 'BY', regionalCoefficient: 'belarus' },
  { id: 'gomel', name: 'Гомель', region: 'Беларусь', country: 'BY', regionalCoefficient: 'belarus' },
  { id: 'vitebsk', name: 'Витебск', region: 'Беларусь', country: 'BY', regionalCoefficient: 'belarus' },
  { id: 'mogilev', name: 'Могилёв', region: 'Беларусь', country: 'BY', regionalCoefficient: 'belarus' },
  { id: 'grodno', name: 'Гродно', region: 'Беларусь', country: 'BY', regionalCoefficient: 'belarus' },
];

// Матрица расстояний между городами (км)
// Указаны расстояния по автомобильным дорогам
export const DISTANCES: Record<string, Record<string, number>> = {
  // Москва
  moscow: {
    spb: 700, nnovgorod: 420, tver: 180, yaroslavl: 280, smolensk: 400,
    tula: 190, kaluga: 190, ryazan: 200, bryansk: 380, vladimir: 190,
    voronezh: 520, rostov: 1070, krasnodar: 1350, novorossiysk: 1500,
    sochi: 1600, volgograd: 960, astrakhan: 1400, stavropol: 1450,
    kazan: 820, samara: 1050, sarato: 860, ufa: 1350, perm: 1450,
    penza: 650, ekaterinburg: 1800, chelyabinsk: 1750, tyumen: 2100,
    omsk: 2700, novosibirsk: 3300, krasnoyarsk: 4100, irkutsk: 5200,
    kemerovo: 3600, tomsk: 3500, barnaul: 3500, vladivostok: 9100,
    khabarovsk: 8500, minsk: 700, brest: 1000, gomel: 550, vitebsk: 500,
    mogilev: 600, grodno: 900,
  },
  // Санкт-Петербург
  spb: {
    nnovgorod: 1050, tver: 530, yaroslavl: 820, smolensk: 780,
    tula: 880, kaluga: 870, ryazan: 900, bryansk: 900, vladimir: 900,
    voronezh: 1220, rostov: 1770, krasnodar: 2050, novorossiysk: 2200,
    volgograd: 1660, kazan: 1520, samara: 1750, ufa: 2050, perm: 2150,
    ekaterinburg: 2500, chelyabinsk: 2450, novosibirsk: 4000,
    minsk: 800, brest: 1050, vitebsk: 550, pogreb: 950,
  },
  // Новороссийск
  novorossiysk: {
    rostov: 430, krasnodar: 140, sochi: 300, stavropol: 400,
    volgograd: 850, astrakhan: 950, moscow: 1500, spb: 2200,
    voronezh: 980, samara: 1700, kazan: 1900, ekaterinburg: 2600,
  },
  // Ростов-на-Дону
  rostov: {
    krasnodar: 300, novorossiysk: 430, sochi: 550, stavropol: 350,
    volgograd: 500, astrakhan: 650, moscow: 1070, spb: 1770,
    voronezh: 560, samara: 1350, kazan: 1500, ekaterinburg: 2200,
  },
  // Краснодар
  krasnodar: {
    novorossiysk: 140, rostov: 300, sochi: 300, stavropol: 300,
    volgograd: 700, moscow: 1350, spb: 2050, voronezh: 820,
  },
  // Екатеринбург
  ekaterinburg: {
    chelyabinsk: 230, tyumen: 330, perm: 300, ufa: 450,
    kazan: 1000, samara: 1150, moscow: 1800, spb: 2500,
    novosibirsk: 1550, krasnoyarsk: 2350, omsk: 900,
    kemerovo: 1800, tomsk: 1700, barnaul: 1900,
  },
  // Челябинск
  chelyabinsk: {
    ekaterinburg: 230, tyumen: 400, ufa: 400, perm: 500,
    kazan: 950, samara: 1100, moscow: 1750, spb: 2450,
    novosibirsk: 1450, omsk: 800, krasnoyarsk: 2250,
  },
  // Новосибирск
  novosibirsk: {
    krasnoyarsk: 800, omsk: 650, kemerovo: 270, tomsk: 260,
    barnaul: 230, irkutsk: 1850, ekaterinburg: 1550, chelyabinsk: 1450,
    moscow: 3300, spb: 4000, vladivostok: 5800,
  },
  // Красноярск
  krasnoyarsk: {
    novosibirsk: 800, irkutsk: 1050, kemerovo: 550, tomsk: 600,
    ekaterinburg: 2350, moscow: 4100, vladivostok: 5000,
  },
  // Владивосток
  vladivostok: {
    khabarovsk: 760, novosibirsk: 5800, krasnoyarsk: 5000,
    irkutsk: 3900, moscow: 9100, spb: 9800,
  },
  // Казань
  kazan: {
    nnovgorod: 400, samara: 350, sarato: 500, ufa: 450, perm: 600,
    penza: 500, moscow: 820, spb: 1520, ekaterinburg: 1000,
    chelyabinsk: 950, novosibirsk: 2500,
  },
  // Самара
  samara: {
    kazan: 350, sarato: 400, ufa: 500, penza: 420, moscow: 1050,
    spb: 1750, ekaterinburg: 1150, chelyabinsk: 1100, novosibirsk: 2300,
  },
  // Уфа
  ufa: {
    kazan: 450, samara: 500, perm: 350, ekaterinburg: 450,
    chelyabinsk: 400, moscow: 1350, spb: 2050, novosibirsk: 1900,
  },
  // Пермь
  perm: {
    kazan: 600, ufa: 350, ekaterinburg: 300, chelyabinsk: 500,
    moscow: 1450, spb: 2150, novosibirsk: 1900,
  },
  // Воронеж
  voronezh: {
    moscow: 520, rostov: 560, krasnodar: 820, volgograd: 580,
    kazan: 900, samara: 850, spb: 1220,
  },
  // Волгоград
  volgograd: {
    rostov: 500, krasnodar: 700, novorossiysk: 850, astrakhan: 400,
    moscow: 960, spb: 1660, samara: 1000, sarato: 380,
  },
  // Минск
  minsk: {
    moscow: 700, spb: 800, brest: 350, gomel: 300, vitebsk: 280,
    mogilev: 200, grodno: 270, smolensk: 350, bryansk: 400,
  },
  // Брест
  brest: {
    minsk: 350, moscow: 1000, spb: 1050, grodno: 190, vitebsk: 550,
  },
  // Иркутск
  irkutsk: {
    krasnoyarsk: 1050, novosibirsk: 1850, vladivostok: 3900,
    khabarovsk: 3200, moscow: 5200,
  },
  // Хабаровск
  khabarovsk: {
    vladivostok: 760, irkutsk: 3200, novosibirsk: 5100, moscow: 8500,
  },
};

// Функция для получения расстояния между двумя городами
export function getDistance(cityFrom: string, cityTo: string): number {
  if (cityFrom === cityTo) return 0;

  // Проверяем прямое направление
  if (DISTANCES[cityFrom]?.[cityTo]) {
    return DISTANCES[cityFrom][cityTo];
  }

  // Проверяем обратное направление
  if (DISTANCES[cityTo]?.[cityFrom]) {
    return DISTANCES[cityTo][cityFrom];
  }

  // Если расстояние не найдено напрямую, ищем через промежуточные города
  // или используем примерный расчёт на основе региональных коэффициентов
  const fromCity = CITIES.find(c => c.id === cityFrom);
  const toCity = CITIES.find(c => c.id === cityTo);

  if (!fromCity || !toCity) {
    throw new Error(`Город не найден: ${cityFrom} или ${cityTo}`);
  }

  // Если оба города в одном регионе - примерное расстояние 300-500 км
  if (fromCity.region === toCity.region) {
    return 350;
  }

  // Пытаемся найти расстояние через Москву как хаб
  const distanceViaMoscow = (DISTANCES[cityFrom]?.moscow || 0) + (DISTANCES[cityTo]?.moscow || 0);
  if (distanceViaMoscow > 0) {
    // Возвращаем чуть меньшее расстояние (так как через Москку не всегда оптимально)
    return Math.round(distanceViaMoscow * 0.85);
  }

  // Если всё ещё не нашли, возвращаем примерное расстояние на основе региона
  const regionalDistances: Record<string, Record<string, number>> = {
    'Центральная Россия': { 'Юг России': 1000, 'Поволжье': 800, 'Урал': 1600, 'Сибирь': 3200, 'Дальний Восток': 8500, 'Беларусь': 700 },
    'Юг России': { 'Поволжье': 1000, 'Урал': 2000, 'Сибирь': 3500, 'Дальний Восток': 9000, 'Беларусь': 1500 },
    'Поволжье': { 'Урал': 800, 'Сибирь': 2500, 'Дальний Восток': 8000, 'Беларусь': 1200 },
    'Урал': { 'Сибирь': 1500, 'Дальний Восток': 7000, 'Беларусь': 1800 },
    'Сибирь': { 'Дальний Восток': 5000, 'Беларусь': 4000 },
    'Дальний Восток': { 'Беларусь': 9000 },
    'Беларусь': {},
  };

  const estimatedDistance = regionalDistances[fromCity.region]?.[toCity.region];
  if (estimatedDistance) {
    return estimatedDistance;
  }

  // Обратное направление в таблице
  const reverseEstimatedDistance = regionalDistances[toCity.region]?.[fromCity.region];
  if (reverseEstimatedDistance) {
    return reverseEstimatedDistance;
  }

  // Дефолтное значение
  return 1500;
}

// Получить информацию о городе
export function getCity(cityId: string): City | undefined {
  return CITIES.find(c => c.id === cityId);
}

// Получить города сгруппированные по регионам
export function getCitiesByRegion(): Record<string, City[]> {
  const result: Record<string, City[]> = {};

  CITIES.forEach(city => {
    if (!result[city.region]) {
      result[city.region] = [];
    }
    result[city.region].push(city);
  });

  // Сортируем регионы в логическом порядке
  const orderedRegions = [
    'Центральная Россия',
    'Северо-Запад',
    'Центральное Черноземье',
    'Юг России',
    'Поволжье',
    'Урал',
    'Сибирь',
    'Дальний Восток',
    'Беларусь',
  ];

  const ordered: Record<string, City[]> = {};
  orderedRegions.forEach(region => {
    if (result[region]) {
      ordered[region] = result[region].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    }
  });

  return ordered;
}
