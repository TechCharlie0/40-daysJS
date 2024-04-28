let btns = document.querySelectorAll("button");

// yesma loop lauda for of launa parxa loop chai derai box athawa derai huda launi

for (btn of btns) {
  btn.onclick = sayHello;
}
console.dir(btns);

//yo arko tarikale milxa
btn.onclick = function () {
  alert("this is dangerous site");
};

//yo pani arko tarikako ho

function sayHello() {
  alert("hello");
}
btn.onclick = sayHello;

let hell = document.querySelector("h2");
hell.onclick = function () {
  console.log("hello");
};

function hells() {
  console.log("oppps");
}

//onmouseenter//
hell.onmouseenter = hells;
