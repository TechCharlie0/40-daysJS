//async
async function greet() {
  //promise return
  return "hello world";
}
greet()
  .then((result) => {
    console.log("promise was rejected");
  })
  .catch((err) => {
    console.log("promise was rejected with err:'.err");
  });
let isha = async () => {
  return "hi ishu how are you?";
};

//await
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
    }, 1000);
  });
}
async function demo() {
  await getNum();
  await getNum();
  await getNum();
}
