import { EsdsDoDontItem } from './EsdsDoDontItem.js';

/**
 * @element esds-dont
 *
 * @slot - Default slot, put whatever you want in here.
 * @slot content - Insert content in the named "content" slot.
 *
 */

export class EsdsDont extends EsdsDoDontItem {
  static get customElementName() {
    return 'dont';
  }

  constructor() {
    super();
    // Prop Defaults
    this.variant = 'dont';
    this.captionEyebrow = "Don't";
  }
}
