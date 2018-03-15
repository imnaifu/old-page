# HTML
## HTML semantic 
1. purpose: 
	- SEO
	- More reabable
2. how 
	- using specific tag

## mata: viewport
- what is viewport: view port is the user visable area of a web page, so it varies with the device
- how to use: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
	- `width=device-width` set the width of the page to follow the screen width of the device
	- `initial-scale=1.0` set the initial zoom level when first load

## canvas:
- what is canvas: used to draw graphics by using javascript

# CSS
## block model
- content, padding, border, margin

## css reset, normalize.css
- different browser has different default stlye, 
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
2. composit
	- Object, Array

## Promise
## Ajax (pure)
```
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
## this
## self-invoking function
## async/await
## deep clone
## remove duplicate value in array
## using regex do the same thing as string.trim()
## prototype
## ES6 class
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
## status code
## difference between 301 & 302
## how to do http cache
## catch-control & etag
## cookie, session
## localStorage & cookie

## GET & POST

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
- 
## CORS
## postMessage (cross-document messaging)
- usage `otherWindow.postMessage(message, targetOrigin)`
- Using the Messaging API `postMessage()`, plain text postMessageage can be sent from one domain to another (e.g from parent to iframe)
- the receiving page should dispatch event `window.addEventListener("message", handleMessage)`
- ```javascirpt
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

 