# 字体相关的一些

## font-family:
**Two types of font-family**  
- generic family
- font family
    - Serif (have small lines at the end of some characters)
        - times new roman
        - georgia
    - Sans-serif ('sans' means without)
        - arial
        - verdana
    - monospace (means same width for each character)
        - courier new
        - lucida console 

- 如果font-family有空格，一定要加quote
```css
p {
    font-family: "Times New Roman", serif
}
```

## font-style:
设置是否斜体
- normal / italic

## font-weight:
设置是否粗体
- normal / bold

## font-size:
default 16px (1em)

## 关于 em & rem (root em)
em&rem都是以基础字体大小为基准而进行比例缩放。
- em用的是parent element的字体大小作为基准
- rem用的是root element（也就是html element）的字体大小作为基准    

## 好看的字体列表:
1. Proxima Nova


## Reference:
- [https://www.w3schools.com/css/css_font.asp](https://www.w3schools.com/css/css_font.asp)
- [https://snook.ca/archives/html_and_css/font-size-with-rem](https://snook.ca/archives/html_and_css/font-size-with-rem)