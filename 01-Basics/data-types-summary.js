// Primitive
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 101.1;
const isLoggedIn = false;
const outsideTemp = null;
let userMail;
const id = Symbol('1223');
const id2 = Symbol('1223');
const bigNumber = 345678908765435678908076543678n;

// console.log(id);
// console.log(id2);
// console.log(id===id2)
// console.log(typeof(bigNumber))




// Refernce (Non-Primitive)
// Array,Objects,Functions

const cricketers = ["Virat","Dhoni","Rohit"];
let myObj = {
    name: "Ashish",
    age:24
}


const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myObj)