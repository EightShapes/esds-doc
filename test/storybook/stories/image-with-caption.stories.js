import { html } from 'lit-html';
// The Web Component Import
import '@eightshapes/esds-image-with-caption/dist/esds-image-with-caption-web-component.js';
// The Custom Element Class
import { sinkFor } from './scripts/utilities.js';

export default {
  title: 'Image With Caption',
};

export const Default = () => {
  return html`
    <esds-image-with-caption
      src="/images/image-with-caption/landscape.png"
      caption="Use capitalization for languages that allow capitalization."
    ></esds-image-with-caption>
  `;
};

export const Stacked = () => {
  return html`
    <esds-image-with-caption
      src="/images/image-with-caption/landscape.png"
      caption="Use capitalization for languages that allow capitalization."
    ></esds-image-with-caption>
    <esds-image-with-caption
      src="/images/image-with-caption/landscape.png"
      caption="Use capitalization for languages that allow capitalization."
    ></esds-image-with-caption>
  `;
};

export const ContentResilience = () => {
  return html`
    <esds-image-with-caption
      src="/images/image-with-caption/landscape.png"
      caption="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis libero qui eum necessitatibus magni voluptas laudantium quas, ratione debitis aliquid. Nostrum, magnam quasi magni tempore quo minima recusandae placeat ipsum sed eligendi, saepe fugit explicabo ex esse natus. Architecto deleniti perferendis praesentium ea nesciunt eveniet quam saepe ipsa asperiores quos!"
    ></esds-image-with-caption>
    <esds-image-with-caption
      src="/images/image-with-caption/landscape.png"
      caption="Use capitalization for languages that allow capitalization."
    ></esds-image-with-caption>
  `;
};

export const Sink = sinkFor(Default);
Sink.story = { parameters: { chromatic: { disable: false } } };
