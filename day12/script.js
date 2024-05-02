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

// function saveToDatabase(data, sucess, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     sucess();
//   } else {
//     failure();
//   }
// }

// saveToDatabase(
//   "apna college",
//   () => {
//     console.log("sucess");
//     saveToDatabase(
//       "hello world",
//       () => {
//         console.log("sucess2");
//         saveToDatabase(
//           "isha",
//           () => {
//             console.log("sucess3");
//           },
//           () => {
//             console.log("failure3");
//           }
//         );
//       },
//       () => {
//         console.log("fail2 ");
//       }
//     );
//   },
//   () => {
//     console.log("failure");
//   }
// );

//resolve and reject
//asynchronous data

function saveToDatabase(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("sucess");
    } else {
      reject("failure");
    }
  });
}

//then() & catch()

let request = saveToDatabase("apna college");
request
  .then(() => {
    console.log("promess resolved");
  })
  .catch(() => {
    console.log("promise rejected");
  });
