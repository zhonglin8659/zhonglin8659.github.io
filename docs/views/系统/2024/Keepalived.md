---
title: Keepalived 
date: 2024-01-11
sidebar: auto
tags: 
 - 集群
categories:
 - 系统
---

## Keepalived简介

Keepalived 是使用C语言编写的 `路由热备软件` ，该项目软件起初是专门为LVS负载均衡设计的，用来管理并监控LVS集群系统中各个服务节点的状态，后来又加入了可以实现高可用的 `VRRP` 功能。因此，Keepalived除了能够管理LVS软件外，还可以作为其他服务（例如：`Nginx`，`Haproxy`，`MySQL`等）的高可用解决方案

Keepalived 主要是通过 `VRRP` 协议实现高可用功能的。VRRP是 `Virtual Router Redundancy Protocol` （`虚拟路由器冗余协议`）的缩写， `VRRP` 出现的目的就是为了解决静态路由单点故障问题的，它能够保证当个别节点宕机时，整个网络可以不间断地运行

所以，Keepalived一方面具有配置管理LVS的功能，同时还具有对LVS下面节点进行健康检查的功能，另一方面也可实现系统网络服务的高可用功能

## Keepalived工作原理图

![image-20240111175313989](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240111175313989.png)

**Keepalived 高可用之间是通过VRRP通信的，因此我从VRRP开始讲起：**

1. VRRP，也就是虚拟路由冗余协议，它的出现就是为了解决静态路由的单点故障
2. VRRP是通过一种竞选协议机制将路由任务交给某台VRRP路由器
3. VRRP用 IP多播的方式（默认多播地址（224.0_0.18))实现高可用对 之间通信
4. 工作时主节点发包，备节点接包，当备节点接收不到主节点发的数据包时，就启动接管程序接管主节点的资源。备节点可以有多个，通过优先级竞选，但一般Keepalived系统工作中都是一对
5. VRRP使用了加密协议加密数据，但Keepalived官方目前还是推荐用明文的方式配置认证类型和密码

**介绍完 VRRP，接下来介绍一下 Keepalived服务的工作原理：**

1. Keepalived高可用之间是通过VRRP进行通信的，VRRP是通过竞选机制来确定主备的，主的优先级高于备，因此，工作时主会优先获得所有的资源，备节点处于等待状态，当主挂了的时候，备节点就会接管主节点的资源，然后顶替主节点对外提供服务
2. 在Keepalived服务之间，只有作为主的服务器会一直发送VRRP广播包，告诉备它还活着，此时备不会抢占主，当主不可用时，即备监听不到主发送的广播包时，就会启动相关服务接管资源，保证业务的连续性。接管速度最快可以小于1秒

## Keepalived服务作用

**（1）管理 VIP**

VIP即对外提供服务的浮动IP， 会在LVS之间漂移

**（2）监控LVS分发器**

运行在主分发器的 Keepalived 会以组播的形式向网络中宣告自己，即主分发器还活着，备用节点能收到。当备用节点，在一个时间单位中收不到组播，备用节点会认为主 LVS 挂了，开始接手主分发器工作，把 VIP 分配给自己

**（3）管理RS**

RealServer。即真正为用户提供服务的服务器。比如：web、mail、FTP服务等

Keepalived 会每隔一个时间段去做一次类似于访问的操作

## 安装Keepalived服务

> yum方式安装

```shell
yum -y install keepalived
```

>源码安装

```shell
yum -y install gcc openssl-devel libnfnetlink-devel
wget https://www.keepalived.org/software/keepalived-1.4.5.tar.gz
tar -zxvf keepalived-1.4.5.tar.gz -C /usr/src
cd /usr/src/keepalived-1.4.5/
./configure && make -j4 && make install
```

## keepalived配置文件解析

> Keepalived 主配置文件的名称为：

```shell
/etc/keepalived/keepalived.conf
```

> 一个功能比较完整的常用的 keepalived 配置文件，主要包含以下三块：

```conf
! Configuration File for keepalived
#全局定义块
global_defs {
   ...
}

#VRRP 实例定义块
vrrp_instance VI_1 {
   ...
}

#虚拟服务器定义块
virtual_server 10.10.10.2 1358 {
   ...
}
```

> 注意：全局定义块是必须配置项；如果Keepalived只用来做HA，则虚拟服务器是可选配置。下面详细介绍Keepalived配置文件：

### 全局定义块

> 这部分主要用来设置Keepalived的故障通知机制和Router ID标识。示例代码如下：

![image-20240111175934532](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240111175934532.png)

> 参数说明：

1. 第一行是注释
2. 第4~7行：`email` 通知，服务有故障时发送邮件报警。建议使用第三方独立监控服务，如使用 `nagios` 监控代替
3. 第9行：指定发件人
4. 第10行：指定发送邮件的smtp服务器地址
5. 第11行：指定连接smtp的超时时间
6. 第12行：用户标识本节点的名称，通常为主机名

### VRRP 实例定义块

![image-20240111180138458](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240111180138458.png)

> 参数说明：

1. 第15行：定义一个vrrp_install实例，名称为VI_1
2. 第16行：表示该实例的角色状态，有MASTER和BACKUP两种主备状态
3. 第17行：对外提供服务的网络接口，如eth0，ens33
4. 第18行：虚拟路由ID标识，主备服务器配置中相同实例的ID必须一致，否则将出现 `脑裂` 问题
5. 第19行：priority表示实例优先级。数字越大，优先级越高
6. 第20行：advert_int为同步通知间隔。主备之间通信检查的时间间隔，默认为1秒
7. 第21~24行：权限认证配置
8. 第25~28行：虚拟IP地址；可以配置多个IP，每个IP占一行。这里的IP就是在工作中需要和域名绑定的IP，即可配置的高可用服务监听IP一致

### 虚拟服务器定义块

![image-20240111180552572](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240111180552572.png)

> 参数说明：

1. virtual_server：定义一个虚拟服务器，这个IP是virtual_address中定义的其中一个。语法格式：IP+空格+服务端口
2. 第56行：delay_loop 6 健康检查时间间隔，单位：秒
3. 第57行：lb_algo rr 负载均衡调度算法，互联网应用常用方式为 wlc或rr
4. 第58行：lb_kind NAT 负载均衡转发规则。包括DR、NAT、TUN 3种，一般使用路由（DR）转发规则。
5. 第59行：persistence_timeout 50 http服务会话保持时间，单位：秒
6. 第60行：protocol TCP 转发协议，分为TCP和UDP两种
7. real_server：真实服务器IP和端口，可以定义多个
8. 第65行：weight 1 负载权重，值越大，转发的优先级越高
9. 第79行：connect_timeout 3 服务连接超时时长，单位：秒
10. 第80行：nb_get_retry 3 服务连接失败重试次数
11. 第81行：delay_before_retry 3 ：重试连接间隔，单位：秒

## Keepalived单实例主备模式实战

> 配置Keepalived实现单实例单IP自动漂移接管

### 准备两台机器

| 主机名 | IP            | 说明               |
| :----: | ------------- | ------------------ |
| node1  | 192.168.1.192 | keepalived主服务器 |
| node2  | 192.168.1.193 | keepalived备服务器 |

### 安装 Keepalived软件

```shell
yum -y install keepalived
```

> 需要在node1和node2两台服务器上同时安装Keepalived

### 修改Keepalived配置文件

**node1为MASTER主节点，配置文件如下：**

```shell
vim /etc/keepalived/keepalived.conf
```

![image-20240111181314667](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240111181314667.png)

> 这里我们只注意一点：服务器node1 作为实例VI_1的master，实例ID为`60`，实例优先级`150`，浮动IP地址为 `192.168.1.198`

**node2为BACKUP备节点，配置文件如下：**

```shell
vim /etc/keepalived/keepalived.conf
```

![image-20240111181539196](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240111181539196.png)

> 这里我们只注意一点：服务器node2 作为实例VI_1的master，实例ID为`60`，实例优先级`100`，浮动IP地址为 `192.168.1.198`

### 启动Keepalived服务

```shell
systemctl start keepalived
systemctl enable keepalived
```

> 注意：MASTER跟BACKUP节点都要启动Keepalived服务