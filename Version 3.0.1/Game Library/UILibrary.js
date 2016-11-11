/**
*   clear the game canvas
*/
function clearCanvas() {
    // variables
    var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
    
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
/**
*   Print a gradient text on the "game" canvas.
*   @param {xRatio}         x position of the text based on the canvas size (0 - 1)
*   @param {yRatio}         y position of the text based on the canvas size (0 - 1)
*   @param {align}          the alignment of the text
*   @param {heightRatio}    the font size of the text based on the canvas size (0 - 1)
*   @param {text}           text to be displayed
*   @param {textColourOne}  first colour of the text
*   @param {textColourTwo}  second colour of the text
*/
function drawGradientText(xRatio, yRatio, align, heightRatio, text, textColourOne, textColourTwo) {
    // variables 
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    
    // gradient
    gradient.addColorStop("0", textColourOne);
    gradient.addColorStop("1.0", textColourTwo);
    
    // text styling
    ctx.fillStyle = gradient;
    ctx.font = "bold " + (heightRatio * height) + "px Arial";
    ctx.textAlign = align;
    
    // fill text
    ctx.fillText(text, xRatio * width, (yRatio + heightRatio) * height);
}
/**
*   Print a text on the "game" canvas. Default textAlign to be center.
*   @param {xRatio}         x position of the text based on the canvas size (0 - 1)
*   @param {yRatio}         y position of the text based on the canvas size (0 - 1)
*   @param {heightRatio}    the font size of the text based on the canvas size (0 - 1)
*   @param {text}           text to be displayed
*   @param {textColour}     colour of the text
*/
function drawText(xRatio, yRatio, heightRatio, text, textColour) {
    drawGradientText(xRatio, yRatio, 'center', heightRatio, text, textColour, textColour);
}
/**
*   Print a button on the "game" canvas 
*   @param {xRatio}         x position of the button based on the canvas size (0 - 1)
*   @param {yRatio}         y position of the button based on the canvas size (0 - 1)
*   @param {widthRatio}     the width of the button based on the canvas size (0 - 1)
*   @param {heightRatio}    the height of the button based on the canvas size (0 - 1)
*   @param {text}           text on the button
*   @param {textColour}     colour of the text
*   @param {buttonColour}   colour of the button
*/ 
function drawButton(xRatio, yRatio, widthRatio, heightRatio, text, textColour, buttonColour) {
    // variables 
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    
    // draw box of the button
    ctx.fillStyle = buttonColour;
    ctx.fillRect((xRatio - widthRatio / 2) * width, yRatio * height, widthRatio * width, heightRatio * height);
    ctx.fillStyle = "black";
    ctx.lineWidth = 1.5;//(widthRatio + heightRatio) * (width + height) / 160;
    ctx.strokeRect((xRatio - widthRatio / 2) * width, yRatio * height, widthRatio * width, heightRatio * height);
    
    // draw text on the button
    drawText(xRatio, yRatio, heightRatio * 0.7, text, textColour);
}
/**
*   Paint an image on the "game" canvas.
*   @param {xRatio}         x position of the image based on the canvas size (0 - 1)
*   @param {yRatio}         y position of the image based on the canvas size (0 - 1)
*   @param {widthRatio}     the width of the button based on the canvas size (0 - 1)
*   @param {heightRatio}    the height of the button based on the canvas size (0 - 1)
*   @param {src}            source of the file
*/
function drawImage(xRatio, yRatio, widthRatio, heightRatio, src) {
    // variables
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    var image = new Image();
    
    // draw image
    image.src = src;
    image.onload = function() {
        ctx.drawImage(image, xRatio * width, yRatio * height, widthRatio * width, heightRatio * height);
    }
}
/**
*   draw the hearts(life points) on the top left of the canvas.
*   @param {lifePoint}  life point remained
*/
function drawLifePoint(lifePoint) {
    for (var i = 0; i < lifePoint; i++) {
        drawImage(0.05 + 0.05 * i, 0.05, 0.05, 0.05, 'Images/Heart.gif');
    }
}
/**
*   draw the hearts(life points) on the top left of the canvas.
*   @param {lifePoint}  life point remained
*/
function drawCurrentScore(score) {
    drawGradientText(0.95, 0.05, "right", 0.05, 'Score: ' + score, 'black', 'black');
}