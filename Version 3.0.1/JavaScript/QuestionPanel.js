/**
*   draw the question panel.
*   @param {currentSlide}    the slide number
*   @param {box}            the answer box
*   @param {correct}        if the last answer is correct or not
*/
function drawQuestionPanel(currentSlide, box, correct) {
    // variables 
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
    
    // draw background
    if (correct)
        ctx.fillStyle = "#88C100";
    else
        ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // draw question
    drawText(0.5, 0.23, 0.1, 'Question ' + currentSlide, 'black');
    drawText(0.5, 0.35, 0.1, 'What is the ', 'black');
    drawText(0.5, 0.45, 0.1, 'Box ' + box.boxNumber, 'white');
    drawText(0.5, 0.55, 0.1, 'of', 'black');
    drawText(0.5, 0.65, 0.1, 'Slide ' + currentSlide, 'white');
}