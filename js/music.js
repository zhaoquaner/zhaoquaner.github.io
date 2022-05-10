const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: true,
    autoplay:true,
    audio: [{
        name: 'Young For You',
        artist: 'GALA',
        url: '/audio/lastdance.mp3',
        cover: '/img/default.png',
    }]
});