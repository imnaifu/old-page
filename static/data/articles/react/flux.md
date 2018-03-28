# 哈哈哈我日哦
本来想好好讲一下flux，结果突然发现一篇文章讲的实在是太好了哦。
那我这个就总结下就好了。

# 什么是flux
是一个状态管理的概念，性质和REST一样，Vuex就是flux的一种实现。
翻译过来就是，单向数据流

# 为什么要flux
哈哈哈那篇文章讲的太好了，flux算是前端工程化的一大进步。
像facebook，（微博也是）通知的那个部分很多问题，有时候提醒你有个消息，你看过以后还是继续提醒。
前端数据状态管理其实很混乱，没人能确定在某个时间某个数据到底是哪个状态。
于是facebook就发明了flux（在下实在佩服）

# 细节
重点就在于单向数据流
![](flux.jpg)
这么讲，
1. 用户看到的东西，我们叫做view
2. view的数据从哪里来 --> store
3. 我们怎么给store传数据呢，通过action
4. action从哪里来的呢，通过dispatcher给的
5. dispatcher怎么给的呢 --> 用户通过view触发的

看到没，一个完整的单项闭环，再也不是原来那样，view和model之间互相传来传去了。
这样为什么好啊，因为debug的时候，我就可以把它拦截或者停住啊，我就知道在那一刻的数据到底是多少。
开心吧。

# Vuex
大概讲下，细节有另外一篇讲过了。
vuex就是一个flux实现，用户的event触发dispatcher，dispatcher触发action，action里面可以包含一个或多个mutation，
这个mutation就是操作store的state的接口，所有数据都存在store.state。完美。

# Reference
- [https://zhuanlan.zhihu.com/p/20263396](https://zhuanlan.zhihu.com/p/20263396)
- [https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207)