# 1. state & prop
- props应该是外部（parent）定义的，并且一般不改变的
- staet一般是属于组件内部的，可变的		

# 2. 三个状态
- mounted
	- componentWillMount
	- render
	- componentDidMount
- updated
	- componentWillReceiveProps
		- 当一个mounted component将要接受新的props时
		- 函数参数为新的props对象
		- 可以比较新的prop和旧的props(this.props)的diff
	- shouldComponentUpdate
		- 当一个mounted component已经接收到新的props或state
		- 判断是否有必要更新DOM结构
		- 函数参数两个，新的props和新的states
		- return true/false表示是否更新
	- componentWillUpdate
	- render
	- componentDidUpdate
- unmounted
	- componentWillUnmount 

# 3. 当存在子组件时
![](parent-child-update.jpg)
![](parent-child-mount.jpg)

# 4. Diagram
![](react-lifecycle.jpg)

# Ref
- [https://zhuanlan.zhihu.com/p/30032664](https://zhuanlan.zhihu.com/p/30032664)
