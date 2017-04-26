
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
