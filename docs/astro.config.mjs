// @ts-nocheck

import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import ziko from 'ziko-wrapper/astro'
import liveCode from 'astro-live-code'
import netlify from "@astrojs/netlify";

import { createSidebar } from "starlight-sidebar";

import {
  CoreTranslation,
} from "@/i18n/sidebar.js";

import { Locales } from "@/i18n/locals";

import path from 'path'
import { fileURLToPath } from 'url'
const __dirname = fileURLToPath(new URL('.', import.meta.url))



export default defineConfig({
  // vite: {
  //   resolve: {
  //     alias: [
  //       {
  //         find: 'astro-live-code',
  //         replacement: '/src/lib',
  //       },
  //     ],
  //   },
  // },
  integrations: [
    ziko(),
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
        createSidebar(CoreTranslation),
      ],
    }),
    liveCode({
      // defaultProps : {
      //   'client:load': true 
      // },
      // imports: ['ziko']
    }),
  ],
  adapter: netlify(),
});
