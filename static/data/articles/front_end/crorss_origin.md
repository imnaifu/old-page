# 跨域的一种实现
使用的是 iframe + postMessage

#### 目的
跨一级域名传递信息，比如 a.com 传数据到 b.com

#### 基本原理
假入我们需要从 a.com 传 userID 到 b.com
1. a.com 里面创建个 iframe src="b.com"
2. b.com 成功挂载的时候，通知 a.com 
```js
// b.js
window.parent.postMessage('b did mount', 'a.com')
```
3. a.com 监听 b.com 的成功挂载
```js
// a.js
window.addEventListener('message', handleChildMessage)
```
4. a.com 在确认 b.com 以成功挂载（b.com 的监听已开启）后，发送数据
```
// a.js
handleChildMessage = () => {
	const iframe = document.querySelector('ifram#b').contentWindow
	iframe.postMessage({ userID: 123 }, 'b.com')
}
```
5. b.com 监听 a.com 发送来的数据
```
// b.js
window.addEventListener('message', this.handleParentMessage)

handleParentMessage = (e) => {
	console.log(e.data)
}
```

#### 坑
1. 向哪个域名 postMessage，需要调用那个 origin 的 window
	- 向 b 发送，需要用 iframe 的 window
	- 像 a 发送，需要用 window.parent
2. 在确定监听的 eventListener 成功运行后，才能发送信息，不然不会收到
3. 两个 origin 一定要有关系，不然没办法通信
	- iframe
	- window.open


## Ref
- [https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)
