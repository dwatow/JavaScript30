# 完成目標

做一個Range改變影片的播放速度

- 功能
  - 拖拉Range, 最小值不可以設0.4
  - 拖拉Range, 最大值不可以設4
- 畫面
  - 拖拉Range, 顯示目前的速度倍率，顯示格式: nx(n是整數)

# Javascript

百分比的寫法

```javascript=
height = Math.round(percent * 100) + '%'
playbackRate = percent * (max - min) + min;
```

不過我覺得，不如寫一個if卡住調整的幅度
```javascript=
const y = (e.offsetY / speedMaxY);
if (y < 0.08) return;
video.playbackRate = y * 4; //0.4~4
```
