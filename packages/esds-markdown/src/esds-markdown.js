import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { Slotify } from '@eightshapes/slotify';
import marked from 'marked';
import stripIndent from 'strip-indent';

export class EsdsMarkdown extends Slotify(LitElement) {
  static get properties() {
    return {
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

  handleSlotChange() {
    this.reparseSlottedContent();
  }

  reparseSlottedContent() {
    const assignedContent = this.querySelector('s-assigned-wrapper');
    console.log(assignedContent, 'SANITY');
    if (assignedContent && assignedContent.innerHTML.trim().length > 0) {
      console.log('PARSE MD');
      this.parsedMarkdown = this.constructor.parseMarkdown(
        assignedContent.innerHTML,
      );
      console.log(this.parsedMarkdown);
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
