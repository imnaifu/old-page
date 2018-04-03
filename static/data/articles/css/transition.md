# transition:
- allow to change property value smoothly (from one value to another), over a given duration
- must specify two things:
    - css property u want to add effect to
    - duration of the effect
```css
div {
    width: 100px;
    transition: width 2s, height 4s;
}

div:hover {
    width: 200px;
}
```

# transition-timing-function:
specifies the speed curve of the transition effect
e.g {transition-timing-function: ease;}
- ease: slow start, then fast and end slowly (default)
- linear: 
- ease-in:
- ease-out:
- ease-in-out:
- cubic-bezier(n,n,n,n):

# transition-delay:
specifies a delay (in seconds) for the transition effect
e.g {transition-delay: 1s;}


# 2D transform
- **translate** 
```css
//move 50px to the right, and 100px to bot from it's current position
translate(50px, 100px);
```

- **rotate**
```css
//clockwise rotate 20 deg
rotate(20deg);
```

- **scale**
```css
//scale the width by 1.5 times and height by 0.5 times
scale(1.5, 0.5);

//scale both 2 times
scale(2);
```
- **skewX, skewY, skew** (倾斜)
```css
//水平方向倾斜20度
skewX(20deg)

//垂直方向倾斜20度
skewY(20deg)

//水平垂直方向都倾斜20度
skew(20deg, 20deg)
```

# 3D
- ![](3d-plane.png)
## prespective
- determine the distance between z=0 plane and user
- 翻译成视距会准确一些，不同的距离看同一个东西也会不同
    


# Ref
- [https://www.smashingmagazine.com/2016/07/front-end-challenge-accepted-css-3d-cube/](https://www.smashingmagazine.com/2016/07/front-end-challenge-accepted-css-3d-cube/)