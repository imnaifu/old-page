其实之前一直想总结下console的一些用法，好像一直懒得弄，看到有一期的Javascript30有讲到，正好顺便梳理下。
不常用的我就懒得写了，反正几乎也用不到。

## - console.log()
Just normal print

## - console.table()
Beautify printing for array or object

## - console.time(), console.timend()
count the time
```
console.time('mark');
//doing something here
console.timeend('mark');
//will print the time count during this period
```

## - console.warn() / console.error() / console.info()
As it said, print a warn / error / info

## - console.clear() / ctrl + L
clear the console ~

## - console.group(), console.groupend()
To group your data and add a fold effect to it
```javascript
console.group();
	console.log(name);
	console.log(id);
console.groupend();
```

## Reference
- [https://github.com/imnaifu/JavaScript30/tree/master/09%20-%20Dev%20Tools%20Domination](https://github.com/imnaifu/JavaScript30/tree/master/09%20-%20Dev%20Tools%20Domination)