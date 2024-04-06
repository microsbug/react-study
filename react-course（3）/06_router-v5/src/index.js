import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

/*
*  HashRouter 会通过url地址中的hash值来对地址进行匹配
*
*   BrowserRouter 直接通过url地址进行组件的跳转
*       使用过程中和普通的url地址没有区别
*
* react router 可以将url地址和组件进行映射
*      当用户访问某个地址时，与其对应的组件会自动的挂载
*       当我们通过点击Link构建的链接进行跳转时，跳转并没有经过服务器，所以没有问题
*       但是当我们刷新页面，或通过普通链接进行跳转时，会向服务器发送请加载数据
*           这时的请求并没有经过react router 所以会返回404
*
* 解决方案：
*   1.使用HashRouter，服务器不会去判断hash值，
*       所以使用HashRouter后请求将会由React Router处理
*   2.修改服务器的配置，将所有请求都转发到index.html
*       location / {
            root   html;
            #index  index.html index.htm;
			try_files $uri /index.html;
        }
*
*
* react router 使用步骤
*       1. 引入react-router-dom包
*       2. 在index.js中引入BrowserRouter组件
*       3. 将BrowserRouter设置为根组件
*
* */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);

