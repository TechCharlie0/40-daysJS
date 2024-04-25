// //let greet = func();
// console.log(greet("hello"));
// return func;

function func() {
  return function () {
    return "Namaste";
  };
}

let greet = func();
console.log(greet());
console.log(greet());
