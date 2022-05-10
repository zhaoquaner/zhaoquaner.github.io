const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: true,
    autoplay:false,
    loop:'one',
   	volume:0.2,
    audio: [{
        name: 'Last Dance',
        artist: 'BIGBANG',
        url: '/audio/lastdance.mp3',
        cover: '',
    }]
});

let isPlaying = false;

document.getElementsByClassName("nav-link")[5].onclick = function() {
	if(!isPlaying) {
		ap.play();
		isPlaying = true;
		this.innerText = "暂停";
	} else {
		p.pause();
		isPlaying = false;
		this.innerText = "播放";
	}


}
