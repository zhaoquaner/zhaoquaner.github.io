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

document.getElementsByClassName("nav-link")[5].onclick = function() {
	alert("音乐播放");
	ap.play();
}
