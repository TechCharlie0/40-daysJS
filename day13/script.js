//async and  await

async function greet() {
  // throw"some randowm error";
  return "hello"; // return a promise
}

// let hello = async () => ();  //return a promise

greet();
.then ((result) =>{
    console.log(resolved);
    console.log("result was:" result);
})
.catch((err) =>{
    console.log(rejected);
})