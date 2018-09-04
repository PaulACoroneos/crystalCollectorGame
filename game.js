$(document).ready(function() {

    //initialize variables used in game
    var randomGeneratedNum = 0;
    var workingNumber = 0; 
    var gem1val = 0;
    var gem2val = 0;
    var gem3val = 0;
    var gem4val = 0;
    var base = 0;
    var wins = 0;
    var losses = 0;

    //JQuery display vars for ID's on page
    var displayWins = $("#number-wins");
    var displayLosses = $("#number-losses");
    var workingScore = $("#current-score");
    var numToGuess = $("#random-number");

    function generateNewGame () {
        /* This function generates a new game by creating a new number to guess to
        and generated 4 random values one for each gem
        */

        workingNumber = 0;  //clear working number

        //generated random values for gems 
        gem1val = Math.floor(Math.random()*10)+1;
        gem2val = Math.floor(Math.random()*10)+1;
        gem3val = Math.floor(Math.random()*10)+1;
        gem4val = Math.floor(Math.random()*10)+1;

        //now we need to make sure the user always wins the game.
        //let's make it easy and make base number the sum of all 4 gem vals

        base = gem1val + gem2val + gem3val + gem4val;

        //now multiply base by a random number between 3 and 6
        randomGeneratedNum = base*(Math.floor(Math.random()*6)+3);
        numToGuess.text(randomGeneratedNum);

    }

 
    function checkScore ()  {

        /* This function calculates whether the user's working score is equal 
        or greater than randomly generated number. In case either is true we
        will update win/loss and regenerate the game
        */

        if(workingNumber == randomGeneratedNum) //did we win?
        {
            wins++;
            alert("You win!");
            displayWins.text(wins); //update working value
            workingScore.text(0);
            generateNewGame();
        }
        else if (workingNumber > randomGeneratedNum )   //did we go too far?
        {
            losses++;   //too bad
            alert("Sorry you lost. Better luck next time!");
            displayLosses.text(losses); //update working value
            workingScore.text(0);
            generateNewGame();
        }
        else //display updated score, keep playing
        {
            workingScore.text(workingNumber); //update working value
        }
    }

    generateNewGame();  //generate initial game

    //if gems get clicked we need to update the score with the generated magnitude

    $("#gem1-update").on("click", function() {
        workingNumber+=gem1val; //update score
        checkScore();   //see whether we won or lost
    }); 
    $("#gem2-update").on("click", function() {
        workingNumber+=gem2val; //update score
        checkScore();   //see whether we won or lost
    }); 
    $("#gem3-update").on("click", function() {
        workingNumber+=gem3val; //update score
        checkScore();   //see whether we won or lost
    }); 
    $("#gem4-update").on("click", function() {
        workingNumber+=gem4val; //update score
        checkScore();   //see whether we won or lost
    }); 

      




});
