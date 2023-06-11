//Imports eqArray to help get a deeper look at arrays
const eqArrays = require('./eqArrays');
//Function compares two arrays to assess if they are equal or diffrent
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅  Assertion passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑  Assertion failed: ${arrayOne} !== ${arrayTwo}`);
  }
};
module.exports = assertArraysEqual;