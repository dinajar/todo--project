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
if (age <= 0){
    console.log("your age <= 0");
}
else{
    console.log(age);
}


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


