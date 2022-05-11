---
title: hexo使用
date: 2022-05-09 21:55:39
categories: 工具使用
tags: 
---

## 发布文章

在source的_post文件夹中创建markdown文件，并在文章最上方写明文章基本属性。

基本属性使用yaml格式，冒号和后面文字必须空一格。使用---可以创建yaml，即三个杠。

或使用命令`hexo n "文件名称"`

写完文章后，依次执行以下命令：

`hexo clean`：清理静态文件

`hexo generate / hexo g`：重新生成文件

`hexo deploy / hexo d`：部署

即可完成文章发布。

修改文章也类似。
