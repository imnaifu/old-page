# HyperText Transfer Protocol 超文本传输协议
http 协议的演化从 1.0 -> 1.1 -> 2

# 一些背景
- chrome dev tool 的 network 可以查看 protocol 
- 尽管 http/2 并不一定要求 https，但是目前如果要浏览器使用 http/2，一定要先转成 https 
- TCP 连接建立需要三次握手，并且由于慢启动导致建立连接是很耗时的
    - 慢启动 (Slow start) 是一种窗口大小随着传包正确率的增加而增加的过程

# http/1.0
- 1.0 默认采用的是下图短连接的方法  
- 每次请求都要与服务器建立一个 TCP 连接，服务器完成请求立刻断开连接
- 如果需要 TCP 连接服用，即不关闭连接，需要设一个 `Connection: keep-alive` 

# http/1.1
- 1.1 默认采用下图长连接的方法
- 浏览器客户端在同一时间，针对同一域名下的请求（也就是 TCP 连接数目）有一定数量限制，超过限制数目的请求会被阻塞（6 个左右）
- 持久链接，默认 'keep-alive'，一段时间没有活动，主动关闭连接，或者客户端最后一个请求时候发送 `Connection: close`
- 增加了 host 请求头部，客户端可以指明要访问哪个站点，这样在一个 web 服务器上 (same IP, same port)，可以使用不同的主机名创建多个虚拟的 web 站点
- pipeline：1.1 有个叫 pipeline 的东西（如下图），但是浏览器都不支持

![connections_http.png](connections_http.png)

# http/2
- 应用层 (HTTP/2) 和传输层 (TCP) 之间增加一个二进制分帧层
- 单一连接：只会创造一条 TCP 连接，从而减少了握手和慢启动带来的延迟
- 多路复用 (Multiplexing)：在一个连接里，客户端和浏览器都可以同时发送多个请求或回应
- 头部压缩：以前头部是 Plain text，现在用二进制
- 服务器推送：如果判断用户需要，没有请求也可以推送 

![binary_frame_http2.jpg](binary_frame_http2.jpg)

# 总结
其实三个版本就对应着第一个图的三种方式，也说明了为什么 http/2 为什么快 [Demo](https://http2.akamai.com/demo)

## 1.0 
- 只允许一个 TCP 连接，每次都会关闭，除非 `Connection: keep-alive`

## 1.1
- 允许有限个 TCP 连接，每次默认不关闭，但还是收到响应才能请求下一个

## 2.0
- 只有一个 TCP 连接，但是是复用的，一次可以发送多个请求，接受多个请求

# Ref
- [https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x) 
- [http://www.ruanyifeng.com/blog/2016/08/http.html](http://www.ruanyifeng.com/blog/2016/08/http.html)
- [http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html](http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html)
- [https://www.jianshu.com/p/52d86558ca57](https://www.jianshu.com/p/52d86558ca57)
- [http://www.alloyteam.com/2016/07/httphttp2-0spdyhttps-reading-this-is-enough/](http://www.alloyteam.com/2016/07/httphttp2-0spdyhttps-reading-this-is-enough/)
- [https://www.zhihu.com/question/34074946](https://www.zhihu.com/question/34074946)
- [https://www.zhihu.com/question/34074946/answer/157909115](https://www.zhihu.com/question/34074946/answer/157909115)