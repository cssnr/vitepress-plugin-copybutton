---
prev:
  text: 'Get Help'
  link: '/support'
next:
  text: 'Examples'
  link: '/guides/examples'
---

# Getting Started <CB />

A [VitePress](https://vitepress.dev/) Plugin to easily add a copy button to a heading, table, code snippet or paragraph with automatic text detection or pass any string. <CB all />

To get started, [install](#install) the package, [setup](#setup) the plugin, and view the [usage](#usage).

## Install

<span class="search-keywords">Install or Download from NPM npmjs.com</span>

Install directly to your VitePress from [npmjs](https://www.npmjs.com/package/@cssnr/vitepress-plugin-copybutton) with the following command.

::: code-group

```shell [npm]
npm i @cssnr/vitepress-plugin-copybutton
```

```shell [pnpm]
pnpm i @cssnr/vitepress-plugin-copybutton
```

```shell [yarn]
yarn add @cssnr/vitepress-plugin-copybutton
```

```shell [bun]
bun i @cssnr/vitepress-plugin-copybutton
```

:::

_Note: you can also [copy the source](source.md) file to your project._ <Badge type="warning">WIP</Badge>

## Setup

Add these 3 lines to your `index.[js,ts]`.

_If you don't have a [.vitepress/theme/index.js](https://vitepress.dev/guide/custom-theme#theme-resolving) file, create one._

```javascript [.vitepress/theme/index.js]
import DefaultTheme, { VPBadge } from 'vitepress/theme' // [!code highlight]

import CopyButton from '@cssnr/vitepress-plugin-copybutton' // [!code ++]
import '@cssnr/vitepress-plugin-copybutton/style.css' // [!code ++]

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Badge', VPBadge) // [!code highlight]

    app.component('CB', CopyButton) // [!code ++]
  },
}
```

<Badge type="info">VPBadge</Badge> Only required if you are using the VitePress [Badge](https://vitepress.dev/reference/default-theme-badge#badge).

Note: The component name `CB` is an arbitrary string based on your preference.

## Usage

Simply add a `<CB />` tag to your markdown or component.

Jump to the [documentation](../docs/copybutton.md) or view [examples](examples.md).

With a set text:

```markdown
<CB text="I Copied This" />
```

With automatic text detection:

```markdown
<CB />
```

<div class="tip custom-block" style="padding-top: 8px; margin-top: 64px;">

See the [CopyButton Documentation](../docs/copybutton.md) for `<CB />` tag usage or view the [Examples](examples.md).

</div>
