/**
*   detects if the clicked point is inside the box setted up by the parameters.
*   @param {box_x}  x-coordinate of the top left point of the button
*   @param {box_y}  y-coordinate of the top left point of the button
*   @param {width}  width of the box
*   @param {height} height of the box
*   @param {x}      x-coordinate of the clicked point
*   @param {y}      y-coordinate of the clicked point
*/
function collision(box_x, box_y, width, height, x, y) {
    if (x < box_x || x > box_x + width) {
        return false;
    } else if (y < box_y || y > box_y + height) {
        return false;
    } else {
        return true;
    }    
}
/**
*   add event listener.
*   @param {xRatio}         the centred column number ratio (0 - 1) of the text on the canvas
*   @param {yRatio}         the line number ratio (0 - 1) of the text on the canvas
*   @param {widthRatio}     the width of the button to the width of the canvas (0 - 1)
*   @param {heightRatio}    the font size of the text relative to the canvas size (0 - 1)
*   @param {x}              x coordinate of the point clicked
*   @param {y}              y coordinate of the point clicked
*   @return true if the point click is inside the range passed in false otherwise.
*/
function eventListener(xRatio, yRatio, widthRatio, heightRatio, x, y)
{
    // variables
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    var width = canvas.width;
	var height = canvas.height;
    
    // return true if collided false otherwise
    return collision((xRatio - widthRatio / 2) * width, yRatio * height, widthRatio * width, heightRatio * height, x, y);
}
/**
*   generates a random number from 0 - 9 inclusive.
*   @return random value
*/
function randomNumberGenerator(){
    return Math.floor(Math.random() * 10);
}
/**
*   generates a random colour from the colours array
*   @return random colour
*/
function randomColourGenerator(max){
    // red, green, blue, black, yellow, purple, cyan, orange, brown
    var colours = ["#CC2237","#88C100","#00AAFF","#000000","rgb(255,255,0)"
                ,"#F0B0C1","#00FFAA","rgb(255,137,0)","rgb(108,50,0)"];

    // check if max exceeded the number of colours
    if (max <= colours.length)
        return colours[Math.floor(Math.random() * (max))];
    else
        return colours[Math.floor(Math.random() * (colours.length))];
}
/**
*   generates random box information and return it.
*   @return random box information
*/
function randomBoxGenerator() {
    // variables
    var random = {boxNumber: 0, fontColour: 0, text: 0, boxColour: 0};
    // assign random information to random
    random.boxNumber = Math.floor(Math.random() * 2) + 1;
    random.fontColour = randomColourGenerator(9);
    random.text = randomNumberGenerator();
    do {
        random.boxColour = randomColourGenerator(9);
    } while(random.fontColour ==  random.boxColour);
    // return box information
    return random;
}
/**
*   generates random spot and return it.
*   @return random spot information
*/
function randomSpotGenerator() {
    return Math.floor(Math.random() * 4) + 1;
}
