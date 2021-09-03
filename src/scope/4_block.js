const fruiits = () => {
  if (true) {
    var fruits1 = 'apple';
    let fruits2 = 'kiwi';
    const fruits3 = 'banana';
    console.log(fruits2); // let y const en scope de bloque
    console.log(fruits3);
  }
  console.log(fruits1); //var emn scope de funcion

}

fruiits();

let taxi = 1;
{

  let tax =2;
  console.log(window.hard);
  console.log(tax); //creo a m en el lcal scope
}
console.log(tax);

const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

anotherFunction(); // si  lo hago con var, muestra siempre 10
