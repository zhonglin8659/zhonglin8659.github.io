---
title: 华为交换机划分Vlan 
date: 2022-12-16
sidebar: auto
tags: 
 - 交换机
categories:
 - 网络
---

## 进入交换机CLI界面

![image-20221216145215657](https://sugarys.oss-cn-beijing.aliyuncs.com/document/exchange/image-20221216145215657.png)

## 进入配置视图

```shell
system-view
```

![image-20221216145321095](https://sugarys.oss-cn-beijing.aliyuncs.com/document/exchange/image-20221216145321095.png)

## 新建一个vlan

```shell
vlan 10
```

![image-20221216145425482](https://sugarys.oss-cn-beijing.aliyuncs.com/document/exchange/image-20221216145425482.png)

`并自动进入vlan配置视图`

### 查看vlan信息

```shell
display vlan
```

![image-20221216145734436](https://sugarys.oss-cn-beijing.aliyuncs.com/document/exchange/image-20221216145734436.png)

`vlan创建成功`

## 端口配置

`需要通过quit返回配置视图`

### 进入指定接口

```shell
interface GigabitEthernet 0/0/1
```

![image-20221216150140813](https://sugarys.oss-cn-beijing.aliyuncs.com/document/exchange/image-20221216150140813.png)

### 配置接口类型

```shell
port link-type access
```

![image-20221216150249677](https://sugarys.oss-cn-beijing.aliyuncs.com/document/exchange/image-20221216150249677.png)

### 将接口加入某一个vlan

```shell
port default vlan 10
```

![image-20221216150440527](https://sugarys.oss-cn-beijing.aliyuncs.com/document/exchange/image-20221216150440527.png)

### 查看vlan下的接口划分

![image-20221216150527208](https://sugarys.oss-cn-beijing.aliyuncs.com/document/exchange/image-20221216150527208.png)

`可以看到已经将1口划到新建的vlan 10中`