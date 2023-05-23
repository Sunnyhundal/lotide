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

const flattenTwo = function(array, arr){
  newArray =[]
  for (let i = 0; i < array.length; i++) {
    
    if (Array.isArray(array[i])) {
      for (let index = 0; index < array[i].length; index++) {
        newArray.push(array[i][index]);
    }
  }else{
    newArray.push(array[i]);
  }
  }
  return newArray;
}

//flattenTwo([1, 2, [3, 4], 5, [6]]);

// Flatten function array.flat()
/*const flatten = function(array) {
let newArray = array.flat();
return newArray
}*/

assertArraysEqual(flattenTwo([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);