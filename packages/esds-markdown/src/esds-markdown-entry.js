import { EsdsMarkdown } from './esds-markdown.js';

if (window.customElements.get('esds-markdown') === undefined) {
  window.customElements.define('esds-markdown', EsdsMarkdown);
}
