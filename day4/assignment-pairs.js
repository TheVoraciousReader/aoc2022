const fs = require('fs');

const testData = fs.readFileSync('day04-test.txt', 'utf8').replace(/\r/g, "").split(/\n/)
const data = fs.readFileSync('day04-input.txt', 'utf8').replace(/\r/g, "").split(/\n/)

function parseIntervals(data) {
    var startTimes = [];
    var endTimes = [];

    data.map(pairs => {
        const assignment = pairs.split(/,|-/).map(x => +x)
        //0,2 - start time; 1,3 - end time [indices]
        startTimes.push(assignment.filter((a, i) => i % 2 === 0))
        endTimes.push(assignment.filter((a, i) => i % 2 === 1))
    });

    return [startTimes, endTimes];

}
//part 1
function completeOverlap(data) {
    let completeOverlap = 0;

    const [startTimes, endTimes] = parseIntervals(data);

    for (let i = 0; i < startTimes.length; i++) {
        a = startTimes[i];
        b = endTimes[i];
        if (a[0] <= a[1] && b[0] >= b[1] || a[1] <= a[0] && b[1] >= b[0]) {
            completeOverlap++;
        }
    }
    console.log(completeOverlap);
}

//part 2
function partialOverlap(data) {
    let partialOverlap = 0;

    const [startTimes, endTimes] = parseIntervals(data);
    for (let i = 0; i < startTimes.length; i++) {
        a = startTimes[i];
        b = endTimes[i];
        if ((a[1] >= a[0] && a[1] <= b[0]) ||
        (b[1] >= a[0] && b[1] <= b[0]) ||
        (a[0] >= a[1] && a[0] <= b[1]) ||
        (b[0] >= a[1] && b[0] <= b[1])) {
            partialOverlap++;
        }
    }
    console.log(partialOverlap);

}

completeOverlap(data);
partialOverlap(data);