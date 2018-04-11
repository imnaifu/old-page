# Gallery小总结
就算是个小项目，做完也总结一下。

# 组件
组件关系很简单，一共三个（种）组件
1. 父组件Gallery，负责整体逻辑
2. 子组件ImgFigure，是每一个展示的图片
3. 子组件GalleryController，切换事件
![project_gallery.png](project_gallery.png)

# 单向数据流
这里是难点，因为需要拿到渲染后的子组件的大小信息，所以初始化的时候所需要的信息是不完整的。
只能在初始化后，立马进行一次update。

1. 父组件contruct时候，读取json文件，拿到所有图片信息
2. render时候，用图片信息create图片子组件，并把图片信息以props传入子组件
3. 子组件render时候，用父组件给的信息（初始信息，位置都为0）
4. 子组件mount后，dispatch action，将图片size传给redux
5. redux更新，父组件update
6. 父组件重新render，根据图片组组件的大小，和整个背景的大小来划分区域
    - 一共有三个区域，左半边，右半边以及中间
    - 左右半边随机分布图片
    - 被展示的图片放在中间
7. 根据划分后的区域以及图片信息（居中，正反等等），随机计算，重新创建子组件
8. 子组件拿到新的props，重新render，用随机计算后的位置信息
 
讲的话还是太复杂，用图说话
![project_gallery.jpg](project_gallery.jpg)

# Redux使用
一开始在Redux存了很多信息，整个stage的info，以及图片信息。
后来发现那样的数据流向就不是单向的了，实际上stage的info是可以通过图片信息得到的。
所以，Redux只用存图片数组就够了（这个经历告诉我们，决定要存储的数据要先从最少开始，有需要再递增）。

Redux部分需要用到两个包，**redux**和**react-redux**，redux是主体部分，react-redux负责连接redux和react。
连接的方式使用react提供的provider，将store以props的方式传入，这样每个子组件都能拿到store。
```javascript
<div className="App">
    <Provider store={store}>
        <Gallery />
    </Provider>
</div>
```

对于每一个子组件来讲，为了方便操作，可以将redux的Action和State和props绑定，
对props的操作就相当于对redux进行操作

```javascript
//让redux的state可以通过props访问
const mapStateToProps = (store) => {
    return {
        img: store.img,
    }
};

//让redux的action可以通过props访问
const mapDispatchToProps = {
    updateImg,
}

//connect(mapStateToProps, mapDispatchToProps)
//return object with props = states
//then can be used as normal props
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
```
```javascript
//then we can 

//get state
let imgs = this.props.img; 

//dispatch action
this.props.updateImg();
```

# redux-logger middleware
使用了一个logger中间件，可以记录每次state改变之前和之后的状态，方便debug，
同样的还有react-devtool-extension，更加方便。





