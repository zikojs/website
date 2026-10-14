// @ts-nocheck

import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import netlify from "@astrojs/netlify";

import { createSidebar } from "starlight-sidebar";

import {
  ReferenceTranslations,
} from "@/i18n/sidebar.js";

import { Locales } from "@/i18n/locals";


import zikojs from "@zikojs/astro";


export default defineConfig({
  vite: {
    resolve: {
      noExternal: ['@zikojs/astro-notebook','@zikojs/notebook', '@zikojs/console'],
    },
  },
  // vite: {
  //   optimizeDeps: {
  //     include: ["debug"],
  //   },
  // },
  integrations: [
    zikojs(),
    starlight({
    title: "ZikoJS",
    editLink: {
      baseUrl: "https://github.com/zikojs/ziko/edit/main/docs/",
    },
    locales: Locales,
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
      createSidebar(ReferenceTranslations),
    ],
  })],
  // adapter: netlify(),
});