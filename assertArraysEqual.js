const eqArrays = function(arrayOne, arrayTwo) {
  let arrayCounter = 0;
  if (arrayOne.length !== arrayTwo.length) {
    console.log(`🛑🛑🛑 Arrays are not the same length: ${actual} !== ${expected}`);
  }
  
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      arrayCounter ++;
    }
  }
  
  if (arrayCounter !== arrayOne.length) {
    console.log(`🛑🛑🛑 Arrays do not match: ${arrayOne} !== ${arrayTwo}`);
  } else {
    console.log(`✅✅✅ Arrays match: ${arrayOne} === ${arrayTwo}`);
  }
};