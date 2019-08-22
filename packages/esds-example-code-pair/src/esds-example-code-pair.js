import { LitElement, html } from 'lit-element';
import { EsdsRenderedExample } from '@eightshapes/esds-rendered-example/src/esds-rendered-example.js';
import { EsdsCodeSnippet } from '@eightshapes/esds-code-snippet/src/esds-code-snippet.js';
import { Slotify } from '@eightshapes/slotify';

export class EsdsExampleCodePair extends Slotify(LitElement) {
  static get properties() {
    return {
      // vueAppName: { type: String, attribute: 'vue-app-name' },
    };
  }
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

  }

  connectedCallback() {
    super.connectedCallback();
    this.initialInnerHtml = this.initialInnerHtml || this.innerHTML;
  }

  get initialInnerHtml() {
    return this.getAttribute('data-initial-inner-html');
  }

  set initialInnerHtml(value) {
    this.setAttribute('data-initial-inner-html', value);
  }

  handleSlotSourceChange(e) {
    // See if the default slot contains anything
    const assignedContent = e.target.querySelector('s-assigned-wrapper');
    if (assignedContent && assignedContent.innerHTML) {
      console.log(assignedContent.innerHTML);
      // If so, copy the contents to the internal RenderedExample and CodeSnippet components
      this.renderedExample = new EsdsRenderedExample();
      this.renderedExample.exampleSource = assignedContent.innerHTML;

      this.codeSnippet = new EsdsCodeSnippet();
      this.codeSnippet.source = assignedContent.innerHTML;

      this.requestUpdate();
      assignedContent.innerHTML = ''; // Clear out the assigned content so the fallback content can be shown
    }
  }

  render() {
    return html`
      <div class="esds-example-code-pair">
        <s-slot @slotchange=${this.handleSlotSourceChange}>${this.renderedExample} ${this.codeSnippet}</s-slot>
      </div>
    `;
  }
}
