const images = [
    // my list of images
    "images/sea.jpg",
    "images/field.jpg",
    "images/cats.jpg",
    "images/genshin.jpg",
    "images/room_repeat.jpg"
];
const button = document.getElementById("sadButton");

    button.addEventListener("click", () => {
        // random generator 
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];

        document.body.style.backgroundImage = `url('${randomImage}')`;
    });


$("#sadButton").click( function() {
    $("#sadButton").html("AGAIN!!");
    $("#happyButton").html("NOO!! how could you !!?");

})

$("#happyButton").click( function() {
    $("body").css("background-image", 'url("images/naruto.jpg")');
    $("body").css({
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat"
    });
    $("#happyButton").html("YAYY!!!");

})

$("#experiment").append("<p>here as the human, you are responsible for choosing the fate of chopper, pls pick a button to press ... </p>" );
$("#experiment").css({
    "color": "white",
    "background-color": "purple",
    "font-family": "monospace",
    "text-align": "center",
    "font-size": "15"
})

$("#bottomEx").append("<p>you either press a button or the whole world explodes ...</p>" );
$("#bottomEx").css({
    "color": "white",
    "background-color": "purple",
    "font-family": "monospace",
    "text-align": "center",
    "font-size": "15"
})

let chopper = {
    species: "reindeer",
    age: 15,
    birthday: "december 24, 1507",
    sign: "capricorn",
    cuteness: 100000,
}

$("#aboutChopper").append("<p>let's learn more about CHOPPER: he is " + chopper.age + " years old and born on " + chopper.birthday+ ", making him a "+ chopper.sign +". not to mention he's a " + chopper.species + " !!! oh and his cuteness level is always at" + chopper.cuteness +" ^-^ </p>" );
$("#aboutChopper").css({
    "color": "white",
    "background-color": "purple",
    "font-family": "monospace",
    "text-align": "center",
    "font-size": "15"
})
