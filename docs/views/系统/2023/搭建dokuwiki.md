---
title: Dokuwiki部署 
date: 2023-12-11
sidebar: auto
tags: 
 - 知识库
categories:
 - 系统
---

## 部署Apache

### 编译libpcre库

下载源码 https://www.pcre.org/ 并解压编译

```shell
tar -zxf pcre-8.43.tar.gz
cd pcre-8.43/
ls -l
```

![image-20231208131443454](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231208131443454.png)

```shell
./configure
make
make install
pcre-config --version
```

![image-20231208131823591](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231208131823591.png)

### 编译libzlib库

下载源码 http://www.zlib.net/ 并解压编译

```shell
tar -zxf zlib-1.3.tar.gz
cd zlib-1.3/
ls -l
```

![image-20231208132619617](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231208132619617.png)

```shell
./configure
make
make install
```

查看是否安装成功

```shell
find /usr/ -name zlib.pc
```

根据返回的zlib.pc文件路径查找版本

```shell
cat /usr/local/lib/pkgconfig/zlib.pc
```

![image-20231208134128230](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231208134128230.png)

### 编译oepnssl库

`一般系统默认会自带openssl 在没有的情况下请参照此教程`

下载源码 https://www.openssl.org/ 并解压编译

```shell
tar -zxf openssl-3.0.12.tar.gz
cd openssl-3.0.12/
ls -l
```

![image-20231208140925404](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231208140925404.png)

编译文件生成到/mnt/opensslib/openssl目录

```shell
./config --prefix=/mnt/opensslib/openssl
make -j4
make install
```

正常情况下切换到/mnt/opensslib/openssl目录，使用openssl version可以输出版本号

```shell
cd /mnt/opensslib/openssl/bin
./openssl version
```

![image-20231211135304115](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231211135304115.png)

可能会遇到如下错误：

![image-20231211135406046](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231211135406046.png)

解决办法：

查找编译后的`libcrypto.so.3`

```
find / -name libcrypto.so.3
```

在返回的路径中找到新编译的`libcrypto.so.3 `并拷贝到 `/usr/lib/x86_64-linux-gnu/`目录中

```shell
cp /mnt/openssllib/openssl/lib64/libcrypto.so.3 /usr/lib/x86_64-linux-gnu/
```

此时ssh会断开连接，属于正常现象，重连即可

```shell
./openssl version
```

能够输出版本即可

### 编译expat库

下载源码 https://sourceforge.net/projects/expat/files/ 并解压编译

```shell
tar -zxf expat-2.4.8-RENAMED-VULNERABLE-PLEASE-USE-2.5.0-INSTEAD.tar.gz
cd expat-2.4.8/
```

![image-20231211174137221](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231211174137221.png)

```shell
./configure
make -j4
make install
```

查看是否安装成功

```shell
expr --version
```

![image-20231211174501715](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231211174501715.png)

### 编译apr库

下载源码 http://archive.apache.org/dist/apr/ 并解压编译

```shell
tar -zxf apr-1.6.5.tar.gz
cd apr-1.6.5/
```

![image-20231211152702312](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231211152702312.png)

编译到/mnt/libraries/apr目录

```shell
./configure --prefix=/mnt/libraries/apr
make -j4
make install
```

查看是否安装成功

```shell
cd /mnt/libraries/apr/bin
./apr-1-config --version
```

![image-20231211153735027](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231211153735027.png)

### 编译apr-util库

下载源码 https://dist.apache.org/repos/dist/release/apr/ 并解压编译

```shell
tar -zxf apr-util-1.6.3.tar.gz
cd apr-util-1.6.3/
```

![image-20231211170934926](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231211170934926.png)

1. 编译到/mnt/libraries/apr-util目录
2. 指定编译所依赖的库文件路径

```shell
./configure --prefix=/mnt/libraries/apr-util --with-apr=/mnt/libraries/apr
make -j4
make install
```

查看是否安装成功

```shell
cd /mnt/libraries/apr-util/bin
./apu-1-config --version
```

![image-20231211174807920](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231211174807920.png)

### 编译Apache

下载源码 https://httpd.apache.org/download.cgi 并解压编译

```shell
tar -zxf httpd-2.4.58.tar.gz
cd httpd-2.4.58/
```

![image-20231211175951965](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231211175951965.png)

创建Apaches工作目录

```shell
mkdir -p /mnt/apaches
```

开始编译

```shell
./configure --prefix=/mnt/apache2  \
      --enable-defalte --enable-expires \
      --enable-headers --enable-modules=most \
      --enable-so --with-mpm=worker \
      --enable-rewrite --with-apr=/mnt/libraries/apr \
      --with-apr-util=/mnt/libraries/apr-util \
      --with-pcre --with-zlib
```

```shell
make -j4
```

```shell
make install
```

启动服务

```shell
cd /mnt/apache2/bin
./apachectl start
```

验证是否安装成功

访问IP 出现如下内容及成功

![image-20231211183035780](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231211183035780.png)

## 部署Php

### 编译libxml2

下载源码

```shell
wget ftp://xmlsoft.org/libxml2/libxml2-2.9.12.tar.gz
tar -zxf libxml2-2.9.12.tar.gz
cd libxml2-2.9.12/
```

![image-20231214175803578](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231214175803578.png)

```shell
./configure
make -j4
make install
```

### 编译php

下载源码 https://www.php.net/ 并解压编译

```shell
tar -zxf php-7.3.29.tar.gz
cd php-7.3.29/
```

![image-20231214173910027](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231214173910027.png)

```shell
./configure --prefix=/usr/local/php --with-apxs2=/usr/apache2/bin/apxs
make -j4
make install
```

查看是否安装成功

```shell
cd /usr/local/php/bin
./php -version
```

![image-20231214182209192](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231214182209192.png)

查看apache是否成功添加php解析模块

```shell
cd /usr/apache2/modules
```

![image-20231214182336949](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231214182336949.png)

## 部署dokuwiki

下载dokuwiki https://www.dokuwiki.org/dokuwiki 并解压

```shell
tar -zxf dokuwiki-a6b3119b5d16cfdee29a855275c5759f.tgz
mv dokuwiki wiki
mv wiki/ /usr/apache2/htdocs
```

编辑配置文件

```shell
vim /usr/apache2/conf/httpd.conf
```

IfModule dir_module处添加index.php

```conf
<IfModule dir_module>
    DirectoryIndex index.html index.php
</IfModule>
```

IfModule mime_module处添加AddType application/x-httpd-php .php

```
<IfModule mime_module>
    TypesConfig conf/mime.types
    AddType application/x-compress .Z
    AddType application/x-gzip .gz .tgz
    AddType application/x-httpd-php .php
</IfModule>
```

重启 apache服务

```shell
./apachectl restart
```

访问apache发布dokuwiki服务地址

![image-20231214184409923](https://sugarys.oss-cn-beijing.aliyuncs.com/document/dokuwiki/image-20231214184409923.png)

进入该界面即成功部署dokuwiki