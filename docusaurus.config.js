// @ts-check

/** Public zero-cost blog site. Does not publish internal playbooks or unverified metrics. */

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: process.env.DOCUSAURUS_SITE_TITLE || 'AYEIXA Engineering Blog',
  tagline: 'Technical notes from the AYEIXA project. Claims are published only with provenance.',
  favicon: 'img/favicon.svg',

  url: process.env.DOCUSAURUS_SITE_URL || 'https://alpallovy.github.io',
  baseUrl: process.env.DOCUSAURUS_BASE_URL || '/ayeixa-blog/',
  trailingSlash: true,

  organizationName: 'alpallovy',
  projectName: process.env.DOCUSAURUS_PROJECT_NAME || 'ayeixa-blog',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          blogTitle: 'AYEIXA Engineering Blog',
          blogDescription:
            'Engineering notes for AYEIXA open-source utilities. No fabricated traffic, users, or case studies.',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            title: 'AYEIXA Engineering Blog',
            description: 'AYEIXA engineering notes',
            copyright: `Copyright © ${new Date().getFullYear()} AYEIXA / Alp Allovy.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'robots', content: 'index,follow' },
        { name: 'theme-color', content: '#1b5e3b' },
      ],
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AYEIXA',
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/privacy', label: 'Privacy', position: 'left' },
          {
            href: 'https://github.com/alpallovy/ayeixa-blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'Privacy', to: '/privacy' },
            ],
          },
          {
            title: 'Open source',
            items: [
              { label: 'FuelLite', href: 'https://github.com/alpallovy/ayeixa-fuellite' },
              { label: 'OpenCoordinator', href: 'https://github.com/alpallovy/ayeixa-open-coordinator' },
              { label: 'MCP Guardian', href: 'https://github.com/alpallovy/ayeixa-mcp-guardian' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AYEIXA. Zero-cost bootstrap host: GitHub Pages. Custom domain ayeixa.com/blog is deferred until domain authority exists.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
