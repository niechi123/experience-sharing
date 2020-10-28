**一、执行ssh -T**
```
ssh -T git@github.com
```
>执行这条语句遇到的问题
>The authenticity of host ‘github.com (192.30.255.113)‘ can‘t be established.

*Are you sure you want to continue connecting (yes/no)? 这个地方记得写上yes，而不是回车*

**二、执行git add**
```
git add .
```
>出现的错误是，自己忘了把 “.”写上，需要写上对应的目录

*记得把指定的目录的名称写上*


**三、执行git commit**
```
git commit -m  "first commit"
```
>执行时出现的提示
On branch master
Initial commit
nothing to commit (create/copy files and use "git add" to track)

*因为仓库里面是空的， 需要把指定的项目放到这个仓库下*



**四、nothing to commit, working tree clean**

```
git commit -m "添加新项目"
```

>执行时出现的提示

On branch master

nothing to commit, working tree clean

>原因：可能已经  git commit -m "" 过一次了，现在直接 执行 git push origin master 就可以了
