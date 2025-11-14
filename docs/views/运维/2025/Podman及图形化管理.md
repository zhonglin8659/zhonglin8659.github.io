---
title: Podman及图形化管理 
date: 2025-08-29
sidebar: auto
tags: 
 - 容器
categories:
 - 运维
---

## Podman及图形化管理

### podman安装

```shell
apt install -y podman
```

### 打印版本

```shell
podman -v
```

![image-20250905103047281](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250905103047281.png)

### 查看podman运行状态

```shell
systemctl status podman
```

![image-20250905103139747](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250905103139747.png)

### Cockpit图形界面安装

```shell
apt install cockpit cockpit-podman
```

![image-20250905103316277](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250905103316277.png)

### 激活Cockpit

```shell
systemctl enable --now cockpit.socket
```

### 查看Cockpit状态

```shell
systemctl status cockpit --no-pager -l
```

### 查看9090是否被监听

```shell
netstat -tunlp | grep 9090
```

![image-20250905103636863](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250905103636863.png)

### 访问web管理站

![image-20250905103723270](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250905103723270.png)

> 使用系统用户与密码登录即可

![image-20250905103835330](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20250905103835330.png)