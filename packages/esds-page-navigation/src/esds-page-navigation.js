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
      // {% macro page_navigation(class=false,
      //                   anchor_link_target_selector="h2, h3",
      //                   list_item_modifier_classes={
      //                       'h2': 'esds-doc-page-navigation__item--parent',
      //                       'h3': 'esds-doc-page-navigation__item--child'
      //                   },
    };
  }

  constructor() {
    super();
    this.contentSelectors = ['h2', 'h3'];
  }

  createRenderRoot() {
    return this;
  }

  get navItems() {
    if (this.items) {
      return this.items;
    } else {
      let items = [];
      const pageTargets = document.querySelectorAll(
        this.contentSelectors.join(', '),
      );

      if (pageTargets.length > 0) {
        items = Array.from(pageTargets).map(pt => {
          return {
            href: pt.id,
            text: pt.textContent,
          };
        });
      }
      return items;
    }
  }

  render() {
    return html`
      <nav class="esds-page-navigation"
        <div class="esds-doc-page-navigation__inner">
          ${this.topContent ? unsafeHTML(this.topContent) : ''}
            <ul class="esds-doc-page-navigation__list">
              ${this.navItems.map(
                i => html`
                  <li class="esds-doc-page-navigation__item">
                    <a href="${i.href}" class="esds-doc-page-navigation__link">
                      ${unsafeHTML(i.text)}
                    </a>
                  </li>
                `,
              )}
            </ul>
            ${this.bottomContent ? unsafeHTML(this.bottomContent) : ''}
        </div>
      </nav>
    `;
  }
}
