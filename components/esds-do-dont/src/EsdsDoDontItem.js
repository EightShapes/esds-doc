import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';

/**
 * @element esds-do-dont-item
 *
 * @slot - Default slot, put whatever you want in here.
 *
 */

export class EsdsDoDontItem extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'do-dont-item';
  }

  static get properties() {
    return {
      /*
       * The caption displayed with the visual
       * @type String
       */
      caption: { type: String },

      /*
       * If provided, uses esds-thumbnail to render an image
       * @type String
       */
      src: { type: String },

      /*
       * Visual style of the do don't item.
       * @type {'do'|'dont'}
       */
      variant: { type: String },
    };
  }

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-do-dont-item`,
      prefix: `${this.constructor.customElementNamespace}-do-dont-item`, // will cause `active` to become `my-card--active`
      variant: {
        class: this.variant,
      },
      src: this.src,
    };
  }

  renderImageFromSource() {
    if (this.src) {
      return html`
        <img class="esds-do-dont-item__image" src="${this.src}" role="presentation" />
      `;
    }
    return '';
  }

  renderExample() {
    return html`
      <div class="esds-do-dont-item__example">
        <s-slot>${this.renderImageFromSource()}</s-slot>
      </div>
    `;
  }

  render() {
    return html`
      <div class="${this.getClassName()}">
        ${this.renderExample()}
        <span class="esds-do-dont-item__caption-eyebrow">${this.captionEyebrow}</span>
        <span class="esds-do-dont-item__caption">${this.caption}</span>
      </div>
    `;
  }
}
