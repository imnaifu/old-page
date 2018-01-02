# 什么是local storage & session storage
总的来说，浏览器给了我们一个类似Database的东西，哦应该是两个。
一个叫local storage，一个叫session storage。
两个都可以用key-value pair的方式存数据，不过只能存string，所以要存其他数据都要转换成string。

# 区别
一个很重要的也是唯一的区别就是，local storage可以永久保存，如果不删除的话。
而session storage在tab关闭或者浏览器关闭都会clear，（refresh 不会clear）。

# 小技巧
如果在session storage里面放上插入的时间，那就可以拿来做缓存了。
可以判断有还是没有，有再比较时间，如果没滚起就用缓存，没有或者过期就再fetch。

# 用法
两个都是只读模式（只可以写入，读取和删除），不可修改。

## Local Storage
```
// store
localStorage.setItem('key', 'value');
// retrive
const data = localStorage.getItem('key');
// remove
localStorage.removeItem('key');
```

## Session Storage
```
// Store
sessionStorage.setItem("key", "value");
// Retrieve
const data = sessionStorage.getItem("key");
// remove
sessionStorage.removeItem('key');

```