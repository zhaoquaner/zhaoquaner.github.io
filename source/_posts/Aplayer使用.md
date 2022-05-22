---
title: Aplayer的使用
date: 2022-05-11 11:31:21
categories: 工具使用
tags: 工具
---

我希望在使用**Hexo**的个人博客中加入背景音乐，最后找到Aplayer工具。这里说下Aplayer的使用。

### 引入文件并创建Aplayer对象

首先引入Aplayer的Js和Css文件，代码如下。

```html
<link rel="stylesheet" href="APlayer.min.css">
<div id="aplayer"></div>
<script src="APlayer.min.js"></script>
```

在想要插入的页面位置对应的代码中插入这段代码。

因为我不想让音乐播放器界面在博客界面显示，所以我把div对象的css属性`display`设为`none`。

然后在页面上方导航栏加入播放按钮，这样就可以在不显示音乐播放器的情况下播放和暂停音乐。

我使用的主题是fluid，该主题可以自定义页脚的html，所以我将上述代码加入到fluid配置文件中的对应位置。

然后在主题文件夹的source文件夹中，创建music.js文件，创建Aplayer对象，代码如下。

```javascript
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: true,
    autoplay:false,
    loop:'one',
   	volume:0.2,
    audio: [{
        name: '',
        artist: '',
        url: '',
        cover: '',
    }]
});

let isPlaying = false;
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

```

其中，上面的创建Aplayer对象是从Aplayer官网复制的，audio属性中的name、artist、url和cover分别代表歌曲名称、歌手、歌曲链接地址和歌曲封面。

下面的代码是我自己写的，其中的`document.getElementsByClassName("nav-link")[5]`就是播放按钮对象，这样写其实是比较偷懒的写法，不过我导航栏的结果一般也不会再变动，所以直接写`[5]`也没啥问题。

`ap.play()`和`ap.pause()`分别代表歌曲的播放和暂停。

然后将music.js文件路径添加到fluid主题配置文件中的`custom_js`下，这样网站加载时就会引入该文件。



### 歌曲链接地址

在尝试找了众多音乐网站的外链地址后，我放弃了。大多数地址都无法使用，我也不知道怎么搞的。

而且很多音乐网站也没有我想要的音乐资源。

最后使用的方法是，我把想要播放的音乐文件下载到本地，但如果直接引入本地的音乐地址，网站加载会慢很多，因为大多数音乐文件还是比较大的。

所以我将文件上传到腾讯云的对象存储中，然后在 url 中填入对象存储生成的文件链接地址。

因为不显示音乐播放器，所以name、artist和cover不需要填。

在做完这些后，使用`hexo clean && hexo generate && hexo deploy`，重新生成文件并部署到服务器。



最后，就可以享受边浏览博客，边听音乐的乐趣啦。
