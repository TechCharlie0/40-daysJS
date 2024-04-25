function func() {
  //func bhaneko variable ko name ho
  return function () {
    return "helli isha";
  };
}
let greet = func();
console.log("hello");

//hamle gari gari garni bhayera hamle high order function batw garna ateko

function multipleFunct(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}
let newGreet = function () {
  console.log("namaste sathiharu");
};

multipleFunct(newGreet, 7);
