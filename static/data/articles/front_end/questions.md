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
	- article, section, aside
	- figure, figcaption
	- detail, summary
	- time
	- b, strong(semantic)
	- i, em(semantic)

- 更多
	- microdata


## mata: viewport
- what is viewport: view port is the user visible area of a web page, so it varies with the device
- how to use: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
	- `width=device-width` set the width of the page to follow the screen width of the device
	- `initial-sc	ale=1.0` set the initial zoom level when first load

## canvas:
- what is canvas: used to draw graphics by using javascript

# CSS
## block model
- content, padding, border, margin

## css reset, normalize.css
- different browser has different default style, 
these two are used to eliminate the default style to make ur interface look the same at different browser
- difference is css reset everything, normalize.css remain part of it
	
## css centralize
- horizontal
	- text-align: center
	- margin: auto
- vertical
	- line-height
	- padding
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
1. add an element with style="clear:both"
2. set parent element style="overflow： auto/hidden"
3. use pseudo-element ::after {content:''; clear:both; display: block;}

# JS 
## js data type
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
- means that parent node handle event for child node

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


## difference between 301 & 302
- 301: resource is moved permanently, client should request the new location from now on
- 302: resource is temporarily located somewhere else, client should continue request for the original url 

## how to do http cache, catch-control & etag	
- [https://imnaifu.github.io/#/blog/HTTP%20Cache](https://imnaifu.github.io/#/blog/HTTP%20Cache)

## cookie, session
- server send 'Set-Cookie' header to client
- then every new request, browser will send requeset with stored cookie to server 
- Secure & HttpOnly
	1. 'Secure' tag, means cookie will only sent by 'https' protocal
	2. 'HttpOnly' tag inaccessable to 'document.cookie', they are only sent to the server
- session cookie & persistent cookie
	1. session cookie, no 'Expires', deleted after browser close
	2. permanent cookie, expire after a specific date(Expires) or after a specific length of time(Max-Age) 
- session used to store information across multiple pages

## localStorage & cookie
- storage size, functionality, traffic
cookie -> for server side reading
local storage -> for client side reading
session storage -> same as local storage expire when browser closed

## GET & POST
...

## cross domain
- same-origin policy
	1. URI scheme (protocol)
	2. host name
		- 'www.abc.com' && '123.abc.com' && '123.www.abc.com' are all considered as not the same host name
	3. port number 
- same-origin policy lead to some restrictions
	1. cookie, localStorage, indexDB can not access
	2. DOM element can not get
	3. ajax request can not send
1. cookie
	- if just different sub-domain (eg. 'a.b.com' & 'c.b.com'), then can set `document.domain='b.com'`
	- server side can also set cookie domain to root '/' 		

## JSONP
- [https://imnaifu.github.io/#/blog/JSONP](https://imnaifu.github.io/#/blog/JSONP)

## CORS (Cross-Origin Resource Sharing)
- same like JSONP is another way of cross domain messaging
- you can write you ajax like the way before, browser will auto detect if it belong to the same source,
if not, `Origin` will be added in the header to tell the server the source of the request, then server will
decide weather to respond or not.
- includes simple request & complicate request
1. simple request 
	- HEAD, GET, POST method, and only a few header
	- just sent with the origin info, if server respond with header 'Access-Control-Allow-Origin' then success, 
	else fail, will be catch by the onerror method from XMLHttpRequest
	- for cookie, follow the same-origin policy, only send same-origin cookie
	- if wanna sent cookie：
		1. server need to set `Access-Control-Allow-Credentials: true`
		2. ajax call also need to set `var xhr = new XMLHttpRequest(); xhr.withCredentials = true;`
2. complicate request (if wanna json data, goes here)
	- sent a preflight request to server using OPTION http method with the origin&method to check with server
	- if the server accept the origin and method, then same as the simple request

## postMessage (cross-document messaging)
- usage `otherWindow.postMessage(message, targetOrigin)`
- Using the Messaging API `postMessage()`, plain text postMessageage can be sent from one domain to another (e.g from parent to iframe)
- the receiving page should dispatch event `window.addEventListener("message", handleMessage)`

```javascirpt
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
	- script code appear in somewhere should be only text
- why:
	- back-end rendering forget to change '<' to htmlentity
	- or front-end rendering 
## CSRF (cross site request forgery)
- must fulfill these two steps
	1. login to trusted website A, so you now have session A
	2. go to dangerous website B, then B will sent request to A, 
since you already login A with cookie, so B will get the data he want



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

 