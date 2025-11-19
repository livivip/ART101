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

function guessFood() {
    let userNumber = prompt("Pick from 1-10?");
    if (userNumber == 1) {
        $("#neutralButton").html("he gets a SAD SALAD :(");
    }
    else if (userNumber == 2) {
        $("#neutralButton").html("he gets a MID MUD PIE :/");
    }
    else if (userNumber == 3) {
        $("#neutralButton").html("he gets a FLUFFY FOREST CAKE :D");
    }
    else if (userNumber == 4) {
        $("#neutralButton").html("he gets a HOCKEY STICK :(");
    }
    else if (userNumber == 5) {
        $("#neutralButton").html("he gets a CRAPPY CRACKER :/");
    }
    else if (userNumber == 6) {
        $("#neutralButton").html("he gets a DELICIOUS DONUT :D");
    }
    else if (userNumber == 7) {
        $("#neutralButton").html("he gets a POOR PAVLOVA :/");
    }
    else if (userNumber == 8) {
        $("#neutralButton").html("he gets a CUSTOM CHEESECAKE :3");
    }
    else if (userNumber == 9) {
        $("#neutralButton").html("he gets a WET WAFFLE :/");
    }
    else if (userNumber == 10) {
        $("#neutralButton").html("he gets a COLORFUL CAKE :3");
    }
    else {
        $("#neutralButton").html("what the helly");
    }
}

//makes it so when you click neutral button, guess food goes into effect 
$("#neutralButton").click(function () {
    guessFood();
});

//hides the ship + the cake when you take chopper to a new location 
$(".buttons").click(function(){
    $("#deserts").hide();
    $("#ship").hide();
 });

//hover things for my buttons so its obvious to the user when theyre hovering over them 
  $("#neutralButton").hover(function(){
    $(this).css({"background-color": "#87048b",
        "color": "#ff86d7",
    });
    }, function(){
    $(this).css({"background-color": "#ff86d7",
        "color": "#87048b",
    });
  });

  $("#happyButton").hover(function(){
    $(this).css({"background-color": "#009728",
        "color": "#bdff67",
    });
    }, function(){
    $(this).css({"background-color": "#bdff67",
        "color": "#009728",
    });
  });

  $("#sadButton").hover(function(){
    $(this).css({"background-color": "#da0505",
        "color": "#ff9486",
    });
    }, function(){
    $(this).css({"background-color": "#ff9486",
        "color": "#da0505",
    });
  });

//the more you click the cake, the bigger chopper gets + hides ship 
$("#deserts").click(function(){
    $("#chopper").animate({
      height: '+=50px',
      width: '+=50px'
    });
    $("#ship").hide();
    $("h1").html("CHOPPER IS BECOMING ... BIGGER !!!");
    $("h2").html("STOP FEEDING HIM CAKE");

  }); 
  
$("#chopper").dblclick(function(){
    $(document).mousemove(function(event) {
        $("#chopper").css({
        left: event.pageX - 60,
        top: event.pageY - 60,
        position: "absolute"
        });
    });

});