## CSS布局
今早看了讲解Flex和Grid布局的视频，总算有点入门，大概介绍下。

## 背景
MDN讲Flex还是draft阶段，但实际上浏览器都已经实现了。。（讲真，浏览器这种一超多强的制度真是挺好的）。
好吧不说废话，flex和grid都是一种布局模式，与之对应的是以前的各种的不符合人性的float,absolute之类的定位模式。
因为以前那些真的很不好用，所以才有bootstrap那些row，然后就有了现在的flex&grid，真是互相学习啊。

## 弹性盒子（Flexible Box）
flex布局适合小规模布局，是一维的，要么水平方向，要么垂直方向。具体有哪些语法我不细说，下面的第二个reference讲很详细。
我来说说它到底能做什么。传统的布局模式是非弹性的，你想要个内部等间距的平均分配的div就只能手写padding,width什么的。
有了这个就不用了，给出一些要求，他会自适应分配padding和width，而且装不下还可以自动移到下一行，很方便实用，很像bootstrap的row。


## 网格布局（Grid）
网格布局适合整体的大规模布局，很像以前的table布局（事物真是螺旋上升）。
与flex只能操作一个方向不同，grid可以操作两个方向，还可以覆盖。



## Reference
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes](
https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
- [https://zhuanlan.zhihu.com/p/25303493](https://zhuanlan.zhihu.com/p/25303493)
- [http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)