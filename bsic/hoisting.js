// This is a normal case
// var a = 12
// console.log(a);

// function b(){
//   console.log('Shabir');
// }
// b()

// Hoisting Phase

console.log(c);

d(); // regular function are hoisted

console.log(d); //it will give whole function because Another GEC is created

e(); //error because it is not a function

console.log(e); //undefined ==> bcause it is treated as a variable
// debugger
var c = 45;

function d() {
  console.log("Hoisting");
}

var e = function () {
  console.log("This is Function Expression");
};

var f = ()=>{
  console.log('Arrow function');
}