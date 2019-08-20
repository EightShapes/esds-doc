import { LitElement, html } from 'lit-element';
import { Slotify } from '@eightshapes/slotify';

export class EsdsRenderedExample extends Slotify(LitElement) {
  static get properties() {
    return {
      label: { type: String },
    };
  }

  render() {
    return html`
      <div class="esds-rendered-example">
        <s-slot></s-slot>
        ${this.label
          ? html`
              <span class="esds-rendered-example__label">${this.label}</span>
            `
          : ''}
      </div>
    `;
  }
}
