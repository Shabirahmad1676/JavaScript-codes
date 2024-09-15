let URL = "https://cat-fact.herokuapp.com/facts"

const text = document.querySelector('.text')
const button = document.querySelector('.btn')

const getdata = async function fetchData() {
  let response = await fetch(URL);
  let data = await response.json();
  text.innerText = data[0].text;

}

// function getdata(){
//   fetch(URL).then((response)=>{
//     return response.json();}
//   ).then((data)=>{
//     text.innerHTML = data[0].text
//   })
// }

button.addEventListener('click',getdata)

// fetchData()