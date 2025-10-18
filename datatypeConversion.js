const score = "33";

console.log(typeof score);

const score1 = "33abc";

console.log(typeof score1);

let valueInNumber = Number(score);
let valueInNumber1 = Number(score1);

console.log(typeof valueInNumber)
console.log(typeof valueInNumber1) 

console.log(valueInNumber1) // uper me iska type number dikha rha h , lekin yha agar hum print karaege to "NaN" print krrha h means "number nahi h"

console.log(valueInNumber) //is case me 33 string me tha pehle 1st line me lekin convert ho gya number me.

// conversion into a string

let number = 33;
let stringNumber = String(number);
console.log(typeof stringNumber); // this will convert number into a string

//------------------Operations-------------------------

let value = 3;
let negativeValue = -value;
console.log(negativeValue);


console.log("2" == 2);
console.log("2" === 2);

// stack and heap memory concept ------------------------

let myYoutubeName = "himanshugautamdotcom"
let anothername = myYoutubeName
console.log(anothername)
anothername = "chaiaurcode"
console.log(myYoutubeName)
console.log(anothername)

//-------------------------------------------------------
const variable = console.log(1);
console.log(typeof variable);

//-------------JS Concepts-------------------------------
//int, float , double etc are not valid in JS
//there is only one numeric type which is "Number"

let a = 2;
let b = 3.4;
let c = -5;

console.table([a,b,c]);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//you can see in the typeof of all the three variables , we get type as Number..

const bigNum = 34565463567834628;
console.log(typeof bigNum);

const bigNum1 = 34565463567834628n;
console.log(typeof bigNum);
//by applying n in the end , you can see that type changes to bigint

const isLoggedin = true; // we don't need to add boolean as a datatype here.

//-------------Memory in JS--------------------------------------------------------------------------
/* 
    1.Stack Memory
    2.Heap Memory

    => stack memory used in primitive data types.
    => Heap memory used in non-primitive data types(Reference data types).
*/
