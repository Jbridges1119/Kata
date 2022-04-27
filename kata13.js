const talkingCalendar = function (date) {
  let newDate = "";
  const months = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];
  newDate = months[Number(date.slice(5, 7)) - 1];
  if (date[8] == 0) {
    newDate += date[9];
  } else {
    newDate += date.slice(8, 10);
  }
  if (date[9] == 1 && date[8] != 1) {
    newDate += "st";
  } else if (date[9] == 2 && date[8] != 1) {
    newDate += "nd";
  } else if (date[9] == 3 && date[8] != 1) {
    newDate += "rd";
  } else {
    newDate += "th";
  }
  newDate += ", " + date.slice(0, 4);
  return newDate;
};


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
