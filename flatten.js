const flattenTwo = function(array, arr){
  newArray =[]
  for (let i = 0; i < array.length; i++) {
    
    if (Array.isArray(array[i])) {
      for (let index = 0; index < array[i].length; index++) {
        newArray.push(array[i][index]);
    }
  }else{
    newArray.push(array[i]);
  }
  }
  return newArray;
}

module.exports = flattenTwo;