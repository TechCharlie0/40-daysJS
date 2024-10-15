// //higher order function
// const myNum = [
//   {
//     name: "isha",
//     subject: "js",
//   },
//   {
//     name: "isha",
//     subject: "js",
//   },
//   {
//     name: "isha",
//     subject: "js",
//   },
// ];
// myNum.forEach((item) => {
//   console.log(item.subject);
// });

// //filter
// const myName = ["isha", "robert", "manisha", "rarebeauty"];
// const value = myName.forEach((list) => {
//   console.log(list);
//   return item;
// });
// console.log(value);

// //foreach do not return value
// //filter return value
// const forName = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const yourName = forName.filter((Num) => {
//   return Num > 4;
// });
// console.log(yourName);

// const Name = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// class.forEach((nums)=>{
//     if(nums>4){
//         Name.push(nums )
//     }

// })
// console.log(Name)

// //map
// const firstNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const secondNumber = firstNumber
//   .map((number) => number * 10)
//   .map((number) => number + 1);
// console.log(secondNumber);

//reduce

const array1 = [1, 2, 3, 4, 5];
const initialValue = 0;
const sumarray = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumarray);
