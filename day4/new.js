// let btn = document.querySelectorAll("button");

// for (btns of btn) {
//   btns.addEventListener("click", myGod);
// }
// function myGod() {
//   console.log("ohgod");
// }

// user.onclick = function () {
//   console.log("click it");
// };

// function user() {
//   console.log("you click me");
// }
// btn.onclick = user;

// //eventlistener

// let char = document.querySelector("h1");
// char.addEventListener("click", function () {
//   console.log("this is clicked");
// });

// let newBtn = document.querySelector("button");
// newBtn.addEventListener("click", function () {
//   let h1 = document.querySelector("h1");
//   let randomColor = getRamdomcolor();
//   h1.innerText = randomColor;

//   let div = document.querySelector("div");
//   div.style.backgroundColor = randomColor;
//   console.log("color updated");
// });

// function getRamdomcolor() {
//   let red = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);

//   let color = `rgb(${red}, ${blue}, ${green})`;
//   return color;
// }

//this eventhandler

let news = document.querySelector("button");
news.addEventListener("click", function () {
  console.log(this.innerText);
  this.style.backgroundColor = "red";
});
