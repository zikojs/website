// @ts-nocheck

import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import netlify from "@astrojs/netlify";

import { createSidebar } from "starlight-sidebar";
import { ReferenceStructure } from '@/i18n/sidebar.js'


// import ziko from "ziko-wrapper/astro";
// import starlightGitHubAlerts from "starlight-github-alerts";
// import starlightThemeObsidian from "starlight-theme-obsidian";
// import mermaid from "astro-mermaid";
// import astroD2 from "astro-d2";

// const ReferenceStructure = {
//   core: {
//     translations: {
//       en: "Core",
//       ar: "النواة",
//     },

//     items: {
//       ui: {
//         translations: {
//           en: "UI",
//           ar: "واجهة المستخدم",
//         },

//         items: {
//           "built-in-components": {
//             translations: {
//               en: "Built-in Components",
//               ar: "المكونات المدمجة",
//             },
//           },

//           "ui-constructors": {
//             translations: {
//               en: "UI Constructors",
//               ar: "منشئات واجهة المستخدم",
//             },
//           },

//           utilities: {
//             translations: {
//               en: "Utilities",
//               ar: "الأدوات المساعدة",
//             },
//           },
//         },
//       },

//       math: {
//         translations: {
//           en: "Math",
//           ar: "الرياضيات",
//         },
//       },

//       router: {
//         translations: {
//           en: "Router",
//           ar: "الموجّه",
//         },
//       },

//       time: {
//         translations: {
//           en: "Time",
//           ar: "الوقت",
//         },
//       },

//       hooks: {
//         translations: {
//           en: "Hooks",
//           ar: "الخطافات",
//         },
//       },

//       events: {
//         translations: {
//           en: "Events",
//           ar: "الأحداث",
//         },
//       },
//     },
//   },

//   wrapper: {
//     translations: {
//       en: "Wrapper",
//       ar: "المغلّف",
//     },
//   },

//   server: {
//     translations: {
//       en: "Server",
//       ar: "الخادم",
//     },
//   },
// };

const Reference = createSidebar({
  label: "Reference",

  translations: {
    en: "Reference",
    ar: "المرجع",
  },

  items: ReferenceStructure,

  locale: "en",
  rootDirectory: "reference",
});

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


