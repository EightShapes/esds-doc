import { EsdsTintStack } from './esds-tint-stack.js';

if (window.customElements.get('esds-tint-stack') === undefined) {
  window.customElements.define('esds-tint-stack', EsdsTintStack);
}
