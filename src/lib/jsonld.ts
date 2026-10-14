import { games, iconUrl, playUrl, type Game, type Lang } from '../data/games';
import { categoryGenre, EMAIL, FOUNDED, PLAY_DEVELOPER_URL, routes, SITE_URL, t } from '../i18n/ui';

const abs = (path: string) => `${SITE_URL}${path}`;

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'DevApplications',
  url: SITE_URL,
  logo: abs('/images/logoDevApplications.png'),
  email: EMAIL,
  foundingDate: String(FOUNDED),
  foundingLocation: { '@type': 'Place', name: 'Barcelona, España' },
  founder: { '@type': 'Person', name: 'Antonio Ramos' },
  sameAs: [PLAY_DEVELOPER_URL],
};

export function mobileApplication(game: Game, lang: Lang) {
  return {
    '@type': 'MobileApplication',
    '@id': `${abs(routes.game(lang, game))}#app`,
    name: game.title[lang],
    description: game.short[lang],
    url: abs(routes.game(lang, game)),
    image: abs(iconUrl(game)),
    screenshot: game.shots.map((s) => abs(s.src)),
    operatingSystem: 'Android',
    applicationCategory: 'GameApplication',
    genre: categoryGenre[game.category],
    datePublished: game.released,
    inLanguage: lang,
    installUrl: playUrl(game),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    ...(game.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: game.rating.value,
        ratingCount: game.rating.count,
        bestRating: 5,
      },
    }),
    author: { '@id': organization['@id'] },
    publisher: { '@id': organization['@id'] },
  };
}

export function homeJsonLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: 'DevApplications',
        url: SITE_URL,
        inLanguage: ['es', 'en'],
        publisher: { '@id': organization['@id'] },
      },
      {
        '@type': 'ItemList',
        name: t(lang).catalog.title,
        numberOfItems: games.length,
        itemListElement: games.map((g, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: abs(routes.game(lang, g)),
          name: g.title[lang],
        })),
      },
    ],
  };
}

export function gameJsonLd(game: Game, lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      mobileApplication(game, lang),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'DevApplications', item: abs(routes.home(lang)) },
          { '@type': 'ListItem', position: 2, name: t(lang).game.breadcrumbGames, item: `${abs(routes.home(lang))}#games` },
          { '@type': 'ListItem', position: 3, name: game.title[lang], item: abs(routes.game(lang, game)) },
        ],
      },
    ],
  };
}
