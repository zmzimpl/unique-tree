import { LitElement, customElement, html } from "lit-element";
import { uniqueTreeStyle } from "./unique-tree-style";

const rootTemplate = html`
    <div class="ui-tree">
        <ul >
            <li>Plants
                <ul>
                    <li>Flowers
                    <ul>
                        <li>Rose</li>
                        <li>Tulip</li>
                    </ul>
                    </li>
                    <li>Trees</li>
                </ul>
                </li>
                <li>Animals
                <ul>
                    <li>Birds</li>
                    <li>Mammals
                    <ul>
                        <li>Elephant
                        <ul>
                            <li>List item 1</li>
                            <li>List item 2</li>
                            <li>List item 3
                            <ul>
                                <li>List item 3.1</li>
                                <li>List item 3.2</li>
                                <li>List item 3.3
                                <ul>
                                    <li>List item 3.3.1</li>
                                </ul>
                                </li>
                                <li>List item 3.4</li>
                            </ul>
                            </li>
                            <li>List item 4</li>
                            <li>List item 5</li>
                            <li>List item 6</li>
                            <li>List item 7</li>
                            <li>List item 8</li>
                        </ul>
                        </li>
                        <li>Mouse</li>
                    </ul>
                    </li>
                    <li>Reptiles</li>
                </ul>
            </li>
        </ul>
        </div>
`;

@customElement('unique-tree')
export class UniqueTree extends LitElement { 

    render() {
        return html`
        ${uniqueTreeStyle}
        ${rootTemplate}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'unique-tree': UniqueTree;
    }
  }