一直觉得js的事件处理部分没有php好用，确实没有PHP方便，但其实也还好。
不就多几行吗！有什么大不了的是吧哈哈哈哈

# Date Object
不像PHP可以用date object或者直接用date的一系列function。
js必须用Date object，挺好的其实，统一了，有益于大家相互看得懂。
下面介绍一些，也不能说常用的，反正对我而言用的到的

## 创建object
```
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

