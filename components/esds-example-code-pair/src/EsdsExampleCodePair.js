import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import { EsdsCodeSnippet } from '@eightshapes/esds-code-snippet/dist/EsdsCodeSnippet.js';
import { EsdsRenderedExample } from '@eightshapes/esds-rendered-example/dist/EsdsRenderedExample.js';
import { namespacedStyles } from './esds-example-code-pair-styles.js';

/**
 * @element esds-example-code-pair
 *
 * @slot - Default slot, put whatever you want in here.
 * @slot content - Insert content in the named "content" slot.
 *
 */

export class EsdsExampleCodePair extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'example-code-pair';
  }

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
      sources: { type: Array },
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

    // Initial Prop Values
    this.derivedHtmlTab = false;

    // Initial State Variables
    this.primaryExampleSource = false;
    this.exampleSource = false;
  }

  connectedCallback() {
    super.connectedCallback();

    // Set up child components here after component is connected
    this.codeSnippet = new EsdsCodeSnippet();
    this.defaultRenderedExample = new EsdsRenderedExample();
  }

  handleExampleSlotChange(e) {
    // Does the slot contain an esds-rendered-example component?
    const defaultSlot = e.target;
    const renderedExampleSlottedComponent = defaultSlot.querySelector('esds-rendered-example');

    if (!this.exampleSource) {
      // Don't run again if exampleSource has already been set
      if (!renderedExampleSlottedComponent) {
        // If not, wrap it in an <esds-rendered-example> component
        // No child <esds-rendered-example> has been used. Grab all the contents and append them to the defaultExampleCodePair
        const assignedContent = Array.from(e.target.childNodes).find(
          n => n.tagName.toLowerCase() === 's-assigned-wrapper',
        );
        if (assignedContent && assignedContent.innerHTML.trim().length > 0) {
          this.exampleSource = assignedContent.innerHTML; // Store for retrieval by code snippet & defaultExampleCodePair
          // Clear the assignedContent so the fallback content (the defaultRenderedExample) will be displayed
          assignedContent.innerHTML = '';
          this.requestUpdate();
        }
      } else if (renderedExampleSlottedComponent) {
        // If so, extract the source from it to be referenced by code snippet
        this.exampleSource = renderedExampleSlottedComponent.source;
        this.requestUpdate();
      }
    }
  }

  handlePrimaryExampleSlotChange(e) {
    const renderedExampleSlottedComponent = e.target.querySelector('esds-rendered-example');
    if (renderedExampleSlottedComponent && !this.primaryExampleSource) {
      this.primaryExampleSource = renderedExampleSlottedComponent.source;
      this.requestUpdate();
    }
  }

  renderCodeSnippet() {
    const derivedSource = this.primaryExampleSource || this.exampleSource; // Pull source code from the <slot>'s
    const source = this.source || derivedSource;

    if (this.sources) {
      this.codeSnippet.sources = this.sources;
    } else {
      this.codeSnippet.source = source;
    }

    // If an 'HTML' code tab should automatically be created, determine where that code should come from
    if (this.constructor.defaultDerivedHtmlTab || this.derivedHtmlTab) {
      if (this.sources && derivedSource) {
        this.sources.push({
          source: derivedSource,
          language: 'html',
        });
      } else if (source && derivedSource) {
        this.sources = [
          {
            source,
            language: this.constructor.defaultLanguage || this.language,
          },
          {
            source: derivedSource,
            language: 'html',
          },
        ];
        this.codeSnippet.source = false;
      }

      this.codeSnippet.sources = this.sources;
    }

    return this.codeSnippet;
  }

  renderExample() {
    const exampleSource =
      this.exampleSource || this.source || (this.sources && this.sources[0].source);
    this.defaultRenderedExample.exampleSource = exampleSource;

    return this.defaultRenderedExample;
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <div class="esds-example-code-pair">
        <s-slot
          @slotchange="${this.handlePrimaryExampleSlotChange}"
          name="primary-example"
        ></s-slot>
        <s-slot @slotchange="${this.handleExampleSlotChange}">
          ${this.renderExample()}
        </s-slot>
        ${this.renderCodeSnippet()}
      </div>
    `;
  }
}
