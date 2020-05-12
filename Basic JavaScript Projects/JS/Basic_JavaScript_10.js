function  Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = ""
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Pictures = [];
    Cat_Pictures[0] = "sleeping";
    Cat_Pictures[1] = "playing";
    Cat_Pictures[2] = "eating";
    Cat_Pictures[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Pictures[2] + ".";
}

function array_Function() {
    var Marvel_Heroes = [];
    Marvel_Heroes[0] = "Batman";
    Marvel_Heroes[1] = "Superman";
    Marvel_Heroes[2] = "Wonder Woman";
    Marvel_Heroes[3] = "Flash";
    document.getElementById("Array").innerHTML = "In this picture is " + Marvel_Heroes[0] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", model:"acoustic", color:"black", strings:"9"};
        Musical_Instrument.color = "blue";
        Musical_Instrument.price = "$900";
        document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color + " " + Musical_Instrument.model + " " +
            Musical_Instrument.type + " was " + Musical_Instrument.price;
}


    var X = 82;
    document.write(X);
        {
            let X = 33;
            document.write("<br>" + X);
        }
    document.write("<br>" + X);

function Auto_Function() {
        let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "This car is a " + this.year + this.color + this.make + this.model;
    }
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}

function break_function() {
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 5) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;
}

function continue_function() {
    var text = "";
    var a;
    for (a = 0; a < 10; a++) {
        if (a === 3) { continue; }
        text += "This number is " + a + "<br>";
    }
document.getElementById("continue").innerHTML = text;
}


     