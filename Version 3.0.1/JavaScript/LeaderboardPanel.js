/**
*   draw the leader board panel.
*/
function drawLeaderboardPanel() {
    clearCanvas();
    drawLeaderBoardText();
    drawLeaderboard();
    drawBackButton();
    
    /**
    *   draw the leader board title
    */
    function drawLeaderBoardText() {
        drawText(0.5, 0.1, 0.1, 'Leaderboard', 'blue');
    }
    /**
    *   draw the back button
    */
    function drawBackButton() {
       drawButton(0.5, 0.8, 0.6, 0.1, 'Back', 'white', 'purple');
    }
    /**
    *   draw the leader board
    */
    function drawLeaderboard() {
        // request
        r = new XMLHttpRequest();
        // location
        r.open("GET", "https://api.mongolab.com/api/1/databases/newvi/collections/leaderboards?s={%22highscore%22:-1}&l=9&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO", true);
        r.onreadystatechange = function(){
            if(r.readyState == 4){
                var message = JSON.parse(r.responseText);
                
                for (var i = 1; i <= 5; i++) {
                    drawGradientText(0.1, 0.15 + i * 0.1, 'left', 0.05, i + '. ' + message[i-1].name, 'black', 'black');
                    drawGradientText(0.5, 0.15 + i * 0.1, 'left', 0.05, message[i-1].highscore, 'black', 'black');
                }
            };
        }
        r.send(null);	
    }
}