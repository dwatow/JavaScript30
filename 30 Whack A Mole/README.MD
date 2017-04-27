# 完成目標

做一個打地鼠的遊戲

- 功能
  - 一個關卡要幾分鐘要固定
  - 地鼠冒出來、自動縮下去的時間間隔要不一樣
- 畫面
  - 畫面要顯示目前的關卡
  - 地鼠要自動冒出來
  - 地鼠要自動縮下去
  - 地鼠被點到要縮下去

# Javascript

指定取亂數的範圍

```javascript=
function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
```

避免重複取亂數
```javascript=
let lastestId;
function randomHole() {
  const id = Math...;
  if (id === lastestId) {
    return randomHole(holes);
  }
  eles {
    return id;
  }
}
```
