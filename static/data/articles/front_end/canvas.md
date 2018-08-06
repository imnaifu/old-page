# canvas 知识点
可以把 canvas 当作我们自己画图的方式使用，拿起笔 `beginPath()`，找到起始点 `moveTo(x, y)`，
开始画直线 `lineTo(x, y)`，让这个线能明显被看到 `stroke()`，填充 `fill()`  
  
canvas 画图实际上只有三种
- 矩形 rect
- 弧形/圆形 arc
- 曲线（二次，三次贝塞尔曲线）

# 动画
动画的本质都是一样的，就是给原来静止的图片加上时间维度，利用眼睛的残影效应来模拟连续动的感觉。
canvas 也是同理，浏览器提供了一个 api `window.requestAnimationFrame(callback)` 。
调用这个 api 告诉浏览器希望执行动画，并且在重新渲染前，执行 callback 函数。
- 这里需要在 callback 函数里面继续调用这个 api，这样才能完成连续的动画
- 函数调用时1秒60次
- 不用这个 api，使用 `setTimeInterval()` 也可以
- 总之 canvas 只是负责画图而已，每 1/60 秒画一个图，就是动画了

# 画图
- 主要是曲线的使用
- path2D
- 颜色
	- fillStyle
	- strokeStyle
- 透明度
	- 使用 globalAlpha
	- 使用 rgba(255, 0, 0, 0.5)
- 渐变
	- createLinearGradient()
	- createRadialGradient()
- 线的 style


# Ref 
- [https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)
- [https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)