---
title: Linux合盖不休眠 
date: 2024-11-13
sidebar: auto
tags: 
 - Linux
categories:
 - 运维
---

## 配置Linux笔记本合盖不休眠

编辑`logind.conf`配置文件

```shell
vim /etc/systemd/logind.conf
```

![image-20241113165041388](https://sugarys.oss-cn-beijing.aliyuncs.com/document/linux/image-20241113165041388.png)

将`HandleLidSwitch`、`HandleLidSwitchExternalPower`、`HandleLidSwitchDocked`值修改为`ignore` 即合盖不做任何操作

> > 扩展知识：

|             变量             |                 功能                 |
| :--------------------------: | :----------------------------------: |
|       HandleLidSwitch        |      使用内置电池时，合盖的行为      |
| HandleLidSwitchExternalPower |      使用外接电源时，合盖的行为      |
|    HandleLidSwitchDocked     | 外接了拓展坞链接显示器时，合盖的行为 |
|        HandlePowerKey        |          按下电源键后的行为          |
|      HandleHibernateKey      |          按下休眠键后的行为          |

|  变量值   |    含义     |
| :-------: | :---------: |
|  suspend  |    挂起     |
|   lock    |    锁定     |
|  ignore   |   不动作    |
| poweroff  | 关机:shock: |
| hibernate |    休眠     |

