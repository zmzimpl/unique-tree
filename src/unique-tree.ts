import { LitElement, customElement, html } from "lit-element";
import { uniqueTreeStyle } from "./unique-tree-style";
import { UniqueTreeNode } from "./unique-tree-model";

const rootTemplate = (nodes: UniqueTreeNode[]) => {
    return html`
    <div >
        <ul class="ui-tree">
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
    `
};

function recursionNode(nodes: UniqueTreeNode[]) {
    let template = ``;
    nodes.forEach(node => {
        template += `
            <li>
                ${node.title}
                ${node && node.children && node.children.length > 0 ? recursionNode(node.children) : ''}
            </li>
        ` 
    })
    return template;
}

function dig(path: string = '0', level: number = 3) {
    const list = [];
    for (let i = 0; i < 10; i += 1) {
      const key = `${path}-${i}`;
      const treeNode: UniqueTreeNode = {
        title: key,
        key,
        children: []
      };
  
      if (level > 0) {
        treeNode.children = dig(key, level - 1);
      }
  
      list.push(treeNode);
    }
    return list;
  }
  
const treeData = dig();

@customElement('unique-tree')
export class UniqueTree extends LitElement { 
    
    render() {
        console.log(treeData);
        return html`
        ${uniqueTreeStyle}
        ${rootTemplate(treeData)}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'unique-tree': UniqueTree;
    }
}
