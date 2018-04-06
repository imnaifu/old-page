# 什么是原始值？     
JS并不是像其他面向对象语言一样，一切皆对象，而是存在一个叫原始值的东西  
原始值不是object，没有property，没有method  
一般来说，均来自于底层实现  
所有原始值皆不可改变  
There are 6 primitive data types
- string
- number 
- boolean
- null
- undefined 
- symbol (new)


# 什么是原始值不可改变(immutable)?
```javascript
let a = 'abc';
// 'abc' 这个值是不会变的，
a = 'abcd';
// 让a指向另一块存储着'abcd'的内存
let b = a.toUpperCase(); 
console.log(a); //a 还是 'abcd'，不会改变
```
![](primitive_value_unchangable.jpg)


# Primitive wrapper
除了null和undefined，其他的原始值都有与其对应的wrapper object
- string -> new String()
- number -> new Number()
- boolean -> new Boolean()
- symbol -> new Symbol()  

当access一个原始值的方法的时候，JS会隐式的创建一个wrapper object给这个原始值，
用完之后就会回收，所以我们能调用其wrapper object的方法。
```javascript
let str = 'abc'; //原始值
str.length; //这里得到3，可是原始值是应该没有.length方法的

//因为有wrapper object所以这里不会报错
str.abc = 'abc'; 
//但是因为用完就销毁，所以下次调用就没有了
str.abc //undefined 
```

# 什么是原始类型和引用类型？
- 忽略储存空间的差别（对JS来讲不重要）
- 不属于原始类型的都是引用类型, array, object, function
- **基本类型值的传递如同基本类型变量的复制一样，引用类型值的传递就如同引用类型变量的复制一样 (!important)**
    - whenever u pass variable around, primitive value is passed by value, and reference value is passed by reference

```javascript
var a = [1,2,3];
var b = '123';
function c(arr, str){
    arr.push(4);
    str = str.concat('1');
    console.log(str); //'1231' changed here only
}

c(a, b);
console.log(a); //[1,2,3,4] changed
console.log(b); //'123' not changed because passed by value only

```

# typeof 的返回值都有哪些？
typeof 是一个操作符，不是函数，possible return values:
- string -> 'string'
- number -> 'number'
- boolean -> 'boolean'
- null -> 'object' //because null point to a empty object
- undefined  -> 'undefined'
- symbol (new) -> 'symbol'
- function -> 'function'
- object -> 'object'

# instanceof的用法？
instance也是一个操作符
- syntax: `object instanceof contructor`
- 一般用在custom types
- 返回boolean，看对构造函数的原型是否在对象的原型链里

```javascript
function C(){} //constructor
function D(){} //constructor

let o = new C();
//这里原型链是 o -> c.prototype -> object.prototype -> null

//C.prototype在o的原型链里
o instanceof C //true
//D.prototype不在o的原型链里
o instanceof D //false
```

# Ref
- [http://www.jianshu.com/p/d9bef2e83163](ref:http://www.jianshu.com/p/d9bef2e83163)



