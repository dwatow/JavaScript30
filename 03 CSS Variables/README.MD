# 完成目標

做一個"brand spanking new"的CSS, 這裡的「CSS變數」不是Sass的變數功能。畫面有三個變數: `Space`, `Blur`, `Base Color`，當我們在畫面設定值(拉動range或改變顏色)，它會立即的更新畫面

- 功能
  - 用CSS變數
  - 追加
    - 練習「設定區域變數」
- 畫面
  - 改變控制項、立即改變畫面


CSS變數可以被Javascript更新, 也就是當你可以在頁面上任何地方更新CSS變數, 變數就可以自動更新。

> 我知道你會說「wes, we've had variables in SASS forever and this not new」

在SASS, 你可以定義、編譯，在變譯之後將無法再改變變數(們)

### 參考資料
- [brand spanking new](http://www.phrases.org.uk/meanings/brand-spanking-new.html) 意思是 "Entirely new"(全新的)
- [smart Alec](http://ce.linedict.com/dict.html#/cnen/entry/764905?source=en) 意思是 「自以為是，自作聰明的人」

# HTML

## 嵌入自訂資料進HTML

- [HTML data-\* Attributes](https://www.w3schools.com/tags/att_global_data.asp)

在HTML裡嵌入自定義的`color`資料
```htmlembedded=
<tagName data-color></tagName>
```
在Javascript取出來的方法，在`element`取`dataset`就可以用相同的「自定義名稱」讀/寫 自定義資料了，資料型態是字串。
```javascript=
tagNameElement.dataset.color = "";
```

# CSS

## CSS Style Declaration Object 方法

jsref: [The CSSStyleDeclaration Object](https://www.w3schools.com/jsref/obj_cssstyledeclaration.asp)
- `setProperty(property, value, priority)` 設定CSS的屬性給element(直接加在`style=""`)


### 宣告變數
使用兩個`-`符號，代表「變數」

自定義變數名稱`--main-bg-color`, 值`brown`
```
element {
  --main-bg-color: brown;
}
```
### JS修改CSS的宣告

```Javascript=
element.style.setProperty('--main-bg-color', 'brown');
```

### CSS使用變數
使用`var()`代表「使用變數」，並且將「宣告名稱」丟進來

將變數`--main-bg-color`給定進`background-color`
```
element {
  background-color: var(--main-bg-color);
}
```



## 取HTML element

用CSS的`:root`選擇器，可以選到JS的`document.documentElement`

在HTML中，root element就是`<html>`

- [CSS3 :root Selector](https://www.w3schools.com/cssref/sel_root.asp)

CSS這樣宣告
```=
:root {
  --base: #ff6c00;
  --spacing: 10px;
  --blur: 10px;
}
```
JS就可以這樣改寫
```Javascript=
document.documentElement.style.setProperty(`--${this.name}`, this.value);
```
### 參考資料
- [CSS變數的瀏覽器支援](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)


# Javascript

## DOM方法

jsref: The HTML DOM Document Object

- [`document.documentElement`](https://www.w3schools.com/jsref/prop_document_documentelement.asp) 回傳`<html>`的節點
