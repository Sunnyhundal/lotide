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

const words = ["ground", "control", "to", "major", "tom"];

// const results1 = words.map(word => words[0]);
// console.log(results1);

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0]);
const results3 = map(words, word => word[Math.floor(word.length/2)]);
const results4 = map(words, word => word[word.length - 1]);



console.log(results1);
console.log(results2);
console.log(results3);
console.log(results4);

assertArraysEqual(results1[0], "g");
assertArraysEqual(results2[1], "c");
assertArraysEqual(results3[0], "u");
assertArraysEqual(results4[0], "d");


