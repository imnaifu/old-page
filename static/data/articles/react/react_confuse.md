因为开始实战 React 了，记录一些困惑的点吧

## super(props)
super 是在类里面调用父元素的
```js

class dog extends animal {
	//这里调用父元素的 constructor 同时传入 props
	//父元素的 constructor 方法会 this.props = props
	//从而我们能在调用 super(props) 之后可以访问 this.props
	constructor(props){
		super(props);
	}
}

```

## 实例属性/方法 & 类属性/方法
暂时还没有类的实例，我们常用的是类的方法
```js
class dog {
    //构造函数中定义实例的属性/方法
	constructor(){      
        //这里是实例的属性
		this.name = 'lala';
        //这里是实例自己的方法
		this.sleep = function (time){
			console.log('sleep ' + time);
		}
	}
	bark(){
		//这就是类的方法，相当于实例的原型的方法
		console.log(this);
	}
}

//一般我们需要的是，类的方法和实例的属性，因为一般方法拿来公用，属性拿来私用

const husky = new dog();
husky.bark() // this object wiht name and sleep
console.log(husky.name); //lala
husky.sleep('1s'); //sleep 1s

```

## this in React class (or all class)
就像上面讲的，class 里面的方法是类的方法，如果直接调用，是没有绑定的，所以 this 是 undefined
```
class car extends React.component {

	constructor(){
		this.a = 1;
		//绑定
		this.handleWithTiedThis.bind(this);
	}

	handleSubmit(){
		console.log(1)；
	}

	handleWithThis(){
		//这里会 undefined，因为这个是类方法，调用的时候没有绑定
		console.log(this);
	}

	handleWithTiedThis(){
		//这里在构造方法里面强行绑定之后就好了
		console.log(this); //{a: 1}
	}

	render(){
		<!-- 这里的 this 指的是 class 本身 1 -->
		<Form onSubmit={this.handleSubmit}></Form>

		<!-- 如果不加 this 就会访问到外面的方法 2 -->
		<Form onSubmit={handleSubmit}></Form>

		<!-- 没绑定 -->
		<Form onSubmit={this.handleWithThis}></Form>

		<!-- 绑定了的 -->
		<Form onSubmit={this.handleWithTiedThis}></Form>
	}
}

handleSubmit(){
	console.log(2)
}

```

## Two ways of changing state 
1. setState(newState); 
	- pass the new state as a parameter
2. setState((prevState) => { return newState;})
 	- pass a function that takes previous state as a parameter and return the new state

Second way is better because that make u treat setState as a async function.














