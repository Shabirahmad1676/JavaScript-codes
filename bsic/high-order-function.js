function a(b){
  console.dir(b);
}
a.age = 56
// function sayHi(){
//   console.log('Hiiiiiiiiiiiii');
  
// }

// a(sayHi)

a(function(){
  console.log('Hiiiiiiiiiii');
  // this is called anynomys function
})
