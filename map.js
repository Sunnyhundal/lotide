const words = ["ground", "control", "to", "major", "tom"];

// const results1 = words.map(word => words[0]);
// console.log(results1);

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

