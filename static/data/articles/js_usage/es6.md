# 'let' keyword
scope within the '{}'

```javascript
if (true){
	var a = 1;
	let b = 2;
}
//a = 1
//b = undefined
```

# 'const'
create read-only constant value, if redefine will return silent error


# Template literal
instead of using double quote or single quote, using `` instead to quote the string
it's like PHP double quote, allow variable inside by using ${var_name}

```javascript
let example = '123';
console.log(`this is a ${example}`);
```

# Arrow function

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
	sayName(){
		console.log(this.name);
		//working
	}
	sayName: () => {
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
			//not working, 'this' means nothing here 
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
			//arrow function way, because 'this' refer to parent
			//词法作用域
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

# Promise
- It's an API rule

```javascript
let myPromise = new Promise((resolve, reject) => {
	
});
```


# Class












