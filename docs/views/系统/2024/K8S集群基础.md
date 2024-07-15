---
title: K8S集群基础 
date: 2024-01-08
sidebar: auto
tags: 
 - 集群
categories:
 - 系统
---


## 集群添加控制节点

1. 修改主机名并添加主机名解析

   ```shell
   hostnamectl set-hostname standby
   ```

   ```shell
   cat >> /etc/hosts << EOF
   192.168.1.190   standby
   192.168.1.191   master
   192.168.1.192   node1
   192.168.1.193   node2
   EOF
   ```

   > > > 重启系统

2. 在原master节点生成token与hash

   ```shell
   kubeadm token create --print-join-command
   ```

   ![image-20240109232618662](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240109232618662.png)

3. 在原master节点生成upload-certs

   ```shell
   kubeadm init phase upload-certs --upload-certs
   ```

   ![image-20240109232719829](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240109232719829.png)

4. 在原master节点修改kubeadm-config配置文件

   ```shell
   kubectl -n kube-system edit cm kubeadm-config
   ```

   添加如下内容：

   ```conf
   controlPlaneEndpoint: 192.168.1.191:6443
   ```

   ![image-20240109233341489](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240109233341489.png)

5. 在新master节点拼接输入以上内容

   ```shell
   kubeadm join 192.168.1.191:6443 --token 2nz45d.yuc03ctt38toalfy --discovery-token-ca-cert-hash sha256:7b70d655874bae2bf1896dc968a8a0f9f8d589fa156b523b583376474e7b2424 --control-plane --certificate-key  ff3f9ec0624447ffb0d6c70dab1e05779a1135b0946ae2d9d5ae87ef9e3f14bf
   ```

   ```shell
   mkdir -p $HOME/.kube
   sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
   sudo chown $(id -u):$(id -g) $HOME/.kube/config
   ```

   ![image-20240109233811294](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240109233811294.png)

   ![image-20240109233956157](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240109233956157.png)

   > 可以看到standby控制节点已经添加成功

