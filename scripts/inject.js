hexo.extend.injector.register('body_begin',
 '<style>code {font-weight:400;} #board {border-radius: 1.5rem;} #board-ctn {width:110%;margin-left:-5%;}</style>',
  'post');


// 设置 关于页头像，鼠标悬浮旋转360度
hexo.extend.injector.register('body_begin',
 '<style>img.img-fluid {-webkit-transition: -webkit-transform 1.0s ease-out;-moz-transition: -moz-transform 1.0s ease-out;transition: transform 1.0s ease-out;} img.img-fluid:hover {-webkit-transform: rotateZ(360deg);-moz-transform: rotateZ(360deg);transform: rotateZ(360deg);}</style>',
  'about');

// 无法关闭显示文章摘要，所以只能将摘要的display属性设为none
hexo.extend.injector.register('body_begin',
 '<style>.index-excerpt {display:none} </style>',
  'home');


/*当字体为Butterfly时，注释掉下列代码，使用霞鹜文楷(xiawuwenkai)时，再引入这些代码*/

hexo.extend.injector.register('body_begin',
 '<style>.post-content {font-weight:600;}</style>',
  'post');

// 设置 关于页字体粗细
hexo.extend.injector.register('body_begin',
 '<style>.markdown-body{font-weight:800;} </style>',
  'about');


// 设置 归档页字体粗细
hexo.extend.injector.register('body_begin',
 '<style>.list-group-item-title {font-weight:800;} </style>',
  'archive');

// 设置 标签页字体粗细
hexo.extend.injector.register('body_begin',
 '<style>.list-group-item-title {font-weight:800;} </style>',
  'tag');

// 设置 分类页字体粗细
hexo.extend.injector.register('body_begin',
 '<style>.list-group-item {font-weight:700;} .category-post {font-weight: 700} </style>',
  'category');


