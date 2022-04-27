const multiplicationTable = function(maxValue) {
  let number = ""
  let grid = ""
  for (let i = 1; i <= maxValue; i++) {
    if (i >= 2) {
      grid = grid + "\n"
    }
    for (let x = 1; x <= maxValue; x++) {
      if (x === 1) {
        grid = grid + i * x
      } else {
        grid = grid + " " + (i * x)  
      }
    } 
  } return grid
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
