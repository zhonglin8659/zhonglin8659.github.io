(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{558:function(a,s,e){"use strict";e.r(s),e=e(4),e=Object(e.a)({},(function(){var a=this,s=a.$createElement;return(s=a._self._c||s)("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"关闭防火墙与selinux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭防火墙与selinux"}},[a._v("#")]),a._v(" 关闭防火墙与selinux")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("systemctl stop firewalld\nsystemctl disable firewalld\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("编辑"),s("code",[a._v("/etc/selinux/config")]),a._v(" 将"),s("code",[a._v("SELINUX=disabled")]),a._v("。然后重启设备，在终端输入 "),s("code",[a._v("getenforce")]),a._v(" 验证结果")]),a._v(" "),s("h2",{attrs:{id:"建立zabbix下载源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立zabbix下载源"}},[a._v("#")]),a._v(" 建立zabbix下载源")]),a._v(" "),s("h3",{attrs:{id:"安装源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装源"}},[a._v("#")]),a._v(" 安装源")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -Uvh https://repo.zabbix.com/zabbix/5.0/rhel/7/x86_64/zabbix-release-5.0-1.el7.noarch.rpm\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"替换源为阿里云"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替换源为阿里云"}},[a._v("#")]),a._v(" 替换源为阿里云")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s#http://repo.zabbix.com#https://mirrors.aliyun.com/zabbix#'")]),a._v(" /etc/yum.repos.d/zabbix.repo\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"清理并建立元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清理并建立元数据"}},[a._v("#")]),a._v(" 清理并建立元数据")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum clean all\nyum makecache\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"安装zabbix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装zabbix"}},[a._v("#")]),a._v(" 安装zabbix")]),a._v(" "),s("h3",{attrs:{id:"安装服务端与客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装服务端与客户端"}},[a._v("#")]),a._v(" 安装服务端与客户端")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" zabbix-server-mysql zabbix-agent -y\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"安装软件管理器-不影响其他依赖环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装软件管理器-不影响其他依赖环境"}},[a._v("#")]),a._v(" 安装软件管理器-不影响其他依赖环境")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum -y "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" centos-release-scl -y\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"安装zabbix界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装zabbix界面"}},[a._v("#")]),a._v(" 安装zabbix界面")]),a._v(" "),s("h3",{attrs:{id:"修改源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改源"}},[a._v("#")]),a._v(" 修改源")]),a._v(" "),s("p",[a._v("编辑"),s("code",[a._v("/etc/yum.repos.d/zabbix.repo")]),a._v("文件，将enabled的值改为1后保存吗，具体如下：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("zabbix-frontend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Zabbix Official Repository frontend - "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$basearch")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("baseurl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://mirrors.aliyun.com/zabbix/zabbix/5.0/rhel/7/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$basearch")]),a._v("/frontend\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("enabled")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("gpgcheck")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("gpgkey")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("file:///etc/pki/rpm-gpg/RPM-GPG-KEY-ZABBIX-A14FE591\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h3",{attrs:{id:"开始安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[a._v("#")]),a._v(" 开始安装")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" zabbix-web-mysql-scl zabbix-apache-conf-scl -y\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[a._v("#")]),a._v(" 数据库")]),a._v(" "),s("h3",{attrs:{id:"安装mariadb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装mariadb"}},[a._v("#")]),a._v(" 安装mariadb")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mariadb-server -y\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"设置开机自启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置开机自启"}},[a._v("#")]),a._v(" 设置开机自启")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" --now mariadb\nsystemctl status mariadb\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"初始化数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化数据库"}},[a._v("#")]),a._v(" 初始化数据库")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql_secure_installation\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"添加用户与库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加用户与库"}},[a._v("#")]),a._v(" 添加用户与库")]),a._v(" "),s("p",[a._v("该操作需要登录数据库后执行")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("create database zabbix character "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" utf8 collate utf8_bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ncreate user zabbix@localhost identified by "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'123qwe!!!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ngrant all privileges on zabbix.* to zabbix@localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"刷新表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刷新表"}},[a._v("#")]),a._v(" 刷新表")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("flush privileges"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"命令导入数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令导入数据"}},[a._v("#")]),a._v(" 命令导入数据")]),a._v(" "),s("p",[a._v("检查该文件是否存在"),s("code",[a._v("/usr/share/doc/zabbix-server-mysql-5.0.28/create.sql.gz")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("zcat /usr/share/doc/zabbix-server-mysql-5.0.28/create.sql.gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" mysql -uzabbix -p zabbix\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[a._v("#")]),a._v(" 修改配置")]),a._v(" "),s("h3",{attrs:{id:"zabbix配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zabbix配置"}},[a._v("#")]),a._v(" zabbix配置")]),a._v(" "),s("p",[a._v("编辑"),s("code",[a._v("/etc/zabbix/zabbix_server.conf")]),a._v("修改端口、数据库连接密码等")]),a._v(" "),s("p",[a._v("核对数据 "),s("code",[a._v("grep '^DBPa' /etc/zabbix/zabbix_server.conf")])]),a._v(" "),s("h3",{attrs:{id:"php配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php配置"}},[a._v("#")]),a._v(" php配置")]),a._v(" "),s("p",[a._v("编辑"),s("code",[a._v("/etc/opt/rh/rh-php72/php-fpm.d/zabbix.conf")])]),a._v(" "),s("h2",{attrs:{id:"启动zabbix服务设置开机自启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动zabbix服务设置开机自启"}},[a._v("#")]),a._v(" 启动zabbix服务设置开机自启")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("systemctl restart zabbix-server zabbix-agent httpd rh-php72-php-fpm\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" zabbix-server zabbix-agent httpd rh-php72-php-fpm\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("此时可以使用IP+zabbix访问WEB界面配配置，用户"),s("code",[a._v("Admin")]),a._v(" 密码"),s("code",[a._v("zabbix")])])])}),[],!1,null,null,null),s.default=e.exports}}]);