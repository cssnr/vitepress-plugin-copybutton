# Contributors

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

<div class="tip custom-block" style="padding-top: 8px">

See the [CopyButton Documentation](../docs/copybutton.md) for **usage** details and more **examples**.

</div>

## Demos

The plugin is running on these pages:

- https://django-files.github.io/ and [/team](https://django-files.github.io/team)
- https://docker-deploy.cssnr.com/
- https://portainer-deploy.cssnr.com/

If you have a live demo, let us know and we will post it here...

&nbsp;

::: tip Request a Feature
If you need more options, please [open a feature request](https://github.com/cssnr/vitepress-plugin-copybutton/discussions/categories/feature-requests)
:::

<style module>
table td:nth-child(1) {
  white-space: nowrap;
}
</style>
