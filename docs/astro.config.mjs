// @ts-no-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import netlify from "@astrojs/netlify";
// import ziko from "ziko-wrapper/astro";
// import starlightGitHubAlerts from "starlight-github-alerts";
// import starlightThemeObsidian from "starlight-theme-obsidian";
// import mermaid from "astro-mermaid";
// import astroD2 from "astro-d2";

import { mapfun } from 'ziko/math'

const ReferenceStructure = {
  core: {
    translations: {
      en: "Core",
      ar: "النواة",
    },

    items: {
      ui: {
        translations: {
          en: "UI",
          ar: "واجهة المستخدم",
        },

        items: {
          "built-in-components": {
            translations: {
              en: "Built-in Components",
              ar: "المكونات المدمجة",
            },
          },

          "ui-constructors": {
            translations: {
              en: "UI Constructors",
              ar: "منشئات واجهة المستخدم",
            },
          },

          utilities: {
            translations: {
              en: "Utilities",
              ar: "الأدوات المساعدة",
            },
          },
        },
      },

      math: {
        translations: {
          en: "Math",
          ar: "الرياضيات",
        },
      },
    },
  },
};


// function createSidebarItems(
//   structure,
//   locale = "en",
//   parentDirectory = "reference",
// ) {
//   return Object.entries(structure).map(([name, config]) => {
//     const directory = `${parentDirectory}/${name}`;

//     const translations = Object.fromEntries(
//       Object.entries(config.translations)
//         .filter(([lang]) => lang !== locale)
//     );

//     const item = {
//       label: config.translations[locale],
//       ...(Object.keys(translations).length > 0 && {
//         translations,
//       }),
//     };

//     if (config.items) {
//       item.items = createSidebarItems(
//         config.items,
//         locale,
//         directory,
//       );
//     } else {
//       item.items = [
//         {
//           autogenerate: {
//             directory,
//           },
//         },
//       ];
//     }

//     return item;
//   });
// }

const createSidebarItems = (
  structure,
  locale = "en",
  parentDirectory = "reference",
) =>
  mapfun(
    (config, name) => {
      const directory = `${parentDirectory}/${name}`;

      const translations = config.translations;

      const item = {
        label: translations[locale],
        translations: Object.fromEntries(
          Object.entries(translations).filter(
            ([lang]) => lang !== locale
          )
        ),
      };

      if (config.items) {
        item.items = createSidebarItems(
          config.items,
          locale,
          directory
        );
      } else {
        item.items = [
          {
            autogenerate: {
              directory,
            },
          },
        ];
      }

      return item;
    },
    structure
  );

const Reference = {
  label: "Reference",

  translations: {
    ar: "المرجع",
  },

  items: createSidebarItems(ReferenceStructure),
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "ZikoJS",

      editLink: {
        baseUrl: "https://github.com/zikojs/ziko/edit/main/docs/",
      },

      locales: {
        root: {
          label: "English",
          lang: "en",
        },

        ar: {
          label: "العربية",
          dir: "rtl",
        },
      },

      plugins: [],

      customCss: ["./src/styles/custom.css"],

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/zikojs/ziko",
        },
      ],

      sidebar: [
        {
          label: "Start Here",

          items: [
            {
              autogenerate: {
                directory: "get-started",
              },
            },
          ],
        },

        Reference,
      ],
    }),
  ],

  adapter: netlify(),
});