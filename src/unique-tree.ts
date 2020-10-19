import { LitElement, customElement, html } from "lit-element";

const rootTemplate = html`
    <div>Hello World<div>
    <slot></slot>
`;

@customElement('unique-tree')
export class UniqueTree extends LitElement { 

    render() {
        return html`${rootTemplate}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'unique-tree': UniqueTree;
    }
  }