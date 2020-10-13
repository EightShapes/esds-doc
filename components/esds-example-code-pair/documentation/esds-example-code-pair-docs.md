# esds-example-code-pair

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property               | Attribute          | Type      | Default |
|------------------------|--------------------|-----------|---------|
| `derivedHtmlTab`       | `derived-html-tab` | `boolean` | false   |
| `exampleSource`        |                    | `boolean` | false   |
| `language`             | `language`         | `string`  |         |
| `primaryExampleSource` |                    | `boolean` | false   |
| `source`               | `source`           | `string`  |         |
| `sources`              | `sources`          | `array`   |         |

## Methods

| Method                           | Type             |
|----------------------------------|------------------|
| `handleExampleSlotChange`        | `(e: any): void` |
| `handlePrimaryExampleSlotChange` | `(e: any): void` |
| `renderCodeSnippet`              | `(): any`        |
| `renderExample`                  | `(): any`        |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
|           | Default slot, put whatever you want in here. |
| `content` | Insert content in the named "content" slot.  |
