
## Javascript

[`htmlElement.getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
取得在可視範圍的方塊(內含的離邊都是距離可視範圍)

要用`window.scroll`的座標來修正成`page`的座標

## 更好的寫法

寫這樣
用`position: absolution`做定位效果
```javascript=
highlight.style.top = `${linkCoodrs.top}px`;
highlight.style.left = `${linkCoodrs.left}px`;
```
可以寫成這樣
用`transform`的位移變化`translate()`
```javascript=
hightlight.style.transform = `translate(${linkCoodrs.left}px), ${linkCoodrs.top}px)`;
```
