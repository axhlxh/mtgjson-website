const generateSidebarRoutes = require('./config.sidebar');

module.exports = {
  host: '0.0.0.0',
  port: '8080',
  // SEO
  title: 'MTGJSON',
  description: 'Magic: The Gathering card data in JSON.',
  // Google Analytics
  ga: 'UA-131358443-1',
  // Support Links
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/keyrune@latest/css/keyrune.css',
      },
    ]
  ],
  // Vuepress Themeing
  themeConfig: {
    searchMaxSuggestions: 20,
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Talk to Us', link: 'https://discord.gg/74GUQDE' },
      { text: 'Contribute', link: 'https://github.com/mtgjson' },
      { text: 'Donate', link: 'https://www.paypal.me/Zachhalpern' },
    ],
    sidebar: [
      '/',
      {
        title: 'Downloads',
        path: '/downloads/compiled',
        collapsable: false,
        children: generateSidebarRoutes('/downloads/'),
      },
      {
        title: 'Documentation',
        path: '/files/all-cards',
        collapsable: false,
        children: [
          {
            title: 'Files',
            path: '/files/all-cards',
            collapsable: false,
            children: generateSidebarRoutes('/files/'),
          },
          {
            title: 'Structures',
            path: '/structures/card',
            collapsable: false,
            children: generateSidebarRoutes('/structures/'),
          }
        ]
      },
      '/changelog/'
    ],
  }
};