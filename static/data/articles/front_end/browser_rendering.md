# 当浏览器收到服务器通过http协议传来的数据时，是怎样渲染出一个页面的？
总的来说，大概有以下几步。
1. 根据编码格式（e.g UTF-8），将收到的byte转换成characters
2. Characters转换成Token（e.g `<html>`, `<body>`）
3. Token转换成每一个Node object
4. Node关联起来变成Dom
5. DOM和CSSOM一起组成Render Tree
6. Layout计算每个Node的位置
7. Paint每个像素到屏幕

![](dom-tree.png)

上面的仅仅是DOM的构建，除此之外还有CSSSOM，HTML会被用来构建DOM(Document Object Model) Tree，而CSS则会被用来构建CSSOM Tress。
![](css-construction.png)
![](cssrom-tree.png)

紧接着就是DOM和CSSOM的合并
![](render-tree-construction.png)

构建的过程
1. 从DOM的根节点开始，遍历每一个节点
    - 忽略不可见节点，e.g `<script >`, `<meta>`
2. 对每个节点，找到他的CSS属性并apply
    - 有些'display:none'的就忽略
3. 返回修改过的节点

之后layout捕获Render tree完成，然后计算node位置，最后由Paint捕获，画在屏幕。

# 简单总结的话  
1. **处理HTML创建DOM tree**
2. **处理CSS创建CSSOM tree**
3. **合并DOM & CSSOM得到Render tree**
4. **对render tree进行layout处理，得到position**
5. **在屏幕渲染出来**

# Ref 
- [construction](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model)
- [rendering](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)
- [https://zhuanlan.zhihu.com/p/25554352](https://zhuanlan.zhihu.com/p/25554352)