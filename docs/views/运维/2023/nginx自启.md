---
title: Nginx自启 
date: 2023-07-20
sidebar: auto
tags: 
 - Linux
categories:
 - 运维
---

## systemctl服务方式

新建NGINX服务文件如下：

`vim /lib/systemd/system/nginx.service`

添加内容：

```sh
[Unit]
Description=nginx service
After=network.target 

[Service] 
Type=forking 
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true 

[Install] 
WantedBy=multi-user.target
```

保存后执行配置载入 `systemctl daemon-reload`

> 启动NGINX `systemctl start nginx.service`
> 停止NGINX `systemctl stop nginx.service`
> 自启NGINX `systemctl enable nginx.service`