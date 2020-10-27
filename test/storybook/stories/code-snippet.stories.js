import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-code-snippet/dist/esds-code-snippet-web-component.js';
// The Custom Element Class
import { sinkFor } from './scripts/utilities.js';

export default {
  title: 'Code Snippet',
};

export const Default = () => {
  return html`
    <esds-code-snippet>
      <h1>Basic Code Snippet</h1>
    </esds-code-snippet>
  `;
};

export const HiddenCopyButton = () => {
  return html`
    <esds-code-snippet copyable="false">
      <h1>Basic Code Snippet</h1>
    </esds-code-snippet>
  `;
};

/* eslint-disable */
export const TabbedExample = () => {
  return html`
    <esds-code-snippet
      sources='[{"tabLabel": "Vue", "source": "<app-header>Hello World</app-header>"},{"tabLabel": "HTML", "source": "<h1>Hello World</h1>"}]'
    ></esds-code-snippet>
  `;
};
/* eslint-enable */

export const SlottedButtonExample = () => {
  return html`
    <esds-code-snippet>
      <h1>Hello World</h1>
      <p>Gonna have to separate out the slotted stuff...ugh.</p>
      <button style="background: red; color: green;" slot="copy-button">
        Copy This Now!
      </button>
    </esds-code-snippet>
  `;
};

export const ImageMarkup = () => {
  return html`
    <esds-code-snippet>
      <div class="this-is-my-image-wrap">
        <div class="nested-another-level">
          <img src="/some/path/to/file.png" />
        </div>
      </div>
    </esds-code-snippet>
  `;
};

export const TableMarkup = () => {
  return html`
    <esds-code-snippet>
      <table>
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
        </tbody>
      </table>
    </esds-code-snippet>
  `;
};

export const Filename = () => {
  return html`
    <esds-code-snippet language="css" filename="myfile.css">
      .css-test-with-filename { background: hotpink; color: red; font-family: sans-serif;
      font-weight: bold; }
    </esds-code-snippet>
  `;
};

/* eslint-disable */
export const WebComponentCode = () => {
  return html`
    <esds-code-snippet
      source="<esds-button>Web Component Source can be shown too</esds-button>"
    ></esds-code-snippet>
  `;
};
/* eslint-enable */

export const WebComponentCodeSlotted = () => {
  return html`
    <esds-code-snippet>
      <esds-button>Web Component Source can be passed via the default slot</esds-button>
    </esds-code-snippet>
  `;
};

export const TallHeight = () => {
  return html`
    <esds-code-snippet max-height="tall">
      <table>
        <thead>
          <tr>
            <th>Tall Max Height</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
        </tbody>
      </table>
    </esds-code-snippet>
  `;
};

export const NoMaxHeight = () => {
  return html`
    <esds-code-snippet max-height="none">
      <table>
        <thead>
          <tr>
            <th>No Max Height</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
          <tr>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
            <td>Cell Content</td>
          </tr>
        </tbody>
      </table>
    </esds-code-snippet>
  `;
};

export const ContentResilience = () => {
  return html`
    <esds-code-snippet>
      <h1>
        Content resiliance, running this content into the copy button intentionally to show what
        happens, this is longer text to show horizontal scrolling
      </h1>
    </esds-code-snippet>
  `;
};

/* eslint-disable */
export const WebComponentHTMLAutoGeneratedTab = () => {
  return html`
    <esds-code-snippet
      source="
      <esds-button href='http://eightshapes.com'>Show the WC First, then the compiled HTML</esds-button>
    "
      language="wc"
    ></esds-code-snippet>
  `;
};
/* eslint-ensable */

export const JavascriptHighlighting = () => {
  return html`
    <esds-code-snippet language="javascript">
      // Javascript highlighting example import EsdsButton from './scripts/esds-button.js'; import
      EsdsIcon from './scripts/esds-icon.js'; const myButton = new EsdsButton(); myButton.variant =
      'secondary'; document.body.appendChild(myButton);
    </esds-code-snippet>
  `;
};

export const FooterLinks = () => {
  return html`
    <esds-code-snippet>
      <h1>Hello World</h1>
      <a href="#" slot="footer-links">View on Github</a>
      <a href="#" slot="footer-links">View on Codepen</a>
    </esds-code-snippet>
  `;
};

export const Sink = sinkFor(Default);
Sink.story = { parameters: { chromatic: { disable: false } } };
