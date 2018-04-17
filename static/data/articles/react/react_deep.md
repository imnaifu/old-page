# How does browser render webpage? 
![browser_render.png](browser_render.png)

# Basic
React框架的基本原理。React有个叫Virtual Dom的东西，每次render JSX就会更新virtual Dom，
React会拿更新前的Vitual DOM和更新后Virtual DOM的进行对比（diffing），
找到有差别后，根据差别更新real DOM。

# In summary
当你try to更新DOM的时候，会发生以下的事
1. 更新整个virtual DOM
    - 当setState()被调用的时候, React会从头开始创建全新的Virtual DOM，整个过程很快不会影响performance. 
    每次更新的时候，React都会存在virtual DOM, 一个是上一个状态的Virtual DOM另一个是当前状态的Virtual DOM.
    - render函数返回的就是虚拟DOM(javascript object)
2. 与上一个状态的virtual DOM对比，找到改变的部分
    - React用diff algorithm比较旧的和新的virtual DOM从而找到最少的步骤来update the Real DOM.
    - React通过这些虚拟DOM计算出需要实现页面更新所需要的最少的操作
3. 根据改变的部分对real DOM进行更新
    - 一旦有了这些步骤，React会在一个事件循环内执行这些步骤。 
4. 遍历render tree让屏幕更新
    - 一旦所有步骤执行完毕，React会重新渲染reald DOM，意味着在事件循环, 只执行了一次更新DOM的操作

# When to update
- AngularJS uses dirty checking to find the models which has changed. 
This **dirty checking process runs in cycle after a specified time**. 
As the application grows, checking the whole model reduces the performance and thus makes the application slow.

- ReactJS uses observable’s to find the modified components. 
**Whenever setState() method is called on any component, ReactJS makes that component dirty and re-renders it**.  

# diff算法
正常来讲，两个树的转换算法需要O(n^3)，React通过两个假设，将复杂度降到O(n)

## 两个基本假设
- 相同组件产生类似的DOM结构，不同组件产生不同的DOM结构
    - 逐层比较，同一层才比较，不同层只有插入删除
    - 广度优先，如果一个节点发生改变，它的所有子节点都当做改变
    - 节点节点类型不同，直接删掉重建，下面的code
    - 相同类型的节点，属性不一样的，对属性进行重设
- 同一层次的一组子节点可以通过key区分
    - 对于列表节点提供唯一的key属性可以帮助React定位到正确的节点进行比较，从而大幅减少DOM操作次数

```javascript
<div>
    <counter/>
</div>
//change to below will rerender the whole one 
<span>
    <counter/>
</span>
```

![react_diff.png](react_diff.png)


# React性能优化
- 每次调用setState方法都会重绘（repaint）当前DOM的整个子树
- 所以尽量在较“低”的节点调用setState方法
- 自己实现shouldComponentUpdate()阻止整个子树的repaint 
- Perf.Start(), Perf.Stop() //preformance

# Ref
- [http://www.infoq.com/cn/articles/react-dom-diff](http://www.infoq.com/cn/articles/react-dom-diff)
- [https://hackernoon.com/virtual-dom-in-reactjs-43a3fdb1d130](https://hackernoon.com/virtual-dom-in-reactjs-43a3fdb1d130)
- [https://www.youtube.com/watch?v=d7pyEDqBDeE](https://www.youtube.com/watch?v=d7pyEDqBDeE)
- [http://zencode.in/12.react-diff%E7%AE%97%E6%B3%95.html](http://zencode.in/12.react-diff%E7%AE%97%E6%B3%95.html)