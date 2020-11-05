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


>猜测：
onMenuShareTimeline 和 onMenuShareAppMessage   电脑端测试没问题手机有问题

updateTimelineShareData 和 updateAppMessageShareData 手机没问题电脑有问题




第一版是"."   还是原来的用的 onMenuShareTimeline 和 onMenuShareAppMessage
第二版是"。"	  onMenuShareTimeline 和 onMenuShareAppMessage改成 updateTimelineShareData 和 updateAppMessageShareData

第三版  "~"   url:location.href.split('#')[0]     link: location.href.split('?')[0]

第四版 "-"  url:"http://yinglie.chinamartyrs.gov.cn/930h5"  link: "yinglie.chinamartyrs.gov.cn/930h5"

第五版 "邀您一起悉心擦拭烈士纪念-碑"  还是原来的用的 onMenuShareTimeline 和 onMenuShareAppMessage

第六版 "邀您一起悉心擦拭烈士纪-念碑"  link: "http://yinglie.chinamartyrs.gov.cn/930h5"

第七版 "邀您一起悉心擦拭烈士-纪念碑"  link: "http://yinglie.chinamartyrs.gov.cn/930h5/#/930h5"
onMenuShareTimeline 和 onMenuShareAppMessage改成 updateTimelineShareData 和 updateAppMessageShareData

第八版 "邀您一起悉心擦拭烈-士纪念碑"  url:location.href.split('#')[0]  link: "yinglie.chinamartyrs.gov.cn/930h5"  还是原来的用的 onMenuShareTimeline 和 onMenuShareAppMessage


第9版 "邀您一起悉心擦拭-烈士纪念碑"  onMenuShareTimeline 和 onMenuShareAppMessage改成 updateTimelineShareData 和 updateAppMessageShareData


10   "邀您一起悉心擦拭-烈士纪念碑"     jsApiList: [
										'updateTimelineShareData',
										'updateAppMessageShareData',]添加了这俩	
										
										url:location.href.split('#')[0]     
										link: location.href.split('#')[0]
										
										console.log(1234);
										
11   "邀您一起悉心擦拭-烈士纪念碑"      
										link: "http://yinglie.chinamartyrs.gov.cn/930h5/#/930h5"
										
										console.log(12345);
										
12   "邀您一起悉心擦-拭烈士纪念碑"      
										link: "yinglie.chinamartyrs.gov.cn/930h5"
										还是原来的用的 onMenuShareTimeline 和 onMenuShareAppMessage
										console.log(123456);
										
										
13    '邀您一起悉心-擦拭烈士纪念碑'       imgUrl: '', // 分享图标 
										console.log(1234567);


14 		'邀您一起-悉心擦拭烈士纪念碑'    




最后得出的结论：还是连接的问题，其他都配置好了


url:location.href.split('#')[0]
link: "yinglie.chinamartyrs.gov.cn/930h5"

url:location.href.split('#')[0]
link: "http://yinglie.chinamartyrs.gov.cn/930h5?&"

url:location.href.split('#')[0]
link: location.href.split('?')[0]




### vue微信分享出现的问题
>1.分享的连接的地址是否正确，网上都说不加 "http://" ,其实应该加上
>2.使用分享需要安装  "weixin-js-sdk" 

>然后引入 import wx from 'weixin-js-sdk'   
```js
wx.config({})  //初始化 
wx.ready(function(){ //加载分享时接收的参数
	wx.onMenuShareTimeline({})  
	wx.onMenuShareAppMessage({})
	//使用了一下新的函数一直有问题，无法正常分享信息，
	'updateTimelineShareData',
	'updateAppMessageShareData'
	//经常遇到的问题是这里的函数和分享的连接的问题
})
```









### 安装d2-admin时遇到的问题
