import DefaultTheme, { VPBadge } from 'vitepress/theme'
import './custom.css'
import 'virtual:group-icons.css'

// noinspection NpmUsedModulesInstalled
import CopyButton from '@src/CopyButton.vue'

import Contributors from '@cssnr/vitepress-plugin-contributors'
import '@cssnr/vitepress-plugin-contributors/style.css'
import contributors from '../contributors.json'

// noinspection JSUnusedGlobalSymbols
export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('Badge', VPBadge)

        app.component('CB', CopyButton)

        app.component('Contributors', Contributors)
        app.config.globalProperties.$contributors = contributors
    },
}
