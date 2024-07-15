(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{562:function(s,t,a){"use strict";a.r(t),a=a(4),a=Object(a.a)({},(function(){var s=this,t=s.$createElement;return(t=s._self._c||t)("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"systemctl服务方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#systemctl服务方式"}},[s._v("#")]),s._v(" systemctl服务方式")]),s._v(" "),t("p",[s._v("新建NGINX服务文件如下：")]),s._v(" "),t("p",[t("code",[s._v("vim /lib/systemd/system/nginx.service")])]),s._v(" "),t("p",[s._v("添加内容：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target \n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/sbin/nginx\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/sbin/nginx -s reload\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStop")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/sbin/nginx -s quit\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PrivateTmp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true \n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("保存后执行配置载入 "),t("code",[s._v("systemctl daemon-reload")])]),s._v(" "),t("blockquote",[t("p",[s._v("启动NGINX "),t("code",[s._v("systemctl start nginx.service")]),s._v("\n停止NGINX "),t("code",[s._v("systemctl stop nginx.service")]),s._v("\n自启NGINX "),t("code",[s._v("systemctl enable nginx.service")])])])])}),[],!1,null,null,null),t.default=a.exports}}]);