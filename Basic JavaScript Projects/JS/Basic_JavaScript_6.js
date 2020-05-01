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
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk",  2019,  "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Color;
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
