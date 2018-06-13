console.log("Hello from inline JavaScript");
//#1
alert("Welcome to my Website!");
//--------------------------------------------------------------------------------

//#2
// var userInput = prompt("What is your favorite color?");
// alert(userInput + " is my favorite color too!");
//--------------------------------------------------------------------------------

//#3
// var mermaidRentedDays = prompt("How many days did you rent Little Mermaid?");
// var brotherBearRentedDays = prompt("How many days did you rent Brother Bear?");
// var herculesRentedDays = prompt("How many days did you rent Hercules?");
// var pricePerMovie = 3;
//
// var rentedPriceTotal = mermaidRentedDays * pricePerMovie;
// rentedPriceTotal += brotherBearRentedDays * pricePerMovie;
// rentedPriceTotal += herculesRentedDays * pricePerMovie;
//
// alert(rentedPriceTotal);
//---------------------------------------------------------------------------------

// var googleWeeklyHours = prompt("How many hours did you work this week at Google?");
// var googleHourlyRate = prompt("What is Goolge's hourly rate?");
//
// var amazonWeeklyHours = prompt("How many hours did you work this week at Amazon?");
// var amazonHourlyRate = prompt("What is Amazon's hourly rate?");
//
// var facebookWeeklyHours = prompt("How many hours did you work this week at Facebook?");
// var facebookHourlyRate = prompt("What is Facebook's hourly rate?");
//
// var weeklyPay;
// weeklyPay = googleHourlyRate * googleWeeklyHours;
// weeklyPay += amazonHourlyRate * amazonWeeklyHours;
// weeklyPay += facebookHourlyRate * facebookWeeklyHours;
// alert(weeklyPay);
//---------------------------------------------------------------------------------

// var classNotFull = confirm("Does this class still have open seats?");
// var noClassConflictions = confirm("Is your class schedule open with no conflicting times?");
// var studentEnrollment = classNotFull && noClassConflictions;
//
// alert("You can enroll in this class: " + studentEnrollment);
//---------------------------------------------------------------------------------

var offerExpiration = confirm("Is the offer still available - not expired?");

var numItemsBought = confirm("Do you have more than 2 items?");
var premiumMember = confirm("Are you a premium member?");

var offerApplied = offerExpiration && (numItemsBought || premiumMember);

alert("Offer validation is - " + offerApplied);

