# 又是一个很重要的点
这篇和event loop一起，就是全部有关JS执行的内容。event loop是宏观，这篇是微观。

# 先介绍一下作用域
JavaScript有个全局作用域（Global excution context），或者叫上下文，
在node环境就是global对象，在浏览器环境中就等同于window对象。
```javascript
console.log(this === window); //true
a = 12;
console.log(this.a); //12
```
作用域这个东西，和定义的方式有关，用var定义的就会变成全局作用域，let/const就是正常的块级作用域。
总之，尽量不使用var。

# 函数的执行过程
Event loop是线程级别的JS运行，包括和浏览器的互动，以及对内存的操作。而今天要讲的是函数级别的运行方式。
先贴个抄袭的一段话，from IBM

> JavaScript 中的函数既可以被当作普通函数执行，也可以作为对象的方法执行，这是导致 this 含义如此丰富的主要原因。
一个函数被执行时，会创建一个执行环境（ExecutionContext），函数的所有的行为均发生在此执行环境中，
构建该执行环境时，
1. JavaScript 首先会创建 arguments变量，其中包含调用函数时传入的参数。
2. 接下来创建作用域链。然后初始化变量，
    - 首先初始化函数的形参表，值为 arguments变量中对应的值，
    - 如果 arguments变量中没有对应值，则该形参初始化为 undefined。
    - 如果该函数中含有内部函数，则初始化这些内部函数。
    - 如果没有，继续初始化该函数内定义的局部变量，需要注意的是此时这些变量初始化为 undefined，
3. 其赋值操作在执行环境（Execution Context）创建成功后，函数执行时才会执行，
    - 这点对于我们理解 JavaScript 中的变量作用域非常重要，鉴于篇幅，我们先不在这里讨论这个话题
4. 最后为 this变量赋值，如前所述，会根据函数调用方式的不同，赋给this全局对象，当前对象等。
5. 至此函数的执行环境（ExecutionContext）创建成功，
6. 函数开始逐行执行，所需变量均从之前构建好的执行环境（ExecutionContext）中读取。

# 首先，创建执行环境（execution context）或者叫执行上下文
这就是第一步，在event loop里面我们有讲，函数运行第一步是将函数压入stack，
而压入stack后的第一步就是创建执行环境。

# 1. 创建arguments变量，里面包含传入的参数
## 什么是arguments变量
argument 是一个对象，你pass到函数的变量实际上都存在arguments里面并且在函数内部可以调用, 就像PHP里面的$argv
```javascript
function run(a, b){
    console.log(argument);
	// object{
	//   0:'aa',
	//   1:'bb' 
	//  }
}
run('aa', 'bb');
```

# 2. 创建作用域链
JS有所谓的三种链式结构。

## 1. Prototype Chian - 原型链
对object而言，类似一种类的继承结构，可以向上查询属性方法，与执行并没有什么关系。

## 2. Execution stack - 执行栈
执行环境的栈，是一个栈结构。
JS的执行栈是动态的，最底层是Global execution context，就像C语言的入口函数是main函数。
上面随着函数的调用一个个压入，函数return后弹出。

## 3. Scope Chain - 作用域链
指的是当get一个变量的时候，需要查找这个变量究竟是在哪里定义的而产生的一条查找链。
先要理解执行栈，因为执行栈描述的是函数调用的关系，是动态的。但是我们知道JS是lexical的，
所以，作用域链并不是动态的，而是看由函数定义的位置决定的。所以作用域链和执行环境并不是对应的。
具体是怎么实现的呢，JS engine会为函数创建一个outter reference。

```javascript
function a(){
	console.log(v);
}

function b(){
	var v = 1;
	a();
}

var v = 2;
b(); // 2   
// 执行栈从上往下 [ a() --> b() --> global context ]
// a的作用域链: inner a --> global
// b的作用域链: inner b --> global
// a, b的作用域毫无关系
```

## 作用域链与原型链
这两个是不一样的且没有交集的
- 作用域链指的是，我这个变量，究竟拿的是哪里的值
- 原型链是在拿到这个变量之后，我这个变量有个方法，究竟是在它自己里面还是在它的原型里

## 作用域链与性能优化
查找是费时的，如果多次使用一个全局对象，最好保存在局部。

# 3. 初始化变量
第一步是根据传入变量确定的形参，函数声明和变量声明，这些就是所谓的初始属性
```javascript
function foo(a) {
	var b = 2;
	function c() {}
	var d = function() {};
	b = 3;
}
foo(1);

//第一步结束后，AO(Active Object)会是
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c(){}, //因为函数定义有提升
    d: undefined
}
```
注意这里只会执行声明，而不会执行赋值，所以，一开始除了传入的变量，其他都是undefied。

# 4. 代码执行
初始化结束后开始执行，顺序执行代码，修改变量
```javascript
//执行结束后
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c(){},
    d: reference to FunctionExpression "d"
}
```

# Ref
- [https://github.com/mqyqingfeng/Blog/issues/5](https://github.com/mqyqingfeng/Blog/issues/5)
- [https://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/index.html](https://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/index.html)