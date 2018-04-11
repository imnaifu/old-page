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
2. 与上一个状态的virtual DOM对比，找到改变的部分
    - React用diff algorithm比较旧的和新的virtual DOM从而找到最少的步骤来update the Real DOM.
3. 根据改变的部分对real DOM进行更新
    - 一旦有了这些步骤，React会在一个事件循环内执行这些步骤。 
4. 遍历render tree让屏幕更新
    - 一旦所有步骤执行完毕，React会重新渲染reald DOM，意味着在事件循环, 只执行了一次更新DOM的操作

# When update
- AngularJS uses dirty checking to find the models which has changed. 
This **dirty checking process runs in cycle after a specified time**. 
As the application grows, checking the whole model reduces the performance and thus makes the application slow.

- ReactJS uses observable’s to find the modified components. 
**Whenever setState() method is called on any component, ReactJS makes that component dirty and re-renders it**.  

# Ref
- [https://hackernoon.com/virtual-dom-in-reactjs-43a3fdb1d130](https://hackernoon.com/virtual-dom-in-reactjs-43a3fdb1d130)
