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

  static get defaultDerivedHtmlTab() {
    return this._defaultDerivedHtmlTab;
  }

  static set defaultDerivedHtmlTab(value) {
    this._defaultDerivedHtmlTab = value;
  }

  static get defaultLanguage() {
    return this._defaultLanguage;
  }

  static set defaultLanguage(value) {
    this._defaultLanguage = value;
  }

  static get properties() {
    return {
      derivedHtmlTab: { type: Boolean, attribute: 'derived-html-tab' },
      language: { type: String },
      source: { type: String },
    };
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

    if (!customElements.get(codeSnippetTagName)) {
      customElements.define(codeSnippetTagName, EsdsCodeSnippet);
    }

    if (!customElements.get(renderedExampleTagName)) {
      customElements.define(renderedExampleTagName, EsdsRenderedExample);
    }

    this.derivedHtmlTab = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  handleSlotSourceChange(e) {
    // See if the default slot contains anything
    const assignedContent = e.target.querySelector('s-assigned-wrapper');
    const language = this.language || this.constructor.defaultLanguage;
    this.codeSnippet = this.codeSnippet || new EsdsCodeSnippet(); // These instances will be aliased via the configuration in the constructor() - Rollup will ensure that the classes import'ed will be unique
    this.renderedExample = this.renderedExample || new EsdsRenderedExample(); // These instances will be aliased via the configuration in the constructor() - Rollup will ensure that the classes import'ed will be unique

    if (assignedContent && assignedContent.innerHTML) {
      this.codeSnippet.source = assignedContent.innerHTML;
      this.renderedExample.exampleSource = assignedContent.innerHTML;
    }

    if (this.source) {
      this.codeSnippet.source = this.source;
      this.codeSnippet.language = language;
    }

    if (
      (this.constructor.defaultDerivedHtmlTab || this.derivedHtmlTab) &&
      assignedContent &&
      assignedContent.innerHTML
    ) {
      this.codeSnippet.source = undefined;
      const sources = [
        {
          source: this.source,
          language: language,
        },
        {
          source: assignedContent.innerHTML,
          language: 'html',
        },
      ];

      this.codeSnippet.sources = sources;
    }

    this.requestUpdate();
    assignedContent.innerHTML = ''; // Clear out the assigned content so the fallback content can be shown
  }

  render() {
    return html`
      <div class="esds-example-code-pair-v1">
        <s-slot @slotchange=${this.handleSlotSourceChange}>
          ${this.renderedExample} ${this.codeSnippet}
        </s-slot>
      </div>
    `;
  }
}
