
// scopeee
var a = 'Hello';

function hello () {
  let b = 'Hello world';
  const c = 'Hello wolrd!';
  if (true) {
    let d = 'Hello World !!';
    debugger;
  }
}


hello()


// closures

const moneyBox = () => {
  debugger
  var saveCoins = 0;
  const countCoins = (coins) => {
    debugger
    saveCoins += coins
    console.log(`moneyBox: $ ${saveCoins}`);
  }
  return countCoins
}

let myMoneyBox = moneyBox(); // aqui se crea el closure
myMoneyBox(4) // luego solo accede a segunda funcion
myMoneyBox(6);
