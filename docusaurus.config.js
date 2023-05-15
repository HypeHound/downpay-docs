// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Downpay Docs',
  tagline: 'Deposits made simple',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.hypehound.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hypehound', // Usually your GitHub org/user name.
  projectName: 'downpay-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"), 
      {
        indexBlog: false,
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/HypehoundDocsBanner.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Downpay Docs',
        logo: {
          alt: 'Hypehound logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/overview',
              },
              {
                label: 'Downpay Guide',
                to: '/downpay-guide',
              },
              {
                label: 'FAQs',
                to: '/faqs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
          
              {
                label: 'About',
                href: 'https://www.hypehound.io/about',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/9rfcd3jGUq',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hypehound_apps',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Get Support',
                href: 'mailto:support@hypehound.io',
              },
              {
                label: 'Book a chat',
                href: 'https://calendly.com/hypehoundapps/30min?back=1&month=2023-02',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hypehound Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
