
// funccion normal. No es un closure
const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`moneyBox: $ ${saveCoins}`);
}

moneyBox(5);
moneyBox(10);


// Con closures
const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins
    console.log(`moneyBox: $ ${saveCoins}`);
  }
  return countCoins
}

let myMoneyBox = moneyBox(); // aqui se crea el closure
myMoneyBox(4) // luego solo accede a segunda funcion
myMoneyBox(6);

// sin arrows
function mBox() {
  var saveCoins = 0
  console.log('hola');
  return function(coins) {
    saveCoins += coins;
    console.log(`plata: ${saveCoins}`);
  }
}

let platica = mBox();
platica(10);
platica(100);
