// Number 
/*
let score = 33
console.log(typeof score);
let inString = String(score)
console.log(typeof inString);
*/

// String
/*
let name  = "shabir"
let ToNumber = Number(name)
console.log(typeof ToNumber);
console.log(ToNumber);
*/

// Boolean
/*
let Available = ""
let BooleanInAvailabe = Boolean(Available)
console.log(BooleanInAvailabe);
*/

/*
let value = "33"
console.log(typeof value);

let valueInScore = Number(value)
console.log(typeof valueInScore);

let max = "33abc"
console.log(typeof max);
 let Inmax = Number(max)
 console.log(Inmax);
 */

//        *********OPERATIONS********** //

// console.log(2+2);
// console.log(2*3);
// console.log(2/2);

let first = "'shabir"
let second = "ahmad"
// console.log(first + second);
// let full = first + second
// console.log(full);

// console.log(1 + "2");

let num1 , num2 , num3
num1 = num2 = num3 = 2+2
// console.log(num1 , num2 , num3);

let randomNumber = 12
// randomNumber++
++randomNumber
// console.log(randomNumber);
// console.log(randomNumber);

let BigNumber = 1232784637459246n
// console.log(typeof BigNumber);

let id = Symbol('1234')
let AnotherId = Symbol('1234')
// console.log(id==AnotherId);

// Primitive Datatypes   ==>  Call By value  ==> A copy created original value not changeble 
let x = 5
let y = x //A copy created and assigned to Y
y = 10  //It does ot changes Original Value
// console.log(x);


// Non-Primitive Datatypes ==> Call By Refrence  ==>  A refrence to original  value passd which change the original value
let Obj1 =
 {
  name : 'John'
 }
let Obj2 = Obj1
Obj2.name = 'shabir'
// console.log(Obj1);  
// This is example of Non Primitive Data Types Or Call By Refrence