function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("himanshu"))

//if you didn't passed anything in the argument then-->

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage()) // undefined just logged in




function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500)) // we get only one num/price as output

//to get all the prices 

function calculateCartPrice1(...num1){
    return num1;
}
console.log(calculateCartPrice1(200,400,500))



//using object into function

const user = {
    username: "himanshu",
    price: 199
}
function handleObject(anObject){
    console.log(`username is ${anObject.username} and price is ${anObject.price}`)
}
handleObject(user)

