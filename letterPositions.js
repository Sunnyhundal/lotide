const letterPositions = function(string) {
  const result = {};
  
  for (let index = 0; index < string.length; index++) {
    let letters = [index];
    if (string[index] !== " ") {
      letters.push(string[index]);
    } else {
      letters.push[index];
      continue;
    }
  
    if (!result[string[index]]) {
      result[string[index]] = [];
      result[string[index]].push(index);
    } else {
      result[string[index]].push(index);
    }

  }

  return result;
};

module.exports = letterPositions;