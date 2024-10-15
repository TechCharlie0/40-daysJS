//function and parameter
function sayName(number1, number2) {
  let sum = number1 + number2;
  console.log(sum);
}
sayName(3, 4);

function sayMyName(username) {
  return `${username} just say hello to me`;
}
let name = sayMyName();
console.log(name);

//  function with object
let obj = {
  username: "isha",
  age: 22,
};
function objInFunction(anyobject) {
  console.log(`username is ${anyobject.username} and she is ${anyobject.age}`);
}
objInFunction({
  username: "robert",
  age: 35,
});

//scope level

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const channel = "youtube";
    console.log(username + channel);
  }
  //   console.log(channel);
}
// console.log(username);
