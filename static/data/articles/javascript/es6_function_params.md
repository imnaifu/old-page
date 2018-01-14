在ES6的时候，终于提供了一种可以给函数传递命名变量的方法--**Destructuring assignment**  
假设我们现在有个函数
```javascript
function makePerson(name, age, gender, height, weight){

}

// if we only have name, height and weight
makePerson('Zack', undifined, undefined, 180, 70);
```
很麻烦有木有，这不是重点，重点是还要记住传入的顺序，记你妹哦。
但是现在有了destruct，这一切都阔以解决！

# Destruct
Destruct可以适用于两种类型，Array和Object，当然array属于object，但用法有一点小区别

## Array Destruct
基本用法
```javascript
let arr = ['apple', 'banana', 'cat'];
let [fruit1. fruit2, animal] = arr;

alert(fruit1); //'apple'
alert(fruit2); //'banana'
alert(animal); //'cat'
```

需要注意的是，Destruct并不会改变原来的array或者object，只是assign了新的变量。   
其他的常用方法

```javascript
let [, , title] = ["Julius", "Caesar", "Consul"]; //ignore the first two elements
let [a, b, c]  = "abc"; // string can also apply this, since it is iterable
let [one, two, three] = new set([1, 2, 3]); // set also iterable

let user = {};
[user.fname, user.lname] = "Michle Colion".split(' '); 
//any 'assignable' can be used at left
```

# Rest Parameters
这里要插入一个知识点，rest parameter，语法是'...name'
用法是将没有指定个数的变量保存成一个数组，比如我们要做一个可以接受任意个参数的求和函数

```javascript
function sum(...args){
	// args = [1, 2, 3]
	return args.reduce((sum, current) => {
			return sum + current;
		})
}
sum(1,2,3)； 
```
这里'...args'表示接受任意个参数，并把这些参数以array的方式存到args这个array。

## rest used in destruct
```javascript
//array
let arr = [1, 2, 3, 4];
let [a, ...others] = arr;

console.log(a); // 1
console.log(others); //[2, 3, 4]

//object
let obj = {a:1, b:2, c:3, d:4}
let {a, ...others} = obj;

console.log(a); //1
console.log(others); //{b:2, c:3, d:4}
```



# Object destruct
Basic syntax is 
```javascript
let person = {
	name: 'jack',
	age: '20',
	gender: 'male'
};
//the variable name below must be the same in the object
//because object is not like array destruct by order, it destruct by the property name
let {name, age, gender} = person;
console.log(name); //'jack'
console.log(age); //'20'
console.log(gender); //'male'
```

Actually you can change the name of the assigned variable
```javascript
let person = {
	name: 'jack',
	age: '20',
	gender: 'male'
};
//{sourceProperty: targetVariableName}
let {name: n, age: a, gender: g} = person;

//name -> n 
//age -> a
console.log(n) //'jack'
console.log(a) //20
```

Besides, you can also set the default value

```javascript
let person = {
	name='jack'
}

let {name = 'taylor', age = 30, gender = 'female'} = person;
console.log(name); //'jack' use the value in person
console.log(age); //30 no matching in person, use default
console.log(gender); //'female' use default
```


# 本节重点
重点来了，终于回归主题的，还记得我们为什么要写这篇吗。哈哈，去拿我们开头写的函数

```javascript
function makePerson(name, age, gender, height, weight){

}

```

升级一下，可以通过传入一个object的方式

```javascript
function makePerson(obj){
	obj.name, 
	obj.age, 
	obj.gender, 
	obj.height, 
	obj.weight
}
makePerson({name: 'bla', height: 100, weight: 50});
```

但是可以指定传入的是哪个参数这样也不是很好，因为还要'obj.'一个一个拿，再升级一下

```javascript
//es6
function makePerson({name, age, gender, height, weight}){
	console.log(name);
}
makePerson({name: 'bla', height: 100, weight: 50});
makePerson(); //error
makePerson({}); //no error
```

这里是用的是destruct方法，这样就可以直接用参数名了，
不过还有个问题，如果没有传入参数会报错，一定要传一个空的object才行，再升级一下

```javascript
function makePerson({name, age, gender, height, weight} = {}){
	console.log(name);
}
makePerson({name: 'bla', height: 100, weight: 50});
makePerson(); //no error
```

这里给传入参数设了一个空object作为default value，
表示，如果有传入参数就destruct传入的参数，不然就destruct空的object（意味着使用default value）
所以结论是，这大概是es6里面写函数的最好方法，可惜暂时不能用es6，so sad

# Reference
- [https://javascript.info/destructuring-assignment#array-destructuring](https://javascript.info/destructuring-assignment#array-destructuring)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)





