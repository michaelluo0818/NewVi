/**
*   draw the end panel
*   @param {score} player's score
*/
function drawEndPanel(score) {
    clearCanvas();
    drawGameOver(score);
    drawRestartButton();
    drawEndGameButton();
    
    /**
    *   draw Game Over and the player's score.
    *   @param {score} player's score
    */
    function drawGameOver(score) {
        drawText(0.5, 0.15, 0.1, 'Game Over', 'red');
        drawText(0.5, 0.35, 0.08, 'Score: ' + score, 'black');
    }
    /**
    *   draw the restart button.
    */
    function drawRestartButton() {
        drawButton(0.5, 0.55, 0.6, 0.15, 'Restart', 'white', 'green');
    }
    /**
    *   draw the end game button.
    */
    function drawEndGameButton() {
        drawButton(0.5, 0.75, 0.6, 0.15, 'End Game', 'white', 'red');
    }
}