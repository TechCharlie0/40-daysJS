let num1 = parseFloat(prompt("first number"));
let num2 = parseFloat( prompt("second number"));
let num3 = prompt("which operation");

switch(num3) {
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
        console,log("Invalid operation");
}
