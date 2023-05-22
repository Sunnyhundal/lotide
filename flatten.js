const eqArrays = function(arrayOne, arrayTwo) {
  let arrayCounter = 0;
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      arrayCounter ++;
    }
  }
  
  if (arrayCounter !== arrayOne.length) {
    return false;
  } else {
    return true;
  }
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅  Assertion passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑  Assertion failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const flatten = function(array) {
let newArray = array.flat();
return newArray
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));