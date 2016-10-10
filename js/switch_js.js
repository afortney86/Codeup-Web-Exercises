/**
 * Created by anthonyfortney on 10/7/16.
 */
"use strict"

var luckyNumber = Math.floor(Math.random()* 6);
var receipt = 60;

 /*   if (luckyNumber == 0) {
    receipt = receipt - receipt * 0
    console.log("No discount for you! Your total is " + (receipt) )
}else if (luckyNumber == 1){
        receipt = receipt - receipt * .1
        console.log("You get 10% off your total purchase, your new total is " + (receipt) )
    }else if (luckyNumber == 2) {
        receipt = receipt - receipt * .2
        console.log("You get 20% off your total purchase, your new total is " + (receipt) )
    }else if (luckyNumber == 3) {
        receipt = receipt - receipt * .3
        console.log("You get 30% off your total purchase, your new total is " + (receipt) )
    }else if (luckyNumber == 4) {
        receipt = receipt - receipt * .4
        console.log("You get 40% off your total purchase, your new total is " + (receipt) )
    }else if (luckyNumber == 5) {
        receipt = receipt - receipt
        console.log("Congratulations your purchase is FREE!")
    }*/


switch (luckyNumber) {
    case 0:
        console.log("No discount for you >.<");
        break;
    case 1:
        receipt = receipt - receipt * .1;
        console.log("You get 10% off your total purchase, your new total is " + (receipt) );
        break;
    case 2:
        receipt = receipt - receipt *.25;
        console.log("You get 25% off your total purchase, your new total is " + (receipt) );
        break;
    case 3:
        receipt = receipt - receipt * .35;
        console.log("You get 350% off your total purchase, your new total is " + (receipt) );
        break;
    case 4:
        receipt = receipt - receipt * .5;
        console.log("You get 50% off your total purchase, your new total is " + (receipt) );
        break;
    case 5:
        receipt = receipt - receipt;
        console.log("Your purchase is FREE " + (receipt) );
        break;
}





var monthsOfTheYear = Math.floor(Math.random()* 12 + 1);

switch (monthsOfTheYear){

    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

}