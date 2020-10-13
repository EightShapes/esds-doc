# ESDS Rendered Example
Install using npm:
```
npm install @eightshapes/esds-rendered-example
```

[Component Doc](./documentation/esds-rendered-example-docs.md)

## Outputs
The package contains:
* `/dist/esds-rendered-example-web-component.js`
ES6 compatible web component definition for `<esds-rendered-example>`.

  * `/dist/EsdsRenderedExample.js`
  ES6 module that exports an `EsdsRenderedExample` Lit Element class. Use to define your own custom element tag:
  ```js
  import { EsdsRenderedExample } from
  '@eightshapes/esds-rendered-example/dist/EsdsRenderedExample.js';
  customElements.define('aliased-rendered-example', EsdsRenderedExample);
  // Creates <aliased-rendered-example> tag
    ```

    ## Running the dev environment locally
    Refer to the [ESDS Component Readme](../README.md)