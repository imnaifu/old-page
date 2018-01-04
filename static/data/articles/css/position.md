Morning, finally we come to the very fundamental part of CSS ---> Position !!!! Hooray!!!!

# 基本介绍
`position` 有这个几个可选值

## static (default)
static指元素按照顺序从左到右，从上到下依次排下来，
从浏览器的角度来说，如果一个元素的position是static，
这就表示并不用给这个元素一个位置，让其随意游荡就好，爱在哪里是哪里
并且忽略所有加在其上的 top, bottom, left, right, z-index 属性
```css
div {
	position: static;
}
```

## relative
relative和下面的所有value都和上面的static不一样，对浏览器来说，他们是有自己的**位置**的。
relative这里相对的是它原来是static的时候应该在的位置。
**原来的位置还在**，重点就在这，因为相对定位的过程是，先把元素放在它原本static的位置，
然后再根据top, left什么的进行偏移操作，所以原来的位置还是保留的。
```css
div {
	position: absolute;
	top: 10px;
	left: 10px;
}
```

## absolute
这里绝对指的是对应于它的最近的**有位置**的Parent元素的边框。**原来的位置不保留**。
这里有位置指的就是，不是static的元素（如果没有就相对body）
```css
div {
	position: absolute;
	top: 10px;
	left: 10px;
}
```

## fixed
fixed就让你跳出了元素定位，因为fixed相对的是viewpoint。**不保留原来位置**
```css
div {
	position: fixed;
	top: 10px;
	left: 10px;
}
```

## sticky (new)
这个是个新玩意，而且ie还不支持。大概用途就是能让元素在scroll到一个阈值的时候变成fixed。
主要用途在固定navbar这样。
```css
div {
	position: sticky;
	position: -webkit-sticky;
	top: 10px;
	left: 10px;
}
```

# Reference
- [https://developer.mozilla.org/en-US/docs/Web/CSS/position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)