# 用plain javascript代替Jquery的方法
```javascript
var $ = document.querySelectorAll.bind(document);
Element.prototype.on = Element.prototype.addEventListener;
//这里的Element是元素的构造函数
```
![Element.jpg](Element.jpg)

