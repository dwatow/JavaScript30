## Javascript

### 語音訊息
```javascript=
const msg = new SpeechSynthesisUtterance();
```
`msg.text` 要唸的文字
`msg.voice` 要用什麼語音服務唸

### 語音服務物件

等一下他要唸語音訊息

`speechSynthesis.getVoices();` 目前可以用的語音服務
`speechSynthesis.speak(msg);`唸
`speechSynthesis.cancel();`  停！別唸了
