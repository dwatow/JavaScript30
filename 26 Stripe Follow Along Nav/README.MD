# 完成目標

再看一次[stripe.com](https://stripe.com/)網站，而且它的導覽列的hover效果很厲害

這次來做做它的效果吧！

- 功能
  - 超連結Hover時，白色區塊要出現在該超連結的下拉區塊
- 畫面
  - 白色區塊的寬高要符合該超連結的下拉區塊
  - 滑鼠移開時，白色區塊要消失
  - 白色區塊出現，內容才出現
  - 下拉區塊尚未完全出現，滑鼠移動時，要取消顯示內容

# Javascript

`element.nextElementSibling()`
下一個element(等同於css selector的`+`)

做hover的效果時
「消失/出現」和「漸漸消失/漸漸出現」的css要分開
```=
.trigger-enter {
  display: block;
}

.trigger-enter-active {
  opacity: 1;
}
```

這樣下面才會抓得到東西
```javascript=
element.getBoundingClientRect();
