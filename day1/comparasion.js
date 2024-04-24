let age = 1;
console.log(age > 18);
console.log(age < 18);
console.log(age == 18);
console.log(age >= 18);
console.log(age <= 18);
console.log(age != 18);


let drive = 25;
if (drive >=24) {
    console.log("you can drive")
    
}
 
//traffic color using if statement//

let color = "green";

if(color === "red"){
console.log("you have to stop");
}

if(color === "yellow"){
 console.log("go slow");
 }

 if(color === "green"){
console.log(" you have to go");
 }

 
//else if statement//

let ages = 14;
if (ages >= 18) {
    console.log("you can vote");
    
}
else if(ages    < 18){
    console.log("you cannot vote");


}


 //marks using else if statement//

 let marks = 44;
 if(marks <= 20){
    console.log("you are fail");

 }
 else if(marks <= 50){
    console.log("you got c");


 }
else if(marks <= 70){
    console.log("you got b");
    

 }
 else if(marks <= 90){
    console.log("you got a");
    

 }


 //season

 let season  = "january";
 if(season === "january"){
    console.log("spring season")
 }
else if(season === octuber){
    console.log("winter season")


}

//create a syste, to calculate popcorn prices based on the size of customer asker for//


let size = "L";

if(size == "XL"){
    console.log("price is Rs. 250");
}
else if(size == "L"){
    console.log("price is Rs. 250");
}
else if(size == "M"){
    console.log("price is Rs. 100");
}
else if(size == "S"){
    console.log("price is Rs. 50");
}
else{
    console.log("your size is not found");


}

 //nested loop haru xa

let mark = 56;
if(mark >= 30){
    console.log("you are pass");
    if (mark <=20) {
        console.log("you are failed");
    }
    else{
        console.log("you pass");

    }
    }else{
     console.log("you are failed");
}



let str = "apple";
if(str[0] == "a" && str.length > 3){
    console.log("this is good string")

}
else{
    console.log("this is not good string")


}

//switch statement//


let colors = "red";
switch(colors){
    case "red":
    console.log("stop");
    break;
    case "yello":
    console.log("slow");
    break;
    case "green":
    console.log("go");
    break;
    default:
        console.log("broken light");
    
    




}


//use switch statement to print the day of the week using a number variable dau=y using value 1 to 7 //


let day = 4;
switch(day){
    case 1:
        console.log("monday");
        break;
        case 2:
            console.log("tuesday");
            break;  
            case 3:
                console.log("wednesday");
                break;  
                case 4:
                    console.log("thursday");
                    break;
                    case 5:
                        console.log("friday");
                        break;
                        case 6:
                            console.log("saturday");
                            break;
                            case 7:
                                console.log("sunday");
                                break;
}


//user snga input lini bhaneko alert ra prompt ho //

//alert//
alert("Enter your detail");

// console.error("this is danger"); //yo needed chaina ahila

// console.warn("this is danger");
 

//prompt

let first = prompt("enter your name");
let second = prompt("enter your last name");
console.log(first +" "+ second);
console.log(`My first name is: ${first} and last name is: ${second}`);















       
        
     


   


 
