# 完成目標

今天要做語音輸出(speech synthesis)

- 功能
  - 切換不同的聲音(語系)
  - 調整說話速度(聲調改變)
  - 調整咬字速度
  - 要能輸入要唸的內容
  - 觸發開始講
  - 觸發閉嘴
  - 切換聲音時，會閉嘴再開始講
- 畫面
  - 好像沒什麼特別的

# Javascript

## 語音訊息
```javascript=
const msg = new SpeechSynthesisUtterance();
```
`msg.text` 要唸的文字
`msg.voice` 要用什麼語音服務唸

## 語音服務物件

等一下他要唸語音訊息

- `speechSynthesis.getVoices();` 目前可以用的語音服務
- `speechSynthesis.speak(msg);`唸
- `speechSynthesis.cancel();`  停！別唸了

## 較好的寫法

有一個function要丟參數，但是又在只能丟函數參考的地方
無法連同參數一起丟進去時

寫一個新的function
```javascript=
function toggle_false() {
  toggle(false);
}
stopButton.addEventListener('click', toggle_false);
```

用bind()
```javascript=
stopButton.addEventListener('click', toggle.bind(null, false));
```

用arrow function
```javascript=
stopButton.addEventListener('click', () => toggle(false));
```
