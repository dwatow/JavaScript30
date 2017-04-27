# 完成目標


- 功能
  - menu到畫面最上面，要固定
- 畫面
  - menu固定在畫面上面時，要露出Logo
  - menu不固定時，不露出logo
  - menu固定的那一瞬間，下面的文章不可以出現跳動

# Javascript

## 另一種改法

得到一個想法

「新增`.style`若太麻煩」(太多code)
不如「新增`.classList`」

由於在此不只是要加上去，還要移除，所以，用`classList`的操作會比操作`style`來得容易又好懂
