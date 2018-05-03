# JavaScript的终极奥义之它到底是怎么运行的
1. Single thread 单线程
    - JS设计成单线程与其用途有关，浏览器环境更适合单线程，可以避免同时操作DOM
    - single call stack == single call thread == onething at a time
2. non-blocking 非阻塞
3. asynchronous 异步

![](event_loop.png =500x*)

# 基本组成部分
- 堆(heap)：存数据，变量，常量等等
- 栈(execution stack)：程序运行的基本单位，每当一个函数运行时，就将其压入栈内，运行结束弹出
- 队列(task queue)：等待运行的程序(函数),当主线程(stack)清空的时候，被压入栈内运行
- 外部API(provieded by browser)：JS是单线程，但是JS可以把一些任务给浏览器执行，自己等待其异步返回就好

# Call stack block
因为是单线程，所以执行同步任务时会block住主程序，所以我们不能使用while(true)这种loop，
因为其他的在queue里面的都不会执行了，因为stack永远不是空的，解决方法就是对慢的部分使用异步

# 所以到底是怎么运行的(event loop)
First, 一步一步按照代码顺序走，如果有异步的就和callback一起扔给浏览器API，浏览器完成后会把异步请求callback放入queue。
当所有同步任务执行完后(stack清空时)，会把队列里面的按顺序执行，这就是所谓的event loop

# 有哪些是异步请求
- Ajax
- Event like click and so on
- setTimeOut(funciton, time)

# Macrotaks & Microtask
以前以为上面那些就是全部，结果面试的时候被问到知不知道 marcotask 和 microtask，啪啪啪打脸，算了，每次打脸都是进步。
简言之，执行栈也有两个，一个给 marcotask，一个给 microtask。    
    
![macro_micro_task.jpg](macro_micro_task.jpg)

真正的 event loop 如上图，  

```js
function func1 () {
    console.log('func 1')
}
function func2 () {
    console.log('func 2')
}
function func3 () {
    console.log('func 3')
}
function func4 () {
    console.log('func 4')
}

const func = function () {
    func1()
    setTimeout(func2, 0)
    Promise.resolve().then(
        () => func3()
    )
    func4()
}()

//func1, func4 ,func3, func2
```

## macrotasks
- setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
## microtasks
- process.nextTick, Promises, Object.observe, MutationObserver


# Refe
- [http://www.ruanyifeng.com/blog/2014/10/event-loop.html](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
- [https://zhuanlan.zhihu.com/p/29116364](https://zhuanlan.zhihu.com/p/29116364)
- [https://www.youtube.com/watch?v=6MXRNXXgP_0](https://www.youtube.com/watch?v=6MXRNXXgP_0)
- [https://zhuanlan.zhihu.com/p/24460769](https://zhuanlan.zhihu.com/p/24460769)
- [https://stackoverflow.com/questions/25915634/difference-between-microtask-and-macrotask-within-an-event-loop-context](https://stackoverflow.com/questions/25915634/difference-between-microtask-and-macrotask-within-an-event-loop-context)