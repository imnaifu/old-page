标题是盒模型，但是那些基本的就懒得说了，记录的都是自己还没完完全全熟悉的东西。

# boder-box
主要讲下这个。

## 首先，用法
```css
div {
	/*box-sizing: content-box; */ /*defult*/
	box-sizing: border-box;
}
```
怎么说呢，这个不是默认的，但是我觉得，这个反而应该设成默认，因为更合理。所以一般我都直接在body里面全局用这个。

## 作用
如果我们给一个div设置width & height,实际上设置的是content的width和height（exclude padding & border）。
比如我们有下面这样的css
```css
div {
	width:　300px;
	height: 300px;
	padding: 20px;
	border: 20px;
	margin: 20px;
}
```
这里插一句，盒模型的大小指的是content + padding + border。  
如果是content-box，整个box的大小是 `300+20+20`，整体向外拓展。  
如果是我们可爱的border-box，整个box的大小就是 `300`，整体向内拓展。  

## Conclusion!!
So content-box is the bad guy who alway take more position outside, 
and the border-box is the good guy who only eat his own place.


# Reference
- [https://www.w3schools.com/cssref/css3_pr_box-sizing.asp](https://www.w3schools.com/cssref/css3_pr_box-sizing.asp)