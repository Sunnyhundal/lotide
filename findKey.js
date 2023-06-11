//Function finds a key value from an object based on the callback.
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};


//export find ley for use outside file
module.exports = findKey;