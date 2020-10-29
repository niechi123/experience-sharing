### 通过 npm 使用 React
如果你的系统还不支持 Node.js 及 NPM 可以参考我们的 Node.js 教程。

我们建议在 React 中使用 CommonJS 模块系统，比如 browserify 或 webpack，本教程使用 webpack。

国内使用 npm 速度很慢，你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

```cmd
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
$ npm config set registry https://registry.npm.taobao.org
```


### 使用 create-react-app 快速构建 React 开发环境

create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。

create-react-app 自动创建的项目是基于 Webpack + ES6 。

执行以下命令创建项目：
```cmd
$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start

```



## create-react-app 里使用
#### 安装与初始化
>create-react-app 的安装和初始化请查看 create-react-app 或者查看 antd 的 use-with-create-react-app;

安装完成后，目录结构:

```js
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
│── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── serviceWorker.js

```






## 遇到的问题

>全部配置完后出现的问题

Error: Cannot find module 'babel-plugin-import' from 'E:\GitHub开源项目\my-app'
>所需插件没有安装上

>npm install babel-plugin-import 

>npm install antd

Module not found: Can't resolve 'enquire-js' in 'E:\GitHub开源项目\my-app\src\Home'
>解决  ： npm install enquire-js



npm install rc-banner-anim rc-queue-anim rc-scroll-anim



### react打包后打开是空白页
***在打包之前,在package.json中private下(位置任意)添加"homepage": "./"***

这样在你点击index.html时候路径没有问题不会报错,但是页面可能还是空白的

然后将项目中的引用路由时候的BrowserRouter改为HashRouter,所有用到的地方都要改

然后执行yarn build 或者 npm run build

再点开index.html就不会报错




### 其他网站的页面
>找了又3个样子看着不错的首页，已经保存下来，需要谈论一下看看使用哪个页面，如果选好了，就去把这个网站的其他页面页全部保存下拉




## 研究了下  Ant Design Landing
>可以进入编辑器页面，拖拽完成网站的建设

>使用过后，缺点的话，模块太少，只能搭建简单一些的展示型网站

>拼接完后，点击像 cmd的图标一样的按钮进行下载，下载后的文件夹名称是Home

>直接将从 Landing 上下载的 Home 文件夹直接拷贝到 src 文件包里

### 安装依赖

#### less 加载
```cmd
npm install react-app-rewired customize-cra less less-loader
```

### 配置加载 less

>安装完 less 加载 后， 我们还需要修改 package.json 里的启动配置。

详细的请看 [create-react-app 里使用](https://landing.ant.design/docs/use/create-react-app-cn)

[进入官网](https://landing.ant.design/index-cn)


## Vue和React的优缺点

### Vue的优势包括：
- 模板和渲染函数的弹性选择
- 简单的语法及项目创建
- 更快的渲染速度和更小的体积

### React的优势包括：
- 更适用于大型应用和更好的可测试性
- 同时适用于Web端和原生App
- 更大的生态圈带来的更多支持和工具
- 而实际上，React和Vue都是非常优秀的框架，它们之间的相似之处多过不同之处，并且它们大部分最棒的功能是相通的：
- 利用虚拟DOM实现快速渲染
- 轻量级
- 响应式和组件化
- 服务器端渲染
- 易于集成路由工具，打包工具以及状态管理工具
- 优秀的支持和社区