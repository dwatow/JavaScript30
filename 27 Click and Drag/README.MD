# 完成目標

今天來實現拖拉互動的功能。

- 功能
  - 拖拉互動的功能, 要有拖拉畫面的感覺
- 畫面
  - 拖拉的程度，要和畫面移動程度，相同的pixel


[`preventDefault()`](https://www.w3schools.com/jsref/event_preventdefault.asp), 取消預設行為
在此例，好像沒什麼太大明顯的效果

## 以View寬度為滑動寬度
```javascript=
items.addEventListener('mousemove', scrolling);
function scrolling (e) {
  if (mouseDown) {
    const itemsRect = this.getBoundingClientRect();
    this.scrollLeft -= (e.movementX/itemsRect.width)*this.scrollWidth;
  }
}
```
## 以滑鼠移動寬度(pixel數)為滑動寬度
- 滑鼠點下時
  - 記下目前scroll的絕對位置
  - 記下游標的位置
- 移動滑鼠時
  - 計算滑鼠移動的相對位置
  - 將相對位置加到scroll的絕對位置
  - 不可以在此記scroll的絕對位置，會因為scroll移動而變化!!!
```javascript=
items.addEventListener('mousemove', scrolling);
function scrolling (e) {
    if (!mouseDown) return
   items.scrollLeft = (startX - e.pageX) + startScrollLeft;
}
items.addEventListener('mousedown', (e) => {
   mouseDown = true;
   items.classList.add('active');
   startX = e.pageX
   startScrollLeft = items.scrollLeft;
});
```
