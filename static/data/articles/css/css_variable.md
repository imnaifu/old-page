原生CSS也是支持变量的哦，好吧我才知道。从原生到框架，再到原生，框架和语言之间也是相互学习啊，就像ES6用了很多TypeScript的东西，CSS也用了SASS的东西

# 语法
变量一般定义在根节点，比如html, 用两个dash '-' 表示这是个变量，后面跟着值。
e.g `--myVariable: 10px`。
使用时用'var'，e.g `var(--myVariable)`便是'10px'。

# Define
```css
<!-- psuedo root -> point to html -->
:root {
	--variableA: 123px
	--variableB: yellow
}
```


# Use
```css
.class1 {
	width: var(--variableA)
	background-color: var(--variableB)
}
```

# Use with JavaScript
```javascirpt
// get variable from inline style
element.style.getPropertyValue("--variableA");

// set variable on inline style
element.style.setProperty("--variableA", '124px');
```


## Reference
- [mozilla css variable](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)