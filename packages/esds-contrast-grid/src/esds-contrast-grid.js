import { LitElement, html } from 'lit-element';
import { EsdsColorUtils } from '@eightshapes/esds-color-utils';

export class EsdsContrastGrid extends LitElement {
  static get properties() {
    return {
      colors: { type: Array },
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
  }

  createRenderRoot() {
    return this;
  }

  renderHeaderCells() {
    const output = [];

    this.colors.forEach(c => {
      const labelColor = EsdsColorUtils.accessibleLabelColor(c.hex);
      output.push(html`
        <th class="esds-contrast-grid__foreground-key-cell">
          <div
            class="esds-contrast-grid__key-swatch esds-contrast-grid__key-swatch--foreground"
            style="background-color: ${c.hex}; color: ${labelColor}"
          >
            <div class="esds-contrast-grid__key-swatch-label">
              <div class="esds-contrast-grid__key-swatch-label-hex">
                ${c.hex}
              </div>
            </div>
          </div>
        </th>
      `);
    });

    return output;
  }

  renderRowCells(hex) {
    const cells = [];
    this.colors.forEach(c => {
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
            <div class="esds-contrast-grid__key-swatch-label-hex">
              ${hex}
            </div>
          </div>
        </div>
      </th>
    `;
  }

  renderRows() {
    const backgroundColors = this.backgroundColors || this.colors;
    const rows = [];
    backgroundColors.forEach(c => {
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
      <div class="esds-contrast-grid">
        <div class="esds-contrast-grid__inner">
          <table class="esds-contrast-grid__table">
            <thead>
              <tr class="esds-contrast-grid__foreground-key">
                <th>
                  <div class="esds-contrast-grid__key-swatch-spacer">
                    <span
                      class="esds-contrast-grid__key-swatch-label esds-contrast-grid__key-swatch-label--background"
                      >Background</span
                    >
                    <span
                      class="esds-contrast-grid__key-swatch-label esds-contrast-grid__key-swatch-label--text"
                      >Text</span
                    >
                  </div>
                </th>
                ${this.renderHeaderCells()}
              </tr>
            </thead>
            <tbody class="esds-contrast-grid__content">
              ${this.renderRows()}
            </tbody>
            <tbody class="esds-contrast-grid__key">
              <tr class="esds-contrast-grid__key-row">
                <td class="esds-contrast-grid__key-cell">
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
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}
