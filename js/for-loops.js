"use strict";
function showMultiplicationTable(number){
    for(var i=1; i < 11; i++){
        console.log(number + " x " + i + " = " + (number * i));
    }
}
showMultiplicationTable(7);

//------------------------------------------------------------

for(var i = 1; i < 11; i++){
    var randomNum = Math.floor(Math.random() * 200) + 20;
    var even = randomNum % 2;
    if(even === 0){
        console.log(randomNum + " is an even number");
    } else {
        console.log(randomNum + " is an odd number");
    }

}

//-----------------------------------------------------------
for(var i = 1; i < 10; i++) { //outer loop, for i 1 -9
    var col = "";
    for(var j = 1; j <= i; j++){ //j makes the columns = to i #'s
        col += i; // this puts a # into the increasing columns
    }
    console.log(col);
}
//INSTRUCTORS
// for(var i = 1; i < 10; i++) {
//     var output = i + "";
//     console.log(output.repeat(i)); //.repeat makes same possible
// }

//-----------------------------------------------------------
for(var i = 100; i > 0; i-=5){
    console.log(i);
}



