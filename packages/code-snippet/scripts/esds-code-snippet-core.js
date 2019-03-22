import { EsdsBaseWc, html, unsafeHTML } from './esds-base-wc.js';
import { Prism, htmlBeautify, jsBeautify, cssBeautify } from './compiled-dependency-bundle-es6.js';

class EsdsCodeSnippet extends EsdsBaseWc {
  static get properties() {
    return {
      language: {type: String},
      source: {type: String}
    }
  }

  constructor() {
    super();
    this.defaultClass = 'esds-code-snippet-v1';
    this.baseModifierClass = 'esds-code-snippet--';
    this.stylesheet = 'esds-code-snippet.css';
    this.defaultSource = '<h1>Hello World</h1>';

    // Default prop values
    this.source = this.defaultSource;
    this.language = 'markup';
  }

  render(){
   let blockLevelClass = this.defaultClass;

   let source = this.source;
   if (source === this.defaultSource && this.slots.default) {
     // rudamentary formatting
     source = this.slots.default.map((n) => {
      if (n.outerHTML) {
        return n.outerHTML;
      } else {
        console.log(n.textContent);
        let output = '';
        if (n.textContent.trim().length > 0) {
          output = n.textContent;
        }
        return output;
      }
    }).join('\n');
   }

   let language = this.language;
   if (language === 'html') {
     language = 'markup';
   }

   let formatter = htmlBeautify;
   switch(language) {
      case 'css':
        formatter = cssBeautify;
        break;
      case 'javascript':
        formatter = jsBeautify;
        break;
   }

   const formattedCode = formatter(source);
   const highlightedCode = Prism.highlight(formattedCode, Prism.languages[language], language);

    return html`
      ${this.getStylesheet()}
      <div class="${blockLevelClass}">
        ${this.slots['copy-icon']}
        <pre class="esds-code-snippet__pre"><code>${unsafeHTML(highlightedCode)}</code></pre>
      </div>
    `;
  }
}

export default EsdsCodeSnippet;
