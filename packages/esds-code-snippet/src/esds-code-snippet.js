import Prism from 'prismjs';
import {
  js as jsBeautify,
  css as cssBeautify,
  html as htmlBeautify,
} from 'js-beautify/js/src/index.js';
import stripIndent from 'strip-indent';
import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

let EsdsCodeSnippetTabCounter = 0;

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
    this.defaultSource = '<h1>Hello World</h1>';

    // State
    this.codeCopied = false;

    // Default prop values
    this.codeCopiedText = 'Copied to clipboard';
    this.copyButtonText = 'Copy Code';
    this.copyable = 'true';
    this.source = this.initialInnerHtml;

    // Set up tabbed interface
    this.tabs = [];
    this.tabPanels = [];

    // For a single source, build out a source object and add it to the sources prop by default
    this.language = 'markup';
    this.preformatted = false;
    const defaultSourceObject = {
      source: this.source,
      language: this.language,
      preformatted: this.preformatted,
    };
    this.sources = [defaultSourceObject];
  }

  connectedCallback() {
    super.connectedCallback();
    this.initialInnerHtml = this.initialInnerHtml || this.innerHTML;

    this.slotContent =
      this.initialInnerHtml.trim().length > 0
        ? this.initialInnerHtml.trim()
        : undefined;
  }

  createRenderRoot() {
    return this;
  }

  get allTabPanels() {
    return this.querySelectorAll('.esds-code-snippet__tab-panel');
  }

  get allTabs() {
    return this.querySelectorAll('.esds-code-snippet__tab');
  }

  get initialInnerHtml() {
    return this.getAttribute('data-initial-inner-html') || this.innerHTML;
  }

  set initialInnerHtml(value) {
    this.setAttribute('data-initial-inner-html', value);
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
    // const tmpWrapper = document.createElement('div');
    // tmpWrapper.innerHTML = source
    //   .replace(/<!---->/g, '')
    //   .replace(/^\s*[\r\n]/gm, ''); // Strip lit-html comment placeholders & empty lines
    // const linkTags = tmpWrapper.querySelectorAll('link');
    // linkTags.forEach(l => l.parentNode.removeChild(l));
    //
    // const hostElements = Array.from(tmpWrapper.childNodes).filter(
    //   n => n.nodeType === Node.ELEMENT_NODE,
    // ); // Get the hostElement which will contain the compiled/slotified component
    // const scopedStyleElements = tmpWrapper.querySelectorAll('.style-scope');
    // scopedStyleElements.forEach(e => e.classList.remove('style-scope'));
    //
    // let cleanedHTML;
    // if (hostElements.length > 1) {
    //   cleanedHTML = hostElements.reduce((string, he) => {
    //     return string.innerHTML + he.innerHTML;
    //   });
    // } else {
    //   cleanedHTML = hostElements[0].innerHTML;
    // }
    // return cleanedHTML;
    return source.replace(/<!---->/g, '').replace(/^\s*[\r\n]/gm, ''); // Strip lit-html comment placeholders & empty lines
  }

  cleanShadyDomRenderingArtifacts(source) {
    return source.replace(/style-scope /gm, '');
  }

  cleanVueRenderingArtifacts(source) {
    // Given a string of HTML rendered from vue, strip out the vue bits and pieces
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

  handleTabClick(e) {
    console.log(e.target);
    const tabId = e.target.id;
    this.selectTab(tabId);
  }

  highlightSource(source, language) {
    if (language.toLowerCase() === 'html' || language.toLowerCase() === 'wc') {
      language = 'markup';
    }
    return Prism.highlight(source, Prism.languages[language], language);
  }

  linkPanels() {
    // If this is a multi-source code snippet, build out the tabs and tab panels
    this.tabs = [];
    this.tabPanels = [];

    const defaultTab = this.sources.find(s => s.selectedTab);
    if (!defaultTab) {
      // If no default tab has been specified, default to the first tab
      this.sources[0].selectedTab = true;
    }

    this.sources.forEach(sourceObject => {
      const linkId = EsdsCodeSnippetTabCounter++;
      const tabId = `esds-code-snippet__tab--${linkId}`;
      const tabPanelId = `esds-code-snippet__tab-panel--${linkId}`;
      this.tabs.push(
        html`
          <span
            @click=${this.handleTabClick}
            class="esds-code-snippet__tab${sourceObject.selectedTab
              ? ' esds-code-snippet__tab--selected'
              : ''}"
            role="tab"
            id="${tabId}"
            aria-controls="${tabPanelId}"
            >${sourceObject.tabLabel}</span
          >
        `,
      );

      this.tabPanels.push(
        html`
          <div
            class="esds-code-snippet__tab-panel${sourceObject.selectedTab
              ? ' esds-code-snippet__tab-panel--selected'
              : ''}"
            id=${tabPanelId}
            aria-controlledby=${tabId}
            ?hidden=${!sourceObject.selectedTab}
          >
            ${this.renderCodeSnippet(sourceObject)}
          </div>
        `,
      );
    });
  }

  resetTabs() {
    this.allTabs.forEach(t =>
      t.classList.remove('esds-code-snippet__tab--selected'),
    );
    this.allTabPanels.forEach(p => {
      p.classList.remove('esds-code-snippet__tab-panel--selected');
      p.hidden = true;
    });
  }

  selectTab(tabId) {
    this.resetTabs();
    const tab = this.querySelector(`#${tabId}`);
    const tabPanel = this.querySelector(
      `#${tab.getAttribute('aria-controls')}`,
    );
    tab.classList.add('esds-code-snippet__tab-panel--selected');
    tabPanel.classList.add('esds-code-snippet__tab-panel--selected');
    tabPanel.hidden = false;
  }

  showCopiedMessage() {
    this.codeCopied = true;
    this.requestUpdate();
  }

  renderCodeSnippet(sourceObject) {
    console.log(sourceObject);
    const markupLanguages = ['html', 'vue', 'react', 'angular'];
    let language = sourceObject.language
      ? sourceObject.language
      : sourceObject.tabLabel.toLowerCase();
    language = markupLanguages.includes(language) ? 'markup' : language;

    const source = this.formatSource(
      stripIndent(
        this.cleanShadyDomRenderingArtifacts(
          this.cleanLitElementRenderingArtifacts(
            this.cleanVueRenderingArtifacts(sourceObject.source),
          ),
        ),
      ),
      language,
    );

    return unsafeHTML(`
      <div class="esds-code-snippet__source>
        <pre class="esds-code-snippet__pre"><code>${source}</code></pre>
      </div>
    `);
  }

  // async renderCompiledHTMLSource(wcSource) {
  //   const compiledHTMLWrapper = document.createElement('div');
  //   compiledHTMLWrapper.style = 'display: none;';
  //   compiledHTMLWrapper.innerHTML = wcSource;
  //   document.body.appendChild(compiledHTMLWrapper);
  //   const components = Array.from(compiledHTMLWrapper.childNodes).filter(
  //     n => n.nodeType === Node.ELEMENT_NODE,
  //   );
  //   await Promise.all(components.map(async c => await c.updateComplete));
  //
  //   this.sources = [
  //     {
  //       language: 'WC',
  //       source: this.source,
  //     },
  //     {
  //       language: 'HTML',
  //       source: this.cleanVueRenderingArtifacts(
  //         this.cleanLitElementRenderingArtifacts(compiledHTMLWrapper.innerHTML),
  //       ), // TODO: In the future may need a react/angular cleaner too
  //     },
  //   ];
  //
  //   // Remove the tmpWrapper
  //   compiledHTMLWrapper.parentNode.removeChild(compiledHTMLWrapper);
  // }

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
    let tabset =
      this.tabs.length > 0
        ? html`
            <div class="esds-code-snippet__tabset" role="tabset">
              ${this.tabs}
            </div>
          `
        : '';

    if (this.copyable) {
      toolbarActions.push(this.renderCopyButton());
    }

    if (toolbarActions.length > 0) {
      output = html`
        <div class="esds-code-snippet__toolbar">
          ${tabset}${toolbarActions}
        </div>
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

    let sourceOutput;
    if (this.sources.length > 0) {
      this.linkPanels();
      sourceOutput = html`
        <div class="esds-code-snippet__tab-panels">${this.tabPanels}</div>
      `;
    } else {
      sourceOutput = this.renderCodeSnippet(this.sources[0]); // Render a single snippet
    }
    return html`
      <div class="${blockLevelClass}">
        ${this.renderToolbar()} ${sourceOutput}
      </div>
    `;
  }
}
