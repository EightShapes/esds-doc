import { LitElement, html } from 'lit-element';
import { Slotify } from '@eightshapes/slotify';

export class EsdsTintStack extends Slotify(LitElement) {
  static get properties() {
    return {
      accessibilityRating: { type: Boolean, attribute: 'accessibility-rating' },
      bordered: { type: Boolean },
      colorRole: { type: String, attribute: 'color-role' },
      contrastRatio: { type: Boolean, attribute: 'contrast-ratio' },
      hiddenHexLabel: { type: Boolean, attribute: 'hidden-hex-label' },
      labelColor: { type: String, attribute: 'label-color' },
      testHexColor: { type: String, attribute: 'test-hex-color' },
    };
  }
  render() {
    return html`
      <div class="esds-tint-stack"><s-slot></s-slot></div>
    `;
  }
}
