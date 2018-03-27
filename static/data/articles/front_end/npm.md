一直在使用，但是好像还没有系统的学过，现在有机会整理一下。
总之，这是一个包管理工具，像PHP的composer一样。

# 这里既然要将包管理了，那就顺便写一下版本号的故事
- x.y.z 语义化版本号（Semantic Versioning)
- x -> major version (will break the existing API)
- y -> minor version (new feature but backward-compatible)
- z -> patch (fix bug)
```
	"dependencies": {
		"underscore": "^1.8.2"
	}
	//这里caret(^)表示npm会安装当前大版本的最新版本(highest version below 2.0.0) 
```

# install
装node.js会自带NPM，这点挺好的，用了这个才发现，PHP不进行包管理，简直是一团乱。

# install package
- `npm install`
- 包可以安装在两个地方，global / local，globally install using `-g`
- globally installed package 可以直接在cmd使用
- `npm install {packageName} --save-dev`，只用作开发环境
- `npm install underscore@1.8.2`，安装1.8.2版本

# list package
- `npm list` 
- `npm list --depth=0`，其中depth=0表示只展示最外层的包，因为包有依赖

# create package
- `npm init`，创建package.json
- `npm init --y`，其中--y表示全部默认选yes

# update package
- `npm outdated`，查看过期的，依次为当前版本，可用最新版本（不会break），最新版本
- `npm update {packageName}`，更新

# search package
- `npm search {packageName}`，查找关键字

# package.json & package-lock.json
- package.json是初始化的时候就生成的，里面有你的应用的依赖信息，但是有个小问题就是很多包的安装版本
是有caret(^)的，这就意味着，两个主机使用同一个package.json的时候，却安装了不同的版本（因为安装时间不同，'^'会拿最新的版本）。
为了解决这个问题，我们有了package-lock.json。
- package-lock.json
	- 当package.json改变的时候改变
	- 是需要上传到版本控制工具的
	- npm install的时候会按照lock文件里面的具体版本安装，从而解决了上面不同主机包版本不同的问题

# npm script
## What is it?
在package.json里面，可以使用scripts存放脚本命令
```json
{
	"scripts":{
		"start": "node build.js",
		"build": "node start.js"
	}
}
```

然后使用`npm run {script}`来运行，`npm run`可以查看。
- 方便提供统一的接口
- 方便集中管理

## 原理
每次执行时，会新建一个shell来运行，重要的一点是会将`node_modules/.bin`这个目录加入到PATH，运行结束后再恢复。
意味着，这个目录下的脚本可以直接使用，不用加路径。

## 执行顺序
- '&' 可用于多个脚本并发执行
- '&&' 可用于多个脚本按顺序依次执行


# Ref
- [http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
- [https://www.sitepoint.com/beginners-guide-node-package-manager/](https://www.sitepoint.com/beginners-guide-node-package-manager/)