class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}
const tea = new Teacher("kaku","him@email","789")
tea.addCourse()

//static keyword

class User1 {
    static greet(){
        console.log("hello from class")
    }

    sayHi(){
        console.log("hello from object")
    }
}
User1.greet();
const u = new User1();
u.greet(); // this will not call greet...