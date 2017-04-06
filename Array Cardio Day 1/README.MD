
## Array 方法

jsref: [JavaScript Array Reference](https://www.w3schools.com/jsref/jsref_obj_array.asp)
- [`filter()`](https://www.w3schools.com/jsref/jsref_filter.asp) Creates a new array with every element in an array that pass a test
- [`reduce()`](https://www.w3schools.com/jsref/jsref_reduce.asp) Reduce the values of an array to a single value (going left-to-right)
- [`Array.sort()`](https://www.w3schools.com/jsref/jsref_sort.asp) 用數字排序
```javascript=
b.sort(function(a, b){ return b - a;});//[576, 56, 12, 9, 8, 8, 5, 3, 1, 0]
b.sort(function(a, b){ return a - b;});//[0, 1, 3, 5, 8, 8, 9, 12, 56, 576]
```
> 建議使用`-`而不是用`>`或`<`。
> 原因:
> - 用`-`回傳`>0`, `=0`, `<0`
> - 用`>`或`<`回傳`true`, `false`
>
>[參考資料](http://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly)
