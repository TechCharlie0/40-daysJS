// let num1 = parseFloat(prompt("first number"));
// let num2 = parseFloat( prompt("second number"));
// let num3 = prompt("which operation");

// switch(num3) {
//     case "add":
//         console.log(num1 + num2);
//         break;
//     case "subtract":
//         console.log(num1 - num2);
//       break;
//     case "multiply":
//         console.log(num1 * num2);

//         break;
//     case "divide":
//         if (num2 !== 0) {
//             console.log(num1 / num2);

//         } else {
//             console.log("eror");
//         }
//         break;
//     default:
//         console,log("Invalid operation");

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
// const classInfo = {
//     aman:{
//         grade: "A",
//         city: "chitwan"
//     },
//     isha:{
//         grade: "A+",
//         city: "chitwan"



//     },
//     utsav:{
//         grade: "B+",
//         city: "chitwan"

//     }
// }

// const classInfo = [
//     {
//         name: "aman",
//         grade: "A",
//         city: "chitwan"
//     },
//     {
//        name: "isha",
//         grade: "A+",
//         city: "chitwan"



//     },
//     {
//         name: "utsav",
//         grade: "B+",
//         city: "chitwan"

//     }
// ];

const max = prompt("enter your max number");
//  1 dekhi max batw generate garna xa bhane random used garni ani max range le multiply ani round off garna math floor le garni
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("guess the number");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;

    }
    if(guess == random){
        console.log("you are right");
        break;

        

    }
    else{
      guess =  prompt("your guess was wrong try again");
    }
    
}










    