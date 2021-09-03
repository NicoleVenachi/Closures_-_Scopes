var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello world';
// let world = 'Hello world +';
const helloWorld = 'Hello World!';
// const helloWorld = 'Hello World! +';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
} // las puedo accesar desde donde desee

anotherFunction();

const helloWorld = () => {
  globalVar = 'im global';
}
helloWorld();
console.log(globalVar);

const anotherFunction = () => {
  var localVar = globalVar = 'im global';
}
anotherFunction();
console.log(localVar);
