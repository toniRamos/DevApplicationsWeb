import type { Game } from '../data/games';

/** Google Play buckets below this read as a weakness, so they stay hidden. */
const MIN_DOWNLOADS_SHOWN = 1000;

export const showDownloads = (g: Game) =>
  Number(g.downloads.replace(/[^\d]/g, '')) >= MIN_DOWNLOADS_SHOWN;
