/*
This is a math problem. I want to know a program where this problem can be solved using a program.
The inputs will be the boxes, bags and  individual flavors, and left after sales and the program will calculate the sold amount.
Question:
A store owner buys small, novelty party favours in bags of one dozen and boxes of one dozen bags (for a total of 144 favours in a box).
The store owner has 7 boxes, 2 bags, and 1 individual party favours at the start of the month. At the end of the month,
the store owner has 2 boxes, 8 bags, and 6 individual party favours left. The store owner sold how many boxes,
bags and individual flavors?

*/

let readlineSync = require('readline-sync');

function main(){

//input
let boxes = parseInt(readlineSync.question("please enter how maney boxes you have: "));
let bags = parseInt(readlineSync.question("please enter how maney bags you have: "));
let individualFlavors = parseInt(readlineSync.question("please enter how maney flavors you have: "));

let boxesLeft =  parseInt(readlineSync.question("please enter how maney boxes you have left: "));
let bagsLeft =  parseInt(readlineSync.question("please enter how maney bags you have left: "));
let individualFlavorsLeft =  parseInt(readlineSync.question("please enter how maney flavors you have left: "));

//process
//calculate how maney sold
let boxesSold = boxes - boxesLeft;
let bagsSold= bags - bagsLeft;
let individualFlavorsSold = individualFlavors - individualFlavorsLeft;

//output
console.log("you sold " + boxesSold + " boxes ");
console.log("you sild " + bagsSold + " bags");
console.log("you sold " + individualFlavorsSold + " flavors");

}

if (require.main === module)
{
    main();
}