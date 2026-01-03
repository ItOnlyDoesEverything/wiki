import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "#ItOnlyDoesEverything Wiki",
  tagline: "Welcome to the #ItOnlyDoesEverything Wiki!",
  favicon: "img/favicon.ico",
  url: "https://wiki.itonlydoeseverything.org",
  baseUrl: "/",
  organizationName: "ItOnlyDoesEverything",
  projectName: "wiki",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  future: {
    experimental_faster: {
      ssgWorkerThreads: true,
    },
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "Wiki",
        logo: {
          alt: "#ItOnlyDoesEverything Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://github.com/ItOnlyDoesEverything",
            position: "right",
            className: "header-github-link",
          },
          {
            href: "https://twitter.com/ItOnlyDoesROM",
            position: "right",
            className: "header-x-link",
          },
          {
            type: "search",
            position: "right",
          },
          {
            label: "Apply",
            position: "left",
            to: "/development/maintainership/apply",
          },
          {
            label: "Community",
            position: "left",
            items: [
              {
                label: "Telegram (Channel)",
                to: "https://t.me/itonlydoeseverything",
              },
              {
                label: "Telegram (Chat)",
                to: "https://t.me/itonlydoeseverythingchat",
              },
            ],
          },
          {
            label: "Code of Conduct",
            position: "left",
            to: "/development/maintainership/coc",
          },
        ],
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} #ItOnlyDoesEverything. <br /> Android is a trademark of Google LLC.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      announcementBar: {
        id: "pin",
        content:
          '4.16 is now available! see <a target="_blank" rel="noopener noreferrer" href="/devices">supported devices</a>.',
        backgroundColor: "#1E201E",
        textColor: "#f3d2d2",
        isCloseable: true,
      },
    }),
};
