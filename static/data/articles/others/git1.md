# 基本概念
## 本地与远程
受 svn 毒害太深，一致认为 remote 是必须的一部分，其实不然，其实如果不是为了多人合作，remote 其实并不需要，因为 git 本身也只是一个版本管理工具而已。
所以应该把本地操作与 remote 操作分开来。
- A "local" repository resides on your local computer, as a ".git" folder inside your project's root folder. 
You are the only person that can work with this repository, by committing changes to it.
- A "remote" repository, in contrast, is typically located on a remote server on the internet or in your local network. 
No actual working files are associated with a remote repository: it has no working directory but it exclusively consists of the ".git" repository folder. Teams are using remote repositories to share & exchange data: they serve as a common base where everybody can publish 
their own changes and receive changes from their teammates.

# 本地操作
## 本地分为
1. Working directory
2. Staging directory
3. Repository

## git init

## git add 

## git rm 

## git commit 

## git checkout
- 

## git branch

# 远程操作

## git push

## git remote