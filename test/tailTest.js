// importing tail and assertEqual
// const tail = require('../head.js');
// const assertEqual = require('../assertEqual');

//test case
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [ 2, 3 ] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [ 2, 3 ]);
  });
  it("returns Hello for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
});
