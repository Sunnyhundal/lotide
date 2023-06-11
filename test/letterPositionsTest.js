const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

describe("#LetterPositions", () => {
  it("returns index position [0] of the letter h in the string hello", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it("returns index position [1] of the letter e in the string hello", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  })
});
