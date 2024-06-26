//addingelement
//document.createElement();

let newP = document.createElement("p");
newP.innerText = "hi i am a isha kandel";
console.dir(newP);

//appendchilds(element):to add the leement in last of the body
let body = document.querySelector("body");
body.appendChild(newP);
