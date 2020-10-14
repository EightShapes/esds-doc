import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-do-dont/dist/esds-do-dont-web-component.js';
import '@eightshapes/esds-button/dist/esds-button-web-component.js';
// The Custom Element Class
import { sinkFor } from './scripts/utilities.js';

export default {
  title: 'Do Dont',
};

export const Default = () => {
  return html`
    <esds-do-dont>
      <esds-do caption="Use capitalization for languages that allow capitalization."></esds-do>
      <esds-dont
        caption="Don't wrap text. For maximum legibility, a text label should remain on a single line."
      ></esds-dont>
    </esds-do-dont>
  `;
};

export const WithImages = () => {
  return html`
    <esds-do-dont>
      <esds-do
        caption="Use capitalization for languages that allow capitalization."
        src="/images/dodont/landscape.png"
      ></esds-do>
      <esds-dont
        caption="Don't wrap text. For maximum legibility, a text label should remain on a single line."
        src="/images/dodont/portrait.jpg"
      ></esds-dont>
    </esds-do-dont>
  `;
};

export const WithWebComponents = () => {
  return html`
    <esds-do-dont>
      <esds-do caption="Use a single primary button as a call to action.">
        <esds-button>Subscribe</esds-button>
        <esds-button variant="secondary">Cancel</esds-button>
      </esds-do>
      <esds-dont caption="Don't use more than one primary button for a single action.">
        <esds-button>Subscribe</esds-button>
        <esds-button>Cancel</esds-button>
      </esds-dont>
    </esds-do-dont>
  `;
};

export const Sink = sinkFor(Default);
Sink.story = { parameters: { chromatic: { disable: false } } };
