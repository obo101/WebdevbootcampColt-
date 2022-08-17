function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    // loops a certain number of times based on numtimes

    result += str;
  }
  console.log(result); //
}

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
}

function lastElement(array) {
  return array[array.length - 1];
}

function capitalize(CAP) {
  return CAP.charAt(0).toUpperCase() + CAP.slice(1); //charat seperate first characer , touppercase capitlize it , slice:get the remaining character
}

function sumArray(array2) {
  return array2.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  ); //return executes a user supplied callback function sum of array
}

let days = {
  // Object attaching a number to days
  1: "Monday",
  2: "Tuesday",
  3: "Thrsday",
  4: "Friday",
  6: "Saturday",
  7: "Sunday ",
};
function returnDay(daynum) {
  if (daynum > 7 || daynum < 1) {
    // statement that made check if its 7 or 1
    return null;
  } else {
    return days[daynum]; // it conected to object bank and function
  }
}
