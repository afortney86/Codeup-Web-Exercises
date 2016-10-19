/**
 * Created by anthonyfortney on 10/18/16.
 */
"use strict";

var middleIn = "";
var answer = "";
var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var addbtn = document.getElementById('addbtn');
var subbtn = document.getElementById('subbtn');
var mulbtn = document.getElementById('mulbtn');
var divbtn = document.getElementById('divbtn');
var clrbtn = document.getElementById('clrbtn');
var eqlbtn = document.getElementById('eqlbtn');

var buttonClick = function () {
    if (document.getElementById('midInput').value === "") {
        document.getElementById('leftInput').value += this.value;

    } else {

        document.getElementById('rightInput').value += this.value;
    }
};

var operators = function () {
    middleIn = document.getElementById('midInput').value = this.value;
};

var result = function () {
    var leftIn = document.getElementById('leftInput').value;
    var rightIn = document.getElementById('rightInput').value;
    document.getElementById('leftInput').value = eval(leftIn + middleIn + rightIn);
    document.getElementById('midInput').value = "";
    document.getElementById('rightInput').value = "";

};

var clearResult = function () {
    window.location.reload();
};

btn0.addEventListener('click', buttonClick, false);
btn1.addEventListener('click', buttonClick, false);
btn2.addEventListener('click', buttonClick, false);
btn3.addEventListener('click', buttonClick, false);
btn4.addEventListener('click', buttonClick, false);
btn5.addEventListener('click', buttonClick, false);
btn6.addEventListener('click', buttonClick, false);
btn7.addEventListener('click', buttonClick, false);
btn8.addEventListener('click', buttonClick, false);
btn9.addEventListener('click', buttonClick, false);
addbtn.addEventListener('click', operators, false);
subbtn.addEventListener('click', operators, false);
mulbtn.addEventListener('click', operators, false);
divbtn.addEventListener('click', operators, false);
eqlbtn.addEventListener('click', result, false);
clrbtn.addEventListener('click', clearResult, false);

/*var power = function(base, exponent) {
 var result = 1;
 for (var count = 0; count < exponent; count++)
 result = result * base;
 return result;

 };

 console.log(power(3, 10));*/
