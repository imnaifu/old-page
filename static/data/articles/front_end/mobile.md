移动端适配问题，经验不多，不过这部分也不难

# 问题
我们讨论的是，网页的设计，在多种屏幕尺寸上的效果和设计师的设计稿一样，包括 margin ，图片等

# 长度单位
重点在与长度单位，因为只要有一个长度单位在不同尺寸的屏幕上有不同的取值，那问题就解决了

# rem
- **root em** 指的是 root element 的 font-size
- 只要根据不同的设备尺寸，设置不同的根元素的 font-size 问题就解决了

# 方案
## 1. 设置 viewport 为设备宽度
```css
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
```

## 2. 写 css 时候遇到要适配的地方（ margin, width ），使用 rem 而不是 px
- 为了方便起见，可以设置根元素的 font-size 为十分之一的当前宽度，然后再按比例计算应该的 rem 大小
- 如果设计稿1000px，我们的 img 10px，那么 img 的 width 就应设成 0.1 rem（因为一个 rem 是 100px）

```javascript
//create <style> tag
let styleElement = document.createElement('style'); 

//get root element font size
let remSize = document.documentElement.clientWidth / 10;

//insert css rule
styleElement.innerHTML = `html { font-size: ${remSize}px; }`;

//add to head
document.documentElement.firstElementChild.append(styleElement);
```
# 关于像素
[todo]

# Ref
- [https://segmentfault.com/a/1190000004524243](https://segmentfault.com/a/1190000004524243) 
- [一篇真正教会你开发移动端页面的文章(一)](http://hcysun.me/2015/10/16/%E4%B8%80%E7%AF%87%E7%9C%9F%E6%AD%A3%E6%95%99%E4%BC%9A%E4%BD%A0%E5%BC%80%E5%8F%91%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%A1%B5%E9%9D%A2%E7%9A%84%E6%96%87%E7%AB%A0(%E4%B8%80)/)