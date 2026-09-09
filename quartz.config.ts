import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "My Space",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
  typography: {
    header: "Inter",
    body: "Inter",
    code: "JetBrains Mono",
  },
  colors: {
    lightMode: {
      light: "#ffffff",
      lightgray: "#ebedf0",
      gray: "#bdbdbd",
      darkgray: "#5a5a5a",
      dark: "#222222",
      secondary: "#2e80f2",   // Things' signature blue
      tertiary: "#3eb4bf",    // Things' green
      highlight: "rgba(255, 208, 0, 0.15)",
      textHighlight: "#ffd0007a",
    },
    darkMode: {
      light: "#1c2127",
      lightgray: "#282c34",
      gray: "#555555",
      darkgray: "#dadada",
      dark: "#f6f7f8",
      secondary: "#5b9bf5",
      tertiary: "#53dfdd",
      highlight: "rgba(255, 208, 0, 0.15)",
      textHighlight: "#ffd0007a",
    },
  },
},
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
