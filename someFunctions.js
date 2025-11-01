const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item) => {
    console.log(item);
    return item
})
console.log(values); //You can see here that undefined is printed when we try to return a value from the forEach loop.
  

//--------------------------------Filter-------------------------------------------------------------

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((nums) => {
    return nums > 4
})
console.log(newNums)

//------------------------------Map------------------------------------------------------------------
 const myNum = [1,2,3,4,5,6,7,8,9,10]
 const newNum = myNum
                    .map((num) => num*10)
                    .map((num) => num + 1)
                    .filter((num) => num > 40)
 console.log(newNum) // here this is map chaining


// -------------------------------------------Reduce----------------------------------------------------------
const myNumber = [1,2,3]

const myTotal = myNumber.reduce((acc,currVal) => {
    return acc + currVal;
},0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 900
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 2999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    
]

const  myBill = shoppingCart.reduce((acc,item) => {
    return acc + item.price;
},0)
console.log(myBill);