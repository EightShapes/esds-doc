import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-example-code-pair/dist/esds-example-code-pair-web-component.js';
import '@eightshapes/esds-button/dist/esds-button-web-component.js';
// The Custom Element Class
import { sinkFor } from './scripts/utilities.js';

export default {
  title: 'Example Code Pair',
};

export const Default = () => {
  return html`
    <esds-example-code-pair>
      <h1>Just Testing This</h1>
    </esds-example-code-pair>
  `;
};

/* eslint-disable */
export const WebComponent = () => {
  return html`
    <esds-example-code-pair source="<esds-button>Testing</esds-button>"></esds-example-code-pair>
  `;
};
/* eslint-enable */

export const SlottedExample = () => {
  return html`
    <esds-example-code-pair>
      <esds-rendered-example label="kick">
        <h1>Magic with a</h1>
      </esds-rendered-example>
    </esds-example-code-pair>
  `;
};

export const FooterLinks = () => {
  return html`
    <esds-example-code-pair>
      <esds-rendered-example label="kick">
        <h1>Magic with a</h1>
      </esds-rendered-example>
      <a slot="footer-links" href="#">View on Github</a>
      <a slot="footer-links" href="#">View on Codepen</a>
    </esds-example-code-pair>
  `;
};

export const HiddenCode = () => {
  return html`
    <esds-example-code-pair hidden-code>
      <esds-rendered-example label="kick">
        <h1>Magic with a</h1>
      </esds-rendered-example>
    </esds-example-code-pair>
  `;
};

export const NoCodeToggle = () => {
  return html`
    <esds-example-code-pair no-code-toggle>
      <esds-rendered-example label="kick">
        <h1>Magic with a</h1>
      </esds-rendered-example>
    </esds-example-code-pair>
  `;
};

export const MultipleSlottedExamples = () => html`
  <esds-example-code-pair>
    <esds-rendered-example label="Magic" slot="primary-example">
      <h1>Spiderpunch</h1>
    </esds-rendered-example>
    <esds-rendered-example label="kick">
      <h1>Magic with a</h1>
    </esds-rendered-example>
  </esds-example-code-pair>
`;

export const DerivedHTMLTab = () => html`
  <esds-example-code-pair language="react" derived-html-tab>
    <ReactComponentThing>
      <h2>Just an H2 on the Inside</h2>
    </ReactComponentThing>
  </esds-example-code-pair>
`;

/* eslint-disable */
export const MultipleSources = () => html`
  <esds-example-code-pair
    sources='[
      {
        "source": "<Header>This is the React Version</Header>",
        "language": "react"
      },
      {
        "source": "<h1>This is the HTML representation</h1>",
        "language": "html",
        "renderedExample": true
      }
    ]'
  ></esds-example-code-pair>

  <esds-example-code-pair
    sources='[
      {
        "source": "<h2>This example should be shown by default</h2>",
        "language": "html"

      },
      {
        "source": "<h1>This is the HTML representation</h1>",
        "language": "html"
      }
    ]'
  ></esds-example-code-pair>
`;

export const MultipleSourcesWithSlottedExample = () => html`
  <h2>Multiple Sources Plus Slotted Example</h2>
  <esds-example-code-pair
    sources='[
      {
        "source": "<h2>This example should be shown by default</h2>",
        "language": "html"

      },
      {
        "source": "<h1>This is the HTML representation</h1>",
        "language": "html"
      }
    ]'
  >
    <h4 style="color: red;">
      I'm completely unrelated to the source being shown in either tab. Useful for frameworks like
      Vue where you need to "render" something here
    </h4>
  </esds-example-code-pair>
`;
/* eslint-enable */

/* eslint-disable */
export const HorizontalScrolling = () => html`
  <h2>Multiple Sources Plus Slotted Example</h2>
  <esds-example-code-pair
    source="<h1>Lorem ipsum dolor sanctum. Lorem ipsum dolor sanctum. Lorem ipsum dolor sanctum. Lorem ipsum dolor sanctum. Lorem ipsum dolor sanctum. Lorem ipsum dolor sanctum. Lorem ipsum dolor sanctum. Lorem ipsum dolor sanctum. </h1>"
  ></esds-example-code-pair>
`;
/* eslint-enable */

export const Sink = sinkFor(Default, WebComponent);
Sink.story = { parameters: { chromatic: { disable: false } } };