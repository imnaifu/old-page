# 基本原则
其实我觉得代码的架构最最最重要的应该低耦合，其他的都是次要的，就算是设计模式

# 设计模式
## 1. Factory（工厂模式）
- 使用过
- Instead of using New to create instance, using the create method which belongs to the factory class.   
- 相当于在创建实例的过程中多加了一层

## 2. Singletong（单例模式）
- 使用过（写 FaceID 的时候）
- 只允许一个实例的存在

## 3. Register（注册树）
- 算是使用过吧，其实就是单例模式的升级版
- 将已经创建好的实例注册到一个Register Class里面
- Class should have set, unset and get method to return the instance.

## 4. Adapter（适配器）
- 也就是 interface
- cretea interface which should be implemented by different class that realize the same function.
- 构建一个通用的接口，所有实现同一功能的类都要Implement这个接口

## 5. Strategy（策略模式）
- 使用过，在表单验证的时候

## 6. 数据对象映射模式

## 7. Observer（观察者模式）

## 8. Prototype（原型模式）
- JavsScript的原型链

## 9. Decorator（装饰器模式）

## 10. Iterator（迭代器模式）

## 11. Proxy（代理模式）

## 12. 控制反转，依赖注入
- 控制反转是想要的结果，依赖注入是实现的一种方式
- 简单讲就是，你有一个类，这个类的一些方法要依赖其他类的实例，那么直接这样写是很不解耦的，
因为你单纯的依赖对方，对方一旦改变，你就很麻烦了。
解决的方法就是将这个类的实例作为参数传入，同时可以用工厂方法在外面再 wrap 一层，返回这个实例。
这样控制权就在你手里了，因为你可以决定究竟传入哪个实例。[https://zhuanlan.zhihu.com/p/33492169](https://zhuanlan.zhihu.com/p/33492169)
- callback function 也是一个例子，比如 JS 的 sort 函数

# Ref
- [(http://www.imooc.com/learn/236](http://www.imooc.com/learn/236)
