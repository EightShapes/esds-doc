# ESDS Do Dont
Install using npm:
```
npm install @eightshapes/esds-do-dont
```

[Component Doc](./documentation/esds-do-dont-docs.md)

## Outputs
The package contains:
* `/dist/esds-do-dont-web-component.js`
ES6 compatible web component definition for `<esds-do-dont>`.

  * `/dist/EsdsDoDont.js`
  ES6 module that exports an `EsdsDoDont` Lit Element class. Use to define your own custom element tag:
  ```js
  import { EsdsDoDont } from
  '@eightshapes/esds-do-dont/dist/EsdsDoDont.js';
  customElements.define('aliased-do-dont', EsdsDoDont);
  // Creates <aliased-do-dont> tag
    ```

    ## Running the dev environment locally
    Refer to the [ESDS Component Readme](../README.md)