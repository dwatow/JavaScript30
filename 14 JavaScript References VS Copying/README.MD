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
- `[JSON.parse()`](https://www.w3schools.com/js/js_json_parse.asp) string to json
- [`JSON.stringify()`](https://www.w3schools.com/js/js_json_stringify.asp) json to string

```javascript=
const dev2 = JSON.parse(JSON.stringfy(wes));    
```
