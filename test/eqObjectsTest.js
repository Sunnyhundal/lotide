const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for {a:1, b:2}, {b:2, a:1}", () => {
    assert.strictEqual(eqObjects({a:1, b:2}, {b:2, a:1}), true);
  });
  it("returns true for {a:1, b:[2,3]}, {a:1, b:[2,3]}", () => {
    assert.strictEqual(eqObjects({a:1, b:[2,3]}, {a:1, b:[2,3]}), true);
  })
  it("returns false for {a:[1,2], b:2}, {a:[1,2], b:3}", () => {
    assert.strictEqual(eqObjects({a:[1,2], b:2}, {a:[1,2], b:3}), false);
  })
});
