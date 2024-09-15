// Declaration

let MySymbol = Symbol("MySymbol1")

let MyObj = {
  name : "Shabir",
  "nick name" : "Shabir Ahmad Khan",
  age : 21,
  city : "Mardan",
  Alive : true,
  hobbies : ["cricket" , "Youtube"],
  // [mysym] : "Mykey1"
}

// Acessing
// console.log(MyObj.name)
// console.log(MyObj["name"])
// console.log(MyObj[mysym]);
// Not Acessible Or Not do like this 
// console.log(MyObj[name]);
// console.log(MyObj.nick name);


const MyUser = {}

MyUser.name = "Shabir"
MyUser.age = 21
// console.log(MyUser);


let Userdata = {
  UserType : "Student",
  UserName : {
    firstName : "Shabir",
    lastName : "Ahmad",
  }
}
// console.log(Userdata.UserName.firstName);
// To identify a property
// console.log(Userdata.hasOwnProperty('Shabir'));
// console.log(Object.keys(Userdata));

let Obj1 = {a:1,b:2}
let Obj2 = {c:3,d:4}
// const Obj3 = Object.assign({} , Obj1 , Obj2)
const Obj3 = {...Obj1 , ...Obj2}
// console.log(Obj3);


let Shop = {
  name : "Hpal Brand",
  Owner : "Shabir",
  Price : "Vary"
}

const {name} = Shop
console.log(name);
const {name : nme} = Shop
// console.log(nme);






