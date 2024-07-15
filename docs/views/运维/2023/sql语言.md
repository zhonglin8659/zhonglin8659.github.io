---
title: Sql语言 
date: 2023-12-14
sidebar: auto
tags: 
 - 数据库
categories:
 - 运维
---

结构化查询语言是高级的非过程化编程语言，允许用户在高层数据结构上工作。它不要求用户指定对数据的存放方法，也不需要用户了解具体的数据存放方式，所以具有完全不同底层结构的不同数据库系统, 可以使用相同的结构化查询语言作为数据输入与管理的接口。结构化查询语言语句可以嵌套，这使它具有极大的灵活性和强大的功能。

## SQL概述

### 1.1、什么是SQL

结构化查询语言(Structured Query Language)简称SQL，是一种特殊目的的编程语言，是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统；同时也是数据库脚本文件的扩展名。

### 1.2、SQL作用

是一种所有关系型数据库的查询规范，不同的数据库都支持。

通用的数据库操作语言，可以用在不同的数据库中。

不同的数据库 SQL 语句有一些区别

## SQL分类

**数据查询语言（DQL:Data Query Language）：**

其语句，也称为“数据检索语句”，用以从表中获得数据，确定数据怎样在应用程序给出。保留字SELECT是DQL（也是所有SQL）用得最多的动词，其他DQL常用的保留字有WHERE，ORDER BY，GROUP BY和HAVING。这些DQL保留字常与其他类型的SQL语句一起使用。

**数据操作语言**（**DML**：**Data Manipulation Language**）：

其语句包括动词INSERT，UPDATE和DELETE。它们分别用于添加，修改和删除表中的行。也称为动作查询语言。

**事务处理语言（TPL）：**

它的语句能确保被DML语句影响的表的所有行及时得以更新。TPL语句包括BEGIN TRANSACTION，COMMIT和ROLLBACK。

**数据定义语言（\**DDL\**）：**

其语句包括动词CREATE和DROP。在数据库中创建新表或删除表（CREAT TABLE 或 DROP TABLE）；为表加入索引等。DDL包括许多与人数据库目录中获得数据有关的保留字。它也是动作查询的一部分。

**指针控制语言（CCL）：**

它的语句，像DECLARE CURSOR，FETCH INTO和UPDATE WHERE CURRENT用于对一个或多个表单独立的操作。

**数据控制语言**（**DCL**）：

它的语句通过GRANT或REVOKE获得许可，确定单个用户和用户组对数据库对象的访问。某些RDBMS可用GRANT或REVOKE控制对表单个列的访问。

## MySql语法

每条语句以分号（;）结尾。

SQL 中不区分大小写，关键字中认为大写和小写是一样的

3种注释方法：

![image20200128220353753.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603187016784.png)

数据库模式定义语言DDL(Data Definition Language)，是用于描述数据库中要存储的现实世界实体的语言。

数据库模式定义语言并非程序设计语言，DDL数据库模式定义语言是SQL语言（结构化查询语言）的组成部分。DDL描述的模式，必须由计算机软件进行编译，转换为便于计算机存储、查询和操纵的格式，完成这个转换工作的程序称为模式编译器。

模式编译器处理模式定义主要产生两种类型的数据：数据字典以及数据类型和结构定义。



## 数据定义

### 数据库操作-下

#### 1.1、DDL概述

DDL（data definition language）数据库定义语言：其实就是我们在创建表的时候用到的一些sql，比如说：CREATE、ALTER、DROP等。DDL主要是用在操作数据库，定义或改变数据库表的结构，数据类型等初始化工作。

#### 1.2、创建数据库

**直接创建数据库**

```mysql
格式：
create database 数据库名;
```

**判断数据库是否已经存在，不存在则创建**

```mysql
格式：
create database if not exists 数据库名;
```

**创建数据库并指定字符集**

```mysql
格式：
create database 数据库名 character set 字符集;
```

**案例：**

```mysql
#创建数据库
mysql> create database zutuanxue;
Query OK, 1 rows affected (0.08 秒)#创建成功
#在次创建同名数据库
mysql> create database zutuanxue;
Can't create database 'zutuanxue'; database exists #无法创建数据库“zutuanxue”；数据库存在
#判断是否存在，如果不存在则创建数据库zutuanxue
mysql> create database if not exists zutuanxue;
Query OK, 1 rows affected, 1 warnings (0.01 秒)
#创建数据库并指定字符集为 gbk
mysql> create database zutuanxue01 default character set gbk;
Query OK, 1 rows affected (0.03 秒)
```

**注意：** default 可以不要

**补充：了解字符集查看**

```mysql
#查看字符集
mysql> show character set;
+----------+---------------------------------+---------------------+--------+
| Charset  | Description                     | Default collation   | Maxlen |
+----------+---------------------------------+---------------------+--------+
| armscii8 | ARMSCII-8 Armenian              | armscii8_general_ci | 1      |
| ascii    | US ASCII                        | ascii_general_ci    | 1      |
| big5     | Big5 Traditional Chinese        | big5_chinese_ci     | 2      |
| binary   | Binary pseudo charset           | binary              | 1      |
| cp1250   | Windows Central European        | cp1250_general_ci   | 1      |
| cp1251   | Windows Cyrillic                | cp1251_general_ci   | 1      |
| cp1256   | Windows Arabic                  | cp1256_general_ci   | 1      |
| cp1257   | Windows Baltic                  | cp1257_general_ci   | 1      |
| cp850    | DOS West European               | cp850_general_ci    | 1      |
| cp852    | DOS Central European            | cp852_general_ci    | 1      |
| cp866    | DOS Russian                     | cp866_general_ci    | 1      |
| cp932    | SJIS for Windows Japanese       | cp932_japanese_ci   | 2      |
| dec8     | DEC West European               | dec8_swedish_ci     | 1      |
| eucjpms  | UJIS for Windows Japanese       | eucjpms_japanese_ci | 3      |
| euckr    | EUC-KR Korean                   | euckr_korean_ci     | 2      |
| gb18030  | China National Standard GB18030 | gb18030_chinese_ci  | 4      |
| gb2312   | GB2312 Simplified Chinese       | gb2312_chinese_ci   | 2      |
| gbk      | GBK Simplified Chinese          | gbk_chinese_ci      | 2      |
| geostd8  | GEOSTD8 Georgian                | geostd8_general_ci  | 1      |
| greek    | ISO 8859-7 Greek                | greek_general_ci    | 1      |
| hebrew   | ISO 8859-8 Hebrew               | hebrew_general_ci   | 1      |
| hp8      | HP West European                | hp8_english_ci      | 1      |
| keybcs2  | DOS Kamenicky Czech-Slovak      | keybcs2_general_ci  | 1      |
| koi8r    | KOI8-R Relcom Russian           | koi8r_general_ci    | 1      |
| koi8u    | KOI8-U Ukrainian                | koi8u_general_ci    | 1      |
| latin1   | cp1252 West European            | latin1_swedish_ci   | 1      |
| latin2   | ISO 8859-2 Central European     | latin2_general_ci   | 1      |
| latin5   | ISO 8859-9 Turkish              | latin5_turkish_ci   | 1      |
| latin7   | ISO 8859-13 Baltic              | latin7_general_ci   | 1      |
| macce    | Mac Central European            | macce_general_ci    | 1      |
| macroman | Mac West European               | macroman_general_ci | 1      |
| sjis     | Shift-JIS Japanese              | sjis_japanese_ci    | 2      |
| swe7     | 7bit Swedish                    | swe7_swedish_ci     | 1      |
| tis620   | TIS620 Thai                     | tis620_thai_ci      | 1      |
| ucs2     | UCS-2 Unicode                   | ucs2_general_ci     | 2      |
| ujis     | EUC-JP Japanese                 | ujis_japanese_ci    | 3      |
| utf16    | UTF-16 Unicode                  | utf16_general_ci    | 4      |
| utf16le  | UTF-16LE Unicode                | utf16le_general_ci  | 4      |
| utf32    | UTF-32 Unicode                  | utf32_general_ci    | 4      |
| utf8     | UTF-8 Unicode                   | utf8_general_ci     | 3      |
| utf8mb4  | UTF-8 Unicode                   | utf8mb4_0900_ai_ci  | 4      |
+----------+---------------------------------+---------------------+--------+
41 行于数据集 (0.02 秒)
```

#### 1.3、查看数据库

**查看所有数据库**

```mysql
格式：
show databases;
```

**查看某个数据库**

```mysql
格式：
show create database 数据库名;
```

**案例：**

```mysql
#查看所有数据库
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mb                 |
| mysql              |
| performance_schema |
| sys                |
| zutuanxue           |
| zutuanxue01         |
+--------------------+
7 行于数据集 (0.01 秒)
#查看数据库zutuanxue的信息
mysql> show create database zutuanxue;
+----------+-------------------------------------------------------------------------------------------------+
| Database | Create Database                                                                                 |
+----------+-------------------------------------------------------------------------------------------------+
| zutuanxue | CREATE DATABASE `zutuanxue` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ |
+----------+-------------------------------------------------------------------------------------------------+
1 行于数据集 (0.01 秒)
```

### 数据库操作-下

#### 2.1、修改数据库

**修改字符集**

```mysql
格式：
alter database 数据库名 character set 字符集;
```

**案例：**

```mysql
#需求：将zutuanxue01数据库的字符集改成 utf8
mysql> alter database zutuanxue01 character set utf8;
Query OK, 1 rows affected, 1 warnings (0.09 秒)
```

**注意：**

为什么修改的不是数据库名？

容易引起数据丢失。

```mysql
rename database 旧数据库名 to 新数据库名;
```

这个是5.1.7到5.1.23版本可以用，但是官方不推荐，会有丢失数据的危险

#### 2.2、删除数据库

**删除数据库**

```mysql
格式:
drop database 数据库名;
```

**案例：**

```mysql
#需求：删除zutuanxue01数据库
mysql> drop database zutuanxue01;
Query OK, 0 rows affected (0.07 秒)
#查看所有数据库
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mb                 |
| mysql              |
| performance_schema |
| sys                |
| zutuanxue           |
+--------------------+
6 行于数据集 (0.01 秒)
```

#### 2.3、使用数据库

**查看当前数据库**

```mysql
格式：
select database();#mysql中的全局函数
```

**切换数据库**

```mysql
格式：
use 数据库名;
```

**案例：**

```mysql
#查看当前使用的数据库
mysql> select database();
+------------+
| database() |
+------------+
| NULL       |#当前没有使用的数据库
+------------+
1 行于数据集 (0.01 秒)
#切换或指定当前使用的数据库
mysql> use zutuanxue;
Query OK, 0 rows affected (0.01 秒)
#查看当前使用的数据库
mysql> select database();
+------------+
| database() |
+------------+
| zutuanxue   |#当前使用的数据库为zutuanxue
+------------+
1 行于数据集 (0.01 秒)
```

### 数据库表操作-上

#### 3.1、创建表

**创建表结构**

```mysql
格式：
create table 数据库表名(
  字段名1 字段类型1,
  字段名2 字段类型2,
  ...
  字段名n 字段类型n
);
```

**关键字说明**

create：创建

table：表

#### 3.2、数据类型（mysql）

**数字类型**

![image20200206171122469.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603187353636.png)

**日期类型**

![image20200206171204522.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603187402867.png)

**字符串类型**

![image20200206171241199.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603187415619.png)

**BLOB/TEXT**

![image20200206171350662.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603187429998.png)

**BINARY/VARBINARY**

![image20200206171423603.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603187442067.png)

**ENUM/SET**

![image20200206171501339.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603187455034.png)

**案例：**

创建一个学生表，里面包含了编号、学生名字、出生年月等数据

**分析：**

表名：students

字段有：编号（id,int类型）、学生名字（sname,varchar()类型）、出生日期（birthday date类型）

```mysql
create table students(
   id int, -- 学生id
   sname varchar(20), -- 学生名字
   birthday date -- 学生出生日期
);
#想要创建数据库表先进入，数据库
mysql> use zutuanxue;
Query OK, 0 rows affected (0.01 秒)
#创建表
mysql> create table students(id int ,sname varchar(20),birthday date);
Query OK, 0 rows affected (0.05 秒)
#查看所有表
mysql> show tables;
+--------------------+
| Tables_in_zutuanxue |
+--------------------+
| students           |
+--------------------+
1 行于数据集 (0.01 秒)
```

#### 3.3、查看表

**查看所有表**

```mysql
格式：
show tables;
```

**查看表结构**

```mysql
格式：
desc 数据库表名;
```

**查看表SQL信息**

```mysql
格式：
show create table 数据库表名;
```

**案例：**

查看zutuanxue数据库下的所有表

```mysql
#进入mysql数据库
mysql> use zutuanxue;
Query OK, 0 rows affected (0.01 秒)
#查看数据库里的所有表
mysql> show tables;
+--------------------+
| Tables_in_zutuanxue |
+--------------------+
| students           |
+--------------------+
1 行于数据集 (0.01 秒)
```

查看students数据库表的结构

```mysql
mysql> desc students;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| id       | int(11)     | YES  |     | NULL    |       |
| sname    | varchar(20) | YES  |     | NULL    |       |
| birthday | date        | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
3 行于数据集 (0.01 秒)
```

查看students数据库表的信息

```mysql
#查看students数据库表SQL信息
mysql> show create table students;
+----------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Table    | Create Table                                                                                                                                                                                 |
+----------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| students | CREATE TABLE `students` (
  `id` int(11) DEFAULT NULL,
  `sname` varchar(20) DEFAULT NULL,
  `birthday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
+----------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
1 行于数据集 (0.01 秒)
```

### 数据库表操作-中

#### 4.1、快速建表

**建新表**

```mysql
格式：
create table 新数据库表名 like 旧数据库表名;
```

**案例：**

创建一个students01表，要求表结构与students相同

```mysql
#创建一个新表与旧表结构相同
mysql> create table students01 like students;
Query OK, 0 rows affected (0.11 秒)
#查看表结构
mysql> desc students01;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| id       | int(11)     | YES  |     | NULL    |       |
| sname    | varchar(20) | YES  |     | NULL    |       |
| birthday | date        | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
3 行于数据集 (0.02 秒)
```

#### 4.2、删除表

**直接删除表**

```mysql
格式：
drop table 数据库表名;
```

**判断表是否存在，存在则删除**

```mysql
格式：
drop table if exists 数据库表名;
```

**案例：**

```mysql
#直接删除students01;
mysql> drop table students01;
Query OK, 0 rows affected (0.09 秒)
#有就删除students01,没有就不删除;
mysql> drop table if exists students01;
Query OK, 0 rows affected, 1 warnings (0.01 秒)
```

### 数据库表操作-下

#### 5.1、修改表

**添加表字段**

```mysql
格式：
alter table 数据库表名 add 字段名 字段类型；
```

**案例：**

为students表添加一个字段性别（sex char类型)

```mysql
#增加字段
mysql> alter table students add sex char;
Query OK, 0 rows affected (0.05 秒)
#查看表结构
mysql> desc students;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| id       | int(11)     | YES  |     | NULL    |       |
| sname    | varchar(20) | YES  |     | NULL    |       |
| birthday | date        | YES  |     | NULL    |       |
| sex      | char(1)     | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
4 行于数据集 (0.01 秒)
```

**修改表字段类型**

```mysql
格式：
alter table 数据库表名 modify 字段名 新字段类型;
```

**案例：**

将students表中字段性别（sex）的字段类型改为varchar(2)

```mysql
#修改字段类型
mysql> alter table students modify sex varchar(2);
Query OK, 0 rows affected (0.06 秒)
#查看表结构
mysql> desc students;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| id       | int(11)     | YES  |     | NULL    |       |
| sname    | varchar(20) | YES  |     | NULL    |       |
| birthday | date        | YES  |     | NULL    |       |
| sex      | varchar(2)  | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
4 行于数据集 (0.01 秒)
```

**修改表字段名**

```mysql
格式：
alter table 数据库表名 change 旧字段名 新字段名 字段类型;
```

**案例：**

将students表中的性别（sex）改成班级（classes）类型为varchar(10)

```mysql
#修改字段名
mysql> alter table students change sex classes varchar(10);
Query OK, 0 rows affected (0.07 秒)
#查看表结构
mysql> desc students;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| id       | int(11)     | YES  |     | NULL    |       |
| sname    | varchar(20) | YES  |     | NULL    |       |
| birthday | date        | YES  |     | NULL    |       |
| classes  | varchar(10) | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
4 行于数据集 (0.02 秒)
```

**删除表中字段**

```mysql
格式：
alter table 数据库表名 drop 字段名;
```

案例：

删除students表中的班级（classes）字段

```mysql
#删除字段
mysql> alter table students drop classes;
Query OK, 0 rows affected (0.05 秒)
#查看表结构
mysql> desc students;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| id       | int(11)     | YES  |     | NULL    |       |
| sname    | varchar(20) | YES  |     | NULL    |       |
| birthday | date        | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
3 行于数据集 (0.01 秒)
```

**修改表名**

```mysql
格式：
rename table 数据库表名 to 新数据库表;
```

**案例：**

```mysql
#修改表名
mysql> rename table students to student;
Query OK, 0 rows affected (0.04 秒)
#查看所有表
mysql> show tables;
+--------------------+
| Tables_in_zutuanxue |
+--------------------+
| student            |
+--------------------+
1 行于数据集 (0.01 秒)
```

**修改字符集**

```mysql
格式：
alter table 数据库表名 character set 字符集;
```

**案例：**

修改student表的字符集

```mysql
#修改数据库表字符集
mysql> alter table student character set gbk;
Query OK, 0 rows affected (0.07 秒)
#查看数据库表SQL信息
mysql> show create table student;
+---------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Table   | Create Table                                                                                                                                                                                                  |
+---------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| student | CREATE TABLE `student` (
  `id` int(11) DEFAULT NULL,
  `sname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=gbk |
+---------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
1 行于数据集 (0.01 秒)
```



## 数据控制

数据控制语言 (Data Control Language) 在SQL语言中，是一种可对数据访问权进行控制的指令，它可以控制特定用户账户对数据表、查看表、存储程序、用户自定义函数等数据库对象的控制权。由 GRANT 和 REVOKE 两个指令组成。

#### 1.1、什么是DCL

DCL 语句主要是DBA 用来管理系统中的对象权限时所使用，一般的开发人员很少使用。

DCL中主要包括创建用户、给用户授权、对用户撤销授权、查询用户授权和删除用户等操作。

#### 1.2、为什么学习DCL

在一个企业里面的数据库服务器上面可能同时运行着很多个项目的数据库。所以，我们应该可以根据不同的项目建立不同的用户，分配不同的权限来管理和维护数据库。

### 用户管理

mysql数据库的用户都在mysql数据库下面的user表中

#### 2.1、查看用户

```mysql
格式：
select * from user;
```

**案例：**

```mysql
mysql> select * from user;

mysql> select user,host,plugin,authentication_string from user;
```

![image20200218234525100.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603521889167.png)

#### 2.2、创建用户

```mysql
格式：
create user '用户名'@'主机名' identified by '密码';
```

**注意：**

**用户名：** 新用户的名字

**主机名：** 指定该用户在哪个主机上可以登陆，如果是本地用户可用localhost，如果想让该用户可以从任意远程主机登陆，可以使用通配符%

**密码：** 密码可以为空，如果为空则该用户可以不需要密码登陆服务器

**案例：**

创建一个用户root1，只能在本机登录（localhost）

```mysql
mysql> create user 'root1'@'localhost' identified by '123';
Query OK, 0 rows affected (0.02 秒)

mysql> select user,host,plugin,authentication_string from user;
```

![image20200219000040373.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603521923781.png)

创建一个用户root2，可以在任何主机（%）登录

```mysql
mysql> create user 'root2'@'%' identified by '123';
Query OK, 0 rows affected (0.01 秒)

mysql> select user,host,plugin,authentication_string from user;
```

![image20200219000412028.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603521943126.png)

**注意：**

指定加密方式，增加用户

```mysql
mysql> create user 'root3'@'%' identified with mysql_native_password by '123';
Query OK, 0 rows affected (0.01 秒)

mysql> select user,host,plugin,authentication_string from user;
```

![image20200219001939522.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603521967385.png)

#### 2.3、删除用户

```mysql
drop user '用户名'@'主机名';
```

**案例：**

删除root1

```mysql
mysql> drop user root1@localhost;
Query OK, 0 rows affected (0.01 秒)

mysql> select user,host,plugin,authentication_string from user;
```

### 密码管理

#### 3.1、修改用户密码

```mysql
格式：
alter user '用户名'@'主机名' identified by '密码';
```

**案例：**

修改root2的密码

```mysql
mysql> alter user 'root2'@'%' identified by '456';
Query OK, 0 rows affected (0.02 秒)
```

**注意：**

如果想用该root2用户连接上mysql服务端的话，我们的密码修改时应该是：

```mysql
mysql> alter user 'root2'@'%' identified with mysql_native_password by '456';
Query OK, 0 rows affected (0.02 秒)
```

#### 3.2、设置管理员（root）密码

清空密码

```mysql
use mysql; 

update user set authentication_string='' where user='root';#设置提root用户的密码为‘’，本地，远程 
```

设置密码

```mysql
alter user 'root'@'%' identified by 'Root12345';
alter user 'root'@'localhost' identified by 'Root12345';
```

### 权限管理

#### 4.1、查看用户权限

```mysql
格式：
show grants for '用户名'@'主机名';
```

**案例：**

查看’root2’，'root3’及’root’权限

```mysql
mysql> show grants for 'root2'@'%';
+-----------------------------------+
| Grants for root2@%                |
+-----------------------------------+
| GRANT USAGE ON *.* TO `root2`@`%` |
+-----------------------------------+
1 行于数据集 (0.01 秒)

mysql> show grants for 'root3'@'%';
+-----------------------------------+
| Grants for root3@%                |
+-----------------------------------+
| GRANT USAGE ON *.* TO `root3`@`%` |
+-----------------------------------+
1 行于数据集 (0.02 秒)

mysql> show grants for 'root'@'%'
```

![image20200219002900607.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603521994010.png)

#### 4.2、授权

```mysql
格式：
grant 权限 1, 权限 2... on 数据库名.表名 to '用户名'@'主机名';
```

**注意：**

**grant… on …to ：**授权关键字

**权限：** 如select\insert\update\delete等，如果是所有用all

**数据库名.表名：** 该用户可以操作哪个数据库的哪些表。如果要授予该用户对所有数据库和表的相应操作权限则可用*表示，如*.*

**’用户名’@‘主机名’ ：** 注意单引号不能省略

**案例：**

给’root2’分配，增加、删除、修改、查询表的权限

```mysql
mysql> grant insert,delete,update,select on zutuanxue.* to 'root2'@'%';
```

给’root3’分配所有权限

```mysql
mysql> grant all on *.* to 'root3'@'%';
```

#### 4.3、撤销授权

```mysql
格式：
revoke 权限 1, 权限 2... on 数据库名.表名 from '用户名'@'主机名';
```

**注意：**

**revoke… on …from ：** 撤消授权关键字

**权限：** 如select\insert\update\delete等，如果是所有用all

**数据库名.表名：** 该用户可以操作哪个数据库的哪些表。如果要撤消授予该用户对所有数据库和表的相应操作权限则可用*表示，如*.*

**’用户名’@‘主机名’ ：** 注意单引号不能省略

**案例：**

撤消’root2’的权限

```mysql
mysql> revoke all on zutuanxue.* from 'root2'@'%';
Query OK, 0 rows affected (0.01 sec)
```



## 数据操作

数据操纵语言DML（Data Manipulation Language），用户通过它可以实现对数据库的基本操作。就是我们最经常用到的UPDATE、INSERT、DELETE。 主要用来对数据库的数据进行一些操作。

### 表记录操作-上

#### 1.1、DML概述

DML 操作是指对数据库中表记录的操作，主要包括表记录的插入（insert）、更新（update）和删除（delete），是开发人员日常使用最频繁的操作。

#### 1.2、插入记录

```mysql
格式：
insert into 数据库表名 [字段名列表] values(字段值列表)
```

**说明：**

**insert into 数据库表名：**指定增加记录的表

**[字段名列表]：**表示要给那些字段加入字段值，没有，就为所有字段

**values（字段值列表）：**表示为对应的字段加入对应的字段值

**为所有字段插入值**

```mysql
格式：
insert into 数据库表名(字段名1,字段名2...,字段名n)values(字段值1,字段值2...,字段值n);
或
insert into 数据库表名 values(字段值1,字段值2...,字段值n);
```

**案例：**

```mysql
#指定所有字段插入记录
mysql> insert into student(id,sname,birthday)values(1,"林志颖","1974-10-18");
Query OK, 1 rows affected (0.03 秒)
#不指定字段，默认所有字段插入记录
mysql> insert into student values(2,"郭德纲","1973-01-18");
Query OK, 1 rows affected (0.01 秒)
#查看数据库表中所有记录
mysql> select * from student;
+------+-----------+------------+
| id   | sname     | birthday   |
+------+-----------+------------+
| 1    | 林志颖 | 1974-10-18 |
| 2    | 郭德纲 | 1973-01-18 |
+------+-----------+------------+
2 行于数据集 (0.01 秒)
```

**插入部分字段值**

```mysql
格式：
insert into 数据库表名(字段名1,字段名2...)values(字段值1,字段值2...);
#注意：没有给定字段的值，为null;
```

案例：

```mysql
#插入部分字段值
mysql> insert into student(id,sname)values(3,"柳岩");
Query OK, 1 rows affected (0.01 秒)
#查看数据库表中所有记录
mysql> select * from student;
+------+-----------+------------+
| id   | sname     | birthday   |
+------+-----------+------------+
| 1    | 林志颖 | 1974-10-18 |
| 2    | 郭德纲 | 1973-01-18 |
| 3    | 柳岩    | NULL       |
+------+-----------+------------+
3 行于数据集 (0.01 秒)
```

**注意：**

只插入部份字段值时，前面必须带字段名字。

```mysql
mysql> insert into student values(4,"王宝强");
Column count doesn't match value count at row 1#列计数与第1行的值计数不匹配
```

### 表记录操作-下

#### 2.1、更新记录

```mysql
格式：
update 数据库表名 set 字段名1=字段值1,字段名2=字段值2...,字段名n=字段值n [where 条件表达式];
#注意：更新的数据可以是0-N条记录
```

**说明：**

**update 数据库表名：**指定需要更新的数据库表

**set 字段名=字段值：**修改指定的数据库表中字段的值

**[where 条件表达式]：**修改满足条件的记录的字段值，可省略

**不带条件记录更新**

```mysql
格式：
update 数据库表名 set 字段名1=字段值1,字段名2=字段值2...,字段名n=字段值n;  #表示修改表中所有记录
```

**案例：**

加入一个性别（sex varchar(2)）字段，将sex的值都改为“男”

```mysql
#在student表中增加字段sex
mysql> alter table student add sex varchar(2);
Query OK, 0 rows affected (0.24 秒)
#查看表结构
mysql> desc student;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| id       | int(11)     | YES  |     | NULL    |       |
| sname    | varchar(20) | YES  |     | NULL    |       |
| birthday | date        | YES  |     | NULL    |       |
| sex      | varchar(2)  | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
4 行于数据集 (0.01 秒)
#修改student表中sex字段的值为'男'
mysql> update student set sex='男';
Query OK, 3 rows affected (0.09 秒)
#查看表中所有记录
mysql> select * from student;
+------+-----------+------------+------+
| id   | sname     | birthday   | sex  |
+------+-----------+------------+------+
| 1    | 林志颖 | 1974-10-18 | 男  |
| 2    | 郭德纲 | 1973-01-18 | 男  |
| 3    | 柳岩    | NULL       | 男  |
+------+-----------+------------+------+
3 行于数据集 (0.01 秒)
```

**带条件记录更新**

```mysql
格式：
update 数据库表名 set 字段名1=字段值1,字段名2=字段值2...,字段名n=字段值n [where 条件表达式];   #表示修改表中满足条件的记录
```

**案例：**

修改id=3的记录，将sex改为’女’

```mysql
#修改id为3记录中的sex改为'女'
mysql> update student set sex='女' where id=3;
Query OK, 1 rows affected (0.01 秒)
#查看表中所有记录
mysql> select * from student;
+------+-----------+------------+------+
| id   | sname     | birthday   | sex  |
+------+-----------+------------+------+
| 1    | 林志颖 | 1974-10-18 | 男  |
| 2    | 郭德纲 | 1973-01-18 | 男  |
| 3    | 柳岩    | NULL       | 女  |
+------+-----------+------------+------+
3 行于数据集 (0.01 秒)
```

修改id=3的记录，将sex改为’女’，birthday改为1980-11-08

```mysql
#修改id为3记录中的sex改为'女',birthday改为1980-11-08
mysql> update student set sex='女',birthday='1980-11-08' where id=3;
Query OK, 1 rows affected (0.11 秒)
#查看表中所有记录
mysql> select * from student;
+------+-----------+------------+------+
| id   | sname     | birthday   | sex  |
+------+-----------+------------+------+
| 1    | 林志颖 | 1974-10-18 | 男  |
| 2    | 郭德纲 | 1973-01-18 | 男  |
| 3    | 柳岩    | 1980-11-08 | 女  |
+------+-----------+------------+------+
3 行于数据集 (0.01 秒)
```

#### 2.2、删除记录

```mysql
格式：
delete from 数据库表名 [where 条件表达式];
```

**说明：**

**delete from 数据库表名：**指定删除记录的表

**[where 条件表达式]：**删除满足条件的记录的字段值，可省略

**带条件删除记录**

```mysql
格式：
delete from 数据库表名 [where 条件表达式]; #删除满足条件的记录
```

**案例：**

删除id为1的记录

```mysql
#删除id=1的记录
mysql> delete from student where id=1;
Query OK, 1 rows affected (0.08 秒)
#查看所有记录
mysql> select * from student;
+------+-----------+------------+------+
| id   | sname     | birthday   | sex  |
+------+-----------+------------+------+
| 2    | 郭德纲 | 1973-01-18 | 男  |
| 3    | 柳岩    | 1980-11-08 | 女  |
+------+-----------+------------+------+
2 行于数据集 (0.02 秒)
```

**不带条件删除记录**

```mysql
格式：
delete from 数据库表名;    #删除表中所有的记录
或
truncate table 数据库表名;   #删除表中所有的记录
```

**案例：**

删除表中所有记录

```mysql
#删除所有记录
mysql> delete from student;
Query OK, 2 rows affected (0.08 秒)
#查看所有记录
mysql> select * from student;
空的数据集 (0.01 秒)
#删除所有记录
mysql> truncate table student;
Query OK, 0 rows affected (0.08 秒)
#查看所有记录
mysql> select * from student;
空的数据集 (0.01 秒)
```

**注意：**

truncate删除的是表的结构，再创建一张表；delete删除的是表的记录；

可以在数据库图表中的表之间创建关系，以显示一个表中的列与另一个表中的列是如何相链接的。

在一个关系型数据库中，利用关系可以避免多余的数据。

### 表与表之间关系概述

#### 1.1、什么是表与表之间关系

在关系型数据库中，为了避免数据冗余，我们的一些表与表之间肯定是有一定的关系。

如：学生表与老师表，部门表与员工表，用户表与权限表等。

在表设计的时候，就应该体现出来表与表之间的这种关系。

#### 1.2、表与表之间关系分类

##### 1.2.1、一对多关系

一对多关系是最普通的一种关系。在这种关系中，A 表中的一行可以匹配 B 表中的多行，但是 B 表中的一行只能匹配 A 表中的一行。

只有当一个相关列是一个主键或具有唯一约束时，才能创建一对多关系。

![image20200215112949021.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603241036981.png)

**注意：**

一对多的创建原则：

主外键关连

##### 1.2.2、一对一关系

在一对一关系中，A 表中的一行最多只能匹配于 B 表中的一行，反之亦然。如果相关列都是主键或都具有唯一约束，则可以创建一对一关系。

![image20200215122050731.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603241052871.png)

**注意：**

一对一的创建原则：

外键唯一：主表的主键和从表的外键（唯一），形成主外键关系，外键唯一 UNIQUE

外键是主键：主表的主键和从表的主键，形成主外键关系

##### 1.2.3、多对多关系

在多对多关系中，A 表中的一行可以匹配 B 表中的多行，反之亦然。要创建这种关系，需要定义第三个表，称为结合表，它的主键由 A 表和 B 表的外部键组成。

![image20200215121200999.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603241065129.png)

**注意：**

多对多的创建原则：

二个表与中间表创建1对多的关系。

### 一对多应用

创建一对多关系：主外键关连

![image20200215123556759.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603241079269.png)

新华出版社（Python爬虫、Linux）

海燕出版社（操作系统、数学）

摆渡出版社（英语、网页设计）

大众出版社（）

**案例：**

这是一个书和出版社的一个例子，书要关联出版社（多个书可以是一个出版社，一个出版社也可以有好多书）。

表的创建

```mysql
#出版社表（被关联表）
create table press(
id int primary key auto_increment, 
name char(20)-- 出版社名字
);

#书表（关联表）
create table book(
book_id int primary key auto_increment,
book_name varchar(20),
book_price int,
press_id int,
constraint fk_pressid_id foreign key(press_id) references press(id)
on delete cascade
on update cascade
);
```

插入数据

```mysql
mysql> insert into press(name) values('新华出版社'), ('海燕出版社'), ('摆渡出版社'), ('大众出版社');
Query OK, 4 rows affected (0.09 秒)

mysql> insert into book(book_name,book_price,press_id) values('Python爬虫',100,1), ('Linux',80,1), ('操作系统',70,2), ('数学',50,2), ('英语',103,3), ('网页设计',22,3);
Query OK, 6 rows affected (0.07 秒)
```

查看数据

```mysql
mysql> select * from press;
+----+-----------------+
| id | name            |
+----+-----------------+
| 1  | 新华出版社 |
| 2  | 海燕出版社 |
| 3  | 摆渡出版社 |
| 4  | 大众出版社 |
+----+-----------------+
4 行于数据集 (0.01 秒)

mysql> select * from book;
+---------+--------------+------------+----------+
| book_id | book_name    | book_price | press_id |
+---------+--------------+------------+----------+
| 1       | Python爬虫 | 100        | 1        |
| 2       | Linux        | 80         | 1        |
| 3       | 操作系统 | 70         | 2        |
| 4       | 数学       | 50         | 2        |
| 5       | 英语       | 103        | 3        |
| 6       | 网页设计 | 22         | 3        |
+---------+--------------+------------+----------+
6 行于数据集 (0.01 秒)
```

### 一对一应用

创建一对一：外键唯一，user_id唯一对应一个uid，user_id必须在uid里出现

![image20200215164955805.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603241161787.png)

**案例：**

用户和管理员（只有管理员才可以登录，一个管理员对应一个用户）

表创建

```mysql
#用户表（被关联表）
create table user(
id int primary key auto_increment, #主键自增
name char(10)
);

#管理员表（关联表）
create table manager(
id int primary key auto_increment,
user_id int unique,
password varchar(16),
foreign key(user_id) references user(id)
on delete cascade
on update cascade
);
```

插入数据

```mysql
mysql> insert into user(name)values('susan1'),('susan2'),('susan3'),('susan4'),('susan5'),('susan6');
Query OK, 6 rows affected (0.02 秒)

mysql> insert into manager(user_id,password) values(4,'sds156'),(2,'531561'),(6,'f3swe');
Query OK, 3 rows affected (0.03 秒)
```

查看数据

```mysql
mysql> select * from user;
+----+--------+
| id | name   |
+----+--------+
| 1  | susan1 |
| 2  | susan2 |
| 3  | susan3 |
| 4  | susan4 |
| 5  | susan5 |
| 6  | susan6 |
+----+--------+
6 行于数据集 (0.01 秒)

mysql> select * from manager;
+----+---------+----------+
| id | user_id | password |
+----+---------+----------+
| 1  | 4       | sds156   |
| 2  | 2       | 531561   |
| 3  | 6       | f3swe    |
+----+---------+----------+
3 行于数据集 (0.01 秒)
```

### 多对多应用

创建多对多：要把book_id和author_id设置成联合唯一

![image20200215161523092.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603241222140.png)

九阳神功（egon、e3）

葵花宝典（egon、e4）

辟邪剑谱（e1、e2、e3）

降龙十巴掌（e4）

**或者**

egon（九阳神功、葵花宝典）

e1（辟邪剑谱）

e2（辟邪剑谱）

e3（九阳神功、辟邪剑谱）

e4（葵花宝典、降龙十巴掌）

**案例：**

这是一个书和作者的一个例子，书要关联作者（一个作者可以写多个书，一本书也可以有多个作者，双向的一对多，即多对多）。

表创建

```mysql
#书表（被关联表）
create table book1(
id int primary key auto_increment,
name varchar(10),
price float(3,2)
);

#作者表（被关联表）
create table author(
id int primary key auto_increment,
name char(5)
);

#作者和书表（关联表）
create table author2book(
id int primary key auto_increment,
book_id int not null,
author_id int not null,
unique(book_id,author_id),
foreign key(book_id) references book1(id)
on delete cascade
on update cascade,
foreign key(author_id) references author(id)
on delete cascade
on update cascade
);
```

插入数据

```mysql
mysql> insert into book1(name,price) values('九阳神功',9.9), ('葵花宝典',9.5), ('辟邪剑谱',5),  ('降龙十巴掌',7.3);
Query OK, 4 rows affected (0.09 秒)

mysql> insert into author(name) values('egon'),('e1'),('e2'),('e3'),('e4');
Query OK, 5 rows affected (0.07 秒)

mysql> insert into author2book(book_id,author_id) values(1,1),(1,4),(2,1),(2,5),(3,2),(3,3),(3,4),(4,5);
Query OK, 8 rows affected (0.03 秒)
```

查看数据

```mysql
mysql> select * from book1;
+----+-----------------+-------+
| id | name            | price |
+----+-----------------+-------+
| 1  | 九阳神功    | 9.90  |
| 2  | 葵花宝典    | 9.50  |
| 3  | 辟邪剑谱    | 5.00  |
| 4  | 降龙十巴掌 | 7.30  |
+----+-----------------+-------+
4 行于数据集 (0.02 秒)

mysql> select * from author;
+----+------+
| id | name |
+----+------+
| 1  | egon |
| 2  | e1   |
| 3  | e2   |
| 4  | e3   |
| 5  | e4   |
+----+------+
5 行于数据集 (0.01 秒)

mysql> select * from author2book;
+----+---------+-----------+
| id | book_id | author_id |
+----+---------+-----------+
| 1  | 1       | 1         |
| 2  | 1       | 4         |
| 3  | 2       | 1         |
| 4  | 2       | 5         |
| 5  | 3       | 2         |
| 6  | 3       | 3         |
| 7  | 3       | 4         |
| 8  | 4       | 5         |
+----+---------+-----------+
8 行于数据集 (0.01 秒)
```



## 数据查询

DQL（Data QueryLanguage ）数据查询语言，基本结构是由SELECT子句，FROM子句，WHERE子句组成的查询块。

### DQL概述

#### 1.1、什么是DQL

DQL：数据查询语言，用于从数据库表中查询数据，并不会修改数据，只是一种显示数据的方式。由select语句构成。

#### 1.2、记录查询格式

```mysql
格式：
select */字段列表 from 数据库表名 [where 条件表达式];
```

**格式说明：**

select */字段列表： 查询完后需要展示的字段

from 数据库表名： 指定要查询的数据库表

[where 条件表达式]： 查询满足条件的记录

### 记录查询

#### 2.1、简单查询

**查询表中的记录和列**

```mysql
格式：
select * from 数据库表名;   #查询表中所有记录,显示所有列
或
select 字段名1,字段名2,...,字段名n from 数据库表名;   #查询表中所有记录，显示指定列
```

**案例：**

查询student表中的所有记录，显示所有列

```mysql
#显示所有记录
mysql> select * from student;
+------+-----------+------------+------+
| id   | sname     | birthday   | sex  |
+------+-----------+------------+------+
| 1    | 郭德纲 | 1973-01-18 | 男  |
| 2    | 林志颖 | 1974-10-18 | 男  |
| 3    | 柳岩    | 1980-11-08 | 女  |
+------+-----------+------------+------+
3 行于数据集 (0.01 秒)
```

查询student表中的所有记录，显示所有姓名、性别列

```mysql
#显示所有记录,显示列为姓名、性别
mysql> select sname,sex from student;
+-----------+------+
| sname     | sex  |
+-----------+------+
| 郭德纲 | 男  |
| 林志颖 | 男  |
| 柳岩    | 女  |
+-----------+------+
3 行于数据集 (0.01 秒)
```

#### 2.2、别名查询

别名有二种：字段别名、表别名

作用：

字段别名查询出记录显示新的名字，并不影响表的结构。

表别名取了一个新的名字，可以代替表名使用。

**字段别名**

```mysql
格式：
select 字段名1 as 别名1,字段名2 as 别名2,...,字段名n as 别名n from 数据库表名; 
```

**案例：**

查询student表中的sname和sex，以别名’姓名’和’性别’显示

```mysql
#使用字段别名显示姓名、性别
mysql> select sname as 姓名,sex as 性别 from student;
+-----------+------+
| 姓名        | 性别   |
+-----------+------+
| 郭德纲 | 男  |
| 林志颖 | 男  |
| 柳岩    | 女  |
+-----------+------+
3 行于数据集 (0.01 秒)
```

**表别名**

```mysql
格式：
select 字段名1 as 别名1,字段名2 as 别名2,...,字段名n as 别名n from 数据库表名 as 别名; 
```

案例：

查询student表中的sname和sex，以别名’姓名’和’性别’显示，并为student表取了一个别名 s

```mysql
#使用字段别名显示姓名、性别，表别名没有具体表现
mysql> select sname as 姓名,sex as 性别 from student as s;
+-----------+------+
| 姓名        | 性别   |
+-----------+------+
| 郭德纲 | 男  |
| 林志颖 | 男  |
| 柳岩    | 女  |
+-----------+------+
3 行于数据集 (0.01 秒)
```

**注意：**

表别名一般用于多表查询，单表查询中没有具体体现。

#### 2.3、清除重复记录查询

```mysql
格式：
select distinct 字段名 from 数据库表名;
```

**案例：**

去掉性别重复的记录

去掉性别和姓名同时重复的记录

```mysql
#查看所有记录
mysql> select * from student;
+------+-----------+------------+------+
| id   | sname     | birthday   | sex  |
+------+-----------+------------+------+
| 1    | 郭德纲 | 1973-01-18 | 男  |
| 2    | 林志颖 | 1974-10-18 | 男  |
| 3    | 柳岩    | 1980-11-08 | 女  |
+------+-----------+------------+------+
3 行于数据集 (0.01 秒)
#查看sex不重复的记录
mysql> select distinct sex from student;
+------+
| sex  |
+------+
| 男  |
| 女  |
+------+
2 行于数据集 (0.01 秒)
#查看sex,sname都不重复的记录
mysql> select distinct sex,sname from student;
+------+-----------+
| sex  | sname     |
+------+-----------+
| 男  | 郭德纲 |
| 男  | 林志颖 |
| 女  | 柳岩    |
+------+-----------+
3 行于数据集 (0.01 秒)
```

#### 2.4、运算查询

**字段与固定值运算**

```mysql
格式：
select 字段名+固定值 from 数据库表名;
```

**注意：**

运算的字段必须是数值型

**案例：**

查询student表中年龄减10岁，并显示sname和age

```mysql
mysql> select age-10 as age ,sname from student;
+-----+--------+
| age | sname  |
+-----+--------+
|  37 | 郭德纲 |
|  36 | 林志颖 |
|  30 | 柳岩   |
+-----+--------+
3 rows in set
```

**字段与字段运算**

```mysql
格式：
select 字段名+字段名 from 数据库表名;
```

**注意：**

运算的字段必须是数值型

**案例：**

查询student表中age与id的和，并显示出来age和id

```mysql
mysql> select age+id,age,id
 from student;
+--------+-----+----+
| age+id | age | id |
+--------+-----+----+
|     48 |  47 |  1 |
|     48 |  46 |  2 |
|     43 |  40 |  3 |
+--------+-----+----+
3 rows in set
```

### 条件查询

#### 3.1、条件查询前准备

新建学生信息表（students）

**字段：**学生ID（sid）、学生姓名(sname)、学生性别(sex)、学生年龄(age)、英语成绩(english)、数学成绩(math)、入学时间(entertime)、备注(remark)

```mysql
create table students(
    sid int,
    sname varchar(20),
    sex varchar(2),
    age int,
    english double(4,1),
    math double(4,1),
    entertime date,
    remark text
);
```

![image20200207010430241.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603187929354.png)

**记录：**

```mysql
insert into students values
(1,'张三','男',19,98.5,88,'2017-09-01','他来自四川'),
(2,'李四','男',20,80,88,'2017-09-01','他来自重庆'),
(3,'张红','女',19,86,80,'2017-09-01','他来自北京'),
(4,'张八','男',18,80,85,'2017-09-01','他来自天津'),
(5,'李三','男',19,60,88,'2017-09-01','他来自湖北'),
(6,'王六','女',20,50,70,'2017-09-01','他来自湖南'),
(7,'刘红','女',18,90,98,'2017-09-01','他来自甘肃');
```

![image20200207011044328.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603187963975.png)

#### 3.2、基础比较运算符

```mysql
格式：
>、<、<=、>=、=、<>
```

**注意：**

在SQL中“<>”，表示不等于，mysql中也可以用“!=”表示

在SQL中没有“==”

**案例：**

查询学生信息表中英语成绩大于80的学生信息

```mysql
mysql> select * from students where english>80;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 7    | 刘红 | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
+------+--------+------+------+---------+------+------------+-----------------+
3 行于数据集 (0.02 秒)
```

查询学生信息表中英语成绩小于80的学生信息

```mysql
mysql> select * from students where english<80;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
| 6    | 王六 | 女  | 20   | 50.0    | 70.0 | 2017-09-01 | 他来自湖南 |
+------+--------+------+------+---------+------+------------+-----------------+
2 行于数据集 (0.01 秒)
```

查询学生信息表中年龄大于等于19岁的学生信息

```mysql
mysql> select * from students where age>=19;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 2    | 李四 | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
| 6    | 王六 | 女  | 20   | 50.0    | 70.0 | 2017-09-01 | 他来自湖南 |
+------+--------+------+------+---------+------+------------+-----------------+
5 行于数据集 (0.01 秒)
```

查询学生信息表中年龄小于等于19岁的学生信息

```mysql
mysql> select * from students where age<=19;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 4    | 张八 | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
| 7    | 刘红 | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
+------+--------+------+------+---------+------+------------+-----------------+
5 行于数据集 (0.01 秒)
```

查询学生信息表中数学成绩等于88的学生信息

```mysql
mysql> select * from students where math=88;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 2    | 李四 | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
+------+--------+------+------+---------+------+------------+-----------------+
3 行于数据集 (0.02 秒)
```

查询学生信息表中年龄不等于18岁的学生信息

```mysql
mysql> select * from students where age<>18;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 2    | 李四 | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
| 6    | 王六 | 女  | 20   | 50.0    | 70.0 | 2017-09-01 | 他来自湖南 |
+------+--------+------+------+---------+------+------------+-----------------+
5 行于数据集 (0.02 秒)
```

查询学生信息表中年龄大于等于20岁的学生的姓名和性别

```mysql
mysql> select sname,sex from students where age>=20;
+--------+------+
| sname  | sex  |
+--------+------+
| 李四 | 男  |
| 王六 | 女  |
+--------+------+
2 行于数据集 (0.01 秒)
```

#### 3.3、提高比较运算符

```mysql
格式：
between...and...  #在一定的范围内
```

**注意：**

包含头尾

**案例：**

查询学生信息表中英语成绩80到90岁之间的学生信息

```mysql
mysql> select * from students where english between 80 and 90;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 2    | 李四 | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 4    | 张八 | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
| 7    | 刘红 | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
+------+--------+------+------+---------+------+------------+-----------------+
4 行于数据集 (0.01 秒)
格式：
in(值1,值2...,值n)  #表示用n个值相等
not in(值1,值2...,值n)  #表示用n个值不相等
```

**案例：**

查询学生信息表中sid为1，3，5的信息

```mysql
mysql> select * from students where sid in(1,3,5);
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
+------+--------+------+------+---------+------+------------+-----------------+
3 行于数据集 (0.01 秒)
```

查询学生信息表中sid除了1，3，5的信息

```mysql
mysql> select * from students where sid not in(1,3,5);
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 2    | 李四 | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 4    | 张八 | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
| 6    | 王六 | 女  | 20   | 50.0    | 70.0 | 2017-09-01 | 他来自湖南 |
| 7    | 刘红 | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
+------+--------+------+------+---------+------+------------+-----------------+
4 行于数据集 (0.01 秒)
格式：
like '%值%'  #模糊查询
```

**注意：**

```
mysql通配符

%  :匹配任意多个字符

_   ：匹配一个字符
```

**案例：**

查询学生信息表中姓’张’的学生信息

```mysql
mysql> select * from students where sname like '张%';
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 4    | 张八 | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
+------+--------+------+------+---------+------+------------+-----------------+
3 行于数据集 (0.01 秒)

mysql> select * from students where sname like '张';
空的数据集 (0.01 秒)
```

查询学生信息表中包含’红’字的学生信息

```mysql
mysql> select * from students where sname like '%红%';
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 7    | 刘红 | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
+------+--------+------+------+---------+------+------------+-----------------+
2 行于数据集 (0.01 秒)
```

查询学生信息表中姓’王’的二个字的学生信息

```mysql
mysql> select * from students where sname like '王_';
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 6    | 王六 | 女  | 20   | 50.0    | 70.0 | 2017-09-01 | 他来自湖南 |
+------+--------+------+------+---------+------+------------+-----------------+
1 行于数据集 (0.01 秒)
格式：
is null   #表示某字段值为null
is not null    #表示某字段值不为null
```

**注意：**

不能写成：字段名=null

**案例：**

查询学生信息表中age为null学生信息

查询学生信息表中english为null学生信息

```mysql
mysql> select * from students where age is null;
+------+--------+------+------+---------+------+-----------+--------+
| sid  | sname  | sex  | age  | english | math | entertime | remark |
+------+--------+------+------+---------+------+-----------+--------+
| 8    | 王五 | 男  | NULL | NULL    | NULL | NULL      | NULL   |
+------+--------+------+------+---------+------+-----------+--------+
1 行于数据集 (0.01 秒)

mysql> select * from students where english is null;
+------+-----------+------+------+---------+------+-----------+--------+
| sid  | sname     | sex  | age  | english | math | entertime | remark |
+------+-----------+------+------+---------+------+-----------+--------+
| 8    | 王五    | 男  | NULL | NULL    | NULL | NULL      | NULL   |
| 9    | 李老六 | 男  | 19   | NULL    | NULL | NULL      | NULL   |
+------+-----------+------+------+---------+------+-----------+--------+
2 行于数据集 (0.01 秒)
```

查询学生信息表中english不为null学生信息

```mysql
mysql> select * from students where english is not null;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 2    | 李四 | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 4    | 张八 | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
| 6    | 王六 | 女  | 20   | 50.0    | 70.0 | 2017-09-01 | 他来自湖南 |
| 7    | 刘红 | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
+------+--------+------+------+---------+------+------------+-----------------+
7 行于数据集 (0.02 秒)
```

#### 3.4、逻辑运算符

```mysql
格式：
and #与，二边条件同时成立，成立  &&
or #或，二边条件有一边成立，成立  ||
not  #非，一边条件成立，取反；一边条件不成立，取反  ！
```

**案例：**

查询学生信息表中english大于85的男生的学生信息

```mysql
mysql> select * from students where english>85 and sex='男';
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
+------+--------+------+------+---------+------+------------+-----------------+
1 行于数据集 (0.01 秒)
```

查询学生信息表中年龄大于等于20岁或数学成绩大于85的学生信息

```mysql
mysql> select * from students where age>=20 or math>85;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 2    | 李四 | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
| 6    | 王六 | 女  | 20   | 50.0    | 70.0 | 2017-09-01 | 他来自湖南 |
| 7    | 刘红 | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
+------+--------+------+------+---------+------+------------+-----------------+
5 行于数据集 (0.01 秒)
```

查询学生信息表中除了年龄大于等于20岁或数学成绩大于85的学生信息

```mysql
mysql> select * from students where not (age>=20 or math>85);
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 4    | 张八 | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
+------+--------+------+------+---------+------+------------+-----------------+
2 行于数据集 (0.01 秒)
```



`在我们使用查询语句的时候，经常要返回前几条或者中间某几行数据，这个时候怎么办呢？不用担心，mysql已经为我们提供了这样一个功能-limit`

`Limit是限制的意思，所以limit的作用就是限制查询记录的条数`

#### 3.6、limit语法

```mysql
格式：
select */字段列表 from 数据库表名 [limit offset,length];
```

**说明：**

offset：起始行数，从 0 开始计数，如果省略，默认就是 0

length： 返回的行数

#### 3.7、limit应用

**案例：**

查询学生信息表中前5条记录

```mysql
#offset可以省略，省略时，从0开始
mysql> select * from students limit 5;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 2    | 李四 | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 4    | 张八 | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
+------+--------+------+------+---------+------+------------+-----------------+
5 行于数据集 (0.02 秒)
```

查询学生信息表中从第3条记录开始，查询出5条记录

```mysql
mysql> select * from students limit 2,5;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 4    | 张八 | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
| 6    | 王六 | 女  | 20   | 50.0    | 70.0 | 2017-09-01 | 他来自湖南 |
| 7    | 刘红 | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
+------+--------+------+------+---------+------+------------+-----------------+
5 行于数据集 (0.01 秒)
```

#### 3.7、limit分页

**案例：**

查询学生信息表中的信息，按5条记录为一页展示

**第一页**

```mysql
mysql> select * from students limit 0,5;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 2    | 李四 | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 4    | 张八 | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
+------+--------+------+------+---------+------+------------+-----------------+
5 行于数据集 (0.01 秒)
```

**第二页**

```mysql
mysql> select * from students limit 5,5;
+------+-----------+------+------+---------+------+------------+-----------------+
| sid  | sname     | sex  | age  | english | math | entertime  | remark          |
+------+-----------+------+------+---------+------+------------+-----------------+
| 6    | 王六    | 女  | 20   | 50.0    | 70.0 | 2017-09-01 | 他来自湖南 |
| 7    | 刘红    | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
| 8    | 王五    | 男  | NULL | NULL    | NULL | NULL       | NULL            |
| 9    | 李老六 | 男  | 19   | NULL    | NULL | NULL       | NULL            |
+------+-----------+------+------+---------+------+------------+-----------------+
4 行于数据集 (0.01 秒)
```

**注意：**

limit中offset在发生着变化，第一页是0，第二页是(前一页的offset+length)，而length并没有发生变化。

如果最后一页的记录数没有指定的length条，是有多少显示多少

SQL基本函数，聚合函数对一组值执行计算，并返回单个值，也被称为组函数。

聚合函数对一组值执行计算并返回单一的值。除 COUNT 以外，聚合函数忽略空值，如果COUNT函数的应用对象是一个确定列名，并且该列存在空值，此时COUNT仍会忽略空值。

所有聚合函数都具有确定性。任何时候用一组给定的输入值调用它们时，都返回相同的值。聚合函数可以应用于查询语句的SELECT中，或者HAVING子句中，但不可用于WHERE语句中，因为WHERE是对逐条的行记录进行筛选。

### 聚合函数概述

#### 1.1、什么是聚合函数

SQL基本函数，聚合函数对一组值执行计算，并返回单个值，也被称为组函数。 聚合函数经常与 SELECT 语句的 GROUP BY 子句的HAVING一同使用。

#### 1.2、聚合函数的特点

除了 COUNT 以外，聚合函数忽略空值。
聚合函数经常与 SELECT 语句的 GROUP BY 子句一同使用。
所有聚合函数都具有确定性。任何时候用一组给定的输入值调用它们时，都返回相同的值。

#### 1.3、常用聚合函数

```mysql
count(字段名)：统计总行数
sum(字段名)：计算列总和
avg(字段名)：求某一列平均值
min(字段名)：求某一列的最小值
max(字段名)：求某一列的最大值
```

#### 1.4、聚合函数语法

```mysql
格式：
select 聚合函数(字段名) from 数据库表名;
```

### 聚合函数应用

#### 2.1、聚合函数基础应用

**案例：**

查看学生信息表中通过英语成绩统计所有的学生数

```mysql
mysql> select count(english) as 学生人数 from students;
+-----+
| 总人数 |
+-----+
| 7   |
+-----+
1 行于数据集 (0.01 秒)
```

**注意：**

null的记录是不会统计，如果要想统计null，可以用ifnull(字段名,默认值)

默认值里设置：null用0表示

```mysql
mysql> select count(ifnull(english,0)) as 总人数 from students;
+-----+
| 总人数 |
+-----+
| 9   |
+-----+
1 行于数据集 (0.02 秒)
```

除了前面这个方法可以统计学生人数外，我们还可以：

```mysql
#比较常用的方法
mysql> select count(*) from students;
+----------+
| count(*) |
+----------+
| 9        |
+----------+
1 行于数据集 (0.01 秒)
```

查看学生信息表中年龄大于19的总人数

```mysql
mysql> select count(*) from students where age>19;
+----------+
| count(*) |
+----------+
| 2        |
+----------+
1 行于数据集 (0.02 秒)
```

查看学生信息表中英语成绩的总分

```mysql
mysql> select sum(english) as 英语总分 from students;
+-------+
| 英语总分  |
+-------+
| 544.5 |
+-------+
1 行于数据集 (0.01 秒)
```

查看学生信息表中英语成绩的平均分

```mysql
mysql> select avg(english) as 英语平均分 from students;
+----------+
| 英语平均分    |
+----------+
| 77.78571 |
+----------+
1 行于数据集 (0.01 秒)
```

查看学生信息表中英语成绩的最高分

```mysql
mysql> select max(english) as 英语最高分 from students;
+-------+
| 英语最高分 |
+-------+
| 98.5  |
+-------+
1 行于数据集 (0.01 秒)
```

查看学生信息表中英语成绩的最低分

```mysql
mysql> select min(english) as 英语最低分 from students;
+-------+
| 英语最低分 |
+-------+
| 50.0  |
+-------+
1 行于数据集 (0.01 秒)
```

#### 2.2、聚合函数分组应用

**案例：**

统计学生信息表中男生的人数与女生的人数

```mysql
mysql> select count(*),sex from students group by sex;
+----------+------+
| count(*) | sex  |
+----------+------+
| 6        | 男  |
| 3        | 女  |
+----------+------+
2 行于数据集 (0.01 秒)
```

统计学生信息表中男生和女生的人数、英语总成绩、数学平均成绩

```mysql
mysql> select count(*),sex,sum(english),avg(math) from students group by sex;
+----------+------+--------------+-----------+
| count(*) | sex  | sum(english) | avg(math) |
+----------+------+--------------+-----------+
| 6        | 男  | 318.5        | 87.25000  |
| 3        | 女  | 226.0        | 82.66667  |
+----------+------+--------------+-----------+
2 行于数据集 (0.01 秒)
```

统计学生信息表中男生和女生的人数、英语总成绩、数学平均成绩，总人数超过3人显示

```mysql
mysql> select count(*) as n,sex,sum(english),avg(math) from students group by sex having n>3;
+---+------+--------------+-----------+
| n | sex  | sum(english) | avg(math) |
+---+------+--------------+-----------+
| 6 | 男  | 318.5        | 87.25000  |
+---+------+--------------+-----------+
1 行于数据集 (0.02 秒)
```

### 聚合函数应用扩展

#### 3.1、group_concat

group_concat(字段名)可以作为一个输出字段来使用，表示分组之后，根据分组结果，使用group_concat()来放置每一组的某字段的值的集合。

**案例：**

统计学生信息表中男生和女生的人数、英语总成绩、数学平均成绩及数学成绩的集合

```mysql
mysql> select count(*),sex,sum(english),avg(math),group_concat(math) from students group by sex;
+----------+------+--------------+-----------+---------------------+
| count(*) | sex  | sum(english) | avg(math) | group_concat(math)  |
+----------+------+--------------+-----------+---------------------+
| 3        | 女  | 226.0        | 82.66667  | 80.0,70.0,98.0      |
| 6        | 男  | 318.5        | 87.25000  | 88.0,88.0,85.0,88.0 |
+----------+------+--------------+-----------+---------------------+
2 行于数据集 (0.02 秒)
```

#### 3.2、with rollup

在最后新增一行，来记录当前列里所有记录的总和

**案例：**

统计学生信息表中男生和女生的人数、英语总成绩、数学平均成绩及增加显示列的记录总和

```mysql
mysql> select count(*),sex,sum(english),avg(math) from students group by sex with rollup;
+----------+------+--------------+-----------+
| count(*) | sex  | sum(english) | avg(math) |
+----------+------+--------------+-----------+
| 3        | 女  | 226.0        | 82.66667  |
| 6        | 男  | 318.5        | 87.25000  |
| 9        | NULL | 544.5        | 85.28571  |
+----------+------+--------------+-----------+
3 行于数据集 (0.02 秒)
```

模糊查询即模糊检索，是指搜索系统自动按照用户输入关键词的同义词进行模糊检索，从而得出较多的检索结果。与之相反的是“精准搜索”。模糊检索也可以说是同义词检索，这里的同义词是用户通过“检索管理”中的“同义词典”来配置的。

用户在检索页面中输入同义词中任何一个词检索时，只要选中“模糊检索”复选框，则该关键词的所有同义词信息也都被检索出来。

举例：例如配置了“电脑”与“computer”为同义词后，检索“电脑”，则包含“computer”的网页也会出现在检索结果中。

### 模糊查询概述

#### 1.1、什么是模糊查询

模糊查询是针对字符串操作的，类似正则表达式，没有正则表达式强大。

#### 1.2、通配符

```mysql
%：表示任意0个或多个字符。
_： 表示任意单个字符。
[ ]：表示括号内所列字符中的一个（类似正则表达式）。
[^ ] ：表示不在括号所列之内的单个字符。
```

#### 1.3、回顾%和_

##### 1.3.1、%应用

可匹配任意类型和长度的字符，有些情况下若是中文，请使用两个百分号（%%）表示。

```mysql
格式：
select */字段列表 from 数据库表名 where 字段名 like %字符串%;
```

**案例：**

查询出学生信息表中姓名里有‘三’的学生信息

```mysql
mysql> select * from students where sname like '%三%';
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
+------+--------+------+------+---------+------+------------+-----------------+
2 行于数据集 (0.02 秒)
```

##### 1.3.2、_应用

匹配单个任意字符，它常用来限制表达式的字符长度语句。

```mysql
格式：
select */字段列表 from 数据库表名 where 字段名 like _字符串_;
```

**案例：**

查询学生信息表中姓名里含有‘红’字，二个字的学生信息

```mysql
mysql> select * from students where sname like '_红' or sname like '红_';
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 7    | 刘红 | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
+------+--------+------+------+---------+------+------------+-----------------+
2 行于数据集 (0.01 秒)
```

### 模糊查询应用

#### 2.1、[ ]应用

指定一个字符、字符串或范围，要求所匹配对象为它们中的任一个。

```mysql
格式：
select */字段列表 from 数据库表名 where 字段名 regexp [字符串]字符串;
```

**案例：**

查询学生信息表中姓名里有张和李的人的信息

```mysql
mysql> select * from students where sname regexp '[张李]';
+------+-----------+------+------+---------+------+------------+-----------------+
| sid  | sname     | sex  | age  | english | math | entertime  | remark          |
+------+-----------+------+------+---------+------+------------+-----------------+
| 1    | 张三    | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 2    | 李四    | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 3    | 张红    | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 4    | 张八    | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
| 5    | 三李    | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
| 9    | 李老六 | 男  | 19   | NULL    | NULL | NULL       | NULL            |
+------+-----------+------+------+---------+------+------------+-----------------+
6 行于数据集 (0.02 秒)
```

查询学生信息表中姓名为张红和李红的人的信息

```mysql
#[张李]红  张红 李红
mysql> select * from students where sname regexp '[张李]红';
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
+------+--------+------+------+---------+------+------------+-----------------+
1 行于数据集 (0.01 秒)
```

查询学生信息表中年龄包含789这几个数字的人的信息

```mysql
mysql> select * from students where age regexp '[789]';
+------+-----------+------+------+---------+------+------------+-----------------+
| sid  | sname     | sex  | age  | english | math | entertime  | remark          |
+------+-----------+------+------+---------+------+------------+-----------------+
| 1    | 张三    | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 3    | 张红    | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 4    | 张八    | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
| 5    | 三李    | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
| 7    | 刘红    | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
| 9    | 李老六 | 男  | 19   | NULL    | NULL | NULL       | NULL            |
+------+-----------+------+------+---------+------+------------+-----------------+
6 行于数据集 (0.01 秒)
```

**注意：**

如 [ ] 内有一系列字符（01234、abcde之类的）则可略写为“0-4”、“a-e”

#### 2.2、[^]应用

其取值和 [] 相同，但它要求所匹配对象为指定字符以外的任一个字符。

```mysql
格式：
select */字段列表 from 数据库表名 where 字段名 regexp [^字符串]字符串;
```

**案例：**

查询学生信息表中姓名不是张红、李红，而是其他红的人的信息。

```mysql
mysql> select * from students where sname regexp '[^张李]红';
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 7    | 刘红 | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
+------+--------+------+------+---------+------+------------+-----------------+
1 行于数据集 (0.01 秒)
```

查询学生信息表中年龄不包含7891这几个数字的人的信息

```mysql
mysql> select * from students where age regexp '[^7891]';
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 2    | 李四 | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 6    | 王六 | 女  | 20   | 50.0    | 70.0 | 2017-09-01 | 他来自湖南 |
+------+--------+------+------+---------+------+------------+-----------------+
2 行于数据集 (0.01 秒)
```

查询学生信息表中姓张和姓李的人的信息

```mysql
mysql> select * from students where sname regexp '^[张李]';
+------+-----------+------+------+---------+------+------------+-----------------+
| sid  | sname     | sex  | age  | english | math | entertime  | remark          |
+------+-----------+------+------+---------+------+------------+-----------------+
| 1    | 张三    | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 2    | 李四    | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 3    | 张红    | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 4    | 张八    | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
| 9    | 李老六 | 男  | 19   | NULL    | NULL | NULL       | NULL            |
+------+-----------+------+------+---------+------+------------+-----------------+
5 行于数据集 (0.01 秒)
```

**注意：**

```
 ^[]表示的是：字符串开始的第一个字符
```

### DQL-排序

排序是计算机内经常进行的一种操作，其目的是将一组“无序”的记录序列调整为“有序”的记录序列。分内部排序和外部排序，若整个排序过程不需要访问外存便能完成，则称此类排序问题为内部排序。反之，若参加排序的记录数量很大，整个序列的排序过程不可能在内存中完成，则称此类排序问题为外部排序。内部排序的过程是一个逐步扩大记录的有序序列长度的过程。

#### 1.1、排序概述

将数据库表中杂乱无章的数据记录，通过字段的升序或降序的顺序排列的过程叫做排序。

#### 1.2、排序语法

通过order by子句

```
格式：
select */字段列表 from 数据库表名 [where 条件表达式] [order by 字段名 [asc/desc]];
```

**说明：**

asc：升序，默认值

desc：降序

#### 1.3、单列排序

按照一个字段进行排序

**案例：**

查看学生信息表中按照英语成绩升序排列，去掉成绩为null的学生。

```
mysql> select * from students where english is not null order by english;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 6    | 王六 | 女  | 20   | 50.0    | 70.0 | 2017-09-01 | 他来自湖南 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
| 2    | 李四 | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 4    | 张八 | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 7    | 刘红 | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
+------+--------+------+------+---------+------+------------+-----------------+
7 行于数据集 (0.01 秒)
```

#### 1.4、组合排序

按照多个字段进行排序，先按1字段排序，在按2字段排序，在按n字段排序

```
格式：
select */字段列表 from 数据库表名 [where 条件表达式] [order by 字段名1 [asc/desc],字段名2 [asc/desc],...,字段名n [asc/desc]];
```

**案例：**

查看学生信息表中先按照数学成绩升序排列，在按照英语成绩降序排列，最后去掉成绩为null的学生。

```
mysql> select * from students where english is not null order by math,english desc;
+------+--------+------+------+---------+------+------------+-----------------+
| sid  | sname  | sex  | age  | english | math | entertime  | remark          |
+------+--------+------+------+---------+------+------------+-----------------+
| 6    | 王六 | 女  | 20   | 50.0    | 70.0 | 2017-09-01 | 他来自湖南 |
| 3    | 张红 | 女  | 19   | 86.0    | 80.0 | 2017-09-01 | 他来自北京 |
| 4    | 张八 | 男  | 18   | 80.0    | 85.0 | 2017-09-01 | 他来自天津 |
| 1    | 张三 | 男  | 19   | 98.5    | 88.0 | 2017-09-01 | 他来自四川 |
| 2    | 李四 | 男  | 20   | 80.0    | 88.0 | 2017-09-01 | 他来自重庆 |
| 5    | 李三 | 男  | 19   | 60.0    | 88.0 | 2017-09-01 | 他来自湖北 |
| 7    | 刘红 | 女  | 18   | 90.0    | 98.0 | 2017-09-01 | 他来自甘肃 |
+------+--------+------+------+---------+------+------------+-----------------+
7 行于数据集 (0.02 秒)
```

### DQL 分组

数据分组是根据统计研究的需要，将原始数据按照某种标准划分成不同的组别，分组后的的数据称为分组数据。

数据分组应遵循两个基本原则：

穷尽性原则

这一原则就是要求调查的每一单位都能无一例外地划归到某一组去，不会产生“遗漏”现象。

互斥性原则

这一原则就是要求将调查单位分组后，各个组的范围应该互不相容、互为排斥。即每个调查单位在特定的分组标志下只能归属某一组，而不能同时或可能同时归属到几个组。

#### 2.1、分组概述

- 什么是分组

分组就是将一组行记录按列或表达式的值分组成摘要行记录。通过GROUP BY子句返回每个分组的一个行记录。换句话说，它减少了在结果集中的行数。

- 分组语法

– 语法

```mysql
格式：
select */字段列表 from 数据库表名 [group by 分组字段名 [having 条件表达式]];
```

– 分组方式

将学生信息表中男、女同学进行分组

![image20200209001000938.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603188686160.png)

**原始数据**

![image20200209001300283.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603188795282.png)

**分组为：男一组，女一组**

![image20200209001300283.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603188695335.png)

**返回每组第一条数据**

![image20200209002544753.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603188705609.png)

#### 2.2、分组应用

- 实际分组方式

```mysql
mysql> select sex from students group by sex;
+------+
| sex  |
+------+
| 男  |
| 女  |
+------+
2 行于数据集 (0.01 秒)
```

**注意：**

当我们使用某个字段分组,在查询的时候也需要将这个字段查询出来,否则看不到数据属于哪组的。

单独分组没什么用处，分组的目的就是为了统计，一般分组会跟**聚合函数**一起使用。

**案例：**

查询学生信息表中男、女同学的人数

```mysql
mysql> select sex,count(*) from students group by sex;
+------+----------+
| sex  | count(*) |
+------+----------+
| 男  | 6        |
| 女  | 3        |
+------+----------+
2 行于数据集 (0.01 秒)
```

- where与having

– where**

查询学生信息表中数学成绩在80分以上的，男、女同学的人数

```mysql
#where后面不能用聚合函数
mysql> select sex,count(*) from students where math>80 group by sex;
+------+----------+
| sex  | count(*) |
+------+----------+
| 男  | 4        |
| 女  | 1        |
+------+----------+
2 行于数据集 (0.01 秒)
```

**注意：**

where是将不符合条件的先去掉，在分组。

– having

查询学生信息表中男、女同学的人数，人数超过3人显示

```mysql
#having n>3 可以写成 having count(*)>3
mysql> select sex,count(*) as n from students group by sex having n>3;
+------+---+
| sex  | n |
+------+---+
| 男  | 6 |
+------+---+
1 行于数据集 (0.03 秒)
```

**注意：**

having是先分组，在将分组后不符合条件的去掉。

– where与having区别

**where** **子句**

在分组之前过滤数据，即先过滤再分组。

where 后面不可以使用聚合函数。

**having** **子句**

在分组之后过滤数据，即先分组再过滤。

having 后面可以使用聚合函数。

在SQL语言中，一个SELECT-FROM-WHERE语句称为一个查询块。当获得一个查询的答案需要多个步骤的操作，首先必须创建一个查询来确定用户不知道但包含在数据库中的值，将一个查询块嵌套在另一个查询块的WHERE字句或HAVING短语的条件中查询块称为子查询或内层查询。上层的查询块曾为父查询或外层查询。子查询的结果作为输入传递回“父查询”或“外部查询”。父查询将这个值结合到计算中，以便确定最后的输出。

### 子查询概述

#### 1.1、什么是子查询

子查询是一种常用计算机语言sql中select语言中嵌套查询下层的程序模块。当一个查询是另一个查询的条件时，称之为子查询。

**如：**

查询渠道部有那些员工

```mysql
#第一步，查询出'渠道部'的id
mysql> select id from dept where name='渠道部';
+----+
| id |
+----+
| 2  |
+----+
1 行于数据集 (0.02 秒)
#第二步，通过查询出的‘渠道部’的id，在查询渠道部的员工信息
mysql> select * from emp where dept_id=2;
+----+--------+--------+--------+------------+---------+
| id | name   | gender | salary | join_date  | dept_id |
+----+--------+--------+--------+------------+---------+
| 2  | 李四 | 男    | 3600   | 2010-12-02 | 2       |
| 3  | 王五 | 男    | 9000   | 2008-08-08 | 2       |
+----+--------+--------+--------+------------+---------+
2 行于数据集 (0.01 秒)
```

子查询方式

```mysql
mysql> select * from emp where dept_id=(select id from dept where name='渠道部');
+----+--------+--------+--------+------------+---------+
| id | name   | gender | salary | join_date  | dept_id |
+----+--------+--------+--------+------------+---------+
| 2  | 李四 | 男    | 3600   | 2010-12-02 | 2       |
| 3  | 王五 | 男    | 9000   | 2008-08-08 | 2       |
+----+--------+--------+--------+------------+---------+
2 行于数据集 (0.03 秒)
```

#### 1.2、子查询特点

一个查询的结果做为另一个查询的条件

有查询的嵌套，内部的查询称为子查询

子查询要使用括号

#### 1.3、子查询结果的三种情况

单行单列

![image20200215215222589.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603519226794.png)

多行单列

![image20200215215408848.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603519241295.png)

多行多列

![image20200215215431152.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603519252162.png)

### 单行单列查询

子查询结果只要是单行单列，肯定在 WHERE 后面作为条件，父查询使用：比较运算符，如：> 、<、<>、=、>=、<=等

```mysql
格式：
select */字段列表 from 数据库表名 where 字段名=(子查询);
```

**案例：**

查询工资最高的员工信息

分析：

先找出最高工资，在查找员工信息

```mysql
mysql> select max(salary) from emp;
+-------------+
| max(salary) |
+-------------+
| 9000        |
+-------------+
1 行于数据集 (0.01 秒)

mysql> select * from emp where salary=(select max(salary) from emp);
+----+--------+--------+--------+------------+---------+
| id | name   | gender | salary | join_date  | dept_id |
+----+--------+--------+--------+------------+---------+
| 3  | 王五 | 男    | 9000   | 2008-08-08 | 2       |
+----+--------+--------+--------+------------+---------+
1 行于数据集 (0.01 秒)
```

查询工资小于平均工资的员工信息

分析：

先算出员工的平均工资，在查看小于平均工资的员工信息

```mysql
mysql> select avg(salary) from emp;
+-------------------+
| avg(salary)       |
+-------------------+
| 5994.333333333333 |
+-------------------+
1 行于数据集 (0.02 秒)

mysql> select * from emp where salary<(select avg(salary) from emp);
+----+--------+--------+--------+------------+---------+
| id | name   | gender | salary | join_date  | dept_id |
+----+--------+--------+--------+------------+---------+
| 2  | 李四 | 男    | 3600   | 2010-12-02 | 2       |
| 4  | 赵六 | 女    | 5000   | 2015-10-07 | 3       |
| 5  | 吴七 | 女    | 4500   | 2011-03-14 | 1       |
+----+--------+--------+--------+------------+---------+
3 行于数据集 (0.03 秒)
```

### 单行多列查询

子查询结果只要是单行多列，结果集类似于一个数组，父查询使用in、not in运算符

```mysql
格式：
select */字段列表 from 数据库表名 where 字段名 in (子查询);
```

**案例：**

查询工资大于 5000 的员工，来自于哪些部门的名字

分析：

先找出工资大于5000的员工的部门ID，通过部门ID查找对应的部门名字

```mysql
mysql> select dept_id from emp where salary>5000;
+---------+
| dept_id |
+---------+
| 1       |
| 2       |
+---------+
2 行于数据集 (0.01 秒)

mysql> select * from dept where id in(select dept_id from emp where salary>5000); 
+----+-----------+
| id | name      |
+----+-----------+
| 1  | 研发部 |
| 2  | 渠道部 |
+----+-----------+
2 行于数据集 (0.01 秒)
```

查询研发部与渠道部所有的员工信息

分析：

先查找研发部与渠道部的id，通过id查找到研发部与渠道部的员工信息

```mysql
mysql> select id from dept where name='研发部' or name='渠道部';
+----+
| id |
+----+
| 1  |
| 2  |
+----+

mysql> select * from emp where dept_id in(select id from dept where name in('研发部','渠道部'));
+----+--------+--------+--------+------------+---------+
| id | name   | gender | salary | join_date  | dept_id |
+----+--------+--------+--------+------------+---------+
| 1  | 张三 | 男    | 7200   | 2013-02-24 | 1       |
| 2  | 李四 | 男    | 3600   | 2010-12-02 | 2       |
| 3  | 王五 | 男    | 9000   | 2008-08-08 | 2       |
| 5  | 吴七 | 女    | 4500   | 2011-03-14 | 1       |
+----+--------+--------+--------+------------+---------+
4 行于数据集 (0.02 秒)
```

### 多行多列

子查询结果只要是多行多列，肯定在 FROM 后面作为表，子查询作为表需要取别名，否则这张表没有名称则无法访问表中的字段。

```mysql
格式：
select */字段列表 from (子查询) [as] 表别名 where 条件表达式;
```

**案例：**

查询出 2011 年以后入职的员工信息，包括部门名称

分析：
先找出2011年入职的员工信息组成一个新表，在查询所在的部门信息

```mysql
mysql> select * from emp where join_date>='2011-01-01';
+----+--------+--------+--------+------------+---------+
| id | name   | gender | salary | join_date  | dept_id |
+----+--------+--------+--------+------------+---------+
| 1  | 张三 | 男    | 7200   | 2013-02-24 | 1       |
| 4  | 赵六 | 女    | 5000   | 2015-10-07 | 3       |
| 5  | 吴七 | 女    | 4500   | 2011-03-14 | 1       |
+----+--------+--------+--------+------------+---------+
3 行于数据集 (0.01 秒)

mysql> select * from dept d,(select * from emp where join_date>='2011-01-01') e where d.id=e.dept_id;
+----+-----------+-------+---------+--------+--------+------------+---------+
| id | name      | id(2) | name(2) | gender | salary | join_date  | dept_id |
+----+-----------+-------+---------+--------+--------+------------+---------+
| 1  | 研发部 | 1     | 张三  | 男    | 7200   | 2013-02-24 | 1       |
| 3  | 教务部 | 4     | 赵六  | 女    | 5000   | 2015-10-07 | 3       |
| 1  | 研发部 | 5     | 吴七  | 女    | 4500   | 2011-03-14 | 1       |
+----+-----------+-------+---------+--------+--------+------------+---------+
3 行于数据集 (0.02 秒)
```

还可以使用表连接查询

```mysql
mysql> select * from emp inner join dept on emp.dept_id = dept.id where join_date >='2011-1-1';
+----+--------+--------+--------+------------+---------+-------+-----------+
| id | name   | gender | salary | join_date  | dept_id | id(2) | name(2)   |
+----+--------+--------+--------+------------+---------+-------+-----------+
| 1  | 张三 | 男    | 7200   | 2013-02-24 | 1       | 1     | 研发部 |
| 4  | 赵六 | 女    | 5000   | 2015-10-07 | 3       | 3     | 教务部 |
| 5  | 吴七 | 女    | 4500   | 2011-03-14 | 1       | 1     | 研发部 |
+----+--------+--------+--------+------------+---------+-------+-----------+
```

连接查询是关系数据库中最主要的查询，主要包括内连接、外连接和交叉连接等。通过连接运算符可以实现多个表查询。连接是关系数据库模型的主要特点，也是它区别于其它类型数据库管理系统的一个标志。 在关系数据库管理系统中，表建立时各数据之间的关系不必确定，常把一个实体的所有信息存放在一个表中。当检索数据时，通过连接操作查询出存放在多个表中的不同实体的信息。连接操作给用户带来很大的灵活性，他们可以在任何时候增加新的数据类型。为不同实体创建新的表，然后通过连接进行查询。

### 多表连接查询概述

#### 1.1、什么是多表查询

连接是在多个表之间通过一定的连接条件，使表之间发生关联，进而能从多个表之间获取数据。

**比如：**

有一个部门表，有一个员工表，我想查询某部门中的所有员工的信息。这时我们要先找出部门ID，通过部门ID查询出对应的员工信息。

这样我们在查询我们需要的信息的时候就应用了多表。所以这就是我们的多表查询。

#### 1.2、多表查询的作用

**比如：**

我们想查询员工A的名字和他所在的部门的名字，则需要使用多表查询。

那么我们使用一条 SQL 语句查询多张表，因为查询结果在多张不同的表中。而我们的结果要从每张表取 1 列或多列。这就是多表查询的作用。

#### 1.3、多表查询分类

多表查询可以分为二类查询：

**内连接：**隐匿内连接、显示内连接

**外连接：**左外连接、右外连接

#### 1.4、笛卡尔积现象

##### 1.4.1、数据准备

创建表和数据

```mysql
#部门表
create table dept(
id int primary key auto_increment,
name varchar(20)
);
insert into dept (name) values ('研发部'),('渠道部'),('教务部');

# 创建员工表
create table emp (
id int primary key auto_increment,
name varchar(10),
gender char(1), -- 性别
salary double, -- 工资
join_date date, -- 入职日期
dept_id int,
foreign key (dept_id) references dept(id) -- 外键，关联部门表(部门表的主键) 
);
insert into emp(name,gender,salary,join_date,dept_id) values('张三','男',7200,'2013-02-24',1);
insert into emp(name,gender,salary,join_date,dept_id) values('李四','男',3600,'2010-12-02',2);
insert into emp(name,gender,salary,join_date,dept_id) values('王五','男',9000,'2008-08-08',2);
insert into emp(name,gender,salary,join_date,dept_id) values('赵六','女',5000,'2015-10-07',3);
insert into emp(name,gender,salary,join_date,dept_id) values('吴七','女',4500,'2011-03-14',1);
```

显示表中数据

```mysql
mysql> select * from dept;
+----+-----------+
| id | name      |
+----+-----------+
| 1  | 研发部 |
| 2  | 渠道部 |
| 3  | 教务部 |
+----+-----------+
3 行于数据集 (0.01 秒)

mysql> select * from emp;
+----+--------+--------+--------+------------+---------+
| id | name   | gender | salary | join_date  | dept_id |
+----+--------+--------+--------+------------+---------+
| 1  | 张三 | 男    | 7200   | 2013-02-24 | 1       |
| 2  | 李四 | 男    | 3600   | 2010-12-02 | 2       |
| 3  | 王五 | 男    | 9000   | 2008-08-08 | 2       |
| 4  | 赵六 | 女    | 5000   | 2015-10-07 | 3       |
| 5  | 吴七 | 女    | 4500   | 2011-03-14 | 1       |
+----+--------+--------+--------+------------+---------+
5 行于数据集 (0.01 秒)
```

##### 1.4.2、什么是笛卡尔积

案例：

查询所有员工和所有部门

```mysql
mysql> select * from emp,dept;
```

![image20200215173505470.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603241592735.png)

左表的每条数据和右表的每条数据组合，这种效果就是笛卡尔积

##### 1.4.3、清除笛卡尔积

我们发现笛卡尔积所产生的数据并不是都是有用的，只有员工.dept_id=部门.id的值才是我们想要的。

所以我们需要过滤掉没有用的数据。那么如何设置过滤条件呢？

```mysql
mysql> select * from emp,dept where emp.dept_id=dept.id;
+----+--------+--------+--------+------------+---------+-------+-----------+
| id | name   | gender | salary | join_date  | dept_id | id(2) | name(2)   |
+----+--------+--------+--------+------------+---------+-------+-----------+
| 1  | 张三 | 男    | 7200   | 2013-02-24 | 1       | 1     | 研发部 |
| 5  | 吴七 | 女    | 4500   | 2011-03-14 | 1       | 1     | 研发部 |
| 2  | 李四 | 男    | 3600   | 2010-12-02 | 2       | 2     | 渠道部 |
| 3  | 王五 | 男    | 9000   | 2008-08-08 | 2       | 2     | 渠道部 |
| 4  | 赵六 | 女    | 5000   | 2015-10-07 | 3       | 3     | 教务部 |
+----+--------+--------+--------+------------+---------+-------+-----------+
mysql> select emp.name,dept.name from emp,dept where emp.dept_id=dept.id;
+--------+-----------+
| name   | name(2)   |
+--------+-----------+
| 张三 | 研发部 |
| 吴七 | 研发部 |
| 李四 | 渠道部 |
| 王五 | 渠道部 |
| 赵六 | 教务部 |
+--------+-----------+
5 行于数据集 (0.01 秒)
```

### 内连接

用左边表的记录去匹配右边表的记录，如果符合条件的则显示。如：从表.外键=主表.主键

#### 2.1、隐式内连接

看不到 join 关键字，条件使用 where 指定

```mysql
格式：
select */字段列表 from 左表，右表 where 条件表达式;
```

案例：

查询员工表中所有员工及所在部门

```mysql
mysql> select * from emp,dept where emp.dept_id=dept.id;
+----+--------+--------+--------+------------+---------+-------+-----------+
| id | name   | gender | salary | join_date  | dept_id | id(2) | name(2)   |
+----+--------+--------+--------+------------+---------+-------+-----------+
| 1  | 张三 | 男    | 7200   | 2013-02-24 | 1       | 1     | 研发部 |
| 5  | 吴七 | 女    | 4500   | 2011-03-14 | 1       | 1     | 研发部 |
| 2  | 李四 | 男    | 3600   | 2010-12-02 | 2       | 2     | 渠道部 |
| 3  | 王五 | 男    | 9000   | 2008-08-08 | 2       | 2     | 渠道部 |
| 4  | 赵六 | 女    | 5000   | 2015-10-07 | 3       | 3     | 教务部 |
+----+--------+--------+--------+------------+---------+-------+-----------+
```

#### 2.2、显式内连接

使用inner join…on语句，可以省略inner

```mysql
格式：
select */字段列表 from 左表 [inner] join 右表 on 条件表达式;
```

案例：

查询王五的信息，显示员工 id，姓名，性别，工资和所在的部门名称。

```mysql
mysql> select emp.id,emp.name,emp.gender,emp.salary,dept.name from emp join dept on emp.dept_id=dept.id where emp.name='王五';
+----+--------+--------+--------+-----------+
| id | name   | gender | salary | name(2)   |
+----+--------+--------+--------+-----------+
| 3  | 王五 | 男    | 9000   | 渠道部 |
+----+--------+--------+--------+-----------+
1 行于数据集 (0.02 秒)
```

SQL优化

```mysql
select emp.id,emp.name,emp.gender,emp.salary,dept.name from emp join dept on emp.dept_id=dept.id where emp.name='王五';
或
select e.id,e.name,e.gender,e.salary,d.name from emp e join dept d on e.dept_id=d.id where e.name='王五';
或
select e.id,e.name,gender,salary,d.name from emp e join dept d on dept_id=d.id where e.name='王五';
```

#### 2.3、内连接使用步骤

- 确认查询的数据库表
- 确认数据库表连接条件
- 确认数据库表查询条件
- 确认数据库表显示字段

### 左/右连接

#### 3.1、左连接

使用 left outer join…on，outer 可以省略

```mysql
格式：
select */字段列表 from 左表 left [outer] join 右表 on 条件表达式;
```

用左边表的记录去匹配右边表的记录，如果符合条件的则显示；否则，显示 NULL

**案例：**

在部门表中增加一个部门

```mysql
mysql> insert into dept(name) values('执行部');
Query OK, 1 rows affected (0.08 秒)
```

用内连接查询信息

```
mysql> select * from dept d inner join emp e on d.id=e.dept_id;
```

![image20200215182047845.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603241661863.png)

用左连接查询信息

```
mysql> select * from dept d left join emp e on d.id=e.dept_id;
```

![image20200215182100590.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603241674165.png)

**注意：**

左连接表示的是在内连接的基础上保证左表的信息全部显示

#### 3.2、右连接

使用 right outer join…on，outer 可以省略

```mysql
格式：
select */字段列表 from 左表 right [outer] join 右表 on 条件表达式;
```

用右边表的记录去匹配左边表的记录，如果符合条件的则显示；否则，显示 NULL

**案例：**

在员工表中加入一个新员工

```mysql
mysql> insert into emp values (null, '王一','男',6666,'2013-12-05',null);
Query OK, 1 rows affected (0.02 秒)
```

用内连接查询信息

```mysql
mysql> select * from dept d inner join emp e on d.id=e.dept_id;
```

![image20200215182047845.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603241693324.png)

用右连接查询信息

```mysql
mysql> select * from dept d right join emp e on d.id=e.dept_id;
```

![image20200215183504384.png](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1603241714996.png)

**注意：**

右连接表示的是在内连接的基础上保证右表的信息全部显示

