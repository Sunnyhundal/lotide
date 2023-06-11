const assert = require('chai').assert;
const map   = require('../map');


const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("returns [0] index string and the first letter in ground", () => {
    assert.strictEqual(results1[0], "g");
  });
  it("returns [1] index string and the first letter in control", () => {
    assert.strictEqual(results2[1], "c");
  });
  it("returns last index string and the first letter in ground", () => {
    assert.strictEqual(results4[0], "d");
  })
});


const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0]);
const results3 = map(words, word => word[Math.floor(word.length/2)]);
const results4 = map(words, word => word[word.length - 1]);
