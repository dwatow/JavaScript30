# 完成目標

今天要做一個`HTML5 video`播放器，要試著改變video的預設style。

每一個不同的browser看起來的預設介面都不太相同。

預設介面隱藏控制介面，還會剩下一些調整選項。

- 功能
  - 和預設介面相同的功能
    - play、pause、跳到指定時間、音量調整、~~全螢幕~~、播放速度、往前10秒、往後5秒
- 畫面
  - 依題目程式碼給的
    - 縮起來剩下進度條(已給)
    - Hover整個出現(已給)


# HTML

## HTML Video

html tag: (HTML Audio/Video DOM Reference)[https://www.w3schools.com/tags/ref_av_dom.asp]

### Event
- click
- pause
- play
- timeupdate

### 設計原則

> 使用者操作->
觸發介面元件事件->改變真實程式物件->
觸發程式物件事件->改變介面

將介面與程式切割開來

## 更棒的寫法

```javascript
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {
  if (mousedown)
    scrub(e);
  });
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

```
```javascript
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
```
