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



