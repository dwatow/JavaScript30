# 完成目標

一個鍵盤爵士鼓
- 功能
  - 按下鍵盤，出現相對應的聲音
- 畫面
  - 按下鍵盤，畫面上的字母方塊，做點小動畫
    - 加上黃色陰影
    - 按鈕彈一下(微小放大)的動畫

# Javascript

## Arrow Function
- [lambda](http://www.jollen.org/blog/2013/10/javascript-lambda.html) 在Javascript裡叫 `arrow function`

一般js的匿名函數這樣寫
```javascript=
funtion (key) {
  key.addEventListener('transitionend', removeTransition);
}
```
用`arrow function`的寫法就是
```javascript=
key => key.addEventListener('transitionend', removeTransition)
```
> 不同之處在於`this`，一般的寫法有`this`=`function`本身，但是「誰」呼叫`arrow function`，「誰」=`this`。

## Window方法

jsref: [The Window Object](https://www.w3schools.com/jsref/obj_window.asp)
- [`setTimeout(function, ms)`](https://www.w3schools.com/jsref/met_win_settimeout.asp) 設定「執行一次」的function與延遲時間

## DOM Document 方法

jsref: [The HTML DOM Document Object](https://www.w3schools.com/jsref/dom_obj_document.asp)

- `document.querySelector()`找到第一個符合指定CSS selector(s)的HTML節點
- `document.querySelectorAll()`找到符合指定CSS selector(s)的HTML節點們

## DOM Element 方法

jsref: [The HTML DOM Element Object](https://www.w3schools.com/jsref/dom_obj_all.asp)

- `element.addEventListener()` 加一個事件到Element上
- `element.classList` 回傳NodeList，element上的class屬性的內容

## NodeList 方法
jsref: [JavaScript HTML DOM Node List](https://www.w3schools.com/js/js_htmldom_nodelist.asp)

-  `NodeList.forEach()`

`querySelectorAll()`出來的物件都是`NodeList`，它不是`Array`，能使用的方法不同，在此使用`forEach()`走訪每一個元素。

參考: [`Array.forEach`](https://www.w3schools.com/jsref/jsref_forEach.asp)

## Event Object 方法

jsref: [HTML DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)


-  [`Transition Events`](https://www.w3schools.com/jsref/event_transitionend.asp) 過場結束(transition end)執行 myFunction

「過場」唯一事件

```javascript=
element.addEventListener("transitionend", myFunction)
```
