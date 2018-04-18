这是一个，很大很大很大的方向，讲一些简单容易理解的。

# 服务端
## 域名拆分
- 增加浏览器下载的并行度，让浏览器能同时发起更多的请求
- js, css, img分别使用三个域名加载

## 资源压缩
- Gzip技术
- 将资源在服务端进行压缩，然后发送给浏览器再进行解压

## 服务器渲染
- 对SPA来说，因为javascript也可以运行在服务器，所以可以像PHP那样，渲染好HTML之后再发送给浏览器。 

# 文件
## 文件uglify处理
- css去除空格换行注释
- js还可以进行变量名替换，长的换成短的

## 合并请求
- 通过文件打包来减少浏览器对服务器发起的请求数，从而减少发起请求过程中花费的时间

## 页面部分
- css放在顶部，js放在底部
- 将所有用于首屏渲染的 CSS 文件整合成一个文件，以 `<style>` 的行内形式内嵌到 `<head>`
- js 可以用defer, async属性

# 其他
## 缓存
- 使用缓存将内容保存在本地

## 按需加载
- 必要的时候才去加载图片或视频
- Google Img, 下拉才加载    

## CDN负载均衡
- 使用内容分发网络（CDN）将资源放到不同的服务器（不同的地理位置）

# Ref
- [https://www.zhihu.com/question/40505685/answer/86898655](https://www.zhihu.com/question/40505685/answer/86898655)
- [https://zhuanlan.zhihu.com/p/21417465?refer=no-backend](https://zhuanlan.zhihu.com/p/21417465?refer=no-backend)
- [https://zhuanlan.zhihu.com/p/30349982](https://zhuanlan.zhihu.com/p/30349982)