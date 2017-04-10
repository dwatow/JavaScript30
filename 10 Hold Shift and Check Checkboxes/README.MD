## 程式撰寫思維

> 以前都寫C++。物件長怎樣 就要依序存取進去，由外而內。

不同於以往的程式撰寫思維。
在此，程式操作只要針對`<input>`
所以，影片中就直接把`<input>`抓出來處理。

> 長得相同，實則不同

在`querySelector`完之後，列出來的`<input type='checkout"checkbox">`每一個都是HTMLInputElement，長得相同，卻位址不同。要視為不同之物。

所以在上面監聽click也是可以用this進行比對。
