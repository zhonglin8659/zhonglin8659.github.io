(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{554:function(e,a,s){"use strict";s.r(a),s=s(4),s=Object(s.a)({},(function(){var e=this,a=e.$createElement;return(a=e._self._c||a)("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"keepalived简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalived简介"}},[e._v("#")]),e._v(" Keepalived简介")]),e._v(" "),a("p",[e._v("Keepalived 是使用C语言编写的 "),a("code",[e._v("路由热备软件")]),e._v(" ，该项目软件起初是专门为LVS负载均衡设计的，用来管理并监控LVS集群系统中各个服务节点的状态，后来又加入了可以实现高可用的 "),a("code",[e._v("VRRP")]),e._v(" 功能。因此，Keepalived除了能够管理LVS软件外，还可以作为其他服务（例如："),a("code",[e._v("Nginx")]),e._v("，"),a("code",[e._v("Haproxy")]),e._v("，"),a("code",[e._v("MySQL")]),e._v("等）的高可用解决方案")]),e._v(" "),a("p",[e._v("Keepalived 主要是通过 "),a("code",[e._v("VRRP")]),e._v(" 协议实现高可用功能的。VRRP是 "),a("code",[e._v("Virtual Router Redundancy Protocol")]),e._v(" （"),a("code",[e._v("虚拟路由器冗余协议")]),e._v("）的缩写， "),a("code",[e._v("VRRP")]),e._v(" 出现的目的就是为了解决静态路由单点故障问题的，它能够保证当个别节点宕机时，整个网络可以不间断地运行")]),e._v(" "),a("p",[e._v("所以，Keepalived一方面具有配置管理LVS的功能，同时还具有对LVS下面节点进行健康检查的功能，另一方面也可实现系统网络服务的高可用功能")]),e._v(" "),a("h2",{attrs:{id:"keepalived工作原理图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalived工作原理图"}},[e._v("#")]),e._v(" Keepalived工作原理图")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240111175313989.png",alt:"image-20240111175313989"}})]),e._v(" "),a("p",[a("strong",[e._v("Keepalived 高可用之间是通过VRRP通信的，因此我从VRRP开始讲起：")])]),e._v(" "),a("ol",[a("li",[e._v("VRRP，也就是虚拟路由冗余协议，它的出现就是为了解决静态路由的单点故障")]),e._v(" "),a("li",[e._v("VRRP是通过一种竞选协议机制将路由任务交给某台VRRP路由器")]),e._v(" "),a("li",[e._v("VRRP用 IP多播的方式（默认多播地址（224.0_0.18))实现高可用对 之间通信")]),e._v(" "),a("li",[e._v("工作时主节点发包，备节点接包，当备节点接收不到主节点发的数据包时，就启动接管程序接管主节点的资源。备节点可以有多个，通过优先级竞选，但一般Keepalived系统工作中都是一对")]),e._v(" "),a("li",[e._v("VRRP使用了加密协议加密数据，但Keepalived官方目前还是推荐用明文的方式配置认证类型和密码")])]),e._v(" "),a("p",[a("strong",[e._v("介绍完 VRRP，接下来介绍一下 Keepalived服务的工作原理：")])]),e._v(" "),a("ol",[a("li",[e._v("Keepalived高可用之间是通过VRRP进行通信的，VRRP是通过竞选机制来确定主备的，主的优先级高于备，因此，工作时主会优先获得所有的资源，备节点处于等待状态，当主挂了的时候，备节点就会接管主节点的资源，然后顶替主节点对外提供服务")]),e._v(" "),a("li",[e._v("在Keepalived服务之间，只有作为主的服务器会一直发送VRRP广播包，告诉备它还活着，此时备不会抢占主，当主不可用时，即备监听不到主发送的广播包时，就会启动相关服务接管资源，保证业务的连续性。接管速度最快可以小于1秒")])]),e._v(" "),a("h2",{attrs:{id:"keepalived服务作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalived服务作用"}},[e._v("#")]),e._v(" Keepalived服务作用")]),e._v(" "),a("p",[a("strong",[e._v("（1）管理 VIP")])]),e._v(" "),a("p",[e._v("VIP即对外提供服务的浮动IP， 会在LVS之间漂移")]),e._v(" "),a("p",[a("strong",[e._v("（2）监控LVS分发器")])]),e._v(" "),a("p",[e._v("运行在主分发器的 Keepalived 会以组播的形式向网络中宣告自己，即主分发器还活着，备用节点能收到。当备用节点，在一个时间单位中收不到组播，备用节点会认为主 LVS 挂了，开始接手主分发器工作，把 VIP 分配给自己")]),e._v(" "),a("p",[a("strong",[e._v("（3）管理RS")])]),e._v(" "),a("p",[e._v("RealServer。即真正为用户提供服务的服务器。比如：web、mail、FTP服务等")]),e._v(" "),a("p",[e._v("Keepalived 会每隔一个时间段去做一次类似于访问的操作")]),e._v(" "),a("h2",{attrs:{id:"安装keepalived服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装keepalived服务"}},[e._v("#")]),e._v(" 安装Keepalived服务")]),e._v(" "),a("blockquote",[a("p",[e._v("yum方式安装")])]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" keepalived\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("blockquote",[a("p",[e._v("源码安装")])]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" gcc openssl-devel libnfnetlink-devel\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://www.keepalived.org/software/keepalived-1.4.5.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -zxvf keepalived-1.4.5.tar.gz -C /usr/src\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /usr/src/keepalived-1.4.5/\n./configure "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" -j4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h2",{attrs:{id:"keepalived配置文件解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalived配置文件解析"}},[e._v("#")]),e._v(" keepalived配置文件解析")]),e._v(" "),a("blockquote",[a("p",[e._v("Keepalived 主配置文件的名称为：")])]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("/etc/keepalived/keepalived.conf\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("blockquote",[a("p",[e._v("一个功能比较完整的常用的 keepalived 配置文件，主要包含以下三块：")])]),e._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("! Configuration File for keepalived\n#全局定义块\nglobal_defs {\n   ...\n}\n\n#VRRP 实例定义块\nvrrp_instance VI_1 {\n   ...\n}\n\n#虚拟服务器定义块\nvirtual_server 10.10.10.2 1358 {\n   ...\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("blockquote",[a("p",[e._v("注意：全局定义块是必须配置项；如果Keepalived只用来做HA，则虚拟服务器是可选配置。下面详细介绍Keepalived配置文件：")])]),e._v(" "),a("h3",{attrs:{id:"全局定义块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局定义块"}},[e._v("#")]),e._v(" 全局定义块")]),e._v(" "),a("blockquote",[a("p",[e._v("这部分主要用来设置Keepalived的故障通知机制和Router ID标识。示例代码如下：")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240111175934532.png",alt:"image-20240111175934532"}})]),e._v(" "),a("blockquote",[a("p",[e._v("参数说明：")])]),e._v(" "),a("ol",[a("li",[e._v("第一行是注释")]),e._v(" "),a("li",[e._v("第4~7行："),a("code",[e._v("email")]),e._v(" 通知，服务有故障时发送邮件报警。建议使用第三方独立监控服务，如使用 "),a("code",[e._v("nagios")]),e._v(" 监控代替")]),e._v(" "),a("li",[e._v("第9行：指定发件人")]),e._v(" "),a("li",[e._v("第10行：指定发送邮件的smtp服务器地址")]),e._v(" "),a("li",[e._v("第11行：指定连接smtp的超时时间")]),e._v(" "),a("li",[e._v("第12行：用户标识本节点的名称，通常为主机名")])]),e._v(" "),a("h3",{attrs:{id:"vrrp-实例定义块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vrrp-实例定义块"}},[e._v("#")]),e._v(" VRRP 实例定义块")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240111180138458.png",alt:"image-20240111180138458"}})]),e._v(" "),a("blockquote",[a("p",[e._v("参数说明：")])]),e._v(" "),a("ol",[a("li",[e._v("第15行：定义一个vrrp_install实例，名称为VI_1")]),e._v(" "),a("li",[e._v("第16行：表示该实例的角色状态，有MASTER和BACKUP两种主备状态")]),e._v(" "),a("li",[e._v("第17行：对外提供服务的网络接口，如eth0，ens33")]),e._v(" "),a("li",[e._v("第18行：虚拟路由ID标识，主备服务器配置中相同实例的ID必须一致，否则将出现 "),a("code",[e._v("脑裂")]),e._v(" 问题")]),e._v(" "),a("li",[e._v("第19行：priority表示实例优先级。数字越大，优先级越高")]),e._v(" "),a("li",[e._v("第20行：advert_int为同步通知间隔。主备之间通信检查的时间间隔，默认为1秒")]),e._v(" "),a("li",[e._v("第21~24行：权限认证配置")]),e._v(" "),a("li",[e._v("第25~28行：虚拟IP地址；可以配置多个IP，每个IP占一行。这里的IP就是在工作中需要和域名绑定的IP，即可配置的高可用服务监听IP一致")])]),e._v(" "),a("h3",{attrs:{id:"虚拟服务器定义块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟服务器定义块"}},[e._v("#")]),e._v(" 虚拟服务器定义块")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240111180552572.png",alt:"image-20240111180552572"}})]),e._v(" "),a("blockquote",[a("p",[e._v("参数说明：")])]),e._v(" "),a("ol",[a("li",[e._v("virtual_server：定义一个虚拟服务器，这个IP是virtual_address中定义的其中一个。语法格式：IP+空格+服务端口")]),e._v(" "),a("li",[e._v("第56行：delay_loop 6 健康检查时间间隔，单位：秒")]),e._v(" "),a("li",[e._v("第57行：lb_algo rr 负载均衡调度算法，互联网应用常用方式为 wlc或rr")]),e._v(" "),a("li",[e._v("第58行：lb_kind NAT 负载均衡转发规则。包括DR、NAT、TUN 3种，一般使用路由（DR）转发规则。")]),e._v(" "),a("li",[e._v("第59行：persistence_timeout 50 http服务会话保持时间，单位：秒")]),e._v(" "),a("li",[e._v("第60行：protocol TCP 转发协议，分为TCP和UDP两种")]),e._v(" "),a("li",[e._v("real_server：真实服务器IP和端口，可以定义多个")]),e._v(" "),a("li",[e._v("第65行：weight 1 负载权重，值越大，转发的优先级越高")]),e._v(" "),a("li",[e._v("第79行：connect_timeout 3 服务连接超时时长，单位：秒")]),e._v(" "),a("li",[e._v("第80行：nb_get_retry 3 服务连接失败重试次数")]),e._v(" "),a("li",[e._v("第81行：delay_before_retry 3 ：重试连接间隔，单位：秒")])]),e._v(" "),a("h2",{attrs:{id:"keepalived单实例主备模式实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalived单实例主备模式实战"}},[e._v("#")]),e._v(" Keepalived单实例主备模式实战")]),e._v(" "),a("blockquote",[a("p",[e._v("配置Keepalived实现单实例单IP自动漂移接管")])]),e._v(" "),a("h3",{attrs:{id:"准备两台机器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备两台机器"}},[e._v("#")]),e._v(" 准备两台机器")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("主机名")]),e._v(" "),a("th",[e._v("IP")]),e._v(" "),a("th",[e._v("说明")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("node1")]),e._v(" "),a("td",[e._v("192.168.1.192")]),e._v(" "),a("td",[e._v("keepalived主服务器")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("node2")]),e._v(" "),a("td",[e._v("192.168.1.193")]),e._v(" "),a("td",[e._v("keepalived备服务器")])])])]),e._v(" "),a("h3",{attrs:{id:"安装-keepalived软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-keepalived软件"}},[e._v("#")]),e._v(" 安装 Keepalived软件")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" keepalived\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("blockquote",[a("p",[e._v("需要在node1和node2两台服务器上同时安装Keepalived")])]),e._v(" "),a("h3",{attrs:{id:"修改keepalived配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改keepalived配置文件"}},[e._v("#")]),e._v(" 修改Keepalived配置文件")]),e._v(" "),a("p",[a("strong",[e._v("node1为MASTER主节点，配置文件如下：")])]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/keepalived/keepalived.conf\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240111181314667.png",alt:"image-20240111181314667"}})]),e._v(" "),a("blockquote",[a("p",[e._v("这里我们只注意一点：服务器node1 作为实例VI_1的master，实例ID为"),a("code",[e._v("60")]),e._v("，实例优先级"),a("code",[e._v("150")]),e._v("，浮动IP地址为 "),a("code",[e._v("192.168.1.198")])])]),e._v(" "),a("p",[a("strong",[e._v("node2为BACKUP备节点，配置文件如下：")])]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/keepalived/keepalived.conf\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/kubernetes/image-20240111181539196.png",alt:"image-20240111181539196"}})]),e._v(" "),a("blockquote",[a("p",[e._v("这里我们只注意一点：服务器node2 作为实例VI_1的master，实例ID为"),a("code",[e._v("60")]),e._v("，实例优先级"),a("code",[e._v("100")]),e._v("，浮动IP地址为 "),a("code",[e._v("192.168.1.198")])])]),e._v(" "),a("h3",{attrs:{id:"启动keepalived服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动keepalived服务"}},[e._v("#")]),e._v(" 启动Keepalived服务")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("systemctl start keepalived\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" keepalived\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("blockquote",[a("p",[e._v("注意：MASTER跟BACKUP节点都要启动Keepalived服务")])])])}),[],!1,null,null,null),a.default=s.exports}}]);