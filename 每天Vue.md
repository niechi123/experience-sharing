### 模板语法

>指令 (Directives) 是带有 v- 前缀的特殊 attribute



### 打包后页面空白

>router-view中的内容显示不出来。路由history模式。

这个坑是当你使用了路由之后，在没有后端配合的情况下就手贱打开路由history模式的时候，打包出来的文件也会是一片空白的情况，

>解决 ： 在 router.js 中将 mode: history注释掉




### vue做微信分享


>安装weixin-js-sdk

>问题：updateTimelineShareData:fail, the permission value is offline verifying
	
>翻译: updateTimelineShareData:失败，权限值正在脱机验证


>猜想1：当前页面通过 wx.config 获取到的 JSSDK 权限如下
下面是不是有的权限（函数）才能使用


1.link:分享的连接前面不要加   http://

2.使用 onMenuShareTimeline 和 onMenuShareAppMessage  代替 updateTimelineShareData 和 updateAppMessageShareData

3.打包后如果没有问题在本地也是可以看到内容和标题的

4.传的值的地方url不能直接写成指定的连接地址