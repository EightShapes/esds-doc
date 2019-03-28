import { EsdsBaseWc, html, unsafeHTML } from './esds-base-wc.js';
import { Prism, htmlBeautify, jsBeautify, cssBeautify } from './compiled-dependency-bundle-es6.js';
import EsdsButton from './esds-button.js';
import EsdsTabs, { EsdsTabPanel } from './esds-tabs.js';

class EsdsCodeSnippet extends EsdsBaseWc {
  static get properties() {
    return {
      codeCopiedText: {type: String, attribute: 'code-copied-text'},
      copyable: {type: String},
      copyButtonText: {type: String, attribute: 'copy-button-text'},
      filename: {type: String},
      language: {type: String},
      preformatted: {type: Boolean},
      source: {type: String},
      sources: {type: Array}
    }
  }

  constructor() {
    super("CODE SNIPPET");
    this.defaultClass = 'esds-code-snippet-v1';
    this.baseModifierClass = 'esds-code-snippet--';
    this.stylesheet = 'esds-code-snippet.css';
    this.defaultSource = '<h1>Hello World</h1>';

    // State
    this.codeCopied = false;

    // Default prop values
    this.codeCopiedText = 'Copied to clipboard';
    this.copyButtonText = 'Copy Code';
    this.copyable = true;
    this.source = this.defaultSource;
    this.language = 'markup';
    this.preformatted = false;
  }

  showCopiedMessage() {
    this.codeCopied = true;
    this.requestUpdate();
  }

  copyCodeToClipboard() {
    const source = this.querySelector('.esds-code-snippet__pre code');
    const textarea = document.createElement('textarea');
    textarea.style.height = '0';
    textarea.style.width = '0';
    textarea.style.position = 'absolute';
    textarea.style.left = '-99999px';
    this.appendChild(textarea);

    textarea.textContent = source.textContent;
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        this.showCopiedMessage();
      } else {
        // triggerCopyErrorEvent();
      }
    } catch (err) {
        // triggerCopyNotSupportedEvent(snippet);
    }

    this.removeChild(textarea);
  }

  renderCopyButton() {
    // Not sure why I had to use unsafeHTML here and not the html`` template literal. Without it the ${this.copyButtonText} slot content is getting lost somewhere
    let copyButton = unsafeHTML(`<esds-button size="small" variant="secondary">${this.copyButtonText}</esds-button>`);
    if (this.slots['copy-button']) {
      copyButton = this.slots['copy-button'];
    }

    if (this.copyable === 'true') {
      return html`
        <div class="esds-code-snippet__copy-code-wrap">
            <div class="esds-code-snippet__copied-notification">
                ${this.codeCopiedText}
            </div>
            <div @click=${this.copyCodeToClipboard} class="esds-code-snippet__copy-button-wrap">
              ${copyButton}
            </div>
        </div>
      `;
    } else {
      return '';
    }
  }

  parseSlottedSource(slottedSource) {
    // rudamentary formatting
    return slottedSource.map((n) => {
      n = n.cloneNode(true); // Needed to prevent web component snippets from rendering on subsequent updates
      if (n.outerHTML) {
        return n.outerHTML;
      } else {
        let output = '';
        if (n.textContent.trim().length > 0) {
          output = n.textContent;
        }
        return output;
       }
     }).join('\n');
  }

  beautifySource(source, language) {
    let formatter = htmlBeautify;
    switch(language) {
      case 'css':
        formatter = cssBeautify;
        break;
      case 'javascript':
        formatter = jsBeautify;
        break;
    }

    return this.preformatted ? source : formatter(source);
  }

  highlightSource(source, language) {
    if (language.toLowerCase() === 'html' || language.toLowerCase() === 'wc') {
      language = 'markup';
    }
    return Prism.highlight(source, Prism.languages[language], language)
  }

  formatSource(source, language) {
    const beautifiedSource = this.beautifySource(source, language);
    return this.highlightSource(beautifiedSource, language);
  }

  renderCodeSnippet(source, language, filename) {
    source = this.formatSource(source, language);

    // return html`
    //   <div class="esds-code-snippet__source">
    //     ${this.renderFilename(filename)}
    //     <pre class="esds-code-snippet__pre"><code>${unsafeHTML(source)}</code></pre>
    //   </div>`;
    return html`<h1>Something</h1>`;
  }

  renderFilename(filename) {
    if (filename) {
      return html`<span class="esds-code-snippet__filename">${this.filename}</span>`
    } else {
      return '';
    }
  }

  render(){
    let blockLevelClass = this.defaultClass;
    if (this.codeCopied) {
      blockLevelClass += ` ${this.baseModifierClass}show-copied-notification`;
    }

    let output;

    if (this.sources) {
      let codeSnippets = [];

      this.sources.forEach((s) => {
        codeSnippets.push(html`
          <esds-tab-panel label="${s.language}" panel-id="${s.language}">
            <h1>Testing</h1>
          </esds-tab-panel>
        `);
      });

      output = html`<esds-tabs>${this.sources.map((s) => html`<esds-tab-panel label="${s.language}"><h2>Foo</h2></esds-tab-panel>`)}</esds-tabs>`;
    } else {
      // Just a single snippet to render, no tabs
      const language = this.language === 'html' ? 'markup' : this.language;
      let source = this.source;
      if (source === this.defaultSource && this.slots.default) {
        source = this.parseSlottedSource(this.slots.default);
      }
      output = this.renderCodeSnippet(source, language, this.filename);
    }

    console.log(output);

    return html`
      ${this.getStylesheet()}
      <div class="${blockLevelClass}">
        ${this.renderCopyButton()}
        ${output}
      </div>
    `;
  }
}

export default EsdsCodeSnippet;
