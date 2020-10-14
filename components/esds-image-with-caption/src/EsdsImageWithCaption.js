import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { namespacedStyles } from './esds-image-with-caption-styles.js';

/**
 * @element esds-image-with-caption
 *
 */

export class EsdsImageWithCaption extends Scopify(CSSClassify(LitElement), 'esds') {
  static get customElementName() {
    return 'image-with-caption';
  }

  static get properties() {
    return {
      /*
       * Caption for the image
       * @type String
       */
      caption: { type: String },
      /*
       * Src of the image
       * @type String
       */
      src: { type: String },
    };
  }

  /*
   * @ignore
   */
  createRenderRoot() {
    return this; // Prevents lit-element from rendering in shadowDOM
  }

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-image-with-caption`,
      prefix: `${this.constructor.customElementNamespace}-image-with-caption`, // will cause `active` to become `my-card--active`
    };
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <div class="${this.getClassName()}">
        <img class="esds-image-with-caption__image" src="${this.src}" alt="${this.caption}" />
        <div class="esds-image-with-caption__caption">${this.caption}</div>
      </div>
    `;
  }
}
