const marvelHeros = ["Thor","Ironman","Spiderman"];
const dcHeros = ["Superman","Flash","Batman"]


// marvelHeros.push(dcHeros)

// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);

const newArray = [1,2,3,[4,5,6],7,[6,7,[5,6]]]

let real_array = newArray.flat(Infinity)
console.log(real_array);



console.log(Array.isArray("Ashish"))
console.log(Array.from("Ashish"))
console.log(Array.from({name:"Ashish"})) //intresting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));