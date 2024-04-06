import React from 'react';
import {Outlet} from "react-router-dom";

const About = () => {
    return (
        <div>
            <h2>关于我们，其实是四个人</h2>
            <ul>
                <li>刘备</li>
                <li>关羽</li>
                <li>张飞</li>
                <li>赵云</li>
            </ul>

            {/*通过子路由来对Hello进行映射 /about/hello*/}
            {/*<Routes>*/}
            {/*    <Route path={"hello"} element={<Hello/>}/>*/}
            {/*</Routes>*/}

            {/*
                Outlet 用来表示嵌套路由中的组件
                    当嵌套路由中的路径匹配成功了，Outlet则表示嵌套路由中的组件
                    当嵌套路由中的路径没有匹配成功，Outlet就什么都不是
            */}
            <Outlet/>
        </div>
    );
};

export default About;
