---
title: 搭建kubernetes集群 
date: 2024-01-04
sidebar: auto
tags: 
 - 集群
categories:
 - 系统
---

## 环境准备

**这里准备的是三台linux虚拟机，系统为centos7.9。搭建一主两从类型的集群，此方式下安装kubernetes集群要求Centos版本要在7.5或之上**

> 第一台Master节点 IP：192.168.1.191

> 第二台Node1节点 IP：192.168.1.192

> 第三台Node2节点 IP：192.168.1.193

![image-20240104142130090](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240104142130090.png)

## 网络配置

**修改每台虚拟机的IP，这里分别为191、192、193。确保每台服务器的DNS、掩码、网关一致**

```shell
vim /etc/sysconfig/network-scripts/ifcfg-ens33
```

> 修改为如下内容：

```conf
TYPE="Ethernet"
PROXY_METHOD="none"
BROWSER_ONLY="no"
BOOTPROTO="none"
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="yes"
IPV6_AUTOCONF="yes"
IPV6_DEFROUTE="yes"
IPV6_FAILURE_FATAL="no"
IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="ens33"
UUID="3a96fe14-cac4-4af7-a43a-5bc46aeea42e"
DEVICE="ens33"
ONBOOT="yes"
IPADDR="192.168.1.191"
PREFIX="24"
GATEWAY="192.168.1.1"
DNS1="114.114.114.114"
IPV6_PRIVACY="no"
```

## 配置主机名与主机名解析

**为了方便后面集群节点间的直接调用，在这配置一下主机名解析**

```shell
hostnamectl set-hostname master
hostnamectl set-hostname node1
hostnamectl set-hostname node2
```

> 添加主机名解析

```shell
cat >> /etc/hosts << EOF
192.168.1.191   master
192.168.1.192   node1
192.168.1.193   node2
EOF
```

## 时间同步

**kubernetes要求集群中的节点时间必须精确一致，这里直接使用chronyd服务从网络同步时间**

```shell
systemctl status chronyd
```

![image-20240104150559501](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240104150559501.png)

**chronyd服务启动即可，如未启动则需要：**

```shell
systemctl start chronyd
systemctl enable chronyd
```

## 禁用iptables|firewalld

**kubernetes和docker在运行中会产生大量的iptables规则，为了不让系统规则跟它们混淆，直接关闭系统的规则**

```shell
systemctl stop firewalld
systemctl disable firewalld
```

```shell
systemctl stop iptables
systemctl disable iptables
```

## 禁用selinux|swap

1. **selinux是linux系统下的一个安全服务，如果不关闭它，在安装集群中会产生各种各样的奇葩问题**

2. **swap分区指的是虚拟内存分区，它的作用是在物理内存使用完之后，将磁盘空间虚拟成内存来使用**

   **启用swap设备会对系统的性能产生非常负面的影响，因此kubernetes要求每个节点都要禁用swap设备**

```shell
vim /etc/selinux/config
```

![image-20240104151341365](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240104151341365.png)

> 将SELINUX=enforcing改为SELINUX=disabled

![image-20240104153103036](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240104153103036.png)

```shell
vim /etc/fstab
```

![image-20240104153145486](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240104153145486.png)

> 注释 /dev/mapper/centos-swap 这一行

![image-20240104153253287](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240104153253287.png)

## 修改linux的内核参数

**添加网桥过滤和地址转发功能**

```shell
vim /etc/sysctl.d/kubernetes.conf
```

> 添加如下内容：

```conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
```

![image-20240104153903184](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240104153903184.png)

```shell
sysctl -p
```

```shell
modprobe br_netfilter
```

> 查看模块是否载入成功

```shell
lsmod | grep br_netfilter
```

## 配置ipvs功能

**在kubernetes中service有两种代理模型，一种是基于iptables的，一种是基于ipvs的**

**两者比较的话，ipvs的性能明显要高一些，但是如果要使用它，需要手动载入ipvs模块**

**安装ipset和ipvsadm**

```shell
yum install ipset ipvsadmin -y
```

> 添加需要加载的模块写入脚本文件

```shell
cat <<EOF >  /etc/sysconfig/modules/ipvs.modules
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack_ipv4
EOF
```

> 为脚本文件添加执行权限

```shell
chmod +x /etc/sysconfig/modules/ipvs.modules
```

> 执行脚本文件

```shell
/bin/bash /etc/sysconfig/modules/ipvs.modules
```

> 查看模块是否加载成功

```shell
lsmod | grep -e ip_vs -e nf_conntrack_ipv4
```

![image-20240104154929940](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240104154929940.png)

> > > reboot 重启系统

##  安装docker

> 切换镜像源

```shell
wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo -O /etc/yum.repos.d/docker-ce.repo
```

> 安装特定版本的docker-ce

```shell
yum install --setopt=obsoletes=0 docker-ce-18.06.3.ce-3.el7 -y
```

> 添加docker配置文件

```shell
mkdir /etc/docker
```

```shell
cat <<EOF > /etc/docker/daemon.json
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "registry-mirrors": ["https://kn0t2bca.mirror.aliyuncs.com"]
}
EOF
```

> 启动docker

```shell
systemctl start docker
```

> 自启docker

```shell
systemctl enable docker
```

## 安装kubernetes组件

```shell
vim /etc/yum.repos.d/kubernetes.repo
```

> 添加如下内容：

```shell
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
```

> 安装kubeadm、kubelet和kubectl

```shell
yum install --setopt=obsoletes=0 kubeadm-1.17.4-0 kubelet-1.17.4-0 kubectl-1.17.4-0 -y
```

> 配置kubelet的cgroup

```shell
vim /etc/sysconfig/kubelet
```

> 添加如下内容：

```shell
KUBELET_CGROUP_ARGS="--cgroup-driver=systemd"
KUBE_PROXY_MODE="ipvs"
```

> 设置kubelet开机自启

```shell
systemctl enable kubelet
```

## 准备集群镜像

**将如下内容保存为shell脚本，赋予执行权限并以root执行：**

```shell
images=(
    kube-apiserver:v1.17.17
    kube-controller-manager:v1.17.17
    kube-scheduler:v1.17.17
    kube-proxy:v1.17.17
    pause:3.1
    etcd:3.4.3-0
    coredns:1.6.5
)

for imageName in ${images[@]} ; do
	docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName
	docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName 	k8s.gcr.io/$imageName
	docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName
done
```

##  集群初始化

**下面的操作只需要在`master`节点上执行即可**

```shell
kubeadm init \
	--kubernetes-version=v1.17.17 \
    --pod-network-cidr=10.244.0.0/16 \
    --service-cidr=10.96.0.0/12 \
    --apiserver-advertise-address=192.168.1.191
```

> 输出如下内容表示集群初始化成功：

```conf
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 192.168.1.191:6443 --token u5ii8t.54fuzjhdw16xmz0y \
    --discovery-token-ca-cert-hash sha256:a2bcdb9101410fb023bd883260767b7142cac43f03800f95516cad98cc568741
```

> 执行命令

```shell
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

> 下面的操作只需要在`node`节点上执行即可

```shell
kubeadm join 192.168.1.191:6443 --token u5ii8t.54fuzjhdw16xmz0y \
    --discovery-token-ca-cert-hash sha256:a2bcdb9101410fb023bd883260767b7142cac43f03800f95516cad98cc568741
```

> 在`master`节点查看集群状态

```shell
kubectl get nodes
```

![image-20240104170912421](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240104170912421.png)

##  安装网络插件

**kubernetes支持多种网络插件，比如flannel、calico、canal等等，任选一种使用即可，本次选择flannel**

**将以下内容保存为 `kube-flannel.yml` 文件 在`master`节点执行 `kubectl apply -f kube-flannel.yml`**

**也可以通过链接下载：**

```shell
wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

> kube-flannel.yml

```yaml
---
kind: Namespace
apiVersion: v1
metadata:
  name: kube-flannel
  labels:
    k8s-app: flannel
    pod-security.kubernetes.io/enforce: privileged
---
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  labels:
    k8s-app: flannel
  name: flannel
rules:
- apiGroups:
  - ""
  resources:
  - pods
  verbs:
  - get
- apiGroups:
  - ""
  resources:
  - nodes
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - ""
  resources:
  - nodes/status
  verbs:
  - patch
- apiGroups:
  - networking.k8s.io
  resources:
  - clustercidrs
  verbs:
  - list
  - watch
---
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  labels:
    k8s-app: flannel
  name: flannel
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: flannel
subjects:
- kind: ServiceAccount
  name: flannel
  namespace: kube-flannel
---
apiVersion: v1
kind: ServiceAccount
metadata:
  labels:
    k8s-app: flannel
  name: flannel
  namespace: kube-flannel
---
kind: ConfigMap
apiVersion: v1
metadata:
  name: kube-flannel-cfg
  namespace: kube-flannel
  labels:
    tier: node
    k8s-app: flannel
    app: flannel
data:
  cni-conf.json: |
    {
      "name": "cbr0",
      "cniVersion": "0.3.1",
      "plugins": [
        {
          "type": "flannel",
          "delegate": {
            "hairpinMode": true,
            "isDefaultGateway": true
          }
        },
        {
          "type": "portmap",
          "capabilities": {
            "portMappings": true
          }
        }
      ]
    }
  net-conf.json: |
    {
      "Network": "10.244.0.0/16",
      "Backend": {
        "Type": "vxlan"
      }
    }
---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: kube-flannel-ds
  namespace: kube-flannel
  labels:
    tier: node
    app: flannel
    k8s-app: flannel
spec:
  selector:
    matchLabels:
      app: flannel
  template:
    metadata:
      labels:
        tier: node
        app: flannel
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/os
                operator: In
                values:
                - linux
      hostNetwork: true
      priorityClassName: system-node-critical
      tolerations:
      - operator: Exists
        effect: NoSchedule
      serviceAccountName: flannel
      initContainers:
      - name: install-cni-plugin
        image: docker.io/flannel/flannel-cni-plugin:v1.2.0
        command:
        - cp
        args:
        - -f
        - /flannel
        - /opt/cni/bin/flannel
        volumeMounts:
        - name: cni-plugin
          mountPath: /opt/cni/bin
      - name: install-cni
        image: docker.io/flannel/flannel:v0.24.0
        command:
        - cp
        args:
        - -f
        - /etc/kube-flannel/cni-conf.json
        - /etc/cni/net.d/10-flannel.conflist
        volumeMounts:
        - name: cni
          mountPath: /etc/cni/net.d
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
      containers:
      - name: kube-flannel
        image: docker.io/flannel/flannel:v0.24.0
        command:
        - /opt/bin/flanneld
        args:
        - --ip-masq
        - --kube-subnet-mgr
        resources:
          requests:
            cpu: "100m"
            memory: "50Mi"
        securityContext:
          privileged: false
          capabilities:
            add: ["NET_ADMIN", "NET_RAW"]
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        - name: EVENT_QUEUE_DEPTH
          value: "5000"
        volumeMounts:
        - name: run
          mountPath: /run/flannel
        - name: flannel-cfg
          mountPath: /etc/kube-flannel/
        - name: xtables-lock
          mountPath: /run/xtables.lock
      volumes:
      - name: run
        hostPath:
          path: /run/flannel
      - name: cni-plugin
        hostPath:
          path: /opt/cni/bin
      - name: cni
        hostPath:
          path: /etc/cni/net.d
      - name: flannel-cfg
        configMap:
          name: kube-flannel-cfg
      - name: xtables-lock
        hostPath:
          path: /run/xtables.lock
          type: FileOrCreate
```

> 查看节点状态为 `Ready` 即可

```shell
kubectl get nodes
```

![image-20240104180544635](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240104180544635.png)

> 到此 `kubernetes` 集群环境搭建完毕

## 集群添加工作节点

1. token过期

   在master节点执行

   ```shell
   kubeadm token create --print-join-command
   ```

   ![image-20240108133007446](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240108133007446.png)

   在node节点执行

   ```shell
   kubeadm join 192.168.1.191:6443 --token qhm011.1zpstn9q5jfcb3fa     --discovery-token-ca-cert-hash sha256:7b70d655874bae2bf1896dc968a8a0f9f8d589fa156b523b583376474e7b2424
   ```

   ![image-20240108133134758](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240108133134758.png)

   成功将node4节点加入集群

   ```shell
   kubectl get nodes
   ```

   ![image-20240108133217277](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240108133217277.png)

2. token未过期

   在master节点获取token

   ```shell
   kubeadm token list
   ```

   ![image-20240108133440946](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240108133440946.png)

   在master节点获取discovery-token-ca-cert-hash

   ```shell
   openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2>/dev/null | openssl dgst -sha256 -hex | sed 's/^.* //'
   ```

   ![image-20240108133614291](https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240108133614291.png)

   通过以下命令加入集群

   ```shell
   kubeadm join 192.168.1.191:6443 --token qhm011.1zpstn9q5jfcb3fa     --discovery-token-ca-cert-hash sha256:7b70d655874bae2bf1896dc968a8a0f9f8d589fa156b523b583376474e7b2424
   ```
