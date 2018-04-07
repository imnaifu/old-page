## 对象的属性（Porperty）不仅仅是有一个value而已，背后有更多的东西，
比如用来表示这个属性是否可以重写，是否需要在枚举的时候出现。
```javascript
// 比如我们有个Object c
const c = {
	a: 1
}

console.log(c.a); // 1
//这里其实拿的是a的value
//其实a还有别的flag

const flags = Object.getOwnPropertyDescriptor(c, 'a');
console.log(flags);

//result below
/**
{
	value:1,
	writable: true,
	enumerable: true,
	configrable: true
}		
**/
```
每个对象的属性有
- value: 值
- writable: 该值可否更改
- enumerable: true 可以被list出来 (for ... in)
- configrable: false 不可以被defineProperty更改或者删除

## 比如Math.PI就是个永久只读的属性
```javascript
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);
/*
{
	"value": 3.141592653589793,
	"writable": false,
	"enumerable": false,
	"configurable": false
}
*/
```

# Ref
- [https://javascript.info/property-descriptors](https://javascript.info/property-descriptors)