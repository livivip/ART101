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

//when clicked 
//add one to count of total number 
//show total number 
//on the button
//show "clicked total number times"
//parameter for the count of the button

