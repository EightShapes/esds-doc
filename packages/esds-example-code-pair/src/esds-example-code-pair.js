import { LitElement, html } from 'lit-element';
import { Slotify } from '@eightshapes/slotify';
import { EsdsCodeSnippet } from '@eightshapes/esds-code-snippet';
import { EsdsRenderedExample } from '@eightshapes/esds-rendered-example';

export class EsdsExampleCodePair extends Slotify(LitElement) {
  render() {
    return html`
      <esds-rendered-example>
        <s-slot></s-slot>
      </esds-rendered-example>
      <esds-code-snippet>
        <s-slot></s-slot>
      </esds-code-snippet>
    `;
  }
}
