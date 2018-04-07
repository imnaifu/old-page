# 事件
来来来，今天我们讲讲事件的触发和传播过程。DOM里面事件的传播主要有三个阶段。
1. 捕获阶段 Capturing phase – the event goes down to the element.
2. 目标阶段 Target phase – the event reached the target element. (can just ignore)
3. 冒泡阶段 Bubbling phase – the event bubbles up from the element.

捕获阶段是从外到内的，从html元素开始，到body，一直到事件触发的最内层元素。
冒泡指的是从内到外，从子到父。一般来讲，我们只用冒泡就够了
![](event_flow.png)

# Event Bubbling
DOM的事件冒泡机制指的是事件的冒泡是从the most deeply nest element开始，一直父元素传播的过程。
如下图，当你click了3。
![](event_bubbling.png)

# 一些函数和变量
有一些函数和变量是和这个有关的。

## event.target & event.currentTarget
-  **event.target**：可以让你拿到最底层的DOM元素，
- **event.currentTarget**： 返回的是当前的元素，也就是this

```javascript
<div id='a'>
	<div id='b'></div>
</div>

//when u click div#b
document.addEventListener('#a', (e) => {
	console.log(e.target) // div#b
	console.log(e.currentTarget) //div#a
})
```
这个就很好用的，如果你有一堆元素要绑定事件，就可以绑在一个parent下面，用e.target来判断到底是哪个触发的。


## element.addEventListener()
这个，大概是，写过的，最多的函数了把，毕竟大部分时间都是在处理事件。
```javascript
// 正常使用只用两个参数，selector, function
document.addEventListener('.class', function_name);

// 如果想要事件在capturing的时候触发
document.addEventListener('.class', function_name, {
	capture: ture, //在capture触发
	//once: true //if this set true, it will unbind like removeEventListener (no more event triggered)
});

// 或者
document.addEventListener('.class', function_name, true);
// third param is 'use capture' default false	
```

## event.stopPropagation()
这个函数是用来**阻止冒泡**的，在一个event handler里面call这个function，所有的父元素便不会再接收到event。


# Ref
- [https://javascript.info/bubbling-and-capturing](https://javascript.info/bubbling-and-capturing)
- [https://javascript.info/event-delegation](https://javascript.info/event-delegation)
- [https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)