# 基本概念
## 本地与远程
受 svn 毒害太深，一致认为 remote 是必须的一部分，其实不然，其实如果不是为了多人合作，remote 其实并不需要，因为 git 本身也只是一个版本管理工具而已。
所以应该把本地操作与 remote 操作分开来。

- A "local" repository resides on your local computer, as a ".git" folder inside your project's root folder. 
You are the only person that can work with this repository, by committing changes to it.
- A "remote" repository, in contrast, is typically located on a remote server on the internet or in your local network. 
No actual working files are associated with a remote repository: it has no working directory but it exclusively consists of the ".git" repository folder. Teams are using remote repositories to share & exchange data: they serve as a common base where everybody can publish 
their own changes and receive changes from their teammates.

## 三大块
1. Working directory 工作区
2. Staging directory 暂存区
3. Repository 仓库
 
## 都是 commit
- git 里面其实本质就是保存了一堆 commit，而每一个 commit 的本质其实就是一个 diff。
- 每一个 commit 可以通过一个特定的 SHA-1 校验和来指代 `78bb0ab7d541…16b77`（其实前几位也行）
- 为了方便访问，可以通过字符串指代，`HEAD` 指的是当前 commit 的引用（就是当前工作目录对应的 commit）

## 指针们（引用）
- HEAD
- branchName

## 特殊标记符
- ^：之前的 commit
	- HEAD^^：表示倒数第三个 commit
- ～number：之前的 commit
	- HEAD～2：表示倒数第三个 commit

## branch 本质
分支其实本质上只是一个 commit 的引用，如果这样不好理解，可以理解为从起点到 branch 所指向的 commit 的一系列的 commit。
怎么理解 banch 其实只是个引用？因为你可以 checkout 一个 branch，也可以 checkout 一个 commit

## reset 本质
- 移动 HEAD 以及它所指向的 branch
- 参数
	- `--mixed`(default)：将重置带来的改变和暂存区，mixed 混合一起放入工作区（常用）
	- `--hard`：清空工作区和暂存区（常用）
	- `--soft`：将重置带来的改变打入暂存区（较少用）

因为 `--hard` 会清空所有，所以使用 `git reset --hard HEAD` 相当于把 HEAD 和当前 branch 指向 HEAD（which means nothing changed)，
然后同时清空工作区和暂存区。但同时，其实也可以用 `git reset --hard HEAD^` 相当于把 branch 指向 HEAD 的前一个 commit，
同时也清空了工作区和暂存区，这就是用 reset 回退的原理。实际进行回退操作的话，最好先不加 `--hard` 参数，这样修改还保存在工作区，可以进一步操作。
 
## checkout 本质
把 HEAD 移动到指定的 commit/branch，然后签出（checkout）这个 commit 对应的工作目录。
与 reset 不同的是，checkout 不带着 branch 一起移动，而是只移动 HEAD。

## push 的本质
了解了 branch 的本质后，其实 push 的本质就是把 branch 指向的 commit 上传到远端，并把它的路径上的 commit 一并上传

## merge 的本质
从目标 commit 和当前 commit(HEAD) 分叉的位置算起，把目标 commit 的路径上的所有 commit 内容一并应用到当前 commit，然后自动生成一个新的 commit

## add 的本质
add 将文件的修改添加进暂存区，添加的是‘文件的修改’，而不是文件本身。所以如果我们现在有一个 untracked 的文件，将文件用 git add 添加过后，
如果对文件进行修改，修改是不会进入暂存区的。

# 操作
## merge 产生冲突，放弃 merge
git merge --abort

## revert 撤销修改
因为其实 commit 本身只是个修改，所以回退有一种选择就是只要进行一个逆操作就行了。
就像你把一个单位矩阵进行了一系列操作，那么只要按顺序一步一步进行与之对应的逆操作，那么你就又得到了那个单位矩阵。

## stash
`git stash --include-untracked` 未添加的也会一起 stash，不过还是先 add 再 stash 保险一点

## 查看历史
- git log
	- `git log -p` 查看详细历史（包含具体的修改）
	- `git log --stat` 查看简要历史（只包含哪个文件进行了改动）
- git show
	- `git show [commit]` 查看具体某一个 commit
- git reflog
	- `git reflog [HEAD/branch]` 查看引用的移动历史（默认是HEAD)
	- HEAD，分支其实本质是引用，所以引用的指向发生变化的时候会被记录

## 查看 diff
- `git diff` 对比工作区与暂存区
- `git diff --staged` 对比暂存区与 HEAD
- `git diff [commit]` 对比工作区和某一个 commit

# git gc (garbage collection)
- Git 会不定时地自动运行一个叫做 “auto gc” 的命令
- 不被引用直接或间接指向的 commits，在一段时间后会被 git 回收。

# 骚操作
- git rebase（变基）/ git rebase -i（交互式变基）
- git commit --amend：不会增加新的 commit，而是替换原有的 commit

# 个人感想
1. git 入门容易，理解本质难
2. git 的最佳实践是，高频率的提交有意义的 commit




