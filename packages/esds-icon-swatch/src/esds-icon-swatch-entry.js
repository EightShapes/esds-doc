import { EsdsIconSwatch } from './esds-icon-swatch.js';

if (window.customElements.get('esds-icon-swatch') === undefined) {
  window.customElements.define('esds-icon-swatch', EsdsIconSwatch);
}
