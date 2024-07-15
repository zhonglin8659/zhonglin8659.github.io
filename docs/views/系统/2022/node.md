---
title: 安装Node 
date: 2022-08-12
sidebar: auto
tags: 
 - Linux
categories:
 - 系统
---

## ubuntu安装nvs

### 安装git

```
apt install git
```
### 安装nvs --回车
```
export NVS_HOME="$HOME/.nvs"
git clone https://gitee.com/wsz7777/nvs "$NVS_HOME"
. "$NVS_HOME/nvs.sh" install
```
## Centos安装nvs
### 安装git
```
yum install -y git
```
### 安装nvs --回车
```
export NVS_HOME="$HOME/.nvs"
git clone https://gitee.com/wsz7777/nvs "$NVS_HOME"
. "$NVS_HOME/nvs.sh" install
```
## nvs使用教程

### 安装最新版本

```
nvs add latest
```
### 安装指定版本
```
nvs add 版本号
```
### 切换指定版本
```
nvs use 版本号
```
### 添加默认版本
```
nvs link 版本号
```