# ESDS Code Snippet
Install using npm:
```
npm install @eightshapes/esds-code-snippet
```

[Component Doc](./documentation/esds-code-snippet-docs.md)

## Outputs
The package contains:
* `/dist/esds-code-snippet-web-component.js`
ES6 compatible web component definition for `<esds-code-snippet>`.

  * `/dist/EsdsCodeSnippet.js`
  ES6 module that exports an `EsdsCodeSnippet` Lit Element class. Use to define your own custom element tag:
  ```js
  import { EsdsCodeSnippet } from
  '@eightshapes/esds-code-snippet/dist/EsdsCodeSnippet.js';
  customElements.define('aliased-code-snippet', EsdsCodeSnippet);
  // Creates <aliased-code-snippet> tag
    ```

    ## Running the dev environment locally
    Refer to the [ESDS Component Readme](../README.md)