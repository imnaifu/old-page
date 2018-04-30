# apply/call 
- ` Function.prototype.call(valueForThis, [parameter_1, parameter_2...]) `
- ` Function.prototype.apply(valueForThis, ArrayOfParameters) ` 

apply/call 允许调用函数并且改变其 this 的指向，与 bind 不同的是， apply/call 直接调用，而 bind 是返回一个绑定后的函数。
这两个函数其实是一个作用，只不过是传入参数的方法不一样，当有多个参数的时候，apply 传入一个数组作为参数，call 则是传入一个个变量。

```js
var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Mary",
    lastName: "Doe",
}
//没有参数的情况下
person.fullName.call(myObject);  // Will return "Mary Doe"
```

说人话就是，现在有两个 object，A 想要调用一个方法，可是这个方法在 B 上面，自己没有。
于是便用 B 的那个方法的 call 方法，将第一个参数（也就是 this 的指向）设为 A，这样就实现了用 B 的方法操作 A 的对象。

# Function.prototype.bind()
好吧先讲bind是干嘛的，和 apply/call 一样都是拿来改变函数的this的指向。
不同在于 apply/call 直接就拿来用了，bind 是将函数的 this 绑定后，**返回一个新的函数**。
可以无限次call了，这样就很方便，尤其是在 setTimeout 的时候

```js
const user = {
	name: 'me'
}

function sayName(){
	console.log(this.name);
}

//binding
let sayMe = sayName.bind(user);
sayMe(); //"me"
```

# bind() 深入
面试的时候被问了几次，如何实现一个 bind 函数
```js
//没有参数的简单版本
Function.prototype.bind = function (context){
    var self = this; //这里 self 指的是 Math.max 函数

    //因为 bind 的功能就是返回一个函数，所以这里返回一个闭包函数
    return function (){
        //如果函数被调用，就会运行绑定的函数
        return self.apply(context);
    };
}

const a = {};
const newFunc = Math.max.bind(a);
newFunc();
```

# Ref
- [http://lucybain.com/blog/2014/function-prototype-bind/](http://lucybain.com/blog/2014/function-prototype-bind/)
- [https://www.w3schools.com/js/js_function_call.asp](https://www.w3schools.com/js/js_function_call.asp)
- [https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)
- [https://github.com/mqyqingfeng/Blog/issues/12](https://github.com/mqyqingfeng/Blog/issues/12)