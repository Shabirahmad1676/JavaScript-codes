// _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+
// Immediately Invoked  Function Expression IIFE 

// (function DataBase(){
//   console.log("DataBase connected");
// })();

// ( ()=>{console.log("Next Function");} )()

// ( (male) => {console.log(`Hi ${male}`)})('Shabir')

var x = 5
function foo(){
  var y = 15
  console.log(x);
  console.log(y);
}

// foo()
// console.log(x);
// console.log(y);


// Interview Based Question's

// Q no 1

(function (x){
  return (function (y){
    console.log(x);
  })(2)
})(1)

// Q no 2

// for(let i =0; i<5;i++){
//   setTimeout(function(){
//     console.log(i);
//   },i * 1000)
// }

// but what is output of this

for(var i =0; i<5;i++){
  setTimeout(function(){
    console.log(i);
  },i * 1000)
}

// Output is 5,5,5,5,5 because of var has not Block Scope