import { EsdsTintSwatch } from './esds-tint-swatch.js';

if (window.customElements.get('esds-tint-swatch') === undefined) {
  window.customElements.define('esds-tint-swatch', EsdsTintSwatch);
}
