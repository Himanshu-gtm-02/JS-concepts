const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task completed!")
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed")
})

//object literals
const user = {
    username: "Himanshu",
    logincount: 8,
    isloggedin: true
}
console.log(user.username)
console.log(this)

// function user(username, logincount, isloggedin)

function User(username, logincount , isloggedin){
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin

    return this
}
//without using new keyword..

// const userOne = User('himanshu',12, true)
// const userTwo = User('chai-aur-code',11,false)
// console.log(userOne)                            // this overwrites the details of userOne...


// to solve this overwrite, you can use "new" keyword.................

const userOne = new User('himanshu',12,true)
const userTwo = new User('chai-aur-code',11,false)

console.log(userOne)
console.log(userTwo) // now you can see, nothing is overwritten

