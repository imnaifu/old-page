# 基本类型的复制💩
我们都知道，js里面有数据有两种类型（至少目前是这样- -）
- Primitive type
- Reference type  
其中reference type inlcudes `function`, `object`, `array`，剩下的都是primitive type
Then，Pritive type 是按值传递的所以
```javascript
let a = '123';
let b = a;
b = '234';
console.log(a); //123
console.log(b); //234
```
当复制的时候，改变新的不会影响旧的，包含string, boolean, number ...

# 引用类型的复制
由于是pass by reference，所以当copy array/obejct的时候，其实没有创建新的，大家都指向旧的，所以改变一个，全都改变。
于是就需要有能够像复制基本类型那样的方法。

# Array的复制方法
```javascript
//Array.prototype.slice()
const new = old.slice();

//Array.prototype.concat()
const new = [].concat(old);

//Spread Operator
const new = [...old];

//Array.from()
const new = Array.from(old);
```

# Object的复制方法
```javascript
//Object.assign()
//浅复制，第一个参数是初始值，从第二个参数开始，
//依次取出其中的key-value，然后加在初始值里面（会覆盖）
const a = { name:'berry', age:'26' }
const b = Object.assign({}, old, { age:'27' });
//b = { name:'berry', age:'27'}

//JSON.parse(JSON.stringify(your_object))
//poor man's deep copy
const new = JSON.parse(JSON.stringify(old));
```

# _有个叫loadash的包很好用，提供了复制的方法
- _.cloneDeep()