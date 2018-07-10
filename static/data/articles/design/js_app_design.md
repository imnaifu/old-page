# 关于引入 

1. 静态 -> 动态 import
2. 同步 -> 异步 import 

> [https://github.com/jamiebuilds/react-loadable](https://github.com/jamiebuilds/react-loadable)


# 组件动态生成

# 集中式配置 -> 分布式配置

# Composition & Inheritance
组合还是继承，React 的官方结论是组合比较好，但目前我的思维模式主要是继承。
组合和继承的差别在于，权限究竟在谁。继承是一个中央的权限控制系统，所有的子组件的渲染由父组件来控制，而组合是一个分布式的系统，父组件由子组件按需调用。其实两种都实现的代码的复用，但是分布式更优，这是个依赖注入的原理。

# Ref 
- [https://reactjs.org/docs/composition-vs-inheritance.html](https://reactjs.org/docs/composition-vs-inheritance.html)
