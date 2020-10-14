# esds-do-dont-item

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property         | Attribute | Modifiers | Type                                             | Description                                      |
|------------------|-----------|-----------|--------------------------------------------------|--------------------------------------------------|
| `caption`        | `caption` |           | `string`                                         | The caption displayed with the visual            |
| `cssClassObject` |           | readonly  | `{ default: string; prefix: string; variant: { class: any; }; src: any; }` |                                                  |
| `src`            | `src`     |           | `string`                                         | If provided, uses esds-thumbnail to render an image |
| `variant`        | `variant` |           | `'do'\|'dont'`                                   | Visual style of the do don't item.               |

## Methods

| Method                  | Type                       |
|-------------------------|----------------------------|
| `renderExample`         | `(): TemplateResult`       |
| `renderImageFromSource` | `(): TemplateResult \| ""` |

## Slots

| Name | Description                                  |
|------|----------------------------------------------|
|      | Default slot, put whatever you want in here. |


# esds-do

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property         | Attribute | Modifiers | Type                                             | Default | Description                                      |
|------------------|-----------|-----------|--------------------------------------------------|---------|--------------------------------------------------|
| `caption`        | `caption` |           | `string`                                         |         | The caption displayed with the visual            |
| `captionEyebrow` |           |           | `string`                                         | "Do"    |                                                  |
| `cssClassObject` |           | readonly  | `{ default: string; prefix: string; variant: { class: any; }; src: any; }` |         |                                                  |
| `src`            | `src`     |           | `string`                                         |         | If provided, uses esds-thumbnail to render an image |
| `variant`        | `variant` |           | `'do'\|'dont'`                                   | "do"    | Visual style of the do don't item.               |

## Methods

| Method                  | Type                       |
|-------------------------|----------------------------|
| `renderExample`         | `(): TemplateResult`       |
| `renderImageFromSource` | `(): TemplateResult \| ""` |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
|           | Default slot, put whatever you want in here. |
| `content` | Insert content in the named "content" slot.  |


# esds-do-dont

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property         | Modifiers | Type                                   | Default       |
|------------------|-----------|----------------------------------------|---------------|
| `cssClassObject` | readonly  | `{ default: string; prefix: string; }` |               |
| `example`        |           | `string`                               | "medium"      |
| `text`           |           | `string`                               | "Hello World" |

## Slots

| Name | Description                                  |
|------|----------------------------------------------|
|      | Default slot, put whatever you want in here. |


# esds-dont

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property         | Attribute | Modifiers | Type                                             | Default | Description                                      |
|------------------|-----------|-----------|--------------------------------------------------|---------|--------------------------------------------------|
| `caption`        | `caption` |           | `string`                                         |         | The caption displayed with the visual            |
| `captionEyebrow` |           |           | `string`                                         | "Don't" |                                                  |
| `cssClassObject` |           | readonly  | `{ default: string; prefix: string; variant: { class: any; }; src: any; }` |         |                                                  |
| `src`            | `src`     |           | `string`                                         |         | If provided, uses esds-thumbnail to render an image |
| `variant`        | `variant` |           | `'do'\|'dont'`                                   | "dont"  | Visual style of the do don't item.               |

## Methods

| Method                  | Type                       |
|-------------------------|----------------------------|
| `renderExample`         | `(): TemplateResult`       |
| `renderImageFromSource` | `(): TemplateResult \| ""` |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
|           | Default slot, put whatever you want in here. |
| `content` | Insert content in the named "content" slot.  |
