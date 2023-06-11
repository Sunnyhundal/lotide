
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

function findKeyByValue(category, nameOfShow) {
  const keys = Object.keys(category);
for (let show of keys) {
//used for degugging
  console.log(`${show} => ${category[show]}`)

  if(category[show] === nameOfShow){
    return show;
  }
  
  
}
return undefined;
}

module.exports = findKeyByValue;

