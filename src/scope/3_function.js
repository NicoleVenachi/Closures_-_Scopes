
const fruits = () => {
  var fruits= 'apple';
  console.log(fruits);
}
fruits();
console.log(fruits); // no se va a imprimir

const anotherFuction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  y = 2;  // let es redeclarable

  console.log(x);
  console.log(y);
}

anotherFuction();
