# 完成目標

今天來做做Javascript reference 與 copy，可以稍稍的了解一下Javascript是怎麼運作的

有些bug來自大家不了解reference在copy的特別之處，尤其是巢狀式物件

就依下面的題目一題一題做吧(我也看不懂如何分題目@@)

# Javascript

## Array Clone
```javascript=
const copy_players1 = players.slice();
const copy_players2 = [].concat(players);
const copy_players3 = [...players];
const copy_players4 = Array.from(players);
```

## Object Clone
### 深層(一層)Clone
- `Object.assign()` object to object
```javascript=
const dev = Object.assign({}, wes);
```

### 深層(多層)Clone
- [`JSON.parse()`](https://www.w3schools.com/js/js_json_parse.asp) string to json
- [`JSON.stringify()`](https://www.w3schools.com/js/js_json_stringify.asp) json to string

```javascript=
const dev2 = JSON.parse(JSON.stringfy(wes));
```
