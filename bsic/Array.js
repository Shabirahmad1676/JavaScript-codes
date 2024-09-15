     //                    ARRAY's IN JAVASCRIPT       //////
// declaration
// let myArr = new Array(12,23,345,56,656,"shabir" , false)
// let myArr = [12,34,45,56,"shabir" , true]

// Access an Array
// console.log(myArr[4]);

let myArr = new Array(12,23,345,56,656,"shabir" , false)
// let [first,second,...rest] = myArr;
// console.log(first,second,...rest);
// let [a,b=2345] = myArr
// console.log(a,b);

// methods
// No 1 ==> Values
/*
const arr1 = [12,34,46,57,68]
let anotherarr1 = arr1.values()
for (const value of anotherarr1){
  console.log(value);
}
  */
// No 2 ==> Length of an Array
// console.log(myArr.length);

// No 3 ==> Reverse
// console.log(myArr.reverse());

// No 4 ==> Sort
let arr2 = [1,3,2,4,,6,5]
// console.log(arr2.sort());

// NO 5 ==> At
// console.log(arr2.at(1));

// NO 6 ==> 

// console.log(myArr.push("my"));
// console.log(myArr);

// NO 7 ==> 
// console.log(myArr.pop());
// console.log(myArr);

// console.log(myArr.unshift("my-jan")); //insert at the beginning of array
// console.log(myArr);

// console.log(myArr.shift()); //delete from beginning
// console.log(myArr);

// indexof 
// 

let anotherArr =  myArr.join()
// console.log(myArr,"\n",anotherArr);

// console.log(myArr.slice(1,3,2));
// console.log(myArr);

// let NewArray = myArr.splice(1,3,)
// console.log(NewArray);
// myArr.splice(1,3,"agha","true")
// console.log(myArr);


// Together two array's using different methods

let myHeros = ["papa","dady","siblings"]
let otherheros = ["she","her_eyes","her_smile"]

                    // Push
// myHeros.push(otherheros)
// console.log(myHeros);
// console.log(myHeros[3][1])

                    // Concatination
// let AllHeros = myHeros.concat(otherheros)
// console.log(AllHeros);

                    // spread operator
let All_new_heros = [...myHeros,...otherheros]
// console.log(All_new_heros);


let myArray = [1,2,3,4,[54,34,45],["shabir","she",["her_smile","her_face"]]]
let anotherArray = myArray.flat(Infinity)
// console.log(anotherArray);


let MyName = "shabir"
// console.log(Array.isArray(MyName));

// To make Array from string
// console.log(Array.from(MyName));

let score1 =300
let score2 = 400
let score3 = 500
// console.log(Array.of(score1,score2,score3));

// Destructuring an array
const[a,b] = myArr
// or
const [,,c] = myArr
// OR
const[z,x,...v] = myArr
// OR
const{5:name} = myArr
// console.log(name);