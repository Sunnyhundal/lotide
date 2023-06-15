const letterPositions = function(sentence) {
  const result = {};
  
  for (let index = 0; index < sentence.length; index++) {
    let letters = [index];
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