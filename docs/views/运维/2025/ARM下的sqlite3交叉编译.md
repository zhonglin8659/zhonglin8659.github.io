---
title: ARM下的sqlite3交叉编译 
date: 2025-08-29
sidebar: auto
tags: 
 - Linux
categories:
 - 运维
---

## ARM下的sqlite3交叉编译

### 下载sqlite3源码

[官网下载地址](https://sqlite.org/download.html) 选择圈出来的源码版本即可

![image-20250829154505208](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250829154505208.png)

### 下载到服务器并解压

![image-20250829155429312](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250829155429312.png)

### 开始配置交叉编译

```shell
./configure CC=arm-linux-gnueabihf-gcc --host=arm-linux --prefix=/data/sqlite3_arm/
```

CC 指定为交叉编译工具链 arm-linux-gnueabihf-gcc 
HOST 指定运行环境为arm-linux
PREFIX 指定编译生成路径

### 以设备最大线程数编译

```
make -j $(nproc)
make install
```

### 查看编译结果是否为arm平台程序

![image-20250829160349576](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250829160349576.png)