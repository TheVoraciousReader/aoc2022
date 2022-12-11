const fs = require('fs');

const testData = fs.readFileSync('day06-test.txt', 'utf8').replace(/\r/g, "").split(/\n/)
const data = fs.readFileSync('day06-input.txt', 'utf8').replace(/\r/g, "").split(/\n/)

function detectMarkers(data, type) {
    if (type === 'packet') {
        marker = 4;
    } else if (type === 'message') {
        marker = 14;
    } else {
        console.log('Invalid type');
    }

    for (let i = 0; i < data.length - marker - 1; i++) {
        const signal = new Set(data.substring(i, i + marker));
        if (signal.size === marker) {
            console.log(i + marker);
            break;
        }
    }
}

//part 1
detectMarkers(data[0], 'packet')


//part 2
detectMarkers(data[0], 'message')