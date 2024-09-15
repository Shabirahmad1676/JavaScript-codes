const arr = ['january','february','march']


// arr.forEach((month,index)=>{
//   console.log(month,index);
//   return month.toUpperCase()
// })


// Map ==> create a new array from their existing array and takes three arguments i-e ==> currentElement, index, and array


const nums = [1,2,3,4,5]
// const MultiplyThree = nums.map((curr,index,arr)=>{
//   return curr * 3

// })


// const Months = arr.map((month)=>{
//   console.log(month);
  
// })


// console.log(
//   arr.map((month,index,array)=>{
//     console.log(month,index,array);
//     return month.toUpperCase()
//     // here the 'return' return an array
//   })
// );


// Filter ==> is only return those elements which fullfill the provided criteria like given conditions

// console.log(
//   nums.filter((num)=>{
//     return num > 2
//   })
// );


// Reduce ==> is making the whole array into a one element like to ad all the array etc
// But 🤚🏽 ==> in Reduce there are accummulator(result of all previous computation), currentValue, index, array
// number.reduce((acc,curr,index,arr)=>{},0) ==. this is the syntax 
const number = [1,5,2,8,5]

// Find sum of array's
// const output = number.reduce((sum,curr,index,arr)=>{
//   return sum + curr
// },0)

// console.log(output);

// const output = number.reduce((max,curr)=>{
//  if(curr > max){
//   max = curr
//  }
//   return max

// },0)

// console.log(output);


// Exercise O/P based Questions

let students = [
  {name:'Shabir',marks:80,rollNumber:31},
  {name:'haseeb',marks:70,rollNumber:15},
  {name:'Shairee',marks:50,rollNumber:7},
  {name:'khan',marks:40,rollNumber:31}
]


// return names in upperCase
const Capitalnames =  students.map((curr)=>{
   return curr.name.toUpperCase()
}) 
// console.log(Capitalnames);



//Return details of only those students who scored more than 60
const details = students.filter((stu)=>stu.marks > 60)
// console.log(details);


// return sum of marks
const allmarks = students.reduce((acc,curr)=>{
  return acc + curr.marks
},0)
// console.log(allmarks);

// return those names only whose marks are > 60

const greatermarks = students.filter((numbers)=>{
  if(numbers.marks > 60)
    return true
}).map((noom)=>{
  return noom.name
})

console.log(greatermarks);
