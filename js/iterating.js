/*(function(){
    "use strict";

   /* // Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ["James","jack","jerry","mike"];

    // Create a log statement that will log the number of elements in the names array.
    console.log(names.length);

    // Create log statements that will print each of the names array elements individually.
    console.log("The first name is: " + names [0]);
    console.log("The second name is: " + names [1]);
    console.log("The third name is: " + names [2]);
    console.log("The fourth name is: " + names [3]);

    for (var i = 0; i < names.length; i++)
        console.log(names)

    names.forEach(function (element, index, array) {
        console.log("The name at index " + index + " is " + element);
    });*/

   /*var arrayOfNumbers = [1, 2, 3, 4, 5];

    for(var i = 0; i< arrayOfNumbers.length; i++) {
        console.log("The element at index " + i + " is " + arrayOfNumbers[i]);
    }

    arrayOfNumbers.forEach(function (element, index, array) {
       console.log("The element at " + index  + " is " + element);

    });

})();*/

   //Exercise 1
//write a function that returns a new array of strings with the fist letter uppercased.


var arrayOfNames = ['john', 'paul', 'ringo', 'george', 'yoko'];

function namesUpperCase(array) {
        var newArray = [];
        var firstLetter;
        var restOfWord;
            array.forEach(function (element) {
                firstLetter = element.charAt(0).toUpperCase();
                restOfWord = element.substring(1);
                newArray.push(firstLetter + restOfWord);
        });
        return newArray;
    }
console.log(namesUpperCase(arrayOfNames));


//Exercise 2
//Write a function that takes an array of number 1-10 and returns the product of all the numbers

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function addNumbers() {
        var product = 1
        numbers.forEach(function (element) {
            product = product * element;
        });
        return product;
    }

    console.log(addNumbers());




//Exercise 3
//Write a functions that returns a string containing the HTML necessary for and unorderd list with an <li>
//for each person on you names array


/* take an array of strings containing all the states
 and return only states that start w/ letter T */

var states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
var statesWithT = [];

function searchForLetterT(array) {
    array.forEach(function (string) {
        if (string.indexOf('T') !== -1){
            statesWithT.push(string);
        }
    });
    return statesWithT;
}

console.log(searchForLetterT(states));

/* make another function that returns a new array of all the states >= two "s" characters */

var statesWithMoreThanOneS = [];

function searchForStatesWithMoreThanOneS(array) {
    array.forEach(function (state) {
        var instanceOne = state.indexOf('s');
        var instanceTwo = state.lastIndexOf('s');
        if(instanceOne !== -1  && instanceTwo !== -1 && instanceOne !== instanceTwo) {
            statesWithMoreThanOneS.push(state);
        }
    });
    return statesWithMoreThanOneS;
}

console.log(searchForStatesWithMoreThanOneS(states));

/* make a function that squares each number on an array
 take an array of numbers and make a forEach that multiplies each number by itself
 function should return the arrayOfSquares */

var numbers = [1, 2, 3, 4, 5, 6];
var arrayOfSquares = [];

function squareNumbers (array) {
    array.forEach(function (number) {
        arrayOfSquares.push(number * number)
    });
    return arrayOfSquares
}

console.log(squareNumbers(numbers));

/* write a function that takes an array of lowercase names
 Uppercase the first letter of each name
 and returns only the names that start with "Y" */

var lcNames = ['john', 'paul', 'george','ringo', 'yoko'];
var capNames = [];
var namesWithY = [];

function capitalizeFirstLetterAndReturnNamesThatStarWithY (array) {
    array.forEach(function(name) {
        var capFirstLetter = name.charAt(0).toUpperCase();
        name = name.replace(name.substring(0,1), capFirstLetter);
        capNames.push(name);
        if (name.substring(0,1) == 'Y') {
            namesWithY.push(name);
        }
    });
    console.log(capNames);
    return namesWithY;
}

console.log(capitalizeFirstLetterAndReturnNamesThatStarWithY(lcNames));

/*  write a function that takes an array of numbers 1-10
 return the sum of only the numbers divisible by 3 */

var numbersFromOneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getNumberDivisibleByThree(array) {
    var sumOfNumbersDivisibleByThree = 0;
    array.forEach(function(number) {
        if (number % 3 == 0) {
            sumOfNumbersDivisibleByThree += number;
        }
    });
    return sumOfNumbersDivisibleByThree;
        console.log(getNumberDivisibleByThree())
}