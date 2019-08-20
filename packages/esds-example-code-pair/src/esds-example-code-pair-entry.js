import { EsdsExampleCodePair } from './esds-example-code-pair.js';

if (window.customElements.get('esds-example-code-pair') === undefined) {
  window.customElements.define('esds-example-code-pair', EsdsExampleCodePair);
}
