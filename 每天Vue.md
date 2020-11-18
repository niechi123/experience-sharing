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
1.安装不成功   应该使用 npm i 命令
>[官方文档](https://d2.pub/zh/doc/d2-admin/learn/start.html#%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96)



### 创建项目

>Failed to compile with 1 errors 

`禁止使用空格和tab混合缩进；
大多数代码约定要求使用空格或 tab 进行缩进。因此，一行代码同时混有 tab 缩进和空格缩进，通常是错误的；
做法是删除报错地方的空格，再进行编译，成功通过。`



### Vuex
```js
import { mapGetters } from 'vuex'
```

>mapGetters

Vuex提供了state这样的状态统一管理树,你可以在vue中用computed计算属性接收这些公共状态,以便使用,当然你也可以在接收原值的基础上对这个值做出一些改造

>Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。

>如果不打算开发大型单页应用，应用够简单，最好不要使用 Vuex。一个简单的 store 模式就足够了。但是，如果需要构建一个中大型单页应用，就要考虑如何更好地在组件外部管理状态，Vuex 是不错的选择。




### 路由 Router

>如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能

```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```



>可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中


9.40

>常规参数只会匹配被 / 分隔的 URL 片段中的字符。如果想匹配任意路径，我们可以使用通配符 (*)



>当你点击 <router-link> 时，这个方法会在内部调用，所以说，点击 <router-link :to="..."> 等同于调用 router.push(...)

`router.replace(location, onComplete?, onAbort?)`
`跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。`

