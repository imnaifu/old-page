# React 组件的使用
理想情况下，React组件应该分为两种，Smart(容器组件) and Dumb。这样分了之后，又变成了MVC。
- M -> redux
- V -> Dumb component
- C -> Smart component

# Dumb组件
- 只负责渲染，所有的数据均来源于props，如果有state那也是存放和数据无关的内容（比如样式）
- pure: 与状态无关，输入决定输出

# Smart组件
- 负责逻辑部分，与state进行交互，将数据传给Dumb组件