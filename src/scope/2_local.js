const hellooWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
}

hellooWorld();

var scope = 'im global';

const functionScope = () => {
  var scope = 'im just a local';
  const func = () => {
    return scope;
  }
  console.log(func());
}

functionScope();
console.log(scope); // no permite acceder a scope
