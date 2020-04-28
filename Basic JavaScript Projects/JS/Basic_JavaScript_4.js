function my_Dictionary () {
    var Car = {
        Manufacture:"Toyota",
        Model:"4Runner",
        Type:"SUV",
        Color:"Black",
        Year:2019,
        Engine:"V8"
    };
    delete Car.Type;
    document.getElementById("Dictionary").innerHTML = Car.Type;
}