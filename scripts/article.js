hexo.extend.injector.register('body_begin',
 '<style>code {font-weight:400;}.post-content {font-weight:600;} #board {border-radius: 1.5rem;} #board-ctn {width:110%;margin-left:-5%;}</style>',
  'post');

hexo.extend.injector.register('body_begin',
 '<style>.markdown-body{font-weight:800;} </style>',
  'about');

hexo.extend.injector.register('body_begin',
 '<style>.archive-post-title {font-weight:800;} </style>',
  'archive');

hexo.extend.injector.register('body_begin',
 '<style>.category-post {font-weight:800;} </style>',
  'category');


// hexo.extend.injector.register('body_begin',
//  '<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script><script src="https://cdn.bootcss.com/jquery.pjax/2.0.1/jquery.pjax.min.js"></script><script>$(document).pjax("a[target!=_blank]", "#container", {fragment:"#container", timeout:8000})</script>',
//   'default');