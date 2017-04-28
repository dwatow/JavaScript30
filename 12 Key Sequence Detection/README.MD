# 完成目標

做一個打密碼出現彩蛋的功能，像是KONAME code這樣

> 翻譯原文(大概的意思，應該與上一面描述相同)
>
> 做一個鍵盤輸入序列檢測(), 意思是在視窗輸入一定數量的「鍵」, 就會發生特定的事件。最耳熟能詳的就是KONAME code, 如果你在1980或1990年代時期長大, 你就知道輸入`↑, ↑, ↓, ↓, ←, →, ←, →, B, A, start`就可以觸發類似超級馬莉中無限生命的功能
若你在[網站](https://www.buzzfeed.com/)輸入`↑, ↑, ↓, ↓, ←, →, ←, →, B, A, start`, 它會將所有的字改為`Wilkie`，我不知道是誰，但是很有趣 不同的網站一些不同的復活節彩蛋，你可以去看看。

此例實做的密碼是`wesbos`, 不過練習的話可以自行定義!!


# Javascript

## [`splice`](https://www.w3schools.com/jsref/jsref_splice.asp)

```javascript
pressed.splice(-secretCode.length-1, pressed.length - secretCode.length);
```

## Syntax
array.splice(index, howmany, item1, ....., itemX)

- index < 0, 從後面數過來
- howmany, 刪掉的個數
