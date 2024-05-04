//async and  await

// async function greet() {
//   throw"some randowm error";
//   return "hello"; // return a promise
// }

// // let hello = async () => ();  //return a promise

// greet();
// .then ((result) =>{
//     console.log(resolved);
//     console.log("result was:" result);
// })
// .catch((err) =>{
//     console.log(rejected);
// })

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       resolve(num);
//     }, 1000);
//   });
// }
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      resolve(num);
    }, 1000);
  });
}

// Now you can call the getNum() function
getNum()
  .then((num) => {
    console.log("Random number:", num);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
