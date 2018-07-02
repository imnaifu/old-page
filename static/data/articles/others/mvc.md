面试被问到MVC和OOP是怎样一起存在的，用习惯了所以并没有意识到，回头翻了翻以前写的，总结一下  。

# MVC
- model, view, controller
- 简单说就是数据层，展示层，控制层

## View
- 其中展示层应该是 HTML 文件，或者说是加了 PHP 模板的 HTML 文件

## Controller
- 控制层应该是 PHP 文件，负责逻辑处理，调用 Model 提供的接口进行数据写入或者读取
- 这里我们将一个 Controller 设为一个 Class，提供一个个函数用来做逻辑处理
- 每次接到一个请求的时候，自动 load 对应请求的 class，初始化一个实例

## Model
- 数据层也应该是一个 PHP class 文件，提供控制层所需要的接口，从而让控制层进行数据的读取和写入
- instance 初始化的时候，进行连接数据库的操作

# 这里有两个选择
## 1. controller 厚一点，model 薄一点
- 可以选择把 model 写的厚一点，意味着把对数据库的操作都封装在 model

## 2. controller 薄一点，model 厚一点
- 可以选择把 model 写的薄一点，意味着 model 只提供数据库操作接口，所有 SQL 都在 controller 解决

# MVVM
> model, view, view-model  
这里其实和 MVC 是一样的，不过把 Controller 换了个词而已，因为在 React 的开发结构中， Contoller 需要负责 UI 渲染，所以给了 Controller 一个新的词，叫 view-model。
- 这里 model 对应我们的 api.js，负责数据的部分
- view 对应我们 component，对应我们的组件部分
- view 对应我们的控制组件（一般是按照 Route 划分）
