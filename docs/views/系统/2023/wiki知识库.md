---
title: Wikijs部署 
date: 2023-12-05
sidebar: auto
tags: 
 - 知识库
categories:
 - 系统
---

## 下载wiki项目

```shell
wget https://github.com/Requarks/wiki/releases/latest/download/wiki-js.tar.gz
```

![image-20231205162111669](https://sugarys.oss-cn-beijing.aliyuncs.com/document/wikijs/image-20231205162111669.png)

## 创建wiki目录 将项目文件剪切至wiki目录中解压缩

```shell
mkdir wiki
```

```shell
mv wiki-js.tar.gz wiki
```

```shell
tar -zxf wiki-js.tar.gz
```

![image-20231205162636496](https://sugarys.oss-cn-beijing.aliyuncs.com/document/wikijs/image-20231205162636496.png)

## 修改配置

将示例配置文件重命名为：`config.yml`

```shell
mv config.sample.yml config.yml
```

编辑配置`config.yml`文件，本教程所使用的数据库为sqlite [sqlite安装](https://zhonglin8659.gitee.io/views/xi-tong/2023/sqlite3.html#linux%E5%AE%89%E8%A3%85sqlite3)，其他数据库请自行参考官方文档。

```shell
vim config.yml
```

![image-20231205163233141](https://sugarys.oss-cn-beijing.aliyuncs.com/document/wikijs/image-20231205163233141.png)

按大写 `I` 进入编辑模式，修改db层为如下内容。

```yaml
db:
  type: sqlite
  storage: db.sqlite
```

![image-20231205165307260](https://sugarys.oss-cn-beijing.aliyuncs.com/document/wikijs/image-20231205165307260.png)

按 `esc` 进入非编辑模式后按 `shift+:` 输入`wq` 保存内容

## 启动wiki服务

wiki程序需要使用node服务启动 可以参考我的[node安装教程](https://zhonglin8659.gitee.io/views/xi-tong/2022/linux.html#%E6%9F%A5%E7%9C%8B%E5%BD%93%E5%89%8D%E7%B3%BB%E7%BB%9F%E4%BF%A1%E6%81%AF) 或其他网络教程

```shell
node server/
```

![image-20231205173230476](https://sugarys.oss-cn-beijing.aliyuncs.com/document/wikijs/image-20231205173230476.png)

![image-20231205173345026](https://sugarys.oss-cn-beijing.aliyuncs.com/document/wikijs/image-20231205173345026.png)

## 常见问题

### sqlite问题

在使用sqlite3作为wiki数据库时，官方所下载wiki程序中的node_modules并没有sqlite3依赖，需要安装，由于国内网络限制默认的npm拉取通常会失败。
可以参考以下方案：

1. 安装淘宝镜像

   ```shell
   npm install -g cnpm --registry=https://registry.npm.taobao.org
   ```

2. 使用淘宝镜像再次拉取依赖

   ```shell
   cnpm install
   ```

   ![image-20231205174057491](https://sugarys.oss-cn-beijing.aliyuncs.com/document/wikijs/image-20231205174057491.png)

3. 再次以node启动wiki服务

   ```shell
   node server/
   ```

### 服务自启

本教程暂不提供自启方案，请自行查找node进程托管服务或wiki官方提供的教程