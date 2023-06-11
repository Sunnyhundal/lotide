const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  it("true if arrays passed into eqArrays are equal" , () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
})
