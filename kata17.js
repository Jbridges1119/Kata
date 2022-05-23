const urlDecode = function (text) {
  let obj1 = "";
  let obj2 = "";
  let result = {};
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "%" && text[i + 1] === "2" && text[i + 2] === "0") {
      obj1 += " ";
      i += 2
    } else if (text[i] === "=") {
      obj2 = obj1;
      obj1 = "";
    } else if (text[i] === "&") {
      result[obj2] = obj1;
      obj1 = "";
      obj2 = "";
    } else {
      obj1 += text[i];
    }
  } result[obj2] = obj1;
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

