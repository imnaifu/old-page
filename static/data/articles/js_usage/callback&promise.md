之前一直以为 promise 很简单，真的用的时候才知道实际上连 callback 都没理解清楚，
看了些视频，总算有所体会，要理解 promise 先要理解 callback。
总而言之，calllback 是一种函数式编程的思想，promise 是一种异步解决方案

# What is callback?
广义来讲，将函数作为变量传入另一个函数，从而让另一个函数可以调用该函数，被调用的函数就被称为 callback function
（当然前提条件是函数可以被当做变量传入，不支持这个的语言就压根不能用 callback ）
正常来讲我们是调用函数，然后获得返回值，再进行使用。

```javascript
let result_1 = step_1(data);
let result_2 = step_2(result_1);
```

使用 callback 一步搞定哈哈
```javascript
let result = step_1(data, step_2); //step_2 pass as a parameter

function step_1(data, func){
	//process from step_1
	let data_1 = blabla(data);
	//process from step_2
	let data_2 = func(data_1);
	return data_2;
}

function setp_2(data){
	return whatever(data);
}
```

当然 callback 不仅仅是为了看起来方便，从代码的角度讲是有两个优点的。
1. 控制反转：JavaScript的sort函数，可以传入判断函数从而控制排序。
2. 异步处理：异步的时候，可以明确执行顺序。  

上面这两个都是普通的函数调用做不到的，下面是差不多的例子。

```javascript
function first(value, callback){
	value += 1;
	callback(value);
}

function second(value, callback){
	//some processing here like below
	data = value + 2;

	//call the passed callback function here
	callback(data);
}

first(1, function(data1){
	//here data1 = 1+1
	seecond(data1, function(data2){
		console.log(data2);
		//here data2 = 1+1+2	
	})
});
```
说白了callback只是把一个函数a当做参数传入b函数，一般来讲，函数a至少要有一个变量，
来接受b函数的返回值。比起返回一个值，callback允许你传入一组操作方法，从而直接in-place进行操作。
其实这个callback真是函数是编程的精华。

# Promise
callback 其实一个很 general 的概念，jQuery 的 Ajax 就是利用 callback 来完成异步的处理。
而 promise 就是另外一种使用 callback 来解决异步请求的方案。

```javascript
let promise = new Promise(function(resolve, reject){
	//some process here
	let data = 'some result';
	if (success){
		resolve(data);
	}else{
		reject(error);
	}
});

promise.then(function(data){
	console.log(data);
}).catch(function(error){
	console.log(error);
});
```

上面是一个典型的promise， `.then` 传入的函数会被当做 `resolve` 函数
`.catch` 传入的函数会被当做 `reject` 函数，所以说为什么要理解 callback 才能理解 promise。

# Throw error in promise
面试时被问到一个小问题，如果在 promise 里面 throw error 会怎样，当时也是懵逼的，很讨厌这种问题其实，就像以前学 C 语言的那些的
`++(a++)` 之类的。因为都规定了，reject 函数就是拿来说明出错的。不过本着科研的心态，也是要了解一下，看了下规范，大概意思是，throw error 会被当做和直接 reject 一样处理，也就是说 throw 的 error 会被当做变量传入 catch 里面的 function。嗯，还是蛮合理的。

# Promise 细讲
2018-09-16 最近遇到一些 promise 的细节问题，稍微看了看，还是记下来比较好 
### 关于 promise chain 的问题

#### 如果你在 resolve 函数（也就是 .then）函数内 return 了一个值
1. 如果这个值是一个 promise，那么这个 promise 回被返回，也就是可以直接被后面的 .then() 拿到
2. 如果这个值不是一个 promise（比如一个 string），那么这个值会被 promise.resolve() 包起来，同样以 promise 的形式 return 
#### 如果没有 return 
相当与返回了一个 Promise((resolve, reject) => resolve())  
这样在下一个 .then(data) data 就会为 undefined
#### in all
无论有没有 return，.then() 的调用实际上都会返回一个新的 Promise

### Promise 对象的状态
Pending -> Fulfilled / Rejected

### Promise 方法
#### instance method
- promise.then()
- promise.catch()

#### static method
下面的方法全部返回 Promise 对象
- Promise.all()
- Promise.race()
- Promise.resolve()
- Promise.reject()

### 创建 Promise 对象
下面也都返回 Promise 对象
1. `new Promise((resolve, reject) => {})` 
2. `Promise.resolve('abc') === new Promise((resolve, reject) => {resolve('abc')})`
3. `Promise.reject('error') === new Promise((resolve, reject) => {reject('error')})` 



# Ref
- [https://zhuanlan.zhihu.com/p/22677687](https://zhuanlan.zhihu.com/p/22677687)
- [http://liubin.org/promises-book/](http://liubin.org/promises-book/)