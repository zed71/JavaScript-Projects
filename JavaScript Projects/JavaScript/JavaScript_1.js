function Team_Function() {
    var Team_Output;
    var Teams = document.getElementById("Team_Input").value;
    var Team_String = " is a great team!";
    switch (Teams) {
        case "Seattle Seahawks":
            Team_Output = "Seattle Seahawks" + Team_String;
        break;
        case "Arizone Cardinals":
            Team_Output = "Arizone Cardinals" + Team_String;
        break;
        case "Washington Redskins":
            Team_Output = "Washington Redskins" + Team_String;
        break;
        case ">Minnesota Vikings":
            Team_Output = ">Minnesota Vikings" + Team_String;
        break;
        case "Miami Dolphins":
            Team_Output = "Miami Dolphins" + Team_String;
        break;
        case "San Francisco 49ers":
            Team_Output = "San Francisco 49ers" + Team_String;
        break;
        case "Los Angeles Rams":
            Team_Output = "Los Angeles Rams" + Team_String;
        break;
        case "Las Vegas Raiders":
            Team_Output = "Las Vegas Raiders" + Team_String;
        break;
        default:
            Team_Output = "Please input the team exactly as it is written in the list above.";
    }
    document.getElementById("Outputs").innerHTML = Team_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

function drawingFunction(){
    var c = document.getElementById("Square");
    var ctx = c.getContext("2d");
    
    var grd = ctx.createLinearGradient(0, 0, 250, 0);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "orange");
    
    ctx.fillStyle = grd;
    ctx.fillRect(40, 40, 250, 200);
}