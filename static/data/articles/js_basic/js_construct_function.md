对于一般的语言来讲，使用new来创建一个class的实例，实际上是call的class的构造方法(construct function)  
而js并没有class，于是设计者便采用直接new构造函数来创建实例，实际上是一样的

```javascript
function Person(name){
    this.name = name;
    this.gender = 'female';
}
new Person('abc');
```

但是这样创建的实例的属性和方法都是独立的

```javascript
var a = Person('a');
var b = Person('b');
a.gender = 'male';
b.gender // still 'female';
```

因此便发明了一个prototype属性
prototype里面存放共有的属性和方法

```javascript
Person.prototype = {
    height = 100
};

Person.prototype.height = 200;
a.height //200
b.height //200
```

In all, 构造函数里面存放独立的属性和方法，prototype属性（指向一个对象）里面存放共有的属性和方法。
从外面看，prototype就像是实例对象的原型，实例对象就好像继承了prototype对象一样。
上述为标准的创建自定义类型的方法，即构造函数加原型，将独立变量与方法定义在构造函数，
共有变量与方法定义在原型，或者可将原型封装进构造函数

```javascript
//全部放一起，相当于class了
function Person(name){
    this.name = name;
    if (typeof this.sayName != 'function'){
        Person.prototype.sayName = function(){
            alert(this.name);
        }
    }
}
```

构造函数里的var变量实际上是访问不到的，定义的函数也是，都算是private，
只有this.xxx才能够被外部访问，因此可以提供一个可供外部访问的接口函数
```javascript
function cc(name){
    let c = '123';
    this.get = function (){
      return c;
    }
}

let a = new cc();
console.log(a.c); //undefined
console.log(a.get()); //'123'
```

# 究竟什么是new
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
- [https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript](https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript)