## Javascript

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
