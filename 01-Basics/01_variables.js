const accountId =231232
let accountEmail = "ashish.sharma@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

let accountState;

// accountId = 23 // -> Not allowed
accountEmail = "a@as.com"
accountPassword = "98765"
accountCity = "Gurugram"


/* 
Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])