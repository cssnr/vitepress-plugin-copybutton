# Use from Source

::: warning Work in Progress
This guide is not yet complete but should get you started.
:::

You can easily add the source file to your project for full control over the [template](../docs/copybutton.md).

Download or copy the [CopyButton.vue](https://github.com/cssnr/vitepress-plugin-copybutton/blob/master/src/CopyButton.vue)
file to your project.

- Source File: [CopyButton.vue](https://github.com/cssnr/vitepress-plugin-copybutton/blob/master/src/CopyButton.vue)
- Target Location: `.vitepress/theme/components/CopyButton.vue`

Add these 2 lines to your `index.[js,ts]`.

```javascript [.vitepress/theme/index.js]
import DefaultTheme, { VPBadge } from 'vitepress/theme' // [!code highlight]

import CopyButton from './components/CopyButton.vue' // [!code ++]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Badge', VPBadge) // [!code highlight]

    app.component('CB', CopyButton) // [!code ++]
  },
}
```

<Badge type="info">VPBadge</Badge> Only required if you are using the VitePress [Badge](https://vitepress.dev/reference/default-theme-badge#badge).

<div class="tip custom-block" style="padding-top: 8px; margin-top: 32px;">

See the [CopyButton Documentation](../docs/copybutton.md) for `<CB />` tag usage or view the [Examples](examples.md).

</div>
