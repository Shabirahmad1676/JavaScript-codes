"use strict";

// 🤚🏽 This in global space

console.log(this);
// this in global Space represent GlobalObject == Window ,Object . it is different in diffeent enviornment

// 🤚🏽 Inside a Function

function x() {
  // the value depends on strict and non-strict mode(window)
  console.log(this);
  // in strict mode value is undefined
}
// x()

// 🤚🏽 this in strict mode (this substitution)
// if the value of this keyword at any time is undefined or null , then this keyword  will be replaced with global object only in non-strict mode

// 🤚🏽 this keyword value also depend on how a function call
// if functon called regular , so it behave according to mode
// but  if it is like this
window.x();
// it will give you again GlobalObject == window

// 🤚🏽 this keyword inside object's method

// function VS method

let obj = {
  a: 10,
  x: function () {
    // so this is called method (Function as a part of object)
    console.log(this); //the value of this keyword in method is  this object
    // or
    console.log(this.a); //print 10
  },
};

obj.x();

// 🤚🏽 call , apply and bind methods (sharing Method)

//  🤚🏽 this keyword inside arrow function
// Arrow functon does not have their own THIS

let obj2 = {
  a: 10,
  x: () => {
    console.log(this); // it refers to enclosing lexical context == window Object
  },
};
obj2.x();

// OR

// Interview 👇🏽👇🏽👇🏽👇🏽👇🏽🤚🏽☝🏽👈🏽👉🏽


let obj3 = {
  b: 20,
  x: function () {
    // console.log(this)👇🏽;
   const y = () => {
      console.log(this);//what will be the output
      // this will behave like ☝🏽 because there enclosed lexical context is that function
    };
    y();
  },
};
obj3.x()

//this keyword inside DOM element

// refer to that HTML element