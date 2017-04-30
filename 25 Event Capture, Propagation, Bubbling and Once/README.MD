# 完成目標

這一週，不做漂亮的東西。來細說`addEventListener`吧。

跟著做，就知道了。

# Javascript

細說`addEventListener`

## [`addEventListener`](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)

語法:
```javascript=
element.addEventListener(event, function, useCapture)
```
`useCapture`: `true` | `false`

四個重點
1. Event Capture
1. Propagation
1. Bubbling
1. Once(new property)

## 名詞定義
- `bubbling` 冒泡(像泡泡在水裡浮上來的過程)
  - operator system -> browser application -> tab -> html -> body到你按的element, 
  都會被觸發事件。
  - 事件預設的執行順序是從element往上到body...
- Capture 捕獲
  - browser做的事稱為Capture
  - 意思是你點擊element, 以top down的順序capture所有的event
- `event.stopPropagation()` 
  - 取消預設(bubbling)行為，變成「點到誰，就是誰」

## 舉例

以這個例子的HTML結構來說。

### 預設行為: `bobble up`
如果每一個都用這種方式加入event
```javascript
addEventListener('click', fun);
```
capture時，執行fun的順序將會是由上而下(DOM樹的樹梢到樹根)
```
tree
two
one
```
### `capture:true`
在`addEventListener`的第三個參數加上這樣的物件
`capture: false` 會將行預設行為
```javascript
addEventListener('click', fun, {capture:true});
```
capture時，執行fun的順序將會是由下而上(DOM樹的根到樹梢)
```
one
two
tree
```
### `stop propagation`

在監聽觸發function裡面加上`e.stopPropagation()`
意思是"stop bubbling this event up. I clicked the one  that I actually wanted."

```javascript
function fun (e){
  e.stopPropagation(); //停止漣漪效應
  //other thing...
}
addEventListener('click', fun);
```
要設定`capture:false`才是點擊誰，觸發誰
```
three
```
若設定`capture:true`是另一個順序
```
one
```
### 只監聽一次
在`addEventListener`的第三個參數加上這樣的物件
`once: false` 會將行預設行為
```javascript
addEventListener('click', fun, {once:true});
```
capture之後，就自動執行`removeEventListener()`
```
one
two
tree
```

## 延伸閱讀
- [Bubbling and capturing](https://javascript.info/bubbling-and-capturing)
