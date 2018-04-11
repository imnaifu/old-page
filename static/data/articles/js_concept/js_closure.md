    # 2018-04-11 update 早上模模糊糊做梦突然想到闭包，然后猛地想明白了
## 如果我们只想要一个过程，比如一个果汁机，进来的是水果，出去的是果汁，那我们只需要一个函数就够了。

```javascript
function juiceMachine(fruit){
        let juice = fruit;
        return juice;
}
```

## 如果我们要的是一个带着变量的过程，比如一个可以往果汁里面加糖的果汁机，那我们就有两个选择了。
1. 还是只用一个函数，把糖加到函数参数里面，这样你就需要一个外部变量记录当前有多少糖。
2. 直接把函数和糖打包在一起，这样每次调用函数，糖都会因为使用而减少。
## 第二个选择就是我们可爱的闭包了

```javascript
function juciceMachine(fruit, sugar){
        let juice = fruit + sugar;
        sugar -= 1;
        return [juice, sugar];
}

function closureJuiceMachine(sugar){
        console.log(sugar); //10
        let juiceMachine = (fruit) => {
            let juice = fruit;
            sugar -= 1;
            console.log(sugar); //9, 8
            return juice;
        }
        return juiceMachine;
}

juiceMachine = closureJuiceMachine(10); //做一个有10份糖的果汁机
appleJuice = juiceMachine('apple'); //做一份苹果汁，糖剩下9份
bananaJuice = juiceMachine('banana'); //做一份香蕉汁，糖剩下8份

console.log(appleJuice);
console.log(bananaJuice);
```

这个解释很清晰明了，还是我自己做梦想到的，我也是佩服我自己，
我记得当年学化学的时候，有个人梦中想明白了苯环的结构，现在想想真是感同身受。- -

# 2018-01-21 Update
最近看了一篇新的，有了更深的了解，关于闭包的实现，实际上靠的是个隐藏变量`[[Environment]]`，
每个函数都有这么一个hidden property，它让函数remember where they were created，这样函数就能通过这个变量，
访问到它的词法作用域下的外部变量。
![]([[enviroment]].png)
换句话说，其实js闭包的实现主要是通过两个机制，作用域链和垃圾回收，理解这两个其实也就差不多了。

# 定义（closure）
- This combination of a function object and a scope (a set of variable bindings) 
in which the function's variables are resolved is called a closure in the computer science literature.   
- 说人话就是，闭包就是一个函数和作用域的组合，这个作用域让这个函数能访问自由变量，

# 其实吧
闭包就是在函数内部作用域和全局作用域中间插入一个作用域，当然全局作用域也算是闭包，
但我们所指的闭包一般是中间插入作用域的那种

# Wrapper
我们一般所讲的闭包指的是，一个外部函数包裹一个内部函数，内部函数在外部函数运行结束后依然能访问到外部函数的变量。

# 两个要点
1. 函数
2. 自由变量（free-variable）： 既不是函数参数，也不是函数局部变量的变量

```javascript
function Car(){
    this.name = 'a';
    let type = 'b';

    this.get = function(){
        console.log(type);
    }    
}

let c = new Car();
console.log(c.name); //'a'
console.log(c.type); //undefined
console.log(c.get()); //'b'
```

上面的例子就是一个闭包，有函数-->get，函数能访问到自由变量-->type。
当然这是简单的闭包，我们具体用的闭包要复杂一些，但原理一样。
简单说，JS也是有自动垃圾回收的，不用的会被立马回收掉，可是因为闭包，本来应该被回收的变量很可能因为别的函数的调用而继续保存。
下面让我们看一个有实用价值的闭包

- **Closures are useful because they let you associate some data (the lexical environment) 
with a function that operates on that data**

# 作为工厂
```javascript
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

# 隐藏私有变量
```javascript
var makeCounter = function() {  
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }  
};

var counter1 = makeCounter();
var counter2 = makeCounter();
```

# Functional Programming
顺带讲讲函数式编程，也是逃不掉。
闭包很明显的体现的函数式编程的概念，相比于面向对象，真是难啊。
总的来说，面向对象是将函数绑定到对象，以方法的形式存在，具体的值储存在对象，通过调用方法改变对象的值。
而JS这种函数式编程，比如这个闭包，可以将变量绑定到函数，完全是反过来的。
简单来说，OOP中，函数是为对象（变量）服务的，FP中，变量是为函数服务的。

# Ref
- [https://javascript.info/closure](https://javascript.info/closure)
- [https://github.com/mqyqingfeng/Blog/issues/9](https://github.com/mqyqingfeng/Blog/issues/9)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [https://www.w3schools.com/js/js_function_closures.asp](https://www.w3schools.com/js/js_function_closures.asp)