const letterPositions = function(sentence, letter){
const result = {};
let letters =[];
for (let index = 0; index < sentence.length; index++) {
  
  if (sentence[index] !== " ") {
  letters.push(sentence[index]);
  }else{
  letters.push[index];
  continue;
  }
  
  if(!result[sentence[index]]) {
    result[sentence[index]] = [];
    result[sentence[index]].push(index);
  } else {
    result[sentence[index]].push(index);
  }

}

return result;
}
//let sentence = "lighthouse in the house";
//let string = sentence.split(' ');
//let test = Array.from(sentence)
//create if-else statement to push index results


console.log(letterPositions("lighthouse in the house"));
