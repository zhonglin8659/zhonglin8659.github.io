---
title: Linux安装GPU驱动 
date: 2023-12-25
sidebar: auto
tags: 
 - Linux
categories:
 - 运维
---

> 这里以ubuntu20.04.6-desktop最小安装纯净系统作为演示 显卡为：NVIDIA Quadro M2000M

![ubuntu0](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/ubuntu0.png)

## 禁用NOUVEAU开源驱动

备份linux黑名单文件

```shell
cp /etc/modprobe.d/blacklist.conf /etc/modprobe.d/blacklistbackup.conf
```

修改linux黑名单文件

```shell
vim /etc/modprobe.d/blacklist.conf
```

在最后一行添加如下内容：

```conf
blacklist nouveau
options nouveau modeset=0
```

![ubuntu1](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/ubuntu1.png)

## 更新使其生效后重启设备

```shell
update-initramfs -u
reboot
```

## 查看是否禁用成功

```shell
lsmod | grep nouveau
```

没有输出内容即可

![ubuntu2](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/ubuntu2.png)

## 下载NVIDIA驱动

[https://www.nvidia.cn/Download/index.aspx?lang=cn](https://www.nvidia.cn/Download/index.aspx?lang=cn)

![ubuntu3](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/ubuntu3.png)

## 安装GCC编译环境

```shell
apt install gcc
```

## 安装MAKE编译环境

```shell
apt install make
```

## 安装可执行驱动文件

```shell
chmod +x NVIDIA-Linux-x86_64-535.146.02.run
./NVIDIA-Linux-x86_64-535.146.02.run
```

![ubuntu4](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/ubuntu4.png)

![ubuntu5](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/ubuntu5.png)

![ubuntu6](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/ubuntu6.png)

## 安装完成后重启设备

```shell
reboot
```

## 检测是否安装成功

```shell
nvidia-smi
```

![ubuntu7](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/ubuntu7.png)

## 安装NVIDIA工具

```shell
apt install nvidia-settings
apt install nvidia-prime
```

## 切换独立显卡

打开NVIDIA X Server Settings点击PRIME Profiles切换到`NVIDIA(Performance Mode)`选项后重启设备

![ubuntu8](https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/ubuntu8.png)

## 添加调用环境

**部分系统与软件无法调用独立显卡，请执行以下命令或者加入用户变量中。**

```shell
export VK_ICD_FILENAMES="/usr/share/vulkan/icd.d/nvidia_icd.json"
```

## 备注

### linux显卡测试软件glmark2

#### 安装

```shell
apt install glmark2
```

#### 使用

```shell
glmark2
```

### 双系统设置windows为默认

`常规windows10+ubuntu20双系统下开机默认四个选项，顺序代号分别为0、1、2、3`

```shell
vim /boot/grup/grup.cfg
```

将 `set default = 0` 改为 `set default = 2` 开机默认为windows 有8秒选择时间

