"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
    // exercise with only if-else statements....


// var input = confirm("Would you like to enter a number?");
//
// if (input == 1){
//
//     var pickNumber = prompt("What is your number?");
//     if(isNaN(parseInt(pickNumber))){
//         alert("Not a number");
//     } else {
//         var evenOdd = pickNumber % 2;
//         if (evenOdd == 0){
//             alert(pickNumber + " is even");
//         } else {
//             alert(pickNumber + " is odd");
//         }
//
//         var add100 = parseInt(pickNumber) + 100;
//         alert(pickNumber + " + 100 = " + add100);
//
//         if (pickNumber < 0){
//             alert("Your number is negative");
//         } else {
//             alert("Your number is positive");
//         }
//     }
// }
// --------------------------------------------------------------------

// refactored with functions

// var input = confirm("Would you like to enter a number?");
// function jsWithNumbers(){
//     var msg;
//     //if user clicks "ok" then continue with picking a number
//     if (input){
//
//         var pickNumber = prompt("What is your number?");
//         //below checks if user entered a number
//         if(isNaN(parseInt(pickNumber))){
//             msg = alert("Not a number");
//         } else {
//             var evenOdd = pickNumber % 2;
//             if (evenOdd == 0){
//                 msg = alert(pickNumber + " is even");
//             } else {
//                 msg = alert(pickNumber + " is odd");
//             }
//
//             if (pickNumber < 0){
//                 msg = alert("Your number is negative");
//             } else {
//                 msg = alert("Your number is positive");
//             }
//
//             var add100 = parseInt(pickNumber) + 100;
//             msg = alert(pickNumber + " + 100 = " + add100);
//
//         }
//         return msg;
//     }
// }
// jsWithNumbers();

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(input){
//     var message;
//     if (input === "blue"){
//         message = ("Blue is the color of the sky");
//     } else if (input === "red"){
//         message = ("Stop signs are red");
//     } else if (input === "yellow"){
//         message = ("My working cup is yellow");
//     } else if (input === "violet"){
//         message = ("Plums are violet");
//     } else {
//         message = ("Color not in list");
//     }
//     return message;
// }
// console.log(analyzeColor("blue"));
// ------------------------------------------------------------------------------------

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(input){
//     var message;
//     switch (input){
//         case "blue":
//             message = ("Blue is the color of the sky");
//                 break;
//         case "red":
//             message = ("Stop signs are red");
//                 break;
//         case "yellow":
//             message = ("My working cup is yellow");
//                 break;
//         case "violet":
//             message = ("Plums are violet");
//                 break;
//         default:
//             message = ("Color not in list");
//
//     }
//     return message;
// }
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// function analyzeColor(input){
//     input = prompt("Type a color to see if it's listed.");
//     var message;
//     switch (input){
//         case "blue":
//             message = ("Blue is the color of the sky");
//                 break;
//         case "red":
//             message = ("Stop signs are red");
//                 break;
//         case "yellow":
//             message = ("My working cup is yellow");
//                 break;
//         case "violet":
//             message = ("Plums are violet");
//                 break;
//         default:
//             message = ("Color not in list");
//
//     }
//     return message;
// }
//
// alert(analyzeColor());

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, totalAmount){
//     var discountedPrice = 0;
//     switch (luckyNumber){
//         case 0:
//             discountedPrice = totalAmount;
//             break;
//         case 1:
//             discountedPrice = totalAmount - (totalAmount * .1);
//             break;
//         case 2:
//             discountedPrice = totalAmount - (totalAmount * .25);
//             break;
//         case 3:
//             discountedPrice = totalAmount - (totalAmount * .35);
//             break;
//         case 4:
//             discountedPrice = totalAmount - (totalAmount * .50);
//             break;
//         case 5:
//             discountedPrice = totalAmount * 0;
//             break;
//         default:
//             discountedPrice = "Invalid Number";
//     }
//
//     return parseInt(discountedPrice, 10);
// }
// console.log(calculateTotal(2, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);


function calculateTotal(luckyNumber, totalAmount){
    totalAmount = prompt("What is the price before discount?")
    var discountedPrice;
    switch (luckyNumber){
        case 0:
            discountedPrice = totalAmount;
            break;
        case 1:
            discountedPrice = totalAmount * (0.9);
            break;
        case 2:
            discountedPrice = totalAmount * (0.75);
            break;
        case 3:
            discountedPrice = totalAmount * (0.65);
            break;
        case 4:
            discountedPrice = totalAmount * (0.50);
            break;
        case 5:
            discountedPrice = totalAmount * 0;
            break;
        default:
            discountedPrice = "Invalid Number";
    }

    return alert("Congratulations! Now you pay: $" + parseInt(discountedPrice, 10) + "\nYour discount number was " + luckyNumber +
    "\nYour price before the discount: $" + totalAmount);

}
calculateTotal(luckyNumber);
