(function(){
    "use strict";

    // Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ["James","jack","jerry","mike"];

    // Create a log statement that will log the number of elements in the names array.
    console.log(names.length);

    // Create log statements that will print each of the names array elements individually.
    console.log("The first name is: " + names [0]);
    console.log("The second name is: " + names [1]);
    console.log("The third name is: " + names [2]);
    console.log("The fourth name is: " + names [3]);

    //Exercise 1
    for(var i = 0; i < names.length; 1++)
        console.log(names[i]);

    //Exercise 2

  /* var grades = []
    function average(grades) {
        //use a for loop to iterate through the array and get the average
        var sum = 0
        for(var i = 0; i < grades.length; i++){
            sum = sum + grades
        }
    }
    var grade = average(grades)
    console.log("you made a grade of " + grade);*/
})();