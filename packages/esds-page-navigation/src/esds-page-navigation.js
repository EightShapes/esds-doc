import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import scrollMonitor from 'scrollmonitor';

export class EsdsPageNavigation extends LitElement {
  static get properties() {
    return {
      bottomContent: { type: String, attribute: 'bottom-content' },
      contentSelectors: { type: Array, attribute: 'content-selectors' },
      fixed: { type: Boolean },
      fixedDistanceFromTop: {
        type: Number,
        attribute: 'fixed-distance-from-top',
      },
      items: { type: Array },
      topContent: { type: String, attribute: 'top-content' },
      updateNavEvent: { type: String, attribute: 'update-nav-event' },
    };
  }

  constructor() {
    super();
    this.contentSelectors = ['h2'];
    this.fixed = false;

    if (!this.items) {
      this.updateNavItems();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.fixedDistanceFromTop !== undefined) {
      this.monitorFixedState(); // TODO: Unbind this in disconnectedCallback
    }
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    if (this.updateNavEvent) {
      document.addEventListener(
        this.updateNavEvent,
        () => {
          this.updateNavItems();
        },
        { once: true },
      );
    }
  }

  handleNavigationClick(e) {
    // e.preventDefault();
    this.selectNavItem(e.target.getAttribute('href'));
  }

  monitorFixedState() {
    const fixedScrollMonitor = scrollMonitor.create(this, {
      top: this.fixedDistanceFromTop,
    });

    console.log(fixedScrollMonitor);

    this.updateFixedState(fixedScrollMonitor);
    fixedScrollMonitor.stateChange(() => {
      this.updateFixedState(fixedScrollMonitor);
    });
  }

  selectNavItem(href) {
    this.items.forEach(i =>
      i.href === href.replace('#', '') ? (i.active = true) : (i.active = false),
    );

    this.requestUpdate();
  }

  updateFixedState(elementWatcher) {
    console.log('UFS');
    if (elementWatcher.isAboveViewport && !this.fixed) {
      this.fixed = true;
      this.requestUpdate();
    } else if (!elementWatcher.isAboveViewport && this.fixed) {
      this.fixed = false;
      this.requestUpdate();
    }
  }

  updateNavItems() {
    this.items = [];
    const pageTargets = document.querySelectorAll(
      this.contentSelectors.join(', '),
    );

    if (pageTargets.length > 0) {
      this.items = Array.from(pageTargets).map(pt => {
        return {
          href: pt.id,
          text: pt.textContent,
        };
      });

      this.requestUpdate();
    }
  }

  render() {
    return html`
      <nav
        class="esds-page-navigation${this.fixed
          ? ' esds-page-navigation--fixed'
          : ''}"
      >
        <div class="esds-page-navigation__inner">
          ${this.topContent ? unsafeHTML(this.topContent) : ''}
          <ul class="esds-page-navigation__list">
            ${this.items.map(i => {
              let itemClass = 'esds-page-navigation__item';
              if (i.active) {
                itemClass += ' esds-page-navigation__item--active';
              }
              return html`
                <li class="${itemClass}">
                  <a
                    @click=${this.handleNavigationClick}
                    href="#${i.href}"
                    class="esds-page-navigation__link"
                  >
                    ${unsafeHTML(i.text)}
                  </a>
                </li>
              `;
            })}
          </ul>
          ${this.bottomContent ? unsafeHTML(this.bottomContent) : ''}
        </div>
      </nav>
    `;
  }
}
