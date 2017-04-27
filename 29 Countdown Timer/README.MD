# 完成目標

做一個倒數計時器

- 功能
  - 各種設定好的時間，進行倒數
  - 自訂義分鐘倒數
  - 開新的倒數，直接取消上一次
- 畫面
  - 顯示目前倒數的數字
  - 顯示倒數歸零時，是幾點幾分

# Javascript

倒數計時
5分鐘
15分鐘


時間 和數字運算，會當成ms進行運算

停止計時
```javascript=
const pid = setInterval()
clearInterval(pid);
```

~~範例程式碼的`timer`視為閉包~~


忽略預設行為
```javascript=
e.preventDefault();
```
