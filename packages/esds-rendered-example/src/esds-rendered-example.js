import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { Slotify } from '@eightshapes/slotify';

export class EsdsRenderedExample extends Slotify(LitElement) {
  static get properties() {
    return {
      label: { type: String },
      exampleSource: { type: String, attribute: 'example-source' },
    };
  }

  get slottedContent() {
    let slottedContent = false;
    const slot = this.querySelector('s-slot');
    const assignedWrapper = slot.querySelector('s-assigned-wrapper');
    if (assignedWrapper && assignedWrapper.innerHTML.trim().length > 0) {
      slottedContent = assignedWrapper.innerHTML;
    }
    return slottedContent;
  }

  get source() {
    return this.exampleSource || this.slottedContent;
  }

  render() {
    return html`
      <div class="esds-rendered-example">
        <s-slot>${unsafeHTML(this.exampleSource)}</s-slot>
        ${this.label
          ? html`
              <span class="esds-rendered-example__label">${this.label}</span>
            `
          : ''}
      </div>
    `;
  }
}
