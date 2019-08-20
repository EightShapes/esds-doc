import { EsdsRenderedExample } from './esds-rendered-example.js';

if (window.customElements.get('esds-rendered-example') === undefined) {
  window.customElements.define('esds-rendered-example', EsdsRenderedExample);
}
