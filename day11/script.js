function hello() {
  console.log("hello how are you?");
}

function demo() {
  console.log("calling hello fun");

  hello();
}
console.log("calling demo fun");
demo();
console.log("done");

//visualizinf the call stack

function one() {
  return 1;
}
function two() {
  return one() + one();
}
function three() {
  return two() + two();
}
function four() {
  let ans = three() + one();
  console.log(ans);
}

//single thread languade

let a = 25;
console.log(a);
let b = 20;
console.log(b);
console.log(a + b);

h1 = document.querySelector("h1");
setTimeout(() => {
  h1.style.color = "red";
}, 2000);

setTimeout(() => {
  h1.style.color = "green";
}, 3000);
