---
title: Ubuntu交叉编译工具 
date: 2025-08-29
sidebar: auto
tags: 
 - Linux
categories:
 - 运维
---

## Ubuntu安装交叉编译工具

### 下载交叉编译工具

[官方发布地址](https://releases.linaro.org/components/toolchain/binaries/) 可选择任意版本下载

![image-20250829152346638](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250829152346638.png)

> 拷贝到指定位置并解压缩

![image-20250829152625577](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250829152625577.png)

### 添加系统环境变量

通过 `$PATH` 可快捷获取环境变量 将交叉编译工具的 `bin` 路径加入环境变量

```shell
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/usr/local/compilearm/gcc-linaro-6.5-x86_64_arm/bin
```

![image-20250829153113440](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250829153113440.png)

### 验证安装结果

```shell
arm-linux-gnueabihf-gcc -v
```

![image-20250829153249212](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250829153249212.png)