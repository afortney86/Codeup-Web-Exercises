/**
 * Created by anthonyfortney on 10/11/16.
 */
"use strict";

/*function average3Grades() {
    var total = 0

        for (var g = 0; g < 3; g++) {
            var grade = prompt("Welcome, please input three grades");
            total = total + parseInt(grades);
        }

    return total / 3;
}

        if (average3Grades () >= 80){
        alert ("Your average is Your awsesome!")
        }else {
        alert ("You need to practice more")
    }*/


var gradesum = 0;
var gradeamount = 0;

function genericGradesAverage(){
    do {
        var grade = parseInt(prompt("Enter grade"));
        gradesum = gradesum + grade;
        gradeamount++;
        var confirming = confirm("Would you like to add another grade?");
        console.log(grade);
        console.log(gradesum);
    }while(confirming);
    return gradesum / gradeamount;
}
alert(genericGradesAverage());

