---
title: 安装Nginx 
date: 2022-08-12
sidebar: auto
tags: 
 - Linux
categories:
 - 系统
---

## ubuntu安装nginx

```
lsb_release -a
```
## 安装环境

### 更新apt源

```
apt update
```
### 安装gcc，g++开发类库
```
apt install build-essential
```
```
apt install libtool
```
### 安装pcre库
```
apt install libpcre3 libpcre3-dev
```
### 安装zlib库
```
apt install zlib1g-dev
```
### 安装oepnssl库
```
apt install openssl libssl-dev
```
## 安装nginx
### 下载nginx包
```
wget http://nginx.org/download/nginx-1.23.0.tar.gz
```
### 解压文件
```
tar -zxvf nginx-1.23.0.tar.gz
```
### 切换到nginx目录
```
cd nginx-1.23.0
```
### 预编译
```
./configure
```
### 安装
```
make && make install
```
### 启动nginx
```
cd /usr/local/nginx/sbin
./nginx
```
## centos安装nginx

```
cat /etc/redhat-release
```
## 安装环境
### 更新yum源

```
yum update
```
### 安装gcc，g++开发类库
```
yum -y install gcc
```
### 安装pcre库
```
yum install -y pcre pcre-devel
```
### 安装zlib库
```
yum install -y zlib zlib-devel
```
### 安装oepnssl库
```
yum install -y openssl openssl-devel
```
## 安装nginx

### 下载nginx包
```
wget http://nginx.org/download/nginx-1.23.0.tar.gz
```
### 解压文件
```
tar -zxvf nginx-1.23.0.tar.gz
```
### 切换到nginx目录
```
cd nginx-1.23.0
```
### 预编译
```
./configure
```
### 安装
```
make && make install
```
### 启动nginx
```
cd /usr/local/nginx/sbin
./nginx
```
