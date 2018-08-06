# Websocket 知识点
- 如果使用 https，那么必须用 wss 协议，http 的话，可以用 ws，wss
	- Most browsers (notably Firefox 8+) do not allow connections to insecure WebSocket servers from secure pages

- 客户端需要有断线重连，一般服务器会设一个 timeout，如果一段时间没有 hearbeat，会断掉
	- 有个包可以 [https://github.com/lukeed/sockette](https://github.com/lukeed/sockette)

- 底层基于 TCP，握手基于 http（1.1或以上），客户端初始化请求，头部与 http 类似，多了一些而已
- 端口也是 80 和 443
- websocket 的后端处理存在一个协议 upgrade（升级）的过程，http -> ws

# Ref
- [https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [http://www.ruanyifeng.com/blog/2017/05/websocket.html](http://www.ruanyifeng.com/blog/2017/05/websocket.html)
