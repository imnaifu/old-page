# React 组件的使用
理想情况下，React组件应该分为两种，Smart(容器组件) and Dumb。这样分了之后，又变成了MVC。
- M -> redux
- V -> Dumb component
- C -> Smart component

# Dumb & Smart 组件
## Dumb
- 只负责渲染，所有的数据均来源于props，如果有state那也是存放和数据无关的内容（比如样式）
- pure: 与状态无关，输入决定输出

## Smart
- 负责逻辑部分，与state进行交互，将数据传给Dumb组件


# Controlled & Uncontrolled 组件
![controlled_uncontrolled_component.png](controlled_uncontrolled_component.png)

## Controlled
- controlled input 的 value 来自与 prop 或者 state, 并且有一个 Callback 函数来改变那个 value，more 'react way' 

```html
<!-- auto save the value into state, so no need dom query -->
<input type="text" value={this.state.name} onChange={this.handleNameChange}/>
```

## Uncontrolled
- Uncontrolled inputs 就像我们传统的处理 Input 的方法，需要用 DOM 方法去拿 value 

```html
<!-- get the value using the traditional DOM way -->
<div>
    <input type="text" value='' ref={}/>
</div>
```

## Pure Component
如果不设置 ShouldComponentUpdate，那么默认每次改变都会 Rerender。很多没有改变的时候也会触发，影响性能，所以有这个东西。如果是 Pure Component，那么只有在 shallow compare 结果不一样的时候，才会触发 Rerender
- [http://lucybain.com/blog/2018/react-js-pure-component/](http://lucybain.com/blog/2018/react-js-pure-component/)

## Component Pattern
1. stateful component
2. stateless component
3. container component 
	- stateless in stateful
4. higer order component 
	- a function that takes a stateless component as input return a statefull component
5. component with render callbacks
	- takes a function as prop, then render it with state
> [https://www.youtube.com/watch?v=YaZg8wg39QQ](https://www.youtube.com/watch?v=YaZg8wg39QQ)


# Ref
- [https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
