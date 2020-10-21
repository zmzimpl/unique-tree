import { html } from 'lit-element';
const treeLineHeight = 2;
const treeIndentation = 1;
export const uniqueTreeStyle = html `
<style>

.ui-tree {
  margin: 0;
  padding: 0;
  list-style: none;

}

.ui-tree li {
  position: relative;
  line-height: ${treeLineHeight}em;
}

/* Level 2 */
.ui-tree ul {
  position: relative;
  margin: 0 0 0 ${treeIndentation}em;
  padding: 0;
  list-style: none;
}

.ui-tree ul::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1px;
  border-left: 1px solid #e9eaea;
}

.ui-tree ul li {
  padding-left: ${treeIndentation + 0.5}em;  /* indentation + .5em */
  padding-bottom: 4px;
}

.ui-tree ul li::before {
  content: "";
  position: absolute;
  top: ${treeLineHeight / 2}em; /* half the line-height */
  left: 0;
  width: ${treeIndentation}em; /* same as indentation */
  height: 1px;
  border-top: 1px solid #e9eaea;
}

.ui-tree ul li:last-child::before {
  background-color: white; /* same as body background */
  height: auto;
  top: ${treeLineHeight / 2}em; /* half the line-height */
  left: -1px;
  bottom: 0;
}

/* Level 3+ */
.ui-tree ul ul {
  margin-left: ${treeIndentation / 2}em;  /* half the indentation */
}
</style>
`;
//# sourceMappingURL=unique-tree-style.js.map