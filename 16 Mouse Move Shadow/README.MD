# 完成目標

今天要學習滑鼠移動事件，移動滑鼠，影子要移動相對的距離

- 功能
  - 移動滑鼠，文字的影子要移動
- 畫面
  - 影子要隨著滑鼠相對的位子來修改距離
  - 追加: 模糊程度要隨著滑鼠相對的位子來修改

# HTML

## Attribute
- [`contenteditable`](https://www.w3schools.com/tags/att_global_contenteditable.asp) 可編輯段落

# ES6語法

[JavaScript ES6 中的物件解構賦值（object destructuring）](https://pjchender.blogspot.tw/2017/01/es6-object-destructuring.html)

下面的例子，就是右邊的物件屬性賦值到左邊的物件屬性。

對應「物件屬性名稱」。
```javascript=
const {a: a1, b: b1} = {a: a2, b: b2};
```
等同於
```javascript=
const a1 = a2;
const b1 = b2;
```

# Javascript

## [`text-shadow`](https://www.w3schools.com/jsref/prop_style_textshadow.asp)

用Javascript修改CSS，就要改element.style物件屬性
```javascript=
object.style.textShadow = "none|h-shadow v-shadow blur color|initial|inherit"
```

## Mouse Event Coordinate

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

## 座標轉換

在此有一個盲點，就是`width=clientWidth`
花了一點時間弄懂...@@

```javascript
const xWalk = Math.round((x / width * walk) - (walk / 2));
const yWalk = Math.round((y / height * walk) - (walk / 2));
```
