---
pageClass: copybutton-page
---

# CopyButton

All parameters are optional.

| Parameter       |  Type   | Description&nbsp;of&nbsp;Parameter                                           |
| :-------------- | :-----: | :--------------------------------------------------------------------------- |
| `text` <CB />   | String  | Text to be copied                                                            |
| `next` <CB />   | Boolean | Copy next element text                                                       |
| `prev` <CB />   | Boolean | Copy previous element text                                                   |
| `all` <CB />    | Boolean | Copy parent element text                                                     |
| `anchor` <CB /> | Boolean | Copy anchor text (the id)                                                    |
| `margin` <CB /> | String  | [CSS margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) String |

## Usage

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

See the [Examples](../guides/examples.md) for more ways to use the CopyButton.

&nbsp;

::: tip Request a Feature
If you need more options, please [open a feature request](https://github.com/cssnr/vitepress-plugin-copybutton/discussions/categories/feature-requests)
:::

<style>
.copybutton-page table td:nth-child(1) {
  white-space: nowrap;
}
</style>
