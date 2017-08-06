# 完成目標

這是一個開發工具和console技巧的快速教學影片。

一段教學，一段練習的方式進行

# Go!!!

可以在HTML element下中斷點

直接看code就知道了!!!

## Regular (常見的正規用法)
印出常數
```
    console.log('aaa');
```
印出變數
```
    var a = 'aaa';
    console.loglog(a);
```

## 格式化輸出的用法 Interpolated (以內插值替換)

像C語言的 `printf()` 這樣使用

```
    console.log('%s', aaa);
```

### 用ES6的 template string (ES6 back-ticks)

```
    var a = 'ES6';
    console.log(`hello ${a}`);
```

## 用inline CSS (Styled)

用Interpolated時，可以使用style定義

```
console.log("%cDon't do this", 'font-size: 48pt; color: red;');
```

用HTML表示就等同於在console.log印出這樣的字

```
<span style="font-size: 48pt; color: red;">Don't do this</span>
```

## 強調訊息類型
Warning!
```
console.warn('Oh Nooo');
```
Error
```
console.error('Oh Nooo');
```
Info
```
console.info('this is info');
```

## 測試常用 (Testing)

### Assert

```
console.assert(1===1, 'this is wronign');
console.assert(1===2, 'this is wronign');
```
## 清掉之前印出的東西 (clearing)
清掉目前 `console` 裡的東西

`console.clear();`

## 印出內容
Viewing DOM Elements 印出 可展開的node

### 印出簡單變數
`console.log(p);`

#### 印出來要「群組化顯示」
Grouping together log群組化印出

預設展開
```
console.group(`${dog.name}`);
//放入你要印出來的內容(簡單變數)....
console.groupEnd(`${dog.name}`);
```
預設縮起來
```
console.groupCollapsed(`${dog.name}`);
//放入你要印出來的內容(簡單變數)....
console.groupEnd(`${dog.name}`);
```

### 印出物件

```
var aObject = {
    name: 'chris', 
    age: 33
}
console.dir(aObject);
```

### 印出陣列

```
var aArray = [{
    name: 'chris', 
    age: 33
},
{
    name: 'chris', 
    age: 28
}]
console.table(aArray);
```

## 計數 (counting)

立即印出「內容」和「出現次數」

```
console.count('aaaaaa');
console.count('bbbbbb');
console.count('aaaaaa');
console.count('bbbbbb');
console.count('aaaaaa');
console.count('bbbbbb');
```

## 計時 (timing)

```
  console.time('fetching data');
  fetch('https://api.github.com/users/webos')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
    });
```
