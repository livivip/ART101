// light up plants and make them grow AND hovering over certain plants makes them grow 


//series of assets for plants : SMOOTH or ROUGH , sm-m-lrg , or what else 
//hover to make grow + glow .hover() 

let growTimer;
let growRate = 0.2; // pixels per millisecond (adjust to change speed)

$("#plant").on("mouseenter", function () {
  const plant = $(this);
  let startTime = Date.now();

  growTimer = setInterval(function () {
    let elapsed = Date.now() - startTime; // ms hovered
    let newWidth = 150 + elapsed * growRate;

    plant.width(newWidth);
  }, 30); // update 33 times per sec
});

$("#plant").on("mouseleave", function () {
  clearInterval(growTimer);
});