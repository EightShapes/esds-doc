import { EsdsBaseWc, html, unsafeHTML } from './esds-base-wc.js';
import { Prism, htmlBeautify, jsBeautify, cssBeautify } from './compiled-dependency-bundle-es6.js';
import EsdsButton from './esds-button.js';

class EsdsCodeSnippet extends EsdsBaseWc {
  static get properties() {
    return {
      codeCopiedText: {type: String, attribute: 'code-copied-text'},
      copyable: {type: Boolean},
      copyButtonText: {type: String, attribute: 'copy-button-text'},
      language: {type: String},
      preformatted: {type: Boolean},
      source: {type: String}
    }
  }

  constructor() {
    super();
    this.defaultClass = 'esds-code-snippet-v1';
    this.baseModifierClass = 'esds-code-snippet--';
    this.stylesheet = 'esds-code-snippet.css';
    this.defaultSource = '<h1>Hello World</h1>';

    // Default prop values
    this.codeCopiedText = 'Copied to clipboard';
    this.copyButtonText = 'Copy Code';
    this.copyable = true;
    this.source = this.defaultSource;
    this.language = 'markup';
    this.preformatted = false;
  }

  renderCopyButton() {
    let copyButton = html`<esds-button text="${this.copyButtonText}" size="small" variant="secondary"></esds-button>`;
    if (this.slots['copy-button']) {
      copyButton = this.slots['copy-button'];
    }

    if (this.copyable) {
      return html`
        <div class="esds-code-snippet__copy-code-wrap">
            <div class="esds-code-snippet__copied-notification">
                ${this.codeCopiedText}
            </div>
            ${copyButton}
        </div>
      `;
    } else {
      return '';
    }
  }

  render(){
    let blockLevelClass = this.defaultClass;

    let source = this.source;
    if (source === this.defaultSource && this.slots.default) {
     // rudamentary formatting
     source = this.slots.default.map((n) => {
      if (n.outerHTML) {
        return n.outerHTML;
      } else {
        console.log(n.textContent);
        let output = '';
        if (n.textContent.trim().length > 0) {
          output = n.textContent;
        }
        return output;
      }
    }).join('\n');
    }

    let language = this.language;
    if (language === 'html') {
     language = 'markup';
    }

    let formatter = htmlBeautify;
    switch(language) {
      case 'css':
        formatter = cssBeautify;
        break;
      case 'javascript':
        formatter = jsBeautify;
        break;
    }

    const formattedCode = this.preformatted ? source : formatter(source);
    const highlightedCode = Prism.highlight(formattedCode, Prism.languages[language], language);

    let filename = '';
    if (this.filename) {
      filename = html`<span class="esds-code-snippet__filename">${this.filename}</span>`;
    }

    return html`
      ${this.getStylesheet()}
      <div class="${blockLevelClass}">
        ${this.renderCopyButton()}
        <div class="esds-code-snippet__source">
          ${filename}
          <pre class="esds-code-snippet__pre"><code>${unsafeHTML(highlightedCode)}</code></pre>
        </div>
      </div>
    `;
  }
}

export default EsdsCodeSnippet;
