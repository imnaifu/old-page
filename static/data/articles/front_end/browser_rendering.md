# 当浏览器收到服务器通过http协议传来的数据时，是怎样渲染出一个页面的？
总的来说，大概有以下几步。
1. **处理 HTML 创建 DOM tree**
2. **处理 CSS 创建 CSSOM tree**
3. **合并 DOM & CSSOM 得到 Render tree**
4. **对 render tree 进行 layout 处理，计算元素的大小和位置，得到 position (reflow)**
5. **paint 在屏幕渲染出来，填充每个像素  (repaint)**

![](dom-tree.png)

上面的仅仅是DOM的构建，除此之外还有CSSSOM，HTML会被用来构建DOM(Document Object Model) Tree，而CSS则会被用来构建CSSOM Tress。
![](css-construction.png)
![](cssrom-tree.png)

紧接着就是DOM和CSSOM的合并
![](render-tree-construction.png)

构建的过程
1. 从DOM的根节点开始，遍历每一个节点
    - 忽略不可见节点，e.g `<script >`, `<meta>`
2. 对每个节点，找到他的CSS属性并apply
    - 有些 'display:none' 的就忽略
3. 返回修改过的节点

之后layout捕获Render tree完成，然后计算node位置，最后由Paint捕获，画在屏幕。

# 性能优化
其实就算你不使用 React，也是有生命周期的，React 只不过把过程抽象出来了，而浏览器隐藏了具体细节。
第一次渲染，是一定会有一次 Layout 和 Paint，这里没什么好说的。但是，后面的 reflow 和 repaint 就是影响性能的关键了，
也是面试被问烂的问题。总而言之，如果你需要交互，那就一定会有一些改变，可能来自于事件触发，或者定时。
那这些改变大体可以分为两类：
1. 一类会触发 reflow -> repaint
    - width, height
    - padding, border, margin
    - scroll, resize, position
    - DOM 增删改
    - 读取某些与位置有关的属性

2. 另一类只会触发 repaint
    - color
    - text-align
    - :hover 

# 基本原则：减少 reflow 的触发
> 浏览器触发 reflow 的原因是因为浏览器是流式布局，所以，一个 DOM 的改变会影响其后面所有 DOM 的布局的改变（除了 absolute/fix ）

- 尽量通过改变 class 来改变 CSS
- 将动画的 position 属性设为 absolute/fix 从而让其从 DOM 流中独立出来
- DOM “离   线” 修改
    - 使用 documentFragment
    - DOM 元素 display:none，修改完后再改回来
    - 复制一个 DOM 到内存，修改完再替换
- 尽量不使用 table 布局，一个改动都会触发整个 table reflow

# 关于 script tag的一些attribute
## async [boolean]
- 和DOM parse过程并行，script异步加载
- 加载完立即运行不保证顺序

## defer [boolean]
- 和DOM parse过程并行，script在document parse了之后执行，但在DOMContentLoaded之前
- 保证顺序
- 其实没什么用，因为作用等同于把script放在`</body>`之前

## crossorigin [anonymous|use-credentials]
- 如果添加了这个attribute，在进行跨域操作时，会拿到错误信息
- 如果没有这个，则直接返回404

![script_attr.png](script_attr.png)

# Ref 
- [construction](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model)
- [rendering](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)
- [https://zhuanlan.zhihu.com/p/25554352](https://zhuanlan.zhihu.com/p/25554352)
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- [https://eager.io/blog/everything-I-know-about-the-script-tag/](https://eager.io/blog/everything-I-know-about-the-script-tag/)
- [https://acrens.github.io/2017/03/23/2017-03-22-reflow&repaint/](https://acrens.github.io/2017/03/23/2017-03-22-reflow&repaint/)
- [https://blog.kaolafed.com/2017/03/30/repaint%E4%B8%8Ereflow/](https://blog.kaolafed.com/2017/03/30/repaint%E4%B8%8Ereflow/)
- [https://developers.google.com/web/fundamentals/performance/rendering/](https://developers.google.com/web/fundamentals/performance/rendering/)