import {UniqueTree} from '../unique-tree.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('unique-tree', () => {
  test('is defined', () => {
    const el = document.createElement('unique-tree');
    assert.instanceOf(el, UniqueTree);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<unique-tree></unique-tree>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<unique-tree name="Test"></unique-tree>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<unique-tree></unique-tree>`)) as UniqueTree;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
