let obj = {
  name : 'Shabir',
  age : 20
}

// let obj2 = obj
// so this is not way of copy 
// obj2.name = 'Ahmad'
// console.log(obj);
// console.log(obj2);

// so how to make copy ???

let obj3 = {...obj}
obj3.name = 'Khan'
console.log(obj);
console.log(obj3);