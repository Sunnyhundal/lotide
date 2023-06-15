//Import eqArrays
const eqArrays = require('./eqArrays');
// A function designed to compare two objects

const eqObjects = function(object1, object2) {
  const keysOne = Object.keys(object1);
  const keysTwo = Object.keys(object2);
  
  // returns false if the two arrays do not have matching legnths
  if (keysOne.length !== keysTwo.length) {
    return false;
  }

  for (const keys of keysOne) {
    if(Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      if (!eqArrays(object1[keys], object2[keys])) {
       return false;
    }
     if (object1[keys] !== object2[keys]) {
      return false
     }
    } 
    return true;
  };
};
  


//Export eqObjects for use outside file
module.exports = eqObjects;