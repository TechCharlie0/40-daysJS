let a = 15;
let b = "isha";
let c = true;

let d;
let e = null;


console.log(typeof a, typeof b, typeof c, typeof d, typeof e);


 
let str1 = "ilovedairymilk";
// console.log(str1.toUpperCase());
// console.log(str1.replace("dairy", "cow"));


//chaining method
console.log(str1.replace("dairy", "cow"). toUpperCase());

console.log(str1.repeat(2));
console.log(str1.slice(1, 5));

let start = ["january", "july", "march","august"];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july")

console.log(start);


let season = ["january", "july", "march","august"];

season[season.indexOf("january")] = "july";
console.log(season);



let months1 = ["january", "july", "march","august"];
let months2 = ["september", "octuber", "november","december"];
let months3 = months1.concat(months2);
console.log(months3);



let start1 = ["january", "july", "march","august"];
let final1 = start1.splice(0,2,"july", "june" );
console.log(final1);
console.log(start1);

let subject = ["c","war","c++", "js","python"];
console.log(subject.sort(a,b) => b.localeCompare(a));

console.log(subject);

let num1 = [10, 50, 40, 30];
console.log(num1.sort());

let strings1 = ['banana', 'apple', 'orange', 'grape'];

// Sort in descending order
strings1.sort((a, b) >= b.localeCompare(a));

console.log(strings1); // Output: ['orange', 'grape', 'banana', 'apple']
















