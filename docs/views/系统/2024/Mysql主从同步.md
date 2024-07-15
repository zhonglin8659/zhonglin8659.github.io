---
title: Mysql主从同步 
date: 2024-01-17
sidebar: auto
tags: 
 - 数据库
categories:
 - 系统
---

## 环境准备

> 这里准备了 `192.168.1.192` `192.168.1.193` 两台linux机器 192为MASTER主节点 193为SLAVE从节点 
>
> MASTER主节点与SLAVE从节点均安装Mysql8数据库
>
> MASTER主节点与SLAVE从节点均新建一个 `student` 库
>
> 两个节点的数据库版本需要一致 这里使用的为 `8.0.36`

![image-20240117161414810](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240117161414810.png)

## 配置MASTER库

> 修改数据库的配置文件

```shell
vim /etc/my.cnf
```

**添加以下内容：**

```conf
log-bin=mysql-bin
server-id=192
binlog-do-db=student
```

1. 启用二进制日志，数据间复制必不可少
2. 服务器唯一ID
3. 表示你需要同步哪一个库，多个用“，”隔开 注释此项后对所有库以及数据进行同步

![image-20240117161948198](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240117161948198.png)

**重启数据库**

```shell
systemctl restart mysqld
```

**登录数据库**

```shell
mysql -uroot -p
```

**创建一个slave用户并配置密码**

```sql
CREATE USER 'slave'@'%' IDENTIFIED WITH mysql_native_password BY '123qwE!!!';
```

**添加授权**

```sql
GRANT ALL PRIVILEGES ON *.* TO 'slave'@'%'WITH GRANT OPTION;
```

**刷新**

```sql
FLUSH PRIVILEGES;
```

**执行以下SQL并记录结果中File和Position的值**

```sql
SHOW MASTER STATUS;
```

![image-20240117163241818](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240117163241818.png)

## 配置SLAVE库

> 修改数据库的配置文件

```shell
vim /etc/my.cnf
```

**添加以下内容：**

```conf
server-id=193
```

1. 服务器唯一ID

![image-20240117164343102](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240117164343102.png)

**重启数据库**

```shell
systemctl restart mysqld
```

**登录数据库**

```shell
mysql -uroot -p
```

**执行前先停下slave**

```sql
STOP SLAVE;
```

**清空信息**

```sql
RESET SLAVE ALL;
```

**SLAVE库连接MASTER库**

```sql
CHANGE MASTER TO 
    MASTER_HOST='192.168.1.192',
    MASTER_PORT=3306,
    MASTER_USER='slave',
    MASTER_PASSWORD='123qwE!!!',
    MASTER_LOG_FILE='mysql-bin.000004',
    MASTER_LOG_POS=157;
```

1. MASTER_HOST 填写MASTER库IP地址
2. MASTER_PORT 填写MASTER库端口
3. MASTER_USER 添加配置MASTER库时创建的用户
4. MASTER_PASSWORD 添加配置MASTER库时设置的用户密码
5. MASTER_LOG_FILE  SHOW MASTER STATUS获取到的值
6. MASTER_LOG_POS  SHOW MASTER STATUS获取到的值

**启动slave**

```sql
START SLAVE;
```

## 查看同步状态

```sql
SHOW SLAVE STATUS;
```

![image-20240117170837457](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240117170837457.png)

> Slave_IO_Running与Slave_SQL_Running均为Yes即可

**此时我们在MASTER库添加一个表并插入一条数据**

```sql
create table class2(id int ,sname varchar(20),birthday date);
```

```sql
insert into class2(id,sname,birthday)values(1,"王强","1999-01-27");
```

> > 主库：

![image-20240117172253793](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240117172253793.png)

> > 从库：

![image-20240117172334028](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240117172334028.png)

## 配置互为主备

> Mysql主从复制、互为主备中所需要使用到的参数介绍

- log-bin=mysql-bin 打开二进制日志
- server-id=1 设置服务id
- binlog-ignore-db=mysql 设置不要复制的数据库
- binlog-do-db=demo 设置需要复制的数据库
- binlog_format=STATEMENT 设置logbin格式;可选值：STATEMENT、ROW、MIXED
- log-slave-updates 作为从数据库的时候，有写入操作也要更新二进制日志文件
- auto-increment-offset=1 自增长字段从哪个数开始
- auto-increment-increment=2 自增长字段每次递增的量
- relay-log=mysql-relay 启用中继日志

### 配置主库1

> my.cnf

```shell
log-bin=mysql-bin
server-id=1
binlog-ignore-db=mysql
binlog-ignore-db=performance_schema
binlog-ignore-db=sys
binlog_format=STATEMENT
log-slave-updates
auto-increment-offset=1
auto-increment-increment=2
```

> 重启数据库

```shell
systemctl restart mysqld
```

```sql
CREATE USER 'slave'@'%' IDENTIFIED WITH mysql_native_password BY '123qwE!!!';
GRANT ALL PRIVILEGES ON *.* TO 'slave'@'%'WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

```sql
SHOW MASTER STATUS;
```

**记录下File和Position的值**

### 配置主库2

> my.cnf

```shell
log-bin=mysql-bin
server-id=2
binlog-ignore-db=mysql
binlog-ignore-db=performance_schema
binlog-ignore-db=sys
binlog_format=STATEMENT
log-slave-updates
auto-increment-offset=2
auto-increment-increment=2
```

> 重启数据库

```shell
systemctl restart mysqld
```

```sql
CREATE USER 'slave'@'%' IDENTIFIED WITH mysql_native_password BY '123qwE!!!';
GRANT ALL PRIVILEGES ON *.* TO 'slave'@'%'WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

```shell
SHOW MASTER STATUS;
```

**记录下File和Position的值**

### 配置双主互备

> > 主库1

```sql
STOP SLAVE;
RESET SLAVE ALL;
```

```sql
CHANGE MASTER TO 
    MASTER_HOST='192.168.1.193',
    MASTER_PORT=3306,
    MASTER_USER='slave',
    MASTER_PASSWORD='123qwE!!!',
    MASTER_LOG_FILE='mysql-bin.000002',
    MASTER_LOG_POS=851;
```

```sql
START SLAVE;
```

> 查看同步状态

```sql
SHOW SLAVE STATUS;
```

![image-20240118113727930](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240118113727930.png)

> > 主库2

```sql
STOP SLAVE;
RESET SLAVE ALL;
```

```sql
CHANGE MASTER TO 
    MASTER_HOST='192.168.1.192',
    MASTER_PORT=3306,
    MASTER_USER='slave',
    MASTER_PASSWORD='123qwE!!!',
    MASTER_LOG_FILE='mysql-bin.000007',
    MASTER_LOG_POS=157;
```

```sql
START SLAVE;
```

> 查看同步状态

```sql
SHOW SLAVE STATUS;
```

![image-20240118114110617](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240118114110617.png)