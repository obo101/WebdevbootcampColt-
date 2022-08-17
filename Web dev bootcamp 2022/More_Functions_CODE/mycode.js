function collectEggs() {
  let totalEggs = 6;
}

//function expression excercise
const square = function (num) {
  return num * num;
};

//egg Laying excercise
const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg: function (eggCount) {
    //this method inc
    this.eggCount + 1; //this allowed me to acess egg count from the hen object
    return "EGG";
  },
};
const numbers = [1, 2, 3, 4];
function print(element) {
  console.log(element);
}
numbers.forEach(print);

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

// Write your code here
// const firstNames = fullNames.map((fullNames) => fullNames.first); correct

const firstNames = fullNames.map(function (person) {
  //teacher sol
  return person.first;
});

greet = (x) => {
  return "Hey " + x;
};
w;

//

function validusernames(usernames) {
  let filteredUsernames = usernames.filter(function (usernames) {
    return usernames.length < 10;
  });
  return filteredUsernames;
}

function allEvens(nums) {
  let checker = nums.every((score) => score % 2 == 0);
  return checker;
}
