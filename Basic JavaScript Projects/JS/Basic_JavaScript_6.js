function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("vote").innerHTML = Can_Vote + " ths year";
}

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

function Game (Platform, Genre, Year, Rated) {
    this.Game_Platform = Platform;
    this.Game_Genre = Genre;
    this.Game_Year = Year;
    this.Game_Rated = Rated;
}
var WorldofWarcraft = new Game("PC", "MMO", 2004, "M");
var Fortnite = new Game("Console", "FPS", 2017, "M");
var CrusaderKings = new Game("PC", "RTS", 2014, "E");
function gameFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Fornite is a " + Fortnite.Game_Genre + "-platform rated " + Fortnite.Game_Rated +
    " released in " + Fortnite.Game_Year;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function rocker_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Start_here = 5;
        function Minus_two() {Start_here -= 2;}
        Minus_two();
        return Start_here;
    }
}
