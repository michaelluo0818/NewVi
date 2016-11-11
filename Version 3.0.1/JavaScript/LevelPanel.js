/**
*   draw the level panel
*   @param {level}      the level of the stage
*   @param {correct}    if the last answer is correct or not
*/
function drawLevelPanel(level, correct) {
    clearCanvas();
	// variables 
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    
    // draw background
    if (correct)
        ctx.fillStyle = "#88C100";
    else
        ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    drawLevelTitle(level);
    drawHint(level);
    
    /**
    *   draw the title of the level
    *   @param {level} the level of the stage
    */
    function drawLevelTitle(level) {
        drawText(0.5, 0.3, 0.1, 'Level ' + level, 'white');
    }
    /**
    *   draw the hint to the game
    *   @param {level} the level of the stage
    */
    function drawHint(level) {
        if (level == 1) {
            drawText(0.5, 0.5, 0.05, 'Hint: Remember the boxes', 'white');
            drawText(0.5, 0.6, 0.05, 'and click on the right answer', 'white');
        }
        else if (level == 2) {
            drawText(0.5, 0.5, 0.05, 'Hint: Remember the boxes', 'white');
            drawText(0.5, 0.6, 0.05, 'displayed in a series', 'white');
        }
        else {
            drawText(0.5, 0.5, 0.05, 'Hint: Try reading out the boxes', 'white');
        }
    }
}