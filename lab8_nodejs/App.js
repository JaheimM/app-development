/* console.log("Welcome to NodeJS by - Jahiem Mcleod");
console.warn('Warning! The file might be corrupted')
console.error('SYNTAX ERROR! Check spelling')
console.trace('Trace error in line.')

console.log('\n-------- Example 2: Gloval object, timer ----------')
setTimeout(()=>{console.warn("Time is over")}, 3000);

let count = 9;
const timer = setInterval(()=> {
    console.log(`Counting ${count}`)
    count -= 1
    if (count == 0) {
        clearInterval(timer)
    }
}, 2000)

console.log('\n---------- Example 3: Check or print direct or file --------')
console.log(`current directory ${__dirname}`)
console.log(`Current file ${__filename}`) */

console.log('\n----------- Example 4: working with different module --------');
// import the module
const name = require('./mod');

console.log(name.helper("Mark Grayson"));
console.log(name.id(9000));
console.log(name.email("MarkGrayson@InvincibleHigh.edu"));

console.log('\n----------- Example 5: Nodejs event module --------');
// import the nodejs module events
const events = require('events');
// user constuctor 'new' to create an object of events
const eventEmiter = new events.EventEmitter();

eventEmiter.on('test', (e) => {
    console.log(e);
})

eventEmiter.emit('test', 'Event Emitters in NodeJS');

console.log('\n------- Example 6: read file in nodejs -------');
const fs = require('fs');
fs.readFile('readmore.txt', 'utf-8', (error, data) => {
    console.log(data);
    console.log(`Error = ${error}`);
});

console.log('\n------- Example 7: Write files in nodejs --------');
let info = "This file has three names: \n1. Peter\n2. Martha\n3. Jason";
fs.writeFile('readmore.txt', info, (error) => {
    if(error) {
        console.log(`Error = ${error}`);
    }
});

console.log('\n------- Example 8: append data into an existing file in nodejs --------');
fs.appendFile("user_emails.txt", info, (error) => {
    if (error) {
        console.log(error)
    }
});

console.log('\n------- Example 9: remove files --------');
fs.unlink("user_emails.txt", (error) => {
    if (error) {
        console.log(error);
    }
});

console.log('\n------- Example 10: create files --------');
fs.open("newfile.txt", 'w', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('File saved!');
    }
});

console.log('\n------- Example 11: create directory --------');
fs.mkdir("new_directory", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Directory created!');
    }
});

console.log('\n------- Example 12: remove directory --------');
fs.rmdirSync("new_directory", (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Directory removed!');
    }
});