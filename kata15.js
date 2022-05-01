const organizeInstructors = function (instructors) {
  let arr = [];
  let courses = [];
  let result;
  for (let i = 0; i < instructors.length; i++) {
    if (courses.includes(instructors[i].course)) {
    } else {
      courses.push(instructors[i].course);
    }
  }
  for (let x = 0; x < courses.length; x++) {
    arr.push([courses[x]]);
    arr[x].push([]);
  }
  for (let y = 0; y < instructors.length; y++) {
    for (let p = 0; p < arr.length; p++) {
      if (instructors[y].course == arr[p][0]) {
        arr[p][1].push(instructors[y].name);
      }
    }
  } result = new Map(arr);
  const obj = Object.fromEntries(result);
  return obj;
};







console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));


