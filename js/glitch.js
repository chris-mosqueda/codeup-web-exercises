"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//ISTRUE
function isTrue(user) {
    if (user === true){
        return true;
    } else {
        return false;
    }

}
isTrue();

//CONCAT *****************
function concat(input1, input2){
    return input1.toString() + input2.toString();
}

//ISFALSE
function isFalse(value){
    if(value === false){
        return true;
    }
    else {
        return false;
    }
}

//NOT *********************
function not(value){
    return !value;
}

//ADDONE
function addOne(singleInput) {
    if (NaN){
        return NaN;
    } else {
        return singleInput = +singleInput + 1; //adding a +(variable) will convert string to a #
    }
}

//ISEVEN
function isEven(input) {
    var even = input % 2;
    if (even === 0){
        return true;
    } else if (input === !true) {
        return false;
    } else {
        return false;
    }

}
console.log(isEven(false));

//ISIDENTICAL
function isIdentical(input1, input2) {
    if (input1 === input2){
        return true;
    } else {
        return false;
    }
}

//ISEQUAL
function isEqual(in1, in2){
    if (in1 == in2){
        return true;
    } else {
        return false;
    }
}

//OR
function or(user1, user2){
    return user1 || user2;
}

//console.log(or(false));

//AND
// function and(method1, method2){
//     return method1 && method2