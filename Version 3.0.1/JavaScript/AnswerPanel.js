/**
*   draw the answer panel and add its action listener
*   @param {spot}   spot of the correct box
*   @param {answer} correct answer
*   @param {lifePoint}      life point remained
*   @param {score}          player's current score
*/
function drawAnswerPanel(spot, answer, lifePoint, score) {
    // variables
    var boxOne;
    var boxTwo;
    var boxThree;
    var boxFour;
    
    // generate four random boxes
    do {
        boxOne = randomBoxGenerator();
    } while (boxOne.fontColour == answer.fontColour && boxOne.text == answer.text && boxOne.boxColour == answer.boxColour);
    do {
        boxTwo = randomBoxGenerator();
    } while (boxTwo.fontColour == answer.fontColour && boxTwo.text == answer.text && boxTwo.boxColour == answer.boxColour);
    do {
        boxThree = randomBoxGenerator();
    } while (boxThree.fontColour == answer.fontColour && boxThree.text == answer.text && boxThree.boxColour == answer.boxColour);
    do {
        boxFour = randomBoxGenerator();
    } while (boxFour.fontColour == answer.fontColour && boxFour.text == answer.text && boxFour.boxColour == answer.boxColour);

    // assign the answer to the right spot
    if (spot == 1)
        boxOne = answer;
    else if (spot == 2)
        boxTwo = answer;
    else if (spot == 3)
        boxThree = answer;
    else if (spot == 4)
        boxFour = answer;
    
    // draw
    clearCanvas();
    drawLifePoint(lifePoint);
    drawCurrentScore(score);
    drawSpotOne(boxOne);
    drawSpotTwo(boxTwo);
    drawSpotThree(boxThree);
    drawSpotFour(boxFour);
    
    /**
    *   draw the box at spot one
    *   @param {box} box to be drawn
    */
    function drawSpotOne(box) {
        drawButton(0.25, 0.3, 0.4, 0.3, box.text, box.fontColour, box.boxColour);
    }
    /**
    *   draw the box at spot two
    *   @param {box} box to be drawn
    */
    function drawSpotTwo(box) {
        drawButton(0.75, 0.3, 0.4, 0.3, box.text, box.fontColour, box.boxColour);
    }
    /**
    *   draw the box at spot three
    *   @param {box} box to be drawn
    */
    function drawSpotThree(box) {
        drawButton(0.25, 0.65, 0.4, 0.3, box.text, box.fontColour, box.boxColour);
    }
    /**
    *   draw the box at spot four
    *   @param {box} box to be drawn
    */
    function drawSpotFour(box) {
        drawButton(0.75, 0.65, 0.4, 0.3, box.text, box.fontColour, box.boxColour);
    }
}