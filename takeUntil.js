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

const takeUntil = function(array, callback) {
    const results = [];
    for (let item of array) {
      if (callback(item)) {
        return results;
      }
      results.push(item);
    }
    return results;
  };


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
console.log(eqArrays(results1, [ 1, 2, 5, 7, 2 ]));;
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
console.log(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));