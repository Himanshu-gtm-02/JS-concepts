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


