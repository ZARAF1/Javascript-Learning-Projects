const dolphins = [210, 23, 71];
const koalas = [55, 54, 41];

const calcAverage = (arr) => {
  const sum = arr.reduce((acc, cVal) => {
    return acc + cVal;
  });
  return sum / arr.length;
};

let dolphinsAverage = calcAverage(dolphins);
let koalasAverage = calcAverage(koalas);

const checkWinner = (dA, kA) => {
  if (dA > kA * 2) {
    console.log(`Dolphin Team Wins: (Dolphins ${dA} vs Koalas ${kA})`);
  } else if (kA > dA * 2) {
    console.log(`Koala Team Wins: (Koalas ${kA} : Dolphins ${dA})`);
  } else {
    console.log(`None wins! (Dolphins ${dA} vs Koalas ${kA})`);
  }
};

checkWinner(dolphinsAverage, koalasAverage);
