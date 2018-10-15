# 知识基础

## 前端
- 前端性能问题如何排查
	- 减少 reflow、repaint 提升性能
	- 减少 DOM 操作，使用 documentFragment、div 操作好了之后再一次性添加到 DOM 中去
	- 减少页面的 http 请求，将CSS JS 图片等静态资源打包

## React
- 数据双向绑定
- 什么是 vdom
- react高阶函数
- React生命周期
- Component and PureComponent
- React事件系统
- React + Redux + webpack 配置
- Dva 架构
- ref 和 forwardRef

## 浏览器
- 浏览器从输入URL到页面渲染出来，所经历的过程
- 浏览器渲染流程
- 浏览器事件冒泡、事件捕捉、事件代理（e.stopPropagation、e.preventDefault）
	- 无法捕捉的事件有哪些
- xss和csrf
- dom和bom
- 浏览器几种存储类型的比较和各自的特点（LocalStorage,SessionStorage,IndexedDB）
- 浏览器 history API
- 浏览器 location API
- 浏览器 hash 相关的路由设计方法（对应SPA）
- 前端性能优化、调优方案
- https 相关详解
- canvas 基本使用
- XMLHttpRequest 的设计使用
- 跨域及 CORS 详解
- [x] [浏览器缓存（强缓存，对比缓存）](./http缓存.md)
- [x] [cookie](./cookie.md)

## CSS
- CSS 选择器优先级
- a 标签的多种状态
- CSS 媒体查询
- css盒子模型，边距重叠
- 清除浮动
- 浏览器中的各种长度单位(px、em、dp、rem、vmin)
- display: box,flex等
- CSS position 定位
- scrollTop、offsetTop、clientHeight 等代表的意思
- css 水平居中、垂直居中的多种常用方式
- calc（React 例子源码中用到了）
- CSS3 新增属性

## JS
- 作用域链、执行上下文、VO 的创建
- 动态类型语言 JS 和静态类型语言 C++ 等区别和优缺点
- requestAnimationFrame、animation（keyframes）
- JS 中的节流和防抖
- JS中的堆栈信息（堆栈的区别和常用的分配方式）
- JS 事件循环
- 高阶函数，函数柯里化
- JS 常用的设计模式
- JS 中的类型转换（null == undefined）
	- [x] [ToPrimitive 类型转换](./toprimitive.md)
- 对 URL 进行解析
- 服务端渲染
	- React 服务端渲染方案
	- Vue 服务端渲染方案
- [x] 模块系统(commonJS、AMD、CMD)
- [x] JS中的 Error 类型，以及 Error 的三个属性
- [x] [浮点数相加不准确](./浮点数相加不准确.md)
- [x] constructor 中 super 的作用
- [x] new、apply、bind、call 的模拟实现
- [x] 介绍原型链
- [x] 介绍继承
- [x] [Promise（源码解析和常考点）](./promise.md)
- [x] [JS 中异步编程的几种形式](./js中的异步编程.md)

## PS
- PNG、GIF、JPG 的区别和各自的概念

## NodeJs
- 原生搭建基本的后端服务器
- [x] [require 路径寻找的流程、原理](http://www.ruanyifeng.com/blog/2015/05/require.html)
- [x] [EventEmitter 模拟实现（完整版）]()

## 小程序
- [x] [小程序相关](./小程序相关.md)

## 算法
- 排序算法及优化算法
- 二叉树的三种遍历及互推，使用代码实现
- 二叉堆以及堆排序算法及其相关 [JS数据结构](http://caibaojian.com/learn-javascript.html)
- avl、红黑树
- 字符串大小写的所有组合（排列组合如何设计算法）

## 网络
- TCP/IP
	- TCP 三次握手
- HTTP
	- [x] [HTTP 状态码](./HTTP状态码.md)
	- HTTPS 方法，PUT 和 POST 的区别
	- RESTFul API的设计
	- HTTPS 请求的连接过程
## Nginx

## 计算机网络
- [x] [进程线程及其区别](./进程线程.md)

## Webpack
- chunk 的切分原则
