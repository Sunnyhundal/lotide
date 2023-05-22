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

const middle = function(array) {
  let middleArray = [];
  let middleValue = 0;
  //If an array with length of 1 or 2 are passed, then return an empty array
  if (array.length === 1 || array.length === 2) {
    console.log(middleArray);
    return;
  }
  //how to handle arrays that are even
  if (array.length % 2 === 0) {
    middleValue = array.length / 2
    middleArray.push(middleValue);
    middleArray.push(middleValue + 1);
    console.log(middleArray);
    return;
// how to process everything else (odd)
  } else {
   middleValue = array.length / 2;
   middleArray.push(array[Math.floor(middleValue)]);
   console.log(middleArray);
   return;
  }
}
// test cases
  middle([1]);
  middle([1, 2]);

  middle([1, 2, 3]);
  middle([1, 2, 3, 4, 5]);
  middle([1, 2, 3, 4]);
  middle([1, 2, 3, 4, 5, 6]);