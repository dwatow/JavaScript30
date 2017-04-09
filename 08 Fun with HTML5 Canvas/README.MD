
## 先來看看
- [`HTML5 Canvas`](https://www.w3schools.com/html/html5_canvas.asp)

```javascript=
var htmlCanvas = document.getElementById("myCanvas");
var canvasContext = htmlCanvas.getContext("2d");
canvasContext.beginPath();
canvasContext.arc(95,50,40,0,2*Math.PI);
canvasContext.stroke();
```

## 小工具

http://mothereffinghsl.com/

## [CanvasRenderingContext2D](https://developer.mozilla.org/zh-TW/docs/Web/API/CanvasRenderingContext2D)

```javascript=
var htmlCanvas = document.getElementById("myCanvas");
var ctx = htmlCanvas.getContext("2d");
```

- ctx.strokeStyle = '#BADA55'; 線的顏色
    - Color or style to use for the lines around shapes.
    - Default #000 (black).
- ctx.lineJoin = 'round';
    - Defines the type of corners where two lines meet.
    - Possible values: round, bevel, miter (default).
- ctx.lineCap = 'round';
    - Type of endings on the end of lines.
    - Possible values: butt (default), round, square.
- ctx.beginPath();
    - Starts a new path by emptying the list of sub-paths.
    - Call this method when you want to create a new path.
- [ctx.globalCompositeOperation](https://developer.mozilla.org/zh-TW/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) 有光學合成效果
