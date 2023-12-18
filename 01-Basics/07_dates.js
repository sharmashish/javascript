// Dates

let myDate = new Date()
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof(myDate));

// let myNewDate = new Date(2023,0,23)
// let myNewDate = new Date("2023-01-23")
let myNewDate = new Date("2023/01/23")
// console.log(myNewDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let newDate = new Date()
// console.log(newDate.getDay());
// console.log(newDate.getHours());


let mstDate = newDate.toLocaleString('default',{
    weekday : "long",
})
console.log(mstDate);