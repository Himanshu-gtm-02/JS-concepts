// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password  = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("himanshu","him@email.com","123")
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

//behind the scene....................................................................................


function User(username,email,password){
    this.username = username;
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}acb`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User("himans","h@email.com","456")
console.log(tea.encryptPassword())
console.log(tea.changeUsername())