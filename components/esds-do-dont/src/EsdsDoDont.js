import { html, LitElement } from 'lit-element';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import { namespacedStyles } from './esds-do-dont-styles.js';

/**
 * @element esds-do-dont
 *
 * @slot - Default slot, put whatever you want in here.
 *
 */

export class EsdsDoDont extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'do-dont';
  }

  constructor() {
    super();
    // Prop Defaults
    this.example = 'medium';
    this.text = 'Hello World';
  }

  get cssClassObject() {
    return {
      default: `${this.constructor.customElementNamespace}-do-dont`,
      prefix: `${this.constructor.customElementNamespace}-do-dont`, // will cause `active` to become `my-card--active`
    };
  }

  render() {
    return html`
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <div class="${this.getClassName()}">
        <s-slot></s-slot>
      </div>
    `;
  }
}
