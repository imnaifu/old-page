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
`++(a++)` 之类的。因为都规定了，reject 函数就是拿来说明出错的。不过本着科研的心态，也是要了解一下，看了下规范，大概意思是，throw 
error 会被当做和直接 reject 一样处理，也就是说 throw 的 error 会被当做变量传入 catch 里面的 function。嗯，还是蛮合理的。

# Ref
- [https://zhuanlan.zhihu.com/p/22677687](https://zhuanlan.zhihu.com/p/22677687)