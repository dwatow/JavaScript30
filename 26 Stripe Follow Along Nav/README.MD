
## Javascript

element.nextElementSibling
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
