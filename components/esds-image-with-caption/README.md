# ESDS Image With Caption
Install using npm:
```
npm install @eightshapes/esds-image-with-caption
```

[Component Doc](./documentation/esds-image-with-caption-docs.md)

## Outputs
The package contains:
* `/dist/esds-image-with-caption-web-component.js`
ES6 compatible web component definition for `<esds-image-with-caption>`.

  * `/dist/EsdsImageWithCaption.js`
  ES6 module that exports an `EsdsImageWithCaption` Lit Element class. Use to define your own custom element tag:
  ```js
  import { EsdsImageWithCaption } from
  '@eightshapes/esds-image-with-caption/dist/EsdsImageWithCaption.js';
  customElements.define('aliased-image-with-caption', EsdsImageWithCaption);
  // Creates <aliased-image-with-caption> tag
    ```

    ## Running the dev environment locally
    Refer to the [ESDS Component Readme](../README.md)