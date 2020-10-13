import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-rendered-example/dist/esds-rendered-example-web-component.js';
// The Custom Element Class
import { sinkFor } from './scripts/utilities.js';

// import '@eightshapes/esds-rendered-example/dist/esds-rendered-example-web-component.js';
// EsdsRenderedExample.define('esds-v10'); // Define a <esds-v10-rendered-example> component

export default {
  title: 'Rendered Example',
};

export const Default = () => {
  return html`
    <esds-rendered-example>
      <h1
        style="font-size: 40px; font-style: normal; font-weight: bold; color: black; background: transparent; margin: 0;"
      >
        Hello World!
      </h1>
    </esds-rendered-example>
  `;
};

export const WithLabel = () => {
  return html`
    <esds-rendered-example label="A Basic Button">
      <button>Super Basic</button>
    </esds-rendered-example>
  `;
};

export const Sink = sinkFor(Default, WithLabel);
Sink.story = { parameters: { chromatic: { disable: false } } };
