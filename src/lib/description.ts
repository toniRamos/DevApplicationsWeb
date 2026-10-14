import descriptions from '../data/game-descriptions.json';
import type { Game, Lang } from '../data/games';

export type Block =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

// Leading emoji / pictographs used as bullets in the Play Store copy.
const LEADING_SYMBOLS = /^[\p{Extended_Pictographic}\p{Emoji_Presentation}\u{FE0F}\u{200D}\u{20E3}\s]+/u;

const isHeading = (line: string) => {
  const letters = line.replace(/[^\p{L}]/gu, '');
  return letters.length >= 3 && letters === letters.toUpperCase() && line.length <= 70;
};

const sentenceCase = (s: string) => {
  const lower = s.toLocaleLowerCase();
  return lower.charAt(0).toLocaleUpperCase() + lower.slice(1);
};

/** Turns the plain-text Google Play description into headings, paragraphs and lists. */
export function descriptionBlocks(game: Game, lang: Lang): Block[] {
  const raw: string = (descriptions as Record<string, Record<Lang, string>>)[game.slug]?.[lang] ?? '';
  const blocks: Block[] = [];

  for (const rawLine of raw.split('\n')) {
    const line = rawLine.replace(LEADING_SYMBOLS, '').trim();
    if (!line) continue;

    if (line.startsWith('•') || line.startsWith('- ')) {
      const item = line.replace(/^(•|-)\s*/, '');
      const last = blocks.at(-1);
      if (last?.type === 'list') last.items.push(item);
      else blocks.push({ type: 'list', items: [item] });
    } else if (isHeading(line)) {
      blocks.push({ type: 'heading', text: sentenceCase(line) });
    } else {
      blocks.push({ type: 'paragraph', text: line });
    }
  }
  return blocks;
}

export interface Section {
  title: string;
  body: Exclude<Block, { type: 'heading' }>[];
}

/** Splits the description into an intro (before the first heading) and one section per heading. */
export function descriptionSections(game: Game, lang: Lang) {
  const intro: Section['body'] = [];
  const sections: Section[] = [];
  for (const block of descriptionBlocks(game, lang)) {
    if (block.type === 'heading') sections.push({ title: block.text, body: [] });
    else (sections.at(-1)?.body ?? intro).push(block);
  }
  return { intro, sections };
}
