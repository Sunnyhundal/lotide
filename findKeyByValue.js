function findKeyByValue(category, nameOfShow) {
  const keys = Object.keys(category);
  for (let show of keys) {
 
    if (category[show] === nameOfShow) {
      return show;
    }
  
  
  }
  return undefined;
}

module.exports = findKeyByValue;

