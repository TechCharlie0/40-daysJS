let num1 = parseFloat(prompt("first number"));
let num2 = parseFloat(prompt("second number"));
let num3 = prompt("which operation");

switch (num3) {
  case "add":
    console.log(num1 + num2);
    break;
  case "subtract":
    console.log(num1 - num2);
    break;
  case "multiply":
    console.log(num1 * num2);

    break;
  case "divide":
    if (num2 !== 0) {
      console.log(num1 / num2);
    } else {
      console.log("eror");
    }
    break;
  default:
    console, log("Invalid operation");
}
// let num1 = parseFloat(prompt("first number"));
// let num2 = parseFloat( prompt("second number"));
// let num3 = prompt("which operation");
// if(num3 == "add"){
//     console.log(num1 + num2);

// }
// else if( num3 == "subtract"){
//     console.log(num1 - num2);

// }
// else if(num3 == "multiply"){
//     console.log(num1 * num2);

// }
// else if (operation == "divide") {
//     if (num2 !== 0) {
//         console.log(num1 / num2);
//     } else {
//         console.log("Error");
//     }
// }
// else{
//     console.log("invalod");

// }
const classInfo = {
  am: {
    grade: "A",
    city: "chitwan",
  },
  is: {
    grade: "A+",
    city: "chitwan",
  },
  ut: {
    grade: "B+",
    city: "chitwan",
  },
};

const classInfo = [
  {
    name: "am",
    grade: "A",
    city: "chitwan",
  },
  {
    name: "is",
    grade: "A+",
    city: "chitwan",
  },
  {
    name: "ut",
    grade: "B+",
    city: "chitwan",
  },
];
