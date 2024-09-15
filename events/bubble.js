
  const main = document.querySelector('.main')
  const container = document.querySelector('.container')
  const  p = document.querySelector('p')
  const button = document.querySelector('button')

// Syntax of Addeventlistener = b.addeventlistener('click',(e)=>{},third-argument)
// if we write e.stoppropagation() it will not bubble
// by default third argument is "false" 
// If we set it true = it will working reverse from outside to inside
// the third argument is also {once:true} ==which work only one time

  container.addEventListener('click',(e)=>{
    console.log('container Is Clicked');
  },true)

  main.addEventListener('click',(e)=>{
    console.log('main Is Clicked');
  },true)

  p.addEventListener('click',(e)=>{
    console.log('p Is Clicked');
  },true)

  button.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('button Is Clicked');
  },true)
  