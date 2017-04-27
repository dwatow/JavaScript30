# 完成目標

今天我們要使用`Array.sort()`
排序一個band names的Array，但是排序不考慮"The," "An,", "A"這些字眼

- 功能
  - 排序不考慮"The," "An,", "A"這些字眼
- 畫面
  - 顯示排序結果

# Javascript

## String object

[`string.trim()`](https://www.w3schools.com/jsref/jsref_trim_string.asp), Remove whitespace

## 比較相似函數名稱

### String

- [`string.split(separator, limit)`](https://www.w3schools.com/jsref/jsref_split.asp)
    - 回傳新`array`, `string`用`separator`切割成`array`, 執行完`separator`次結束動作。
    - 直接`toString()`等同於用`','`取代`separator`
- [`string.slice(start, end)`](https://www.w3schools.com/jsref/jsref_slice_string.asp)
    - 回傳新`string`, `string`切成子`string`

### Array

- [`array.splice(index, howmany, item1, ....., itemX)`](https://www.w3schools.com/jsref/jsref_splice.asp)
    - 回傳新`array`, 從`index`移除`homany`個, 後面加上`item1`...`itemX`
- [`array.slice(start, end)`](https://www.w3schools.com/jsref/jsref_slice_array.asp)
    - 回傳新`array`, `array`切成子`array`
