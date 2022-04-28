const calculateChange = function (total, cash) {
  let result = {}
  let dif = cash - total
  const change = ['twentyDollar', 'tenDollar', 'fiveDollar', "twoDollar", "oneDollar", "quarter", "dime", "nickel", 'penny']
  const amounts = [2000, 1000, 500, 200, 100, 25, 10, 5, 1]
  for (let i = 0; i< amounts.length;i++) {
    if (dif / amounts[i] >= 1) {
      result[change[i]] = Math.floor(dif/amounts[i])
    }
    dif = dif % amounts[i]
  } return result
}


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));



/*let var = {
  key: value

}

var[key] = value
var[key1] = value2

*/





