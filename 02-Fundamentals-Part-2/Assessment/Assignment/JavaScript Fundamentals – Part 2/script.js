'use strict';

/** Functions */
// task 1
const describeCountry = (country, population, capitalCity) => {
  console.log(
    `${country} has ${population} and its capital city is ${capitalCity}`
  );
};
describeCountry('Pakistan', 22, 'Islamabad');

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
const percentageOfWorld3 = population => {
  return (population / 7900) * 100;
};

/** Arrays */
//task 1
const population = new Array(100, 200, 300, 4000);
console.log(population.length === 4);
const percentages = population.map(percentageOfWorld);
console.log(percentages);

// task 2
const neighbours = ['india', 'iran', 'afghanistan', 'china'];
neighbours.push('utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany')) {
  console.log(`Probably not a central European country :D`);
}
const indiaIndex = neighbours.indexOf('india');
neighbours[0] = 'Jamaica';
console.log(neighbours);

/** Objects */
const myCountry = {
  country: 'Pakistan',
  capital: 'Islamabad',
  language: 'Urdu',
  population: 23,
  neighbours: ['india', 'iran', 'afghanistan', 'china'],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people. ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}!`
    );
  },
  checkIsland() {
    this.isIsland = this.neighbours.length <= 0 ? true : false;
  },
};
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people. ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}!`
// );
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);
/** Loops */
