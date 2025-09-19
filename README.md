[![NPM Downloads](https://img.shields.io/npm/dw/%40cssnr%2Fvitepress-plugin-copybutton?logo=npm)](https://www.npmjs.com/package/@cssnr/vitepress-plugin-copybutton)
[![NPM Version](https://img.shields.io/npm/v/%40cssnr%2Fvitepress-plugin-copybutton?logo=npm)](https://www.npmjs.com/package/@cssnr/vitepress-plugin-copybutton)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/vitepress-plugin-copybutton?logo=github)](https://github.com/cssnr/vitepress-plugin-copybutton/releases)
[![NPM Bundle Size](https://img.shields.io/bundlephobia/min/%40cssnr%2Fvitepress-plugin-copybutton?logo=bookstack&logoColor=white)](https://bundlephobia.com/package/@cssnr/vitepress-plugin-copybutton)
[![Deployments NPM](https://img.shields.io/github/deployments/cssnr/vitepress-plugin-copybutton/npm?logo=npm&label=deploy)](https://github.com/cssnr/vitepress-plugin-copybutton/deployments/npm)
[![Deployments Pages](https://img.shields.io/github/deployments/cssnr/vitepress-plugin-copybutton/docs?logo=vitepress&logoColor=white&label=docs)](https://github.com/cssnr/vitepress-plugin-copybutton/deployments/docs)
[![WF Release](https://img.shields.io/github/actions/workflow/status/cssnr/vitepress-plugin-copybutton/release.yaml?logo=cachet&label=release)](https://github.com/cssnr/vitepress-plugin-copybutton/actions/workflows/release.yaml)
[![WF Lint](https://img.shields.io/github/actions/workflow/status/cssnr/vitepress-plugin-copybutton/lint.yaml?logo=cachet&label=lint)](https://github.com/cssnr/vitepress-plugin-copybutton/actions/workflows/lint.yaml)
[![GitHub Contributors](https://img.shields.io/github/contributors/cssnr/vitepress-plugin-copybutton?logo=github)](https://github.com/cssnr/vitepress-plugin-copybutton/graphs/contributors)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/vitepress-plugin-copybutton?logo=github)](https://github.com/cssnr/vitepress-plugin-copybutton/pulse)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/vitepress-plugin-copybutton?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/cssnr/vitepress-plugin-copybutton?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/vitepress-plugin-copybutton?logo=htmx&logoColor=white)](https://github.com/cssnr/vitepress-plugin-copybutton/blob/master/src/CopyButton.vue)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/vitepress-plugin-copybutton?logo=github)](https://github.com/cssnr/vitepress-plugin-copybutton/discussions)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/vitepress-plugin-copybutton?style=flat&logo=github)](https://github.com/cssnr/vitepress-plugin-copybutton/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# VitePress Plugin CopyButton

- [Install](#Install)
- [Options](#Setup)
- [Usage](#Usage)
- [Examples](#Examples)
- [Support](#Support)
- [Contributing](#Contributing)

A [VitePress](https://vitepress.dev/) Plugin to easily add a copy button to a heading, table, code snippet or paragraph with automatic text detection or pass any string.

> [!IMPORTANT]  
> For **Up-to-Date** Documentation, please visit the website:  
> https://vitepress-copybutton.cssnr.com/

## Install

Install directly into your VitePress from [npmjs](https://www.npmjs.com/package/@cssnr/vitepress-plugin-copybutton).

```shell
npm i @cssnr/vitepress-plugin-copybutton
```

## Setup

```javascript
import DefaultTheme, { VPBadge } from 'vitepress/theme' // only if using VPBadge

import CopyButton from '@cssnr/vitepress-plugin-copybutton' // ADD this line
import '@cssnr/vitepress-plugin-copybutton/style.css' // ADD this line

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Badge', VPBadge) // only if using VPBadge

    app.component('CB', CopyButton) // ADD this line
  },
}
```

Note: The component name `CB` is an arbitrary string based on your preference.

`VPBadge` - Only required if you are using the VitePress [Badge](https://vitepress.dev/reference/default-theme-badge#badge).

## Usage

All parameters are optional.

| Parameter |  Type   | Description&nbsp;of&nbsp;Parameter                                           |
| :-------- | :-----: | :--------------------------------------------------------------------------- |
| `text`    | String  | Text to be copied                                                            |
| `next`    | Boolean | Copy next element text                                                       |
| `prev`    | Boolean | Copy previous element text                                                   |
| `all`     | Boolean | Copy parent element text                                                     |
| `anchor`  | Boolean | Copy anchor text (the id)                                                    |
| `margin`  | String  | [CSS margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) String |

With automatic text detection:

```markdown
<CB />
```

With a set text:

```markdown
<CB text="I Copied This" />
```

With a boolean parameter:

```markdown
<CB prev />
```

## Examples

The button can automatically detect text in [Headings](#headings) and [Other](#other) elements.
You can also manually set the text.

### Headings

```markdown
### Heading 1 <CB />
```

`Heading 1`

```markdown
### Heading 2 <Badge type="tip" text="Badge" /> <CB />
```

`Heading 2`

```markdown
### Heading 3 <CB /> <Badge type="tip" text="Badge" />
```

`Heading 3`

```markdown
### Heading 4 <CB anchor /> <Badge type="tip" text="Badge" /> {#custom_anchor}
```

`custom_anchor`

```markdown
### Heading 5 <CB text="Custom Text" />
```

`Custom Text`

### Other

```markdown
Lorem ipsum dolor sit amet. <CB />
```

Lorem ipsum dolor sit amet.

```markdown
Some text. `some inline code` <CB />
```

Some text.

```markdown
Some text. `some inline code` <CB prev />
```

some inline code

```markdown
Some text. <CB next /> `some inline code`
```

some inline code

```markdown
Some text. `some inline code` <CB all />
```

Some text. some inline code

### Demos

This plugin is being used extensively on the following pages:

- https://docker-deploy.cssnr.com/docs/inputs
- https://portainer-deploy.cssnr.com/docs/inputs
- https://vitepress-swiper.cssnr.com/guides/options

## Support

Please let us know if you run into any [issues](https://github.com/cssnr/vitepress-plugin-copybutton/issues)
or want to see [a new feature](https://github.com/cssnr/vitepress-plugin-copybutton/discussions/categories/feature-requests).

For general help or to request a feature:

- Q&A Discussion: [discussions/q-a](https://github.com/cssnr/vitepress-plugin-copybutton/discussions/categories/q-a)
- Request a Feature: [discussions/feature-requests](https://github.com/cssnr/vitepress-plugin-copybutton/discussions/categories/feature-requests)

If you are experiencing an issue/bug or getting unexpected results:

- Report an Issue: [cssnr/vitepress-plugin-copybutton/issues](https://github.com/cssnr/vitepress-plugin-copybutton/issues)
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=VitePress%20Plugin%20CopyButton)

### More VitePress Plugins

- [SwiperJS](https://github.com/cssnr/vitepress-swiper) - Photo Gallery
- [Contributors](https://github.com/cssnr/vitepress-plugin-contributors) - GitHub Contributors
- [Copy Button](https://github.com/cssnr/vitepress-plugin-copybutton) - Copy Text Button

# Contributing

All contributions are welcome including [bug reports](https://github.com/cssnr/vitepress-plugin-copybutton/issues), [feature requests](https://github.com/cssnr/vitepress-plugin-copybutton/discussions/categories/feature-requests), or pull requests.

For instructions on creating a PR for the [Package](https://www.npmjs.com/package/@cssnr/vitepress-plugin-copybutton) or [Documentation](https://vitepress-copybutton.cssnr.com/),
see the [CONTRIBUTING.md](#contributing-ov-file).

Please consider making a donation to support the development of this project and additional open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)
