/*
* Draws the Achievement page
* @param {name} Takes in a name which represents
* a user and will display their achievements.
*/
function drawAchievement(name) {
  // variables
  clearCanvas();
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "#3CDFEF";
  drawAchievementTitle();
  drawHomeButton();
  displayAchievements(name);
  achievementDescriptions();
  /*
  * The title function of the page.
  */
  function drawAchievementTitle() {
      drawText(0.5, 0.15, 0.065, name + '\'s Achievements', 'black');
  }
  /*
  * The home button.
  */
  function drawHomeButton() {
        drawButton(0.5, 0.8, 0.6, 0.1, 'Back', 'white', 'purple');
    }
	
	/*
	*	Descriptions for the achievements.
	*/
	function achievementDescriptions(){
		drawText(0.2, 0.35, 0.04, "5 in a Row", 'black');
		drawText(0.5, 0.35, 0.04, "Level 4", 'black');
		drawText(0.8, 0.35, 0.04, "Perfect 8", 'black');
	}
  }
