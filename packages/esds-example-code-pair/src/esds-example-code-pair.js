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

    this.codeSnippetSrc = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.initialInnerHtml = this.initialInnerHtml || this.innerHTML;
    this.renderedExample = new EsdsRenderedExample();
    this.renderedExample.exampleSource = this.initialInnerHtml;
    console.log(this.initialInnerHtml);

    this.codeSnippet = new EsdsCodeSnippet();

    this.renderedExample.updateComplete.then(() => {
      this.codeSnippet.source = this.renderedExample.renderedHtml;
    });
  }

  createRenderRoot() {
    return this;
  }

  get initialInnerHtml() {
    return this.getAttribute('data-initial-inner-html');
  }

  set initialInnerHtml(value) {
    this.setAttribute('data-initial-inner-html', value);
  }

  render() {
    return html`
      <div class="esds-example-code-pair">
        ${this.renderedExample} ${this.codeSnippet}
      </div>
    `;
  }
}
