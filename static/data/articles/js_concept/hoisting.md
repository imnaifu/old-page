# JavaScript提升
和PHP不同，JS可以先使用再声明。
```javascript
foo();

function foo(){
    console.log('work for me!'); 
}
```
为什么能这么不科学呢！因为JS有一个叫提升(hosting)的东西。  
提升可用于**变量**或者**函数**，**但仅仅是提升声明，而不用于初始化**。
另外，提升仅用于**var**定义的变量或者函数，或者是直接声明的函数。
**let**, **const**不适用，因为其用于块级作用域。最新的google建议完全不要使用**var**。

# 什么是声明，什么是初始化
一般我们都在声明的时候顺便初始化了，所以不常区分这两个，实际上是分成两个部分的
```javascript
var a; //这是声明
a = 1; //这是初始化
var b = 2; //声明+初始化

//函数声明
function abc (){ }

console.log(c) //undefined
//因为这是变量声明，不是函数声明，
var c = function (){ }
```

# 提升仅用于声明，不用于初始化
```javascript
console.log(a); //undefined
var a = 1;

//相当于
var a;
console.log(a); //undefined
a = 1; //这个初始化不会提升
```

# ES6 
`import` 只能用在外层，不能在函数内部动态使用，另外一点很重要的是，`import` 也会被提升！    

# Ref
- [https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)
- [https://segmentfault.com/a/1190000010123067](https://segmentfault.com/a/1190000010123067)