const assert = require('chai').assert;
const countLetters   = require('../countLetters');

describe("#countLetters", () => {

  it("returns 4 for countLetters('lighthouse in the house')['h']", () => {
    assert.strictEqual(countLetters("lighthouse in the house").h, 4);
  });

});

console.log(countLetters("lighthouse in the house").h, 4);