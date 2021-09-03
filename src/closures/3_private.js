
const person = () => {
  var savedName = 'Name'; //valor por defecto
  return {
    getName: () => {
      return savedName;
    },
    setName: (name) => {
      savedName = name;
    }
  }
}

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Nicole');
console.log(newPerson.getName());
