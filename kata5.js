const urlEncode = function (text) {
  let trimText = text.trim();
  let newURL = "";
  for (let i = 0; i < trimText.length; i++) {
    if (trimText[i] === " ") {
      newURL += "%20";
    } else {
      newURL += trimText[i];
    }
  }
  return newURL;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
