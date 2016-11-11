/**
*   play the sound clip that is passed in.
*   @param {music}  id of the sound
*/
function playAudio(music){
    var soundclip = document.getElementById(music);
    soundclip.play();
}
/**
*   play the back ground sound and change the mute / unmute image.
*/
function toggleSound() {
    // variables
    var audio = document.getElementById("background_audio");
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;

    ctx.clearRect(0.8 * width, 0 * height, 0.2 * width, 0.2 * height);
    if(audio.paused) {
		audio.play();
		drawMuteSoundButton();
    } else {
		audio.pause();
		drawSoundButton();
    }
}