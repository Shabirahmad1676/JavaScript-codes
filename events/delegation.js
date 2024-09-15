const list = document.querySelector('.list')
const items = document.querySelectorAll('.items')
 const a = document.querySelector('a')

a.addEventListener('click',(e)=>{
  e.preventDefault()
})

list.addEventListener('click',(e)=>{
  console.log(e.target.parentNode);
  let removeit = e.target.parentNode
  removeit.remove()
})