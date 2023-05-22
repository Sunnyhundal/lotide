const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 