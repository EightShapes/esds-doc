import { LitElement, html } from 'lit-element';
import { EsdsColorUtils } from 'esds-color-utils';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export class EsdsTintSwatch extends LitElement {
  static get properties() {
    return {
      accessibilityRating: { type: Boolean, attribute: 'accessibility-rating' },
      accessibilityRatingValue: {
        type: String,
        attribute: 'accessibility-rating-value',
      },
      bordered: { type: Boolean },
      codeSnippet: { type: String, attribute: 'code-snippet' },
      colorRole: { type: String, attribute: 'color-role' },
      contrastRatio: { type: Boolean, attribute: 'contrast-ratio' },
      contrastRatioValue: {
        type: String,
        attribute: 'contrast-ratio-value',
      },
      hex: { type: String },
      hiddenHexLabel: { type: Boolean, attribute: 'hidden-hex-label' },
      htmlExample: { type: String, attribute: 'html-example' },
      label: { type: String },
      labelColor: { type: String, attribute: 'label-color' },
      testHexColor: { type: String, attribute: 'test-hex-color' },
    };
  }

  constructor() {
    super();
    this.colorRole = 'background';
    this.accessibilityRating = false;
    this.contrastRatio = false;
  }

  connectedCallback() {
    super.connectedCallback();
    const closestTintStack = this.closest('esds-tint-stack');
    this.labelColor = this.labelColor || closestTintStack.labelColor;
  }

  createRenderRoot() {
    return this;
  }

  get backgroundColor() {
    if (this.colorRole === 'background') {
      return this.hex;
    } else if ((this.colorRole === 'foreground', this.testHexColor)) {
      return this.testHexColor;
    } else {
      return this.mostAccessibleTestColor;
    }
  }

  get calculatedAccessibilityRating() {
    if (this.accessibilityRatingValue) {
      return this.accessibilityRatingValue;
    } else {
      return this.calculateAccessibilityRating();
    }
  }

  get calculatedContrastRatio() {
    if (this.contrastRatioValue) {
      return this.contrastRatioValue;
    } else {
      return this.calculateContrastRatio();
    }
  }

  get className() {
    let className = 'esds-tint-swatch';
    if (this.bordered) {
      className += ' esds-tint-swatch--bordered';
    }

    return className;
  }

  get foregroundColor() {
    if (this.colorRole === 'foreground') {
      return this.hex;
    } else if (this.colorRole === 'background' && this.testHexColor) {
      return this.testHexColor;
    } else {
      return this.mostAccessibleTestColor;
    }
  }

  get mostAccessibleTestColor() {
    const whiteContrast = EsdsColorUtils.contrastRatioForHex(
      this.hex,
      '#FFFFFF',
    );
    const blackContrast = EsdsColorUtils.contrastRatioForHex(
      this.hex,
      '#000000',
    );

    if (whiteContrast > blackContrast) {
      return '#FFFFFF';
    } else {
      return '#000000';
    }
  }

  calculateAccessibilityRating() {
    const ratio = this.calculatedContrastRatio;
    let rating = 'DNP';
    if (ratio >= 7.0) {
      rating = 'AAA';
    } else if (ratio >= 4.5) {
      rating = 'AA';
    } else if (ratio >= 3.0) {
      rating = 'AA18';
    }
    return rating;
  }

  calculateContrastRatio() {
    const testColor = this.testHexColor
      ? this.testHexColor
      : this.mostAccessibleTestColor;
    return EsdsColorUtils.contrastRatioForHex(this.hex, testColor);
  }

  renderCodeSnippet() {
    if (this.codeSnippet) {
      return html`
        <span class="esds-tint-swatch__code-snippet"
          >${unsafeHTML(this.codeSnippet)}</span
        >
      `;
    } else {
      return '';
    }
  }

  renderContrastRatio() {
    if (
      this.accessibilityRating ||
      this.accessibilityRatingValue ||
      this.contrastRatio ||
      this.contrastRatioValue
    ) {
      let contrastRatioText = '';
      if (this.accessibilityRating || this.accessibilityRatingValue) {
        contrastRatioText += this.calculatedAccessibilityRating;
      }

      if (this.contrastRatio || this.contrastRatioValue) {
        contrastRatioText +=
          contrastRatioText.length > 0
            ? `, ${this.calculatedContrastRatio}`
            : this.calculatedContrastRatio;
      }

      return html`
        <span
          class="esds-tint-swatch__contrast-ratio esds-tint-swatch__contrast-ratio--${this
            .calculatedAccessibilityRating}"
        >
          ${contrastRatioText}
        </span>
      `;
    } else {
      return '';
    }
  }

  renderHtmlExample() {
    if (this.htmlExample) {
      return html`
        <span class="esds-tint-swatch__html-example"
          >${unsafeHTML(this.htmlExample)}</span
        >
      `;
    } else {
      return '';
    }
  }

  renderLabel() {
    if (!this.label) {
      // Hide the additional Hex label if no default label was passed
      this.hiddenHexLabel = true;
    }
    const labelText = this.label || this.hex.toUpperCase();
    return html`
      <span class="esds-tint-swatch__label">
        <span class="esds-tint-swatch__label-text">${labelText}</span>
        ${!this.hiddenHexLabel
          ? html`
              <span class="esds-tint-swatch__hex-label">${this.hex}</span>
            `
          : ''}
      </span>
    `;
  }

  render() {
    const backgroundColor = this.backgroundColor;
    const labelColor = this.labelColor ? this.labelColor : this.foregroundColor;

    return html`
      <div
        class="${this.className}"
        style="background-color: ${backgroundColor}; color: ${labelColor}"
      >
        ${this.renderLabel()} ${this.renderHtmlExample()}
        ${this.renderCodeSnippet()} ${this.renderContrastRatio()}
      </div>
    `;
  }
}
