function addition_Function() {
    var addition = 2 + 2;
     document.getElementById("Math").innerHTML="2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
     document.getElementById("MathOne").innerHTML="5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
     document.getElementById("Math1").innerHTML="6 * 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
     document.getElementById("Math2").innerHTML="48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
     document.getElementById("Math3").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulas_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math4").innerHTML= "When you divide 25 by 6 you have a remainder of: " + simple_Math
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math5").innerHTML = -x;
}

function myFunction() {
    document.getElementById("Math6").innerHTML = Math.pow(4, 3);
}

function decrement() {
    var X = 4.25
    X--;
    document.getElementById("Math7").innerHTML = "4.25 = " + X--;
}

function increment() {
    var X = 5;
    X++;
    document.getElementById("Math8").innerHTML = "5 = " + X++;
}

function random() {
    var random = Math.random( );
    document.getElementById("Math9").innerHTML =("Random Number Generated : " + random );
}