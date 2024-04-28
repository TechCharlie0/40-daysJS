let btn = document.querySelectorAll("button");

for (btns of btn) {
  btns.addEventListener("click", myGod);
}
function myGod() {
  console.log("ohgod");
}

// user.onclick = function () {
//   console.log("click it");
// };

// function user() {
//   console.log("you click me");
// }
// btn.onclick = user;

//eventlistener

let char = document.querySelector("h1");
char.addEventListener("click", function () {
  console.log("this is clicked");
});
