import { html } from 'lit-element';
export const uniqueTreeStyle = html `
<style>
:root {
  --tree-line-height: 2em;
  --tree-indentation: 1em;
}

.ui-tree {
  margin: 0;
  padding: 0;
  list-style: none;

}

.ui-tree li {
  position: relative;
  line-height: var(--tree-line-height, 2em);
}

/* Level 2 */
.ui-tree ul {
  position: relative;
  margin: 0 0 0 var(--tree-indentation, 1em);
  padding: 0;
  list-style: none;
}

.ui-tree ul::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1px;
  border-left: 2px solid #438eb9;
}

.ui-tree ul li {
  padding-left: (var(--tree-indentation, 1em) + 0.5);  /* indentation + .5em */
  padding-bottom: 4px;
}

.ui-tree ul li::before {
  content: "";
  position: absolute;
  top: (var(--tree-line-height, 2em) / 2); /* half the line-height */
  left: 0;
  width: var(--tree-indentation, 1em); /* same as indentation */
  height: 1px;
  border-top: 2px solid #438eb9;
}

.ui-tree ul li:last-child::before {
  background-color: white; /* same as body background */
  height: auto;
  top: (var(--tree-line-height, 2em) / 2); /* half the line-height */
  left: -1px;
  bottom: 0;
}

/* Level 3+ */
.ui-tree ul ul {
  margin-left: (var(tree-indentation, 1em) / 2);  /* half the indentation */
}
</style>
`;
//# sourceMappingURL=unique-tree-style.js.map