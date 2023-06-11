// Function does a deeper look at two arrays
const eqArrays = function(arrayOne, arrayTwo) {
  let arrayCounter = 0;
  //Compares if two arrays have a similar length and if they don't a false value is returned
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  //If the two arrays ahve matching values a counter is updated.
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      arrayCounter ++;
    }
  }
  // If the arrayCounter does not match the  length of arrayOne then a false value is returned.If they match true is returned.
  if (arrayCounter !== arrayOne.length) {
    return false;
  } else {
    return true;
  }
};

//export eqArrays for use outside of file
module.exports = eqArrays;

