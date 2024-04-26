// movie using the while loop

let favDrama  = "a love so beautiful"
let guess = prompt("enter my fav movie") ;
while(( guess != favDrama )){
    guess = prompt("wrong please try again");

    
   
if (favDrama == guess) {
    console.log("you are correct");
    
}

loops with arrays

let fruits = ["mango", "apple", "papaya", "litchi"];
for (let i = 0; i <fruits.length; i++) {
    console.log(i , fruits[i]);
    
}


let student = [ ["aman", 95], ["shradha", 94.5],["isha", 1], ["utsav", 2]];
for (let i = 0; i<student.length; i++){
    console.log(`info of student #${i}`);
for (let j = 0; j <student[i].length; j++) {
console.log(student[i][j]) ;       
    }

}

//backward loop
for(let i =10; i>=1; i--){
    console.log(i);
}

//print odd number
for(let i = 1; i<=15; i=i+2){
    console.log(i);

}

//backward loop of odd number
console.log("yo backward ho hai");

for(let i =15; i>=1; i=i-2){
    console.log(i);

}



//print even number

for(let i = 0; i<=15; i=i+2){
    console.log(i);

}


//multiplication of table

for(let i =0; i<=30; i=i+3){
    console.log(i);

}
for(i = 30; i>=3; i=i-3){
    console.log(i);
}

//nested loop//

for(let i = 1; i<=3; i++){
    console.log("i ko ho");
for(let j = 1; j<=3; j++)
console.log(j);

}


for(let i = 5; i>=1; i--){
    console.log(" naya i ko ho");
for(let j = 1; j<=5; j++)
console.log(j);

}


//while loop

let guess = prompt("enter your guess");

const favourite = "avatar"


    while(guess != favourite && guess != "exist"){
        if(guess =="quit"){
            console.log("you quit");
            break;
        }


         guess = prompt("try again");

         
    


    }
    if(guess == favourite  ){
        console.log("you are quit genius");
            
    }
    else{
        console.log("try again");
    }

//new example of nested loop with nested array 

    let student1 = [
        ["aman", 10], ["isha", 20], ["manisha", 30]


    ];
    for( let i=0; i<student1.length; i++){
        console.log( `info of student #${i}`);
        for( let j=0; j<student1[i].length; j++){
            console.log(student1[i][j]);
        }
    }


    //for of loop
    
let fruit1 = ["mango", "applw", "litchi"];
for(fruit of fruit1){
    console.log(fruit);
}

for(i of "apnacollege"){
    console.log(i);

     
}

//nested for of loop

let heroes = [
    ["ironman", "spiderman", "thor" ],
    ["batman", "superman", "wonder woman"]


]
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}
