
if(true){
    let a = 10
    const b = 20
    var c = 30
}
//console.log(a); // a print nahi hoga error de dega , kyuki wo wala 'a' block scope k andar define hua h bahar access nahii hoga
//console.log(b); // ye bhi same tarike se error dega
console.log(c); // ye print ho jaega , yhi problem h 'var' me

let d = 300
if(true){
    const d = 2;
    console.log("Inner d: ",d); // ye 2 value dega
}
console.log(d); // ye 300 value dega


// Nested Scope----------------------------------------

function one(){
     const username = "himanshu"

     function two(){
        const website = "youtube"
        console.log(username) // yha global scope variable access ho jaega or print kar dega
     }
     //console.log(website); // ye print nahi krega ,error de dega kyuki two() ka block scope me website define h jo ki bahar accesible nahi hoga

     two()
}
one() 


// another
if(true){
    const username1 = "himanshu"
    if(username1 === "himanshu"){
        const website1 = " youtube"
        console.log(username1 + website1)
    }
    //console.log(website) // website uske block scope k andar defined h to access nahi hoga
}
//console.log(username1) // ye username bhi us block scope k andar h to hum bahar access nahi kr sakte

// +++++++++++++++++++++ Intersting concept +++++++++++++++ 

addOne(5) // this will execute
function addOne(num){
    return num+1;
}

//addTwo(5) // this will generate error
const addTwo = function(num){
    return num+2;
}


// this Function----------------------------------------------------------

const user = {
    username: "hitesh",
    price: 999,

    welcome_message: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}
// user.welcome_message()
// user.username = "sam"
// user.welcome_message()

console.log(this); // ye global scope h iskke paas window object hota h , jo ki yha node me pata nahi lagta , wo browser me jaake dekhne milega 

function chai(){
    console.log(this) // ab yha function k andar block scope k andar this ko console.log karaya to bahut values aa gyi
}
chai()


function chai1(){
    let username = "hitesh"
    console.log(this.username) // yha bhi ye access nahi ho rha h , matlab ye context sirf objects  k andar valid h functions k andar nahi
}
chai1()

// --------------------------Arrow function----------------------
// 1. Explicit function
const addTwo2 = (num1 , num2) =>{
    return num1 + num2;
}
console.log(addTwo2(3,4))

// 2. Implicit Function
const addOne1 = (num1, num2) => num1 + num2 // no need to write return keyword here until you use {} curly braces after arrow
console.log(addOne1(2,1))

