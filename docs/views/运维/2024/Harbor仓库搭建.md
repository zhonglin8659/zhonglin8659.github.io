---
title: Harbor仓库搭建 
date: 2024-11-29
sidebar: auto
tags: 
 - 容器
categories:
 - 运维
sticky: 1
---

## Harbor仓库搭建

> 需要准备2台Linux设备。一台作为Harbor服务器仓库、一台作为操作客户端。

服务器仓库IP：106.12.253.181 --公网IP
操作客户端IP：192.168.123.33 --内网IP

> Docker、Docker-ce、Docker-Compose

Docker version 26.1.4、Docker Compose version v2.31.0

[Docker-Compose下载地址](https://github.com/docker/compose/releases)

> harbor-offline

harbor-offline-installer-v2.11.2.1.tgz

[Harbor下载地址](https://github.com/goharbor/harbor/releases)

### 安装Docker

Docker安装步骤请参考 [Docker基础](https://zhonglin8659.github.io/views/yun-wei/2022/docker.html#%E5%AE%89%E8%A3%85docker) 

安装完毕后可输出版本即可

### 安装Docker-Compose

1. 将已下载的docker-compose-linux-x86_64重命名为docker-compose

   ```shell
   mv docker-compose-linux-x86_64 docker-compose
   ```

2. 将docker-compose移动到/usr/bin中

   ```shell
   mv docker-compose /usr/bin/
   ```

3. 给docker-compose添加执行权限

   ```shell
   chmod +x docker-compose
   ```

4. 执行完毕后可输出版本即可

### 部署Harbor

1. 解压harbor-offline-installer-v2.11.2.1.tgz

   ```shell
   tar zxvf harbor-offline-installer-v2.11.2.1.tgz
   ```

2. 进入harbor目录，修改harbor.yml.tmpl

   ```shell
   vim harbor.yml.tmpl
   ```

   > 1、修改hostname为服务器IP
   >
   > 2、修改port为要使用的端口
   >
   > 3、https模型如不用需要注释
   >
   > 4、harbor_admin_password为配置登录密码

3. 启动prepare生成配置

   ```shell
   ./prepare
   ```

4. 安装服务

   ```shell
   ./install.sh
   ```
