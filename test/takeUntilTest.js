
const assert = require('chai').assert;
const takeUntil   = require('../takeUntil');

describe("#takeUntill", () => {
  it("returns [ 1, 2, 5, 7, 2 ] for takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0 )", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
  })
  });
