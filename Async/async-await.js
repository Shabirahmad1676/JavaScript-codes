// what is async ==> it is a function which always return a promise 
// async is a keyword
// What is await,==> "await" is a keyword which is only using inside async function and write only infront of a promise

// let's create


// const p = new Promise((resolve,reject)=>{
//   resolve('Promise Resolved Successfully💪');
// })

// async function getdata() {
  // return promise or value
  // in case of a value it will wrap this value with promise ,🤔 yes my dear 👵🏽
  // return p  //this p return a proomise

// }

// const dataPromise = getdata()
// console.log(dataPromise);

// res === response
// dataPromise.then((res)=>console.log(res))



// How it is different from other promise handlers




//                  💪🏽👉🏽👈🏽🤏🏽👉🏽👉🏽👉🏽👉🏽☝🏽☝🏽☝🏽☝🏽🤏🏽🤏🏽🤏🏽

// let's create

// const promiseOne = new Promise((resolve,reject)=>{
//   resolve('Successflly Done 💪')
// })

// This is a normal handling promise function
// function getPromise(){
//   promiseOne.then((res)=>console.log(res))
// }
// getPromise()

// Now how to handle with "async"

// async function promiseHandler() {
//   const val = await promiseOne
//   // here "await" is a keyword which is only using inside async function and write only infront of a promise
//   console.log(val);
// }

// promiseHandler()




//                    💪🏽👉🏽👈🏽🤏🏽👉🏽👉🏽👉🏽👉🏽☝🏽☝🏽☝🏽☝🏽🤏🏽🤏🏽🤏🏽

// Another Example  three  ==> in this example in normal handler function it will wait for settimeout and others console.log happens
// But 🤷‍♀️  stop  🤚🏽
// In async ,await JS Engine wait for promisse to resolved,  it will wait until promise occur or setTimeout function happens then other console.log happens

// yes my Dear 👵🏽 

const promiseTwo = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Successflly Resolved First 💪')
  },4000)
})

const promisethree = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('Second Promise Resolved')
  }, 9000);
})

// function handlerTwo(){
//   promiseTwo.then((res)=>console.log(res))
//   console.log("Shabir Ahmad");
// }

// handlerTwo()

async function promiseHandler() {
  console.log('hello World');

  const val = await promiseTwo
  console.log('Shabir Ahmad');
  console.log(val);

  const val2 = await promisethree
  console.log('Shabir Ahmad Two');
  console.log(val2);

  // Interview 
  // in this case both promises val and val2 will resolve parralell if both promises are same or not only and only if both have same timeout , and and if both have different time if first time is greater than second  , second will wait for first , but if second is greater than first the first will execute or resolve first
}
// promiseHandler()


//  💪🏽👉🏽👈🏽🤏🏽👉🏽👉🏽👉🏽👉🏽☝🏽☝🏽☝🏽☝🏽🤏🏽🤏🏽🤏🏽

// fetch ==> is a  Promise ,  and return response object
// fetch() =>response.json()=> result(json-value)

const Github_API = "https://api.github.com/uers/akshaymarch7"

async function FetchData(){
 try {
  const data =  await fetch(Github_API)//it gives response and in next line we convert it to JSON
  const jsonValue = await data.json()
  console.log(jsonValue);

 }catch (err) {
  console.log(err);
 }
}

FetchData()