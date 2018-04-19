之前一直以为promise很简单，
真的用的时候才知道实际上连callback都没理解清楚，
看了些视频，总算有所体会，要理解promise先要理解callback

# what is callback
callback的前提条件是函数可以被当做变量传入，不支持这个的语言就能用callback。
正常来讲我们是调用函数，然后获得返回值，再进行使用。
但是大概有两种情况这样用会不方便，而使用callback会很方便。
1. JavaScript的sort函数，可以传入判断函数从而控制排序。
2. 异步的时候，可以明确执行顺序。  
上面这两个都是普通的函数调用做不到的，下面是个简单的callback的例子

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
callback其实一个很general的概念，在用的时候没有规范会很乱，所以offically定义了一个标准--promise，
所以 Promise 算是以中被约束的 Callback

```javascript
let promise = new Promise(function(resolve, reject){
	//some process here

	data = 'some result';
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
上面是一个典型的promise，`.then`传入的函数会被当做`resolve`函数
`.catch`传入的函数会被当做`reject`函数，所以说为什么要理解callback才能理解promise。
因为promise其实也是一个callback，只不过是又多了一层封装的规定格式的callback。