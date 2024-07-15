---
title: Zabbix监控 
date: 2022-11-11
sidebar: auto
tags: 
 - Linux
categories:
 - 网络
---

## 关闭防火墙与selinux

```shell
systemctl stop firewalld
systemctl disable firewalld
```

编辑`/etc/selinux/config` 将`SELINUX=disabled`。然后重启设备，在终端输入 `getenforce` 验证结果

## 建立zabbix下载源

###  安装源

```shell
rpm -Uvh https://repo.zabbix.com/zabbix/5.0/rhel/7/x86_64/zabbix-release-5.0-1.el7.noarch.rpm
```

### 替换源为阿里云

```shell
sed -i 's#http://repo.zabbix.com#https://mirrors.aliyun.com/zabbix#' /etc/yum.repos.d/zabbix.repo
```

### 清理并建立元数据

```shell
yum clean all
yum makecache
```

## 安装zabbix

### 安装服务端与客户端

```shell
yum install zabbix-server-mysql zabbix-agent -y
```

### 安装软件管理器-不影响其他依赖环境

```shell
yum -y install centos-release-scl -y
```

## 安装zabbix界面

### 修改源

编辑`/etc/yum.repos.d/zabbix.repo`文件，将enabled的值改为1后保存吗，具体如下：

```shell
[zabbix-frontend]
name=Zabbix Official Repository frontend - $basearch
baseurl=https://mirrors.aliyun.com/zabbix/zabbix/5.0/rhel/7/$basearch/frontend
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX-A14FE591
```

### 开始安装

```shell
yum install zabbix-web-mysql-scl zabbix-apache-conf-scl -y
```

## 数据库

### 安装mariadb

```shell
yum install mariadb-server -y
```

### 设置开机自启

```shell
systemctl enable --now mariadb
systemctl status mariadb
```

### 初始化数据库

```shell
mysql_secure_installation
```

### 添加用户与库

该操作需要登录数据库后执行

```shell
create database zabbix character set utf8 collate utf8_bin;
create user zabbix@localhost identified by '123qwe!!!';
grant all privileges on zabbix.* to zabbix@localhost;
```

### 刷新表

```shell
flush privileges;
```

### 命令导入数据

检查该文件是否存在`/usr/share/doc/zabbix-server-mysql-5.0.28/create.sql.gz`

```shell
zcat /usr/share/doc/zabbix-server-mysql-5.0.28/create.sql.gz | mysql -uzabbix -p zabbix
```

## 修改配置

### zabbix配置

编辑`/etc/zabbix/zabbix_server.conf`修改端口、数据库连接密码等

核对数据 `grep '^DBPa' /etc/zabbix/zabbix_server.conf`

### php配置

编辑`/etc/opt/rh/rh-php72/php-fpm.d/zabbix.conf`

## 启动zabbix服务设置开机自启

```shell
systemctl restart zabbix-server zabbix-agent httpd rh-php72-php-fpm
systemctl enable zabbix-server zabbix-agent httpd rh-php72-php-fpm
```

此时可以使用IP+zabbix访问WEB界面配配置，用户`Admin` 密码`zabbix`