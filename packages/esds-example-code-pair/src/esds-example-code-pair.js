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

  static get dependencyAliases() {
    return this._dependencyAliases;
  }

  static set dependencyAliases(value) {
    this._dependencyAliases = value;
  }

  constructor() {
    super();
    if (this.constructor.codeSnippetCopyButton) {
      EsdsCodeSnippet.copyButton = this.constructor.codeSnippetCopyButton;
    }

    let codeSnippetTagName = 'ecpair-code-snippet';
    let renderedExampleTagName = 'ecpair-rednered-example';
    if (this.constructor.dependencyAliases) {
      codeSnippetTagName = this.constructor.dependencyAliases.codeSnippet;
      renderedExampleTagName = this.constructor.dependencyAliases.renderedExample;
    }

    customElements.define(codeSnippetTagName, EsdsCodeSnippet);
    customElements.define(renderedExampleTagName, EsdsRenderedExample);
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
      this.renderedExample = new EsdsRenderedExample();
      this.codeSnippet = new EsdsCodeSnippet();

      this.codeSnippet.source = assignedContent.innerHTML;
      this.renderedExample.exampleSource = assignedContent.innerHTML;
      this.requestUpdate();
      assignedContent.innerHTML = ''; // Clear out the assigned content so the fallback content can be shown
    }
  }

  render() {
    return html`
      <div class="esds-example-code-pair">
        <s-slot @slotchange=${this.handleSlotSourceChange}>
          ${this.renderedExample}
          ${this.codeSnippet}
        </s-slot>
      </div>
    `;
  }
}
