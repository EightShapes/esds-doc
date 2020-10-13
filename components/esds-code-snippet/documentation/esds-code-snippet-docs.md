# esds-code-snippet

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property            | Attribute          | Modifiers | Type      | Default                |
|---------------------|--------------------|-----------|-----------|------------------------|
| `allTabPanels`      |                    | readonly  |           |                        |
| `allTabs`           |                    | readonly  |           |                        |
| `baseModifierClass` |                    |           | `string`  | "esds-code-snippet--"  |
| `codeCopied`        |                    |           | `boolean` | false                  |
| `codeCopiedText`    | `code-copied-text` |           | `string`  | "Copied to clipboard"  |
| `copyButtonText`    | `copy-button-text` |           | `string`  | "Copy Code"            |
| `copyable`          | `copyable`         |           | `string`  | "true"                 |
| `defaultClass`      |                    |           | `string`  | "esds-code-snippet"    |
| `defaultSource`     |                    |           | `string`  | "<h1>Hello World</h1>" |
| `filename`          | `filename`         |           | `string`  |                        |
| `language`          | `language`         |           | `string`  | "markup"               |
| `maxHeight`         | `max-height`       |           | `string`  |                        |
| `preformatted`      | `preformatted`     |           | `boolean` | false                  |
| `source`            | `source`           |           | `string`  | ""                     |
| `sources`           | `sources`          |           | `array`   |                        |
| `tabPanels`         |                    |           | `never[]` | []                     |
| `tabs`              |                    |           | `never[]` | []                     |
| `toolbarLinks`      | `toolbar-links`    |           | `array`   |                        |

## Methods

| Method                   | Type                                             |
|--------------------------|--------------------------------------------------|
| `copyCodeToClipboard`    | `(): void`                                       |
| `formatSource`           | `(source: any, language: any, preformatted: any): any` |
| `handleSlotSourceChange` | `(e: any): void`                                 |
| `renderCodeSnippet`      | `(sourceObject: any): TemplateResult`            |
| `renderCopyButton`       | `(): TemplateResult \| ""`                       |
| `renderFilename`         | `(filename: any): string`                        |
| `renderFooterLinks`      | `(): TemplateResult`                             |
| `renderToolbar`          | `(): string`                                     |
| `showCopiedMessage`      | `(): void`                                       |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
|           | Default slot, put whatever you want in here. |
| `content` | Insert content in the named "content" slot.  |
