import Prism from 'prismjs';
import {
  js as jsBeautify,
  css as cssBeautify,
  html as htmlBeautify,
} from 'js-beautify/js/src/index.js';
import stripIndent from 'strip-indent';
import { html, LitElement } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import '@eightshapes/esds-button/dist/esds-button-web-component.js';
import { EsdsTabs } from '@eightshapes/esds-tabs/dist/EsdsTabs.js';
import { EsdsTab } from '@eightshapes/esds-tabs/dist/EsdsTab.js';
import { namespacedStyles } from './esds-code-snippet-styles.js';

/**
 * @element esds-code-snippet
 *
 * @slot - Default slot, put whatever you want in here.
 * @slot content - Insert content in the named "content" slot.
 *
 */

export class EsdsCodeSnippet extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'code-snippet';
  }

  static beautifySource(source, language) {
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
      default:
        formatter = htmlBeautify;
        options = {};
    }

    return formatter(source, options);
  }

  static cleanLitElementRenderingArtifacts(source) {
    // Given a string of HTML rendered from lit element, strip out the lit element bits and pieces
    return source.replace(/<!---->/g, '').replace(/^\s*[\r\n]/gm, ''); // Strip lit-html comment placeholders & empty lines
  }

  static cleanShadyDomRenderingArtifacts(source) {
    return source.replace(/style-scope /gm, '');
  }

  static cleanVueRenderingArtifacts(source) {
    // Given a string of HTML rendered from vue, strip out the vue bits and pieces
    return source.replace(/data-v-.[A-Za-z0-9]*=.*?"[^"]*"/gm, ''); // Strip Vue data attributes;
  }

  static highlightSource(source, language) {
    let sourceLanguage = language;
    if (language.toLowerCase() === 'html' || language.toLowerCase() === 'wc') {
      sourceLanguage = 'markup';
    }
    return Prism.highlight(source, Prism.languages[sourceLanguage], sourceLanguage);
  }

  static get SUPPORTED_LANGUAGES() {
    return {
      ALL: ['html', 'vue', 'react', 'angular', 'wc', 'css', 'js', 'javascript', 'markup'],
      MARKUP: ['html', 'vue', 'react', 'angular', 'wc'],
      JAVASCRIPT: ['js'],
    };
  }

  static get DEFAULT_LANGUAGE_TAB_LABELS() {
    return {
      html: 'HTML',
      vue: 'Vue',
      react: 'React',
      angular: 'Angular',
      wc: 'WC',
      css: 'CSS',
      js: 'JS',
      javascript: 'Javascript',
    };
  }

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

  static get copyButton() {
    return this._copyButton;
  }

  static set copyButton(value) {
    this._copyButton = value;
  }

  constructor() {
    super();
    EsdsTabs.define('esds-code-snippet');
    EsdsTab.define('esds-code-snippet');
    this.defaultClass = 'esds-code-snippet';
    this.baseModifierClass = 'esds-code-snippet--';
    this.defaultSource = '<h1>Hello World</h1>';

    // State
    this.codeCopied = false;

    // Default prop values
    this.codeCopiedText = 'Copied to clipboard';
    this.copyButtonText = 'Copy Code';
    this.copyable = 'true';
    this.source = '';

    // Set up tabbed interface
    this.tabs = [];
    this.tabPanels = [];

    // For a single source, build out a source object and add it to the sources prop by default
    this.language = 'markup';
    this.preformatted = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  get allTabPanels() {
    return this.querySelectorAll('.esds-code-snippet__tab-panel');
  }

  get allTabs() {
    return this.querySelectorAll('.esds-code-snippet__tab');
  }

  copyCodeToClipboard() {
    const codeSource =
      this.sources.length > 1
        ? this.querySelector('.esds-code-snippet__tab-panel--selected code') // multi-tab component
        : this.querySelector('.esds-code-snippet__pre code'); // single source component
    const textarea = document.createElement('textarea');
    textarea.style.height = '0';
    textarea.style.width = '0';
    textarea.style.position = 'absolute';
    textarea.style.left = '-99999px';
    document.body.appendChild(textarea);

    textarea.textContent = codeSource.textContent;
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
      console.log('COPY NOT SUPPORTED', err);
      // triggerCopyNotSupportedEvent(snippet);
    }

    document.body.removeChild(textarea);
  }

  formatSource(source, language, preformatted) {
    let sourceLanguage = language;
    if (!this.constructor.SUPPORTED_LANGUAGES.ALL.includes(language)) {
      throw new Error(
        `${language} is not a supported language for esds code snippet. Please use one of: '${this.constructor.SUPPORTED_LANGUAGES.ALL.join(
          ', ',
        )}'`,
      );
    }

    if (this.constructor.SUPPORTED_LANGUAGES.MARKUP.includes(language)) {
      sourceLanguage = 'markup';
    }

    if (this.constructor.SUPPORTED_LANGUAGES.JAVASCRIPT.includes(language)) {
      sourceLanguage = 'javascript';
    }

    const beautifiedSource = preformatted
      ? source
      : this.constructor.beautifySource(source, sourceLanguage);
    return this.constructor.highlightSource(beautifiedSource, sourceLanguage);
  }

  handleSlotSourceChange(e) {
    // Don't update anything if there are multiple sources
    if (this.sources.length <= 1) {
      // See if the default slot contains anything
      const assignedContent = e.target.querySelector('s-assigned-wrapper');
      if (assignedContent && assignedContent.innerHTML) {
        // If so, copy the contents to the source object
        this.source = assignedContent.innerHTML;
        this.requestUpdate();
        assignedContent.innerHTML = ''; // Clear out the assigned content so the fallback content can be shown
      }
    }
  }

  // handleTabClick(e) {
  //   const tabId = e.target.id;
  //   this.selectTab(tabId);
  // }

  // linkPanels() {
  //   // If this is a multi-source code snippet, build out the tabs and tab panels
  //   this.tabs = [];
  //   this.tabPanels = [];

  //   const defaultTab = this.sources.find(s => s.selectedTab);
  //   if (!defaultTab) {
  //     // If no default tab has been specified, default to the first tab
  //     this.sources[0].selectedTab = true;
  //   }

  //   this.sources.forEach(sourceObject => {
  //     const linkId = EsdsCodeSnippetTabCounter + 1;
  //     const tabId = `esds-code-snippet__tab--${linkId}`;
  //     const tabPanelId = `esds-code-snippet__tab-panel--${linkId}`;
  //     const tabLabel = sourceObject.tabLabel
  //       ? sourceObject.tabLabel
  //       : this.constructor.DEFAULT_LANGUAGE_TAB_LABELS[sourceObject.language.toLowerCase()];
  //     this.tabs.push(
  //       html`
  //         <span
  //           @click=${this.handleTabClick}
  //           class="esds-code-snippet__tab${sourceObject.selectedTab
  //             ? ' esds-code-snippet__tab--selected'
  //             : ''}"
  //           role="tab"
  //           id="${tabId}"
  //           aria-controls="${tabPanelId}"
  //           >${tabLabel}</span
  //         >
  //       `,
  //     );

  //     this.tabPanels.push(
  //       html`
  //         <div
  //           class="esds-code-snippet__tab-panel${sourceObject.selectedTab
  //             ? ' esds-code-snippet__tab-panel--selected'
  //             : ''}"
  //           id=${tabPanelId}
  //           aria-controlledby=${tabId}
  //           ?hidden=${!sourceObject.selectedTab}
  //         >
  //           ${this.renderCodeSnippet(sourceObject)}
  //         </div>
  //       `,
  //     );
  //   });
  // }

  // resetTabs() {
  //   this.allTabs.forEach(t => t.classList.remove('esds-code-snippet__tab--selected'));
  //   this.allTabPanels.forEach(p => {
  //     p.classList.remove('esds-code-snippet__tab-panel--selected');
  //     p.hidden = true; // eslint-disable-line no-param-reassign
  //   });
  // }

  // selectTab(tabId) {
  //   this.resetTabs();
  //   const tab = this.querySelector(`#${tabId}`);
  //   const tabPanel = this.querySelector(`#${tab.getAttribute('aria-controls')}`);
  //   tab.classList.add('esds-code-snippet__tab--selected');
  //   tabPanel.classList.add('esds-code-snippet__tab-panel--selected');
  //   tabPanel.hidden = false;
  // }

  showCopiedMessage() {
    const copiedNotification = this.querySelector('.esds-code-snippet__copied-notification');
    copiedNotification.addEventListener(
      'animationend',
      () => {
        this.codeCopied = false;
        this.requestUpdate(); // After the CSS animation ends, reset the copied status so the notification can be shown again on subsequent clicks
      },
      { once: true },
    );

    this.codeCopied = true;
    this.requestUpdate(); // This will trigger a CSS animation to display the copiedNotification
  }

  renderCodeSnippet(sourceObject) {
    const language = sourceObject.language
      ? sourceObject.language
      : sourceObject.tabLabel.toLowerCase();
    const { preformatted } = sourceObject;

    const source = this.formatSource(
      stripIndent(
        this.constructor.cleanShadyDomRenderingArtifacts(
          this.constructor.cleanLitElementRenderingArtifacts(
            this.constructor.cleanVueRenderingArtifacts(sourceObject.source),
          ),
        ),
      ),
      language,
      preformatted,
    );

    return html`
      <div class="esds-code-snippet__source">
        <pre class="esds-code-snippet__pre"><code>${unsafeHTML(source)}</code></pre>
      </div>
    `;
  }

  renderCopyButton() {
    let copyButton = html`
      <esds-button class="esds-code-snippet__copy-button" size="small" variant="secondary">
        ${this.copyButtonText}
      </esds-button>
    `;

    if (this.constructor.copyButton) {
      // If something has set the static setter for copy button, use that copy button
      copyButton = html`
        ${unsafeHTML(this.constructor.copyButton)}
      `;
    }

    if (this.copyable === 'true') {
      return html`
        <div class="esds-code-snippet__copy-code-wrap">
          <div class="esds-code-snippet__copied-notification">
            ${this.codeCopiedText}
          </div>
          <div @click=${this.copyCodeToClipboard} class="esds-code-snippet__copy-button-wrap">
            <s-slot name="copy-button">
              ${copyButton}
            </s-slot>
          </div>
        </div>
      `;
    }
    return '';
  }

  renderFilename(filename) {
    if (filename) {
      return `<span class="esds-code-snippet__filename">${this.filename}</span>`;
    }
    return '';
  }

  renderToolbar() {
    const toolbarActions = [];
    let output = '';
    const tabset =
      this.tabs.length > 1
        ? html`
            <div class="esds-code-snippet__tabset" role="tabset">
              ${this.tabs}
            </div>
          `
        : '';

    if (this.copyable !== 'false') {
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

  renderFooterLinks() {
    if (this.hasSlotableContent('footer-links')) {
      return html`
        <div class="esds-code-snippet__footer-links"><s-slot name="footer-links"></s-slot></div>
      `;
    }
    return html`
      <s-slot name="footer-links"></s-slot>
    `;
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
    if (this.sources && this.sources.length > 1) {
      sourceOutput = html`
        <esds-code-snippet-tabs>
          ${this.sources.map(s => {
            const tabLabel = s.tabLabel
              ? s.tabLabel
              : this.constructor.DEFAULT_LANGUAGE_TAB_LABELS[s.language.toLowerCase()];
            return html`
              <esds-code-snippet-tab label="${tabLabel}"
                >${this.renderCodeSnippet(s)}</esds-code-snippet-tab
              >
            `;
          })}
        </esds-code-snippet-tabs>
      `;
    } else {
      const defaultSourceObject = {
        source: this.source || '',
        language: this.language,
        preformatted: this.preformatted,
      };
      this.sources = [defaultSourceObject];

      sourceOutput = this.renderCodeSnippet(this.sources[0]); // Render a single snippet
    }

    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <div class="${blockLevelClass}">
        ${this.renderToolbar()}
        <div class="esds-code-snippet__source-wrap">
          <s-slot @slotchange=${this.handleSlotSourceChange}>${sourceOutput}</s-slot>
        </div>
        ${this.renderFooterLinks()}
      </div>
    `;
  }
}
