// //let greet = func();
// console.log(greet("hello"));
// return func;

// function func() {
//   return function () {
//     return "Namaste";
//   };
// }

// let greet = func();
// console.log(greet());
// console.log(greet());

//to reduce this problem higher oeder function is introduced

function multipeFunction(funct, n) {
  for (let i = 1; i <= n; i++) {
    funct();
  }
}
let greet = function () {
  console.log("namaste");
};

multipeFunction(greet, 6);
