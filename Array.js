const myArr = [0,1,2,3,4,5]
const myArr1 = new Array(1,2,3,4)

console.log(myArr)
console.log(myArr1)

//Array Methods--------------------------------
myArr.push(6)
console.log(myArr)
myArr.pop() // delete the last element
console.log(myArr)

myArr.unshift(9)
console.log(myArr)

myArr.shift() // remove element from starting
console.log(myArr)

console.log(myArr.includes(9))

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)


//slice and splice

console.log(myArr)
const myn1 = myArr.slice(1,3) // include 1st and 2nd indexed element but excluding 3rd
console.log(myn1)
console.log(myArr) // you feel no change in the original array.

const myn2 = myArr.splice(1,3)
console.log(myn2) // prints you the indexed 1 , 2  , 3 elements including 3rd index also
console.log(myArr) // you feel change in the original array, from[1,3] elements got deleted.

const marvel_heroes = ["batman","spiderman"]
const dc_heroes = ["thor","king"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes)

const allheroes = marvel_heroes.concat(dc_heroes)
console.log(allheroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(another_array)
console.log(real_another_array)

console.log(Array.from("Himanshu")) // this will  crate array of the given string.
console.log(Array.from({name: "Himanshu"})) // isme hume dena pdega ki keys ka array banana h ya values ka , nahi to ye empty array dega

let score_1 = 100
let score_2 = 200
let score_3 = 300

console.log(Array.of(score_1,score_2,score_3)) // create array using these three scores.

