# ES6 模块
ES6终于自带mudle，更方便代码拆分

# export
export指的是导出的东西，有两种方式，default & named
每个file可以export一个default和多个named value

- default

```javascript
	//file a.js
	const a = 1;
	export default a;

	//file b.js
	import whateverName from 'a.js';	
	// 如果import没有加{}说明引入的是default

```

- named

```javascript
	//file a.js
	const a = 1;
	const b = 2;
	export {a, b};

	//this one count as named-import also but only apply to function&class
	export function abc(){};

	//file b.js
	import {a, b, c} from 'a.js';
	// import有{}，说明引入的是named value

```

# import 
import指的是引入，可以引入全部，也可以只引入一部分

- import all

```javascript
	//file a.js
	const a = 1;
	const b = 2;
	export {a, b};

	//file b.js
	import * as whatever from 'a.js';
	// import all 的时候，是当作namespace使用的

	whatever.a // => 1
	whatever.b  // => 2

```

- import partial

```javascript
	//file a.js
	const a = 1;
	const b = 2;
	export {a, b}

	//file b.js
	import {a, b} from 'a.js';

	a // => 1
	b // => 2

```

- import default & all & partial

```javascript
	// file a.js
	const a = 1;
	const b = 2;
	export {a, b};
	export default a;


	// file b.js
	import whatever, * as whatever2, {a, b} from 'a.js';
	whatever //=> 1
	whatever2.a //=> 1
	whatever2.b //=> 2
	a //=> 1
	b //=> 2
```