// JavaScript Document

		var vid = document.getElementById("bgvid");
var pauseButton = document.getElementById("vidpause");
function vidFade() {
vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});
pauseButton.addEventListener("click", function() {
vid.classList.toggle("stopfade");
if (vid.paused) {
vid.play();
pauseButton.innerHTML = '<span class="octicon octicon-playback-pause">';
} else {
vid.pause();
pauseButton.innerHTML = '<span class="octicon octicon-playback-play">';
}
})

var vid = document.getElementById("bgvid");
var muteButton = document.getElementById("mute");
window.onload = vid.muted = true;

// Event listener for the mute button
muteButton.addEventListener("click", function() {
  if (vid.muted == false) {
    // Mute the video
    vid.muted = true;

    // Update the button text
    muteButton.innerHTML =  '<span class="glyphicon glyphicon-volume-off">';
  } else {
    // Unmute the video
    vid.muted = false;

    // Update the button text
    muteButton.innerHTML = '<span class="glyphicon glyphicon-volume-up">';
  }
});

var videoElement = document.getElementById("bgvid");
var entrack = videoElement.textTracks; // one for each track element
var entrack = entrack[0]; // corresponds to the first track element
var kind = entrack.subtitles; // e.g. "subtitles"
var mode = entrack.hidden; // e.g. "disabled", hidden" or "showing"
var subbtn = document.getElementById("subtitles");

subbtn.addEventListener("click", function() {
mode = entrack.showing;	
});



