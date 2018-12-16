$(document).ready(function () {
    var currentScore, targetScore, C1Value, C2Value, C3Value, C4Value, clicksLeft;
    var winCount = 0;
    var lossCount = 0;

    resetGame = function () {
        currentScore = 0;
        clicks = 0;
        targetScore = Math.floor(Math.random() * (120 - 19) + 19);
        C1Value = Math.floor(Math.random() * (4 - 1) + 1);
        C2Value = Math.floor(Math.random() * (7 - C1Value) + C1Value + 1);
        C3Value = Math.floor(Math.random() * (9 - C2Value) + C2Value + 1);
        C4Value = Math.floor(Math.random() * (12 - C3Value) + C3Value + 1);
        clicksLeft = Math.round(targetScore / C4Value + 3);
        $(".targetscore-text").html("Target Score: " + targetScore);
        $(".currentscore-text").html("Current Score: 0");
        $(".crystal1-score, .crystal2-score, .crystal3-score, .crystal4-score").empty();
        $(".clicksleft-text").html("Clicks Left: " + clicksLeft);
    };
    
    resetGame();

    checkStatus = function () {
        if (currentScore === targetScore) {
            resetGame();
            winCount++;
            console.log("You Won!");
            $(".wincount-text").html("Wins: " + winCount);
        }

        else if (currentScore > targetScore || clicksLeft === 0) {
            resetGame();
            lossCount++;
            console.log("You Lost!");
            $(".losscount-text").html("Losses: " + lossCount);
        }
    };

    console.log(C1Value + "," + C2Value + "," + C3Value + "," + C4Value);

    //if player clicks on crystal 1
    $(".crystal1-pic").on("click", function () {
        console.log("You clicked on 1!");
        clicksLeft--;
        currentScore = currentScore + C1Value;
        $(".currentscore-text").html("Current Score: " + currentScore);
        $(".crystal1-score").html(C1Value);
        $(".jumbotron").hide();
        $(".clicksleft-text").html("Clicks Left: " + clicksLeft);
        checkStatus();
    });

    //if player clicks on crystal 2
    $(".crystal2-pic").on("click", function () {
        console.log("You clicked on 2!");
        clicksLeft--;
        currentScore = currentScore + C2Value;
        $(".currentscore-text").html("Current Score: " + currentScore);
        $(".crystal2-score").html(C2Value);
        $(".jumbotron").hide();
        $(".clicksleft-text").html("Clicks Left: " + clicksLeft);
        checkStatus();
    });

    //if player clicks on crystal 3
    $(".crystal3-pic").on("click", function () {
        console.log("You clicked on 3!");
        clicksLeft--;
        currentScore = currentScore + C3Value;
        $(".currentscore-text").html("Current Score: " + currentScore);
        $(".crystal3-score").html(C3Value);
        $(".jumbotron").hide();
        $(".clicksleft-text").html("Clicks Left: " + clicksLeft);
        checkStatus();
    });

    //if player clicks on crystal 4
    $(".crystal4-pic").on("click", function () {
        console.log("You clicked on 4!");
        clicksLeft--;
        currentScore = currentScore + C4Value;
        $(".currentscore-text").html("Current Score: " + currentScore);
        $(".crystal4-score").html(C4Value);
        $(".jumbotron").hide();
        $(".clicksleft-text").html("Clicks Left: " + clicksLeft);
        checkStatus();
    });





















});