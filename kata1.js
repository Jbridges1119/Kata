let output = 0;
function sumLargestNumbers(numbers) {
  for ( let i = 0; i < numbers.length; i++) {
    output = output + numbers[i];
  } return output;
} 
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));