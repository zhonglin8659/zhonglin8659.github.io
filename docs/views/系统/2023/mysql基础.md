---
title: mysql基础 
date: 2023-12-15
sidebar: auto
tags: 
 - 数据库
categories:
 - 运维
---

## navicat基本使用

- 连接到mysql

![1570496523795](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1570496523795.png)

- 连接到mysql之后,首先要创建数据库
- 用鼠标右键选择新建数据库

![1570496731511](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1570496731511.png)



- 打开数据库,新建查询

![1570496856448](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1570496856448.png)

![1570496933875](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1570496933875.png)

- 看到如下结果,代表navicat连接mysql设置成功

![1570496970979](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1570496970979.png)

## sql语言中的注释

- -- 行注释
- /*  注释内容 */

## mysql的常用数据类型

![1570499927972](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1570499927972.png)

## 数据库中的元素

- 数据库-----database
- 表----table
- 字段(列)---field
- 记录(行)---record

## 创建表

- 语法:create table 表名(字段名 字段类型, 字段名 字段类型)

```sql
-- 例 1：创建表 a，字段要求:name(姓名)，数据类型：varchar(字符串)，长度为 10
CREATE TABLE a(name varchar(10));
```



- 创建两个字段的表

```sql
-- 例 2：创建表 b，字段要求: name(姓名),数据类型为 varchar(字符串)，长度为 10； 
-- height(身高)，数据类型为 decimal(小数），一共 5 位, 其中 3 位整数，2 位 小数。
CREATE TABLE b(
	name varchar(10),
	height DECIMAL(5, 2)
);
```

- 创建三个字段的表

```sql
-- 例 3：创建表 c，字段要求如下：
-- id：数据类型为 int (整数)； 
-- name 姓名：数据类型为 varchar(字符串)长度为 20， 
-- age 年龄：数据类型为 tinyint unsigned（无符号小整数）；
CREATE TABLE c(
	id int,
	name VARCHAR(20),
	age TINYINT UNSIGNED
);
```

## 插入数据

- 语法 : insert into 表名 values (值, 值,值);

```sql
-- 往表c插入一条记录
INSERT into c VALUES (0, '张飞', 30);
```

- 指定字段插入,语法:insert into 表名 (字段名, 字段名) values (值, 值);

```sql
-- 例 2：表 c 插入一条记录，只设置 id 和姓名 name
INSERT into c (id, name) values (3, '曹操');
```



```sql
-- 例 2：表 c 插入一条记录，只设置 id 和姓名 age
INSERT into c (id, age) values (4, 100);
```

## 插入多条记录

- 多条insert语句,用分号隔开

```sql
-- 例 3：表 c 插入三条记录，写三条 insert 语句, 语句之间用分号隔开
INSERT into c values (5, '周瑜', 50);
insert into c (id, name) values (6, '鲁肃');
INSERT into c (name) values ('诸葛亮');
```

- 一条insert插入多条记录
- 语法:insert into 表名 values (值,值),(值, 值),(值,值);

```sql
-- 例 4：表 c 插入多条记录，用一条 insert 语句, 数据之间用逗号隔开
insert into c values (10, '张三', 10),
(11, '李四', 20),
(12, '王五', 30);
```

- 一条insert指定字段插入多条记录
- 语法:insert into 表名 (字段名, 字段名) values (值, 值), (值, 值), (值, 值)

```sql
-- 例 4：表 c 插入多条记录，用一条 insert 语句, 数据之间用逗号隔开
insert into c (id, name) values (13, '光绪'),
(14, '康熙'),
(15, '雍正');
```

## select查询表

#### 查询所有字段

- 语法: select * from 表名;

- 查询表的所有字段

```cmd
-- 查询表c的所有字段
select * from c;
```

#### 指定字段名查询

- 语法:select 字段名, 字段名 from 表名;

```sql
-- 查询表c的id字段
select id from c;
-- 查询表c的id和age字段
select id, age from c;
-- 查询表c的所有字段,但顺序自定义
select name, id, age from c;
```

## update修改数据

- 语法:update 表名 set 字段=值, 字段=值 where 条件
  - 如果没有where 条件代表修改表中所有的记录

```sql
-- 例 1：修改表 c，所有人的年龄(age 字段)改为 50
update c set age = 50;
```

- 带有条件的update语句

```sql
-- 例 2：修改表 c，
-- id 为 3 的记录，
-- 姓名(name 字段)改为 ‘狄仁杰‘，年龄(age 字段)改为 20

update c set name = '狄仁杰', age = 20 where id = 3;
```

- 另外的例子

```sql
-- 修改name为刘备的记录为李白
update c set name = '李白' where name = '刘备';
```

```sql
-- id大于10的记录,长一岁
update c set age = age + 1 where id > 10;
```

## delete删除记录

- 语法:'delete from 表名 where 条件'

```sql
-- 例 1：删除表 c 中 id 为 6 的记录
DELETE from c where id = 6;
```



```sql
-- 例 1：删除表 c 中 name 为 诸葛亮 的记录
DELETE from c where name = '诸葛亮';

-- 删除年龄大于50的记录
DELETE from c where age > 50;

-- 删除id小于3的记录
delete from c where id < 3;

-- 删除所有记录
DELETE from c;
```

## truncate table删除表的数据

- truncate table 表名

```sql
-- 删除表c中所有的记录
truncate table c;
```

![1570521762234](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1570521762234.png)

## 小结

- 增
  - insert
- 删
  - delete
- 改
  - update
- 查
  - select

## 删除表

- 语法一: drop table 表名

```sql
-- 删除表a
drop table a;
```

- 语法二: drop table if exists 表名

```sql
-- 如果表a存在,就删除表a,如果不存在,什么也不做
DROP table if EXISTS a;

-- 如果表b存在,就删除表b,如果不存在,什么也不做
DROP table if EXISTS b;
```



## 字段的约束

![1570522571965](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1570522571965.png)

## 主键

- 主键的值不能重复
- 自增长,auto_increment
  - 值会系统自动维护,自动增长

```sql
-- 例 1：创建表 d，字段要求如下： 
-- id ： 数 据 类 型 为 
-- int unsigned( 无 符 号 整 数 ) ） ,primary key( 主键),auto_increment(自增长)； 
-- name 姓名：数据类型为 varchar(字符串)长度为 10; 
-- age 年龄：数据类型为 int（整数）；
create TABLE d (
id int UNSIGNED PRIMARY key auto_increment,
name varchar(10),
age int);

INSERT into d (name, age) values ('张飞', 30);

-- 插入的时候指定了id的值
INSERT into d (id, name, age) values (6, '曹操', 30);
-- 不指定id的值
INSERT into d (name, age) values ('周瑜', 30);
select * from d;
```

```sql
-- 如果不指定字段,主键自增长字段的值可以用占位符,0或者null
INSERT into d VALUES (0, '康熙', 30);
INSERT into d VALUES (NULL, '溥仪', 50);
```

## 非空

- 非空not null
  - 这个字段必须有值,如果没有值,insert插入会失败

```sql
-- 例 1：创建表 e，字段要求如下： 
-- id：数据类型为 int unsigned (无符号整数)；
--  name 姓名：数据类型为 varchar(字符串)长度为 10,not null(非空)， 
-- age 年龄：数据类型为 int（整数）；

CREATE table e (
id int UNSIGNED,
name varchar(10) not null,
age int);

insert into e values (1, '张三', 20);
insert into e (id, age) values (1, 20);
select * from e;
```



## 唯一

- 唯一unique
  - 字段的约束为唯一,表示字段的值不能重复

```sql
-- 例 1：创建表 f，字段要求如下： 
-- id：数据类型为 int (整数)； 
-- name 姓名：数据类型为 varchar(字符串)长度为 10,unique(唯一); 
-- age 年龄：数据类型为 int（整数）；
CREATE TABLE f (
id int,
name varchar(10) UNIQUE,
age int);

insert into f VALUES (1, '张三', 20);
insert into f VALUES (2, '李四', 20);
select * from f;
```

## 默认值

- default 值
- 当一个字段有默认值约束,插入数据时,如果指定了值,那么默认值无效,如果没有指定值,会使用默认值

```sql
-- 例 1：创建表 g，
-- 字段要求如下： 
-- id：数据类型为 int (整数)； 
-- name 姓名：数据类型为 varchar(字符串)长度为 10; 
-- age 年龄：数据类型为 int（整数）,default(默认值)30；
CREATE TABLE g(
id int,
name varchar(10),
age int DEFAULT 30);
insert into g values (1, '张三', 20);
-- 插入的时候不指定age的值
insert into g (id, name) values (2, '李四');

select * from g;
```

## 字段的别名

- 通过 字段名 as 别名 的语法,可以给字段起一个别名,别名可以是中文
- as可以省略
- 字段名 as 别名 和 字段名 别名 结果是一样的

```sql
-- 通过as 给字段起一个别名
select card as 身份证, name as 姓名,sex as 性别 from students;

-- 别名的as可以省略
select card 身份证, name 姓名,sex 性别 from students;
```

## 表的别名

- 通过 表名 as 别名 给表起一个别名
- as可以省略

```sql
-- 通过as 给表students起一个别名
select * from students as stu;

-- 可以省略as
select * from students stu;
```

## distinct过滤重复记录

- 通过select distinct 字段名, 字段名 from 表名 来过滤select查询结果中的重复记录

```sql
SELECT DISTINCT sex, class from students;
```

## where子句

- where 后面跟一个条件,实现有选择的查询
- select * from 表名 where 条件

```sql
-- 例 1：查询 students 表中学号 studentNo 等于’001’ 的记录
select * from students where studentNo = '001';
```

```sql
-- 例 2：查询 students 表中年龄 age 等于 30 的姓名 name,班级 class
select name, class from students where age = 30;
```

## select查询的基本规律

- select * 或者select 字段名  控制了查询返回什么样的字段(列)
- where 条件 控制了查询返回什么样的记录(行)

## 比较运算符

- =等于
- < 小于
- <= 小于等于
- `>`大于
- `>=`大于等于
- !=和<>不等于

```sql
-- 例 1：查询 students 表中 name（姓名）等于’小乔’学生的 age（年龄）
select age from students where name = '小乔';

-- 例 2：查询 students 表中 30 岁以下的学生记录
SELECT * from students where age < 30;

-- 例 2：查询 students 表中 30 岁和30岁以下的学生记录
SELECT * from students where age <= 30;

-- 查询家乡不在'北京'的学生记录
select * from students where hometown != '北京';
select * from students where hometown <> '北京';

```

- 课堂练习答案

```sql
-- 练习 1：查询 studentNo 学号是'007'的学生的身份证号 card； 
SELECT card from students where studentNo = '007';
-- 练习 2：查询 class 班级为'1 班'以外的学生记录； 
SELECT * from students where class <> '1班';
-- 练习 3：查询 age 年龄大于 25 的学生的 name 姓名和 sex 性别；
SELECT name, sex from students where age > 25;
```

## 逻辑运算符

- and与
  - 条件1 and 条件2
  - 两个条件必须都满足
- or或
  - 条件1 or 条件2
  - 两个条件只要有一个满足即可
- not非
  - not 条件
  - 条件成立,not以后就不成立,条件不成立,not以后就成立

```sql
-- 例 1：查询 age 年龄小于 30，并且 sex 性别为’女’的同学记录
SELECT * from students where age < 30 and sex = '女';

-- 例 2：查询 sex 性别为’女’或者 class 班级为'1 班'的学生记录
SELECT * from students where sex = '女' or class = '1班';

-- 例 3：查询 hometown 老家非’天津’的学生记录
SELECT * from students where not hometown = '天津';

-- 例 3：查询 hometown 老家’天津’的学生记录
SELECT * from students where not hometown != '天津';
```

- 课堂练习

```sql
-- 练习 1：查询 hometown 老家是’河南’或’河北’的学生记录； 
SELECT * from students where hometown = '河南' or hometown = '河北';
-- 练习 2：查询 class 班级为'1 班'，并且 hometown 老家为'北京'的学生记录； 
SELECT * from students where class = '1班' and hometown = '北京';
-- 练习 3：查询 age 年龄非 30 岁的学生记录；
SELECT * from students where not age = 30;
SELECT * from students where age != 30;
```

## 模糊查询

- like实现模糊查询
- %代表任意多个字符
- _代表任意一个字符
- 字段名 like '字符%'
  - 指定字符开始,后面任意多个字符

```sql
-- 例 1：查询 name 姓名中以’孙’开头的学生记录
SELECT * from students where name like '孙%';

-- 例 2：查询 name 姓名以’孙’开头，且名只有一个字的学生记录
SELECT * from students where name like '孙_';
```



```sql
-- 例 3：查询 name 为任意姓，名叫’乔’的学生记录
SELECT * from students where name like '%乔';

-- 查询 name 姓名有’白’子的学生记录
SELECT * from students where name like '%白%';
```

- 课堂练习答案

```sql
-- 练习 1：查询 name 姓名为两个字的学生记录；
SELECT * from students WHERE name like '__'; 
-- 练习 2：查询 name 姓’白’且年龄大于 30 的学生记录； 
SELECT * from students WHERE name like '白%' and age > 30; 
-- 练习 3：查询 studentNo 学号以 1 结尾的学生记录；
select * from students WHERE studentNo like '%1';
```

## 范围查找

- in (值, 值, 值)
  - 非连续范围查找
- between 开始值 and 结束值
  - 连续范围查找,包含开始值 包含 结束值

```sql
-- 例 1：查询 hometown 家乡是’北京’或’上海’或’广东’的学生记录
SELECT * from students where hometown = '北京' or hometown = '上海' or hometown = '广东';
SELECT * from students where hometown in ('北京', '上海', '广东');

-- 例 2：查询 age 年龄为 25 至 30 的学生记录
SELECT * from students where age >= 25 and age <= 30; 
SELECT * from students where age BETWEEN 25 and 30;
```

- 课堂练习答案

```sql
-- 练习 1：查询 age 年龄在 20 或 25 或 30 的女生记录； 
SELECT * from students where age in (20, 25, 30) and sex = '女';
-- 练习 2：查询 age 年龄 25 到 30 以外的学生记录；
SELECT * from students where not age BETWEEN 25 and 30;
```

## 空判断

- null不是0,也不是'',null在SQL里面代表空,什么也没有
- null不能用比较运算符的判断
- is null  ---是否为null
- is not null ---是否不为null
  - <font color= red>不能用 字段名 = null 字段名 != null这些都是错误的</font>

```sql
-- 例 1：查询 card 身份证为 null 的学生记录
SELECT * from students where card is null;

-- 例 2：查询 card 身份证非 null 的学生记录
SELECT * from students where card is not null;
```



## where子句可以用到update和delete语句后面

```sql
-- 例 1：修改 age 为 25,并且 name 为’孙尚香’的学生 class 为’2 班’
update students set class = '2班' where age = 25 and name = '孙尚香';

-- 例 2：删除 class 为’1 班’,并且 age 大于 30 的学生记录
DELETE from students where class = '1班' and age > 30;
```

- 课堂练习答案

```sql
-- 修改students表中 姓孙的同学,班级为'1班'
update students set class = '1班' where name like '孙%';
-- 删除students年龄在20到30之间所有的男同学
DELETE from students where (age BETWEEN 20 and 30) and sex = '男';
```

## order by排序

- order by 字段名 [asc/desc]
  - asc代表从小到大,升序,asc可以省略
  - desc代表从大到小,不可以省略

```sql
-- 例 1：查询所有学生记录，按 age 年龄从小到大排序

select * from students order by age asc;
select * from students order by age;
-- 例 2：查询所有学生记录，按 age 年龄从大到小排序
select * from students order by age desc;
```

- 两个字段排序的例子

```sql
-- 例 2：查询所有学生记录，按 age 年龄从大到小排序，
--  年龄相同时，再按 studentNo 学号从小到大排序
SELECT * from students ORDER BY age desc, studentNo;
```

- 当一条select语句出现了where和order by
  - select * from 表名 where 条件 order by 字段1,字段2;
  - 一定要把where写在order by前面

```sql
-- 练习：查询所有男学生记录，按 class 班级从小到大排序，班级相同时，
-- 再按 studentNo 学号再按学号从大到小排序
SELECT * from students where sex = '男' order by class, studentNo desc;
```

## 聚合函数

#### count求select返回的记录总数

- count(字段名)

```sql
-- 查询学生总数(查询stuents表有多少记录)
select count(*) from students;
select count(name) from students;
select count(DISTINCT class) from students;
select count(DISTINCT sex) from students;
-- 查询女同学数量
SELECT count(name) from students where sex = '女';
SELECT count(*) from students where sex = '女';
SELECT count(sex) from students where sex = '女';

```

#### max查询最大值

- max(字段名)
- 查询指定字段里的最大值

```sql
-- 查询students中的最大年龄
SELECT max(age) from students;

-- 查询students中的女生最大年龄
SELECT max(age) from students where sex = '女';


-- 查询students中的'1班'最大年龄
SELECT max(age) from students where class = '1班';
```

聚合函数不能用到where后面的条件里

#### min查询最小值

- min(字段名)
- 查询指定字段的最小值

```sql
-- 查询students中的最小年龄
SELECT min(age) from students;

-- 查询students中的女生最小年龄
SELECT min(age) from students where sex = '女';


-- 查询students中的'1班'最小年龄
SELECT min(age) from students where class = '1班';
```

#### sum求和

- sum(字段名)
- 指定字段的值求和

```sql
-- 查询students中的年龄总和
SELECT sum(age) from students;

-- 查询students中的女生年龄总和
SELECT sum(age) from students where sex = '女';


-- 查询students中的'1班'年龄总和
SELECT sum(age) from students where class = '1班';
```

#### avg求平均数

- avg(字段名)
- 指定字段的平均值

```sql
-- 查询students中的年龄总和
SELECT sum(age) from students;

-- 查询students中的女生年龄总和
SELECT sum(age) from students where sex = '女';

-- 查询students中的'1班'年龄总和
SELECT sum(age) from students where class = '1班';
```

- avg的字段中如果有null,null不做为分母计算平均

```sql
create table aa (age int, name varchar(10));
insert into aa values (10, 'a'), (20, 'b'), (null, 'c');
select avg(age) from aa;-- 结果为15,而不是10
```

- 课堂练习答案

```sql
-- 练习 1：查询所有学生的最大年龄、最小年龄、平均年龄； 
SELECT max(age) 最大年龄, min(age) 最小年龄, avg(age) 平均年龄 from students;
-- 练习 2：查询’1 班’共有多少个学生； 
SELECT count(*) from students where class = '1班';
-- 练习 3：查询’3 班’中年龄小于 30 岁的同学有几个；
select count(*) from students where class = '3班' and age < 30;
```

## 数据分组

- group by 字段名
- select 聚合函数 from 表名 where 条件 group by 字段
- select 聚合函数 from 表名  group by 字段
- group by就是配合聚合函数使用的

```sql
-- 分别查询男女同学的数量
SELECT count(*) from students where sex = '男';
SELECT count(*) from students where sex = '女';

select sex, count(*) from students group by sex;
```

- group by的例子

```sql
-- 分别查询各个年龄段的同学数量

select age, count(*) from students group by age;
```

- where与group by

```sql
-- 分别查询'1班'不同性别学生数量

select sex, count(*) from students where class = '1班' group by sex;
```



- 课堂练习答案

```sql
-- 练习：用数据分组方法，统计各个班级学生总数、平均年龄、最大年龄、最 小年龄。
SELECT class, count(*), avg(age), max(age), min(age) from students GROUP BY class
```

```sql
-- 练习：统计各个班级学生总数、平均年龄、最大年龄、最小年龄。
-- 但不统计'3班',统计结果按班级名称从大到小排序
SELECT class, count(*), avg(age), max(age), min(age) from students 
where class <> '3班' GROUP BY class ORDER BY class desc;
```

- where和group by 和order by的顺序
  - select * from 表名 where 条件 group by 字段 order by 字段

## 分组聚合之后的数据筛选

- having子句
- 总是出现在group by之后
- select * from 表名 group by 字段 having 条件

```sql
-- 用where查询男生总数
-- where先筛选复合条件的记录,然后在聚合统计
SELECT count(*) from students where sex = '男';

-- 用having查询男生总数
-- having先分组聚合统计,在统计的结果中筛选
SELECT count(*) from students GROUP BY sex HAVING sex = '男';
```

## having配合聚合函数的使用

- where后面条件不能使用聚合函数, having可以使用聚合函数

```sql
-- 求班级人数大于3人的班级名字
select class from students GROUP BY class HAVING count(*) > 3;
```

## having与where筛选的区别

- where是对标的原始数据进行筛选
- having是对group by之后已经分过组的数据进行筛选
- having可以使用聚合函数, where不能用聚合函数

- 课堂练习答案

```sql
-- 练习：查询班级总人数大于 2 人的班级名称以及班级对应的总人数;
select class, count(*) from students GROUP BY class HAVING count(*) > 2;
```

```sql
-- 练习 :  查询平均年龄大于30岁的班级名称和班级总人数
SELECT class, count(*) from students GROUP BY class HAVING avg(age) > 30;
```

## limit显示指定的记录数

- select * from 表名 where 条件 group by 字段 order by 字段 limit start, count
- limit总是出现在select语句的最后,
- start代表开始行号,行号从0开始编号
- count代表要显示多少行
- 省略start,默认从0开始,从第一行开始

```sql
-- 查询前三行记录
SELECT * from students limit 0, 3;
SELECT * from students limit 3;

-- 查询从第4条记录开始的三条记录
SELECT * from students limit 3, 3;
```

- 当有where或者group by或者order by, limit总是出现在最后

```sql
-- 查询年龄最大同学的name
select name from students ORDER BY age desc limit 1;

-- 查询年龄最小的女同学信息
SELECT * from students where sex = '女' ORDER BY age LIMIT 1;
```

## 数据分页显示

- m 每页显示多少条记录
- n,第n页
- (n - 1) * m, m
- 把计算结果写到limit后面

```sql
-- 每页显示4条记录,第3页的结果
select * from students limit 8, 4;
-- 每页显示4条记录,第2页的结果
select * from students limit 4, 4;
```

- 已知每页记录数,求一张表需要几页显示完
  - 求总页数
  - 总页数 / 每页的记录数
  - 如果结果是整数,那么就是总页数,如果结果有小数,那么就在结果的整数上+1



- 课堂练习答案

```sql
-- 每页显示5条记录,分别多条select显示每页的记录
-- 第一页
SELECT * from students limit 5;
-- 第二页:
SELECT * from students limit 5, 5;
-- 第三页:
SELECT * from students limit 10, 5;
```

## 连接查询

- 内连接
  - 把两张表相同的地方查询出来

![1570754557535](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1570754557535.png)

- 左连接
  - 包括了内连接,同时还查询左表特有的内容

![1570754593595](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1570754593595.png)

- 右连接
  - 包括了内连接,同时还查询右表特有的内容

![1570754629227](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1570754629227.png)

## 内连接

- 语法:
  - select * from 表1 inner join 表2 on 表1.字段 = 表2.字段
  - 内连接最重要的是,找对两张表要关联的字段

```sql
SELECT * from a INNER JOIN b on a.id = b.id;
```



- students表和scores内连接查询结果

```sql
SELECT * from students INNER JOIN scores on students.studentNo = scores.studentNo;
```

![1570756064299](https://sugarys.oss-cn-beijing.aliyuncs.com/document/mysql/1570756064299.png)



- 隐式内连接语法
  - 语法:select * from 表1,表2 where 两个表的连接条件

```sql
-- 隐式内连接
SELECT * from students, scores where students.studentNo = scores.studentNo;
```

- 内连接查询,显示指定的字段

```sql
-- students表与socres内连接,只显示name 课程号 成绩
SELECT name, courseNo, score from students
INNER JOIN scores on students.studentNo = scores.studentNo;
```

- 表的别名在查询中的使用

```sql
SELECT name 姓名, courseNo 课程编号, score 成绩 from students st
INNER JOIN scores sc on st.studentNo = sc.studentNo;
```

- 课堂练习答案

```sql
-- 练习 1: 查询成绩表信息，同时显示成绩对应的课程名称
SELECT * from scores s INNER JOIN courses c on s.courseNo = c.courseNo;
```

- 带有where的内连接
  - 语法select * from 表1 inner join 表2 on 表1.字段 = 表2.字段 where 条件

```sql
-- 例 5：查询王昭君的信息，要求只显示姓名、课程号、成绩
select name, courseNo, score from students s1 
INNER JOIN scores s2 on s1.studentNo = s2.studentNo
where s1.name = '王昭君';
```

- 带有and的where条件

```sql
-- 例 6：查询姓名为’王昭君’,并且成绩小于 90 的信息，要求只显示姓名、成绩
select name, score from students s1 
INNER JOIN scores s2 on s1.studentNo = s2.studentNo
where s1.name = '王昭君' and s2.score < 90;
```

- 多表内连接

```sql
-- 例 7：查询学生信息和成绩以及成绩对应的课程名称
SELECT * from students inner join scores on students.studentNo = scores.studentNo
inner join courses on scores.courseNo = courses.courseNo;
```

## 写SQL三步法

- 搭框架
  - 基本的select语句框架搭建起来,如果有多表,把相应的多表也联合进来
- 看条件
  - 决定where后面的具体条件
- 显示的字段
  - select后面到底要显示什么字段

```sql
-- 练习 2：查询所有学生的’linux’课程成绩，要求只显示姓名、成绩、课程名
-- 第一步:搭框架
-- SELECT * from students INNER JOIN scores 
-- on students.studentNo = scores.studentNo
-- INNER JOIN courses on scores.courseNo = courses.courseNo;
-- 第二步:看条件
-- SELECT * from students INNER JOIN scores 
-- on students.studentNo = scores.studentNo
-- INNER JOIN courses on scores.courseNo = courses.courseNo
-- where courseName = 'linux';
-- 第三步:返回字段名
SELECT name, score, courseName from students INNER JOIN scores 
on students.studentNo = scores.studentNo
INNER JOIN courses on scores.courseNo = courses.courseNo
where courseName = 'linux';
```

- 带有order by的联合查询

```sql
-- 例 8：查询成绩最高的男生信息，要求显示姓名、课程名、成绩
SELECT name, score, courseName from students INNER JOIN scores 
on students.studentNo = scores.studentNo
INNER JOIN courses on scores.courseNo = courses.courseNo
where sex = '男'
order by score desc LIMIT 1;
```

## 左连接

- 语法
  - select * from 表1 left join 表2 on 表1.字段 = 表2.字段

```sql
-- 例 1：查询所有学生的信息以及成绩，包括没有成绩的学生
SELECT * from students left JOIN scores ON
students.studentNo = scores.studentNo;
```

## 右连接

- 语法
  - select * from 表1 right join 表2 on 表1.字段 = 表2.字段

```sql
-- 例 1：查询所有课程的信息，包括没有成绩的课程
SELECT * from scores RIGHT JOIN courses ON
scores.courseNo = courses.courseNo;
```

## 多表联合查询,同名字段的处理方式

- 如果一条select要用到多个表,表中有同名字段.就需要 表名.字段名 加以区分

```sql
select students.studentNo from students INNER JOIN scores ON
students.studentNo = scores.studentNo;
```

## 自关联

```sql
-- 查询一共有多少个省
SELECT count(*) from areas where pid is null;
-- 查询有多少市
SELECT count(*) from areas where pid is not null;
```

- 自关联,是同一张表做连接查询,
- 自关联下,一定找到同一张表可关联的不同字段

```sql
-- 例 2：查询广东省的所有城市
SELECT * from areas a1 INNER JOIN areas a2
on a1.id = a2.pid
WHERE a1.name = '广东省';
```

## 子查询

- 子查询是嵌套到主查询里面的
- 子查询做为主查询的数据源或者条件
- 子查询是独立可以单独运行的查询语句
- 主查询不能独立独立运行,依赖子查询的结果

```sql
-- 例 1：查询大于平均年龄的学生记录
-- SELECT avg(age) from students;
-- 
-- select * from students where age > 30.1667;

-- 用子查询实现
select * from students where age > (SELECT avg(age) from students);
```

- 标量子查询------子查询返回结果只有一行,一列

```sql
-- 例 2：查询 30 岁的学生的成绩
-- 1,查询30岁学生的studentNO
-- select studentNo from students where age = 30;
-- 
-- SELECT * from scores where studentNo in ('001', '003', '011');

-- 用子查询实现
SELECT * from scores where studentNo in 
(select studentNo from students where age = 30);

```

- 列子查询------子查询返回一列多行

```sql
-- 例 3：用子查询，查询所有女生的信息和成绩
-- 用内连接实现
SELECT * from students INNER JOIN scores ON
students.studentNo = scores.studentNo
where sex = '女';
-- 用子查询实现
select * from (SELECT * from students where sex = '女') stu
INNER JOIN scores sc on stu.studentNo = sc.studentNo;
```

- 表级子查询------子查询返回结果为多行,多列

- 课件提问问题及答案

```sql
-- 查询各个年龄段学生的数量,按照数量从大到小排序
select age, count(*) from students GROUP BY age ORDER BY count(*) desc;

-- 查找年龄大于等于25,小于等于30的男同学
select * from students where (age BETWEEN 25 and 30) and sex = '男';

-- 显示2班和3班的女同学
SELECT * from students where sex = '女' and class in ('2班', '3班');

-- 显示所有有效的card学生记录,null和''都是无效的
SELECT * FROM students where card is not null and card != '';


-- 查找老家不在河北和北京的同学的age总和
SELECT sum(age) from students where hometown <> '北京' and hometown <> '河北'; 
SELECT sum(age) from students where not hometown in ('北京', '河北');

-- 查找不姓'白'的同学
SELECT * from students where not name like '白%';

-- 查询每个班有分别多少同学
SELECT class, count(*) from students GROUP BY class;

-- 这个sql能不能显示年龄最大的同学的姓名
select name,max(age) from students;

-- 显示年龄最大的同学的姓名
SELECT name from students order by age desc limit 1;
SELECT name from students where age = (select max(age) from students);

-- 查询年龄最大的女同学和年龄最小的女同学差多少岁
SELECT max(age) -  min(age) from students where sex = '女';

-- 分别求男女同学的平均年龄
select sex,avg(age) from students GROUP BY sex;

-- 只显示班级人数为3个同学的班级名称
SELECT class from students GROUP BY class HAVING count(*) = 3; 

--  查询姓名只有2个字的女同学的数量
SELECT count(*) from students where sex = '女' and name like '__';

-- 查询年龄大于25,老家不在河北的男同学
SELECT * from students where age > 25 and hometown != '河北' and sex = '男' ;

-- 查询1班加3班所有同学的年龄总和
SELECT sum(age) from students where class = '1班' or class = '3班';

```

## concat拼接字符串函数

- concat(参数1, 参数2, 参数3, 参数n)
  - 参数可以是数字,也可以是字符串
  - 把所有的参数连接成一个完整的字符串

```sql
-- 例 1：把 12,34，’ab’拼接为一个字符串’1234ab’
select concat(12, 34, 'ab');
```

## length返回字符串字符的个数

- 一个utf8格式的汉字,length返回3

```sql
-- 例 2：计算字符串’abc’的长度
select length('abc');

-- 例 3：计算字符串’我和你’的长度
SELECT length('我和你');


-- 例 4：计算字符串’我和you’的长度
SELECT length('我和you');
```

## mysql内置函数可以在where条件后面使用

```sql
-- 例 4：查询表 students 中 name 长度等于 9（三个 utf8 格式的汉字）的学生信息
SELECT * from students where length(name) = 9;
```

## left从字符串左侧截取指定数量字符

- left(字符串, n)
  - n代表从字符串左侧截取n个字符

```sql
-- 例 5：截取字符串’我和你abc’的左端 3 个字符
select left('我和你abc', 3);

-- 例 6：截取字符串’我和你abc’的左端 4 个字符
select left('我和你abc', 4);

-- 例 6：截取字符串’abc我和你’的左端 4 个字符
select left('abc我和你', 4);
```

## right从字符串右侧截取指定数量的字符

- rigth(字符串, n)
  - n代表从字符串右侧截取n个字符

```sql
-- 例 5：截取字符串’我和你abc’的右端 3 个字符
select right('我和你abc', 3);

-- 例 5：截取字符串’我和你abc’的右端 4 个字符
select right('我和你abc', 4);
```

## substring从字符串指定位置截取指定数量字符

- substring(字符串, 起始位置, n)
  - 起始位置从1开始
  - n代表截取的数量

```sql
-- 例 7：截取字符串’我和你abc’从第 2 个字符开始的 3 个字符
select substring('我和你abc', 2, 3);
-- 例 7：截取字符串’我和你abc’从左侧开始的 3 个字符
select substring('我和你abc', 1, 3);
-- 例 7：截取字符串’我和你abc’从第 4 个字符开始的 1 个字符
select substring('我和你abc', 4, 1);
```

## 内置函数可以用在select显示的字段名中

```sql
-- 例 8：截取 students 表中所有学生的姓
SELECT left(name, 1) from students;
SELECT substring(name, 1, 1) from students;
```

- 课堂练习答案

```sql
-- 练习 1：查询 students 表的 card 字段，截取出生年月日，显示李白的生日
SELECT substring(card, 7, 8) from students where name = '李白';

-- 练习 2：查询 students 表的所有学生信息，按生日从大到小排序(
SELECT * from students ORDER BY substring(card, 7, 8);
```

## ltrim去除字符串左侧空格

- ltrim(带空格的字符串)

```sql
-- 例 1：去除字符串' abcd '左侧空格

SELECT ltrim('         abcd ');
```

## rtrim去除字符串右侧空格

- rtrim(带空格的字符串)

```sql
-- 例 1：去除字符串' abcd     '右侧空格
SELECT rtrim(' abcd     ');
select concat(rtrim(' abcd     '), '测试字符');

```

## trim去除字符串两侧空格

- trim(带空格的字符串)

```sql
-- 例 1：去除字符串'     abcd     '两侧空格
SELECT trim('     abcd     ');
```

## round四舍五入

- round(数字, d)
  - d代表要保留的小数位,省略d默认为0

```sql
-- 例 1：1.653 四舍五入，保留整数位
SELECT round(1.653);


-- 例 2：1.653 四舍五入，保留2位小数
SELECT round(1.653, 2);

```

- 课堂案例

```sql
-- 例 3：查询 students 表中学生的平均年龄，并四舍五入,保留两位小数
SELECT round(avg(age), 2) from students;
```

## rand随机数

- rand()

  - 每次运行会产生一个从0到1之间的浮点数

- 经常用rand对一个张进行随机排序

  - order by rand()

  ```sql
  select rand();
  
  
  -- 小技巧：从学生表中随机抽出一个学生
  SELECT * from students order by rand() LIMIT 1;
  ```


## current_date返回系统日期

- current_date()

## current_time返回系统时间

- current_time()

## 返回系统日期与时间

- now()

```sql
select current_date();

select current_time();

select now();
```

- 日期和时间函数的案例

```sql
-- 插入记录时,插入系统当前时间
create table a (id int, indate datetime);
insert into a values (1, '2010-09-10 12:01:02');
insert into a values (1, now());
select * from a;
```

## 存储过程

```sql
-- 例 1：创建存储过程 stu()，查询 students 表所有学生信息
CREATE PROCEDURE stu()
BEGIN
	SELECT * from students;
end

-- 调用存储过程stu
call stu();

-- 删除存储过程,删除的时候不用写名字后面的()
DROP PROCEDURE stu;
drop PROCEDURE if EXISTS stu;
```

## 视图

- 视图就是对select语句的封装
- 视图可以理解为一张只读的表,针对视图只能用select,不能用delete和update

```sql
-- 创建一个视图,查询所有男生信息

CREATE VIEW stu_nan as 
SELECT * from students where sex = '男';

-- 使用视图
SELECT * from stu_nan INNER JOIN scores 
on stu_nan.studentNo = scores.studentNo;

-- 删除视图
drop VIEW stu_nan;
DROP view if EXISTS stu_nan;
```

## 事务

- 事务是多条更改数据操作的sql语句集合
- 一个集合数据有一致性,要么就都失败,要么就都成功回滚

- begin   ----开始事务
- rollback  ----回滚事务,放弃对表的修改
- commit  ---- 提交事务,对表的修改生效

没有写begin代表没有事务,没有事务的表操作都是实时生效.

如果只写了begin, 没有rollback,也没有commit, 系统推出,结果是rollback

#### 回滚事务

```sql
-- 例 1：开启事务，
-- 删除 students 表中 studentNo 为 001 的记录，
-- 同时删除 scores 表中 studentNo 为 001 的记录, 
-- 回滚事务，两个表的删除同时放弃
-- 开始事务
begin;
DELETE from students where studentNo = '001';
DELETE from scores where studentNo = '001';
-- 回滚事务,放弃更改
ROLLBACK;
```

- 如果开始一个事务,执行了begin,之后,没有rollback也没有commit,中间系统出问题了.默认会执行rollback

#### 提交事务

```sql
-- 例 2：开启事务，
-- 删除 students 表中 studentNo 为 001 的记录，
-- 同时删除 scores 表中 studentNo 为 001 的记录, 
-- 提交事务，使两个表的删除同时生效

begin;
DELETE from students where studentNo = '001';
DELETE from scores where studentNo = '001';
-- 提交事务,一旦提交事务,两个删除操作同时生效
commit;
```

## 索引

- index
- 给表建立索引,目的是加快select查询的速度
- 如果一个表记录很少,几十条,或者几百条,不用索引
- 表的记录特别多,如果没有索引,select语句效率会非常低

- 创建索引
  - create index 索引名 on 表名(字段)
  - 如果字段为字符串,需要写明创建表字段的时候字符串的长度

```sql
-- 例 1：为表 students 的 age 字段创建索引，名为 age_index
CREATE index age_index on students (age);

-- 例 2：为表 students 的 name 字段创建索引，名为 name_index
CREATE INDEX name_index on students (name(10));
```

- 调用索引
  - 不需要显示的写调用索引的语句,只要where条件后面用到的字段建立了索引,那么系统会自动调用

```sql
-- where条件后面的字段,数据库系统会自动查找是否有索引
-- 这里会自动调用age_index
select * from students where age = 30;
-- 自动调用name_index
SELECT * from students where name = '李白';
-- 不会调用任何索引,因为sex字段没有索引
SELECT * from students where sex = '女';
```

- 查看索引
  - show index from 表名
  - 对于主键,系统会自动建立索引

```sql
-- 查看students表的索引
show index from students;
```

- 删除索引
  - drop index 索引名 on 表名

```sql
show index from students;

-- 删除索引age_index
drop index age_index on students;
-- 删除索引name_index
drop index name_index on students;
```

- 索引的优缺点
  - 提高select的查询速度
  - 降低update,delete和insert语句的执行速度
  - 项目中80%以上是select,所以index必须的
  - 在实际工作中如果涉及到大量的数据修改操作,修改之前可以把索引删除,修改完成后再把索引建立起来

## 基于命令行的mysql

- mysql -h mysql服务器的地址 -u 用户名 -p
  - -h 如果是使用本机的mysql,-h可以省略

#### mysql登录之后的常用命令

- show databases
  - 显示系统所有的数据库
- use 数据库名
  - 使用指定的一个数据库

```sql
-- 使用mydb数据库
use mydb
```

- show tables
  - 查看指定数据库有多少表
- 如果命令行默认字符集与数据库默认字符集不同
  - 在windows默认字符集是gbk
  - set names gbk
    - 告诉mysql,客户端用的字符集是gbk

```sql
-- 连接到mysql
mysql -u root -p
-- 查看数据库
show databases
-- 使用mydb数据库
use mydb
-- 查看所有表
show tables
-- 设置客户端字符集为gbk
set names gbk
-- 查询students表
select * from students;
```

- 在命令行中每条sql语句用;结尾
- 可以通过desc 表名 查看一个表的字段结构
  - desc students
  - 查看students每个字段的定义

- 在命令行下创建和删除数据库
  - create database 数据库名 default charset 字符集

```sql
-- 创建一个数据库mytest,默认字符集为utf8
create database mytest default charset utf8;
-- 删除数据库mytest
drop database mytest
drop database if exists mytest;
```
