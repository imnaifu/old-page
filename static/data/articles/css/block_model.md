# 盒模型
从内到外，Content -> Padding -> Border -> Margin

# boder-box
这个蛮重要，不过也不难理解
> 'content-box' is the bad guy who alway take more position outside, 
and the 'border-box' is the good guy who only eat his own place.

# 首先，用法
```css
div {
	box-sizing: content-box;
	box-sizing: border-box;
}
```

# 作用
当我们给一个block/inline-block元素设置width=height=100px的时候，有两种情况
## 1. content-box
这样content的大小就是width/height的大小，padding，border，margin会向外扩展，最后的大小大于等于100px

## 2. border-box
这样border内部（包含border）的大小就是100px。padding，border都会向内扩展。

## 例子	
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
- 如果是content-box，整个box的大小是300+20+20px。  
- 如果是border-box，整个box的大小就是300px。  

# Ref
- [https://www.w3schools.com/cssref/css3_pr_box-sizing.asp](https://www.w3schools.com/cssref/css3_pr_box-sizing.asp)