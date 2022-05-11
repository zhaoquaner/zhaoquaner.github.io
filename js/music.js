const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: true,
    autoplay:false,
    loop:'all',
   	volume:0.1,
    audio: [{
        name: 'Still Life',
        artist: 'BIGBANG',
        url: 'https://crayon-1302863897.cos.ap-beijing.myqcloud.com/audio/stilllife.mp3',
        cover: '',
    },
    {
        name: 'Last Dance',
        artist: 'BIGBANG',
        url: 'https://crayon-1302863897.cos.ap-beijing.myqcloud.com/audio/lastdance.mp3',
        cover: '',
    },
    ]
});



let isPlaying = false;

// // 绑定 音乐播放完 事件
// ap.on('ended', function () {
//     ap.skipForward();
//     isPlaying = true; 
// });

document.getElementsByClassName("nav-link")[5].onclick = function() {
	if(!isPlaying) {
		ap.play();
		isPlaying = true;
		this.innerHTML = '<i class="iconfont icon-music"></i> 暂停';
	} else {
		ap.pause();
		isPlaying = false;
		this.innerHTML = '<i class="iconfont icon-music"></i> 播放';
	}


}
