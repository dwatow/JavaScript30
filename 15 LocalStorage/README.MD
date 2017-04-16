
## JavaScript

### DOM Object
[HTML DOM appendChild() Method](https://www.w3schools.com/jsref/met_node_appendchild.asp) 將node放入node的裡面(下一層)。

### Event Object
- [preventDefault() Event Method](https://www.w3schools.com/jsref/event_preventdefault.asp) 取消Event的預設行為
- [Event.target](https://www.w3schools.com/jsref/event_target.asp) 回傳「觸發了誰」

### label 加入for
```javascript=
label.setAttribute('for', input.id);
```

### 清空form
```javascript=
form.reset();
```
### [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp) 物件

`localStorage`比`cookie`更適合拿來做暫存的小空間。

- localStorage.setItem('key', 'value');
- localStorage.getItem('key');
- localStorage.removeItem('key');

另外還有`sessionStorage`



### 更棒的寫法

原本的寫法
```javascript=
let items = [];
if (JSON.parse(localStorage.getItem('items'))){
  items = JSON.parse(localStorage.getItem('items'));
}
populateList(items, itemsList); //update view

```
改成
```javascript=
const items = JSON.parse(localStorage.getItem('items')) || [];
populateList(items, itemsList); //update view
```

## 問題

1. 為什麼不在label上面掛click的事件？
2. 最後加上去更新畫面的(`Line 70: populateList(items, itemsList);`)是否必要？
