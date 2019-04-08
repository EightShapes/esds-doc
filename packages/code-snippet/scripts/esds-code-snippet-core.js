import { EsdsBaseWc, html, unsafeHTML } from '../node_modules/esds-base-wc/dist/esds-base-wc.js';
import { Prism, htmlBeautify, jsBeautify, cssBeautify } from './dependency-bundle-es6.js';
import EsdsButton from '../node_modules/esds-button/dist/esds-button.js';
import EsdsTabs, { EsdsTabPanel } from '../node_modules/esds-tabs/dist/esds-tabs.js';

class EsdsCodeSnippet extends EsdsBaseWc {
  static get properties() {
    return {
      codeCopiedText: {type: String, attribute: 'code-copied-text'},
      copyable: {type: String},
      copyButtonText: {type: String, attribute: 'copy-button-text'},
      filename: {type: String},
      language: {type: String},
      maxHeight: {type: String, attribute: 'max-height'},
      preformatted: {type: Boolean},
      source: {type: String},
      sources: {type: Array}
    }
  }

  constructor() {
    super();
    this.defaultClass = 'esds-code-snippet-v1';
    this.baseModifierClass = 'esds-code-snippet--';
    this.stylesheet = 'esds-code-snippet.css';
    this.defaultSource = '<h1>Hello World</h1>';

    // State
    this.codeCopied = false;

    // Default prop values
    this.codeCopiedText = 'Copied to clipboard';
    this.copyButtonText = 'Copy Code';
    this.copyable = 'true';
    this.source = this.defaultSource;
    this.language = 'markup';
    this.preformatted = false;
    this.slotContent = this.innerHTML.trim().length > 0 ? this.innerHTML.trim() : undefined;
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
    let copyButton = html`<esds-button size="small" variant="flat">${this.copyButtonText}</esds-button>`;

    if (this.copyable === 'true') {
      return html`
        <div class="esds-code-snippet__copy-code-wrap">
            <div class="esds-code-snippet__copied-notification">
                ${this.codeCopiedText}
            </div>
            <div @click=${this.copyCodeToClipboard} class="esds-code-snippet__copy-button-wrap">
              <slot name="copy-button">
                ${copyButton}
              </slot>
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
    let options = {}; // htmlbeautifier options go here, probably should be configurable

    switch(language) {
      case 'css':
        formatter = cssBeautify;
        options = {};
        break;
      case 'javascript':
        formatter = jsBeautify;
        options = {};
        break;
    }

    return this.preformatted ? source : formatter(source, options);
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

    return `
      <div class="esds-code-snippet__source">
        ${this.renderFilename(filename)}
        <pre class="esds-code-snippet__pre"><code>${source}</code></pre>
      </div>`;
  }

  renderFilename(filename) {
    if (filename) {
      return `<span class="esds-code-snippet__filename">${this.filename}</span>`
    } else {
      return '';
    }
  }

  cleanLitElementRenderingArtifacts(source) {
    // Given a string of HTML rendered from lit element, strip out the lit element bits and pieces
    const tmpWrapper = document.createElement('div');
    tmpWrapper.innerHTML = source.replace(/<\!---->/g, '').replace(/^\s*[\r\n]/gm, ''); // Strip lit-html comment placeholders & empty lines
    const linkTags = tmpWrapper.querySelectorAll('link');
    linkTags.forEach(l => l.parentNode.removeChild(l));

    const hostElements = Array.from(tmpWrapper.childNodes).filter(n => n.nodeType === Node.ELEMENT_NODE); // Get the hostElement which will contain the compiled/slotified component

    let cleanedHTML;
    if (hostElements.length > 1) {
      cleanedHTML = hostElements.reduce((string, he) => {
        return string.innerHTML + he.innerHTML;
      });
    } else {
      cleanedHTML = hostElements[0].innerHTML;
    }
    return cleanedHTML;
  }

  async renderCompiledHTMLSource(wcSource) {
    const compiledHTMLWrapper = document.createElement('div');
    compiledHTMLWrapper.style = 'display: none;';
    compiledHTMLWrapper.innerHTML = wcSource;
    document.body.appendChild(compiledHTMLWrapper);
    const components = Array.from(compiledHTMLWrapper.childNodes).filter(n => n.nodeType === Node.ELEMENT_NODE);
    const allComponenentsFinished = await Promise.all(components.map(async c => await c.updateComplete));

    this.sources = [
      {
        language: 'WC',
        source: this.source
      },
      {
        language: 'HTML',
        source: this.cleanLitElementRenderingArtifacts(compiledHTMLWrapper.innerHTML) // TODO: In the future may need a react/angular/vue cleaner too
      }
    ];

    // Remove the tmpWrapper
    compiledHTMLWrapper.parentNode.removeChild(compiledHTMLWrapper);
  }

  firstUpdated() {
    if (this.language === 'wc-html') {
      this.renderCompiledHTMLSource(this.source);
    }
  }

  render() {
    let blockLevelClass = this.defaultClass;
    if (this.codeCopied) {
      blockLevelClass += ` ${this.baseModifierClass}show-copied-notification`;
    }

    if (this.maxHeight) {
      blockLevelClass += ` ${this.baseModifierClass}max-height-${this.maxHeight}`;
    }

    let sources = this.sources;

    // Check for wc-html language trigger
    if (this.language === 'wc-html' && !this.sources) {
      this.source = this.slotContent ? this.slotContent : this.source;

      sources = [
        {
          language: 'WC',
          source: this.source
        }
      ];
    }

    let output;

    if (sources) {
      let codeSnippets = [];

      sources.forEach((s) => {
        codeSnippets.push(`
          <esds-tab-panel label="${s.language}">
            ${this.renderCodeSnippet(s.source, s.language, s.filename)}
          </esds-tab-panel>
        `);
      });

      output = `<esds-tabs>${codeSnippets}</esds-tabs>`;
    } else {
      // Just a single snippet to render, no tabs
      const language = this.language === 'html' ? 'markup' : this.language;
      let source = this.source;
      if (source === this.defaultSource && this.slotContent) {
        source = this.slotContent;
      }
      output = this.renderCodeSnippet(source, language, this.filename);
    }

    return html`
      ${this.getStylesheet()}
      <div class="${blockLevelClass}">
        ${this.renderCopyButton()}
        ${unsafeHTML(output)}
      </div>
    `;
  }
}

export default EsdsCodeSnippet;
