import { LitElement, html } from 'lit-element';
import { Slotify } from '@eightshapes/slotify';

export class EsdsIconSwatch extends Slotify(LitElement) {
  static get properties() {
    return {
      label: { type: String },
    };
  }
  render() {
    return html`
      <div class="esds-icon-swatch">
        <div class="esds-icon-swatch__icon">
          <s-slot></s-slot>
        </div>
        <span class="esds-icon-swatch__label">${this.label}</span>
      </div>
    `;
  }
}
