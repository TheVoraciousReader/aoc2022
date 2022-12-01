const fs = require('fs');

const testData = fs.readFileSync('day01-test.txt', 'utf8').replace(/\r/g,"").split(/\n\n/)
const data = fs.readFileSync('day01-input.txt', 'utf8').replace(/\r/g,"").split(/\n\n/)

function parseCalories(data){
    const toNumber = num => +num;

    const cals = data.map(element => {
        const cal = element.split(/\n/).map(toNumber);
        return cal.reduce((prev,curr)=>prev+curr);
    });

    const sortCalories =  [...cals].sort((a,b)=>b-a);

    return sortCalories;
}

// part 1
function maxCalories(data){
    console.log(parseCalories(data)[0]);
}

//part 2
function topThreeMaxCalories(data){
    const elves = parseCalories(data).slice(0,3).reduce((prev,curr)=>prev+curr);
    console.log(elves);
}

maxCalories(data);
topThreeMaxCalories(data);