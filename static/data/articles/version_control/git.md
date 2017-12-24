# 来来来，教你一些git的基本用法
唉，头昏眼花，生病了依然坚持更新博客，为我点赞哈哈哈
平常不怎么常用git,今天有空简单梳理下

# 首先，神马是Git
版本管理工具，和svn一样，更好用，因为有branch这个东西

# 区分开git和github
git是你的版本管理工具，github只是个别人提供给你的可用来储存的仓库

# 简介
git的基本用法和svn很像，也很简单，拿下来就用clone，提交就用commit，
status看看本地是不是最新，log查看log。

# 重点
## 1.Staging area
Unlike svn，git有一个叫staging area的东西，就像我们常用的staging server一样，多了一层，虽然麻烦点，可是更可靠。
svn的话，你做了changes，看下diff，OK的话就commit。git不一样，多一步。
你做了changes，需要用git add把它加到staging区域，然后再把stagin区域的提交，多了一步来保证你确实是想提交这个的。

## 2.branch
T_T我真的好想用git就是因为这个branch啊，麻蛋，公司用svn。
开发到一半，来了个bug，呵呵那就爽了。
如果有branch多好啊，就可以新建branch开发新功能。如果有bug，就直接在master改，最后再merge就好。
Oh，还没说branch是啥。就叫分支，相当于你的每个主版本其实是一条线，开发新功能时，可以创建一条分支，随意开发而不影响主版本。
最后如果测试完了，就可以merge到主版本。多人开发时尤其好用。

## 3.版本回退
我一直都搞不明白，无论是svn还是git，口口声声说自己是版本管理工具，但实际上，回退的时候，都挺麻烦的。
git有三种，对应不同情况
1. checkout
    - 其实这不能算是回退，因为根本没有回退
    - 比如你想查看一个过去的版本 `git checkout version-number`，会让你的本地更新。
    - 回去的话用 `git checkout master`，回到master
    - 整个完整的commit history其实都还在，只是本地回退到某个版本

2. revert
    - undo a particular commit
    - 这个功能相当于是去掉某一次commit的东西
    - not dangrous因为不会删除historty，而是重新commit一次，并且这一次commit的内容就是revert

3. reset
    - back to a old version (dangerous coz really delete the commit history)
    - 这个很危险，因为这个是真正意义上的回退 -- 回退到某一个版本，并且那个版本之后的都删掉了
    - 直接用的话，本地的还在，但是可以使用 `--hard`，这样本地也会回退到那个版本（贼危险，啥都没了）

## 4.和github有关的操作
- `git remote`
    - 以前一直不清楚这个到底哪来干嘛的，现在总算明白了，这特么就是相当于一个设置
    - `git remote add orginin https://ur.remote.addr.com/` 相当于给你的远程仓库命名为origin
    这样每次push就可以直接 `git push origin master` 这样，不用每次都输入你的远程仓库的地址

- 关于多人协同
    - 基本流程是，create branch，
    - keep urself updated with the master branch
    - after finish developing, commit and pull request
    - then after confirm, ur development will be in the master branch

- 参与open sourece project
    - fork first
    - developing and commit and push to master
    - then pull request






# 常用 command
- **git --version**: 看似查看版本，实则用来检查git是否正确安装，哈哈哈
- **git config --global user.name ur-name**: 设置你的用户名，全局的，还可以设置邮箱

- **git init**: create .git/  
- **git clone**: 
    - get from remote
    - ssh, https ... many protocal supported
- **git add** != svn add
    - The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. 
    - **The git add command should not be confused with svn add, which adds a file to the repository.** Instead, git add works on the more abstract level of changes. This means that **git add needs to be called every time you alter a file**, whereas **svn add only needs to be called once for each file**. It may sound redundant, but this workflow makes it much easier to keep a project organized.

- **git commit** != svn commit
    - `git commit -m 'message here'`
    - commit to your working area
    - The git commit command commits the staged snapshot to the project history.
    - While they share the same name, this command is nothing like svn commit. Snapshots are committed to the local repository, and this requires absolutely no interaction with other Git repositories.

- **git push** = svn commit 
    - push to public

- **git status** = svn status
    - The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven’t, and which files aren’t being tracked by Git.
    - 3 tpye of files
        - untracked files
        - not staged
        - to be committed
    
- **git log** = svn log
    - check commit history
    
- **git checkout**
    - switch branches
    - git checkout works hand-in-hand with git branch. When you want to start a new feature, you create a branch with git branch, then check it out with git checkout. You can work on multiple features in a single repository by switching between them with git checkout.
- **git branch**
    - create braches

- git revert 
- **git reset** 
    - can be used to unstage the staging file
    - reset the commit can delete that commit (dangerous)
- git clean
    - The git clean command removes untracked files from your working directory.
- **git remote**
    - 为了便于管理，Git要求每个远程主机都必须指定一个主机名
    - mange remote git server
    - `git remote -v`: check remote server
- git fetch
    - fetch from remote repository but bot merge
    - actually, `git pull` = `git fetch` & `git merge`

- **git pull** = svn udpate:
    - `git pull origin master` 
    - pull repository to your working area
- git diff ~= svn diff




## Refernce
- [https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR](https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)