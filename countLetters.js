

var countLetters = function(text){
  let results = {}
  for (const element of text) {
    
    if (results[element]) {
      results[element] += 1;
      } else {
      results[element] = 1;
      }
    
    
  }
  return results;
}
module.exports = countLetters;
