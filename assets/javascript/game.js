//define variables needed in this game
var wins = 0;
var losses = 0;
var totalScore = 0;

var randomNumber = randomNumber;

var counter = 0;

var numberOptions;

//add picstures as an array and then assign them a random number value by creating a for loop in the functions area. 
var images = ["assets/images/cat1.png", "assets/images/cat2.png", "assets/images/cat3.png", "assets/images/cat4.png"];



// =================================== make functions that will help the game run ===================================


function randomCatNumber(){
//    var randomCatNum = Math.floor(Math.random()* 12) + 1;
    for (var i = 0; i < images.length; i++){
        numberOptions.push(Math.floor(Math.random()* 12) + 1);
        console.log(numberOptions);
    }
}

//reset target number, and button numberes and updates scores etc 
function resetGame(){
    //produce a random number that is between 19-120 for the total score 
    randomNumber = Math.floor(Math.random()*102) + 19; 
    console.log(randomNumber);

    $("#score").html("Wins: " + wins + "<br> Losses : " + losses);    
    $("#random-number").html("Target score: " + randomNumber);

    counter = 0;
    $("#total-score").html("Score: " + counter);

    numberOptions = [];
    randomCatNumber();
    

    $("#cat-image").empty();
    for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", images[i]);
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#cat-image").append(imageCrystal);
    
    }
}


// =================================== main function of the game ====================================================


$("#cat-image").on("click", ".crystal-image", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#total-score").html("Score: " + counter);

    if (counter === randomNumber) {
        wins ++;
        $("#status").html("You win!");
        resetGame();

    }

    else if (counter >= randomNumber) {
        losses ++;
        $("#status").html("You lose!");
        resetGame();

    }



});

resetGame();


