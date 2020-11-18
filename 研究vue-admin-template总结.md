```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局 filter
│   ├── icons                  // 项目所有 svg icons
│   ├── lang                   // 国际化 language
│   ├── mock                   // 项目mock 模拟数据
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── vendor                 // 公用vendor
│   ├── views                   // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   └── permission.js          // 权限管理
├── static                     // 第三方不打包资源
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json

```

### 安装composer慢的问题

>删掉项目目录下的composer.lock文件

>使用阿里的镜像

>然后再执行composer install


### 安装laravel

>执行 composer global require laravel/installer遇到的问题

```cmd
  [InvalidArgumentException]
  Could not find package laravel/installer.

  Did you mean one of these?
      laravel/installer
      codemyviews/vanilla-installer
```

>解决方法：


>~~composer config -g repo.packagist composer https://packagist.phpcomposer.com~~
>> 使用这个镜像不好使

>### 换一个镜像  composer config -g repo.packagist composer https://packagist.org
>> 然后再执行 composer create-project laravel/laravel  project-name --prefer-dist

>>或者使用 Composer 安装 Laravel 安装器 composer global require laravel/installer
>>>使用 laravel new blog 创建一个blog项目
>>>>进入blog目录 执行 php artisan serve 开启服务

- Laravel——导入已有Laravel项目
	- 获取源码：从其它地方下载已有的Laravel项目，发现并没有vender目录。
	- 运行cmd，进入项目目录，用composer安装依赖：composer install
	
>hhxsv5/laravel-s is locked to version v3.7.3 and an update of this package was not requested.
	>>通过 Composer 安装 LaravelS 扩展包 composer require hhxsv5/laravel-s	
	
>Installation failed, reverting ./composer.json and ./composer.lock to their original content.	






### Laravel：php artisan key:generate三种报错解决方案，修改默认PHP版本

`报错1：PHP脚本占用内存太多，memory_limit默认128m不够用。PHP Fatal error: Allowed memory size of XXXXXX bytes exhausted 。Composer命令失败：Composer内部增加memory_limit到1.5G.解决：修改php.ini配置，将memory_limit改的大一些；`

>解决办法：

[解决办法](https://blog.csdn.net/sinat_21902709/article/details/104092210)

cd 到该引用的根目录，删除 composer.lock 文件；

重新在根目录执行“composer install”，这样就能重新生成 composer.lock 文件了。


>PHP Warning:  require(E:\phpstudy_pro\WWW\admin-master\vendor\composer/../laravel/framework/src/Illuminate/Foundation/helpers.php): failed to open stream: No such file or directory in E:\phpstudy_pro\WWW\admin-master\vendor\composer\autoload_real.php on line 71



其实使用git clone 就没有前面的一些问题了


laravel错误1071 Specified key was too long; max key length is 1000 bytes
>Laravel 5.4默认使用utf8mb4字符编码，而不是之前的utf8编码。因此运行php artisan migrate 会出现如下错误



>执行php artisan migrate时出现的问题

Syntax error or access violation: 1071 Specified key was too long; max key length is 1000 bytes (SQL: alter table `users` add unique `users_email_unique`(`email`))

Specified key was too long; max key length is 1000 bytes问题解决

[解决的连接地址](https://www.cnblogs.com/baby123/p/10177409.html)
com.mysql.jdbc.exceptions.jdbc4.MySQLSyntaxErrorException: Specified key was too long; max key length is 1000 bytes

总结了下出错的原因：

　　1.DB engine 是MyIsAm
　　2.字符集是 utf8 ,1个utf8=3bytes
　　3.最后就是 (100+255)*3>1000 所以报错

SHOW ENGINES

查了下解决方案有：修改DB engine 至 innodb；更改字符集；减小字段长度

我采用的解决方案是修改DB engine为innodb

修改mysql配置文件，my.ini下面部分
```shell
default-storage-engine=INNODB #重要的地方
```

无法加载文件 G:\nodejs\node_global\yarn.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsof
t.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
>解决方法：删掉G:\nodejs\node_global\yarn.ps1重新执行yarn


执行 yarn prod 
error Command "prod" not found.




浏览器访问laravel文件夹时页面出现该文件夹下的目录结构？








### 创建新栏目

```shell
 php artisan admin:make-resource admin-types
```



vue的路由文件是   views/pages.js