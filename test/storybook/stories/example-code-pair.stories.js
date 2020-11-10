import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-example-code-pair/dist/esds-example-code-pair-web-component.js';
import '@eightshapes/esds-button/dist/esds-button-web-component.js';
// The Custom Element Class
import { sinkFor } from './scripts/utilities.js';

const codepenIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"/></svg>';

const githubIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>';

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

export const SlottedWebComponent = () => {
  return html`
    <esds-example-code-pair preformatted>
      <esds-button
        size="large"
        variant="secondary"
        href="http://example.com/?reallyreallylongquerystringtotriggerwrapping"
      >
        Testing
      </esds-button>
    </esds-example-code-pair>
  `;
};

export const FooterLinks = () => {
  return html`
    <esds-example-code-pair>
      <esds-rendered-example label="kick">
        <h1>Magic with a</h1>
      </esds-rendered-example>
      <esds-button slot="footer-links" size="small" variant="flat">
        <esds-icon use="${githubIcon}" slot="icon"></esds-icon>
        Github
      </esds-button>
      <esds-button slot="footer-links" size="small" variant="flat">
        <esds-icon use="${codepenIcon}" slot="icon"></esds-icon>
        Codepen
      </esds-button>
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
