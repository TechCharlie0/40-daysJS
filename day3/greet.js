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

//yei ma even ra odd check garna ko lagiii garxu

function oddEven(n) {
  if (typeof n === "number") {
    // Check if n is a number
    if (n % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  } else {
    console.log("Invalid input"); // If n is not a number
  }
}

function checkoddeven(n) {
  if (typeof n == "number") {
    if (n % 2 != 0) {
      console.log("odd");
    } else {
      console.log("even");
    }
  } else {
    console.log("invalid number");
  }
}

//yeslai high orger batw grda

function evenOddTest(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("this is not a number");
  }
}
