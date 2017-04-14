
## Window Event

### Drag Events

- onscroll, Script to be run when an element's scrollbar is being scrolled

## 閉包
```javascript=
function debounce(func, wait = 20, immediate = true) {
  var timeout;

  // console.log('debounce()');
  //滑一次執行一次A
  return function() {
    // console.log('A() start');
    var context = this, args = arguments; //this = window object

    //最後一次滑動之後執行的內容
    var later = function() {
      // console.log('laterRun() start');
      timeout = null;//清掉等待執行數字
      if (!immediate) func.apply(context, args); //沒有要立即執行的就上了
      // console.log('laterRun() end');
    };

    var callNow = immediate && !timeout;
    //true = 立即 && 無等待執行(滑動停止，時間間隔到)(每次間隔切換一次)
    //false = 立即 && 有等待執行(連續滑動中)
    //false = 不立即 && 無等待執行(滑動停止，時間間隔到)
    //false = 不立即 && 有等待執行(連續滑動中)

    //連續滑動時，延遲等待執行
    clearTimeout(timeout);//時間還沒到的時候，就等待取消
    timeout = setTimeout(later, wait); //設定等待執行, 紀錄等待執行數字


    if (callNow) func.apply(context, args);//如果立即執行，就用像原本這樣執行
  };
}

//...
document.addEventListener('scroll', debounce(checkSlide));

```
