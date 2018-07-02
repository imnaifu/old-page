# 'let' keyword
scope within the '{}' - 块级作用域

```javascript
if (true){
	var a = 1;
	let b = 2;
}
//a = 1
//b = undefined
```

# 'const'
create read-only constant value, if re-define will return silent error

# Template literal
instead of using double quote or single quote, using `` instead to quote the string
it's like PHP double quote, allow variable inside by using ${var_name}

```javascript
let example = '123';
console.log(`this is a ${example}`);
```

# Arrow function 箭头函数
面试时被问到箭头函数和普通函数的区别，当然我只知道 'this' 不一样，现在总给下吧。
其实箭头函数更像是一个“残废版”的普通函数，是缺少了很多东西的。

## 1. 没有自己的 this
如果是普通函数，函数内部的 this 和外部的 this 是有可能不一样的，但箭头函数内部的 this 就是外面的 this。

## 2. 没有 arguments 
普通函数有个默认的内部变量 arguments 可以访问到函数的输入参数，箭头函数没有的，只能用 ...rest parameter。

## 3. 没有 .prototype 属性
意味着箭头函数是不可以拿来做构造函数的。

```javascript
//old:
let add = function(a,b){
	return a+b;
}
console.log(add(2,3));//5
//new (with arrow):
let add = (a,b) => {
	return a+b;
}
console.log(add(2,3));//5	
```

## scope issue with 'this':

```javascript
//old way:
let person = {
	name: 'abc',
	sayName: function(){
		console.log(this.name);
	}
}
//new way:
let person = {
	name: 'abc';
	sayName1(){
		console.log(this.name);
		//working
	}
	sayName2: () => {
		console.log(this.name);
		//not working because in arrow function 'this' 
		//refer to parent scope not 'person'
	}
}
```

## Why arrow function is useful

```javascript
let person = {
	name: 'abc',
	hobbies: ['game', 'sports'],
	showHobbies: function (){
		this.hobbies.forEach(function(hobby){
			console.log(`${this.name} like ${hobby}`);
			//not working, 'this' means window here 
		}); 
	}
	showHobbies: function(){
		let _this = this; //save this
		this.hobbies.forEach(function(hobby){
			console.log(`${_this.name} like ${hobby}`);
			//old working way by save 'this' to '_this'
		})
	}
	showHobbies: function(){
		this.hobbies.forEach((hobby)=>{
			console.log(`${this.name} like ${hobby}`);
			//arrow function dont have its own 'this'
		})
	}
}
```

# Rest parameters
- (grama: '...name') 
## Rest parameters
- set a values => array
- 用在函数的参数里，表示剩余参数，可用来替代arguments
- 因为是真的array，有各种方法

```javascript
let b = function(a, ...args){
	console.log(a, args);
}
b(1, 2, 3, 4); //1 [2,3,4]
```

# Spread operator
- array => set of values
- 打散array，表示一个个element
- 不仅仅可以用在函数传参数，shallow copy也可以
- 不仅仅可以用于array，object也可以

```javascript
let numbers = [1,2,3,4];
let b = Math.max(...numbers);
let c = Math.max(1,2,3,4);
console.log(b, c); //4 4

var a = {name: 'berry', age: '25'};
var b = {...a}; //对a的浅复制
b.name = 'not berry';
console.log(a); // { age: "25", name: "berry" }
console.log(b); // { age: "25", name: "not berry" }

var c = [1,2,3];
var d = [...c]; //对c的浅复制
c[0] = 0;
console.log(c); //[0, 2, 3]
console.log(d); //[1, 2, 3]
```

# Destructing
- array

```javascript
let a = [1, 2, 3, 4];
console.log(a[0]) //1
let [b, c, d] = a;
console.log(b,c,d) //1,2,3
let [bb, cc, ...dd] = a;
console.log(bb, cc, dd); //1, 2, [3,4]
```

- object

```javascript
let a = {
	name： 'aa',
	age: 30
}
{name: myName, age} = a;
console.log(myName, age); //'aa', 30
```


# Computed property names（对象计算属性）
React 里面调用 setState() 的时候，有机会用到。如果我们想动态的 setState ，
```js
//es5 旧的写法
const name = 'someName';
const value = 'someValue';

const partialState = {};
partialState[name] = value;

this.setState(partialState);
```

```js
//es6 新的写法，这里就用到了对象计算属性
this.setState({
	[name]: value
})
```

# Promise.finnaly(() => {})
无论成功或失败都要进行的操作放在这里

# Object Rest/Spread Properties
```js
const obj = { a: 1, b: 2, c: 3 }
const { a, ...x } = obj;
// x = { b: 2, c: 3 }
```


















