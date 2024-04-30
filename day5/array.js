//user snga input lini tesko hisab ma a grade b grade garauni//
//90-100-A
//80-89-B
//70-79-c
//below 70 fail

let result = parseFloat(prompt("Enter your grade"));
console.log(result);

if(result >= 90 && result <= 100){
    console.log("Conguralation you have got a grade A");
}
else if(result >= 80 && result <= 89){
    console.log("Conguralation you have got a grade B");
}
else if(result >= 70 && result <= 79){
    console.log("Conguralation you have got a grade c");
}
else if(result < 70){
    console.log("You are fail");

}
else{
    console.log("you are absent");
}

