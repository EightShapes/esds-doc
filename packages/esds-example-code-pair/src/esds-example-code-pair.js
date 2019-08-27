import { LitElement, html } from 'lit-element';
import { EsdsRenderedExample } from '@eightshapes/esds-rendered-example/dist/esds-rendered-example.js';
import { EsdsCodeSnippet } from '@eightshapes/esds-code-snippet/dist/esds-code-snippet.js';
import { Slotify } from '@eightshapes/slotify';

export class EsdsExampleCodePair extends Slotify(LitElement) {
  static get codeSnippetCopyButton() {
    return this._codeSnippetCopyButton;
  }

  static set codeSnippetCopyButton(value) {
    this._codeSnippetCopyButton = value;
  }

  static get codeSnippetTagName() {
    return this._codeSnippetTagName;
  }

  static set codeSnippetTagName(value) {
    this._codeSnippetTagName = value;
  }

  static get renderedExampleTagName() {
    return this._renderedExampleTagName;
  }

  static set renderedExampleTagName(value) {
    this._renderedExampleTagName = value;
  }

  constructor() {
    super();
    if (this.constructor.codeSnippetCopyButton) {
      EsdsCodeSnippet.copyButton = this.constructor.codeSnippetCopyButton;
    }

    let codeSnippetTagName = 'esds-example-code-pair-code-snippet';
    let renderedExampleTagName = 'esds-example-code-pair-rendered-example';
    if (this.constructor.codeSnippetTagName) {
      codeSnippetTagName = this.constructor.codeSnippetTagName;
    }
    if (this.constructor.renderedExampleTagName) {
      renderedExampleTagName = this.constructor.renderedExampleTagName;
    }

    if (!customElements.get(codeSnippetTagName)){
      customElements.define(codeSnippetTagName, EsdsCodeSnippet);
    }

    if (!customElements.get(renderedExampleTagName)){
      customElements.define(renderedExampleTagName, EsdsRenderedExample);
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  handleSlotSourceChange(e) {
    // See if the default slot contains anything
    const assignedContent = e.target.querySelector('s-assigned-wrapper');
    if (assignedContent && assignedContent.innerHTML) {
      this.renderedExample = this.renderedExample || new EsdsRenderedExample(); // These instances will be aliased via the configuration in the constructor() - Rollup will ensure that the classes import'ed will be unique
      this.codeSnippet = this.codeSnippet || new EsdsCodeSnippet(); // These instances will be aliased via the configuration in the constructor() - Rollup will ensure that the classes import'ed will be unique

      this.codeSnippet.source = assignedContent.innerHTML;
      this.renderedExample.exampleSource = assignedContent.innerHTML;
      this.requestUpdate();
      assignedContent.innerHTML = ''; // Clear out the assigned content so the fallback content can be shown
    }
  }

  handleExampleSlotSourceChange(e) {
    const slottedExamples = Array.from(this.querySelectorAll('div[slot="example"]'));
    if (slottedExamples.length > 0) {
      const sources = slottedExamples.map(node => {
        return {
          source: node.getAttribute('data-source') || node.innerHTML,
          language: node.getAttribute('data-language') || 'html',
          preformatted: node.getAttribute('data-preformatted') || false
        }
      });

      this.codeSnippet = this.codeSnippet || new EsdsCodeSnippet();
      this.codeSnippet.sources = sources;

      const renderedMarkupExample = this.querySelector('div[slot="example"][data-rendered]');
      let renderedMarkup = sources[0].source;
      if (renderedMarkupExample) {
        renderedMarkup = renderedMarkupExample.innerHTML;
      }
      this.renderedExample = this.renderedExample || new EsdsRenderedExample();
      this.renderedExample.exampleSource = renderedMarkup;
      this.requestUpdate();

      const assignedExampleSlotContent = this.querySelector('s-slot[name="example"] s-assigned-wrapper');
      assignedExampleSlotContent.innerHTML = ''; // Clear out the assigned content so the fallback content can be shown
    }
  }

  render() {
    return html`
      <div class="esds-example-code-pair-v1">
        <s-slot @slotchange=${this.handleSlotSourceChange}>
          ${this.renderedExample}
          ${this.codeSnippet}
        </s-slot>
        <s-slot name="example" @slotchange=${this.handleExampleSlotSourceChange}>
        </s-slot>
      </div>
    `;
  }
}
