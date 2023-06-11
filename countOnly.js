// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//Function designed to return allitems that have been selected to be counted (true or false)
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  
  return results;

};


//Export countOnly
module.exports = countOnly;