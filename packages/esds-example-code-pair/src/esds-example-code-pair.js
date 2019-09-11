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
    const renderedExampleSlottedComponent = defaultSlot.querySelector(
      'esds-rendered-example',
    );

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
    const renderedExampleSlottedComponent = e.target.querySelector(
      'esds-rendered-example',
    );
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
            source: source,
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
      this.exampleSource ||
      this.source ||
      (this.sources && this.sources[0].source);
    this.defaultRenderedExample.exampleSource = exampleSource;

    return this.defaultRenderedExample;
  }

  render() {
    return html`
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

// API Examples
/*
  default slot, no rendered-example wrapper
  - extract contents and place inside rendered-example wrapper, set source for code snippet
 <esds-example-code-pair>
  // Bare code example passed here
 </esds-example-code-pair>

 named primary slot, in rendered-example wrappers
 - just render examples, extract source from primary
 <esds-example-code-pair>
   <esds-rendered-example slot="primary-example">
      // Rendered example here and extract primary source from within child component
   </esds-rendered-example>
 </esds-example-code-pair>

 named primary slot, additional default slot rendered-example wrappers
 - just render the examples, extract source from primary
 <esds-example-code-pair>
   <esds-rendered-example slot="primary-example">
      // Rendered example here and extract primary source from within child component
   </esds-rendered-example>
   <esds-rendered-example>
      // Just render the examples, do nothing to extract code snippet source
   </esds-rendered-example>
 </esds-example-code-pair>

Code snippet source priority:
1. sources prop
2. source prop
3. primary-example slot esds-rendered-example content
4. default slot, first esds-rendered-example content
5. default slot, all content if no esds-rendered-example exists

DerivedHTML code snippet source priority:
1. primary-example slot esds-rendered-example content
2. default slot, first esds-rendered-example content
3. default slot, all content if no esds-rendered-example exists
*/
