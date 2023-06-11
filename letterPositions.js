const letterPositions = function(sentence, letter) {
  const result = {};
  let letters = [];
  for (let index = 0; index < sentence.length; index++) {
  
    if (sentence[index] !== " ") {
      letters.push(sentence[index]);
    } else {
      letters.push[index];
      continue;
    }
  
    if (!result[sentence[index]]) {
      result[sentence[index]] = [];
      result[sentence[index]].push(index);
    } else {
      result[sentence[index]].push(index);
    }

  }

  return result;
};

module.exports = letterPositions;