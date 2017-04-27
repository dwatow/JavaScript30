# 完成目標

要做一個我喜歡稱為`type-ahead feature`(提示功能), 在此我們有一個擁有歡迎程度的cities和states列表, 當我們keyin一些關鍵字，此功能可以幫我找到在cities和states裡符合關鍵字的項目。

- 功能
  - 列出符合關鍵字的項目
- 畫面
  - 列出符合關鍵字的項目
  - 將關鍵字的部份mark起來
  - 顯示該項目的「歡迎程度」數字


# Javascript

> Keyword:  [blob](https://zh.wikipedia.org/wiki/%E4%BA%8C%E9%80%B2%E4%BD%8D%E5%A4%A7%E5%9E%8B%E7%89%A9%E4%BB%B6) 二進位大型物件

> 二進位大型物件（英語：binary large object ，或英語：basic large object，縮寫為Blob、BLOB、BLOb），在資料庫管理系統中，將二進位資料儲存為一個單一個體的集合。Blob通常是影像、聲音或多媒體檔案。
>
> 它由迪吉多公司的工程師吉姆·史塔基（Jim Starkey）發明。

## API
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 一種非同步的..API, 向後端要資料, 回傳`promise`
    - [response object](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- [promise](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise) 非同步回傳的結果
    - [promise.then()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 處理 `promise`的方法

## JavaScript RegExp Reference

jsref: [RegExp Object](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

正規表示式, 常用於文字(字串)的過濾、搜尋、取代方法

### 使用`replace`將字mark起來

下面的例子, 將`key=this.value`
```javascript=
const regex = new RegExp(this.value, 'gi');
str.replace(regex, `<span class="hl">${this.value}</span>`);
```
