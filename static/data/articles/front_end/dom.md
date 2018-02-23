好好讲讲自己对于DOM的理解，要理解DOM就要先了解整个浏览器环境，
浏览器中js可操作的部分如下图
![](browser_enviroment.png =400x*)
window有两个作用
1. 作为js的global object
2. 作为browser window对象，有一些方法

BOM是浏览器提供的API，work with everything except DOM

# DOM
document对象就是我们操作DOM要用的，
操作DOM的最基本对象是node，一共有4种常用node（total 12）
1. document
2. element node
3. text node
4. comment node

# Class
DOM node 是有等级之分的，如下图所示
![](dom_class.png =400x*)
如果我们querySelect一个input-node，它是HTMLInputElement class的一个instance，
然后这个HTMLInputElement继承HTMLElement，如此往上，
Element -> node -> eventTarget，
我们操作DOM的时候，有些方法belong to element, 有些belong to node, 还有些belong to eventTarget

# Node
![](node_relation.png =400x*)

# Element 
![](element_node_relation.png =400x*)
