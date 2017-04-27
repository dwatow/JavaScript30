# 完成目標

做一個漂亮甜美的時鐘，一開始就提供了一個鐘面，也寫好了三支指針

- 功能
  - 顯示目前的時間
    - 更新時針、分針、秒針
- 畫面
  - 讀得到目前的時間
  - 秒針要有「真實的滴答」動作
  - 追加規格
    - 指針要有長短(或粗細)可以分辨彼此
    - 解決最後的歸零問題

# CSS

cssref: [CSS3 transform Property](https://www.w3schools.com/cssref/css3_pr_transform.asp)

### 變化(`transform`)

可以進行2D和3D的變化，屬性後面可以接幾種能使用的函數

1D變化(其實有些是2D適用, 有些是3D適用)
- `translateX(x)` 平移
- `translateY(y)` 平移
- `scaleX(x)` 放大
- `scaleY(y)` 放大
- `scaleZ(z)` 放大
- `rotateX(angle)`, 轉
- `rotateY(angle)`, 轉
- `rotateZ(angle)`, 轉
- `skewX(angle)`, 歪斜
- `skewY(angle)`, 歪斜

2D變化
- `matrix(n1,n2,n3,n4,x,y)`
  - **n1~n4**:歪斜(看起來像翻轉), 矩形變平行四邊形
  - **x,y**: 平移
- `translate(x,y)`, 平移
- `scale(x,y)`, 放大
- `rotate(angle)`, 轉
- `skew(x-angle,y-angle)`, 歪斜

3D變化
- `matrix3d
(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)`, 歪斜+平移
- `ranslate3d(x,y,z)`, 平移
- `scale3d(x,y,z)`, 放大
- `rotate3d(x,y,z,angle)`, 轉
- `perspective(n)` 透視

在此用得到的
```css=
/*變化: 旋轉(7°);*/
transform: rotate(7deg);
```

### 「過場時」的變化函數(`transition-timing-function`)

cssref: [CSS3 transition-timing-function Property](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp)

變化的函數，可以設成有回彈效果

可用函數(看參考資料了解比較快)
- `ease`
- `linear`
- `ease-in` 類似`cubic-bezier(0.42,0,1,1))`
- `ease-out` 類似`cubic-bezier(0,0,0.58,1))`
- `ease-in-out` 類似`cubic-bezier(0.42,0,0.58,1))`
- `step-star`
- `step-en`
- `steps(int,start|end)`
- `cubic-bezier(n,n,n,n)`, [貝玆函數](http://cubic-bezier.com/#.17,.67,.83,.67) 算是自訂變化曲線函數

```css=
transition-timing-function: 函數
```

### 參考資料
- [linear, ease-in, ease-out, ease-in-out](https://developers.google.com/web/fundamentals/design-and-ui/animations/the-basics-of-easing?hl=zh-tw)
- [transition-timing-function的各種Demo -  MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

# Javascript

## Window object 方法

- [`setInterval(function, ms)`](https://www.w3schools.com/jsref/met_win_setinterval.asp) 設定「持續執行」的function與間隔時間

## 秒針角度歸零時，不會抖一下

秒針抖一下是因為角度歸零。

讓角度**不歸零**就可以避免。
