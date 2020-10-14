import { EsdsDoDontItem } from './EsdsDoDontItem.js';

/**
 * @element esds-do
 *
 * @slot - Default slot, put whatever you want in here.
 * @slot content - Insert content in the named "content" slot.
 *
 */

export class EsdsDo extends EsdsDoDontItem {
  static get customElementName() {
    return 'do';
  }

  constructor() {
    super();
    // Prop Defaults
    this.variant = 'do';
    this.captionEyebrow = 'Do';
  }
}
