# 完成目標

這幾週[stripe.com](https://stripe.com/)更新了網站，而且它的導覽列的hover效果很厲害

- 功能
  - 超連結Hover時，白色區塊要出現在該超連結區塊上
- 畫面
  - 白色區塊的寬高要符合該超連結區塊
  - 滑鼠移開時，不變
  - 滑鼠進入另一個超連結區塊時，白色的區塊追上去(不會消失)

# Javascript

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
