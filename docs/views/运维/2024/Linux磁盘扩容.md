---
title: Linux磁盘扩容 
date: 2024-01-07
sidebar: auto
tags: 
 - Linux
categories:
 - 运维
---

## 系统盘动态扩容后空间扩充

**磁盘空间已经扩容，此时需要在系统中调整磁盘空间大小**

### 查看系统分区及大小

```shell
fdisk -l
```

![image-20240107165918351](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107165918351.png)

> 这里看到磁盘已经扩容至85.9G，实际挂载识别为39.7G

### 开始添加分区

```shell
fdisk /dev/sda
```

**进入磁盘fdisk (util-linux 2.23.2)工具**

![image-20240107170444915](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107170444915.png)

1. 输入n表示增加分区

   ![image-20240107170828336](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107170828336.png)

2. 输入p标识创建主分区

   ![image-20240107170847850](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107170847850.png)

3. 输入分区号（默认）

   ![image-20240107171057597](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107171057597.png)

4. 输入起始扇区、终止扇区（默认）

   ![image-20240107171125155](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107171125155.png)

5. 输入w进行保存

   ![image-20240107171228979](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107171228979.png)

### 修改新分区ID为系统8E

**通过上面的操纵，再次使用fdisk -l查看，可以看到新增加的分区/dev/sda3已经出现**

![image-20240107171547486](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107171547486.png)

> 需要将红框处分区ID由83改成8E（LVM卷文件系统的ID）

```shell
fdisk /dev/sda
```

1. 输入t

   ![image-20240107172107055](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172107055.png)

2. 输入前面步骤的分区号3

   ![image-20240107172122604](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172122604.png)

3. 输入l

   ![image-20240107172203443](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172203443.png)

4. 输入8e

   ![image-20240107172218743](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172218743.png)

5. 输入w进行保存

   ![image-20240107172232197](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172232197.png)

修改后的信息如下：

![image-20240107172342075](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172342075.png)

> **重启系统 reboot，这一步非常关键切记**

### 开始扩充分区

> 使用lvs显示逻辑卷分区信息

```shell
lvs
```

![image-20240107172716111](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172716111.png)

> 显示卷组信息

```shell
vgdisplay
```

![image-20240107172853901](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172853901.png)

> 将物理硬盘分区初始化为物理卷，以便被 LVM 使用

```shell
pvcreate /dev/sda3
```

![image-20240107173039214](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107173039214.png)

> 扩展卷组：centos 是执行vgdisplay后的VG name对应的值，根据个人情况修改

```shell
vgextend  centos /dev/sda3
```

![image-20240107173241003](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107173241003.png)

> 再次显示卷组信息：可以看到Free PE从0变为40.00Gib，说明我们最多可以有 40GB 的扩充空间

```shell
vgdisplay
```

![image-20240107173334765](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107173334765.png)

> 扩充逻辑卷分区：centos/root 是根据第七部分一开头的lvs中显示的VG 和 LV内容进行的替换，根据个人情况修改

```sh
lvextend -L+39.9G /dev/centos/root /dev/sda3
```

![image-20240107173625444](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107173625444.png)

> 重设逻辑卷大小

```shell
xfs_growfs /dev/centos/root
```

![image-20240107173752058](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107173752058.png)

> 再次查看磁盘空间

![image-20240107173838790](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107173838790.png)

**发现磁盘容量已经扩容完毕**

## 添加其他数据盘后空间扩充

**系统添加了一块32G的物理磁盘，此时需要在系统中初始化并挂载**

### 查看系统新增磁盘

```shell
lsblk -f
```

![image-20240110115317035](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110115317035.png)

`sdb`为新增的物理磁盘

```shell
fdisk -l
```

![image-20240110115516860](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110115516860.png)

`/dev/sdb`可以看到大小为32G

### 开始添加分区

我们使用系统自带的 `fdisk` 工具来划分和管理磁盘，该工具只能处理2TB以下的磁盘，大于2TB请使用 `gdisk` 工具

```shell
fdisk /dev/sdb
```

输入 `n` 新建一个分区

![image-20240110120115767](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120115767.png)

输入 `p` 表示新建一个主分区

![image-20240110120212659](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120212659.png)

输入 `1` 默认分区号

![image-20240110120249543](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120249543.png)

起始扇区 终止扇区（默认）

![image-20240110120413917](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120413917.png)

输入 `w` 保存

![image-20240110120437713](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120437713.png)

> 再次查看分区

```shell
lsblk
```

![image-20240110120622389](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120622389.png)

### 分区初始化

> 这里将分区初始化为ext4格式

```shell
mkfs -t ext4 /dev/sdb1
```

![image-20240110120916429](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120916429.png)

```shell
lsblk -f
```

![image-20240110121015944](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110121015944.png)

可以看到已经为 `sdb1` 分配了 `UUID`

### 挂载分区

> 命令挂载（临时挂载）

1. 新建一个文件夹

   ```sh
   mkdir newdisk
   ```

2. 使用mount挂载

   ```shell
   mount /dev/sdb1 /newdisk/
   ```

3. 使用df -h查看挂载情况

   ```shell
   df -h
   ```

   ![image-20240110124425887](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110124425887.png)

4. 使用umount卸载

   ```shell
   umount /newdisk/
   ```

> 配置挂载（永久挂载）

1. 获取分区UUID

   ```shell
   lsblk -f
   ```

   ![image-20240110124742031](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110124742031.png)

2. 编辑fstab文件

   ![image-20240110125120847](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110125120847.png)

   > 第一个代表分区的UUID
   >
   > 第二个代表要将该分区挂载的哪个地方
   >
   > 第三个代表分区的类型，要与初始化时的类型保持一致
   >
   > 第四个代表是否执行dump、是否执行检测

   添加如下：

   ```conf
   UUID=2d56bcfe-fe61-48a6-96db-0761b044c0fe /newdisk                   ext4     defaults        0 0
   ```

   > > 重启系统

   ![image-20240110130237131](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110130237131.png)

> 看到已经自动挂载成功