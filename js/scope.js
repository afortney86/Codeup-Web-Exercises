"use strict";



// Create a function called 'sayHello' that takes a parameter 'name'.;
// When called, the function should log a message that says hello from the passed in name.

(function sayHello(name) {
    var myNameIs = 'Anthony';
    console.log("Hello, " + myNameIs + "!");
})();

//Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random



// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

(function isOdd(number){
    var random = Math.floor((Math.random()*100)+1);
    console.log("Random number is " + random);
    (number % 2 === 0) ? console.log("Number is even") : console.log("Number is odd");
})();


//Call the function 'isOdd' passing the variable 'random' as a parameter.


//Write a function called add(a, b)
//write subtract(a ,b)
//write multiply(a, b)
//write divide(a, b)

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a/ b;
}

//using these functions and only these functions

//write square(number)

function square(number) {
    return multiply(number, number);
}

//write sumOfSquares(a, b)
    //squares a, squares b,
    //returns the sum of those numbers
function sumOfSquare(a, b) {
    return add (square(a), square(b));


}

