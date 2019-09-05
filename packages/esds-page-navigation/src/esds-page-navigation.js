import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export class EsdsPageNavigation extends LitElement {
  static get properties() {
    return {
      bottomContent: { type: String, attribute: 'bottom-content' },
      contentSelectors: { type: Array, attribute: 'content-selectors' },
      fixedDistanceFromTop: {
        type: Number,
        attribute: 'fixed-distance-from-top',
      },
      items: { type: Array },
      topContent: { type: String, attribute: 'top-content' },
    };
  }

  constructor() {
    super();
    this.contentSelectors = ['h2'];
    if (!this.items) {
      this.updateNavItems();
    }
  }

  createRenderRoot() {
    return this;
  }

  handleNavigationClick(e) {
    // e.preventDefault();
    this.selectNavItem(e.target.getAttribute('href'));
  }

  selectNavItem(href) {
    console.log('UPDATING');
    this.items.forEach(i =>
      i.href === href.replace('#', '') ? (i.active = true) : (i.active = false),
    );

    console.log(this.items);

    this.requestUpdate();
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
    }
  }

  render() {
    return html`
      <nav class="esds-page-navigation"
        <div class="esds-page-navigation__inner">
          ${this.topContent ? unsafeHTML(this.topContent) : ''}
            <ul class="esds-page-navigation__list">
              ${this.items.map(i => {
                console.log(i);
                let itemClass = 'esds-page-navigation__item';
                if (i.active) {
                  itemClass += ' esds-page-navigation__item--active';
                }
                console.log(itemClass);
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
