// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import ziko from "ziko-wrapper/astro"
// import starlightGitHubAlerts from 'starlight-github-alerts'
import starlightThemeObsidian from "starlight-theme-obsidian";
// import mermaid from "astro-mermaid";
// import astroD2 from 'astro-d2'

const CoreReference = ["ui", "math", "router", "time", "hooks", "events"];
const CoreTranslations = {
    ar: {
        ui: "واجهة المستخدم",
        math: "الرياضيات",
        router: "الموجّه",
        time: "الوقت",
        hooks: "الخطافات",
        events: "الأحداث",
    }
};

// https://astro.build/config
export default defineConfig({
  integrations: [
      // ziko(),
      starlight({
          title: "Zikojs",
          editLink: {
              baseUrl: 'https://github.com/zikojs/ziko/edit/main/docs/',
          },
          //   defaultLocale: "root",
          locales: {
              // English docs in `src/content/docs/en/`
              root: {
                  label: "English",
                  lang: "en",
              },
              // Arabic docs in `src/content/docs/ar/`
              ar: {
                  label: "العربية",
                  dir: "rtl",
              },
          },
          plugins: [
              // starlightThemeObsidian({
              // 	graph: false
              // })
              // starlightGitHubAlerts(),
          ],
          customCss: ["./src/styles/custom.css"],
          social: [
              {
                  icon: "github",
                  label: "GitHub",
                  href: "https://github.com/zakarialaoui10/numz.git",
              },
          ],
          sidebar: [
              {
                  label: 'Start Here',
                  items: [{ autogenerate: { directory: "get-started" } }],
              },
              {
                  label: "Core",
                  translations: {
                      ar: 'نواة الإطار'
                  },
                  items: [
                      {
                          label: "overview",
                          slug: "core/overview",
                          translations: {

                          }
                      },
                      {
                          label: "reference",
                          collapsed: true,
                          items: CoreReference.map((label) => ({
                              autogenerate: { directory: `core/reference/${label}` },
                          })),
                      },
                  ],
              },
              {
                  label: "Wrapper",
                  items: [{ autogenerate: { directory: "wrapper" } }],
              },
              {
                  label: "Server",
                  items: [{ autogenerate: { directory: "server" } }],
              },
          ],
      }),
      // astroD2({}),
  ],
});
