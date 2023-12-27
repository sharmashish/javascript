// Object Literals
const mySymbol = Symbol("key1")

const myObj = {
    name:"Ashish",
    [mySymbol] : "mykey1", // using Symbol
    age: 24,
    location: "Delhi",
    email : "ashish@google.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Wednesday","Friday"]
}
// one way to call object
console.log(myObj.name); 

// another way to call object
console.log(myObj["age"]); 

// console.log(myObj[mySymbol]);

// type of symbol
// console.log(typeof myObj[mySymbol]); 


//Change the value
myObj.email = "ashish@microsoft.com"
 //no object value can not be changed with .freeze() function
//  Object.freeze(myObj) 


myObj.email = "ashish@paytm.com"
// console.log(myObj);

myObj.geeting = function(){
    console.log("Hello Sharma Bhai");
}

myObj.geeting2 = function(){
    console.log(`Hello Sharma Bhai,${this.name}`);
}

console.log(myObj.geeting());
console.log(myObj.geeting2());
