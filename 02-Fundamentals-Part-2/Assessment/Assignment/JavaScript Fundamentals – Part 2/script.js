"use strict";
// task 1
const describeCountry = (country, population, capitalCity) => {
  console.log(
    `${country} has ${population} and its capital city is ${capitalCity}`
  );
};
describeCountry("Pakistan", 22, "Islamabad");

// task 2
function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

const china = percentageOfWorld(1441);
console.log(china);

// using function expressions
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const pakistan = percentageOfWorld2(22);
console.log(pakistan);

// using arrow functions
const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};
