
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

// for(var i =0; i<5;i++){
//   setTimeout(function(){
//     console.log(i);
//   },i * 1000)
// }

// Output is 5,5,5,5,5 because of var has not Block Scope

// Interview Based Clousers
// /print 0,1,2,3,4,5 by using var in above example

// for(var i = 0; i < 5; i++){
  
  // Clouser 👵🏽 

//   function inner(i){
//     setTimeout(()=>{
//       console.log(i);
//     },i* 1000)
//   }
//   inner(i)
// }

// second clouser

function x(){

  var i =3 ;
  setTimeout(()=>{
    console.log(i);
  },2000)
}

x()












// 💡 Interview O/P Hoisting

var x =21;
var fun = function(){
  console.log(x);
  var x = 20;
}
// fun()

// interview Based

const fn = function(a,b,x,y,...num){
  console.log(x,y);
}
// fn(2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8)