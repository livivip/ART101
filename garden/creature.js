//a variable for storing names
//when the button is clicked (event)

$("#add-creature").click(
    function(){
//a variable for storing names
    let crName = $("#crName").val();
    $("#creature-list").append(crName);
    //our actions when the button is clicked 

});
