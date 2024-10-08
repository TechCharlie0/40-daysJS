function hello() {
  console.log("inside hello friends");
  console.log("hello");
}
function demo() {
  console.log("calling hello friends");
  hello();
}
console.log("calling demo friends");
demo();
console.log("done, bye!");
