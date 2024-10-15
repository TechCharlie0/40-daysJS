const myNum = [2, 3, 4];
const firstNum = 0;
const mytotal = myNum.reduce((accumulator, initialValue) => {
  return accumulator + firstNum + initialValue;
});
console.log(mytotal);
