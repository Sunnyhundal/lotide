//Removes the first index of an array and returns the remaining array
const assertEqual = require('./assertEqual');

let tail = function(assertEqual) {
  return assertEqual.slice(1);
};

module.exports = tail;