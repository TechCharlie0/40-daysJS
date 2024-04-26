//let greet = func();
console.log(greet("hello"));
return func;

function func() {
  return function () {
    return "Namaste";
  };
}

let greet = func();
console.log(greet());
console.log(greet());

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

//add subtract multiply

function multipleoperator(funo, x, y) {
  return funo(x, y);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

multipleoperator(add, 2, 3);
multipleoperator(subtract, 2, 3);
multipleoperator(multiply, 2, 3);

//even odd

function checkoddeven(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("wrong");
  }
}
