// Object Singleton

// const tinderUser =  new Object()
const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "Karan"
 tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const anotherUser = {
    email : "some@google.com",
    fullname : {
        userName : {
            firstName : "Bhawaani",
            lastName : "Choudhry"
        }
    }
}

// console.log(anotherUser.fullname.userName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// combine objects
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2} 
console.log(obj3);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


const course = {
    courseName : "Javascript",
    price : "999",
    corseInstructor : "Hitesh"
}

// console.log(course.corseInstructor);
const {corseInstructor : instructor} = course
console.log(instructor);

// JSON
// {
//     "name" : "Ashish"
//     "courseName" : "Javascript in Hindi",
//     "price" : "999",
// }

[
    {},{},{}
]