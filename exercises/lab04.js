// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "walking", "uber", "my car", "friends"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Car",
    route: 7,
    print: "Raven",
    hasMiddleDoor: false,
    drivers: ["me", "my friends", "a racoon"],
};
let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[4] + "</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";
$("#output").html(megaSentence);
