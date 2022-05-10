const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: true,
    autoplay:true,
    loop:'one',
   	volume:0.4,
   	theme: '#eeeeee',
    audio: [{
        name: 'Last Dance',
        artist: 'BIGBANG',
        url: '/audio/lastdance.mp3',
        cover: '',
    }]
});