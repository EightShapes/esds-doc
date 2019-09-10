import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import scrollMonitor from 'scrollmonitor';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill(); // Including polyfill intentionally since browser-support for smooth scrolling is still questionable: https://caniuse.com/#feat=mdn-api_scrolltooptions_behavior

export class EsdsPageNavigation extends LitElement {
  static get properties() {
    return {
      bottomContent: { type: String, attribute: 'bottom-content' },
      contentSelectors: { type: Array, attribute: 'content-selectors' },
      debugMarkers: {
        type: Boolean,
        attribute: 'debug-markers',
      },
      fixed: { type: Boolean },
      fixedTriggerOffset: {
        type: Number,
        attribute: 'fixed-trigger-offset',
      },
      items: { type: Array },
      sectionScrollOffset: { type: Number, attribute: 'section-scroll-offset' },
      topContent: { type: String, attribute: 'top-content' },
      updateNavEvent: { type: String, attribute: 'update-nav-event' },
    };
  }

  constructor() {
    super();
    // Prop default values
    this.contentSelectors = ['h2'];
    this.debugMarkers = false;
    this.fixed = false;
    this.fixedTriggerOffset = 0;
    this.sectionScrollOffset = 0;
    this.items = [];

    // Initial state
    this.sectionScrollMonitoring = true;
    this.onLoadHash = window.location.hash;
    this.pushSelectedToHash = this.onLoadHash !== undefined ? false : true; // If there's already a hash on the url when the page loads, don't push any new hashes until the one in the URL has been selected
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resetSectionScrollMonitors();
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    this.initializeNav();
    if (this.updateNavEvent) {
      // If there's a global event that should be listened to to rebuild nav items, listen for it here. Useful for SPAs that don't truly reload the page
      document.addEventListener(
        this.updateNavEvent,
        () => {
          this.initializeNav();
        },
        { once: true },
      );
    }
  }

  get fixedTopPosition() {
    return this.fixedTriggerOffset || 0;
  }

  get navWrapper() {
    return this.querySelector('.esds-page-navigation');
  }

  createDebugMarker(verticalPosition, color, position, label) {
    const marker = document.createElement('div');
    const styles = {
      backgroundColor: color,
      height: '1px',
      left: 0,
      position: 'absolute',
      top: `${verticalPosition}px`,
      width: '100%',
      zIndex: 900,
    };

    for (const styleName in styles) {
      marker.style[styleName] = styles[styleName];
    }

    marker.classList.add('esds-page-navigation__debug-marker');

    const markerLabel = document.createElement('div');
    markerLabel.textContent = label;
    const labelStyles = {
      backgroundColor: color,
      bottom: position === 'top' ? 'auto' : '100%',
      color: 'black',
      fontSize: '10px',
      position: 'absolute',
      top: position === 'top' ? '100%' : 'auto',
      left: 0,
    };

    for (const styleName in labelStyles) {
      markerLabel.style[styleName] = labelStyles[styleName];
    }
    marker.appendChild(markerLabel);
    document.body.appendChild(marker);
  }

  createDebugMarkers(topPosition, bottomPosition, href) {
    this.createDebugMarker(topPosition, 'lightblue', 'top', `Top: ${href}`);
    this.createDebugMarker(
      bottomPosition - 1,
      'hotpink',
      'bottom',
      `Bottom: ${href}`,
    );
  }

  dedupeNavIds() {
    const ids = [];
    this.items.forEach(pt => {
      const pageTarget = pt.target;
      let checkId = pt.href;
      let incrementer = 0;
      while (ids.includes(checkId)) {
        checkId = `${checkId}-${incrementer}`;
        incrementer++;
      }
      ids.push(checkId);
      pt.href = checkId;
      pageTarget.id = checkId;
    });
  }

  generateIdForPageTarget(pt) {
    const initialId = pt.textContent
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const listItemId = !isNaN(parseInt(initialId.charAt(0), 10))
      ? 'page-section-' + initialId
      : initialId; // If the header starts with a number, prefix it a string

    return listItemId;
  }

  handleNavigationClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href').replace('#', '');
    this.selectNavItem(href);
    const target = document.getElementById(href);
    this.smoothScrollToTarget(target);
  }

  initializeNav() {
    if (this.items.length === 0) {
      this.updateNavItems();
    }
    this.monitorFixedState();
    this.scrollToUrlHash();
  }

  monitorFixedState() {
    const fixedScrollMonitor = scrollMonitor.create(this, {
      top: this.fixedTriggerOffset,
    });

    this.updateFixedState(fixedScrollMonitor);
    fixedScrollMonitor.stateChange(() => {
      this.updateFixedState(fixedScrollMonitor);
    });
  }

  monitorSectionScrollPosition() {
    this.items.forEach((i, idx) => {
      const nextItem = this.items[idx + 1];
      const sectionTop =
        i.target.getBoundingClientRect().top + window.pageYOffset;
      const sectionBottom = nextItem
        ? nextItem.target.getBoundingClientRect().top + window.pageYOffset
        : document.body.offsetHeight;
      const sectionWatcher = scrollMonitor.create({
        top: sectionTop,
        bottom: sectionBottom,
      });

      this.sectionScrollWatchers = this.sectionScrollWatchers || [];
      this.sectionScrollWatchers.push(sectionWatcher);

      if (this.debugMarkers) {
        this.createDebugMarkers(sectionTop, sectionBottom, i.href);
      }

      // When a section spans the entire viewport
      sectionWatcher.stateChange(() => {
        if (
          this.sectionScrollMonitoring &&
          sectionWatcher.isAboveViewport &&
          sectionWatcher.isBelowViewport
        ) {
          this.selectNavItem(i.href);
        }
      });

      // Scroll Down Behavior
      sectionWatcher.partiallyExitViewport(() => {
        if (
          this.sectionScrollMonitoring &&
          sectionWatcher.isAboveViewport &&
          nextItem
        ) {
          // When one section exits the viewport at the top, set the next section's header to be active
          this.selectNavItem(i.href);
        }
      });

      // Scroll Up Behavior
      sectionWatcher.enterViewport(() => {
        if (this.sectionScrollMonitoring && !sectionWatcher.isBelowViewport) {
          this.selectNavItem(i.href);
        }
      });

      // Highlight the last item in the nav when the last section is fully scrolled into view
      if (!nextItem) {
        sectionWatcher.fullyEnterViewport(() => {
          if (this.sectionScrollMonitoring) {
            this.selectNavItem(i.href);
          }
        });
      }
    });
  }

  resetDebugMarkers() {
    const debugMarkerElements = Array.from(
      document.querySelectorAll('.esds-page-navigation__debug-marker'),
    );
    debugMarkerElements.forEach(d => {
      d.parentNode.removeChild(d);
    });
  }

  resetSectionScrollMonitors() {
    if (this.sectionScrollWatchers) {
      this.sectionScrollWatchers.forEach(sw => sw.destroy());
      this.sectionScrollWatchers = [];
      if (this.debugMarkers) {
        this.resetDebugMarkers();
      }
    }
  }

  scrollToUrlHash() {
    setTimeout(() => {
      if (this.onLoadHash) {
        const selectedSection = this.items.find(
          i => i.href === this.onLoadHash.replace('#', ''),
        );
        if (selectedSection) {
          this.selectNavItem(selectedSection.href);
          this.smoothScrollToTarget(selectedSection.target);
        }
      }
      this.pushSelectedToHash = true;
    }, 50); // Add a little pause so page positions can be calculated correctly before scrolling to initial section
  }

  selectNavItem(href) {
    const cleanedHref = href.replace('#', '');
    this.items.forEach(i =>
      i.href === cleanedHref ? (i.active = true) : (i.active = false),
    );

    if (this.pushSelectedToHash) {
      history.pushState(null, null, `#${cleanedHref}`);
    }
    this.requestUpdate();
  }

  smoothScrollToTarget(target) {
    if (this.scrollMonitoringTimeout) {
      clearTimeout(this.scrollMonitoringTimeout);
    }
    this.sectionScrollMonitoring = false;

    const scrollPosition =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      this.sectionScrollOffset;
    window.scroll({
      top: scrollPosition,
      left: 0,
      behavior: 'smooth',
    });

    // Brittle, but browser-native window.scroll doesn't provide any callback mechanism
    this.scrollMonitoringTimeout = setTimeout(() => {
      this.sectionScrollMonitoring = true;
    }, 1500);
  }

  updateFixedState(elementWatcher) {
    if (elementWatcher.isAboveViewport && !this.fixed) {
      this.fixedStyles = `top: ${this.fixedTopPosition}px; width: ${this.navWrapper.offsetWidth}px;`;
      this.fixed = true;
      this.requestUpdate();
    } else if (!elementWatcher.isAboveViewport && this.fixed) {
      this.fixedStyles = false;
      this.fixed = false;
      this.requestUpdate();
    }
  }

  updateNavItems() {
    this.items = [];
    const pageTargets = document.querySelectorAll(
      this.contentSelectors.join(', '),
    );

    if (pageTargets.length === 0) {
      // set a timeout and try again. This persistent attempt to scrape the page for content is necessary in some frameworks (Vue, Nuxt, Angular, etc.)
      this.navItemUpdateTimeout = setTimeout(() => {
        if (!this.navItemUpdateAttempts || this.navItemUpdateAttempts < 5) {
          this.updateNavItems();
          this.navItemUpdateAttempts = this.navItemUpdateAttempts
            ? this.navItemUpdateAttempts + 1
            : 0;
        }
      }, 50);
    } else {
      if (this.navItemUpdateTimeout) {
        clearTimeout(this.navItemUpdateTimeout);
      }
      if (pageTargets.length > 0) {
        this.items = Array.from(pageTargets).map(pt => {
          if (!pt.id) {
            pt.id = this.generateIdForPageTarget(pt);
          }

          return {
            href: pt.id,
            text: pt.textContent,
            target: pt,
          };
        });

        this.dedupeNavIds();
        this.monitorSectionScrollPosition();

        this.requestUpdate();
      }
    }
  }

  render() {
    if (this.items.length > 0) {
      return html`
        <nav
          class="esds-page-navigation${this.fixed
            ? ' esds-page-navigation--fixed'
            : ''}"
        >
          <div
            class="esds-page-navigation__inner"
            style="${ifDefined(this.fixedStyles)}"
          >
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
}
