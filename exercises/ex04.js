let totalNumber = 0; 

//add a button titled "click me"

$("#needy-button").click( function() {
    totalNumber = totalNumber + 1;
    let sentence = "I was clicked"
    let totalNumbers = sentence + " " + totalNumber;
    $("#needy-button").html(totalNumbers); 
});

let veryNumber = 0;
$("#very-button").click( function() {
    veryNumber = veryNumber + 3;
    $("#very-button").html(veryNumber); 
});

if (veryNumber == 9) {$("#very-button").html("Stop clicking me!")}


//2nd class 

colorCount = 0 
let colors = ["ruby", "cyan", "light green", "navy", 'aquamarine', "magenta"]


$("#color-button").click( function() {
    let reminder=colorCount % colors.length;

    $("#color-button").html("Clicks: " + colorCount + " Color: " + colors[colorCount]); 
   
    $("body").css("background-color", colors[reminder]);
    colorCount = colorCount + 1;

});