# 完成目標

希望你今天有出汗的心理準備, 我們不會做什麼漂亮的東西

沒有CSS沒有DOM element, 就是Javascript基本的Array方法運用

包含`filter`, `map`, `sort`, `reduce`這些方法

在此提供了`inventors`, `people`陣列, 有一些題目, 每一題會指定一個Array Method解題

> 第六題: 需要進入[Category:Boulevards in Paris](
https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris) 頁面，打開`console`進行解題

# JavaScript

## Array 方法

jsref: [JavaScript Array Reference](https://www.w3schools.com/jsref/jsref_obj_array.asp)
- [`Array.filter()`](https://www.w3schools.com/jsref/jsref_filter.asp) 過濾, 函數回傳
  - `true`: 表示「符合條件」
  - `false`: 表示「不符合條件」
- [`Array.reduce()`](https://www.w3schools.com/jsref/jsref_reduce.asp) 累積, 函數通常是「累加」
    - `reduce(function(total, everyone, currIndex, currArray), initValue)`
        - total, 跨元素的暫存變數
        - everyone, 每一個元素
        - currIndex, 目前的索引值
            - 有給initValue就0起始, 初始值自訂
            - 沒有initValue就1起始, 初始值為第一個元素
        - currArray, 整個陣列
        - initValue, 初始值\
- `Array.from(NodeList)` 將NoteList轉成Array
  - 也可以用`[...NodeList]`
- [`Array.sort()`](https://www.w3schools.com/jsref/jsref_sort.asp) 排序, 可用數字相減值回傳, 函數回傳值
  - +1: 大於
  - 0: 等於
  - -1: 小於

### 特別說一下`sort`

[`Array.sort()`](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```javascript=
b.sort(function(a, b){ return b - a;});//[576, 56, 12, 9, 8, 8, 5, 3, 1, 0]
b.sort(function(a, b){ return a - b;});//[0, 1, 3, 5, 8, 8, 9, 12, 56, 576]
```
> 建議使用`-`而不是用`>`或`<`。
> 原因:
> - 用`-`回傳`>0`, `=0`, `<0`
> - 用`>`或`<`回傳`true`, `false`
> [參考資料](http://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly)


## String 方法
- `String.includes('keywork')` 找字串是否有包含`keywork`
