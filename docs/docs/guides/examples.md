---
prev:
  text: 'Get Started'
  link: '/guides/get-started'
next:
  text: 'Documentation'
  link: '/docs/copybutton'
---

# Copy Button Examples

Can be added directly to [headings](#headings) and [other](#others) places.

## Headings

### Heading 1 <CB />

::: code-group

```markdown [Code]
### Heading 1 <CB />
```

```plain [Result]
Heading 1
```

:::

### Heading 2 <Badge type="tip" text="Badge" /> <CB />

::: code-group

```markdown [Code]
### Heading 2 <Badge type="tip" text="Badge" /> <CB />
```

```plain [Result]
Heading 2
```

:::

### Heading 3 <CB /> <Badge type="tip" text="Badge" />

::: code-group

```markdown [Code]
### Heading 3 <CB /> <Badge type="tip" text="Badge" />
```

```plain [Result]
Heading 3
```

:::

### Heading 4 <CB anchor /> <Badge type="tip" text="Badge" /> {#custom_anchor_2}

::: code-group

```markdown [Code]
### Heading 4 <CB anchor /> <Badge type="tip" text="Badge" /> {#custom_anchor_2}
```

```plain [Result]
custom_anchor_2
```

:::

### Heading 5 <CB text="Custom Text" />

::: code-group

```markdown [Code]
### Heading 5 <CB text="Custom Text" />
```

```plain [Result]
Custom Text
```

:::

## Others

### Text

Lorem ipsum dolor sit amet. <CB />

::: code-group

```markdown [Code]
Lorem ipsum dolor sit amet. <CB />
```

```plain [Result]
Lorem ipsum dolor sit amet.
```

:::

Some text. `some inline code` <CB />

::: code-group

```markdown [Code]
Some text. `some inline code` <CB />
```

```plain [Result]
Some text.
```

:::

Some text. `some inline code` <CB prev />

::: code-group

```markdown [Code]
Some text. `some inline code` <CB prev />
```

```plain [Result]
some inline code
```

:::

Some text. `some inline code` <CB all />

::: code-group

```markdown [Code]
Some text. `some inline code` <CB all />
```

```plain [Result]
Some text. some inline code
```

:::

### Table

| Key                                   | Tag&nbsp;Used | Result                  |
| :------------------------------------ | :-----------: | ----------------------- |
| `inline code` <CB />                  |   `<CB />`    | inline code             |
| text string <CB />                    |   `<CB />`    | text string             |
| text string `inline code` <CB />      |   `<CB />`    | text string             |
| text string `inline code` <CB prev /> | `<CB prev />` | inline code             |
| text string `inline code` <CB all />  | `<CB all />`  | inline code text string |

<div class="tip custom-block" style="padding-top: 8px; margin-top: 64px;">

See the [CopyButton Documentation](../docs/copybutton.md) for `<CB />` tag usage or view the [Examples](examples.md).

</div>
