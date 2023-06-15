
const assert = require('chai').assert;
const takeUntil   = require('../takeUntil');

describe("#takeUntill", () => {
  it("returns [ 1, 2, 5, 7, 2 ] for takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0 )", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
  // it("returns Hello for [Hello, Lighthouse, Labs]", () => {
  //   assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  // })
  // it("returns Hello for [5,6,7]", () => {
  //   assert.strictEqual(head([5,6,7]), 5);
  // })
});






// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
// console.log(eqArrays(results1, [ 1, 2, 5, 7, 2 ]));
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
// console.log(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));