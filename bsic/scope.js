// what is Block scope & Shadowing in JS
//it comboines different statement for javascript when needed one statment
// Complete valid stament
{
  //compound statment ==. Blocked Scope
  let a = 10;
  console.log(a);
}

if(true) true

// OR this is also valid but if we need more statment we use Block
if(true) console.log('Shabir');

// Block Scope && Shadowing
var a = 100
let b = 200
const c = 300
{
  var a =10;
  let b =20;
  const c = 30;
  console.log(a,b,c);
}
console.log(a,b,c);

