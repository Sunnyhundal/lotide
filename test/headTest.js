// import head.js and assertEqual.js
//const head = require('../head.js');
//const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns Hello for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  })
  it("returns Hello for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  })
});

//test cases
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
