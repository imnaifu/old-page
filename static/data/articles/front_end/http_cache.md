用通俗易懂的方式讲一下这个HTTP缓存，缓存主要由HTTP协议header控制，主要有四个tag
1. Cache-Control（higer priority)
2. Expire
3. Etag（higer priority)
4. Last-Modified

# HTTP缓存的位置分为两个
1. Public: 中间人 like CDN
2. Private: 客户端浏览器

# HTTP缓存分为两种
1. 强制缓存（指的是不需要与服务器交互）
2. 协商缓存（需要与服务器交互）

# 强制缓存
## Cache-Control
1. 缓存能力
- private: 只允许浏览器本地缓存
- public： 浏览器和CDN都可以
- no-cache： 强制使用缓存前向服务器发送请求
- no-store: 禁止缓存

2. 过期时间
- max-age： 指定一个时间长度，在这个时间段内缓存是有效的，单位是s。
- s-maxage： 和上面一样，不过只用于public缓存

## Expire (lower priority)
Expires 指缓存过期的时间，超过了这个时间点就代表资源过期。

# 协商缓存
主要是Etag。
缓存的资源到期了，并不意味着资源内容发生了改变，如果和服务器上的资源没有差异，实际上没有必要再次请求。
客户端和服务器端通过某种验证机制验证当前请求资源是否可以使用缓存。浏览器第一次请求数据之后会将数据和响应头部的缓存标识存储起来。
再次请求时会带上存储的头部字段，服务器端验证是否可用。如果返回 304 Not Modified，
代表资源没有发生改变可以使用缓存的数据，获取新的过期时间。反之返回 200 就相当于重新请求了一遍资源并替换旧资源。

## Etag / If-None-Match (higer priority)
服务器返回的header里面可以set一个Etag(e.g `Etag:"hash_value_here"`)，下次客户端发起请求，会加上`If-None-Match:"hash_value_here"`
服务器检查Etag，返回304，或者200

## Last-Modified / If-Modified-Since (lower priority)
服务器返回的header里面可以set一个Last-Modified(e.g `Last-Modified:"some_time_stamp"`)，下次客户端发起请求，会加上`If-Modified-Since:"some_time_stamp"`
服务器检查Last-Modified，返回304，或者200


![](1http_cache.jpg)
![](cache_control.jpg)

# Ref
- [https://zhuanlan.zhihu.com/p/29750583](https://zhuanlan.zhihu.com/p/29750583)
- [https://zhuanlan.zhihu.com/p/25512679](https://zhuanlan.zhihu.com/p/25512679)
- [https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ)