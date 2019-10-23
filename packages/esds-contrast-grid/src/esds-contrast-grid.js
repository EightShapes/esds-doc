import { LitElement, html } from 'lit-element';
import { EsdsColorUtils } from '@eightshapes/esds-color-utils';

export class EsdsContrastGrid extends LitElement {
  static get properties() {
    return {
      backgroundColors: { type: Array, attribute: 'background-colors' },
      backgroundLabel: { type: String, attribute: 'background-label' },
      colors: { type: Array },
      foregroundLabel: { type: String, attribute: 'foreground-label' },
      hiddenAxisLabel: { type: Boolean, attribute: 'hidden-axis-label' },
      hiddenHexLabels: { type: Boolean, attribute: 'hidden-hex-labels' },
      hiddenKey: { type: Boolean, attribute: 'hidden-key' },
      keyPosition: { type: String, attribute: 'key-position' },
      responsive: { type: Boolean },
      size: { type: String },
    };
  }

  constructor() {
    super();
    this.colors = [
      {
        hex: '#000',
        label: 'Black',
      },
      {
        hex: '#323232',
      },
      {
        hex: '#4D4D4D',
      },
      {
        hex: '#F3F1F1',
      },
      {
        hex: '#FFF',
        label: 'White',
      },
      {
        hex: '#DC6729',
      },
      {
        hex: '#3995A9',
        label: 'Link Color',
      },
    ];
    this.hiddenHexLabels = false;
    this.hiddenKey = false;
    this.keyPosition = 'bottom';
    this.backgroundLabel = 'Background';
    this.foregroundLabel = 'Text';
  }

  createRenderRoot() {
    return this;
  }

  get className() {
    let className = 'esds-contrast-grid';
    if (this.responsive) {
      className += ' esds-contrast-grid--responsive';
    }
    if (this.size) {
      className += ` esds-contrast-grid--${this.size}`;
    }

    return className;
  }

  get normalizedBackgroundColors() {
    const backgroundColors = this.backgroundColors || this.colors;
    return this.normalizeColors(backgroundColors);
  }

  get normalizedColors() {
    return this.normalizeColors(this.colors);
  }

  normalizeColors(colorArray) {
    // Allow an array of strings OR an array of objects
    return colorArray.map(c => {
      if (typeof c === 'string') {
        return { hex: c };
      } else {
        return c;
      }
    });
  }

  renderAxisLabel() {
    if (this.hiddenAxisLabel) {
      return;
    }
    return html`
      <div class="esds-contrast-grid__key-swatch-spacer">
        <span
          class="esds-contrast-grid__key-swatch-label esds-contrast-grid__key-swatch-label--background"
          >${this.backgroundLabel}</span
        >
        <span
          class="esds-contrast-grid__key-swatch-label esds-contrast-grid__key-swatch-label--text"
          >${this.foregroundLabel}</span
        >
      </div>
    `;
  }

  renderHeaderCells() {
    const output = [];

    this.normalizedColors.forEach(c => {
      const labelColor = EsdsColorUtils.accessibleLabelColor(c.hex);
      output.push(html`
        <th class="esds-contrast-grid__foreground-key-cell">
          <div
            class="esds-contrast-grid__key-swatch esds-contrast-grid__key-swatch--foreground"
            style="background-color: ${c.hex}; color: ${labelColor}"
          >
            <div class="esds-contrast-grid__key-swatch-label">
              <div class="esds-contrast-grid__key-swatch-label-text">
                ${c.label}
              </div>
              ${this.hiddenHexLabels
                ? ''
                : html`
                    <div class="esds-contrast-grid__key-swatch-label-hex">
                      ${c.hex}
                    </div>
                  `}
            </div>
          </div>
        </th>
      `);
    });

    return output;
  }

  renderKey() {
    if (this.hiddenKey) {
      return;
    }
    return html`
      <thead class="esds-contrast-grid__key">
        <tr class="esds-contrast-grid__key-row">
          <td
            class="esds-contrast-grid__key-cell"
            colspan="${this.normalizedColors.length + 1}"
          >
            <div class="esds-contrast-grid-key">
              <div class="esds-contrast-grid-key__column">
                <div class="esds-contrast-grid-key__label">
                  <span
                    class="esds-contrast-grid__accessibility-label esds-contrast-grid__accessibility-label--aaa"
                    >AAA</span
                  >
                  Pass, AAA (7+)
                </div>
                <div class="esds-contrast-grid-key__label">
                  <span
                    class="esds-contrast-grid__accessibility-label esds-contrast-grid__accessibility-label--aa"
                    >AA</span
                  >
                  Pass, AA (4.5+)
                </div>
              </div>
              <div class="esds-contrast-grid-key__column">
                <div class="esds-contrast-grid-key__label">
                  <span
                    class="esds-contrast-grid__accessibility-label esds-contrast-grid__accessibility-label--aa18"
                    >AA18</span
                  >
                  Pass, Large Text Only (3+)
                </div>
                <div class="esds-contrast-grid-key__label">
                  <span
                    class="esds-contrast-grid__accessibility-label esds-contrast-grid__accessibility-label--dnp"
                    >DNP</span
                  >
                  Does Not Pass
                </div>
              </div>
              <a
                class="esds-contrast-grid-key__link"
                href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"
                >About WCAG 2.0 contrast</a
              >
            </div>
          </td>
        </tr>
      </thead>
    `;
  }

  renderRowCells(hex) {
    const cells = [];
    this.normalizedColors.forEach(c => {
      if (hex === c.hex) {
        cells.push(
          html`
            <td class="esds-contrast-grid__content-cell">
              <div class="es-contrast-grid__swatch-spacer"></div>
            </td>
          `,
        );
      } else {
        const contrastRatio =
          Math.floor(EsdsColorUtils.contrastRatioForHex(hex, c.hex) * 10) / 10;
        const accessibilityRating = EsdsColorUtils.accessibilityRating(
          contrastRatio,
        );
        const labelColor = EsdsColorUtils.accessibleLabelColor(hex);
        cells.push(html`
          <td class="esds-contrast-grid__content-cell">
            <div
              class="esds-contrast-grid__swatch"
              style="background-color: ${hex}; color: ${labelColor}"
            >
              <span
                class="esds-contrast-grid__swatch-demo-text"
                style="color: ${c.hex}"
                >Text</span
              >
              <div class="esds-contrast-grid__swatch-stats">
                <span
                  class="esds-contrast-grid__accessibility-label esds-contrast-grid__accessibility-label--${accessibilityRating.toLowerCase()}"
                >
                  ${accessibilityRating}</span
                >
                <span
                  class="esds-contrast-grid__contrast-ratio"
                  style="color: ${labelColor}"
                  >${contrastRatio}</span
                >
              </div>
            </div>
          </td>
        `);
      }
    });

    return cells;
  }

  renderRowHeader(hex, label) {
    const labelColor = EsdsColorUtils.accessibleLabelColor(hex);

    return html`
      <th class="esds-contrast-grid__background-key-cell">
        <div
          class="esds-contrast-grid__key-swatch esds-contrast-grid__key-swatch--background"
          style="background-color: ${hex}; color: ${labelColor}"
        >
          <div class="esds-contrast-grid__key-swatch-label">
            <div class="esds-contrast-grid__key-swatch-label-text">
              ${label}
            </div>
            ${this.hiddenHexLabels
              ? ''
              : html`
                  <div class="esds-contrast-grid__key-swatch-label-hex">
                    ${hex}
                  </div>
                `}
          </div>
        </div>
      </th>
    `;
  }

  renderRows() {
    const rows = [];
    this.normalizedBackgroundColors.forEach(c => {
      rows.push(html`
        <tr
          id="esds-contrast-grid__content-row-template"
          class="esds-contrast-grid__content-row"
        >
          ${this.renderRowHeader(c.hex, c.label)} ${this.renderRowCells(c.hex)}
        </tr>
      `);
    });

    return rows;
  }

  render() {
    return html`
      <div class="${this.className}">
        <div class="esds-contrast-grid__inner">
          <table class="esds-contrast-grid__table">
            ${this.keyPosition === 'top' ? this.renderKey() : ''}
            <thead>
              <tr class="esds-contrast-grid__foreground-key">
                <th>
                  ${this.renderAxisLabel()}
                </th>
                ${this.renderHeaderCells()}
              </tr>
            </thead>
            <tbody class="esds-contrast-grid__content">
              ${this.renderRows()}
            </tbody>
            ${this.keyPosition === 'bottom' ? this.renderKey() : ''}
          </table>
        </div>
      </div>
    `;
  }
}
