function get_Date() {
    if (new Date().getHours() > 18) {
        document.getElementById("Go To Bed").innerHTML = "Get in Bed NOW!!!";
        
    }
}

function no_Function() {
    if (new Date().getHours() < 23) {
        document.getElementById("Time").innerHTML = "You can't drink";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Its the morning";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "Its afternoon";
    }
    else 
        Reply = " Its the evening time";
    
    document.getElementById("Day_of_week").innerHTML = Reply;
}

var brandon = 20;
function Add_age_1() {
    document.write(20 + brandon + "<br>");
}
function Add_age_2() {
    document.write(brandon + 20 + "<br>");
}
Add_age_1();
Add_age_2();

function Add_numbers_1() {
    var john = 5;
    document.write(5 + john + "<br>");
}
function Add_numbers_2() {
    document.write(john + 5);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var john = 5;
    console.log(5 + john + "<br>");
}
function Add_numbers_2() {
    console.log(john + 5);
}
Add_numbers_1();
Add_numbers_2();

function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}