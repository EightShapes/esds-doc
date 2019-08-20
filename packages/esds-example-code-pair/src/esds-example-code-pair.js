import { LitElement, html } from 'lit-element';
import { EsdsRenderedExample } from '@eightshapes/esds-rendered-example/src/esds-rendered-example.js';
import { EsdsCodeSnippet } from '@eightshapes/esds-code-snippet/src/esds-code-snippet.js';

export class EsdsExampleCodePair extends LitElement {
  constructor() {
    super();
    // Alias EsdsRenderedExample for usage within this component
    if (!window.customElements.get('esds-ecpair-rendered-example')) {
      window.customElements.define(
        'esds-ecpair-rendered-example',
        EsdsRenderedExample,
      );
    }
    // Alias EsdsCodeSnippet for usage within this component
    if (!window.customElements.get('esds-ecpair-code-snippet')) {
      window.customElements.define('esds-ecpair-code-snippet', EsdsCodeSnippet);
    }

    this.initialInnerHtml = this.initialInnerHtml || this.innerHTML;
  }

  get initialInnerHtml() {
    return this.getAttribute('data-initial-inner-html');
  }

  set initialInnerHtml(value) {
    this.updateComplete.then(() => {
      this.setAttribute('data-initial-inner-html', value);
      this.requestUpdate();
    });
  }

  render() {
    return html`
      <div class="esds-example-code-pair">
        <esds-ecpair-rendered-example label="namespace fo sho">
          ${this.initialInnerHtml}
        </esds-ecpair-rendered-example>
        <esds-ecpair-code-snippet source=${this.initialInnerHtml}></esds-ecpair-code-snippet>
      </div>
    `;
  }
}
