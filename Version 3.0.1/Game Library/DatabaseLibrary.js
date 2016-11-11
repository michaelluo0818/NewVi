/**
*   store the player name and the score into database
*   @param {pName}      player name
*   @param {currScore}  player's score
*/
function postHighscore(pName, score) {
    $.ajax({
        url: "https://api.mongolab.com/api/1/databases/newvi/collections/leaderboards?apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
        data: JSON.stringify( { "name" : pName, "highscore" : score}),
        type: "POST",
        contentType: "application/json"          
    });
}

/**
*	post name and achievements to the achievement database
*	@param {pName}			player name 
*	@param {achievement1}	boolean for achievment1 received or not
*	@param {achievement2}	boolean for achievment2 received or not
*	@param {achievement3}	boolean for achievment3 received or not
*/
function postAchievement(pName, achievement1, achievement2, achievement3) {
	$.ajax({
		url: "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
		data: JSON.stringify( { "name" : pName, "achievement1" : achievement1, "achievement2": achievement2, "achievement3": achievement3}),
		type: "POST",
		contentType: "application/json"
			
	});
}

/**
*	searches achievement table for a name as the key and displays achievements
*	@param {pName}	player name that is being searched for
*/
function displayAchievements(pName) {
	var found = false;
	r = new XMLHttpRequest();
	r.open("GET", "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO", true);
	r.onreadystatechange=function(){
		if(r.readyState == 4){
			var obj = JSON.parse(r.responseText);
			
			var i = null;
			for(i = 0; i < obj.length; i++){
				if(obj[i].name == pName){
					if(obj[i].achievement1 == true){
						drawImage(0.1, 0.45, 0.2, 0.2, "Images/tick.png");
					} else {
						drawImage(0.1, 0.45, 0.2, 0.2, "Images/cross.png");
					}
					if(obj[i].achievement2 == true){
						drawImage(0.4, 0.45, 0.2, 0.2, "Images/tick.png");
					} else {
						drawImage(0.4, 0.45, 0.2, 0.2, "Images/cross.png");
					}
					if(obj[i].achievement3 == true){
						drawImage(0.7, 0.45, 0.2, 0.2, "Images/tick.png");
					} else {
						drawImage(0.7, 0.45, 0.2, 0.2, "Images/cross.png");
					}
					found = true;
					break;
				}
			}
			if(found == false){
				alert("Could not find " + pName);
				drawImage(0.1, 0.45, 0.2, 0.2, "Images/cross.png");
				drawImage(0.4, 0.45, 0.2, 0.2, "Images/cross.png");
				drawImage(0.7, 0.45, 0.2, 0.2, "Images/cross.png");
			}
		};
	}
	r.send(null);
}

/**
*	searches achievement table for a name as the key and creates a new record if it is not found, or changes the record if it is found
*	@param {pName}			player name 
*	@param {achievement1}	boolean for achievment1 received or not
*	@param {achievement2}	boolean for achievment2 received or not
*	@param {achievement3}	boolean for achievment3 received or not
*/
function achievementToDatabase(pName, achievement1, achievement2, achievement3) {
	var found = false;
	r = new XMLHttpRequest();
	r.open("GET", "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO", true);
	r.onreadystatechange=function(){
		if(r.readyState == 4){
			var obj = JSON.parse(r.responseText);
			
			var i = null;
			for(i = 0; i < obj.length; i++){
				// if the record is found, delete the record then remake the record with changed attributes  
				if(obj[i].name == pName){
					// attributes of the database entry
					var locAch1 = obj[i].achievement1;
					var locAch2 = obj[i].achievement2;
					var locAch3 = obj[i].achievement3;
					found = true;
					if(achievement1 == true && achievement2 == true && achievement3 == true) {
						$.ajax({
							url: "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?q={%22name%22:%22" + pName + "%22}&u=true&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
							data: JSON.stringify({"$set" : {"name": pName, "achievement1": achievement1, "achievement2": achievement2, "achievement3": achievement3}}),
							type: "PUT",
							contentType: "application/json"
						});
						
					}
					if(achievement1 == true && achievement2 == true && achievement3 == false) {
						$.ajax({
							url: "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?q={%22name%22:%22" + pName + "%22}&u=true&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
							data: JSON.stringify({"$set" : {"name": pName, "achievement1": achievement1, "achievement2": achievement2, "achievement3": locAch3}}),
							type: "PUT",
							contentType: "application/json"
						});
					}
					if(achievement1 == true && achievement2 == false && achievement3 == true) {
						$.ajax({
							url: "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?q={%22name%22:%22" + pName + "%22}&u=true&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
							data: JSON.stringify({"$set" : {"name": pName, "achievement1": achievement1, "achievement2": locAch2, "achievement3": achievement3}}),
							type: "PUT",
							contentType: "application/json"
						});
					}
					if(achievement1 == false && achievement2 == true && achievement3 == true) {
						$.ajax({
							url: "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?q={%22name%22:%22" + pName + "%22}&u=true&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
							data: JSON.stringify({"$set" : {"name": pName, "achievement1": locAch1, "achievement2": achievement2, "achievement3": achievement3}}),
							type: "PUT",
							contentType: "application/json"
						});
					}
					if(achievement1 == false && achievement2 == false && achievement3 == true) {
						$.ajax({
							url: "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?q={%22name%22:%22" + pName + "%22}&u=true&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
							data: JSON.stringify({"$set" : {"name": pName, "achievement1": locAch1, "achievement2": locAch2, "achievement3": achievement3}}),
							type: "PUT",
							contentType: "application/json"
						});
					}
					if(achievement1 == false && achievement2 == true && achievement3 == false) {
						$.ajax({
							url: "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?q={%22name%22:%22" + pName + "%22}&u=true&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
							data: JSON.stringify({"$set" : {"name": pName, "achievement1": locAch1, "achievement2": achievement2, "achievement3": locAch3}}),
							type: "PUT",
							contentType: "application/json"
						});
					}
					if(achievement1 == true && achievement2 == false && achievement3 == false) {
						$.ajax({
							url: "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?q={%22name%22:%22" + pName + "%22}&u=true&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
							data: JSON.stringify({"$set" : {"name": pName, "achievement1": achievement1, "achievement2": locAch2, "achievement3": locAch3}}),
							type: "PUT",
							contentType: "application/json"
						});
					}
					if(achievement1 == false && achievement2 == false && achievement3 == false) {
						$.ajax({
							url: "https://api.mongolab.com/api/1/databases/newvi/collections/achievements?q={%22name%22:%22" + pName + "%22}&u=true&apiKey=yXsXCeqDNLQW5jM2X6kHO9RzosAJ2QWO",
							data: JSON.stringify({"$set" : {"name": pName, "achievement1": locAch1, "achievement2": locAch2, "achievement3": locAch3}}),
							type: "PUT",
							contentType: "application/json"
						});
					}
					
				}
			}
			// if the record is not found, create a new record
			if(found == false){
				postAchievement(pName, achievement1, achievement2, achievement3);
			}
		};
	}
	r.send(null);
}