const urlDecode = function (text) {
  let newStrn = text.replace(/%20/g, " ").split("&",)
  let spltStrn = [];
  let newObj = {};

  for (let i = 0; i < newStrn.length; i++) {
      spltStrn.push(newStrn[i].split("="));
      newObj[spltStrn[i][0]] = spltStrn[i][1];
  } return newObj;
}
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
