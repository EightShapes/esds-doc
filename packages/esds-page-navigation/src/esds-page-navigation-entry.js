import { EsdsPageNavigation } from './esds-page-navigation.js';

if (window.customElements.get('esds-page-navigation') === undefined) {
  window.customElements.define('esds-page-navigation', EsdsPageNavigation);
}
