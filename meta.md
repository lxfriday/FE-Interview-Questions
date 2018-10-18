# Meta 标签详解
HTML `<meta>` 元素表示那些不能由其它 HTML 元相关元素 (`<base>`, `<link>`, `<script>`, `<style>` 或 `<title>`) 之一表示的任何元数据信息.

meta 属性在HTML中占据了很重要的位置。如：针对搜索引擎的SEO，文档的字符编码，设置刷新缓存等。
## 属性
### `charset`
此特性声明当前文档所使用的字符编码
```html
<meta charset="utf-8">
```

### `http-equiv`
meta 标签的 http-equiv 属性语法格式是：＜meta http-equiv="参数" content="参数变量值"＞

#### `X-UA-Compatible`
强制浏览器按照特定的版本标准进行渲染。但不支持IE7及以下版本
[X-UA-Compatible属性的解释](https://cnbin.github.io/blog/2016/02/03/x-ua-compatibleshu-xing-de-jie-shi/)

强制浏览器按照最新的标准去渲染，避免浏览器使用兼容模式渲染，要靠近 head 顶部放置
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

#### `Expires` (期限) 
可以用于设定网页的到期时间。一旦网页过期，必须到服务器上重新传输。 
```html
＜meta http-equiv="expires" content="Wed, 20 Jun 2007 22:33:00 GMT"＞  
```

#### `Refresh` (刷新) 
自动刷新并指向新页面。
```html
＜meta http-equiv="Refresh" content="2；URL=http://www.net.cn/"＞  
```
其中的2是指停留2秒钟后自动刷新到URL网址。 

#### `Set-Cookie` (cookie设定) 
如果网页过期，那么存盘的cookie将被删除。 
```html
＜meta http-equiv="Set-Cookie" content="cookievalue=xxx;expires=Wednesday, 20-Jun-2007 22:33:00 GMT； path=/"＞  
```
必须使用GMT的时间格式。 

#### `Window-target` (显示窗口的设定) 
强制页面在当前窗口以独立页面显示。 
```html
＜meta http-equiv="Window-target" content="_top"＞  
```
用来防止别人在框架里调用自己的页面。

#### `Content-Type` (显示字符集的设定) 
设定页面使用的字符集。
```html
＜meta http-equiv="Content-Type" content="text/html; charset=gb2312">
```

#### `keywords` 关键字,给搜索引擎用的 
```html
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
```

#### `description` 页面描述
```html
<meta http-equiv="description" content="This is my page">
```
### `name`
该属性定义文档级元数据的名称。如果以下其中一个属性设置了 `itemprop` , `http-equiv` or `charset` ，就不能在设置这个属性了。
- `author` 就是这个文档的作者名称，可以用自由的格式去定义
- `description` 其中包含页面内容的简短和精确的描述。 一些浏览器，如 Firefox 和 Opera ，将其用作书签页面的默认描述。
- `keywords` 包含与逗号分隔的页面内容相关的单词
- `referrer` 控制所有从该文档发出的 HTTP 请求中HTTP Referer 首部的内容
    - `<meta name="referrer">` content 属性可取的值：
    - `no-referrer` 不要发送 HTTP Referer 首部
    - `origin` 发送当前文档的 origin
    - `no-referrer-when-downgrade` 当目的地是先验安全的(https->https)则发送 origin 作为 referrer ，但是当目的地是较不安全的 (https->http)时则不发送 referrer 。这个是默认的行为
    - `origin-when-crossorigin` 在同源请求下，发送完整的URL (不含查询参数) ，其他情况下则仅发送当前文档的 origin
    - `unsafe-URL` 在同源请求下，发送完整的URL (不含查询参数)
另外还有一些非规范的属性
```html
<meta name="robots" content="index, follow">
```
- `robots` 
  - Values for the content of `<meta name="robots">`，partly
  - `index` Allows the robot to index the page
  - `noindex` Prevents the robot from indexing the page
  - `follow` Allows the robot to follow the links on the page
  - `nofollow` Prevents the robot from following the links on the page

#### viewport
它提供有关视口初始大小的提示，仅供移动设备使用
```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```
属性值

|Value|可能值|描述|
|:-:|:-:|:-:|
|width|一个正整数或者字符串 `device-width` |定义视口宽度|
|height|一个正整数或者字符串 `device-height` |定义视口高度|
|initial-scale|一个0.0 到10.0之间的正数	|定义设备宽度（纵向模式下的设备宽度或横向模式下的设备高度）与视口大小之间的缩放比率|
|maximum-scale|一个0.0 到10.0之间的正数|定义缩放的最大值；它必须大于或等于 minimum-scale 的值，不然会导致不确定的行为发生|
|minimum-scale|一个0.0 到10.0之间的正数|定义缩放的最小值；它必须小于或等于 maximum-scale 的值，不然会导致不确定的行为发生|
|user-scalable|一个布尔值（yes 或者no）|如果设置为 no，用户将不能放大或缩小网页。默认值为 yes|

## 参考
- [MDN \<meta\>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)
- [HTML5中meta属性的使用详解（实用性非常高）](https://www.cnblogs.com/chris-oil/p/6663609.html)
- [Meta http-equiv属性详解(转)](http://kinglyhum.iteye.com/blog/827807)
- [X-UA-Compatible属性的解释](https://cnbin.github.io/blog/2016/02/03/x-ua-compatibleshu-xing-de-jie-shi/)
