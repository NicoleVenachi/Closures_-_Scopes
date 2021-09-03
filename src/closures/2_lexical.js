
const buildCount = (i) =>{
    let count = i; //builder
    const displayCount = () => {
      console.log(count++);
    }
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();


const otherCount = buildCount(10);
otherCount();
otherCount();
