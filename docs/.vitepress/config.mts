import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import path from 'path'

const settings = {
  siteTitle: 'VitePress CopyButton', // For Site Sidebar
  title: 'VitePress CopyButton', // For Actual Title
  name: 'A VitePress CopyButton Plugin', // For Meta Tag
  description: {
    short: 'VitePress Plugin for a SwiperJS Gallery.',
    long: 'A VitePress Plugin to Easily add a SwiperJS Photo Gallery or Image Slideshow with Custom Options.',
  },
  image: '/images/logo.png',
  image32: '/images/logo32.png',
  svg: '/images/logo.svg',
  color: '#1FBF66',
  source_repo: 'https://github.com/cssnr/vitepress-plugin-copybutton',
  npm_link: 'https://www.npmjs.com/package/@cssnr/vitepress-plugin-copybutton',
}

// https://vitepress.dev/reference/site-config
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  srcDir: './docs',
  // base: '/path/',
  vite: {
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, '../../src'),
      },
    },
    server: {
      allowedHosts: true,
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          git: 'vscode-icons:file-type-git',
        },
      }),
    ],
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
    // toc: { level: [2] },
  },

  title: settings.title,
  description: settings.description.short,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // ['link', { rel: 'icon', type: 'image/svg', sizes: 'any', href: settings.svg }],
    ['link', { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: settings.image }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: settings.image32 }],

    ['meta', { name: 'darkreader-lock' }],

    ['meta', { name: 'theme-color', content: settings.color }],
    ['meta', { name: 'description', content: settings.description.long }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: settings.name }],
    ['meta', { property: 'og:title', content: settings.title }],
    ['meta', { property: 'og:description', content: settings.description.short }],
    ['meta', { property: 'og:image', content: settings.image }],
    ['meta', { property: 'og:image:alt', content: settings.title }],

    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:site', content: settings.name }],
    ['meta', { property: 'twitter:title', content: settings.title }],
    ['meta', { property: 'twitter:description', content: settings.description.short }],
    ['meta', { property: 'twitter:image', content: settings.image }],
    ['meta', { property: 'twitter:image:alt', content: settings.title }],
  ],

  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: settings.siteTitle,
    logo: settings.image32,
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Install', link: '/guides/get-started', activeMatch: '/guides/' },
      { text: 'Docs', link: '/docs/copybutton' },
      { text: 'Support', link: '/support' },
      {
        text: 'Links',
        items: [
          { text: 'Source Code on GitHub', link: settings.source_repo },
          { text: 'Package on NPM', link: settings.npm_link },
          { text: 'Developer Site', link: 'https://cssnr.github.io/' },
          { text: 'Contribute', link: 'https://ko-fi.com/cssnr' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: settings.source_repo },
      { icon: 'npm', link: settings.npm_link },
      { icon: 'discord', link: 'https://discord.gg/wXy6m2X8wY' },
      { icon: 'kofi', link: 'https://ko-fi.com/cssnr' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: none;" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
        },
        link: 'https://cssnr.github.io/',
      },
    ],

    sidebar: [
      {
        text: 'Guides',
        base: '/guides',
        items: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'Use from Source', link: '/source' },
          { text: 'Examples', link: '/examples' },
        ],
      },
      {
        text: 'Documentation',
        items: [
          { text: 'CopyButton', link: '/docs/copybutton' },
          //
        ],
      },
      {
        text: 'Support',
        items: [
          { text: 'Get Help', link: '/support' },
          //
        ],
      },
    ],

    editLink: {
      pattern: `${settings.source_repo}/dics/blob/master/docs/:path`,
      text: 'View or Edit on GitHub',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },

    search: {
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: 'vitepress-copybutton',
      // },
    },

    // footer: {
    //   message: '<a href="/privacy">Privacy Policy</a>',
    //   copyright: '<a href="/privacy">Privacy Policy</a>',
    // },

    externalLinkIcon: true,
    outline: 'deep',
  },
})
