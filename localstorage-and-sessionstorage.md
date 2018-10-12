# localStorage、sessionStorage


## localStorage
每个浏览器对localstorage的支持大小是不一样的，chrome是5M ，IE10是1630K你可以用下面的js匿名函数测试不同浏览器对localstorage的支持大小

```js
(function() {
    if(!window.localStorage) {
        console.log('当前浏览器不支持localStorage!')
    }    
    var test = '0123456789';
    var add = function(num) {
        num += num;
        if(num.length == 10240) {
            test = num;
            return;
        }
        add(num);
    }
    add(test);
    var sum = test;
    var show = setInterval(function(){
        sum += test;
        try {
            window.localStorage.removeItem('test');
            window.localStorage.setItem('test', sum);
            console.log(sum.length / 1024 + 'KB');
        } catch(e) {
            alert(sum.length / 1024 + 'KB超出最大限制');
            clearInterval(show);
        }
    }, 0.1)
})()

```

## sessionStorage

只在当前窗口有效，窗口关闭（tab）之后失效，即使相同页面，不同窗口也不会共享数据


## sessionStorage、localStorage和cookie的区别 
共同点：都是保存在浏览器端、且同源的 
区别： 
- cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递，而sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下 
- 存储大小限制也不同，cookie数据不能超过**4K**，同时因为每次http请求都会携带cookie、所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大 
- 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭之前有效；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie：只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭 
- 作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localstorage在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的 
- web Storage支持事件通知机制，可以将数据更新的通知发送给监听者 
- web Storage的api接口使用更方便
