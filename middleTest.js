//const eqArrays = require('../eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const middle = require('./middle')



// test cases
assertArraysEqual(middle([1]),[1]); //fail
assertArraysEqual(middle([1, 2]),[1.5]);//fail

assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
