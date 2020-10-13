# ESDS Example Code Pair
Install using npm:
```
npm install @eightshapes/esds-example-code-pair
```

[Component Doc](./documentation/esds-example-code-pair-docs.md)

## Outputs
The package contains:
* `/dist/esds-example-code-pair-web-component.js`
ES6 compatible web component definition for `<esds-example-code-pair>`.

  * `/dist/EsdsExampleCodePair.js`
  ES6 module that exports an `EsdsExampleCodePair` Lit Element class. Use to define your own custom element tag:
  ```js
  import { EsdsExampleCodePair } from
  '@eightshapes/esds-example-code-pair/dist/EsdsExampleCodePair.js';
  customElements.define('aliased-example-code-pair', EsdsExampleCodePair);
  // Creates <aliased-example-code-pair> tag
    ```

    ## Running the dev environment locally
    Refer to the [ESDS Component Readme](../README.md)