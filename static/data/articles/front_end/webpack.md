# 简单说下这个Webpack到底是啥
是一个打包工具....

# 打包啥？
所有静态文件(except HTML)
- js, css, sass, images ...

# 怎么打包的
不知道，人家都封装好了，你就不用管了

# 好吧，有什么用
前端的功能越来越强大，所以代码量越来越多，而且参与的人越来越多，这就需要--->模块化 (which means code need to be saved as separate files)  
对很多后端语言来说，这没问题的，require的时候导入就行。但是浏览器不行，如果文件很多，一个一个的话，很慢的，best approach是合成一个文件一口气导入。
所以我们需要webpack。 BTW, 写模块化JS的时候，是有import/export的，webpack有个好处就是，import进来但是没有用到的，不会插在代码里。

# 怎么用呢
`install nodejs --> install npm --> install webpack`  
Webpack 文档很烂，和PHP有的一拼。但是封装的很好，只用操作配置文件就行，具体看网上好多（下面reference)。

# 和其他一起使用
- Vue-Cli： 里面可选用webpack来打包
- babel: babel是一个翻译工具，ES6 --> ES5, 从而保证浏览器一定能运行。 可以和webpack一起用，从而在打包的时候就顺便翻译了

# 具体使用
config file 四大要点：
1. entry: 入口
2. output: 出口
3. module(loader)： apply to each file, eg. css-loader allow load css
4. plugins: right before it bundles, do something like minify the file.

# hash 问题
性能优化，很大要靠缓存，常用的方法就是给文件名后面加 hash，如果每次打包的时候，hash 没变，就说明这个文件没有改动，客户端就不需要重新加载。
这样我们可以将最后的打包文件分成两个，一个是业务逻辑，一个是 vendor，因为 vendor 不常常更新，所以客户端加载的时候，会使用缓存。
当然这是理想情况，实际上 webpack 在打包的时候，用的是自增的 id，所以很多情况下还是会变。
解决方案是使用一个 `HashedModuleIdsPlugin` 的 plugin，让 webpack 使用另外一种算法 -> 模块路径做 hash，来生成模块的 id。

# Tree Shaking （摇树?）
是 DCE(Dead Code Elimination) 的一种实现，通过 tree shaking，可以删除代码中没有用到的部分。
基本原理是分析哪些被引入了，哪些没有，打包的时候，只打包引入的就好

# 热更新 (hot module replacement)
> 当你对代码进行修改并保存后，webpack 将对代码重新打包，并将新的模块发送到浏览器端，
浏览器通过新的模块替换老的模块，这样在不刷新浏览器的前提下就能够对应用进行更新

# Ref
- [https://zhuanlan.zhihu.com/p/30669007](https://zhuanlan.zhihu.com/p/30669007)
- [https://zhuanlan.zhihu.com/p/33652053](https://zhuanlan.zhihu.com/p/33652053)
- [https://zhuanlan.zhihu.com/p/35093098](https://zhuanlan.zhihu.com/p/35093098)
- [http://www.jianshu.com/p/42e11515c10f](http://www.jianshu.com/p/42e11515c10f)  
- [https://zhuanlan.zhihu.com/p/27046322](https://zhuanlan.zhihu.com/p/27046322)
- [https://www.youtube.com/watch?v=8DDVr6wjJzQ&index=3&list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os](https://www.youtube.com/watch?v=8DDVr6wjJzQ&index=3&list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os)
