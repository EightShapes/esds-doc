import { html } from 'lit-html';
import '@eightshapes/esds-tabs/dist/esds-tabs-web-component.js';
import { sinkFor } from './scripts/utilities.js';

// The Web Component Import
// The Custom Element Class
// EsdsTabs.define('esds-v10'); // Define a <esds-v10-tabs> component

export default {
  title: 'Tabs',
};

export const Default = () => {
  return html`
    <esds-tabs
      ><h3>Default Slot Heading</h3>
      <h4 slot="content">Named Slot Heading</h4>
    </esds-tabs>
  `;
};

// export const Scoped = () => {
//   return html`
//     <div class="storybook-grid">
//       <div>
//         <span class="storybook-annotation">&lt;esds-v10-tabs>&lt;/esds-v10-tabs></span>
//         <esds-v10-tabs></esds-v10-tabs>
//       </div>
//     </div>
//   `;
// };

export const Sink = sinkFor(Default);
Sink.parameters = {
  chromatic: { disable: false },
};