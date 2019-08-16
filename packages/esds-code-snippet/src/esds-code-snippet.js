import Prism from 'prismjs';
import {
  js as jsBeautify,
  css as cssBeautify,
  html as htmlBeautify,
} from 'js-beautify/js/src/index.js';
import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export class EsdsCodeSnippet extends LitElement {
  static get properties() {
    return {
      codeCopiedText: { type: String, attribute: 'code-copied-text' },
      copyable: { type: String },
      copyButtonText: { type: String, attribute: 'copy-button-text' },
      filename: { type: String },
      language: { type: String },
      maxHeight: { type: String, attribute: 'max-height' },
      preformatted: { type: Boolean },
      toolbarLinks: { type: Array, attribute: 'toolbar-links' }, // TODO: Something with this prop to test it
      source: { type: String },
      sources: { type: Array },
    };
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
    this.iihtml = this.iihtml || this.innerHTML;
  }

  connectedCallback() {
    super.connectedCallback();
    // Stash the initial innerHTML in the actual DOM element in case the constructor gets called multiple times (like when running the Nuxt framework)
    if (!this.getAttribute('data-initial-inner-html')) {
      this.setAttribute('data-initial-inner-html', this.innerHTML);
    }

    this.slotContent =
      this.initialInnerHtml.trim().length > 0
        ? this.initialInnerHtml.trim()
        : undefined;
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    if (this.language === 'wc-html') {
      this.renderCompiledHTMLSource(this.source);
    }
  }

  get initialInnerHtml() {
    return this.getAttribute('data-initial-inner-html');
  }

  beautifySource(source, language) {
    let formatter = htmlBeautify;
    let options = {}; // htmlbeautifier options go here, probably should be configurable

    switch (language) {
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

  cleanLitElementRenderingArtifacts(source) {
    // Given a string of HTML rendered from lit element, strip out the lit element bits and pieces
    const tmpWrapper = document.createElement('div');
    tmpWrapper.innerHTML = source
      .replace(/<!---->/g, '')
      .replace(/^\s*[\r\n]/gm, ''); // Strip lit-html comment placeholders & empty lines
    const linkTags = tmpWrapper.querySelectorAll('link');
    linkTags.forEach(l => l.parentNode.removeChild(l));

    const hostElements = Array.from(tmpWrapper.childNodes).filter(
      n => n.nodeType === Node.ELEMENT_NODE,
    ); // Get the hostElement which will contain the compiled/slotified component
    const scopedStyleElements = tmpWrapper.querySelectorAll('.style-scope');
    scopedStyleElements.forEach(e => e.classList.remove('style-scope'));

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

  cleanVueRenderingArtifacts(source) {
    // Given a string of HTML rendered from vue, strip out the vue bits and pieces
    console.log(source);
    return source.replace(/data-v-.[A-Za-z0-9]*=.*?"[^"]*"/gm, ''); // Strip Vue data attributes;
  }

  copyCodeToClipboard() {
    const hasTabs = this.querySelector('esds-tabs');
    let source = this.querySelector('.esds-code-snippet__pre code');
    if (hasTabs) {
      source = this.querySelector('esds-tabs')
        .querySelector('esds-tab-panel[active]')
        .querySelector('.esds-code-snippet__pre code');
    }
    const textarea = document.createElement('textarea');
    textarea.style.height = '0';
    textarea.style.width = '0';
    textarea.style.position = 'absolute';
    textarea.style.left = '-99999px';
    document.body.appendChild(textarea);

    textarea.textContent = source.textContent;
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        this.showCopiedMessage();
      } else {
        console.log('COULDNT COPY');
        // triggerCopyErrorEvent();
      }
    } catch (err) {
      console.log('COPY NOT SUPPORTED');
      // triggerCopyNotSupportedEvent(snippet);
    }

    document.body.removeChild(textarea);
  }

  formatSource(source, language) {
    const beautifiedSource = this.beautifySource(source, language);
    return this.highlightSource(beautifiedSource, language);
  }

  highlightSource(source, language) {
    if (language.toLowerCase() === 'html' || language.toLowerCase() === 'wc') {
      language = 'markup';
    }
    return Prism.highlight(source, Prism.languages[language], language);
  }

  parseSlottedSource(slottedSource) {
    // rudamentary formatting
    return slottedSource
      .map(n => {
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
      })
      .join('\n');
  }

  showCopiedMessage() {
    this.codeCopied = true;
    this.requestUpdate();
  }

  renderCodeSnippet(source, language, filename) {
    source = this.formatSource(
      this.cleanVueRenderingArtifacts(source),
      language,
    );

    return `
      <div class="esds-code-snippet__source">
        ${this.renderFilename(filename)}
        <pre class="esds-code-snippet__pre"><code>${source}</code></pre>
      </div>`;
  }

  async renderCompiledHTMLSource(wcSource) {
    const compiledHTMLWrapper = document.createElement('div');
    compiledHTMLWrapper.style = 'display: none;';
    compiledHTMLWrapper.innerHTML = wcSource;
    document.body.appendChild(compiledHTMLWrapper);
    const components = Array.from(compiledHTMLWrapper.childNodes).filter(
      n => n.nodeType === Node.ELEMENT_NODE,
    );
    await Promise.all(components.map(async c => await c.updateComplete));

    this.sources = [
      {
        language: 'WC',
        source: this.source,
      },
      {
        language: 'HTML',
        source: this.cleanVueRenderingArtifacts(
          this.cleanLitElementRenderingArtifacts(compiledHTMLWrapper.innerHTML),
        ), // TODO: In the future may need a react/angular cleaner too
      },
    ];

    // Remove the tmpWrapper
    compiledHTMLWrapper.parentNode.removeChild(compiledHTMLWrapper);
  }

  renderCopyButton() {
    // Not sure why I had to use unsafeHTML here and not the html`` template literal. Without it the ${this.copyButtonText} slot content is getting lost somewhere
    let copyButton = html`
      <button class="esds-code-snippet__copy-button">
        ${this.copyButtonText}
      </button>
    `;

    if (this.copyable === 'true') {
      return html`
        <div class="esds-code-snippet__copy-code-wrap">
          <div class="esds-code-snippet__copied-notification">
            ${this.codeCopiedText}
          </div>
          <div
            @click=${this.copyCodeToClipboard}
            class="esds-code-snippet__copy-button-wrap"
          >
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

  renderFilename(filename) {
    if (filename) {
      return `<span class="esds-code-snippet__filename">${this.filename}</span>`;
    } else {
      return '';
    }
  }

  renderToolbar() {
    const toolbarActions = [];
    let output = '';

    if (this.copyable) {
      toolbarActions.push(this.renderCopyButton());
    }

    if (toolbarActions.length > 0) {
      output = html`
        <div class="esds-code-snippet__toolbar">${toolbarActions}</div>
      `;
    }

    return output;
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
          source: this.source,
        },
      ];
    }

    let output;

    if (sources) {
      let codeSnippets = [];

      sources.forEach(s => {
        codeSnippets.push(`
          <esds-tab-panel label="${s.language}">
            ${this.renderCodeSnippet(s.source, s.language, s.filename)}
          </esds-tab-panel>
        `);
      });

      output = `<esds-tabs tabs-class="esds-code-snippet__tabs" variant="alt">${codeSnippets}</esds-tabs>`;
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
      <div class="${blockLevelClass}">
        ${this.renderToolbar()} ${unsafeHTML(output)}
      </div>
    `;
  }
}
