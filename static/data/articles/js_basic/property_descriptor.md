Porperty不仅仅是有一个value而已，背后有更多的东西

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

- value: 值
- writable: 该值可否更改
- enumerable: true 可以被list出来 (for ... in)
- configrable: false 不可以被defineProperty更改或者删除

```javascript
//Math.PI is a permenant read-only property

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