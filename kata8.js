const repeatNumbers = function (data) {
  let answer = "";
  let adding = "";
  for (let i = 0; i < data.length; i++) {
    if (answer !== "") {
      adding = ", ";
    }
    for (let x = 1; x <= data[i][1]; x++) {
      adding = adding + data[i][0].toString();
    } answer += adding;
  } 
  return answer;
};





console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
