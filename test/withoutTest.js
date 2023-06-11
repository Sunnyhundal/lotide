const assert = require('chai').assert;
const without   = require('../without');

describe("#without", () => {
  it("returns an array with value removed. [1, 2, 3] without [3] for [1, 2]", () => {
    assert.deepEqual(without([1, 2, 3], [3]), [1, 2]);
  });

});
