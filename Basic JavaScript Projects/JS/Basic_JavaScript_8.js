function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Function() {
    var str = "This is me!";
    var res = str.toUpperCase();
    document.getElementById("UpperCase").innerHTML = res;
}

function search_Function() {
    var str = "This is my life I am living";
    var find = str.indexOf("life");
    document.getElementById("search").innerHTML = find;
}

function string_Method () {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var A = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = A.toPrecision(10);
}
function rounding_Function () {
    var num = 6.24889;
    var p = num.toFixed(2);
    document.getElementById("Roundup").innerHTML = p;
}

function myFunction() {
    var str = "Whos in the kitchen?";
    var O = str.valueOf();
    document.getElementById("value").innerHTML = O;
}

function countdown() {
    var seconds = document.getElementById("seconds").value; 

    function tick();
        seconds = seconds = 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1){
        alert("Time's up");
    }
}