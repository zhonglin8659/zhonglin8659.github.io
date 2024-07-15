---
title: Vue请求
date: 2022-12-21
tags:
 - Javascript
 - Vue
categories:
 - 笔记
---

## Vue封装axios

### 新建请求工具方法

#### 在src下新建utils目录

![image-20221221144842648](https://sugarys.oss-cn-beijing.aliyuncs.com/document/vue/image-20221221144842648.png)

#### 在utils下新建request.js

![image-20221221144944464](https://sugarys.oss-cn-beijing.aliyuncs.com/document/vue/image-20221221144944464.png)

#### request.js内容

```js
import axios from 'axios'
const request = axios.create({
  baseURL: 'http://127.0.0.1:8090'
})
export default request
```

### 新建请求接口方法

#### 在src下新建api目录

![image-20221221145244449](https://sugarys.oss-cn-beijing.aliyuncs.com/document/vue/image-20221221145244449.png)

#### 在api下新建api.js

![image-20221221145257408](https://sugarys.oss-cn-beijing.aliyuncs.com/document/vue/image-20221221145257408.png)

#### api.js内容

```js
import request from '@/utils/request.js'
export const getUser = function () {
  return request.get('/data')
}
```

### 调用请求

#### vue中引入封装的方法

```js
import { getUser } from "@/api/api.js";
```

#### methods中调用

```js
async settCartList() {
      await getUser().then((res) => {
        this.drawingDataUrl = res.data.cadUrl;
      });
    },
```

### 异步请求问题解决方案-3个方案

#### 1、使用方法回调

`调用：`

```js
let _this = this;
  this.settCartList(function (result) {
   _this.$nextTick(() => {
    _this.addCad(_this.drawingDataUrl);
   });
  });
```

`方法：`

```js
async settCartList(callback) {
      await getUser().then((res) => {
        this.drawingDataUrl = res.data.cadUrl;
      });
      callback(this.drawingDataUrl);
    },
```

#### 2、使用setTimeout定时器

`调用：`

```js
setTimeout(() => {
      this.addCad(this.drawingDataUrl);
    }, 100);
```

`方法：`

```js
async settCartList() {
      await getUser().then((res) => {
        this.drawingDataUrl = res.data.cadUrl;
      });
    },
```

#### 3、使用watch侦听数据

`调用：`

```js
watch: {
    drawingDataUrl() {
      this.$nextTick(() => {
        this.addCad(this.drawingDataUrl);
      });
    },
  },
```

`方法：`

```js
async settCartList() {
      await getUser().then((res) => {
        this.drawingDataUrl = res.data.cadUrl;
      });
    },
```