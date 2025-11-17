function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype) // here in prototype it gives a empty object, means function also inherit from "Objects"

function createUser(username,score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai",25);
const tea = new createUser("tea",250)
tea.printMe()