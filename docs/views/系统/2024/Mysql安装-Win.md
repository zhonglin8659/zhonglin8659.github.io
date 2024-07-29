---
title: Mysql安装Win 
date: 2024-01-18
sidebar: auto
tags: 
 - 数据库
categories:
 - 系统
---

## Mysql配置说明

> [client]客户端设置

```mysql
[client]
port=3306
socket=/data/mysql/data/mysql.sock
default-character-set=utf8mb4
```

1. *port 端口设置*
2. *socket 进程间的通信文件*
3. *default-character-set 字符编码*

> [mysqld]服务器设置

```mysql
[mysqld]
user=mysql
port=3306
socket=/data/mysql/data/mysql.sock
server-id=1
bind-address=0.0.0.0
pid-file=/data/mysql/data/mysql.pid
basedir=/usr/local/mysql
datadir=/data/mysql/data/
character_set_server=utf8mb4
collation_server=utf8mb4_general_ci
secure_auth=1
back_log=1024
```

1. *user mysql启动时使用的用户*
2. *port 端口设置*
3. *socket 进程间的通信文件*
4. *server-id 数据库服务器id*
5. *bind-address 端口绑定的ip地址*
6. *pid-file 记录mysql运行的processid*
7. *basedir 安装目录*
8. *datadir 数据库存放目录*
9. *character_set_server 编码设置*
10. *collation_server 排序规则*
11. *secure_auth 密码认证方式*
12. *back_log 停止响应新请求之前的短时间内多少个请求可以被存在堆栈中*

> 其他设置

```mysql
explicit_defaults_for_timestamp=true
lower_case_table_names=1
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
```

1. *explicit_defaults_for_timestamp 显式指定默认时间戳，即定义表中的timestamp时间戳的列时需要显示指定默认值，默认为OFF。如果第一个TIMESTAMP列，没有显式设置DEFAULT，将自动分配DEFAULT CURRENT_TIMESTAMP和ON UPDATE CURRENT_TIMESTAMP属性，timestamp列不能设置为NULL,第二列及以后的timestamp列都默认为"0000-00-00 00:00:00"。如果设置为ON，第一个timestamp列可以设置为NULL，不会默认分配DEFAULT CURRENT_TIMESTAMP和ON UPDATE CURRENT_TIMESTAMP属性。声明为NOT NULL且没有显式DEFAULT子句，在严格模式下会报错*
2. *lower_case_table_names 1表示不区分大小写，0表示区分大小写*
3. *sql_mode 默认sql模式，严格模式*

> 缓冲区及处理数据设置

```mysql
sort_buffer_size=16M
join_buffer_size=16M
key_buffer_size=15M
max_allowed_packet=32M
max_connections=1700
max_connect_errors=1000000
table_open_cache=1024
table_open_cache_instances=32
open_files_limit=65535
query_cache_size=0
query_cache_type=0
query_cache_limit=1M
```

1. *sort_buffer_size MySQL执行排序使用的缓冲大小*
2. *join_buffer_size 应用程序经常会出现一些两表（或多表）Join的操作需求*
3. *key_buffer_size 索引块的缓冲区*
4. *max_allowed_packet 消息缓冲区会用到该列*
5. *max_connections MySQL服务器最大连接数值*
6. *max_connect_errors 阻止过多尝试失败的客户端*
7. *table_open_cache 表描述符缓存大小*
8. *table_open_cache_instances MySQL 缓存 table 句柄的分区的个数*
9. *open_files_limit MySQL打开最大文件数*
10. *query_cache_size 查询缓存*
11. *query_cache_type 否缓存查询结果，这个变量有三个取值：0,1,2，分别代表了off、on、demand*
12. *query_cache_limit 定单个查询能够使用的缓冲区大小*

> 日志设置

```mysql
log_timestamps=SYSTEM
log_bin=OFF
binlog_cache_size=16M
slow_query_log=OFF
slow_query_log_file=/data/mysql/logs/slow_query.log
log_queries_not_using_indexes=ON
log-slow-admin-statements
long_query_time=2
log-error=/data/mysql/logs/error.log
```

1. *log_timestamps 日志时间戳*
2. *log_bin 二进制日志设置*
3. *binlog_cache_size 二进制日志缓冲大小*
4. *slow_query_log 慢查询，开发调式阶段才需要开启慢日志功能*
5. *slow_query_log_file 慢日志文件路径*
6. *log_queries_not_using_indexes 记录所有没有利用索引来进行查询的语句*
7. *log-slow-admin-statements 记录管理语句*
8. *long_query_time 录执行时间*
9. *log-error 错误日志*

> InnoDB存储引擎

```mysql
default_storage_engine=InnoDB
innodb_file_per_table=1
innodb_open_files=350
table_definition_cache=400
innodb_buffer_pool_size=64M
innodb_data_file_path=ibdata1:32M:autoextend
innodb_write_io_threads=4
innodb_read_io_threads=4
innodb_thread_concurrency=0
innodb_flush_log_at_trx_commit=1
innodb_log_buffer_size=2M
innodb_log_file_size=128M
innodb_log_files_in_group=3
innodb_max_dirty_pages_pct=75
innodb_lock_wait_timeout=120
```

1. *default_storage_engine 默认使用InnoDB存储引擎*
2. *innodb_file_per_table 是否启用innodb_file_per_table*
3. *innodb_open_files 控制打开.ibd文件的数量*
4. *table_definition_cache 表定义缓存(数据字典)数量*
5. *innodb_buffer_pool_size 高速缓冲数据和索引内存缓冲大小*
6. *innodb_data_file_path 单独指定数据文件的路径与大小*
7. *innodb_write_io_threads 设置增加IO线程*
8. *innodb_read_io_threads 设置增加IO线程*
9. *innodb_thread_concurrency 并发线程数的限制值*
10. *innodb_flush_log_at_trx_commit MySql日志何时写入硬盘的参数*
11. *innodb_log_buffer_size 日志写入日志磁盘文件前的缓冲大小*
12. *innodb_log_file_size 日志组中的每个日志文件的大小*
13. *innodb_log_files_in_group 指定有日志组数量*
14. *innodb_max_dirty_pages_pct 控制Innodb的脏页在指定百分比之下*
15. *innodb_lock_wait_timeout InnoDB 事务将等待超时的时间*

> MyISAM存储引擎

```mysql
bulk_insert_buffer_size=8M
myisam_sort_buffer_size=8M
myisam_max_sort_file_size=10G
myisam_repair_threads=1
lower_case_table_names=1

[mysqldump]
quick
max_allowed_packet=16M

[myisamchk]
key_buffer_size=8M
sort_buffer_size=8M
read_buffer=4M
write_buffer=4M
```

1. *bulk_insert_buffer_size insert加速调优*
2. *myisam_sort_buffer_size 查询排序缓存大小*
3. *myisam_max_sort_file_size MySQL重建索引时所允许的最大临时文件的大小*
4. *myisam_repair_threads 修复MyISAM表时的线程数*
5. *lower_case_table_names 忽略表名大小写*
6. *quick 强制mysqldump从服务器一次一行地检索表中的行*
7. *max_allowed_packet 可接收数据包大小*
8. *key_buffer_size mysqld服务器不使用的情况下修复表*
9. *sort_buffer_size mysqld服务器不使用的情况下修复表*
10. *read_buffer mysqld服务器不使用的情况下修复表*
11. *write_buffer mysqld服务器不使用的情况下修复表*

> 分布式事务

*#innodb_support_xa = FALSE*
*#innodb_buffer_pool_size 一致 可以开启多个内存缓冲池，把需要缓冲的数据hash到不同的缓冲池中，这样可以并行的内存读写*
*#innodb_buffer_pool_instances = 4*
*#这个参数据控制Innodb checkpoint时的IO能力*
*#innodb_io_capacity = 500*
*#作用：使每个Innodb的表，有自已独立的表空间。如删除文件后可以回收那部分空间*
*#分配原则：只有使用不使用。但ＤＢ还需要有一个公共的表空间。*
*#innodb_file_per_table = 1*
*#当更新/插入的非聚集索引的数据所对应的页不在内存中时（对非聚集索引的更新操作通常会带来随机IO），会将其放到一个insert buffer中*
*#当随后页面被读到内存中时，会将这些变化的记录merge到页中。当服务器比较空闲时，后台线程也会做merge操作*
*#innodb_change_buffering = inserts*
*#该值影响每秒刷新脏页的操作，开启此配置后，刷新脏页会通过判断产生重做日志的速度来判断最合适的刷新脏页的数量*
*#innodb_adaptive_flushing = 1*
*#数据库事务隔离级别 ，读取提交内容*
*#transaction-isolation = READ-COMMITTED*
*#innodb_flush_method这个参数控制着innodb数据文件及redo log的打开、刷写模式*
*#InnoDB使用O_DIRECT模式打开数据文件，用fsync()函数去更新日志和数据文件*
*#innodb_flush_method = O_DIRECT*
*#默认设置值为1.设置为0：表示Innodb使用自带的内存分配程序；设置为1：表示InnoDB使用操作系统的内存分配程序*　　　　　
*#innodb_use_sys_malloc = 1*

## Mysql安装说明

> 此次教程为手工安装版本，非Mysql提供的msi一键安装

### 下载Mysql程序

访问 [Mysql官网](https://www.mysql.com/) 下载ZIP格式的程序压缩包

![image-20240122141715262](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240122141715262.png)

### 配置Mysql环境

解压文件至`E盘`（参考，可随意）修改目录名为`Mysql8036`（参考，可随意）

![image-20240122141856142](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240122141856142.png)

进入Mysql8036目录，新建一个`data`目录用于存放Mysql数据

![image-20240122142103647](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240122142103647.png)

进入Mysql8036目录，新建一个`my.ini`配置文件，并写入以下内容：

```mysql
[client]
port=3368
socket=E:/Mysql8036/data/mysql.sock
default-character-set=utf8mb4

[mysqld]
user=mysql
port=3368
socket=E:/Mysql8036/data/mysql.sock
pid-file=E:/Mysql8036/data/mysql.pid
datadir=E:/Mysql8036/data
character_set_server=utf8mb4
collation_server=utf8mb4_general_ci
back_log=1024
sort_buffer_size=16M
join_buffer_size=16M
key_buffer_size=15M
max_allowed_packet=32M
max_connections=512
lower_case_table_names=1
```

![image-20240122142459170](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240122142459170.png)

### 初始化Mysql

进入上述图中的`bin`文件夹中，按住`shift+鼠标右键`选择在此处打开Powershell窗口 

> 记得需要以管理员权限运行Powershell

![image-20240122142834086](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240122142834086.png)

执行Mysql初始化命令

```powershell
.\mysqld.exe --initialize-insecure
```

![image-20240122143059387](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240122143059387.png)

注册Mysql为系统服务

```powershell
.\mysqld.exe install mysql8036 --defaults-file="E:/Mysql8036/my.ini"
```

> 删除Mysql服务命令

```powershell
.\mysqld.exe --remove [serviceName]
```

![image-20240122150006065](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240122150006065.png)

![image-20240122150037002](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240122150037002.png)

### 启动Mysql

```powershell
net start mysql8036
```

![image-20240122150220396](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240122150220396.png)

![image-20240122150315514](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240122150315514.png)

## 使用配置

### 设置密码

 默认无密码进入

```powershell
.\mysql.exe -uroot -p
```

![image-20240122151104838](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/image-20240122151104838.png)

设置一个密码

```sql
ALTER USER "root"@"localhost" IDENTIFIED  BY "123qwE!!!";
```

### 允许远程访问

```sql
use mysql;
update user set user.Host='%' where user.User='root';
```

刷新权限生效

```sql
FLUSH PRIVILEGES;
```

> 需要重启下mysql服务

