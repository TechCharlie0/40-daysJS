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
