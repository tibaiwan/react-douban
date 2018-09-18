# React 仿豆瓣电影 APP

## 技术栈
React, Redux, React-redux, React-router-dom, Jsonp

## 初始化项目

```bash
npm i -g create-react-app
create-react-app react-douban
cd react-douban
npm i
```

把 node_modules/react-scripts 下的 bin, config, scripts 文件夹提到项目根目录下  
更换启动命令，如下：

```bash
"start": "node scripts/start.js",
"build": "node scripts/build.js",
```    

## 启动项目

```bash
npm i
npm start
```

## 访问地址

* [PC 手机模式访问](http://tibaiwan.github.io/react-douban)
* 手机扫码  
<img src="./doc-img/qrCode.png" >

### TODO LIST
    即将上映跳转至详情页，返回后页面定位到正在热映部分
    进入电影详情页后加载列表页带过来的图片等信息，不需等再次请求后渲染页面
    电影详情页返回后清空存放电影详情的字段

