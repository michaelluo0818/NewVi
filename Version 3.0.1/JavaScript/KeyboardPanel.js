/**
*   draw the keyboard panel.
*/
function drawKeyboardPanel() {
    clearCanvas();
    drawNumberRow();
    drawFirstRow();
    drawSecondRow();
    drawThirdRow();
    drawEnter();
    drawDelete();
    drawSpaceBar();
    
    /**
    *   draw the number row keys.
    */
    function drawNumberRow() {
        for (var i = 0; i < 9; i++)
            drawButton((0.05 + i * 0.1), 0.5, 0.09, 0.09, '' + (i + 1), 'black', 'white');
        drawButton(0.95, 0.5, 0.09, 0.09, '0', 'black', 'white');
    }
    /**
    *   draw the first row letter keys.
    */
    function drawFirstRow() {
        drawButton(0.05, 0.6, 0.09, 0.09, 'Q', 'black', 'white');
        drawButton(0.15, 0.6, 0.09, 0.09, 'W', 'black', 'white');
        drawButton(0.25, 0.6, 0.09, 0.09, 'E', 'black', 'white');
        drawButton(0.35, 0.6, 0.09, 0.09, 'R', 'black', 'white');
        drawButton(0.45, 0.6, 0.09, 0.09, 'T', 'black', 'white');
        drawButton(0.55, 0.6, 0.09, 0.09, 'Y', 'black', 'white');
        drawButton(0.65, 0.6, 0.09, 0.09, 'U', 'black', 'white');
        drawButton(0.75, 0.6, 0.09, 0.09, 'I', 'black', 'white');
        drawButton(0.85, 0.6, 0.09, 0.09, 'O', 'black', 'white');
        drawButton(0.95, 0.6, 0.09, 0.09, 'P', 'black', 'white');
    }
    /**
    *   draw the second row letter keys.
    */
    function drawSecondRow() {
        drawButton(0.05, 0.7, 0.09, 0.09, 'A', 'black', 'white');
        drawButton(0.15, 0.7, 0.09, 0.09, 'S', 'black', 'white');
        drawButton(0.25, 0.7, 0.09, 0.09, 'D', 'black', 'white');
        drawButton(0.35, 0.7, 0.09, 0.09, 'F', 'black', 'white');
        drawButton(0.45, 0.7, 0.09, 0.09, 'G', 'black', 'white');
        drawButton(0.55, 0.7, 0.09, 0.09, 'H', 'black', 'white');
        drawButton(0.65, 0.7, 0.09, 0.09, 'J', 'black', 'white');
        drawButton(0.75, 0.7, 0.09, 0.09, 'K', 'black', 'white');
        drawButton(0.85, 0.7, 0.09, 0.09, 'L', 'black', 'white');
    }
    /**
    *   draw the third row letter keys.
    */
    function drawThirdRow() {
        drawButton(0.05, 0.8, 0.09, 0.09, 'Z', 'black', 'white');
        drawButton(0.15, 0.8, 0.09, 0.09, 'X', 'black', 'white');
        drawButton(0.25, 0.8, 0.09, 0.09, 'C', 'black', 'white');
        drawButton(0.35, 0.8, 0.09, 0.09, 'V', 'black', 'white');
        drawButton(0.45, 0.8, 0.09, 0.09, 'B', 'black', 'white');
        drawButton(0.55, 0.8, 0.09, 0.09, 'N', 'black', 'white');
        drawButton(0.65, 0.8, 0.09, 0.09, 'M', 'black', 'white');
    }
    /**
    *   draw the enter key.
    */
    function drawEnter() {
        drawButton(0.85, 0.8, 0.29, 0.09, 'Enter', 'black', 'white');
    }
    /**
    *   draw the delete key.
    */
    function drawDelete() {
        drawButton(0.95, 0.7, 0.09, 0.09, '<', 'black', 'white');
    }
    /**
    *   draw the space bar.
    */
    function drawSpaceBar() {
        drawButton(0.5, 0.9, 0.99, 0.09, 'Space', 'black', 'white');
    }
}
/**
*   draw a input display.
*   @param {text}   text to be displayed.
*/
function drawTextInput(text) {
    // variables
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0.3 * canvas.height, canvas.width, canvas.height * 0.15);    
    drawText(0.5, 0.3, 0.1, text + " ", 'black');
}
