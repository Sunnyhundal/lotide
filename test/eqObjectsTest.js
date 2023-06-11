const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');

describe("#eqObjects", () => {
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject= { size: "medium", color: "red" };
  it(`returns true for if two objects have matching values E.g shirtObject = { color: "red", size: "medium" } and anotherShirtObject= { size: "medium", color: "red" };` , () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

});
