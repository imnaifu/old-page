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


# 三栏布局
## 1. absolute方法
- 左边元素left:0，右边right:0，中间set margin 
```html
	<style>
		#left {
			width: 200px;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: red;
		}
		#right {
			width: 200px;
			height: 100%;
			position: absolute;
			top: 0;
			right: 0;
			background-color: red;			
		}
		#main {
			margin-left: 200px;
			margin-right: 200px;
			height: 100%;
			background-color: yellow;			
		}
	</style>
	<div>
		<aside id='left'></aside>
		<main id='main'></main>
		<aside id='right'></aside>
	</div>
```

## 2. float方法
- 左边float:left，右边float:right，中间放后面
```html
	<style>
		#left {
			width: 100px;
			height: 100%;
			float: left;
			background-color: red;
		}
		#right {
			width: 100px;
			height: 100%;
			float: right;
			background-color: red;
		}
		#main {
			margin-left: 100px;
			margin-right: 100px;
			background-color: yellow;	
		}
	</style>
	<div>
		<aside id='left'></aside>
		<aside id='right'></aside>		
		<main id='main'></main>
	</div>
```

## 3.flex方法
- 父元素display:flex，子元素按比例分配宽度
```html
	<style>
		#container {
			display: flex
		}
		#left {
			flex: 1;
			background-color: red;
		}
		#right {
			flex: 1;
			background-color: red;
		}	
		#main {
			flex: 3;
			background-color: yellow;
		}
	</style>
	<div id='container'>
		<aside id='left'></aside>
		<main id='main'></main>
		<aside id='right'></aside>		
	</div>
```