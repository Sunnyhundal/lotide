function findKeyByValue(object, value) {
  const keys = Object.keys(object);
  for (let show of keys) {
 
    if (object[show] === value) {
      return show;
    }
  
  
  }
  return undefined;
}

module.exports = findKeyByValue;

