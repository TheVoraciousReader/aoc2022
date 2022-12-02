const fs = require('fs');

const testData = fs.readFileSync('day02-test.txt', 'utf8').replace(/\r/g, "").split(/\n/)
const data = fs.readFileSync('day02-input.txt', 'utf8').replace(/\r/g, "").split(/\n/)

const shapePoints = {
    'X': 1, //rock - A
    'Y': 2, //paper - B
    'Z': 3 //scissors - C
};

const roundPoints = {
    "win": 6,
    "draw": 3,
    "loss": 0
}

function rpsLogic(player1, player2, result = "null") {
    let outcome;
    let shape;

    const match = (p1, p2, res) => {
        player1 === p1 && player2 === p2 ? (outcome = res) : null;

        //part 2 - determine shape
        if(result != null){
            player1 === p1 && result === res ? (shape = p2): null;
        }
    }

    //win conditions
    match('C', 'X', "win");
    match('A', 'Y', "win");
    match('B', 'Z', "win");

    //loss conditions
    match('B', 'X', "loss");
    match('C', 'Y', "loss");
    match('A', 'Z', "loss");

    //draw conditions
    match('A', 'X', "draw");
    match('B', 'Y', "draw");
    match('C', 'Z', "draw");

    return [outcome, shape]

}

//part 1
function roundOutcome(data) {
    let totalScore = 0;

    data.map(elem => {
        const [opp, you] = elem.split(' ');
        const [res] = rpsLogic(opp, you);
        totalScore += shapePoints[you] + roundPoints[res];
    });

    console.log(totalScore);
}

//part 2
function setRoundOutcome(data) {
    let totalScore=0;

    const roundEnd = {
        'X': "loss",
        'Y': "draw",
        'Z': "win"
    }

    data.map(elem => {
        const [opp, you] = elem.split(' ');
        const [,shape] = rpsLogic(opp,you,roundEnd[you]);
        totalScore += shapePoints[shape] + roundPoints[roundEnd[you]];
    });

    console.log(totalScore);
}


roundOutcome(data);
setRoundOutcome(data);