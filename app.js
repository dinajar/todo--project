"use strict"

var Name = prompt("enter your name ");
console.log(Name);


var gender = prompt("your gender is male or female");
switch (gender){
    case "male":
        console.log("male");
        break;
    case "female":
        console.log("female");
        break;
    default:
        console.log("not found");
}




var age = prompt("enter your age");
if (age < 0){
    console.log("your age < 0");
}
else if (age == 0){
    console.log("your age = 0");
}
else{
    console.log(age);
}


let value;
var  arrAnswers = [];
var questions =["Do you like snow? (Y/N)","Did you make a snowman? (Y/N)","Is it a good day? (Y/N)"];

function threeQuestions(questions){
    for (let i=0; i<3 ; i++){
        value = prompt(questions[i]);
            if (value == "N"){
                    value="N";      
            }   
            else if (value == "Y"){
                value="Y";
            }
            else{
                value="invalid";        
            }  
    
            arrAnswers.push(value);   
    }
    console.log(arrAnswers);
}

function printItems(arrAnswers){
    for(let w=0; w<3; w++){
        console.log( arrAnswers[w]);
    }
}




threeQuestions(questions);
printItems(arrAnswers);





var message = confirm("Do you want to skip the welcome message?");
if (!message){
   if (gender=="male"){
        alert("Hello Mr"+ " " + Name);
    }
    else if (gender=="female"){ 
        alert("Hello Ms" + " " + Name);
    }
    else{
        alert("Hello");
    }
    
}

