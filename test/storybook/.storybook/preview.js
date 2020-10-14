/* global window */
import {
  configure,
  addParameters,
  addDecorator,
  setCustomElements,
} from '@storybook/web-components';
import { withA11y } from '@storybook/addon-a11y';

// TODO: Make this more scalable
import '../stories/styles/annotation-styles.scss';
import '../stories/styles/hostile-styles.scss';

addDecorator(withA11y);

addParameters({
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
  docs: {
    iframeHeight: '200px',
    inlineStories: false,
  },
  // disables Chromatic on a global level
  chromatic: { disable: true },
});

// force full reload to not reregister web components
const req = require.context('../stories', true, /\.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
