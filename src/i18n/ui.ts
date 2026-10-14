import type { Category, Game, Lang } from '../data/games';

export const SITE_URL = 'https://devapplications.xyz';
export const EMAIL = 'devapplicationsgames@gmail.com';
export const PLAY_DEVELOPER_URL = 'https://play.google.com/store/apps/developer?id=DevApplications';
export const FOUNDED = 2014;

/** Routes: Spanish lives at the root, English under /en/. */
export const routes = {
  home: (lang: Lang) => (lang === 'es' ? '/' : '/en/'),
  game: (lang: Lang, g: Pick<Game, 'slug'>) =>
    lang === 'es' ? `/juegos/${g.slug}/` : `/en/games/${g.slug}/`,
};

export const locales: Record<Lang, { htmlLang: string; ogLocale: string }> = {
  es: { htmlLang: 'es', ogLocale: 'es_ES' },
  en: { htmlLang: 'en', ogLocale: 'en_US' },
};

export const categoryLabel: Record<Category, Record<Lang, string>> = {
  puzzle: { es: 'Puzles', en: 'Puzzles' },
  board: { es: 'Mesa', en: 'Board' },
  arcade: { es: 'Arcade', en: 'Arcade' },
  idle: { es: 'Idle', en: 'Idle' },
};

/** Schema.org genre per category, in English for search engines. */
export const categoryGenre: Record<Category, string[]> = {
  puzzle: ['Puzzle', 'Logic'],
  board: ['Board Game', 'Strategy'],
  arcade: ['Arcade', 'Action'],
  idle: ['Idle', 'Incremental'],
};

const es = {
  metaTitle: 'DevApplications · Puzles, juegos de mesa y arcade para Android',
  metaDescription:
    'Estudio indie de Barcelona con {count} juegos para Android: buscaminas, sudoku asesino, mancala, damas chinas, air hockey, Arkanoid y más. Gratis, sin muros de pago ni sistemas de energía.',
  nav: { home: 'Inicio', games: 'Juegos', studio: 'Estudio', contact: 'Contacto' },
  switchTo: 'English',
  themeToggle: 'Cambiar tema claro/oscuro',
  navLabel: 'Principal',
  langLabel: 'Idioma',
  hero: {
    eyebrow: 'Estudio indie · Barcelona · desde {year}',
    title: 'Juegos de siempre,',
    titleMark: 'sin trampas.',
    sub: 'Puzles, juegos de mesa y arcade para Android, hechos a mano en Barcelona. Se juegan gratis de principio a fin: sin muros de pago y sin energía que recargar.',
    ctaGames: 'Ver los {count} juegos',
    ctaStudio: 'Sobre el estudio',
    latestAlt: 'Captura de {title}',
  },
  proof: {
    games: 'juegos publicados',
    downloads: 'descargas de Arkanoid Clásico',
    rating: 'en Google Play (Arkanoid)',
    since: 'desde',
  },
  spotlight: {
    eyebrow: 'El primero, en {year}',
    title: '500K+ descargas · {rating}★',
  },
  principlesTitle: 'Cómo están hechos',
  catalog: {
    title: 'Los juegos',
    all: 'Todos',
    filterLabel: 'Filtrar por categoría',
    newBadge: 'Nuevo',
  },
  principles: [
    {
      title: 'Todo abierto desde el primer día',
      text: 'Sin monedas que ahorrar ni niveles que se desbloquean pagando. Lo difícil es difícil porque sí, no porque haya que pagar.',
    },
    {
      title: 'Rivales que juegan limpio',
      text: 'La IA no hace trampas: en los juegos de mesa cada nivel se mide contra la jugada óptima, y en el arcade nunca es más rápida que tú.',
    },
    {
      title: 'Lógica, no suerte',
      text: 'Tableros con una única solución y pistas que te explican el porqué en lugar de darte la respuesta.',
    },
    {
      title: 'Respetan tu tiempo',
      text: 'De una partida de dos minutos a un 15×15 para toda la tarde. Tú decides cuándo parar.',
    },
  ],
  studio: {
    title: 'Una persona, {count} juegos.',
    body: [
      'DevApplications soy yo, Antonio Ramos, desarrollador en Barcelona. Publiqué mi primer juego en 2014 —un Arkanoid que hoy pasa del medio millón de descargas— y desde entonces hago versiones para móvil de juegos que ya conoces: el buscaminas, el mancala, las damas chinas, el air hockey.',
      'Las cuido en lo que las versiones gratuitas suelen olvidar: que sean justas, que se entiendan en un minuto y que no te persigan con monedas.',
    ],
  },
  contact: {
    title: 'Hablemos de juegos.',
    text: '¿Una idea, un fallo o un juego que te gustaría ver? Escríbeme.',
  },
  footer: { made: 'Barcelona' },
  game: {
    breadcrumbGames: 'Juegos',
    download: 'Descargar en Google Play',
    downloads: 'descargas',
    ratings: 'valoraciones',
    released: 'Publicado',
    free: 'Gratis',
    freeNote: 'Gratis · sin muros de pago',
    shotsHint: 'Capturas de {title}, desplaza en horizontal',
    screenshots: 'Capturas',
    about: 'Sobre el juego',
    more: {
      puzzle: 'Más puzles',
      board: 'Más juegos de mesa',
      arcade: 'Más arcade',
      idle: 'Más juegos idle',
    } as Record<Category, string>,
    backToCatalog: 'Ver todos los juegos',
    metaTitle: '{title} para Android · DevApplications',
    screenshotAlt: 'Captura {n} de {title}',
  },
};

const en: typeof es = {
  metaTitle: 'DevApplications · Puzzles, board games and arcade for Android',
  metaDescription:
    'Indie studio from Barcelona with {count} Android games: minesweeper, killer sudoku, mancala, chinese checkers, air hockey, Arkanoid and more. Free, no paywalls, no energy systems.',
  nav: { home: 'Home', games: 'Games', studio: 'Studio', contact: 'Contact' },
  switchTo: 'Español',
  themeToggle: 'Toggle light/dark theme',
  navLabel: 'Main',
  langLabel: 'Language',
  hero: {
    eyebrow: 'Indie studio · Barcelona · since {year}',
    title: 'Classic games,',
    titleMark: 'no tricks.',
    sub: 'Puzzles, board games and arcade for Android, handmade in Barcelona. Free to play from start to finish: no paywalls, no energy to refill.',
    ctaGames: 'See all {count} games',
    ctaStudio: 'About the studio',
    latestAlt: '{title} screenshot',
  },
  proof: {
    games: 'published games',
    downloads: 'Arkanoid Classic downloads',
    rating: 'on Google Play (Arkanoid)',
    since: 'since',
  },
  spotlight: {
    eyebrow: 'The first one, in {year}',
    title: '500K+ downloads · {rating}★',
  },
  principlesTitle: "How they're made",
  catalog: {
    title: 'The games',
    all: 'All',
    filterLabel: 'Filter by category',
    newBadge: 'New',
  },
  principles: [
    {
      title: 'Everything open from day one',
      text: 'No coins to save up, no levels locked behind a payment. The hard boards are just hard.',
    },
    {
      title: 'Opponents that play fair',
      text: 'The AI doesn\'t cheat: in board games every level is measured against the optimal move, and in arcade it is never faster than you.',
    },
    {
      title: 'Logic, not luck',
      text: 'Boards with exactly one solution, and hints that explain the why instead of handing you the answer.',
    },
    {
      title: 'They respect your time',
      text: 'From a two-minute round to a 15×15 for a whole evening. You decide when to stop.',
    },
  ],
  studio: {
    title: 'One person, {count} games.',
    body: [
      'DevApplications is me, Antonio Ramos, a developer in Barcelona. I shipped my first game in 2014 — an Arkanoid that has now passed half a million downloads — and since then I\'ve been making mobile versions of games you already know: minesweeper, mancala, chinese checkers, air hockey.',
      'I take care of what free versions usually forget: that they\'re fair, that you get them in a minute, and that they don\'t chase you with coins.',
    ],
  },
  contact: {
    title: "Let's talk games.",
    text: "An idea, a bug, or a game you'd like to see? Write to me.",
  },
  footer: { made: 'Barcelona' },
  game: {
    breadcrumbGames: 'Games',
    download: 'Get it on Google Play',
    downloads: 'downloads',
    ratings: 'ratings',
    released: 'Released',
    free: 'Free',
    freeNote: 'Free · no paywalls',
    shotsHint: '{title} screenshots, scroll horizontally',
    screenshots: 'Screenshots',
    about: 'About the game',
    more: {
      puzzle: 'More puzzles',
      board: 'More board games',
      arcade: 'More arcade games',
      idle: 'More idle games',
    },
    backToCatalog: 'See all games',
    metaTitle: '{title} for Android · DevApplications',
    screenshotAlt: '{title} screenshot {n}',
  },
};

export const ui = { es, en };

export const t = (lang: Lang) => ui[lang];

/** Replaces {key} placeholders. */
export const fill = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
