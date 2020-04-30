function my_Function() {
    document.getElementById("Test").innerHTML = 0/0
}

function TrueInfinity() {
    document.getElementById("TrueInfinity").innerHTML = isNaN('This is a string');
}

function NotInfinity() {
    document.getElementById("NotInfinity").innerHTML = isNaN('007');
}

function BigNumber() {
    document.getElementById("BigNumber").innerHTML = (3E310);
}

function LittleNumber() {
    document.getElementById("LittleNumber").innerHTML = (-3E310);
}

function True() {
    document.getElementById("True").innerHTML = (10 > 2);
}

function False() {
    document.getElementById("False").innerHTML = (20 < 6);
}

function Console(){
    document.getElementById("Console").innerHTML = (2 + 2);
}

function forced() {
    document.getElementById("forced").innerHTML = ("10" + 5);
}

function equal1() {
    document.getElementById("equal1").innerHTML = (10 == 10);
}

function equal2() {
    document.getElementById("equal2").innerHTML = (5 == 12);
}

function equal3() {
    X = "10adam";
    Y = "10adam";
    document.getElementById("equal3").innerHTML = (X === Y);
}

function equal4() {
    A = "Magnus";
    B = "Bob";
    document.getElementById("equal4").innerHTML = (A === B);
}

function equal5() {
    A = "5";
    B = 5;
    document.getElementById("equal5").innerHTML = (A === B);
}

function equal6() {
    C = 5;
    D = 5;
    document.getElementById("equal6").innerHTML = (C === D);
}

function equal7() {
    document.getElementById("equal7").innerHTML = (5 > 2 && 10 > 4);
}

function equal8() {
    document.getElementById("equal8").innerHTML = (5 > 10 && 10 > 4);
}

function equal9() {
    document.getElementById("equal9").innerHTML = (5 > 10 || 10 > 4);
}

function equal10() {
    document.getElementById("equal10").innerHTML = (5 > 10 || 10 > 20);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function notFunction() {
    document.getElementById("TrueNot").innerHTML = !(5 > 10);
}