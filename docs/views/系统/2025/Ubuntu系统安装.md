---
title: ubuntu服务器版安装 
date: 2025-05-29
sidebar: auto
tags: 
 - Linux
categories:
 - 系统
---

# ubuntu服务器版安装

## 系统语言选择

![image-20250529174537660](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529174537660.png)

![image-20250529174621991](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529174621991.png)

`提示有新程序发布，这里选择不更新继续安装`

![image-20250529174752719](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529174752719.png)

`键盘配置：默认即可`

## 系统版本选择

![image-20250529174854048](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529174854048.png)

`这里可选择标准安装与最小化安装，默认我们选择标准安装即可`

## 配置系统网络

![image-20250529175139778](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529175139778.png)

`这里默认是自动获取IP地址，在网络架设体系中，通常需要手动配置，这里选择ens33进行配置`

![image-20250529175330691](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529175330691.png)

`选择编辑IPV4地址`

![image-20250529175427373](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529175427373.png)

`选择使用手动配置（Manual）`

![image-20250529180117368](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529180117368.png)

`Subnet：子网、Address：本机IP地址、Gateway：网关、Name Servers：DNS解析地址、Search domains：补全地址一般不填写`

![image-20250529180403331](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529180403331.png)

`代理地址，默认不需要填写`

## 系统磁盘分区

![image-20250529180517157](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529180517157.png)

![image-20250529180816914](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529180816914.png)

`在系统架设过程中，一般都需要手动分盘分区，这里我们选择Custom storage layout`

![image-20250529181355174](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529181355174.png)

`需要创建4个分区 引导分区：BIOS grup spacer`

![image-20250529181634693](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529181634693.png)

![image-20250529181703655](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529181703655.png)

`创建boot分区 分区大小1GB`

![image-20250529181824731](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529181824731.png)

`创建home分区 分区大小12GB`

![image-20250529181956791](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529181956791.png)

`创建swap交换空间分区 分区大小2GB`

![image-20250529182059112](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529182059112.png)

`创建/分区 分区大小为剩余所有空间`

![image-20250529182204829](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529182204829.png)

![image-20250529182226605](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529182226605.png)

## 配置用户信息

![image-20250529182311642](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529182311642.png)

![image-20250529182406493](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529182406493.png)

## 基础软件安装

![image-20250529182506559](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529182506559.png)

`勾选ssh服务 便于后续操作`

![image-20250529182605178](https://sugarys.oss-cn-beijing.aliyuncs.com/document/ubuntu/image-20250529182605178.png)

`等待安装完成即可`