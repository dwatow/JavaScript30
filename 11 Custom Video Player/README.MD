## HTML
- (HTML Audio/Video DOM Reference)[https://www.w3schools.com/tags/ref_av_dom.asp]

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
