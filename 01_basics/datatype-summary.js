// primitive data type

//  7 types : string , number, boolean , null,undefined, symbol , bigint

const score=100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId);

const bigNumber = 34344558563920472n



// Reference (non primitive)

// array , objects,functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"nikhil",
    age:19,
}

const myFuncion = function(){
    console.log("hello world");
    
}

console.log(typeof myFuncion);
