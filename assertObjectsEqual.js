const eqObjects = function(object1, object2) {
  const keysOne = Object.keys(object1);
  const keysTwo = Object.keys(object2);
console.log(keysOne);

  if (keysOne.length !== keysTwo.length) {
    return false;
  }

  for (const keys of keysOne) {
    if (eqArrays(object1[keys], object2[keys])) {
      return true;
    } else {
      return false;
    }
  }
  

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
    console.log(`Example label: ${inspect(actual)}`);
};

//test case
const shirtObject = { color: "red", size: "medium" }

assertObjectsEqual(shirtObject, shirtObject);