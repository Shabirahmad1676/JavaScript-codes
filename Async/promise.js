// const promiseOne =new Promise(function(resolve,reject){

//   setTimeout(function(){
//     console.log('Async Task');
//     resolve() //it will connect the lower One
//   },1000)

// })

// // here, then is directly work with resolve
// promiseOne.then(function(){
//   console.log('Promise ');
// })

// // Another Way Of Promises
// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log('Async two 🥙');
//     resolve()
//   },1000)
// }).then(function(){
//   console.log('Promise 2 resolved!!');

// })

// // Example Three
// const promseThree = new Promise(function(resolve,reject){
//   setTimeout(
//     resolve({username:'Shabir',age:34})
//     ,1000)
// })

// promseThree.then(function(user){
//   console.log(user);

// })

// Example Four

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Shabir", pw: "1234@abc" });
//     } else {
//       reject("Error!Something went gone wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   }).finally(()=>console.log('Finallly Done')
//   );

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ name: "Shabir", pw: "1234@abc" });
    } else {
      reject("Error!Something went gone wrong");
    }
  }, 1000);
});

async function  consumeFive(){
  // const response  = await promiseFive
  // console.log(response);
  try {
    const response = await promiseFive
    console.log(response);
    
  } catch (error) {
    console.log(error);
    
  }
  
}

consumeFive()