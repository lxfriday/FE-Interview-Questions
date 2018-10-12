# JS 操作 Cookie

## Cookie 的属性

## 获取 Cookie
`document.cookie` 获取 cookie ，返回一个字符换

```js
> document.cookie
> "_ga=GA1.2.1790324091.1533986835; Hm_lvt_3eec0b7da6548cf07db3bc477ea905ee=1539050137,1539083043,1539376158; Hm_lpvt_3eec0b7da6548cf07db3bc477ea905ee=1539376158; _gid=GA1.2.394049799.1539376158; _gat_gtag_UA_84264393_2=1"
```

解析

```js
function parseCookie(cookie) {
  return cookie.split('; ');
}

```

## 设置 Cookie

```js
var date = new Date();
date.setDate(date.getDate() + 7);
document.cookie = 'name=value; expires=' + date.toGMTString() + ';';
```

cookie 具有的属性
- name
- domain
- path
- expires
- httpOnly

## 删除 Cookie
将 cookie 的过期时间设置为当前时间之前即可

```js
function expiresCookie(name) {
  var date = new Date();
  date.setTime(0);
  documen.cookie = name + '=;expires=' + date.toGMTString();
}

```
