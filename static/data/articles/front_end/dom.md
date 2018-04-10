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

# DOM起源
从头说起，HTML是标记语言，人理解容易，machine理解不容易，所以为了方便机器处理
我们将**静态文本字符串**解析为**数据模型（对象/节点）**。
但这只是保存了每个节点，为了保存HTML的层次结构，便有了DOM。
与静态HTML不同，浏览器的节点包含有属性，方法，更重要的是，可以通过JS操作。
于是我们可以直接使用JS进行增删改查。

# Shadow DOM (影子DOM)
Shadow DOM和普通的DOM相同，但是有两点差别
1. 创建，使用的方式
    - 通常我们创建一个新的节点，会将其以子节点的方式加入到某个父节点
    - 对Shadow DOM也是如此，这个创建的Shadow DOM叫做影子树，被附着的元素叫影子宿主（shadow root）
2. 与其他节点有关的行为方式
    - 被添加的节点和他真正的子节点是分开来的
    - 任何被以Shadow DOM添加的子节点都将成为宿主的本地项（local object），比如 `<style>`  

> Shadow DOM一个很重要的用法是可以将CSS设成局部作用域，从而让style属性只适用于其子节点。

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

# Ref
- [https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn](https://developers.google.com/web/fundamentals/web-components/shadowdom?hl=zh-cn)
- [https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/%E5%BD%B1%E5%AD%90_DOM](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/%E5%BD%B1%E5%AD%90_DOM)