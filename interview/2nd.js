// var variable = 20;
// (()=>{
//   console.log(variable);
//   variable = 30;
//   console.log(variable);
// })()

// console.log(variable);
// var variable = 40
// console.log(variable);




// 👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽👇🏽 What is output

var variable = 10;

//In GEC ,Only for those varibale undefined is assigned which are outside or global 

(()=>{
  foo = 100;
  console.log(variable);
  var foo = 100;
  variable = 20;
  console.log(variable);
})()

console.log(foo);
console.log(variable);
var variable = 30


