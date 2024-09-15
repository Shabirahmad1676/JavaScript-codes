function MyIntro(){
  console.log("My name is Shabir Ahmad");
}
// MyIntro()

function AddTwoNumber(_number1 , _number2) {

  // return num1 + num2
   result =  _number1 + _number2
  return result
  console.log("Executed");

}
let sum = AddTwoNumber(2,3)
// console.log(sum);
// AddTwoNumber(3,4)

function userLoggedIn(username){
  if(username === undefined){
    console.log("Please ! Enter a Valid Username!");
    return
  }
  return `${username} just logged In`
}

// console.log(userLoggedIn());


// Rest Operator
function CalculatePrice(...num1){
  return num1

}
console.log(CalculatePrice(3,3,4,5));

let user = {
  name : "shabir",
  Price : 999,
}
function handleObject(anyobject){
  console.log(`My name is ${anyobject.name} and price is ${anyobject.Price}`)
}
// handleObject(user)
// handleObject({name : "Ahmad",Price : 1000})

// Scopes ==> Local & Global

/*
let a =3
const b = 4
var c = 5
console.log(a,b,c);
*/

if(true){
  let a =3
  // console.log("INNER :",a);
const b = 4
// console.log("INNER :",b);
var c = 5

}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const Newuser = "You"
  console.log("First Called!");
  function Two(){
    const id = 234
    console.log(Newuser);
    console.log(id);
  }
  // console.log(id);

  Two()
}
// console.log(Newuser);
// console.log(id);
// one()


// Hoisting ==> Functions are Hoisted

// my(4)
function my(num1){
 return num1 + 1
}
// my(4)

// 💡 Interview O/P Hoisting

var x =21;
var fun = function(){
  console.log(x);
  var x = 20;
}
fun()

// +++++++++++++++++_____--------______Expression ___+_+_+_+_+_+__+_+_+__

// /Expression 
// another(6) //It will not work means not calling before initialization
const another = function(num2){
  return  num2 + 1
}
// another(5)


// Arrow Function and this keyword 
const ANewUser = {
 FullName : "Shabir Ahmad",
  AnAlert : function(){
    console.log(`${this.FullName} Please Log In`);
    console.log(this);
  }
}
// ANewUser.AnAlert()
ANewUser.FullName = "MY Heart"
// ANewUser.AnAlert()

// In function this keyword not worked
function heart(){
  let just = "shabir"
  console.log(this.just);
}
// heart()

// Arrow Function
//  ()=>{}    ---> This is syntax of Arrow functuion
// Method 1
const function1 = () =>{
  console.log("Shabir");
}
// function1()

// Method 2
// const Addition = (num1,num2) => num1 + num2
// console.log(Addition(4,5));

// Method 3
const Addition = (a,b) => (a+b)
// console.log(Addition(3,6));

// Object return in function Arrow
const my_user = () => ({username : "shabir"})
// console.log(my_user());


// console.log(ArrowFunction(2,10));
const ArrowFunction = (a,b)=>{
 return a+b
}

// console.log(ArrowFunction(2,10));

// First Class Function

function square(num){
  return num * num
}

function display(ftn){
  console.log(ftn(5));
}

// display(square)


// 

































