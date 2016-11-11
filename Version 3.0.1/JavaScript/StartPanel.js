/**
*   draw the start panel
*   @param {playerName} name of the player
*/
function drawStartPanel(playerName) {
    clearCanvas();
    drawMuteSoundButton();
    drawTitle();
    drawPlayerName(playerName);
    drawLeaderBoardButton();
    drawStartButton();
    drawAchievementButton();

    /**
    *   draw the title
    */
    function drawTitle() {
        drawText(0.5, 0.15, 0.15, 'NewVi', 'blue');
    }
    /**
    *   draw player name
    */
    function drawPlayerName(playerName) {
        drawText(0.5, 0.4, 0.1, playerName, 'black');
    }
    /**
    *   draw leader board button
    */
    function drawLeaderBoardButton() {
        drawButton(0.5, 0.6, 0.8, 0.12, 'Leader Board', 'white', 'green');
    }
    /**
    *   draw start button
    */
    function drawStartButton() {
        drawButton(0.5, 0.75, 0.8, 0.15, 'Start', 'white', 'red');
    }
    /*
    * draw the achievement button()
    */
    function drawAchievementButton() {
	  drawImage(0.015, 0.015, 0.15, 0.15, 'Images/star-2.png');
    }
}
/**
*   draw the sound button
*/
function drawSoundButton() {
    drawImage(0.8, 0, 0.2, 0.2, 'Images/Unmute.png');
}
/**
*   draw the mute sound button
*/
function drawMuteSoundButton() {
    drawImage(0.8, 0, 0.2, 0.2, 'Images/Mute.png');
}
