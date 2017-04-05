## 語法

[`element.forEach()`](https://www.w3schools.com/jsref/jsref_forEach.asp)

[lambda](http://www.jollen.org/blog/2013/10/javascript-lambda.html)
```javascript=
funtion (key) {
    key.addEventListener('transitionend', removeTransition);
}
```
用lambda的寫法就是
```javascript=
key => key.addEventListener('transitionend', removeTransition)
```
## Window方法

jsref: [The Window Object](https://www.w3schools.com/jsref/obj_window.asp)
- [`setTimeout(function, ms)`](https://www.w3schools.com/jsref/met_win_settimeout.asp) 設定「執行一次」的function與延遲時間

## DOM方法

jsref: [The HTML DOM Document Object](https://www.w3schools.com/jsref/dom_obj_document.asp)

- `document.querySelector()`找到第一個符合指定CSS selector(s)的HTML節點
- `document.querySelectorAll()`找到符合指定CSS selector(s)的HTML節點們

## Element方法

jsref: [The HTML DOM Element Object](https://www.w3schools.com/jsref/dom_obj_all.asp)

- `element.addEventListener()` 加一個事件到Element上
- `element.classList` 回傳陣列，element上的class屬性的內容

## Event Object 方法

jsref: [HTML DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

### Transition Events

過場結束(transition end)執行 myFunction
```javascript=
element.addEventListener("transitionend", myFunction)
```
