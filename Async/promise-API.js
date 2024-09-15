
// Promise API 
// 1) Promise.all([p1,p2,p3])
// 2) Promise.allSettled([p1,p2,p3])
// 3) Promise.race([p1,p2,p3])
// 4) Promise.any([p1,p2,p3])



// Syntax or Structure of Promise.all
// Promise.all([p1,p2,p3])
// it handles multpile Promises and takes an array of promises as a input and return an array as a result ; 
// Two Cases 
// 1)==> Success Case ==> and wait for all them to finish it send request parallel but the result will be come together
// 2)==> Reject Case ==> as soon as one of them get rejected , Promise.all will give an error so output will be the error , and it will not wait for other promises to get success and result is == [err1,err2,err3]

//Promise.allSettled() ==> is when if there is only I want only success promises whatever how many promises are failed , because in Promise.all() if one get rejected so all rejected but here if some promises are rejected then it will not give error like promise.all() and succes case is same like .call . ☝🏽 but what if some become rejected so it will wait for all to setteled and the result is like  [val1,err2,val3]


// Promise.race([p1,p2,p3]) ==> is name indicates that the one of them promise is success then first is settled(resolved or rejected)  because it is like a race and if the first give error then error will give you as a result


// Peomise.any([])   it is just wait for the First promise to resolved 



// Code 💻 for promise.all

const p1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('P1 is resolved');
  },3000)
})

const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // resolve('P2 is resolved');
    reject('P2 is rejected');
  },1000)
})

const p3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('P3 is resolved');
  },2000)
})


// Promise.all([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>{
//   console.error(err);
// })

// Promise.allSettled([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>{
//   console.error(err);
// })

Promise.race([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>{
  console.error(err);
})


// Promise.any([p1,p2,p3]).then((res)=>console.log(res)).catch((err)=>{
//   console.error(err);
// })