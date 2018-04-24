# 前端状态管理
所谓的前端的状态管理，其实和后端的MVC是极像的

# 历史
我们采用纵向的讲解方法，穿插横向对比。
首先，在Web开发的远古时代，并没有所谓的state，所有的state都存在server，无论是数据库还是redis。
我们的开发方式是向服务器发送请求，得到更新后的状态，然后自动刷新重新渲染。
后来我们有了AJAX，可以不用全部更新，只用和服务器交流需要的部分。
再后来，也就是现在，我们在客户端有了更大的内存和更快的处理速度，很多能在客户端做的事情，就不需要服务器的参与了。
但同时，我们也会发现我们需要一个类似后端数据库之类的能保存状态的东西，我们叫它state。

# Redux
三个东西：
1. store
	- Object，里面存放当前app的全部状态数据
2. action	
	- 有type属性的Object，表明要对state要进行的操作类型，以及附带的参数 
3. reducer
	- Function，真正进行更改state的地方
	- 传入state和action作为参数，返回新的state

如果把redux和后端进行对比
- store就像是数据库的表，存的数据，
- action就像handler函数的函数名加参数
- reducer就像handler函数本身，返回修改过的state。
之所以不是直接用action来操作state就像你不会为每个操作单独写一个SQL语句，而且用一个函数wrap SQL语句，从而更方便。
同时，也因为reducer函数的使用，有更好的拓展性（可以先写一个reducer函数，再根据需求慢慢拆分）

# 单向数据流
前端状态管理当然不只是redux，redux只是保证单向数据流的其中一步。
先说说什么是单向数据流，就是数据（状态）只能单向流动（改变），意味着，如果这个数据出现了问题，
那我很好Debug，只要找到他的上家就好，这也是为什么要单向数据流的原因。
那整个前端是怎样做到单向数据流的呢。	
总的来讲就是后端返回的数据传到modal（也就是store），然后通过组件的各种父子关系，一直传下去（props）。
然后当view有事件触发，需要更改数据，那么就dispach一个action，reducer会get到这个action，然后对state做出相应的改变
再重新以新的state渲染view。

![react_state.jpg](react_state.jpg)

# 为什么要单向数据流
1. 方便debug，更好的 control
2. 更好的解耦合

# Ref
- [https://www.zhihu.com/question/47686258/answer/107209140](https://www.zhihu.com/question/47686258/answer/107209140)