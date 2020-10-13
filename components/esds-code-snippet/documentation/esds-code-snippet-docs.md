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

| Method                              | Type                                             |
|-------------------------------------|--------------------------------------------------|
| `beautifySource`                    | `(source: any, language: any): any`              |
| `cleanLitElementRenderingArtifacts` | `(source: any): any`                             |
| `cleanShadyDomRenderingArtifacts`   | `(source: any): any`                             |
| `cleanVueRenderingArtifacts`        | `(source: any): any`                             |
| `copyCodeToClipboard`               | `(): void`                                       |
| `formatSource`                      | `(source: any, language: any, preformatted: any): any` |
| `handleSlotSourceChange`            | `(e: any): void`                                 |
| `handleTabClick`                    | `(e: any): void`                                 |
| `highlightSource`                   | `(source: any, language: any): any`              |
| `linkPanels`                        | `(): void`                                       |
| `renderCodeSnippet`                 | `(sourceObject: any): TemplateResult`            |
| `renderCopyButton`                  | `(): "" \| TemplateResult`                       |
| `renderFilename`                    | `(filename: any): string`                        |
| `renderToolbar`                     | `(): string`                                     |
| `resetTabs`                         | `(): void`                                       |
| `selectTab`                         | `(tabId: any): void`                             |
| `showCopiedMessage`                 | `(): void`                                       |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
|           | Default slot, put whatever you want in here. |
| `content` | Insert content in the named "content" slot.  |
