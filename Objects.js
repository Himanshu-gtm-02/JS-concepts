 const mySym = Symbol("key1")

 const jsUser = {
    name: "Himanshu",
    "full name": "Himanshu Gautam",
    [mySym]: "myKey1", // remember the syntax of symbol here
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedin: false,
 }
 console.log(jsUser.name)
 console.log(jsUser["full name"])
 console.log(jsUser[mySym])

 jsUser.email = "himanshu@google.com"
 console.log(jsUser.email)

 //Object.freeze(jsUser) //after this changes can't be made in object.
 jsUser.email = "himanshu@microsoft.com"
 console.log(jsUser.email)


 jsUser.greeting =  function(){
    console.log("Hello Js User");
 }

 jsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`)
 }

 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());

 const tinderUser = new Object() // this can be used to define object , This is a singleton object
 console.log(tinderUser)

 const tinderUser1 = {} // this also can be used to define an object, This is a non singleton object

 tinderUser1.id = "123abc"
 tinderUser1.name ="sunny"
 tinderUser1.isLoggedin = false

 console.log(tinderUser1) 

 const regularUser = {
   email: "some@gmail.com",
   fullName: {
      userfullname:{
         firstname: "hitesh",
         lastname: "choudhary"
      }
   }
 }
//  console.log(regularUser.fullName)
//  console.log(regularUser.fullName.userfullname)
//   console.log(regularUser.fullName.userfullname.firstname)



//combining objects-------------------------------------------
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({},obj1 , obj2)
console.log(obj3)

//Object de-structuring
const Course = {
   courseName: "js-in-hindi",
   price: "999",
   courseInstructor: "hitesh"
}
console.log(Course.courseInstructor);

const {courseInstructor} = Course; // This is how we can de-structure the object
console.log(courseInstructor);

const {courseInstructor: instructor} = Course;
console.log(instructor);