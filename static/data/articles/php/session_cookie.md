# Session Cookie 大总结    
之前困惑了好久，http明明是没有记忆的，为什么`session_start()`后，`$_SESSION`变量可以被多个页面同时获取。
才发现原来在call session_start()的时候，一个叫**PHPSESSID**的cookie，自动传到了用户浏览器。
以后每次请求都会带上这个cookie，用来获取对应ID的那个session。
这种session cookie会在浏览器关闭的时候自动清除，这就解释了一切。

# Anyway
- Session, Cookie, Login这三者其实没有什么关系的，但确实可以用在一起。

# Login
- 先说登陆，怎样算个登陆，输入用户名+密码，发送到服务器，服务器查询都正确，那就算登陆了。
但是问题来了，HTTP协议是无状态的，我重新发送一个请求，又没有登陆的了，
我总不能每次发送请求都输入用户名密码吧。
其实是可以的，让浏览器保存你的用户名密码，每次发送都加在请求信息里面就行了。
保存的方式的呢，就是cookie。

# Cookie
- Cookie是服务器在客户端设置的一个小的数据点，存在浏览器内部，有时间限制，过期清除。
服务器可以将用户名密码放到cookie里面，这样用户的每次请求都会包含用户名密码，
可以用这个用户名和密码来登陆。
- 服务器set cookie的时候，还可以说明访问哪些网站的时候，需要附带这个cookie。
很多广告公司这么做，比如你访问nike网站，给你set了一个cookie。
之后你访问facebook，就会向facebook发送这个cookie，facebook就知道你可能需要买运动用品，
就会给你推送运动用品的广告，所以cookie其实主要是用在这的。
（没打开之前我都不知道nike.com设置了那么多的cookie，fb，google，bing都有）
- 不过，光用cookie，一点都不安全，因为里面存了用户信息，最好的方式应该是用户信息全部保存在服务器。
而浏览器只保留一个用户标识。于是我们就需要一个服务器存放用户信息的方法，那就是session。

# Session
- Session如其名，表示一次Session，终止于用户关闭浏览器。
具体用法，在PHP是这样的。
```php
session_start(); //表示要使用session了
$_SESSION['something'] = 'some value';

//整个$_SESSION变量是全局的，而且所有页面都可以拿到
```
- 原理嘛，上面讲的，会在客户端保存一个cookie，用来获取之前保存的session。
就像上面说的，session不仅仅可以用在登录，任何用户在一个page进行的操作带来的状态改变，
如果要带到另外一个page，或者刷新后还保留这个状态，都要session。

# 完整Login
一个完整的login需要上面全部的配合。假设这个用户的信息已经存在了数据库。
那么一个完整的Login需要以下几步。
1. 用户表单输入用户名密码，post方式发到服务。
2. 服务器进行查找，看是否有match，如果有match，继续。
3. `session_start()`, 将当前用户信息保存在**$_SESSION**，设置为登陆状态。
4. 如果我们需要用户关闭浏览器后还可以继续登陆，那就需要手工设置另外一个cookie。
这个cookie里面存放登陆信息，当然要加密，最好是**md5 + slat**。

![img](http://harttle.com/assets/img/blog/cookie.png)    

# 补充知识
- Session的储存方式可以是file/database/memcache/whatever
- Session可以不和cookie一起使用，如果用户关闭cookie，可以用post或者get的参数来传递sessionID

# Ref
- [https://juejin.im/entry/59b75d576fb9a00a424744ad](https://juejin.im/entry/59b75d576fb9a00a424744ad)
- [https://www.tutorialspoint.com/php/php_sessions.htm](https://www.tutorialspoint.com/php/php_sessions.htm)
- [http://harttle.com/2015/08/10/cookie-session.html](http://harttle.com/2015/08/10/cookie-session.html)    
- [http://blog.csdn.net/colzer/article/details/8686966](http://blog.csdn.net/colzer/article/details/8686966)   
