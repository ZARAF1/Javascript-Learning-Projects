// LECTURE: Values and Variables
const country = 'Pakistan';
const continent = 'Asia';
const population = 220;
console.log(country, continent,population);

// LECTURE: Data Types
const isIsland = false;
let language;
console.log(country, continent,population,language);

// LECTURE: let, const and var
language = "english";

// LECTURE: Basic Operators & Strings and Template Literals 
const calculateHalfPopulation = population/2;
console.log(calculateHalfPopulation);

const populationOfFinland = 6;
const pakistanPopulationMoreThanFinland = population>populationOfFinland;
console.log(pakistanPopulationMoreThanFinland);
const averagePopulation = 33;
const populationMoreThanAverage= population>averagePopulation;
console.log(populationMoreThanAverage);
const description = `${country} is in ${continent}. It has population of ${population} million who speak ${language}!`
console.log(description);


// LECTURE: Taking Decisions: if / else Statements
if(population>averagePopulation){
    console.log(`${country} population is above average`);
}
else{
    console.log(`${country} population is ${population} million which is below average population of ${averagePopulation}. The difference being ${averagePopulation-population}!`);
}

// LECTURE: Type Conversion and Coercion 

/*
'9' - '5'; 
'19' - '13' + '17'; 
'19' - '13' + 17; 
'123' < 57; 
5 + 6 + '4' + 9 - 4 - 2;
*/

// LECTURE: Equality Operators: == vs. ===
/* let numNeighbours = prompt('How many neighbour countries does your country have?');
if (Number(numNeighbours)===1){
    console.log(`Only 1 neighbour`);
}
else if (Number(numNeighbours)>1){
    console.log(`More than one neighbour!`);
}
else {
    console.log(`No borders!`);
}
*/
// LECTURE: Logical Operator
if (population<60 && language==='english' && isIsland===false){
    console.log(`You should live in ${country}!`);
}
else {
    console.log(`${country} does not meet your criteria!`);
}


// LECTURE: The switch Statement
switch (language) {
    case 'chinese': 
    case 'mandarin': 
        console.log('MOST number of native speakers!');
        break;
    case 'urdu':
    case 'english':
        console.log('Spoken by many!');
        break;
    default:
        console.log('none matched');
        break;
}

// LECTURE: The Conditional (Ternary) Operator
population >33 ? console.log(`${country} population is above average!`):console.log(`${country} population is below average!`) ;