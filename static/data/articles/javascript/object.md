# Object 
## Object.prototype.toString() 
- return a string representation of object
- 可以重写，覆盖

```javascript
let num = 15;
let arr = ['a', 'b', 'c'];
let str = 'abc';
console.log(num.toString()); //"15"
console.log(arr.toString()); //"a,b,c"
console.log(str.toString()); //"abc"

//rewrite
function Dog(name, color){
    this.name = name;
    this.color = color;
}

Dog.prototype.toString = function(){
    let ret = "Dog - " + this.name + this.color; 
    return ret;
}
```


# Array
## Array.isArray()
- return true if the object is an array, otherwise false

```javascript
Array.isArray([1,2]); //true
Array.isArray('1,2'); //false
```

## Array.prototype.pop()
- return and **remove** last element of array
- 后出

```javascript
let a = [1,2,3];
let b = a.pop();
console.log(a); //[1,2]
console.log(b); //3
```

## Array.prototype.push()
- return the new length, **add** a new element to an array in the end
- 后入

```javascript
let a = [1,2,3];
console.log(a.push(4,5)); //[1,2,3,4,5]
```

## Array.prototype.shift()
- return and **remove** the first element of array, all other element are shifted to lower index
- 前出

```javascript
let a = [1,2,3];
let b = a.shift();
console.log(a) //[2,3]
console.log(b); //1
```

## Array.prototype.unshift()
- return the new length, **add** a new element to an array at the beginning, and unshift older elements
- 前入

```javascript
let a = [1,2,3];
console.log(a.unshift(4,5)) //[4, 5, 1, 2, 3]
```

## Array.prototype.concat()
- return new array after concat
- 拼接

```javascript
let a = [1,2,3];
let b = [4,5,6];
console.log(a.concat(b));
```

# Number
## Number.protype.toFixed([digits])
- return a string fixed to a specific number of decimals, default 0

```javascript
let num = 12.36;
console.log(num.toFixed(1)); //12.4
```

## Number.prototype.toPrecision([precision])
- return a string fixed to a specific number of length
- 保留几位效数字

```javascript
let num1 = 1.25;
let num2 = 0.03;

console.log(num1.toPrecision(2)); //1.3
console.log(num2.toPrecision(2)); //0.030
```


# String
## String.prototype.search(regexp)
- return **index** of first regex match of the string, if not found then -1
- 正则匹配

## String.prototype.slice(start, [end])
- return new string from(include) start to(not include) end
- if omit end, will all the way to the end  
- 切片

```javascript
let str = '012345';
let str1 = str.slice(1, 4);// '123'
let str2 = str.slice(1); //'12345'
```

## String.prototype.replace(regex|substr, newstr|function)
- return new string with some or all replaced
- 正则匹配替换

## String.prototype.split([separator], [limit])
- return array of strings split at each separator point
- if separator is '', then separate all character
- 字符串拆分

```javascript
let str = '12,34,56';
let arr1 = str.split(','); //['12', '34', '56'];
let arr2 = str.split(); //['12,34,56'];
let arr3 = str.split(''); //['1','2',',','3','4',',','5','6']
let arr4 = str.split(',', 2) //['12','34']
```

# Date
不像PHP可以用date object或者直接用date的一系列function。
js必须用Date object，挺好的其实，统一了，有益于大家相互看得懂。

## 创建object
```javascript
let currentDateTime = new Date(); //current time
let jan_02_1970 = new Date(24*3600*100); // jan 1st, 1970
let dateTime = new Date('2017-01-05 12:32:24'); 2017 jan 5th, 12:32:24
let dateTime = new Date(year, month [,date, hour, minutes, seconds, ms]); //creation
```

创建的时候大概有上面四种方式。
1. 返回当前时刻
2. 输入Number的时候，返回timestamp，和PHP不同，js用的是毫秒，所以要\*1000
3. 输入为String的时候，自动call Date.parse()函数，输入格式最好为'YYYY-MM-DD HH:ii:ss'
4. 根据一个个参数来确定时间，最少要两个，year和month，year为YYYY，month从0到11

```javascript
//count run time
var start = Date.now(); 
doSomething();
var end = Date.now();
var result = end - start
```

# Boolean

# Function

# Error
- evalError: when using eval()
- rangeError: when 超出范围
- referenceError: 找不到对象
- syntaxError: 语法错误的字符串传入eval()
- typeError: 意外类型 e.g var a = new 10
- URIError: when using encodeURI, decodeURI if uri format not correct

## 常用在 try/catch
```javascript
    customizedError.prototype = new Error() //inherit
    function doSomething(){
        throw new customizedError('msg');
    }
    try {
        doSomething();
    } catch (error){
        if (error instanceof customizedError){
            //fix
        }
    }
```

# Math
- Math.PI
- Math.min(), Math.max()， Math.random()
- Math.ceil(), Math.floor(), Math.round()

# JSON
## 不能实例化，仅仅提供两个函数
- **JSON.stringify()**: 把js对象序列化
```javascript
var jsonText = JSON.stringify(json_text, filter_array_or_function, indentation);
```

- **JSON.parse()**: json字符串解析为原生js value
```javascript	
var jsObject = JSON.parse(json_text, function);
```

# RegExp

# Promise

# 内置对象
- isNaN()
- encodeURI(), encodeURIComponent() 
- decodeURI(), decodeURIComponent()

# Ref 
- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)
- [https://www.ibm.com/developerworks/cn/web/wa-objectsinjs-v1b/index.html](https://www.ibm.com/developerworks/cn/web/wa-objectsinjs-v1b/index.html)