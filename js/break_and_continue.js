"use strict";

//console.log(input);

while(true){
    var input = prompt("Enter an odd number from 1 - 50");

    if(input % 2 !== 0 && input <= 50 && input >= 1){
        break;
    }
}
console.log("Your number: " + input);

for(var i = 1; i < 51; i++){

    var odd = i % 2;

    if (i === parseInt(input)){
        console.log("skipping your #" + input);
        continue;
    } else if(odd !== 0){
        console.log("Here is an odd number: " + i);

    }
}
