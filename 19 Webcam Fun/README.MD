# 完成目標

使用Webcam來進行一些動作

- 功能
  - 拍照功能
  - 拍照檔案儲存.png檔
  - 拉動上面的range會改變濾鏡參數
- 畫面
  - 右上角出現webcam的畫面
  - 中間的大圖是`canvas`輸出結果
  - 出現照片縮圖列表
  - 加上濾鏡(redEffect、rgbSplit、globalAlpha、Green screen)

> 這一關，跳關了QQ
> 下面有寫原因

## 蓋一個Web Service

原因是需要讓browser連「安全連線」
有兩個辦法
1. `https`連線
2. 連到`localhost`

> 注意: 用`file://`是不包含在此範圍的

在此用node.js，安裝如下

### 安裝npm

nodejs package manager

先裝npm
```bash
$ sudo apt install npm
```
在專案裝npm
```bash
$ npm install
```
專案資料夾中，就會出現node_modules

### 安裝nvm

nodejs version manager

[Github](https://github.com/creationix/nvm/blob/master/README.markdown)

[安裝步驟](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)

- 安裝..
```
$ sudo apt-get update
$ sudo apt-get install build-essential libssl-dev
```

- 下載檔案`install.sh`和`install_nvm.sh`
```
$ curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh -o install_nvm.sh
```
- 安裝nvm
```
$ bash install_nvm.sh
```

接下來就可以做這些事
- `nvm ls-remote` 看「目前可以灌的」版號列表
- `nvm ls-remote <版號>` 看「目前可以灌的」版號列表, 過濾版號
- `nvm install <版號>` 指定安裝`node.js`版號
- `nvm use <版號>`切到指定版號
- `node -v`看目前使用的node.js版號
- `nvm ls`列出目前已安裝的node.js版號

`express`是`node.js`的framework

## Webcam

在此，我使用的webcam是用usb接上去的
用Chrome抓不到，但是用firefox可以抓到
但是firefox也運作不了。QQ

## 無法運作的原因

`getUserMedia()`依然回傳primse, 但是它的`then`並不會執行，所以抓不到`localMesiaStream`這個東西。QQ

```javascript=
function getVideo() {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  })
  .then(localMediaStream => {
    cnosole.log(localMediaStream);  //this line can't run
    video.src = window.URL.cereateObjectURL(localMediaStream);
    video.play();
  });
}

getVideo();

```


## Javascript

- ~~[Window Navigator](https://www.w3schools.com/js/js_window_navigator.asp)~~
- [The Navigator Object](https://www.w3schools.com/jsref/obj_navigator.asp) 包含瀏覽器訊息(對網頁來說是系統訊息？)


執行這一行，瀏覽器會問你是否要分享攝影機。

```javascript=
navigator.mediaDevices.getUserMedia({video: true, audio: false});  //較新的瀏覽器支援語法
navigator.getUserMedia(); //舊語法
```
回傳`Promise`，後面要接`.then()`處理。
