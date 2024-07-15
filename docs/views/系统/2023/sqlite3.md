---
title: 安装Sqlite 
date: 2023-12-05
sidebar: auto
tags: 
 - 数据库
categories:
 - 系统
---

## Linux安装sqlite3

### 下载sqlite源码

访问sqlite官网 https://www.sqlite.org/index.html 点击download选择tar.gz格式下载，或通过以下命令下载

```shell
wget https://www.sqlite.org/2023/sqlite-autoconf-3440200.tar.gz
```

![image-20231205151655588](https://sugarys.oss-cn-beijing.aliyuncs.com/document/sqlite/image-20231205151655588.png)

### 解压sqlite源码并进入目录

```shell
tar -zxf sqlite-autoconf-3440200.tar.gz
cd sqlite-autoconf-3440200
```

![image-20231205152023920](https://sugarys.oss-cn-beijing.aliyuncs.com/document/sqlite/image-20231205152023920.png)

### 编译安装sqlite3

执行编译环境检查

```shell
./configure
```

查看系统线程数

```shell
nproc
```

编译sqlite源码 4线程编译

```shell
make -j4
```

编译sqlite源码 根据设备最大线程数编译

```shell
make -j $(nproc)
```

安装编译完的可执行程序

```shell
make install
```

查看是否安装成功

```shell
sqlite3 -version
```

### 安装结果

![image-20231205153947537](https://sugarys.oss-cn-beijing.aliyuncs.com/document/sqlite/image-20231205153947537.png)