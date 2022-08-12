// -------------- FIRST STEP---------------
let randomComputer = Math.floor(Math.random() * 100) + 1;

console.log(randomComputer);
var incrementValue = 0;
//--------------- SECOND STEP-------------
function randomnumber(a) {

    var a = document.getElementById("inputId").value
    console.log("randomnumberenter", a);

    if (a == null || a == undefined || a == "") {
        document.getElementById("won-match").style.display = "none";
        document.getElementById("low-value").style.display = "none";
        document.getElementById("high-value").style.display = "none";
    } else if (a == randomComputer) {
        document.getElementById("won-match").style.display = "block";
        document.getElementById("low-value").style.display = "none";
        document.getElementById("high-value").style.display = "none";
    } else if (a < randomComputer) {
        document.getElementById("low-value").style.display = "block";
        document.getElementById("won-match").style.display = "none";
        document.getElementById("high-value").style.display = "none";
    } else if (a > randomComputer) {
        document.getElementById("high-value").style.display = "block";
        document.getElementById("low-value").style.display = "none";
        document.getElementById("won-match").style.display = "none";
    }
    incrementValue++;
    if (incrementValue >= 10) {
        alert("Your Are Lost")
        document.getElementById("restart").style.display = "block";
        return false
        
    }
    
}
