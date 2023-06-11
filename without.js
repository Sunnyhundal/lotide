const without = function(array, value) {
  newArray = []
  array.forEach(function(element) {
   if (value.includes(element)) {
   } else { 
     newArray.push(element)
   }
 })
 return newArray
}

module.exports = without;
