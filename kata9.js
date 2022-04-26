const camelCase = function(input) {
  let newInput = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i-1] === " ") {
      newInput += input[i].toUpperCase()
    } else if (input[i] === " ") {
    } else {
      newInput += input[i];
    }
  } 
  return newInput;
};





console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
