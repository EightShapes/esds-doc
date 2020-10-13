import { html, LitElement } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { CSSClassify } from '@eightshapes/css-classify';
import { Scopify } from '@eightshapes/scopify';
import { Slotify } from '@eightshapes/slotify';
import { namespacedStyles } from './esds-rendered-example-styles.js';

/**
 * @element esds-rendered-example
 *
 * @slot - Default slot, put whatever you want in here.
 *
 */

export class EsdsRenderedExample extends Slotify(Scopify(CSSClassify(LitElement), 'esds')) {
  static get customElementName() {
    return 'rendered-example';
  }

  static get properties() {
    return {
      background: { type: String },
      exampleSource: { type: String, attribute: 'example-source' },
      label: { type: String },
      renderedExampleClass: {
        type: String,
        attribute: 'rendered-example-class',
      },
    };
  }

  get classNames() {
    let classNames = 'esds-rendered-example';
    classNames += this.renderedExampleClass ? ` ${this.renderedExampleClass}` : '';
    classNames += this.background ? ` esds-rendered-example--${this.background}` : '';
    return classNames;
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
      <style>
        ${namespacedStyles(this.constructor.customElementNamespace)}
      </style>
      <div class="${this.classNames}">
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
