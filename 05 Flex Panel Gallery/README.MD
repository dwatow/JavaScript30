# 完成目標

今天要做一個超級迷人，我喜歡稱之為flex gallery。

沒什麼Javascript、很多的CSS用flexbox、用transitions

- 功能
  - 點擊指定的區塊要以它為主, 畫面變化
  - 再點擊一次，恢復原狀
- 畫面
  - 主要區塊變大, 中間的字變大
  - 變大之後上下的字要進來

# CSS

## flexbox

### 學習資源

- [Flex.io](https://www.flex.io/)
- [FLEX - CSS-TRICKS](https://css-tricks.com/almanac/properties/f/flex/)

## flex

容器要先設定 `display: flex;`

元素要設定`flex: 1 0 auto;`

### flex語法解釋

要解譯這一個之前，必須了解一個詞叫「剩餘空間」([超推薦看!!出處](http://zhoon.github.io/css3/2014/08/23/flex.html))

> `justify-content` 的屬性會失效

`flex`是下面三者的速寫
The second and third parameters (flex-shrink and flex-basis) are optional.
1. [`flex-grow`](https://css-tricks.com/almanac/properties/f/flex-grow/) 剩餘空間分配比例
2. [`flex-shirk`](https://css-tricks.com/almanac/properties/f/flex-shrink/) 壓縮比例
3. [`flex-basis`](https://css-tricks.com/almanac/properties/f/flex-basis/) 預約剩餘空間
