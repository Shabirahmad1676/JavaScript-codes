// setTimeout(
//   console.log('hi')
//   ,2000)

// setTimeout('console.log("shabir");console.log("Ahmad")',2000)
// it store the console.logs to a new file and treat as a script file


// setTimeout return a number in console which is called => timer ID of settimeOut and having use in clearTimeOut(ID=>'number')

// clearTimeout() ==> is used to control the SettimeOut ,before the execution of given time

// const timer1 = setTimeout('console.log("Ahmad")',2000)
// const timer2 = setTimeout('console.log("khan")',4000)
// const timer4 = setTimeout(a,6000)
// clearTimeout(timer1)
// clearTimeout(timer2)
// clearTimeout(timer3)

function a(){
  console.log('hiiiiii');
  
}
// const timer3 = setTimeout(a(),6000)  //it is not good practise because here first function will be executed and after 6ms nothing will happened
// it runs only once

// but

// setInterval runs more than once

// const timer5 = setInterval('console.log("ahmad ")',1000)
// clearInterval(timer5)


