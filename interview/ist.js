// 👇🏽👇🏽👇🏽👇🏽

// this is because of hoisting

// console.log('Value of Age',age);

// var age = 12

// console.log('Value of age',age);

// Another one 👇🏽👇🏽👇🏽👇🏽

// this is because of Temporal Dead Zone
// age = 12

// console.log(age);

// let age = 344



// Another one 👇🏽👇🏽👇🏽👇🏽

// console.log(myFun);
myFun();

var myFun = function(){
  console.log('First');
}

myFun()

function myFun(){
  console.log('Second');
}

myFun()