// @ts-nocheck

import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import netlify from "@astrojs/netlify";

// import { createSidebar } from "./src/utils/starlight-sidebar.js";

// import ziko from "ziko-wrapper/astro";
// import starlightGitHubAlerts from "starlight-github-alerts";
// import starlightThemeObsidian from "starlight-theme-obsidian";
// import mermaid from "astro-mermaid";
// import astroD2 from "astro-d2";

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

      router: {
        translations: {
          en: "Router",
          ar: "الموجّه",
        },
      },

      time: {
        translations: {
          en: "Time",
          ar: "الوقت",
        },
      },

      hooks: {
        translations: {
          en: "Hooks",
          ar: "الخطافات",
        },
      },

      events: {
        translations: {
          en: "Events",
          ar: "الأحداث",
        },
      },
    },
  },

  wrapper: {
    translations: {
      en: "Wrapper",
      ar: "المغلّف",
    },
  },

  server: {
    translations: {
      en: "Server",
      ar: "الخادم",
    },
  },
};

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


import { mapfun } from "ziko/math";

/**
 * Transforms a node or primitive into a Starlight-compatible sidebar item.
 *
 * @param {object} node - A single item node from ReferenceStructure
 * @param {string} currentPath - Current path accumulator
 * @param {string} locale - Default fallback locale
 */
function transformNode(node, currentPath, locale) {
  // Extract translations and nested items
  const { translations = {}, items } = node;

  // Starlight label resolution logic
  const label = translations[locale] ?? "";
  const translatedLabels = Object.fromEntries(
    Object.entries(translations).filter(([lang]) => lang !== locale)
  );

  const starlightItem = {
    label,
    ...(Object.keys(translatedLabels).length > 0 && {
      translations: translatedLabels,
    }),
  };

  if (items) {
    // Has child groups: recursively map through items
    starlightItem.items = mapSidebarItems(items, currentPath, locale);
  } else {
    // Leaf node: set autogenerate directory path
    starlightItem.items = [
      {
        autogenerate: {
          directory: currentPath,
        },
      },
    ];
  }

  return starlightItem;
}

/**
 * Maps a nested structure object into an array of Starlight sidebar items using mapfun.
 */
export function createSidebarItems(
  structure,
  { locale = "en", rootDirectory = "reference" } = {}
) {
  return mapSidebarItems(structure, rootDirectory, locale);
}

function mapSidebarItems(structure, parentPath, locale) {
  // 1. Pass a function to mapfun that constructs paths per key/node pair
  const mappedObj = mapfun((val) => val, structure);

  // 2. Convert mapfun's resulting Object tree into Starlight's Array format
  return Object.entries(mappedObj).map(([key, val]) => {
    const currentPath = `${parentPath}/${key}`;
    return transformNode(val, currentPath, locale);
  });
}

/**
 * Creates the top-level Starlight sidebar configuration section.
 */
export function createSidebar({
  label,
  translations = {},
  items,
  locale = "en",
  rootDirectory = "reference",
}) {
  const translatedLabels = Object.fromEntries(
    Object.entries(translations).filter(([lang]) => lang !== locale)
  );

  return {
    label: translations[locale] ?? label,

    ...(Object.keys(translatedLabels).length > 0 && {
      translations: translatedLabels,
    }),

    items: createSidebarItems(items, {
      locale,
      rootDirectory,
    }),
  };
}