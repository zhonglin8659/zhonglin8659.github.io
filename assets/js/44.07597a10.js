(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{566:function(s,a,e){"use strict";e.r(a),e=e(4),e=Object(e.a)({},(function(){var s=this,a=s.$createElement;return(a=s._self._c||a)("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"系统盘动态扩容后空间扩充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统盘动态扩容后空间扩充"}},[s._v("#")]),s._v(" 系统盘动态扩容后空间扩充")]),s._v(" "),a("p",[a("strong",[s._v("磁盘空间已经扩容，此时需要在系统中调整磁盘空间大小")])]),s._v(" "),a("h3",{attrs:{id:"查看系统分区及大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看系统分区及大小"}},[s._v("#")]),s._v(" 查看系统分区及大小")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" -l\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107165918351.png",alt:"image-20240107165918351"}})]),s._v(" "),a("blockquote",[a("p",[s._v("这里看到磁盘已经扩容至85.9G，实际挂载识别为39.7G")])]),s._v(" "),a("h3",{attrs:{id:"开始添加分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始添加分区"}},[s._v("#")]),s._v(" 开始添加分区")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" /dev/sda\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("进入磁盘fdisk (util-linux 2.23.2)工具")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107170444915.png",alt:"image-20240107170444915"}})]),s._v(" "),a("ol",[a("li",[a("p",[s._v("输入n表示增加分区")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107170828336.png",alt:"image-20240107170828336"}})])]),s._v(" "),a("li",[a("p",[s._v("输入p标识创建主分区")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107170847850.png",alt:"image-20240107170847850"}})])]),s._v(" "),a("li",[a("p",[s._v("输入分区号（默认）")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107171057597.png",alt:"image-20240107171057597"}})])]),s._v(" "),a("li",[a("p",[s._v("输入起始扇区、终止扇区（默认）")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107171125155.png",alt:"image-20240107171125155"}})])]),s._v(" "),a("li",[a("p",[s._v("输入w进行保存")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107171228979.png",alt:"image-20240107171228979"}})])])]),s._v(" "),a("h3",{attrs:{id:"修改新分区id为系统8e"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改新分区id为系统8e"}},[s._v("#")]),s._v(" 修改新分区ID为系统8E")]),s._v(" "),a("p",[a("strong",[s._v("通过上面的操纵，再次使用fdisk -l查看，可以看到新增加的分区/dev/sda3已经出现")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107171547486.png",alt:"image-20240107171547486"}})]),s._v(" "),a("blockquote",[a("p",[s._v("需要将红框处分区ID由83改成8E（LVM卷文件系统的ID）")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" /dev/sda\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",[a("li",[a("p",[s._v("输入t")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172107055.png",alt:"image-20240107172107055"}})])]),s._v(" "),a("li",[a("p",[s._v("输入前面步骤的分区号3")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172122604.png",alt:"image-20240107172122604"}})])]),s._v(" "),a("li",[a("p",[s._v("输入l")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172203443.png",alt:"image-20240107172203443"}})])]),s._v(" "),a("li",[a("p",[s._v("输入8e")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172218743.png",alt:"image-20240107172218743"}})])]),s._v(" "),a("li",[a("p",[s._v("输入w进行保存")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172232197.png",alt:"image-20240107172232197"}})])])]),s._v(" "),a("p",[s._v("修改后的信息如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172342075.png",alt:"image-20240107172342075"}})]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("重启系统 reboot，这一步非常关键切记")])])]),s._v(" "),a("h3",{attrs:{id:"开始扩充分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始扩充分区"}},[s._v("#")]),s._v(" 开始扩充分区")]),s._v(" "),a("blockquote",[a("p",[s._v("使用lvs显示逻辑卷分区信息")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("lvs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172716111.png",alt:"image-20240107172716111"}})]),s._v(" "),a("blockquote",[a("p",[s._v("显示卷组信息")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("vgdisplay\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107172853901.png",alt:"image-20240107172853901"}})]),s._v(" "),a("blockquote",[a("p",[s._v("将物理硬盘分区初始化为物理卷，以便被 LVM 使用")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pvcreate /dev/sda3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107173039214.png",alt:"image-20240107173039214"}})]),s._v(" "),a("blockquote",[a("p",[s._v("扩展卷组：centos 是执行vgdisplay后的VG name对应的值，根据个人情况修改")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("vgextend  centos /dev/sda3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107173241003.png",alt:"image-20240107173241003"}})]),s._v(" "),a("blockquote",[a("p",[s._v("再次显示卷组信息：可以看到Free PE从0变为40.00Gib，说明我们最多可以有 40GB 的扩充空间")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("vgdisplay\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107173334765.png",alt:"image-20240107173334765"}})]),s._v(" "),a("blockquote",[a("p",[s._v("扩充逻辑卷分区：centos/root 是根据第七部分一开头的lvs中显示的VG 和 LV内容进行的替换，根据个人情况修改")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("lvextend -L+39.9G /dev/centos/root /dev/sda3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107173625444.png",alt:"image-20240107173625444"}})]),s._v(" "),a("blockquote",[a("p",[s._v("重设逻辑卷大小")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("xfs_growfs /dev/centos/root\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107173752058.png",alt:"image-20240107173752058"}})]),s._v(" "),a("blockquote",[a("p",[s._v("再次查看磁盘空间")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240107173838790.png",alt:"image-20240107173838790"}})]),s._v(" "),a("p",[a("strong",[s._v("发现磁盘容量已经扩容完毕")])]),s._v(" "),a("h2",{attrs:{id:"添加其他数据盘后空间扩充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加其他数据盘后空间扩充"}},[s._v("#")]),s._v(" 添加其他数据盘后空间扩充")]),s._v(" "),a("p",[a("strong",[s._v("系统添加了一块32G的物理磁盘，此时需要在系统中初始化并挂载")])]),s._v(" "),a("h3",{attrs:{id:"查看系统新增磁盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看系统新增磁盘"}},[s._v("#")]),s._v(" 查看系统新增磁盘")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("lsblk -f\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110115317035.png",alt:"image-20240110115317035"}})]),s._v(" "),a("p",[a("code",[s._v("sdb")]),s._v("为新增的物理磁盘")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" -l\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110115516860.png",alt:"image-20240110115516860"}})]),s._v(" "),a("p",[a("code",[s._v("/dev/sdb")]),s._v("可以看到大小为32G")]),s._v(" "),a("h3",{attrs:{id:"开始添加分区-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始添加分区-2"}},[s._v("#")]),s._v(" 开始添加分区")]),s._v(" "),a("p",[s._v("我们使用系统自带的 "),a("code",[s._v("fdisk")]),s._v(" 工具来划分和管理磁盘，该工具只能处理2TB以下的磁盘，大于2TB请使用 "),a("code",[s._v("gdisk")]),s._v(" 工具")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" /dev/sdb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输入 "),a("code",[s._v("n")]),s._v(" 新建一个分区")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120115767.png",alt:"image-20240110120115767"}})]),s._v(" "),a("p",[s._v("输入 "),a("code",[s._v("p")]),s._v(" 表示新建一个主分区")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120212659.png",alt:"image-20240110120212659"}})]),s._v(" "),a("p",[s._v("输入 "),a("code",[s._v("1")]),s._v(" 默认分区号")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120249543.png",alt:"image-20240110120249543"}})]),s._v(" "),a("p",[s._v("起始扇区 终止扇区（默认）")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120413917.png",alt:"image-20240110120413917"}})]),s._v(" "),a("p",[s._v("输入 "),a("code",[s._v("w")]),s._v(" 保存")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120437713.png",alt:"image-20240110120437713"}})]),s._v(" "),a("blockquote",[a("p",[s._v("再次查看分区")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("lsblk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120622389.png",alt:"image-20240110120622389"}})]),s._v(" "),a("h3",{attrs:{id:"分区初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分区初始化"}},[s._v("#")]),s._v(" 分区初始化")]),s._v(" "),a("blockquote",[a("p",[s._v("这里将分区初始化为ext4格式")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkfs")]),s._v(" -t ext4 /dev/sdb1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110120916429.png",alt:"image-20240110120916429"}})]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("lsblk -f\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110121015944.png",alt:"image-20240110121015944"}})]),s._v(" "),a("p",[s._v("可以看到已经为 "),a("code",[s._v("sdb1")]),s._v(" 分配了 "),a("code",[s._v("UUID")])]),s._v(" "),a("h3",{attrs:{id:"挂载分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载分区"}},[s._v("#")]),s._v(" 挂载分区")]),s._v(" "),a("blockquote",[a("p",[s._v("命令挂载（临时挂载）")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("新建一个文件夹")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" newdisk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("使用mount挂载")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/sdb1 /newdisk/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("使用df -h查看挂载情况")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -h\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110124425887.png",alt:"image-20240110124425887"}})])]),s._v(" "),a("li",[a("p",[s._v("使用umount卸载")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" /newdisk/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("配置挂载（永久挂载）")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("获取分区UUID")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("lsblk -f\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110124742031.png",alt:"image-20240110124742031"}})])]),s._v(" "),a("li",[a("p",[s._v("编辑fstab文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110125120847.png",alt:"image-20240110125120847"}})]),s._v(" "),a("blockquote",[a("p",[s._v("第一个代表分区的UUID")]),s._v(" "),a("p",[s._v("第二个代表要将该分区挂载的哪个地方")]),s._v(" "),a("p",[s._v("第三个代表分区的类型，要与初始化时的类型保持一致")]),s._v(" "),a("p",[s._v("第四个代表是否执行dump、是否执行检测")])]),s._v(" "),a("p",[s._v("添加如下：")]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("UUID=2d56bcfe-fe61-48a6-96db-0761b044c0fe /newdisk                   ext4     defaults        0 0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("blockquote",[a("p",[s._v("重启系统")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://sugarys.oss-cn-beijing.aliyuncs.com/document/hardware/image-20240110130237131.png",alt:"image-20240110130237131"}})])])]),s._v(" "),a("blockquote",[a("p",[s._v("看到已经自动挂载成功")])])])}),[],!1,null,null,null),a.default=e.exports}}]);