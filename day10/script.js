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
