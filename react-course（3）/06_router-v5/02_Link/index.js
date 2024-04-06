import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

/*
* react router 可以将url地址和组件进行映射
*      当用户访问某个地址时，与其对应的组件会自动的挂载
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

