for (let i = 0; i <= 10; i++) {
  // console.log(i);
}

let MyArray = ["Shabir","ahmad","she"]

for(let index = 0 ; index<MyArray.length;index++){
  // console.log(MyArray[index]);
}

// let score = 50
// while(score>=50){
  // console.log("Please Work more to chase it!");
  // score++;
// }

// do {
  
// } while (condition);


// Array Specific Loop
// for of , for in , for each

// let MyValues = [1,2,3,4,5,6,7,8,5]

// for(const vakue of MyValues){
  // console.log(vakue);
// }

// let MyString = "Shabir Ahmad"
// for(const char of MyString){
//   if(char === " ")
//     // break 
//   // continue
//   // console.log(char);
// }


// Maps

let MyMap = new Map()
MyMap.set('Pak',"Pakistan")
MyMap.set('PK',"Pukhtoon Khwa")
MyMap.set('Pak',"Pakistan") 
MyMap.set('US',"United State") 
//Duplicate not working
// console.log(MyMap);
// console.log(MyMap.get('PK'));
// console.log(MyMap.delete("Pak"));
// console.log(MyMap.size);
// console.log(MyMap.has('USA'));
// MyMap.clear()
// console.log(MyMap.size);

for(const [MapValue,Key] of MyMap){
  // console.log(MapValue,Key);
}


// For In Loop is used for to iterate mainly  Objects
let MyObject = {
  JS  : "JavaScript",
  Py  : "Python",
  "C++" : "C plus PLus"
}

for(const key in MyObject){
  // console.log(key);
  // console.log(MyObject[key]);
  // console.log(`${key} stands for ${MyObject[key]}`);
}


// let programming_language = ["JS","C++","Python"]


// for(const languages in programming_language){
 // Used for Iterate index of an Array
//   console.log(languages);
// }

// programming_language.forEach( (val,number)=>{
  // console.log(val,number);
// } )

// programming_language.forEach(function (val) {
  // console.log(val);
// })


let UserData = [23,45,56,734,895,645]
// let FilterValue = UserData.filter( (num)=>  num > 49  )
// let FilterValue = UserData.filter( (num)=>  {return num > 49}  )
// let FilterValue = UserData.map( (num)=>  {return num > 49}  )

console.log(FilterValue);