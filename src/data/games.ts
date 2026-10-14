// Single source of truth for the catalog: the home page, the game pages,
// the JSON-LD and every counter are generated from this list.
// Newest first. Long store descriptions live in game-descriptions.json.

export type Lang = 'es' | 'en';
export type Category = 'puzzle' | 'board' | 'arcade' | 'idle';

export interface Screenshot {
  src: string;
  width: number;
  height: number;
}

export interface Game {
  slug: string;
  packageId: string;
  category: Category;
  /** First release on Google Play (YYYY-MM-DD). */
  released: string;
  /** Install bucket shown on Google Play. */
  downloads: string;
  /** Google Play rating snapshot, only where it is shown on the page. */
  rating?: { value: number; count: number };
  title: Record<Lang, string>;
  short: Record<Lang, string>;
  shots: Screenshot[];
}

export const games: Game[] = [
  {
    slug: 'tents-and-trees',
    packageId: 'com.devapplications.tentsandtrees',
    category: 'puzzle',
    released: '2026-10-06',
    downloads: '0+',
    title: { es: 'Tiendas y Árboles sin Monedas', en: 'Tents and Trees: No Coins' },
    short: {
      es: 'Una tienda junto a cada árbol: el clásico puzle de lógica, con todos los tableros gratis.',
      en: 'One tent next to each tree: the classic logic puzzle, with every board free.',
    },
    shots: [
      { src: '/images/games/tents-and-trees/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/tents-and-trees/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/tents-and-trees/shot-3.webp', width: 405, height: 720 },
      { src: '/images/games/tents-and-trees/shot-4.webp', width: 405, height: 720 },
    ],
  },
  {
    slug: 'killer-sudoku',
    packageId: 'com.devapplications.killersudoku',
    category: 'puzzle',
    released: '2026-10-06',
    downloads: '0+',
    title: { es: 'Sudoku Asesino sin Monedas', en: 'Killer Sudoku: No Coins' },
    short: {
      es: 'Sudoku con jaulas que suman. 12 tableros abiertos desde el primer día y sin monedas.',
      en: 'Sudoku with cages that add up. 12 boards open from day one, no coins.',
    },
    shots: [
      { src: '/images/games/killer-sudoku/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/killer-sudoku/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/killer-sudoku/shot-3.webp', width: 405, height: 720 },
      { src: '/images/games/killer-sudoku/shot-4.webp', width: 405, height: 720 },
    ],
  },
  {
    slug: 'hanoi-tower',
    packageId: 'com.devapplications.hanoi',
    category: 'puzzle',
    released: '2026-09-25',
    downloads: '5+',
    title: { es: 'Hanoi Torres Clásico Puzle', en: 'Hanoi Tower: Disc Puzzle' },
    short: {
      es: 'La Torre de Hanói de siempre y un cuarto poste que la convierte en un puzle de verdad.',
      en: 'The classic Tower of Hanoi, and a fourth peg that turns it into a real puzzle.',
    },
    shots: [
      { src: '/images/games/hanoi-tower/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/hanoi-tower/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/hanoi-tower/shot-3.webp', width: 405, height: 720 },
      { src: '/images/games/hanoi-tower/shot-4.webp', width: 405, height: 720 },
    ],
  },
  {
    slug: 'shut-the-box',
    packageId: 'com.devapplications.shutthebox',
    category: 'board',
    released: '2026-09-22',
    downloads: '1+',
    title: { es: 'Cierra la Caja Clásico', en: 'Shut the Box Classic' },
    short: {
      es: 'El juego de dados de taberna: tira, suma y cierra la caja. Partidas de dos minutos.',
      en: 'The old pub dice game: roll, add up and shut the box. Two-minute rounds.',
    },
    shots: [
      { src: '/images/games/shut-the-box/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/shut-the-box/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/shut-the-box/shot-3.webp', width: 405, height: 720 },
      { src: '/images/games/shut-the-box/shot-4.webp', width: 405, height: 720 },
    ],
  },
  {
    slug: 'bagh-chal',
    packageId: 'com.devapplications.baghchal',
    category: 'board',
    released: '2026-09-22',
    downloads: '5+',
    title: { es: 'Bagh Chal: Tigres y Cabras', en: 'Bagh Chal - Tigers & Goats' },
    short: {
      es: 'Cuatro tigres contra veinte cabras: el juego de mesa nacional de Nepal.',
      en: 'Four tigers against twenty goats: the national board game of Nepal.',
    },
    shots: [
      { src: '/images/games/bagh-chal/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/bagh-chal/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/bagh-chal/shot-3.webp', width: 405, height: 720 },
      { src: '/images/games/bagh-chal/shot-4.webp', width: 405, height: 720 },
    ],
  },
  {
    slug: 'vexillology',
    packageId: 'com.devapplications.vexilologia',
    category: 'puzzle',
    released: '2026-09-10',
    downloads: '10+',
    title: { es: 'Vexilología: Quiz de Banderas', en: 'Vexillology: Flag Color Quiz' },
    short: {
      es: 'Un quiz de banderas en el que nunca ves la bandera: solo sus colores, un recorte o una pista.',
      en: 'A flag quiz where you never see the flag: only its colours, a crop or a clue.',
    },
    shots: [
      { src: '/images/games/vexillology/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/vexillology/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/vexillology/shot-3.webp', width: 405, height: 720 },
      { src: '/images/games/vexillology/shot-4.webp', width: 405, height: 720 },
    ],
  },
  {
    slug: 'hitori',
    packageId: 'com.devapplications.hitori',
    category: 'puzzle',
    released: '2026-09-08',
    downloads: '5+',
    title: { es: 'Hitori - Puzzle de Lógica', en: 'Hitori - Logic Puzzle' },
    short: {
      es: 'Sombrea casillas hasta que ningún número se repita. Pura deducción, nunca adivinar.',
      en: 'Shade cells until no number repeats. Pure deduction, never guessing.',
    },
    shots: [
      { src: '/images/games/hitori/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/hitori/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/hitori/shot-3.webp', width: 405, height: 720 },
      { src: '/images/games/hitori/shot-4.webp', width: 405, height: 720 },
    ],
  },
  {
    slug: 'mancala',
    packageId: 'com.devapplications.mancala',
    category: 'board',
    released: '2026-09-06',
    downloads: '10+',
    title: { es: 'Mancala - Juego de Mesa', en: 'Mancala Kalah: Congklak' },
    short: {
      es: 'Kalah, Oware, Congklak y Sungka: cuatro reglamentos reales de mancala en un solo juego.',
      en: 'Kalah, Oware, Congklak and Sungka: four real mancala rule sets in one game.',
    },
    shots: [
      { src: '/images/games/mancala/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/mancala/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/mancala/shot-3.webp', width: 405, height: 720 },
      { src: '/images/games/mancala/shot-4.webp', width: 405, height: 720 },
    ],
  },
  {
    slug: 'chinese-checkers',
    packageId: 'com.devapplications.damaschinas',
    category: 'board',
    released: '2026-09-03',
    downloads: '50+',
    title: { es: 'Damas Chinas Clásico Offline', en: 'Chinese Checkers Classic Halma' },
    short: {
      es: 'El clásico de 1892, de 2 a 6 jugadores en un mismo móvil.',
      en: 'The 1892 classic, 2 to 6 players on one phone.',
    },
    shots: [
      { src: '/images/games/chinese-checkers/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/chinese-checkers/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/chinese-checkers/shot-3.webp', width: 405, height: 720 },
      { src: '/images/games/chinese-checkers/shot-4.webp', width: 405, height: 720 },
    ],
  },
  {
    slug: 'air-hockey',
    packageId: 'com.devapplications.airhockeyclassic',
    category: 'arcade',
    released: '2026-08-05',
    downloads: '100+',
    title: { es: 'Air Hockey Clásico y Arcade', en: 'Air Hockey Classic & Arcade' },
    short: {
      es: 'Air hockey con un rival que juega limpio, 23 niveles arcade y modo 2 jugadores.',
      en: 'Air hockey with a rival that plays fair, 23 arcade stages and 2-player mode.',
    },
    shots: [
      { src: '/images/games/air-hockey/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/air-hockey/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/air-hockey/shot-3.webp', width: 405, height: 720 },
      { src: '/images/games/air-hockey/shot-4.webp', width: 405, height: 720 },
    ],
  },
  {
    slug: 'minesweeper',
    packageId: 'com.devapplications.buscaminasclasico',
    category: 'puzzle',
    released: '2026-07-23',
    downloads: '10+',
    title: { es: 'Buscaminas Clásico Offline', en: 'Minesweeper Classic Offline' },
    short: {
      es: 'El buscaminas de siempre: lógica pura y un primer toque que nunca es mina.',
      en: "Minesweeper the way you remember it: pure logic and a first tap that's never a mine.",
    },
    shots: [
      { src: '/images/games/minesweeper/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/minesweeper/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/minesweeper/shot-3.webp', width: 405, height: 720 },
      { src: '/images/games/minesweeper/shot-4.webp', width: 405, height: 720 },
    ],
  },
  {
    slug: 'bullet-hell-starhail',
    packageId: 'com.devApplications.starhail',
    category: 'arcade',
    released: '2026-06-22',
    downloads: '10+',
    title: { es: 'Matamarcianos: Starhail', en: 'Bullet Hell: Starhail' },
    short: {
      es: 'Shooter vertical de neón para una mano: 9 naves, 6 jefes y oleadas infinitas.',
      en: 'One-handed neon vertical shooter: 9 ships, 6 bosses, endless waves.',
    },
    shots: [
      { src: '/images/games/bullet-hell-starhail/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/bullet-hell-starhail/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/bullet-hell-starhail/shot-3.webp', width: 405, height: 720 },
      { src: '/images/games/bullet-hell-starhail/shot-4.webp', width: 405, height: 720 },
    ],
  },
  {
    slug: 'idle-brick-breaker',
    packageId: 'com.devapplications.idlebrickbreaker',
    category: 'idle',
    released: '2026-06-16',
    downloads: '50+',
    title: { es: 'Idle Brick Breaker: Fusión', en: 'Idle Brick Breaker' },
    short: {
      es: 'El rompeladrillos convertido en idle: las bolas juegan solas y tú fusionas y mejoras.',
      en: 'Brick breaker turned idle: the balls play themselves while you merge and upgrade.',
    },
    shots: [
      { src: '/images/games/idle-brick-breaker/shot-1.webp', width: 406, height: 720 },
      { src: '/images/games/idle-brick-breaker/shot-2.webp', width: 405, height: 720 },
      { src: '/images/games/idle-brick-breaker/shot-3.webp', width: 406, height: 720 },
      { src: '/images/games/idle-brick-breaker/shot-4.webp', width: 409, height: 720 },
    ],
  },
  {
    slug: 'x2-number-merge',
    packageId: 'com.devApplications.xtwonumbermerge',
    category: 'puzzle',
    released: '2026-05-23',
    downloads: '10+',
    title: { es: 'X2 Number Merge', en: 'X2 Number Merge' },
    short: {
      es: 'Junta bloques iguales para multiplicar su valor: un puzle de fusión al estilo 2048.',
      en: 'Bring equal blocks together to multiply their value: a 2048-style merge puzzle.',
    },
    shots: [
      { src: '/images/games/x2-number-merge/shot-1.webp', width: 327, height: 720 },
      { src: '/images/games/x2-number-merge/shot-2.webp', width: 326, height: 720 },
      { src: '/images/games/x2-number-merge/shot-3.webp', width: 327, height: 720 },
      { src: '/images/games/x2-number-merge/shot-4.webp', width: 325, height: 720 },
    ],
  },
  {
    slug: 'geometry-smash',
    packageId: 'com.DevApplications.GeometrySmash',
    category: 'arcade',
    released: '2026-05-07',
    downloads: '100+',
    title: { es: 'Geometry Smash', en: 'Geometry Smash' },
    short: {
      es: 'Apunta, lanza una ráfaga de bolas y pulveriza bloques numerados. Roguelite de partidas rápidas.',
      en: 'Aim, fire a barrage of balls and pulverise numbered bricks. A roguelite of quick runs.',
    },
    shots: [
      { src: '/images/games/geometry-smash/shot-1.webp', width: 405, height: 720 },
      { src: '/images/games/geometry-smash/shot-2.webp', width: 407, height: 720 },
      { src: '/images/games/geometry-smash/shot-3.webp', width: 406, height: 720 },
      { src: '/images/games/geometry-smash/shot-4.webp', width: 407, height: 720 },
    ],
  },
  {
    slug: 'idle-backpack-survivor',
    packageId: 'com.devApplications.IdleBackpackSurvivor',
    category: 'idle',
    released: '2026-04-30',
    downloads: '100+',
    title: { es: 'Idle Backpack Survivor: RPG', en: 'Idle Backpack Survivor: RPG' },
    short: {
      es: 'RPG idle de inventario: ordena tu mochila y sobrevive oleada tras oleada.',
      en: 'Inventory idle RPG: organise your backpack and survive wave after wave.',
    },
    shots: [
      { src: '/images/games/idle-backpack-survivor/shot-1.webp', width: 1085, height: 720 },
      { src: '/images/games/idle-backpack-survivor/shot-2.webp', width: 1085, height: 720 },
      { src: '/images/games/idle-backpack-survivor/shot-3.webp', width: 1085, height: 720 },
      { src: '/images/games/idle-backpack-survivor/shot-4.webp', width: 1085, height: 720 },
    ],
  },
  {
    slug: 'arkanoid-classic',
    packageId: 'com.devApplications.Arkanoidclasicfree',
    category: 'arcade',
    released: '2014-01-27',
    downloads: '500,000+',
    rating: { value: 4.4, count: 2360 },
    title: { es: 'Arkanoid Clásico Gratis', en: 'Arkanoid Classic Brick Breaker' },
    short: {
      es: 'El rompeladrillos de siempre, con 400 niveles y más de medio millón de descargas.',
      en: 'The classic brick breaker, with 400 levels and over half a million downloads.',
    },
    shots: [
      { src: '/images/games/arkanoid-classic/shot-1.webp', width: 407, height: 720 },
      { src: '/images/games/arkanoid-classic/shot-2.webp', width: 407, height: 720 },
      { src: '/images/games/arkanoid-classic/shot-3.webp', width: 408, height: 720 },
      { src: '/images/games/arkanoid-classic/shot-4.webp', width: 406, height: 720 },
    ],
  },
  {
    slug: 'infinite-dark',
    packageId: 'com.devapplications.infiniteDark',
    category: 'arcade',
    released: '2026-03-02',
    downloads: '50+',
    title: { es: 'Survivor Espacial: Dark', en: 'Space Survivor: Infinite Dark' },
    short: {
      es: 'Space survivor roguelite: sobrevive a oleadas y descubre sinergias entre armas.',
      en: 'Space survivor roguelite: survive the waves and find synergies between weapons.',
    },
    shots: [
      { src: '/images/games/infinite-dark/shot-1.webp', width: 357, height: 637 },
      { src: '/images/games/infinite-dark/shot-2.webp', width: 360, height: 638 },
      { src: '/images/games/infinite-dark/shot-3.webp', width: 360, height: 636 },
      { src: '/images/games/infinite-dark/shot-4.webp', width: 360, height: 637 },
    ],
  },
];

export const playUrl = (g: Game) => `https://play.google.com/store/apps/details?id=${g.packageId}`;
export const iconUrl = (g: Game) => `/images/games/${g.slug}/icon.webp`;

/** Number of most recent releases flagged as new. */
export const NEW_COUNT = 2;
export const isNew = (g: Game) => games.indexOf(g) < NEW_COUNT;
