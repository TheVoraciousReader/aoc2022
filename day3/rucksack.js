const fs = require('fs');

const testData = fs.readFileSync('day03-test.txt', 'utf8').replace(/\r/g, "").split(/\n/)
const data = fs.readFileSync('day03-input.txt', 'utf8').replace(/\r/g, "").split(/\n/)

function assignPriority(char){
    if (char >= 'a' && char <= 'z') {
        return (char.charCodeAt(0)-96); //97 (lower)

    }
    if (char >= 'A' && char <= 'Z') {
        return (char.charCodeAt(0)-38); //-65 (upper) + 27 =-38
    }
    return 0;
}
//part 1
function sumOfPriorities(data) {
    var itemType = [];
    data.map(elem => {
        let first = elem.slice(0, elem.length / 2);
        let second = elem.slice(elem.length / 2, elem.length);
        for(let i = 0; i < first.length; i++){
            if(second.indexOf(first[i]) !== -1){
              itemType.push(first[i]);
              break;
        }
    }
    });
    
    let sum = 0;

    itemType.map(item => {
        sum += assignPriority(item);
    });

    console.log(sum);
}

//part 2
function badgePriorities(data) {
    var badgeType = [];
    
    const groups = new Array(Math.ceil(data.length / 3)).fill().map(_ => data.splice(0, 3))
    groups.map(group=> {
        for(let i=0;i<group[0].length;i++){
            if(group[1].indexOf(group[0][i]) !== -1 && group[2].indexOf(group[0][i]) !== -1){
                badgeType.push(group[0][i])
                break;
        }
    }
    });
    let sum = 0;
    badgeType.map(badge => { sum += assignPriority(badge)});

    console.log(sum);
    
}


sumOfPriorities(data);
badgePriorities(data);