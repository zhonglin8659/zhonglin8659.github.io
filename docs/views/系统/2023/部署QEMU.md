---
title: Qemu虚拟机 
date: 2023-10-25
sidebar: auto
tags: 
 - 虚拟化
categories:
 - 系统
---

## Centos7.9编译安装QEMU2.0

### 下载qemu源码

下载地址：`https://download.qemu.org/qemu-2.0.0.tar.xz`

![image-20231021100740403](https://sugarys.oss-cn-beijing.aliyuncs.com/document/qemu/image-20231021100740403.png)

### 解压到Linux服务器

```shell
tar xvJf qemu-2.0.0.tar.xz
```

![image-20231021101101629](https://sugarys.oss-cn-beijing.aliyuncs.com/document/qemu/image-20231021101101629.png)

### 安装编译依赖环境

```shell
yum install -y glib2
yum install -y glib2-devel
yum install -y autoconf
yum install -y automake
yum install -y libtool
```

### 编译qemu源代码

```shell
./configure --enable-kvm
```

```shell
make -j4
```

```shell
make install
```

![image-20231021114919743](https://sugarys.oss-cn-beijing.aliyuncs.com/document/qemu/image-20231021114919743.png)

## Fedora38编译安装QEMU6.2.0

### 下载qemu源码

下载地址：`https://download.qemu.org/qemu-6.2.0.tar.xz`

### 解压到Linux服务器

```shell
tar xvJf qemu-6.2.0.tar.xz
```

### 安装编译依赖环境

```shell
yum install -y ninja-build
yum install -y glib2
yum install -y glib2-devel
yum install -y pixman
yum install -y pixman-devel
```

### 编译qemu源代码

```shell
./configure --enable-kvm
```

```shell
make -j4 
```

```shell
make install
```