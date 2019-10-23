import { EsdsContrastGrid } from './esds-contrast-grid.js';

if (window.customElements.get('esds-contrast-grid') === undefined) {
  window.customElements.define('esds-contrast-grid', EsdsContrastGrid);
}
