# 完成目標

做一個打密碼出現彩蛋的功能，像是KONAME code這樣

此例實做的密碼是`wesbos`，可以自行定義!!


# Javascript

## [`splice`](https://www.w3schools.com/jsref/jsref_splice.asp)

```javascript
pressed.splice(-secretCode.length-1, pressed.length - secretCode.length);
```

## Syntax
array.splice(index, howmany, item1, ....., itemX)

- index < 0, 從後面數過來
- howmany, 刪掉的個數
