# CSS Variables
- CSS begin to support variables
- define '--variable_name'   
```css
element {
  --main-bg-color: brown;
}
```
- using 'var(--variable_name)'   
```css
element {
  background-color: var(--main-bg-color);
}
```


# CSS pseudo class（伪类）
- 一个冒号 -> :
```css
selector:pseudo-class{
    property:value;
}
//e.g
a:hover{
    color:blue;
}
```

# CSS pseudo elements （伪元素）
- 两个冒号 -> ::
- 一定要有content，不然没作用，最少也要`content=''`
- 主要就是两个
    - ::before
    - ::after
```css
selector::pseudo-element{
    property:value;
}
//e.g
h1::before{
    content:url(some.img)
}
```

# Ref
- [https://www.w3schools.com/css/css_pseudo_classes.asp](https://www.w3schools.com/css/css_pseudo_classes.asp)
- [https://www.smashingmagazine.com/2011/07/learning-to-use-the-before-and-after-pseudo-elements-in-css/](https://www.smashingmagazine.com/2011/07/learning-to-use-the-before-and-after-pseudo-elements-in-css/)