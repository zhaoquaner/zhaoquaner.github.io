const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: true,
    autoplay:true,
    audio: [{
        name: 'Young For You',
        artist: 'GALA',
        url: 'https://music.163.com/outchain/player?type=2&id=1304931036',
        cover: '/img/default.png',
    }]
});