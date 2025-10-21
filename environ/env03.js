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

