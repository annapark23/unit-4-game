//define variables needed in this game
var wins = 0;
var losses = 0;
var totalScore = 0;

var randomNumber = randomNumber;

var counter = 0;

//add picstures as an array and then assign them a random number value by creating a for loop in the functions area. 
//var images = ["assets/images/cat1.png", "assets/images/cat2.png", "assets/images/cat3.png", "assets/images/cat4.png"];



// =================================== make functions that will help the game run ===================================

//produce a random number that is between 19-120 for the total score 
function randomNumberGenerator(){
    randomNumber = Math.floor(Math.random()*102) + 19; 
    console.log(randomNumber);
}

//function displayImage() {
//    for(i=0; i < images.length; i++){   
//        $("#cat-buttons").html("<button><img src=" + images[i] + " width='150px', height='150px'></button>");
//    }
// }

var numberOptions = [10, 5, 3, 7];
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/cat2.png");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#cat-image").append(imageCrystal);

}

$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#total-score").html("Score: " + counter);

    if (counter === randomNumber) {
        wins ++;
        $("#status").html("You win!");
        counter = 0;
        randomNumberGenerator();
    }

    else if (counter >= randomNumber) {
        losses ++;
        $("#status").html("You lose!");
        counter = 0;
        randomNumberGenerator();
    }

    $("#score").html("Wins: " + wins + "<br> Losses : " + losses);    
    $("#random-number").html("Target score: " + randomNumber);


});




randomNumberGenerator();
//displayImage();
// =================================== main function of the game ====================================================

//$("#total-score").html("Your total score is: " + counter);
