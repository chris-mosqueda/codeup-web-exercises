"use strict";

var i = 2;
while(i <= 65536) {
    console.log(i);
    i *= 2;
}

// Ice Cream seller --------------------------------------------------------------------
// This is how you get a random number between 50 and 100
//INSTRUCTORS
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Total cones: " + allCones);

do {
    console.log("Cones left: " + allCones);
    var conesToSell = Math.floor(Math.random() * 5) + 1;

    if(conesToSell <= allCones){
        console.log("I sold " + conesToSell);
        allCones = allCones - conesToSell;
    } else {
        console.log("I don\'t have  " + conesToSell + " cones to sell");
    }

    if(allCones === 0){
        console.log("Yay!! I sold all the cones!");
    }
} while(allCones !== 0);
console.log(allCones);


// var conesBought = 0;
// var conesLeft = 0;

// I WAS CLOSE TRYING TO GET THIS TO WORK BUT COULD NOT CONTINUOSLY GET OFFERS TO GET LEFT OVER CONES TO 0

// do {
//     // This expression will generate a random number between 1 and 5
//     var eachCustomer = Math.floor(Math.random() * 5) + 1;
//     conesBought += eachCustomer;
//
//     if(conesBought < allCones){
//         console.log("Cones sold, " + eachCustomer);
//         conesLeft = allCones - conesBought;
//         console.log("Cones left over: " + conesLeft)
//
//     } else if(conesLeft > 0){
//         console.log("I cant sell you " + eachCustomer + " cones, because I have " + conesLeft + " left");
//     }
//
//     if(conesLeft === 0){
//         console.log("Yay all sold");
//     }
// } while (conesBought <= allCones);
// console.log(conesLeft);
// // ------------------------ INSTRUCTOR -----------------------------
