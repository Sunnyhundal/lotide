const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

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

console.log(countLetters("lighthouse in the house"));