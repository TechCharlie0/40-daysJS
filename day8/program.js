let number = 110;

if (number > 100) {
  console.log("the number is greater than 100");
}
if (number < 100) {
  console.log("the number is not greater than 100");
}

// tyo string is greatee than 10 or not
let str = "appleisgood";
if (str.length > 10) {
  console.log("the string is long");
} else {
  console.log("the string is short");
}

// positive negative number
let a = 2;
if (a > 0) {
  console.log("the number is positive");
} else if (a < 0) {
  console.log("the number is negative");
} else {
  console.log("the number is zero");
}

// marks of a b c f
let x = 78;
if (x > 90) {
  console.log("you got a grade A+");
} else if (x > 80) {
  console.log("you got a grade A");
} else if (x > 70) {
  console.log("you got a grade B+");
} else if (x > 60) {
  console.log("you got a grade B");
} else {
  console.log("you got a grade f");
}

// multiply by 5 or not
let a = 0;
if (a > 0) {
  console.log("multiplied by 5");
} else if (a % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

//  yo chai tei 400 ki ta 4 le divide le hunxa
let number = 30;
if (number % 4 == 0 && number % 100 != 0) {
  console.log("divisible by 4");
} else if (number % 100 == 0 && number % 4 != 0) {
  console.log("divisible by 100");
} else {
  console.log("it is leap year");
}
