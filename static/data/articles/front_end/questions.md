# HTML
## HTML semantic(语义化) 
- 目的: 
	- SEO
	- 没有CSS也能很好展示
	- 方便其他设备（盲人阅读）
	- 便于维护

- 简单来讲就是为了让机器理解内容, 根据页面内容与结构，选择合适的标签和属性
- 具体讲，原来是用div/span + class的地方，根据其语义，可以换成新的tag
	- nav, header, main, footer
	- section, article, aside
	- figure, figcaption
	- strong(semantic) instead of b
	- em(semantic) instead of em
	- //detail, summary
	- //time

- 更多
	- microdata

## mata: viewport
- 简单来说，device的默认layout viewport一般是在960px左右，如果我们不做任何处理，页面会以很小的方式呈现在移动设备
- 加上width=device-width之后，可以让整个页面按照移动设备的屏幕大小展示，总宽度为320px
- initial-scale=1.0表示不进行任何缩放（取值为0-1）
- what is viewport: view port is the user visible area of a web page, so it varies with the device
- how to use: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
	- `width=device-width` set the width of the page to follow the screen width of the device
	- `initial-scale=1.0` set the initial zoom level when first load

## canvas:
- 可以使用javascript画图

# CSS
## block model
- content, padding, border, margin

## css position
- inherit, static, relative, absolute, fixed, sticky(toggle from relative to fixed)

## css reset, normalize.css
- reset 清除浏览器默认样式，
- normalize 从而让UI在不同的浏览器看起来一样

## css inline, inline-block, block
- inline: height, width, margin-top, margin-bot 都没用
- inline-block: 都有用，只占它需要的大小
- block: 都有用，并且占父元素的整个一行 

## css centralize
- horizontal
	- text-align: center
	- margin: auto
- vertical
	- line-height
	- padding（父元素高度未定，用padding撑起来）
	- top & translate
- [https://www.w3schools.com/css/css_align.asp](https://www.w3schools.com/css/css_align.asp)

## selector order 
- simple
	- #id 
	- .class  
	- tag
- attribute	
	- [attr]
	- [attr=value]
	- [attr~=value]: attr contains value, e.g 'class="ab bc"' contains bc
- pseudo-classes： ':'
- pseudo-elements: '::'
- combination
	- h1, h2 (多选)
	- div p (所有子节点)
	- div > p (第一层子节点)
	- div + p (后面紧邻的兄弟节点)
	- div ~ p (后面所有兄弟节点)

## BFC(Block formatting context)
- a container that has float rules(start from left/right) and also hard boundaries (for not going outside)
- it can fix some issue like
	- margin-auto-collapse: create a new BFC for one of them then no collapse since they no loger inside one BFC
	- float wrapping: create a new BFC for the second element can achieve same functionality as the 'clear:both'
- [http://lucybain.com/blog/2015/css-block-formatting-context/](http://lucybain.com/blog/2015/css-block-formatting-context/)

## Clear float
1. 加一个新元素 with style="clear:both"
2. set parent element style="overflow： auto/hidden"
3. 加一个新元素 with pseudo-element ::after {content:''; clear:both; display: block;}

## width, height
- scroll width: 不包含滚动条，包含隐藏内容，整体区域
- client width：不包含滚动条，不包含隐藏内容，显示区域
- offset width：包含滚动条，不包含隐藏内容，显示区域
- 总之关于隐藏内容和滚动条的组合

# JS 
## DOM 增删改查
- 查
	- querySelector, querySelectorAll
- JQuery
	- .text() / .html()
	- .css('name', 'value')
	- .hasClass() / .addClass() / .removeClass()
	- .hide() / .show()
	- .attr() / removeAttr()
	- .val()

## js数据类型
1. primitive
	- Boolean, Null, Undefined, Number, String, Symbol
2. composite
	- Object, Array

## Promise
- [https://imnaifu.github.io/#/blog/Callback%20&%20Promise](https://imnaifu.github.io/#/blog/Callback%20&%20Promise)

## Ajax (pure)

```javascript
var ajax = new XMLHttpRequest();
ajax.open("GET", "url");
ajax.send({/** data here **/});

//then asynchronous func
ajax.onreadystatechange = function (){
	if (ajax.readyState === 4){
		//request sent to server already
		if (ajax.status === 200){
			//server return success
		}
	}
}
```

## closure
- [https://imnaifu.github.io/#/blog/JavaScript%20%E9%97%AD%E5%8C%85](https://imnaifu.github.io/#/blog/JavaScript%20%E9%97%AD%E5%8C%85)

## this
- [https://imnaifu.github.io/#/blog/JS%20'this'](https://imnaifu.github.io/#/blog/JS%20'this')

## self-invoking function
- it's used to solve the scope problem to avoid having same name is same scope
- 当引入一个包的时候，可能会有重名变量或者函数，立即执行函数可以把它定义域限制在里面
- 现在没用了，因为块级作用域

## async/await
- A replacement of 'Promise'
- add async before 'function' to make that function a async function
- add await before the promise object to claim that function should be stop here to wait for that promise to resolve/reject
(during the meantime, other function still can run)

```javascript
	async function thisIsAnAsyncFunc(){
		let p = new Promise((resolve, reject) => {
			setTimeout(() => {resolve('Done')}, 1000);
		});

		let result = await p; // wait here 
	}
```

## deep clone
- 递归copy one by one 	

## remove duplicate value in array
- 用set
- let return = Array.from(new Set(a));

## using regex do the same thing as string.trim()

```javascript
//trim(): remove all beginning and ending space from a string
//1st replace remove all beginning space, second replace remove all ending space
let a = 'some string here for trimming';
let b = a.replace('/^\s+/', '').replace('/\s+$/');
```

## prototype
- [https://imnaifu.github.io/#/blog/%E5%8E%9F%E5%9E%8B%E9%93%BE%E4%B8%8E%E7%BB%A7%E6%89%BF](https://imnaifu.github.io/#/blog/%E5%8E%9F%E5%9E%8B%E9%93%BE%E4%B8%8E%E7%BB%A7%E6%89%BF)

## ES6 class
```javascript
class Abc extends Def{
	constructor(attr1, attr2){
		super(attr1, attr2);
		this.attr1 = attr1;
		this.attr2 = attr2;
		this.arr = [];
	}

	//getter function 
	get name(){	
		return this.attr1;
	}

	//setter function
	set name(someName){
		this.arr.push(someName);
	}

	//static function
	static addByTwo(n){
		return n + 2;
	}
}

```
## js inheritance


# DOM
## DOM event 

## Event delegation(事件委托)
- 父组件代替子组件处理事件

## mobile touch event
- touchStart
- touchEnd
- touchMove
- touchCancel

# HTTP
## method
- GET, POST
- PUT, DELETE
- HEAD: Same as GET, but only return headers no document body
- OPTIONS: return the http methods that the server supports
- CONNECT: converts the connection to a transparent TCP/IP tunnel

## port
- http: 80
- https: 443

## status code
- 200, 404, 500
- 304: not modified
- 400： bad request, invalid syntax
- 403: forbidden


## 状态码 301 & 302
- 301: 永久转移（moved permanently），下次请求新地址
- 302: 暂时转移（temporarily located somewhere else），下次还请求这个地址 

## how to do http cache, catch-control & etag	
- [https://imnaifu.github.io/#/blog/HTTP%20Cache](https://imnaifu.github.io/#/blog/HTTP%20Cache)

## cookie, session
- server发送'Set-Cookie' header到client
- then every new request, browser will send requeset with stored cookie to server 
- Secure & HttpOnly
	1. 'Secure' tag, cookie只会在有HTTPS的时候发送
	2. 'HttpOnly' tag 不可以通过 'document.cookie' 拿到，只能用来发送给服务器
- session cookie & persistent cookie
	1. session cookie, 浏览器关闭就销毁
	2. permanent cookie, expire当过了某个日期（Expires）或者过了一定的时间time（Max-Ag）

## localStorage & cookie
- storage size, functionality, traffic
cookie -> for server side reading
local storage -> for client side reading
session storage -> same as local storage expire when browser closed

# 跨域
## 什么是同源策略
1. 同一个协议（http/https）
2. 同一个host name，'abc.com'
3. 同一个端口 80

## 浏览器同源策略（same-orgin policy）导致：
1. cookie, localStorage, indexDB拿不到
2. DOM element拿不到
3. ajax请求不到

## 解决方案
当进行异步请求的时候，如果请求对象不在同一个源，是拿不到数据的，因为同源的限制。常用的解决方案大概有三个
### 1. JSONP
- [https://imnaifu.github.io/#/blog/JSONP](https://imnaifu.github.io/#/blog/JSONP)
### 2. CROS (Cross-Origin Resource Sharing)
- 前端不需要做什么，正常调用Ajax就好，如果是跨域的，浏览器会自动加一个'Origin'在header里面，
服务器拿到orgin信息，决定是否respond
- 背后原理，请求分两种
	1. 简单请求：HEAD, GET, POST
		- 浏览器直接发送，如果服务器respond一个header 'Access-Control-Allow-Origin'，那么请求成功
	2. 复杂请求: 剩下的方式
		- 先发送一个OPTION请求，带有orgin和method的信息
		- 如果server accept，剩下的部分和简单请求一样
3. Websocket

## postMessage (cross-document messaging)
- usage `otherWindow.postMessage(message, targetOrigin)`
- Using the Messaging API `postMessage()`, plain text postMessageage can be sent from one domain to another (e.g from parent to iframe)
- the receiving page should dispatch event `window.addEventListener("message", handleMessage)`

```javascript
	// then in the function
	function handleMessage(e){
		e.origin //source url
		e.data //data
		e.source //is the source window reference, can be used to send data back
	}
```

# Security
## XSS (cross site scripting)
- what is it: 
	- javascript code出现在本来只应该出现文本的地方
- why:
	- 后端渲染没有转换成HTML entity
	- 或者是前端
## CSRF (cross site request forgery)
- must fulfill these two steps
	1. login去可信任的网站A，然后就有了A的cookie
	2. 然后去不可信的网站B，B使用A的cookie向A发送请求，然后B就拿到的A的数据


# Webpack
## compiled file too big, how to fix
## compile too slow
## have u ever written webpack loader

# General
## what happend start from u enter url

# weird question 
## can this be true `if (a==1 && a==2 && a==3)`
- yes can, if a is an object, then will call `toString()` method, 
so just set i=1 and return i++.

# More
## JS清空一个数组的最好方法
```javascript
let a = [];

//set length to 0
a.legnth = 0;

//use splice(startIndex, howMany, items...)
//splice 用于插入，删除和替换数组元素
a.splice(0, a.length); //in place
```

## CSS resize
resize属性规定可否由用户调整元素的尺寸，此外需要设置overflow!='visable'
```css
div {
	resize: both | horizontal | vertical;
	overflow: auto;
}

/* overflow */
#whatever {
	overflow: visable; /* (default) 超出也可见 */
	overflow: hidden; /* 超出隐藏 */
	overflow: scroll; /* 露出scroll bar */
	overflow: auto; /* 超出就有scroll bar */
}
```

## CommonJS规范
CommonJS 规范是为了解决JavaScript 的作用域问题而定义的模块形式，可以使每个模块它自身的命名空间中执行。该规范的主要内容是，模块必须通过 **module.exports** 导出对外的变量或接口，通过 **require()** 来导入其他模块的输出到当前模块作用域中。


# What happened when enter url
如果完全不考虑缓存的情况下
1. call DNS server，查询具体IP
2. 发送http/https请求到该IP的80/443端口
3. web服务器传回data
4. 浏览器渲染
