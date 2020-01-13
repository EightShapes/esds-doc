import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { Slotify } from '@eightshapes/slotify';
import marked from 'marked';
import stripIndent from 'strip-indent';

export class EsdsMarkdown extends Slotify(LitElement) {
  static get properties() {
    return {
      parsedMarkdown: { type: String, attribute: 'parsed-markdown' },
      wrapperClass: { type: String, attribute: 'wrapper-class' },
    };
  }

  static get wrapperClass() {
    return this._wrapperClass;
  }

  static set wrapperClass(value) {
    this._wrapperClass = value;
  }

  static parseMarkdown(input) {
    const parsedMarkdown = marked(stripIndent(input));
    return parsedMarkdown;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'parsedMarkdown') {
        this.emitParsedMarkdownChangedEvent();
      }
    });
  }
  emitParsedMarkdownChangedEvent() {
    // Trigger a custom event after markdown is parsed
    let event = new CustomEvent('esds-markdown-slotted-content-parsed', {
      detail: {
        result: this.parsedMarkdown,
      },
    });
    this.dispatchEvent(event);
  }

  handleSlotChange() {
    this.reparseSlottedContent();
  }

  reparseSlottedContent() {
    const assignedContent = this.querySelector('s-assigned-wrapper');
    if (assignedContent && assignedContent.innerHTML.trim().length > 0) {
      this.parsedMarkdown = this.constructor.parseMarkdown(
        assignedContent.innerHTML,
      );
      this.requestUpdate();
      assignedContent.innerHTML = '';
    }
  }

  render() {
    return html`
      <div
        class="esds-markdown ${this.wrapperClass ||
          this.constructor.wrapperClass}"
        @slotchange="${this.handleSlotChange}"
      >
        <s-slot>${unsafeHTML(this.parsedMarkdown)}</s-slot>
      </div>
    `;
  }
}
