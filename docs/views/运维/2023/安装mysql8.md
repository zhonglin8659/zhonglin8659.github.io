---
title: 离线安装Mysql 
date: 2023-12-13
sidebar: auto
tags: 
 - 数据库
categories:
 - 运维
---

## 检查系统版本与glibc版本

```shell
lsb_release -a
```

![image-20231216141202654](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20231216141202654.png)

```shell
strings /lib/x86_64-linux-gnu/libc.so.6 | grep GLIBC
```

![image-20231216141251471](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20231216141251471.png)

## 下载mysql对应glibc离线安装包

![image-20231216141501466](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20231216141501466.png)

```shell
wget https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.35-linux-glibc2.28-x86_64.tar.xz
```

![image-20231216141612782](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20231216141612782.png)

## 解压文件并移动位置

```shell
tar -Jxf mysql-8.0.35-linux-glibc2.28-x86_64.tar.xz
mv mysql-8.0.35-linux-glibc2.28-x86_64 mysql8
mv mysql8/ /usr/local/
```

## 检查环境是否满足

```shell
cd /usr/local/mysql8/bin
./mysql --version
```

能够输出mysql版本即可

![image-20231216142333796](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20231216142333796.png)

## 创建用户组与用户

创建mysql用户组

```shell
groupadd mysql
```

创建mysql用户并指定用户组

```shell
useradd -r -g mysql mysql
```

## 创建数据目录

```shell
mkdir -p /usr/local/mysql8/data
```

修改属主与属组

```shell
chown -R mysql:mysql /usr/local/mysql8/data/
```

修改模式与权限

```shell
cd /usr/local/mysql8/
chmod -R 750 data/
```

## 数据库初始化

在`/usr/local/etc/`下创建`my.cnf`配置文件

```shell
vim /usr/local/etc/my.cnf
```

插入以下内容：

```cnf
[mysql]
# 默认字符集
default-character-set=utf8mb4
[client]
port       = 3306
socket     = /tmp/mysql.sock
[mysqld]
port       = 3306
server-id  = 3306
user       = mysql
socket     = /tmp/mysql.sock
# 安装目录
basedir    = /usr/local/mysql8
# 数据存放目录
datadir    = /usr/local/mysql8/data/mysql
log-bin    = /usr/local/mysql8/data/mysql/mysql-bin
innodb_data_home_dir      =/usr/local/mysql8/data/mysql
innodb_log_group_home_dir =/usr/local/mysql8/data/mysql
# 日志及进程数据的存放目录
log-error =/usr/local/mysql8/data/mysql/mysql.log
pid-file  =/usr/local/mysql8/data/mysql/mysql.pid
# 服务端字符集
character-set-server=utf8mb4
lower_case_table_names=1
autocommit =1
##### 以上涉及文件夹明，注意修改
skip-external-locking
key_buffer_size = 256M
max_allowed_packet = 1M
table_open_cache = 1024
sort_buffer_size = 4M
net_buffer_length = 8K
read_buffer_size = 4M
read_rnd_buffer_size = 512K
myisam_sort_buffer_size = 64M
thread_cache_size = 128
#query_cache_size = 128M
tmp_table_size = 128M
explicit_defaults_for_timestamp = true
max_connections = 500
max_connect_errors = 100
open_files_limit = 65535
binlog_format=mixed
binlog_expire_logs_seconds =864000
# 创建表时使用的默认存储引擎
default_storage_engine = InnoDB
innodb_data_file_path = ibdata1:10M:autoextend
innodb_buffer_pool_size = 1024M
innodb_log_file_size = 256M
innodb_log_buffer_size = 8M
innodb_flush_log_at_trx_commit = 1
innodb_lock_wait_timeout = 50
transaction-isolation=READ-COMMITTED
[mysqldump]
quick
max_allowed_packet = 16M
[myisamchk]
key_buffer_size = 256M
sort_buffer_size = 4M
read_buffer = 2M
write_buffer = 2M
[mysqlhotcopy]
interactive-timeout
```

赋予该文件权限

```shell
chmod 755 /usr/local/etc/my.cnf
```

初始化数据

```shell
cd /usr/local/mysql8/bin/
```

```shell
./mysqld --defaults-file=/usr/local/etc/my.cnf --basedir=/usr/local/mysql8 --datadir=/usr/local/mysql8/data/mysql --user=mysql --initialize-insecure
```

## 启动数据库服务

```shell
cd /usr/local/mysql8/bin/
```

后台启动服务

```shell
./mysqld_safe --defaults-file=/usr/local/etc/my.cnf &
```

![image-20231216144507430](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20231216144507430.png)

## 登录数据库

首次登录无需密码

```shell
./mysql -uroot -p
```

直接回车

![image-20231216145306712](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20231216145306712.png)

修改密码为`123qwe!!!`

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123qwe!!!';
```

```sql
FLUSH PRIVILEGES;
```

开启允许远程访问

```sql
use mysql;
update user set user.Host='%' where user.User='root';
```

重新启动数据库服务

需要使用kill杀掉mysql服务后再次通过mysqld_safe启动

```shell
./mysqld_safe --defaults-file=/usr/local/etc/my.cnf &
```

此时可以进行远程链接

![image-20231216150333668](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20231216150333668.png)