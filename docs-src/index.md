---
layout: page.11ty.cjs
title: <unique-tree> ⌲ Home
---

# &lt;unique-tree>

`<unique-tree>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<unique-tree>` is just an HTML element. You can it anywhere you can use HTML!

```html
<unique-tree></unique-tree>
```

  </div>
  <div>

<unique-tree></unique-tree>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<unique-tree>` can be configured with attributed in plain HTML.

```html
<unique-tree name="HTML"></unique-tree>
```

  </div>
  <div>

<unique-tree name="HTML"></unique-tree>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<unique-tree>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;unique-tree&gt;</h2>
  <unique-tree .name=${name}></unique-tree>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;unique-tree&gt;</h2>
<unique-tree name="lit-html"></unique-tree>

  </div>
</section>
