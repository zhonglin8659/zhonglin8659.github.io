(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{565:function(s,a,e){"use strict";e.r(a),e=e(4),e=Object(e.a)({},(function(){var s=this,a=s.$createElement;return(a=s._self._c||a)("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("此时我们有三台服务器，搭建集群或监控环境需要满足时间同步，我们可以通过chrony来实现时间同步")]),s._v(" "),a("p",[a("code",[s._v("主节点master IP：192.168.1.100")]),s._v(" "),a("code",[s._v("子节点node1 IP：192.168.1.101")]),s._v(" "),a("code",[s._v("子节点node2 IP：192.168.1.102")])]),s._v(" "),a("h2",{attrs:{id:"主节点部署chrony服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主节点部署chrony服务"}},[s._v("#")]),s._v(" 主节点部署chrony服务")]),s._v(" "),a("h3",{attrs:{id:"安装chrony"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装chrony"}},[s._v("#")]),s._v(" 安装chrony")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" chrony\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"查看chrony服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看chrony服务"}},[s._v("#")]),s._v(" 查看chrony服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl status chrony\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/timeservice/image-20231218201704608.png",alt:"image-20231218201704608"}})]),s._v(" "),a("h4",{attrs:{id:"检查本机的时区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查本机的时区"}},[s._v("#")]),s._v(" 检查本机的时区")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("timedatectl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/timeservice/image-20231218201902191.png",alt:"image-20231218201902191"}})]),s._v(" "),a("h4",{attrs:{id:"修改为本地区时区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改为本地区时区"}},[s._v("#")]),s._v(" 修改为本地区时区")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("timedatectl list-timezones "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" Shanghai\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/timeservice/image-20231218202044731.png",alt:"image-20231218202044731"}})]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("timedatectl set-timezone Asia/Shanghai\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"再次查看时区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再次查看时区"}},[s._v("#")]),s._v(" 再次查看时区")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("timedatectl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/timeservice/image-20231218202208288.png",alt:"image-20231218202208288"}})]),s._v(" "),a("h3",{attrs:{id:"配置chrony"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置chrony"}},[s._v("#")]),s._v(" 配置chrony")]),s._v(" "),a("h4",{attrs:{id:"编辑chrony配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑chrony配置文件"}},[s._v("#")]),s._v(" 编辑chrony配置文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/chrony/chrony.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"修改后的内容-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改后的内容-参考"}},[s._v("#")]),s._v(" 修改后的内容（参考）")]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#pool ntp.ubuntu.com        iburst maxsources 4\n#pool 0.ubuntu.pool.ntp.org iburst maxsources 1\n#pool 1.ubuntu.pool.ntp.org iburst maxsources 1\n#pool 2.ubuntu.pool.ntp.org iburst maxsources 2\nserver 192.168.1.100 iburst\nkeyfile /etc/chrony/chrony.keys\ndriftfile /var/lib/chrony/chrony.drift\nlogdir /var/log/chrony\nmaxupdateskew 100.0\nrtcsync\nmakestep 1 3\nallow 192.168.1.0/24\nlocal stratum 10\nbindaddress 192.168.1.100\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h4",{attrs:{id:"重启chrony服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启chrony服务"}},[s._v("#")]),s._v(" 重启chrony服务")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl restart chrony\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"子节点部署chrony服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子节点部署chrony服务"}},[s._v("#")]),s._v(" 子节点部署chrony服务")]),s._v(" "),a("h3",{attrs:{id:"安装chrony-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装chrony-2"}},[s._v("#")]),s._v(" 安装chrony")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" chrony\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"查看chrony服务-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看chrony服务-2"}},[s._v("#")]),s._v(" 查看chrony服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl status chrony\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/timeservice/image-20231218201704608.png",alt:"image-20231218201704608"}})]),s._v(" "),a("h4",{attrs:{id:"检查本机的时区-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查本机的时区-2"}},[s._v("#")]),s._v(" 检查本机的时区")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("timedatectl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/timeservice/image-20231218201902191.png",alt:"image-20231218201902191"}})]),s._v(" "),a("h4",{attrs:{id:"修改为本地区时区-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改为本地区时区-2"}},[s._v("#")]),s._v(" 修改为本地区时区")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("timedatectl list-timezones "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" Shanghai\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/timeservice/image-20231218202044731.png",alt:"image-20231218202044731"}})]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("timedatectl set-timezone Asia/Shanghai\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"再次查看时区-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#再次查看时区-2"}},[s._v("#")]),s._v(" 再次查看时区")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("timedatectl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/timeservice/image-20231218202208288.png",alt:"image-20231218202208288"}})]),s._v(" "),a("h3",{attrs:{id:"配置chrony-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置chrony-2"}},[s._v("#")]),s._v(" 配置chrony")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/chrony/chrony.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"修改后的内容-参考-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改后的内容-参考-2"}},[s._v("#")]),s._v(" 修改后的内容（参考）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#pool ntp.ubuntu.com        iburst maxsources 4\n#pool 0.ubuntu.pool.ntp.org iburst maxsources 1\n#pool 1.ubuntu.pool.ntp.org iburst maxsources 1\n#pool 2.ubuntu.pool.ntp.org iburst maxsources 2\nserver 192.168.1.100 iburst\nkeyfile /etc/chrony/chrony.keys\ndriftfile /var/lib/chrony/chrony.drift\nlogdir /var/log/chrony\nmaxupdateskew 100.0\nrtcsync\nmakestep 1 3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h4",{attrs:{id:"重启chrony服务-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启chrony服务-2"}},[s._v("#")]),s._v(" 重启chrony服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl restart chrony\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"检查能否连接时间服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查能否连接时间服务器"}},[s._v("#")]),s._v(" 检查能否连接时间服务器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("chronyc sources -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/timeservice/image-20231218210114457.png",alt:"image-20231218210114457"}})]),s._v(" "),a("h3",{attrs:{id:"chrony常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrony常用命令"}},[s._v("#")]),s._v(" chrony常用命令")]),s._v(" "),a("h4",{attrs:{id:"查看时间同步源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看时间同步源"}},[s._v("#")]),s._v(" 查看时间同步源")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("chronyc sources -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"查看时间同步源状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看时间同步源状态"}},[s._v("#")]),s._v(" 查看时间同步源状态")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("chronyc sourcestats -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"设置硬件时间默认为utc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置硬件时间默认为utc"}},[s._v("#")]),s._v(" 设置硬件时间默认为UTC")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("timedatectl set-local-rtc "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"启用ntp时间同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用ntp时间同步"}},[s._v("#")]),s._v(" 启用NTP时间同步")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("timedatectl set-ntp "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"校准时间服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校准时间服务器"}},[s._v("#")]),s._v(" 校准时间服务器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("chronyc tracking\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null),a.default=e.exports}}]);