# 完成目標

今天要做地理資訊的功能

- 功能
  - 抓到指北角度要改畫面
  - 抓到移動速度要更新畫面
- 畫面
  - 指北轉要旋轉
  - 顯示移動速度

# Javascript

- `window.navigator`
- `navigator.geolocation`
- `geolocation.watchPosition()` 監看目前位置


- `watchPosition(okfun, errfun)`
    - okfun 執行正常有抓到GPS的資訊
    - errfun 執行錯誤情況、使用者不授權時的行為

```javascript=
function okfun(data) {
    console.log(data)
}
```

data是Geoposition物件。
- `timestamp` 當下時間
- `coords` 目前地理資訊
    - `accuracy` 平面精度
	- `altitude` 高度
	- `altitudeAccuracy` 高空精度
	- `heading` 真北角度
	- `latitude` 緯度
	- `longitude` 經度
	- `speed` 速度

## 問題

電腦沒有模擬器
所以使用iPad來跑看看

不過，watchPosition執行幾次就跳err給我了
不知道為什麼

另外，也沒有速度的資訊也沒有指北的角度
