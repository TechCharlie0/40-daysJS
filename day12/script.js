// h1 = document.querySelector("h1");
// p = document.querySelector("p");
// function changecolor(color, delay, nextcolorchange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextcolorchange) nextcolorchange();
//   }, delay);
// }

// changecolor("red", 1000, () => {
//   changecolor("orange", 1000, () => {
//     changecolor("blue", 1000, () => {
//       changecolor("yellow", 1000);
//     });
//   });
// });

function saveToDatabase(data, sucess, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    sucess();
  } else {
    failure();
  }
}

saveToDatabase(
  "apna college",
  () => {
    console.log("sucess");
    saveToDatabase(
      "hello world",
      () => {
        console.log("sucess2");
      },
      () => {
        console.log("sucess3");
      }
    );
  },
  () => {
    console.log("failure");
  }
);
