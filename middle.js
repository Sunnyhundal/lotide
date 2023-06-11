// Function returns the middle value of an array.
const middle = function(array) {
  let middleArray = [];
  let middleValue = 0;
  //If an array with length of 1 or 2 are passed, then return an empty array
  if (array.length === 1 || array.length === 2) {
    return middleArray;
  
  }
  //How to handle arrays that are even
  if (array.length % 2 === 0) {
    middleValue = array.length / 2;
    middleArray.push(middleValue);
    middleArray.push(middleValue + 1);
    return middleArray;
    
    // How to process everything else (odd)
  } else {
    middleValue = array.length / 2;
    middleArray.push(array[Math.floor(middleValue)]);
    return middleArray;
   
  }
};

module.exports = middle;

