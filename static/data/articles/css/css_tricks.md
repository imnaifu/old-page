# CSS Triangle
这里用需要了解下背景知识，border其实不是长方形的，是梯形的，所以我们才能用来做三角形。
```css
#triangle-up {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid red;
}
```
这里set左右boder transparent这样下方梯形的边框就会出现，然后将content的长宽设为0，这样梯形就会变成三角形。
总而言之，这里运用了border的特性。