const fs = require('fs');

const NUMBER_OF_TEST_STACKS = 3;
const NUMBER_OF_INPUT_STACKS = 9;

const [testStack, testCmd] = fs.readFileSync('day05-test.txt', 'utf8').replace(/\r/g, "").split(/\n\n/)
const [inputStack, inputCmd] = fs.readFileSync('day05-input.txt', 'utf8').replace(/\r/g, "").split(/\n\n/)

function parseCommands(stacks, command) {
    stack = stacks.split(/\n/);

    stack.reverse().shift();
    
    //STACKS
    stack = stack.reduce((b, row) => {
        const boxes = row.split('').filter((x, i) => i % 2).filter((x, i) => !(i % 2));

        boxes.forEach((box, index) => {
            if (box != ' ') {
                b[index].push(box);
            }
        });
        return b
    }, Array(NUMBER_OF_INPUT_STACKS).fill().map(_=>[]))

    //COMMANDS
    const arr = command.split(/\n/).map(cmd => cmd.match(/\d+/g)).join().split(',').map(x => +x); //extract numbers from cmds
    const cmd = new Array(Math.ceil(arr.length / 3)).fill().map(_ => arr.splice(0, 3)); //numBoxes,origStack,targetStack

    return [stack, cmd];
}

//part 1
function rearrangeStacks(stacks, command) {
    [stack, cmd] = parseCommands(stacks, command);

    for (let i = 0; i < cmd.length; i++) {
        while(cmd[i][0]-- > 0){
            stack[cmd[i][2]-1].push(stack[cmd[i][1]-1].pop())
        }
    }
    console.log(stack.map(s=>s.pop()).join())
}


//part 2
function stackConfiguration(stacks, command) {
    [stack, cmd] = parseCommands(stacks, command);

    for (let i = 0; i < cmd.length; i++) {
        const tmp = [];
        while(cmd[i][0]-- > 0){
            tmp.push(stack[cmd[i][1]-1].pop())
        }
        while(tmp.length != 0){
            stack[cmd[i][2]-1].push(tmp.pop())
        }
    }
    console.log(stack.map(s=>s.pop()).join())
}

rearrangeStacks(inputStack, inputCmd);
stackConfiguration(inputStack, inputCmd);