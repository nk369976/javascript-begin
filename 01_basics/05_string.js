const name = "nikhil"
const repocount = 50

console.log(name + repocount);

console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('nikhil')

// console.log(gameName[0]);

// console.log(gameName.__proto__);
// 
// console.log(gameName.length);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const newStringOne = "  nikhil  "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nikhil.com/kumar@20saroj"

console.log(url.replace('@20','-'));

console.log(url.includes('nikhil'));









