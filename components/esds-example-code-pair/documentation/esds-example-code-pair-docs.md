# esds-example-code-pair

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property                | Attribute          | Modifiers | Type                                             | Default             |
|-------------------------|--------------------|-----------|--------------------------------------------------|---------------------|
| `codeHiddenToggleIcon`  |                    |           |                                                  | "EsdsIconCaretDown" |
| `codeVisibleToggleIcon` |                    |           |                                                  | "EsdsIconCaretUp"   |
| `cssClassObject`        |                    | readonly  | `{ default: string; prefix: string; hiddenCode: { class: string; conditional: boolean; }; }` |                     |
| `derivedHtmlTab`        | `derived-html-tab` |           | `boolean`                                        | false               |
| `exampleSource`         |                    |           | `boolean`                                        | false               |
| `hiddenCode`            | `hidden-code`      |           | `boolean`                                        | false               |
| `language`              | `language`         |           | `string`                                         |                     |
| `noCodeToggle`          | `no-code-toggle`   |           | `boolean`                                        | false               |
| `preformatted`          | `preformatted`     |           | `boolean`                                        | false               |
| `primaryExampleSource`  |                    |           | `boolean`                                        | false               |
| `source`                | `source`           |           | `string`                                         |                     |
| `sources`               | `sources`          |           | `array`                                          |                     |

## Methods

| Method                           | Type                 |
|----------------------------------|----------------------|
| `handleCodeToggleClick`          | `(): void`           |
| `handleExampleSlotChange`        | `(e: any): void`     |
| `handlePrimaryExampleSlotChange` | `(e: any): void`     |
| `renderCodeSnippet`              | `(): any`            |
| `renderExample`                  | `(): any`            |
| `renderFooter`                   | `(): TemplateResult` |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
|           | Default slot, put whatever you want in here. |
| `content` | Insert content in the named "content" slot.  |
