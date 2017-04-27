# 完成目標

今天要做語音輸入的功能

- 功能
  - 講話要變文字在畫面上
  - 停頓太久要分段
- 畫面
  - 講話要變文字在畫面上
  - 停頓太久要分段

# Javascript

## SpeechRecognition 是一個很新的東西
[window.SpeechRecognition 教學](http://javascript.ruanyifeng.com/htmlapi/webspeech.html)

- [`SpeechRecognition.end`](https://developer.mozilla.org/en-US/docs/Web/Events/end_%28SpeechRecognition%29), 此例子，講完麥克風就停了要再度打開。
- [`SpeechRecognitionEvent.results`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/results) 講的結果
- [`SpeechRecognitionResult.isFinal`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/isFinal) 是否講完一段
- [`SpeechRecognitionAlternative.transcript`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative/transcript) 語音的辨識內容

## 更好的寫法

兩個寫法各有好壞。

原本這樣寫
```javascript=
const transcript = [...e.results]
.map(result => result[0])
.map(result => result.transcript);
console.log(...transcript);
```
也可以這樣寫
```javascript=
const transcript = [...e.results]
.map(result => result[0])
.map(result => result.transcript).join('');
console.log(transcript);
```
