import { EsdsCodeSnippet } from './esds-code-snippet.js';

if (window.customElements.get('esds-code-snippet') === undefined) {
  window.customElements.define('esds-code-snippet', EsdsCodeSnippet);
}
