# 来从头来，什么是原型（Prototype）
JS语言规定，每个object都有一个隐藏的property -> **[[prototype]]**，它的值为null或者是另一个object。
而“另一个object”就是我们的原型，所以原型都是对象，叫其原型对象比较好理解。

# 什么是构造函数（constructor）
这里的构造函数并不是Class里面的构造函数，每一个函数被创建的时候，都会有一个**prototype**属性（这里prototype仅仅只是个属性而已，并不指的是原型），
prototype属性指向一个object，默认情况下，这个object只有一个属性 -> **constructor**，这个属性指回这个函数本身。
```javascript
function Rabbit() {} //这是一个构造函数，它有个原型Rabbit.prototype

Rabbit.prototype; //{constructor: f} f指向Rabbit函数

let rabbit = new Rabbit(); //这是一个实例

rabbit.__proto__ === Rabbit.prototype //true，实例的原型指向构造函数的prototype属性 

rabbit.constructor === Rabbit; //true
//rabbit.constructor来自于rabbit.__proto__.constructor
```

# 它们之间的关系
简单来说：
- 实例的**.\_\_proto\_\_** ---> 原型
- 构造函数的**.prototype**属性 ---> 原型
- 原型对象的**.constructor**属性 ---> 构造函数
- 构造函数 ---> 实例
![](prototype.png) 

# 放大至整个原型链
网上一堆乱七八糟的，找半天也没找到一张合适的，索性自己画一张。
```javascript
//当我们创建一个object，一个函数和一个数值变量，会得到下面的三条原型链
let obj = {};
let num = 1;
function abc(){}
```

![](prototypeChain.png) 
可以看出，原型链实际上是由**.\_\_proto\_\_**属性连接而成的一条链。在JS里面任何一个object都会有一个**\_\_proto\_\_**属性，所以任何一个object实际上都在链上。 

# 原型链带来的继承
原型链本身是JS很本质的东西，相当于是底层的设计，作为原理是要理解的，另外，它还可以拿来实现OOP的继承机制。
如果要实现一个Rabbit继承Animal，那么只需要将Rabbit的原型指向Animal。
```javascript
//当我们新建一个Object
let rabbit = {};
//是存在这么一条原型链的 rabbit -> object.prototype -> null
//也就是rabbit.__proto__ = object.prototype

//如果我们要实现rabbit继承animal
let animal = {};
//animal -> object.prototype -> null

rabbit.__proto__ = animal;
//这样就拼成了一条新的原型链，实现了继承
//rabbit -> animal -> object.prototype -> null
```

上面只是理论情况，实际的继承如下
```javascript
function Animal(){};
function Rabbit(){};
Rabbit.prototype = new Animal(); //设置继承原型链

//这里Rabbit.prototype.constructor指向的还是Animal，需要设置成Rabbit
Rabbit.prototype.constructor = Rabbit;
```


# 什么是new
new是一个操作符，但new比起操作符，更像是一个函数，它的输入变量是一个函数（也就是所谓的构造函数），return一个Object对象的实例。
当你使用new的时候，实际上发生了这些：
1. 创建了一个新的对象
2. 将该对象的原型(\_\_proto\_\_)设为构造函数的prototype
3. 将this指向新的对象
4. 执行函数体
4. 返回创建对象（如果构造函数没有返回其他的情况下）

```javascript
//我们有个构造函数
function Human(){
    this.name = 'Jen',
    this.age = 20
}

//如果我们直接call
Human(); //相当于window.Human()

//于是Human里面的this指向window变量
name; //Jen

//如果我们call by new operator
let me = new Human()；

//相当于
//1. 创建新对象 
let obj = {}
//2. 对象原型指向构造函数的prototype
obj.__proto__ = Human.prototype
//3. 将this指向新对象
this = obj;
//4. 执行函数
//5. 返回新对象
retrun obj;
```

# Ref
- [https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e](https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e)
- [https://github.com/mqyqingfeng/Blog/issues/48](https://github.com/mqyqingfeng/Blog/issues/48)
- [https://github.com/creeperyang/blog/issues/9](https://github.com/creeperyang/blog/issues/9)
- [https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript](https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript)
- [http://javascript.info/constructor-new](http://javascript.info/constructor-new)
- [https://zhuanlan.zhihu.com/p/22787302](https://zhuanlan.zhihu.com/p/22787302)
- [https://github.com/mqyqingfeng/Blog/issues/16](https://github.com/mqyqingfeng/Blog/issues/16)
- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Inheritance)
- [http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)
