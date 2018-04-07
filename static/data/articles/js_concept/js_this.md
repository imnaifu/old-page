# 静态（词法），动态作用域
- 静态作用域，变量编译时确定
- 动态作用域，变量运行时确定

```javascript
//lexical scope
function foo() {
	print a;  
} 
function bar() { 
	var a = 3; 
	foo(); 
}
var a = 2;
bar(); // 2
```

```javascript
//dynamic scope
function foo() {
	print a;  
} 
function bar() { 
	var a = 3; 
	foo(); 
}
var a = 2;
bar(); // 3
```

# JS是词法作用域（lexical scope）
其实大多数语言（包括PHP）都是词法作用域，只有少数比如bash是动态（Dynamic）作用域。
要是JS全是词法作用域就很好办了，就没有这么多问题了，可是问题就在于JS不全是，this这个东西是动态作用域。官方说明：
> this是在函数调用的时候绑定的，它到底是什么完全取决于函数在哪里调用  

# 解释this的用法有两个方向
1. 一个是从使用的方向，也就是根据this出现的地方来判断this到底指向哪里。
2. 从语言底层来判断，也就是跟着JS语言本身到底是怎么判断this指的什么来判断this指的是什么。
这个很复杂，也很难理解，具体在这里[https://github.com/mqyqingfeng/Blog/issues/7](https://github.com/mqyqingfeng/Blog/issues/7)  
大多数讲this的都会选择第一种讲解方式，下面我也会这样

# 题外话，PHP的作用域
PHP的作用域清晰明了简单易懂，就是函数里面的访问不到外面的，外面的更不可能拿到里面的，
里面要拿到外面的就要global，或者以参数的形式弄进去。外面的拿不到里面的，也根本没有必要拿到里面的。

```php
<?php

$a = 1;
function func(){
	$b = 2;
	echo $a
	$c = function (){
		$d = 3;
		echo $b;
	};
	$c();
}

func();
//$a, $b都是访问不到的
```

# 再插个题外话，关于函数式编程
为什么JS作用域设计这么复杂，因为JS的函数没那么单纯，PHP里面变量是变量，是拿来储存的，函数就是改变变量值的方法。
JS不是，JS函数是一等公民，函数本身也是拿来储存的，
之前看过一个科幻电影，讲语言本身是会影响我们的思维方式的，大概意思是，有一种外星生物的语言是非线性的，
所以他们的思维也是非线性的，地球人完全无法理解。
同理因为面向对象的编程方式更贴近现实，所以更好理解，相比之下函数式编程就难多了。

# 1. this在全局
this在全局作用域指向的是window对象（浏览器）
```javascript
console.log(this); //[Object Window]
console.log(this instanceof Object); //true

var a = 1;
console.log(this.a); //1

//below are the same
console.log(this.Math.random());
console.log(Math.random()); 
```

# 2. 作为函数调用
同上也是绑定到全局对象，也就是window
```javascript
var x = 1;
function a(){
	console.log(this.x);
}
a(); //1
```

# 3.作为对象方法调用
this 绑定到该对象
```javascript
var a = {
	x: 1,
	f: function (x){
		this.x = this.x + x;
		console.log(this.x);
	}
}
a.f(2); //3
```

# 4. 作为构造函数调用
this 绑定到新创建的对象
```javascript
function A(a){
	this.a = a;
}
let aa = new A(2);
console.log(aa.a); //2
```

# Ref
- [https://sdk.cn/news/7237](https://sdk.cn/news/7237)
- [http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)
- [https://github.com/mqyqingfeng/Blog/issues/7](https://github.com/mqyqingfeng/Blog/issues/7)
- [https://www.zhihu.com/question/19636194](https://www.zhihu.com/question/19636194)
- [https://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/index.html](https://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/index.html)