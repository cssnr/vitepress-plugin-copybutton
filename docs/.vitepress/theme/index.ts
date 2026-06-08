import DefaultTheme, { VPBadge } from 'vitepress/theme'
import './custom.css'
import 'virtual:group-icons.css'

// noinspection NpmUsedModulesInstalled
import CopyButton from '@src/CopyButton.vue'

import Contributors from '@cssnr/vitepress-plugin-contributors'
import '@cssnr/vitepress-plugin-contributors/style.css'
import contributors from '../contributors.json'

import chat from 'vitepress-chat'
import 'vitepress-chat/style.css'

// noinspection JSUnusedGlobalSymbols
export default {
  ...DefaultTheme,

  ...chat(DefaultTheme, {
    api: import.meta.env.VITE_AI_API,
    headers: import.meta.env.VITE_AI_AUTH
      ? { Authorization: import.meta.env.VITE_AI_AUTH }
      : undefined,
    filePath: 'llms.txt',
  }),

  enhanceApp({ app }) {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Badge', VPBadge)

    app.component('CB', CopyButton)

    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Contributors', Contributors)
    app.config.globalProperties.$contributors = contributors
  },
}
