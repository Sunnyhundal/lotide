// The function counts the occurance of letters in a string
let countLetters = function(text) {
  let results = {};
  for (const element of text) {
    
    if (results[element]) {
      results[element] += 1;
    } else {
      results[element] = 1;
    }
    
    
  }
  return results;
};
//Exports countLetters for use outside file
module.exports = countLetters;
