// Fundamentals part 1
// challenge 1
const marksWeight = 50; 
const marksHeight = 1.82;
const marksBMI = marksWeight/marksHeight**2;
console.log(marksBMI);

const johnsWeight = 60; 
const johnsHeight = 1.82;
const johnsBMI = johnsWeight/johnsHeight**2;
console.log(johnsBMI);

const marksHigherBMI = marksBMI>johnsBMI;
console.log(marksHigherBMI);

// challenge 2
if (marksBMI>johnsBMI){
    console.log(`Mark has higher BMI of ${marksBMI}than John ${johnsBMI}`);
}
else{
    console.log(`John has higher BMI of ${johnsBMI} than Marks ${marksBMI}`);
}

// challenge 3
const dolphinsScore = [96,100,1];
const koalasScore = [96,10,1];

let totalDolphinScore = dolphinsScore.reduce((acc,curVal)=>{return acc+curVal})
console.log(totalDolphinScore);

let averageDolphinsScore = totalDolphinScore/dolphinsScore.length;
console.log(averageDolphinsScore);

let totalKoalasScore = koalasScore.reduce((acc,curVal)=>{return acc+curVal})
console.log(totalKoalasScore);

let averageKoalasScore = totalKoalasScore/koalasScore.length;

console.log(averageKoalasScore);

if (averageDolphinsScore<averageKoalasScore && totalKoalasScore>100){
    console.log(`Koala team wins`);
}
else if (averageDolphinsScore>averageKoalasScore && totalDolphinScore > 100){
    console.log(`Dolphin team wins`);
}
else if (averageDolphinsScore===averageKoalasScore && totalDolphinScore >= 100 && totalKoalasScore>=100){
    console.log(`the score is a tie`);
}
else {
    console.log(`No team wins!!!`);
}

// coding challenge 4
const totalBill = 2000;
let tipAmount;
if (totalBill > 50 && totalBill < 300){
    tipAmount=totalBill*0.15;
}
else {
    tipAmount=totalBill*0.20;
}
console.log(totalBill+tipAmount);