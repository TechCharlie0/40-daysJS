let inp = document.querySelector("input");
let btns = document.querySelector("button");
let ul = document.querySelector("ul");
btns.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  ul.appendChild(item);
  inp.value = "";

  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  item.appendChild(delbtn);
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});

// let delbtns = document.querySelectorAll("button");
// for (delbtn of delbtns) {
//   delbtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }
