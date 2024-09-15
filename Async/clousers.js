// global scope
// const name = 'Haseeb';

// Lexical Scope is when acess a variable which has global scope but variable having local scope is not acess outside
// function local(){
//   // local scope
//   // console.log(name);
// }

// local()

// function subscribe(){
//   const username = 'Shabir'
//   function display(){
//     console.log(username);
//   }
//   display()
// }

// subscribe()

// A Clouser is a function along with its lexical scope (when a function refrences to its inner scope) OR Function 

function makeFunc(){
  const username = 'Mozilla'
  function display(){
    console.log(username);
  }
  return display
}

var myFunc = makeFunc()
myFunc()
