
## HTML

### Attribute
- [`contenteditable`](https://www.w3schools.com/tags/att_global_contenteditable.asp) 可編輯段落

## Javascript
### [`text-shadow`](https://www.w3schools.com/jsref/prop_style_textshadow.asp)

```javascript=
object.style.textShadow = "none|h-shadow v-shadow blur color|initial|inherit"
```

### Mouse Event Coordinate

[測試小頁面](https://dwatow.github.io/coordinate.html)

- [movementX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/movementX), movementY
    - 距離上次Event觸發時滑鼠位置的差距
    - 原點: 上次的 screen(x, y)
    - 計算方式: currentEvent.movementX = currentEvent.screenX - previousEvent.screenX.
- [clientX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX), clientY
    - application client area的座標, 也就是client的可視區座標
    - 可視區左上角
- [offsetX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX), offsetY
    - 在HTML元素上的座標
    - 原點: 該HTML元素的左上角。
- [pageX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX), pageY
    - 在頁面上的位置
    - 原點: 該頁的左上角(捲軸捲動時，座標會改變)
- [screenX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenX), screenY
    - 在螢幕上的座標
    - 原點: 作業系統畫面(螢幕)的左上角
- [x](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/x), y
    - client(x, y)的意思, 它只是別名
