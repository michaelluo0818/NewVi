/**
*   main function that runs the game.
*/
function runGame() {
    // variables - canvas
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
    var canvasSize = window.innerHeight/2.2;
    var width = canvas.width;
    var height = canvas.height;
    
    // variables - play information
    var playerName = 'PLAYER';
    var lifePoint = 3;
    var score = 0;
    var correct = true;
    
    // variables - game information
    var level = 1;
    var currentSlide = 1;
    var answerArray = [];
    var spotArray = [];
    
    // variables - achievements
    var achievement1 = false;	// correct streak
    var achievement2 = false;	// reach level 10
    var achievement3 = false;	// reach level 8 without losing a life
    var streakCount = 0;
    // draw panels
    if(window.innerWidth > window.innerHeight) {
        canvasSize = window.innerWidth/2.2;
    }
    if(canvasSize > 400) {
        canvasSize = 400;
    }
    document.getElementById("game").width = canvasSize;
    document.getElementById("game").height = canvasSize;
    drawStartPanel(playerName);
    canvas.addEventListener('click', startPanelEventListener);
    toggleSound();
    
    /**
    *   if it is the end of the level, go to the next level, otherwise go to the next question.
    */
    function nextQuestion() {
        // if the end of the level
        if (currentSlide >= level) {
            // reset current slide, answerArray, spotArray and increase level
            currentSlide = 1;
            level++; 
            answerArray = [];
            spotArray = [];
            // achievement 2: reach level 4
            if(level >= 4){
                achievement2 = true;
            }
            //achievement 3: no lives lost and reached level 8
            if(level >= 8 && lifePoint == 3){
                achievement3 = true;
            }
            // generates new answers and spots
            for (var i = 0; i < level; i++) {
                answerArray.push(randomBoxGenerator());
                spotArray.push(randomSpotGenerator());
            }
            // display level panels
            drawLevelPanel(level, correct);
            levelPanelEventListener();
        }
        // not the end of the level
        else {
            // increment slide number
            currentSlide++;
            // display the next question panel and answer panel
            drawQuestionPanel(currentSlide, answerArray[currentSlide - 1], correct)
            setTimeout(function() {
                drawAnswerPanel(spotArray[currentSlide - 1], answerArray[currentSlide - 1], lifePoint, score);
                canvas.addEventListener('click', answerPanelEventListener);
            }, 4000);
        }
    }
    /**
    *   start panel event listener
    *   @param {event}  event occurred
    */
    function startPanelEventListener(event) {
        canvas.removeEventListener('click', startPanelEventListener);
        // sound
        if (eventListener(0.9, 0, 0.2, 0.2, event.offsetX, event.offsetY)) {
            toggleSound();
            canvas.addEventListener('click', startPanelEventListener);
        }
        // player name
        else if (eventListener(0.5, 0.4, 0.9, 0.1, event.offsetX, event.offsetY)) {
            drawKeyboardPanel();
            drawTextInput(playerName);
            canvas.removeEventListener('click', startPanelEventListener);
            canvas.addEventListener('click', keyboardPanelEventListener);
        }
        // leader board button
        else if (eventListener(0.5, 0.6, 0.8, 0.12, event.offsetX, event.offsetY)) {
            drawLeaderboardPanel();
            canvas.addEventListener('click', leaderboardPanelEventListener);
        }
        // start button
        else if (eventListener(0.5, 0.75, 0.8, 0.15, event.offsetX, event.offsetY)) {
            // generates a series of answers and the correct spots
            for (var i = 0; i < level; i++) {
                answerArray.push(randomBoxGenerator());
                spotArray.push(randomSpotGenerator());
            }
            // display level panels
            drawLevelPanel(level, correct);
            levelPanelEventListener();
        } 
        else if(eventListener(0.1, 0, 0.2, 0.2, event.offsetX, event.offsetY)) {
            drawAchievement(playerName);
            canvas.addEventListener('click', achievementPanelEventListener);
        }
        else {
            canvas.addEventListener('click', startPanelEventListener);
        }
    }

    /*
        * Achievement panel event listener
        */
        function achievementPanelEventListener(event) {
            if (eventListener(0.5, 0.8, 0.6, 0.1, event.offsetX, event.offsetY)) {
                clearCanvas();
                drawStartPanel(playerName);
				canvas.removeEventListener('click', achievementPanelEventListener);
                canvas.addEventListener('click', startPanelEventListener);
            }
        }
        
    /**
    *   keyboard panel event listener
    *   @param {event}  event occurred
    */
    function keyboardPanelEventListener(event) {
        // enter key
        if (eventListener(0.85, 0.8, 0.29, 0.09, event.offsetX, event.offsetY)) {
            drawStartPanel(playerName);
			canvas.removeEventListener('click', keyboardPanelEventListener);
			canvas.addEventListener('click', startPanelEventListener);
        }
        // not enter key
        else
        {
            // space bar
            if (eventListener(0.5, 0.9, 0.99, 0.09, event.offsetX, event.offsetY))
                playerName = playerName + " ";
            // delete key
            else if (eventListener(0.95, 0.7, 0.09, 0.09, event.offsetX, event.offsetY)) {
                if(playerName.length >= 1) {
                    playerName = playerName.substring(0, playerName.length - 1);
                }
            }
            // number row keys
            else if (eventListener(0.5, 0.5, 0.99, 0.09, event.offsetX, event.offsetY)) {
                if (eventListener(0.05, 0.5, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + '1';
                else if (eventListener(0.15, 0.5, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + '2';
                else if (eventListener(0.25, 0.5, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + '3';
                else if (eventListener(0.35, 0.5, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + '4';
                else if (eventListener(0.45, 0.5, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + '5';
                else if (eventListener(0.55, 0.5, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + '6';
                else if (eventListener(0.65, 0.5, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + '7';
                else if (eventListener(0.75, 0.5, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + '8';
                else if (eventListener(0.85, 0.5, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + '9';
                else if (eventListener(0.95, 0.5, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + '0';
            }
            // first row keys
            else if (eventListener(0.5, 0.6, 0.99, 0.09, event.offsetX, event.offsetY)) {
                if (eventListener(0.05, 0.6, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'Q';
                else if (eventListener(0.15, 0.6, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'W';
                else if (eventListener(0.25, 0.6, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'E';
                else if (eventListener(0.35, 0.6, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'R';
                else if (eventListener(0.45, 0.6, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'T';
                else if (eventListener(0.55, 0.6, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'Y';
                else if (eventListener(0.65, 0.6, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'U';
                else if (eventListener(0.75, 0.6, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'I';
                else if (eventListener(0.85, 0.6, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'O';
                else if (eventListener(0.95, 0.6, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'P';
            }
            // second row keys
            else if (eventListener(0.45, 0.7, 0.99, 0.09, event.offsetX, event.offsetY)) {
                if (eventListener(0.05, 0.7, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'A';
                else if (eventListener(0.15, 0.7, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'S';
                else if (eventListener(0.25, 0.7, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'D';
                else if (eventListener(0.35, 0.7, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'F';
                else if (eventListener(0.45, 0.7, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'G';
                else if (eventListener(0.55, 0.7, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'H';
                else if (eventListener(0.65, 0.7, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'J';
                else if (eventListener(0.75, 0.7, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'K';
                else if (eventListener(0.85, 0.7, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'L';
            }
            // third row keys
            else if (eventListener(0.35, 0.8, 0.99, 0.09, event.offsetX, event.offsetY)) {
                if (eventListener(0.05, 0.8, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'Z';
                else if (eventListener(0.15, 0.8, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'X';
                else if (eventListener(0.25, 0.8, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'C';
                else if (eventListener(0.35, 0.8, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'V';
                else if (eventListener(0.45, 0.8, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'B';
                else if (eventListener(0.55, 0.8, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'N';
                else if (eventListener(0.65, 0.8, 0.09, 0.09, event.offsetX, event.offsetY))
                    playerName = playerName + 'M';
            }    
            // check if the player name is too long
            if(playerName.length > 10) {
                playerName = playerName.substring(0, playerName.length - 1);
            }
            // redraw   
            text = drawTextInput(playerName);
        }    
    }
    /**
    *   leader board panel event listener
    *   @param {event}  event occurred
    */
    function leaderboardPanelEventListener(event) {
        // back button
        if (eventListener(0.5, 0.8, 0.6, 0.1, event.offsetX, event.offsetY)) {
            drawStartPanel(playerName);
            canvas.removeEventListener('click', leaderboardPanelEventListener);
            canvas.addEventListener('click', startPanelEventListener);
        }
    }
    /**
    *   level panel event listener
    */
    function levelPanelEventListener() {
        setTimeout(function() {
            drawObservationPanel(currentSlide, answerArray[currentSlide - 1], lifePoint, score);
            observationPanelEventListener();
            currentSlide++;
        }, 3000);
    }
    /**
    *   observation panel event listener.
    */
    function observationPanelEventListener() {
        setTimeout(function() {
            // not the last slide
            if (currentSlide <= level) {
                drawObservationPanel(currentSlide, answerArray[currentSlide - 1], lifePoint, score);
                observationPanelEventListener();
                currentSlide++;
            }
            // last slide 
            else {
                currentSlide = 1;
                drawQuestionPanel(currentSlide, answerArray[currentSlide - 1], correct)
                setTimeout(function() {
                    drawAnswerPanel(spotArray[currentSlide - 1], answerArray[currentSlide - 1], lifePoint, score);
                    canvas.addEventListener('click', answerPanelEventListener);
                }, 4000);
            }
        }, 4000);
    }
    /**
    *   answer panel event listener.
    *   @param {event}  event occurred
    */
    function answerPanelEventListener(event) {
        // variables
        var spotChosen;
        var clicked = true;
        // get the spot chosen
        canvas.removeEventListener('click', answerPanelEventListener);
        if (eventListener(0.25, 0.3, 0.4, 0.3, event.offsetX, event.offsetY))
            spotChosen = 1;
        else if (eventListener(0.75, 0.3, 0.4, 0.3, event.offsetX, event.offsetY))
            spotChosen = 2;
        else if (eventListener(0.25, 0.65, 0.4, 0.3, event.offsetX, event.offsetY))
            spotChosen = 3;
        else if (eventListener(0.75, 0.65, 0.4, 0.3, event.offsetX, event.offsetY))
            spotChosen = 4;
        else {
            canvas.addEventListener('click', answerPanelEventListener);
            clicked = false;
        }
        
        if (clicked) {
            // if the answer is correct
            if (spotChosen == spotArray[currentSlide - 1]) {
                playAudio('success');
                score = score + level * 100;
                correct = true;
                // achievement 1: correct streak of 5 in a row
                ++streakCount;
                if(streakCount >= 5){
                    achievement1 = true;
                }
                nextQuestion();
            }
            // if the answer is not correct
            else {
                playAudio('fail');
                correct = false;
                lifePoint--;
                streakCount = 0;
                // life remain is less than zero
                if (lifePoint <= 0) {
                    // reset game information
                    level = 1;
                    currentSlide = 1;
                    // go to the end panel
                    drawEndPanel(score);
                    canvas.addEventListener('click', endPanelEventListener);
                }
                // life remain is greater than zero
                else {
                    nextQuestion();
                }
            }
        }
    }
    /**
    *   end panel event listener.
    *   @param {event}  event occurred
    */
    function endPanelEventListener(event) {
        canvas.removeEventListener('click', endPanelEventListener);
        // post player's name and score onto the database
        postHighscore(playerName, score);
        postAchievement(playerName, achievement1, achievement2, achievement3);
        achievementToDatabase(playerName, achievement1, achievement2, achievement3);
        // reset player information
        score = 0;
        lifePoint = 3;
        correct = true;
		
		// reset achievement attributes 
		achievement1 = false;
		achievement2 = false;
		achievement3 = false;
        
        // restart
        if (eventListener(0.5, 0.55, 0.6, 0.15, event.offsetX, event.offsetY)) {
            // generates a series of answers and the correct spots
            for (var i = 0; i < level; i++) {
                answerArray.push(randomBoxGenerator());
                spotArray.push(randomSpotGenerator());
            }
            // display observation panels
            drawLevelPanel(level, correct);
            levelPanelEventListener();
        }
        // end game
        else if (eventListener(0.5, 0.75, 0.6, 0.15, event.offsetX, event.offsetY)) {
            drawStartPanel(playerName);
            canvas.addEventListener('click', startPanelEventListener);
        }
        else {
            canvas.addEventListener('click', endPanelEventListener);
        }    
    }
}