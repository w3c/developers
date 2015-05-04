
var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		width: window.innerWidth,
    	playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'modestbranding': 1, 'showinfo': 0, 'playlist': 'Ug6XAw6hzaw' },
		height: Math.ceil(window.innerWidth / (16/9)),
		videoId: 'Ug6XAw6hzaw',
        events: {
        	'onReady': onPlayerReady
        }
	})
}

function onPlayerReady(event) {
    player.mute();
	player.setLoop(true);
}



